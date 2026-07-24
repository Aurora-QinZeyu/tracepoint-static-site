(function initCodeAssetSync(root,factory){
  const api=factory();
  if(typeof module==='object'&&module.exports)module.exports=api;
  root.CodeAssetSync=api;
})(typeof globalThis!=='undefined'?globalThis:this,function createCodeAssetSync(){
  const CONFIDENCE_ORDER={observed:1,medium:2,high:3};
  const GENERIC_THEMES=new Set(['','unknown','legacy','call-only']);

  function isObject(value){
    return Boolean(value)&&typeof value==='object'&&!Array.isArray(value);
  }

  function normalizeAction(value){
    return String(value??'').trim();
  }

  function normalizeFieldName(value){
    return String(value??'').trim();
  }

  function cloneValue(value){
    if(Array.isArray(value))return value.map(cloneValue);
    if(isObject(value)){
      return Object.keys(value).reduce((copy,key)=>{
        copy[key]=cloneValue(value[key]);
        return copy;
      },{});
    }
    return value;
  }

  function stableSerialize(value){
    if(Array.isArray(value))return `[${value.map(stableSerialize).join(',')}]`;
    if(isObject(value)){
      return `{${Object.keys(value).sort().map(key=>`${JSON.stringify(key)}:${stableSerialize(value[key])}`).join(',')}}`;
    }
    const serialized=JSON.stringify(value);
    return serialized===undefined?String(value):serialized;
  }

  function list(value){
    if(value===undefined||value===null||value==='')return [];
    return Array.isArray(value)?value:[value];
  }

  function pushUnique(target,values,keyFor=stableSerialize){
    const seen=new Set(target.map(keyFor));
    list(values).forEach(value=>{
      if(value===undefined||value===null||value==='')return;
      const key=keyFor(value);
      if(seen.has(key))return;
      seen.add(key);
      target.push(cloneValue(value));
    });
    return target;
  }

  function mergeConfidence(current,incoming){
    const left=String(current||'').trim();
    const right=String(incoming||'').trim();
    if(!left)return right||'observed';
    if(!right)return left;
    return (CONFIDENCE_ORDER[right]||0)>(CONFIDENCE_ORDER[left]||0)?right:left;
  }

  function mergeUsage(current,incoming){
    if(current==='called'||incoming==='called')return 'called';
    return current||incoming||'defined-only';
  }

  function mergeField(target,incoming){
    const incomingType=String(incoming?.type||'unknown').trim()||'unknown';
    if(!target.type||target.type==='unknown')target.type=incomingType;
    else if(incomingType!=='unknown'&&target.type!==incomingType)target.type='mixed';
    target.required=Boolean(target.required||incoming?.required);
    target.nullable=Boolean(target.nullable||incoming?.nullable);
    if(!target.description&&incoming?.description)target.description=String(incoming.description).trim();
    pushUnique(target.allowedValues,list(incoming?.allowedValues));
    pushUnique(target.typeExpressions,list(incoming?.typeExpressions),value=>String(value));
    pushUnique(target.definitions,list(incoming?.definitions));
    pushUnique(target.observedAt,list(incoming?.observedAt));
  }

  function createAggregatedEvent(event){
    return {
      name:normalizeFieldName(event?.name),
      description:String(event?.description??'').trim(),
      namespaces:[],
      themes:[],
      confidence:String(event?.confidence??'').trim()||'observed',
      usage:String(event?.usage??'').trim()||'defined-only',
      definitions:[],
      callSites:[],
      legacyMembers:[],
      dynamic:Boolean(event?.dynamic),
      deprecated:Boolean(event?.deprecated),
      fields:new Map()
    };
  }

  function mergeManifestEvent(target,event){
    if(!target.description&&event?.description)target.description=String(event.description).trim();
    pushUnique(target.namespaces,[...list(event?.namespace),...list(event?.namespaces)],value=>String(value));
    pushUnique(target.themes,[...list(event?.theme),...list(event?.themes)],value=>String(value));
    pushUnique(target.definitions,list(event?.definitions));
    pushUnique(target.callSites,list(event?.callSites));
    pushUnique(target.legacyMembers,list(event?.legacyMembers),value=>String(value));
    target.confidence=mergeConfidence(target.confidence,event?.confidence);
    target.usage=mergeUsage(target.usage,event?.usage);
    target.dynamic=Boolean(target.dynamic||event?.dynamic);
    target.deprecated=Boolean(target.deprecated||event?.deprecated);

    list(event?.fields).forEach(field=>{
      const fieldName=normalizeFieldName(field?.name);
      if(!fieldName)return;
      if(!target.fields.has(fieldName)){
        target.fields.set(fieldName,{
          name:fieldName,
          type:'unknown',
          required:false,
          nullable:false,
          description:'',
          allowedValues:[],
          typeExpressions:[],
          definitions:[],
          observedAt:[]
        });
      }
      mergeField(target.fields.get(fieldName),field);
    });
  }

  function aggregateManifestEvents(manifest){
    const grouped=new Map();
    let ignoredEvents=0;
    list(manifest?.events).forEach(event=>{
      const action=normalizeAction(event?.name);
      if(!action){
        ignoredEvents+=1;
        return;
      }
      if(!grouped.has(action))grouped.set(action,createAggregatedEvent(event));
      mergeManifestEvent(grouped.get(action),event);
    });
    return {events:[...grouped.values()],ignoredEvents};
  }

  function repositoryEvidence(repository){
    const source=isObject(repository)?repository:{};
    return {
      name:String(source.name??''),
      remote:String(source.remote??''),
      branch:String(source.branch??''),
      commit:String(source.commit??''),
      commitShort:String(source.commitShort??''),
      scannedAt:String(source.scannedAt??'')
    };
  }

  function buildWireContracts(event,repository){
    const repo=repositoryEvidence(repository);
    const namespaces=event.namespaces.length?event.namespaces:['call-only'];
    return namespaces.map(namespace=>{
      const definitions=event.definitions.filter(reference=>(reference.namespace||'call-only')===namespace);
      const callSites=event.callSites.filter(reference=>(reference.namespace||'call-only')===namespace);
      const fields=[...event.fields.values()].filter(field=>{
        const evidence=[...(field.definitions||[]),...(field.observedAt||[])];
        return namespaces.length===1||evidence.some(reference=>(reference.namespace||'call-only')===namespace);
      }).map(field=>({
        nameRaw:field.name,
        typeObserved:field.type||'unknown',
        requiredObserved:field.required===undefined?'unknown':Boolean(field.required),
        nullableObserved:field.nullable===undefined?'unknown':Boolean(field.nullable),
        definitions:cloneValue((field.definitions||[]).filter(reference=>(reference.namespace||'call-only')===namespace)),
        observedAt:cloneValue((field.observedAt||[]).filter(reference=>(reference.namespace||'call-only')===namespace))
      }));
      return {
        contractId:`${repo.name||'repository'}:${namespace}:${event.name}`,
        actionRaw:event.name,
        namespace,
        repository:repo,
        evidenceState:callSites.length?'called':definitions.length?'defined':'observed',
        deprecatedInCode:Boolean(event.deprecated),
        definitions:cloneValue(definitions),
        callSites:cloneValue(callSites),
        fields
      };
    });
  }

  function buildCodeEvidence(event,repository){
    const evidence={
      repository:repositoryEvidence(repository),
      namespaces:cloneValue(event.namespaces),
      themes:cloneValue(event.themes),
      confidence:event.confidence||'observed',
      usage:event.usage||'defined-only',
      legacyMembers:cloneValue(event.legacyMembers),
      definitions:cloneValue(event.definitions),
      callSites:cloneValue(event.callSites),
      callSiteCount:event.callSites.length,
      contracts:buildWireContracts(event,repository)
    };
    if(event.dynamic)evidence.dynamic=true;
    if(event.deprecated)evidence.deprecated=true;
    return evidence;
  }

  function replaceObjectContents(target,source){
    Object.keys(target).forEach(key=>{
      if(!Object.prototype.hasOwnProperty.call(source,key))delete target[key];
    });
    Object.keys(source).forEach(key=>{
      target[key]=cloneValue(source[key]);
    });
    return target;
  }

  function syncCodeEvidence(asset,event,repository){
    const next=buildCodeEvidence(event,repository);
    const previous=stableSerialize(asset.codeEvidence);
    if(!isObject(asset.codeEvidence))asset.codeEvidence={};
    replaceObjectContents(asset.codeEvidence,next);
    asset.wireContracts=cloneValue(next.contracts);
    return previous!==stableSerialize(asset.codeEvidence);
  }

  function fieldMetadata(field){
    return {
      source:'前端代码',
      type:field.type||'unknown',
      required:Boolean(field.required),
      nullable:Boolean(field.nullable),
      description:field.description||'',
      allowedValues:cloneValue(field.allowedValues),
      typeExpressions:cloneValue(field.typeExpressions),
      definitions:cloneValue(field.definitions),
      observedAt:cloneValue(field.observedAt)
    };
  }

  function ensureFieldMeta(asset){
    if(!isObject(asset.fieldMeta))asset.fieldMeta={};
    return asset.fieldMeta;
  }

  function syncFieldMeta(asset,field){
    const metadata=ensureFieldMeta(asset);
    const next=fieldMetadata(field);
    const previous=stableSerialize(metadata[field.name]);
    if(!isObject(metadata[field.name]))metadata[field.name]={};
    replaceObjectContents(metadata[field.name],next);
    return previous!==stableSerialize(metadata[field.name]);
  }

  function fieldTuple(field){
    return [
      field.name,
      field.type||'unknown',
      field.description||`前端类型定义：${field.type||'unknown'}${field.required?'（必填）':'（可选）'}`
    ];
  }

  function inferTheme(event,defaults){
    if(defaults.theme)return defaults.theme;
    return event.themes.find(theme=>!GENERIC_THEMES.has(String(theme).toLowerCase()))||event.themes[0]||'-';
  }

  function inferGroup(event,defaults){
    if(defaults.group)return defaults.group;
    if(event.namespaces.includes('commercial')||event.themes.includes('commercial'))return '商业化';
    if(event.namespaces.includes('chatbot'))return 'Chatbot';
    if(event.namespaces.includes('bigData'))return '平台能力';
    return '待归类';
  }

  function inferDomain(event,defaults){
    if(defaults.domain)return defaults.domain;
    const labels={
      action:'行为事件',
      visit:'访问事件',
      exposure:'曝光事件',
      commercial:'商业化事件',
      bigData:'大数据事件',
      chatbot:'Chatbot 事件',
      autoReport:'自动上报',
      legacy:'历史埋点',
      'call-only':'仅调用事件'
    };
    const namespace=event.namespaces.find(value=>value!=='legacy')||event.namespaces[0];
    return labels[namespace]||'前端代码埋点';
  }

  function inferRule(event,defaults){
    if(defaults.rule)return defaults.rule;
    if(event.callSites.length)return `前端代码已发现 ${event.callSites.length} 个直接调用点，具体触发时机待确认`;
    return '前端代码已定义，暂未发现直接调用点，具体触发时机待确认';
  }

  function createAsset(event,repository,defaults){
    const asset={
      name:event.name,
      description:defaults.description||event.description||event.name,
      theme:inferTheme(event,defaults),
      group:inferGroup(event,defaults),
      domain:inferDomain(event,defaults),
      status:defaults.status||(event.callSites.length?'已接入前端':'待确认'),
      rule:inferRule(event,defaults),
      source:defaults.source||'前端代码',
      fields:[...event.fields.values()].map(fieldTuple)
    };
    syncCodeEvidence(asset,event,repository);
    event.fields.forEach(field=>syncFieldMeta(asset,field));
    return asset;
  }

  function sync(manifest,assetEvents,defaults={}){
    if(Array.isArray(manifest)&&isObject(assetEvents)&&Array.isArray(assetEvents.events)){
      const reversedManifest=assetEvents;
      assetEvents=manifest;
      manifest=reversedManifest;
    }
    if(!Array.isArray(assetEvents))throw new TypeError('CodeAssetSync.sync requires assetEvents to be an array');
    defaults=isObject(defaults)?defaults:{};

    const {events:codeEvents,ignoredEvents}=aggregateManifestEvents(manifest||{});
    const assetsByAction=new Map();
    assetEvents.forEach(asset=>{
      const action=normalizeAction(asset?.name);
      if(action&&!assetsByAction.has(action))assetsByAction.set(action,asset);
    });

    const summary={
      createdEvents:0,
      updatedEvents:0,
      addedFields:0,
      unchangedEvents:0,
      totalCodeEvents:codeEvents.length,
      ignoredEvents,
      createdActions:[],
      updatedActions:[],
      unchangedActions:[],
      changedActions:[]
    };

    codeEvents.forEach(codeEvent=>{
      const action=normalizeAction(codeEvent.name);
      let asset=assetsByAction.get(action);
      if(!asset){
        asset=createAsset(codeEvent,manifest?.repository,defaults);
        assetEvents.push(asset);
        assetsByAction.set(action,asset);
        summary.createdEvents+=1;
        summary.addedFields+=asset.fields.length;
        summary.createdActions.push(asset.name);
        summary.changedActions.push(asset.name);
        return;
      }

      let changed=syncCodeEvidence(asset,codeEvent,manifest?.repository);
      if(!Array.isArray(asset.fields))asset.fields=[];
      const existingFields=new Set(asset.fields.map(field=>normalizeFieldName(field?.[0])).filter(Boolean));
      codeEvent.fields.forEach(field=>{
        if(syncFieldMeta(asset,field))changed=true;
        if(existingFields.has(field.name))return;
        asset.fields.push(fieldTuple(field));
        existingFields.add(field.name);
        summary.addedFields+=1;
        changed=true;
      });

      if(changed){
        summary.updatedEvents+=1;
        summary.updatedActions.push(asset.name);
        summary.changedActions.push(asset.name);
      }else{
        summary.unchangedEvents+=1;
        summary.unchangedActions.push(asset.name);
      }
    });

    return summary;
  }

  return {
    normalizeAction,
    normalizeFieldName,
    aggregateManifestEvents,
    buildCodeEvidence,
    sync
  };
});
