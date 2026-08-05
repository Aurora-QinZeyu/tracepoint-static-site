(function initProductDemandReconciler(root,factory){
  const api=factory();
  if(typeof module==='object'&&module.exports)module.exports=api;
  root.ProductDemandReconciler=api;
})(typeof globalThis!=='undefined'?globalThis:this,function createProductDemandReconciler(){
  const COMMON_FIELDS=new Set([
    'business_type','theme','action','distinct_id','time','utc_time','hrefUrl','device_id','sessionId',
    'user_id','uniqueId','product','app_version','device_type','user_version','device_link_id','vip_status',
    'is_visitor','source','plan','traceId','firstenterurl','referrerurl','page','page_timestamp','page_url',
    'refer_page','refer_page_timestamp','refer_page_url','count','properties','platform','session_id'
  ].map(normalizedFieldKey));
  const CONCEPTS=[
    ['chatbot','domain',['chatbot','chat bot','聊天机器人','ai 对话','对话角色','角色']],
    ['favorite','object',['收藏','favorite','favorites']],
    ['feedback','object',['反馈','feedback']],
    ['message','object',['消息','会话','message','conversation']],
    ['image','object',['生图','图片','image']],
    ['home','context',['首页','home']],
    ['list','object',['列表','list']],
    ['page','context',['页面','页','page']],
    ['popup','object',['弹窗','弹层','popup']],
    ['button','object',['按钮','button']],
    ['exposure','interaction',['曝光','展示','露出','exposure','expose','show']],
    ['submit','interaction',['提交','submit']],
    ['click','interaction',['点击','click','tap']],
    ['close','interaction',['关闭','close']],
    ['generate','interaction',['生成','generate']],
    ['enter','interaction',['进入','访问','enter','visit']],
    ['leave','interaction',['离开','leave']],
    ['toggle','interaction',['切换','开关','toggle']],
    ['download','interaction',['下载','download']],
    ['send','interaction',['发送','send']],
    ['receive','interaction',['接收','返回','receive']]
  ];
  const CONCEPT_CATEGORY=new Map(CONCEPTS.map(([name,category])=>[name,category]));
  const INTERACTION_TOKENS=new Set(CONCEPTS.filter(([,category])=>category==='interaction').map(([name])=>name));
  const FIELD_HINTS=[
    {semantic:'chatbot-identity',test:/角色\s*(?:id|标识)|chatbot\s*(?:id|identifier)/i,key:'chatbot_id',type:'string',description:'关联 Chatbot 角色 ID'},
    {semantic:'conversation-identity',test:/会话\s*(?:id|标识)|conversation\s*(?:id|identifier)/i,key:'conversation_id',type:'string',description:'关联会话 ID'},
    {semantic:'message-identity',test:/message\s*(?:id|identifier)|消息\s*(?:id|标识)/i,key:'message_id',type:'string',description:'关联消息 ID'},
    {semantic:'favorite-action',test:/收藏\s*(?:\/|\s+)\s*取消收藏|收藏或取消收藏|收藏状态|收藏动作/i,key:'favorite_action',type:'string',allowedValues:'add | remove',description:'本次收藏动作：add 收藏，remove 取消收藏'},
    {semantic:'entry-source',test:/入口来源|来源入口|入口位置|具体入口|二级入口|entry[_\s-]*point|location\s*2/i,key:'entry_point',type:'string',description:'进入当前页面或功能的业务入口'},
    {semantic:'trigger-scene',test:/触发场景|来源场景|入口场景|trigger\s*scene/i,key:'trigger_scene',type:'string',description:'触发该行为的业务场景'},
    {semantic:'operation-success',test:/是否成功|成功\s*\/\s*失败|上报结果|is\s*success/i,key:'is_success',type:'boolean',allowedValues:'true | false',description:'本次操作是否成功：true 成功，false 失败'},
    {semantic:'list-position',test:/列表[^\s，。；;]*位置|位置序号|排序|第几个|position|sort/i,key:'position',type:'integer',description:'对象在当前列表中的位置'},
    {semantic:'favorite-count',test:/收藏数量|收藏数|favorite\s*count/i,key:'favorite_count',type:'integer',description:'当前收藏对象数量'}
  ];
  const NEW_FIELD_PROPOSALS={
    'chatbot-identity':'chatbot_role_id',
    'conversation-identity':'chat_session_id',
    'message-identity':'chat_message_id',
    'favorite-action':'favorite_operation',
    'entry-source':'entry_source',
    'trigger-scene':'interaction_scene',
    'operation-success':'operation_success',
    'list-position':'item_position',
    'favorite-count':'favorites_total'
  };
  const ACTION_TEMPLATES=[
    {test:/收藏.*列表.*(曝光|展示)|收藏.*页面.*(曝光|展示)/,action:'chatbot_favorites_page_exposure'},
    {test:/收藏.*(点击|按钮)|点击.*收藏/,action:'chatbot_favorite_click'},
    {test:/角色.*封面.*(曝光|展示)/,action:'chatbot_exposure_direct'},
    {test:/(?:反馈|feedback).*(?:提交|submit)/i,action:'chatbot_message_feedback_submit'},
    {test:/生图.*(点击|按钮)|生成.*图片.*点击/,action:'chatbot_message_generate_image_click'}
  ];
  const TYPE_ALIASES={bool:'boolean',int:'integer',long:'integer',float:'number',double:'number',str:'string',text:'string'};

  function textOf(value){return String(value??'').trim().toLowerCase()}
  function normalizeSearchText(value){
    return textOf(value)
      .replace(/chatbo(?!t)/g,'chatbot')
      .replace(/chat\s+bot/g,'chatbot')
      .replace(/[_./:-]+/g,' ')
      .replace(/\s+/g,' ')
      .trim();
  }
  function canonicalIdentifier(value){
    return String(value??'').trim()
      .replace(/([a-z0-9])([A-Z])/g,'$1_$2')
      .replace(/[^A-Za-z0-9]+/g,'_')
      .replace(/^_+|_+$/g,'')
      .toLowerCase();
  }
  function normalizedFieldKey(value){return canonicalIdentifier(value).replace(/_/g,'')}
  function normalizeType(value){
    const normalized=textOf(value)||'unknown';
    return TYPE_ALIASES[normalized]||normalized;
  }
  function parseOptionalBoolean(value){
    if(typeof value==='boolean')return value;
    const normalized=textOf(value);
    if(['true','1','是','必填','required','yes'].includes(normalized))return true;
    if(['false','0','否','可选','optional','no'].includes(normalized))return false;
    return undefined;
  }
  function unique(values){return [...new Set((values||[]).map(value=>String(value).trim().toLowerCase()).filter(Boolean))]}
  function tokens(value){
    const text=normalizeSearchText(value);
    return new Set(CONCEPTS.filter(([, ,aliases])=>aliases.some(alias=>text.includes(alias))).map(([name])=>name));
  }
  function intersection(left,right){return [...left].filter(value=>right.has(value))}
  function compactText(value){return normalizeSearchText(value).replace(/\s+/g,'')}
  function bigrams(value){
    const text=compactText(value);
    if(!text)return [];
    if(text.length===1)return [text];
    return Array.from({length:text.length-1},(_,index)=>text.slice(index,index+2));
  }
  function diceSimilarity(left,right){
    const leftPairs=bigrams(left),rightPairs=bigrams(right);
    if(!leftPairs.length||!rightPairs.length)return 0;
    const counts=new Map();
    leftPairs.forEach(pair=>counts.set(pair,(counts.get(pair)||0)+1));
    let matches=0;
    rightPairs.forEach(pair=>{
      const count=counts.get(pair)||0;
      if(!count)return;
      matches+=1;
      counts.set(pair,count-1);
    });
    return (2*matches)/(leftPairs.length+rightPairs.length);
  }
  function eventText(event){
    return [event?.name,event?.description,event?.rule,event?.group,event?.domain,event?.governanceMetadata?.displayName,event?.governanceMetadata?.businessDomain,event?.governanceMetadata?.module,event?.governanceMetadata?.trigger].map(normalizeSearchText).join(' ');
  }
  function rawRequestText(request){return [request?.label,request?.trigger,request?.description,request?.goal].map(value=>String(value??'').trim()).join(' ').trim()}
  function requestText(request){return [request?.label,request?.trigger,request?.description,request?.goal].map(normalizeSearchText).join(' ').trim()}
  function extractIntent(request){
    const text=requestText(request);
    const allTokens=tokens(`${text} ${request?.action||''} ${request?.preferredAction||''}`);
    const byCategory=category=>[...allTokens].filter(token=>CONCEPT_CATEGORY.get(token)===category);
    return {
      text,
      tokens:[...allTokens],
      domains:byCategory('domain'),
      objects:byCategory('object'),
      contexts:byCategory('context'),
      interactions:byCategory('interaction')
    };
  }
  function actionTemplate(request){
    const combined=requestText(request);
    return ACTION_TEMPLATES.find(item=>item.test.test(combined))||null;
  }
  function explicitAction(request){return String(request?.preferredAction||request?.action||'').trim()}
  function eventInteractionTokens(event){
    const fromAction=intersection(tokens(event?.name),INTERACTION_TOKENS);
    if(fromAction.length)return fromAction;
    return intersection(tokens([event?.description,event?.rule,event?.domain].map(normalizeSearchText).join(' ')),INTERACTION_TOKENS);
  }
  function actionConflict(requestTokens,event){
    const requested=intersection(requestTokens,INTERACTION_TOKENS);
    const observed=eventInteractionTokens(event);
    if(!requested.length||!observed.length||requested.some(token=>observed.includes(token)))return [];
    return [`动作语义冲突：需求是 ${requested.join(' / ')}，资产是 ${observed.join(' / ')}`];
  }
  function scoreAction(request,event,intent,template){
    const explicit=explicitAction(request);
    const requestTokens=new Set(intent.tokens);
    const assetTokens=tokens(eventText(event));
    const matched=intersection(requestTokens,assetTokens);
    const matchedFacets={
      domain:matched.filter(token=>CONCEPT_CATEGORY.get(token)==='domain'),
      object:matched.filter(token=>CONCEPT_CATEGORY.get(token)==='object'),
      context:matched.filter(token=>CONCEPT_CATEGORY.get(token)==='context'),
      interaction:matched.filter(token=>CONCEPT_CATEGORY.get(token)==='interaction')
    };
    const conflicts=actionConflict(requestTokens,event);
    const reasons=[];
    const name=textOf(event?.name);
    let result=0;
    if(explicit&&name===textOf(explicit)){
      result=100;
      reasons.push('用户明确选择该 Raw Action');
    }else{
      matched.forEach(token=>{
        const category=CONCEPT_CATEGORY.get(token);
        result+=category==='interaction'?28:category==='domain'?20:category==='object'?16:12;
      });
      if(requestTokens.size)result+=Math.round((matched.length/requestTokens.size)*20);
      const labelSimilarity=Math.max(
        diceSimilarity(request?.label,event?.description),
        diceSimilarity(request?.label,event?.name),
        diceSimilarity(intent.text,event?.description)
      );
      if(labelSimilarity>=0.34){
        result+=Math.round(labelSimilarity*18);
        reasons.push(`名称相似度 ${Math.round(labelSimilarity*100)}%`);
      }
      if(normalizeSearchText(event?.description)===normalizeSearchText(request?.label)&&request?.label){
        result+=35;
        reasons.push('事件名称完全一致');
      }
      if(template&&name===textOf(template.action)){
        result=Math.max(result,96);
        reasons.push('对象与动作命中现有 Action 模板');
      }
      if(conflicts.length)result-=55;
      if(matched.length)reasons.push(`命中 ${matched.join(' / ')} 语义`);
    }
    const hasRequestedInteraction=intent.interactions.length>0;
    const hasInteractionMatch=matchedFacets.interaction.length>0;
    const hasSubjectMatch=matchedFacets.object.length>0||matchedFacets.domain.length>0;
    const isExplicit=Boolean(explicit&&name===textOf(explicit));
    const isTemplate=Boolean(template&&name===textOf(template.action));
    const exactDescription=Boolean(request?.label&&normalizeSearchText(event?.description)===normalizeSearchText(request.label));
    const exact= isExplicit || (!conflicts.length&&hasRequestedInteraction&&(
      isTemplate||(!template&&(exactDescription||(result>=78&&hasInteractionMatch&&hasSubjectMatch)) )
    ));
    return {
      event,
      score:Math.max(0,Math.min(100,result)),
      tier:exact?'exact':'fuzzy',
      reasons:reasons.length?reasons:['与需求具有部分语义关联'],
      matchedFacets,
      conflicts
    };
  }
  function rankActionCandidates(request,assets,intent){
    const template=actionTemplate(request);
    const explicit=explicitAction(request);
    const byName=new Map();
    (assets||[]).forEach(event=>{
      const name=textOf(event?.name);
      if(name&&!byName.has(name))byName.set(name,event);
    });
    return [...byName.values()]
      .map(event=>scoreAction(request,event,intent,template))
      .filter(candidate=>candidate.tier==='exact'||candidate.score>=18||(
        explicit&&diceSimilarity(explicit,candidate.event?.name)>=0.42
      )||(
        candidate.conflicts.length&&(
          candidate.matchedFacets.domain.length||candidate.matchedFacets.object.length||candidate.matchedFacets.context.length
        )
      ))
      .sort((left,right)=>{
        if(left.tier!==right.tier)return left.tier==='exact'?-1:1;
        if(right.score!==left.score)return right.score-left.score;
        return textOf(left.event?.name).localeCompare(textOf(right.event?.name));
      })
      .slice(0,8);
  }
  function proposedAction(request,intent){
    const template=actionTemplate(request);
    if(template)return template.action;
    const ordered=[...intent.domains,...intent.objects,...intent.contexts,...intent.interactions];
    const fallbackWords=normalizeSearchText(request?.label).match(/[a-z][a-z0-9]+/g)||[];
    const parts=unique([...ordered,...fallbackWords]).filter(part=>part!=='button');
    const suffix=intent.interactions.length?'':'event';
    const value=canonicalIdentifier([...parts,suffix].filter(Boolean).join('_'));
    return value&&value.includes('_')?value:`product_${value||'event'}`;
  }
  function sourceAllowedValues(vocabulary){
    if(!vocabulary)return [];
    return unique(vocabulary.allowedValues||[]);
  }
  function requestedAllowedValues(hint,request,param){
    const supplied=Array.isArray(param?.allowedValues)?param.allowedValues:String(param?.allowedValues||'').split(/[|,，;；/]/);
    const defaults=String(hint?.allowedValues||'').split(/[|,，;；/]/);
    if(hint?.key!=='trigger_scene')return unique([...defaults,...supplied]);
    const match=rawRequestText(request).match(/触发场景[^（(]*[（(]([^）)]+)[）)]/i);
    return unique(match?[...defaults,...supplied,...match[1].split(/[、,，|/]/)]:[...defaults,...supplied]);
  }
  function fieldHintFor(value){
    const text=normalizeSearchText(value);
    const canonical=canonicalIdentifier(value);
    return FIELD_HINTS.find(hint=>hint.key===canonical||hint.test.test(text))||null;
  }
  function extractFieldIntents(request){
    const source=requestText(request);
    const intents=[];
    FIELD_HINTS.forEach(hint=>{
      if(!hint.test.test(source))return;
      intents.push({semantic:hint.semantic,key:hint.key,type:hint.type,description:hint.description,hint,rawText:source,allowedValues:requestedAllowedValues(hint,request)});
    });
    const fieldIntent=String(request?.fieldIntent||'').trim();
    const supplied=[...(request?.params||[]),...(request?.fields||[]),...(fieldIntent?[{description:fieldIntent}]:[])];
    supplied.forEach(param=>{
      const rawKey=String(param?.key||param?.name||'').trim();
      const description=String(param?.description||param?.meaning||'').trim();
      if(!rawKey&&!description)return;
      if(rawKey&&COMMON_FIELDS.has(normalizedFieldKey(rawKey)))return;
      const hint=fieldHintFor(`${rawKey} ${description}`);
      intents.push({
        semantic:hint?.semantic||'',
        key:rawKey||hint?.key||'',
        type:normalizeType(param?.type||hint?.type||'string'),
        description:description||hint?.description||'',
        hint,
        rawText:`${rawKey} ${description}`.trim(),
        allowedValues:requestedAllowedValues(hint,request,param),
        required:parseOptionalBoolean(param?.required),
        nullable:parseOptionalBoolean(param?.nullable)
      });
    });
    const seen=new Set();
    return intents.filter(intent=>{
      const identity=intent.semantic||normalizedFieldKey(intent.key)||normalizeSearchText(intent.rawText);
      if(!identity||seen.has(identity))return false;
      seen.add(identity);
      return true;
    });
  }
  function fieldValues(field,event){
    const tupleValues=(field||[]).slice(3);
    const meta=event?.fieldMeta?.[field?.[0]]||{};
    return unique([...tupleValues,...(meta.allowedValues||[])].flatMap(value=>String(value).split(/[|,，;；/]/)));
  }
  function fieldDescription(field,event){
    const meta=event?.fieldMeta?.[field?.[0]]||{};
    return String(meta.description||field?.[2]||'').trim();
  }
  function buildFieldVocabulary(assets){
    const groups=new Map();
    (assets||[]).forEach(event=>{
      (event?.fields||[]).forEach(field=>{
        const key=String(field?.[0]||'').trim();
        if(!key||COMMON_FIELDS.has(normalizedFieldKey(key)))return;
        const identity=normalizedFieldKey(key);
        if(!identity)return;
        if(!groups.has(identity))groups.set(identity,{
          key,
          normalizedKey:identity,
          types:new Set(),
          descriptions:new Set(),
          allowedValues:new Set(),
          sourceActions:new Set(),
          requiredValues:new Set(),
          nullableValues:new Set(),
          semantic:'',
          occurrences:[]
        });
        const group=groups.get(identity);
        const type=normalizeType(field?.[1]);
        const description=fieldDescription(field,event);
        const meta=event?.fieldMeta?.[key]||{};
        if(type&&type!=='unknown')group.types.add(type);
        if(description)group.descriptions.add(description);
        fieldValues(field,event).forEach(value=>group.allowedValues.add(value));
        if(event?.name)group.sourceActions.add(String(event.name));
        if(typeof meta.required==='boolean')group.requiredValues.add(meta.required);
        if(typeof meta.nullable==='boolean')group.nullableValues.add(meta.nullable);
        group.semantic=group.semantic||fieldHintFor(`${key} ${description}`)?.semantic||'';
        group.occurrences.push({event,field});
      });
    });
    return [...groups.values()].map(group=>{
      const conflicts=[];
      if(group.types.size>1)conflicts.push(`同一 key 存在多种类型：${[...group.types].join(' / ')}`);
      if(group.requiredValues.size>1)conflicts.push('同一 key 的必填约束不一致');
      if(group.nullableValues.size>1)conflicts.push('同一 key 的可空约束不一致');
      return {
        key:group.key,
        normalizedKey:group.normalizedKey,
        type:[...group.types][0]||'unknown',
        description:[...group.descriptions][0]||'',
        descriptions:[...group.descriptions],
        allowedValues:[...group.allowedValues],
        sourceActions:[...group.sourceActions],
        required:group.requiredValues.size===1?[...group.requiredValues][0]:undefined,
        nullable:group.nullableValues.size===1?[...group.nullableValues][0]:undefined,
        semantic:group.semantic,
        occurrences:group.occurrences,
        conflicts
      };
    });
  }
  function scoreFieldIntent(intent,vocabulary){
    const reasons=[];
    let result=0;
    const exactKey=Boolean(intent.key&&normalizedFieldKey(intent.key)===vocabulary.normalizedKey);
    const exactSemantic=Boolean(intent.semantic&&vocabulary.semantic&&intent.semantic===vocabulary.semantic);
    if(exactKey){result=100;reasons.push('字段 key 完全一致')}
    else if(exactSemantic){result=92;reasons.push('字段业务语义一致')}
    else{
      const query=`${intent.key||''} ${intent.description||''} ${intent.rawText||''}`;
      const target=`${vocabulary.key} ${vocabulary.descriptions.join(' ')}`;
      const similarity=diceSimilarity(query,target);
      if(similarity>=0.2){
        result=Math.round(similarity*80);
        reasons.push(`字段名称与说明相似度 ${Math.round(similarity*100)}%`);
      }
    }
    return {
      vocabulary,
      key:vocabulary.key,
      type:vocabulary.type,
      description:vocabulary.description,
      sourceActions:vocabulary.sourceActions,
      score:Math.max(0,Math.min(100,result)),
      tier:exactKey||exactSemantic?'exact':'fuzzy',
      reasons,
      conflicts:[...vocabulary.conflicts]
    };
  }
  function publicFieldCandidate(candidate){
    return {
      key:candidate.key,
      type:candidate.type,
      description:candidate.description,
      sourceActions:[...candidate.sourceActions],
      score:candidate.score,
      tier:candidate.tier,
      reasons:[...candidate.reasons],
      conflicts:[...candidate.conflicts]
    };
  }
  function proposedFieldKey(intent){
    const requested=canonicalIdentifier(intent.key);
    if(requested)return requested;
    if(intent.hint?.key)return intent.hint.key;
    const words=normalizeSearchText(intent.description||intent.rawText).match(/[a-z][a-z0-9]+/g)||[];
    const value=canonicalIdentifier(words.join('_'));
    return value&&value.includes('_')?value:'proposed_field';
  }
  function newFieldProposalKey(intent){
    return NEW_FIELD_PROPOSALS[intent.semantic]||proposedFieldKey(intent);
  }
  function fieldSelectionId(intent){
    return intent.semantic||normalizedFieldKey(intent.key)||normalizeSearchText(intent.rawText);
  }
  function rankFieldVocabulary(intent,vocabulary){
    return vocabulary
      .map(item=>scoreFieldIntent(intent,item))
      .filter(candidate=>candidate.tier==='exact'||candidate.score>=24)
      .sort((left,right)=>right.score-left.score||left.key.localeCompare(right.key));
  }
  function chooseExactField(intent,ranked){
    const exact=ranked.filter(candidate=>candidate.tier==='exact');
    const exactKey=exact.find(candidate=>intent.key&&normalizedFieldKey(intent.key)===candidate.vocabulary.normalizedKey);
    if(exactKey&&!exactKey.conflicts.length)return exactKey;
    if(exact.length===1&&!exact[0].conflicts.length)return exact[0];
    return null;
  }
  function resolvedField(intent,selected,baseStatus,candidates){
    const requestedValues=unique(intent.allowedValues||[]);
    const existingValues=sourceAllowedValues(selected.vocabulary);
    const addedValues=requestedValues.filter(value=>!existingValues.includes(value));
    return {
      intent:intent.semantic||intent.rawText,
      requestedKey:intent.key||'',
      key:selected.key,
      type:selected.type==='unknown'?intent.type:selected.type,
      description:selected.description||intent.description,
      allowedValues:unique([...existingValues,...requestedValues]).join(' | '),
      addedValues,
      status:addedValues.length?'value-add':baseStatus,
      sourceAction:selected.sourceActions[0]||'',
      sourceActions:[...selected.sourceActions],
      required:selected.vocabulary.required,
      nullable:selected.vocabulary.nullable,
      candidates:candidates.slice(0,5).map(publicFieldCandidate),
      canonicalProposal:false,
      conflicts:[...selected.conflicts]
    };
  }
  function unresolvedField(intent,candidates){
    const deduplicated=candidates.filter((candidate,index,list)=>list.findIndex(item=>item.key===candidate.key)===index).slice(0,5);
    return {
      intent:intent.semantic||intent.rawText,
      requestedKey:intent.key||'',
      key:proposedFieldKey(intent),
      type:intent.type,
      description:intent.description,
      allowedValues:unique(intent.allowedValues||[]).join(' | '),
      addedValues:[],
      status:'fuzzy',
      sourceAction:'',
      sourceActions:[],
      required:intent.required,
      nullable:intent.nullable,
      candidates:deduplicated.map(publicFieldCandidate),
      newProposalKey:newFieldProposalKey(intent),
      canonicalProposal:true,
      conflicts:unique(deduplicated.flatMap(candidate=>candidate.conflicts))
    };
  }
  function createNewField(intent,useAlternativeProposal=false){
    const key=useAlternativeProposal?newFieldProposalKey(intent):proposedFieldKey(intent);
    return {
      intent:intent.semantic||intent.rawText,
      requestedKey:intent.key||'',
      key,
      type:intent.type,
      description:intent.description,
      allowedValues:unique(intent.allowedValues||[]).join(' | '),
      addedValues:[],
      status:'new',
      sourceAction:'',
      sourceActions:[],
      required:intent.required,
      nullable:intent.nullable,
      candidates:[],
      newProposalKey:newFieldProposalKey(intent),
      canonicalProposal:true,
      conflicts:[]
    };
  }
  function resolveField(intent,vocabulary,matchedEvent,selection){
    if(selection==='__new__')return createNewField(intent,true);
    if(selection){
      const selectedKey=normalizedFieldKey(selection);
      const localVocabulary=matchedEvent?buildFieldVocabulary([matchedEvent]):[];
      const local=localVocabulary.find(candidate=>candidate.normalizedKey===selectedKey);
      const global=vocabulary.find(candidate=>candidate.normalizedKey===selectedKey);
      const selectedVocabulary=local||global;
      if(selectedVocabulary){
        const candidate=scoreFieldIntent(intent,selectedVocabulary);
        const resolved=resolvedField(intent,candidate,local?'existing':'reused',[candidate]);
        resolved.explicitSelection=true;
        return resolved;
      }
    }
    const localRanked=matchedEvent?rankFieldVocabulary(intent,buildFieldVocabulary([matchedEvent])):[];
    const localExact=localRanked.filter(candidate=>candidate.tier==='exact');
    const selectedLocal=chooseExactField(intent,localRanked);
    if(selectedLocal)return resolvedField(intent,selectedLocal,'existing',localRanked);
    if(localExact.length)return unresolvedField(intent,localExact.concat(localRanked.filter(candidate=>candidate.tier==='fuzzy')));

    const ranked=rankFieldVocabulary(intent,vocabulary);
    const globalExact=ranked.filter(candidate=>candidate.tier==='exact');
    const selected=chooseExactField(intent,ranked);
    if(selected)return resolvedField(intent,selected,'reused',ranked);
    const ambiguousExact=globalExact.length>0;
    const fuzzy=ranked.filter(candidate=>candidate.tier==='fuzzy'||candidate.conflicts.length);
    if(ambiguousExact||fuzzy.length)return unresolvedField(intent,(ambiguousExact?globalExact:[]).concat(fuzzy));
    return createNewField(intent);
  }
  function inferBusinessDomain(intent,matchedEvent,item){
    const inferredTokens=tokens(`${item?.proposedAction||''} ${item?.inputLabel||''}`);
    return String(matchedEvent?.governanceMetadata?.businessDomain||matchedEvent?.group||((intent.domains.includes('chatbot')||inferredTokens.has('chatbot'))?'Chatbot':'待确认')).trim()||'待确认';
  }
  function chatbotModule(item){
    const text=`${item?.inputLabel||''} ${item?.inputDescription||''} ${item?.proposedAction||''}`.toLowerCase();
    if(/(?:result|generate_image|生图|生成结果)/.test(text))return '对话结果';
    if(/(?:page_exposure|exposure_direct|页面曝光|封面曝光|进入)/.test(text))return '对话入口';
    if(/(?:message|feedback|消息|会话)/.test(text))return '消息与会话';
    return '对话过程';
  }
  function inferModule(intent,matchedEvent,item){
    const explicit=String(matchedEvent?.governanceMetadata?.module||matchedEvent?.domain||'').trim();
    if(explicit&&!/^(?:待归类|前端代码埋点|Chatbot 事件)$/.test(explicit))return explicit;
    if(inferBusinessDomain(intent,matchedEvent,item)==='Chatbot'){
      if(!matchedEvent&&!intent.interactions.length)return '待确认';
      return chatbotModule(item);
    }
    return '待确认';
  }
  function publicActionCandidate(candidate){
    return {
      event:candidate.event,
      score:candidate.score,
      tier:candidate.tier,
      reasons:[...candidate.reasons],
      matchedFacets:{
        domain:[...candidate.matchedFacets.domain],
        object:[...candidate.matchedFacets.object],
        context:[...candidate.matchedFacets.context],
        interaction:[...candidate.matchedFacets.interaction]
      },
      conflicts:[...candidate.conflicts]
    };
  }
  function buildAiRecommendation(item){
    const fields=item?.fields||[];
    const changedFields=fields.filter(field=>field.status!=='existing');
    const unresolvedFields=fields.filter(field=>field.status==='fuzzy');
    const actionTier=item?.actionResolution?.tier||'new';
    let decision='create_new';
    if(actionTier==='fuzzy')decision='needs_review';
    else if(actionTier==='exact')decision=changedFields.length?'extend_existing':'reuse_existing';
    const targetAction=decision==='needs_review'?null:item?.proposedAction||item?.matchedEvent?.name||null;
    const reason=decision==='reuse_existing'
      ?'现有 Action 覆盖相同操作，需求字段可直接沿用。'
      :decision==='extend_existing'
      ?`现有 Action 覆盖相同操作，建议补充 ${changedFields.length} 项字段或枚举定义。`
      :decision==='needs_review'
      ?'存在相近 Action，但当前证据不足以自动确认复用关系。'
      :'未找到可直接复用的 Action，建议生成新的 Canonical proposal。';
    const warnings=[];
    if(decision==='needs_review')warnings.push('必须先选择或排除相近 Action');
    if(unresolvedFields.length)warnings.push(`${unresolvedFields.length} 个字段存在多个相近 Key`);
    if(decision==='create_new')warnings.push('新 Action 仅为待确认提案');
    warnings.push('当前结果由本地规则与资产检索生成，未调用模型 API');
    return {
      schemaVersion:'tracking-ai-recommendation/v1',
      mode:'simulated_local',
      decision,
      targetAction,
      candidateActions:(item?.actionResolution?.candidates||[]).map(candidate=>candidate?.event?.name).filter(Boolean),
      suggestedFields:fields.map(field=>({
        key:field.key||field.newProposalKey||'',
        type:field.type||'string',
        status:field.status||'new',
        sourceActions:Array.isArray(field.sourceActions)?[...field.sourceActions]:field.sourceActions?[String(field.sourceActions)]:[],
        reason:field.description||field.intent||''
      })),
      confidence:Number.isFinite(item?.confidence)&&item.confidence>0?Math.round(item.confidence)/100:null,
      reason,
      warnings
    };
  }
  function analyze(requests,assets){
    const fieldVocabulary=buildFieldVocabulary(assets);
    return {requests:(requests||[]).map(request=>{
      const intent=extractIntent(request);
      const ranked=rankActionCandidates(request,assets,intent);
      const exact=ranked.find(candidate=>candidate.tier==='exact');
      const matchedEvent=exact?.event||null;
      const tier=exact?'exact':ranked.length?'fuzzy':'new';
      const decision=tier==='exact'?'reuse':tier==='fuzzy'?'review':'new';
      const generatedAction=proposedAction(request,intent);
      const item={
        inputLabel:request?.label||'',
        inputDescription:request?.trigger||request?.description||'',
        intent,
        decision,
        confidence:ranked[0]?.score||0,
        matchedEvent,
        proposedAction:matchedEvent?.name||generatedAction,
        canonicalProposal:!matchedEvent,
        actionResolution:{
          tier,
          selectedAction:matchedEvent?.name||null,
          candidates:ranked.map(publicActionCandidate)
        },
        relatedEvents:ranked.map(candidate=>candidate.event),
        fields:[],
        evidence:tier==='exact'
          ?`明确命中现有 Action ${matchedEvent.name}`
          :tier==='fuzzy'
          ?`找到 ${ranked.length} 个可能相关的现有 Action，需要选择后才能复用`
          :'未找到可复用或语义相关的现有 Action；新名称仅为待确认提案'
      };
      item.fields=extractFieldIntents(request).map(fieldIntent=>{
        const selectionId=fieldSelectionId(fieldIntent);
        const selection=request?.fieldSelections?.[selectionId]||'';
        return {...resolveField(fieldIntent,fieldVocabulary,matchedEvent,selection),selectionId,selectedField:selection};
      });
      item.businessDomain=inferBusinessDomain(intent,matchedEvent,item);
      item.module=inferModule(intent,matchedEvent,item);
      item.aiRecommendation=buildAiRecommendation(item);
      return item;
    })};
  }
  function toContractEvents(analysis){
    return (analysis?.requests||[]).map(item=>({
      label:item.inputLabel,
      action:item.proposedAction,
      businessDomain:item.businessDomain||'待确认',
      module:item.module||'待确认',
      trigger:item.inputDescription,
      position:'待产品补充',
      owner:'产品负责人',
      changeType:item.decision==='reuse'&&!item.canonicalProposal?'keep':'',
      version:'1.0.0',
      platform:'Web / iOS / Android',
      canonicalProposal:item.canonicalProposal,
      reconciliation:item,
      params:item.fields.map(field=>({
        key:field.key,
        type:field.type==='int'?'integer':field.type==='bool'?'boolean':field.type,
        required:typeof field.required==='boolean'?String(field.required):'',
        nullable:typeof field.nullable==='boolean'?String(field.nullable):'',
        allowedValues:field.allowedValues,
        addedValues:field.addedValues,
        example:'',
        description:field.description,
        sourceStatus:field.status,
        sourceAction:field.sourceAction,
        sourceActions:field.sourceActions,
        canonicalProposal:field.canonicalProposal,
        candidates:field.candidates,
        conflicts:field.conflicts
      }))
    }));
  }
  return {analyze,toContractEvents,buildAiRecommendation,chatbotModule,isCommonField:key=>COMMON_FIELDS.has(normalizedFieldKey(key))};
});
