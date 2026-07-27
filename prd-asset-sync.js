(function initPrdAssetSync(root,factory){
  const api=factory();
  if(typeof module==='object'&&module.exports)module.exports=api;
  root.PrdAssetSync=api;
})(typeof globalThis!=='undefined'?globalThis:this,function createPrdAssetSync(){
  function normalizeIdentifier(value){
    return String(value??'').trim();
  }

  function inferFieldType(description){
    const value=String(description??'').trim().toLowerCase();
    if(/^(true|false)$/.test(value))return 'bool';
    if(/^-?\d+$/.test(value))return 'int';
    return 'string';
  }

  const TYPE_ALIASES={
    str:'string',text:'string',varchar:'string',
    int:'integer',bigint:'integer',long:'integer',
    float:'number',double:'number',decimal:'number',
    bool:'boolean',timestamp:'datetime',date:'datetime',
    json:'object',map:'object',list:'array'
  };
  const CONTRACT_TYPES=new Set(['string','integer','number','boolean','datetime','object','array']);
  const IDENTIFIER_PATTERN=/^[a-z][a-z0-9]*(?:_[a-z0-9]+)*$/;
  const COMMON_ENVELOPE_FIELDS=new Set([
    'business_type','theme','action','distinct_id','time','utc_time','hrefUrl','device_id','sessionId','user_id','uniqueId','product','app_version','device_type','user_version','device_link_id','vip_status','is_visitor','source','plan','traceId','firstenterurl','referrerurl','page','page_timestamp','page_url','refer_page','refer_page_timestamp','refer_page_url','count','properties'
  ]);

  function canonicalIdentifier(value){
    return String(value??'').trim()
      .replace(/([a-z0-9])([A-Z])/g,'$1_$2')
      .replace(/[^A-Za-z0-9]+/g,'_')
      .replace(/^_+|_+$/g,'')
      .toLowerCase();
  }

  const COMMON_ENVELOPE_ALIASES=new Set(
    [...COMMON_ENVELOPE_FIELDS].flatMap(name=>[String(name).toLowerCase(),canonicalIdentifier(name)])
  );

  function isCommonEnvelopeField(value){
    const raw=String(value??'').trim();
    return COMMON_ENVELOPE_ALIASES.has(raw.toLowerCase())||COMMON_ENVELOPE_ALIASES.has(canonicalIdentifier(raw));
  }

  function normalizeFieldType(type,description){
    const raw=String(type??'').trim().toLowerCase();
    if(!raw)return inferFieldType(description);
    return TYPE_ALIASES[raw]||raw;
  }

  function parseBoolean(value){
    if(typeof value==='boolean')return value;
    const normalized=String(value??'').trim().toLowerCase();
    if(['true','1','是','必填','required','yes'].includes(normalized))return true;
    if(['false','0','否','可选','optional','no'].includes(normalized))return false;
    return null;
  }

  function parseAllowedValues(value){
    if(Array.isArray(value))return [...new Set(value.filter(item=>String(item??'').trim()!==''))];
    return [...new Set(String(value??'').split(/[|,，;；\n]/).map(item=>item.trim()).filter(Boolean))];
  }

  function coerceExample(value,type){
    const raw=String(value??'').trim();
    if(!raw)return null;
    if(type==='boolean'&&/^(true|false)$/i.test(raw))return raw.toLowerCase()==='true';
    if(type==='integer'&&/^-?\d+$/.test(raw))return Number.parseInt(raw,10);
    if(type==='number'&&/^-?\d+(?:\.\d+)?$/.test(raw))return Number(raw);
    return raw;
  }

  function compactObject(value){
    return Object.entries(value).reduce((result,[key,item])=>{
      const present=Array.isArray(item)?item.length:item!==undefined&&item!==null&&item!=='';
      if(present)result[key]=item;
      return result;
    },{});
  }

  function buildFieldMetadata(param,tuple){
    const type=tuple[1];
    return compactObject({
      source:'PRD 提交',
      type,
      required:parseBoolean(param?.required),
      nullable:parseBoolean(param?.nullable),
      description:tuple[2],
      allowedValues:parseAllowedValues(param?.allowedValues),
      example:coerceExample(param?.example,type),
      sensitivity:String(param?.sensitivity??'').trim()
    });
  }

  function normalizeIncomingFieldRecords(params){
    const seen=new Set();
    return (params||[]).reduce((records,param)=>{
      const key=String(param?.key??'').trim();
      const normalizedKey=normalizeIdentifier(key);
      if(!normalizedKey||seen.has(normalizedKey))return records;
      seen.add(normalizedKey);
      const tuple=[
        key,
        normalizeFieldType(param?.type,param?.description),
        String(param?.description??'').trim()
      ];
      records.push({key,normalizedKey,tuple,metadata:buildFieldMetadata(param,tuple)});
      return records;
    },[]);
  }

  function normalizeIncomingFields(params){
    return normalizeIncomingFieldRecords(params).map(record=>record.tuple);
  }

  function buildEventMetadata(event){
    const sensitivityOrder={P0:0,P1:1,P2:2,P3:3};
    const derivedSensitivity=(event?.params||[])
      .map(param=>String(param?.sensitivity??'').trim().toUpperCase())
      .filter(value=>value in sensitivityOrder)
      .sort((left,right)=>sensitivityOrder[right]-sensitivityOrder[left])[0]||'';
    return compactObject({
      displayName:String(event?.label??'').trim(),
      businessDomain:String(event?.businessDomain??'').trim(),
      module:String(event?.module??'').trim(),
      trigger:String(event?.trigger??'').trim(),
      position:String(event?.position??'').trim(),
      owner:String(event?.owner??'').trim(),
      changeType:String(event?.changeType??'').trim(),
      version:String(event?.version??'').trim(),
      platform:String(event?.platform??'').trim(),
      sensitivity:String(event?.sensitivity??derivedSensitivity).trim(),
      lifecycle:'draft',
      source:'PRD 提交'
    });
  }

  function buildGovernanceProposal(event,records){
    return {
      schemaVersion:'tracking-governance/v1',
      reviewStatus:'draft',
      action:String(event?.action??'').trim(),
      displayName:String(event?.label??'').trim(),
      businessDomain:String(event?.businessDomain??'').trim(),
      module:String(event?.module??'').trim(),
      trigger:String(event?.trigger??'').trim(),
      position:String(event?.position??'').trim(),
      owner:String(event?.owner??'').trim(),
      changeType:String(event?.changeType??'').trim(),
      version:String(event?.version??'').trim(),
      platform:String(event?.platform??'').trim(),
      migration:{mode:'keep',targetAction:null},
      fields:(records||[]).map(record=>({wireRef:record.key,name:record.key,...record.metadata}))
    };
  }

  function collectMissingMetadata(existing,incoming){
    return Object.entries(incoming||{}).reduce((missing,[key,value])=>{
      if((existing?.[key]===undefined||existing?.[key]===null||existing?.[key]==='')&&value!==undefined&&value!==null&&value!=='')missing[key]=value;
      return missing;
    },{});
  }

  function validateSubmission(importedEvents){
    const errors=[];
    (importedEvents||[]).forEach((event,eventIndex)=>{
      const action=String(event?.action??'').trim();
      const eventPath=`events[${eventIndex}]`;
      if(!IDENTIFIER_PATTERN.test(action)||!action.includes('_'))errors.push({path:`${eventPath}.action`,code:'invalid-action',message:'正式 action 必须使用 object_action 形式的 lower_snake_case'});
      ['label','businessDomain','module','trigger','position','owner','changeType','version','platform'].forEach(key=>{
        if(!String(event?.[key]??'').trim())errors.push({path:`${eventPath}.${key}`,code:`missing-${key}`,message:`正式提交缺少 ${key}`});
      });
      if(event?.version&&!/^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/.test(String(event.version).trim()))errors.push({path:`${eventPath}.version`,code:'invalid-version',message:'版本必须使用 SemVer，例如 1.0.0'});
      const exactKeys=new Set();
      const canonicalKeys=new Map();
      (event?.params||[]).forEach((param,paramIndex)=>{
        const path=`${eventPath}.params[${paramIndex}]`;
        const key=String(param?.key??'').trim();
        const canonical=canonicalIdentifier(key);
        const submittedType=String(param?.type??'').trim();
        const rawType=submittedType.toLowerCase();
        if(!IDENTIFIER_PATTERN.test(key))errors.push({path:`${path}.key`,code:'invalid-field-key',message:'字段 key 必须使用 lower_snake_case'});
        if(exactKeys.has(key))errors.push({path:`${path}.key`,code:'duplicate-field-key',message:`字段 ${key} 重复定义`});
        exactKeys.add(key);
        if(canonicalKeys.has(canonical)&&canonicalKeys.get(canonical)!==key)errors.push({path:`${path}.key`,code:'canonical-field-collision',message:`${key} 与 ${canonicalKeys.get(canonical)} 规范化后冲突，不能自动合并`});
        else canonicalKeys.set(canonical,key);
        if(isCommonEnvelopeField(key))errors.push({path:`${path}.key`,code:'common-envelope-conflict',message:`${key} 属于公共字段，应引用公共字段契约`});
        if(!CONTRACT_TYPES.has(rawType)||submittedType!==rawType)errors.push({path:`${path}.type`,code:'invalid-field-type',message:`字段类型必须使用小写标准字典：${[...CONTRACT_TYPES].join(' / ')}`});
        if(parseBoolean(param?.required)===null)errors.push({path:`${path}.required`,code:'missing-required',message:'必须明确字段是否必填'});
        if(parseBoolean(param?.nullable)===null)errors.push({path:`${path}.nullable`,code:'missing-nullable',message:'必须明确字段是否可空'});
        if(!String(param?.description??'').trim())errors.push({path:`${path}.description`,code:'missing-field-description',message:'字段必须提供业务口径说明'});
      });
    });
    return {valid:errors.length===0,errors};
  }

  function buildChangePlan(importedEvents,assetEvents){
    const virtualAssets=new Map();
    (assetEvents||[]).forEach(event=>{
      const action=normalizeIdentifier(event?.name);
      if(!action||virtualAssets.has(action))return;
      virtualAssets.set(action,{
        event,
        fields:new Map((event.fields||[]).map(field=>[normalizeIdentifier(field?.[0]),String(field?.[0]??'').trim()])),
        fieldMeta:{...(event.fieldMeta||{})},
        governanceMetadata:{...(event.governanceMetadata||{})},
        governanceProposal:event.governanceProposal||null
      });
    });

    return (importedEvents||[]).map(importedEvent=>{
      const action=normalizeIdentifier(importedEvent?.action);
      const incomingRecords=normalizeIncomingFieldRecords(importedEvent?.params);
      const incomingFields=incomingRecords.map(record=>record.tuple);
      const eventMetadata=buildEventMetadata(importedEvent);
      const proposal=buildGovernanceProposal(importedEvent,incomingRecords);
      if(!action)return {type:'none',importedEvent,existingEvent:null,newFields:[],metadataUpdates:[],eventMetadataUpdates:{},invalid:true};
      const target=virtualAssets.get(action);

      if(!target){
        const virtualEvent={name:String(importedEvent?.action??'').trim(),fields:incomingFields.map(field=>[...field]),fieldMeta:{},governanceMetadata:{...eventMetadata}};
        incomingRecords.forEach(record=>{virtualEvent.fieldMeta[record.key]={...record.metadata}});
        virtualAssets.set(action,{
          event:virtualEvent,
          fields:new Map(incomingRecords.map(record=>[record.normalizedKey,record.key])),
          fieldMeta:{...virtualEvent.fieldMeta},
          governanceMetadata:{...eventMetadata},
          governanceProposal:proposal
        });
        return {type:'create',importedEvent,existingEvent:null,newFields:incomingFields,fieldRecords:incomingRecords,metadataUpdates:[],eventMetadataUpdates:eventMetadata,proposal};
      }

      const newRecords=[];
      const metadataUpdates=[];
      incomingRecords.forEach(record=>{
        if(!target.fields.has(record.normalizedKey)){
          target.fields.set(record.normalizedKey,record.key);
          target.fieldMeta[record.key]={...record.metadata};
          newRecords.push(record);
          return;
        }
        const actualKey=target.fields.get(record.normalizedKey);
        const missing=collectMissingMetadata(target.fieldMeta[actualKey],record.metadata);
        if(Object.keys(missing).length){
          target.fieldMeta[actualKey]={...(target.fieldMeta[actualKey]||{}),...missing};
          metadataUpdates.push({fieldName:actualKey,metadata:missing});
        }
      });
      const eventMetadataUpdates=collectMissingMetadata(target.governanceMetadata,eventMetadata);
      Object.assign(target.governanceMetadata,eventMetadataUpdates);
      const proposalChanged=JSON.stringify(target.governanceProposal)!==JSON.stringify(proposal);
      target.governanceProposal=proposal;
      const newFields=newRecords.map(record=>record.tuple);
      return {
        type:newFields.length?'fields':metadataUpdates.length||Object.keys(eventMetadataUpdates).length||proposalChanged?'metadata':'none',
        importedEvent,
        existingEvent:target.event,
        newFields,
        fieldRecords:newRecords,
        metadataUpdates,
        eventMetadataUpdates,
        proposal,
        proposalChanged
      };
    });
  }

  function sync(importedEvents,assetEvents,defaults={}){
    const validation=validateSubmission(importedEvents);
    (Array.isArray(defaults.sourceIssues)?defaults.sourceIssues:[]).forEach((issue,index)=>{
      validation.errors.push({
        path:String(issue?.path||issue?.location||`sourceIssues[${index}]`),
        code:`source-${String(issue?.code||'parse-error')}`,
        message:String(issue?.message||'源数据存在无法确认的解析问题')
      });
    });
    validation.valid=validation.errors.length===0;
    if(defaults.enforceContract!==false&&!validation.valid){
      const error=new Error(`Tracking Contract v1 存在 ${validation.errors.length} 项阻断错误`);
      error.code='TRACKING_CONTRACT_BLOCKED';
      error.validation=validation;
      throw error;
    }
    const plan=buildChangePlan(importedEvents,assetEvents);
    const summary={createdEvents:0,updatedEvents:0,addedFields:0,metadataUpdates:0,unchangedEvents:0,changedActions:[],validation,plan};
    const syncGovernanceMetadata=compactObject(defaults.governanceMetadata||{});
    const syncProposal=proposal=>proposal&&defaults.governanceProposalStatus
      ?{...proposal,reviewStatus:String(defaults.governanceProposalStatus)}
      :proposal;

    plan.forEach(change=>{
      const importedEvent=change.importedEvent||{};
      if(change.type==='create'){
        const created={
          name:String(importedEvent.action??'').trim(),
          description:String(importedEvent.label??'').trim()||String(importedEvent.action??'').trim(),
          theme:defaults.theme||'-',
          group:String(importedEvent.businessDomain??'').trim()||defaults.group||'主流程',
          domain:String(importedEvent.module??'').trim()||defaults.domain||'PRD 导入',
          status:defaults.status||'开发中',
          rule:defaults.rule||String(importedEvent.trigger??'').trim()||'由 PRD 提交导入，待补充上报时机',
          source:defaults.source||'PRD 提交',
          fields:change.newFields.map(field=>[...field]),
          fieldMeta:{},
          governanceMetadata:{...(change.eventMetadataUpdates||{}),...syncGovernanceMetadata},
          governanceProposal:syncProposal(change.proposal)
        };
        (change.fieldRecords||[]).forEach(record=>{created.fieldMeta[record.key]={...record.metadata}});
        assetEvents.push(created);
        summary.createdEvents+=1;
        summary.addedFields+=change.newFields.length;
        summary.metadataUpdates+=1+Object.keys(created.governanceMetadata).length+(change.fieldRecords||[]).reduce((sum,record)=>sum+Object.keys(record.metadata).length,0);
        summary.changedActions.push(String(importedEvent.action??'').trim());
        return;
      }

      if(change.type==='fields'||change.type==='metadata'){
        const action=normalizeIdentifier(importedEvent.action);
        const existingEvent=assetEvents.find(event=>normalizeIdentifier(event.name)===action);
        if(!existingEvent){
          summary.unchangedEvents+=1;
          return;
        }
        existingEvent.fields=existingEvent.fields||[];
        existingEvent.fields.push(...change.newFields.map(field=>[...field]));
        existingEvent.fieldMeta=existingEvent.fieldMeta||{};
        (change.fieldRecords||[]).forEach(record=>{
          existingEvent.fieldMeta[record.key]={...(existingEvent.fieldMeta[record.key]||{}),...record.metadata};
          summary.metadataUpdates+=Object.keys(record.metadata).length;
        });
        (change.metadataUpdates||[]).forEach(update=>{
          existingEvent.fieldMeta[update.fieldName]={...(existingEvent.fieldMeta[update.fieldName]||{}),...update.metadata};
          summary.metadataUpdates+=Object.keys(update.metadata).length;
        });
        existingEvent.governanceMetadata=existingEvent.governanceMetadata||{};
        Object.assign(existingEvent.governanceMetadata,change.eventMetadataUpdates||{},syncGovernanceMetadata);
        existingEvent.governanceProposal=syncProposal(change.proposal);
        if(change.proposalChanged)summary.metadataUpdates+=1;
        summary.metadataUpdates+=Object.keys(change.eventMetadataUpdates||{}).length;
        summary.updatedEvents+=1;
        summary.addedFields+=change.newFields.length;
        summary.changedActions.push(existingEvent.name);
        return;
      }

      if(Object.keys(syncGovernanceMetadata).length&&change.existingEvent){
        change.existingEvent.governanceMetadata=change.existingEvent.governanceMetadata||{};
        Object.assign(change.existingEvent.governanceMetadata,syncGovernanceMetadata);
        change.existingEvent.governanceProposal=syncProposal(change.proposal||change.existingEvent.governanceProposal);
        summary.metadataUpdates+=Object.keys(syncGovernanceMetadata).length+(defaults.governanceProposalStatus?1:0);
        summary.updatedEvents+=1;
        summary.changedActions.push(change.existingEvent.name);
        return;
      }
      summary.unchangedEvents+=1;
    });

    return summary;
  }

  return {normalizeIdentifier,inferFieldType,normalizeFieldType,parseBoolean,normalizeIncomingFields,validateSubmission,buildChangePlan,sync};
});
