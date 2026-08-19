(function initTracepointCloudBaseAuth(root,factory){
  const api=factory(root);
  if(typeof module==='object'&&module.exports)module.exports=api;
  const config=root.TRACEPOINT_CLOUDBASE_CONFIG||{};
  if(api.isConfigured(config)){
    const authClient=api.createAuthClient(config);
    root.TracepointAuth=authClient;
    root.TRACEPOINT_PERSONAL_AI_CONFIG={
      ...(root.TRACEPOINT_PERSONAL_AI_CONFIG||{}),
      endpoint:String(config.personalAiEndpoint||'/api/personal-ai').trim()||'/api/personal-ai',
      getAccessToken:authClient.getAccessToken
    };
  }
})(typeof globalThis!=='undefined'?globalThis:this,function createCloudBaseAuthAdapter(root){
  const DEFAULT_SDK_URL='https://static.cloudbase.net/cloudbase-js-sdk/latest/cloudbase.full.js?v=1';

  function authError(code,message,cause){
    const error=new Error(message);
    error.code=code;
    if(cause)error.cause=cause;
    return error;
  }

  function isConfigured(config){
    return Boolean(String(config?.envId||'').trim()&&String(config?.publishableKey||'').trim());
  }

  function createAuthClient(config,options){
    config=config||{};
    options=options||{};
    const documentRef=options.document||root?.document;
    const sdkUrl=String(config.sdkUrl||DEFAULT_SDK_URL).trim()||DEFAULT_SDK_URL;
    let sdkPromise=null;
    let authPromise=null;
    const sessionRetryDelays=Array.isArray(options.sessionRetryDelays)?options.sessionRetryDelays:[0,250,750];

    const wait=delay=>delay>0?new Promise(resolve=>setTimeout(resolve,delay)):Promise.resolve();

    function loadSdk(){
      if(root?.cloudbase?.init)return Promise.resolve(root.cloudbase);
      if(options.cloudbase?.init)return Promise.resolve(options.cloudbase);
      if(sdkPromise)return sdkPromise;
      if(!documentRef?.createElement||!documentRef?.head?.appendChild){
        return Promise.reject(authError('cloudbase_sdk_unavailable','当前页面无法加载 CloudBase 登录组件'));
      }
      sdkPromise=new Promise((resolve,reject)=>{
        const existing=documentRef.querySelector?.('script[data-tracepoint-cloudbase-sdk]');
        const script=existing||documentRef.createElement('script');
        const handleLoad=()=>{
          const sdk=options.cloudbase||root?.cloudbase;
          if(sdk?.init)resolve(sdk);
          else reject(authError('cloudbase_sdk_invalid','CloudBase 登录组件加载失败'));
        };
        const handleError=()=>reject(authError('cloudbase_sdk_unavailable','CloudBase 登录组件暂时不可用'));
        script.addEventListener?.('load',handleLoad,{once:true});
        script.addEventListener?.('error',handleError,{once:true});
        if(!existing){
          script.src=sdkUrl;
          script.async=true;
          script.dataset.tracepointCloudbaseSdk='true';
          documentRef.head.appendChild(script);
        }
      });
      return sdkPromise;
    }

    async function getAuth(){
      if(!isConfigured(config))throw authError('cloudbase_not_configured','当前尚未配置 CloudBase 登录');
      if(!authPromise){
        authPromise=loadSdk().then(sdk=>{
          const app=sdk.init({
            env:String(config.envId).trim(),
            region:String(config.region||'ap-shanghai').trim()||'ap-shanghai',
            accessKey:String(config.publishableKey).trim(),
            persistence:'local'
          });
          const auth=typeof app?.auth==='function'?app.auth():app?.auth;
          if(!auth)throw authError('cloudbase_auth_unavailable','CloudBase 登录组件初始化失败');
          return {app,auth};
        });
      }
      return authPromise;
    }

    function assertResponse(response,defaultMessage){
      if(response?.error){
        throw authError(response.error.code||'cloudbase_auth_failed',response.error.message||defaultMessage,response.error);
      }
      return response?.data||{};
    }

    async function getSession(){
      const {auth}=await getAuth();
      let lastError=null;
      for(const delay of sessionRetryDelays){
        await wait(Number(delay)||0);
        try{
          const data=assertResponse(await auth.getSession(),'获取 CloudBase 登录会话失败');
          return data.session||null;
        }catch(error){lastError=error}
      }
      throw lastError||authError('cloudbase_session_unavailable','获取 CloudBase 登录会话失败');
    }

    async function getAccessToken(){
      const session=await getSession();
      return String(session?.access_token||'');
    }

    async function signInWithPassword(account,password){
      account=String(account||'').trim();
      password=String(password||'');
      if(!account||!password)throw authError('credentials_required','请填写团队账号和登录密码');
      const {auth}=await getAuth();
      const identity=account.includes('@')?{email:account}:{username:account};
      return assertResponse(await auth.signInWithPassword({...identity,password}),'CloudBase 登录失败');
    }

    async function signOut(){
      const {auth}=await getAuth();
      return assertResponse(await auth.signOut(),'退出 CloudBase 登录失败');
    }

    return {
      configured:true,
      getAccessToken,
      getSession,
      signInWithPassword,
      signOut
    };
  }

  return {createAuthClient,isConfigured};
});
