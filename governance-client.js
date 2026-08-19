(function initTracepointGovernanceClient(root,factory){
  const api=factory();
  if(typeof module==='object'&&module.exports)module.exports=api;
  root.TracepointGovernance=api.createClient({
    getEndpoint:()=>root.TRACEPOINT_PERSONAL_AI_CONFIG?.endpoint||root.TRACEPOINT_CLOUDBASE_CONFIG?.personalAiEndpoint,
    getAccessToken:()=>{
      const tokenProvider=root.TRACEPOINT_PERSONAL_AI_CONFIG?.getAccessToken||root.TracepointAuth?.getAccessToken;
      return tokenProvider?.();
    }
  });
})(typeof globalThis!=='undefined'?globalThis:this,function createGovernanceClient(){
  function createClient(options={}){
    const resolveEndpoint=()=>String(options.getEndpoint?.()||options.endpoint||'').replace(/\/personal-ai\/?$/,'/governance').replace(/\/$/,'');
    const getAccessToken=options.getAccessToken;
    const notifyAuthExpired=()=>{
      try{globalThis.document?.dispatchEvent(new CustomEvent('tracepoint:auth-expired'))}catch(_error){}
    };
    async function request(path,init={},endpoint=resolveEndpoint()){
      if(!endpoint)throw new Error('治理服务尚未配置');
      if(typeof getAccessToken!=='function')throw new Error('请先登录团队账号');
      const token=await getAccessToken();
      if(!token){notifyAuthExpired();throw new Error('登录已失效，请重新登录');}
      const response=await fetch(`${endpoint}${path}`,{...init,headers:{Authorization:`Bearer ${token}`,'Content-Type':'application/json',...(init.headers||{})}});
      const payload=await response.json().catch(()=>null);
      if(!response.ok){if(response.status===401)notifyAuthExpired();throw new Error(payload?.message||`治理服务请求失败（${response.status}）`);}
      return payload;
    }
    return {
      get configured(){return Boolean(resolveEndpoint()&&typeof getAccessToken==='function')},
      currentMember:()=>request('/me',{},resolveEndpoint().replace(/\/governance$/,'/platform')),
      updateMemberProfile:profile=>request('/profile',{method:'PUT',body:JSON.stringify(profile)},resolveEndpoint().replace(/\/governance$/,'/platform')),
      listMemberProfileHistory:()=>request('/profile/history',{},resolveEndpoint().replace(/\/governance$/,'/platform')),
      listAssetOverrides:()=>request('/overrides',{},resolveEndpoint().replace(/\/governance$/,'/assets')),
      saveAssetOverride:asset=>request('/overrides',{method:'PUT',body:JSON.stringify(asset)},resolveEndpoint().replace(/\/governance$/,'/assets')),
      deleteAssetOverride:rawAction=>request(`/overrides?rawAction=${encodeURIComponent(rawAction)}`,{method:'DELETE'},resolveEndpoint().replace(/\/governance$/,'/assets')),
      listRequirements:()=>request('/requirements'),
      saveRequirement:requirement=>request('/requirements',{method:'POST',body:JSON.stringify(requirement)}),
      listVersions:rawAction=>request(`/versions${rawAction?`?rawAction=${encodeURIComponent(rawAction)}`:''}`),
      appendVersion:version=>request('/versions',{method:'POST',body:JSON.stringify(version)})
    };
  }
  return {createClient};
});
