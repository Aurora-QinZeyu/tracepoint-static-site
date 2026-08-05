(function initPersonalAiClient(root,factory){
  const api=factory(root);
  if(typeof module==='object'&&module.exports)module.exports=api;
  root.TracepointPersonalAI=api;
})(typeof globalThis!=='undefined'?globalThis:this,function createPersonalAiClientModule(root){
  const DEFAULT_ENDPOINT='/api/personal-ai';
  const ALLOWED_TYPES=new Set(['string','integer','number','boolean','datetime','object','array']);

  function clientError(code,message,status){
    const error=new Error(message);
    error.code=code;
    if(status)error.status=status;
    return error;
  }

  function normalizedEndpoint(value){
    return String(value||DEFAULT_ENDPOINT).trim().replace(/\/+$/,'')||DEFAULT_ENDPOINT;
  }

  function resolveTokenProvider(options){
    return options?.getAccessToken
      ||root?.TRACEPOINT_PERSONAL_AI_CONFIG?.getAccessToken
      ||root?.TracepointAuth?.getAccessToken;
  }

  function normalizeParam(param){
    const key=String(param?.key||'').trim();
    if(!/^[a-z][a-z0-9_]{0,63}$/.test(key))throw clientError('invalid_ai_response',`模型返回了无效字段 Key：${key||'空值'}`);
    const type=String(param?.type||'string').trim().toLowerCase();
    if(!ALLOWED_TYPES.has(type))throw clientError('invalid_ai_response',`模型返回了不支持的字段类型：${type}`);
    const allowedValues=Array.isArray(param?.allowedValues)
      ?param.allowedValues.map(value=>String(value).trim()).filter(Boolean).slice(0,20)
      :[];
    return {
      key,
      description:String(param?.description||'').trim().slice(0,500),
      type,
      allowedValues
    };
  }

  function validateIntentResponse(payload){
    const rawRequests=payload?.requests;
    if(!Array.isArray(rawRequests)||!rawRequests.length||rawRequests.length>4){
      throw clientError('invalid_ai_response','模型未返回 1 至 4 个结构化埋点意图');
    }
    return {
      schemaVersion:'tracking-intent-extraction/v1',
      requests:rawRequests.map((request,index)=>{
        const label=String(request?.label||'').trim().slice(0,500);
        const trigger=String(request?.trigger||'').trim().slice(0,1000);
        const goal=String(request?.goal||'').trim().slice(0,1000);
        if(!label||!trigger)throw clientError('invalid_ai_response',`模型返回的第 ${index+1} 个意图缺少操作或触发时机`);
        const params=Array.isArray(request?.params)?request.params.slice(0,20).map(normalizeParam):[];
        return {label,trigger,goal,params};
      })
    };
  }

  function createClient(options){
    options=options||{};
    const endpoint=normalizedEndpoint(options.endpoint||root?.TRACEPOINT_PERSONAL_AI_CONFIG?.endpoint);
    const tokenProvider=resolveTokenProvider(options);
    const fetchImpl=options.fetch||root?.fetch?.bind(root);

    async function accessToken(){
      if(typeof tokenProvider!=='function')throw clientError('auth_unavailable','当前尚未接入 CloudBase 登录');
      const result=await tokenProvider();
      const token=typeof result==='string'?result:result?.accessToken||result?.token||'';
      if(!token)throw clientError('auth_required','请先登录后再绑定个人 API Key',401);
      return token;
    }

    async function request(path,init){
      if(typeof fetchImpl!=='function')throw clientError('fetch_unavailable','当前浏览器不支持后端请求');
      const token=await accessToken();
      let response;
      try{
        response=await fetchImpl(`${endpoint}${path}`,{
          ...init,
          credentials:'same-origin',
          headers:{
            Accept:'application/json',
            Authorization:`Bearer ${token}`,
            ...(init?.body?{'Content-Type':'application/json'}:{}),
            ...(init?.headers||{})
          }
        });
      }catch(error){
        throw clientError('backend_unavailable',error?.message||'个人 AI 服务暂时不可用');
      }
      const contentType=response.headers?.get?.('content-type')||'';
      const payload=contentType.includes('application/json')?await response.json():null;
      if(!response.ok){
        throw clientError(payload?.code||'request_failed',payload?.message||`个人 AI 请求失败（${response.status}）`,response.status);
      }
      return payload||{};
    }

    return {
      configured:typeof tokenProvider==='function',
      endpoint,
      status:()=>request('/credential',{method:'GET'}),
      bind:credential=>request('/credential',{method:'PUT',body:JSON.stringify({
        provider:'openai',
        apiKey:String(credential?.apiKey||''),
        model:String(credential?.model||'gpt-5.4')
      })}),
      unbind:()=>request('/credential',{method:'DELETE'}),
      suggest:async input=>validateIntentResponse(await request('/suggest',{method:'POST',body:JSON.stringify({
        operation:String(input?.operation||''),
        observation:String(input?.observation||''),
        goal:String(input?.goal||'')
      })}))
    };
  }

  return {createClient,validateIntentResponse};
});
