(function initUserPlatformAccountCommunityReviewData(root,factory){
  const data=factory();
  if(typeof module==='object'&&module.exports)module.exports=data;
  root.UserPlatformAccountCommunityReviewData=data;
})(typeof globalThis!=='undefined'?globalThis:this,function createUserPlatformAccountCommunityReviewData(){
  'use strict';

  const freeze=value=>{
    if(!value||typeof value!=='object'||Object.isFrozen(value))return value;
    Object.values(value).forEach(freeze);
    return Object.freeze(value);
  };
  const values=(meaning,mode,entries,extra={})=>({meaning,valueMode:mode,values:entries,...extra});

  const LOGIN_REASON_VALUES={
    like_click:'用户点赞时触发登录',postcard_click:'用户点击作品卡片时触发登录',videocard_click:'用户点击视频卡片时触发登录',
    create_click:'用户开始生成或创作时触发登录',post_download_click:'用户下载作品时触发登录',image_download_click:'用户下载图片时触发登录',
    search_click:'用户进入搜索时触发登录',profile_click:'用户进入个人主页时触发登录',post_list_view:'用户进入作品列表时触发登录',
    creator_list_view:'用户进入创作者或 App 列表时触发登录',app_landing_page:'用户在 App 落地页触发登录',checkin_now:'用户点击立即签到时触发登录',
    topic_create_click:'用户创建话题内容时触发登录',follow_button_click:'用户点击关注时触发登录',api_page:'用户在 API 页触发登录',
    custom_upload_click:'用户在换脸场景选择自定义上传时触发登录',message_click:'用户进入消息功能时触发登录',none:'没有可识别的登录触发入口'
  };
  const LEGACY_LOGIN_LOCATION_VALUES={
    top:'顶部登录入口',generate:'生成操作触发登录',optimize:'图片增强操作触发登录',pic_like:'图片点赞触发登录',use_api:'API 使用入口触发登录',
    api_page:'API 页登录入口',download:'下载操作触发登录',result_save:'保存结果时触发登录',fork:'复制 App 时触发登录',digital:'数字人场景触发登录',none:'没有记录登录入口'
  };
  const AUTH_METHOD_VALUES={email:'邮箱登录或注册',google:'Google 登录或注册',phone:'手机号登录或注册',facebook:'Facebook 登录或注册',tourist:'游客身份登录或注册'};
  const USER_SCENE_VALUES={emoji:'表情包场景',creator:'创作者场景',id_photo:'证件照场景',dress_up:'换装场景',activity:'运营活动场景'};
  const ABILITY_VALUES={
    a1:'A1 通用生图',FACESWAP:'视频换脸',CUSTOM_FACESWAP:'自定义换脸',SEGMENT:'智能抠图',ENHANCE_RESOLUTION:'图片清晰度增强',RECOLOR:'老照片上色',
    CHANGE_BACKGROUND:'更换背景',CHANGE_BACKGROUND_SEGMENT:'背景分割更换',EMOJI:'AI 表情包',GENERATE_VIDEO:'视频生成',ID_PHOTO:'证件照',DRESS_UP:'AI 换装',STAY_TUNED:'待开放能力',
    SIMPLE_GENERATE_VIDEO:'简易视频生成',VIDEO_ENHANCE_RESOLUTION:'视频清晰度增强',change_background:'更换背景结果页使用的小写值','':'没有取得能力分类'
  };
  const SHARE_ORIGIN_VALUES={
    post_detail_click:'作品详情页点击分享',post_detail_longpress:'作品详情长按分享',app_card:'App 卡片',result_page:'生成结果页',topic_detail:'话题详情页',image_detail:'图片详情页',
    profile:'个人主页',invitation:'邀请活动',faceswap:'视频换脸',comment:'评论区',web_fullscreen:'Web 全屏预览',none:'没有记录分享来源',download_trigger:'下载触发的分享',
    publish:'发布流程',history:'历史结果',emojiAppCard:'表情包 App 卡片',screenshot:'截图入口',backgroundResult:'更换背景结果',emojiResult:'表情包结果',gen_popup:'生成弹窗',detail_page_slide:'详情页滑动流'
  };
  const SHARE_TYPE_VALUES={image:'图片',app:'滤镜或 App',video:'视频',post:'作品',profile:'个人主页',topic:'话题',promotion:'运营活动',invitation:'邀请活动',faceswap:'视频换脸结果'};
  const SHARE_BUTTON_VALUES={
    Tiktok:'分享到 TikTok',Instagram:'分享到 Instagram',Facebook:'分享到 Facebook',Whatsapp:'分享到 WhatsApp',Telegram:'分享到 Telegram',Messenger:'分享到 Messenger',More:'打开更多系统分享方式',
    download:'下载当前内容','copy link':'复制分享链接','generate post':'生成分享海报',report:'举报当前内容',delete:'删除当前内容',post:'将当前内容发布为作品'
  };
  const SHARE_FRIEND_SOURCE_VALUES={
    landing_page:'邀请落地页',home_page_entrance:'首页邀请入口','click check-in entrance':'签到页邀请入口',guide_invitation_popup:'邀请引导弹窗',reminder_existence_bounds_popup:'邀请奖励提醒弹窗'
  };
  const MAIN_TAB_VALUES={
    home:'首页',discover:'Discover 主入口',studio:'Studio 创作工具','chat-message':'Chatbot 消息',community:'社区',profile:'个人主页',topic:'话题',post:'作品',like:'喜欢页',likes:'喜欢页备用值',explore:'探索流',follow:'关注流'
  };
  const MESSAGE_TAB_VALUES={All:'全部消息',likes:'点赞消息',followers:'新关注者消息',comments:'评论消息'};
  const COMMENT_ORIGIN_VALUES={post_direct_up:'作品页直接评论',reply:'回复某条评论',app_direct_up:'App 页直接评论',follow_direct:'关注流直接评论',follow_popup:'关注流弹窗中评论',empty:'空评论状态入口'};
  const USER_LEVEL_VALUES={1:'任一难度的 App 发布都未达到 5 次',2:'难度 1 的 App 发布至少 5 次',3:'难度 2 的 App 发布至少 5 次',4:'难度 3 的 App 发布至少 5 次'};

  const LOGIN_ACTIONS=[
    'login_popup','login_button_click','register','login_success','account_delete_button_click','account_delete_confirm','edit_profile_click','google_login_error','stop_account_delete','autologin','profile_enter'
  ];
  const COMMUNITY_ACTIONS=[
    'tabbar_click','like','share_button_click','bind_failure','comment_action','creator_center_click','creator_center_close','creator_center_datadescription_click','creator_center_descriptionguide_click','creator_center_newfollower_click','creator_center_newlikes_click','creator_center_newruns_click','creator_center_notes_click','enter_comment','follow_user_click','gallery_more_click','join_topic','message_button_click','message_tabbar_click','new_message_click','post_button_click','post_success','publish_popup_click','publish_popup_show','report_click','see_original','see_translation','share_friends_popup_click','share_popup_click','share_popup_jump_external','share_poster_click','show_more_comments','sns_button_click','submit_comment','unfollow_user_confirm_click','post_detail_visit','registration_pop_up','topic_detail_visit','topic_list_visit','appgallery_exposure','like_recommend_exposure','post_exposure','share_friends_popup_jump_external','share_popup_show','share_poster_popup_show','topic_exposure','app_publish_click','pic_like','save_app','unpublish_click','unpublish_success'
  ];
  const DEFINITION_ONLY_ACTIONS=['publish_share_pop_close','publish_share_pop_download','publish_share_pop_share','report_type'];
  const DEFINITION_ONLY_BEHAVIORS={
    publish_share_pop_close:'当前版本未发现实际上报入口，仅保留发布分享弹窗关闭的备用埋点。',
    publish_share_pop_download:'当前版本未发现实际上报入口，仅保留发布分享下载的备用埋点。',
    publish_share_pop_share:'当前版本未发现实际上报入口，仅保留发布分享操作的备用埋点。',
    report_type:'当前版本未发现实际上报入口，仅保留举报类型的备用埋点。'
  };

  const EVENT_BEHAVIORS={
    login_popup:'移动端登录弹窗展示时上报。',
    login_button_click:'用户选择邮箱、Google 或 Facebook 登录入口时上报。',
    register:'新账号创建成功并完成注册归因数据整理后上报。',
    login_success:'账号登录或注册成功时上报。',
    account_delete_button_click:'用户在账号设置中点击“删除账号”并打开确认弹窗时上报。',
    account_delete_confirm:'用户在删除账号确认弹窗中选择确认或取消时上报。',
    edit_profile_click:'用户从个人资料区或编辑按钮打开资料编辑时上报。',
    google_login_error:'原生 App 的 Google 登录返回错误时上报。',
    stop_account_delete:'登录成功响应携带账号冻结恢复标记时自动上报，没有独立可点击界面。',
    autologin:'已有账号登录成功后上报；该 action 名称不代表仅限自动登录。',
    profile_enter:'PC 端进入个人主页或切换被访问用户时上报。',
    tabbar_click:'用户切换主导航、Discover 子标签或社区子标签时上报。',
    like:'作品或 App 的点赞状态发生变化时上报。',
    share_button_click:'分享准备完成、链接复制成功且未命中同一内容的 24 小时冷却时上报；不代表已真正发送给他人。',
    bind_failure:'邮箱、Google 或 Facebook 登录发现要绑定的是旧账号时上报。',
    comment_action:'用户在评论操作菜单中选择复制、删除或举报时上报。',
    creator_center_click:'用户从个人主页 Tab 或创作者中心 Banner 进入创作者中心时上报。',
    creator_center_close:'用户离开创作者中心时上报。',
    creator_center_datadescription_click:'用户在创作者中心打开数据说明时上报。',
    creator_center_descriptionguide_click:'用户在创作者中心打开描述编写指南时上报。',
    creator_center_newfollower_click:'用户在创作者中心选择新增关注者数据时上报。',
    creator_center_newlikes_click:'用户在创作者中心选择新增点赞数据时上报。',
    creator_center_newruns_click:'用户在创作者中心选择新增使用次数数据时上报。',
    creator_center_notes_click:'用户在创作者中心打开创作注意事项时上报。',
    enter_comment:'评论编辑器打开时上报。',
    follow_user_click:'用户建立关注关系或将粉丝变为好友时上报。',
    gallery_more_click:'用户点击 Studio 合集标题或滑动到更多入口时上报。',
    join_topic:'用户在话题详情页打开该话题的 App 列表时上报。',
    message_button_click:'用户点击本人 Profile 消息入口时，先上报客户端当前未读数快照，再打开消息列表。',
    message_tabbar_click:'用户点击或滑动切换消息分类后，先清零目标 Tab 的本地计数，再上报切换前的红点状态。',
    new_message_click:'用户点击某个消息分类的“有新消息”提示并刷新到顶部时上报。',
    post_button_click:'用户进入作品发布流程，且关联话题查询完成后上报。',
    post_success:'作品发布成功并取得作品 ID 后上报。',
    publish_popup_click:'用户在发布隐私提示中选择发布或关闭时上报。',
    publish_popup_show:'发布隐私提示展示时上报。',
    report_click:'用户在他人评论的操作菜单点击举报、尝试打开外部举报表单前上报；不代表表单已打开或举报已提交。',
    see_original:'跨语言作品请求原文结束后，或评论立即切回已有原文时上报；请求失败也可能计入，同一内容本次使用会话最多一次。',
    see_translation:'跨语言作品立即切回缓存译文，或评论翻译请求结束后上报；请求失败也可能计入，同一内容本次使用会话最多一次。',
    share_friends_popup_click:'当前提交没有产品入口传入 lanchKey，无法从产品 UI 触发；若恢复邀请分享，选择分享项后、执行实际分享前上报。',
    share_popup_click:'用户在普通分享抽屉选择操作项时，在 token 处理与实际分享、复制或下载之前上报；不表示后续动作成功。',
    share_popup_jump_external:'分享流程写入 isSharing 标记后，页面下一次进入后台时上报；is_success 当前固定为 true，不代表已外跳或分享成功。',
    share_poster_click:'用户在海报分享页点击下载或社交渠道时，在执行下载或分享动作前上报；不表示动作成功。',
    show_more_comments:'用户展开某条根评论的更多回复时，在加载回复列表前上报；加载失败也可能已计入。',
    sns_button_click:'用户点击个人页反馈渠道时上报；中国区外打开反馈问卷，中国区展示微信二维码。',
    submit_comment:'评论或回复的 onSend Promise 解析后上报并关闭编辑器；本地校验失败不报，但部分接口失败会被 store 吞掉，不能等同于评论一定创建成功。',
    unfollow_user_confirm_click:'用户取消关注或从好友关系退回单向关注时上报。',
    post_detail_visit:'作品详情数据加载完成后上报；点击推荐作品切换详情时也会上报。',
    registration_pop_up:'登录或注册弹窗未完成账号操作而关闭，或账号操作成功时上报；该事件不是弹窗曝光。',
    topic_detail_visit:'话题详情页打开时上报。',
    topic_list_visit:'话题列表路由显示时上报，每次返回该路由都会再次上报。',
    appgallery_exposure:'Studio 合集列表中一批合集达到曝光条件时上报。',
    like_recommend_exposure:'喜欢的 App 列表为空且推荐内容展示时上报。',
    post_exposure:'一批作品达到列表曝光条件时上报。',
    share_friends_popup_jump_external:'邀请好友分享返回成功或失败结果时上报。',
    share_popup_show:'普通分享弹窗展示时上报。',
    share_poster_popup_show:'分享海报页首次展示时上报。',
    topic_exposure:'一批话题在作品列表、作品详情或话题列表中达到曝光条件时上报。',
    app_publish_click:'PC Build 中点击发布且当前不在离线或自动保存中时立即上报；后续仍可能因未修改复制 App 而停止发布。',
    pic_like:'用户对图片执行点赞时上报；取消点赞不上报该事件。',
    save_app:'用户点赞或取消点赞 App 并发起收藏状态更新时上报。',
    unpublish_click:'用户点击取消发布 App 并打开确认弹窗时上报。',
    unpublish_success:'App 取消发布成功后上报。'
  };

  const FIELD_KEYS={
    login_popup:'location',login_button_click:'method',
    register:'method inviter referralRegister location tag_name tag_id google_play_referrer aeoGroupingId isShared appDownloadOrigin ad_app_short_id',
    login_success:'type method pre_user_id visitor_bind',account_delete_button_click:'',account_delete_confirm:'is_confirm',edit_profile_click:'loc',google_login_error:'error_message',stop_account_delete:'',autologin:'location method',profile_enter:'userId location',
    tabbar_click:'current_tab',like:'post_id app_id origin location state type trace_info is_ai_video ability_name user_scene',
    share_button_click:'shareOrigin share_type share_user_id topic_id post_id location1 location2 app_id short_id tag_id entry_point image_id trace_info face_swap_id is_ai_video ability_name user_scene type picid image_long_id collection_id appid app_long_id current_tab object object_name',
    bind_failure:'failure_reason',comment_action:'comment_id action_type',creator_center_click:'user_level click_behaviour',creator_center_close:'',creator_center_datadescription_click:'',creator_center_descriptionguide_click:'',creator_center_newfollower_click:'',creator_center_newlikes_click:'',creator_center_newruns_click:'',creator_center_notes_click:'',
    enter_comment:'origin object comment_id trace_info post_id app_id is_ai_video ability_name',follow_user_click:'follow_user_id is_followed_me location trace_info',gallery_more_click:'gallery_id gallery_type',join_topic:'topic_id',message_button_click:'non_read_num',message_tabbar_click:'current_tab is_read',new_message_click:'current_tab',
    post_button_click:'app_id image_id topic_id user_scene is_ai_video ability_name trace_info',post_success:'is_joined_topic image_id app_id topic_id post_id is_publish_to_comments is_ai_video ability_name user_scene',publish_popup_click:'button_name object checkbox_status',publish_popup_show:'object user_scene ability_name',report_click:'report_object_type',
    see_original:'comment_id post_id content_type',see_translation:'comment_id post_id content_type',share_friends_popup_click:'source button_detail',share_popup_click:'share_type shareOrigin button_detail app_id image_id post_id location1 location2 topic_id creator tag_id user_scene short_id ability_name is_download',
    share_popup_jump_external:'is_poster shareOrigin button_detail app_id image_id post_id topic_id creator is_success share_type location1 location2 is_download share_origin short_id ability_name user_scene',share_poster_click:'share_type shareOrigin button_detail app_id image_id post_id topic_id creator user_scene short_id ability_name is_download tag_id',
    show_more_comments:'comment_id',sns_button_click:'type',submit_comment:'origin object comment_id content_type trace_info post_id app_id is_ai_video ability_name user_scene',unfollow_user_confirm_click:'follow_user_id location',
    post_detail_visit:'post_id origin trace_info tag_id tag_name app_id first_view sort search_content search_method',registration_pop_up:'location isregister tag_name tag_id',topic_detail_visit:'origin topic_id',topic_list_visit:'origin',appgallery_exposure:'exposureList',like_recommend_exposure:'state',
    post_exposure:'exposureList search_content location tag_id',share_friends_popup_jump_external:'source is_success short_id ability_name user_scene share_type location1 location2 app_id image_id topic_id is_download share_origin',share_popup_show:'share_type shareOrigin app_id image_id post_id topic_id creator location1 location2 short_id tag_id is_download entry_point user_scene ability_name',
    share_poster_popup_show:'type shareOrigin app_id image_id post_id topic_id creator',topic_exposure:'exposureList location',app_publish_click:'appid app_id build_from app_type',pic_like:'image_id pic_id is_ai_video',save_app:'trace_info appid addition app_long_id app_id',unpublish_click:'appid app_id image_id pic_id object',unpublish_success:'appid app_id image_id pic_id object'
  };
  Object.keys(FIELD_KEYS).forEach(action=>{
    FIELD_KEYS[action]=FIELD_KEYS[action]?FIELD_KEYS[action].split(' '):[];
  });
  FIELD_KEYS.publish_share_pop_close=[];
  FIELD_KEYS.publish_share_pop_download=['app_id'];
  FIELD_KEYS.publish_share_pop_share=['app_id'];
  FIELD_KEYS.report_type=['category'];

  const FIELD_MEANING_OVERRIDES={
    'register.inviter':'本次注册使用的动态邀请信息；没有邀请时为空字符串。',
    'register.referralRegister':'通过邀请完成注册时记录新用户 ID，否则为空字符串。',
    'register.google_play_referrer':'Google Play 提供的动态安装归因信息。',
    'register.aeoGroupingId':'广告归因分组 ID；没有归因时为空字符串。',
    'register.appDownloadOrigin':'App 下载的归因来源；可为邀请信息中的动态类型。',
    'register.ad_app_short_id':'广告关联的 App 短 ID；有值时为 ID 数组，无值时为空字符串。',
    'login_success.pre_user_id':'账号切换前的动态用户 ID。','google_login_error.error_message':'Google 登录失败时返回的动态错误信息。',
    'profile_enter.userId':'被访问个人主页的动态用户 ID。','like.state':'本次操作后的点赞状态。','like.location':'PC 端 App 点赞所在的详情界面。',
    'share_button_click.share_user_id':'被分享个人主页的用户 ID，或邀请分享的发起用户 ID。','share_button_click.face_swap_id':'被分享的动态换脸结果 ID。',
    'share_button_click.entry_point':'被分享 App 最初的展示入口。','share_button_click.type':'PC 分享路径对被分享对象的类型分类。','share_button_click.current_tab':'PC 分享操作发生时所在的动态标签。',
    'share_button_click.object':'PC 端用户点击的具体分享载体。','share_button_click.object_name':'PC 端被分享载体的动态名称。',
    'bind_failure.failure_reason':'账号绑定失败的业务原因。','comment_action.comment_id':'被操作评论的动态 ID。','creator_center_click.user_level':'进入创作者中心时的创作者等级。',
    'creator_center_click.click_behaviour':'进入创作者中心的入口类型。','enter_comment.comment_id':'回复评论时对应的动态评论 ID。',
    'follow_user_click.follow_user_id':'被关注用户的动态 ID。','follow_user_click.trace_info':'本次关注所关联的动态推荐追踪信息。','gallery_more_click.gallery_id':'用户打开的动态 Studio 合集 ID。',
    'join_topic.topic_id':'用户打开 App 列表的动态话题 ID。','message_button_click.non_read_num':'打开消息列表时的未读消息数。',
    'post_button_click.topic_id':'当前图片已关联的动态话题 ID 数组；没有话题时为 no_topic。','post_success.topic_id':'发布作品关联的动态话题 ID 数组；没有话题时为 no_topic。',
    'post_success.post_id':'发布成功后生成的动态作品 ID。','publish_popup_click.checkbox_status':'用户是否勾选不再提示。','report_click.report_object_type':'被举报内容所属的对象类型。',
    'share_friends_popup_click.button_detail':'用户选择的动态分享方式。','share_popup_jump_external.is_poster':'本次外部分享是否从海报页发起。','share_popup_jump_external.is_success':'当前固定为 true，只表示分享后页面进入后台。',
    'show_more_comments.comment_id':'被展开回复列表的动态根评论 ID。','unfollow_user_confirm_click.follow_user_id':'被取消关注用户的动态 ID。',
    'post_detail_visit.first_view':'该作品是否位于当前列表前四个作品中。','post_detail_visit.sort':'该作品在当前列表中的顺序，从 1 开始。','post_detail_visit.search_content':'从搜索结果进入时使用的动态搜索词。','post_detail_visit.search_method':'从搜索结果进入时使用的动态搜索方式。',
    'appgallery_exposure.exposureList':'达到曝光条件的 Studio 合集列表；每项包含动态 gallery_id 和 gallery_type。','post_exposure.exposureList':'达到曝光条件的作品列表；每项包含 post_id、app_id、topic_id 和 trace_info。',
    'post_exposure.location':'本批作品展示的业务位置；自动曝光路径当前还可能传入完整页面地址对象。','share_friends_popup_jump_external.is_success':'邀请好友分享返回的成功或失败结果。',
    'share_friends_popup_jump_external.share_origin':'预留的分享来源字段；当前没有直接赋值。','share_popup_show.entry_point':'被分享内容最初的动态展示入口。',
    'topic_exposure.exposureList':'达到曝光条件的话题列表；每项包含动态 topic_id。','app_publish_click.build_from':'本次发布的 App 是从零创建还是基于其他 App 创建。','app_publish_click.app_type':'本次发布的 App 编辑方式。',
    'save_app.addition':'本次是点赞 App 还是取消点赞。','unpublish_click.object':'用户准备取消发布的对象类型。','unpublish_success.object':'已成功取消发布的对象类型。'
    ,'publish_share_pop_download.app_id':'备用下载埋点关联的动态 App 资源 ID。'
    ,'publish_share_pop_share.app_id':'备用分享埋点关联的动态 App 资源 ID。'
  };

  const VALUE_SEMANTICS={
    'report_type.category':values('备用举报埋点记录的举报类别。','closed',{
      graphic_violence:'血腥或暴力内容',
      hazardous_activities:'危险行为',
      politically_sensitivity:'政治敏感内容',
      explicit_content:'色情或露骨内容',
      disturbing_imagery:'令人不适的画面',
      harmful_values:'有害价值观'
    }),
    'login_popup.location':values('登录弹窗的业务触发入口。','closed',LOGIN_REASON_VALUES),
    'login_button_click.method':values('用户选择的登录方式。','closed',{email:AUTH_METHOD_VALUES.email,google:AUTH_METHOD_VALUES.google,facebook:AUTH_METHOD_VALUES.facebook}),
    'register.method':values('本次成功注册的方式。','closed',AUTH_METHOD_VALUES),
    'register.location':values('注册成功前最后记录的登录触发位置。','open',LEGACY_LOGIN_LOCATION_VALUES),
    'register.isShared':values('本次注册是否来自邀请链路。','closed',{true:'来自邀请链路',false:'不是邀请链路'}),
    'register.appDownloadOrigin':values(FIELD_MEANING_OVERRIDES['register.appDownloadOrigin'],'open',{none:'没有可识别的下载归因',aeo:'来自 AEO 广告归因'}),
    'register.ad_app_short_id':values(FIELD_MEANING_OVERRIDES['register.ad_app_short_id'],'open',{'':'没有关联广告 App'}),
    'login_success.type':values('本次成功账号操作的类型。','closed',{sign_up:'新账号注册成功',login:'已有账号登录成功'}),
    'login_success.method':values('本次登录或注册成功的方式。','closed',AUTH_METHOD_VALUES),
    'login_success.visitor_bind':values('本次账号操作是否新建游客绑定关系。','closed',{true:'新建游客绑定关系',false:'没有新建游客绑定关系'}),
    'account_delete_confirm.is_confirm':values('用户在删除账号确认流程中的选择。','closed',{true:'确认删除账号',false:'取消删除账号'}),
    'edit_profile_click.loc':values('打开资料编辑的入口。','closed',{profile:'点击个人资料区',button:'点击个人主页编辑按钮'}),
    'autologin.location':values('登录成功前最后记录的登录触发位置。','open',LEGACY_LOGIN_LOCATION_VALUES),'autologin.method':values('本次成功登录的方式。','closed',AUTH_METHOD_VALUES),
    'profile_enter.location':values('进入个人主页的来源。','open',{other:'普通入口',share:'分享链接',rank_banner:'创作者排行榜 Banner',rank_page:'创作者排行榜列表'}),
    'tabbar_click.current_tab':values('用户切换到的目标标签。','open',MAIN_TAB_VALUES),
    'like.origin':values('点赞操作发生的内容入口。','open',{post_lists:'作品列表备用值',post_list:'作品列表',app_card:'App 卡片',create_popup:'创作弹窗',app_landing_page:'App 落地页',topic_list:'话题列表',profile:'个人主页',none:'没有可识别入口',post_detail:'作品详情页',creator_detail:'App 详情页',likes:'喜欢列表',follow:'关注流',explore:'探索流',topic:'话题页',studio:'Studio 页',home:'首页',search_result:'搜索结果',post_landing_page:'作品落地页',topic_app:'话题 App 页',image:'图片页',faceswap_detail:'换脸详情页'}),
    'like.location':values(FIELD_MEANING_OVERRIDES['like.location'],'closed',{creator_popup:'PC 端创作详情弹窗',app_landing_page:'PC 端 App 落地页'}),
    'like.state':values(FIELD_MEANING_OVERRIDES['like.state'],'closed',{1:'点赞',[-1]:'取消点赞'}),'like.type':values('被操作对象的类型。','closed',{post:'作品',app:'滤镜或 App',image:'图片',comment:'评论'}),
    'like.is_ai_video':values('被操作内容是否为 AI 视频。','closed',{1:'AI 视频；非 AI 视频不发送该字段'}),'like.user_scene':values('被点赞 App 的业务场景。','closed',USER_SCENE_VALUES),'like.ability_name':values('被点赞 App 的生成能力。','open',ABILITY_VALUES),
    'share_button_click.shareOrigin':values('打开分享入口时所在的业务场景。','closed',SHARE_ORIGIN_VALUES),'share_button_click.share_type':values('本次准备分享的内容类型。','closed',SHARE_TYPE_VALUES),
    'share_button_click.entry_point':values(FIELD_MEANING_OVERRIDES['share_button_click.entry_point'],'open',{detail:'完整 App 详情页',direct:'直接入口','half-direct':'半屏 App 详情页',comment:'评论区入口','':'没有记录展示入口'}),
    'share_button_click.is_ai_video':values('被分享内容是否为 AI 视频。','closed',{1:'AI 视频；其他内容不发送该字段'}),'share_button_click.ability_name':values('被分享内容的生成能力。','open',ABILITY_VALUES),'share_button_click.user_scene':values('被分享 App 或结果的业务场景。','open',{...USER_SCENE_VALUES,'':'没有取得业务场景'}),
    'share_button_click.type':values(FIELD_MEANING_OVERRIDES['share_button_click.type'],'closed',{image:'图片或视频结果',app:'滤镜、App 或合集',profile:'个人主页'}),'share_button_click.object':values(FIELD_MEANING_OVERRIDES['share_button_click.object'],'closed',{image_detail_share_button:'图片详情分享按钮',big_image:'大图预览',task:'任务卡片',profile_apps:'个人主页 App 卡片',history:'生成历史',collection:'合集'}),
    'bind_failure.failure_reason':values(FIELD_MEANING_OVERRIDES['bind_failure.failure_reason'],'closed',{is_old_account:'要绑定的登录方式已属于旧账号'}),
    'comment_action.action_type':values('用户在评论菜单中选择的操作。','closed',{delete:'删除评论',reply:'回复评论备用值',copy:'复制评论',report:'举报评论'}),
    'creator_center_click.user_level':values(FIELD_MEANING_OVERRIDES['creator_center_click.user_level'],'closed',USER_LEVEL_VALUES),'creator_center_click.click_behaviour':values(FIELD_MEANING_OVERRIDES['creator_center_click.click_behaviour'],'closed',{1:'点击主导航的个人主页入口',2:'点击个人主页的创作者中心 Banner'}),
    'enter_comment.origin':values('打开评论编辑器的入口。','closed',COMMENT_ORIGIN_VALUES),'enter_comment.object':values('本次评论关联的内容对象。','closed',{post:'作品',creator:'App 或创作者资源'}),'enter_comment.is_ai_video':values('本次评论是否关联 AI 视频 App。','closed',{1:'关联 AI 视频 App；其他情况不发送'}),'enter_comment.ability_name':values('本次评论关联 App 的生成能力。','closed',ABILITY_VALUES),
    'follow_user_click.is_followed_me':values('被关注用户在操作前是否已关注当前用户。','closed',{true:'对方已关注我，本次后成为好友',false:'对方未关注我，本次建立单向关注'}),'follow_user_click.location':values('本次关注操作的页面入口。','closed',{profile:'个人主页',app_detail:'App 详情页',follow_list:'关注列表',search_user_result:'用户搜索结果'}),
    'gallery_more_click.gallery_type':values('用户打开的 Studio 合集类型。','closed',{app:'普通 App 合集',video:'换脸视频合集',generatevideo:'视频生成 App 合集'}),
    'message_tabbar_click.current_tab':values('用户切换到的消息分类。','closed',MESSAGE_TAB_VALUES),'message_tabbar_click.is_read':values('选中该消息分类前是否没有未读提示。','closed',{true:'选中前没有未读提示',false:'选中前有未读提示'}),'new_message_click.current_tab':values('用户刷新的消息分类。','closed',MESSAGE_TAB_VALUES),
    'post_button_click.topic_id':values(FIELD_MEANING_OVERRIDES['post_button_click.topic_id'],'open',{no_topic:'没有关联话题'}),'post_button_click.user_scene':values('待发布内容的业务场景。','closed',USER_SCENE_VALUES),'post_button_click.is_ai_video':values('待发布内容是否关联 AI 视频 App。','closed',{1:'关联 AI 视频 App；其他内容不发送'}),'post_button_click.ability_name':values('待发布内容的生成能力。','open',ABILITY_VALUES),
    'post_success.is_joined_topic':values('发布的作品是否关联话题。','closed',{true:'已关联至少一个话题',false:'未关联话题'}),'post_success.topic_id':values(FIELD_MEANING_OVERRIDES['post_success.topic_id'],'open',{no_topic:'没有关联话题'}),'post_success.is_publish_to_comments':values('发布作品时是否同步发布到 App 评论区。','closed',{true:'同步发布到 App 评论区',false:'未同步发布到 App 评论区'}),'post_success.is_ai_video':values('已发布内容是否关联 AI 视频 App。','closed',{1:'关联 AI 视频 App；其他内容不发送'}),'post_success.ability_name':values('已发布内容的生成能力。','open',ABILITY_VALUES),'post_success.user_scene':values('已发布内容的业务场景。','closed',USER_SCENE_VALUES),
    'publish_popup_click.button_name':values('用户在发布隐私提示中选择的操作。','closed',{close:'关闭并取消本次发布',publish:'继续发布'}),'publish_popup_click.object':values('本次准备发布的对象类型。','closed',{app:'App',image:'图片作品'}),'publish_popup_click.checkbox_status':values(FIELD_MEANING_OVERRIDES['publish_popup_click.checkbox_status'],'closed',{0:'未勾选不再提示',1:'已勾选不再提示'}),'publish_popup_show.object':values('本次准备发布的对象类型。','closed',{app:'App',image:'图片作品'}),'publish_popup_show.user_scene':values('待发布内容的业务场景。','open',USER_SCENE_VALUES),'publish_popup_show.ability_name':values('待发布内容的生成能力。','open',ABILITY_VALUES),
    'report_click.report_object_type':values(FIELD_MEANING_OVERRIDES['report_click.report_object_type'],'closed',{creator:'App 或创作者资源',post:'作品'}),'see_original.content_type':values('切换回原文的内容类型。','closed',{comment:'评论',post:'作品文本',app:'App 文本备用值'}),'see_translation.content_type':values('查看翻译的内容类型。','closed',{comment:'评论',post:'作品文本',app:'App 文本备用值'}),
    'share_friends_popup_click.source':values('打开邀请好友分享的入口。','closed',SHARE_FRIEND_SOURCE_VALUES),'share_friends_popup_click.button_detail':values(FIELD_MEANING_OVERRIDES['share_friends_popup_click.button_detail'],'closed',SHARE_BUTTON_VALUES),
    'share_popup_click.share_type':values('当前分享内容的类型。','open',SHARE_TYPE_VALUES),'share_popup_click.shareOrigin':values('当前分享弹窗的业务来源。','closed',SHARE_ORIGIN_VALUES),'share_popup_click.button_detail':values('用户在分享弹窗中选择的操作。','closed',SHARE_BUTTON_VALUES),'share_popup_click.creator':values('被分享内容是否属于当前用户。','closed',{myself:'当前用户自己的内容',others:'其他用户的内容'}),'share_popup_click.user_scene':values('被分享内容的业务场景。','open',{...USER_SCENE_VALUES,'':'没有取得业务场景'}),'share_popup_click.ability_name':values('被分享内容的生成能力。','open',ABILITY_VALUES),'share_popup_click.is_download':values('本次分享是否由下载操作触发。','closed',{true:'由下载操作触发',false:'不是下载触发'}),
    'share_popup_jump_external.is_poster':values(FIELD_MEANING_OVERRIDES['share_popup_jump_external.is_poster'],'closed',{yes:'从海报页发起',no:'从普通分享弹窗发起'}),'share_popup_jump_external.shareOrigin':values('本次外部分享的业务来源。','closed',SHARE_ORIGIN_VALUES),'share_popup_jump_external.button_detail':values('用户选择的外部分享方式。','closed',SHARE_BUTTON_VALUES),'share_popup_jump_external.creator':values('被分享内容是否属于当前用户。','closed',{myself:'当前用户自己的内容',others:'其他用户的内容'}),'share_popup_jump_external.is_success':values(FIELD_MEANING_OVERRIDES['share_popup_jump_external.is_success'],'closed',{true:'分享后页面进入后台；不代表分享必然成功'}),'share_popup_jump_external.share_type':values('本次外部分享的内容类型。','open',SHARE_TYPE_VALUES),'share_popup_jump_external.is_download':values('本次分享是否由下载操作触发。','closed',{true:'由下载触发',false:'不是下载触发'}),'share_popup_jump_external.user_scene':values('被分享内容的业务场景。','open',USER_SCENE_VALUES),'share_popup_jump_external.ability_name':values('被分享内容的生成能力。','open',ABILITY_VALUES),
    'share_poster_click.share_type':values('海报分享内容的类型。','open',SHARE_TYPE_VALUES),'share_poster_click.shareOrigin':values('海报分享的业务来源。','closed',SHARE_ORIGIN_VALUES),'share_poster_click.button_detail':values('用户在海报页选择的操作。','closed',SHARE_BUTTON_VALUES),'share_poster_click.creator':values('被分享内容是否属于当前用户。','closed',{myself:'当前用户自己的内容',others:'其他用户的内容'}),'share_poster_click.user_scene':values('被分享内容的业务场景。','open',{...USER_SCENE_VALUES,'':'没有取得业务场景'}),'share_poster_click.ability_name':values('被分享内容的生成能力。','open',ABILITY_VALUES),'share_poster_click.is_download':values('本次分享是否由下载操作触发。','closed',{true:'由下载触发',false:'不是下载触发'}),
    'sns_button_click.type':values('用户选择的反馈渠道。','closed',{whatsapp:'打开配置的反馈问卷；当前不打开 WhatsApp',wechat:'展示微信反馈二维码'}),'submit_comment.origin':values('本次评论提交的入口。','closed',COMMENT_ORIGIN_VALUES),'submit_comment.object':values('本次评论关联的内容对象。','closed',{post:'作品',creator:'App 或创作者资源'}),'submit_comment.content_type':values('提交的评论内容形式。','closed',{text:'仅文字',image:'仅图片',text_image:'文字和图片'}),'submit_comment.is_ai_video':values('本次评论是否关联 AI 视频 App。','closed',{1:'关联 AI 视频 App；其他情况不发送'}),'submit_comment.ability_name':values('本次评论关联 App 的生成能力。','closed',ABILITY_VALUES),'submit_comment.user_scene':values('本次评论关联 App 的业务场景。','closed',USER_SCENE_VALUES),
    'unfollow_user_confirm_click.location':values('本次取消关注的页面入口。','open',{profile:'个人主页',app_detail:'App 详情页',follow_list:'关注列表',search_user_result:'用户搜索结果；PC 当前可发送该值'}),
    'post_detail_visit.origin':values('进入作品详情的业务来源。','open',{post_list:'作品列表',topic_home:'话题首页',topic_detail:'话题详情页',my_profile:'自己的个人主页',other_profile:'其他用户的个人主页',search:'搜索入口备用值',search_result:'搜索结果',share:'分享链接',none:'没有可识别来源',others_work:'App 详情中的其他作品',you_might_alse_like:'作品详情的相关推荐（上报值沿用当前拼写）',likes:'喜欢列表',follow:'关注流',explore:'探索流',topic:'话题页',studio:'Studio 页',profile:'个人主页',home:'首页',post_landing_page:'作品落地页'}),'post_detail_visit.first_view':values(FIELD_MEANING_OVERRIDES['post_detail_visit.first_view'],'closed',{true:'位于列表前四个作品中',false:'不在列表前四个作品中'}),
    'registration_pop_up.location':values('登录或注册弹窗的业务触发入口。','open',{...LOGIN_REASON_VALUES,...LEGACY_LOGIN_LOCATION_VALUES}),'registration_pop_up.isregister':values('本次弹窗结束时的账号操作结果。','closed',{close:'未完成登录或注册就关闭',register:'新账号注册成功；旧路径也会将已有账号登录成功记为该值',login:'已有账号登录成功'}),
    'topic_detail_visit.origin':values('进入话题详情的入口。','closed',{post_list_topic_tag:'作品列表的话题标签',post_detail_topic_tag:'作品详情的话题标签',topic_card:'话题卡片',topic_card_more:'话题卡片滑动更多入口',share:'分享链接',none:'没有可识别入口'}),'topic_list_visit.origin':values('进入话题列表的入口。','closed',{bottom_tab:'首页底部导航',share:'分享链接',landing_page:'直接落地页'}),
    'appgallery_exposure.exposureList':values(FIELD_MEANING_OVERRIDES['appgallery_exposure.exposureList'],'nested',{0:'未匹配到合集类型时使用的兜底值',3:'App 合集',4:'视频合集',5:'Chatbot 合集'},{itemFields:{gallery_id:{meaning:'本项曝光对应的动态 Studio 合集 ID。',type:'string',valueMode:'dynamic'},gallery_type:{meaning:'本项曝光对应的合集类型。',type:'number',valueMode:'open',values:{0:'未匹配到合集类型时使用的兜底值',3:'App 合集',4:'视频合集',5:'Chatbot 合集'}}}}),'like_recommend_exposure.state':values('喜欢列表的推荐内容是否曝光。','closed',{0:'未曝光；当前没有直接发送该值',1:'推荐内容已展示'}),
    'post_exposure.exposureList':values(FIELD_MEANING_OVERRIDES['post_exposure.exposureList'],'nested',{}, {itemFields:{post_id:{meaning:'本项曝光对应的动态作品 ID。',type:'string',valueMode:'dynamic'},app_id:{meaning:'本项作品关联的动态 App 资源 ID。',type:'string',valueMode:'dynamic'},topic_id:{meaning:'本项作品关联的动态话题 ID。',type:'string',valueMode:'open',values:{no_topic:'没有关联话题'}},trace_info:{meaning:'本项作品关联的动态推荐追踪信息。',type:'string',valueMode:'open',values:{'':'没有取得推荐追踪信息'}}}}),'post_exposure.location':values(FIELD_MEANING_OVERRIDES['post_exposure.location'],'open',{Discover:'Discover 列表备用值',discover:'PC Discover 列表',feed:'社区作品流',search_result:'搜索结果',profile:'个人主页',topic_detail:'话题详情页','':'没有记录位置'}),
    'share_friends_popup_jump_external.source':values('邀请好友分享的业务入口。','closed',SHARE_FRIEND_SOURCE_VALUES),'share_friends_popup_jump_external.is_success':values(FIELD_MEANING_OVERRIDES['share_friends_popup_jump_external.is_success'],'closed',{true:'原生 App 返回分享成功',false:'原生 App 返回分享失败'}),'share_friends_popup_jump_external.share_type':values('本次邀请分享的内容类型；当前业务入口不发送此字段。','open',SHARE_TYPE_VALUES),'share_friends_popup_jump_external.user_scene':values('本次邀请分享关联的业务场景；当前业务入口不发送此字段。','open',USER_SCENE_VALUES),'share_friends_popup_jump_external.ability_name':values('本次邀请分享关联的生成能力；当前业务入口不发送此字段。','open',ABILITY_VALUES),'share_friends_popup_jump_external.is_download':values('本次邀请分享是否由下载触发；当前业务入口不发送此字段。','closed',{true:'由下载触发',false:'不是下载触发'}),
    'share_popup_show.share_type':values('分享弹窗中的内容类型。','open',SHARE_TYPE_VALUES),'share_popup_show.shareOrigin':values('分享弹窗的业务来源。','closed',SHARE_ORIGIN_VALUES),'share_popup_show.creator':values('被分享内容是否属于当前用户。','closed',{myself:'当前用户自己的内容',others:'其他用户的内容'}),'share_popup_show.is_download':values('分享弹窗是否由下载操作触发。','closed',{true:'由下载触发',false:'不是下载触发'}),'share_popup_show.user_scene':values('被分享内容的业务场景。','open',{...USER_SCENE_VALUES,'':'没有取得业务场景'}),'share_popup_show.ability_name':values('被分享内容的生成能力。','open',ABILITY_VALUES),
    'share_poster_popup_show.type':values('海报分享的内容类型。','open',SHARE_TYPE_VALUES),'share_poster_popup_show.shareOrigin':values('海报分享的业务来源。','closed',SHARE_ORIGIN_VALUES),'share_poster_popup_show.creator':values('被分享内容是否属于当前用户。','closed',{myself:'当前用户自己的内容',others:'其他用户的内容'}),
    'topic_exposure.exposureList':values(FIELD_MEANING_OVERRIDES['topic_exposure.exposureList'],'nested',{}, {itemFields:{topic_id:{meaning:'本项曝光对应的动态话题 ID。',type:'string',valueMode:'dynamic'}}}),'topic_exposure.location':values('本批话题曝光的页面位置。','closed',{post_detail:'作品详情页',topic:'话题列表',post_list:'作品列表'}),
    'app_publish_click.build_from':values(FIELD_MEANING_OVERRIDES['app_publish_click.build_from'],'closed',{fork:'基于其他 App 创建',scratch:'从零创建'}),'app_publish_click.app_type':values(FIELD_MEANING_OVERRIDES['app_publish_click.app_type'],'closed',{form:'表单式创作',node:'节点式创作'}),'pic_like.is_ai_video':values('被点赞图片是否属于 AI 视频内容。','closed',{1:'AI 视频内容；其他内容不发送'}),'save_app.addition':values(FIELD_MEANING_OVERRIDES['save_app.addition'],'closed',{true:'点赞 App',false:'取消点赞 App'}),'unpublish_click.object':values(FIELD_MEANING_OVERRIDES['unpublish_click.object'],'open',{app:'App；当前所有实际入口均使用该值',image:'图片备用值'}),'unpublish_success.object':values(FIELD_MEANING_OVERRIDES['unpublish_success.object'],'open',{app:'App；当前所有实际入口均使用该值',image:'图片备用值'})
  };

  const EVENT_CONTEXTS=Object.fromEntries([...LOGIN_ACTIONS,...COMMUNITY_ACTIONS].map(action=>[action,EVENT_BEHAVIORS[action].replace(/[。；].*$/,'')]));
  const genericFieldMeaning=(action,key)=>{
    const context=EVENT_CONTEXTS[action]||'本次事件';
    const map={
      app_id:`${context}关联的动态 App 资源 ID。`,appid:`${context}关联的动态 App 短 ID。`,app_long_id:`${context}关联的动态 App 发布 ID。`,short_id:`${context}关联的动态 App 短 ID。`,
      image_id:`${context}关联的动态图片或结果 ID。`,pic_id:`${context}关联的动态图片 ID。`,picid:`${context}关联的动态图片 ID。`,image_long_id:`${context}关联的动态图片长 ID。`,
      post_id:`${context}关联的动态作品 ID。`,topic_id:`${context}关联的动态话题 ID。`,comment_id:`${context}关联的动态评论 ID。`,tag_id:`${context}发生时的动态标签 ID。`,tag_name:`${context}发生时的动态标签名称。`,collection_id:`${context}关联的动态合集 ID。`,
      trace_info:`${context}关联的动态推荐追踪信息。`,location1:`${context}发生时的一级业务位置。`,location2:`${context}发生时的二级业务位置。`,
      ability_name:`${context}关联内容的生成能力。`,user_scene:`${context}关联内容的业务场景。`,is_ai_video:`${context}关联内容是否为 AI 视频。`,
      source:`${context}的业务入口。`,share_origin:`${context}的分享来源。`,shareOrigin:`${context}的分享来源。`,share_type:`${context}关联的分享内容类型。`,button_detail:`${context}中用户选择的操作。`,
      search_content:`${context}关联的动态搜索词。`,search_method:`${context}关联的搜索方式。`,method:`${context}使用的账号操作方式。`,location:`${context}的业务位置。`,origin:`${context}的业务来源。`,type:`${context}关联的对象类型。`,object:`${context}关联的业务对象。`,current_tab:`${context}关联的当前标签。`,
      creator:`${context}关联内容的归属类型。`,is_download:`${context}是否由下载操作触发。`,is_success:`${context}的成功或失败结果。`,content_type:`${context}关联的内容形式。`,exposureList:`${context}中达到曝光条件的对象列表。`
    };
    return map[key]||`${context}关联的 ${key} 业务属性。`;
  };

  const EMPTY_ASSOCIATION_MEANINGS={
    app_id:'没有关联 App。',image_id:'没有关联图片。',post_id:'没有关联作品。',topic_id:'没有关联话题。',short_id:'没有关联 App 短 ID。'
  };
  const OPTIONAL_SHARE_ID_FIELDS={
    share_popup_click:['app_id','image_id','post_id','topic_id','short_id'],
    share_poster_click:['app_id','image_id','post_id','topic_id','short_id'],
    share_popup_show:['app_id','image_id','post_id','topic_id','short_id'],
    share_poster_popup_show:['app_id','image_id','post_id','topic_id']
  };
  Object.entries(OPTIONAL_SHARE_ID_FIELDS).forEach(([action,keys])=>{
    keys.forEach(key=>{
      VALUE_SEMANTICS[`${action}.${key}`]=values(genericFieldMeaning(action,key),'open',{'':EMPTY_ASSOCIATION_MEANINGS[key]});
    });
  });

  const FIELD_SEMANTICS={};
  Object.entries(FIELD_KEYS).forEach(([action,keys])=>{
    keys.forEach(key=>{
      const qualifiedName=`${action}.${key}`;
      const configured=VALUE_SEMANTICS[qualifiedName]||{};
      FIELD_SEMANTICS[qualifiedName]={
        meaning:configured.meaning||FIELD_MEANING_OVERRIDES[qualifiedName]||genericFieldMeaning(action,key),
        ...(configured.valueMode?{valueMode:configured.valueMode,valueMeaningSource:'frontend_code',values:configured.values}:{valueMode:'dynamic'}),
        ...(configured.itemFields?{itemFields:configured.itemFields}:{})
      };
    });
  });

  const WIRE_CORRECTIONS={
    login_button_click:{fields:{method:{type:'string',required:true,nullable:false,enum:['email','facebook','google']}}},
    register:{fields:{method:{type:'string',required:true},inviter:{type:'string',required:true},referralRegister:{type:'string',required:true},location:{type:'string',required:true},tag_name:{type:'string',required:true},tag_id:{type:'string',required:true},google_play_referrer:{type:'string',required:true},aeoGroupingId:{type:'string',required:true},isShared:{type:'boolean',required:true},appDownloadOrigin:{type:'string',required:true},ad_app_short_id:{type:'mixed',required:true}}},
    login_success:{fields:{type:{type:'string',required:true},method:{type:'string',required:true},pre_user_id:{type:'string',required:true},visitor_bind:{type:'boolean',required:true}}},
    autologin:{fields:{location:{type:'string',required:true},method:{type:'string',required:true}}},profile_enter:{businessFieldOverrides:['userId'],fields:{userId:{type:'string',required:true},location:{type:'string',required:true}}},
    tabbar_click:{fields:{current_tab:{type:'string',required:true,enum:[]}}},like:{fields:{origin:{type:'string',required:true,enum:[]},state:{type:'number',required:true,enum:[1,-1]}}},
    share_button_click:{
      internalInputFields:['appLongId','imageLongId','objectName','collectionId'],
      catalogOnlyFields:['_id:app_id/topic_id....','ability_name（APP能力）','location1（行为发生时一级界面位置）','location2（行为发生时二级界面位置）','tag_id（行为发生时标签页面id）','user_scene（APP用户场景）-用户场景'],
      contractVariantsReviewed:true,
      fields:{picid:{type:'string'},image_long_id:{type:'string'},collection_id:{type:'string'},appid:{type:'string'},app_long_id:{type:'string'},current_tab:{type:'string'},object_name:{type:'string'}}
    },
    creator_center_click:{fields:{user_level:{type:'number',required:true,enum:[1,2,3,4]},click_behaviour:{type:'number',required:true,enum:[1,2]}}},message_tabbar_click:{fields:{is_read:{type:'boolean',required:true}}},publish_popup_click:{fields:{checkbox_status:{type:'number',required:true,enum:[0,1]}}},
    share_friends_popup_click:{businessFieldOverrides:['source']},share_friends_popup_jump_external:{businessFieldOverrides:['source']},
    share_poster_click:{fields:{user_scene:{type:'string',required:true},short_id:{type:'string',required:true},ability_name:{type:'string',required:true},is_download:{type:'boolean',required:true},tag_id:{type:'string',required:true}}},
    post_detail_visit:{fields:{origin:{type:'string',required:true,enum:[]},first_view:{type:'boolean',required:false},sort:{type:'number',required:false},search_content:{type:'string',required:false},search_method:{type:'string',required:false}}},
    registration_pop_up:{internalInputFields:['method'],contractVariantsReviewed:true,fields:{tag_name:{type:'string',required:false},tag_id:{type:'string',required:false}}},
    post_exposure:{fields:{location:{type:'mixed',required:true,enum:[]}}},
    app_publish_click:{internalInputFields:['forkFromId','type'],fields:{appid:{type:'string',required:false},app_id:{type:'string',required:true},build_from:{type:'string',required:true,enum:['fork','scratch']},app_type:{type:'string',required:true,enum:['form','node']}}},
    pic_like:{internalInputFields:['pictureid'],fields:{image_id:{type:'string',required:true},pic_id:{type:'string',required:true},is_ai_video:{type:'number',required:false,enum:[1]}}},
    save_app:{fields:{trace_info:{type:'string',required:true},appid:{type:'string',required:true},addition:{type:'boolean',required:true,enum:[true,false]},app_long_id:{type:'string',required:true},app_id:{type:'string',required:true}}},
    unpublish_click:{coPresentFieldGroups:[{fields:['appid','app_id'],description:'object=app 时同时发送'},{fields:['image_id','pic_id'],description:'object=image 时同时发送'}],fields:{appid:{type:'string'},app_id:{type:'string'},image_id:{type:'string'},pic_id:{type:'string'},object:{type:'string',required:true,enum:[]}}},
    unpublish_success:{coPresentFieldGroups:[{fields:['appid','app_id'],description:'object=app 时同时发送'},{fields:['image_id','pic_id'],description:'object=image 时同时发送'}],fields:{appid:{type:'string'},app_id:{type:'string'},image_id:{type:'string'},pic_id:{type:'string'},object:{type:'string',required:true,enum:[]}}}
  };
  [...LOGIN_ACTIONS,...COMMUNITY_ACTIONS].forEach(action=>{
    WIRE_CORRECTIONS[action]={migrationStrategy:'keep',...(WIRE_CORRECTIONS[action]||{})};
  });

  const CURRENT_PLATFORM_DIFFERENCES={
    reviewedSemanticActions:['login_popup','account_delete_confirm','like','share_button_click'],
    missingExplicitReviewActions:[...LOGIN_ACTIONS,...COMMUNITY_ACTIONS].filter(action=>!['login_popup','account_delete_confirm','like','share_button_click'].includes(action)),
    critical:[
      'share_button_click 的 Raw 字段是 shareOrigin，当前 share_origin 语义键无法命中。',
      'share_button_click 当前把 appLongId、imageLongId、objectName、collectionId 这四个输入名误展示为最终字段。',
      'registration_pop_up.method、app_publish_click.forkFromId、app_publish_click.type 和 pic_like.pictureid 是中间输入，不是最终业务字段。',
      'share_friends_popup_click.source 和 share_friends_popup_jump_external.source 是事件业务字段，需避免被公共 source 规则隐藏。',
      'post_detail_visit.first_view 实际为 boolean，不是 string。',
      'post_exposure.location 的自动曝光路径可传入完整页面地址对象，不能统一声明为 string。',
      'share_popup_jump_external.is_success 当前固定为 true，不能解读为真实分享成功。',
      'registration_pop_up 和 share_button_click 各有两套独立字段契约，必须分通道展示 required 与 nullable。'
    ]
  };

  return freeze({
    schemaVersion:1,
    sourceRevision:'fe-a1-art@22b0950c33762b40da30c0137e1281fd4b3d8098',
    scope:{workstream:'用户与平台',activeCount:62,modules:{'登录与账号':11,'社区与关系':51},definitionOnlyCount:4},
    loginActions:LOGIN_ACTIONS,
    communityActions:COMMUNITY_ACTIONS,
    definitionOnlyActions:DEFINITION_ONLY_ACTIONS,
    keepActions:[...LOGIN_ACTIONS,...COMMUNITY_ACTIONS],
    eventBehaviors:EVENT_BEHAVIORS,
    definitionOnlyBehaviors:DEFINITION_ONLY_BEHAVIORS,
    fieldKeysByAction:FIELD_KEYS,
    fieldSemantics:FIELD_SEMANTICS,
    wireCorrections:WIRE_CORRECTIONS,
    currentPlatformDifferences:CURRENT_PLATFORM_DIFFERENCES
  });
});
