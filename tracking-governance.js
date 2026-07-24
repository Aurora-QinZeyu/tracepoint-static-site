(function initTrackingGovernance(root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.TrackingGovernance = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function createTrackingGovernance() {
  'use strict';

  const SCHEMA_VERSION = 'tracking-governance/v1';
  const IDENTIFIER_PATTERN = /^[a-z][a-z0-9]*(?:_[a-z0-9]+)*$/;
  const ACTION_MAX_LENGTH = 80;
  const FIELD_MAX_LENGTH = 64;
  const CANONICAL_TYPES = Object.freeze([
    'string',
    'integer',
    'number',
    'boolean',
    'datetime',
    'object',
    'array'
  ]);
  const DEFAULT_COMMON_ENVELOPE_FIELDS = Object.freeze([
    'business_type', 'theme', 'action', 'distinct_id', 'time', 'utc_time',
    'hrefUrl', 'device_id', 'sessionId', 'user_id', 'uniqueId', 'product',
    'app_version', 'device_type', 'user_version', 'device_link_id',
    'vip_status', 'is_visitor', 'source', 'plan', 'traceId', 'firstenterurl',
    'referrerurl', 'page', 'page_timestamp', 'page_url', 'refer_page',
    'refer_page_timestamp', 'refer_page_url', 'count', 'properties'
  ]);
  const TYPE_ALIASES = Object.freeze({
    str: 'string',
    text: 'string',
    varchar: 'string',
    char: 'string',
    int: 'integer',
    bigint: 'integer',
    long: 'integer',
    short: 'integer',
    float: 'number',
    double: 'number',
    decimal: 'number',
    numeric: 'number',
    bool: 'boolean',
    date: 'datetime',
    timestamp: 'datetime',
    objectid: 'string',
    json: 'object',
    map: 'object',
    list: 'array'
  });
  const SENSITIVITY_ALIASES = Object.freeze({
    p0: 'public',
    public: 'public',
    '公开': 'public',
    '公开数据': 'public',
    p1: 'internal',
    internal: 'internal',
    '内部': 'internal',
    '内部数据': 'internal',
    p2: 'confidential',
    confidential: 'confidential',
    '机密': 'confidential',
    '敏感': 'confidential',
    '敏感数据': 'confidential',
    p3: 'restricted',
    restricted: 'restricted',
    '严格受限': 'restricted',
    '严格受限数据': 'restricted',
    pii: 'restricted'
  });
  const LIFECYCLE_ALIASES = Object.freeze({
    draft: 'draft',
    '待确认': 'draft',
    '设计中': 'draft',
    developing: 'developing',
    '开发中': 'developing',
    active: 'active',
    online: 'active',
    '已上线': 'active',
    deprecated: 'deprecated',
    '已废弃': 'deprecated',
    '已停用': 'deprecated',
    archived: 'archived',
    '已归档': 'archived'
  });
  const ACTION_SUFFIXES = new Set([
    'click', 'tap', 'press', 'visit', 'view', 'show', 'expose', 'exposure',
    'impression', 'open', 'close', 'submit', 'send', 'receive', 'start',
    'begin', 'finish', 'complete', 'success', 'fail', 'failure', 'cancel',
    'select', 'change', 'switch', 'search', 'share', 'download', 'upload',
    'play', 'pause', 'login', 'logout', 'register', 'create', 'delete',
    'update', 'enter', 'leave', 'hover', 'scroll', 'generate', 'purchase',
    'pay', 'renew', 'subscribe', 'unsubscribe'
  ]);
  const PLACEHOLDER_PATTERN = /^(?:-|--|n\/?a|none|null|unknown|暂无|待补充|待确认|未知|无)$/i;
  const SENSITIVE_FIELD_PATTERN = /(?:^|_)(?:phone|mobile|email|mail|id_card|identity_card|passport|real_name|address|latitude|longitude|gps|idfa|imei|oaid|android_id|ip|birth|birthday)(?:_|$)/i;

  function isObject(value) {
    return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
  }

  function cloneValue(value, seen) {
    if (!value || typeof value !== 'object') return value;
    const visited = seen || new WeakMap();
    if (visited.has(value)) return visited.get(value);
    const copy = Array.isArray(value) ? [] : {};
    visited.set(value, copy);
    Object.keys(value).forEach(key => {
      copy[key] = cloneValue(value[key], visited);
    });
    return copy;
  }

  function asList(value) {
    if (value === undefined || value === null || value === '') return [];
    if (Array.isArray(value)) return value;
    if (value instanceof Set) return Array.from(value);
    return [value];
  }

  function text(value) {
    return String(value ?? '').trim();
  }

  function hasValue(value) {
    return value !== undefined && value !== null && text(value) !== '';
  }

  function pickDefined(sources, keys) {
    for (const source of sources) {
      if (!isObject(source)) continue;
      for (const key of keys) {
        if (source[key] !== undefined && source[key] !== null) return source[key];
      }
    }
    return undefined;
  }

  function toBooleanOrNull(value) {
    if (typeof value === 'boolean') return value;
    const normalized = text(value).toLowerCase();
    if (value === 1 || /^(?:1|true|yes|y|是|必填|必传)$/.test(normalized)) return true;
    if (value === 0 || /^(?:0|false|no|n|否|可选|非必填|非必传)$/.test(normalized)) return false;
    return null;
  }

  function stableUnique(values) {
    const seen = new Set();
    return asList(values).filter(value => {
      const key = `${typeof value}:${String(value)}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  function suggestIdentifier(value) {
    return text(value)
      .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
      .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
      .replace(/[^A-Za-z0-9]+/g, '_')
      .replace(/^_+|_+$/g, '')
      .replace(/_+/g, '_')
      .toLowerCase();
  }

  function normalizeType(value) {
    const raw = text(value);
    let token = raw.toLowerCase().replace(/\s+/g, '');
    let nullableHint = /(?:^|\|)(?:null)(?:\||$)/.test(token);
    let optionalHint = /(?:^|\|)(?:undefined)(?:\||$)/.test(token);
    if (/\[\]$/.test(token) || /^(?:array|list)</.test(token)) token = 'array';
    else if (/^(?:record|map)</.test(token) || /^\{.*\}$/.test(token)) token = 'object';
    else if (token.includes('|')) {
      const members = token.split('|').filter(member => member && member !== 'null' && member !== 'undefined');
      const primitiveMembers = stableUnique(members.map(member => TYPE_ALIASES[member] || member));
      if (primitiveMembers.length === 1) token = primitiveMembers[0];
      else if (primitiveMembers.length && primitiveMembers.every(member => /^['"].*['"]$/.test(member))) token = 'string';
      else token = 'mixed';
    }
    const canonical = TYPE_ALIASES[token] || token;
    return {
      raw,
      canonical: CANONICAL_TYPES.includes(canonical) ? canonical : '',
      supported: CANONICAL_TYPES.includes(canonical),
      changed: Boolean(raw) && canonical !== raw.toLowerCase(),
      nullableHint,
      optionalHint
    };
  }

  function normalizeSensitivity(value) {
    const raw = text(value);
    return {
      raw,
      canonical: SENSITIVITY_ALIASES[raw.toLowerCase()] || '',
      supported: Boolean(SENSITIVITY_ALIASES[raw.toLowerCase()])
    };
  }

  function normalizeLifecycle(value) {
    const raw = text(value);
    return {
      raw,
      canonical: LIFECYCLE_ALIASES[raw.toLowerCase()] || '',
      supported: Boolean(LIFECYCLE_ALIASES[raw.toLowerCase()])
    };
  }

  function createIssue(severity, code, path, message, suggestion, detail) {
    const issue = { severity, code, path, message };
    if (suggestion !== undefined && suggestion !== '') issue.suggestion = suggestion;
    if (detail !== undefined) issue.detail = cloneValue(detail);
    return issue;
  }

  function addIssue(issues, severity, code, path, message, suggestion, detail) {
    const fingerprint = `${severity}\u0000${code}\u0000${path}\u0000${message}`;
    if (issues.some(issue => issue._fingerprint === fingerprint)) return;
    const issue = createIssue(severity, code, path, message, suggestion, detail);
    Object.defineProperty(issue, '_fingerprint', { value: fingerprint, enumerable: false });
    issues.push(issue);
  }

  function issueCounts(issues) {
    return issues.reduce((counts, issue) => {
      counts[issue.severity] += 1;
      return counts;
    }, { error: 0, warning: 0, info: 0 });
  }

  function statusForIssues(issues) {
    const counts = issueCounts(issues);
    if (counts.error) return 'blocked';
    if (counts.warning) return 'needs_review';
    return 'ready';
  }

  function finalizeIssues(issues) {
    const counts = issueCounts(issues);
    return {
      valid: counts.error === 0,
      ready: counts.error === 0 && counts.warning === 0,
      status: statusForIssues(issues),
      issueCounts: counts,
      issues,
      errors: issues.filter(issue => issue.severity === 'error'),
      warnings: issues.filter(issue => issue.severity === 'warning'),
      info: issues.filter(issue => issue.severity === 'info')
    };
  }

  function buildCompleteness(entries) {
    const normalized = entries.map(entry => ({
      key: entry.key,
      required: entry.required !== false,
      present: Boolean(entry.present),
      inherited: Boolean(entry.inherited)
    }));
    const required = normalized.filter(entry => entry.required);
    const complete = required.filter(entry => entry.present);
    return {
      score: required.length ? Math.round((complete.length / required.length) * 100) : 100,
      present: normalized.filter(entry => entry.present).map(entry => entry.key),
      inherited: normalized.filter(entry => entry.present && entry.inherited).map(entry => entry.key),
      missing: required.filter(entry => !entry.present).map(entry => entry.key),
      recommendedMissing: normalized.filter(entry => entry.required === false && !entry.present).map(entry => entry.key)
    };
  }

  function validateIdentifier(rawValue, kind, path, issues) {
    const raw = text(rawValue);
    const canonical = suggestIdentifier(raw);
    const maxLength = kind === 'action' ? ACTION_MAX_LENGTH : FIELD_MAX_LENGTH;
    const label = kind === 'action' ? '事件 action' : '字段 key';
    if (!raw) {
      addIssue(issues, 'error', `${kind}-missing`, path, `${label} 不能为空`);
      return canonical;
    }
    if (raw.length > maxLength) {
      addIssue(issues, 'error', `${kind}-too-long`, path, `${label} 长度不应超过 ${maxLength} 个字符`, canonical.slice(0, maxLength));
    }
    if (!IDENTIFIER_PATTERN.test(raw)) {
      const message = /^[0-9]/.test(raw)
        ? `${label} 必须以小写字母开头并使用 snake_case`
        : `${label} 只能使用小写字母、数字和下划线（snake_case）`;
      addIssue(issues, 'error', `${kind}-invalid-format`, path, message, canonical);
    } else if (raw !== canonical) {
      addIssue(issues, 'warning', `${kind}-non-canonical`, path, `${label} 可进一步规范化`, canonical);
    }
    return canonical;
  }

  function isPlaceholder(value) {
    const normalized = text(value);
    return !normalized || PLACEHOLDER_PATTERN.test(normalized) || /^(?:待补充|待确认|暂未|具体).*(?:时机|说明|确认)?$/.test(normalized);
  }

  function resolveCommonEnvelopeFields(options) {
    const fromManifest = options?.manifest?.scope?.commonEnvelopeFields;
    const configured = options?.commonEnvelopeFields;
    const source = options?.replaceCommonEnvelopeFields
      ? asList(configured ?? fromManifest)
      : [...DEFAULT_COMMON_ENVELOPE_FIELDS, ...asList(fromManifest), ...asList(configured)];
    const aliases = new Set();
    source.forEach(name => {
      const raw = text(name);
      if (!raw) return;
      aliases.add(raw.toLowerCase());
      aliases.add(suggestIdentifier(raw));
    });
    return { fields: stableUnique(source.map(text).filter(Boolean)), aliases };
  }

  function isCommonEnvelopeField(name, options) {
    const common = resolveCommonEnvelopeFields(options || {});
    const raw = text(name);
    return common.aliases.has(raw.toLowerCase()) || common.aliases.has(suggestIdentifier(raw));
  }

  function eventMetadata(event) {
    const sources = [event?.governanceMetadata, event?.metadata, event?.governance, event];
    return {
      description: text(pickDefined(sources, ['description', 'label', 'eventDescription'])),
      trigger: text(pickDefined(sources, ['trigger', 'triggerTiming', 'reportTiming', 'rule', 'timing'])),
      owner: text(pickDefined(sources, ['owner', 'maintainer', 'responsibleOwner'])),
      source: text(pickDefined(sources, ['source', 'sourceSystem', 'origin'])),
      position: text(pickDefined(sources, ['position', 'reportPosition', 'location', 'screenPosition'])),
      sensitivity: text(pickDefined(sources, ['sensitivity', 'dataClassification', 'securityLevel'])),
      version: text(pickDefined(sources, ['version', 'schemaVersion', 'eventVersion'])),
      lifecycle: text(pickDefined(sources, ['lifecycle', 'status', 'state']))
    };
  }

  function findFieldMeta(event, fieldName) {
    if (!isObject(event?.fieldMeta)) return {};
    if (isObject(event.fieldMeta[fieldName])) return event.fieldMeta[fieldName];
    const target = text(fieldName).toLowerCase();
    const key = Object.keys(event.fieldMeta).find(name => text(name).toLowerCase() === target);
    return key && isObject(event.fieldMeta[key]) ? event.fieldMeta[key] : {};
  }

  function findFieldProposal(event, fieldName) {
    const fields = asList(event?.governanceProposal?.fields);
    const exact = fields.find(field => text(field?.wireRef || field?.name) === text(fieldName));
    return isObject(exact) ? exact : {};
  }

  function readField(field, options) {
    const tuple = Array.isArray(field);
    const direct = tuple ? {} : (isObject(field) ? field : {});
    const rawName = text(tuple ? field[0] : pickDefined([direct], ['name', 'key', 'fieldName']));
    const event = options?.event || {};
    const providedMeta = isObject(options?.fieldMeta) ? options.fieldMeta : {};
    const storedMeta = findFieldMeta(event, rawName);
    const proposalMeta = findFieldProposal(event, rawName);
    const sources = [direct, providedMeta, proposalMeta, storedMeta];
    const observedType = text((tuple ? field[1] : undefined) ?? pickDefined([direct, storedMeta], ['type', 'dataType']));
    const rawType = text(pickDefined([providedMeta, proposalMeta], ['type', 'dataType']) ?? observedType);
    const tupleDescription = tuple ? field[2] : undefined;
    const description = text(pickDefined([providedMeta, proposalMeta], ['description', 'label', 'comment']) ?? tupleDescription ?? pickDefined([direct, storedMeta], ['description', 'label', 'comment']));
    const enumValues = stableUnique(asList(pickDefined(sources, ['enum', 'allowedValues', 'options', 'values'])));
    const eventMeta = eventMetadata(event);
    const ownerValue = pickDefined(sources, ['owner', 'maintainer']);
    const sourceValue = pickDefined(sources, ['source', 'sourceSystem', 'origin']);
    const versionValue = pickDefined(sources, ['version', 'schemaVersion', 'fieldVersion']);
    const lifecycleValue = pickDefined(sources, ['lifecycle', 'status', 'state']);
    return {
      rawName,
      rawType,
      observedType,
      observedRequired: toBooleanOrNull(pickDefined([direct, storedMeta], ['required', 'isRequired'])),
      observedNullable: toBooleanOrNull(pickDefined([direct, storedMeta], ['nullable', 'isNullable', 'allowNull'])),
      proposed: Object.keys(proposalMeta).length > 0,
      description,
      required: toBooleanOrNull(pickDefined(sources, ['required', 'isRequired'])),
      nullable: toBooleanOrNull(pickDefined(sources, ['nullable', 'isNullable', 'allowNull'])),
      owner: text(ownerValue ?? eventMeta.owner),
      ownerInherited: !hasValue(ownerValue) && Boolean(eventMeta.owner),
      source: text(sourceValue ?? eventMeta.source),
      sourceInherited: !hasValue(sourceValue) && Boolean(eventMeta.source),
      sensitivity: text(pickDefined(sources, ['sensitivity', 'dataClassification', 'securityLevel'])),
      sample: pickDefined(sources, ['sample', 'example', 'sampleValue']),
      enumValues,
      version: text(versionValue ?? eventMeta.version),
      versionInherited: !hasValue(versionValue) && Boolean(eventMeta.version),
      lifecycle: text(lifecycleValue ?? eventMeta.lifecycle),
      lifecycleInherited: !hasValue(lifecycleValue) && Boolean(eventMeta.lifecycle),
      definitions: cloneValue(asList(pickDefined(sources, ['definitions']))),
      observedAt: cloneValue(asList(pickDefined(sources, ['observedAt']))),
      typeExpressions: cloneValue(asList(pickDefined(sources, ['typeExpressions']))),
      tuple
    };
  }

  function sampleMatchesType(sample, canonicalType) {
    if (sample === undefined || sample === null || !canonicalType) return true;
    if (canonicalType === 'string' || canonicalType === 'datetime') return typeof sample === 'string';
    if (canonicalType === 'integer') return typeof sample === 'number' && Number.isInteger(sample);
    if (canonicalType === 'number') return typeof sample === 'number' && Number.isFinite(sample);
    if (canonicalType === 'boolean') return typeof sample === 'boolean';
    if (canonicalType === 'array') return Array.isArray(sample);
    if (canonicalType === 'object') return isObject(sample);
    return true;
  }

  function finalizeFieldValidation(index, raw, canonicalKey, typeInfo, commonEnvelope, issues) {
    const completeness = buildCompleteness([
      { key: 'key', present: raw.rawName },
      { key: 'type', present: typeInfo.supported },
      { key: 'required', present: raw.required !== null },
      { key: 'nullable', present: raw.nullable !== null },
      { key: 'description', present: !isPlaceholder(raw.description) && !/^\s*前端类型定义[：:]/.test(raw.description) },
      { key: 'owner', present: raw.owner, inherited: raw.ownerInherited },
      { key: 'source', present: raw.source, inherited: raw.sourceInherited },
      { key: 'sensitivity', present: normalizeSensitivity(raw.sensitivity).supported, required: false },
      { key: 'version', present: raw.version, inherited: raw.versionInherited, required: false },
      { key: 'lifecycle', present: raw.lifecycle, inherited: raw.lifecycleInherited },
      { key: 'sample', present: raw.sample !== undefined && raw.sample !== null && raw.sample !== '', required: false },
      { key: 'enum', present: raw.enumValues.length, required: /\benum\b/i.test(raw.rawType) }
    ]);
    const finalized = finalizeIssues(issues);
    return {
      ...finalized,
      kind: 'field',
      index,
      raw: cloneValue(raw),
      canonical: {
        key: canonicalKey,
        type: typeInfo.canonical,
        required: raw.required,
        nullable: raw.nullable,
        sensitivity: normalizeSensitivity(raw.sensitivity).canonical,
        enum: cloneValue(raw.enumValues)
      },
      commonEnvelope,
      completeness
    };
  }

  function validateField(field, options) {
    const config = options || {};
    const index = Number.isInteger(config.index) ? config.index : 0;
    const path = config.path || `fields[${index}]`;
    const issues = [];
    const raw = readField(field, config);
    const commonEnvelope = isCommonEnvelopeField(raw.rawName, config);
    const canonicalKey = commonEnvelope
      ? suggestIdentifier(raw.rawName)
      : validateIdentifier(raw.rawName, 'field', `${path}.key`, issues);
    const typeInfo = normalizeType(raw.rawType);
    const observedTypeInfo = normalizeType(raw.observedType);

    if (commonEnvelope) {
      addIssue(issues, config.mode === 'submission' ? 'error' : 'info', 'field-common-envelope', `${path}.key`, '该字段属于公共上报信封，应引用公共字段契约，不在事件业务属性中重复定义');
      return finalizeFieldValidation(index, raw, canonicalKey, typeInfo, commonEnvelope, issues);
    }

    if (!raw.rawType || /^(?:unknown|mixed|any|undefined|null|未定义)$/i.test(raw.rawType)) {
      addIssue(issues, 'error', 'field-type-missing', `${path}.type`, '字段必须声明明确的数据类型', typeInfo.canonical || undefined);
    } else if (!typeInfo.supported) {
      addIssue(issues, 'error', 'field-type-unsupported', `${path}.type`, `不支持的字段类型“${raw.rawType}”`, CANONICAL_TYPES.join(' | '));
    } else if (typeInfo.changed) {
      addIssue(issues, 'warning', 'field-type-alias', `${path}.type`, '字段类型应使用统一类型字典', typeInfo.canonical);
    }
    if (raw.proposed && observedTypeInfo.supported && typeInfo.supported && observedTypeInfo.canonical !== typeInfo.canonical) {
      addIssue(issues, 'error', 'field-proposal-type-conflict', `${path}.type`, `治理方案类型 ${typeInfo.canonical} 与代码证据 ${observedTypeInfo.canonical} 不一致，需完成开发迁移后再批准`);
    }
    if (raw.required === null) {
      addIssue(issues, 'warning', 'field-required-missing', `${path}.required`, '请明确字段是否必传，不使用“默认可选”代替契约');
    }
    if (raw.nullable === null) {
      addIssue(issues, 'warning', 'field-nullable-missing', `${path}.nullable`, '请区分“不传该 key”和“key 值为 null”');
    }
    if (raw.proposed && raw.observedRequired !== null && raw.required !== null && raw.observedRequired !== raw.required) {
      addIssue(issues, 'error', 'field-proposal-required-conflict', `${path}.required`, '治理方案 required 与代码证据不一致，需同步实现');
    }
    if (raw.proposed && raw.observedNullable !== null && raw.nullable !== null && raw.observedNullable !== raw.nullable) {
      addIssue(issues, 'error', 'field-proposal-nullable-conflict', `${path}.nullable`, '治理方案 nullable 与代码证据不一致，需同步实现');
    }
    if (typeInfo.nullableHint && raw.nullable !== true) {
      addIssue(issues, 'warning', 'field-nullable-conflict', `${path}.nullable`, '代码类型允许 null，但 nullable 契约未标记为 true', true);
    }
    if (typeInfo.optionalHint && raw.required === true) {
      addIssue(issues, 'warning', 'field-required-conflict', `${path}.required`, '代码类型允许 undefined，但 required 契约标记为 true', false);
    }
    if (isPlaceholder(raw.description) || /^\s*前端类型定义[：:]/.test(raw.description)) {
      addIssue(issues, 'warning', 'field-description-missing', `${path}.description`, '字段说明应描述业务含义，不应只重复类型');
    }
    if (raw.sample === undefined || raw.sample === null || raw.sample === '') {
      addIssue(issues, 'info', 'field-sample-missing', `${path}.sample`, '建议提供一个合法样例值，便于开发与测试对齐');
    } else if (!sampleMatchesType(raw.sample, typeInfo.canonical)) {
      addIssue(issues, 'warning', 'field-sample-type-mismatch', `${path}.sample`, '样例值与字段类型不一致', typeInfo.canonical);
    }
    if (raw.enumValues.length) {
      if (!['string', 'integer', 'number', 'boolean'].includes(typeInfo.canonical)) {
        addIssue(issues, 'warning', 'field-enum-type-mismatch', `${path}.enum`, '枚举值应用于标量类型字段');
      }
      if (raw.enumValues.some(value => !sampleMatchesType(value, typeInfo.canonical))) {
        addIssue(issues, 'warning', 'field-enum-value-type-mismatch', `${path}.enum`, '枚举值的类型必须与字段类型一致');
      }
    } else if (/\benum\b/i.test(raw.rawType) || /(?:枚举|可选值|\s\/\s)/.test(raw.description)) {
      addIssue(issues, 'warning', 'field-enum-missing', `${path}.enum`, '字段看起来是枚举，请给出完整、有限且互斥的可选值');
    }
    return finalizeFieldValidation(index, raw, canonicalKey, typeInfo, commonEnvelope, issues);
  }

  function validateActionSemantics(action, issues, inventoryMode) {
    if (!IDENTIFIER_PATTERN.test(action)) return;
    const tokens = action.split('_');
    if (tokens.length < 2) {
      addIssue(issues, 'info', 'action-semantic-shape', 'action', '新事件建议使用“业务对象_用户动作”结构，例如 filter_click', '<object>_<action>');
      return;
    }
    if (ACTION_SUFFIXES.has(tokens[0]) && !ACTION_SUFFIXES.has(tokens[tokens.length - 1])) {
      addIssue(issues, inventoryMode ? 'info' : 'warning', 'action-verb-first', 'action', '事件 action 建议将动作放在末尾，保持“业务对象_用户动作”语义', '<object>_<action>');
    } else if (!ACTION_SUFFIXES.has(tokens[tokens.length - 1])) {
      addIssue(issues, 'info', 'action-verb-unrecognized', 'action', '未识别出统一动作后缀，请确认 action 是否能清楚表达可观测的用户或系统行为', '<object>_<action>');
    }
  }

  function validateEvent(event, options) {
    const config = options || {};
    const inventoryMode = config.mode === 'inventory';
    const source = isObject(event) ? event : {};
    const issues = [];
    const rawAction = text(pickDefined([source], ['name', 'action', 'eventName']));
    const canonicalAction = validateIdentifier(rawAction, 'action', 'action', issues);
    validateActionSemantics(rawAction, issues, inventoryMode);
    const metadata = eventMetadata(source);
    const sensitivity = normalizeSensitivity(metadata.sensitivity);
    const lifecycle = normalizeLifecycle(metadata.lifecycle);

    if (isPlaceholder(metadata.description) || metadata.description === rawAction) {
      addIssue(issues, 'warning', 'event-description-missing', 'metadata.description', '事件说明应表达“谁在什么场景做了什么”，不应只重复 action');
    }
    if (!inventoryMode && !metadata.owner) {
      addIssue(issues, 'warning', 'event-owner-missing', 'metadata.owner', '请指定可联系的业务负责人或负责团队');
    }
    if (!metadata.source) {
      addIssue(issues, 'warning', 'event-source-missing', 'metadata.source', '请标记需求/PRD/代码仓库等来源');
    }
    if (!metadata.position) {
      addIssue(issues, 'info', 'event-position-missing', 'metadata.position', '建议标记页面、模块或组件位置，便于位置追溯');
    }
    if (!metadata.version) {
      addIssue(issues, 'info', 'event-version-missing', 'metadata.version', '建议从 1.0.0 开始维护事件契约版本，破坏性变更升级主版本', '1.0.0');
    } else if (!/^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/.test(metadata.version)) {
      addIssue(issues, 'warning', 'event-version-invalid', 'metadata.version', '事件版本应使用 SemVer，例如 1.0.0', '1.0.0');
    }
    if (!metadata.lifecycle) {
      addIssue(issues, 'warning', 'event-lifecycle-missing', 'metadata.lifecycle', '请标记事件生命周期：draft / developing / active / deprecated / archived');
    } else if (!lifecycle.supported) {
      addIssue(issues, 'warning', 'event-lifecycle-unsupported', 'metadata.lifecycle', '生命周期状态不在统一字典中', 'draft | developing | active | deprecated | archived');
    }
    const codeEvidence = isObject(source.codeEvidence) ? source.codeEvidence : {};
    if (asList(codeEvidence.namespaces).length > 1) {
      addIssue(issues, 'warning', 'event-contract-variants', 'codeEvidence.namespaces', '同一 raw action 存在多个代码通道契约，请分别审核字段差异', undefined, { namespaces: cloneValue(codeEvidence.namespaces) });
    }
    if (codeEvidence.deprecated && Number(codeEvidence.callSiteCount || 0) > 0) {
      addIssue(issues, 'warning', 'event-deprecated-still-called', 'codeEvidence.deprecated', '代码已标记 deprecated，但仍发现直接调用，不能直接视为已下线');
    } else if (codeEvidence.deprecated) {
      addIssue(issues, 'info', 'event-deprecated-in-code', 'codeEvidence.deprecated', '代码已标记 deprecated，需确认下线与数据保留计划');
    }
    if (codeEvidence.usage === 'defined-only') {
      addIssue(issues, 'info', 'event-defined-only', 'codeEvidence.usage', '代码中有定义但未发现直接调用，请确认是否尚未接入或已闲置');
    }

    const fieldInputs = Array.isArray(source.fields) ? source.fields : [];
    const fieldResults = fieldInputs.map((field, index) => validateField(field, {
      ...config,
      event: source,
      index,
      path: `fields[${index}]`
    }));
    fieldResults.forEach(result => result.issues.forEach(issue => issues.push(cloneValue(issue))));
    const businessFields = fieldResults.filter(result => !result.commonEnvelope);
    const commonEnvelopeFields = fieldResults.filter(result => result.commonEnvelope);

    const exactNames = new Map();
    const canonicalNames = new Map();
    businessFields.forEach(result => {
      const exact = result.raw.rawName.toLowerCase();
      const canonical = result.canonical.key;
      if (exact && exactNames.has(exact)) {
        addIssue(issues, 'error', 'field-duplicate', `fields[${result.index}].key`, `字段“${result.raw.rawName}”在同一事件中重复`, undefined, { firstIndex: exactNames.get(exact) });
      } else if (exact) {
        exactNames.set(exact, result.index);
      }
      if (canonical && canonicalNames.has(canonical) && exactNames.get(exact) !== canonicalNames.get(canonical)) {
        addIssue(issues, 'error', 'field-canonical-collision', `fields[${result.index}].key`, `字段规范化后与其他字段同为“${canonical}”`, canonical, { firstIndex: canonicalNames.get(canonical) });
      } else if (canonical) {
        canonicalNames.set(canonical, result.index);
      }
    });

    const completeness = buildCompleteness([
      { key: 'action', present: rawAction },
      { key: 'description', present: !isPlaceholder(metadata.description) && metadata.description !== rawAction },
      { key: 'trigger', present: !isPlaceholder(metadata.trigger) && !/待确认/.test(metadata.trigger), required: false },
      { key: 'owner', present: metadata.owner, required: !inventoryMode },
      { key: 'source', present: metadata.source },
      { key: 'position', present: metadata.position, required: false },
      { key: 'sensitivity', present: sensitivity.supported, required: false },
      { key: 'version', present: /^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/.test(metadata.version), required: false },
      { key: 'lifecycle', present: lifecycle.supported }
    ]);
    const finalized = finalizeIssues(issues);
    return {
      ...finalized,
      kind: 'event',
      raw: {
        action: rawAction,
        metadata: cloneValue(metadata),
        fieldCount: fieldResults.length
      },
      canonical: {
        action: canonicalAction,
        sensitivity: sensitivity.canonical,
        lifecycle: lifecycle.canonical,
        version: metadata.version,
        fields: fieldResults.map(result => ({
          index: result.index,
          key: result.canonical.key,
          type: result.canonical.type
        }))
      },
      completeness,
      fields: fieldResults,
      businessFields,
      commonEnvelopeFields,
      codeEvidence: cloneValue(source.codeEvidence || null)
    };
  }

  function validatePayload(event, properties, options) {
    const config = options || {};
    const eventResult = validateEvent(event, config);
    const issues = [];
    const schemaBlockingCodes = new Set([
      'field-type-missing',
      'field-type-unsupported',
      'field-duplicate',
      'field-canonical-collision',
      'field-proposal-type-conflict',
      'field-proposal-required-conflict',
      'field-proposal-nullable-conflict'
    ]);
    eventResult.errors
      .filter(issue => schemaBlockingCodes.has(issue.code))
      .forEach(issue => addIssue(
        issues,
        'error',
        `payload-schema-${issue.code}`,
        issue.path,
        `事件字段契约不可用于上报校验：${issue.message}`,
        issue.suggestion,
        { eventIssueCode: issue.code }
      ));
    if (!isObject(properties)) {
      addIssue(issues, 'error', 'payload-properties-invalid', 'properties', 'Properties 必须是 JSON object');
      return { ...finalizeIssues(issues), event: eventResult, properties: {} };
    }
    const schema = new Map(eventResult.businessFields.map(field => [field.raw.rawName, field]));
    schema.forEach((field, key) => {
      if (field.raw.required === true && !Object.prototype.hasOwnProperty.call(properties, key)) {
        addIssue(issues, 'error', 'payload-required-missing', `properties.${key}`, `缺少必填字段 ${key}`);
      }
    });
    Object.entries(properties).forEach(([key, value]) => {
      if (isCommonEnvelopeField(key, config)) {
        addIssue(issues, 'error', 'payload-common-envelope-conflict', `properties.${key}`, `${key} 属于公共信封，不应手动放入 Properties`);
        return;
      }
      const field = schema.get(key);
      if (!field) {
        addIssue(issues, 'error', 'payload-field-unknown', `properties.${key}`, `未知字段 ${key}`);
        return;
      }
      if (value === null) {
        if (field.raw.nullable !== true) addIssue(issues, 'error', 'payload-null-not-allowed', `properties.${key}`, `${key} 不允许为 null`);
        return;
      }
      if (!sampleMatchesType(value, field.canonical.type)) {
        addIssue(issues, 'error', 'payload-type-mismatch', `properties.${key}`, `${key} 类型应为 ${field.canonical.type || field.raw.rawType}`);
      }
      if (field.raw.enumValues.length && !field.raw.enumValues.some(allowed => Object.is(allowed, value) || String(allowed) === String(value))) {
        addIssue(issues, 'error', 'payload-enum-mismatch', `properties.${key}`, `${key} 不在允许值范围内`, field.raw.enumValues.join(' | '));
      }
    });
    return { ...finalizeIssues(issues), event: eventResult, properties: cloneValue(properties) };
  }

  function addResultIssue(result, issue) {
    const issues = result.issues.map(issue => cloneValue(issue));
    addIssue(issues, issue.severity, issue.code, issue.path, issue.message, issue.suggestion, issue.detail);
    return { ...result, ...finalizeIssues(issues) };
  }

  function editDistance(leftValue, rightValue) {
    const left = text(leftValue).toLowerCase();
    const right = text(rightValue).toLowerCase();
    if (left === right) return 0;
    if (!left.length) return right.length;
    if (!right.length) return left.length;
    let previous = Array.from({ length: right.length + 1 }, (_, index) => index);
    for (let row = 1; row <= left.length; row += 1) {
      const current = [row];
      for (let column = 1; column <= right.length; column += 1) {
        current[column] = Math.min(
          current[column - 1] + 1,
          previous[column] + 1,
          previous[column - 1] + (left[row - 1] === right[column - 1] ? 0 : 1)
        );
      }
      previous = current;
    }
    return previous[right.length];
  }

  function validateAssets(assets, options) {
    if (!Array.isArray(assets)) throw new TypeError('TrackingGovernance.validateAssets requires an array');
    const results = assets.map(asset => validateEvent(asset, options));
    const actionIndexes = new Map();
    results.forEach((result, index) => {
      const action = result.raw.action.toLowerCase();
      if (!action) return;
      if (!actionIndexes.has(action)) {
        actionIndexes.set(action, [index]);
        return;
      }
      actionIndexes.get(action).push(index);
    });
    actionIndexes.forEach(indexes => {
      if (indexes.length < 2) return;
      indexes.forEach(index => {
        results[index] = addResultIssue(results[index], createIssue(
          'error',
          'event-duplicate',
          'action',
          `资产库中存在 ${indexes.length} 个同名 action“${results[index].raw.action}”`,
          undefined,
          { assetIndexes: indexes }
        ));
      });
    });
    for (let leftIndex = 0; leftIndex < results.length; leftIndex += 1) {
      const leftAction = results[leftIndex].raw.action;
      if (leftAction.length < 10) continue;
      for (let rightIndex = leftIndex + 1; rightIndex < results.length; rightIndex += 1) {
        const rightAction = results[rightIndex].raw.action;
        if (leftAction.toLowerCase() === rightAction.toLowerCase() || Math.abs(leftAction.length - rightAction.length) > 1) continue;
        if (editDistance(leftAction, rightAction) !== 1) continue;
        [leftIndex, rightIndex].forEach((index, pairIndex) => {
          const otherAction = pairIndex === 0 ? rightAction : leftAction;
          results[index] = addResultIssue(results[index], createIssue(
            'warning',
            'event-action-near-duplicate',
            'action',
            `发现疑似拼写冲突 action“${otherAction}”，请确认是否需要迁移或保留为独立契约`,
            undefined,
            { otherAssetIndex: pairIndex === 0 ? rightIndex : leftIndex, otherAction }
          ));
        });
      }
    }
    const summary = results.reduce((total, result) => {
      total.events += 1;
      total.fields += result.fields.length;
      total.businessFields += result.businessFields.length;
      total.commonEnvelopeReferences += result.commonEnvelopeFields.length;
      total.errors += result.issueCounts.error;
      total.warnings += result.issueCounts.warning;
      total.info += result.issueCounts.info;
      total[result.status] += 1;
      return total;
    }, {
      events: 0,
      fields: 0,
      businessFields: 0,
      commonEnvelopeReferences: 0,
      errors: 0,
      warnings: 0,
      info: 0,
      blocked: 0,
      needs_review: 0,
      ready: 0
    });
    return { schemaVersion: SCHEMA_VERSION, results, summary };
  }

  function compactAssessment(result, evaluatedAt) {
    return {
      schemaVersion: SCHEMA_VERSION,
      evaluatedAt,
      status: result.status,
      valid: result.valid,
      ready: result.ready,
      completeness: cloneValue(result.completeness),
      issueCounts: cloneValue(result.issueCounts),
      issues: cloneValue(result.issues),
      canonicalSuggestions: cloneValue(result.canonical),
      businessFieldCount: result.businessFields.length,
      commonEnvelopeFields: result.commonEnvelopeFields.map(field => field.raw.rawName)
    };
  }

  function enrichAssets(assets, options) {
    const config = options || {};
    const report = validateAssets(assets, config);
    const evaluatedAt = text(config.evaluatedAt) || new Date().toISOString();
    const propertyName = text(config.propertyName) || 'governanceAssessment';
    const enriched = assets.map((asset, index) => {
      const copy = cloneValue(asset);
      copy[propertyName] = compactAssessment(report.results[index], evaluatedAt);
      return copy;
    });
    return {
      schemaVersion: SCHEMA_VERSION,
      evaluatedAt,
      assets: enriched,
      results: report.results,
      summary: report.summary
    };
  }

  function attachAssessments(assets, options) {
    if (!Array.isArray(assets)) throw new TypeError('TrackingGovernance.attachAssessments requires an array');
    const invalidIndex = assets.findIndex(asset => !isObject(asset));
    if (invalidIndex >= 0) {
      throw new TypeError(`TrackingGovernance.attachAssessments requires an object at assets[${invalidIndex}]`);
    }
    const config = options || {};
    const report = validateAssets(assets, config);
    const evaluatedAt = text(config.evaluatedAt) || new Date().toISOString();
    const propertyName = text(config.propertyName) || 'governanceAssessment';
    assets.forEach((asset, index) => {
      asset[propertyName] = compactAssessment(report.results[index], evaluatedAt);
    });
    return {
      schemaVersion: SCHEMA_VERSION,
      evaluatedAt,
      assets,
      report,
      results: report.results,
      summary: report.summary
    };
  }

  function fieldSubmissionShape(result) {
    return {
      key: result.raw.rawName,
      type: result.raw.rawType,
      description: result.raw.description || null,
      required: result.raw.required,
      nullable: result.raw.nullable,
      enum: cloneValue(result.raw.enumValues),
      sample: cloneValue(result.raw.sample ?? null),
      sensitivity: result.raw.sensitivity || null,
      owner: result.raw.owner || null,
      source: result.raw.source || null,
      version: result.raw.version || null,
      lifecycle: result.raw.lifecycle || null,
      canonicalSuggestion: cloneValue(result.canonical),
      evidence: {
        definitions: cloneValue(result.raw.definitions),
        observedAt: cloneValue(result.raw.observedAt)
      }
    };
  }

  function buildSubmissionRecord(event, options) {
    const config = options || {};
    const result = validateEvent(event, config);
    if (config.rejectOnError && !result.valid) {
      const error = new Error(`Tracking event submission is blocked by ${result.issueCounts.error} validation error(s)`);
      error.code = 'TRACKING_GOVERNANCE_BLOCKED';
      error.validation = result;
      throw error;
    }
    const submittedAt = text(config.submittedAt) || new Date().toISOString();
    const metadata = result.raw.metadata;
    return {
      schemaVersion: SCHEMA_VERSION,
      recordType: 'tracking_event_submission',
      operation: text(config.operation) || 'upsert_event',
      submissionId: text(config.submissionId) || null,
      submittedAt,
      submittedBy: text(config.submittedBy) || null,
      workspace: text(config.workspace) || null,
      event: {
        action: result.raw.action,
        description: metadata.description || null,
        trigger: metadata.trigger || null,
        position: metadata.position || null,
        owner: metadata.owner || null,
        source: metadata.source || null,
        sensitivity: metadata.sensitivity || null,
        version: metadata.version || null,
        lifecycle: metadata.lifecycle || null,
        properties: result.businessFields.map(fieldSubmissionShape)
      },
      commonEnvelope: {
        mode: 'reference',
        fields: result.commonEnvelopeFields.map(field => field.raw.rawName),
        policy: '公共信封字段由平台契约统一管理，事件只保留引用'
      },
      codeEvidence: cloneValue(event?.codeEvidence || null),
      governance: {
        status: result.status,
        valid: result.valid,
        readyForSubmission: result.ready,
        completeness: cloneValue(result.completeness),
        issueCounts: cloneValue(result.issueCounts),
        issues: cloneValue(result.issues),
        canonicalSuggestions: cloneValue(result.canonical),
        contract: {
          action: 'snake_case; <object>_<action>',
          field: 'snake_case',
          types: cloneValue(CANONICAL_TYPES)
        }
      }
    };
  }

  return Object.freeze({
    SCHEMA_VERSION,
    CANONICAL_TYPES,
    DEFAULT_COMMON_ENVELOPE_FIELDS,
    suggestIdentifier,
    normalizeType,
    normalizeSensitivity,
    normalizeLifecycle,
    isCommonEnvelopeField,
    validateField,
    validateEvent,
    validatePayload,
    validateAssets,
    enrichAssets,
    attachAssessments,
    buildSubmissionRecord
  });
});
