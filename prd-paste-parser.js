(function attachPrdPasteParser(root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.PrdPasteParser = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function createPrdPasteParser() {
  const ACTION_PATTERN = /^[a-z][a-z0-9]*(?:_[a-z0-9]+)*$/;
  const HEADER_ALIASES = {
    label: new Set(['埋点记录事件', '埋点事件', '记录事件', '事件名称', '埋点名称']),
    action: new Set(['action', '事件action', '埋点action']),
    businessDomain: new Set(['业务域', '一级业务域', 'businessdomain', 'domain']),
    module: new Set(['业务模块', '二级业务模块', 'module']),
    key: new Set(['额外的key', '额外key', '参数key', '属性key', 'key']),
    description: new Set(['参数说明', '参数描述', '属性说明', '说明', '埋点口径']),
    trigger: new Set(['触发时机', '上报时机', '触发条件', 'trigger']),
    position: new Set(['页面位置', '埋点位置', '上报位置', 'position', 'location']),
    type: new Set(['参数类型', '属性类型', '数据类型', 'type']),
    required: new Set(['是否必填', '必填', 'required']),
    nullable: new Set(['是否可空', '可空', 'nullable']),
    allowedValues: new Set(['枚举值', '取值范围', '允许值', 'allowedvalues', 'enum']),
    example: new Set(['示例值', '参数示例', 'example']),
    sensitivity: new Set(['数据等级', '敏感级别', '数据敏感级别', 'sensitivity']),
    owner: new Set(['负责人', 'owner']),
    changeType: new Set(['变更类型', 'changetype']),
    version: new Set(['版本', '事件版本', 'version']),
    platform: new Set(['上报端', '终端', 'platform'])
  };
  const REQUIRED_HEADER_TYPES = ['label', 'action', 'key', 'description'];
  const STANDARD_HEADER_TYPES = ['businessDomain', 'module', 'trigger', 'position', 'type', 'required', 'nullable', 'allowedValues', 'example', 'sensitivity', 'owner', 'changeType', 'version', 'platform'];
  const KNOWN_SINGLE_WORD_ACTIONS = new Set(['userpath']);

  const exampleText = `埋点记录事件
action
额外的key
参数说明
滤镜点击
app_click
location1
discover :首页瀑布流

feed_hot_filter
true
滤镜访问
app_visit
location1
discover :首页瀑布流

feed_hot_filter
true
生成意愿
generate_intention
location1
discover :首页瀑布流

feed_hot_filter
true`;

  const standardExampleText = [
    ['事件名称', 'action', '业务域', '业务模块', '触发时机', '页面位置', '参数 key', '参数类型', '是否必填', '是否可空', '枚举值', '示例值', '参数说明', '敏感级别', '负责人', '变更类型', '版本', '上报端'].join('\t'),
    ['滤镜点击', 'app_click', '内容', '首页推荐', '用户点击首页滤镜卡片时', 'discover / 首页瀑布流', 'location1', 'string', '是', '否', 'discover | search | profile', 'discover', '一级入口位置', 'P0', '产品负责人', '新增字段', '1.0.0', 'Web / App'].join('\t'),
    ['', '', '', '', '', '', 'feed_hot_filter', 'boolean', '是', '否', '', 'true', '是否点击热门滤镜', 'P0', '', '', '', ''].join('\t')
  ].join('\n');

  const productDemandExampleText = [
    ['埋点名称', '埋点口径'].join('\t'),
    ['首页收藏列表页面曝光', '用户进入首页收藏列表页面时上报，并记录入口来源和当前收藏数量'].join('\t'),
    ['（角色封面）收藏功能点击', '点击收藏按钮，同时上报角色ID、收藏/取消收藏、触发场景（Explore、Favorites）'].join('\t'),
    ['角色封面曝光', '角色封面进入可视区域时上报，同时上报角色ID和触发场景（Explore、Favorites）'].join('\t'),
    ['Feedback点击提交按钮', '用户提交消息反馈时上报，同时上报角色ID、会话ID、MessageID和是否成功'].join('\t'),
    ['生图按钮点击', '用户点击消息生图按钮时上报，同时上报角色ID、会话ID、MessageID和是否成功'].join('\t')
  ].join('\n');

  function normalizeText(value) {
    return String(value ?? '')
      .replace(/^\uFEFF/, '')
      .replace(/\r\n?/g, '\n')
      .replace(/\u00a0/g, ' ');
  }

  function normalizeCell(value) {
    return String(value ?? '')
      .replace(/\u00a0/g, ' ')
      .trim()
      .replace(/(?:\s+:\s*|\s*:\s+)/g, '：');
  }

  function normalizeHeader(value) {
    return String(value ?? '')
      .toLowerCase()
      .replace(/\u00a0/g, ' ')
      .replace(/[\s_：:()（）-]/g, '');
  }

  function getHeaderType(value) {
    const normalized = normalizeHeader(value);
    return Object.keys(HEADER_ALIASES).find(type => HEADER_ALIASES[type].has(normalized)) || '';
  }

  function mapHeaders(row) {
    const map = {};
    row.forEach((cell, index) => {
      const type = getHeaderType(cell);
      if (type && map[type] === undefined) map[type] = index;
    });
    return map;
  }

  function getHeaderMap(row) {
    const map = mapHeaders(row);
    return REQUIRED_HEADER_TYPES.every(type => map[type] !== undefined) ? map : null;
  }

  function addIssue(issues, code, message, location) {
    const fingerprint = `${code}\u0000${message}\u0000${location || ''}`;
    if (issues.some(issue => issue.fingerprint === fingerprint)) return;
    issues.push({ code, message, location: location || '', fingerprint });
  }

  function assignPresent(target, values) {
    Object.entries(values || {}).forEach(([key, value]) => {
      const normalized = normalizeCell(value);
      if (normalized) target[key] = normalized;
    });
    return target;
  }

  function createEvent(label, action, metadata = {}) {
    return assignPresent({ label: normalizeCell(label), action: normalizeCell(action), params: [] }, metadata);
  }

  function appendParam(event, key, description, issues, location, metadata = {}) {
    const normalizedKey = normalizeCell(key);
    const normalizedDescription = normalizeCell(description);
    if (!normalizedKey && !normalizedDescription) return;
    if (!event) {
      addIssue(issues, 'orphan-param', '发现未归属到事件的参数', location);
      return;
    }
    event.params.push(assignPresent({ key: normalizedKey, description: normalizedDescription }, metadata));
    if (!normalizedKey || !normalizedDescription) {
      addIssue(issues, 'incomplete-param', '参数 key 或参数说明不完整', location);
    }
  }

  const EVENT_METADATA_KEYS = ['businessDomain', 'module', 'trigger', 'position', 'owner', 'changeType', 'version', 'platform'];
  const PARAM_METADATA_KEYS = ['type', 'required', 'nullable', 'allowedValues', 'example', 'sensitivity'];

  function selectMetadata(source, keys) {
    return keys.reduce((metadata, key) => {
      if (source?.[key]) metadata[key] = source[key];
      return metadata;
    }, {});
  }

  function mergeMetadata(target, source, keys, issues, context) {
    keys.forEach(key => {
      const value = normalizeCell(source?.[key]);
      if (!value) return;
      if (!target[key]) target[key] = value;
      else if (target[key] !== value) addIssue(issues, `conflicting-${key}`, `${context} 的 ${key} 存在多个定义`);
    });
  }

  function mergeEvents(events, issues) {
    const merged = [];
    const byAction = new Map();
    const actionsByLabel = new Map();

    events.forEach(event => {
      const identity = event.action ? `action:${event.action}` : `label:${event.label}`;
      let target = byAction.get(identity);
      if (!target) {
        target = createEvent(event.label, event.action, selectMetadata(event, EVENT_METADATA_KEYS));
        byAction.set(identity, target);
        merged.push(target);
      } else if (event.label && target.label && event.label !== target.label) {
        addIssue(issues, 'conflicting-label', `${event.action} 对应多个事件名称：${target.label}、${event.label}`);
      } else if (!target.label && event.label) {
        target.label = event.label;
      }
      mergeMetadata(target, event, EVENT_METADATA_KEYS, issues, event.action || event.label || '当前事件');

      event.params.forEach(param => {
        const duplicate = target.params.some(item =>
          item.key === param.key &&
          item.description === param.description &&
          PARAM_METADATA_KEYS.every(key => (item[key] || '') === (param[key] || ''))
        );
        if (!duplicate) target.params.push({ ...param });
      });

      if (event.label && event.action) {
        if (!actionsByLabel.has(event.label)) actionsByLabel.set(event.label, new Set());
        actionsByLabel.get(event.label).add(event.action);
      }
    });

    actionsByLabel.forEach((actions, label) => {
      if (actions.size > 1) {
        addIssue(issues, 'conflicting-action', `${label} 对应多个 action：${[...actions].join('、')}`);
      }
    });

    merged.forEach(event => {
      const descriptionsByKey = new Map();
      event.params.forEach(param => {
        if (!param.key || !param.description) return;
        if (!descriptionsByKey.has(param.key)) descriptionsByKey.set(param.key, new Set());
        descriptionsByKey.get(param.key).add(param.description);
      });
      descriptionsByKey.forEach((descriptions, key) => {
        if (descriptions.size > 1) {
          addIssue(issues, 'conflicting-param', `${event.action || event.label} 中的 ${key} 存在多个参数说明`);
        }
      });
    });

    return merged;
  }

  function parseTsvRows(text) {
    const rows = [];
    let row = [];
    let cell = '';
    let inQuotes = false;

    for (let index = 0; index < text.length; index += 1) {
      const char = text[index];
      if (char === '"') {
        if (inQuotes && text[index + 1] === '"') {
          cell += '"';
          index += 1;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (char === '\t' && !inQuotes) {
        row.push(normalizeCell(cell));
        cell = '';
      } else if (char === '\n' && !inQuotes) {
        row.push(normalizeCell(cell));
        if (row.some(Boolean)) rows.push(row);
        row = [];
        cell = '';
      } else {
        cell += char;
      }
    }

    row.push(normalizeCell(cell));
    if (row.some(Boolean)) rows.push(row);
    return rows;
  }

  function parseTable(text, issues) {
    const rows = parseTsvRows(text);
    const demandHeaderIndex = rows.findIndex(row => {
      const mapped = mapHeaders(row);
      return mapped.label !== undefined && mapped.description !== undefined && mapped.action === undefined && mapped.key === undefined;
    });
    if (demandHeaderIndex >= 0) {
      const demandHeaders = mapHeaders(rows[demandHeaderIndex]);
      const events = rows.slice(demandHeaderIndex + 1).reduce((result, row) => {
        const label = row[demandHeaders.label] || '';
        const description = row[demandHeaders.description] || '';
        if (label || description) result.push(createEvent(label, '', { trigger: description, productDemand: true }));
        return result;
      }, []);
      return { events, schema: 'product-demand-v0', headerMap: demandHeaders };
    }
    const headerIndex = rows.findIndex(row => getHeaderMap(row));
    const headerMap = headerIndex >= 0 ? getHeaderMap(rows[headerIndex]) : null;
    const partialHeaderIndex = rows.findIndex(row => {
      const mapped = mapHeaders(row);
      const count = REQUIRED_HEADER_TYPES.filter(type => mapped[type] !== undefined).length;
      return count >= 2 && count < REQUIRED_HEADER_TYPES.length;
    });
    if (headerIndex < 0 && partialHeaderIndex >= 0) {
      const missing = REQUIRED_HEADER_TYPES.filter(type => mapHeaders(rows[partialHeaderIndex])[type] === undefined);
      const labels = { label: '埋点记录事件', action: 'action', key: '额外的 key', description: '参数说明' };
      addIssue(issues, 'missing-column', `表头缺少：${missing.map(type => labels[type]).join('、')}`, `第 ${partialHeaderIndex + 1} 行`);
      return { events: [], schema: 'legacy-v0', headerMap: null };
    }
    const columns = {
      label: headerMap?.label ?? 0,
      action: headerMap?.action ?? 1,
      key: headerMap?.key ?? 2,
      description: headerMap?.description ?? 3,
      ...STANDARD_HEADER_TYPES.reduce((optional, type) => {
        if (headerMap?.[type] !== undefined) optional[type] = headerMap[type];
        return optional;
      }, {})
    };
    const contractSchema = STANDARD_HEADER_TYPES.some(type => columns[type] !== undefined)
      ? 'tracking-contract-v1'
      : 'legacy-v0';
    const dataRows = headerIndex >= 0 ? rows.slice(headerIndex + 1) : rows;
    const events = [];
    let current = null;

    dataRows.forEach((row, index) => {
      if (getHeaderMap(row)) return;
      const location = `第 ${index + (headerIndex >= 0 ? headerIndex + 2 : 1)} 行`;
      if (!headerMap && row.length < 4) {
        addIssue(issues, 'incomplete-row', '表格行不足四列，请补齐空单元格', location);
      }
      const label = row[columns.label] || '';
      const action = row[columns.action] || '';
      const key = row[columns.key] || '';
      const description = row[columns.description] || '';
      const readColumn = type => columns[type] === undefined ? '' : (row[columns[type]] || '');
      const eventMetadata = selectMetadata(STANDARD_HEADER_TYPES.reduce((metadata, type) => {
        metadata[type] = readColumn(type);
        return metadata;
      }, {}), EVENT_METADATA_KEYS);
      const paramMetadata = selectMetadata(STANDARD_HEADER_TYPES.reduce((metadata, type) => {
        metadata[type] = readColumn(type);
        return metadata;
      }, {}), PARAM_METADATA_KEYS);
      if (!label && !action && !key && !description) return;

      if (label || action) {
        const inheritsCurrent = current &&
          (!label || !current.label || label === current.label) &&
          (!action || !current.action || action === current.action);

        if (!inheritsCurrent) {
          current = createEvent(label, action, eventMetadata);
          events.push(current);
        }

        if (!current.label && label) current.label = label;
        if (!current.action && action) current.action = action;
        mergeMetadata(current, eventMetadata, EVENT_METADATA_KEYS, issues, action || label || '当前事件');
      } else if (!current) {
        addIssue(issues, 'orphan-row', '表格开头存在未归属的参数行', location);
      }

      appendParam(current, key, description, issues, location, paramMetadata);
      if (contractSchema === 'tracking-contract-v1' && key && !paramMetadata.type) {
        addIssue(issues, 'missing-field-type', `${key} 缺少参数类型`, location);
      }
    });

    return { events, schema: contractSchema, headerMap };
  }

  function looksLikeNaturalLabel(value) {
    const normalized = normalizeCell(value);
    if (!normalized || ACTION_PATTERN.test(normalized)) return false;
    return /[\u3400-\u9fff]/.test(normalized) || /\s/.test(normalized) || !/^[a-z0-9_.-]+$/i.test(normalized);
  }

  function isActionToken(value) {
    const normalized = normalizeCell(value);
    return ACTION_PATTERN.test(normalized) && (normalized.includes('_') || KNOWN_SINGLE_WORD_ACTIONS.has(normalized));
  }

  function isEventStart(tokens, index) {
    return looksLikeNaturalLabel(tokens[index]) && isActionToken(tokens[index + 1] || '');
  }

  function parseVertical(text, issues) {
    let tokens = text.split('\n').map(normalizeCell).filter(Boolean);
    let headerCount = 0;
    while (headerCount < Math.min(tokens.length, 8) && getHeaderType(tokens[headerCount])) headerCount += 1;
    if (headerCount) tokens = tokens.slice(headerCount);

    const events = [];
    let index = 0;
    let unrecognizedCount = 0;

    while (index < tokens.length) {
      if (!isEventStart(tokens, index)) {
        unrecognizedCount += 1;
        index += 1;
        continue;
      }

      const event = createEvent(tokens[index], tokens[index + 1]);
      events.push(event);
      index += 2;

      while (index < tokens.length && !isEventStart(tokens, index)) {
        const key = tokens[index];
        const description = tokens[index + 1];
        if (description === undefined) {
          appendParam(event, key, '', issues, `末尾参数 ${key}`);
          index += 1;
          break;
        }
        appendParam(event, key, description, issues, `事件 ${event.action}`);
        index += 2;
      }
    }

    if (unrecognizedCount) {
      addIssue(issues, 'unrecognized-token', `有 ${unrecognizedCount} 项内容未识别，请检查事件名称与 action 的对应关系`);
    }
    if (!events.length && tokens.length) {
      addIssue(issues, 'no-event', '未识别到完整的事件名称与 action，建议使用四列表格格式粘贴');
    }

    return events;
  }

  function parseNaturalDemand(text) {
    const lines = text.split('\n').map(normalizeCell).filter(Boolean);
    if (!lines.length || lines.length > 6) return null;
    if (lines.some(line => getHeaderType(line) || isActionToken(line))) return null;
    if (!lines.some(looksLikeNaturalLabel)) return null;

    const label = lines[0];
    const trigger = lines.length > 1 ? lines.slice(1).join('；') : label;
    return [createEvent(label, '', { trigger })];
  }

  function parse(text) {
    const normalized = normalizeText(text);
    if (!normalized.trim()) {
      return {
        events: [],
        issues: [],
        sourceFormat: 'empty',
        schema: 'legacy-v0',
        stats: { events: 0, actions: 0, params: 0, completeEvents: 0 }
      };
    }

    const issues = [];
    const naturalDemand = normalized.includes('\t') ? null : parseNaturalDemand(normalized);
    const sourceFormat = normalized.includes('\t') ? 'tsv' : naturalDemand ? 'natural-demand' : 'vertical';
    const tableResult = sourceFormat === 'tsv' ? parseTable(normalized, issues) : null;
    const parsedEvents = tableResult ? tableResult.events : naturalDemand || parseVertical(normalized, issues);
    const schema = tableResult?.schema || (naturalDemand ? 'product-demand-v0' : 'legacy-v0');
    const events = mergeEvents(parsedEvents, issues);
    events.forEach((event, index) => {
      const location = `第 ${index + 1} 个事件`;
      if (!event.label) addIssue(issues, 'missing-label', '事件缺少“埋点记录事件”', location);
      if (!event.action && schema !== 'product-demand-v0') addIssue(issues, 'missing-action', `${event.label || '当前事件'} 缺少 action`, location);
      if (event.action && !isActionToken(event.action)) {
        addIssue(issues, 'invalid-action', `${event.action} 不符合 snake_case 命名`, location);
      }
    });
    const actions = new Set(events.map(event => event.action).filter(Boolean)).size;
    const params = events.reduce((sum, event) => sum + event.params.length, 0);
    const completeEvents = events.filter(event => event.label && (event.action || schema === 'product-demand-v0')).length;

    return {
      events,
      issues: issues.map(({ fingerprint, ...issue }) => issue),
      sourceFormat,
      schema,
      stats: { events: events.length, actions, params, completeEvents }
    };
  }

  return { ACTION_PATTERN, exampleText, standardExampleText, productDemandExampleText, parse };
});
