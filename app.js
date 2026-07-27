const GENERATE_ORIGIN_MEANINGS={
  home:'首页',community:'社区首页',explore:'Discover 探索流',topic:'话题页',topic_app:'话题内的 App 入口',image:'图片入口',gallery:'视频或图片画廊',big_image:'大图预览',task_list:'任务列表或生成结果入口',detail_page_slide:'详情页滑动流','':'调用未提供来源',likes:'点赞内容页',profile:'个人主页',post_list:'作品列表',post_detail:'作品详情',post_landing_page:'作品落地页',creator_list:'创作者或 App 列表',creator_detail:'滤镜或 App 详情',feed_detail:'Feed 详情',faceswap:'换脸内容流',faceswap_detail:'换脸详情',search_result:'搜索结果',build:'Build 创作页',follow:'关注流',studio:'Studio 功能区',none:'无可识别来源',remix:'Remix 二创页',chatbot:'Chatbot 对话场景',onboarding:'新用户引导',collection_like_recommend:'合集点赞后的推荐入口',remix_t2i:'Remix 内部文生图流程'
};
const GENERATE_ABILITY_MEANINGS={
  a1:'A1 通用生图',chatbot:'Chatbot 图片生成',FACESWAP:'视频换脸',CUSTOM_FACESWAP:'自定义换脸',SEGMENT:'智能抠图',ENHANCE_RESOLUTION:'图片增强/精绘',RECOLOR:'老照片上色',CHANGE_BACKGROUND:'更换背景',CHANGE_BACKGROUND_SEGMENT:'背景分割',EMOJI:'AI 表情包',GENERATE_VIDEO:'视频生成',ID_PHOTO:'证件照',DRESS_UP:'AI 换装',STAY_TUNED:'敬请期待占位能力',SIMPLE_GENERATE_VIDEO:'简易视频生成',VIDEO_ENHANCE_RESOLUTION:'视频增强',GEN_VIDEO:'历史视频生成分类值'
};
const LOGIN_POPUP_LOCATION_MEANINGS={
  like_click:'用户点赞时触发登录',postcard_click:'用户点击作品卡片时触发登录',videocard_click:'用户点击视频或视频滤镜卡片时触发登录',create_click:'用户开始生成或创作时触发登录',post_download_click:'用户下载作品时触发登录',image_download_click:'用户下载图片时触发登录',search_click:'用户进入搜索时触发登录',profile_click:'用户进入个人主页或创作者资料时触发登录',post_list_view:'用户进入作品列表时触发登录',creator_list_view:'用户进入创作者或 App 列表时触发登录',app_landing_page:'用户在 App 落地页触发登录',checkin_now:'用户点击立即签到时触发登录',topic_create_click:'用户创建话题内容时触发登录；当前调用已被注释，枚举仍保留',follow_button_click:'用户点击关注时触发登录',api_page:'用户在 API 页面触发登录',custom_upload_click:'用户在换脸场景点击自定义上传时触发登录',message_click:'用户进入消息功能时触发登录',none:'没有可识别的登录触发入口'
};
const GENERATE_ENTRY_POINT_MEANINGS={
  detail:'详情页',direct:'瀑布流直接入口','half-direct':'半屏详情页',comment:'评论区入口',direct_generate:'直接生成入口',build:'Build 创作页'
};
const IMAGE_DELETE_TYPE_MEANINGS={upload_image:'用户上传的输入图片',result_image:'生成任务的结果图片'};
const IMAGE_DELETE_LOCATION_MEANINGS={generate_popup:'生成弹窗或 App 生成表单',tasklist:'任务列表或任务操作弹窗',profile:'个人主页草稿区'};
const USER_SCENE_TYPE_MEANINGS={emoji:'表情包场景',creator:'创作者场景',id_photo:'证件照场景',dress_up:'换装场景',activity:'运营活动场景'};
const USER_SCENE_MEANINGS={...USER_SCENE_TYPE_MEANINGS,'':'未记录用户场景'};
const IMAGE_UPLOAD_ABILITY_MEANINGS={a1:'普通图片生成',GENERATE_VIDEO:'视频生成',FACESWAP:'换脸','':'未记录生成能力'};
const IMAGE_UPLOAD_SEARCH_METHOD_MEANINGS={input:'用户输入搜索词',history:'用户选择历史搜索词',individuation:'用户选择个性化推荐词',top_search:'用户选择热门搜索词',hot_today:'用户选择今日热门内容',placeholder:'用户未输入文字，直接提交输入框推荐词','':'未记录搜索方式'};
const FILTER_LEVEL_MEANINGS={'1':'简单滤镜：只有单一基础输入或能力','2':'普通组合滤镜：包含多个输入，或不属于简单/合照滤镜','3':'合照滤镜：包含合照功能'};
const IMAGE_UPLOAD_FRONT_ORIGIN_MEANINGS={remix_reference:'用户在 Remix 上传或更换参考图、合照图',remix_upload:'用户在 Remix 试用表单上传输入图片'};
const IMAGE_UPLOAD_FRONT_FAILURE_REASON_MEANINGS={success:'图片可正常使用；参考图链路复用已有图片时也使用此值',duplicate:'发现相同图片，直接复用已有图片',unsupported_format:'图片格式不支持',file_oversize:'图片超过 10 MB',GROUPPHOTO_NUMBER_ERROR:'合照识别到的人数少于 2',VIDEO_REQUIREMENT_ERROR:'上传内容不符合视频要求',VIDEO_FRAME_RATE_ERROR:'视频帧率不符合要求',VIDEO_DURATION_ERROR:'视频时长不符合要求',INVALID_SUFFIX:'文件后缀无效',FILE_ERROR:'文件无效',INVALID_PARAM:'上传参数无效','This image may violate our guidelines. Please try a different one.':'图片可能不符合内容规范，或服务端返回未识别错误码','检查图片是否已上传失败':'检查图片是否已存在时失败','上传图片失败':'图片上传请求失败','上传过程发生未知错误':'图片预处理或上传出现未知异常','上传过程异常':'参考图上传流程出现异常'};
const IMAGE_UPLOAD_RESULT_STATUS_MEANINGS={success:'图片上传成功或成功复用已有图片',failure:'图片上传失败'};
const REMIX_BASEIMAGE_TYPE_MEANINGS={t2i:'选择本次 Remix 内通过描述词重新生成的图片',a1_history:'选择其他历史生成图片'};
const TEMPLATE_VIDEO_TAG_ID_OBSERVED_MEANINGS={_Collection:'从合集卡片选择视频模板',All:'从“全部”标签选择视频模板','':'没有取得视频标签 ID'};
const TEMPLATE_VIDEO_TAG_NAME_OBSERVED_MEANINGS={_Collection:'从合集入口选择视频模板','':'没有取得视频标签名称'};
const VIDEO_UPLOAD_RESULT_STATUS_MEANINGS={success:'文件通过本地校验',fail:'文件未通过本地校验'};
const VIDEO_UPLOAD_ERROR_CODE_MEANINGS={'1001':'格式、文件类型或视频元数据无法识别','1002':'文件大于 15 MB','1003':'视频实际时长小于 4.5 秒或大于 30 秒','1004':'视频宽或高超过 1920 像素'};
const VIDEO_UPLOAD_SUCCESS_FAILURE_OBSERVED_MEANINGS={not_login:'用户未登录，流程被中断',generate:'用户生成积分不足，流程被中断',no_vip:'当前账号没有自定义换脸视频使用权限'};
const VOICE_BUTTON_STATE_MEANINGS={'turn on':'点击后开启声音','turn off':'点击后关闭声音'};
const DRESSUP_LIST_SOURCE_MEANINGS={studio_tab_banner:'从 Studio Banner 进入换装列表',studio_dressup_icon:'从 Studio 功能区的换装入口进入',discover_ad_dressup:'从 Discover 换装广告进入'};
const EMOJI_LIST_SOURCE_MEANINGS={studio_tab_banner:'从 Studio Banner 进入表情包列表',studio_emoji_icon:'从 Studio 功能区的表情包入口进入'};
const VIDEO_TEMPLATE_LOCATION_MEANINGS={appgallery:'Studio 视频模板合集',discover_tag:'Discover 标签页中的换脸模板列表',faceswap:'视频换脸模板列表'};
const IMAGE_INPUT_RESULT_MODE_MEANINGS={input:'切换为查看输入图',result:'切换为查看结果图'};
const IMAGE_INPUT_RESULT_METHOD_MEANINGS={hotkey:'按 A 键触发',click:'点击切换按钮触发'};
const GENERATE_LOCATION_MEANINGS={create:'首次生成',recreate:'再次生成','':'尚未记录首次或再次生成状态'};
const GENERATION_OBJECT_TYPE_MEANINGS={image:'图片',video:'视频','short film':'短片','Digital human':'数字人'};
const GENERATION_TYPED_ABILITY_MEANINGS=Object.fromEntries(Object.entries(GENERATE_ABILITY_MEANINGS).filter(([key])=>key!=='GEN_VIDEO'));
const GENERATE_SUCCESS_ABILITY_MEANINGS=Object.fromEntries(Object.entries(GENERATE_ABILITY_MEANINGS).filter(([key])=>key!=='chatbot'));
const STUDIO_FEATURE_ABILITY_MEANINGS=Object.fromEntries(Object.entries(GENERATE_ABILITY_MEANINGS).filter(([key])=>!['a1','chatbot','GEN_VIDEO'].includes(key)));
const STUDIO_FUNCTION_CLICK_ABILITY_MEANINGS=Object.fromEntries(Object.entries(GENERATE_ABILITY_MEANINGS).filter(([key])=>['ENHANCE_RESOLUTION','GENERATE_VIDEO','SEGMENT','EMOJI','ID_PHOTO','DRESS_UP'].includes(key)));
const GENERATION_ENTRY_POINT_MEANINGS={detail:'详情页',direct:'直接生成入口','half-direct':'半屏详情页',comment:'评论区入口',direct_generate:'直接生成按钮',result_show:'生成结果页','':'未记录具体入口'};
const GENERATE_SUCCESS_ENTRY_POINT_MEANINGS={detail:'详情页',direct:'直接生成入口','half-direct':'半屏详情页',comment:'评论区入口',direct_generate:'直接生成按钮',build:'Build 创作页'};
const RESULT_SHOW_ENTRY_POINT_MEANINGS={...GENERATE_SUCCESS_ENTRY_POINT_MEANINGS,result_show:'生成结果页再次生成','':'未记录具体入口'};
const RESULT_DOWNLOAD_ORIGIN_OBSERVED_MEANINGS={history:'生成历史区',gen_popup:'生成结果弹窗',result:'结果页',image_viewer:'大图查看器',comment:'评论图片',emojiResult:'表情包结果',imageDetail:'图片详情',draft:'个人主页草稿',postDetail:'作品详情'};
const RESULT_DOWNLOAD_LOCATION_OBSERVED_MEANINGS={download_no_watermark:'无水印下载入口',post_detail_longpress:'作品详情长按下载入口'};
const HISTORY_CLICK_ORIGIN_MEANINGS={tasklist:'任务列表或任务结果中的历史队列',result:'生成结果页中的历史队列'};
const HISTORY_CLICK_METHOD_MEANINGS={click:'点击另一条历史结果',swipe:'左右滑动切换历史结果'};
const IMAGE_DOWNLOAD_ORIGIN_OBSERVED_MEANINGS={history:'PC 生成历史',generate_result:'PC 生成结果区',task:'PC 任务卡片',big_image:'PC 大图或全屏任务预览','':'没有记录下载来源'};
const APP_PUBLISH_TYPE_MEANINGS={node:'节点式创作',form:'表单式创作'};
const APP_PUBLISH_RESULT_MEANINGS={a1:'普通图片 App',ai_video:'包含视频生成或视频节点的 App',faceswap:'包含换脸且不包含视频节点的 App'};
const APP_PUBLISH_BUILD_FROM_MEANINGS={fork:'基于其他 App 创建',scratch:'从零创建',remix:'通过 Remix 创建'};
const FILTER_PERMISSION_STATUS_MEANINGS={public:'所有人可见',private:'仅自己可见'};
const AWARD_ANNOUNCEMENT_TYPE_MEANINGS={wrong:'获奖结果尚未公布时点击锁定区域',true:'获奖结果已公布后点击查看'};
const CHATBOT_FIRST_SCENARIO_MEANINGS={first_10s_chat:'从新建 Chatbot 会话流程进入；该值不表示真实等待了 10 秒'};
const RESULT_POP_SHOW_ORIGIN_MEANINGS={generate_pop_generate:'本次生成成功后自动打开结果弹窗',edit_result:'点击编辑页中的已有结果预览',view_result:'点击查看已有结果'};
const VIDEO_FULLSCREEN_STATE_MEANINGS={full:'点击后准备进入全屏',"non-full":'点击后准备退出全屏'};
const REMIX_WHATSAPP_ORIGIN_MEANINGS={edit:'Remix 编辑页；当前没有可用入口',announcement:'创作者公告页',creator_center:'创作者中心；当前没有可用入口'};
const PUBLISH_POP_SHOW_ORIGIN_MEANINGS={edit_publish:'从 Remix 编辑页进入发布流程',result_publish:'从生成结果弹窗进入发布流程'};
const GENERATE_RESULTS_VIEW_SOURCE_MEANINGS={tasklist:'任务列表中的结果视图',app_result:'App 生成结果视图'};
const GENERATE_RESULTS_ABILITY_MEANINGS={a1:'A1 通用生图',GENERATE_VIDEO:'视频生成',FACESWAP:'视频换脸'};
const BIG_IMAGE_ORIGIN_MEANINGS={hover:'从悬浮任务卡片进入',popup:'从任务弹窗进入',sidebar:'从侧边任务列表进入'};
const IMAGE_EXPOSURE_LOCATION_OBSERVED_MEANINGS={homepage_image:'个人主页图片列表',homepage_likedImage:'个人主页喜欢图片列表；当前没有调用方',visit_picDetail:'图片详情页'};
const IMAGE_PUBLISH_ORIGIN_OBSERVED_MEANINGS={big_image:'PC 任务大图预览',generate_result:'PC 生成结果区'};
const TASKLIST_CLICK_STATE_MEANINGS={'1':'准备展开浮层任务列表','-1':'准备收起为侧边任务栏'};
const MUTE_BUTTON_STATE_MEANINGS={mute:'点击后进入静音状态',"non-mute":'点击后恢复声音；点击播放时自动恢复声音也使用此值'};
const GENERATION_SEARCH_METHOD_MEANINGS={input:'用户手动输入搜索词',history:'用户选择历史搜索词',individuation:'用户选择个性化推荐词',top_search:'用户选择顶部热门搜索词',hot_today:'用户选择今日热门搜索词',placeholder:'用户未输入文字，直接使用输入框推荐词','':'未记录搜索方式'};
const REMIX_ENTRY_ORIGIN_MEANINGS={explore:'从 Discover / 探索页进入',follow:'从关注页进入',announcement:'从创作者公告进入',creator_activity:'从创作者活动进入',creator_center:'从创作者中心进入'};
const REMIX_USER_LEVEL_MEANINGS={'1':'任一级别滤镜发布都未达到 5 次','2':'难度 1 滤镜发布至少 5 次，难度 2、3 尚未达到','3':'难度 2 滤镜发布至少 5 次，难度 3 尚未达到','4':'难度 3 滤镜发布至少 5 次'};
const REMIX_VIP_TYPE_MEANINGS={Mo:'月付会员',Yr:'年付会员',Wk:'周付会员',Qr:'季付会员',none:'没有可用订阅周期'};
const REMIX_FILTER_TYPE_MEANINGS={image:'图片滤镜',ai_video:'AI 视频滤镜'};
const APP_LOCK_REASON_MEANINGS={generate_reach2limit:'有过期订阅记录的用户生成达到 2 次后锁定',generate_reach3limit:'达到 3 次免费使用限制后锁定；当前下载触发的锁定也使用此值'};
const CREATE_SAME_LOCATION_MEANINGS={top:'详情页顶部的一键同款入口',"others' published":'类型声明中的他人发布作品入口；当前调用未使用该拼写',"other's pubilshd":'他人发布作品入口；Raw 值保留当前代码拼写'};
const GENERATE_MINIMIZE_ABILITY_OBSERVED_MEANINGS={a1:'普通图片生成',faceswap:'视频换脸',SEGMENT:'智能抠图',ENHANCE_RESOLUTION:'图片增强',RECOLOR:'老照片上色',CHANGE_BACKGROUND_SEGMENT:'背景分割'};
const GENERATE_FAILURE_REASON_OBSERVED_MEANINGS={chatbot:'Chatbot 生成表单校验未通过',not_login:'用户未登录',no_enough_credits:'积分不足',failed_to_load:'生成表单尚未加载完成',text_not_filled:'必填文字未填写',image_not_filled:'必填图片或视频未上传',vip_benefit:'当前账号没有所需会员权益',form_not_filled:'其他必填项未完成','Generation failed, Credits will be returned in a few minutes':'生成失败且服务端没有返回具体原因时的兜底提示','':'没有取得具体失败原因'};
const GENERATE_FAILURE_ABILITY_OBSERVED_MEANINGS={a1:'普通图片生成',FACESWAP:'视频换脸',SEGMENT:'智能抠图',RECOLOR:'老照片上色',ENHANCE_RESOLUTION:'图片增强',GENERATE_VIDEO:'视频生成',CHANGE_BACKGROUND:'更换背景',CHANGE_BACKGROUND_SEGMENT:'背景分割',SIMPLE_GENERATE_VIDEO:'简易视频生成',VIDEO_ENHANCE_RESOLUTION:'视频增强'};
const GENERATE_SUCCESS_IMAGE_TYPE_OBSERVED_MEANINGS={customize_prompt_ref_img:'自定义提示词和参考图生成背景',customize_ref_img:'使用自定义参考图生成背景',recommend:'使用推荐背景',customize_prompt:'使用自定义提示词生成背景','':'未记录图片输入类型'};
const GENERATE_BUTTON_TYPE_MEANINGS={VIP:'达到免费次数或需要会员权益的生成按钮',normal:'普通生成按钮'};
const GENERATE_BUTTON_LEGACY_TYPE_MEANINGS={test:'旧图生图接口',generate:'旧生成接口',test_t2i:'Remix 文生图流程'};
const OTHERS_FILTERS_CUSTOMIZE_GENERATE_SCENE_MEANINGS={...USER_SCENE_TYPE_MEANINGS};
const ENHANCEMENT_CURRENT_TAB_MEANINGS={post_detail:'作品详情页',creator_top:'创作者中心顶部；当前没有实际入口使用',creator_detail:'App 详情页',search_result:'搜索结果',task:'任务页；当前实际入口记录为 task_list',topic_detail:'话题内的 App 详情',task_list:'任务列表',likes:'喜欢列表',follow:'关注页',explore:'探索页',post_list:'作品列表',topic:'话题页',studio:'创作工具页',profile:'个人主页及相关列表',home:'首页',none:'消息页或无法识别具体首页栏目',post_landing_page:'作品落地页',topic_app:'话题 App 落地页',image:'图片落地页',faceswap_detail:'换脸详情页'};
const ENHANCEMENT_SUCCESS_CURRENT_TAB_MEANINGS={...ENHANCEMENT_CURRENT_TAB_MEANINGS,'':'没有记录精绘发起入口'};
const FACESWAP_SORT_MODE_MEANINGS={Recommend:'推荐排序',Popular:'热门排序',New:'最新排序'};
const ABILITY_NAME_TRACK_MEANINGS=Object.fromEntries(Object.entries(GENERATION_TYPED_ABILITY_MEANINGS).filter(([key])=>key!=='chatbot'));
const TEXT_EDIT_SOURCE_MEANINGS={auto_enter:'表情包生成成功后自动进入文字编辑',edit_button_click:'从任务结果页点击“添加文字”进入'};
const OPTIMIZE_ORIGIN_MEANINGS={generate_result:'应用生成结果区域',big_image:'任务图片全屏预览',task:'任务列表或任务卡片'};
const IMAGE_CHANGE_TYPE_MEANINGS={reference:'用户准备更换普通参考图',groupphoto:'用户准备更换参考合照',presetphoto:'用户准备更换合照中某个人物位置的图片'};
const CHOOSE_FILTER_STATE_MEANINGS={have_filter:'当前有可选滤镜',no_filter:'当前没有可选滤镜'};
const FILTER_DELETE_SOURCE_MEANINGS={mobile:'用户在移动端操作 App 删除',web:'用户在 PC 个人主页操作 App 删除'};
const FILTER_PERMISSION_CURRENT_STATUS_MEANINGS={public:'打开设置时滤镜为任何人可见',private:'打开设置时滤镜仅自己可见'};
const FILTER_PERMISSION_BEFORE_STATUS_MEANINGS={public:'选择前为任何人可见',private:'选择前仅自己可见'};
const FILTER_PERMISSION_AFTER_STATUS_MEANINGS={public:'用户选择任何人可见',private:'用户选择仅自己可见'};
const GROUP_PHOTO_LOCATION_MEANINGS={detail:'用户在完整 App 详情页选择合照人物位置','half-direct':'用户在半屏 App 详情弹窗选择合照人物位置',filter:'用户在 Remix 创作表单选择合照人物位置'};
const IMAGE_INPUT_ORIGIN_MEANINGS={post_detail:'用户在作品详情页按住查看输入图',tasklist:'用户在任务列表按住查看输入图',follow:'用户在关注内容流按住查看输入图',atomic:'用户在单步图片处理结果页按住查看处理前图片',app_result:'用户在生成结果页按住查看输入图'};
const SHARE_ORIGIN_MEANINGS={post_detail_click:'作品详情页点击分享',post_detail_longpress:'作品详情长按',app_card:'App 卡片',result_page:'生成结果页',topic_detail:'话题详情页',image_detail:'图片详情页',profile:'个人主页',invitation:'邀请活动',faceswap:'视频换脸',comment:'评论区',web_fullscreen:'Web 全屏预览',none:'未记录分享来源',download_trigger:'下载触发的分享',publish:'发布流程',history:'历史结果',emojiAppCard:'表情包 App 卡片',screenshot:'截图入口',backgroundResult:'换背景结果',gen_popup:'生成弹窗',detail_page_slide:'详情页滑动流'};
const SHARE_TYPE_MEANINGS={image:'图片',app:'滤镜或 App',video:'视频',post:'作品',profile:'个人主页',topic:'话题',promotion:'运营活动',invitation:'邀请活动',faceswap:'视频换脸结果'};
const CANCEL_SUBSCRIPTION_PRODUCT_MEANINGS={lite:'Lite 会员',basic:'Basic 会员',pro:'Pro 会员',mega:'Mega 会员',premium:'Premium 会员'};
const CANCEL_SUBSCRIPTION_PERIOD_MEANINGS={monthly:'月订阅',yearly:'年订阅',weekly:'周订阅','one week':'单周订阅','one year':'单年订阅','one month':'单月订阅'};
const CANCEL_SUBSCRIPTION_SOURCE_MEANINGS={pricing_toC:'面向普通用户的订阅定价页',pricing_api:'API 业务订阅定价页'};
const PAY_CANCEL_RECOVERY_PERIOD_MEANINGS={Yr:'按年订阅',Qr:'按季度订阅',Wk:'按周订阅',Mo:'按月订阅'};
const PAY_CANCEL_RECOVERY_GROUP_MEANINGS={Online:'线上对照组，不展示支付取消挽回',TestA:'取消支付后立即展示挽回弹窗，并在 Discover 保留提醒',TestB:'取消支付后仅立即展示挽回弹窗'};
const CHATBOT_ENTRY_SOURCE_MEANINGS={filter_page_tips:'滤镜页 Chatbot 提示入口',result_page_tip:'生成结果页单数形式提示入口；仅类型定义保留',result_page_tips:'生成结果页提示入口',result_page_chat:'生成结果页 Chat 按钮',message_tab_tip:'消息 Tab 提示入口',list_new:'Chatbot 新朋友列表',list_more:'Chatbot 更多朋友列表'};
const CHATBOT_CONTENT_TYPE_MEANINGS={pgc:'平台创建的官方 Chatbot',ugc:'用户创建的自定义 Chatbot'};
const CHATBOT_MESSAGE_SOURCE_MEANINGS={...CHATBOT_ENTRY_SOURCE_MEANINGS,input:'用户在输入框中主动发送',topic_card:'用户点击对话主题卡片发送',quick_reply:'用户点击快捷回复发送'};
const CHATBOT_BOND_LEVEL_MEANINGS={'1':'亲密度 Lv.1','2':'亲密度 Lv.2','3':'亲密度 Lv.3','4':'亲密度 Lv.4','5':'亲密度 Lv.5','6':'亲密度 Lv.6；当前最高展示等级'};
const CHATBOT_TOPIC_SCENARIO_MEANINGS={first_day:'用户首次进入该 Chatbot 的首日话题引导',returning:'用户后续回访该 Chatbot 时的话题引导'};
const CUSTOM_CHATBOT_GENDER_MEANINGS={'1':'男性 / 男孩 Chatbot','2':'女性 / 女孩 Chatbot'};
const CUSTOM_CHATBOT_RELATIONSHIP_MEANINGS={'1':'恋人；根据性别显示男朋友或女朋友','3':'暗恋对象','4':'最好的朋友','5':'邻居'};
const CUSTOM_CHATBOT_CHARACTER_MEANINGS={'6':'女性：关爱且调皮；男性：可靠且温和','7':'女性：害羞且温柔；男性：上进且关爱','8':'女性：活泼且自信；男性：自信且活泼'};
const CHATBOT_RESULT_SOURCE_MEANINGS={chatbot_view_img:'查看单人图片结果；也是无法识别任务类型时的默认值',chatbot_view_img_couple:'查看用户与 Chatbot 合照结果',chatbot_img_to_video:'图片转视频结果',chatbot_send_photo:'发送照片或快捷照片生成结果',chatbot_snap_character:'Snap 角色快照结果',chatbot_snap_couple:'Snap 合照快照结果',chatbot_custom_character:'Imagine 角色图片结果',chatbot_custom_me:'Imagine 用户本人图片结果',chatbot_custom_couple:'Imagine 用户与 Chatbot 合照结果'};

const REVIEWED_FIELD_SEMANTICS={
  'account_delete_confirm.is_confirm':{meaning:'表示用户在删除账号确认流程中的最终选择。',valueMeaningSource:'frontend_code',values:{true:'确认删除账号',false:'取消删除账号'}},

  'feedback_popup_button_click.location1':{meaning:'打开反馈弹窗时所在的一级页面来源，没有来源记录时为空字符串。',valueMeaningSource:'frontend_code',replaceCommonValues:true,values:{}},
  'feedback_popup_button_click.is_add':{meaning:'是否前往 WhatsApp 反馈。',valueMeaningSource:'frontend_code',values:{true:'用户点击确认，前往 WhatsApp 反馈',false:'用户点击取消或弹窗外区域，关闭反馈弹窗'}},
  'rating_popup_click.button':{meaning:'用户在五星评分引导弹窗中选择的操作。',valueMeaningSource:'frontend_code',values:{five_star_praise:'用户点击“给出五星好评”，前往 Google Play 评分',not_now:'用户点击关闭按钮，暂不评分'}},
  'rate_popup_click_submit.rate':{meaning:'用户提交的评分星级。',example:1,valueMeaningSource:'frontend_code',values:{1:'用户选择 1 星并提交',2:'用户选择 2 星并提交',3:'用户选择 3 星并提交',4:'用户选择 4 星并提交'}},

  'app_click.app_id':{meaning:'用户点击的滤镜或 App 的资源长 ID，取 resource.id；不是用于路由展示的 shortId。'},
  'app_click.is_banner':{meaning:'区分点击对象是否为推荐 Banner。',valueMeaningSource:'frontend_code',values:{true:'点击 Banner',false:'点击普通滤镜或 App 卡片'}},
  'app_click.trace_info':{meaning:'推荐链路追踪信息；优先使用卡片携带的 aiRecTraceInfo，否则按 app_id 从事件追踪器读取。'},
  'app_click.exposure_ratio':{meaning:'点击发生前该卡片在视口中的曝光比例，以字符串上报；列表场景保留三位小数，部分直接入口固定为 0 或 1。'},
  'app_click.image_id':{meaning:'点击滤镜时本地已选主图的图片 ID；没有已选图片时为空字符串。'},
  'app_click.sort':{meaning:'点击对象在当前推荐列表中的顺序，正常列表从 1 开始；无法定位列表项时部分场景上报 0。'},
  'app_click.user_scene':{meaning:'滤镜或 App 面向的用户业务场景，由后端 UserScene 映射为上报值。',valueMeaningSource:'frontend_code',values:{emoji:'表情包场景',creator:'创作者场景',id_photo:'证件照场景',dress_up:'换装场景',activity:'运营活动场景','':'没有可识别的用户场景'}},
  'app_click.search_id':{meaning:'搜索场景对应的搜索请求或会话 ID；仅在调用方标记 search=true 时随搜索上下文上报。'},
  'app_click.search_content':{meaning:'触发当前搜索结果的搜索词；仅在调用方标记 search=true 时上报。'},
  'app_click.ability_name':{meaning:'滤镜或 App 所属的原子能力分类，由 getAppCategoryName 计算。',valueMeaningSource:'frontend_code',values:{a1:'A1 通用生图',FACESWAP:'视频换脸',CUSTOM_FACESWAP:'自定义换脸',SEGMENT:'智能抠图',ENHANCE_RESOLUTION:'图片增强/精绘',RECOLOR:'老照片上色',CHANGE_BACKGROUND:'更换背景',CHANGE_BACKGROUND_SEGMENT:'背景分割',EMOJI:'AI 表情包',GENERATE_VIDEO:'视频生成',ID_PHOTO:'证件照',DRESS_UP:'AI 换装',STAY_TUNED:'敬请期待占位能力',SIMPLE_GENERATE_VIDEO:'简易视频生成',VIDEO_ENHANCE_RESOLUTION:'视频增强'}},
  'app_click.app_source':{meaning:'滤镜或 App 的推荐业务来源；当前已核验调用值包括 onboarding_old 和 generate_wait。',valueMeaningSource:'frontend_code',values:{onboarding_old:'旧版新用户推荐流程',generate_wait:'生成等待页推荐'}},
  'app_click.recommendAppId':{meaning:'生成等待页推荐卡片的推荐记录 ID，用于关联推荐结果与被点击 App。'},
  'app_click.location':{meaning:'当前点击所属的专项业务入口。',valueMeaningSource:'frontend_code',values:{cold_start_commend:'冷启动推荐弹窗'}},
  'app_click.location1':{meaning:'预留的一级位置字段；当前已解析调用仅在冷启动推荐弹窗中传空字符串。',valueMeaningSource:'frontend_code',values:{'':'当前调用未提供一级位置'}},
  'app_click.location2':{meaning:'预留的二级位置字段；当前已解析调用仅在冷启动推荐弹窗中传空字符串。',valueMeaningSource:'frontend_code',values:{'':'当前调用未提供二级位置'}},

  'like.post_id':{meaning:'被点赞或取消点赞的作品 ID；type=post 时使用。'},
  'like.app_id':{meaning:'被点赞或取消点赞的滤镜/App 资源长 ID；type=app 时使用。'},
  'like.origin':{meaning:'点赞动作发生的内容入口。以下为前端类型声明的完整枚举；移动端路径函数仍通过 any 转换，若出现声明外值需单独治理。',valueMeaningSource:'frontend_code',values:{post_lists:'作品列表',app_card:'App 卡片',create_popup:'创作弹窗',app_landing_page:'App 落地页',topic_list:'话题列表',profile:'个人主页',none:'无可识别入口'}},
  'like.location':{meaning:'PC 端 App 点赞发生的详情界面，用作 PC 端的 origin 补充。',valueMeaningSource:'frontend_code',values:{creator_popup:'创作详情弹窗',app_landing_page:'App 落地页'}},
  'like.state':{meaning:'点赞状态变化结果。',valueMeaningSource:'frontend_code',values:{'1':'点赞','-1':'取消点赞'}},
  'like.type':{meaning:'被操作对象的业务类型。',valueMeaningSource:'frontend_code',values:{post:'作品',app:'滤镜或 App',image:'图片',comment:'评论'}},
  'like.trace_info':{meaning:'推荐链路追踪信息；调用未传入时按 app_id 从事件追踪器补齐。'},
  'like.is_ai_video':{meaning:'标记被点赞对象是否属于 AI 视频；仅 AI 视频上报 1，其他场景不传该字段。',valueMeaningSource:'frontend_code',values:{'1':'AI 视频 App 或视频作品','undefined':'非 AI 视频，不上报该字段'}},
  'like.ability_name':{meaning:'被点赞 App 所属的原子能力分类，由 getAppCategoryName 计算；取值口径与 app_click.ability_name 一致。'},
  'like.user_scene':{meaning:'被点赞 App 的用户业务场景，由 USER_SCENE_TRACK_CONFIG 映射。',valueMeaningSource:'frontend_code',values:{emoji:'表情包场景',creator:'创作者场景',id_photo:'证件照场景',dress_up:'换装场景',activity:'运营活动场景'}},

  'image_upload_click.origin':{meaning:'本次图片上传发生的创作流程。',valueMeaningSource:'frontend_code',values:{remix:'用户在 Remix 创作表单点击上传或更换输入图片'}},
  'image_upload_click.filter_level':{meaning:'上传图片时当前滤镜的复杂度等级。',example:1,valueMeaningSource:'frontend_code',values:FILTER_LEVEL_MEANINGS},
  'image_upload_click.trace_info':{meaning:'本次上传关联的推荐追踪信息；没有追踪信息时为空字符串。',example:'trace_example'},
  'image_upload_click.product_name':{meaning:'本次上传所属的产品标识；换脸页面的值会带 _faceswap 后缀。',example:'a1'},
  'image_upload_click.app_id':{meaning:'本次上传关联的动态 App 资源 ID；没有关联 ID 时为空字符串。'},
  'image_upload_click.user_type':{meaning:'图片上传时所在的用户使用形态。',valueMeaningSource:'frontend_code',values:{creator:'用户在 Build 或 Remix 创作页面上传',consumer:'用户在其他使用页面上传'}},
  'image_upload_click.user_scene':{meaning:'本次上传关联 App 的业务场景。',valueMeaningSource:'frontend_code',values:USER_SCENE_MEANINGS},
  'image_upload_click.ability_name':{meaning:'本次上传关联 App 的生成能力。',valueMeaningSource:'frontend_code',values:IMAGE_UPLOAD_ABILITY_MEANINGS},
  'image_upload_click.search_content':{meaning:'本次上传来自搜索结果时使用的搜索词；没有搜索词时为空字符串。',example:'portrait'},
  'image_upload_click.search_id':{meaning:'本次上传来自搜索结果时对应的搜索记录 ID；没有记录 ID 时为空字符串。',example:'search_request_id'},
  'image_upload_click.search_method':{meaning:'本次上传来自搜索结果时采用的搜索方式。',valueMeaningSource:'frontend_code',values:IMAGE_UPLOAD_SEARCH_METHOD_MEANINGS},

  'image_upload_front.origin':{meaning:'本次图片上传发生的 Remix 流程。',valueMeaningSource:'frontend_code',values:IMAGE_UPLOAD_FRONT_ORIGIN_MEANINGS},
  'image_upload_front.filter_level':{meaning:'上传图片时当前滤镜的复杂度等级。',example:1,valueMeaningSource:'frontend_code',values:FILTER_LEVEL_MEANINGS},
  'image_upload_front.failure_reason':{meaning:'本次上传或图片处理结果。除下列已观察值外，服务端错误文案也会原样上报，因此保持开放字符串。',example:'success',valueMeaningSource:'frontend_code',openValues:IMAGE_UPLOAD_FRONT_FAILURE_REASON_MEANINGS},
  'image_upload_front.trace_info':{meaning:'本次上传关联的动态推荐追踪信息；没有记录时为空字符串。',example:'trace_example'},
  'image_upload_front.product_name':{meaning:'本次上传所属的动态产品标识；换脸路径会追加 _faceswap。',example:'a1'},
  'image_upload_front.app_id':{meaning:'本次上传关联的动态 App 资源 ID。',example:'2066475647017820162'},
  'image_upload_front.user_type':{meaning:'图片上传时所在的用户使用形态。',valueMeaningSource:'frontend_code',values:{creator:'用户在 Build 创作页上传',consumer:'用户在其他使用页面上传'}},
  'image_upload_front.file_path':{meaning:'图片上传完成后的动态文件路径。',example:'assets/images/example/'},

  'image_upload_result.app_id':{meaning:'本次上传关联的动态 App 资源 ID；缺失时为空字符串。',example:'2066475647017820162'},
  'image_upload_result.upload_status':{meaning:'本次图片上传或查重处理的结果；事件先于图片写入表单。',valueMeaningSource:'frontend_code',values:IMAGE_UPLOAD_RESULT_STATUS_MEANINGS},
  'image_upload_result.input_image_id':{meaning:'成功时为上传接口返回的 filename；失败时为空字符串。',example:'input_image_filename'},
  'image_upload_result.ability_name':{meaning:'本次上传关联 App 的生成能力。',valueMeaningSource:'frontend_code',values:{a1:'普通图片生成',GENERATE_VIDEO:'视频生成',FACESWAP:'换脸'}},
  'image_upload_result.trace_info':{meaning:'本次上传关联的动态推荐追踪信息；没有记录时为空字符串。',example:'trace_example'},
  'image_upload_result.user_scene':{meaning:'本次上传关联 App 的业务场景。',valueMeaningSource:'frontend_code',values:USER_SCENE_TYPE_MEANINGS},
  'image_upload_result.search_content':{meaning:'本次上传来自搜索结果时使用的动态搜索词；没有记录时为空字符串。',example:'portrait'},
  'image_upload_result.search_id':{meaning:'本次上传来自搜索结果时对应的动态搜索记录 ID；没有记录时为空字符串。',example:'search_request_id'},
  'image_upload_result.search_method':{meaning:'本次上传来自搜索结果时采用的搜索方式。',valueMeaningSource:'frontend_code',values:IMAGE_UPLOAD_SEARCH_METHOD_MEANINGS},

  'others_filters_click.user_scene':{meaning:'用户手动打开其他滤镜或相册面板时所在的业务场景；当前入口可达证件照和换装场景。',valueMeaningSource:'frontend_code',values:USER_SCENE_TYPE_MEANINGS},
  'others_filters_customize.user_scene':{meaning:'用户点击自定义入口时所在的业务场景；当前入口可达证件照和换装场景。',valueMeaningSource:'frontend_code',values:USER_SCENE_TYPE_MEANINGS},
  'remix_baseimage_choose.type':{meaning:'用户选中的历史图片来源。',valueMeaningSource:'frontend_code',values:REMIX_BASEIMAGE_TYPE_MEANINGS},
  'remix_uploadfrom_a1_click.app_id':{meaning:'当前 Remix 的动态 App 资源 ID。',example:'2066475647017820162'},
  'remix_uploadfrom_a1_click.short_id':{meaning:'当前 Remix 的动态 App 短 ID。',example:'app_short_id'},
  'remix_uploadfrom_album_click.app_id':{meaning:'当前 Remix 的动态 App 资源 ID。',example:'2066475647017820162'},
  'remix_uploadfrom_album_click.short_id':{meaning:'当前 Remix 的动态 App 短 ID。',example:'app_short_id'},
  'remove_input_cancel_click.app_id':{meaning:'当前编辑的动态 App 资源 ID。',example:'2066475647017820162'},
  'remove_input_click.app_id':{meaning:'当前编辑的动态 App 资源 ID。',example:'2066475647017820162'},
  'remove_input_confirm_click.app_id':{meaning:'当前编辑的动态 App 资源 ID。',example:'2066475647017820162'},

  'template_video_select.template_id':{meaning:'用户点击的视频换脸模板 ID。',example:'video_template_id'},
  'template_video_select.video_tag_id':{meaning:'模板所在的视频标签 ID；除下列特殊值外，也可能是接口返回的其他动态标签 ID。',example:'All',valueMeaningSource:'frontend_code',openValues:TEMPLATE_VIDEO_TAG_ID_OBSERVED_MEANINGS},
  'template_video_select.video_tag_name':{meaning:'模板所在的视频标签名称；除下列特殊值外，也可能是接口返回的其他动态标签名称。',example:'Featured',valueMeaningSource:'frontend_code',openValues:TEMPLATE_VIDEO_TAG_NAME_OBSERVED_MEANINGS},
  'template_video_select.gallery_id':{meaning:'模板所属的动态 Gallery 或合集 ID。',example:'gallery_id'},
  'video_guide_dismissed.app_id':{meaning:'当前 Remix 的动态 App 资源 ID。',example:'2066475647017820162'},
  'video_guide_dismissed.short_id':{meaning:'当前 Remix 的动态 App 短 ID。',example:'app_short_id'},
  'video_guide_dismissed.filter_level':{meaning:'当前滤镜的复杂度等级。',example:1,valueMeaningSource:'frontend_code',values:FILTER_LEVEL_MEANINGS},
  'video_guide_show.app_id':{meaning:'当前 Remix 的动态 App 资源 ID。',example:'2066475647017820162'},
  'video_guide_show.short_id':{meaning:'当前 Remix 的动态 App 短 ID。',example:'app_short_id'},
  'video_guide_show.filter_level':{meaning:'当前滤镜的复杂度等级。',example:1,valueMeaningSource:'frontend_code',values:FILTER_LEVEL_MEANINGS},
  'video_upload_result.status':{meaning:'用户所选视频的本地文件校验结果。',valueMeaningSource:'frontend_code',values:VIDEO_UPLOAD_RESULT_STATUS_MEANINGS},
  'video_upload_result.error_code':{meaning:'本地文件未通过校验时的失败原因。',valueMeaningSource:'frontend_code',values:VIDEO_UPLOAD_ERROR_CODE_MEANINGS},
  'video_upload_result.file_size_mb':{meaning:'所选视频的文件大小，单位 MB，保留三位小数。',example:12.345},
  'video_upload_result.duration_sec':{meaning:'所选视频的时长，四舍五入为整数秒；读取失败时为 0，其他时长保持开放数值。',example:10,valueMeaningSource:'frontend_code',openValues:{'0':'无法读取视频时长'}},
  'video_upload_result.resolution':{meaning:'所选视频的动态分辨率，格式为“宽*高”；读取失败时为空字符串。',example:'1920*1080',valueMeaningSource:'frontend_code',openValues:{'':'无法读取视频分辨率'}},

  'video_upload_success.is_success':{meaning:'自定义换脸视频上传或使用流程是否成功。',valueMeaningSource:'frontend_code',values:{true:'视频上传成功并取得视频 ID',false:'上传或使用流程被拦截或失败'}},
  'video_upload_success.failure_reason':{meaning:'失败时的原因。除下列已观察业务值外，本地校验文案、接口错误信息和异常信息也会原样上报。',example:'not_login',valueMeaningSource:'frontend_code',openValues:VIDEO_UPLOAD_SUCCESS_FAILURE_OBSERVED_MEANINGS},
  'video_upload_success.video_id':{meaning:'上传成功后接口返回的动态视频 ID；仅成功时发送。',example:'video_id'},
  'voice_button_click.current_state':{meaning:'用户点击声音按钮后的播放声音状态。',valueMeaningSource:'frontend_code',values:VOICE_BUTTON_STATE_MEANINGS},
  'dressup_list_page_show.source':{meaning:'用户进入换装列表页的来源；直接访问列表路由时不发送。',valueMeaningSource:'frontend_code',values:DRESSUP_LIST_SOURCE_MEANINGS},
  'emoji_list_page_show.source':{meaning:'用户进入表情包列表页的来源；直接访问列表路由时不发送。',valueMeaningSource:'frontend_code',values:EMOJI_LIST_SOURCE_MEANINGS},
  'others_filters_popup_show.user_scene':{meaning:'打开证件照滤镜或换装相册面板时所在的业务场景；当前入口可达证件照和换装场景。',valueMeaningSource:'frontend_code',values:USER_SCENE_TYPE_MEANINGS},
  'video_template_exposure.exposureList':{meaning:'本次达到曝光条件的视频模板列表；每项固定为 {template_id: string}，template_id 是动态视频模板 ID。',example:[{template_id:'video_template_id'}]},
  'video_template_exposure.location':{meaning:'本批视频模板曝光发生的列表位置。',valueMeaningSource:'frontend_code',values:VIDEO_TEMPLATE_LOCATION_MEANINGS},
  'image_input_result_switch.mode':{meaning:'用户本次尝试切换到的目标图片视图。',valueMeaningSource:'frontend_code',values:IMAGE_INPUT_RESULT_MODE_MEANINGS},
  'image_input_result_switch.switch_method':{meaning:'用户尝试切换输入图或结果图的操作方式。',valueMeaningSource:'frontend_code',values:IMAGE_INPUT_RESULT_METHOD_MEANINGS},

  'image_change_click.type':{meaning:'用户准备更换的图片类型。',valueMeaningSource:'frontend_code',values:IMAGE_CHANGE_TYPE_MEANINGS},
  'image_change_click.app_id':{meaning:'本次更换图片关联的动态 App 资源 ID。'},
  'choose_filter_show.type':{meaning:'发布滤镜选择弹窗中是否有可选滤镜。',valueMeaningSource:'frontend_code',values:CHOOSE_FILTER_STATE_MEANINGS},

  'faceswap_tag_click.tag_id':{meaning:'用户切换到的视频换脸标签 ID；选择“全部”时为空字符串，其他值由标签列表动态返回。',example:''},
  'faceswap_tag_click.tag_name':{meaning:'用户切换到的视频换脸标签名称；选择“全部”时为当前语言的“全部”文案，未找到名称时为空字符串。',example:'All'},
  'filter_delete_cancel.short_id':{meaning:'本次删除操作对应的动态 App 短 ID。',example:'app_short_id'},
  'filter_delete_cancel.app_id':{meaning:'本次删除操作对应的动态 App 资源 ID。',example:'2066475647017820162'},
  'filter_delete_cancel.source':{meaning:'本次删除操作发生的终端。',valueMeaningSource:'frontend_code',values:FILTER_DELETE_SOURCE_MEANINGS},
  'filter_delete_click.short_id':{meaning:'本次删除操作对应的动态 App 短 ID。',example:'app_short_id'},
  'filter_delete_click.app_id':{meaning:'本次删除操作对应的动态 App 资源 ID。',example:'2066475647017820162'},
  'filter_delete_click.source':{meaning:'本次删除操作发生的终端。',valueMeaningSource:'frontend_code',values:FILTER_DELETE_SOURCE_MEANINGS},
  'filter_delete_confirm.short_id':{meaning:'本次删除操作对应的动态 App 短 ID。',example:'app_short_id'},
  'filter_delete_confirm.app_id':{meaning:'本次删除操作对应的动态 App 资源 ID。',example:'2066475647017820162'},
  'filter_delete_confirm.source':{meaning:'本次删除操作发生的终端。',valueMeaningSource:'frontend_code',values:FILTER_DELETE_SOURCE_MEANINGS},
  'filter_more_click.short_id':{meaning:'当前 App 的动态短 ID。',example:'app_short_id'},
  'filter_more_click.app_id':{meaning:'当前 App 的动态资源 ID。',example:'2066475647017820162'},
  'filter_permission_entry_click.current_status':{meaning:'打开权限设置时滤镜当前的可见范围。',valueMeaningSource:'frontend_code',values:FILTER_PERMISSION_CURRENT_STATUS_MEANINGS},
  'filter_permission_update.before_status':{meaning:'用户选择权限前滤镜的可见范围。',valueMeaningSource:'frontend_code',values:FILTER_PERMISSION_BEFORE_STATUS_MEANINGS},
  'filter_permission_update.after_status':{meaning:'用户在权限弹窗中选择的可见范围。',valueMeaningSource:'frontend_code',values:FILTER_PERMISSION_AFTER_STATUS_MEANINGS},
  'group_photo_mask_click.location':{meaning:'用户选择合照人物位置时所在的页面。',example:'detail',valueMeaningSource:'frontend_code',replaceCommonValues:true,values:GROUP_PHOTO_LOCATION_MEANINGS},
  'group_photo_mask_click.masksort':{meaning:'用户选中的合照人物区域序号，从 0 开始，随当前可选人物数量动态变化。',example:0},
  'image_input_view.app_id':{meaning:'用户查看输入图时关联的 App 或图片处理功能 ID；作品和任务场景为动态 App ID，单步处理场景为 SEGMENT（智能抠图）、ENHANCE_RESOLUTION（图片增强）、RECOLOR（老照片上色）或 CHANGE_BACKGROUND_SEGMENT（背景分割）。',example:'2066475647017820162'},
  'image_input_view.image_id':{meaning:'用户查看输入图时对应的结果图片 ID；单步处理尚未取得 ID 时为空字符串。',example:'2066475647017820162'},
  'image_input_view.origin':{meaning:'用户查看输入图时所在的业务页面。',valueMeaningSource:'frontend_code',values:IMAGE_INPUT_ORIGIN_MEANINGS},

  'generate_intention.app_id':{meaning:'本次准备使用的动态 App 资源 ID；没有关联 App 时不发送。'},
  'generate_intention.ability_name':{meaning:'本次准备使用的生成能力。',valueMeaningSource:'frontend_code',values:GENERATION_TYPED_ABILITY_MEANINGS},
  'generate_intention.object_type':{meaning:'用户准备生成的结果类型。',valueMeaningSource:'frontend_code',values:GENERATION_OBJECT_TYPE_MEANINGS},
  'generate_intention.search_method':{meaning:'生成意愿来自搜索场景时使用的搜索方式；非搜索场景不发送。',valueMeaningSource:'frontend_code',values:GENERATION_SEARCH_METHOD_MEANINGS},
  'generate_intention.user_scene':{meaning:'本次生成面向的业务场景。',valueMeaningSource:'frontend_code',values:USER_SCENE_TYPE_MEANINGS},
  'generate_intention.chatbot_id':{meaning:'本次生成关联的动态 Chatbot ID；非 Chatbot 场景不发送。'},
  'generate_intention.resolution':{meaning:'用户选择的输出清晰度。',valueMeaningSource:'frontend_code',values:{SD:'标准清晰度',HD:'高清',FHD:'全高清（Full HD）'}},
  'generate_intention.post_id':{meaning:'触发本次生成意愿的动态作品 ID；没有来源作品时不发送。'},
  'generate_intention.credit':{meaning:'本次预计消耗的积分；部分入口固定为 1，其他入口按当前能力计算，Studio 工具入口不发送。',valueMeaningSource:'frontend_code',openValues:{1:'本次预计消耗 1 积分'}},
  'generate_intention.multiple':{meaning:'本次选择的生成份数；多数入口固定为 1，App 详情可发送用户选择的份数，Studio 工具入口不发送。',valueMeaningSource:'frontend_code',openValues:{1:'本次生成 1 份结果'}},
  'generate_intention.generate_location':{meaning:'区分首次生成和再次生成。',valueMeaningSource:'frontend_code',values:{create:'首次生成',recreate:'再次生成'}},
  'generate_intention.origin':{meaning:'用户表达生成意愿时所在的业务来源。',valueMeaningSource:'frontend_code',values:GENERATE_ORIGIN_MEANINGS},
  'generate_intention.tag_id':{meaning:'触发本次生成意愿的动态内容标签 ID；没有标签时不发送或为空字符串。'},
  'generate_intention.entry_point':{meaning:'用户触发生成意愿的具体入口。',valueMeaningSource:'frontend_code',values:GENERATION_ENTRY_POINT_MEANINGS},
  'generate_intention.sort':{meaning:'触发本次生成的内容在当前列表中的动态排序位置。'},
  'generate_intention.commend_label':{meaning:'触发本次生成的推荐内容标签。'},
  'generate_intention.type':{meaning:'Remix 内部生成流程类型。',valueMeaningSource:'frontend_code',values:{test:'Remix 图生图流程',test_t2i:'Remix 文生图流程'}},
  'generate_intention.location1':{meaning:'本次生成意愿所在的一级业务位置，值随生成入口动态记录。',replaceCommonValues:true,openValueSet:true},
  'generate_intention.location2':{meaning:'本次生成意愿所在的二级业务位置，值随生成入口动态记录。',replaceCommonValues:true,openValueSet:true},

  'generate_button_click.generate_location':{meaning:'区分首次生成和再次生成。',valueMeaningSource:'frontend_code',values:{create:'首次生成',recreate:'再次生成'}},
  'generate_button_click.short_id':{meaning:'本次生成关联的动态 App 短 ID。'},
  'generate_button_click.app_id':{meaning:'本次生成关联的动态 App 资源 ID。'},
  'generate_button_click.post_id':{meaning:'本次生成关联的动态来源作品 ID。'},
  'generate_button_click.origin':{meaning:'本次生成请求的业务来源；部分场景使用下列固定值，其他场景为动态值。',valueMeaningSource:'frontend_code',openValues:GENERATE_ORIGIN_MEANINGS},
  'generate_button_click.location':{meaning:'本次生成所在的专项业务位置。'},
  'generate_button_click.location1':{meaning:'本次生成所在的一级业务位置，值随生成入口动态记录。',replaceCommonValues:true,valueMeaningSource:'frontend_code',openValues:{chatbot:'Chatbot 对话场景'}},
  'generate_button_click.location2':{meaning:'本次生成所在的二级业务位置，值随生成入口动态记录。',replaceCommonValues:true,valueMeaningSource:'frontend_code',openValues:{chatbot_img_to_video:'Chatbot 图片转视频流程'}},
  'generate_button_click.tag_id':{meaning:'本次生成关联的动态标签 ID。'},
  'generate_button_click.topic_id':{meaning:'本次生成关联的动态话题 ID。'},
  'generate_button_click.galleryId':{meaning:'本次生成关联的动态 Gallery ID。'},
  'generate_button_click.ability_name':{meaning:'本次生成使用的创作能力；除下列值外也可能是其他动态能力值。',valueMeaningSource:'frontend_code',openValues:GENERATION_TYPED_ABILITY_MEANINGS},
  'generate_button_click.object_type':{meaning:'本次生成请求的结果类型。',valueMeaningSource:'frontend_code',values:GENERATION_OBJECT_TYPE_MEANINGS},
  'generate_button_click.search_method':{meaning:'搜索场景使用的搜索方式。',valueMeaningSource:'frontend_code',values:GENERATION_SEARCH_METHOD_MEANINGS},
  'generate_button_click.button_type':{meaning:'触发生成的按钮权益类型。',valueMeaningSource:'frontend_code',values:GENERATE_BUTTON_TYPE_MEANINGS},
  'generate_button_click.user_scene':{meaning:'本次生成面向的业务场景；部分场景使用下列固定值，其他场景为动态值。',valueMeaningSource:'frontend_code',openValues:USER_SCENE_TYPE_MEANINGS},
  'generate_button_click.image_type':{meaning:'本次生成输入图片的业务类型，值由具体生成流程动态提供。'},
  'generate_button_click.entry_point':{meaning:'用户触发生成的具体入口。',valueMeaningSource:'frontend_code',values:GENERATION_ENTRY_POINT_MEANINGS},
  'generate_button_click.is_slide_view':{meaning:'是否来自详情流滑动浏览；当前代码可能发送布尔 true 或字符串 "false"，与 string 声明不完全一致。',valueMeaningSource:'frontend_code',openValues:{true:'来自详情流滑动浏览',false:'不是来自详情流滑动浏览'}},
  'generate_button_click.first_view':{meaning:'来源内容是否为用户在当前列表中首次看到。',valueMeaningSource:'frontend_code',values:{true:'首次看到',false:'非首次看到'}},
  'generate_button_click.sort':{meaning:'触发生成的内容在当前列表中的动态排序位置。'},
  'generate_button_click.trace_info':{meaning:'本次生成关联的推荐追踪信息；没有记录时为空字符串。'},
  'generate_button_click.type':{meaning:'本次生成所属的流程类型。',valueMeaningSource:'frontend_code',values:GENERATE_BUTTON_LEGACY_TYPE_MEANINGS},
  'generate_button_click.resolution':{meaning:'用户选择的输出清晰度。',valueMeaningSource:'frontend_code',values:{SD:'标准清晰度',HD:'高清',FHD:'全高清'}},
  'generate_button_click.commend_label':{meaning:'触发本次生成的推荐内容标签。'},
  'generate_button_click.app_source':{meaning:'本次生成所用 App 的业务来源。'},
  'generate_button_click.chatbot_id':{meaning:'本次生成关联的动态 Chatbot ID。'},
  'generate_button_click.credit':{meaning:'开始生成时预计消耗的积分数量。',valueMeaningSource:'frontend_code',openValues:{1:'预计消耗 1 积分；其他数量按具体任务记录'}},
  'generate_button_click.multiple':{meaning:'开始生成时选择的结果份数。',valueMeaningSource:'frontend_code',openValues:{1:'生成 1 份结果；其他份数按用户选择记录'}},
  'generate_button_click.bond_level':{meaning:'Chatbot 生成时用户与 Chatbot 的亲密度等级。',valueMeaningSource:'frontend_code',values:CHATBOT_BOND_LEVEL_MEANINGS},
  'generate_button_click.scenario':{meaning:'本次生成所属的专项业务场景；除下列值外还可由业务动态提供。',valueMeaningSource:'frontend_code',openValues:CHATBOT_FIRST_SCENARIO_MEANINGS},
  'generate_button_click.search_content':{meaning:'搜索场景触发生成时使用的动态搜索词。'},
  'generate_button_click.search_id':{meaning:'搜索场景触发生成时对应的动态搜索记录 ID。'},
  'generate_button_click.topicId':{meaning:'部分生成场景额外发送的动态话题 ID。'},
  'generate_button_click.postId':{meaning:'部分生成场景额外发送的动态作品 ID；可能与 post_id 同时上报。'},
  'generate_button_click.generateid':{meaning:'本次生成请求的动态 UUID。'},
  'generate_button_click.current_tab':{meaning:'发起本次生成时所在的动态页面标签。'},
  'generate_button_click.image_id':{meaning:'本次生成使用的动态输入图片 ID。'},
  'generate_button_click.tag_name':{meaning:'本次生成使用的动态标签名称。'},
  'generate_button_click.type_2':{meaning:'本次生成对象及会员属性。',valueMeaningSource:'frontend_code',values:{vip_image:'会员图片快捷生成',image:'普通图片快捷生成',vip_app:'会员 App 详情生成',app:'普通 App 详情生成',none:'未记录生成对象类型'}},
  'generate_button_click.gallery_id':{meaning:'从 App Gallery 发起生成时关联的动态 Gallery ID。'},

  'is_read.scene':{meaning:'标记某个引导、红点、气泡或推荐模块已被用户看过或已完成一次性处理，用于避免重复展示。',valueMeaningSource:'frontend_code',values:{like_tabbar_point:'点赞 Tab 红点已读',like_botton_bubble:'点赞按钮气泡已展示；Raw 值保留代码中的 botton 拼写',like_guide_bubble:'点赞引导气泡已关闭或读过',gen_video_new:'视频生成功能“新”标识已读',cutout_new:'抠图功能“新”标识已读',gen_video_guide:'视频生成引导已读',generate_button_click:'Onboarding 中已点击生成按钮',skip_button_click:'Onboarding 中已点击跳过或通过手势退出',fewer_than_three:'Onboarding 推荐 App 少于 3 个，本次不再展示弹窗',taskview_guide_bubble:'任务结果页引导气泡已展示',chatbot_message_exposure:'用户已进入并离开 Chatbot 会话，消息引导已曝光',creator_onboarding_popup_show:'创作者 Onboarding 弹窗已展示',app_commend:'App 推荐模块已曝光',app_commend_popup:'App 推荐弹窗已曝光'}},
  'feed_guide_click.type':{meaning:'本次点击对应的引导样式。',valueMeaningSource:'frontend_code',values:{hand:'小手引导；用户点击目标 App 卡片或生成按钮时上报'}},
  'feed_guide_click.short_id':{meaning:'目标 App 的动态资源 ID。'},
  'feed_guide_exposure.type':{meaning:'本次展示对应的引导样式。',valueMeaningSource:'frontend_code',values:{hand:'目标 App 的小手引导开始展示时上报'}},
  'feed_guide_exposure.short_id':{meaning:'目标 App 的动态资源 ID。'},
  'skip_button_click.location1':{meaning:'跳过发生的位置。',valueMeaningSource:'frontend_code',replaceCommonValues:true,values:{onboarding:'新用户引导'}},
  'skip_button_click.scene':{meaning:'跳过方式。',valueMeaningSource:'frontend_code',values:{time_out:'等待用户信息超过 8 秒，系统跳过本次引导',gesture_swipe:'用户通过 Android 返回手势关闭引导','':'用户关闭 App 详情、取消选图或关闭订阅页后退出引导'}},
  'try_it_button_click.location1':{meaning:'点击发生的位置。',valueMeaningSource:'frontend_code',replaceCommonValues:true,values:{onboarding:'新用户引导'}},
  'try_it_button_click.app_source':{meaning:'App 来源；当前调用不传该字段。'},
  'try_it_button_click.commend_label':{meaning:'推荐标签；当前调用不传该字段。'},
  'onboarding_performance.cold_start_time':{meaning:'记录本次冷启动阶段的耗时，用于衡量应用启动进入 Onboarding 链路前的启动成本；当前前端契约未明确计时起止点和单位，需与采集实现确认。'},
  'onboarding_performance.load_html_time':{meaning:'记录入口 HTML 加载完成所需时间，用于判断首屏静态页面加载是否成为 Onboarding 启动瓶颈；前端注释明确单位为毫秒。'},
  'onboarding_performance.onboarding_load_time':{meaning:'记录 Onboarding 页面及其依赖完成加载所需时间，用于衡量新手引导页面本身的加载性能；计时起止点和单位需与采集实现确认。'},
  'onboarding_performance.total_onboarding_time':{meaning:'记录从启动链路开始到 Onboarding 可展示的整体耗时，用于评估用户看到新手引导前的总等待；计时起点和单位需确认。'},
  'onboarding_performance.prepare_tourist_context_time':{meaning:'记录游客登录前置上下文准备耗时，包括设备标识、来源 referrer 和分享信息等初始化，用于定位游客上下文准备瓶颈。'},
  'onboarding_performance.login_v2_time':{meaning:'记录游客或用户 Login V2 接口请求阶段耗时，用于判断登录请求对 Onboarding 首次展示的影响。'},
  'onboarding_performance.abtest_init_time':{meaning:'记录登录完成后等待 A/B 实验配置初始化就绪的耗时，对应实验配置可用于 Onboarding 分流的时间。'},
  'onboarding_performance.user_behavior_init_time':{meaning:'记录登录完成后等待用户行为数据初始化完成的耗时，对应 userBehavior 数据可用于 Onboarding 决策的时间。'},
  'onboarding_performance.onboarding_init_wait_time':{meaning:'记录 Onboarding 初始化过程中等待登录、实验配置和用户行为等前置条件满足的总耗时。'},
  'onboarding_performance.big_data_api_time':{meaning:'记录大数据推荐接口请求耗时，用于判断推荐数据返回是否延迟 Onboarding 内容展示。'},
  'onboarding_performance.onboarding_api_time':{meaning:'记录 Onboarding 业务接口请求耗时，用于判断引导配置或内容接口对页面展示的影响。'},
  'onboarding_performance.login_to_onboarding_time':{meaning:'记录从登录链路开始到 Onboarding 首次展示之间的整段耗时，用于衡量登录后进入新手引导的端到端等待。'},
  'onboarding_performance.load_html_detail':{meaning:'记录 HTML 加载阶段的明细信息，用于拆解 load_html_time 内部各加载步骤；当前为动态字符串，具体编码格式需与采集实现确认。'},
  'addtodesktop_load_success.is_first_time':{meaning:'是否为首次打开 App。',example:true,valueMeaningSource:'frontend_code',values:{true:'本机没有历史打开记录，本次为首次打开',false:'本机已有历史打开记录，本次不是首次打开'}},
  'addtodesktop_load_success.isfirsttime':{meaning:'内部调用参数，转换后写入 is_first_time，不作为独立上报字段展示。'},

  'generate_success.imgIds':{meaning:'本次成功生成的结果资源 ID 列表；Raw key 保留 camelCase。'},
  'generate_success.short_id':{meaning:'本次生成关联的动态 App 短 ID；没有关联 App 时为空字符串。'},
  'generate_success.app_id':{meaning:'本次生成关联的动态 App 资源 ID；没有关联 App 时为空字符串。'},
  'generate_success.location1':{meaning:'本次生成结果所在的一级业务位置，值随任务来源动态记录。',replaceCommonValues:true,openValueSet:true},
  'generate_success.location2':{meaning:'本次生成结果所在的二级业务位置，值随任务来源动态记录。',replaceCommonValues:true,openValueSet:true},
  'generate_success.generate_location':{meaning:'区分首次生成和再次生成。',valueMeaningSource:'frontend_code',values:{create:'首次生成成功',recreate:'再次生成成功'}},
  'generate_success.tag_id':{meaning:'本次生成关联的动态内容标签 ID；没有关联标签时记录 none。',valueMeaningSource:'frontend_code',openValues:{none:'没有关联内容标签'}},
  'generate_success.generate_time':{meaning:'任务返回的预计处理时间；Raw 声明为 number，但当前任务链路实际来源是字符串。'},
  'generate_success.generate_wait_time':{meaning:'从生成开始到收到成功结果的等待时长，单位为秒。'},
  'generate_success.gallery_id':{meaning:'本次生成关联的动态 Gallery ID。'},
  'generate_success.origin':{meaning:'本次生成成功结果的业务来源。',valueMeaningSource:'frontend_code',values:GENERATE_ORIGIN_MEANINGS},
  'generate_success.ability_name':{meaning:'本次成功生成所用的能力。',valueMeaningSource:'frontend_code',values:GENERATE_SUCCESS_ABILITY_MEANINGS},
  'generate_success.user_scene':{meaning:'本次生成面向的业务场景。',valueMeaningSource:'frontend_code',values:USER_SCENE_TYPE_MEANINGS},
  'generate_success.object_type':{meaning:'本次成功生成的结果类型。',valueMeaningSource:'frontend_code',values:GENERATION_OBJECT_TYPE_MEANINGS},
  'generate_success.image_type':{meaning:'本次生成使用的图片输入类型；除下列值外保持动态开放。',valueMeaningSource:'frontend_code',openValues:GENERATE_SUCCESS_IMAGE_TYPE_OBSERVED_MEANINGS},
  'generate_success.is_slide_view':{meaning:'是否来自详情流滑动浏览；当前代码可能发送布尔 true 或字符串 "false"，与 string 声明不完全一致。',valueMeaningSource:'frontend_code',openValues:{true:'来自详情流滑动浏览',false:'不是来自详情流滑动浏览'}},
  'generate_success.entry_point':{meaning:'用户触发本次成功生成的具体入口。',valueMeaningSource:'frontend_code',values:GENERATE_SUCCESS_ENTRY_POINT_MEANINGS},
  'generate_success.first_view':{meaning:'来源内容是否为用户在当前列表中首次看到。',valueMeaningSource:'frontend_code',values:{true:'首次看到',false:'非首次看到'}},
  'generate_success.sort':{meaning:'触发生成的内容在当前列表中的动态排序位置。'},
  'generate_success.trace_info':{meaning:'本次生成关联的推荐追踪信息。'},
  'generate_success.commend_label':{meaning:'本次生成关联的推荐内容标签。'},
  'generate_success.app_source':{meaning:'本次生成所用 App 的业务来源。'},
  'generate_success.resolution_detail':{meaning:'本次生成结果的输出清晰度。',valueMeaningSource:'frontend_code',values:{SD:'标准清晰度',HD:'高清',FHD:'全高清'}},
  'generate_success.credit':{meaning:'生成成功时记录的积分消耗数量。',valueMeaningSource:'frontend_code',openValues:{1:'本次记录消耗 1 积分；其他数量按具体任务记录'}},
  'generate_success.multiple':{meaning:'生成成功时记录的结果份数。',valueMeaningSource:'frontend_code',openValues:{1:'本次记录生成 1 份结果；其他份数按具体任务记录'}},
  'generate_success.bond_level':{meaning:'Chatbot 生成时用户与 Chatbot 的亲密度等级。',valueMeaningSource:'frontend_code',values:CHATBOT_BOND_LEVEL_MEANINGS},
  'generate_success.scenario':{meaning:'本次成功生成所属的专项业务场景，其他值仍随任务来源动态记录。',valueMeaningSource:'frontend_code',openValues:CHATBOT_FIRST_SCENARIO_MEANINGS},
  'generate_success.location':{meaning:'本次成功生成所在的专项业务位置；该字段由任务链路额外发送。'},
  'generate_success.chatbot_id':{meaning:'本次生成关联的动态 Chatbot ID；非 Chatbot 场景不发送。'},

  'generate_failure.failure_reason':{meaning:'本次生成失败原因；下列是已观察固定值，接口错误、异常信息和服务端文案仍会动态上报。',valueMeaningSource:'frontend_code',openValues:GENERATE_FAILURE_REASON_OBSERVED_MEANINGS},
  'generate_failure.app_id':{meaning:'本次失败关联的动态 App 资源 ID。'},
  'generate_failure.ability_name':{meaning:'本次失败关联的生成能力；除下列已观察值外保持动态开放。',valueMeaningSource:'frontend_code',openValues:GENERATE_FAILURE_ABILITY_OBSERVED_MEANINGS},
  'generate_failure.task_period':{meaning:'生成失败发生的任务阶段。',valueMeaningSource:'frontend_code',values:{before_task:'任务创建前被拦截或请求失败',after_task:'任务创建后生成失败'}},
  'generate_failure.trackId':{meaning:'失败任务的动态追踪 ID；Raw key 保留 camelCase。'},
  'generate_failure.first_view':{meaning:'来源内容是否为用户在当前列表中首次看到。',valueMeaningSource:'frontend_code',values:{true:'首次看到',false:'非首次看到'}},
  'generate_failure.sort':{meaning:'触发失败生成的内容在当前列表中的动态排序位置。'},
  'generate_failure.trace_info':{meaning:'本次失败关联的推荐追踪信息。'},
  'generate_failure.resolution_detail':{meaning:'失败请求选择的输出清晰度。',valueMeaningSource:'frontend_code',values:{SD:'标准清晰度',HD:'高清',FHD:'全高清'}},
  'generate_failure.app_source':{meaning:'本次失败关联 App 的业务来源。'},
  'generate_failure.location':{meaning:'本次失败所在的专项业务位置。'},
  'generate_failure.object_type':{meaning:'本次失败对应的目标结果类型。',valueMeaningSource:'frontend_code',values:GENERATION_OBJECT_TYPE_MEANINGS},
  'generate_failure.location1':{meaning:'本次失败所在的一级业务位置，值随任务或请求来源动态记录。',replaceCommonValues:true,openValueSet:true},
  'generate_failure.location2':{meaning:'本次失败所在的二级业务位置，值随任务或请求来源动态记录。',replaceCommonValues:true,openValueSet:true},
  'generate_failure.scenario':{meaning:'本次失败所属的专项业务场景，其他值仍随任务来源动态记录。',valueMeaningSource:'frontend_code',openValues:CHATBOT_FIRST_SCENARIO_MEANINGS},

  'remix_click.app_id':{meaning:'准备 Remix 的动态 App 资源 ID。'},
  'remix_click.appid':{meaning:'准备 Remix 的动态 App 短 ID；Raw key 保留 appid。'},
  'remix_click.is_vip':{meaning:'当前用户是否为会员。',valueMeaningSource:'frontend_code',values:{true:'会员用户',false:'非会员用户'}},
  'remix_click.vip_type':{meaning:'当前订阅周期；字段类型保持开放，下列为当前可直接证明值。',valueMeaningSource:'frontend_code',openValues:{none:'没有订阅周期',Mo:'月付周期或初始化默认值'}},
  'remix_click.credits_balance':{meaning:'用户点击 Remix 时的动态可用积分余额。'},
  'remix_click.filter_level':{meaning:'当前滤镜难度等级。',valueMeaningSource:'frontend_code',values:FILTER_LEVEL_MEANINGS},
  'remix_click.user_level':{meaning:'用户当前 Remix 创作等级，按各难度滤镜发布次数计算。',valueMeaningSource:'frontend_code',values:REMIX_USER_LEVEL_MEANINGS},
  'remix_click.origin':{meaning:'用户进入 Remix 的业务来源。',valueMeaningSource:'frontend_code',values:REMIX_ENTRY_ORIGIN_MEANINGS},

  'remix_begin_click.app_id':{meaning:'开始 Remix 的动态 App 资源 ID。'},
  'remix_begin_click.appid':{meaning:'开始 Remix 的动态 App 短 ID；Raw key 保留 appid。'},
  'remix_begin_click.is_vip':{meaning:'当前用户是否为会员。',valueMeaningSource:'frontend_code',values:{true:'会员用户',false:'非会员用户'}},
  'remix_begin_click.vip_type':{meaning:'当前会员订阅周期。',valueMeaningSource:'frontend_code',values:REMIX_VIP_TYPE_MEANINGS},
  'remix_begin_click.credits_balance':{meaning:'用户开始 Remix 时的动态可用积分余额。'},
  'remix_begin_click.user_level':{meaning:'用户当前 Remix 创作等级，按各难度滤镜发布次数计算。',valueMeaningSource:'frontend_code',values:REMIX_USER_LEVEL_MEANINGS},
  'remix_begin_click.filter_level':{meaning:'当前滤镜难度等级。',valueMeaningSource:'frontend_code',values:FILTER_LEVEL_MEANINGS},
  'remix_begin_click.origin':{meaning:'用户进入 Remix 的业务来源。',valueMeaningSource:'frontend_code',values:REMIX_ENTRY_ORIGIN_MEANINGS},
  'remix_begin_click.original_filter_type':{meaning:'原应用的媒体类型。',valueMeaningSource:'frontend_code',values:REMIX_FILTER_TYPE_MEANINGS},
  'app_lock_reason.app_id':{meaning:'达到免费使用锁定条件的动态 App 资源 ID。'},
  'app_lock_reason.origin':{meaning:'本次 App 被锁定的代码判定原因。',valueMeaningSource:'frontend_code',values:APP_LOCK_REASON_MEANINGS},
  'create_click.app_id':{meaning:'定义中声明的动态 App 资源 ID；当前没有直接发送该事件。'},
  'create_pop_publish_click.app_id':{meaning:'定义中声明的动态 App 资源 ID；当前没有直接发送该事件。'},

  'create_same_button_click.app_id':{meaning:'用户点击一键同款时关联的动态 App 资源 ID。'},
  'create_same_button_click.location':{meaning:'一键同款按钮所在位置；同时保留类型声明值和当前真实 Wire 拼写。',valueMeaningSource:'frontend_code',values:CREATE_SAME_LOCATION_MEANINGS},
  'function_click.ability_name':{meaning:'用户在当前 Studio 工具面板点击的创作工具。',valueMeaningSource:'frontend_code',values:STUDIO_FUNCTION_CLICK_ABILITY_MEANINGS},
  'generate_minimize_click.app_id':{meaning:'本次退出结果页关联的动态 App ID 或能力标识；保持开放值。',valueMeaningSource:'frontend_code',openValues:{faceswap:'视频换脸',SEGMENT:'智能抠图',ENHANCE_RESOLUTION:'图片增强',RECOLOR:'老照片上色',CHANGE_BACKGROUND_SEGMENT:'背景分割','':'没有关联 App 资源'}},
  'generate_minimize_click.generate_location':{meaning:'区分首次生成和再次生成；异常初始状态下也可能为空字符串。',valueMeaningSource:'frontend_code',values:GENERATE_LOCATION_MEANINGS},
  'generate_minimize_click.origin':{meaning:'用户退出当前生成结果时所在的业务来源。',valueMeaningSource:'frontend_code',values:GENERATE_ORIGIN_MEANINGS},
  'generate_minimize_click.object_type':{meaning:'本次结果的媒体类型；图片原子能力路径目前也错误上报为 video。',valueMeaningSource:'frontend_code',values:{image:'图片任务',video:'视频任务；当前图片原子能力路径也使用此值'}},
  'generate_minimize_click.ability_name':{meaning:'本次结果关联的生成能力；除下列已观察值外保持动态开放。',valueMeaningSource:'frontend_code',openValues:GENERATE_MINIMIZE_ABILITY_OBSERVED_MEANINGS},
  'generate_minimize_click.template_video_id':{meaning:'视频换脸路径的动态模板视频 ID；其他路径不发送。'},
  'generate_pop_close.app_id':{meaning:'被关闭生成表单关联的动态 App 资源 ID。'},
  'generate_pop_close.appid':{meaning:'被关闭生成表单关联的动态 App 短 ID；Raw key 保留 appid。'},
  'generate_pop_close.filter_level':{meaning:'当前滤镜难度等级。',valueMeaningSource:'frontend_code',values:FILTER_LEVEL_MEANINGS},
  'others_filters_customize_generate.user_scene':{meaning:'用户发起自定义生成时所在的业务场景；当前入口可达证件照和换装，类型声明保留五个场景。',valueMeaningSource:'frontend_code',values:OTHERS_FILTERS_CUSTOMIZE_GENERATE_SCENE_MEANINGS},

  'remix_guide_click.app_id':{meaning:'用户打开 Remix 引导时关联的动态 App 资源 ID。'},
  'remix_guide_notnow_click.app_id':{meaning:'定义中声明的动态 App 资源 ID；当前没有直接发送该事件。'},
  'remix_guide_start_click.app_id':{meaning:'完成 Remix 新手引导时关联的动态 App 资源 ID。'},
  'remix_notnow_click.short_id':{meaning:'用户关闭 Remix 入口确认弹窗时关联的动态 App 短 ID。'},
  'remix_notnow_click.app_id':{meaning:'用户关闭 Remix 入口确认弹窗时关联的动态 App 资源 ID。'},
  'remix_notnow_click.user_level':{meaning:'用户当前 Remix 创作等级，按各难度滤镜发布次数计算。',valueMeaningSource:'frontend_code',values:REMIX_USER_LEVEL_MEANINGS},
  'remix_notnow_click.filter_level':{meaning:'当前滤镜难度等级。',valueMeaningSource:'frontend_code',values:FILTER_LEVEL_MEANINGS},
  'remix_notnow_click.origin':{meaning:'用户进入 Remix 入口确认弹窗的业务来源。',valueMeaningSource:'frontend_code',values:REMIX_ENTRY_ORIGIN_MEANINGS},
  'studio_generatevideo_app_click.app_id':{meaning:'被点击视频生成 App 的短 ID；短 ID 缺失时回退为 Studio 合集数据 ID。'},

  'submit_filter.app_id':{meaning:'本条提交事件对应的动态 App 记录 ID；选择多个滤镜时每个 ID 分别上报一条。'},
  'submit_filter.user_id':{meaning:'提交滤镜时的动态当前用户 ID；取不到时为空字符串。'},
  'submit_filter_disabled_click.type':{meaning:'视觉禁用的提交按钮不可提交的原因。',valueMeaningSource:'frontend_code',values:{Unchecked:'用户尚未选择任何滤镜'}},
  'try_click.app_id':{meaning:'再次试用当前 Remix App 的动态资源 ID。'},
  'try_click.short_id':{meaning:'再次试用当前 Remix App 的动态短 ID。'},
  'try_click.filter_level':{meaning:'当前滤镜难度等级。',valueMeaningSource:'frontend_code',values:FILTER_LEVEL_MEANINGS},
  'try_now_button_click.ability_name':{meaning:'用户准备试用的原子创作能力；常规入口使用下列类型值，但动态 URL 入口可能发送声明外字符串。',valueMeaningSource:'frontend_code',openValues:STUDIO_FEATURE_ABILITY_MEANINGS},

  'tryyourfilter_click.app_id':{meaning:'首次试用当前 Remix App 的动态资源 ID。'},
  'tryyourfilter_click.short_id':{meaning:'首次试用当前 Remix App 的动态短 ID。'},
  'tryyourfilter_click.filter_level':{meaning:'当前滤镜难度等级。',valueMeaningSource:'frontend_code',values:FILTER_LEVEL_MEANINGS},
  'tryyourfilter_click.type':{meaning:'当前 App 的媒体类型和按钮可用状态。',valueMeaningSource:'frontend_code',values:{image_filter_try_disabled:'图片 App 当前不可试用',image_filter_try_clickable:'图片 App 当前可试用',video_filter_try_disabled:'视频 App 当前不可试用',video_filter_try_clickable:'视频 App 当前可试用'}},
  'video_function_click.user_scene':{meaning:'当前任务结果所属的业务场景；无法识别时不发送。',valueMeaningSource:'frontend_code',values:USER_SCENE_TYPE_MEANINGS},
  'video_function_click.ability_name':{meaning:'当前任务结果所属的生成能力；无法识别时不发送，下列为可证明值。',valueMeaningSource:'frontend_code',openValues:GENERATE_FAILURE_ABILITY_OBSERVED_MEANINGS},
  'video_function_click.location2':{meaning:'图片转视频入口所在位置。',replaceCommonValues:true,valueMeaningSource:'frontend_code',values:{task:'任务结果页'}},
  'video_function_click.trace_info':{meaning:'当前结果关联的动态推荐追踪信息；没有记录时为空字符串。'},
  'video_generator_click.app_id':{meaning:'切换生成视频能力时关联的动态 App 资源 ID。'},
  'video_generator_click.short_id':{meaning:'切换生成视频能力时关联的动态 App 短 ID。'},
  'video_generator_click.toggle_state':{meaning:'用户选择后的视频生成开关状态。',valueMeaningSource:'frontend_code',values:{true:'开启视频生成',false:'关闭视频生成'}},
  'video_generator_click.filter_level':{meaning:'当前滤镜难度等级。',valueMeaningSource:'frontend_code',values:FILTER_LEVEL_MEANINGS},
  'build_click.is_vip':{meaning:'点击 PC Build 入口时用户是否为会员。',valueMeaningSource:'frontend_code',values:{true:'会员用户',false:'非会员用户'}},
  'fork_app.appid':{meaning:'被复制 App 的动态短 ID；短 ID 缺失时回退为 publication ID。'},
  'fork_app.app_id':{meaning:'被复制 App 的动态资源 ID。'},
  'fork_app.is_vip':{meaning:'发起复制时用户是否为会员。',valueMeaningSource:'frontend_code',values:{true:'会员用户',false:'非会员用户'}},
  'fork_app.origin':{meaning:'用户发起复制 App 的 PC 入口。',valueMeaningSource:'frontend_code',values:{detail_page:'PC App 详情页',creation_popup:'PC 创作入口弹窗'}},
  'new_feature_confirm.origin':{meaning:'用户确认功能升级提示的入口。',valueMeaningSource:'frontend_code',values:{build_upgrade_modal:'PC 创作页功能升级提示弹窗'}},

  'tasklist_entrance_click.state':{meaning:'用户本次准备打开还是关闭任务列表。',valueMeaningSource:'frontend_code',values:{1:'准备打开任务列表或结果','-1':'准备关闭任务列表或结果'}},
  'result_show.imgIds':{meaning:'本次任务生成的全部动态结果 ID。'},
  'result_show.image_id':{meaning:'本次任务结果列表中的第一张图片或视频结果 ID；切换到后续结果时仍发送首个 ID。'},
  'result_show.short_id':{meaning:'本次生成所使用的动态 App 短 ID；缺失时为空字符串。'},
  'result_show.app_id':{meaning:'本次生成所使用的动态 App 资源 ID；缺失时为空字符串。'},
  'result_show.location1':{meaning:'结果展示时的动态一级业务位置；空值可能由统一来源记录补齐。',replaceCommonValues:true,openValueSet:true,values:{}},
  'result_show.location2':{meaning:'结果展示时的动态二级业务位置；空值可能由统一来源记录补齐。',replaceCommonValues:true,openValueSet:true,values:{}},
  'result_show.generate_location':{meaning:'本次结果来自首次生成还是再次生成；本地记录缺失时可为空字符串。',valueMeaningSource:'frontend_code',values:{create:'首次创建生成任务',recreate:'基于已有任务重新生成','':'未记录生成方式'}},
  'result_show.tag_id':{meaning:'本次生成结果关联的动态内容标签 ID；缺失时为空字符串。'},
  'result_show.origin':{meaning:'结果曝光所属的业务来源，继承 generate_success 保存的生成来源。',valueMeaningSource:'frontend_code',values:GENERATE_ORIGIN_MEANINGS},
  'result_show.generate_time':{meaning:'生成任务的预计处理时间；当前没有记录时间单位。'},
  'result_show.generate_wait_time':{meaning:'从生成任务开始到收到成功结果的实际等待时长，继承 generate_success 按秒计算的值，单位为秒。'},
  'result_show.ability_name':{meaning:'本次生成使用的能力；记录器允许动态字符串。',valueMeaningSource:'frontend_code',openValues:ABILITY_NAME_TRACK_MEANINGS},
  'result_show.user_scene':{meaning:'本次生成结果所属的业务场景；没有场景映射时不发送。',valueMeaningSource:'frontend_code',openValues:USER_SCENE_TYPE_MEANINGS},
  'result_show.entry_point':{meaning:'本次结果最初从哪个生成入口发起；本地记录缺失时可为空字符串。',valueMeaningSource:'frontend_code',values:RESULT_SHOW_ENTRY_POINT_MEANINGS},
  'result_show.gallery_id':{meaning:'该曝光结果关联的 Gallery 内容或卡片 ID，用于归因结果的 Gallery 入口。'},

  'result_download.type':{meaning:'用户本次下载的结果媒体类型。',valueMeaningSource:'frontend_code',values:{video:'视频结果',image:'图片结果'}},
  'result_download.image_id':{meaning:'用户实际下载的图片或视频结果 ID，用于对应具体下载内容。'},
  'result_download.post_id':{meaning:'本次下载所属作品的 ID；从作品详情或作品分享场景下载时传入。'},
  'result_download.tag_id':{meaning:'下载动作发生时当前内容标签的 ID，用于按标签归因下载。'},
  'result_download.app_id':{meaning:'生成该下载结果的滤镜或 App 资源长 ID；无 App 的原子能力场景可为空。'},
  'result_download.trace_info':{meaning:'被下载结果所属的推荐链路追踪信息，用于关联推荐曝光、点击、生成与下载。'},
  'result_download.chatbot_id':{meaning:'产生该下载结果的 Chatbot 标识，用于将下载归属到对应对话或角色；非 Chatbot 场景可为空。'},
  'result_download.ability_name':{meaning:'被下载结果所属的创作能力；调用方缺失时多数回退为 a1，动态值保持开放。',valueMeaningSource:'frontend_code',openValues:ABILITY_NAME_TRACK_MEANINGS},
  'result_download.is_with_watermark':{meaning:'标记实际下载文件是否包含水印。',valueMeaningSource:'frontend_code',values:{true:'下载带水印的文件',false:'下载无水印的文件'}},
  'result_download.origin':{meaning:'本次下载发生的业务来源；分享链路和部分页面可传入动态来源。',valueMeaningSource:'frontend_code',openValues:RESULT_DOWNLOAD_ORIGIN_OBSERVED_MEANINGS},
  'result_download.location':{meaning:'执行下载的具体交互入口；调用方可透传动态位置。',valueMeaningSource:'frontend_code',openValues:RESULT_DOWNLOAD_LOCATION_OBSERVED_MEANINGS},
  'result_download.user_scene':{meaning:'被下载结果所属的业务场景；动态值保持开放。',valueMeaningSource:'frontend_code',openValues:USER_SCENE_TYPE_MEANINGS},
  'result_download.location1':{meaning:'下载动作的动态一级业务位置。',replaceCommonValues:true,openValueSet:true,values:{}},
  'result_download.location2':{meaning:'下载动作的动态二级业务位置。',replaceCommonValues:true,openValueSet:true,values:{}},
  'result_download.task_id':{meaning:'被下载结果所属的动态生成任务或追踪 ID。'},

  'image_delete_click.image_type':{meaning:'用户点击删除的图片来源类型。',valueMeaningSource:'frontend_code',values:IMAGE_DELETE_TYPE_MEANINGS},
  'image_delete_click.location':{meaning:'用户点击图片删除的业务界面。',valueMeaningSource:'frontend_code',values:IMAGE_DELETE_LOCATION_MEANINGS},
  'image_delete_success.image_type':{meaning:'成功删除的图片来源类型。',valueMeaningSource:'frontend_code',values:IMAGE_DELETE_TYPE_MEANINGS},
  'image_delete_success.location':{meaning:'图片删除成功时所在的业务界面。',valueMeaningSource:'frontend_code',values:IMAGE_DELETE_LOCATION_MEANINGS},

  'generate_video_result_check.task_id':{meaning:'用户准备查看的视频生成任务 ID。'},
  'generate_video_result_show.app_id':{meaning:'完成通知关联的动态 App 标识；优先使用 App 短 ID，缺失时回退任务记录中的 App ID。'},
  'history_click.origin':{meaning:'用户切换历史结果时所在的业务界面。',valueMeaningSource:'frontend_code',values:HISTORY_CLICK_ORIGIN_MEANINGS},
  'history_click.method':{meaning:'用户切换历史结果的操作方式。',valueMeaningSource:'frontend_code',values:HISTORY_CLICK_METHOD_MEANINGS},
  'image_delete_enter.image_type':{meaning:'用户准备批量选择删除的图片来源类型。',valueMeaningSource:'frontend_code',values:IMAGE_DELETE_TYPE_MEANINGS},
  'image_delete_enter.location':{meaning:'用户长按进入删除选择状态时所在的业务界面。',valueMeaningSource:'frontend_code',values:IMAGE_DELETE_LOCATION_MEANINGS},
  'image_download.location':{meaning:'本次下载发生的具体业务入口；当前实际下载记录不包含此字段。',valueMeaningSource:'frontend_code',values:RESULT_DOWNLOAD_LOCATION_OBSERVED_MEANINGS},
  'image_download.image_id':{meaning:'被下载结果的动态 ID；当前实际下载为单个 ID，另一份预留定义允许 ID 数组。'},
  'image_download.post_id':{meaning:'下载内容的来源作品 ID；当前实际下载记录不包含此字段。'},
  'image_download.tag_id':{meaning:'下载内容关联的动态内容标签 ID；当前实际下载记录不包含此字段。'},
  'image_download.app_id':{meaning:'被下载结果关联的动态 App 资源 ID；没有记录时发送空字符串。'},
  'image_download.is_with_watermark':{meaning:'下载文件是否带水印；当前实际下载记录不包含此字段。',valueMeaningSource:'frontend_code',values:{true:'带水印',false:'无水印'}},
  'image_download.origin':{meaning:'本次下载发生的业务来源；没有记录时发送空字符串，其他动态来源保持开放。',valueMeaningSource:'frontend_code',openValues:IMAGE_DOWNLOAD_ORIGIN_OBSERVED_MEANINGS},
  'image_download.ability_name':{meaning:'被下载结果所属的创作能力；当前实际下载记录不包含此字段。',valueMeaningSource:'frontend_code',openValues:ABILITY_NAME_TRACK_MEANINGS},
  'image_download.user_scene':{meaning:'被下载结果所属的业务场景；当前实际下载记录不包含此字段。',valueMeaningSource:'frontend_code',openValues:USER_SCENE_TYPE_MEANINGS},
  'image_download.pic_id':{meaning:'被下载结果的动态 ID，与 image_id 同值。'},
  'image_download.is_ai_video':{meaning:'本次下载是否关联视频生成 App；仅相关场景发送。',valueMeaningSource:'frontend_code',openValues:{1:'关联视频生成 App'}},

  'add_whatsapp_button_click.source':{meaning:'用户进入本次表情包结果流程的方式。',valueMeaningSource:'frontend_code',values:TEXT_EDIT_SOURCE_MEANINGS},
  'add_whatsapp_result.source':{meaning:'用户进入本次表情包结果流程的方式。',valueMeaningSource:'frontend_code',values:TEXT_EDIT_SOURCE_MEANINGS},
  'add_whatsapp_result.is_success':{meaning:'“添加到 WhatsApp”的处理结果。',valueMeaningSource:'frontend_code',values:{true:'添加成功',false:'添加失败'}},
  'app_publish_success.appid':{meaning:'发布成功的动态 App 短 ID；Raw key 保留 appid。'},
  'app_publish_success.app_id':{meaning:'发布成功的动态 App 资源 ID。'},
  'app_publish_success.app_type':{meaning:'本次发布使用的创作结构。',valueMeaningSource:'frontend_code',values:APP_PUBLISH_TYPE_MEANINGS},
  'app_publish_success.app_result':{meaning:'本次发布 App 的结果能力分类。',valueMeaningSource:'frontend_code',values:APP_PUBLISH_RESULT_MEANINGS},
  'app_publish_success.publish_time':{meaning:'发布成功上报时生成的 ISO 时间。'},
  'app_publish_success.is_first':{meaning:'本次是否为当前 App 的首次发布。',valueMeaningSource:'frontend_code',values:{true:'当前 App 首次发布',false:'当前 App 再次发布'}},
  'app_publish_success.is_publish_as_post':{meaning:'本次发布是否同时发布为帖子。',valueMeaningSource:'frontend_code',values:{true:'同时发布为帖子',false:'仅发布 App'}},
  'app_publish_success.build_from':{meaning:'本次 App 创作的起点。',valueMeaningSource:'frontend_code',values:APP_PUBLISH_BUILD_FROM_MEANINGS},
  'app_publish_success.filter_level':{meaning:'移动端 Remix 发布 App 的滤镜难度等级。',valueMeaningSource:'frontend_code',values:FILTER_LEVEL_MEANINGS},
  'app_publish_success.user_level':{meaning:'移动端 Remix 发布时用户达到的创作者等级。',valueMeaningSource:'frontend_code',values:REMIX_USER_LEVEL_MEANINGS},
  'app_publish_success.is_ai_video':{meaning:'本次发布是否包含视频生成能力；非视频 App 不发送。',valueMeaningSource:'frontend_code',values:{1:'包含视频生成能力'}},
  'app_publish_success.is_vip':{meaning:'发布时用户是否为订阅会员。',valueMeaningSource:'frontend_code',values:{true:'订阅会员',false:'非订阅会员'}},
  'app_publish_success.generate_success_count':{meaning:'本次创作会话内累计生成成功次数。'},
  'app_publish_success.freetrial_consume':{meaning:'本次创作会话内记录的免费生成次数；仅移动端 Remix 发送。'},
  'app_publish_success.points_consume':{meaning:'本次创作会话内记录的积分生成次数；仅移动端 Remix 发送。'},
  'app_publish_success.fork_from_id':{meaning:'本次创作基于其他 App 时的动态来源 App ID。'},
  'app_publish_success.is_firstpublish':{meaning:'用户历史上是否从未成功发布过 App。',valueMeaningSource:'frontend_code',values:{true:'历史发布成功数为 0',false:'历史已有发布成功记录'}},
  'app_publish_success.cover_resolution':{meaning:'视频 App 发布时记录的封面视频清晰度；元数据缺失时可能回退为 SD。',valueMeaningSource:'frontend_code',values:{SD:'标清',HD:'高清',FHD:'全高清'}},
  'app_publish_success.origin':{meaning:'移动端 Remix 的最初进入来源。',valueMeaningSource:'frontend_code',values:REMIX_ENTRY_ORIGIN_MEANINGS},
  'app_publish_success.filter_permission_status':{meaning:'移动端 Remix 发布后的 App 可见范围。',valueMeaningSource:'frontend_code',values:FILTER_PERMISSION_STATUS_MEANINGS},
  'award_announcement_click.type':{meaning:'用户点击获奖结果区域时，结果是否已经公布。',valueMeaningSource:'frontend_code',values:AWARD_ANNOUNCEMENT_TYPE_MEANINGS},
  'generate_picture_expose.scenario':{meaning:'本次 Chatbot 图片消息曝光所属的会话场景。',valueMeaningSource:'frontend_code',values:CHATBOT_FIRST_SCENARIO_MEANINGS},
  'generate_picture_expose.location1':{meaning:'图片消息曝光所属的一级业务场景。',valueMeaningSource:'frontend_code',replaceCommonValues:true,values:{chatbot:'Chatbot 对话'}},
  'generate_picture_expose.location2':{meaning:'图片消息曝光所属的具体位置。',valueMeaningSource:'frontend_code',replaceCommonValues:true,values:{chatbot_view_message:'Chatbot 对话消息查看区域'}},

  'result_pop_show.app_id':{meaning:'结果弹窗关联的动态 App 资源 ID。'},
  'result_pop_show.appid':{meaning:'结果弹窗关联的动态 App 短 ID；Raw key 保留 appid。'},
  'result_pop_show.filter_level':{meaning:'结果弹窗关联 App 的复杂度等级。',valueMeaningSource:'frontend_code',values:FILTER_LEVEL_MEANINGS},
  'result_pop_show.origin':{meaning:'本次准备打开结果弹窗的入口。',valueMeaningSource:'frontend_code',values:RESULT_POP_SHOW_ORIGIN_MEANINGS},
  'screen_print.imgIds':{meaning:'截屏所在任务关联的全部动态结果 ID；没有任务记录时发送空数组。'},
  'screen_print.short_id':{meaning:'截屏内容关联的动态 App 短 ID；没有任务记录时发送空字符串。'},
  'screen_print.app_id':{meaning:'截屏内容关联的动态 App 资源 ID；没有任务记录时发送空字符串。'},
  'screen_print.location1':{meaning:'截屏内容生成时记录的动态一级业务位置。',replaceCommonValues:true,openValueSet:true,values:{}},
  'screen_print.location2':{meaning:'截屏内容生成时记录的动态二级业务位置。',replaceCommonValues:true,openValueSet:true,values:{}},
  'screen_print.generate_location':{meaning:'截屏内容来自首次生成还是再次生成；没有记录时发送空字符串。',valueMeaningSource:'frontend_code',values:GENERATE_LOCATION_MEANINGS},
  'screen_print.tag_id':{meaning:'截屏内容关联的动态内容标签 ID；没有记录时发送空字符串。'},
  'screen_print.generate_time':{meaning:'截屏内容生成任务的预计处理时间；有任务记录时发送动态字符串，没有记录时发送数字 0。',valueMeaningSource:'frontend_code',openValues:{0:'没有任务记录'}},
  'screen_print.generate_wait_time':{meaning:'截屏内容从任务开始到生成成功的实际等待时长，单位为秒；没有记录时发送 0。',valueMeaningSource:'frontend_code',openValues:{0:'没有等待时间记录'}},
  'screen_print.gallery_id':{meaning:'截屏内容关联的动态 Gallery 内容 ID；没有记录时发送空字符串。'},
  'screen_print.origin':{meaning:'截屏内容最初生成的业务来源。',valueMeaningSource:'frontend_code',values:GENERATE_ORIGIN_MEANINGS},
  'screen_print.ability_name':{meaning:'截屏内容使用的创作能力；没有任务记录时发送空字符串，动态值保持开放。',valueMeaningSource:'frontend_code',openValues:{...GENERATE_ABILITY_MEANINGS,'':'没有任务记录或生成能力'}},
  'screen_print.user_scene':{meaning:'截屏内容所属的业务场景；没有记录时发送空字符串。',valueMeaningSource:'frontend_code',openValues:{...USER_SCENE_TYPE_MEANINGS,'':'没有记录业务场景'}},
  'screen_print.entry_point':{meaning:'截屏内容最初从哪个生成入口发起；没有记录时发送空字符串。',valueMeaningSource:'frontend_code',values:RESULT_SHOW_ENTRY_POINT_MEANINGS},
  'video_download.video_id':{meaning:'用户准备下载的动态视频结果 ID。'},
  'video_download.ability_name':{meaning:'被下载视频所属的创作能力；调用方缺失时回退为 a1，动态值保持开放。',valueMeaningSource:'frontend_code',openValues:ABILITY_NAME_TRACK_MEANINGS},
  'video_download.post_id':{meaning:'被下载视频关联的动态作品 ID；仅部分分享入口发送。'},
  'video_download.origin':{meaning:'本次视频下载发生的动态业务来源。',valueMeaningSource:'frontend_code',openValues:RESULT_DOWNLOAD_ORIGIN_OBSERVED_MEANINGS},
  'video_download.task_id':{meaning:'被下载视频所属的动态生成任务 ID。'},
  'video_download.trace_info':{meaning:'被下载视频关联的动态推荐追踪信息。'},
  'video_download.location1':{meaning:'视频下载事件预留的动态一级业务位置；当前没有入口发送。',replaceCommonValues:true,openValueSet:true,values:{}},
  'video_download.location2':{meaning:'视频下载事件预留的动态二级业务位置；当前没有入口发送。',replaceCommonValues:true,openValueSet:true,values:{}},
  'video_download.chatbot_id':{meaning:'视频下载事件预留的动态 Chatbot ID；当前没有入口发送。'},
  'video_full_screen_click.current_state':{meaning:'用户本次准备切换到的视频全屏状态。',valueMeaningSource:'frontend_code',values:VIDEO_FULLSCREEN_STATE_MEANINGS},
  'video_play_click.template_id':{meaning:'用户点击播放或暂停的动态 App、换脸模板或视频 ID。'},
  'remix_whatsapp_popup_close.app_id':{meaning:'WhatsApp 引导关联的动态 App 资源 ID；创作者公告入口不发送。'},
  'remix_whatsapp_popup_close.origin':{meaning:'用户关闭 WhatsApp 引导时所在的业务入口。',valueMeaningSource:'frontend_code',values:REMIX_WHATSAPP_ORIGIN_MEANINGS},
  'result_click.app_id':{meaning:'用户点击结果预览时当前 Remix App 的动态资源 ID。'},
  'result_click.appid':{meaning:'用户点击结果预览时当前 Remix App 的动态短 ID；Raw key 保留 appid。'},
  'result_click.filter_level':{meaning:'当前 Remix App 的复杂度等级。',valueMeaningSource:'frontend_code',values:FILTER_LEVEL_MEANINGS},
  'result_pop_close.app_id':{meaning:'关闭结果弹窗时当前 Remix App 的动态资源 ID。'},
  'result_pop_close.appid':{meaning:'关闭结果弹窗时当前 Remix App 的动态短 ID；Raw key 保留 appid。'},
  'result_pop_close.filter_level':{meaning:'当前 Remix App 的复杂度等级。',valueMeaningSource:'frontend_code',values:FILTER_LEVEL_MEANINGS},
  'result_pop_publish_click.app_id':{meaning:'用户准备发布的动态 Remix App 资源 ID。'},
  'result_pop_publish_click.appid':{meaning:'用户准备发布的动态 Remix App 短 ID；Raw key 保留 appid。'},
  'result_pop_publish_click.filter_level':{meaning:'准备发布的 Remix App 复杂度等级。',valueMeaningSource:'frontend_code',values:FILTER_LEVEL_MEANINGS},
  'publish_pop_publish.app_id':{meaning:'用户准备发布的动态 Remix App 资源 ID。'},
  'publish_pop_publish_click.app_id':{meaning:'用户准备发布的动态 Remix App 资源 ID。'},
  'publish_pop_publish_click.appid':{meaning:'用户准备发布的动态 Remix App 短 ID；Raw key 保留 appid。'},
  'publish_pop_publish_click.filter_level':{meaning:'准备发布的 Remix App 复杂度等级。',valueMeaningSource:'frontend_code',values:FILTER_LEVEL_MEANINGS},
  'publish_pop_show.app_id':{meaning:'准备打开发布弹窗时当前 Remix App 的动态资源 ID。'},
  'publish_pop_show.appid':{meaning:'准备打开发布弹窗时当前 Remix App 的动态短 ID；Raw key 保留 appid。'},
  'publish_pop_show.filter_level':{meaning:'当前 Remix App 的复杂度等级。',valueMeaningSource:'frontend_code',values:FILTER_LEVEL_MEANINGS},
  'publish_pop_show.origin':{meaning:'本次准备进入发布流程的入口。',valueMeaningSource:'frontend_code',values:PUBLISH_POP_SHOW_ORIGIN_MEANINGS},
  'remix_whatsapp_entry_click.app_id':{meaning:'WhatsApp 引导关联的动态 App 资源 ID；创作者公告入口不发送。'},
  'remix_whatsapp_entry_click.origin':{meaning:'用户点击 WhatsApp 引导入口时所在的业务位置。',valueMeaningSource:'frontend_code',values:REMIX_WHATSAPP_ORIGIN_MEANINGS},
  'remix_whatsapp_link_click.app_id':{meaning:'WhatsApp 引导关联的动态 App 资源 ID；创作者公告入口不发送。'},
  'remix_whatsapp_link_click.user_level':{meaning:'用户点击“立即添加”时的创作者等级。',valueMeaningSource:'frontend_code',values:REMIX_USER_LEVEL_MEANINGS},
  'remix_whatsapp_link_click.origin':{meaning:'用户点击“立即添加”时所在的业务位置。',valueMeaningSource:'frontend_code',values:REMIX_WHATSAPP_ORIGIN_MEANINGS},
  'view_result_click.app_id':{meaning:'用户准备查看结果时当前 Remix App 的动态资源 ID。'},
  'view_result_click.appid':{meaning:'用户准备查看结果时当前 Remix App 的动态短 ID；Raw key 保留 appid。'},
  'view_result_click.filter_level':{meaning:'当前 Remix App 的复杂度等级。',valueMeaningSource:'frontend_code',values:FILTER_LEVEL_MEANINGS},
  'generate_results_show.app_id':{meaning:'当前展示结果关联的动态 App 资源 ID。'},
  'generate_results_show.appid':{meaning:'当前展示结果关联的动态 App 短 ID；缺失时发送空字符串，Raw key 保留 appid。'},
  'generate_results_show.image_id':{meaning:'当前展示的动态图片或视频结果 ID。'},
  'generate_results_show.ability_name':{meaning:'当前展示结果所属的创作能力。',valueMeaningSource:'frontend_code',values:GENERATE_RESULTS_ABILITY_MEANINGS},
  'generate_results_show.user_scene':{meaning:'当前展示结果所属的业务场景；没有映射时不发送。',valueMeaningSource:'frontend_code',openValues:USER_SCENE_TYPE_MEANINGS},
  'generate_results_show.view_source':{meaning:'当前结果展示所在的页面类型。',valueMeaningSource:'frontend_code',values:GENERATE_RESULTS_VIEW_SOURCE_MEANINGS},
  'big_image.image_id':{meaning:'用户准备在大图预览中查看的动态结果 ID。'},
  'big_image.app_id':{meaning:'大图结果关联的动态 App 资源 ID。'},
  'big_image.origin':{meaning:'用户进入大图预览的 PC 任务入口。',valueMeaningSource:'frontend_code',values:BIG_IMAGE_ORIGIN_MEANINGS},
  'image_exposure.tag_id':{meaning:'图片曝光时当前动态内容标签 ID；没有记录时为 none。'},
  'image_exposure.tag_name':{meaning:'图片曝光时当前动态内容标签名称；没有记录时为 none。'},
  'image_exposure.exposureList':{meaning:'本批达到曝光条件的图片列表；每项包含曝光位置和动态图片 ID。',example:[{exposure_location:'homepage_image',imageId:'2066475647017820162'}],valueMeaningSource:'frontend_code',valuePath:'exposureList[].exposure_location',openValues:IMAGE_EXPOSURE_LOCATION_OBSERVED_MEANINGS},
  'image_publish.image_id':{meaning:'准备发布的动态图片结果 ID，与 pictureid 同值；运行时可为 string 或 number。'},
  'image_publish.pictureid':{meaning:'准备发布的动态图片结果 ID，与 image_id 同值；Raw key 保留 pictureid，运行时可为 string 或 number。'},
  'image_publish.origin':{meaning:'旧版单图发布流程记录的业务来源；当前没有页面使用这条流程，动态来源保持开放。',valueMeaningSource:'frontend_code',openValues:IMAGE_PUBLISH_ORIGIN_OBSERVED_MEANINGS},
  'image_publish.app_id':{meaning:'准备发布图片关联的动态 App 资源 ID。'},
  'tasklist_click.state':{meaning:'用户本次准备展开还是收起 PC 任务列表。',valueMeaningSource:'frontend_code',values:TASKLIST_CLICK_STATE_MEANINGS},
  'image_pop_direct_close.type':{meaning:'被关闭的图片编辑项类型。',valueMeaningSource:'frontend_code',values:IMAGE_CHANGE_TYPE_MEANINGS},
  'image_pop_direct_close.app_id':{meaning:'被编辑的动态 Remix App 资源 ID。'},
  'mute_button_click.current_state':{meaning:'操作后的视频声音状态；点击播放时自动恢复声音也会上报 non-mute。',valueMeaningSource:'frontend_code',values:MUTE_BUTTON_STATE_MEANINGS},
  'publish_click_withoutname.short_id':{meaning:'名称为空时用户尝试发布的动态 App 短 ID。'},
  'publish_click_withoutname.app_id':{meaning:'名称为空时用户尝试发布的动态 App 资源 ID。'},
  'publish_pop_close.app_id':{meaning:'发布弹窗关闭时当前 Remix App 的动态资源 ID。'},
  'publish_pop_close.appid':{meaning:'发布弹窗关闭时当前 Remix App 的动态短 ID；Raw key 保留 appid。'},
  'publish_pop_close.filter_level':{meaning:'当前 Remix App 的复杂度等级。',valueMeaningSource:'frontend_code',values:FILTER_LEVEL_MEANINGS},
  'publish_pop_direct_close.app_id':{meaning:'用户未修改发布信息就关闭弹窗时当前 Remix App 的动态资源 ID。'},

  'enhancement.current_tab':{meaning:'用户点击图片高清增强时所在的业务入口。',valueMeaningSource:'frontend_code',values:ENHANCEMENT_CURRENT_TAB_MEANINGS},
  'enhancement.user_scene':{meaning:'待增强图片所属的业务场景；无法识别时不发送。',valueMeaningSource:'frontend_code',values:USER_SCENE_TYPE_MEANINGS},
  'enhancement.ability_name':{meaning:'待增强图片原任务使用的创作能力；无法识别时不发送，下列为已观察值。',valueMeaningSource:'frontend_code',openValues:GENERATE_FAILURE_ABILITY_OBSERVED_MEANINGS},
  'enhancement.location2':{meaning:'图片高清增强入口所在位置。',replaceCommonValues:true,valueMeaningSource:'frontend_code',values:{task:'任务图片操作区'}},
  'enhancement.trace_info':{meaning:'待增强图片关联的动态推荐追踪信息；没有记录时为空字符串。'},
  'back_pop_cancel_click.app_id':{meaning:'用户取消离开时当前编辑的动态 App 资源 ID。'},
  'back_pop_stillleave_click.app_id':{meaning:'用户确认离开时当前编辑的动态 App 资源 ID。'},
  'back_pop_stillleave_click.is_generating':{meaning:'用户确认离开时是否仍有生成任务进行中。',valueMeaningSource:'frontend_code',values:{true:'仍在生成',false:'当前未在生成'}},
  'backtoedit_click.app_id':{meaning:'定义中声明的动态 App 资源 ID；当前没有直接发送该事件。'},
  'backtotry_click.app_id':{meaning:'返回编辑或试用界面时当前 Remix App 的动态资源 ID。'},
  'backtotry_click.appid':{meaning:'返回编辑或试用界面时当前 Remix App 的动态短 ID；Raw key 保留 appid。'},
  'backtotry_click.filter_level':{meaning:'当前滤镜难度等级。',valueMeaningSource:'frontend_code',values:FILTER_LEVEL_MEANINGS},
  'create_pop_backtoedit_click.app_id':{meaning:'定义中声明的动态 App 资源 ID；当前没有直接发送该事件。'},
  'create_translate_click.app_id':{meaning:'本次翻译关联的动态 App 资源 ID。'},
  'create_translate_click.short_id':{meaning:'本次翻译关联的动态 App 短 ID。'},
  'create_translate_click.type':{meaning:'用户准备翻译的提示词类型。',valueMeaningSource:'frontend_code',values:{image_prompt:'图片生成提示词',video_prompt:'视频生成提示词'}},
  'create_translate_click.filter_level':{meaning:'当前滤镜难度等级。',valueMeaningSource:'frontend_code',values:FILTER_LEVEL_MEANINGS},
  'create_translate_click.is_edit':{meaning:'用户点击翻译前是否已修改当前提示词。',valueMeaningSource:'frontend_code',values:{true:'已修改',false:'未修改'}},
  'cut_function_click.user_scene':{meaning:'定义中声明的裁剪业务场景；当前没有直接发送该事件。',valueMeaningSource:'frontend_code',values:USER_SCENE_TYPE_MEANINGS},
  'cut_page_finish.user_scene':{meaning:'图片裁剪并上传成功时所属的业务场景。',valueMeaningSource:'frontend_code',values:USER_SCENE_TYPE_MEANINGS},
  'publish_pop_name_edit.app_id':{meaning:'定义中声明的动态 App 资源 ID；当前没有直接发送该事件。'},
  'remix_t2i_textbox_click.app_id':{meaning:'文生图提示词输入框获得焦点时关联的动态 App 资源 ID。'},
  'remix_t2i_textbox_click.short_id':{meaning:'文生图提示词输入框获得焦点时关联的动态 App 短 ID。'},
  'text_edit_page_finish.source':{meaning:'用户进入本次表情包文字编辑的方式。',valueMeaningSource:'frontend_code',values:{auto_enter:'表情包生成成功后自动进入文字编辑',edit_button_click:'从任务结果页点击“添加文字”进入'}},
  'text_edit_page_finish.user_scene':{meaning:'文字编辑完成时所属的业务场景；当前可达路径均为 emoji，契约保留五个正式值。',valueMeaningSource:'frontend_code',values:USER_SCENE_TYPE_MEANINGS},
  'text_function_click.user_scene':{meaning:'用户点击“添加文字”时所属的业务场景；当前入口只可达 emoji，契约保留五个正式值。',valueMeaningSource:'frontend_code',values:USER_SCENE_TYPE_MEANINGS},
  'cutout_function_click.user_scene':{meaning:'待抠图结果所属的业务场景；无法识别时不发送。',valueMeaningSource:'frontend_code',values:USER_SCENE_TYPE_MEANINGS},
  'cutout_function_click.ability_name':{meaning:'待抠图结果原任务使用的创作能力；无法识别时不发送，下列为已观察值。',valueMeaningSource:'frontend_code',openValues:GENERATE_FAILURE_ABILITY_OBSERVED_MEANINGS},
  'cutout_function_click.location2':{meaning:'抠图入口所在位置。',replaceCommonValues:true,valueMeaningSource:'frontend_code',values:{task:'任务结果页或任务操作区'}},
  'cutout_function_click.trace_info':{meaning:'待抠图结果关联的动态推荐追踪信息；没有记录时为空字符串。'},
  'describe_edit_click.app_id':{meaning:'用户准备编辑描述时关联的动态 App 资源 ID。'},
  'describe_pop_change_close.app_id':{meaning:'修改描述后关闭弹窗时关联的动态 App 资源 ID。'},
  'describe_pop_direct_close.app_id':{meaning:'未修改描述、直接关闭弹窗时关联的动态 App 资源 ID。'},
  'describe_pop_close.app_id':{meaning:'描述编辑弹窗关闭时关联的动态 App 资源 ID。'},
  'describe_pop_close.appid':{meaning:'描述编辑弹窗关闭时关联的动态 App 短 ID；Raw key 保留 appid。'},
  'describe_pop_close.filter_level':{meaning:'关闭描述编辑弹窗时的滤镜难度等级。',valueMeaningSource:'frontend_code',values:FILTER_LEVEL_MEANINGS},
  'describe_pop_finish.app_id':{meaning:'完成描述编辑时关联的动态 App 资源 ID。'},
  'describe_pop_finish.appid':{meaning:'完成描述编辑时关联的动态 App 短 ID；Raw key 保留 appid。'},
  'describe_pop_finish.filter_level':{meaning:'完成描述编辑时的滤镜难度等级。',valueMeaningSource:'frontend_code',values:FILTER_LEVEL_MEANINGS},
  'device_id_failed.error_message':{meaning:'Native Device ID 失败回调传入的动态错误信息；等待 10 秒仍未取得 Device ID 时固定为 getDeviceId timeout。'},
  'edit_page_visit.ability_name':{meaning:'本次重新生成使用的能力。',valueMeaningSource:'frontend_code',values:{SIMPLE_GENERATE_VIDEO:'AI 视频生成'}},
  'enhancement_success.current_tab':{meaning:'图片精绘任务发起时记录的业务入口。',valueMeaningSource:'frontend_code',values:ENHANCEMENT_SUCCESS_CURRENT_TAB_MEANINGS},
  'enhancement_success.app_id':{meaning:'精绘成功结果图片的动态 App ID。'},
  'faceswap_sortmode_switch.sort_mode':{meaning:'用户在换脸筛选弹窗确认的排序方式。',valueMeaningSource:'frontend_code',values:FACESWAP_SORT_MODE_MEANINGS},
  'faceswap_sortmode_switch.tag_id':{meaning:'用户确认的动态换脸标签 ID；选择全部分类时为空字符串。',valueMeaningSource:'frontend_code',openValues:{'':'全部分类'}},
  'faceswap_sortmode_switch.tag_name':{meaning:'用户确认的动态换脸标签名称；全部分类使用当前语言的“全部”文案，无法匹配时为空字符串。',valueMeaningSource:'frontend_code',openValues:{'':'未匹配到标签名称'}},
  'video_describe_close.app_id':{meaning:'关闭视频描述弹窗时关联的动态 App 资源 ID。'},
  'video_describe_close.short_id':{meaning:'关闭视频描述弹窗时关联的动态 App 短 ID。'},
  'video_describe_close.filter_level':{meaning:'关闭视频描述弹窗时的滤镜难度等级。',valueMeaningSource:'frontend_code',values:FILTER_LEVEL_MEANINGS},
  'video_describe_close.is_edit':{meaning:'关闭前是否检测到视频提示词被修改。',valueMeaningSource:'frontend_code',values:{after_edit_close:'修改过提示词后关闭',direct_close:'未检测到修改，直接关闭'}},
  'video_describe_close.close_type':{meaning:'视频描述弹窗的关闭方式。',valueMeaningSource:'frontend_code',values:{finish_click:'点击“完成”关闭',close_button_click:'点击右上角关闭按钮',blank_area_click:'点击空白区域或没有识别到关闭方式时的兜底'}},
  'video_describe_edit_click.app_id':{meaning:'打开视频描述编辑弹窗时关联的动态 App 资源 ID。'},
  'video_describe_edit_click.short_id':{meaning:'打开视频描述编辑弹窗时关联的动态 App 短 ID。'},
  'video_describe_edit_click.filter_level':{meaning:'打开视频描述编辑弹窗时的滤镜难度等级。',valueMeaningSource:'frontend_code',values:FILTER_LEVEL_MEANINGS},
  'video_describe_show.app_id':{meaning:'视频描述编辑弹窗展示时关联的动态 App 资源 ID。'},
  'video_describe_show.short_id':{meaning:'视频描述编辑弹窗展示时关联的动态 App 短 ID。'},
  'video_describe_show.filter_level':{meaning:'视频描述编辑弹窗展示时的滤镜难度等级。',valueMeaningSource:'frontend_code',values:FILTER_LEVEL_MEANINGS},
  'video_describe_show.show_type':{meaning:'视频描述编辑弹窗的打开方式。',valueMeaningSource:'frontend_code',values:{open_video_show:'开启视频生成能力后由引导自动展示',edit_click_show:'用户主动点击视频描述编辑入口后展示'}},
  'video_resolution_click.ability_name':{meaning:'用户准备使用的视频清晰度增强能力；当前调用固定为 VIDEO_ENHANCE_RESOLUTION，契约保留完整能力类型。',valueMeaningSource:'frontend_code',values:ABILITY_NAME_TRACK_MEANINGS},
  'video_resolution_click.entry_point':{meaning:'视频清晰度增强入口继承的任务来源；没有记录时为空字符串。',valueMeaningSource:'frontend_code',values:GENERATION_ENTRY_POINT_MEANINGS},
  'video_resolution_click.location1':{meaning:'视频清晰度增强入口的动态一级业务位置；没有记录时发送空字符串。',replaceCommonValues:true,valueMeaningSource:'frontend_code',openValues:{'':'未记录一级业务位置'}},
  'video_resolution_click.location2':{meaning:'视频清晰度增强入口的动态二级业务位置；没有记录时发送空字符串。',replaceCommonValues:true,valueMeaningSource:'frontend_code',openValues:{'':'未记录二级业务位置'}},
  'video_resolution_submit.ability_name':{meaning:'用户确认使用的视频清晰度增强能力；当前调用固定为 VIDEO_ENHANCE_RESOLUTION，契约保留完整能力类型。',valueMeaningSource:'frontend_code',values:ABILITY_NAME_TRACK_MEANINGS},
  'video_resolution_submit.resolution_detail':{meaning:'用户确认的视频输出清晰度；当前结果页只会提交 HD 或 FHD，契约保留 SD。',valueMeaningSource:'frontend_code',values:{SD:'标清；类型声明保留，当前提交入口不使用',HD:'高清',FHD:'全高清'}},
  'video_resolution_submit.entry_point':{meaning:'视频清晰度增强继承的任务来源；没有记录时为空字符串。',valueMeaningSource:'frontend_code',values:GENERATION_ENTRY_POINT_MEANINGS},
  'video_resolution_submit.location1':{meaning:'视频清晰度增强的动态一级业务位置；没有记录时发送空字符串。',replaceCommonValues:true,valueMeaningSource:'frontend_code',openValues:{'':'未记录一级业务位置'}},
  'video_resolution_submit.location2':{meaning:'视频清晰度增强的动态二级业务位置；没有记录时发送空字符串。',replaceCommonValues:true,valueMeaningSource:'frontend_code',openValues:{'':'未记录二级业务位置'}},

  'cut_page_show.user_scene':{meaning:'裁剪页当前图片所属的业务场景。',valueMeaningSource:'frontend_code',values:USER_SCENE_TYPE_MEANINGS},
  'emoji_add_text_click.source':{meaning:'用户进入本次表情包文字编辑的方式。',valueMeaningSource:'frontend_code',values:TEXT_EDIT_SOURCE_MEANINGS},
  'emoji_edit_page_done.source':{meaning:'定义中声明的文字编辑进入方式；当前没有直接发送该事件。',valueMeaningSource:'frontend_code',values:TEXT_EDIT_SOURCE_MEANINGS},
  'text_edit_page_show.source':{meaning:'用户进入本次表情包文字编辑的方式。',valueMeaningSource:'frontend_code',values:TEXT_EDIT_SOURCE_MEANINGS},
  'text_edit_page_show.user_scene':{meaning:'文字编辑页展示时所属的业务场景。',valueMeaningSource:'frontend_code',values:USER_SCENE_TYPE_MEANINGS},
  'app_edit_click.appid':{meaning:'用户准备编辑的动态 App 短 ID；Raw key 保留 appid。'},
  'app_edit_click.app_id':{meaning:'用户准备编辑的动态 App 资源 ID。'},
  'optimize.image_id':{meaning:'本次准备精绘的原图 ID。'},
  'optimize.pictureid':{meaning:'本次准备精绘的原图 ID，与 image_id 同值；Raw key 保留 pictureid。'},
  'optimize.origin':{meaning:'用户发起图片精绘的业务入口；没有入口上下文时不发送。',valueMeaningSource:'frontend_code',values:OPTIMIZE_ORIGIN_MEANINGS},
  'optimize.app_id':{meaning:'本次精绘关联的动态 App 资源 ID；没有 App 上下文时不发送。'},
  'optimize_success.pictureid':{meaning:'精绘成功后生成的新图片 ID；Raw key 保留 pictureid。'},
  'optimize_success.image_id':{meaning:'精绘成功后生成的新图片 ID，与 pictureid 同值。'},
  'optimize_success.sourceId':{meaning:'本次精绘所使用的原图 ID；Raw key 保留 sourceId。'},

  'share_button_click.share_origin':{meaning:'用户打开分享入口时所在的业务场景。',valueMeaningSource:'frontend_code',values:SHARE_ORIGIN_MEANINGS},
  'share_button_click.share_type':{meaning:'本次准备分享的内容类型。',valueMeaningSource:'frontend_code',values:SHARE_TYPE_MEANINGS},
  'share_button_click.share_user_id':{meaning:'被分享的个人主页用户 ID，或邀请分享的发起用户 ID。'},
  'share_button_click.topic_id':{meaning:'被分享话题的长 ID。'},
  'share_button_click.post_id':{meaning:'被分享作品的长 ID。'},
  'share_button_click.app_id':{meaning:'被分享滤镜或 App 的资源长 ID。'},
  'share_button_click.tag_id':{meaning:'分享动作发生时当前内容标签的 ID。'},
  'share_button_click.image_id':{meaning:'被分享图片或视频结果的长 ID。'},
  'share_button_click.trace_info':{meaning:'被分享内容的推荐链路追踪信息，用于关联推荐曝光、点击与分享。'},
  'share_button_click.face_swap_id':{meaning:'被分享的视频换脸结果 ID。'},
  'share_button_click.entry_point':{meaning:'被分享内容最初的产品展示入口。',valueMeaningSource:'frontend_code',values:GENERATE_ENTRY_POINT_MEANINGS},
  'share_button_click.ability_name':{meaning:'被分享内容所属的原子能力。',valueMeaningSource:'frontend_code',values:GENERATE_ABILITY_MEANINGS},
  'share_button_click.user_scene':{meaning:'被分享 App 或结果所属的用户业务场景。',valueMeaningSource:'frontend_code',values:USER_SCENE_MEANINGS},
  'share_button_click.type':{meaning:'legacy 分享链路对被分享对象的类型归类。',valueMeaningSource:'frontend_code',values:{image:'图片或视频结果',app:'滤镜或 App',profile:'个人主页'}},
  'share_button_click.picid':{meaning:'legacy 分享链路中被分享图片的短 ID。'},
  'share_button_click.image_long_id':{meaning:'legacy 分享链路中被分享图片的长 ID，与 image_id 同源。'},
  'share_button_click.collection_id':{meaning:'legacy 分享链路中被分享合集的 ID。'},
  'share_button_click.appid':{meaning:'legacy 分享链路中被分享 App 的短 ID。'},
  'share_button_click.app_long_id':{meaning:'legacy 分享链路中被分享 App 的长 ID。'},
  'share_button_click.object':{meaning:'legacy 分享链路中用户点击的具体分享载体。',valueMeaningSource:'frontend_code',values:{image_detail_share_button:'图片详情分享按钮',big_image:'大图预览',task:'任务卡片',profile_apps:'个人主页 App 卡片',history:'生成历史',collection:'合集'}},
  'share_button_click.object_name':{meaning:'legacy 分享链路中被分享载体的业务名称。'},
  'share_button_click.is_ai_video':{meaning:'标记被分享内容是否为 AI 视频；仅 AI 视频传 1，其他内容不传。',valueMeaningSource:'frontend_code',values:{'1':'AI 视频内容'}},

  'pricing_popup.last_app_id':{meaning:'打开订阅弹窗前用户最后点击的 App 资源 ID，用于归因付费意图。'},
  'pricing_popup.trace_info':{meaning:'触发订阅弹窗的内容推荐链路追踪信息。'},
  'pricing_popup.price_page_type':{meaning:'根据用户国家或地区分组选择的价格页版本。',valueMeaningSource:'frontend_code',values:{low_price_type:'T3 等低价地区价格版本',high_price_type:'非 T3 地区高价价格版本'}},
  'pricing_popup.pricing_plan_type':{meaning:'订阅弹窗展示的套餐页类型。',valueMeaningSource:'frontend_code',values:{pricing_api:'API 业务订阅页',pricing_free_page:'普通免费用户订阅页',pricing_premium_page:'会员套餐页'}},
  'pricing_popup.location':{meaning:'触发订阅弹窗曝光的付费业务入口，用于区分生成拦截、下载去水印、升级、API 页面等订阅场景。',valueMeaningSource:'frontend_code',values:{api_page:'API 页面订阅入口'}},
  'pricing_popup.show_free_trial':{meaning:'当前订阅弹窗展示的套餐是否支持免费试用。',valueMeaningSource:'frontend_code',values:{open_free:'当前套餐开放免费试用',close_free:'当前套餐不开放免费试用'}},
  'pricing_popup.is_upgrade':{meaning:'当前订阅弹窗是否用于已有订阅用户升级套餐。',valueMeaningSource:'frontend_code',values:{true:'订阅升级场景',false:'新订阅或非升级场景'}},
  'pricing_popup.post_id':{meaning:'触发订阅弹窗的来源作品 ID；从作品详情等内容付费场景进入时携带。'},
  'pricing_popup.app_id':{meaning:'触发订阅弹窗的滤镜或 App 资源长 ID；生成类付费场景用于归因具体资产。'},
  'pricing_popup.short_id':{meaning:'触发订阅弹窗的滤镜或 App 对外短 ID，用于关联对应内容详情入口。'},
  'pricing_popup.tag_id':{meaning:'触发订阅弹窗时关联的内容标签 ID，用于按标签归因付费意图。'},
  'pricing_popup.user_scene':{meaning:'触发订阅弹窗的用户业务场景。',valueMeaningSource:'frontend_code',values:USER_SCENE_MEANINGS},
  'pricing_popup.ability_name':{meaning:'触发订阅弹窗的生成能力分类。',valueMeaningSource:'frontend_code',values:GENERATE_ABILITY_MEANINGS},
  'pricing_popup.entry_point':{meaning:'用户进入订阅弹窗前所在的具体产品入口。',valueMeaningSource:'frontend_code',values:GENERATE_ENTRY_POINT_MEANINGS},

  'pay_result.transaction_id':{meaning:'订阅支付交易 ID，用于关联发起支付与最终结果。'},
  'pay_result.payment_id':{meaning:'支付平台或订阅服务返回的支付记录 ID。'},
  'pay_result.is_success':{meaning:'本次订阅支付是否成功。',valueMeaningSource:'frontend_code',values:{true:'支付成功',false:'支付失败'}},
  'pay_result.failure_reason':{meaning:'订阅支付失败时的错误原因或支付服务返回信息；成功时不传。'},
  'pay_result.paid_type':{meaning:'本次支付所走的支付链路类型。',valueMeaningSource:'frontend_code',values:{onerway:'一次性跳转支付链路；Raw 值保留 onerway 拼写'}},
  'pay_result.location':{meaning:'本次订阅支付最初由哪个付费业务入口触发，用于将支付结果归因到对应订阅弹窗场景。'},
  'pay_result.price_page_type':{meaning:'本次支付所使用的地区价格页版本。',valueMeaningSource:'frontend_code',values:{low_price_type:'T3 等低价地区价格版本',high_price_type:'非 T3 地区高价价格版本'}},
  'pay_result.pricing_plan_type':{meaning:'本次支付对应的订阅套餐页类型。',valueMeaningSource:'frontend_code',values:{pricing_api:'API 业务订阅页',pricing_free_page:'普通免费用户订阅页',pricing_premium_page:'会员套餐页'}},
  'pay_result.app_id':{meaning:'本次支付意图关联的滤镜或 App 资源长 ID；生成类付费场景用于归因具体资产。'},
  'pay_result.post_id':{meaning:'本次支付意图关联的来源作品 ID；从作品内容付费场景进入时携带。'},
  'pay_result.tag_id':{meaning:'本次支付意图关联的内容标签 ID，用于按标签分析订阅转化。'},
  'pay_result.user_scene':{meaning:'本次支付所关联的用户业务场景。',valueMeaningSource:'frontend_code',values:USER_SCENE_MEANINGS},

  'cross_platform_purchase_error.failure_reason':{meaning:'跨平台订阅校验失败的业务原因；当前表示用户已有订阅所属渠道与当前 App 支付渠道不一致，前端拦截继续购买。',valueMeaningSource:'frontend_code',values:{cross_platform_error:'已有订阅渠道与当前支付渠道不一致'}},

  'google_play_popup_close_manually.transaction_id':{meaning:'用户在 Google Play 支付弹窗中主动取消时所关联的订单交易 ID，用于定位被中断的支付订单。'},

  'pricing_premium_subscribe_click.app_id':{meaning:'用户点击订阅按钮时关联的滤镜或 App 资源长 ID；没有具体资产时为空。'},
  'pricing_premium_subscribe_click.tag_id':{meaning:'用户点击订阅按钮时关联的内容标签 ID；没有标签上下文时为空。'},
  'pricing_premium_subscribe_click.period':{meaning:'用户点击订阅的套餐计费周期。',valueMeaningSource:'frontend_code',values:{Yr:'按年订阅',Qr:'按季度订阅',Wk:'按周订阅',Mo:'按月订阅'}},
  'pricing_premium_subscribe_click.location':{meaning:'用户点击订阅按钮时所在的付费业务入口。',valueMeaningSource:'frontend_code',values:{old_user_first_screen_strategy:'老用户首屏付费引导',pay_retain_low_price:'支付挽留低价套餐弹窗',renewal_retention:'续订激励弹窗'}},
  'pricing_premium_subscribe_click.product_type':{meaning:'用户选择订阅的会员产品等级，取当前商品的 level。',valueMeaningSource:'frontend_code',values:{Premium:'Premium 会员',Standard:'Standard 会员',Plus:'Plus 会员'}},
  'pricing_premium_subscribe_click.open_free_trial':{meaning:'用户点击的订阅套餐是否开启免费试用。',valueMeaningSource:'frontend_code',values:{open_free:'套餐开启免费试用',close_free:'套餐未开启免费试用'}},
  'pricing_premium_subscribe_click.upgrade':{meaning:'以字符串形式标记本次订阅点击是否为套餐升级。',valueMeaningSource:'frontend_code',values:{is_upgrade:'升级已有订阅',not_upgrade:'不是订阅升级'}},
  'pricing_premium_subscribe_click.is_renewal':{meaning:'标记本次订阅点击是否属于续订或续订挽留流程。',valueMeaningSource:'frontend_code',values:{true:'续订或续订挽留',false:'新订阅或非续订流程'}},
  'pricing_premium_subscribe_click.is_upgrade':{meaning:'以布尔值标记本次订阅点击是否会升级已有套餐。',valueMeaningSource:'frontend_code',values:{true:'升级已有套餐',false:'不升级已有套餐'}},
  'pricing_premium_subscribe_click.pricing_plan_type':{meaning:'挽留类订阅点击所展示的套餐页场景。',valueMeaningSource:'frontend_code',values:{pay_retain_low_price:'支付挽留低价套餐',renewal_retention:'续订激励套餐'}},
  'pricing_premium_subscribe_click.has_discount_data':{meaning:'当前订阅按钮是否有可用的首周折扣商品数据。',valueMeaningSource:'frontend_code',values:{true:'存在首周折扣商品数据',false:'没有首周折扣商品数据'}},
  'pricing_premium_subscribe_click.get_googleplay_info':{meaning:'当前订阅场景是否已取得可用于展示或购买的 Google Play 商品信息。',valueMeaningSource:'frontend_code',values:{true:'已取得 Google Play 商品信息',false:'尚未取得 Google Play 商品信息'}},

  'unsubscribe_retain_popup_show.type':{meaning:'取消订阅挽留弹窗对应的退订业务类型。',valueMeaningSource:'frontend_code',values:{continuous:'连续订阅取消挽留',upgrade:'套餐升级后的取消挽留；类型定义预留，当前调用未使用'}},
  'unsubscribe_retain_popup_click.button':{meaning:'用户在取消订阅挽留弹窗中选择的操作。',valueMeaningSource:'frontend_code',values:{continue:'继续保留订阅并关闭弹窗',cancel:'仍要取消，前往系统订阅管理页'}},
  'unsubscribe_retain_popup_click.type':{meaning:'用户操作的取消订阅挽留业务类型。',valueMeaningSource:'frontend_code',values:{continuous:'连续订阅取消挽留',upgrade:'套餐升级后的取消挽留；类型定义预留，当前调用未使用'}},

  'onerway_cancel_subscribe_entrance_click.product_type':{meaning:'用户准备取消的当前订阅产品等级。',valueMeaningSource:'frontend_code',values:CANCEL_SUBSCRIPTION_PRODUCT_MEANINGS},
  'onerway_cancel_subscribe_entrance_click.period':{meaning:'用户准备取消的当前订阅计费周期。',valueMeaningSource:'frontend_code',values:CANCEL_SUBSCRIPTION_PERIOD_MEANINGS},
  'onerway_cancel_subscribe_entrance_click.source_type':{meaning:'用户点击取消订阅入口时所在的定价业务页面。',valueMeaningSource:'frontend_code',values:CANCEL_SUBSCRIPTION_SOURCE_MEANINGS},
  'onerway_cancel_popup_button_click.product_type':{meaning:'用户在取消确认弹窗中操作的订阅产品等级。',valueMeaningSource:'frontend_code',values:CANCEL_SUBSCRIPTION_PRODUCT_MEANINGS},
  'onerway_cancel_popup_button_click.period':{meaning:'用户在取消确认弹窗中操作的订阅计费周期。',valueMeaningSource:'frontend_code',values:CANCEL_SUBSCRIPTION_PERIOD_MEANINGS},
  'onerway_cancel_popup_button_click.source_type':{meaning:'触发取消确认弹窗的定价业务页面。',valueMeaningSource:'frontend_code',values:CANCEL_SUBSCRIPTION_SOURCE_MEANINGS},

  'renewal_retention_popup_show.scenario':{meaning:'续订激励弹窗的触发时机。',valueMeaningSource:'frontend_code',values:{home_page:'用户首次启动后在首页触发',image_task_completed:'图片生成任务完成后触发'}},
  'renewal_retention_popup_click.button':{meaning:'用户在续订激励弹窗中点击的操作。',valueMeaningSource:'frontend_code',values:{start_button:'接受续订激励并开始订阅',close_button:'关闭续订激励弹窗'}},
  'retention_popup_show.type':{meaning:'当前曝光的付费挽留弹窗类型。',valueMeaningSource:'frontend_code',values:{renewal_retention:'续订激励挽留',pay_retain_trigger_discount:'触发折扣的支付挽留',pay_retain_low_price:'低价套餐支付挽留',onbord_first:'首次引导挽留；Raw 值保留 onbord 拼写'}},
  'retention_popup_click.button':{meaning:'用户在续订离开挽留弹窗中的选择。',valueMeaningSource:'frontend_code',values:{save_button:'点击主 CTA 保留优惠并发起续订',give_up_button:'点击弹窗下方圆形关闭图标；显式放弃按钮当前已注释'}},
  'retention_popup_button_click.type':{meaning:'用户点击订阅按钮时所在的付费挽留弹窗类型。',valueMeaningSource:'frontend_code',values:{pay_retain_trigger_discount:'类型声明保留的触发折扣挽留；固定提交未观察到活跃调用',pay_retain_low_price:'默认的低价套餐支付挽留',onbord_first:'Onboarding 首次关闭后的付费挽留；Raw 值保留 onbord 拼写'}},

  'pay_cancel_recovery.order_id':{meaning:'本次 Google Play 支付取消后被挽回的原始订单 ID。'},
  'pay_cancel_recovery.period':{meaning:'被取消支付订单所选择的订阅周期。',valueMeaningSource:'frontend_code',values:PAY_CANCEL_RECOVERY_PERIOD_MEANINGS},
  'pay_cancel_recovery.ab_group':{meaning:'本次支付取消挽回所属的实验分组。',valueMeaningSource:'frontend_code',values:PAY_CANCEL_RECOVERY_GROUP_MEANINGS},
  'pay_cancel_recovery.pay_cancle_recovery_bar_cilck':{meaning:'标记本次挽回弹窗是否由 Discover 提醒条再次打开；Raw key 保留代码中的 cancle、cilck 拼写。',valueMeaningSource:'frontend_code',values:{true:'由 Discover 提醒条打开',false:'支付取消后立即打开'}},
  'pay_cancel_recovery_click.order_id':{meaning:'用户点击继续支付时对应的原始取消订单 ID。'},
  'pay_cancel_recovery_click.period':{meaning:'用户准备恢复支付的订阅周期。',valueMeaningSource:'frontend_code',values:PAY_CANCEL_RECOVERY_PERIOD_MEANINGS},
  'pay_cancel_recovery_click.ab_group':{meaning:'本次继续支付行为所属的支付取消挽回实验分组。',valueMeaningSource:'frontend_code',values:PAY_CANCEL_RECOVERY_GROUP_MEANINGS},
  'pay_cancel_recovery_click.button':{meaning:'用户在支付取消挽回弹窗中点击的操作。',valueMeaningSource:'frontend_code',values:{continue:'继续原订单的订阅支付'}},
  'pay_cancel_recovery_click.pay_cancle_recovery_bar_cilck':{meaning:'标记继续支付是否来自 Discover 提醒条打开的挽回弹窗；Raw key 保留代码拼写。',valueMeaningSource:'frontend_code',values:{true:'来自 Discover 提醒条',false:'来自支付取消后立即展示的弹窗'}},

  'survey_popup.is_submit':{meaning:'标记用户是否提交了支付取消原因问卷。',valueMeaningSource:'frontend_code',values:{submit:'已提交取消原因问卷'}},
  'survey_popup.text':{meaning:'用户选择的支付取消原因及可选补充说明；多项原因与自由文本使用斜杠拼接。',valueMeaningSource:'frontend_code',values:{'Payment issues':'支付过程存在问题','Too expensive':'价格太高','Poor product':'产品体验不佳','No money':'当前没有支付预算'}},

  'chatbot_visit.type':{meaning:'用户进入的 Chatbot 内容生产类型。',valueMeaningSource:'frontend_code',values:CHATBOT_CONTENT_TYPE_MEANINGS},
  'chatbot_visit.chatbot_type':{meaning:'Chatbot 内容生产类型的兼容记录字段，取值与 type 相同。',valueMeaningSource:'frontend_code',values:CHATBOT_CONTENT_TYPE_MEANINGS},
  'chatbot_visit.sort':{meaning:'当前 Chatbot 在来源列表中的排序位置；不是从列表进入或无法确定时为 null。'},
  'chatbot_visit.source':{meaning:'用户进入 AI 对话详情页的具体业务入口。',valueMeaningSource:'frontend_code',values:CHATBOT_ENTRY_SOURCE_MEANINGS},
  'chatbot_visit.is_recall':{meaning:'标记本次进入 AI 对话是否属于消息召回场景；与召回无关时为 null。',valueMeaningSource:'frontend_code',values:{true:'由消息召回进入',false:'明确不是消息召回',null:'当前入口不适用召回判断'}},
  'chatbot_visit.app_id':{meaning:'与当前 AI 对话关联的滤镜或 App 资源长 ID；没有关联资产时为空。'},
  'chatbot_visit.chatbot_id':{meaning:'用户进入的 Chatbot 唯一 ID，用于归属具体 AI 对话角色。'},
  'chatbot_visit.persona_id':{meaning:'当前 Chatbot 所使用的人设 ID；没有独立人设时为空。'},
  'chatbot_visit.persona_type':{meaning:'当前 Chatbot 所使用的人设类型；没有独立人设时为空。'},

  'chatbot_detail_page_leave.stay_time':{meaning:'用户本次在 AI 对话详情页的停留时长，由离开时间减去页面挂载时间计算，单位为毫秒。'},
  'chatbot_detail_page_leave.type':{meaning:'用户离开的 Chatbot 内容生产类型。',valueMeaningSource:'frontend_code',values:CHATBOT_CONTENT_TYPE_MEANINGS},
  'chatbot_detail_page_leave.chatbot_type':{meaning:'Chatbot 内容生产类型的兼容记录字段，取值与 type 相同。',valueMeaningSource:'frontend_code',values:CHATBOT_CONTENT_TYPE_MEANINGS},
  'chatbot_detail_page_leave.sort':{meaning:'当前 Chatbot 在进入来源列表中的排序位置；无法确定时为 null。'},
  'chatbot_detail_page_leave.source':{meaning:'用户本次进入 AI 对话详情页的业务入口，用于按入口分析停留表现。',valueMeaningSource:'frontend_code',values:CHATBOT_ENTRY_SOURCE_MEANINGS},
  'chatbot_detail_page_leave.is_recall':{meaning:'标记本次 AI 对话访问是否由消息召回触发；不适用时为 null。',valueMeaningSource:'frontend_code',values:{true:'由消息召回进入',false:'明确不是消息召回',null:'当前入口不适用召回判断'}},
  'chatbot_detail_page_leave.app_id':{meaning:'与本次离开的 AI 对话关联的滤镜或 App 资源长 ID；没有关联资产时为空。'},
  'chatbot_detail_page_leave.chatbot_id':{meaning:'用户离开的 Chatbot 唯一 ID，用于将停留时长归属到具体 AI 角色。'},
  'chatbot_detail_page_leave.persona_id':{meaning:'本次 AI 对话所使用的人设 ID；没有独立人设时为空。'},
  'chatbot_detail_page_leave.persona_type':{meaning:'本次 AI 对话所使用的人设类型；没有独立人设时为空。'},

  'chatbot_bond_journey_click_entry.chatbot_id':{meaning:'用户点击亲密度成长旅程入口时对应的 Chatbot 唯一 ID。'},
  'chatbot_bond_journey_click_entry.bond_level':{meaning:'用户点击亲密度成长旅程入口时，与该 Chatbot 的当前亲密度等级。前端固定支持 Lv.1–Lv.6；各等级名称、积分阈值和权益由亲密度状态接口动态返回。',valueMeaningSource:'frontend_code',values:CHATBOT_BOND_LEVEL_MEANINGS},
  'chatbot_bond_journey_click_upgrade_pop.chatbot_id':{meaning:'用户点击亲密度升级弹窗“See what changed”按钮时，对应的 Chatbot 唯一 ID。'},
  'chatbot_bond_journey_click_upgrade_pop.bond_level':{meaning:'用户在亲密度升级弹窗中点击时，该次升级对应的亲密度等级。前端固定支持 Lv.1–Lv.6。',valueMeaningSource:'frontend_code',values:CHATBOT_BOND_LEVEL_MEANINGS},
  'chatbot_bond_journey_expose_entry.chatbot_id':{meaning:'亲密度进度条入口曝光时对应的 Chatbot 唯一 ID。'},
  'chatbot_bond_journey_expose_entry.bond_level':{meaning:'亲密度进度条入口曝光时，用户与该 Chatbot 的当前亲密度等级。前端固定支持 Lv.1–Lv.6；等级名称与阈值由接口动态返回。',valueMeaningSource:'frontend_code',values:CHATBOT_BOND_LEVEL_MEANINGS},
  'chatbot_bond_journey_expose_upgrade_pop.chatbot_id':{meaning:'亲密度升级弹窗首次展示本次升级结果时，对应的 Chatbot 唯一 ID。'},
  'chatbot_bond_journey_expose_upgrade_pop.bond_level':{meaning:'亲密度升级弹窗曝光时，本次升级后达到的亲密度等级。前端固定支持 Lv.1–Lv.6。',valueMeaningSource:'frontend_code',values:CHATBOT_BOND_LEVEL_MEANINGS},

  'chatbot_exposure_direct.exposure_list':{meaning:'本次进入可视区域的 Chatbot 卡片列表；每项包含列表分组 type、列表排序 sort、Chatbot ID、关联人设 ID 和人设类型。',valueMeaningSource:'frontend_code',values:{new:'“新朋友”Chatbot 列表中的曝光项',more:'“更多朋友”Chatbot 列表中的曝光项'}},
  'chatbot_exposure_direct.exposureList':{meaning:'本次进入可视区域的 Chatbot 卡片列表；每项包含列表分组 type、列表排序 sort、Chatbot ID、关联人设 ID 和人设类型。',valueMeaningSource:'frontend_code',values:{new:'“新朋友”Chatbot 列表中的曝光项',more:'“更多朋友”Chatbot 列表中的曝光项'}},

  'chatbot_bond_journey_send_intro.chatbot_id':{meaning:'系统发送亲密度阶段介绍消息时对应的 Chatbot 唯一 ID。'},
  'chatbot_bond_journey_send_intro.bond_level':{meaning:'触发亲密度阶段介绍消息时，用户与该 Chatbot 达到的当前亲密度等级。前端固定支持 Lv.1–Lv.6。',valueMeaningSource:'frontend_code',values:CHATBOT_BOND_LEVEL_MEANINGS},

  'chatbot_message_receive.type':{meaning:'返回消息所属 Chatbot 的内容生产类型。',valueMeaningSource:'frontend_code',values:CHATBOT_CONTENT_TYPE_MEANINGS},
  'chatbot_message_receive.wait_time':{meaning:'从用户发起消息请求到收到本次 AI 返回结果的等待时长，单位为毫秒。'},
  'chatbot_message_receive.sort':{meaning:'当前 Chatbot 在最初进入来源列表中的排序位置；无法确定时为 null。'},
  'chatbot_message_receive.source':{meaning:'本次 AI 对话最初进入详情页的业务入口。',valueMeaningSource:'frontend_code',values:CHATBOT_ENTRY_SOURCE_MEANINGS},
  'chatbot_message_receive.is_recall':{meaning:'标记本次对话访问是否由消息召回触发；不适用时为 null。',valueMeaningSource:'frontend_code',values:{true:'由消息召回进入',false:'明确不是消息召回',null:'当前入口不适用召回判断'}},
  'chatbot_message_receive.app_id':{meaning:'与本次 AI 返回消息关联的滤镜或 App 资源长 ID；没有关联资产时为空。'},
  'chatbot_message_receive.chatbot_id':{meaning:'返回本次消息的 Chatbot 唯一 ID。'},
  'chatbot_message_receive.persona_id':{meaning:'本次返回消息所使用的人设 ID；没有独立人设时为空。'},
  'chatbot_message_receive.persona_type':{meaning:'本次返回消息所使用的人设类型；没有独立人设时为空。'},
  'chatbot_message_receive.is_success':{meaning:'标记本次 AI 消息是否成功返回。',valueMeaningSource:'frontend_code',values:{true:'消息成功返回',false:'消息返回失败'}},
  'chatbot_message_receive.from_goon':{meaning:'标记本次返回是否来自用户点击“继续说”触发的续写请求。',valueMeaningSource:'frontend_code',values:{true:'来自继续说请求',false:'来自普通消息请求'}},
  'chatbot_message_receive.bond_level':{meaning:'收到本次 AI 返回消息时，用户与该 Chatbot 的当前亲密度等级。前端固定支持 Lv.1–Lv.6。',valueMeaningSource:'frontend_code',values:CHATBOT_BOND_LEVEL_MEANINGS},

  'chatbot_message_send.type':{meaning:'用户发送消息所面向 Chatbot 的内容生产类型。',valueMeaningSource:'frontend_code',values:CHATBOT_CONTENT_TYPE_MEANINGS},
  'chatbot_message_send.sort':{meaning:'当前 Chatbot 在最初进入来源列表中的排序位置；无法确定时为 null。'},
  'chatbot_message_send.source':{meaning:'用户本次消息的发送入口或消息交互方式。',valueMeaningSource:'frontend_code',values:CHATBOT_MESSAGE_SOURCE_MEANINGS},
  'chatbot_message_send.is_recall':{meaning:'标记本次对话是否由消息召回触发；不适用时为 null。',valueMeaningSource:'frontend_code',values:{true:'由消息召回进入',false:'明确不是消息召回',null:'当前入口不适用召回判断'}},
  'chatbot_message_send.app_id':{meaning:'与本次用户消息关联的滤镜或 App 资源长 ID；没有关联资产时为空。'},
  'chatbot_message_send.chatbot_id':{meaning:'接收本次用户消息的 Chatbot 唯一 ID。'},
  'chatbot_message_send.persona_id':{meaning:'本次对话所使用的人设 ID；没有独立人设时为空。'},
  'chatbot_message_send.persona_type':{meaning:'本次对话所使用的人设类型；没有独立人设时为空。'},
  'chatbot_message_send.is_success':{meaning:'标记本次用户消息是否成功提交给 Chatbot 服务。',valueMeaningSource:'frontend_code',values:{true:'消息提交成功',false:'消息提交失败'}},
  'chatbot_message_send.is_goon':{meaning:'标记本次发送是否由用户点击“继续说”发起。',valueMeaningSource:'frontend_code',values:{true:'继续说请求',false:'普通消息请求'}},
  'chatbot_message_send.task_type':{meaning:'本次消息触发的 Chatbot 任务类型。',valueMeaningSource:'frontend_code',values:{chat:'普通文本对话',custom_image:'Chatbot 自定义图片生成'}},
  'chatbot_message_send.bond_level':{meaning:'发送本次消息时，用户与该 Chatbot 的当前亲密度等级。前端固定支持 Lv.1–Lv.6。',valueMeaningSource:'frontend_code',values:CHATBOT_BOND_LEVEL_MEANINGS},

  'chatbot_message_send_goon.app_id':{meaning:'与本次“继续说”消息关联的滤镜或 App 资源长 ID；没有关联资产时为空。'},
  'chatbot_message_send_goon.chatbot_id':{meaning:'接收本次“继续说”请求的 Chatbot 唯一 ID。'},
  'chatbot_message_send_goon.persona_id':{meaning:'本次“继续说”对话所使用的人设 ID；没有独立人设时为空。'},
  'chatbot_message_send_goon.persona_type':{meaning:'本次“继续说”对话所使用的人设类型；没有独立人设时为空。'},
  'chatbot_message_send_goon.is_success':{meaning:'标记本次“继续说”请求是否成功提交。',valueMeaningSource:'frontend_code',values:{true:'继续说请求提交成功',false:'继续说请求提交失败'}},
  'chatbot_message_send_goon.bond_level':{meaning:'发送本次“继续说”请求时，用户与该 Chatbot 的当前亲密度等级。前端固定支持 Lv.1–Lv.6。',valueMeaningSource:'frontend_code',values:CHATBOT_BOND_LEVEL_MEANINGS},

  'chatbot_send_photo_click.chatbot_id':{meaning:'用户点击对话页“发送照片”入口时，当前会话对应的 Chatbot 唯一 ID。'},
  'chatbot_send_photo_click.persona_id':{meaning:'点击“发送照片”入口时当前 Chatbot 使用的人设 ID；没有独立人设或上下文未就绪时前端上报空字符串。'},
  'chatbot_send_photo_click.persona_type':{meaning:'点击“发送照片”入口时当前 Chatbot 使用的人设类型；取值由会话接口返回，前端未声明固定枚举；没有人设类型时上报空字符串。'},

  'chatbot_send_photo_generate.chatbot_id':{meaning:'照片模板、快捷缩略图或快照生成请求实际发起时，当前会话对应的 Chatbot 唯一 ID。'},
  'chatbot_send_photo_generate.persona_id':{meaning:'本次照片生成所使用 Chatbot 人设的 ID；没有独立人设或上下文未就绪时前端上报空字符串。'},
  'chatbot_send_photo_generate.persona_type':{meaning:'本次照片生成所使用的 Chatbot 人设类型；取值由会话接口返回，前端未声明固定枚举；没有人设类型时上报空字符串。'},

  'chatbot_view_photo_click.chatbot_id':{meaning:'用户点击对话中的非快捷图片消息并发起查看或生成时，当前会话对应的 Chatbot 唯一 ID。'},
  'chatbot_view_photo_click.persona_id':{meaning:'被查看图片消息所属 Chatbot 使用的人设 ID；没有独立人设或上下文未就绪时前端上报空字符串。'},
  'chatbot_view_photo_click.persona_type':{meaning:'被查看图片消息所属 Chatbot 使用的人设类型；取值由会话接口返回，前端未声明固定枚举；没有人设类型时上报空字符串。'},
  'chatbot_view_photo_click.chatbot_type':{meaning:'被查看图片消息所属 Chatbot 的内容生产类型；上下文未就绪时实际调用可能传空字符串。',valueMeaningSource:'frontend_code',values:CHATBOT_CONTENT_TYPE_MEANINGS},
  'chatbot_view_photo_click.bond_level':{meaning:'用户点击查看 Chatbot 图片消息时，用户与该 Chatbot 的当前亲密度等级。前端固定支持 Lv.1–Lv.6。',valueMeaningSource:'frontend_code',values:CHATBOT_BOND_LEVEL_MEANINGS},

  'custom_chatbot_send_intro.chatbot_id':{meaning:'自定义 Chatbot 创建完成后检测到介绍文案并首次上报时，该新建 Chatbot 的唯一 ID。'},
  'custom_chatbot_send_opener.chatbot_id':{meaning:'自定义 Chatbot 创建完成后检测到首条机器人文本开场消息并首次上报时，该新建 Chatbot 的唯一 ID。'},

  'chatbot_image_to_video_click.location':{meaning:'用户点击图片转视频时所在的业务入口。',valueMeaningSource:'frontend_code',values:{chatbot_chat_page:'AI 对话聊天页中的图片消息',chatbot_image_result:'AI 对话图片生成结果页'}},
  'chatbot_image_to_video_click.chatbot_id':{meaning:'用户点击图片转视频时，当前会话对应的 Chatbot 唯一 ID；上下文未就绪时前端上报空字符串。'},

  'chatbot_bulb_toggle.operation':{meaning:'用户切换 AI 对话灵感快捷回复开关后的目标状态。',valueMeaningSource:'frontend_code',values:{open:'开启灵感快捷回复',close:'关闭灵感快捷回复'}},
  'chatbot_bulb_toggle.chatbot_id':{meaning:'用户切换灵感快捷回复开关时，当前会话对应的 Chatbot 唯一 ID。'},
  'chatbot_bulb_toggle.type':{meaning:'当前会话 Chatbot 的内容生产类型。',valueMeaningSource:'frontend_code',values:CHATBOT_CONTENT_TYPE_MEANINGS},

  'chatbot_custom_avatar_page_show.type':{meaning:'本次打开头像编辑页所编辑的头像对象。',valueMeaningSource:'frontend_code',values:{user_avatar:'编辑用户在当前 Chatbot 会话中的个人头像',chatbot_avatar:'编辑当前 Chatbot 的角色头像'}},
  'chatbot_custom_avatar_page_show.chatbot_id':{meaning:'头像编辑页展示时，当前正在配置的 Chatbot 唯一 ID。'},

  'chatbot_custom_avatar_save.type':{meaning:'本次成功保存的头像对象。',valueMeaningSource:'frontend_code',values:{user_avatar:'已保存用户在当前 Chatbot 会话中的个人头像或昵称',chatbot_avatar:'已保存当前 Chatbot 的角色头像或备注名称'}},
  'chatbot_custom_avatar_save.chatbot_id':{meaning:'个人资料或角色资料成功保存时，当前配置的 Chatbot 唯一 ID。'},

  'chatbot_custom_bg_auto_click.is_auto':{meaning:'用户点击自动更新背景开关后准备设置的目标状态；该字段在保存请求发起前上报，后续接口失败回滚不会改变本次值。',valueMeaningSource:'frontend_code',values:{true:'准备开启 Chatbot 背景自动更新',false:'准备关闭 Chatbot 背景自动更新'}},
  'chatbot_custom_bg_page_show.chatbot_id':{meaning:'自定义背景编辑页打开时，当前正在配置的 Chatbot 唯一 ID。'},
  'chatbot_custom_bg_set.chatbot_id':{meaning:'背景设置成功时，被更新背景的 Chatbot 唯一 ID。'},
  'chatbot_custom_bg_set.location':{meaning:'本次成功设置 Chatbot 背景的业务入口。',valueMeaningSource:'frontend_code',values:{custom_bg_page:'在 Chatbot 自定义背景编辑页选择并设置成功',result_page:'在 AI 对话图片结果页将生成图片设为背景成功'}},

  'chatbot_imagine_click.chatbot_id':{meaning:'用户点击 Imagine 入口并打开图片想象模式选择面板时，当前会话对应的 Chatbot 唯一 ID；上下文未就绪时前端上报空字符串。'},
  'chatbot_imagine_character_click.chatbot_id':{meaning:'用户在 Imagine 模式中选择仅生成 Chatbot 角色图片时，当前会话对应的 Chatbot 唯一 ID；该模式不要求用户头像。'},
  'chatbot_imagine_couple_click.chatbot_id':{meaning:'用户在 Imagine 模式中选择生成用户与 Chatbot 合照时，当前会话对应的 Chatbot 唯一 ID。'},
  'chatbot_imagine_couple_click.has_user_avatar':{meaning:'用户选择 Imagine 合照模式时，当前会话是否已经配置可用的用户头像。',valueMeaningSource:'frontend_code',values:{true:'选择时已有用户头像，可直接进入合照流程',false:'选择时没有用户头像，需要先上传照片'}},
  'chatbot_imagine_me_click.chatbot_id':{meaning:'用户在 Imagine 模式中选择生成用户本人图片时，当前会话对应的 Chatbot 唯一 ID。'},
  'chatbot_imagine_me_click.has_user_avatar':{meaning:'用户选择 Imagine“我”模式时，当前会话是否已经配置可用的用户头像。',valueMeaningSource:'frontend_code',values:{true:'选择时已有用户头像，可直接进入本人图片流程',false:'选择时没有用户头像，需要先上传照片'}},

  'chatbot_quick_reply_click.chatbot_id':{meaning:'用户选择一条可用快捷回复时，当前会话对应的 Chatbot 唯一 ID。'},
  'chatbot_quick_reply_click.type':{meaning:'提供本次快捷回复的 Chatbot 内容生产类型。',valueMeaningSource:'frontend_code',values:CHATBOT_CONTENT_TYPE_MEANINGS},
  'chatbot_quick_reply_expose.chatbot_id':{meaning:'一组非空快捷回复首次展示时，当前会话对应的 Chatbot 唯一 ID。'},
  'chatbot_quick_reply_expose.type':{meaning:'展示本组快捷回复的 Chatbot 内容生产类型。',valueMeaningSource:'frontend_code',values:CHATBOT_CONTENT_TYPE_MEANINGS},

  'chatbot_snap_click.chatbot_id':{meaning:'用户点击 Snap 入口并打开快照类型选择面板时，当前会话对应的 Chatbot 唯一 ID；上下文未就绪时前端上报空字符串。'},
  'chatbot_snap_character_click.chatbot_id':{meaning:'用户在 Snap 面板中选择生成仅包含 Chatbot 角色的快照时，当前会话对应的 Chatbot 唯一 ID；该模式不要求用户头像。'},
  'chatbot_snap_couple_click.chatbot_id':{meaning:'用户在 Snap 面板中选择生成用户与 Chatbot 合照快照时，当前会话对应的 Chatbot 唯一 ID。'},
  'chatbot_snap_couple_click.has_user_avatar':{meaning:'用户选择 Snap 合照模式时，当前会话是否已经配置可用的用户头像。',valueMeaningSource:'frontend_code',values:{true:'选择时已有用户头像，可直接发起合照快照',false:'选择时没有用户头像，需要先上传照片'}},

  'chatbot_topic_card_click.chatbot_id':{meaning:'用户点击对话专题卡片并发送卡片文案时，当前会话对应的 Chatbot 唯一 ID。'},
  'chatbot_topic_card_click.scenario':{meaning:'被点击专题卡片所属的会话阶段。',valueMeaningSource:'frontend_code',values:CHATBOT_TOPIC_SCENARIO_MEANINGS},
  'chatbot_topic_card_click.type':{meaning:'提供被点击专题卡片的 Chatbot 内容生产类型。',valueMeaningSource:'frontend_code',values:CHATBOT_CONTENT_TYPE_MEANINGS},
  'chatbot_topic_card_expose.chatbot_id':{meaning:'专题卡片列表有数据并首次展示时，当前会话对应的 Chatbot 唯一 ID。'},
  'chatbot_topic_card_expose.scenario':{meaning:'本次曝光专题卡片所属的会话阶段。',valueMeaningSource:'frontend_code',values:CHATBOT_TOPIC_SCENARIO_MEANINGS},
  'chatbot_topic_card_expose.type':{meaning:'展示专题卡片的 Chatbot 内容生产类型。',valueMeaningSource:'frontend_code',values:CHATBOT_CONTENT_TYPE_MEANINGS},

  'custom_chatbot_start_chat_click.gender':{meaning:'用户提交自定义 Chatbot 创建表单时选择的角色性别；Raw 值由数字枚举转为字符串上报。',valueMeaningSource:'frontend_code',values:CUSTOM_CHATBOT_GENDER_MEANINGS},
  'custom_chatbot_start_chat_click.relationship':{meaning:'用户为自定义 Chatbot 选择的关系身份；Raw 值由数字枚举转为字符串上报。',valueMeaningSource:'frontend_code',values:CUSTOM_CHATBOT_RELATIONSHIP_MEANINGS},
  'custom_chatbot_start_chat_click.character':{meaning:'用户为自定义 Chatbot 选择的性格组合；Raw 字段名为 character，实际取表单 personality 枚举并转为字符串上报。',valueMeaningSource:'frontend_code',values:CUSTOM_CHATBOT_CHARACTER_MEANINGS},

  'chatbot_view_result_download.chatbot_id':{meaning:'用户在 Chatbot 图片预览页点击下载时，当前会话对应的 Chatbot 唯一 ID；上下文未就绪时前端上报空字符串。'},
  'chatbot_view_result_download.location':{meaning:'本次下载结果所属的 Chatbot 图片生成来源；当前调用与 location2 上报相同值。',valueMeaningSource:'frontend_code',values:CHATBOT_RESULT_SOURCE_MEANINGS},
  'chatbot_view_result_download.location1':{meaning:'本次下载所属的一级业务场景，当前前端固定上报 chatbot。',valueMeaningSource:'frontend_code',values:{chatbot:'AI 对话图片结果下载场景'}},
  'chatbot_view_result_download.location2':{meaning:'本次下载结果的具体生成能力来源；当前调用与 location 上报相同值。',valueMeaningSource:'frontend_code',values:CHATBOT_RESULT_SOURCE_MEANINGS},
  'chatbot_view_result_download.bond_level':{meaning:'用户点击下载 Chatbot 图片结果时，用户与该 Chatbot 的当前亲密度等级；未显式传入时从亲密度状态读取。前端固定支持 Lv.1–Lv.6。',valueMeaningSource:'frontend_code',values:CHATBOT_BOND_LEVEL_MEANINGS},

  'custom_chatbot_finish.is_success':{meaning:'自定义 Chatbot 创建流程的最终结果；创建接口异常时直接上报失败，异步创建完成时按 Socket 返回结果上报。',valueMeaningSource:'frontend_code',values:{true:'Socket 返回自定义 Chatbot 创建成功',false:'创建接口异常，或 Socket 返回创建失败'}},
  'custom_chatbot_finish.gender':{meaning:'本次完成创建流程所使用的角色性别；Raw 值由数字枚举转为字符串上报。',valueMeaningSource:'frontend_code',values:CUSTOM_CHATBOT_GENDER_MEANINGS},
  'custom_chatbot_finish.relationship':{meaning:'本次完成创建流程所使用的关系身份；Raw 值由数字枚举转为字符串上报。',valueMeaningSource:'frontend_code',values:CUSTOM_CHATBOT_RELATIONSHIP_MEANINGS},
  'custom_chatbot_finish.character':{meaning:'本次完成创建流程所使用的性格组合；Raw 字段名为 character，实际来自 personality 枚举并转为字符串上报。',valueMeaningSource:'frontend_code',values:CUSTOM_CHATBOT_CHARACTER_MEANINGS},

  'credits_popup.app_id':{meaning:'触发加量包弹窗前用户最后点击的 App 资源 ID，用于归因积分购买意图。'},

  'purchase_credits_button_click.purchase_credits_type':{meaning:'用户点击购买的加量包积分档位。',valueMeaningSource:'frontend_code',values:{base3_credits:'3 积分加量包',base10_credits:'10 积分加量包',base30_credits:'30 积分加量包',unknown_credits:'SKU 未匹配已知积分档位'}},
  'purchase_credits_button_click.tag_id':{meaning:'触发加量包购买时当前内容标签 ID。'},
  'purchase_credits_button_click.location':{meaning:'触发加量包购买的具体付费业务场景，取 PaymentLocation。'},
  'purchase_credits_button_click.short_id':{meaning:'触发加量包购买的 App 或内容短 ID。'},
  'purchase_credits_button_click.user_scene':{meaning:'触发加量包购买的 App 用户业务场景。',valueMeaningSource:'frontend_code',values:USER_SCENE_MEANINGS},
  'purchase_credits_button_click.ability_name':{meaning:'触发加量包购买的 App 或功能所属原子能力。',valueMeaningSource:'frontend_code',values:GENERATE_ABILITY_MEANINGS},
  'purchase_credits_button_click.entry_point':{meaning:'触发加量包购买的内容展示入口。',valueMeaningSource:'frontend_code',values:GENERATE_ENTRY_POINT_MEANINGS},
  'purchase_credits_button_click.get_googleplay_info':{meaning:'点击购买时是否已获取 Google Play 一次性商品信息。',valueMeaningSource:'frontend_code',values:{true:'已获取 Google Play 商品信息',false:'尚未获取 Google Play 商品信息'}},

  'login_popup.location':{meaning:'登录弹窗被打开时的业务触发入口，直接取 requireLogin/handleNotLogin 传入的 reason。',valueMeaningSource:'frontend_code',values:LOGIN_POPUP_LOCATION_MEANINGS}
};

const USER_PLATFORM_REVIEW_PACKS=[
  globalThis.UserPlatformAccountCommunityReviewData,
  globalThis.UserPlatformSystemReviewData
].filter(Boolean);
const assignUserPlatformFieldSemantics=target=>USER_PLATFORM_REVIEW_PACKS.forEach(reviewPack=>{
  Object.entries({
    ...(reviewPack.fieldSemantics||{}),
    ...(reviewPack.definitionOnlyFieldSemantics||{})
  }).forEach(([qualifiedName,semantic])=>{
    const separator=qualifiedName.indexOf('.');
    const action=qualifiedName.slice(0,separator);
    const rawName=qualifiedName.slice(separator+1);
    const normalizedRawName=rawName.replace(/[^a-zA-Z0-9_]/g,'').toLowerCase();
    target[qualifiedName]=semantic;
    target[`${action}.${rawName.toLowerCase()}`]=semantic;
    target[`${action}.${normalizedRawName}`]=semantic;
  });
});
assignUserPlatformFieldSemantics(REVIEWED_FIELD_SEMANTICS);
const USER_PLATFORM_WIRE_CORRECTIONS=Object.assign(
  {},
  ...USER_PLATFORM_REVIEW_PACKS.map(reviewPack=>reviewPack.wireCorrections||{})
);
const USER_PLATFORM_SOURCE_EVIDENCE=Object.assign(
  {},
  ...USER_PLATFORM_REVIEW_PACKS.map(reviewPack=>({
    ...(reviewPack.sourceEvidence||{}),
    ...(reviewPack.definitionOnlySourceEvidence||{})
  }))
);

const verifiedField=(wireRef,type,required,enumValues=[],description='前端代码已核实的最终上报字段')=>Object.freeze({
  wireRef,
  name:wireRef,
  type,
  required,
  nullable:false,
  enum:Object.freeze([...enumValues]),
  description
});
const verifiedContractField=(nameRaw,typeObserved,requiredObserved,declaredRequiredObserved=requiredObserved)=>Object.freeze({
  nameRaw,
  typeObserved,
  requiredObserved,
  nullableObserved:false,
  ...(declaredRequiredObserved===requiredObserved?{}:{declaredRequiredObserved})
});

const VERIFIED_WIRE_CONTRACT_CORRECTIONS=Object.freeze({
  ...USER_PLATFORM_WIRE_CORRECTIONS,
  image_change_click:Object.freeze({migrationStrategy:'keep'}),
  choose_filter_show:Object.freeze({migrationStrategy:'keep'}),
  creator_center_publishfirstfilter_click:Object.freeze({migrationStrategy:'keep'}),
  creator_center_remixguide_click:Object.freeze({migrationStrategy:'keep'}),
  faceswap_tag_click:Object.freeze({migrationStrategy:'keep'}),
  filter_more_click:Object.freeze({migrationStrategy:'keep'}),
  image_input_view:Object.freeze({migrationStrategy:'keep'}),
  generate_intention:Object.freeze({
    migrationStrategy:'keep',
    contractFields:Object.freeze({action:Object.freeze([
      verifiedContractField('app_id','string',false),
      verifiedContractField('ability_name','string',true),
      verifiedContractField('object_type','string',true),
      verifiedContractField('search_method','string',false),
      verifiedContractField('user_scene','string',false),
      verifiedContractField('chatbot_id','string',false),
      verifiedContractField('resolution','string',false),
      verifiedContractField('post_id','string',false),
      verifiedContractField('credit','number',false),
      verifiedContractField('multiple','number',false),
      verifiedContractField('generate_location','string',true),
      verifiedContractField('origin','string',true),
      verifiedContractField('tag_id','string',false),
      verifiedContractField('entry_point','string',false),
      verifiedContractField('sort','number',false),
      verifiedContractField('commend_label','string',false),
      verifiedContractField('type','string',false),
      verifiedContractField('location1','string',false),
      verifiedContractField('location2','string',false)
    ])}),
    fields:Object.freeze([
      verifiedField('ability_name','string',true,Object.keys(GENERATION_TYPED_ABILITY_MEANINGS)),
      verifiedField('object_type','string',true,Object.keys(GENERATION_OBJECT_TYPE_MEANINGS)),
      verifiedField('search_method','string',false,Object.keys(GENERATION_SEARCH_METHOD_MEANINGS)),
      verifiedField('user_scene','string',false,Object.keys(USER_SCENE_TYPE_MEANINGS)),
      verifiedField('credit','number',false,[]),
      verifiedField('multiple','number',false,[]),
      verifiedField('generate_location','string',true,['create','recreate']),
      verifiedField('tag_id','string',false,[]),
      verifiedField('entry_point','string',false,Object.keys(GENERATION_ENTRY_POINT_MEANINGS))
    ])
  }),
  generate_button_click:Object.freeze({
    migrationStrategy:'keep',
    contractVariantsReviewed:true,
    internalInputFields:Object.freeze(['appId','LSKType','appid','bility_name','entry_point（新增）','source','plan','firstenterurl','referrerurl','origin（新）9.14上线']),
    outputFields:Object.freeze([
      Object.freeze({name:'search_content',type:'string',required:false,nullable:false,description:'搜索场景使用的动态搜索词。',definitions:Object.freeze([{file:'packages/shared/handler/event/impl/exposure.ts',line:160,column:3,namespace:'action',event:'generate_button_click',kind:'verifiedWireOutput'}])}),
      Object.freeze({name:'search_id',type:'string',required:false,nullable:false,description:'搜索场景对应的动态搜索记录 ID。',definitions:Object.freeze([{file:'packages/shared/handler/event/impl/exposure.ts',line:160,column:3,namespace:'action',event:'generate_button_click',kind:'verifiedWireOutput'}])}),
      Object.freeze({name:'topicId',type:'string',required:false,nullable:false,description:'部分 typed 路径额外发送的话题 ID。',definitions:Object.freeze([{file:'src/mobile/hooks/useHandelGenerate.ts',line:132,column:3,namespace:'action',event:'generate_button_click',kind:'verifiedWireOutput'}])}),
      Object.freeze({name:'postId',type:'string',required:false,nullable:false,description:'部分 typed 路径额外发送的作品 ID。',definitions:Object.freeze([{file:'src/mobile/hooks/useHandelGenerate.ts',line:433,column:3,namespace:'action',event:'generate_button_click',kind:'verifiedWireOutput'}])}),
      Object.freeze({name:'gallery_id',type:'string',required:false,nullable:false,description:'legacy App Gallery 路径发送的动态 Gallery ID。',definitions:Object.freeze([{file:'packages/shared/utils/event/newDataWareHose/index.ts',line:238,column:3,namespace:'legacy',event:'generate_button_click',kind:'verifiedWireOutput'}])})
    ]),
    contractFields:Object.freeze({
      action:Object.freeze([
        verifiedContractField('generate_location','string',true),verifiedContractField('short_id','string',true),verifiedContractField('app_id','string',true),verifiedContractField('post_id','string',false),verifiedContractField('origin','string',true),verifiedContractField('location','string',false),verifiedContractField('location1','string',false),verifiedContractField('location2','string',false),verifiedContractField('tag_id','string',false),verifiedContractField('topic_id','string',false),verifiedContractField('galleryId','string',false),verifiedContractField('ability_name','string',true),verifiedContractField('object_type','string',true),verifiedContractField('search_method','string',false),verifiedContractField('button_type','string',true),verifiedContractField('user_scene','string',false),verifiedContractField('image_type','string',false),verifiedContractField('entry_point','string',false),verifiedContractField('is_slide_view','string',false),verifiedContractField('first_view','boolean',false),verifiedContractField('sort','number',false),verifiedContractField('trace_info','string',true),verifiedContractField('type','string',false),verifiedContractField('resolution','string',false),verifiedContractField('commend_label','string',false),verifiedContractField('app_source','string',false),verifiedContractField('chatbot_id','string',false),verifiedContractField('credit','number',false),verifiedContractField('multiple','number',false),verifiedContractField('bond_level','number',false),verifiedContractField('scenario','string',false),verifiedContractField('search_content','string',false),verifiedContractField('search_id','string',false),verifiedContractField('topicId','string',false),verifiedContractField('postId','string',false)
      ]),
      legacy:Object.freeze([
        verifiedContractField('generateid','string',true),verifiedContractField('origin','string',true),verifiedContractField('type','string',true),verifiedContractField('ability_name','string',true),verifiedContractField('current_tab','string',true),verifiedContractField('app_id','string',true),verifiedContractField('image_id','string',true),verifiedContractField('tag_name','string',true),verifiedContractField('tag_id','string',true),verifiedContractField('type_2','string',true),verifiedContractField('user_scene','string',true),verifiedContractField('trace_info','string',true),verifiedContractField('search_content','string',false),verifiedContractField('search_id','string',false),verifiedContractField('search_method','string',false),verifiedContractField('gallery_id','string',false)
      ])
    }),
    coPresentFieldGroups:Object.freeze({
      action:Object.freeze([Object.freeze({fields:Object.freeze(['search_content','search_id','search_method']),description:'typed 搜索场景三个搜索字段同时发送'})]),
      legacy:Object.freeze([Object.freeze({fields:Object.freeze(['search_content','search_id','search_method']),description:'legacy 搜索场景三个搜索字段同时发送'})])
    }),
    fields:Object.freeze([
      verifiedField('generate_location','string',false,['create','recreate']),verifiedField('short_id','string',false,[]),verifiedField('app_id','string',true,[]),verifiedField('post_id','string',false,[]),verifiedField('origin','string',true,[]),verifiedField('location','string',false,[]),verifiedField('location1','string',false,[]),verifiedField('location2','string',false,[]),verifiedField('tag_id','string',false,[]),verifiedField('topic_id','string',false,[]),verifiedField('galleryId','string',false,[]),verifiedField('ability_name','string',true,[]),verifiedField('object_type','string',false,Object.keys(GENERATION_OBJECT_TYPE_MEANINGS)),verifiedField('search_method','string',false,Object.keys(GENERATION_SEARCH_METHOD_MEANINGS)),verifiedField('button_type','string',false,Object.keys(GENERATE_BUTTON_TYPE_MEANINGS)),verifiedField('user_scene','string',false,[]),verifiedField('image_type','string',false,[]),verifiedField('entry_point','string',false,Object.keys(GENERATION_ENTRY_POINT_MEANINGS)),verifiedField('is_slide_view','string',false,[]),verifiedField('first_view','boolean',false,[true,false]),verifiedField('sort','number',false,[]),verifiedField('trace_info','string',true,[]),verifiedField('type','string',false,Object.keys(GENERATE_BUTTON_LEGACY_TYPE_MEANINGS)),verifiedField('resolution','string',false,['SD','HD','FHD']),verifiedField('commend_label','string',false,[]),verifiedField('app_source','string',false,[]),verifiedField('chatbot_id','string',false,[]),verifiedField('credit','number',false,[]),verifiedField('multiple','number',false,[]),verifiedField('bond_level','number',false,[1,2,3,4,5,6]),verifiedField('scenario','string',false,[]),verifiedField('search_content','string',false,[]),verifiedField('search_id','string',false,[]),verifiedField('topicId','string',false,[]),verifiedField('postId','string',false,[]),verifiedField('generateid','string',false,[]),verifiedField('current_tab','string',false,[]),verifiedField('image_id','string',false,[]),verifiedField('tag_name','string',false,[]),verifiedField('type_2','string',false,['vip_image','image','vip_app','app','none']),verifiedField('gallery_id','string',false,[])
    ])
  }),
  generate_success:Object.freeze({
    migrationStrategy:'keep',
    internalInputFields:Object.freeze(['generate_time增加生成完成时间','generate_wait_time增加生成展示时间（给用户展示的生成时间）','generateid','type']),
    fields:Object.freeze([
      verifiedField('short_id','string',true,[]),verifiedField('app_id','string',true,[]),verifiedField('ability_name','string',true,Object.keys(GENERATE_SUCCESS_ABILITY_MEANINGS)),verifiedField('user_scene','string',false,Object.keys(USER_SCENE_TYPE_MEANINGS)),verifiedField('object_type','string',true,Object.keys(GENERATION_OBJECT_TYPE_MEANINGS)),verifiedField('image_type','string',false,[]),verifiedField('entry_point','string',true,Object.keys(GENERATE_SUCCESS_ENTRY_POINT_MEANINGS)),verifiedField('resolution_detail','string',false,['SD','HD','FHD']),verifiedField('credit','number',false,[]),verifiedField('multiple','number',false,[]),verifiedField('location','string',false,[]),verifiedField('chatbot_id','string',false,[])
    ])
  }),
  generate_failure:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([
      verifiedField('failure_reason','string',true,[]),verifiedField('ability_name','string',false,[]),verifiedField('object_type','string',false,Object.keys(GENERATION_OBJECT_TYPE_MEANINGS)),verifiedField('resolution_detail','string',false,['SD','HD','FHD'])
    ])
  }),
  remix_click:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([
      verifiedField('is_vip','boolean',true,[true,false]),verifiedField('vip_type','string',true,[]),verifiedField('filter_level','number',true,[1,2,3]),verifiedField('user_level','number',true,[1,2,3,4]),verifiedField('origin','string',true,Object.keys(REMIX_ENTRY_ORIGIN_MEANINGS))
    ])
  }),
  remix_begin_click:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([
      verifiedField('is_vip','boolean',true,[true,false]),verifiedField('vip_type','string',true,Object.keys(REMIX_VIP_TYPE_MEANINGS)),verifiedField('user_level','number',true,[1,2,3,4]),verifiedField('filter_level','number',true,[1,2,3])
    ])
  }),
  remix_guide_close_click:Object.freeze({migrationStrategy:'keep'}),
  app_lock_reason:Object.freeze({migrationStrategy:'keep'}),
  create_click:Object.freeze({migrationStrategy:'keep'}),
  create_pop_publish_click:Object.freeze({migrationStrategy:'keep'}),
  create_same_button_click:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([verifiedField('location','string',true,Object.keys(CREATE_SAME_LOCATION_MEANINGS))])
  }),
  function_click:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([verifiedField('ability_name','string',true,Object.keys(STUDIO_FUNCTION_CLICK_ABILITY_MEANINGS))])
  }),
  generate_minimize_click:Object.freeze({
    migrationStrategy:'keep',
    contractFields:Object.freeze({action:Object.freeze([
      verifiedContractField('app_id','string',true),
      verifiedContractField('generate_location','string',true),
      verifiedContractField('origin','string',true),
      verifiedContractField('object_type','string',true,false),
      verifiedContractField('ability_name','string',true,false),
      verifiedContractField('template_video_id','string',false)
    ])}),
    fields:Object.freeze([
      verifiedField('app_id','string',true,[]),verifiedField('generate_location','string',true,Object.keys(GENERATE_LOCATION_MEANINGS)),verifiedField('object_type','string',true,['image','video']),verifiedField('ability_name','string',true,[])
    ])
  }),
  generate_pop_close:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([verifiedField('filter_level','number',true,[1,2,3])])
  }),
  others_filters_customize_generate:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([verifiedField('user_scene','string',true,Object.keys(USER_SCENE_TYPE_MEANINGS))])
  }),
  remix_guide_click:Object.freeze({migrationStrategy:'keep'}),
  remix_guide_notnow_click:Object.freeze({migrationStrategy:'keep'}),
  remix_guide_start_click:Object.freeze({migrationStrategy:'keep'}),
  remix_notnow_click:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([verifiedField('user_level','number',true,[1,2,3,4]),verifiedField('filter_level','number',true,[1,2,3])])
  }),
  studio_generatevideo_app_click:Object.freeze({migrationStrategy:'keep'}),
  submit_button_click:Object.freeze({migrationStrategy:'keep'}),
  submit_filter:Object.freeze({migrationStrategy:'keep',businessFieldOverrides:Object.freeze(['user_id'])}),
  submit_filter_disabled_click:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([verifiedField('type','string',true,['Unchecked'])])
  }),
  try_click:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([verifiedField('filter_level','number',true,[1,2,3])])
  }),
  try_now_button_click:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([verifiedField('ability_name','string',true,[])])
  }),
  tryyourfilter_click:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([verifiedField('filter_level','number',true,[1,2,3])])
  }),
  video_function_click:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([verifiedField('user_scene','string',false,Object.keys(USER_SCENE_TYPE_MEANINGS)),verifiedField('ability_name','string',false,[])])
  }),
  video_generator_click:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([verifiedField('toggle_state','boolean',true,[true,false]),verifiedField('filter_level','number',true,[1,2,3])])
  }),
  build_click:Object.freeze({
    migrationStrategy:'keep',
    contractFields:Object.freeze({legacy:Object.freeze([
      verifiedContractField('is_vip','boolean',true,false)
    ])}),
    fields:Object.freeze([verifiedField('is_vip','boolean',true,[true,false])])
  }),
  fork_app:Object.freeze({
    migrationStrategy:'keep',
    contractFields:Object.freeze({legacy:Object.freeze([
      verifiedContractField('appid','string',true,false),
      verifiedContractField('app_id','string',true,false),
      verifiedContractField('is_vip','boolean',true,false),
      verifiedContractField('origin','string',true,false)
    ])}),
    fields:Object.freeze([verifiedField('appid','string',true,[]),verifiedField('app_id','string',true,[]),verifiedField('is_vip','boolean',true,[true,false]),verifiedField('origin','string',true,['detail_page','creation_popup'])])
  }),
  new_feature_confirm:Object.freeze({
    migrationStrategy:'keep',
    contractFields:Object.freeze({legacy:Object.freeze([
      verifiedContractField('origin','string',true,false)
    ])}),
    fields:Object.freeze([verifiedField('origin','string',true,['build_upgrade_modal'])])
  }),
  enhancement:Object.freeze({
    migrationStrategy:'keep',
    contractFields:Object.freeze({action:Object.freeze([
      verifiedContractField('current_tab','string',true),
      verifiedContractField('user_scene','string',false),
      verifiedContractField('ability_name','string',false),
      verifiedContractField('location2','string',true,false),
      verifiedContractField('trace_info','string',true,false)
    ])}),
    fields:Object.freeze([
      verifiedField('current_tab','string',true,Object.keys(ENHANCEMENT_CURRENT_TAB_MEANINGS)),verifiedField('user_scene','string',false,Object.keys(USER_SCENE_TYPE_MEANINGS)),verifiedField('ability_name','string',false,[]),verifiedField('location2','string',true,['task']),verifiedField('trace_info','string',true,[])
    ])
  }),
  back_click:Object.freeze({migrationStrategy:'keep'}),
  back_pop_cancel_click:Object.freeze({migrationStrategy:'keep'}),
  back_pop_stillleave_click:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([verifiedField('is_generating','boolean',true,[true,false])])
  }),
  backtoedit_click:Object.freeze({migrationStrategy:'keep'}),
  backtotry_click:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([verifiedField('filter_level','number',true,[1,2,3])])
  }),
  create_pop_backtoedit_click:Object.freeze({migrationStrategy:'keep'}),
  create_translate_click:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([verifiedField('is_edit','boolean',true,[true,false]),verifiedField('filter_level','number',true,[1,2,3])])
  }),
  cut_function_click:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([verifiedField('user_scene','string',true,Object.keys(USER_SCENE_TYPE_MEANINGS))])
  }),
  cut_page_finish:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([verifiedField('user_scene','string',true,Object.keys(USER_SCENE_TYPE_MEANINGS))])
  }),
  publish_pop_name_edit:Object.freeze({migrationStrategy:'keep'}),
  remix_t2i_textbox_click:Object.freeze({migrationStrategy:'keep'}),
  reset_button_click:Object.freeze({migrationStrategy:'keep'}),
  text_edit_page_finish:Object.freeze({
    migrationStrategy:'keep',
    businessFieldOverrides:Object.freeze(['source']),
    fields:Object.freeze([verifiedField('user_scene','string',true,Object.keys(USER_SCENE_TYPE_MEANINGS))])
  }),
  text_function_click:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([verifiedField('user_scene','string',true,Object.keys(USER_SCENE_TYPE_MEANINGS))])
  }),
  cutout_function_click:Object.freeze({
    migrationStrategy:'keep',
    contractFields:Object.freeze({action:Object.freeze([
      verifiedContractField('user_scene','string',false),
      verifiedContractField('ability_name','string',false),
      verifiedContractField('location2','string',true,false),
      verifiedContractField('trace_info','string',true,false)
    ])}),
    fields:Object.freeze([verifiedField('user_scene','string',false,Object.keys(USER_SCENE_TYPE_MEANINGS)),verifiedField('ability_name','string',false,[]),verifiedField('location2','string',true,['task']),verifiedField('trace_info','string',true,[])])
  }),
  describe_edit_click:Object.freeze({migrationStrategy:'keep'}),
  describe_pop_change_close:Object.freeze({migrationStrategy:'keep'}),
  describe_pop_direct_close:Object.freeze({migrationStrategy:'keep'}),
  describe_pop_close:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([verifiedField('filter_level','number',true,[1,2,3])])
  }),
  describe_pop_finish:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([verifiedField('filter_level','number',true,[1,2,3])])
  }),
  edit_page_visit:Object.freeze({
    migrationStrategy:'keep',
    contractFields:Object.freeze({action:Object.freeze([
      verifiedContractField('ability_name','string',true,false)
    ])}),
    fields:Object.freeze([verifiedField('ability_name','string',true,['SIMPLE_GENERATE_VIDEO'])])
  }),
  enhancement_success:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([verifiedField('current_tab','string',true,Object.keys(ENHANCEMENT_SUCCESS_CURRENT_TAB_MEANINGS))])
  }),
  faceswap_sortmode_switch:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([verifiedField('sort_mode','string',true,Object.keys(FACESWAP_SORT_MODE_MEANINGS)),verifiedField('tag_id','string',true,[]),verifiedField('tag_name','string',true,[])])
  }),
  prompt_random_click:Object.freeze({migrationStrategy:'keep'}),
  video_describe_close:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([
      verifiedField('app_id','string',true,[]),verifiedField('short_id','string',true,[]),verifiedField('filter_level','number',true,[1,2,3]),verifiedField('is_edit','string',true,['after_edit_close','direct_close']),verifiedField('close_type','string',true,['finish_click','close_button_click','blank_area_click'])
    ])
  }),
  video_describe_edit_click:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([verifiedField('app_id','string',true,[]),verifiedField('short_id','string',true,[]),verifiedField('filter_level','number',true,[1,2,3])])
  }),
  video_describe_show:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([verifiedField('app_id','string',true,[]),verifiedField('short_id','string',true,[]),verifiedField('filter_level','number',true,[1,2,3]),verifiedField('show_type','string',true,['open_video_show','edit_click_show'])])
  }),
  video_resolution_click:Object.freeze({
    migrationStrategy:'keep',
    contractFields:Object.freeze({action:Object.freeze([
      verifiedContractField('ability_name','string',true,false),
      verifiedContractField('entry_point','string',true,false),
      verifiedContractField('location1','string',true,false),
      verifiedContractField('location2','string',true,false)
    ])}),
    fields:Object.freeze([verifiedField('ability_name','string',true,Object.keys(ABILITY_NAME_TRACK_MEANINGS)),verifiedField('entry_point','string',true,Object.keys(GENERATION_ENTRY_POINT_MEANINGS)),verifiedField('location1','string',true,[]),verifiedField('location2','string',true,[])])
  }),
  video_resolution_submit:Object.freeze({
    migrationStrategy:'keep',
    contractFields:Object.freeze({action:Object.freeze([
      verifiedContractField('ability_name','string',true,false),
      verifiedContractField('resolution_detail','string',true,false),
      verifiedContractField('entry_point','string',true,false),
      verifiedContractField('location1','string',true,false),
      verifiedContractField('location2','string',true,false)
    ])}),
    fields:Object.freeze([verifiedField('ability_name','string',true,Object.keys(ABILITY_NAME_TRACK_MEANINGS)),verifiedField('resolution_detail','string',true,['SD','HD','FHD']),verifiedField('entry_point','string',true,Object.keys(GENERATION_ENTRY_POINT_MEANINGS)),verifiedField('location1','string',true,[]),verifiedField('location2','string',true,[])])
  }),
  cut_page_show:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([verifiedField('user_scene','string',true,Object.keys(USER_SCENE_TYPE_MEANINGS))])
  }),
  emoji_add_text_click:Object.freeze({
    migrationStrategy:'keep',
    businessFieldOverrides:Object.freeze(['source']),
    fields:Object.freeze([verifiedField('source','string',true,Object.keys(TEXT_EDIT_SOURCE_MEANINGS))])
  }),
  emoji_edit_page_done:Object.freeze({
    migrationStrategy:'keep',
    businessFieldOverrides:Object.freeze(['source']),
    fields:Object.freeze([verifiedField('source','string',true,Object.keys(TEXT_EDIT_SOURCE_MEANINGS))])
  }),
  text_edit_page_show:Object.freeze({
    migrationStrategy:'keep',
    businessFieldOverrides:Object.freeze(['source']),
    fields:Object.freeze([verifiedField('source','string',true,Object.keys(TEXT_EDIT_SOURCE_MEANINGS)),verifiedField('user_scene','string',true,Object.keys(USER_SCENE_TYPE_MEANINGS))])
  }),
  app_edit_click:Object.freeze({
    migrationStrategy:'keep',
    contractFields:Object.freeze({legacy:Object.freeze([verifiedContractField('appid','string',true),verifiedContractField('app_id','string',true)])}),
    fields:Object.freeze([verifiedField('appid','string',true,[]),verifiedField('app_id','string',true,[])])
  }),
  optimize:Object.freeze({
    migrationStrategy:'keep',
    contractFields:Object.freeze({legacy:Object.freeze([verifiedContractField('image_id','string',true),verifiedContractField('pictureid','string',true),verifiedContractField('origin','string',false),verifiedContractField('app_id','string',false)])}),
    fields:Object.freeze([verifiedField('image_id','string',true,[]),verifiedField('pictureid','string',true,[]),verifiedField('origin','string',false,Object.keys(OPTIMIZE_ORIGIN_MEANINGS)),verifiedField('app_id','string',false,[])])
  }),
  optimize_success:Object.freeze({
    migrationStrategy:'keep',
    internalInputFields:Object.freeze(['imgId']),
    contractFields:Object.freeze({legacy:Object.freeze([verifiedContractField('pictureid','string',true),verifiedContractField('image_id','string',true),verifiedContractField('sourceId','string',true)])}),
    fields:Object.freeze([verifiedField('pictureid','string',true,[]),verifiedField('image_id','string',true,[]),verifiedField('sourceId','string',true,[])])
  }),
  tasklist_entrance_click:Object.freeze({
    migrationStrategy:'keep',
    contractFields:Object.freeze({legacy:Object.freeze([verifiedContractField('state','string',true)])}),
    fields:Object.freeze([verifiedField('state','string',true,['1','-1'])])
  }),
  result_show:Object.freeze({
    migrationStrategy:'keep',
    internalInputFields:Object.freeze(['generate_time增加生成完成时间','generate_wait_time增加生成展示时间（给用户展示的生成时间）']),
    fields:Object.freeze([
      verifiedField('imgIds','array',true,[]),verifiedField('image_id','string',true,[]),verifiedField('short_id','string',true,[]),verifiedField('app_id','string',true,[]),verifiedField('location1','string',false,[]),verifiedField('location2','string',false,[]),verifiedField('generate_location','string',true,['create','recreate','']),verifiedField('tag_id','string',true,[]),verifiedField('generate_time','number',true,[]),verifiedField('generate_wait_time','number',true,[]),verifiedField('gallery_id','string',false,[]),verifiedField('origin','string',true,Object.keys(GENERATE_ORIGIN_MEANINGS)),verifiedField('ability_name','string',true,[]),verifiedField('user_scene','string',false,[]),verifiedField('entry_point','string',true,Object.keys(RESULT_SHOW_ENTRY_POINT_MEANINGS))
    ])
  }),
  result_download:Object.freeze({
    migrationStrategy:'keep',
    outputFields:Object.freeze([
      Object.freeze({name:'task_id',type:'string',required:false,nullable:false,description:'被下载结果所属的动态生成任务或追踪 ID。',definitions:Object.freeze([{file:'src/mobile/handler/image.ts',line:253,column:3,namespace:'bigData',event:'result_download',kind:'verifiedWireOutput'}])})
    ]),
    contractFields:Object.freeze({bigData:Object.freeze([
      verifiedContractField('type','string',true),verifiedContractField('image_id','string',true),verifiedContractField('post_id','string',false),verifiedContractField('tag_id','string',false),verifiedContractField('app_id','string',false),verifiedContractField('is_with_watermark','boolean',true),verifiedContractField('origin','string',false),verifiedContractField('ability_name','string',true),verifiedContractField('user_scene','string',false),verifiedContractField('location','string',false),verifiedContractField('trace_info','string',false),verifiedContractField('location1','string',false),verifiedContractField('location2','string',false),verifiedContractField('chatbot_id','string',false),verifiedContractField('task_id','string',false)
    ])}),
    fields:Object.freeze([
      verifiedField('type','string',true,['video','image']),verifiedField('image_id','string',true,[]),verifiedField('post_id','string',false,[]),verifiedField('tag_id','string',false,[]),verifiedField('app_id','string',false,[]),verifiedField('is_with_watermark','boolean',true,[true,false]),verifiedField('origin','string',false,[]),verifiedField('ability_name','string',true,[]),verifiedField('user_scene','string',false,[]),verifiedField('location','string',false,[]),verifiedField('trace_info','string',false,[]),verifiedField('location1','string',false,[]),verifiedField('location2','string',false,[]),verifiedField('chatbot_id','string',false,[]),verifiedField('task_id','string',false,[])
    ])
  }),
  image_delete_click:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([verifiedField('image_type','string',true,Object.keys(IMAGE_DELETE_TYPE_MEANINGS)),verifiedField('location','string',true,Object.keys(IMAGE_DELETE_LOCATION_MEANINGS))])
  }),
  image_delete_success:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([verifiedField('image_type','string',true,Object.keys(IMAGE_DELETE_TYPE_MEANINGS)),verifiedField('location','string',true,Object.keys(IMAGE_DELETE_LOCATION_MEANINGS))])
  }),
  generate_video_result_check:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([verifiedField('task_id','string',true,[])])
  }),
  generate_video_result_show:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([verifiedField('app_id','string',true,[])])
  }),
  history_click:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([verifiedField('origin','string',true,Object.keys(HISTORY_CLICK_ORIGIN_MEANINGS)),verifiedField('method','string',true,Object.keys(HISTORY_CLICK_METHOD_MEANINGS))])
  }),
  image_delete_enter:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([verifiedField('image_type','string',true,Object.keys(IMAGE_DELETE_TYPE_MEANINGS)),verifiedField('location','string',true,Object.keys(IMAGE_DELETE_LOCATION_MEANINGS))])
  }),
  image_download:Object.freeze({
    migrationStrategy:'keep',
    contractVariantsReviewed:true,
    contractFields:Object.freeze({
      action:Object.freeze([
        verifiedContractField('location','string',false),verifiedContractField('image_id','mixed',true),verifiedContractField('post_id','string',false),verifiedContractField('tag_id','string',false),verifiedContractField('app_id','string',false),verifiedContractField('is_with_watermark','boolean',true),verifiedContractField('origin','string',false),verifiedContractField('ability_name','string',false),verifiedContractField('user_scene','string',false)
      ]),
      legacy:Object.freeze([
        verifiedContractField('image_id','string',true),verifiedContractField('pic_id','string',true),verifiedContractField('origin','string',true),verifiedContractField('app_id','string',true),verifiedContractField('is_ai_video','number',false)
      ])
    }),
    fields:Object.freeze([
      verifiedField('location','string',false,Object.keys(RESULT_DOWNLOAD_LOCATION_OBSERVED_MEANINGS)),verifiedField('image_id','mixed',true,[]),verifiedField('post_id','string',false,[]),verifiedField('tag_id','string',false,[]),verifiedField('app_id','string',false,[]),verifiedField('is_with_watermark','boolean',false,[true,false]),verifiedField('origin','string',false,[]),verifiedField('ability_name','string',false,[]),verifiedField('user_scene','string',false,[]),verifiedField('pic_id','string',false,[]),verifiedField('is_ai_video','number',false,[1])
    ])
  }),
  add_whatsapp_button_click:Object.freeze({
    migrationStrategy:'keep',
    businessFieldOverrides:Object.freeze(['source']),
    fields:Object.freeze([verifiedField('source','string',true,Object.keys(TEXT_EDIT_SOURCE_MEANINGS))])
  }),
  add_whatsapp_result:Object.freeze({
    migrationStrategy:'keep',
    businessFieldOverrides:Object.freeze(['source']),
    fields:Object.freeze([verifiedField('source','string',true,Object.keys(TEXT_EDIT_SOURCE_MEANINGS)),verifiedField('is_success','boolean',true,[true,false])])
  }),
  app_publish_success:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([
      verifiedField('appid','string',true,[]),verifiedField('app_id','string',true,[]),verifiedField('app_type','string',true,Object.keys(APP_PUBLISH_TYPE_MEANINGS)),verifiedField('app_result','string',true,Object.keys(APP_PUBLISH_RESULT_MEANINGS)),verifiedField('publish_time','string',true,[]),verifiedField('is_first','boolean',true,[true,false]),verifiedField('is_publish_as_post','boolean',true,[true,false]),verifiedField('build_from','string',true,Object.keys(APP_PUBLISH_BUILD_FROM_MEANINGS)),verifiedField('filter_level','number',false,[1,2,3]),verifiedField('user_level','number',false,[1,2,3,4]),verifiedField('is_ai_video','number',false,[1]),verifiedField('is_vip','boolean',true,[true,false]),verifiedField('generate_success_count','number',true,[]),verifiedField('freetrial_consume','number',false,[]),verifiedField('points_consume','number',false,[]),verifiedField('fork_from_id','string',false,[]),verifiedField('is_firstpublish','boolean',true,[true,false]),verifiedField('cover_resolution','string',false,['SD','HD','FHD']),verifiedField('origin','string',false,Object.keys(REMIX_ENTRY_ORIGIN_MEANINGS)),verifiedField('filter_permission_status','string',false,Object.keys(FILTER_PERMISSION_STATUS_MEANINGS))
    ])
  }),
  award_announcement_click:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([verifiedField('type','string',true,Object.keys(AWARD_ANNOUNCEMENT_TYPE_MEANINGS))])
  }),
  generate_picture_expose:Object.freeze({
    migrationStrategy:'keep',
    contractFields:Object.freeze({action:Object.freeze([verifiedContractField('scenario','string',false),verifiedContractField('location1','string',true),verifiedContractField('location2','string',true)])}),
    fields:Object.freeze([verifiedField('scenario','string',false,Object.keys(CHATBOT_FIRST_SCENARIO_MEANINGS)),verifiedField('location1','string',true,['chatbot']),verifiedField('location2','string',true,['chatbot_view_message'])])
  }),
  result_pop_show:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([verifiedField('app_id','string',true,[]),verifiedField('appid','string',true,[]),verifiedField('filter_level','number',true,[1,2,3]),verifiedField('origin','string',true,Object.keys(RESULT_POP_SHOW_ORIGIN_MEANINGS))])
  }),
  screen_print:Object.freeze({
    migrationStrategy:'keep',
    contractFields:Object.freeze({action:Object.freeze([
      verifiedContractField('imgIds','array',true),verifiedContractField('short_id','string',true),verifiedContractField('app_id','string',true),verifiedContractField('location1','string',false),verifiedContractField('location2','string',false),verifiedContractField('generate_location','string',true),verifiedContractField('tag_id','string',true),verifiedContractField('generate_time','mixed',true),verifiedContractField('generate_wait_time','number',true),verifiedContractField('gallery_id','string',false),verifiedContractField('origin','string',true),verifiedContractField('ability_name','string',true),verifiedContractField('user_scene','string',false),verifiedContractField('entry_point','string',false)
    ])}),
    fields:Object.freeze([
      verifiedField('imgIds','array',true,[]),verifiedField('short_id','string',true,[]),verifiedField('app_id','string',true,[]),verifiedField('location1','string',false,[]),verifiedField('location2','string',false,[]),verifiedField('generate_location','string',true,Object.keys(GENERATE_LOCATION_MEANINGS)),verifiedField('tag_id','string',true,[]),verifiedField('generate_time','mixed',true,[]),verifiedField('generate_wait_time','number',true,[]),verifiedField('gallery_id','string',false,[]),verifiedField('origin','string',true,Object.keys(GENERATE_ORIGIN_MEANINGS)),verifiedField('ability_name','string',true,[]),verifiedField('user_scene','string',false,[]),verifiedField('entry_point','string',false,Object.keys(RESULT_SHOW_ENTRY_POINT_MEANINGS))
    ])
  }),
  video_download:Object.freeze({
    migrationStrategy:'keep',
    deprecatedActiveUsageReviewed:true,
    outputFields:Object.freeze([
      Object.freeze({name:'post_id',type:'string',required:false,nullable:false,description:'被下载视频关联的动态作品 ID。',definitions:Object.freeze([{file:'src/mobile/handler/image.ts',line:307,column:3,namespace:'action',event:'video_download',kind:'verifiedWireOutput'}])}),
      Object.freeze({name:'origin',type:'string',required:false,nullable:false,description:'本次视频下载发生的动态业务来源。',definitions:Object.freeze([{file:'src/mobile/handler/image.ts',line:307,column:3,namespace:'action',event:'video_download',kind:'verifiedWireOutput'}])}),
      Object.freeze({name:'task_id',type:'string',required:false,nullable:false,description:'被下载视频所属的动态生成任务 ID。',definitions:Object.freeze([{file:'src/mobile/handler/image.ts',line:307,column:3,namespace:'action',event:'video_download',kind:'verifiedWireOutput'}])}),
      Object.freeze({name:'trace_info',type:'string',required:false,nullable:false,description:'被下载视频关联的动态推荐追踪信息。',definitions:Object.freeze([{file:'src/mobile/handler/image.ts',line:307,column:3,namespace:'action',event:'video_download',kind:'verifiedWireOutput'}])}),
      Object.freeze({name:'location1',type:'string',required:false,nullable:false,description:'下载包装层可透传的动态一级业务位置。',definitions:Object.freeze([{file:'src/mobile/handler/image.ts',line:307,column:3,namespace:'action',event:'video_download',kind:'verifiedWireOutput'}])}),
      Object.freeze({name:'location2',type:'string',required:false,nullable:false,description:'下载包装层可透传的动态二级业务位置。',definitions:Object.freeze([{file:'src/mobile/handler/image.ts',line:307,column:3,namespace:'action',event:'video_download',kind:'verifiedWireOutput'}])}),
      Object.freeze({name:'chatbot_id',type:'string',required:false,nullable:false,description:'下载包装层可透传的动态 Chatbot ID。',definitions:Object.freeze([{file:'src/mobile/handler/image.ts',line:307,column:3,namespace:'action',event:'video_download',kind:'verifiedWireOutput'}])})
    ]),
    contractFields:Object.freeze({action:Object.freeze([
      verifiedContractField('video_id','string',true),verifiedContractField('ability_name','string',true),verifiedContractField('post_id','string',false),verifiedContractField('origin','string',false),verifiedContractField('task_id','string',false),verifiedContractField('trace_info','string',false),verifiedContractField('location1','string',false),verifiedContractField('location2','string',false),verifiedContractField('chatbot_id','string',false)
    ])}),
    fields:Object.freeze([
      verifiedField('video_id','string',true,[]),verifiedField('ability_name','string',true,[]),verifiedField('post_id','string',false,[]),verifiedField('origin','string',false,[]),verifiedField('task_id','string',false,[]),verifiedField('trace_info','string',false,[]),verifiedField('location1','string',false,[]),verifiedField('location2','string',false,[]),verifiedField('chatbot_id','string',false,[])
    ])
  }),
  video_full_screen_click:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([verifiedField('current_state','string',true,Object.keys(VIDEO_FULLSCREEN_STATE_MEANINGS))])
  }),
  video_play_click:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([verifiedField('template_id','string',true,[])])
  }),
  remix_whatsapp_popup_close:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([verifiedField('app_id','string',false,[]),verifiedField('origin','string',true,Object.keys(REMIX_WHATSAPP_ORIGIN_MEANINGS))])
  }),
  result_click:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([verifiedField('app_id','string',true,[]),verifiedField('appid','string',true,[]),verifiedField('filter_level','number',true,[1,2,3])])
  }),
  result_page_inputInfo_click:Object.freeze({migrationStrategy:'keep'}),
  result_pop_close:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([verifiedField('app_id','string',true,[]),verifiedField('appid','string',true,[]),verifiedField('filter_level','number',true,[1,2,3])])
  }),
  result_pop_publish_click:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([verifiedField('app_id','string',true,[]),verifiedField('appid','string',true,[]),verifiedField('filter_level','number',true,[1,2,3])])
  }),
  publish_pop_publish:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([verifiedField('app_id','string',true,[])])
  }),
  publish_pop_publish_click:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([verifiedField('app_id','string',true,[]),verifiedField('appid','string',true,[]),verifiedField('filter_level','number',true,[1,2,3])])
  }),
  publish_pop_show:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([verifiedField('app_id','string',true,[]),verifiedField('appid','string',true,[]),verifiedField('filter_level','number',true,[1,2,3]),verifiedField('origin','string',true,Object.keys(PUBLISH_POP_SHOW_ORIGIN_MEANINGS))])
  }),
  remix_whatsapp_entry_click:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([verifiedField('app_id','string',false,[]),verifiedField('origin','string',true,Object.keys(REMIX_WHATSAPP_ORIGIN_MEANINGS))])
  }),
  remix_whatsapp_link_click:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([verifiedField('app_id','string',false,[]),verifiedField('user_level','number',true,[1,2,3,4]),verifiedField('origin','string',true,Object.keys(REMIX_WHATSAPP_ORIGIN_MEANINGS))])
  }),
  view_result_click:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([verifiedField('app_id','string',true,[]),verifiedField('appid','string',true,[]),verifiedField('filter_level','number',true,[1,2,3])])
  }),
  generate_results_show:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([verifiedField('app_id','string',true,[]),verifiedField('appid','string',true,[]),verifiedField('image_id','string',true,[]),verifiedField('ability_name','string',true,[]),verifiedField('user_scene','string',false,[]),verifiedField('view_source','string',true,Object.keys(GENERATE_RESULTS_VIEW_SOURCE_MEANINGS))])
  }),
  big_image:Object.freeze({
    migrationStrategy:'keep',
    internalInputFields:Object.freeze(['imageId','appId']),
    contractFields:Object.freeze({legacy:Object.freeze([verifiedContractField('image_id','string',true),verifiedContractField('app_id','string',true),verifiedContractField('origin','string',true)])}),
    fields:Object.freeze([verifiedField('image_id','string',true,[]),verifiedField('app_id','string',true,[]),verifiedField('origin','string',true,Object.keys(BIG_IMAGE_ORIGIN_MEANINGS))])
  }),
  image_exposure:Object.freeze({
    migrationStrategy:'keep',
    internalInputFields:Object.freeze(['arrList']),
    contractFields:Object.freeze({legacy:Object.freeze([verifiedContractField('tag_id','string',true),verifiedContractField('tag_name','string',true),verifiedContractField('exposureList','array',true)])}),
    fields:Object.freeze([verifiedField('tag_id','string',true,[]),verifiedField('tag_name','string',true,[]),verifiedField('exposureList','array',true,[])])
  }),
  image_publish:Object.freeze({
    migrationStrategy:'keep',
    contractFields:Object.freeze({legacy:Object.freeze([verifiedContractField('image_id','mixed',true),verifiedContractField('pictureid','mixed',true),verifiedContractField('origin','string',false),verifiedContractField('app_id','string',false)])}),
    fields:Object.freeze([verifiedField('image_id','mixed',true,[]),verifiedField('pictureid','mixed',true,[]),verifiedField('origin','string',false,[]),verifiedField('app_id','string',false,[])])
  }),
  tasklist_click:Object.freeze({
    migrationStrategy:'keep',
    contractFields:Object.freeze({legacy:Object.freeze([verifiedContractField('state','string',true)])}),
    fields:Object.freeze([verifiedField('state','string',true,['1','-1'])])
  }),
  image_pop_direct_close:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([verifiedField('type','string',true,Object.keys(IMAGE_CHANGE_TYPE_MEANINGS)),verifiedField('app_id','string',true,[])])
  }),
  mute_button_click:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([verifiedField('current_state','string',true,Object.keys(MUTE_BUTTON_STATE_MEANINGS))])
  }),
  publish_click_withoutname:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([verifiedField('short_id','string',true,[]),verifiedField('app_id','string',true,[])])
  }),
  publish_pop_close:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([verifiedField('app_id','string',true,[]),verifiedField('appid','string',true,[]),verifiedField('filter_level','number',true,[1,2,3])])
  }),
  publish_pop_direct_close:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([verifiedField('app_id','string',true,[])])
  }),
  image_upload_click:Object.freeze({
    migrationStrategy:'keep',
    contractVariantsReviewed:true,
    internalInputFields:Object.freeze(['appId','search']),
    outputFields:Object.freeze([
      Object.freeze({name:'search_content',type:'string',required:false,nullable:false,description:'本次上传来自搜索结果时使用的搜索词。',typeExpressions:Object.freeze(['getRecommendSearchParams(search)']),definitions:Object.freeze([{file:'packages/shared/handler/cache/recommend.ts',line:306,column:3,namespace:'legacy',event:'image_upload_click',kind:'verifiedWireOutput'}])}),
      Object.freeze({name:'search_id',type:'string',required:false,nullable:false,description:'本次上传来自搜索结果时对应的搜索记录 ID。',typeExpressions:Object.freeze(['getRecommendSearchParams(search)']),definitions:Object.freeze([{file:'packages/shared/handler/cache/recommend.ts',line:307,column:3,namespace:'legacy',event:'image_upload_click',kind:'verifiedWireOutput'}])}),
        Object.freeze({name:'search_method',type:'string',required:false,nullable:false,description:'本次上传来自搜索结果时采用的搜索方式。',allowedValues:Object.freeze(['input','history','individuation','top_search','hot_today','placeholder','']),typeExpressions:Object.freeze(['getRecommendSearchParams(search)']),definitions:Object.freeze([{file:'packages/shared/handler/cache/recommend.ts',line:308,column:3,namespace:'legacy',event:'image_upload_click',kind:'verifiedWireOutput'}])})
    ]),
    contractFields:Object.freeze({
      legacy:Object.freeze([
        Object.freeze({nameRaw:'product_name',typeObserved:'string',requiredObserved:true,nullableObserved:false}),
        Object.freeze({nameRaw:'app_id',typeObserved:'string',requiredObserved:true,nullableObserved:false}),
        Object.freeze({nameRaw:'user_type',typeObserved:'string',requiredObserved:true,nullableObserved:false}),
        Object.freeze({nameRaw:'trace_info',typeObserved:'string',requiredObserved:true,nullableObserved:false}),
        Object.freeze({nameRaw:'user_scene',typeObserved:'string',requiredObserved:true,nullableObserved:false}),
        Object.freeze({nameRaw:'ability_name',typeObserved:'string',requiredObserved:true,nullableObserved:false}),
        Object.freeze({nameRaw:'search_content',typeObserved:'string',requiredObserved:false,nullableObserved:false}),
        Object.freeze({nameRaw:'search_id',typeObserved:'string',requiredObserved:false,nullableObserved:false}),
        Object.freeze({nameRaw:'search_method',typeObserved:'string',requiredObserved:false,nullableObserved:false})
      ])
    }),
    coPresentFieldGroups:Object.freeze({
      legacy:Object.freeze([
        Object.freeze({fields:Object.freeze(['search_content','search_id','search_method']),description:'搜索场景下 search_content、search_id 和 search_method 同时发送'})
      ])
    }),
    fields:Object.freeze([
      Object.freeze({wireRef:'origin',name:'origin',type:'string',required:true,nullable:false,sample:'remix',enum:Object.freeze(['remix']),description:'本次图片上传发生的创作流程。'}),
      Object.freeze({wireRef:'filter_level',name:'filter_level',type:'number',required:true,nullable:false,sample:1,enum:Object.freeze([1,2,3]),description:'上传图片时当前滤镜的复杂度等级。'}),
      Object.freeze({wireRef:'product_name',name:'product_name',type:'string',required:false,nullable:false,sample:'a1',description:'本次上传所属的产品标识。'}),
      Object.freeze({wireRef:'app_id',name:'app_id',type:'string',required:false,nullable:false,sample:'2066475647017820162',description:'本次上传关联的动态 App 资源 ID。'}),
      Object.freeze({wireRef:'user_type',name:'user_type',type:'string',required:false,nullable:false,sample:'creator',enum:Object.freeze(['creator','consumer']),description:'图片上传时所在的用户使用形态。'}),
      Object.freeze({wireRef:'user_scene',name:'user_scene',type:'string',required:false,nullable:false,sample:'creator',enum:Object.freeze(['emoji','id_photo','dress_up','creator','activity','']),description:'本次上传关联 App 的业务场景。'}),
      Object.freeze({wireRef:'ability_name',name:'ability_name',type:'string',required:false,nullable:false,sample:'a1',enum:Object.freeze(['a1','GENERATE_VIDEO','FACESWAP','']),description:'本次上传关联 App 的生成能力。'}),
      Object.freeze({wireRef:'search_content',name:'search_content',type:'string',required:false,nullable:false,sample:'portrait',description:'本次上传来自搜索结果时使用的搜索词。'}),
      Object.freeze({wireRef:'search_id',name:'search_id',type:'string',required:false,nullable:false,sample:'search_request_id',description:'本次上传来自搜索结果时对应的搜索记录 ID。'}),
      Object.freeze({wireRef:'search_method',name:'search_method',type:'string',required:false,nullable:false,sample:'input',enum:Object.freeze(['input','history','individuation','top_search','hot_today','placeholder','']),description:'本次上传来自搜索结果时采用的搜索方式。'})
    ])
  }),
  image_upload_front:Object.freeze({
    migrationStrategy:'keep',
    contractVariantsReviewed:true,
    internalInputFields:Object.freeze(['appId','filePath','failureReason']),
    contractFields:Object.freeze({
      action:Object.freeze([
        Object.freeze({nameRaw:'origin',typeObserved:'string',requiredObserved:true,nullableObserved:false}),
        Object.freeze({nameRaw:'filter_level',typeObserved:'number',requiredObserved:true,nullableObserved:false}),
        Object.freeze({nameRaw:'failure_reason',typeObserved:'string',requiredObserved:true,nullableObserved:false}),
        Object.freeze({nameRaw:'trace_info',typeObserved:'string',requiredObserved:false,nullableObserved:false})
      ]),
      legacy:Object.freeze([
        Object.freeze({nameRaw:'product_name',typeObserved:'string',requiredObserved:true,nullableObserved:false}),
        Object.freeze({nameRaw:'app_id',typeObserved:'string',requiredObserved:true,nullableObserved:false}),
        Object.freeze({nameRaw:'user_type',typeObserved:'string',requiredObserved:true,nullableObserved:false}),
        Object.freeze({nameRaw:'file_path',typeObserved:'string',requiredObserved:true,nullableObserved:false}),
        Object.freeze({nameRaw:'failure_reason',typeObserved:'string',requiredObserved:true,nullableObserved:false}),
        Object.freeze({nameRaw:'trace_info',typeObserved:'string',requiredObserved:true,nullableObserved:false})
      ])
    }),
    fields:Object.freeze([
      Object.freeze({wireRef:'origin',name:'origin',type:'string',required:true,nullable:false,sample:'remix_reference',enum:Object.freeze(['remix_reference','remix_upload']),description:'本次图片上传发生的 Remix 流程。'}),
      Object.freeze({wireRef:'filter_level',name:'filter_level',type:'number',required:true,nullable:false,sample:1,enum:Object.freeze([1,2,3]),description:'上传图片时当前滤镜的复杂度等级。'}),
      Object.freeze({wireRef:'failure_reason',name:'failure_reason',type:'string',required:true,nullable:false,sample:'success',enum:Object.freeze([]),description:'本次上传或图片处理结果；服务端错误文案保持开放值。'}),
      Object.freeze({wireRef:'trace_info',name:'trace_info',type:'string',required:false,nullable:false,sample:'trace_example',description:'本次上传关联的推荐追踪信息。'}),
      Object.freeze({wireRef:'product_name',name:'product_name',type:'string',required:false,nullable:false,sample:'a1',description:'本次上传所属的产品标识。'}),
      Object.freeze({wireRef:'app_id',name:'app_id',type:'string',required:false,nullable:false,sample:'2066475647017820162',description:'本次上传关联的动态 App 资源 ID。'}),
      Object.freeze({wireRef:'user_type',name:'user_type',type:'string',required:false,nullable:false,sample:'creator',enum:Object.freeze(['creator','consumer']),description:'图片上传时所在的用户使用形态。'}),
      Object.freeze({wireRef:'file_path',name:'file_path',type:'string',required:false,nullable:false,sample:'assets/images/example/',description:'图片上传完成后的动态文件路径。'})
    ])
  }),
  image_upload_result:Object.freeze({
    migrationStrategy:'keep',
    outputFields:Object.freeze([
      Object.freeze({name:'search_content',type:'string',required:false,nullable:false,description:'本次上传来自搜索结果时使用的搜索词。',typeExpressions:Object.freeze(['getRecommendSearchParams(search)']),definitions:Object.freeze([{file:'packages/shared/handler/cache/recommend.ts',line:306,column:3,namespace:'action',event:'image_upload_result',kind:'verifiedWireOutput'}])}),
      Object.freeze({name:'search_id',type:'string',required:false,nullable:false,description:'本次上传来自搜索结果时对应的搜索记录 ID。',typeExpressions:Object.freeze(['getRecommendSearchParams(search)']),definitions:Object.freeze([{file:'packages/shared/handler/cache/recommend.ts',line:307,column:3,namespace:'action',event:'image_upload_result',kind:'verifiedWireOutput'}])}),
      Object.freeze({name:'search_method',type:'string',required:false,nullable:false,description:'本次上传来自搜索结果时采用的搜索方式。',allowedValues:Object.freeze(['input','history','individuation','top_search','hot_today','placeholder','']),typeExpressions:Object.freeze(['getRecommendSearchParams(search)']),definitions:Object.freeze([{file:'packages/shared/handler/cache/recommend.ts',line:308,column:3,namespace:'action',event:'image_upload_result',kind:'verifiedWireOutput'}])})
    ]),
    contractFields:Object.freeze({
      action:Object.freeze([
        Object.freeze({nameRaw:'app_id',typeObserved:'string',requiredObserved:true,nullableObserved:false}),
        Object.freeze({nameRaw:'upload_status',typeObserved:'string',requiredObserved:true,nullableObserved:false}),
        Object.freeze({nameRaw:'input_image_id',typeObserved:'string',requiredObserved:true,nullableObserved:false}),
        Object.freeze({nameRaw:'ability_name',typeObserved:'string',requiredObserved:true,nullableObserved:false}),
        Object.freeze({nameRaw:'trace_info',typeObserved:'string',requiredObserved:true,nullableObserved:false}),
        Object.freeze({nameRaw:'user_scene',typeObserved:'string',requiredObserved:true,nullableObserved:false}),
        Object.freeze({nameRaw:'search_content',typeObserved:'string',requiredObserved:false,nullableObserved:false}),
        Object.freeze({nameRaw:'search_id',typeObserved:'string',requiredObserved:false,nullableObserved:false}),
        Object.freeze({nameRaw:'search_method',typeObserved:'string',requiredObserved:false,nullableObserved:false})
      ])
    }),
    coPresentFieldGroups:Object.freeze({
      action:Object.freeze([
        Object.freeze({fields:Object.freeze(['search_content','search_id','search_method']),description:'搜索场景下 search_content、search_id 和 search_method 同时发送'})
      ])
    }),
    fields:Object.freeze([
      Object.freeze({wireRef:'app_id',name:'app_id',type:'string',required:true,nullable:false,sample:'2066475647017820162',description:'本次上传关联的动态 App 资源 ID。'}),
      Object.freeze({wireRef:'upload_status',name:'upload_status',type:'string',required:true,nullable:false,sample:'success',enum:Object.freeze(['success','failure']),description:'本次图片上传或查重处理的结果；事件先于图片写入表单。'}),
      Object.freeze({wireRef:'input_image_id',name:'input_image_id',type:'string',required:true,nullable:false,sample:'input_image_filename',description:'成功时为上传接口返回的 filename；失败时为空字符串。'}),
      Object.freeze({wireRef:'ability_name',name:'ability_name',type:'string',required:true,nullable:false,sample:'a1',enum:Object.freeze(['a1','GENERATE_VIDEO','FACESWAP']),description:'本次上传关联 App 的生成能力。'}),
      Object.freeze({wireRef:'trace_info',name:'trace_info',type:'string',required:true,nullable:false,sample:'trace_example',description:'本次上传关联的推荐追踪信息。'}),
      Object.freeze({wireRef:'user_scene',name:'user_scene',type:'string',required:true,nullable:false,sample:'creator',enum:Object.freeze(['emoji','creator','id_photo','dress_up','activity']),description:'本次上传关联 App 的业务场景。'}),
      Object.freeze({wireRef:'search_content',name:'search_content',type:'string',required:false,nullable:false,sample:'portrait',description:'本次上传来自搜索结果时使用的搜索词。'}),
      Object.freeze({wireRef:'search_id',name:'search_id',type:'string',required:false,nullable:false,sample:'search_request_id',description:'本次上传来自搜索结果时对应的搜索记录 ID。'}),
      Object.freeze({wireRef:'search_method',name:'search_method',type:'string',required:false,nullable:false,sample:'input',enum:Object.freeze(['input','history','individuation','top_search','hot_today','placeholder','']),description:'本次上传来自搜索结果时采用的搜索方式。'})
    ])
  }),
  others_filters_click:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([
      Object.freeze({wireRef:'user_scene',name:'user_scene',type:'string',required:true,nullable:false,sample:'id_photo',enum:Object.freeze(['emoji','creator','id_photo','dress_up','activity']),description:'用户手动打开其他滤镜或相册面板时所在的业务场景。'})
    ])
  }),
  others_filters_customize:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([
      Object.freeze({wireRef:'user_scene',name:'user_scene',type:'string',required:true,nullable:false,sample:'id_photo',enum:Object.freeze(['emoji','creator','id_photo','dress_up','activity']),description:'用户点击自定义入口时所在的业务场景。'})
    ])
  }),
  remix_baseimage_choose:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([
      Object.freeze({wireRef:'type',name:'type',type:'string',required:true,nullable:false,sample:'t2i',enum:Object.freeze(['a1_history','t2i']),description:'用户选中的历史图片来源。'})
    ])
  }),
  remix_uploadfrom_a1_click:Object.freeze({migrationStrategy:'keep'}),
  remix_uploadfrom_album_click:Object.freeze({migrationStrategy:'keep'}),
  remove_input_cancel_click:Object.freeze({migrationStrategy:'keep'}),
  remove_input_click:Object.freeze({migrationStrategy:'keep'}),
  remove_input_confirm_click:Object.freeze({migrationStrategy:'keep'}),
  template_video_select:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([
      Object.freeze({wireRef:'template_id',name:'template_id',type:'string',required:true,nullable:false,sample:'video_template_id',description:'用户点击的视频换脸模板 ID。'}),
      Object.freeze({wireRef:'video_tag_id',name:'video_tag_id',type:'string',required:false,nullable:false,sample:'All',enum:Object.freeze([]),description:'模板所在的动态视频标签 ID。'}),
      Object.freeze({wireRef:'video_tag_name',name:'video_tag_name',type:'string',required:false,nullable:false,sample:'Featured',enum:Object.freeze([]),description:'模板所在的动态视频标签名称。'}),
      Object.freeze({wireRef:'gallery_id',name:'gallery_id',type:'string',required:false,nullable:false,sample:'gallery_id',description:'模板所属的动态 Gallery 或合集 ID。'})
    ])
  }),
  video_guide_dismissed:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([
      Object.freeze({wireRef:'filter_level',name:'filter_level',type:'number',required:true,nullable:false,sample:1,enum:Object.freeze([1,2,3]),description:'当前滤镜的复杂度等级。'})
    ])
  }),
  video_guide_show:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([
      Object.freeze({wireRef:'filter_level',name:'filter_level',type:'number',required:true,nullable:false,sample:1,enum:Object.freeze([1,2,3]),description:'当前滤镜的复杂度等级。'})
    ])
  }),
  video_upload_click:Object.freeze({migrationStrategy:'keep'}),
  video_upload_result:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([
      Object.freeze({wireRef:'status',name:'status',type:'string',required:true,nullable:false,sample:'success',enum:Object.freeze(['success','fail']),description:'用户所选视频的本地文件校验结果。'}),
      Object.freeze({wireRef:'error_code',name:'error_code',type:'string',required:false,nullable:false,sample:'1001',enum:Object.freeze(['1001','1002','1003','1004']),description:'本地文件未通过校验时的失败原因。'}),
      Object.freeze({wireRef:'file_size_mb',name:'file_size_mb',type:'number',required:true,nullable:false,sample:12.345,description:'所选视频的文件大小，单位 MB。'}),
      Object.freeze({wireRef:'duration_sec',name:'duration_sec',type:'number',required:true,nullable:false,sample:10,enum:Object.freeze([]),description:'所选视频的动态时长，单位秒。'}),
      Object.freeze({wireRef:'resolution',name:'resolution',type:'string',required:true,nullable:false,sample:'1920*1080',enum:Object.freeze([]),description:'所选视频的动态分辨率。'})
    ])
  }),
  video_upload_success:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([
      Object.freeze({wireRef:'is_success',name:'is_success',type:'boolean',required:true,nullable:false,sample:true,enum:Object.freeze([true,false]),description:'自定义换脸视频上传或使用流程是否成功。'}),
      Object.freeze({wireRef:'failure_reason',name:'failure_reason',type:'string',required:false,nullable:false,sample:'not_login',enum:Object.freeze([]),description:'失败时的开放错误原因。'}),
      Object.freeze({wireRef:'video_id',name:'video_id',type:'string',required:false,nullable:false,sample:'video_id',description:'上传成功后接口返回的动态视频 ID。'})
    ])
  }),
  voice_button_click:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([
      Object.freeze({wireRef:'current_state',name:'current_state',type:'string',required:true,nullable:false,sample:'turn on',enum:Object.freeze(['turn on','turn off']),description:'用户点击声音按钮后的播放声音状态。'})
    ])
  }),
  dressup_list_page_show:Object.freeze({
    migrationStrategy:'keep',
    businessFieldOverrides:Object.freeze(['source']),
    fields:Object.freeze([
      Object.freeze({wireRef:'source',name:'source',type:'string',required:false,nullable:false,sample:'studio_tab_banner',enum:Object.freeze(['studio_tab_banner','studio_dressup_icon','discover_ad_dressup']),description:'用户进入换装列表页的来源。'})
    ])
  }),
  emoji_list_page_show:Object.freeze({
    migrationStrategy:'keep',
    businessFieldOverrides:Object.freeze(['source']),
    fields:Object.freeze([
      Object.freeze({wireRef:'source',name:'source',type:'string',required:false,nullable:false,sample:'studio_tab_banner',enum:Object.freeze(['studio_tab_banner','studio_emoji_icon']),description:'用户进入表情包列表页的来源。'})
    ])
  }),
  faceswap_tag_popup_show:Object.freeze({migrationStrategy:'keep'}),
  others_filters_popup_show:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([
      Object.freeze({wireRef:'user_scene',name:'user_scene',type:'string',required:true,nullable:false,sample:'id_photo',enum:Object.freeze(['emoji','creator','id_photo','dress_up','activity']),description:'面板打开时所在的业务场景。'})
    ])
  }),
  video_template_exposure:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([
      Object.freeze({wireRef:'exposureList',name:'exposureList',type:'array',required:true,nullable:false,sample:Object.freeze([Object.freeze({template_id:'video_template_id'})]),enum:Object.freeze([]),description:'达到曝光条件的视频模板列表；每项固定包含动态 template_id。'}),
      Object.freeze({wireRef:'location',name:'location',type:'string',required:true,nullable:false,sample:'faceswap',enum:Object.freeze(['appgallery','discover_tag','faceswap']),description:'本批视频模板曝光发生的列表位置。'})
    ])
  }),
  image_input_result_switch:Object.freeze({
    migrationStrategy:'keep',
    contractFields:Object.freeze({
      legacy:Object.freeze([
        Object.freeze({nameRaw:'mode',typeObserved:'string',requiredObserved:true,nullableObserved:false}),
        Object.freeze({nameRaw:'switch_method',typeObserved:'string',requiredObserved:true,nullableObserved:false})
      ])
    }),
    fields:Object.freeze([
      Object.freeze({wireRef:'mode',name:'mode',type:'string',required:true,nullable:false,sample:'input',enum:Object.freeze(['input','result']),description:'本次操作尝试切换到的目标图片视图。'}),
      Object.freeze({wireRef:'switch_method',name:'switch_method',type:'string',required:true,nullable:false,sample:'click',enum:Object.freeze(['hotkey','click']),description:'本次切换尝试的操作方式。'})
    ])
  }),
  filter_delete_cancel:Object.freeze({
    migrationStrategy:'keep',
    businessFieldOverrides:Object.freeze(['source'])
  }),
  filter_delete_click:Object.freeze({
    migrationStrategy:'keep',
    businessFieldOverrides:Object.freeze(['source'])
  }),
  filter_delete_confirm:Object.freeze({
    migrationStrategy:'keep',
    businessFieldOverrides:Object.freeze(['source'])
  }),
  filter_permission_entry_click:Object.freeze({
    migrationStrategy:'keep',
    contractFields:Object.freeze({
      action:Object.freeze([
        Object.freeze({nameRaw:'current_status',typeObserved:'string',requiredObserved:true,nullableObserved:false})
      ])
    }),
    fields:Object.freeze([
      Object.freeze({wireRef:'current_status',name:'current_status',type:'string',required:true,nullable:false,sample:'public',enum:Object.freeze(['public','private']),description:'打开权限设置时滤镜当前的可见范围。'})
    ])
  }),
  filter_permission_popup_view:Object.freeze({
    migrationStrategy:'keep',
    contractVariantsReviewed:true
  }),
  filter_permission_update:Object.freeze({
    migrationStrategy:'keep',
    contractFields:Object.freeze({
      action:Object.freeze([
        Object.freeze({nameRaw:'before_status',typeObserved:'string',requiredObserved:true,nullableObserved:false}),
        Object.freeze({nameRaw:'after_status',typeObserved:'string',requiredObserved:true,nullableObserved:false})
      ])
    }),
    fields:Object.freeze([
      Object.freeze({wireRef:'before_status',name:'before_status',type:'string',required:true,nullable:false,sample:'public',enum:Object.freeze(['public','private']),description:'用户选择权限前滤镜的可见范围。'}),
      Object.freeze({wireRef:'after_status',name:'after_status',type:'string',required:true,nullable:false,sample:'private',enum:Object.freeze(['public','private']),description:'用户在权限弹窗中选择的可见范围。'})
    ])
  }),
  group_photo_mask_click:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([
      Object.freeze({wireRef:'location',name:'location',type:'string',required:true,nullable:false,sample:'detail',enum:Object.freeze(['detail','half-direct','filter']),description:'用户选择合照人物位置时所在的页面。'})
    ])
  }),
  feedback_popup_button_click:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([
      Object.freeze({wireRef:'is_add',name:'is_add',type:'boolean',required:true,nullable:false,sample:true,enum:Object.freeze([true,false]),description:'是否前往 WhatsApp 反馈。'})
    ])
  }),
  addtodesktop_load_success:Object.freeze({
    migrationStrategy:'keep',
    internalInputFields:Object.freeze(['isFirstTime']),
    fields:Object.freeze([
      Object.freeze({wireRef:'is_first_time',name:'is_first_time',type:'boolean',required:true,nullable:false,sample:true,description:'是否为首次打开 App。'})
    ])
  }),
  rate_popup_click_submit:Object.freeze({
    migrationStrategy:'keep',
    fields:Object.freeze([
      Object.freeze({wireRef:'rate',name:'rate',type:'number',required:true,nullable:false,sample:1,enum:Object.freeze([1,2,3,4]),description:'用户提交的评分星级。'})
    ])
  })
});

const seedEvents=[
 {name:'more_popup_show',description:'更多弹窗曝光',theme:'behaviour',group:'废弃埋点',domain:'更多',status:'已停用',rule:'更多弹窗曝光时上报',source:'主流程移出 · 人工废弃资产',fields:[]},
 {name:'userpath',description:'页面加载成功',theme:'behaviour',group:'主流程',domain:'登录注册',status:'已上线',rule:'站内所有页面加载成功时触发',source:'⭐️【A1】已上线',fields:[['isnew','bool','是否新用户'],['gpu','string','设备芯片信息'],['preurl','string','本次访问的上一个页面']]},
 {name:'login_button_click',description:'点击登录按钮',theme:'behaviour',group:'用户与账号',domain:'登录注册',status:'已上线',rule:'点击 Login 按钮时触发',source:'⭐️【A1】已上线',fields:[['source','string','登录入口'],['plan','string','本地存储套餐'],['originUrl','string','来源地址'],['firstenterurl','string','24小时内首次访问地址']]},
 {name:'registration_pop_up',description:'注册弹窗',theme:'behaviour',group:'用户与账号',domain:'登录注册',status:'已上线',rule:'注册弹窗关闭时触发',source:'⭐️【A1】已上线',fields:[['isregister','string','close / register'],['location','string','top / rate_button / optimize / pic_like']]},
 {name:'pricing_popup',description:'定价页曝光',theme:'commercial',group:'商业化',domain:'付费转化',status:'已上线',rule:'订阅弹窗打开时触发',source:'💰【A1】商业化埋点',fields:[['location','string','定价页触发位置'],['post_id','string','关联作品 ID'],['app_id','string','关联应用长 ID'],['price_page_type','string','low_price_page / high_price_page'],['show_free_trial','string','是否支持免费试用'],['is_upgrade','bool','是否为订阅升级场景']]},
 {name:'pricing_premium_subscibe_click',description:'点击订阅按钮',theme:'commercial',group:'商业化',domain:'订阅',status:'已上线',rule:'用户点击定价页订阅按钮时触发',source:'💰【A1】商业化埋点',fields:[['location','string','入口位置'],['pricing_plan_type','string','定价方案展示类型'],['period','string','Yr / Wk / Qr / Mo'],['open_free_trial','string','是否开启免费试用'],['get_googleplay_info','bool','Google Play 数据获取状态']]},
 {name:'pay_method_option_popup',description:'支付方式选择弹窗曝光',theme:'commercial',group:'商业化',domain:'付费转化',status:'已上线',rule:'支付方式选择弹窗曝光时上报',source:'💰【A1】商业化埋点',fields:[['product_type','string','lite / basic / pro / mega / premium'],['period','string','monthly / yearly / weekly'],['source_type','string','pricing_toC / pricing_api']]},
 {name:'remix_click',description:'Remix 入口点击',theme:'-',group:'内容',domain:'Remix 入口',status:'已上线',rule:'点击 Remix 时触发',source:'【A1】创建侧-移动端',fields:[['app_id','string','应用长 ID'],['is_vip','bool','用户会员状态'],['vip_type','string','会员类型'],['credits_balance','int','非会员积分余额'],['filter_level','int','滤镜等级'],['user_level','int','用户等级']]},
 {name:'remix_begin_click',description:'信息弹层 Begin Remix 点击',theme:'-',group:'内容',domain:'Remix 页',status:'已上线',rule:'点击 Begin Remix 时触发',source:'【A1】创建侧-移动端',fields:[['app_id','string','应用长 ID'],['is_vip','bool','用户会员状态'],['original_filter_type','string','image / ai_video']]},
 {name:'remix_guide_close_click',description:'Remix 引导关闭',theme:'-',group:'内容',domain:'Remix 页',status:'已停用',rule:'点击关闭引导时触发',source:'【A1】创建侧-移动端',fields:[]},
 {name:'image_change_click',description:'垫图修改',theme:'-',group:'内容',domain:'编辑用户输入',status:'已上线',rule:'点击更新垫图按钮时触发',source:'【A1】创建侧-移动端',fields:[['type','string','reference / groupphoto / presetphoto'],['app_id','string','应用长 ID']]},
 {name:'app_visit',description:'App 详情页访问',theme:'behaviour',group:'增长运营',domain:'老用户承接优化',status:'开发中',rule:'进入 App 详情页时上报',source:'【A1】需求中',fields:[['is_slide_view','string','是否来自滑动查看']]},
 {name:'generate_button_click',description:'生成按钮点击',theme:'behaviour',group:'内容',domain:'详情页样式改版',status:'开发中',rule:'点击生成按钮时上报',source:'【A1】需求中',fields:[['is_slide_view','string','是否来自滑动查看'],['app_source','string','onboarding_old'],['commend_label','string','For you / hot']]},
 {name:'generate_success',description:'推荐滤镜生成成功',theme:'-',group:'内容',domain:'老用户承接优化',status:'开发中',rule:'推荐滤镜生成成功时上报',source:'【A1】需求中',fields:[['app_source','string','onboarding_old'],['commend_label','string','For you / hot']]}
];
const ANDROID_COMMON_CONTRACT={
  id:'android_native_v1',
  label:'Android Native v1',
  version:'1.0.0',
  source:'Android 项目内埋点清单.md',
  fields:[
    {name:'action',path:'action',type:'string',category:'基础信封',timing:'每次上报',description:'事件 Raw action，由 trackEvent(eventName, eventData) 写入',inProperties:false,injector:'AnalyticsManager'},
    {name:'theme',path:'theme',type:'string',category:'基础信封',timing:'每次上报，固定 behaviour',example:'behaviour',description:'Android Native 自研埋点主题',inProperties:false,injector:'AnalyticsManager'},
    {name:'business_type',path:'business_type',type:'string',category:'基础信封',timing:'每次上报，固定 A1',example:'A1',description:'产品业务标识',inProperties:false,injector:'AnalyticsManager'},
    {name:'distinct_id',path:'distinct_id',type:'string',category:'基础信封',timing:'每次上报生成新的 UUID',description:'当前实现中的单次上报 UUID；是否应作为稳定标识待确认',inProperties:false,injector:'AnalyticsManager'},
    {name:'platform',path:'platform',type:'string',category:'设备与平台',timing:'每次上报，固定 android',example:'android',description:'Native 运行平台',inProperties:false,injector:'AnalyticsManager'},
    {name:'os_version',path:'os_version',type:'string',category:'设备与平台',timing:'每次上报',example:'14',description:'Android 系统版本，顶层 Raw 字段',inProperties:false,injector:'Android runtime'},
    {name:'device_id',path:'device_id',type:'string',category:'用户与设备标识',timing:'每次上报',description:'FinalDeviceIdPrefs.final_device_fingerprint_id 中缓存的设备指纹 ID',inProperties:false,injector:'FinalDeviceIdPrefs'},
    {name:'user_id',path:'user_id',type:'string',category:'用户与设备标识',timing:'H5 写入后随事件发送；未写入时的值待确认',description:'由 AndroidInterface.setUserId(userId) 写入',inProperties:false,injector:'H5 Bridge'},
    {name:'uniqueId',path:'uniqueId',type:'string',category:'用户与设备标识',timing:'H5 写入后随事件发送；未写入时的值待确认',description:'由 AndroidInterface.setUniqueId(uniqueId) 写入',inProperties:false,injector:'H5 Bridge'},
    {name:'time',path:'time',type:'integer',category:'时间',timing:'每次上报',example:'1768620304653',description:'当前毫秒时间戳',inProperties:false,injector:'AnalyticsManager'},
    {name:'utc_time',path:'utc_time',type:'datetime',category:'时间',timing:'每次上报',example:'2026-07-24 14:30:00',description:'Asia/Shanghai 时区格式化时间；Raw 名称为 utc_time',inProperties:false,injector:'AnalyticsManager'},
    {name:'product',path:'properties.product',type:'string',category:'应用与硬件属性',timing:'每次上报',example:'A1',description:'当前产品名 Config.appName',inProperties:true,injector:'AnalyticsManager'},
    {name:'gpu',path:'properties.gpu',type:'string',category:'应用与硬件属性',timing:'首次获取后缓存，随事件发送',description:'设备 GPU renderer',inProperties:true,injector:'Android runtime'},
    {name:'total_memory',path:'properties.total_memory',type:'number',category:'应用与硬件属性',timing:'每次上报',example:'8192',description:'设备总内存，单位 MB',inProperties:true,injector:'Android runtime'},
    {name:'available_memory',path:'properties.available_memory',type:'number',category:'应用与硬件属性',timing:'每次上报',example:'4096',description:'设备可用内存，单位 MB',inProperties:true,injector:'Android runtime'},
    {name:'total_storage',path:'properties.total_storage',type:'number',category:'应用与硬件属性',timing:'每次上报',example:'128000',description:'设备总存储，单位 MB',inProperties:true,injector:'Android runtime'},
    {name:'available_storage',path:'properties.available_storage',type:'number',category:'应用与硬件属性',timing:'每次上报',example:'64000',description:'设备可用存储，单位 MB',inProperties:true,injector:'Android runtime'},
    {name:'os_version',path:'properties.os_version',type:'string',category:'应用与硬件属性',timing:'每次上报',example:'14',description:'Android 系统版本，属性层 Raw 字段；与顶层字段重复传输',inProperties:true,injector:'Android runtime'},
    {name:'device_model',path:'properties.device_model',type:'string',category:'应用与硬件属性',timing:'每次上报',example:'Pixel 8',description:'设备型号',inProperties:true,injector:'Android runtime'},
    {name:'device_brand',path:'properties.device_brand',type:'string',category:'应用与硬件属性',timing:'每次上报',example:'Google',description:'设备品牌',inProperties:true,injector:'Android runtime'},
    {name:'app_version',path:'properties.app_version',type:'string',category:'应用与硬件属性',timing:'每次上报',example:'1.2.3',description:'App 版本名',inProperties:true,injector:'BuildConfig'},
    {name:'app_version_code',path:'properties.app_version_code',type:'integer',category:'应用与硬件属性',timing:'每次上报',example:'123',description:'App versionCode',inProperties:true,injector:'BuildConfig'},
    {name:'user_country',path:'properties.user_country',type:'string',category:'应用与硬件属性',timing:'每次上报',example:'CN',description:'系统 Locale 国家码',inProperties:true,injector:'Android runtime'}
  ]
};
const androidNativeEvents=[
  {name:'app_crash',description:'Android Native 未捕获异常',theme:'behaviour',group:'系统',domain:'异常与稳定性',status:'已接入 Android',rule:'CrashHandler 捕获 Native 未处理异常后上报，并附带设备 Build 信息',source:'Android 项目内埋点清单.md',trackingSource:'android',commonContractId:ANDROID_COMMON_CONTRACT.id,fields:[['error_message','string','异常错误信息'],['crash_message','string','未捕获异常 message'],['crash_stack','string','未捕获异常 stack trace']]},
  {name:'performance_metrics',description:'Android 启动与首个 WebView 加载性能',theme:'behaviour',group:'系统',domain:'性能监控',status:'已接入 Android',rule:'首个 WebView 页面完成加载时上报；若尚未成功上报，App 退到后台时强制上报；每次启动最多一次',source:'Android 项目内埋点清单.md',trackingSource:'android',commonContractId:ANDROID_COMMON_CONTRACT.id,fields:[['total_resource_requests','integer','本次加载的资源请求总数'],['offline_resource_hits','integer','离线资源命中数'],['offline_hit_rate','number','离线资源命中率'],['app_duration','number','App 启动阶段耗时；单位待 Android 契约确认'],['cold_start_duration','number','冷启动耗时；单位待 Android 契约确认'],['load_html_duration','number','HTML 加载耗时；单位待 Android 契约确认'],['launch_to_main_request_time','number','启动到主请求的耗时；单位待 Android 契约确认'],['defer_deeplink_time','number','延迟深链处理耗时；单位待 Android 契约确认'],['google_deferred_deeplink_override','boolean','是否由 Google deferred deeplink 覆盖'],['is_new_launch','boolean','是否为新启动'],['is_first_active','boolean','是否首次进入活跃状态'],['launch_count','integer','启动次数'],['is_forced_by_exit','boolean','是否因退出到后台而强制上报'],['has_notification_permission','boolean','当前是否拥有通知权限']]},
  {name:'leave-android-app',description:'Android App 前台活跃时长',theme:'behaviour',group:'系统',domain:'生命周期',status:'已接入 Android',rule:'App 从前台切到后台时上报，active_time 单位为秒',source:'Android 项目内埋点清单.md',trackingSource:'android',commonContractId:ANDROID_COMMON_CONTRACT.id,canonicalActionProposal:'leave_android_app',migrationStrategy:'keep',fields:[['start_time','integer','本次前台活跃开始时间；时间格式待 Android 契约确认'],['active_time','number','本次前台活跃时长，单位秒']]},
  {name:'network_status',description:'Android 网速测试结果',theme:'behaviour',group:'系统',domain:'网络监控',status:'已接入但默认关闭',rule:'网速测试成功后上报；当前 SPEED_TEST_ENABLED=false，默认不会触发',source:'Android 项目内埋点清单.md',trackingSource:'android',commonContractId:ANDROID_COMMON_CONTRACT.id,fields:[['speed_kbps','number','测得网速，单位 kbps'],['total_bytes','integer','测速接收的总字节数'],['duration_ms','integer','测速耗时，单位毫秒'],['success_count','integer','成功请求数'],['test_time','integer','测速发生时间；时间格式待 Android 契约确认'],['network_type','string','测速时的网络类型']]},
  {name:'google_play_query_failure',description:'Google Play 订阅商品查询失败',theme:'behaviour',group:'商业化',domain:'Google Play Billing',status:'已接入 Android',rule:'BillingManager 查询 Google Play 订阅商品详情失败时上报',source:'Android 项目内埋点清单.md',trackingSource:'android',commonContractId:ANDROID_COMMON_CONTRACT.id,fields:[['error_message','string','订阅商品查询失败信息']]},
  {name:'google_play_subscription_failure',description:'Google Play 订阅购买流程失败',theme:'behaviour',group:'商业化',domain:'Google Play Billing',status:'已接入 Android',rule:'Billing 连接失败、购买入口缺少 offer 或启动 Billing Flow 失败时上报',source:'Android 项目内埋点清单.md',trackingSource:'android',commonContractId:ANDROID_COMMON_CONTRACT.id,fields:[['error_message','string','订阅购买流程失败信息']]},
  {name:'google_play_subscription_upgrade_failure',description:'Google Play 订阅升降级失败',theme:'behaviour',group:'商业化',domain:'Google Play Billing',status:'已接入 Android',rule:'订阅升降级查询商品失败、缺少商品详情或 offer、查询当前有效订阅失败时上报',source:'Android 项目内埋点清单.md',trackingSource:'android',commonContractId:ANDROID_COMMON_CONTRACT.id,fields:[['error_message','string','订阅升降级流程失败信息']]},
  {name:'push_permission_popup_action',description:'Android 通知权限弹窗结果',theme:'behaviour',group:'Push',domain:'权限与触达',status:'已接入 Android',rule:'Android 13+ 系统通知权限弹窗返回结果时上报',source:'Android 项目内埋点清单.md',trackingSource:'android',commonContractId:ANDROID_COMMON_CONTRACT.id,fields:[['action_type','string','通知权限结果：allow 允许、deny 拒绝、close 结果数组为空的兜底分支']]}
];
const volcanoAggregationAssets=globalThis.VolcanoAggregationAssets||[];
const events=[
  ...mainFlowEvents,
  ...volcanoAggregationAssets,
  ...androidNativeEvents.filter(androidEvent=>!mainFlowEvents.some(event=>event.name===androidEvent.name)&&!volcanoAggregationAssets.some(event=>event.name===androidEvent.name)),
  ...seedEvents.filter(seed=>!mainFlowEvents.some(event=>event.name===seed.name)&&!volcanoAggregationAssets.some(event=>event.name===seed.name))
];
globalThis.__trackingAssets=events;
const frontendTrackingManifest=globalThis.FrontendTrackingManifest||null;
const codeAssetSummary=globalThis.CodeAssetSync&&frontendTrackingManifest
  ?globalThis.CodeAssetSync.sync(frontendTrackingManifest,events)
  :null;
Object.entries(VERIFIED_WIRE_CONTRACT_CORRECTIONS).forEach(([action,correction])=>{
  const event=events.find(item=>item.name===action);
  if(!event)return;
  const internalInputs=new Set([...(correction.internalInputFields||[]),...(correction.catalogOnlyFields||[])]);
  const correctionFields=Array.isArray(correction.fields)
    ?correction.fields
    :Object.entries(correction.fields||{}).map(([wireRef,field])=>({wireRef,name:wireRef,...field}));
  event.fields=(event.fields||[]).filter(field=>!internalInputs.has(String(field?.[0]||'').trim()));
  (correction.outputFields||[]).forEach(outputField=>{
    const outputDefinition=typeof outputField==='string'?{name:outputField}:outputField;
    const rawName=String(outputDefinition?.name||'').trim();
    if(!rawName)return;
    if(!(event.fields||[]).some(field=>String(field?.[0]||'').trim()===rawName)){
      event.fields.push([rawName,outputDefinition.type||'unknown',outputDefinition.description||'已核实的最终上报字段']);
    }
    if(!event.fieldMeta)event.fieldMeta={};
    if(!event.fieldMeta[rawName]){
      event.fieldMeta[rawName]={
        source:'前端代码核对',
        type:outputDefinition.type||'unknown',
        required:Boolean(outputDefinition.required),
        nullable:Boolean(outputDefinition.nullable),
        description:outputDefinition.description||'',
        allowedValues:[...(outputDefinition.allowedValues||[])],
        typeExpressions:[...(outputDefinition.typeExpressions||[])],
        definitions:(outputDefinition.definitions||[]).map(reference=>({...reference})),
        observedAt:(outputDefinition.observedAt||[]).map(reference=>({...reference}))
      };
    }
  });
  const correctedContracts=correction.contractFields||{};
  const contractCollections=[event.codeEvidence?.contracts,event.wireContracts].filter(Array.isArray);
  const contractNamespaces=[...new Set(contractCollections.flatMap(contracts=>contracts.map(contract=>contract.namespace).filter(Boolean)))];
  const correctedCoPresentGroups=Array.isArray(correction.coPresentFieldGroups)
    ?Object.fromEntries(contractNamespaces.map(namespace=>[namespace,correction.coPresentFieldGroups]))
    :(correction.coPresentFieldGroups||{});
  [...new Set(contractCollections)].forEach(contracts=>{
    contracts.forEach(contract=>{
      contract.fields=(contract.fields||[])
        .filter(field=>!internalInputs.has(String(field?.nameRaw||'').trim()))
        .map(field=>{
          const fieldCorrection=correctionFields.find(item=>(item.wireRef||item.name)===field.nameRaw);
          if(!fieldCorrection)return field;
          return {
            ...field,
            ...(fieldCorrection.type===undefined?{}:{typeObserved:fieldCorrection.type}),
            ...(fieldCorrection.required===undefined?{}:{requiredObserved:fieldCorrection.required}),
            ...(fieldCorrection.nullable===undefined?{}:{nullableObserved:fieldCorrection.nullable})
          };
        });
    });
    Object.entries(correctedContracts).forEach(([namespace,fields])=>{
      const contract=contracts.find(item=>item.namespace===namespace);
      if(!contract)return;
      const existingByName=new Map((contract.fields||[]).map(field=>[field.nameRaw,field]));
      contract.fields=(fields||[]).map(field=>({...existingByName.get(field.nameRaw),...field}));
    });
    Object.entries(correctedCoPresentGroups).forEach(([namespace,groups])=>{
      const contract=contracts.find(item=>item.namespace===namespace);
      if(!contract)return;
      contract.coPresentFieldGroups=(groups||[]).map(group=>({
        fields:[...(group.fields||[])],
        description:group.description||''
      }));
    });
  });
  const correctedFields=new Set(correctionFields.map(field=>field.wireRef||field.name));
  const existingProposalFields=event.governanceProposal?.fields||[];
  const existingProposalByName=new Map(existingProposalFields.map(field=>[field.wireRef||field.name,field]));
  const mergedCorrectionFields=correctionFields.map(field=>({
    ...(existingProposalByName.get(field.wireRef||field.name)||{}),
    ...field
  }));
  event.governanceProposal={
    ...(event.governanceProposal||{}),
    fields:[...(existingProposalFields.filter(field=>!correctedFields.has(field.wireRef||field.name))),...mergedCorrectionFields]
  };
  correctionFields.forEach(field=>{
    const rawName=field.wireRef||field.name;
    const meta=event.fieldMeta?.[rawName];
    if(!meta)return;
    if(meta.source==='前端代码'){
      meta.scannerObservedRequired=meta.required;
      meta.scannerObservedNullable=meta.nullable;
      meta.scannerObservedType=meta.type;
    }
    if(field.type!==undefined)meta.type=field.type;
    if(field.required!==undefined)meta.required=field.required;
    if(field.nullable!==undefined)meta.nullable=field.nullable;
    meta.wireContractCorrectionSource='frontend_code_review';
    const eventField=(event.fields||[]).find(item=>String(item?.[0]||'').trim()===rawName);
    if(eventField&&field.type!==undefined)eventField[1]=field.type;
  });
  event.migrationStrategy=correction.migrationStrategy;
  event.wireContractCorrectionSource='frontend_code_review';
  if(correction.businessFieldOverrides?.length){
    event.governanceMetadata={
      ...(event.governanceMetadata||{}),
      businessFieldOverrides:[...correction.businessFieldOverrides]
    };
  }
  if(correction.contractVariantsReviewed){
    event.governanceMetadata={
      ...(event.governanceMetadata||{}),
      contractVariantsReviewed:true
    };
  }
  if(correction.deprecatedActiveUsageReviewed){
    event.governanceMetadata={
      ...(event.governanceMetadata||{}),
      deprecatedActiveUsageReviewed:true
    };
  }
});
// User-confirmed inventory premise: frontend events with direct calls are already live.
events.forEach(event=>{
  if(!event.codeEvidence?.callSiteCount||event.codeEvidence.deprecated)return;
  event.governanceMetadata={
    ...(event.governanceMetadata||{}),
    lifecycle:'active',
    lifecycleSource:'user_confirmed_frontend_inventory'
  };
});
Object.entries(REVIEWED_FIELD_SEMANTICS).forEach(([qualifiedName,semantic])=>{
  const separator=qualifiedName.indexOf('.');
  const action=qualifiedName.slice(0,separator);
  const fieldName=qualifiedName.slice(separator+1);
  const event=events.find(item=>item.name===action);
  const field=event?.fields?.find(item=>String(item?.[0]||'').trim()===fieldName);
  if(field)field[2]=semantic.meaning;
});
let governanceReport=null;
function refreshGovernanceAssessments(){
  governanceReport=globalThis.TrackingGovernance
    ?globalThis.TrackingGovernance.attachAssessments(events,{manifest:frontendTrackingManifest,mode:'inventory'})
    :null;
  return governanceReport;
}
refreshGovernanceAssessments();
const IN_PROGRESS_STATUSES=new Set(['开发中','待开发','方案中','待确认']);
const BACKEND_TRACKING_EVENTS=new Set(['subscribe_cancel']);
const TRACKING_SOURCE_LABELS={frontend:'前端',backend:'后端',android:'Android 端',bigdata:'火山聚合'};

function getTrackingSourceEvidence(event,assetClassification){
  const evidence=event?.codeEvidence||{};
  const namespaces=evidence.namespaces||[];
  const repository=String(evidence.repository?.name||'').toLowerCase();
  const references=[...(evidence.definitions||[]),...(evidence.callSites||[])];
  const referenceText=references.map(reference=>reference.file||'').join(' ').toLowerCase();
  const reviewedSource=USER_PLATFORM_SOURCE_EVIDENCE[event?.name]?.sourceType;
  const explicitSource=String(reviewedSource||event?.trackingSource||'').toLowerCase();
  const declaredPlatform=String(event?.governanceMetadata?.platform||event?.governanceProposal?.platform||'').trim().toLowerCase();
  const declaredSource=/(?:android|安卓)/.test(declaredPlatform)
    ?'android'
    :/(?:backend|server|service|后端|服务端)/.test(declaredPlatform)
      ?'backend'
      :/(?:bigdata|volcano|火山|数仓|聚合)/.test(declaredPlatform)
        ?'bigdata'
        :'frontend';
  const callSiteCount=Number(evidence.callSiteCount||evidence.callSites?.length||0);
  const source=explicitSource==='frontend'
    ?'frontend'
    :explicitSource==='backend'||BACKEND_TRACKING_EVENTS.has(event.name)
    ?'backend'
    :explicitSource==='android'||/android/.test(repository)||/(?:^|\/)android(?:\/|$)/.test(referenceText)||(!explicitSource&&!callSiteCount&&!evidence.definitions?.length&&declaredSource==='android')
      ?'android'
      :explicitSource==='bigdata'||namespaces.includes('bigData')||(!explicitSource&&!callSiteCount&&!evidence.definitions?.length&&declaredSource==='bigdata')
        ?'bigdata'
        :!explicitSource&&!callSiteCount&&!evidence.definitions?.length&&declaredSource==='backend'
          ?'backend'
        :callSiteCount||evidence.definitions?.length
          ?'frontend'
          :'frontend';
  if(source==='backend')return {source,label:TRACKING_SOURCE_LABELS.backend,detail:event.name==='subscribe_cancel'?'服务端触发 · 订阅服务上报':'服务端触发 · 后端服务上报',title:'采集归属：后端'};
  if(source==='android')return {source,label:TRACKING_SOURCE_LABELS.android,detail:'',title:'采集归属：Android 端'};
  if(source==='bigdata')return {source,label:TRACKING_SOURCE_LABELS.bigdata,detail:'',title:'采集归属：火山聚合；bigData 通道统一归入此类'};
  return {source:'frontend',label:TRACKING_SOURCE_LABELS.frontend,detail:callSiteCount?`发现 ${callSiteCount} 处上报代码`:'未发现上报代码',title:callSiteCount?'采集归属：前端；已发现直接上报代码':'采集归属：前端；当前未发现直接上报代码'};
}

function isEventCommonField(event,field,index){
  const rawName=String(field?.[0]||'').trim();
  if(!rawName)return false;
  const businessFieldOverrides=new Set(event?.governanceMetadata?.businessFieldOverrides||event?.businessFieldOverrides||[]);
  if(businessFieldOverrides.has(rawName))return false;
  const assessment=event?.governanceAssessment;
  if((assessment?.commonEnvelopeFields||[]).includes(rawName))return true;
  const canonicalName=assessment?.canonicalSuggestions?.fields?.find(item=>item.index===index)?.key;
  const governance=globalThis.TrackingGovernance;
  if(!governance?.isCommonEnvelopeField)return false;
  return [rawName,canonicalName]
    .filter(Boolean)
    .some(name=>governance.isCommonEnvelopeField(name,{manifest:frontendTrackingManifest,event}));
}

function getEventBusinessFieldEntries(event){
  return (event?.fields||[])
    .map((field,index)=>({field,index}))
    .filter(({field,index})=>!isEventCommonField(event,field,index));
}

function getEventBusinessFieldCount(event){
  return getEventBusinessFieldEntries(event).length;
}

function hasFrontendCallSite(event){
  return Number(event?.codeEvidence?.callSiteCount||event?.codeEvidence?.callSites?.length||0)>0;
}

function isApprovedSessionAsset(event){
  const metadata=event?.governanceMetadata||{};
  return metadata.sessionAssetState==='check_approved'&&metadata.sessionAssetScope==='browser_prototype';
}

function isProtectedAssetEvent(event){
  return mainFlowEvents.includes(event)||volcanoAggregationAssets.includes(event)||androidNativeEvents.includes(event)||event?.name==='subscribe_cancel'||isApprovedSessionAsset(event);
}

function getActiveAssetEvents(){
  return events.filter(event=>hasFrontendCallSite(event)||isProtectedAssetEvent(event));
}

function getDeprecatedCandidateEvents(){
  return events.filter(event=>!hasFrontendCallSite(event)&&!isProtectedAssetEvent(event));
}

function calculateAssetStats(){
  const activeEvents=getActiveAssetEvents();
  const mainAssets=activeEvents.filter(event=>mainFlowEvents.includes(event)||event.source==='PRD 提交');
  return {
    total:activeEvents.length,
    main:mainAssets.length,
    fields:activeEvents.reduce((sum,event)=>sum+getEventBusinessFieldCount(event),0),
    mainFields:mainAssets.reduce((sum,event)=>sum+getEventBusinessFieldCount(event),0),
    code:activeEvents.filter(event=>event.codeEvidence).length,
    codeCalled:activeEvents.length,
    governanceBlocked:activeEvents.filter(event=>event.governanceAssessment?.status==='blocked').length,
    governanceReview:activeEvents.filter(event=>event.governanceAssessment?.status==='needs_review').length,
    governanceReady:activeEvents.filter(event=>event.governanceAssessment?.status==='ready').length,
    pending:activeEvents.filter(event=>event.status==='待确认').length,
    live:activeEvents.filter(event=>event.status==='已上线').length,
    developing:activeEvents.filter(event=>IN_PROGRESS_STATUSES.has(event.status)).length
  };
}
const assetStats=calculateAssetStats();
const metricElements=document.querySelectorAll('.metric-grid .metric');
function updateAssetMetricElements(){
  metricElements[0].querySelector('.metric-label').textContent='当前埋点资产';metricElements[0].querySelector('strong').textContent=assetStats.total;metricElements[0].querySelector('small').textContent=`${assetStats.code} 个已关联前端代码`;
  metricElements[1].querySelector('.metric-label').textContent='主流程埋点';metricElements[1].querySelector('strong').textContent=assetStats.main;metricElements[1].querySelector('small').textContent='覆盖 6 个核心环节';
  metricElements[2].querySelector('.metric-label').textContent='独有字段定义';metricElements[2].querySelector('strong').textContent=assetStats.fields;metricElements[2].querySelector('small').textContent=`主流程 ${assetStats.mainFields} 个`;
  metricElements[3].querySelector('.metric-label').textContent='已确认上线';metricElements[3].querySelector('strong').textContent=assetStats.live;metricElements[3].querySelector('small').textContent=`${assetStats.pending} 个代码资产待确认`;
  document.querySelector('[data-tab="all"] b').textContent=assetStats.total;document.querySelector('[data-tab="governance"] b').textContent=assetStats.governanceBlocked+assetStats.governanceReview;document.querySelector('[data-tab="issue"] b').textContent=assetStats.developing;
}
function updateCatalogTabCounts(scopedEvents){
  const scoped=Array.isArray(scopedEvents)?scopedEvents:[];
  const count=(predicate)=>scoped.filter(predicate).length;
  const governance=count(event=>event.governanceAssessment?.status!=='ready');
  document.querySelector('[data-tab="all"] b').textContent=scoped.length;
  document.querySelector('[data-tab="governance"] b').textContent=governance;
  document.querySelector('[data-tab="issue"] b').textContent=count(event=>IN_PROGRESS_STATUSES.has(event.status));
}
updateAssetMetricElements();
const rows=document.getElementById('eventRows');
function render(){}
function openDrawer(e){document.getElementById('drawerAction').textContent=e.name;const similar=events.filter(x=>x!==e&&(x.theme===e.theme||x.domain===e.domain)).slice(0,3);document.getElementById('drawerContent').innerHTML=`<div class="detail-summary"><div><span>事件说明</span><strong>${e.description}</strong></div><div><span>Theme</span><strong>${e.theme}</strong></div><div><span>业务模块</span><strong>${e.domain}</strong></div><div><span>状态</span><strong>${e.status}</strong></div></div><section class="drawer-section"><h3>上报时机</h3><p>${e.rule}</p></section><section class="drawer-section"><div class="section-line"><h3>属性字段</h3><span>${e.fields.length} 个</span></div>${e.fields.length?`<div class="field-table">${e.fields.map(f=>`<div><code>${f[0]}</code><span>${f[1]}</span><p>${f[2]}</p></div>`).join('')}</div>`:'<p class="empty">暂无额外属性</p>'}</section><section class="drawer-section"><div class="section-line"><h3>相似事件</h3><span>按 theme 与业务模块匹配</span></div><div class="similar-list">${similar.map(x=>`<button data-similar="${x.name}"><strong>${x.name}</strong><span>${x.description}</span></button>`).join('')}</div></section><div class="source-note">来源：${e.source}</div>`;document.querySelectorAll('[data-similar]').forEach(b=>b.onclick=()=>openDrawer(events.find(x=>x.name===b.dataset.similar)));document.getElementById('detailDrawer').classList.add('show');document.getElementById('drawerBackdrop').classList.add('show')}
function closeDrawer(){document.getElementById('detailDrawer').classList.remove('show');document.getElementById('drawerBackdrop').classList.remove('show')}document.getElementById('closeDrawer').onclick=closeDrawer;document.getElementById('drawerBackdrop').onclick=closeDrawer;
function getGlobalSearchTerms(query){
  const normalized=String(query||'').trim().toLowerCase();
  const terms=new Set(normalized.split(/[\s,，。；;、/]+/).filter(term=>term.length>1));
  (normalized.match(/[\u3400-\u9fff]{2,}/g)||[]).forEach(sequence=>{
    if(sequence.length<=4)terms.add(sequence);
    for(let size=2;size<=Math.min(4,sequence.length);size+=1){
      for(let index=0;index<=sequence.length-size;index+=1)terms.add(sequence.slice(index,index+size));
    }
  });
  return [...terms];
}

function getGlobalEventSearchDocument(event){
  const classification=getCatalogViewClassification(event);
  const reporting=getEventReportingLogic(event,getCatalogClassification(event));
  const fields=normalizeEventFields(event);
  return {
    action:String(event.name||'').toLowerCase(),
    primary:[event.description,event.rule,reporting.text,classification.businessDomain,classification.businessModule].join(' ').toLowerCase(),
    fields:fields.map(field=>[field.rawName,field.canonicalName,getFieldReportingLogic(field),...(field.allowedValues||[])].join(' ')).join(' ').toLowerCase(),
    code:[...(event.codeEvidence?.definitions||[]),...(event.codeEvidence?.callSites||[])].map(reference=>reference.file).join(' ').toLowerCase(),
    fieldCount:fields.length,
    classification,
    reporting
  };
}

function searchGlobalEvents(query){
  const normalized=String(query||'').trim().toLowerCase();
  const terms=getGlobalSearchTerms(normalized);
  if(!normalized||!terms.length)return [];
  return events.map(event=>{
    const document=getGlobalEventSearchDocument(event);
    let score=0;
    if(document.action===normalized)score+=180;
    else if(document.action.startsWith(normalized))score+=120;
    else if(document.action.includes(normalized))score+=90;
    terms.forEach(term=>{
      if(document.action.includes(term))score+=32;
      if(document.primary.includes(term))score+=18;
      if(document.fields.includes(term))score+=12;
      if(document.code.includes(term))score+=3;
    });
    return {event,document,score};
  }).filter(result=>result.score>0).sort((left,right)=>right.score-left.score||left.event.name.localeCompare(right.event.name)).slice(0,12);
}

function renderGlobalSearchResults(query){
  const container=document.getElementById('recommendation');
  const results=searchGlobalEvents(query);
  container.classList.toggle('has-results',Boolean(String(query||'').trim()));
  if(!String(query||'').trim()){
    container.innerHTML='';
    return;
  }
  if(!results.length){
    container.innerHTML='<span class="rec-label">0 条</span><strong>全部资产中没有匹配项，请尝试 action、业务动作、字段名或页面位置。</strong>';
    return;
  }
  container.innerHTML=`<div class="global-search-head"><span class="rec-label">${results.length} 条</span><strong>全局匹配结果</strong><small>按 action、上报逻辑、字段、枚举与代码位置排序</small></div><div class="global-search-results">${results.map(({event,document})=>`<button type="button" data-global-event="${escapeFieldHtml(event.name)}"><span><code>${escapeFieldHtml(event.name)}</code><small>${escapeFieldHtml(document.reporting.text)}</small></span><span><b>${escapeFieldHtml(document.classification.businessDomain)}</b><small>${document.fieldCount} 个独有字段</small></span><i>›</i></button>`).join('')}</div>`;
  container.querySelectorAll('[data-global-event]').forEach(button=>button.onclick=()=>openDrawerV2(events.find(event=>event.name===button.dataset.globalEvent)));
}

document.getElementById('analyzeBtn').onclick=()=>renderGlobalSearchResults(document.getElementById('ideaInput').value);
document.getElementById('ideaInput').addEventListener('keydown',event=>{
  if(event.key==='Enter'){
    event.preventDefault();
    renderGlobalSearchResults(event.currentTarget.value);
  }
});

function closeGlobalSearch(){
  const overlay=document.getElementById('globalSearchOverlay');
  overlay.hidden=true;
  document.querySelector('.top-search')?.focus();
}

function renderTopGlobalSearchResults(query){
  const container=document.getElementById('globalSearchPanelResults');
  const results=searchGlobalEvents(query);
  if(!String(query||'').trim()){
    container.innerHTML='<p>输入关键词，搜索埋点资产和废弃埋点。</p>';
    return;
  }
  if(!results.length){
    container.innerHTML='<p>没有匹配的埋点，请尝试 action、字段名或业务动作。</p>';
    return;
  }
  const deprecatedCandidates=new Set(getDeprecatedCandidateEvents());
  container.innerHTML=`<div class="top-global-results">${results.map(({event,document})=>{const target=deprecatedCandidates.has(event)?'废弃埋点':'埋点资产';return `<button type="button" data-top-global-event="${escapeFieldHtml(event.name)}"><span><code>${escapeFieldHtml(event.name)}</code><small>${escapeFieldHtml(document.reporting.text)}</small></span><b>${target}</b><i>›</i></button>`;}).join('')}</div>`;
  container.querySelectorAll('[data-top-global-event]').forEach(button=>button.onclick=()=>{
    const event=events.find(item=>item.name===button.dataset.topGlobalEvent);
    const targetView=deprecatedCandidates.has(event)?'deprecated':'catalog';
    closeGlobalSearch();
    document.querySelector(`[data-view="${targetView}"]`)?.click();
    openDrawerV2(event);
  });
}

document.querySelector('.top-search').onclick=()=>{
  const overlay=document.getElementById('globalSearchOverlay');
  overlay.hidden=false;
  const input=document.getElementById('globalSearchInput');
  input.value='';
  renderTopGlobalSearchResults('');
  input.focus();
};
document.getElementById('closeGlobalSearch').onclick=closeGlobalSearch;
document.getElementById('globalSearchOverlay').addEventListener('click',event=>{if(event.target===event.currentTarget)closeGlobalSearch();});
document.getElementById('globalSearchInput').addEventListener('input',event=>renderTopGlobalSearchResults(event.currentTarget.value));
document.addEventListener('keydown',event=>{
  if((event.metaKey||event.ctrlKey)&&event.key.toLowerCase()==='k'){
    event.preventDefault();
    document.querySelector('.top-search')?.click();
  }else if(event.key==='Escape'&&!document.getElementById('globalSearchOverlay').hidden){
    closeGlobalSearch();
  }
});
render=function(){};
function openDrawerV2(e){document.getElementById('drawerAction').textContent=e.name;const similar=events.filter(x=>x!==e&&(x.theme===e.theme||x.group===e.group)).slice(0,3);document.getElementById('drawerContent').innerHTML=`<div class="detail-summary"><div><span>事件说明</span><strong>${e.description}</strong></div><div><span>Theme</span><strong>${e.theme}</strong></div><div><span>一级业务域</span><strong>${e.group}</strong></div><div><span>二级业务模块</span><strong>${e.domain}</strong></div></div><section class="drawer-section"><h3>上报时机</h3><p>${e.rule}</p></section><section class="drawer-section"><div class="section-line"><h3>属性字段</h3><span>${e.fields.length} 个</span></div>${e.fields.length?`<div class="field-table">${e.fields.map(f=>`<div><code>${f[0]}</code><span>${f[1]}</span><p>${f[2]}</p></div>`).join('')}</div>`:'<p class="empty">暂无额外属性</p>'}</section><section class="drawer-section"><div class="section-line"><h3>相似事件</h3><span>按一级业务域与 Theme 匹配</span></div><div class="similar-list">${similar.map(x=>`<button data-similar="${x.name}"><strong>${x.name}</strong><span>${x.group} · ${x.domain} · ${x.description}</span></button>`).join('')}</div></section><div class="source-note">来源：${e.source}</div>`;document.querySelectorAll('[data-similar]').forEach(b=>b.onclick=()=>openDrawerV2(events.find(x=>x.name===b.dataset.similar)));document.getElementById('detailDrawer').classList.add('show');document.getElementById('drawerBackdrop').classList.add('show')}
document.querySelectorAll('.nav-item').forEach(b=>b.onclick=()=>{const label=b.querySelector('.nav-label')?.textContent.trim()||b.getAttribute('aria-label')||'';document.querySelectorAll('.nav-item').forEach(x=>x.classList.remove('active'));b.classList.add('active');document.getElementById('page-title').textContent=label;document.getElementById('pageEyebrow').textContent=label});document.querySelectorAll('.tab').forEach(b=>b.onclick=()=>{document.querySelectorAll('.tab').forEach(x=>{const active=x===b;x.classList.toggle('active',active);x.setAttribute('aria-pressed',String(active))});render()});['search','evidence'].forEach(id=>document.getElementById(id)?.addEventListener('input',render));
const modal=document.getElementById('modal');document.getElementById('addBtn').onclick=()=>document.querySelector('[data-view="intake"]')?.click();document.getElementById('closeModal').onclick=()=>modal.classList.remove('show');document.getElementById('cancelModal').onclick=()=>modal.classList.remove('show');document.getElementById('saveEvent').onclick=()=>{modal.classList.remove('show');document.querySelector('[data-view="intake"]')?.click();showToast('请在需求与设计中补齐 Tracking Contract v1 后提交方案评审')};document.getElementById('exportBtn').onclick=()=>showToast('报告已导出');document.querySelector('.range-control').onclick=()=>showToast('当前统计范围：近 7 日');document.getElementById('allActivity').onclick=()=>showToast('已展开全部动态');function showToast(t){const el=document.getElementById('toast');el.textContent=t;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),2200)}

const standardSections={assist:document.querySelector('.design-assist'),metrics:document.querySelector('.metric-grid'),toolbar:document.querySelector('.catalog-head-status'),table:document.querySelector('.table-panel'),bottom:document.querySelector('.bottom-grid')};
function buildCatalogSubtitle(){
  const repository=frontendTrackingManifest?.repository;
  const revision=repository?[repository.branch,repository.commitShort].filter(Boolean).join(' · '):'';
  const codeSummary=assetStats.code?`已对齐前端 ${assetStats.code} 个 action${revision?`（${revision}）`:''}`:'尚未载入前端代码清单';
  return `共 ${assetStats.total} 个事件，其中 ${assetStats.main} 个主流程事件；${codeSummary}，包含 ${assetStats.fields} 个事件独有字段定义。`;
}
const viewCopy={intake:['产品需求','产品说明想观测的用户行为，平台对照已有埋点并提示需要补充的字段。'],review:['埋点 Check',''],debug:['研发上报',''],acceptance:['验收上线',''],issues:['问题上报','登记漏报、错报、字段异常、聚合口径反馈和停用申请。'],catalog:['埋点资产',buildCatalogSubtitle()],deprecated:['废弃埋点','集中查看仅有定义或暂无代码证据的埋点；这是静态扫描候选，不代表生产环境已确认废弃。'],locations:['采集追溯','按前端、后端、火山聚合和 Android 汇总全库采集归属。'],commonFields:['公共字段','统一维护所有事件可复用的用户、设备、渠道和业务上下文字段。']};
function refreshAssetStats(){
  refreshGovernanceAssessments();
  Object.assign(assetStats,calculateAssetStats());
  updateAssetMetricElements();
  viewCopy.catalog[1]=buildCatalogSubtitle();
}
function switchView(view){const special=document.getElementById('specialView'),copy=viewCopy[view]||viewCopy.requirements,subtitle=document.getElementById('page-subtitle');document.getElementById('page-title').textContent=copy[0];subtitle.textContent=copy[1];subtitle.hidden=!copy[1];Object.values(standardSections).forEach(el=>el.classList.add('view-hidden'));special.classList.remove('show');special.innerHTML='';if(view==='requirements'){standardSections.assist.classList.remove('view-hidden');standardSections.toolbar.classList.remove('view-hidden');standardSections.table.classList.remove('view-hidden')}else if(view==='design'){special.classList.add('show');special.innerHTML=`<div class="tracking-builder"><section class="builder-form"><div class="builder-head"><div><h2>定义统计目标</h2><p>从产品问题生成一份可交付的埋点方案</p></div><span>草稿</span></div><div class="builder-fields"><label class="wide">要回答的问题<textarea placeholder="例如：用户点击生成后，在哪一步流失最多？"></textarea></label><label>产品端<select><option>PixPop Web</option><option>PixPop App</option></select></label><label>业务模块<select><option>主流程 / 生成</option><option>用户与账号</option><option>商业化</option></select></label><label>页面位置<input value="生成页 / 底部操作区" /></label><label>交互动作<select><option>点击</option><option>曝光</option><option>提交</option><option>完成</option></select></label></div><button class="btn primary builder-generate">生成埋点方案</button></section><aside class="builder-preview"><div class="builder-head"><div><h2>方案预览</h2><p>保存前完成命名和字段检查</p></div><span class="preview-state">待生成</span></div><div class="preview-block"><small>事件名称</small><code>generate_button_click</code></div><div class="preview-block"><small>触发时机</small><p>用户点击生成按钮且请求成功发送时</p></div><div class="preview-block"><small>建议属性</small><div class="property-tags"><span>app_id</span><span>template_id</span><span>entry_point</span></div></div><div class="preview-checks"><p><b>✓</b> 命名符合规范</p><p><b>✓</b> 未发现重复事件</p><p><b>·</b> 等待绑定产品位置</p></div></aside></div>`}else if(view==='catalog'){standardSections.assist.classList.remove('view-hidden');standardSections.toolbar.classList.remove('view-hidden');standardSections.table.classList.remove('view-hidden')}else if(view==='check'){special.classList.add('show');special.innerHTML=`<div class="view-stats"><div><span>待处理</span><strong>12</strong><small>需要负责人确认</small></div><div><span>命名不规范</span><strong>5</strong><small>action 不符合规范</small></div><div><span>字段缺失</span><strong>4</strong><small>缺少类型或说明</small></div><div><span>疑似重复</span><strong>3</strong><small>相似度超过 85%</small></div></div><div class="issue-panel"><div class="view-panel-head"><div><h2>检查结果</h2><p>按风险优先级排序</p></div><button class="btn secondary">重新检查</button></div><div class="issue-row"><span class="severity high">高</span><div><strong>pricing_premium_subscibe_click</strong><p>事件名疑似拼写错误：subscibe → subscribe</p></div><em>命名规范</em><button>处理</button></div><div class="issue-row"><span class="severity medium">中</span><div><strong>remix_begin_click</strong><p>同时存在 app_id 与 appid，字段口径不一致</p></div><em>字段一致性</em><button>处理</button></div><div class="issue-row"><span class="severity low">低</span><div><strong>remix_guide_close_click</strong><p>已停用事件近 30 日仍存在少量上报</p></div><em>生命周期</em><button>查看</button></div></div>`}else if(view==='locations'){special.classList.add('show');special.innerHTML=`<div class="location-layout"><aside class="location-tree"><h2>产品位置</h2><button class="tree-active">▾ PixPop Web <b>8</b></button><button>　├ 首页 <b>2</b></button><button>　├ 登录注册 <b>3</b></button><button>　├ 定价页 <b>3</b></button><button>▸ PixPop App <b>5</b></button></aside><div class="location-main"><div class="view-panel-head"><div><h2>PixPop Web / 登录注册</h2><p>3 个事件 · 最近更新 2026-07-15</p></div><button class="btn primary">＋ 绑定位置</button></div><div class="location-card"><span class="position-index">01</span><div><strong>LoginButton</strong><p>首页 / Header / 登录按钮</p><code>login_button_click</code></div><em>点击</em></div><div class="location-card"><span class="position-index">02</span><div><strong>RegistrationModal</strong><p>全局 / 注册弹窗 / 关闭</p><code>registration_pop_up</code></div><em>关闭</em></div><div class="location-card"><span class="position-index">03</span><div><strong>PageContainer</strong><p>全局页面 / 加载完成</p><code>userpath</code></div><em>曝光</em></div></div></div>`}else{special.classList.add('show');special.innerHTML=`<div class="empty-view"><strong>${copy[0]}</strong><p>${copy[1]}</p><button class="btn primary">开始配置</button></div>`}}
document.querySelectorAll('.nav-item').forEach(item=>item.addEventListener('click',()=>switchView(item.dataset.view)));function renderCommonFields(){const special=document.getElementById('specialView');special.classList.add('show');special.innerHTML=`<div class="common-fields"><div class="view-panel-head"><div><h2>公共字段库</h2><p>所有埋点默认复用的标准属性</p></div><button class="btn primary">＋ 新增字段</button></div><div class="common-field-head"><span>字段名称</span><span>类型</span><span>适用范围</span><span>覆盖率</span><span>维护人</span><span></span></div><div class="common-field-row"><div><code>user_id</code><small>用户唯一标识</small></div><span>String</span><span>全部事件</span><strong>100%</strong><span>数据平台</span><button>›</button></div><div class="common-field-row"><div><code>platform</code><small>Web / iOS / Android</small></div><span>String</span><span>全部事件</span><strong>99.8%</strong><span>客户端</span><button>›</button></div><div class="common-field-row"><div><code>app_version</code><small>客户端版本号</small></div><span>String</span><span>App 事件</span><strong>98.6%</strong><span>客户端</span><button>›</button></div><div class="common-field-row"><div><code>channel_code</code><small>投放与包体渠道</small></div><span>String</span><span>增长事件</span><strong>96.2%</strong><span>增长数据</span><button>›</button></div><div class="common-field-row"><div><code>session_id</code><small>访问会话标识</small></div><span>String</span><span>行为事件</span><strong>94.7%</strong><span>数据平台</span><button>›</button></div></div>`}document.querySelector('[data-view="commonFields"]').addEventListener('click',renderCommonFields);switchView('catalog');

const commonFieldsData=[
  {name:'device_type',category:'场景基本信息',scenes:'主站, 主站（老）, 静态页, IOS',timing:'全部都发',example:"APP / MOBILE（h5）/ PC",description:'区分主站项目的 3 个端',inProperties:true},
  {name:'sessionId',category:'用户相关信息',scenes:'主站, 主站（老）, 静态页',timing:'全部都发',example:'',description:'前端生成的 ID，按浏览器 session 生命周期刷新',inProperties:false},
  {name:'user_id',category:'用户相关信息',scenes:'主站, 主站（老）, 静态页, IOS',timing:'登录后发送',example:'',description:'用户 ID，登录后存在',inProperties:false},
  {name:'uniqueId',category:'用户相关信息',scenes:'主站, 主站（老）, 静态页, IOS',timing:'未登录时发送；注册、自动登录事件与 user_id 同时发送；静态页始终发送',example:'',description:'前端生成的匿名用户标识，不清理浏览器时保持不变',inProperties:false},
  {name:'is_visitor',category:'用户相关信息',scenes:'主站, 主站（老）',timing:'游客模式或登录后发送',example:'true / undefined',description:'游客模式状态，H5、Web、iOS 不发送',inProperties:true},
  {name:'user_version',category:'用户相关信息',scenes:'主站, 主站（老）',timing:'全部都发',example:'non_app / ad / h5 / share / other / unknown',description:'后端提供的用户来源',inProperties:true},
  {name:'vip_status',category:'用户相关信息',scenes:'主站, 主站（老）',timing:'全部都发',example:'套餐 / undefined',description:'用户当前套餐',inProperties:true},
  {name:'app_version',category:'用户手机相关信息',scenes:'主站, 主站（老）',timing:'仅 App 有值',example:'',description:'应用版本',inProperties:true},
  {name:'page',category:'推荐信息',scenes:'主站, 主站（老）',timing:'除部分事件外发送',example:'',description:'当前推荐页面标识',inProperties:true},
  {name:'page_timestamp',category:'推荐信息',scenes:'主站, 主站（老）',timing:'除部分事件外发送',example:'',description:'当前推荐页面时间戳',inProperties:true},
  {name:'page_url',category:'推荐信息',scenes:'主站, 主站（老）',timing:'除部分事件外发送',example:'',description:'当前推荐页面 URL',inProperties:true},
  {name:'refer_page',category:'推荐信息',scenes:'主站, 主站（老）',timing:'除部分事件外发送',example:'',description:'前序推荐页面标识',inProperties:true},
  {name:'refer_page_timestamp',category:'推荐信息',scenes:'主站, 主站（老）',timing:'除部分事件外发送',example:'',description:'前序推荐页面时间戳',inProperties:true},
  {name:'refer_page_url',category:'推荐信息',scenes:'主站, 主站（老）',timing:'除部分事件外发送',example:'',description:'前序推荐页面 URL',inProperties:true},
  {name:'source',category:'额外信息',scenes:'主站, 主站（老）, 静态页',timing:'与 plan、traceId、firstenterurl、referrerurl 一起发送',example:'',description:'归因来源',inProperties:true},
  {name:'plan',category:'额外信息',scenes:'主站, 主站（老）, 静态页',timing:'未登录且 URL 存在归因参数时更新',example:'',description:'归因计划参数',inProperties:true},
  {name:'traceId',category:'额外信息',scenes:'主站, 主站（老）, 静态页',timing:'归因值未更新时持续发送已保存值',example:'',description:'归因链路标识',inProperties:true},
  {name:'firstenterurl',category:'额外信息',scenes:'主站, 主站（老）, 静态页',timing:'归因字段组一起发送',example:'/app',description:'24 小时内首次进入 A1 的路径',inProperties:true},
  {name:'referrerurl',category:'额外信息',scenes:'主站, 主站（老）, 静态页',timing:'归因字段组一起发送',example:'',description:'24 小时内首次进入 A1 的 document.referrer',inProperties:true},
  {name:'utc_time',category:'其他信息',scenes:'主站, 主站（老）, 静态页',timing:'全部都发',example:'2026-01-17 11:25:04',description:'UTC 时间',inProperties:false},
  {name:'hrefUrl',category:'其他信息',scenes:'主站, 主站（老）, 静态页',timing:'全部都发',example:'https://a1.art/app?xxx=xxx',description:'浏览器当前完整 URL',inProperties:false},
  {name:'device_id',category:'其他信息',scenes:'主站, 主站（老）, 静态页',timing:'全部都发',example:'',description:'设备标识，仅 App 数据稳定，其他端可能为 undefined',inProperties:false},
  {name:'theme',category:'其他信息',scenes:'主站, 主站（老）, 静态页, IOS',timing:'全部都发',example:'behaviour / commercial',description:'埋点功能类型，多数现有事件发送 behaviour',inProperties:false},
  {name:'count',category:'其他信息',scenes:'主站（老）, 静态页',timing:'仅老埋点发送',example:'',description:'打开 A1 后发送的埋点序号，新埋点已停用',inProperties:false},
  {name:'time',category:'其他信息',scenes:'主站, 主站（老）, 静态页, IOS',timing:'全部都发',example:'1768620304653',description:'毫秒时间戳',inProperties:false},
  {name:'distinct_id',category:'其他信息',scenes:'主站, 主站（老）, 静态页, IOS',timing:'全部都发',example:'',description:'每个埋点单独生成的 nanoid 唯一键',inProperties:false},
  {name:'business_type',category:'其他信息',scenes:'主站, 主站（老）, 静态页, IOS',timing:'全部都发',example:'A1',description:'业务类型',inProperties:false},
  {name:'product（火山product_lower）',category:'其他信息',scenes:'主站, 主站（老）, 静态页, IOS',timing:'全部都发',example:'a1 / popdoll / minimix',description:'矩阵包',inProperties:false}
].map(field=>({...field,path:field.name,type:'-',contractId:'platform_common',contractLabel:'全平台 / Web 公共字段',injector:field.inProperties?'统一属性层':'顶层信封'}));
const allCommonFieldsData=[
  ...commonFieldsData,
  ...ANDROID_COMMON_CONTRACT.fields.map(field=>({...field,scenes:'Android Native',contractId:ANDROID_COMMON_CONTRACT.id,contractLabel:ANDROID_COMMON_CONTRACT.label}))
];

function renderExcelCommonFields(){
  const special=document.getElementById('specialView');
  special.classList.add('show');
  special.innerHTML=`<div class="asset-view-control cf-contract-control"><div class="asset-view-tabs cf-contract-tabs" role="tablist" aria-label="公共字段契约"><button type="button" role="tab" aria-selected="true" class="active" data-common-contract="platform_common"><span>全平台 / Web</span><b>${commonFieldsData.length}</b></button><button type="button" role="tab" aria-selected="false" data-common-contract="${ANDROID_COMMON_CONTRACT.id}"><span>${ANDROID_COMMON_CONTRACT.label}</span><b>${ANDROID_COMMON_CONTRACT.fields.length}</b></button></div><p class="asset-view-context"><strong id="commonContractLabel">全平台 / Web</strong><span id="commonContractDescription">来自公共字段表；相同字段名按完整 wire path 保留，不计入事件独有 Properties</span></p></div><div class="cf-panel"><div class="cf-toolbar"><label class="cf-search">⌕<input id="commonFieldSearch" type="search" placeholder="搜索当前契约的字段路径、说明或注入来源" /></label></div><div class="cf-table-wrap"><table class="cf-table"><thead><tr><th>Wire path / 说明</th><th>契约</th><th>类型 / 分类</th><th>发送时机</th><th>注入来源</th><th>Raw 层级</th></tr></thead><tbody id="commonFieldRows"></tbody></table></div><div class="cf-foot"><span id="commonFieldCount"></span><span id="commonFieldSource">来源：公共字段.xlsx / 公共字段表</span></div></div>`;
  const rows=document.getElementById('commonFieldRows');
  let activeContract='platform_common';
  const renderRows=()=>{
    const query=document.getElementById('commonFieldSearch').value.trim().toLowerCase();
    const contractFields=allCommonFieldsData.filter(field=>field.contractId===activeContract);
    const filtered=contractFields.filter(field=>!query||[field.path,field.description,field.injector,field.category].join(' ').toLowerCase().includes(query));
    rows.innerHTML=filtered.map(field=>{const type=String(field.type||'').trim();const typeMarkup=type&&type!=='-'?`<span class="cf-type">${escapeFieldHtml(type)}</span>`:'';return `<tr><td><code>${escapeFieldHtml(field.path)}</code><small>${escapeFieldHtml(field.description)}</small></td><td><span class="cf-contract-badge">${escapeFieldHtml(field.contractLabel)}</span></td><td class="cf-type-category">${typeMarkup}<small>${escapeFieldHtml(field.category)}</small></td><td class="cf-timing" title="${escapeFieldHtml(field.timing)}">${escapeFieldHtml(field.timing)}</td><td>${escapeFieldHtml(field.injector||'-')}</td><td><span class="cf-property ${field.inProperties?'yes':'no'}">${field.inProperties?'properties':'顶层信封'}</span></td></tr>`;}).join('')||'<tr><td class="cf-empty" colspan="6">当前契约中没有匹配字段</td></tr>';
    document.getElementById('commonFieldCount').textContent=`显示 ${filtered.length} / ${contractFields.length} 条字段路径`;
    document.getElementById('commonFieldSource').textContent=activeContract===ANDROID_COMMON_CONTRACT.id?`来源：${ANDROID_COMMON_CONTRACT.source}`:'来源：公共字段.xlsx / 公共字段表';
    const isAndroid=activeContract===ANDROID_COMMON_CONTRACT.id;
    document.getElementById('commonContractLabel').textContent=isAndroid?ANDROID_COMMON_CONTRACT.label:'全平台 / Web';
    document.getElementById('commonContractDescription').textContent=isAndroid?'Android SDK 统一注入的公共信封字段，保留实际 Raw 层级':'来自公共字段表；相同字段名按完整 wire path 保留，不计入事件独有 Properties';
  };
  document.getElementById('commonFieldSearch').addEventListener('input',renderRows);
  special.querySelectorAll('[data-common-contract]').forEach(button=>button.addEventListener('click',()=>{
    activeContract=button.dataset.commonContract;
    special.querySelectorAll('[data-common-contract]').forEach(tab=>{
      const selected=tab===button;
      tab.classList.toggle('active',selected);
      tab.setAttribute('aria-selected',String(selected));
    });
    document.getElementById('commonFieldSearch').value='';
    renderRows();
  }));
  renderRows();
}
document.querySelector('[data-view="commonFields"]').addEventListener('click',renderExcelCommonFields);

function renderTrackingReportLegacy(){
  const special=document.getElementById('specialView');
  special.classList.add('show');
  special.innerHTML=`<div class="report-layout"><section class="report-config"><div class="report-section-head"><div><h2>上报配置</h2><p>选择事件并补充本次模拟上报的运行参数</p></div><div class="environment-switch"><button class="active" data-env="test">测试模拟</button><button data-env="production">生产预览</button></div></div><div class="report-form"><label class="wide">事件名称<select id="reportEvent">${events.map(event=>`<option value="${escapeFieldHtml(event.name)}">${escapeFieldHtml(event.name)} - ${escapeFieldHtml(getEventReportingLogic(event).text)}</option>`).join('')}</select></label><label>触发端<select id="reportPlatform"><option value="PC">Web / PC</option><option value="MOBILE">H5 / Mobile</option><option value="APP">iOS / App</option></select></label><label>用户标识<input id="reportUser" value="1820730895731752961" /></label><label>请求地址<input id="reportEndpoint" value="/v1/track（未连接）" readonly /></label><label>上报方式<select id="reportMethod"><option>即时上报</option><option>批量上报</option></select></label><label class="wide">事件 Properties<textarea id="reportProperties" spellcheck="false">{
  "source": "tracking_console",
  "page": "event_report"
}</textarea></label></div><div class="report-actions"><button class="btn secondary" id="validateReport">校验参数</button><button class="btn primary" id="sendTestReport">运行模拟上报</button></div></section><aside class="report-preview"><div class="report-section-head"><div><h2>请求预览</h2><p>运行前确认公共信封和事件参数</p></div><span class="report-state ready" id="reportState">可模拟</span></div><div class="request-meta"><span id="reportEnvLabel">TEST</span><code>POST /v1/track · MOCK</code></div><pre id="reportPayload"></pre><div class="report-checks"><div><span>✓</span><p><strong>事件已登记</strong><small>来自埋点资产</small></p></div><div><span id="reportEnvelopeMark">✓</span><p><strong>公共信封已补齐</strong><small id="reportEnvelopeText">business_type、device_type、user_id、time、theme</small></p></div><div><span>✓</span><p><strong>JSON 格式有效</strong><small id="jsonCheckText">3 个自定义属性</small></p></div></div></aside></div><section class="report-history"><div class="view-panel-head"><div><h2>最近模拟上报</h2><p>仅保留当前浏览器会话中的模拟结果</p></div><button class="btn secondary" id="clearReportHistory">清空记录</button></div><div class="report-history-head"><span>时间</span><span>事件</span><span>环境</span><span>触发端</span><span>模拟响应</span><span>状态</span></div><div id="reportHistoryRows"><div class="report-history-row"><time>刚刚</time><code>login_button_click</code><span>TEST</span><span>Web / PC</span><span>200 · 42 ms</span><b class="success">成功</b></div><div class="report-history-row"><time>3 分钟前</time><code>generate_button_click</code><span>TEST</span><span>iOS / App</span><span>200 · 67 ms</span><b class="success">成功</b></div><div class="report-history-row"><time>12 分钟前</time><code>pricing_popup</code><span>TEST</span><span>H5 / Mobile</span><span>400 · 参数缺失</span><b class="failed">失败</b></div></div></section>`;
  if(importedPrdEvents.length){
    const reportPlan=submittedChangePlan.length?submittedChangePlan:(globalThis.PrdAssetSync?.buildChangePlan(importedPrdEvents,events)||[]);
    const reportRows=renderWorkflowContractRows(importedPrdEvents,reportPlan,globalThis.PrdAssetSync);
    document.querySelector('.report-layout')?.insertAdjacentHTML('beforebegin',`<section class="report-contract-panel prd-imported-design"><div class="view-panel-head"><div><h2>埋点设计交付表</h2><p>使用同一份最终契约核对 Action、字段 Key 和 Value</p></div><span class="prototype-badge">同一份最终契约</span></div>${renderWorkflowDiffSummary(importedPrdEvents)}${renderWorkflowContractTable(reportRows)}</section>`);
  }
  let environment='test';
  const state=document.getElementById('reportState');
  const properties=document.getElementById('reportProperties');
  const eventSelect=document.getElementById('reportEvent');
  if(eventSelect){
    Array.from(eventSelect.options).forEach(option=>{
      const event=events.find(item=>item.name===option.value);
      if(!event)return;
      const logic=getEventReportingLogic(event);
      option.textContent=`${event.name} · ${logic.text}`;
    });
  }
  const governance=globalThis.TrackingGovernance;
  document.querySelector('.report-checks').insertAdjacentHTML('beforeend','<div><span>·</span><p><strong>事件契约检查</strong><small id="reportContractText">等待校验字段</small></p></div>');
  const sampleForType=type=>{
    const canonical=governance?.normalizeType(type).canonical||type;
    if(canonical==='boolean')return false;
    if(canonical==='integer'||canonical==='number')return 0;
    if(canonical==='array')return [];
    if(canonical==='object')return {};
    if(canonical==='datetime')return new Date().toISOString();
    return 'sample';
  };
  const getSelectedAsset=()=>events.find(event=>event.name===eventSelect.value);
  const buildSampleProperties=event=>{
    const result={};
    (event?.fields||[]).forEach(field=>{
      const key=String(field?.[0]||'').trim();
      const meta=event.fieldMeta?.[key]||{};
      if(!key||governance?.isCommonEnvelopeField(key,{manifest:frontendTrackingManifest,event}))return;
      if(meta.required!==true&&Object.keys(result).length>=3)return;
      result[key]=meta.example??meta.allowedValues?.[0]??sampleForType(meta.type||field?.[1]);
    });
    return result;
  };
  const validateRuntimeProperties=(event,custom)=>{
    if(!governance?.validatePayload)return ['治理校验模块未加载'];
    const result=governance.validatePayload(event,custom,{manifest:frontendTrackingManifest});
    return result.errors.map(issue=>issue.message);
  };
  let latestReportErrors=[];
  const updatePreview=()=>{
    let custom={};
    let jsonError=false;
    try{
      custom=JSON.parse(properties.value);
      document.getElementById('jsonCheckText').textContent=`${Object.keys(custom).length} 个自定义属性`;
    }catch(error){
      jsonError=true;
      document.getElementById('jsonCheckText').textContent='请检查 Properties 格式';
    }
    const selectedEvent=getSelectedAsset();
    const userId=document.getElementById('reportUser').value.trim();
    const platform=document.getElementById('reportPlatform').value;
    const envelopeErrors=[];
    if(!selectedEvent)envelopeErrors.push('事件 action 未登记');
    if(!platform)envelopeErrors.push('公共信封缺少 device_type');
    if(!userId)envelopeErrors.push('公共信封缺少 user_id');
    const envelopeText=document.getElementById('reportEnvelopeText');
    const envelopeMark=document.getElementById('reportEnvelopeMark');
    envelopeText.textContent=envelopeErrors[0]||'由平台统一注入 business_type、device_type、user_id、time、theme';
    envelopeMark.textContent=envelopeErrors.length?'!':'✓';
    latestReportErrors=jsonError?['Properties 不是有效 JSON']:[...envelopeErrors,...validateRuntimeProperties(selectedEvent,custom)];
    state.textContent=jsonError?'JSON 错误':latestReportErrors.length?`${latestReportErrors.length} 项错误`:'契约通过';
    state.className=`report-state ${latestReportErrors.length?'error':'ready'}`;
    document.getElementById('reportContractText').textContent=latestReportErrors[0]||'必填、类型、枚举与公共字段均通过';
    const payload={action:document.getElementById('reportEvent').value,business_type:'A1',device_type:platform,user_id:userId,time:Date.now(),theme:'behaviour',properties:custom};
    document.getElementById('reportPayload').textContent=JSON.stringify(payload,null,2);
    document.getElementById('reportEnvLabel').textContent=environment.toUpperCase();
  };
  document.querySelectorAll('.environment-switch button').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.environment-switch button').forEach(item=>item.classList.remove('active'));button.classList.add('active');environment=button.dataset.env;updatePreview()}));
  ['reportPlatform','reportUser','reportProperties'].forEach(id=>document.getElementById(id).addEventListener('input',updatePreview));
  eventSelect.addEventListener('change',()=>{properties.value=JSON.stringify(buildSampleProperties(getSelectedAsset()),null,2);updatePreview()});
  document.getElementById('validateReport').onclick=()=>{updatePreview();showToast(latestReportErrors.length?`参数校验失败：${latestReportErrors[0]}`:'契约校验通过，可以运行模拟上报')};
  document.getElementById('sendTestReport').onclick=()=>{
    updatePreview();
    if(latestReportErrors.length){showToast(`上报已阻断：${latestReportErrors[0]}`);return}
    const eventName=document.getElementById('reportEvent').value,platform=document.getElementById('reportPlatform').selectedOptions[0].textContent;
    document.getElementById('reportHistoryRows').insertAdjacentHTML('afterbegin',`<div class="report-history-row new"><time>刚刚</time><code>${eventName}</code><span>${environment.toUpperCase()}</span><span>${platform}</span><span>200 · 38 ms</span><b class="success">成功</b></div>`);
    showToast('模拟上报已通过契约校验，未发送真实请求');
  };
  document.getElementById('clearReportHistory').onclick=()=>{document.getElementById('reportHistoryRows').innerHTML='<div class="report-history-empty">暂无测试上报记录</div>';showToast('测试记录已清空')};
  if(events.some(event=>event.name==='app_click'))eventSelect.value='app_click';
  properties.value=JSON.stringify(buildSampleProperties(getSelectedAsset()),null,2);
  updatePreview();
}
document.querySelectorAll('.nav-item').forEach(item=>item.addEventListener('click',()=>{document.querySelector('.range-control').style.display=['catalog','locations','commonFields'].includes(item.dataset.view)?'':'none'}));

let prdPasteDraft=globalThis.PrdPasteParser?.productDemandExampleText||globalThis.PrdPasteParser?.standardExampleText||globalThis.PrdPasteParser?.exampleText||'';
let importedPrdEvents=[];
let importedPrdValidation=[];
let importedPrdParserIssues=[];
let submittedChangePlan=[];
let intakeMode='paste';
let analystReviewState={status:'未提交',submittedAt:'',reviewedAt:'',note:''};
function addIntakeModeSwitch(activeMode){
  const modes=[
    ['paste','PRD 导入','自动整理复制内容'],
    ['direct','产品需求','描述想观测的行为']
  ];
  if(importedPrdEvents.length)modes.push(['contract','设计交付表',`${importedPrdEvents.length} 个事件`]);
  const markup=`<div class="intake-mode-switch" role="tablist" aria-label="需求与设计录入方式">${modes.map(([mode,label,hint])=>`<button type="button" role="tab" data-intake-mode="${mode}" aria-selected="${activeMode===mode}" class="${activeMode===mode?'active':''}"><strong>${label}</strong><small>${hint}</small></button>`).join('')}</div>`;
  document.getElementById('specialView').insertAdjacentHTML('afterbegin',markup);
  document.querySelectorAll('[data-intake-mode]').forEach(button=>button.onclick=()=>renderRequirementsDesign(button.dataset.intakeMode));
}

function renderRequirementsDesign(mode=intakeMode){
  intakeMode=['paste','direct','contract'].includes(mode)?mode:'paste';
  if(intakeMode==='direct')renderDirectTrackingDesign();
  else if(intakeMode==='contract'&&importedPrdEvents.length)renderImportedPrdDesign();
  else{
    intakeMode='paste';
    renderPrdTableReport();
  }
  addIntakeModeSwitch(intakeMode);
}

function getDemandActionResolution(item){
  const rawTier=item?.actionResolution?.tier||item?.decision||'new';
  const tier=rawTier==='exact'||rawTier==='reuse'?'exact':rawTier==='review'||rawTier==='related'||rawTier==='fuzzy'?'review':'new';
  const fallbackCandidates=(item?.relatedEvents||[]).map(event=>({event,reasons:[],conflicts:[]}));
  const candidates=(item?.actionResolution?.candidates?.length?item.actionResolution.candidates:fallbackCandidates)
    .map(candidate=>candidate?.event?candidate:{event:candidate,reasons:candidate?.reasons||[],conflicts:candidate?.conflicts||[]})
    .filter(candidate=>candidate?.event?.name);
  if(tier==='exact'&&item?.matchedEvent&&!candidates.some(candidate=>candidate.event.name===item.matchedEvent.name)){
    candidates.unshift({event:item.matchedEvent,reasons:[item.evidence].filter(Boolean),conflicts:[]});
  }
  return {
    tier,
    selectedAction:item?.actionResolution?.selectedAction||item?.matchedEvent?.name||item?.proposedAction||'',
    candidates
  };
}

function formatDemandEvidence(value){
  return String(value??'')
    .replace(/字段名称与说明相似度\s*\d+(?:\.\d+)?%/g,'字段名称与说明相近')
    .replace(/名称相似度\s*\d+(?:\.\d+)?%/g,'名称语义相近')
    .replace(/\b\d+(?:\.\d+)?%\b/g,'')
    .replace(/\s{2,}/g,' ')
    .trim();
}

function renderDemandFieldDecisions(fields,options){
  fields=fields||[];
  options=options||{};
  const statusLabels={
    existing:'当前 Action 复用',
    reused:'已有 Key 复用',
    'value-add':'复用 Key，补枚举',
    fuzzy:'相近 Key 待确认',
    new:'新建 Key 提案'
  };
  if(!fields.length)return '<div class="demand-field-empty"><strong>暂无独有字段建议</strong><span>用户、设备和会话字段继续由公共信封注入。</span></div>';
  const rows=fields.map(field=>{
    const status=statusLabels[field.status]?field.status:'new';
    const key=field.key||field.canonicalProposal||field.candidates?.[0]?.key||'字段待确认';
    const fieldCandidates=field.candidates||[];
    const directSources=Array.isArray(field.sourceActions)?field.sourceActions:field.sourceActions?[field.sourceActions]:[];
    const candidateSources=fieldCandidates.flatMap(candidate=>Array.isArray(candidate?.sourceActions)?candidate.sourceActions:candidate?.sourceActions?[candidate.sourceActions]:[]);
    const sourceValues=[...directSources,field.sourceAction,...candidateSources]
      .map(source=>typeof source==='string'?source:source?.name||source?.action||source?.event?.name||'')
      .filter(Boolean);
    const sources=[...new Set(sourceValues)];
    const candidateKeys=[...new Set(fieldCandidates.map(candidate=>candidate?.key||candidate?.field?.[0]||'').filter(Boolean))];
    const sourceParts=[];
    if(candidateKeys.length&&field.status==='fuzzy')sourceParts.push(`候选 ${candidateKeys.slice(0,3).join('、')}`);
    if(sources.length)sourceParts.push(`来源 ${sources.slice(0,3).join('、')}`);
    const sourceText=sourceParts.join('；')||(field.status==='new'?'未发现可复用字段':'暂无可核对来源');
    const candidateReasons=fieldCandidates.flatMap(candidate=>[...(candidate?.reasons||[]),...(candidate?.conflicts||[]).map(conflict=>`需确认：${conflict}`)]);
    const detail=formatDemandEvidence(field.reason||candidateReasons.join('；')||field.description||'需由数据负责人确认字段口径');
    const type=field.type?`<small>${escapeFieldHtml(field.type)}</small>`:'';
    const selectionId=field.selectionId||field.intent||field.requestedKey||key;
    const choiceAttribute=options.choiceMode==='paste'?'data-demand-field-choice':'data-direct-field-choice';
    const requestAttribute=options.choiceMode==='paste'?` data-demand-request-index="${Number(options.requestIndex)||0}"`:'';
    const intentAttribute=` data-field-selection-id="${escapeFieldHtml(selectionId)}"`;
    const reusableChoices=[...new Set(fieldCandidates.map(candidate=>candidate?.key||'').filter(Boolean))].slice(0,3).map(candidateKey=>`<button class="demand-field-choice" type="button" ${choiceAttribute}="${escapeFieldHtml(candidateKey)}"${intentAttribute}${requestAttribute} aria-label="复用字段 ${escapeFieldHtml(candidateKey)}">复用 <code>${escapeFieldHtml(candidateKey)}</code></button>`).join('');
    const newProposalKey=field.newProposalKey||key;
    const newChoice=`<button class="demand-field-choice is-new" type="button" ${choiceAttribute}="__new__"${intentAttribute}${requestAttribute} aria-label="新建字段提案 ${escapeFieldHtml(newProposalKey)}">新建 <code>${escapeFieldHtml(newProposalKey)}</code></button>`;
    const choices=status==='fuzzy'&&options.interactive?`<div class="demand-field-choices" aria-label="字段处理选择">${reusableChoices}${newChoice}</div>`:'';
    return `<div class="demand-field-row is-${escapeFieldHtml(status)}" role="row"><span class="demand-field-status" role="cell">${statusLabels[status]}</span><div role="cell"><code>${escapeFieldHtml(key)}</code>${type}</div><div class="demand-field-evidence" role="cell"><span>${escapeFieldHtml(sourceText)}</span>${detail?`<small>${escapeFieldHtml(detail)}</small>`:''}${choices}</div></div>`;
  }).join('');
  return `<div class="demand-field-table" role="table" aria-label="字段复用依据"><div class="demand-field-row is-head" role="row"><span role="columnheader">处理</span><span role="columnheader">字段 Key</span><span role="columnheader">复用依据</span></div>${rows}</div>`;
}

function renderDemandRecommendation(item,options){
  options=options||{};
  const resolution=getDemandActionResolution(item);
  const tierCopy={
    exact:{label:'精确复用',description:'Action 与当前需求一致'},
    review:{label:'相近候选',description:'按页面、对象和动作召回'},
    new:{label:'新建提案',description:'未找到可复用或相近 Action'}
  }[resolution.tier];
  let candidates=resolution.candidates.slice(0,4);
  if(resolution.tier==='new'){
    candidates=resolution.selectedAction?[{event:{name:resolution.selectedAction,description:'待确认新 Action'},reasons:[item?.evidence].filter(Boolean),conflicts:[]}]:[];
  }else if(resolution.tier==='exact'&&resolution.selectedAction){
    const selected=candidates.find(candidate=>candidate.event.name===resolution.selectedAction);
    candidates=selected?[selected]:candidates.slice(0,1);
  }
  const candidateRows=candidates.map(candidate=>{
    const event=candidate.event||{};
    const reasons=Array.isArray(candidate.reasons)?candidate.reasons.filter(Boolean):[candidate.reasons].filter(Boolean);
    const conflicts=Array.isArray(candidate.conflicts)?candidate.conflicts.filter(Boolean):[candidate.conflicts].filter(Boolean);
    const explanation=formatDemandEvidence([...reasons,...conflicts.map(conflict=>`需确认：${conflict}`)].join('；')||event.rule||item?.evidence||'候选依据待确认');
    const action=event.name||'';
    const isSelected=Boolean(options.currentAction&&options.currentAction===action);
    const buttonLabel=isSelected?'已采用':resolution.tier==='new'?'采用提案':'采用';
    const choiceAttribute=options.choiceMode==='paste'?'data-demand-action-choice':'data-direct-action-choice';
    const requestAttribute=options.choiceMode==='paste'?` data-demand-request-index="${Number(options.requestIndex)||0}"`:'';
    const actionInteractive=options.actionInteractive??options.interactive;
    const button=actionInteractive&&action?`<button class="btn secondary demand-candidate-use" type="button" ${choiceAttribute}="${escapeFieldHtml(action)}"${requestAttribute} aria-label="${escapeFieldHtml(buttonLabel)} ${escapeFieldHtml(action)}"${isSelected?' disabled':''}>${buttonLabel}</button>`:'';
    const eventFields=[...new Set((event.fields||[]).map(field=>String(field?.[0]||'').trim()).filter(key=>key&&!globalThis.ProductDemandReconciler?.isCommonField?.(key)))];
    const fieldPreviewLimit=resolution.tier==='exact'?eventFields.length:4;
    const fieldPreview=eventFields.length?`已有字段 ${eventFields.slice(0,fieldPreviewLimit).join('、')}${eventFields.length>fieldPreviewLimit?` 等 ${eventFields.length} 个`:''}`:'无事件独有字段';
    return `<div class="demand-candidate-row"><div><code>${escapeFieldHtml(action)}</code><strong>${escapeFieldHtml(event.description||event.rule||'埋点资产')}</strong><small>${escapeFieldHtml(explanation)}</small><small class="demand-candidate-fields"${eventFields.length?` title="${escapeFieldHtml(eventFields.join('、'))}"`:''}>${escapeFieldHtml(fieldPreview)}</small></div>${button}</div>`;
  }).join('');
  const noCandidate=resolution.tier==='review'&&!candidateRows?'<div class="demand-candidate-empty">未返回可供选择的相似 Action，本次建议暂不写入契约。</div>':'';
  return `<article class="demand-recommendation is-${resolution.tier}"><header class="demand-recommendation-head"><div><span class="demand-tier-label">${tierCopy.label}</span><strong>${escapeFieldHtml(item?.inputLabel||'产品需求')}</strong></div><p>${tierCopy.description}</p></header><div class="demand-candidate-list" aria-label="Action 复用候选">${candidateRows}${noCandidate}</div><div class="demand-field-resolution"><h3>字段 Key 复用与新建建议</h3>${renderDemandFieldDecisions(item?.fields||[],{interactive:options.fieldInteractive??options.interactive,choiceMode:options.choiceMode,requestIndex:options.requestIndex})}</div></article>`;
}

function renderDirectTrackingDesign(){
  const special=document.getElementById('specialView');
  special.classList.add('show');
  special.innerHTML=`<section class="direct-design-panel"><div class="view-panel-head"><div><h2>提交产品埋点需求</h2><p>输入页面、对象和行为，平台优先检索可复用的 Action 和字段 Key</p></div><span class="prototype-badge">产品填写</span></div><div class="direct-design-workspace"><form class="direct-design-form" id="directDesignForm" novalidate><label class="full direct-primary-field">需求描述<textarea id="directLabel" required placeholder="例如：Chatbot 首页收藏列表">Chatbot 首页收藏列表</textarea><small>用业务语言说明页面、对象和行为。</small></label><label class="full direct-primary-field">上报逻辑 / 希望分析的字段<textarea id="directTrigger" required placeholder="例如：进入页面时上报，希望分析入口来源、收藏数量和角色 ID">用户进入 Chatbot 首页收藏列表时上报，希望分析入口来源、当前收藏数量和角色 ID</textarea><small>说明何时上报，以及需要拆分的分析维度。</small></label><details class="direct-contract-details full"><summary><span>补充契约信息</span><small>确认 Action、归属和字段约束</small></summary><div class="direct-contract-grid"><label class="wide">统计目标<textarea id="directGoal" required>了解 Chatbot 首页收藏列表的访问规模和入口分布</textarea></label><label class="wide">Raw Action<input id="directAction" value="" spellcheck="false" /><small class="direct-action-hint">采用右侧候选后带入，也可手动填写</small></label><label>工作线<select id="directDomain"><option>搜推与触达</option><option>商业化</option><option selected>Chatbot</option><option>运营增长</option><option>创作工具</option><option>用户与平台</option></select></label><label>工作模块<input id="directModule" required value="对话入口" /></label><label>页面位置<input id="directPosition" required value="Chatbot / 首页收藏列表" /></label><label>上报端<select id="directPlatform"><option>Web</option><option>iOS</option><option>Android</option><option selected>Web / iOS / Android</option></select></label><label>产品负责人<input id="directOwner" required value="产品负责人" /></label><label>需求版本<input id="directVersion" required value="1.0.0" /></label><label>契约策略<select id="directChangeType"><option value="" selected>待确认</option><option value="keep">keep - 保持 Raw 契约</option><option value="alias">alias - 建立别名</option><option value="dual_write">dual_write - 双写迁移</option><option value="replace">replace - 审批后替换</option></select></label><label>手动补充字段<input id="directFieldKey" value="" spellcheck="false" /></label><label>字段类型<select id="directFieldType"><option>string</option><option>integer</option><option>number</option><option>boolean</option><option>datetime</option><option>object</option><option>array</option></select></label><label class="wide">字段业务含义<input id="directFieldDescription" value="" placeholder="说明字段要回答的分析问题" /></label><label>未知字段必填性<select id="directFieldRequired"><option value="" selected>待确认</option><option value="true">必填</option><option value="false">可选</option></select></label><label>未知字段可空性<select id="directFieldNullable"><option value="" selected>待确认</option><option value="false">不可空</option><option value="true">可空</option></select></label></div></details><div class="direct-design-actions full"><p id="directDesignFeedback" role="status">候选与新建提案需经埋点 Check 后才能成为正式契约。</p><button class="btn primary" type="submit">生成设计交付表</button></div></form><aside class="direct-asset-check" id="directAssetCheck" aria-live="polite" aria-label="资产复用建议"></aside></div></section>`;
  const directAssetPanel=document.getElementById('directAssetCheck');
  directAssetPanel.removeAttribute('aria-live');
  const directAssetStatus=document.createElement('p');
  directAssetStatus.id='directAssetStatus';
  directAssetStatus.className='visually-hidden';
  directAssetStatus.setAttribute('role','status');
  directAssetStatus.setAttribute('aria-live','polite');
  directAssetStatus.setAttribute('aria-atomic','true');
  directAssetPanel.insertAdjacentElement('afterend',directAssetStatus);
  let latestDirectAnalysis=null;
  let selectedDirectAction='';
  const directFieldSelections=new Map();
  const buildDirectRequest=()=>{
    const key=document.getElementById('directFieldKey').value.trim();
    const description=document.getElementById('directFieldDescription').value.trim();
    return {
      label:document.getElementById('directLabel').value.trim(),
      trigger:document.getElementById('directTrigger').value.trim(),
      action:document.getElementById('directAction').value.trim(),
      fieldIntent:description,
      fieldSelections:Object.fromEntries(directFieldSelections),
      fields:key?[{key,type:document.getElementById('directFieldType').value,description}]:[]
    };
  };
  const updateDirectAssetCheck=()=>{
    const panel=document.getElementById('directAssetCheck');
    const request=buildDirectRequest();
    if(!request.label&&!request.trigger){
      latestDirectAnalysis=null;
      directAssetStatus.textContent='等待填写需求描述';
      panel.innerHTML='<div class="asset-check-state is-waiting"><span>资产复用建议</span><strong>先填写需求描述</strong><p>平台会按页面、对象、动作和字段语义检索当前资产。</p></div>';
      return;
    }
    latestDirectAnalysis=globalThis.ProductDemandReconciler?.analyze?.([request],globalThis.__trackingAssets||events)?.requests?.[0]||null;
    if(!latestDirectAnalysis){
      directAssetStatus.textContent='暂时无法生成资产复用建议';
      panel.innerHTML='<div class="asset-check-state is-waiting"><span>资产复用建议</span><strong>暂时无法生成建议</strong><p>仍可在补充交付信息中手动填写 Raw Action 和字段契约。</p></div>';
      return;
    }
    const resolution=getDemandActionResolution(latestDirectAnalysis);
    const unresolvedFields=(latestDirectAnalysis.fields||[]).filter(field=>field.status==='fuzzy').length;
    directAssetStatus.textContent=`${resolution.tier==='exact'?'找到可复用 Action':resolution.tier==='review'?`找到 ${resolution.candidates.length} 个相近 Action`:'建议新建 Action'}${unresolvedFields?`，${unresolvedFields} 个字段待确认`:''}`;
    panel.innerHTML=`<div class="direct-recommendation-title"><strong>资产复用建议</strong><span>候选与提案均待埋点 Check</span></div>${renderDemandRecommendation(latestDirectAnalysis,{interactive:true,currentAction:request.action})}`;
    panel.querySelectorAll('[data-direct-action-choice]').forEach(button=>button.addEventListener('click',()=>{
      const actionInput=document.getElementById('directAction');
      directFieldSelections.clear();
      selectedDirectAction=button.dataset.directActionChoice||'';
      actionInput.value=selectedDirectAction;
      actionInput.dispatchEvent(new Event('input',{bubbles:true}));
      document.querySelector('.direct-contract-details').open=true;
      actionInput.focus({preventScroll:true});
    }));
    panel.querySelectorAll('[data-direct-field-choice]').forEach(button=>button.addEventListener('click',()=>{
      const selectionId=button.dataset.fieldSelectionId||'';
      const fieldChoice=button.dataset.directFieldChoice||'';
      if(!selectionId||!fieldChoice)return;
      directFieldSelections.set(selectionId,fieldChoice);
      updateDirectAssetCheck();
      panel.querySelector('.demand-field-row.is-fuzzy .demand-field-choice')?.focus({preventScroll:true});
    }));
  };
  const updateDirectChatbotModule=()=>{
    if(document.getElementById('directDomain').value!=='Chatbot')return;
    document.getElementById('directModule').value=globalThis.ProductDemandReconciler?.chatbotModule?.({
      inputLabel:document.getElementById('directLabel').value,
      inputDescription:document.getElementById('directTrigger').value,
      proposedAction:document.getElementById('directAction').value
    })||'对话过程';
  };
  ['directLabel','directTrigger'].forEach(id=>document.getElementById(id).addEventListener('input',()=>{
    const actionInput=document.getElementById('directAction');
    if(selectedDirectAction&&actionInput.value.trim()===selectedDirectAction)actionInput.value='';
    selectedDirectAction='';
    directFieldSelections.clear();
    updateDirectChatbotModule();
    updateDirectAssetCheck();
  }));
  document.getElementById('directAction').addEventListener('input',()=>{
    const action=document.getElementById('directAction').value.trim();
    if(action!==selectedDirectAction){selectedDirectAction='';directFieldSelections.clear()}
    document.getElementById('directAction').removeAttribute('aria-invalid');
    document.getElementById('directAction').removeAttribute('aria-errormessage');
    updateDirectChatbotModule();
    updateDirectAssetCheck();
  });
  ['directGoal','directFieldKey','directFieldDescription'].forEach(id=>document.getElementById(id).addEventListener('input',()=>{updateDirectChatbotModule();updateDirectAssetCheck()}));
  document.getElementById('directDomain').addEventListener('change',()=>{updateDirectChatbotModule();updateDirectAssetCheck()});
  document.getElementById('directModule').addEventListener('input',updateDirectAssetCheck);
  document.getElementById('directFieldType').addEventListener('change',updateDirectAssetCheck);
  updateDirectChatbotModule();
  updateDirectAssetCheck();
  document.getElementById('directDesignForm').onsubmit=event=>{
    event.preventDefault();
    const feedback=document.getElementById('directDesignFeedback');
    const contractDetails=document.querySelector('.direct-contract-details');
    const actionInput=document.getElementById('directAction');
    document.querySelectorAll('#directDesignForm [aria-invalid="true"]').forEach(control=>{control.removeAttribute('aria-invalid');control.removeAttribute('aria-errormessage')});
    feedback.classList.remove('is-error');
    if(!actionInput.value.trim()){
      contractDetails.open=true;
      feedback.textContent='请先采用右侧的已有 Action 或新建提案。';
      feedback.classList.add('is-error');
      actionInput.setAttribute('aria-invalid','true');
      actionInput.setAttribute('aria-errormessage','directDesignFeedback');
      requestAnimationFrame(()=>actionInput.focus({preventScroll:true}));
      return;
    }
    const unresolvedFields=(latestDirectAnalysis?.fields||[]).filter(field=>field.status==='fuzzy');
    if(unresolvedFields.length){
      feedback.textContent=`请先确认右侧 ${unresolvedFields.length} 个相近字段：选择复用已有 Key，或采用新 Key 提案。`;
      feedback.classList.add('is-error');
      requestAnimationFrame(()=>document.querySelector('[data-direct-field-choice]')?.focus({preventScroll:true}));
      return;
    }
    const key=document.getElementById('directFieldKey').value.trim();
    const unresolvedRequired=document.getElementById('directFieldRequired').value;
    const unresolvedNullable=document.getElementById('directFieldNullable').value;
    const acceptedFieldStatuses=new Set(['existing','reused','value-add','new']);
    const recommendedParams=(latestDirectAnalysis?.fields||[]).filter(field=>acceptedFieldStatuses.has(field.status)&&(field.key||field.canonicalProposal)).map(field=>({
      key:field.key||field.canonicalProposal,
      type:field.type||'string',
      required:typeof field.required==='boolean'?String(field.required):unresolvedRequired,
      nullable:typeof field.nullable==='boolean'?String(field.nullable):unresolvedNullable,
      allowedValues:Array.isArray(field.allowedValues)?field.allowedValues.join(' | '):field.allowedValues||'',
      addedValues:field.addedValues||[],
      example:field.example||'',
      description:field.description||field.reason||field.intent||'',
      sensitivity:field.sensitivity||'',
      sourceStatus:field.status,
      sourceAction:field.sourceAction||''
    }));
    const manualParams=key?[{
      key,
      type:document.getElementById('directFieldType').value,
      required:document.getElementById('directFieldRequired').value,
      nullable:document.getElementById('directFieldNullable').value,
      description:document.getElementById('directFieldDescription').value.trim(),
      allowedValues:'',
      example:'',
      sensitivity:'',
      sourceStatus:'new',
      sourceAction:''
    }]:[];
    const paramsByKey=new Map();
    recommendedParams.forEach(param=>paramsByKey.set(String(param.key).trim().toLowerCase(),param));
    manualParams.forEach(param=>paramsByKey.set(String(param.key).trim().toLowerCase(),param));
    const candidate={
      label:document.getElementById('directLabel').value.trim(),
      action:document.getElementById('directAction').value.trim(),
      businessDomain:document.getElementById('directDomain').value,
      module:document.getElementById('directModule').value.trim(),
      trigger:document.getElementById('directTrigger').value.trim(),
      position:document.getElementById('directPosition').value.trim(),
      owner:document.getElementById('directOwner').value.trim(),
      changeType:document.getElementById('directChangeType').value,
      version:document.getElementById('directVersion').value.trim(),
      platform:document.getElementById('directPlatform').value,
      goal:document.getElementById('directGoal').value.trim(),
      params:[...paramsByKey.values()]
    };
    const validation=globalThis.PrdAssetSync?.validateSubmission?.([candidate])||{valid:true,errors:[]};
    if(!validation.valid){
      const firstError=validation.errors[0];
      const errorTargets={
        'invalid-action':'directAction','missing-label':'directLabel','missing-businessDomain':'directDomain',
        'missing-module':'directModule','missing-trigger':'directTrigger','missing-position':'directPosition',
        'missing-owner':'directOwner','missing-changeType':'directChangeType','missing-version':'directVersion',
        'missing-platform':'directPlatform','invalid-field-key':'directFieldKey','invalid-field-type':'directFieldType',
        'missing-field-description':'directFieldDescription','missing-required':'directFieldRequired','missing-nullable':'directFieldNullable'
      };
      const target=document.getElementById(errorTargets[firstError.code]||'directAction');
      if(target?.closest('.direct-contract-details'))contractDetails.open=true;
      feedback.textContent=`需求还不能进入埋点 Check：${firstError.message}`;
      feedback.classList.add('is-error');
      target?.setAttribute('aria-invalid','true');
      target?.setAttribute('aria-errormessage','directDesignFeedback');
      requestAnimationFrame(()=>target?.focus({preventScroll:true}));
      return;
    }
    importedPrdEvents=[candidate];
    importedPrdValidation=[];
    importedPrdParserIssues=[];
    submittedChangePlan=[];
    analystReviewState={status:'未提交',submittedAt:'',reviewedAt:'',note:''};
    intakeMode='contract';
    renderRequirementsDesign('contract');
    showToast('已生成 1 个设计交付表，等待埋点 Check');
  };
}

function renderPrdTableReport(){
  const special=document.getElementById('specialView');
  const parser=globalThis.PrdPasteParser;
  if(!parser){
    special.classList.add('show');
    special.innerHTML='<section class="prd-result prd-parser-error"><div class="prd-empty-state"><strong>粘贴解析器未加载</strong><p>请刷新页面后重试。</p></div></section>';
    return;
  }
  special.classList.add('show');
  special.innerHTML=`<div class="prd-paste-layout"><section class="prd-upload-panel prd-paste-panel"><div class="prd-panel-head"><div><h2>粘贴产品需求 / 埋点契约</h2><p>支持“埋点名称 + 埋点口径”两列需求，也支持 Tracking Contract v1</p></div><span>Excel · 飞书 · TSV</span></div><label class="prd-paste-field" for="prdPasteInput"><span class="prd-paste-field-label"><strong>产品原始输入</strong><small id="prdPasteMeta">两列需求会先检索资产，再生成待确认方案</small></span><textarea id="prdPasteInput" spellcheck="false" placeholder="粘贴埋点名称、埋点口径；或粘贴完整 Tracking Contract v1"></textarea></label><div class="prd-paste-actions"><span>Raw action 与 key 不会被自动改名；新名称只作为提案</span><div><button class="btn secondary" id="pastePrdRecords" type="button">从剪贴板粘贴</button><button class="btn secondary" id="loadPrdExample" type="button">标准示例</button><button class="btn secondary" id="clearPrdRecords" type="button">清空</button></div></div></section><aside class="prd-process-panel prd-format-panel"><div class="prd-panel-head"><div><h2>资产自动对齐</h2><p>检索 Action、字段词汇和枚举，再交由数据负责人 Check</p></div><span class="prd-process-state" id="prdProcessState">等待粘贴</span></div><div class="prd-format-columns" aria-label="自动整理步骤"><div><span>01</span><p><strong>识别需求</strong><small>读取埋点名称与业务口径</small></p></div><div><span>02</span><p><strong>检索资产</strong><small>严格匹配对象与动作语义</small></p></div><div><span>03</span><p><strong>复用字段</strong><small>沿用已有 key、类型与枚举</small></p></div><div><span>04</span><p><strong>生成提案</strong><small>新增项保持待确认和模拟语义</small></p></div></div><div class="prd-live-status" id="prdLiveStatus" role="status" aria-live="polite" aria-atomic="true"><strong>还没有可整理的内容</strong><small>粘贴后将在下方生成结构化契约。</small></div></aside></div><section class="prd-result" id="prdResult"><div class="view-panel-head"><div><h2>资产检索与契约建议</h2><p id="prdResultDescription">粘贴后自动判断复用或新增，并整理字段</p></div><div class="prd-result-actions"><button class="btn primary" id="goToTrackingDesign" disabled>生成设计交付表</button></div></div><div class="prd-result-summary"><div><span>记录事件</span><strong id="prdEventCount">0 个</strong></div><div><span>Action</span><strong id="prdActionCount">0 个</strong></div><div><span>业务字段</span><strong id="prdParamCount">0 个</strong></div><div><span>规范检查</span><strong id="prdValidationState">等待粘贴</strong></div></div><div id="prdResultBody" class="prd-empty-state"><strong>粘贴后自动整理</strong><p>产品需求将先与现有资产对齐，再生成五列交付表。</p></div><div id="prdIssueList" class="prd-issue-list hidden"></div></section>`;
  document.querySelector('.prd-paste-actions > div').insertAdjacentHTML('afterbegin','<a class="btn secondary" href="tracking-contract-v1-template.tsv" download>下载模板</a>');

  const input=document.getElementById('prdPasteInput');
  const pasteButton=document.getElementById('pastePrdRecords');
  const clearButton=document.getElementById('clearPrdRecords');
  const exampleButton=document.getElementById('loadPrdExample');
  exampleButton.textContent='产品示例';
  const importButton=document.getElementById('goToTrackingDesign');
  const processState=document.getElementById('prdProcessState');
  const liveStatus=document.getElementById('prdLiveStatus');
  const resultBody=document.getElementById('prdResultBody');
  resultBody.tabIndex=-1;
  const issueList=document.getElementById('prdIssueList');
  const validationState=document.getElementById('prdValidationState');
  const synchronizer=globalThis.PrdAssetSync;
  let latestResult=parser.parse('');
  let latestGovernanceResults=[];
  let latestDemandAnalysis=null;
  let latestDemandEvents=[];
  const demandActionSelections=new Map();
  const demandFieldSelections=new Map();
  input.value=prdPasteDraft;

  const getAssetPlan=result=>synchronizer?synchronizer.buildChangePlan(result.events,events):[];
  const parseContractValues=value=>String(value??'').split(/[|,，;；\n]/).map(item=>item.trim()).filter(Boolean);
  const parseContractExample=(value,type)=>{
    const raw=String(value??'').trim();
    if(!raw)return null;
    if(/^(?:bool|boolean)$/i.test(type)&&/^(?:true|false)$/i.test(raw))return raw.toLowerCase()==='true';
    if(/^(?:int|integer)$/i.test(type)&&/^-?\d+$/.test(raw))return Number.parseInt(raw,10);
    if(/^(?:number|float|double)$/i.test(type)&&/^-?\d+(?:\.\d+)?$/.test(raw))return Number(raw);
    return raw;
  };
  const buildGovernanceCandidate=event=>{
    const fieldMeta={};
    const fields=(event.params||[]).filter(param=>param.key?.trim()).map(param=>{
      const key=param.key.trim();
      const type=String(param.type||'unknown').trim();
      fieldMeta[key]={
        source:'PRD 提交',
        type,
        required:synchronizer?.parseBoolean(param.required),
        nullable:synchronizer?.parseBoolean(param.nullable),
        description:String(param.description||'').trim(),
        allowedValues:parseContractValues(param.allowedValues),
        example:parseContractExample(param.example,type),
        sensitivity:String(param.sensitivity||'').trim()
      };
      return [key,type,String(param.description||'').trim()];
    });
    const sensitivityOrder={P0:0,P1:1,P2:2,P3:3};
    const eventSensitivity=(event.params||[]).map(param=>String(param.sensitivity||'').trim().toUpperCase()).filter(value=>value in sensitivityOrder).sort((a,b)=>sensitivityOrder[b]-sensitivityOrder[a])[0]||'';
    return {
      name:String(event.action||'').trim(),
      description:String(event.label||'').trim(),
      group:String(event.businessDomain||'').trim()||'待归类',
      domain:String(event.module||'').trim()||'待归类',
      rule:String(event.trigger||'').trim(),
      source:'PRD 提交',
      status:'待确认',
      fields,
      fieldMeta,
      governanceMetadata:{
        displayName:String(event.label||'').trim(),
        businessDomain:String(event.businessDomain||'').trim(),
        module:String(event.module||'').trim(),
        trigger:String(event.trigger||'').trim(),
        position:String(event.position||'').trim(),
        owner:String(event.owner||'').trim(),
        version:String(event.version||'').trim(),
        platform:String(event.platform||'').trim(),
        sensitivity:eventSensitivity,
        lifecycle:'draft',
        source:'PRD 提交'
      }
    };
  };
  const validateImportedEvents=result=>globalThis.TrackingGovernance
    ?result.events.map(event=>globalThis.TrackingGovernance.validateEvent(buildGovernanceCandidate(event),{manifest:frontendTrackingManifest,mode:'submission'}))
    :[];
  const getAssetChangeSummary=plan=>{
    const newEventCount=plan.filter(change=>change.type==='create').length;
    const updatedEvents=plan.filter(change=>change.type==='fields');
    const newFieldCount=updatedEvents.reduce((sum,change)=>sum+change.newFields.length,0);
    const parts=[];
    if(newEventCount)parts.push(`新增 ${newEventCount} 个埋点`);
    if(newFieldCount)parts.push(`向 ${updatedEvents.length} 个已有埋点补充 ${newFieldCount} 个字段`);
    return parts.length?parts.join('，'):'未发现新的资产定义';
  };
  const renderContractCell=(param,fieldValidation)=>{
    const type=String(param.type||'未声明').trim();
    const canonicalType=String(fieldValidation?.canonical?.type||synchronizer?.normalizeFieldType(type,'')||'').trim();
    const required=synchronizer?.parseBoolean(param.required);
    const nullable=synchronizer?.parseBoolean(param.nullable);
    const enumText=parseContractValues(param.allowedValues).join(' / ');
    const typeSuggestion=canonicalType&&canonicalType!==type?`<small class="prd-contract-suggestion">规范类型：${escapeFieldHtml(canonicalType)}</small>`:'';
    return `<div class="prd-contract-cell"><strong>${escapeFieldHtml(type)}</strong>${typeSuggestion}<span>${required===true?'必填':required===false?'可选':'必填未知'} · ${nullable===true?'可空':nullable===false?'不可空':'可空未知'}</span>${enumText?`<small title="${escapeFieldHtml(enumText)}">枚举：${escapeFieldHtml(enumText)}</small>`:''}</div>`;
  };
  const renderRows=(result,plan,validations)=>result.events.map((event,eventIndex)=>{
    const change=plan[eventIndex]||{type:'none',newFields:[]};
    const validation=validations[eventIndex];
    const newFieldNames=new Set(change.newFields.map(field=>synchronizer.normalizeIdentifier(field[0])));
    const markedFieldNames=new Set();
    const isNewEvent=change.type==='create';
    const params=event.params.length?event.params:[{key:'',description:''}];
    return params.map((param,index)=>{
      const normalizedKey=synchronizer?.normalizeIdentifier(param.key)||'';
      const isNewField=Boolean(normalizedKey&&newFieldNames.has(normalizedKey)&&!markedFieldNames.has(normalizedKey));
      if(isNewField)markedFieldNames.add(normalizedKey);
      const eventMarker=isNewEvent?'<span class="prd-inline-change is-event">新增埋点 Action</span>':'';
      const fieldMarker=isNewField?'<span class="prd-inline-change is-field">新增字段 Key</span>':'';
      const canonicalAction=validation?.canonical?.action;
      const actionSuggestion=canonicalAction&&canonicalAction!==event.action?`<small class="prd-contract-suggestion">建议：${escapeFieldHtml(canonicalAction)}</small>`:'';
      const fieldValidation=validation?.fields?.[index];
      const canonicalKey=fieldValidation?.canonical?.key;
      const keySuggestion=canonicalKey&&canonicalKey!==param.key?`<small class="prd-contract-suggestion">规范建议：${escapeFieldHtml(canonicalKey)} · 尚未迁移</small>`:'';
      const eventMeta=[event.businessDomain,event.module,event.position,event.owner,event.version].filter(Boolean).join(' · ');
      return `<tr${index?' class="prd-param-continuation"':''}>${index===0?`<td rowspan="${params.length}"${isNewEvent?' class="prd-new-event-cell"':''}><strong>${escapeFieldHtml(event.label||'待补充')}</strong>${event.trigger?`<small class="prd-event-trigger">${escapeFieldHtml(event.trigger)}</small>`:''}</td><td rowspan="${params.length}"${isNewEvent?' class="prd-new-event-cell"':''}><span class="prd-marked-value"><code>${escapeFieldHtml(event.action||'待补充')}</code>${eventMarker}</span>${actionSuggestion}${eventMeta?`<small class="prd-event-meta">${escapeFieldHtml(eventMeta)}</small>`:''}</td>`:''}<td${isNewField?' class="prd-new-field-cell"':''}>${param.key?`<span class="prd-marked-value"><code>${escapeFieldHtml(param.key)}</code>${fieldMarker}</span>${keySuggestion}`:'<span class="prd-cell-empty">无额外参数</span>'}</td><td>${renderContractCell(param,fieldValidation)}</td><td${isNewField?' class="prd-new-field-cell prd-new-field-description"':''}>${param.description?escapeFieldHtml(param.description):'<span class="prd-cell-empty">待补充说明</span>'}</td></tr>`;
    }).join('');
  }).join('');

  const renderResult=()=>{
    prdPasteDraft=input.value;
    latestResult=parser.parse(input.value);
    const {events,issues,sourceFormat,stats}=latestResult;
    const isProductDemand=latestResult.schema==='product-demand-v0';
    if(isProductDemand){
      const demandRequests=events.map((request,index)=>({
        ...request,
        ...(demandActionSelections.has(index)?{action:demandActionSelections.get(index)}:{}),
        fieldSelections:Object.fromEntries(demandFieldSelections.get(index)||[])
      }));
      latestDemandAnalysis=globalThis.ProductDemandReconciler?.analyze(demandRequests,globalThis.__trackingAssets||[])||{requests:[]};
      latestDemandEvents=globalThis.ProductDemandReconciler?.toContractEvents(latestDemandAnalysis)||[];
    }else{latestDemandAnalysis=null;latestDemandEvents=[]}
    latestGovernanceResults=isProductDemand?[]:validateImportedEvents(latestResult);
    const governanceIssues=latestGovernanceResults.flatMap((validation,index)=>validation.issues.map(issue=>({...issue,eventIndex:index,eventAction:events[index]?.action||events[index]?.label||`事件 ${index+1}`})));
    const contractIssues=!isProductDemand&&synchronizer?.validateSubmission? synchronizer.validateSubmission(events).errors.map(issue=>({...issue,severity:'error'})) : [];
    const parserIssues=issues.map(issue=>({...issue,severity:'error',path:issue.location||'source'}));
    const blockingIssues=[...parserIssues,...governanceIssues.filter(issue=>issue.severity==='error'),...contractIssues].filter((issue,index,list)=>list.findIndex(item=>item.code===issue.code&&item.path===issue.path&&item.message===issue.message)===index);
    const blockingCount=blockingIssues.length;
    const warningCount=governanceIssues.filter(issue=>issue.severity==='warning').length;
    const assetPlan=isProductDemand&&synchronizer?synchronizer.buildChangePlan(latestDemandEvents,globalThis.__trackingAssets||[]):getAssetPlan(latestResult);
    document.getElementById('prdEventCount').textContent=`${stats.events} 个`;
    document.getElementById('prdActionCount').textContent=`${isProductDemand?latestDemandEvents.length:stats.actions} 个`;
    document.getElementById('prdParamCount').textContent=`${isProductDemand?latestDemandEvents.reduce((sum,event)=>sum+event.params.length,0):stats.params} 个`;
    document.getElementById('prdPasteMeta').textContent=input.value.trim()?`已读取 ${input.value.trim().length} 个字符 · ${isProductDemand?(sourceFormat==='natural-demand'?'自然语言需求':'产品需求表格'):latestResult.schema==='tracking-contract-v1'?'Tracking Contract v1':'旧格式草稿'}`:'两列需求会先检索资产，再生成待确认方案';

    if(!input.value.trim()){
      processState.textContent='等待粘贴';
      processState.className='prd-process-state';
      validationState.textContent='等待粘贴';
      validationState.className='';
      liveStatus.innerHTML='<strong>还没有可整理的内容</strong><small>粘贴后将在下方生成结构化表格。</small>';
      document.getElementById('prdResultDescription').textContent='粘贴埋点记录后，平台会自动匹配事件与参数';
      resultBody.className='prd-empty-state';
      resultBody.innerHTML='<strong>粘贴后自动整理</strong><p>可以保留 Excel 表格的合并单元格，也可直接粘贴纵向文本。</p>';
      issueList.classList.add('hidden');
      issueList.classList.remove('has-blocking');
      issueList.innerHTML='';
      importButton.disabled=true;
      return;
    }

    const unresolvedReviewCount=isProductDemand?latestDemandAnalysis.requests.filter((item,index)=>item.decision==='review'&&!demandActionSelections.has(index)).length:0;
    const unresolvedFieldCount=isProductDemand?latestDemandAnalysis.requests.reduce((sum,item)=>sum+(item.fields||[]).filter(field=>field.status==='fuzzy').length,0):0;
    const unresolvedDecisionCount=unresolvedReviewCount+unresolvedFieldCount;
    const canImport=isProductDemand?latestDemandEvents.length>0&&!unresolvedDecisionCount:stats.completeEvents>0;
    const state=events.length?(isProductDemand?(unresolvedDecisionCount?'先确认候选':'待埋点 Check'):blockingCount?`${blockingCount} 项阻断`:warningCount?'需审核':'契约完整'):'未识别';
    processState.textContent=events.length?(blockingCount?'存在阻断':warningCount?'待治理审核':'契约完整'):'需检查格式';
    processState.className=`prd-process-state ${blockingCount||!events.length?'blocked':warningCount?'needs-review':'ready'}`;
    validationState.textContent=state;
    validationState.className=blockingCount||!events.length?'prd-blocked':warningCount?'prd-needs-review':'prd-valid';
    document.getElementById('prdResultDescription').textContent=events.length?`已生成 ${stats.events} 个事件和 ${stats.params} 个业务字段。${blockingCount?`${blockingCount} 项问题会阻断正式同步。`:`资产对比：${getAssetChangeSummary(assetPlan)}`}`:'暂未识别到事件与 action 的对应关系';
    const formatLabel=latestResult.schema==='tracking-contract-v1'?'Tracking Contract v1':sourceFormat==='natural-demand'?'自然语言需求':sourceFormat==='tsv'?'产品需求表格':'旧纵向文本';
    liveStatus.innerHTML=events.length?`<strong>已识别 ${stats.events} 个事件</strong><small>${escapeFieldHtml(formatLabel)}${blockingCount?`，${blockingCount} 项阻断`:warningCount?`，${warningCount} 项待审核`:'，可进入设计'}</small>`:'<strong>暂未识别到完整事件</strong><small>请检查事件名称与 action 是否相邻。</small>';
    importButton.disabled=!canImport;
    importButton.textContent=unresolvedDecisionCount?`先确认 ${unresolvedDecisionCount} 项`:'生成设计交付表';

    if(isProductDemand&&latestDemandEvents.length){
      const demandCards=latestDemandAnalysis.requests.map((item,index)=>renderDemandRecommendation(item,{actionInteractive:item.decision==='review',fieldInteractive:true,choiceMode:'paste',requestIndex:index,currentAction:demandActionSelections.get(index)||''})).join('');
      const demandRows=renderWorkflowContractRows(latestDemandEvents,assetPlan,synchronizer);
      resultBody.className='prd-demand-result';
      resultBody.innerHTML=`<div class="demand-match-list">${demandCards}</div>${renderWorkflowContractTable(demandRows)}`;
      resultBody.querySelectorAll('[data-demand-action-choice]').forEach(button=>button.addEventListener('click',()=>{
        const requestIndex=Number(button.dataset.demandRequestIndex);
        const action=button.dataset.demandActionChoice||'';
        if(!Number.isInteger(requestIndex)||!action)return;
        demandActionSelections.set(requestIndex,action);
        demandFieldSelections.delete(requestIndex);
        renderResult();
        resultBody.focus({preventScroll:true});
        showToast(`已采用 ${action}，并按该 Raw action 重新检索`);
      }));
      resultBody.querySelectorAll('[data-demand-field-choice]').forEach(button=>button.addEventListener('click',()=>{
        const requestIndex=Number(button.dataset.demandRequestIndex);
        const selectionId=button.dataset.fieldSelectionId||'';
        const fieldChoice=button.dataset.demandFieldChoice||'';
        if(!Number.isInteger(requestIndex)||!selectionId||!fieldChoice)return;
        if(!demandFieldSelections.has(requestIndex))demandFieldSelections.set(requestIndex,new Map());
        demandFieldSelections.get(requestIndex).set(selectionId,fieldChoice);
        renderResult();
        resultBody.focus({preventScroll:true});
        showToast(fieldChoice==='__new__'?'已采用待确认的新 Key 提案':`已选择复用字段 ${fieldChoice}`);
      }));
      const exactCount=latestDemandAnalysis.requests.filter(item=>item.decision==='reuse').length;
      const reviewCount=latestDemandAnalysis.requests.filter(item=>item.decision==='review').length;
      const newCount=latestDemandAnalysis.requests.filter(item=>item.decision==='new').length;
      const pendingParts=[];
      if(unresolvedReviewCount)pendingParts.push(`${unresolvedReviewCount} 条相似 Action`);
      if(unresolvedFieldCount)pendingParts.push(`${unresolvedFieldCount} 个相近字段`);
      document.getElementById('prdResultDescription').textContent=unresolvedDecisionCount?`已检索 ${events.length} 条产品需求；请先确认${pendingParts.join('、')}。`:`已检索 ${events.length} 条产品需求；候选与新建提案均需埋点 Check。`;
      liveStatus.innerHTML=`<strong>已完成资产候选检索</strong><small>${exactCount} 条可直接复用 · ${reviewCount} 条可能相关 · ${newCount} 条建议新增</small>`;
      processState.textContent=unresolvedDecisionCount?'先确认候选':'建议待确认';
      processState.className='prd-process-state needs-review';
      validationState.textContent=unresolvedDecisionCount?'先确认候选':'待埋点 Check';
      validationState.className='prd-needs-review';
    }else if(events.length){
      resultBody.className='prd-extract-wrap';
      resultBody.innerHTML=`<table class="prd-extract-table prd-contract-table"><thead><tr><th>事件与触发</th><th>Raw action / 治理建议</th><th>Raw key</th><th>字段契约</th><th>参数说明</th></tr></thead><tbody>${renderRows(latestResult,assetPlan,latestGovernanceResults)}</tbody></table>`;
    }else{
      resultBody.className='prd-empty-state is-error';
      resultBody.innerHTML='<strong>没有找到可整理的埋点</strong><p>四列表格请保留制表符；纵向文本请按“事件名称、action、key、参数说明”排列。</p>';
    }

    if(issues.length||governanceIssues.length||contractIssues.length){
      const parserItems=parserIssues.map(issue=>`<li class="is-error">${escapeFieldHtml(issue.location?`${issue.location}：${issue.message}`:issue.message)}</li>`).join('');
      const governanceItems=[...governanceIssues,...contractIssues].filter((issue,index,list)=>list.findIndex(item=>item.code===issue.code&&item.path===issue.path)===index).slice(0,20).map(issue=>`<li class="is-${escapeFieldHtml(issue.severity)}"><strong>${escapeFieldHtml(issue.eventAction||issue.path||'契约')}</strong>：${escapeFieldHtml(issue.message)}${issue.suggestion?`<small>建议：${escapeFieldHtml(issue.suggestion)}</small>`:''}</li>`).join('');
      issueList.classList.remove('hidden');
      issueList.classList.toggle('has-blocking',blockingCount>0);
      issueList.innerHTML=`<div><strong>${blockingCount} 项阻断 · ${warningCount} 项待审核</strong><small>Raw contract 会保留原值；修正标准列后可正式同步。</small></div><ul>${parserItems}${governanceItems}</ul>`;
    }else{
      issueList.classList.add('hidden');
      issueList.classList.remove('has-blocking');
      issueList.innerHTML='';
    }
  };

  input.addEventListener('input',()=>{importedPrdEvents=[];importedPrdValidation=[];importedPrdParserIssues=[];demandActionSelections.clear();demandFieldSelections.clear();renderResult()});
  clearButton.onclick=()=>{importedPrdEvents=[];importedPrdValidation=[];importedPrdParserIssues=[];demandActionSelections.clear();demandFieldSelections.clear();input.value='';renderResult();input.focus();showToast('已清空粘贴内容')};
  exampleButton.onclick=()=>{importedPrdEvents=[];importedPrdValidation=[];importedPrdParserIssues=[];demandActionSelections.clear();demandFieldSelections.clear();input.value=parser.productDemandExampleText||parser.standardExampleText||parser.exampleText;renderResult();input.focus();showToast('已填入产品需求示例并完成资产检索')};
  pasteButton.onclick=async()=>{
    input.focus();
    try{
      const clipboardText=await navigator.clipboard.readText();
      if(!clipboardText){showToast('剪贴板中没有文本内容');return}
      importedPrdEvents=[];
      importedPrdValidation=[];
      importedPrdParserIssues=[];
      demandActionSelections.clear();
      demandFieldSelections.clear();
      input.value=clipboardText;
      renderResult();
      showToast(`已粘贴并整理 ${latestResult.stats.events} 个事件`);
    }catch(error){
      showToast('浏览器未授权读取剪贴板，请在输入框中直接粘贴');
    }
  };
  importButton.onclick=()=>{
    if(!latestResult.stats.completeEvents)return;
    const unresolvedReviewCount=latestResult.schema==='product-demand-v0'?latestDemandAnalysis.requests.filter((item,index)=>item.decision==='review'&&!demandActionSelections.has(index)).length:0;
    const unresolvedFieldCount=latestResult.schema==='product-demand-v0'?latestDemandAnalysis.requests.reduce((sum,item)=>sum+(item.fields||[]).filter(field=>field.status==='fuzzy').length,0):0;
    if(unresolvedReviewCount||unresolvedFieldCount){showToast(`请先确认 ${unresolvedReviewCount+unresolvedFieldCount} 项 Action 或字段候选`);return}
    const sourceEvents=latestResult.schema==='product-demand-v0'?latestDemandEvents:latestResult.events;
    importedPrdEvents=sourceEvents.filter(event=>event.label?.trim()&&event.action?.trim()).map(event=>({
      ...event,
      params:event.params.map(param=>({...param}))
    }));
    importedPrdValidation=latestResult.schema==='product-demand-v0'?[]:latestGovernanceResults;
    importedPrdParserIssues=latestResult.schema==='product-demand-v0'?[]:latestResult.issues.map(issue=>({...issue,severity:'error',path:issue.location||'source'}));
    submittedChangePlan=[];
    intakeMode='contract';
    analystReviewState={status:'未提交',submittedAt:'',reviewedAt:'',note:''};
    renderRequirementsDesign('contract');
    showToast(`已导入 ${latestResult.stats.completeEvents} 个事件进入方案确认`);
  };
  renderResult();
  requestAnimationFrame(()=>input.focus({preventScroll:true}));
}

function renderWorkflowContractRows(sourceEvents,plan,synchronizer,options={}){
  const officialWorkstreams=new Set(['商业化','Chatbot','搜推与触达','运营增长','创作工具','用户与平台']);
  const splitAllowedValues=value=>String(value||'').split(/\s*(?:\||,|，|;|；|\/|\n)\s*/).map(item=>item.trim()).filter(Boolean);
  const enumMeaning=(value,param)=>{
    const normalized=String(value||'').trim().toLowerCase();
    const knownMeanings={
      add:'收藏',remove:'取消收藏',explore:'探索页',favorites:'收藏页',
      true:'是 / 成功',false:'否 / 失败',yes:'是',no:'否'
    };
    const description=String(param.description||'');
    const escaped=String(value||'').replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
    const matched=description.match(new RegExp(`${escaped}\\s*[:：]?\\s*([^，,；;。]+)`,'i'));
    return matched?.[1]?.trim()||knownMeanings[normalized]||'该字段的一个可选值';
  };
  return sourceEvents.map((event,eventIndex)=>{
    const change=plan[eventIndex]||{type:'none',newFields:[]};
    const params=event.params?.length?event.params:[{key:'',description:''}];
    const isNewEvent=change.type==='create';
    const workstream=officialWorkstreams.has(event.businessDomain)?event.businessDomain:'待确认';
    const changeMarker='';
    const testResult=options.testResults?.[event.action];
    return params.map((param,index)=>{
      const required=synchronizer?.parseBoolean(param.required);
      const nullable=synchronizer?.parseBoolean(param.nullable);
      const rawType=String(param.type||'未声明');
      const canonicalType=String(synchronizer?.normalizeFieldType(param.type,'')||rawType);
      const contract=`Raw ${rawType}${canonicalType!==rawType?` → 规范 ${canonicalType}`:''} · ${required===true?'必填':required===false?'可选':'必填未知'} · ${nullable===true?'可空':nullable===false?'不可空':'可空未知'}`;
      const normalizedKey=synchronizer?.normalizeIdentifier?.(param.key)||String(param.key||'').trim().toLowerCase();
      const isKnownVocabulary=['existing','reused','value-add'].includes(param.sourceStatus);
      const isNewField=Boolean(param.key)&&!isKnownVocabulary&&(isNewEvent||(change.newFields||[]).some(field=>(synchronizer?.normalizeIdentifier?.(field?.[0])||String(field?.[0]||'').trim().toLowerCase())===normalizedKey));
      const vocabularyMarker='';
      const allowedValues=splitAllowedValues(param.allowedValues);
      const valueMarkup=allowedValues.length
        ?`<div class="prd-enum-values">${allowedValues.map(value=>{const isAdded=(param.addedValues||[]).includes(value.toLowerCase());return `<div class="prd-enum-item"><code${isAdded?' class="is-added-value"':''}>${escapeFieldHtml(value)}</code><span>${escapeFieldHtml(enumMeaning(value,param))}</span></div>`}).join('')}</div>`
        :param.example
        ?`<code class="prd-example-value">${escapeFieldHtml(param.example)}</code>`
        :'<span class="prd-cell-empty">无固定枚举</span>';
      const resultMarkup=index===0&&testResult?`<span class="prd-test-result ${testResult==='通过'?'is-pass':'is-pending'}">${escapeFieldHtml(testResult)}</span>`:'';
      return `<tr class="${index?'prd-param-continuation ':''}${isNewEvent?'is-new-action ':''}${isNewField?'is-new-field':''}">${index===0?`<td rowspan="${params.length}" class="prd-workstream-cell ${workstream==='待确认'?'is-unresolved':''}"><strong>${escapeFieldHtml(workstream)}</strong><small>${escapeFieldHtml(event.module||'模块待补充')}</small></td><td rowspan="${params.length}" class="prd-record-cell"><strong>${escapeFieldHtml(event.label||'记录事件待补充')}</strong>${event.trigger?`<p>${escapeFieldHtml(event.trigger)}</p>`:''}</td><td rowspan="${params.length}" class="prd-action-cell"><div class="prd-action-title"><code>${escapeFieldHtml(event.action)}</code>${changeMarker}${resultMarkup}</div><small>${escapeFieldHtml([event.position,event.owner,event.version].filter(Boolean).join(' · ')||'事件资料待补')}</small></td>`:''}<td class="prd-key-cell">${param.key?`<div><code>${escapeFieldHtml(param.key)}</code>${vocabularyMarker}</div><small>${escapeFieldHtml(contract)}${param.sourceAction?` · 来源 ${escapeFieldHtml(param.sourceAction)}`:''}</small>`:'<span class="prd-cell-empty">无事件独有字段</span>'}</td><td class="prd-value-cell">${valueMarkup}${param.description?`<p>${escapeFieldHtml(param.description)}</p>`:'<p class="prd-cell-empty">字段说明待补充</p>'}</td></tr>`;
    }).join('');
  }).join('');
}

function renderWorkflowContractTable(rows,options={}){
  const legend=options.legend===false?'':`<div class="prd-design-legend" aria-label="变更颜色说明"><span><i class="is-action"></i>新增埋点 Action</span><span><i class="is-field"></i>新增字段 Key</span><span><i class="is-value"></i>新增值 Value</span><span><i class="is-metadata"></i>事件资料补充</span><small>事件资料指触发位置、负责人、版本等契约说明，不会新增上报字段</small></div>`;
  return `${legend}<div class="prd-extract-wrap"><table class="prd-extract-table prd-contract-table prd-handoff-table"><colgroup><col class="prd-col-workstream"><col class="prd-col-record"><col class="prd-col-action"><col class="prd-col-key"><col class="prd-col-value"></colgroup><thead><tr><th>工作线与分组</th><th>埋点记录事件</th><th>埋点 Action</th><th>字段 Key</th><th>值 Value</th></tr></thead><tbody>${rows}</tbody></table></div>`;
}

function renderWorkflowDiffSummary(sourceEvents){
  const eventsToSummarize=sourceEvents||[];
  if(!eventsToSummarize.some(event=>event.reconciliation))return '';
  const reusedActions=eventsToSummarize.filter(event=>event.reconciliation?.decision==='reuse').length;
  const newActions=eventsToSummarize.filter(event=>event.reconciliation?.decision==='new').length;
  const newFields=eventsToSummarize.reduce((sum,event)=>sum+(event.params||[]).filter(param=>param.sourceStatus==='new').length,0);
  const newValues=eventsToSummarize.reduce((sum,event)=>sum+(event.params||[]).reduce((count,param)=>count+(param.addedValues||[]).length,0),0);
  return `<div class="workflow-diff-summary"><div><span>复用 Action</span><strong>${reusedActions}</strong></div><div><span>新增埋点 Action</span><strong>${newActions}</strong></div><div><span>新增字段 Key</span><strong>${newFields}</strong></div><div><span>新增值 Value</span><strong>${newValues}</strong></div></div>`;
}

function renderImportedPrdDesign(){
  const special=document.getElementById('specialView');
  const synchronizer=globalThis.PrdAssetSync;
  const plan=synchronizer?synchronizer.buildChangePlan(importedPrdEvents,events):[];
  const createdCount=plan.filter(change=>change.type==='create').length;
  const updatedCount=plan.filter(change=>change.type==='fields'||change.type==='metadata').length;
  const unchangedCount=plan.filter(change=>change.type==='none').length;
  const addedFieldCount=plan.reduce((sum,change)=>sum+change.newFields.length,0);
  const metadataUpdateCount=plan.reduce((sum,change)=>sum+(change.metadataUpdates||[]).reduce((count,update)=>count+Object.keys(update.metadata||{}).length,0)+Object.keys(change.eventMetadataUpdates||{}).length+(change.fieldRecords||[]).reduce((count,record)=>count+Object.keys(record.metadata||{}).length,0),0);
  const contractValidation=synchronizer?.validateSubmission?synchronizer.validateSubmission(importedPrdEvents):{valid:true,errors:[]};
  const blockingIssues=[
    ...importedPrdParserIssues,
    ...importedPrdValidation.flatMap(validation=>validation?.errors||[]),
    ...contractValidation.errors.map(issue=>({...issue,severity:'error'}))
  ].filter((issue,index,list)=>list.findIndex(item=>item.code===issue.code&&item.path===issue.path&&item.message===issue.message)===index);
  const hasAssetChanges=Boolean(synchronizer)&&plan.some(change=>change.type!=='none');
  const canSubmitReview=Boolean(importedPrdEvents.length)&&!blockingIssues.length;
  const reviewButtonLabel=blockingIssues.length?`修正 ${blockingIssues.length} 项后提交`:'提交埋点 Check';
  const rows=renderWorkflowContractRows(importedPrdEvents,plan,synchronizer);
  special.classList.add('show');
  const blockerMarkup=blockingIssues.length?`<div class="prd-governance-blocker"><strong>${blockingIssues.length} 项规范错误阻断送审</strong><span>可以返回修改；Raw action/key 不会被平台自动改写。</span><ul>${blockingIssues.slice(0,8).map(issue=>`<li>${escapeFieldHtml(issue.message)}${issue.suggestion?`<small>建议：${escapeFieldHtml(issue.suggestion)}</small>`:''}</li>`).join('')}</ul></div>`:'';
  special.innerHTML=`<section class="prd-result prd-imported-design"><div class="view-panel-head"><div><h2>埋点设计交付表</h2><p>产品确认需求后提交埋点 Check；Raw action 与字段 key 保持不变</p></div><div class="prd-result-actions"><button class="btn secondary" id="backToPrdPaste">返回修改</button><button class="btn primary" id="submitAnalystReview"${canSubmitReview?'':' disabled'}>${reviewButtonLabel}</button></div></div><div class="prd-result-summary"><div><span>规范阻断</span><strong${blockingIssues.length?'':' class="prd-valid"'}>${blockingIssues.length} 项</strong></div><div><span>变更事件</span><strong>${createdCount+updatedCount} 个</strong></div><div><span>新增字段 Key</span><strong>${addedFieldCount} 个</strong></div><div><span>无需变更</span><strong>${unchangedCount} 个</strong></div></div>${blockerMarkup}${renderWorkflowContractTable(rows)}</section>`;
  document.querySelector('.prd-result-summary')?.insertAdjacentHTML('beforebegin',renderWorkflowDiffSummary(importedPrdEvents));
  document.getElementById('backToPrdPaste').onclick=()=>renderRequirementsDesign('paste');
  document.getElementById('submitAnalystReview').onclick=()=>{
    if(!canSubmitReview)return;
    submittedChangePlan=plan.map(change=>({type:change.type,newFields:(change.newFields||[]).map(field=>[...field])}));
    analystReviewState={status:'待评审',submittedAt:new Date().toLocaleString('zh-CN',{hour12:false}),reviewedAt:'',note:''};
    document.querySelector('[data-view="review"]')?.click();
    showToast('已提交到浏览器内的模拟埋点 Check 队列，尚未写入正式资产');
  };
}

function syncApprovedReview(){
  const synchronizer=globalThis.PrdAssetSync;
  if(!synchronizer||!importedPrdEvents.length)return {ok:false,message:'当前没有可同步的评审方案'};
  try{
    const summary=synchronizer.sync(importedPrdEvents,events,{
      group:'主流程',
      domain:'PRD 导入',
      status:'开发中',
      source:'PRD 提交',
      governanceMetadata:{
        lifecycle:'active',
        lifecycleSource:'browser_check_approved',
        sessionAssetState:'check_approved',
        sessionAssetScope:'browser_prototype'
      },
      governanceProposalStatus:'check_approved',
      sourceIssues:importedPrdParserIssues
    });
    refreshAssetStats();
    resetCatalogSelection();
    render();
    return {ok:true,summary};
  }catch(error){
    const count=error?.validation?.errors?.length;
    return {ok:false,message:error?.code==='TRACKING_CONTRACT_BLOCKED'?`契约仍有 ${count||0} 项阻断`:'浏览器资产同步失败，请返回补充契约'};
  }
}

function renderAnalystReview(){
  const special=document.getElementById('specialView');
  special.classList.add('show');
  const hasSubmission=importedPrdEvents.length>0&&analystReviewState.status!=='未提交';
  if(!hasSubmission){
    special.innerHTML=`<section class="review-panel review-empty"><div class="view-panel-head"><div><h2>埋点 Check</h2><p>由数据负责人确认统计目标、复用决策、触发边界和字段契约</p></div><span class="prototype-badge">数据负责人</span></div><div class="workflow-empty-state"><strong>暂无待 Check 需求</strong><p>请先在“产品需求”中提交想观测的行为，或导入 PRD 埋点记录。</p><button class="btn primary" id="goToRequirementsDesign" type="button">前往产品需求</button></div></section>`;
    document.getElementById('goToRequirementsDesign').onclick=()=>document.querySelector('[data-view="intake"]')?.click();
    return;
  }
  const synchronizer=globalThis.PrdAssetSync;
  const plan=submittedChangePlan.length?submittedChangePlan:(synchronizer?synchronizer.buildChangePlan(importedPrdEvents,events):[]);
  const statusClass={'待评审':'is-pending','需补充':'is-warning','评审通过':'is-approved','已退回':'is-rejected'}[analystReviewState.status]||'is-pending';
  const reviewRows=renderWorkflowContractRows(importedPrdEvents,plan,synchronizer);
  const uniqueFieldCount=importedPrdEvents.reduce((sum,event)=>sum+(event.params||[]).filter(param=>param.key?.trim()).length,0);
  special.innerHTML=`<section class="review-panel prd-imported-design"><div class="view-panel-head"><div><h2>埋点 Check</h2><p>Check 通过后才会把方案同步到当前浏览器会话中的埋点资产</p></div><div class="review-head-state"><span class="prototype-badge">数据负责人</span><strong class="review-state ${statusClass}">${escapeFieldHtml(analystReviewState.status)}</strong></div></div><div class="review-summary"><div><span>Check 对象</span><strong>${importedPrdEvents.length} 个事件</strong><small>${uniqueFieldCount} 个独有字段</small></div><div><span>统计目标</span><strong>${escapeFieldHtml(importedPrdEvents[0]?.goal||'依据 PRD 统计目标')}</strong><small>需确认指标可以被事件链路回答</small></div><div><span>提交时间</span><strong>${escapeFieldHtml(analystReviewState.submittedAt||'当前会话')}</strong><small>未连接真实审批系统</small></div><div><span>Check 责任</span><strong>数据负责人</strong><small>产品说明需求，数据负责人完成 Check</small></div></div><div class="review-checklist" aria-label="Check 范围"><span>统计目标</span><span>触发边界</span><span>复用 / 新增决策</span><span>字段契约</span><span>位置与负责人</span><span>版本</span></div>${renderWorkflowContractTable(reviewRows)}<label class="review-note">Check 意见<textarea id="analystReviewNote" placeholder="填写需补充内容，或记录 Check 通过依据">${escapeFieldHtml(analystReviewState.note)}</textarea></label><div class="review-actions"><p>所有状态和资产同步仅保留在当前浏览器会话，不代表生产审批已经完成。</p><div><button class="btn secondary" id="requestReviewChanges" type="button"${analystReviewState.status==='评审通过'?' disabled':''}>退回产品补充</button><button class="btn primary" id="approveAnalystReview" type="button"${analystReviewState.status==='评审通过'?' disabled':''}>Check 通过并同步模拟资产</button></div></div></section>`;
  document.querySelector('.review-summary')?.insertAdjacentHTML('beforebegin',renderWorkflowDiffSummary(importedPrdEvents));
  document.getElementById('requestReviewChanges').onclick=()=>{
    analystReviewState.status='需补充';
    analystReviewState.note=document.getElementById('analystReviewNote').value.trim()||'请补充统计目标、触发边界或字段口径';
    analystReviewState.reviewedAt=new Date().toLocaleString('zh-CN',{hour12:false});
    intakeMode='contract';
    document.querySelector('[data-view="intake"]')?.click();
    showToast('模拟埋点 Check 已退回产品补充，正式资产未发生变化');
  };
  document.getElementById('approveAnalystReview').onclick=()=>{
    analystReviewState.note=document.getElementById('analystReviewNote').value.trim()||'字段契约与触发边界已确认';
    const result=syncApprovedReview();
    if(!result.ok){showToast(result.message);return}
    analystReviewState.status='评审通过';
    analystReviewState.reviewedAt=new Date().toLocaleString('zh-CN',{hour12:false});
    renderAnalystReview();
    showToast('模拟埋点 Check 已通过，变更仅同步到当前浏览器会话资产');
  };
}

const issueHandlingRecords=[];
function renderIssueHandling(){
  const special=document.getElementById('specialView');
  special.classList.add('show');
  const statusOrder=['待确认','处理中','待验证','已关闭'];
  const actionOptions=[...new Map(events.filter(event=>event.name).map(event=>[
    String(event.name),
    {
      name:String(event.name),
      description:String(event.description||event.rule||'已有埋点资产')
    }
  ])).values()];
  const recordRows=issueHandlingRecords.map((record,index)=>`<div class="handling-row"><div><strong>${escapeFieldHtml(record.type)}</strong><code>${escapeFieldHtml(record.action)}</code></div><span>${escapeFieldHtml(record.impact||'未填写')}</span><span>${escapeFieldHtml(record.reporter)}</span><time class="handling-time" datetime="${escapeFieldHtml(record.submittedAtIso||'')}">${escapeFieldHtml(record.submittedAt||'未记录')}</time><b class="handling-status">${escapeFieldHtml(record.status)}</b><button type="button" data-advance-issue="${index}"${record.status==='已关闭'?' disabled':''}>${record.status==='待验证'?'关闭':'推进'}</button></div>`).join('')||'<div class="handling-empty">当前浏览器会话还没有问题记录</div>';
  special.innerHTML=`<section class="issue-handling-panel"><div class="handling-type-strip"><div><strong>埋点错误</strong><small>Action、触发时机或字段值错误</small></div><div><strong>上报异常</strong><small>漏报、重复、接口或端侧异常</small></div><div><strong>数据口径反馈</strong><small>火山指标、数仓聚合和异常值</small></div><div><strong>停用下架申请</strong><small>评估、迁移、观察后审批停用</small></div></div><div class="issue-handling-layout"><form class="handling-form" id="issueHandlingForm"><h3>提交问题</h3><label>问题类型<select id="handlingType"><option>埋点错误</option><option>上报异常</option><option>火山无数据</option><option>聚合口径反馈</option><option>数据质量反馈</option><option>停用下架申请</option></select></label><div class="handling-action-field"><label id="handlingActionLabel" for="handlingAction">关联 action</label><div class="handling-action-combobox" id="handlingActionCombobox"><input id="handlingAction" required role="combobox" aria-autocomplete="list" aria-haspopup="listbox" aria-controls="handlingActionListbox" aria-expanded="false" autocomplete="off" placeholder="输入或选择已有埋点 Action" /><button class="handling-action-toggle" id="handlingActionToggle" type="button" aria-label="展开已有埋点 Action" aria-controls="handlingActionListbox" aria-expanded="false"><span aria-hidden="true">⌄</span></button><div class="handling-action-listbox" id="handlingActionListbox" role="listbox" aria-labelledby="handlingActionLabel" hidden></div></div></div><label>问题详述（可选）<textarea id="handlingImpact" placeholder="说明错误表现、影响指标、时间范围、端和用户"></textarea></label><label>问题上报人<input id="handlingReporter" required placeholder="输入上报人姓名" /></label><label class="handling-evidence-field">证据链接或说明（可选）<textarea id="handlingEvidence" placeholder="报错截图、查询 SQL、看板链接或复现步骤"></textarea></label><button class="btn primary" type="submit">提交模拟问题</button><p>提交只创建当前浏览器会话中的模拟问题，不会停止上报，也不会改写 Raw action、字段或生命周期。</p></form></div><section class="handling-list"><div class="handling-list-head"><span>类型 / action</span><span>影响范围</span><span>问题上报人</span><span>提交时间</span><span>状态</span><span></span></div><div id="handlingRows">${recordRows}</div></section></section>`;
  const actionInput=document.getElementById('handlingAction');
  const actionCombobox=document.getElementById('handlingActionCombobox');
  const actionToggle=document.getElementById('handlingActionToggle');
  const actionListbox=document.getElementById('handlingActionListbox');
  const actionOptionLimit=10;
  let filteredActionOptions=[];
  let activeActionIndex=-1;

  const setActionListboxOpen=open=>{
    actionListbox.hidden=!open;
    actionInput.setAttribute('aria-expanded',String(open));
    actionToggle.setAttribute('aria-expanded',String(open));
    actionToggle.setAttribute('aria-label',open?'收起已有埋点 Action':'展开已有埋点 Action');
    if(!open){
      activeActionIndex=-1;
      actionInput.removeAttribute('aria-activedescendant');
    }
  };
  const syncActiveActionOption=()=>{
    const optionNodes=actionListbox.querySelectorAll('[role="option"]');
    optionNodes.forEach((option,index)=>{
      const selected=index===activeActionIndex;
      option.classList.toggle('is-active',selected);
      option.setAttribute('aria-selected',String(selected));
    });
    const activeOption=optionNodes[activeActionIndex];
    if(activeOption){
      actionInput.setAttribute('aria-activedescendant',activeOption.id);
      activeOption.scrollIntoView({block:'nearest'});
    }else{
      actionInput.removeAttribute('aria-activedescendant');
    }
  };
  const renderActionListbox=()=>{
    const query=actionInput.value.trim().toLowerCase();
    const matches=query?actionOptions.filter(option=>`${option.name} ${option.description}`.toLowerCase().includes(query)).sort((left,right)=>{
      const leftRank=left.name.toLowerCase().startsWith(query)?0:1;
      const rightRank=right.name.toLowerCase().startsWith(query)?0:1;
      return leftRank-rightRank||left.name.localeCompare(right.name);
    }):actionOptions;
    filteredActionOptions=matches.slice(0,actionOptionLimit);
    activeActionIndex=-1;
    const optionsMarkup=filteredActionOptions.map((option,index)=>`<div class="handling-action-option" id="handlingActionOption-${index}" role="option" aria-selected="false" data-handling-action="${escapeFieldHtml(option.name)}"><code>${escapeFieldHtml(option.name)}</code><span>${escapeFieldHtml(option.description)}</span></div>`).join('');
    actionListbox.innerHTML=`<div class="handling-action-list-head" role="presentation"><span>${query?'匹配已有埋点':'选择已有埋点'}</span><b>${matches.length} 条</b></div>${optionsMarkup||'<div class="handling-action-empty">没有匹配的已有埋点</div>'}`;
    setActionListboxOpen(true);
  };
  const chooseActionOption=action=>{
    actionInput.value=action;
    setActionListboxOpen(false);
    actionInput.focus();
  };
  const moveActionSelection=direction=>{
    if(actionListbox.hidden)renderActionListbox();
    if(!filteredActionOptions.length)return;
    activeActionIndex=activeActionIndex<0
      ?(direction>0?0:filteredActionOptions.length-1)
      :(activeActionIndex+direction+filteredActionOptions.length)%filteredActionOptions.length;
    syncActiveActionOption();
  };

  actionInput.addEventListener('focus',()=>{if(actionListbox.hidden)renderActionListbox()});
  actionInput.addEventListener('click',()=>{if(actionListbox.hidden)renderActionListbox()});
  actionInput.addEventListener('input',renderActionListbox);
  actionInput.addEventListener('keydown',event=>{
    if(event.isComposing)return;
    if(event.key==='ArrowDown'){
      event.preventDefault();
      moveActionSelection(1);
    }else if(event.key==='ArrowUp'){
      event.preventDefault();
      moveActionSelection(-1);
    }else if(event.key==='Enter'&&!actionListbox.hidden&&activeActionIndex>=0){
      event.preventDefault();
      chooseActionOption(filteredActionOptions[activeActionIndex].name);
    }else if(event.key==='Escape'&&!actionListbox.hidden){
      event.preventDefault();
      setActionListboxOpen(false);
    }
  });
  actionToggle.addEventListener('click',()=>{
    if(actionListbox.hidden){
      renderActionListbox();
      actionInput.focus();
    }else{
      setActionListboxOpen(false);
    }
  });
  actionListbox.addEventListener('mousedown',event=>{
    if(event.target.closest('[data-handling-action]'))event.preventDefault();
  });
  actionListbox.addEventListener('click',event=>{
    const option=event.target.closest('[data-handling-action]');
    if(option)chooseActionOption(option.dataset.handlingAction);
  });
  actionCombobox.addEventListener('focusout',()=>{
    requestAnimationFrame(()=>{
      if(!actionCombobox.contains(document.activeElement))setActionListboxOpen(false);
    });
  });
  document.getElementById('issueHandlingForm').onsubmit=event=>{
    event.preventDefault();
    const submittedAt=new Date();
    issueHandlingRecords.unshift({
      type:document.getElementById('handlingType').value,
      action:document.getElementById('handlingAction').value,
      impact:document.getElementById('handlingImpact').value.trim(),
      reporter:document.getElementById('handlingReporter').value.trim(),
      evidence:document.getElementById('handlingEvidence').value.trim(),
      submittedAt:submittedAt.toLocaleString('zh-CN',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hour12:false}),
      submittedAtIso:submittedAt.toISOString(),
      status:'待确认',
      conclusion:''
    });
    renderIssueHandling();
    showToast('已创建浏览器会话内的模拟问题记录，未修改埋点资产');
  };
  document.querySelectorAll('[data-advance-issue]').forEach(button=>button.onclick=()=>{
    const record=issueHandlingRecords[Number(button.dataset.advanceIssue)];
    const nextIndex=Math.min(statusOrder.indexOf(record.status)+1,statusOrder.length-1);
    record.status=statusOrder[nextIndex];
    if(record.status==='已关闭')record.conclusion='当前会话模拟处置完成';
    renderIssueHandling();
    showToast(`模拟工单已推进到“${record.status}”，Raw 埋点未修改`);
  });
}

function renderEngineeringHandoff(){
  const special=document.getElementById('specialView');
  special.classList.add('show');
  if(!importedPrdEvents.length){
    special.innerHTML=`<section class="review-panel review-empty"><div class="view-panel-head"><div><h2>研发埋点交付表</h2><p>埋点 Check 通过后，前端或后端在这里获取最终上报契约</p></div><span class="prototype-badge">前端 / 后端</span></div><div class="workflow-empty-state"><strong>暂无可交付的埋点方案</strong><p>请先在“产品需求”生成设计交付表，并完成埋点 Check。</p></div></section>`;
    return;
  }
  const synchronizer=globalThis.PrdAssetSync;
  const plan=submittedChangePlan.length?submittedChangePlan:(synchronizer?synchronizer.buildChangePlan(importedPrdEvents,events):[]);
  const rows=renderWorkflowContractRows(importedPrdEvents,plan,synchronizer);
  const checkStatus=analystReviewState.status==='评审通过'?'埋点 Check 已通过':'埋点 Check 待确认';
  special.innerHTML=`<section class="engineering-handoff prd-imported-design"><div class="view-panel-head"><div><h2>研发埋点交付表</h2><p>产品提出上报需求，数据负责人完成埋点 Check，前端或后端严格按本表实现</p></div><div class="review-head-state"><span class="prototype-badge">前端 / 后端</span><strong class="review-state ${analystReviewState.status==='评审通过'?'is-approved':'is-pending'}">${escapeFieldHtml(checkStatus)}</strong></div></div><div class="engineering-handoff-strip"><div><span>需求来源</span><strong>产品需求</strong><small>${importedPrdEvents.length} 个埋点事件</small></div><div><span>契约确认</span><strong>${escapeFieldHtml(checkStatus)}</strong><small>Action、字段 Key、值 Value</small></div><div><span>研发任务</span><strong>按表完成上报</strong><small>前端或后端代码实现</small></div></div>${renderWorkflowDiffSummary(importedPrdEvents)}${renderWorkflowContractTable(rows)}</section>`;
}

function renderAcceptance(){
  const special=document.getElementById('specialView');
  const synchronizer=globalThis.PrdAssetSync;
  const fallbackEvents=[{
    businessDomain:'待确认',module:'首页推荐',action:'app_click',label:'滤镜点击',
    trigger:'用户点击首页滤镜卡片时',position:'discover / 首页瀑布流',owner:'产品负责人',version:'1.0.0',
    params:[
      {key:'location1',type:'string',required:'true',nullable:'false',allowedValues:'discover | search | profile',description:'一级入口位置'},
      {key:'feed_hot_filter',type:'boolean',required:'true',nullable:'false',allowedValues:'true',description:'是否点击热门滤镜'}
    ]
  }];
  const acceptanceEvents=importedPrdEvents.length?importedPrdEvents:fallbackEvents;
  const acceptancePlan=importedPrdEvents.length&&submittedChangePlan.length
    ?submittedChangePlan
    :(synchronizer?synchronizer.buildChangePlan(acceptanceEvents,events):[]);
  const testResults=Object.fromEntries(acceptanceEvents.map((event,index)=>[event.action,index===acceptanceEvents.length-1?'待复测':'通过']));
  const acceptanceRows=renderWorkflowContractRows(acceptanceEvents,acceptancePlan,synchronizer,{testResults});
  const acceptanceFieldCount=acceptanceEvents.reduce((sum,event)=>sum+(event.params||[]).filter(param=>param.key).length,0);
  special.classList.add('show');
  special.innerHTML=`<section class="acceptance-overview"><div class="acceptance-head"><div><span>测试验收任务</span><h2>${escapeFieldHtml(acceptanceEvents[0]?.label||'埋点需求')}</h2><p>按埋点设计交付表完成测试验收</p></div><b>等待测试确认</b></div><div class="acceptance-status"><div><span>埋点设计</span><strong class="passed">已确认</strong><small>${acceptanceEvents.length} 个事件 · ${acceptanceFieldCount} 个字段</small></div><div><span>开发实现</span><strong class="passed">已完成</strong><small>按契约实现</small></div><div><span>上报调试</span><strong class="watch">等待复测</strong><small>1 项等待测试确认</small></div><div><span>测试负责人</span><strong>待分配</strong><small>测试完成后登记结论</small></div></div></section><section class="acceptance-table-panel prd-imported-design"><div class="view-panel-head"><div><h2>测试验收清单</h2><p>测试继续使用同一份五列交付表核对 Action、字段和值</p></div><div class="acceptance-actions"><button class="btn secondary" id="returnAcceptance">退回修改</button><button class="btn primary" id="confirmAcceptance">确认验收上线</button></div></div>${renderWorkflowContractTable(acceptanceRows)}<div class="acceptance-note"><span></span><p><strong>待复测项</strong><small>请按触发条件执行并核对测试环境 payload。</small></p><button class="btn secondary" id="markRetested">标记复测通过</button></div></section>`;
  document.querySelector('.acceptance-table-panel .view-panel-head')?.insertAdjacentHTML('afterend',renderWorkflowDiffSummary(acceptanceEvents));
  document.getElementById('markRetested').onclick=()=>{document.querySelectorAll('.prd-test-result.is-pending').forEach(status=>{status.textContent='通过';status.className='prd-test-result is-pass'});document.querySelector('.acceptance-status>div:nth-child(3) strong').textContent='全部通过';document.querySelector('.acceptance-status>div:nth-child(3) strong').className='passed';document.querySelector('.acceptance-note').classList.add('hidden');showToast('复测结果已更新为通过')};
  document.getElementById('returnAcceptance').onclick=()=>showToast('已退回埋点设计，等待修改');
  document.getElementById('confirmAcceptance').onclick=()=>{if(document.querySelector('.prd-test-result.is-pending')){showToast('仍有待复测事件，暂不能确认上线');return}showToast('原型验收流程已完成，未写入正式资产')};
}

function renderAcceptanceV2(){
  renderAcceptance();
  const states=document.querySelectorAll('.acceptance-status > div');
  if(states[0]){
    states[0].querySelector('span').textContent='产品需求与埋点 Check';
    states[0].querySelector('strong').textContent='已确认';
  }
  if(states[3]){
    states[3].querySelector('span').textContent='测试负责人';
    states[3].querySelector('strong').textContent='待分配';
    states[3].querySelector('strong').className='watch';
    states[3].querySelector('small').textContent='测试完成后登记结论';
  }
  document.getElementById('returnAcceptance').onclick=()=>showToast('已退回上报调试，等待重新联调');
}
function configurePrimaryAction(view){
  const button=document.getElementById('addBtn');
  const actions={
    intake:{label:'＋ 导入 PRD',run:()=>renderRequirementsDesign('paste')},
    review:{label:'＋ 新建 Check',run:()=>document.querySelector('[data-view="intake"]')?.click()},
    debug:{label:'查看研发交付表',run:()=>document.querySelector('.engineering-handoff')?.scrollIntoView({block:'start'})},
    acceptance:{label:'查看验收清单',run:()=>document.querySelector('.acceptance-table-panel')?.scrollIntoView({block:'start'})},
    issues:{label:'＋ 上报问题',run:()=>document.getElementById('handlingType')?.focus()},
    catalog:{label:'＋ 提交埋点契约',run:()=>document.querySelector('[data-view="intake"]')?.click()},
    locations:{label:'＋ 提交埋点契约',run:()=>document.querySelector('[data-view="intake"]')?.click()},
    commonFields:{label:'＋ 提交埋点契约',run:()=>document.querySelector('[data-view="intake"]')?.click()}
  };
  const action=actions[view]||actions.catalog;
  button.textContent=action.label;
  button.onclick=action.run;
}
const switchViewWithoutWorkflow=switchView;
switchView=function switchViewWithWorkflow(view){
  switchViewWithoutWorkflow(view);
  configurePrimaryAction(view);
  const isAssetManagementView=['catalog','deprecated','locations','commonFields'].includes(view);
  const hideHeaderActions=isAssetManagementView||['intake','review','debug','acceptance','issues'].includes(view);
  document.querySelector('.head-actions')?.classList.toggle('view-hidden',hideHeaderActions);
  document.getElementById('page-subtitle')?.classList.toggle('view-hidden',isAssetManagementView||view==='intake');
  if(view==='intake')renderRequirementsDesign('paste');
  else if(view==='review')renderAnalystReview();
  else if(view==='debug'){
    renderEngineeringHandoff();
  }else if(view==='acceptance')renderAcceptanceV2();
  else if(view==='issues')renderIssueHandling();
};

// Field explorer: keep the asset table compact and move full definitions into grouped detail.
const FIELD_NAME_ALIASES={
  bility_name:'ability_name',
  appid:'app_id',
  generateid:'generate_id',
  imgids:'image_ids',
  firstenterurl:'first_enter_url',
  referrerurl:'referrer_url',
  originurl:'origin_url'
};

const FIELD_GROUPS=[
  {key:'identity',label:'关联标识',hint:'用户、应用、内容与任务 ID'},
  {key:'location',label:'页面与来源',hint:'页面层级、入口与流量来源'},
  {key:'context',label:'业务上下文',hint:'能力、内容类型与生成参数'},
  {key:'result',label:'行为与结果',hint:'动作、状态与处理结果'},
  {key:'user',label:'用户与权益',hint:'用户状态、会员与余额'},
  {key:'device',label:'设备与环境',hint:'端、版本与设备信息'},
  {key:'other',label:'其他字段',hint:'其他已核对的业务属性'}
];

const EVENT_HIDDEN_PRESENTATION_FIELDS={
  app_visit:new Set([
    'short_id/pub_id/ app_id 三者共存',
    'origin（新）9.14上线/详情可展开',
    'current_tab/详情可展开',
    'click_object/详情可展开'
  ]),
  addtodesktop_load_success:new Set(['isFirstTime'])
};

function escapeFieldHtml(value){
  return String(value??'').replace(/[&<>"']/g,char=>({
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '"':'&quot;',
    "'":'&#39;'
  })[char]);
}

function getFieldNameInfo(value){
  const raw=String(value??'').trim();
  const compactRaw=raw.replace(/\s+/g,' ');
  let canonical=compactRaw;

  if(/^_id\s*:/i.test(canonical)){
    canonical=canonical.replace(/^_id\s*:/i,'').replace(/\.{2,}$/,'');
  }
  canonical=canonical
    .replace(/\/详情可展开.*$/,'')
    .replace(/[（(].*$/,'')
    .replace(/增加.*$/,'')
    .replace(/\s*三者共存.*$/,'')
    .replace(/\s*\/\s*/g,' / ')
    .trim();

  const alias=FIELD_NAME_ALIASES[canonical.toLowerCase()];
  const displayName=alias||canonical||compactRaw||'未命名字段';
  return {
    raw,
    displayName,
    renamed:Boolean(alias),
    changed:displayName!==compactRaw
  };
}

function getFieldIssues(nameInfo,description){
  const issues=[];
  const raw=nameInfo.raw;
  const detail=String(description??'');
  if(/三者共存|^_id\s*:/i.test(raw))issues.push('待拆分');
  if(nameInfo.renamed)issues.push('命名待统一');
  if(!detail.trim()||detail.includes('属性说明见原始表'))issues.push('说明待补');
  if(/删除该属性|已删除|废弃/.test(`${raw} ${detail}`))issues.push('疑似废弃');
  return issues;
}

function classifyField(displayName){
  const normalized=String(displayName??'')
    .replace(/([a-z0-9])([A-Z])/g,'$1_$2')
    .toLowerCase();
  const candidates=normalized.split(/[^a-z0-9_]+/).filter(Boolean);
  const matches=pattern=>candidates.some(candidate=>pattern.test(candidate));

  // Ordered exceptions keep ambiguous words such as user_scene and is_slide_view
  // in their business-defined groups before the broader semantic rules run.
  if(matches(/^(?:user_scene|user_language|userlanguage)$/))return matches(/^user_scene$/)?'context':'device';
  if(matches(/^(?:is_slide_view|current_tab|first_view)$/))return 'location';
  if(matches(/^(?:is_video_gen|has_video|is_video|video_type|original_filter_type)$/))return 'context';

  if(matches(/^(?:trace_info|trace_id|uuid)$/)||matches(/(?:^|_)(?:id|ids)$/))return 'identity';
  if(matches(/^(?:location\d*|entry_point|enter_point|entry|entry_type|source|source_type|app_source|origin|origin_url|current_tab|first_enter_url|referrer_url|refer_page|refer_page_url|preurl|pre_url|page|page_url|route|href_url|click_object|exposure_location)$/))return 'location';
  if(matches(/(?:^|_)(?:location|entry|entrance|source|origin|referrer|referer|refer|page|route|url|tab)(?:_|$)/))return 'location';
  if(matches(/^(?:ability_name|feature_name|user_scene|object_type|content_type|type|plan|period|tag_name|generate_time|generate_wait_time|filter_level|pricing_plan_type|product_type|price_page_type|commend_label|template|template_type|model|model_type|search_content|search_content_en|search_method|sort|gallery_type)$/))return 'context';
  if(matches(/(?:^|_)(?:ability|feature|scene|object|content|product|plan|period|template|model|tag|filter|search|sort)(?:_|$)/))return 'context';
  if(matches(/^(?:user|isnew|is_new|isregister|is_register|is_vip|vip_type|vip_status|credits_balance|balance|user_level|user_version|member|subscription_status|is_visitor|points)$/))return 'user';
  if(matches(/(?:^|_)(?:vip|member|subscription|credit|credits|balance|points|user_level|user_status|visitor)(?:_|$)/))return 'user';
  if(matches(/^(?:share_type|button_detail|is_download|is_success|creator|show_free_trial|open_free_trial|get_googleplay_info|is_upgrade|state|status|result|result_type|error|error_code)$/))return 'result';
  if(matches(/(?:^|_)(?:success|failure|failed|result|status|state|error|download|share|upgrade|trial|action)(?:_|$)/))return 'result';
  if(matches(/^(?:gpu|platform|device|device_type|device_brand|device_model|os|app_version|version|channel|channel_code|network|terminal|user_agent|screen_magnification|screen_resolution|browser_window_size|google_play_referrer)$/))return 'device';
  if(matches(/(?:^|_)(?:device|os|platform|version|channel|network|terminal|browser|screen|language|locale)(?:_|$)/))return 'device';
  return 'other';
}

const EVENT_PAYLOAD_EXAMPLES={
  app_exposure_direct:{
    action:'app_exposure_direct',business_type:'A1',count:20,device_id:'',distinct_id:'3u6ScoYI9q0zcgUTei0_T',hrefUrl:'https://a1.art/user/2031575575720058882/app',
    properties:{
      app_version:'',device_link_id:'',device_type:'PC',
      exposureList:[
        {appId:'2066475647017820162',app_id:'2066475647017820162',exposure_location:'homepage_app'},
        {appId:'2066466682422693890',app_id:'2066466682422693890',exposure_location:'homepage_app'}
      ],
      is_visitor:false,page:'base',page_timestamp:1784625926059,page_url:'https://a1.art/user/2031575575720058882/app',product:'a1',refer_page:'',refer_page_timestamp:1784625926059,refer_page_url:'https://a1.art/user/2031575575720058882/app',tag_id:'none',tag_name:'none',user_version:'non_app',vip_status:'whitelist'
    },
    sessionId:'twxkOkcHxm',theme:'behaviour',time:1784626134073,uniqueId:'',user_id:'1983378716605743105',utc_time:'2026-07-21 17:28:54',uuid:'d3473dac-8de1-4511-b2df-cec40588a8b7'
  }
};

const COMMON_LOCATION_SEMANTICS={
  location1:{meaning:'事件发生时所在的一级业务域或产品主场景，不表示物理坐标。',valueMeaningSource:'frontend_code',values:{discover:'Discover 探索与推荐',studio:'Studio 创作与功能',community:'社区与关系',profile:'个人中心与账号',share:'分享链路',web:'Web 端',onboarding:'新用户引导',chatbot:'Chatbot 对话场景'}},
  location2:{meaning:'事件发生时所在的二级业务入口、功能块或流量来源；具体值由一级业务域下的前端场景决定。',valueMeaningSource:'frontend_code',values:{task:'任务入口',top_banner:'顶部 Banner',community:'社区主题或内容入口',profile:'个人中心入口',filters:'滤镜二创',posts:'帖子发布',share:'分享入口',web:'Web 端入口',discover:'探索与推荐入口',studio:'Studio 功能块'}}
};

const FIELD_SEMANTICS={
  location:{meaning:'表示用户触发当前事件的业务场景，与需求定义相关，不表示页面、组件或坐标等物理位置。',example:'like_click'},
  preurl:{meaning:'进入当前页面前的上一个站内页面 URL，用于还原页面访问路径。',example:'https://a1.art/discover'},
  pre_url:{meaning:'进入当前页面前的上一个站内页面 URL，用于还原页面访问路径。',example:'https://a1.art/discover'},
  isnew:{meaning:'标识当前用户是否为新用户，用于区分新老用户的访问和转化表现。',example:'true'},
  gpu:{meaning:'当前设备的图形处理器或浏览器 WebGL 渲染器信息，用于分析设备图形能力与兼容性。',example:'Apple M2'},
  user_agent:{meaning:'浏览器或客户端上报的 User-Agent 字符串，用于识别浏览器、系统和设备环境。',example:'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'},
  os:{meaning:'当前设备的操作系统名称及版本，用于按系统环境分析访问与异常。',example:'macOS 15.5'},
  platform:{meaning:'当前访问所在的运行平台或客户端类型，用于区分 Web、iOS、Android 等端。',example:'Web'},
  screen_magnification:{meaning:'设备屏幕的像素缩放比例，通常对应 devicePixelRatio，用于判断显示密度。',example:'2'},
  screen_resolution:{meaning:'设备物理屏幕的宽高分辨率，格式为宽 x 高。',example:'3024x1964'},
  browser_window_size:{meaning:'事件触发时浏览器可视窗口的宽高，格式为宽 x 高。',example:'1440x900'},
  userlanguage:{meaning:'浏览器或客户端当前使用的语言与地区设置。',example:'zh-CN'},
  user_language:{meaning:'浏览器或客户端当前使用的语言与地区设置。',example:'zh-CN'},
  device_brand:{meaning:'当前设备的品牌；浏览器无法识别时可能为空或 unknown。',example:'Apple'},
  device_model:{meaning:'当前设备的型号；浏览器无法识别时可能为空或 unknown。',example:'MacBookPro'},
  google_play_referrer:{meaning:'Google Play 安装来源参数，用于 Android 安装归因；非 Google Play 安装或非 Android 端通常为空。',example:'utm_source=google&utm_medium=cpc'}
};

const EVENT_FIELD_SEMANTICS={
  ...REVIEWED_FIELD_SEMANTICS,
  'tabbar_click.current_tab':{meaning:'用户点击的顶部或底部 Tab 业务页面。',valueMeaningSource:'frontend_code',values:{discover:'Discover 探索页',community:'社区页',profile:'个人主页',topic:'话题页',post:'帖子页',likes:'点赞页',explore:'探索页',follow:'关注页'}},
  'home_click_tag.current_tab':{meaning:'用户点击标签时所在的内容 Tab。',valueMeaningSource:'frontend_code',values:{post:'社区帖子 Tab',explore:'Discover 探索 Tab'}},
  'home_click_tag.tag_id':{meaning:'用户点击的标签唯一 ID，直接取当前标签 key。'},
  'home_click_tag.tag_name':{meaning:'用户点击的标签名称，根据标签 ID 从当前标签列表查找。'},
  'app_tab.presentation_mode':{meaning:'用户点击后的目标内容页签。legacy 转换将调用参数 tab 写入该最终上报字段；具体 Raw 枚举需结合运行时入参确认。'},
  'app_tab.current_tab':{meaning:'用户点击页签前所在的当前内容页签。legacy 转换将调用参数 currentTab 写入该最终上报字段；具体 Raw 枚举需结合运行时入参确认。'},
  'app_tab.tab':{meaning:'legacy 调用入口传入的目标内容页签；转换后写入最终字段 presentation_mode，不应作为独立业务字段重复上报。'},
  'app_tab.currenttab':{meaning:'legacy 调用入口传入的切换前内容页签；转换后写入最终字段 current_tab，不应作为独立业务字段重复上报。'},
  'pic_visit.origin':{meaning:'用户进入图片详情前的业务来源，读取本地 PIC_ORIGIN；未记录来源时默认为 share。',valueMeaningSource:'frontend_code',values:{share:'未记录其他来源时按分享链路处理'}},
  'pic_visit.current_tab':{meaning:'用户进入图片详情前所在的内容 Tab。当前 legacy 调用与 origin 读取同一个 PIC_ORIGIN 值，字段口径是否应拆分需业务确认。'},
  'pic_visit.searchword':{meaning:'进入图片详情时关联的搜索关键词，由 legacy 转换从当前搜索上下文写入；非搜索场景可为空。'},
  'pic_visit.image_id':{meaning:'被访问图片的图片唯一 ID，直接取 gallery 数据的 data.imageId。'},
  'pic_visit.pic_id':{meaning:'被访问图片的历史图片 ID 字段；当前调用与 image_id 同样取 data.imageId，两个 Raw 字段暂时并行保留。'},
  'sortmode_switch.sortmode_mode':{meaning:'用户切换后的目标排序模式。legacy 转换将调用参数 sort 写入该最终上报字段。'},
  'sortmode_switch.sort':{meaning:'legacy 调用入口传入的目标排序模式；转换后写入最终字段 sortmode_mode，不应作为独立业务字段重复上报。'},
  'search.current_tab':{meaning:'本次搜索结果当前展示的内容页签。',valueMeaningSource:'frontend_code',values:{post:'帖子结果页签',app:'滤镜或 App 结果页签',user:'用户结果页签'}},
  'search.search_method':{meaning:'用户发起本次搜索所采用的入口或方式。',valueMeaningSource:'frontend_code',values:{input:'用户手动输入搜索内容',placeholder:'输入框为空时使用 placeholder 推荐词发起搜索',individuation:'点击个性化搜索推荐词',history:'点击历史搜索词',top_search:'点击顶部热搜词',hot_today:'今日热门列表场景'}},
  'search.search_content':{meaning:'用户本次提交的原始搜索关键词，typed 调用直接取当前 appFilters.keyword。'},
  'search.post_result_num':{meaning:'本次搜索返回的帖子结果总数，取 pageInfo.postPageTotal；没有结果或接口未返回时上报 0。'},
  'search.user_result_num':{meaning:'本次搜索返回的用户结果总数，取 pageInfo.userPageTotal；没有结果或接口未返回时上报 0。'},
  'search.creator_result_num':{meaning:'本次搜索返回的滤镜或 App 结果总数，字段名沿用 creator_result_num，实际取 pageInfo.appPageTotal；没有结果或接口未返回时上报 0。'},
  'search.search_content_en':{meaning:'搜索关键词对应的英文内容，取搜索记录器中的 searchInfo.keyword_en。'},
  'search.result_num':{meaning:'未被当前产品路径调用的 legacy 搜索字段；保留实现仅在 current_tab=app 时传入 App 结果数，其他页签传 0。'},
  'search_history_delete.delete_num':{meaning:'用户本次删除搜索历史的范围。字段名虽然包含 num，实际记录删除类型而不是数量。',valueMeaningSource:'frontend_code',values:{delete_all:'清空全部搜索历史',delete_one:'删除单条搜索历史'}},
  'query_exposure.search_method':{meaning:'本批搜索词在页面曝光时所属的推荐或历史来源。',valueMeaningSource:'frontend_code',values:{input:'用户手动输入搜索内容',individuation:'个性化推荐搜索词',history:'历史搜索词',top_search:'顶部热搜词',hot_today:'今日热门搜索词'}},
  'query_exposure.search_content':{meaning:'本次进入可视区域的一组搜索词，按 string[] 数组批量上报；内容来自热搜、搜索历史或个性化推荐词列表。'},
  'cold_start_click.app_source':{meaning:'用户在冷启动推荐弹窗中点击推荐 App 时，标识该推荐所属的业务来源。当前前端调用固定上报 onboarding_old。',valueMeaningSource:'frontend_code',values:{onboarding_old:'旧版新用户冷启动推荐流程'}},
  'cold_start_click.commend_label':{meaning:'用户点击的冷启动推荐 App 对应的推荐标签，直接读取当前推荐资源的 source；该值由推荐数据动态返回，前端未限制固定枚举。'},
  'push_button_click.locaiton':{meaning:'用户点击通知权限开启按钮时所在的业务入口。Raw key 为代码现状中的 locaiton 拼写，本次仅补充说明，不自动改写为 location。',valueMeaningSource:'frontend_code',values:{check_in_page:'签到页通知权限入口的保留值；对应组件当前没有挂载入口',view_later:'“稍后查看”引导弹窗中的通知权限开启入口'}},
  'push_message_click.push_id':{meaning:'移动端入口链接携带的 Push 消息唯一 ID；URL 未携带 pushId 时上报空字符串。'},
  'push_message_click.push_type':{meaning:'移动端入口链接携带的 Push 消息类型；URL 未携带 pushType 时上报空字符串。'},
  'banner_click.origin':{meaning:'用户点击横幅时所在的产品入口。',valueMeaningSource:'frontend_code',values:{explore:'Discover 探索页横幅',studio:'Studio 功能页横幅',explore_top:'Discover 探索页顶部横幅'}},
  'banner_click.banner_id':{meaning:'被点击横幅的唯一 ID；通用横幅取 id，Studio 横幅读取 item.id。'},
  'banner_click.banner_link':{meaning:'被点击横幅配置的目标跳转链接；通用横幅取 url，Studio 横幅读取 item.url。'},
  'banner_new_click.app_id':{meaning:'Discover 新版 Hero 横幅关联的滤镜或 App 资源长 ID，取 item.resource.id。'},
  'banner_new_click.short_id':{meaning:'Discover 新版 Hero 横幅关联的对外短 ID，取横幅数据中的 appId，用于页面路由。'},
  'banner_exposure.origin':{meaning:'横幅曝光所在的产品入口。',valueMeaningSource:'frontend_code',values:{explore:'Discover 探索页横幅',studio:'Studio 功能页横幅',explore_top:'Discover 探索页顶部横幅'}},
  'banner_exposure.banner_id':{meaning:'本次曝光横幅的唯一 ID；通用横幅读取 id，Studio 横幅读取当前 bannerList 项的 id。'},
  'banner_exposure.tag_id':{meaning:'legacy 横幅曝光链路携带的当前标签 ID；值随页面标签配置动态变化，前端未限制固定枚举。'},
  'banner_exposure.tag_name':{meaning:'legacy 横幅曝光链路携带的当前标签名称；值随页面标签配置动态变化，前端未限制固定枚举。'},
  'banner_exposure.exposurelist':{meaning:'本批进入可视区域的横幅曝光列表；由曝光管理器聚合后作为最终批量曝光数据发送，列表项结构取决于调用场景。'},
  'banner_exposure.arrlist':{meaning:'legacy 曝光管理器暂存的横幅曝光队列，来源为 tempBannerArr；转换后作为 exposureList 发送，不是最终独立业务字段。'},
  'banner_exposure.exposure_list':{meaning:'本批进入可视区域的横幅曝光列表；由曝光管理器聚合后作为最终批量曝光数据发送，列表项结构取决于调用场景。'},
  'banner_exposure.arr_list':{meaning:'legacy 曝光管理器暂存的横幅曝光队列，来源为 tempBannerArr；转换后作为 exposureList 发送，不是最终独立业务字段。'},
  'creator_announcement_click.user_level':{meaning:'用户点击创作者公告时的当前创作者等级，直接取公告组件传入的 level。'},
  'creator_announcement_click.click_behaviour':{meaning:'创作者公告点击入口的数值标识。当前调用固定上报 2；类型仍兼容 1，但现有扫描未发现值为 1 的公告点击调用。',valueMeaningSource:'frontend_code',values:{'2':'个人主页中的创作者公告入口'}},
  'creator_center_click.user_level':{meaning:'用户点击创作者中心入口时的当前创作者等级；首页入口取 userLevel，个人主页横幅读取 level。'},
  'creator_center_click.click_behaviour':{meaning:'区分创作者中心入口所在位置。',valueMeaningSource:'frontend_code',values:{'1':'新版首页中的创作者中心入口','2':'个人主页中的创作者中心横幅'}},
  'tasklist_entrance_click.state':{meaning:'用户本次准备打开还是关闭任务列表。',valueMeaningSource:'frontend_code',values:{1:'准备打开任务列表或结果','-1':'准备关闭任务列表或结果'}},
  'app_visit.app_id':{meaning:'被打开滤镜或 App 的内部唯一 ID，取 resource.id。'},
  'app_visit.short_id':{meaning:'被打开滤镜或 App 的对外短 ID，取 resource.shortId。'},
  'app_visit.pub_id':{meaning:'被打开资产公开发布记录的 ID，取当前资产数据的 id。'},
  'app_visit.tag_id':{meaning:'打开滤镜时关联的标签 ID；无标签时为 none。',suppressValues:true},
  'app_visit.tagId':{meaning:'打开滤镜时关联的标签 ID；无标签时为 none。',suppressValues:true},
  'app_visit.tag_name':{meaning:'打开滤镜时关联的标签名称；无标签时为 none。',suppressValues:true},
  'app_visit.tagName':{meaning:'打开滤镜时关联的标签名称；无标签时为 none。',suppressValues:true},
  'app_visit.ability_name':{meaning:'滤镜或 App 所属的功能分类，由 getAppCategoryName 根据资产信息计算。'},
  'app_visit.user_scene':{meaning:'滤镜或 App 展示时的用户场景，由前端 UserScene 映射为上报值。'},
  'app_visit.location1':{meaning:'滤镜详情页的一级业务位置，表示用户进入详情前所在的产品域。',valueMeaningSource:'frontend_code',values:{discover:'Discover 探索域',studio:'Studio 创作与功能域',community:'社区域',profile:'个人主页域',share:'分享链路进入',web:'Web 端',onboarding:'新用户 onboarding 引导页',onboard_first:'onboarding 首次生成流程',chatbot:'Chatbot 对话场景'}},
  'app_visit.current_tab':{meaning:'legacy 转换时当前所在的产品 Tab，由 getCurrentTab 获取。'},
  'app_visit.image_id':{meaning:'打开滤镜详情前关联的主图片 ID，来自本地存储。'},
  'app_visit.origin':{meaning:'用户打开滤镜详情前的具体业务来源，由本地存储 ORIGIN 获取；这是真实上报字段，旧表中的“origin（新）9.14上线/详情可展开”只是说明行。'},
  'app_visit.location2':{meaning:'legacy 转换时的二级业务位置。前端将它用于表示进入滤镜详情的功能块、内容类型或具体流量来源；它不是固定的页面坐标。',valueMeaningSource:'frontend_code',values:{task:'任务挂起；该场景不会触发 app_visit',studio:'功能块：Cutout、老照片上色、精绘、表情包、faceswap',discover:'探索流量：explore（探索）、follow（关注）、likes（点赞）',top_banner:'顶部 Banner：theme_banner、theme_banner_detail',community:'社区流量：topic_banner、topic_detail',profile:'个人中心：like、like_filter、like_post、generation历史作品、message、message_likes、message_comments、message_followers',filters:'滤镜二创',posts:'发布帖子',share:'通过分享链路进入',web:'Web 端'}},
  'app_visit.location':{meaning:'legacy 转换时的业务场景，App 端取记录器 location，Web 端为 web。'},
  'app_visit.enter_point':{meaning:'进入滤镜详情或生成流程的业务入口，默认为 detail。'},
  'app_visit.click_object':{meaning:'触发进入滤镜详情的点击对象，无点击上下文时为 none。'},
  'app_visit.object_type':{meaning:'被打开资产的内容类型，根据是否视频和 App 分类计算。'},
  'app_visit.is_slide_view':{meaning:'是否是在详情流中滑动切换到当前滤镜，由 is_slide_view 调用参数传入。'},
  'app_visit.sort':{meaning:'滤镜在展示列表中的排序位置，有排序信息时才传入。'},
  'app_visit.first_view':{meaning:'是否是当前列表中首次展示的滤镜，与 sort 一起来自推荐信息。'},
  'app_visit.type':{meaning:'滤镜功能类型，当为视频生成类时转换为视频生成类型。'},
  'app_visit.search_content':{meaning:'来自搜索结果场景的搜索关键词，非 search_result 来源时不展开。'},
  'app_visit.search_method':{meaning:'来自搜索结果场景的搜索方式，取本地存储的 SEARCH_METHOD。'},
  'app_visit.gallery_id':{meaning:'从 App Gallery 展示场景打开滤镜时的画廊 ID。'},
  'app_visit.trace_info':{meaning:'推荐链路追踪信息，根据 app_id 从前置保存的推荐追踪列表中取出。'},
  'app_visit.app_source':{meaning:'滤镜或 App 的业务来源，优先取本地记录的 APP_SOURCE_VISIT，其次取资产推荐来源。'},
  'app_visit.commend_label':{meaning:'推荐资产的推荐标签，仅在资产被识别为推荐项时由 source 转入。'},
  'app_visit.has_video':{meaning:'被打开的资产是否包含视频或 GIF 预览。'},
  'app_visit.is_video_gen':{meaning:'被打开的资产是否属于 AI 视频生成分类，根据资产分类计算。'},
  'app_visit.app_category':{meaning:'资产的原始 App 分类字段，用于进一步计算 object_type。'},
  'app_exposure_direct.exposure_list':{meaning:'本次批量曝光的滤镜或 App 列表。新版每项包含 app_id、trace_info、ability_name、user_scene，并可携带 app_source 和 recommendAppId；legacy 链路还可携带 appid、sort 和 commend_label。'},
  'app_exposure_direct.search_content':{meaning:'触发当前滤镜曝光时关联的搜索内容，来自当前保存的搜索上下文；非搜索场景可为空。'},
  'app_exposure_direct.search_method':{meaning:'触发当前搜索的入口或方式。',valueMeaningSource:'frontend_code',values:{input:'用户手动输入搜索内容',individuation:'点击个性化搜索推荐词',history:'点击历史搜索词',top_search:'点击顶部热搜词',hot_today:'今日热门列表场景'}},
  'app_exposure_direct.location':{meaning:'当前滤镜或 App 曝光所属的业务场景，不表示物理坐标。',valueMeaningSource:'frontend_code',values:{creator:'创作者场景',profile:'个人主页场景',search_result:'搜索结果场景'}},
  'app_exposure_direct.location1':{meaning:'标识当前曝光来自 onboarding 引导场景。',valueMeaningSource:'frontend_code',values:{onboarding:'新用户 onboarding 引导流程'}},
  'app_exposure_direct.tag_id':{meaning:'当前曝光场景关联的标签 ID，根据 basePage、location 或 origin 通过 getTagId 获取。'},
  'app_exposure_direct.type':{meaning:'曝光内容的特殊类型标识；当前契约仅预留 GENERATE_VIDEO，未在已解析调用点中发现顶层字段赋值。'},
  'app_exposure_direct.app_source':{meaning:'曝光列表项的业务来源，实际位于 exposureList[].app_source。当前代码已观察到 onboarding_old 和 generate_wait；未发现顶层 app_source 的直接赋值。',valueMeaningSource:'frontend_code',values:{onboarding_old:'旧版新用户推荐流程中的曝光推荐项',generate_wait:'生成等待页中的曝光推荐项'}},
  'app_exposure_direct.sort':{meaning:'曝光项在当前推荐列表中的排序位置。已解析代码将 rec[index].idx 写入 exposureList 项内；未发现顶层 sort 的直接赋值。'},
  'app_exposure_direct.tag_name':{meaning:'legacy 曝光链路中当前标签的名称，来自记录器保存的 labelName。'},
  'app_exposure_direct.arr_list':{meaning:'legacy 曝光管理器每秒汇总的待上报 App 曝光队列；转换时作为 exposureList 发送，不是最终独立字段。'},
  'app_exposure_direct.search':{meaning:'legacy 调用传入的搜索上下文对象，来自 getSearchParams；转换时展开为具体搜索字段，不以 search 单一 key 发送。'},
  'page_exposure.before':{meaning:'页面或弹窗切换前的业务页面标识；首次记录前的默认值为 landing。',example:'landing'},
  'page_exposure.after':{meaning:'页面或弹窗切换后进入的业务页面标识，取当前页面栈顶部值。',example:'appDetail'},
  'page_exposure.stay_time':{meaning:'在切换前页面或弹窗的停留时长，由当前时间减去上次切换时间计算，单位为毫秒；小于 1 秒的快速切换不上报。',example:'3500'},
  'page_exposure.location1':{meaning:'单独记录 onboarding 页面曝光的场景标识；该调用只上报 location1，不携带 before、after 和 stayTime。',valueMeaningSource:'frontend_code',values:{onboarding:'新用户 onboarding 引导页'}},
  'error_page_enter.type':{meaning:'当前展示的空状态或错误页场景类型，直接取 EmptyView 组件的 EmptyType，用于区分搜索无结果、内容不可用、任务错误等场景。',example:'SearchEmpty'},
  'error_page_enter.code':{meaning:'空状态关联的可选业务或后端错误码；当 type 没有预设文案时，前端使用该值查找具体错误信息。'},
  'check_in_new.number':{meaning:'签到弹窗曝光时的当前连续签到天数，直接取签到接口返回的 continuousDays。',example:'3'},
  'check_in_new.total_number':{meaning:'签到弹窗曝光时的历史累计签到总天数，直接取签到接口返回的 totalNumber。',example:'20'},
  'check_in_v3_button_click.button':{meaning:'标识用户在签到弹窗内点击的按钮。',example:'check_in',valueMeaningSource:'frontend_code',values:{check_in:'点击“签到”并关闭弹窗',pricing:'点击“尝试积分”并打开签到场景的订阅购买弹窗'}},
  'login_success.type':{meaning:'标识本次成功事件属于注册成功还是登录成功；注册成功上报 sign_up，登录成功上报 login。',example:'login'},
  'login_success.pre_user_id':{meaning:'登录或注册成功前客户端保存的原用户 ID，用于关联操作前的游客或账号身份；没有原用户 ID 时为空。',example:'1983378716605743105'},
  'login_success.visitor_bind':{meaning:'标识游客身份是否在本次登录或注册中完成新的账号绑定，直接取登录接口返回的 newBind。',example:'true'},
  'register.inviter':{meaning:'当前注册链路携带的加密分享邀请参数，来源于 share_token 或 Google Play referrer 中的 share_info；没有邀请链路时为空。',example:'encrypted_share_token'},
  'register.referral_register':{meaning:'通过邀请链路完成注册时的新用户 ID；存在 inviter 时取当前注册用户的 user_id，否则为空。',example:'1983378716605743105'},
  'register.tag_name':{meaning:'用户进入注册流程前关联的标签名称，来源于当前会话；没有标签时上报 none。',example:'portrait'},
  'register.tag_id':{meaning:'用户进入注册流程前关联的标签 ID，来源于当前会话；没有标签时上报 none。',example:'2066475647017820162'},
  'register.aeo_grouping_id':{meaning:'Meta 广告归因中的 campaign_group_id，用于标识与 App 关联的投放分组；无对应归因时为空。',example:'120210012345678901'},
  'register.is_shared':{meaning:'标识本次注册是否来自分享邀请链路；存在 inviter 时为 true，否则为 false。',example:'true'},
  'register.app_download_origin':{meaning:'App 下载或注册的归因来源；代码已知 none 和 aeo，分享链路取加密分享信息中的 type，完整分享来源枚举仍需需求侧确认。',example:'aeo'},
  'register.ad_app_short_id':{meaning:'入口 URL 的 topAppId 对应的广告 App short ID 列表；代码有值时按逗号拆分为数组，无值时为空字符串，类型仍需统一。',example:'["2066475647017820162"]'},
  'registration_pop_up.method':{meaning:'注册或登录弹窗完成账号操作时采用的认证方式。',example:'email'},
  'autologin.method':{meaning:'自动登录成功时识别出的认证方式。',example:'email'},
  'login_button_click.method':{meaning:'用户点击登录入口时选择的登录方式。',example:'email'},
  'login_success.method':{meaning:'登录或注册成功时实际采用的认证方式。',example:'email'},
  'register.method':{meaning:'注册事件携带的注册方式；当前前端仅通过通用参数转发，代码未限制具体枚举。',example:'example_value'}
};
assignUserPlatformFieldSemantics(EVENT_FIELD_SEMANTICS);
const NORMALIZED_EVENT_FIELD_SEMANTICS=Object.fromEntries(
  Object.entries(EVENT_FIELD_SEMANTICS).map(([qualifiedName,semantic])=>[qualifiedName.toLowerCase(),semantic])
);

function inferFieldMeaning(field){
  const name=String(field.canonicalName||field.rawName||'').toLowerCase();
  const readable=name.replace(/_/g,' ');
  if(/(^|_)id$/.test(name))return `当前事件关联的 ${readable.replace(/ id$/,'')} 唯一标识。`;
  if(/(^|_)(url|uri)$/.test(name))return `当前事件关联的 ${readable} 地址。`;
  if(/(^|_)(timestamp|time)$/.test(name))return `记录 ${readable} 对应的时间；时间单位需按原契约确认。`;
  if(/^is_|^has_|^can_/.test(name))return `表示“${readable}”条件是否成立，通常上报 true 或 false。`;
  if(/(^|_)(count|num|amount|total)$/.test(name))return `记录 ${readable} 对应的数量。`;
  if(/(^|_)(location|position|entry|source|origin)/.test(name))return `标识本次事件发生的入口、来源或位置：${readable}。`;
  if(/(^|_)(type|status|state|mode|level)$/.test(name))return `用于区分 ${readable} 的业务类型或状态，具体可选值需按原契约确认。`;
  if(/(^|_)(name|title|label)$/.test(name))return `记录当前事件关联的 ${readable} 名称或展示标签。`;
  return '';
}

function getFieldSemantic(field){
  const key=String(field.canonicalName||field.rawName||'').replace(/[^a-zA-Z0-9_]/g,'').toLowerCase();
  const rawKey=String(field.rawName||'').replace(/[^a-zA-Z0-9_]/g,'').toLowerCase();
  const eventSemantic=EVENT_FIELD_SEMANTICS[`${field.eventName}.${rawKey}`]
    ||EVENT_FIELD_SEMANTICS[`${field.eventName}.${key}`]
    ||NORMALIZED_EVENT_FIELD_SEMANTICS[`${field.eventName}.${rawKey}`.toLowerCase()]
    ||NORMALIZED_EVENT_FIELD_SEMANTICS[`${field.eventName}.${key}`.toLowerCase()];
  const commonSemantic=COMMON_LOCATION_SEMANTICS[key];
  if(commonSemantic){
    return eventSemantic
      ? {...commonSemantic,...eventSemantic,values:eventSemantic.replaceCommonValues?{...(eventSemantic.values||{})}:{...commonSemantic.values,...(eventSemantic.values||{})}}
      : commonSemantic;
  }
  return eventSemantic||FIELD_SEMANTICS[key]||null;
}

function hasUsefulFieldDescription(field){
  const description=String(field.description||'').trim();
  return Boolean(description)&&!/(属性说明见原始表|legacy.*(?:调用点|静态输出字段)|代码.*(?:直接传入|自动解析)|字段说明待补|^可选值：|^代码定义\s*\d+\s*个可选值)/i.test(description);
}

function getFieldExample(field){
  const semantic=getFieldSemantic(field);
  if(semantic?.example!==undefined)return semantic.example;
  if(field.allowedValues?.length)return String(field.allowedValues[0]);
  const name=String(field.canonicalName||field.rawName||'').toLowerCase();
  const description=String(field.description||'');
  const explicit=description.match(/(?:例如|示例|取值|枚举)[：:]?\s*([^；。]+)/)?.[1];
  if(explicit)return explicit.trim();
  if(name==='exposurelist')return '[{"app_id":"2066475647017820162","exposure_location":"homepage_app"}]';
  if(/(^|_)is_|^has_/.test(name)||field.canonicalType.toLowerCase().includes('bool'))return 'false';
  if(/(^|_)(count|time|timestamp|duration|balance|index|level)$/.test(name)||/int|number|long/i.test(field.canonicalType))return '20';
  if(/(^|_)(app_?id|content_?id|user_?id|generate_?id|template_?id)$/.test(name))return '2066475647017820162';
  if(name.includes('location'))return 'homepage_app';
  if(name.includes('url'))return 'https://a1.art/example';
  if(name.includes('type'))return 'example_type';
  return 'example_value';
}

function getFieldReportingLogic(field){
  const semantic=getFieldSemantic(field);
  if(semantic)return semantic.meaning;
  const description=String(field.description||'').trim();
  if(hasUsefulFieldDescription(field))return description;
  const inferred=inferFieldMeaning(field);
  if(inferred)return `${inferred}（根据字段名整理，待业务确认）`;
  return `字段 ${field.rawName} 随当前事件上报；前端代码未提供更具体的业务注释，需业务确认。`;
}

function getFieldValueRange(field){
  const semantic=getFieldSemantic(field);
  if(semantic?.suppressValues)return {label:'取值范围',values:[],source:'事件级展示规则'};
  if(semantic?.openValueSet)return {label:'取值范围',values:[],source:'开放值，前端代码未限制枚举',open:true};
  if(semantic?.valueMode==='open'&&semantic?.values)return {label:'已观察值',values:Object.keys(semantic.values),source:'源码已观察值；字段同时支持其他动态值',open:true};
  if(semantic?.openValues&&Object.keys(semantic.openValues).length){
    const frontendReviewed=semantic.valueMeaningSource==='frontend_code';
    return {label:semantic.valuePath?`${semantic.valuePath} 已观察值`:'已观察值',values:Object.keys(semantic.openValues),source:semantic.valuePath?`${semantic.valuePath} 的${frontendReviewed?'前端':'源码'}已观察值；字段仍支持其他动态值`:`${frontendReviewed?'前端代码':'源码'}已观察固定值；同时支持其他动态值`,open:true};
  }
  if(semantic?.valueMeaningSource&&semantic?.values&&Object.keys(semantic.values).length)return {label:'可选值',values:Object.keys(semantic.values),source:semantic.valueMeaningSource==='frontend_code'?'前端代码场景归纳':'代码审计场景归纳'};
  if(field.allowedValues?.length)return {label:'完整枚举',values:field.allowedValues,source:'前端静态类型或常量解析'};
  if(field.canonicalType==='boolean')return {label:'取值范围',values:[true,false],source:'标准 boolean 类型'};
  if(semantic?.values&&Object.keys(semantic.values).length)return {label:'可选值',values:Object.keys(semantic.values),source:'业务场景归纳'};
  const fieldName=String(field.canonicalName||field.rawName||'').toLowerCase();
  if(fieldName==='location1'||fieldName==='location2'){
    const values=String(field.description||'').split(/[；;]/).map(value=>value.trim()).filter(Boolean);
    if(values.length>1)return {label:'可选值',values,source:'资产说明中的枚举清单',derivedFromDescription:true};
  }
  return {label:'取值范围',values:[],source:'开放值，前端代码未限制枚举'};
}

function getFieldCodeReferences(field){
  const references=[
    ...(field.definitions||[]).map(reference=>({...reference,evidenceType:'定义'})),
    ...(field.observedAt||[]).map(reference=>({...reference,evidenceType:'调用'}))
  ];
  const seen=new Set();
  return references.filter(reference=>{
    const location=[reference.file,reference.line].filter(value=>value!==undefined&&value!==null&&value!=='').join(':');
    const key=`${reference.evidenceType}:${location}`;
    if(!location||seen.has(key))return false;
    seen.add(key);
    reference.location=location;
    return true;
  });
}

function getEventWireContracts(event){
  const contracts=event?.codeEvidence?.contracts||event?.wireContracts||[];
  return Array.isArray(contracts)?contracts:[];
}

function getWireContractLabel(namespace){
  const normalized=String(namespace||'').trim();
  if(normalized==='action')return 'typed（action）';
  if(normalized==='legacy')return 'legacy';
  return normalized||'未分类通道';
}

function buildGeneratedPayload(event,properties){
  if(event.commonContractId===ANDROID_COMMON_CONTRACT.id){
    const androidProperties={product:'A1',gpu:'Adreno example',total_memory:8192,available_memory:4096,total_storage:128000,available_storage:64000,os_version:'14',device_model:'Pixel 8',device_brand:'Google',app_version:'1.2.3',app_version_code:123,user_country:'CN',...properties};
    return {payload:{action:event.name,theme:'behaviour',business_type:'A1',distinct_id:'example_report_uuid',platform:'android',os_version:'14',device_id:'example_device_fingerprint',user_id:'example_user_id',uniqueId:'example_unique_id',time:Date.now(),utc_time:'2026-07-24 14:30:00',properties:androidProperties},businessFieldCount:Object.keys(properties).length};
  }
  return {payload:{action:event.name,business_type:'A1',device_type:'PC',distinct_id:'example_distinct_id',sessionId:'example_session_id',theme:event.theme==='-'?'behaviour':event.theme,time:Date.now(),user_id:'example_user_id',properties},businessFieldCount:Object.keys(properties).length};
}

function getEventPayloadExample(event){
  if(EVENT_PAYLOAD_EXAMPLES[event.name])return {payload:EVENT_PAYLOAD_EXAMPLES[event.name],kind:'用户提供的完整上报样例'};
  const properties={};
  normalizeEventFields(event).forEach(field=>{
    const example=getFieldExample(field);
    if(example==='example_value')return;
    properties[field.rawName]=example==='false'?false:example==='20'?20:example;
  });
  const generated=buildGeneratedPayload(event,properties);
  return {...generated,kind:event.commonContractId===ANDROID_COMMON_CONTRACT.id?'按 Android Native v1 契约生成的模拟样例':'按当前契约生成的模拟样例'};
}

function getWireContractFieldExample(event,contractField,normalizedFields){
  const name=String(contractField?.nameRaw||'').trim();
  const observedType=String(contractField?.typeObserved||'unknown').toLowerCase();
  const field=normalizedFields.get(name)||{
    eventName:event.name,
    rawName:name,
    canonicalName:name,
    canonicalType:observedType,
    allowedValues:[],
    description:'',
    definitions:[],
    observedAt:[]
  };
  const semantic=getFieldSemantic(field);
  const range=getFieldValueRange(field);
  let example=semantic?.example;
  if(example===undefined&&range.values.length)example=range.values[0];
  if(example===undefined)example=getFieldExample(field);
  if(example===undefined||example==='example_value'){
    if(/bool/.test(observedType))example=false;
    else if(/number|int|long|float|double/.test(observedType))example=20;
    else if(/(^|_)(app_?id|content_?id|user_?id|generate_?id|template_?id)$/.test(name.toLowerCase()))example='2066475647017820162';
    else example=`example_${name||'value'}`;
  }
  if(typeof example==='string'&&/number|int|long|float|double/.test(observedType)&&/^-?\d+(?:\.\d+)?$/.test(example))return Number(example);
  if(example==='false'&&/bool/.test(observedType))return false;
  if(example==='true'&&/bool/.test(observedType))return true;
  return example;
}

function getWireContractPayloadExamples(event){
  const contracts=getEventWireContracts(event);
  if(contracts.length<=1)return [];
  const normalizedFields=new Map(normalizeEventFields(event).map(field=>[field.rawName,field]));
  return contracts.map(contract=>{
    const properties={};
    (contract.fields||[]).forEach(field=>{
      const name=String(field?.nameRaw||'').trim();
      if(name)properties[name]=getWireContractFieldExample(event,field,normalizedFields);
    });
    const generated=buildGeneratedPayload(event,properties);
    const namespaceLabel=getWireContractLabel(contract.namespace);
    return {...generated,contract,namespaceLabel,kind:`按 ${namespaceLabel} Wire Contract 生成的模拟样例`};
  });
}

function renderPayloadExample(event){
  const wireExamples=getWireContractPayloadExamples(event);
  const examples=wireExamples.length?wireExamples:[getEventPayloadExample(event)];
  const multiple=wireExamples.length>0;
  const first=examples[0];
  const commonCount=Object.keys(first.payload).filter(key=>key!=='properties').length;
  const firstBusinessFieldCount=first.businessFieldCount??Object.keys(first.payload.properties||{}).length;
  const summary=multiple?`${examples.length} 份独立 Wire Contract · 分通道样例`:`${commonCount} 个顶层公共字段 + ${firstBusinessFieldCount} 个独有字段`;
  const note=multiple?'以下样例按各上报通道的真实字段契约分别生成；上方字段并集仅用于资产检索，不会合并成同一条 payload。':'模拟数据，仅用于契约说明和本地调试；properties 内可能同时包含契约注入的公共属性。';
  const exampleMarkup=examples.map((example,index)=>{
    const payloadId=index===0?'eventPayloadExample':`eventPayloadExample-${index}`;
    const json=JSON.stringify(example.payload,null,2);
    const businessFieldCount=example.businessFieldCount??Object.keys(example.payload.properties||{}).length;
    const label=multiple?`${example.namespaceLabel} · ${businessFieldCount} 个独有字段`:example.kind;
    return `<section class="payload-variant"><div class="payload-actions"><span>${escapeFieldHtml(label)}</span><button class="payload-copy"${index===0?' id="copyEventPayload"':''} data-copy-payload-target="${payloadId}" type="button">复制 JSON</button></div><pre class="event-payload-example" id="${payloadId}">${escapeFieldHtml(json)}</pre></section>`;
  }).join('');
  return `<details class="drawer-section drawer-disclosure payload-example-section"><summary><span>完整上报数据</span><small>${escapeFieldHtml(summary)}</small></summary><div class="drawer-disclosure-body"><p class="payload-example-note">${escapeFieldHtml(note)}</p><div class="payload-variant-list">${exampleMarkup}</div></div></details>`;
}

function renderCommonContractReference(event){
  if(event.commonContractId!==ANDROID_COMMON_CONTRACT.id)return '';
  const canonical=event.canonicalActionProposal?`<div class="common-contract-warning"><span>Raw action</span><code>${escapeFieldHtml(event.name)}</code><span>Canonical proposal</span><code>${escapeFieldHtml(event.canonicalActionProposal)}</code><small>迁移策略：${escapeFieldHtml(event.migrationStrategy||'待选择')}；当前不改写 Raw action。</small></div>`:'';
  return `<details class="drawer-section drawer-disclosure common-contract-reference" open><summary><span>公共字段契约</span><small>${ANDROID_COMMON_CONTRACT.fields.length} 条路径 · ${escapeFieldHtml(ANDROID_COMMON_CONTRACT.label)}</small></summary><div class="drawer-disclosure-body"><div class="common-contract-meta"><div><span>契约 ID</span><code>${ANDROID_COMMON_CONTRACT.id}</code></div><div><span>版本</span><strong>${ANDROID_COMMON_CONTRACT.version}</strong></div><div><span>注入方式</span><strong>Android SDK 统一注入</strong></div></div><p>这些字段只作为公共契约引用，不计入上方事件独有字段。完整路径保留顶层信封与 properties 的实际位置。</p>${canonical}</div></details>`;
}

function normalizeEventFields(event){
  const hiddenFields=EVENT_HIDDEN_PRESENTATION_FIELDS[event.name]||new Set();
  return getEventBusinessFieldEntries(event).filter(({field})=>!hiddenFields.has(String(field?.[0]||'').trim())).map(({field,index})=>{
    const nameInfo=getFieldNameInfo(field[0]);
    const canonicalField=event.governanceAssessment?.canonicalSuggestions?.fields?.find(item=>item.index===index);
    const canonicalName=String(canonicalField?.key||nameInfo.displayName||'').trim();
    const type=String(field[1]||'未定义').trim();
    const canonicalType=String(canonicalField?.type||globalThis.TrackingGovernance?.normalizeType(type).canonical||type).trim();
    const description=String(field[2]||'').trim();
    const codeMeta=event.fieldMeta?.[nameInfo.raw]||event.fieldMeta?.[canonicalName]||{};
    const governanceIssues=(event.governanceAssessment?.issues||[]).filter(issue=>String(issue.path||'').startsWith(`fields[${index}]`)).map(issue=>issue.message);
    const issues=[...new Set([...getFieldIssues(nameInfo,description),...governanceIssues])];
    return {
      index,
      eventName:event.name,
      rawName:nameInfo.raw,
      displayName:nameInfo.raw||'未命名字段',
      canonicalName,
      originalChanged:Boolean(canonicalName&&canonicalName!==nameInfo.raw),
      type,
      canonicalType,
      typeChanged:Boolean(canonicalType&&canonicalType!==type),
      description,
      allowedValues:Array.isArray(codeMeta.allowedValues)?codeMeta.allowedValues:[],
      typeExpressions:Array.isArray(codeMeta.typeExpressions)?codeMeta.typeExpressions:[],
      definitions:Array.isArray(codeMeta.definitions)?codeMeta.definitions:[],
      observedAt:Array.isArray(codeMeta.observedAt)?codeMeta.observedAt:[],
      issues,
      group:classifyField(canonicalName||nameInfo.raw),
      searchable:[nameInfo.raw,canonicalName,type,canonicalType,description,...issues].join(' ').toLowerCase()
    };
  });
}

function renderFieldPreview(event){
  const fields=normalizeEventFields(event);
  if(!fields.length)return '<span class="field-preview-empty">无事件独有字段</span>';
  const names=fields.slice(0,2).map(field=>`<code title="${escapeFieldHtml(field.rawName)}">${escapeFieldHtml(field.displayName)}</code>`).join('');
  const countLabel=fields.length>2?`+${fields.length-2}`:`${fields.length} 个`;
  return `<button class="field-preview" data-open-event="${escapeFieldHtml(event.name)}" title="查看 ${fields.length} 个独有字段" aria-label="查看 ${escapeFieldHtml(event.name)} 的 ${fields.length} 个独有字段"><span class="field-preview-names">${names}</span><span class="field-preview-more">${countLabel}</span></button>`;
}

function renderFieldContractSummary(event){
  const fields=normalizeEventFields(event);
  if(!fields.length)return '<span class="field-contract-empty">无事件独有字段</span>';
  const explained=fields.filter(field=>getFieldSemantic(field)||hasUsefulFieldDescription(field)).length;
  const pending=fields.length-explained;
  const isReviewPending=field=>getFieldSemantic(field)?.reviewStatus==='needs_review';
  const reviewPending=fields.filter(isReviewPending).length;
  const confirmed=fields.filter(field=>(getFieldSemantic(field)||hasUsefulFieldDescription(field))&&!isReviewPending(field)).length;
  const completionLabel=pending?` · <b>${pending} 待完善</b>`:reviewPending?` · <b>${reviewPending} 待确认</b>`:' · 说明完整';
  return `<button class="field-contract-summary" data-open-event="${escapeFieldHtml(event.name)}" title="查看 ${fields.length} 个事件独有字段" aria-label="查看 ${escapeFieldHtml(event.name)} 的字段契约"><strong>${fields.length} 个字段</strong><span>${explained} 已说明${completionLabel}</span><i style="--field-progress:${Math.round(confirmed/fields.length*100)}%"></i></button>`;
}

function renderNestedItemFields(field,semantic){
  const itemFields=Object.entries(semantic?.itemFields||{});
  if(!itemFields.length)return {markup:'',searchText:''};
  const parentPath=semantic.valuePath||`${field.rawName}[]`;
  const markup=itemFields.map(([itemName,itemSemantic])=>{
    const itemValues={...(itemSemantic.values||{}),...(itemSemantic.openValues||{})};
    const valueEntries=Object.entries(itemValues);
    const valuesMarkup=valueEntries.length
      ?`<div class="field-enum-values has-value-meanings field-item-values">${valueEntries.map(([value,meaning])=>`<div><code>${escapeFieldHtml(value===''?'""':value)}</code><span>：${escapeFieldHtml(meaning)}</span></div>`).join('')}</div>`
      :'';
    return `<div class="field-item-row"><code>${escapeFieldHtml(`${parentPath}.${itemName}`)}</code><p>${escapeFieldHtml(itemSemantic.meaning||'')}</p>${valuesMarkup}</div>`;
  }).join('');
  const searchText=itemFields.flatMap(([itemName,itemSemantic])=>[
    `${parentPath}.${itemName}`,
    itemSemantic.meaning||'',
    ...Object.keys(itemSemantic.values||{}),
    ...Object.values(itemSemantic.values||{}),
    ...Object.keys(itemSemantic.openValues||{}),
    ...Object.values(itemSemantic.openValues||{})
  ]).join(' ');
  return {markup:`<span>数组项字段</span><div class="field-item-fields">${markup}</div>`,searchText};
}

function renderFieldRow(field){
  const primaryName=field.originalChanged?field.canonicalName:field.displayName;
  const originalMarkup=field.originalChanged?`<small class="field-original"><span>Raw</span><code>${escapeFieldHtml(field.displayName)}</code></small>`:'';
  const range=getFieldValueRange(field);
  const semantic=getFieldSemantic(field);
  const reviewPending=semantic?.reviewStatus==='needs_review';
  const reviewMarkup=reviewPending?`<span class="field-issue">${escapeFieldHtml(semantic.reviewLabel||'契约差异 · 待确认')}</span>`:'';
  const valueMeanings={...(semantic?.values||{}),...(semantic?.openValues||{})};
  const hasValueMeanings=range.values.some(value=>valueMeanings[String(value)]);
  const rangeMarkup=range.values.length
    ?`<div class="field-enum-values${hasValueMeanings?' has-value-meanings':''}">${range.values.map(value=>{const displayValue=value===''?'""':typeof value==='string'?value:JSON.stringify(value);const valueMeaning=hasValueMeanings?valueMeanings[String(value)]:'';return `<div><code>${escapeFieldHtml(displayValue)}</code>${valueMeaning?`<span>：${escapeFieldHtml(valueMeaning)}</span>`:''}</div>`;}).join('')}</div>`
    :'';
  const codeReferences=getFieldCodeReferences(field);
  const fieldName=String(field.canonicalName||field.rawName||'').toLowerCase();
  const hideExample=['location1','location2','entry_point'].includes(fieldName)||semantic?.suppressValues;
  const example=getFieldExample(field);
  const hasReliableExample=example&&example!=='example_value';
  const meaningMarkup=range.derivedFromDescription?'':`<span>业务含义</span><p>${escapeFieldHtml(getFieldReportingLogic(field))}</p>`;
  const valueMarkup=range.values.length
    ?`<span>${escapeFieldHtml(range.label||'可选值')}</span>${rangeMarkup}`
    :hideExample||!hasReliableExample?'':`<span>示例</span><code>${escapeFieldHtml(example)}</code>`;
  const nestedItems=renderNestedItemFields(field,semantic);
  return `<div class="field-row${reviewPending?' has-issue':''}" data-field-search="${escapeFieldHtml(`${field.searchable} ${getFieldReportingLogic(field)} ${hasReliableExample?example:''} ${range.values.join(' ')} ${Object.values(valueMeanings).join(' ')} ${nestedItems.searchText} ${codeReferences.map(reference=>reference.location).join(' ')}`)}"><div class="field-identity"><div class="field-name-line"><code>${escapeFieldHtml(primaryName)}</code>${reviewMarkup}</div>${originalMarkup}</div><div class="field-reporting">${meaningMarkup}${valueMarkup}${nestedItems.markup}</div></div>`;
}

function renderFieldExplorer(event){
  const fields=normalizeEventFields(event);
  if(!fields.length)return '<p class="empty">暂无事件独有字段</p>';

  const groups=FIELD_GROUPS.map(group=>({
    ...group,
    fields:fields.filter(field=>field.group===group.key)
  })).filter(group=>group.fields.length);
  const groupMarkup=groups.map(group=>`<details class="field-group" data-field-group data-total-count="${group.fields.length}" open><summary><span class="field-group-title"><strong>${group.label}</strong><small>${group.hint}</small></span><span class="field-group-count" data-group-count>${group.fields.length} 个</span></summary><div class="field-table">${group.fields.map(renderFieldRow).join('')}</div></details>`).join('');

  return `<div class="field-groups" id="drawerFieldGroups">${groupMarkup}</div><p class="field-no-results" id="fieldNoResults" hidden>没有匹配的独有字段</p>`;
}

function bindFieldExplorer(){
  const input=document.getElementById('drawerFieldSearch');
  const container=document.getElementById('drawerFieldGroups');
  const empty=document.getElementById('fieldNoResults');
  if(!input||!container)return;

  const groups=[...container.querySelectorAll('[data-field-group]')];
  const rows=[...container.querySelectorAll('.field-row')];
  input.oninput=()=>{
    const query=input.value.trim().toLowerCase();
    let visibleCount=0;
    rows.forEach(row=>{
      const matches=!query||row.dataset.fieldSearch.includes(query);
      row.hidden=!matches;
      if(matches)visibleCount+=1;
    });
    groups.forEach(group=>{
      const visibleRows=[...group.querySelectorAll('.field-row')].filter(row=>!row.hidden);
      group.hidden=!visibleRows.length;
      group.querySelector('[data-group-count]').textContent=query?`${visibleRows.length} / ${group.dataset.totalCount}`:`${group.dataset.totalCount} 个`;
      if(query&&visibleRows.length)group.open=true;
    });
    container.hidden=visibleCount===0;
    empty.hidden=visibleCount!==0;
  };
}

function bindPayloadExample(){
  document.querySelectorAll('[data-copy-payload-target]').forEach(button=>{
    const payload=document.getElementById(button.dataset.copyPayloadTarget);
    if(!payload)return;
    button.onclick=async()=>{
      try{
        await navigator.clipboard.writeText(payload.textContent);
        button.textContent='已复制';
      }catch(error){
        button.textContent='复制失败';
      }
      setTimeout(()=>{button.textContent='复制 JSON'},1400);
    };
  });
}

function renderGovernanceBadge(event){
  const assessment=event.governanceAssessment;
  if(!assessment)return '';
  const count=(assessment.issueCounts?.error||0)+(assessment.issueCounts?.warning||0);
  const labels={blocked:`需修正 ${assessment.issueCounts?.error||0}`,needs_review:`待确认 ${count}`,ready:'检查通过'};
  return `<span class="governance-badge is-${escapeFieldHtml(assessment.status)}">${escapeFieldHtml(labels[assessment.status]||'待检查')}</span>`;
}

const CATALOG_WORKSTREAMS=[
  {name:'商业化',description:'定价、试用、订阅、支付、积分、取消挽回。'},
  {name:'Chatbot',description:'对话入口、消息、对话过程与结果。'},
  {name:'搜推与触达',description:'Discover、搜索、Feed、排序、推荐、冷启动、Push。'},
  {name:'运营增长',description:'Banner、活动、签到、引导、评分、邀请、PWA。'},
  {name:'创作工具',description:'模板、生成、编辑、Remix、素材和结果。'},
  {name:'用户与平台',description:'登录、账号、社区、用户路径、权限、性能和异常。'}
];
const catalogSelection={workstream:'',workstreamModule:'',journeyKey:'main_flow'};
const catalogExpandedWorkstreams=new Set(CATALOG_WORKSTREAMS.map(item=>item.name));
const catalogTaxonomyOptions={mainFlowEvents};
const catalogDirectory=document.querySelector('.catalog-directory');
const catalogDirectoryHead=catalogDirectory?.querySelector('.catalog-directory-head');
const catalogMainFlowButton=catalogDirectory?.querySelector('.catalog-main-flow');
const catalogDirectoryTree=document.getElementById('catalogDirectoryTree');
const catalogNarrowViewport=window.matchMedia('(max-width: 900px)');
let catalogDirectoryMenu=document.getElementById('catalogDirectoryMenu');
let catalogDirectoryToggle=document.getElementById('catalogDirectoryToggle');

if(catalogDirectory&&catalogDirectoryHead&&catalogMainFlowButton&&catalogDirectoryTree){
  if(!catalogDirectoryMenu){
    catalogDirectoryMenu=document.createElement('div');
    catalogDirectoryMenu.className='catalog-directory-menu';
    catalogDirectoryMenu.id='catalogDirectoryMenu';
    catalogDirectoryMenu.setAttribute('aria-label','工作线筛选选项');
    catalogDirectoryMenu.append(catalogMainFlowButton,catalogDirectoryTree);
    catalogDirectory.append(catalogDirectoryMenu);
  }
  if(!catalogDirectoryToggle){
    catalogDirectoryToggle=document.createElement('button');
    catalogDirectoryToggle.className='catalog-directory-toggle';
    catalogDirectoryToggle.id='catalogDirectoryToggle';
    catalogDirectoryToggle.type='button';
    catalogDirectoryToggle.setAttribute('aria-controls','catalogDirectoryMenu');
    catalogDirectoryToggle.setAttribute('aria-expanded','false');
    catalogDirectoryToggle.setAttribute('aria-label','展开工作线目录');
    catalogDirectoryToggle.innerHTML='<span>筛选</span><span class="catalog-directory-toggle-icon" aria-hidden="true">⌄</span>';
    catalogDirectoryHead.append(catalogDirectoryToggle);
  }
  catalogDirectory.classList.add('is-responsive-ready');
}

function setCatalogDirectoryOpen(open,{restoreFocus=false}={}){
  if(!catalogDirectory||!catalogDirectoryToggle)return;
  const shouldOpen=Boolean(open&&catalogNarrowViewport.matches);
  catalogDirectory.classList.toggle('is-mobile-open',shouldOpen);
  catalogDirectoryToggle.setAttribute('aria-expanded',String(shouldOpen));
  catalogDirectoryToggle.setAttribute('aria-label',shouldOpen?'收起工作线目录':'展开工作线目录');
  if(restoreFocus&&!shouldOpen)catalogDirectoryToggle.focus({preventScroll:true});
}

catalogDirectoryToggle?.addEventListener('click',()=>{
  setCatalogDirectoryOpen(!catalogDirectory.classList.contains('is-mobile-open'));
});
catalogNarrowViewport.addEventListener?.('change',()=>setCatalogDirectoryOpen(false));
document.addEventListener('click',event=>{
  if(catalogDirectory?.classList.contains('is-mobile-open')&&!catalogDirectory.contains(event.target)){
    setCatalogDirectoryOpen(false);
  }
});
document.addEventListener('keydown',event=>{
  if(event.key==='Escape'&&catalogDirectory?.classList.contains('is-mobile-open')){
    setCatalogDirectoryOpen(false,{restoreFocus:true});
  }
});

function getCatalogClassification(event){
  if(globalThis.CatalogTaxonomy){
    return globalThis.CatalogTaxonomy.classifyEvent(event,catalogTaxonomyOptions);
  }
  return {
    businessDomain:event.group||'待归类',
    businessModule:event.domain||'未分模块',
    eventType:'其他',
    evidenceKey:event.codeEvidence?'defined':'manual',
    evidenceLabel:event.codeEvidence?'仅定义':'人工资产',
    journeyKey:mainFlowEvents.includes(event)?'main_flow':''
  };
}

function getCatalogWorkstreamClassification(event){
  if(globalThis.CatalogTaxonomy?.classifyWorkstream){
    return globalThis.CatalogTaxonomy.classifyWorkstream(event,catalogTaxonomyOptions);
  }
  const asset=getCatalogClassification(event);
  return {
    ...asset,
    primaryWorkstream:asset.businessDomain,
    workstreamModule:asset.businessModule,
    collaborationTags:[],
    assetBusinessDomain:asset.businessDomain,
    assetBusinessModule:asset.businessModule
  };
}

function getCatalogViewClassification(event){
  return getCatalogWorkstreamClassification(event);
}

function getCatalogViewLabels(){
  return {
    columnHeader:'工作线 / 模块',
    drawerDomainLabel:'主要工作线',
    drawerModuleLabel:'工作模块',
    similarLabel:'按工作线与模块匹配'
  };
}

function getEventReportingLogic(event,classification=getCatalogClassification(event)){
  const logic=globalThis.CatalogTaxonomy?.getReportingLogic?.(event,classification);
  const fallback=logic||{
    text:event.rule||event.description||'上报时机待确认',
    evidenceText:event.rule?'人工定义 · 来自资产中的触发规则':'待确认 · 尚无触发依据',
    rawDescription:event.description||'',
    derived:false,
    eventType:classification.eventType,
    evidenceState:classification.evidenceKey,
    callSiteCount:Number(event.codeEvidence?.callSiteCount||0),
    chainLabel:'',
    locations:[],
    behaviorSource:event.rule?'declared':'unknown',
    behaviorLabel:event.rule?'人工定义':'待确认',
    needsReview:!event.rule
  };
  const approvedTrigger=isApprovedSessionAsset(event)?String(event?.governanceMetadata?.trigger||'').trim():'';
  if(!approvedTrigger)return fallback;
  return {
    ...fallback,
    text:approvedTrigger,
    evidenceText:'当前浏览器会话 Check 已确认，仍为模拟资产',
    behaviorSource:'check_approved',
    behaviorLabel:'Check 已确认',
    derived:false,
    needsReview:false
  };
}

function getCatalogFilterState(){
  return {
    query:(document.getElementById('search')?.value||'').trim().toLowerCase(),
    evidence:document.getElementById('evidence')?.value||'all',
    tab:document.querySelector('.tab.active')?.dataset.tab||'all'
  };
}

function matchesCatalogBaseFilters(event,classification,filters,viewClassification=getCatalogViewClassification(event)){
  const reportingLogic=getEventReportingLogic(event,classification);
  const fieldText=normalizeEventFields(event).map(field=>field.searchable).join(' ');
  const codeText=event.codeEvidence?[...(event.codeEvidence.namespaces||[]),...(event.codeEvidence.definitions||[]).map(reference=>reference.file),...(event.codeEvidence.callSites||[]).map(reference=>reference.file)].join(' '):'';
  const governanceText=event.governanceAssessment?[event.governanceAssessment.canonicalSuggestions?.action,...(event.governanceAssessment.issues||[]).map(issue=>issue.message)].join(' '):'';
  const workstreamClassification=viewClassification;
  const workstreamText=[workstreamClassification.businessDomain,workstreamClassification.businessModule,...(workstreamClassification.collaborationTags||[])].join(' ');
  const searchText=[event.name,reportingLogic.text,reportingLogic.evidenceText,event.description,event.theme,event.group,event.domain,event.rule,classification.businessDomain,classification.businessModule,workstreamText,classification.eventType,classification.evidenceLabel,fieldText,codeText,governanceText].join(' ').toLowerCase();
  const matchesTab=filters.tab==='all'
    ||(filters.tab==='governance'&&event.governanceAssessment?.status!=='ready')
    ||(filters.tab==='issue'&&IN_PROGRESS_STATUSES.has(event.status));
  return (!filters.query||searchText.includes(filters.query))
    &&(filters.evidence==='all'||classification.evidenceKey===filters.evidence)
    &&matchesTab;
}

function matchesCatalogSelection(classification){
  if(catalogSelection.journeyKey&&classification.journeyKey!==catalogSelection.journeyKey)return false;
  const matchesWorkstream=!catalogSelection.workstream||classification.primaryWorkstream===catalogSelection.workstream;
  const matchesModule=!catalogSelection.workstreamModule||classification.workstreamModule===catalogSelection.workstreamModule;
  return matchesWorkstream&&matchesModule;
}

function filterCatalogEvents(sourceEvents=events,{includeDirectory=true}={}){
  const filters=getCatalogFilterState();
  return sourceEvents.filter(event=>{
    const classification=getCatalogClassification(event);
    const viewClassification=getCatalogViewClassification(event);
    return matchesCatalogBaseFilters(event,classification,filters,viewClassification)
      &&(!includeDirectory||matchesCatalogSelection(viewClassification));
  });
}

function resetCatalogSelection(){
  catalogSelection.workstream='';
  catalogSelection.workstreamModule='';
  catalogSelection.journeyKey='';
  catalogExpandedWorkstreams.clear();
  CATALOG_WORKSTREAMS.forEach(item=>catalogExpandedWorkstreams.add(item.name));
}

function setCatalogWorkstream(name){
  const wasSelected=catalogSelection.workstream===name&&!catalogSelection.workstreamModule;
  catalogSelection.workstream=name;
  catalogSelection.workstreamModule='';
  catalogSelection.journeyKey='';
  if(wasSelected&&catalogExpandedWorkstreams.has(name))catalogExpandedWorkstreams.delete(name);
  else catalogExpandedWorkstreams.add(name);
  render();
}

function setCatalogWorkstreamModule(workstream,module){
  catalogSelection.workstream=workstream;
  catalogSelection.workstreamModule=module;
  catalogSelection.journeyKey='';
  catalogExpandedWorkstreams.add(workstream);
  render();
}

function setCatalogJourney(journeyKey){
  catalogSelection.workstream='';
  catalogSelection.workstreamModule='';
  catalogSelection.journeyKey=journeyKey;
  CATALOG_WORKSTREAMS.forEach(item=>catalogExpandedWorkstreams.add(item.name));
  render();
}

function renderCatalogDirectory(baseEvents,visibleEvents){
  const tree=document.getElementById('catalogDirectoryTree');
  if(!tree)return;
  const taxonomy=globalThis.CatalogTaxonomy;
  const activeEvents=getActiveAssetEvents();
  const directory=taxonomy?.buildWorkstreamDirectory
    ?taxonomy.buildWorkstreamDirectory(activeEvents,catalogTaxonomyOptions)
    :[];
  const directoryByWorkstream=new Map(directory.map(item=>[item.name,item]));
  const journeyCount=activeEvents.filter(event=>getCatalogWorkstreamClassification(event).journeyKey==='main_flow').length;
  const journeyButton=document.querySelector('[data-catalog-journey="main_flow"]');
  journeyButton?.classList.toggle('active',catalogSelection.journeyKey==='main_flow');
  journeyButton?.setAttribute('aria-pressed',String(catalogSelection.journeyKey==='main_flow'));
  document.getElementById('catalogJourneyCount').textContent=journeyCount;

  tree.innerHTML=CATALOG_WORKSTREAMS.map((item,index)=>{
    const workstream=directoryByWorkstream.get(item.name);
    const modules=workstream?.modules||[];
    const selected=!catalogSelection.journeyKey&&catalogSelection.workstream===item.name;
    const active=selected&&!catalogSelection.workstreamModule;
    const expanded=catalogExpandedWorkstreams.has(item.name);
    const moduleListId=`catalog-workstream-${index}-modules`;
    const moduleMarkup=modules.map(module=>{
      const moduleActive=selected&&catalogSelection.workstreamModule===module.name;
      return `<button class="catalog-subcategory${moduleActive?' active':''}" type="button" data-catalog-module="${escapeFieldHtml(module.name)}" data-catalog-module-workstream="${escapeFieldHtml(item.name)}" aria-current="${moduleActive}"><span>${escapeFieldHtml(module.name)}</span><b class="catalog-count">${module.count}</b></button>`;
    }).join('');
    return `<div class="catalog-workstream-group${expanded?' is-expanded':''}${selected?' has-selection':''}" data-catalog-group="${escapeFieldHtml(item.name)}"><button class="catalog-workstream${active?' active':''}" type="button" data-catalog-workstream="${escapeFieldHtml(item.name)}" aria-pressed="${selected}" aria-expanded="${expanded}" aria-controls="${moduleListId}"><span class="catalog-nav-copy"><strong>${escapeFieldHtml(item.name)}</strong><small>${escapeFieldHtml(item.description)}</small></span><span class="catalog-workstream-meta"><b class="catalog-count">${workstream?.count||0}</b><span class="catalog-workstream-chevron" aria-hidden="true">›</span></span></button><div class="catalog-workstream-modules" id="${moduleListId}" aria-label="${escapeFieldHtml(item.name)}二级小类"${expanded?'':' hidden'}>${moduleMarkup}</div></div>`;
  }).join('');
  tree.querySelectorAll('.catalog-workstream[data-catalog-workstream]').forEach(button=>button.addEventListener('click',()=>setCatalogWorkstream(button.dataset.catalogWorkstream)));
  tree.querySelectorAll('[data-catalog-module]').forEach(button=>button.addEventListener('click',()=>{
    setCatalogWorkstreamModule(button.dataset.catalogModuleWorkstream,button.dataset.catalogModule);
    setCatalogDirectoryOpen(false);
  }));

}

document.querySelector('[data-catalog-journey="main_flow"]')?.addEventListener('click',()=>{
  setCatalogJourney('main_flow');
  setCatalogDirectoryOpen(false);
});
const mainFlowScopeButton=document.querySelector('[data-catalog-journey="main_flow"]');
if(mainFlowScopeButton){
  mainFlowScopeButton.title='固定清单：成员、模块与顺序不会随代码扫描改变';
}

const EVENT_TABLE_COLUMN_GROUP='<colgroup><col class="event-col-action"><col class="event-col-logic"><col class="event-col-contract"><col class="event-col-evidence"><col class="event-col-detail"></colgroup>';
const DEPRECATED_TABLE_COLUMN_GROUP='<colgroup><col class="deprecated-col-action"><col class="deprecated-col-logic"><col class="deprecated-col-contract"><col class="deprecated-col-evidence"></colgroup>';

function getEventTextColumnWidth(eventList){
  const minimumWidth=168;
  const characterWidth=7;
  const inlineSpace=28;
  const longestActionLength=(Array.isArray(eventList)?eventList:[]).reduce((longest,event)=>{
    const actionName=String(event?.name||'');
    return Math.max(longest,Array.from(actionName).length);
  },0);
  return Math.max(minimumWidth,longestActionLength*characterWidth+inlineSpace);
}

function syncEventTextColumnWidth(table,eventList){
  if(!table)return;
  table.style.setProperty('--event-text-column-width',`${getEventTextColumnWidth(eventList)}px`);
}

function renderAssetCoreCells(event){
  const reporting=getEventReportingLogic(event,getCatalogClassification(event));
  const actionName=event.name;
  const reportingText=reporting.text||'上报时机待确认';
  return {
    actionName,
    reportingText,
    html:`<td><span class="event-action-line"><code class="event-action-name" title="英文 action：${escapeFieldHtml(actionName)}">${escapeFieldHtml(actionName)}</code></span></td><td><span class="event-action-logic" title="${escapeFieldHtml(reportingText)}">${escapeFieldHtml(reportingText)}</span></td><td>${renderFieldContractSummary(event)}</td>`
  };
}

document.querySelector('.catalog-table-region table')?.insertAdjacentHTML('afterbegin',EVENT_TABLE_COLUMN_GROUP);
const evidenceHeader=document.querySelector('.catalog-table-region thead th:nth-child(4)');
if(evidenceHeader)evidenceHeader.innerHTML='<span class="source-column-head"><strong>采集归属</strong><small>触发端 · 通道</small></span>';

render=function renderEventRowsV3(){
  const baseList=filterCatalogEvents(getActiveAssetEvents(),{includeDirectory:false});
  const list=baseList.filter(event=>matchesCatalogSelection(getCatalogViewClassification(event)));
  const countFilters={...getCatalogFilterState(),tab:'all'};
  const countScope=getActiveAssetEvents().filter(event=>{
    const classification=getCatalogClassification(event);
    const viewClassification=getCatalogViewClassification(event);
    return matchesCatalogBaseFilters(event,classification,countFilters,viewClassification)
      &&matchesCatalogSelection(viewClassification);
  });
  updateCatalogTabCounts(countScope);
  renderCatalogDirectory(baseList,list);
  rows.innerHTML=list.map(event=>{
    const assetClassification=getCatalogClassification(event);
    const core=renderAssetCoreCells(event);
    const evidenceCopy=getTrackingSourceEvidence(event,assetClassification);
    return `<tr data-event-name="${escapeFieldHtml(event.name)}" tabindex="0" aria-label="查看 ${escapeFieldHtml(core.actionName)}，${escapeFieldHtml(core.reportingText)}详情">${core.html}<td><span class="catalog-evidence source-evidence" title="${escapeFieldHtml(evidenceCopy.title)}"><b class="source-kind is-${escapeFieldHtml(evidenceCopy.source)}">${escapeFieldHtml(evidenceCopy.label)}</b>${evidenceCopy.detail?`<small>${escapeFieldHtml(evidenceCopy.detail)}</small>`:''}</span></td><td><button class="row-action" data-open-event="${escapeFieldHtml(event.name)}" title="查看详情" aria-label="查看 ${escapeFieldHtml(core.actionName)} 详情">›</button></td></tr>`;
  }).join('')||'<tr><td class="event-table-empty" colspan="5">没有匹配的埋点</td></tr>';
  syncEventTextColumnWidth(document.querySelector('.catalog-table-region table'),list);
  document.querySelectorAll('[data-open-event]').forEach(button=>button.onclick=()=>{
    button.focus({preventScroll:true});
    openDrawerV2(events.find(event=>event.name===button.dataset.openEvent));
  });
};

function renderDeprecatedEvents(){
  const special=document.getElementById('specialView');
  const candidates=getDeprecatedCandidateEvents();
  const defined=candidates.filter(event=>Boolean(event.codeEvidence));
  const unresolved=candidates.filter(event=>!event.codeEvidence);
  const renderCandidateRows=list=>list.map(event=>{
    const reporting=getEventReportingLogic(event,getCatalogClassification(event));
    const isDefined=Boolean(event.codeEvidence);
    const label=isDefined?'仅有定义':'暂无代码证据';
    const detail=isDefined?'代码中存在 action 定义，但未发现实际调用位置':'来自人工资产，或当前静态扫描未解析到代码';
    return `<tr><td><code class="event-action-name">${escapeFieldHtml(event.name)}</code></td><td><span class="event-action-logic">${escapeFieldHtml(reporting.text||'上报逻辑待确认')}</span></td><td>${renderFieldContractSummary(event)}</td><td><div class="deprecated-evidence-cell"><div class="deprecated-static-evidence is-${isDefined?'defined':'manual'}"><strong>${label}</strong><span>${detail}</span></div><button class="row-action" type="button" data-open-deprecated-event="${escapeFieldHtml(event.name)}" aria-label="查看 ${escapeFieldHtml(event.name)} 详情">›</button></div></td></tr>`;
  }).join('')||'<tr><td colspan="5" class="event-table-empty">当前没有此类埋点</td></tr>';
  special.classList.add('show');
  special.innerHTML=`<div class="asset-view-control deprecated-control-bar"><div class="asset-view-tabs deprecated-segmented" role="tablist" aria-label="废弃埋点证据分类"><button type="button" role="tab" aria-selected="true" class="active" data-deprecated-kind="defined"><span>仅有定义</span><b>${defined.length}</b></button><button type="button" role="tab" aria-selected="false" data-deprecated-kind="unresolved"><span>暂无代码证据</span><b>${unresolved.length}</b></button></div><p class="asset-view-context"><strong id="deprecatedTabTitle">仅有定义</strong><span id="deprecatedTabDescription">代码中声明了 Action，但没有找到实际调用上报函数的位置</span></p></div><section class="deprecated-group deprecated-tab-panel"><div class="deprecated-table-wrap"><table>${DEPRECATED_TABLE_COLUMN_GROUP}<thead><tr><th>埋点 Action</th><th>上报逻辑</th><th>字段契约</th><th>静态证据</th></tr></thead><tbody id="deprecatedCandidateRows"></tbody></table></div></section>`;
  const groups={
    defined:{title:'仅有定义',description:'代码中声明了 action，但没有找到实际调用上报函数的位置',events:defined},
    unresolved:{title:'暂无代码证据',description:'人工维护的资产，或当前扫描无法从前端代码解析',events:unresolved}
  };
  const renderDeprecatedTab=kind=>{
    const group=groups[kind]||groups.defined;
    document.getElementById('deprecatedTabTitle').textContent=group.title;
    document.getElementById('deprecatedTabDescription').textContent=group.description;
    document.getElementById('deprecatedCandidateRows').innerHTML=renderCandidateRows(group.events);
    syncEventTextColumnWidth(special.querySelector('.deprecated-table-wrap table'),group.events);
    special.querySelectorAll('[data-deprecated-kind]').forEach(tab=>{
      const selected=tab.dataset.deprecatedKind===kind;
      tab.classList.toggle('active',selected);
      tab.setAttribute('aria-selected',String(selected));
    });
    special.querySelectorAll('[data-open-deprecated-event]').forEach(button=>button.onclick=()=>openDrawerV2(events.find(event=>event.name===button.dataset.openDeprecatedEvent)));
  };
  special.querySelectorAll('[data-deprecated-kind]').forEach(button=>button.addEventListener('click',()=>renderDeprecatedTab(button.dataset.deprecatedKind)));
  renderDeprecatedTab('defined');
}

document.querySelector('[data-view="deprecated"]')?.addEventListener('click',renderDeprecatedEvents);

function renderGovernanceAssessment(event){
  const assessment=event.governanceAssessment;
  if(!assessment)return '';
  const statusLabels={blocked:'需修正',needs_review:'发布前需确认',ready:'检查通过'};
  const canonicalAction=assessment.canonicalSuggestions?.action||event.name;
  const actionChanged=canonicalAction!==event.name;
  const issuePriority={error:0,warning:1};
  const namingSuggestionCodes=new Set(['action-semantic-shape','action-verb-first','action-verb-unrecognized']);
  let issues=(assessment.issues||[])
    .filter(issue=>issue.severity!=='info'||namingSuggestionCodes.has(issue.code))
    .sort((left,right)=>(issuePriority[left.severity]??9)-(issuePriority[right.severity]??9));
  const missingDescriptions=issues.filter(issue=>issue.code==='field-description-missing');
  if(missingDescriptions.length>1){
    issues=issues.filter(issue=>issue.code!=='field-description-missing');
    issues.push({severity:'warning',code:'field-description-summary',message:`${missingDescriptions.length} 个字段缺少明确业务含义，请在下方“事件独有字段”中逐项完善`});
  }
  issues=issues.slice(0,8);
  const formatIssue=issue=>{
    if(issue.code==='field-type-alias'){
      const fieldIndex=Number(String(issue.path||'').match(/fields\[(\d+)\]/)?.[1]);
      const rawType=Number.isInteger(fieldIndex)?event.fields?.[fieldIndex]?.[1]:'旧写法';
      const typeExplanation=issue.suggestion==='boolean'?'boolean 表示布尔值，只能为 true 或 false。':`${issue.suggestion} 是统一契约采用的标准类型名称。`;
      return {message:`Raw 类型“${rawType||'旧写法'}”需映射到统一类型`,detail:`建议使用 ${issue.suggestion}；${typeExplanation}这里只给出 Canonical 建议，不会自动修改线上 Raw 字段。`};
    }
    return {message:issue.message,detail:issue.suggestion?`建议：${issue.suggestion}`:''};
  };
  const issueMarkup=issues.length?`<ul class="governance-issue-list">${issues.map(issue=>{const copy=formatIssue(issue);const isSuggestion=namingSuggestionCodes.has(issue.code);return `<li class="is-${isSuggestion?'suggestion':escapeFieldHtml(issue.severity)}"><span>${issue.severity==='error'?'必须修正':isSuggestion?'建议':'需确认'}</span><p>${escapeFieldHtml(copy.message)}${copy.detail?`<small>${escapeFieldHtml(copy.detail)}</small>`:''}</p></li>`;}).join('')}</ul>`:'<p class="governance-ready-note">当前没有必须修正或待确认的问题。</p>';
  const severityGuide='<div class="governance-severity-guide" role="note"><span><b class="is-error">必须修正</b>未修正不能同步正式资产</span><span><b class="is-warning">需确认</b>可保留草稿，发布前需负责人确认</span><small>治理结果不会自动修改代码，也不会停止现网埋点上报。</small></div>';
  return `<details class="drawer-section drawer-disclosure governance-section"><summary><span>治理规范</span><small>${escapeFieldHtml(statusLabels[assessment.status]||'待检查')} · ${assessment.issueCounts?.error||0} 项必须修正 · ${assessment.issueCounts?.warning||0} 项需确认</small></summary><div class="drawer-disclosure-body"><div class="governance-contract-summary"><div><span>Raw action</span><code>${escapeFieldHtml(event.name)}</code><small>线上契约，平台不会自动改名</small></div><div><span>Canonical proposal</span><code>${escapeFieldHtml(canonicalAction)}</code><small>${actionChanged?'建议名称，需走迁移流程':'与 Raw contract 一致'}</small></div><div><span>完整度</span><strong>${assessment.completeness?.score??0}%</strong><small>${assessment.issueCounts?.error||0} 项必须修正 · ${assessment.issueCounts?.warning||0} 项需确认</small></div></div>${severityGuide}${issueMarkup}</div></details>`;
}

function renderCodeReferences(references,emptyText){
  const items=(references||[]).slice(0,5);
  if(!items.length)return `<p class="code-evidence-empty">${escapeFieldHtml(emptyText)}</p>`;
  return `<ul class="code-reference-list">${items.map(reference=>{
    const location=[reference.file,reference.line].filter(Boolean).join(':');
    const tag=reference.namespace||reference.kind||'';
    return `<li><code title="${escapeFieldHtml(location)}">${escapeFieldHtml(location)}</code>${tag?`<span>${escapeFieldHtml(tag)}</span>`:''}</li>`;
  }).join('')}</ul>`;
}

function renderWireContractValues(field){
  if(!field)return '';
  const range=getFieldValueRange(field);
  if(!range.values.length)return '';
  const semantic=getFieldSemantic(field);
  const valueMeanings=semantic?.values||semantic?.openValues||{};
  return `<div class="wire-contract-values"><span>${escapeFieldHtml(range.label||'可选值')}</span>${range.values.map(value=>{
    const rawValue=String(value);
    const displayValue=rawValue===''?'""':typeof value==='string'?value:JSON.stringify(value);
    const meaning=valueMeanings[rawValue];
    return `<div><code>${escapeFieldHtml(displayValue)}</code>${meaning?`<small>：${escapeFieldHtml(meaning)}</small>`:''}</div>`;
  }).join('')}</div>`;
}

function renderWireContractField(event,contractField,normalizedFields){
  const name=String(contractField?.nameRaw||'').trim();
  const field=normalizedFields.get(name);
  const observedType=String(contractField?.typeObserved||field?.canonicalType||'unknown');
  const required=contractField?.requiredObserved;
  const nullable=contractField?.nullableObserved;
  const currentPresence=required===true?'每次发送':required===false?(event.name==='image_upload_click'&&name.startsWith('search_')?'搜索场景附加':'按场景发送'):'是否必传待确认';
  const declaredRequired=contractField?.declaredRequiredObserved;
  const declaredPresence=declaredRequired===required||declaredRequired===undefined?'':declaredRequired===true?' · 定义口径必传':' · 定义口径可选';
  const presence=`${currentPresence}${declaredPresence}`;
  const nullability=nullable===true?'可为 null':nullable===false?'不可为 null':'可空性待确认';
  const meaning=field?getFieldReportingLogic(field):`${name} 随当前通道上报。`;
  return `<div class="wire-contract-field"><div class="wire-contract-field-meta"><code>${escapeFieldHtml(name)}</code><span>${escapeFieldHtml(observedType)}</span><span>${escapeFieldHtml(presence)}</span><span>${escapeFieldHtml(nullability)}</span></div><p>${escapeFieldHtml(meaning)}</p>${renderWireContractValues(field)}</div>`;
}

function renderWireContract(event,contract,normalizedFields){
  const fields=Array.isArray(contract?.fields)?contract.fields:[];
  const calls=Array.isArray(contract?.callSites)?contract.callSites:[];
  const contractId=String(contract?.contractId||'');
  const coPresentGroups=Array.isArray(contract?.coPresentFieldGroups)?contract.coPresentFieldGroups:[];
  const conditionMarkup=coPresentGroups.length?`<div class="wire-contract-conditions">${coPresentGroups.map(group=>`<p><code>${escapeFieldHtml((group.fields||[]).join(' / '))}</code><span>${escapeFieldHtml(group.description||'同一场景同时发送')}</span></p>`).join('')}</div>`:'';
  return `<section class="wire-contract-item"><div class="wire-contract-head"><strong>${escapeFieldHtml(getWireContractLabel(contract?.namespace))}</strong><span>${fields.length} 个字段 · ${calls.length} 个调用点</span><code title="${escapeFieldHtml(contractId)}">${escapeFieldHtml(contractId)}</code></div>${conditionMarkup}<div class="wire-contract-fields">${fields.length?fields.map(field=>renderWireContractField(event,field,normalizedFields)).join(''):'<p class="code-evidence-empty">无事件独有字段</p>'}</div></section>`;
}

function renderCodeEvidence(event){
  const evidence=event.codeEvidence;
  if(!evidence)return '';
  const repository=evidence.repository||{};
  const commit=repository.commitShort||String(repository.commit||'').slice(0,10)||'未知版本';
  const namespace=(evidence.namespaces||[]).join(' / ')||'未分类';
  const contracts=getEventWireContracts(event);
  const usageBase=evidence.callSiteCount?`${evidence.callSiteCount} 个直接调用点`:'未发现直接调用点';
  const usage=evidence.deprecated?`${usageBase} · 已标记弃用`:usageBase;
  const usageState=evidence.callSiteCount?'is-called':'is-defined-only';
  const normalizedFields=new Map(normalizeEventFields(event).map(field=>[field.rawName,field]));
  const contractMarkup=contracts.length?`<div class="wire-contract-list"><h4>${contracts.length>1?'独立 Wire Contract':'Wire Contract'}</h4><p>${contracts.length>1?'同一 Raw action 的各上报通道分别保留，必传和可空状态以本通道为准。':'当前通道的字段、必传和可空口径；存在定义与现有调用差异时会同时标明。'}</p>${contracts.map(contract=>renderWireContract(event,contract,normalizedFields)).join('')}</div>`:'';
  return `<details class="drawer-section drawer-disclosure code-evidence-section"><summary><span>前端代码来源</span><small>${escapeFieldHtml(usage)}</small></summary><div class="drawer-disclosure-body"><div class="code-revision"><div><span>仓库版本</span><strong>${escapeFieldHtml(repository.name||'fe-a1-art')} / ${escapeFieldHtml(repository.branch||'未知分支')} · <code>${escapeFieldHtml(commit)}</code></strong></div><div><span>埋点通道</span><strong>${escapeFieldHtml(namespace)}</strong></div></div>${contractMarkup}<div class="code-reference-grid"><div><h4>定义位置</h4>${renderCodeReferences(evidence.definitions,'仅发现调用，未找到集中定义')}</div><div><h4>调用位置</h4>${renderCodeReferences(evidence.callSites,'代码中已定义，暂未发现直接调用')}</div></div></div></details>`;
}

const INTERFACE_EVIDENCE_BY_ACTION=Object.freeze({
  userpath:Object.freeze({
    src:'assets/tracking-interface/userpath-app-open.png',
    title:'App 打开后的首屏',
    description:'App 首次渲染或站内 pathname 变化后自动上报 userpath，无需点击。',
    evidenceLabel:'静态代码定位'
  }),
  login_popup:Object.freeze({
    src:'assets/tracking-interface/login_popup-login-modal.png',
    title:'登录弹窗展示位置',
    description:'移动端登录弹窗内容挂载展示时自动上报 login_popup，location 记录触发入口。',
    evidenceLabel:'静态代码定位'
  }),
  login_button_click:Object.freeze({
    src:'assets/tracking-interface/login_button_click-login-methods.png',
    title:'登录方式入口点击位置',
    description:'移动端点击 Google、Facebook 或 Email 登录方式入口时上报；不包含邮箱表单最终提交按钮。',
    evidenceLabel:'静态代码定位'
  }),
  register:Object.freeze({
    src:'assets/tracking-interface/register-signup-success.png',
    title:'账号注册成功结果',
    description:'注册接口确认新用户创建成功后上报 register；Email 流程约延迟 2 秒，提交按钮本身不等于上报。',
    evidenceLabel:'静态代码定位'
  }),
  login_success:Object.freeze({
    src:'assets/tracking-interface/login_success-auth-success.png',
    title:'登录或注册成功结果',
    description:'登录或注册接口成功后上报 login_success，type 区分 login 与 sign_up。',
    evidenceLabel:'静态代码定位'
  }),
  account_delete_button_click:Object.freeze({
    src:'assets/tracking-interface/account_delete_button_click-delete-row.png',
    title:'原生 App 删除账户入口',
    description:'仅 A1 原生 App WebView 可见；点击“删除账户”整行后先打开确认弹窗，再上报 account_delete_button_click。',
    evidenceLabel:'源码还原'
  }),
  account_delete_confirm:Object.freeze({
    src:'assets/tracking-interface/account_delete_confirm-choice-modal.png',
    title:'删除账户选择确认弹窗',
    description:'点击取消上报 is_confirm=false；点击确认在删除接口请求前上报 true，不表示账号已删除成功。',
    evidenceLabel:'源码还原'
  }),
  check_in_new:Object.freeze({
    src:'assets/tracking-interface/check_in_new-popup-mount.png',
    title:'签到弹窗挂载位置',
    description:'组件首次挂载后上报连续与累计签到天数；当前正常自动签到链路已关闭，仅保留静态调用点。',
    evidenceLabel:'历史代码定位'
  }),
  check_in_v3_button_click:Object.freeze({
    src:'assets/tracking-interface/check_in_v3_button_click-actions.png',
    title:'签到弹窗按钮点击位置',
    description:'Check-in 上报 check_in，Try credits 上报 pricing；当前正常自动签到链路已关闭。',
    evidenceLabel:'历史代码定位'
  }),
  point_icon_button_click:Object.freeze({
    src:'assets/tracking-interface/point_icon_button_click-credit-entry.png',
    title:'移动端积分余额入口',
    description:'登录且没有 unlimited credits 时显示；点击顶部余额 chip 后打开每日任务或签到页并上报。',
    evidenceLabel:'源码还原'
  }),
  check_in_exposure:Object.freeze({
    src:'assets/tracking-interface/check_in_exposure-current-task.jpg',
    title:'当前每日任务签到卡片',
    description:'PC CheckInCard 或移动端 AutoCheckIn 首次挂载后自动上报；无需点击，且不同于已停用的旧自动签到弹窗。',
    evidenceLabel:'源码还原'
  }),
  app_exposure_direct:Object.freeze({
    src:'assets/tracking-interface/app_exposure_direct-template-card.jpg',
    title:'PC Filters 模板卡可视曝光',
    description:'模板卡进入可视区域并停留约 1 秒后进入 legacy 批量曝光队列；代码配置 80% 阈值，但实现实际以 isIntersecting 判定。',
    evidenceLabel:'现网页面定位'
  }),
  page_exposure:Object.freeze({
    src:'assets/tracking-interface/page_exposure-page-switch.jpg',
    title:'移动端页面栈切换示例',
    description:'页面或受监听弹窗切换时记录 before、after 与上一页 stayTime；不足 1 秒的快速切换不发送。',
    evidenceLabel:'源码还原'
  }),
  error_page_enter:Object.freeze({
    src:'assets/tracking-interface/error_page_enter-empty-view.jpg',
    title:'移动端搜索空态挂载区域',
    description:'共享 EmptyView 空态或错误态组件首次挂载后自动上报；示例 type=SearchEmpty，不是 /error 路由。',
    evidenceLabel:'源码还原'
  }),
  tabbar_click:Object.freeze({
    src:'assets/tracking-interface/tabbar_click-mobile-tabs.jpg',
    title:'移动端顶部与底部 Tab',
    description:'切换到不同 Tab 后上报 current_tab；重复点击当前 Tab 不报，顶部横滑也可触发，登录门禁可能拦截。',
    evidenceLabel:'源码还原'
  }),
  home_click_tag:Object.freeze({
    src:'assets/tracking-interface/home_click_tag-explore-category.jpg',
    title:'Discover Explore 分类标签',
    description:'点击、横滑或从分类弹层选择目标标签后上报；current_tab=explore，tag_id 与 tag_name 取目标标签。',
    evidenceLabel:'源码还原'
  }),
  tasklist_entrance_click:Object.freeze({
    src:'assets/tracking-interface/tasklist_entrance_click-task-entry.jpg',
    title:'移动端顶部任务入口',
    description:'捕获阶段先上报 state=1，随后才校验登录与任务数据；PC 收起侧栏和 Remix 结果关闭还可产生 state=-1。',
    evidenceLabel:'源码还原'
  }),
  app_visit:Object.freeze({
    src:'assets/tracking-interface/app_visit-home-card.png',
    title:'首页 App 卡片点击位置',
    description:'点击整张 App 卡片或 Run，随后进入对应 App 详情页。',
    evidenceLabel:'静态代码定位'
  }),
  app_click:Object.freeze({
    src:'assets/tracking-interface/app_click-explore-card.jpg',
    title:'Discover Explore 内容流卡片',
    description:'普通卡登录门禁通过后、打开详情前上报 is_banner=false；表示来源页点击，不等于 app_visit 或详情成功。',
    evidenceLabel:'源码还原'
  }),
  like:Object.freeze({
    src:'assets/tracking-interface/like-app-card.jpg',
    title:'移动端 App 卡片收藏按钮',
    description:'此图为 type=app 分支，收藏接口成功后上报；state=1 表示收藏，state=-1 表示取消，同 action 还覆盖 post 与 comment。',
    evidenceLabel:'源码还原'
  }),
  image_upload_click:Object.freeze({
    src:'assets/tracking-interface/image_upload_click-input-slot.jpg',
    title:'App 详情输入图上传入口',
    description:'点击输入图的上传或更换入口时立即上报；不等待文件选择、上传或审核结果。',
    evidenceLabel:'源码还原'
  }),
  generate_intention:Object.freeze({
    src:'assets/tracking-interface/generate_intention-generate-action.jpg',
    title:'生成意图触发位置',
    description:'用户触发 Generate 后记录生成意图；后续仍可能被登录、积分、并发或权益校验拦截，不表示任务已创建。',
    evidenceLabel:'源码还原'
  }),
  generate_button_click:Object.freeze({
    src:'assets/tracking-interface/generate_button_click-task-created.jpg',
    title:'生成任务提交阶段',
    description:'主生成链路通常在取得 task_id 后上报；Chatbot 存在校验前分支，因此不能统一解读为任务必然创建成功。',
    evidenceLabel:'源码还原'
  }),
  is_read:Object.freeze({
    src:'assets/tracking-interface/is_read-task-guide.jpg',
    title:'任务结果页引导气泡',
    description:'此图为 taskview_guide_bubble 场景，气泡展示约 3 秒后自动标记已读，无需点击；同 action 还承载多种一次性引导。',
    evidenceLabel:'源码还原'
  }),
  generate_success:Object.freeze({
    src:'assets/tracking-interface/generate_success-task-result.jpg',
    title:'生成任务成功结果',
    description:'任务 socket 返回成功并取得结果资源 ID 时上报；不要求用户已打开或看到结果页。',
    evidenceLabel:'源码还原'
  }),
  generate_failure:Object.freeze({
    src:'assets/tracking-interface/generate_failure-generate-error.jpg',
    title:'生成任务失败反馈',
    description:'主图展示 task_period=after_task 上报后的失败反馈，不是等提示挂载才上报；同 action 还覆盖未登录、积分不足、表单未填和接口错误等 before_task 拦截。',
    evidenceLabel:'源码还原'
  }),
  result_show:Object.freeze({
    src:'assets/tracking-interface/result_show-current-result.jpg',
    title:'移动端任务页当前结果',
    description:'currentImage 变化、带 traceId 且本地 trackRecorder 命中时自动上报；无需点击，切换结果可能再次触发，也不等待图片加载完成。',
    evidenceLabel:'源码还原'
  }),
  result_download:Object.freeze({
    src:'assets/tracking-interface/result_download-download-action.jpg',
    title:'生成结果下载入口',
    description:'点击后前端开始处理图片或视频下载并上报；不表示文件已保存成功，部分 H5 路径只显示长按保存提示。',
    evidenceLabel:'源码还原'
  }),
  image_delete_click:Object.freeze({
    src:'assets/tracking-interface/image_delete_click-delete-action.jpg',
    title:'任务结果删除操作行',
    description:'点击 Delete 后先上报，再打开确认弹窗；后续取消也已计入，同 action 还覆盖上传历史长按删除与 Profile 批量删除。',
    evidenceLabel:'源码还原'
  }),
  image_delete_success:Object.freeze({
    src:'assets/tracking-interface/image_delete_success-delete-complete.jpg',
    title:'删除请求成功反馈',
    description:'deleteImages 成功回调后自动上报，不是确认按钮点击即报；Profile Drafts 当前只有 image_delete_click，没有对应 success 上报。',
    evidenceLabel:'源码还原'
  }),
  enhancement:Object.freeze({
    src:'assets/tracking-interface/enhancement-result-enhance.jpg',
    title:'任务结果页 HD / Enhance 入口',
    description:'点击结果页 HD / Enhance 后，前端在积分、会员与并发限制校验前立即上报；只表示增强意图，不表示增强任务已创建或成功。',
    evidenceLabel:'源码还原'
  }),
  share_button_click:Object.freeze({
    src:'assets/tracking-interface/share_button_click-result-share.jpg',
    title:'任务结果页分享入口',
    description:'进入分享处理后，原生 App 请求打开分享弹窗或网页复制链接成功，且同一内容不在 24 小时冷却期时上报；不表示分享已真正发送。',
    evidenceLabel:'源码还原'
  }),
  pricing_popup:Object.freeze({
    src:'assets/tracking-interface/pricing_popup-subscription-page.jpg',
    title:'订阅套餐页与定价弹窗',
    description:'订阅页或订阅弹窗挂载时通常自动上报；PC 弹窗初始化和 API 入口会在页面打开或跳转前先报，因此不能统一解读为用户已实际看到弹窗。',
    evidenceLabel:'源码还原'
  }),
  pay_result:Object.freeze({
    src:'assets/tracking-interface/pay_result-payment-feedback.jpg',
    title:'订阅支付结果反馈',
    description:'支付回调、3DS 返回、订阅 socket 或 Google Play 校验得到结果时上报 is_success；不是支付按钮点击。Google Play 主动取消可能没有 pay_result。',
    evidenceLabel:'源码还原'
  }),
  credits_popup:Object.freeze({
    src:'assets/tracking-interface/credits_popup-credit-pack.jpg',
    title:'积分包选择弹窗',
    description:'积分包组件挂载后由 effect 上报；默认档位解析或用户切换套餐导致 currentPack.key 变化时可能再次上报，不代表点击购买或支付成功。',
    evidenceLabel:'源码还原'
  }),
  purchase_credits_button_click:Object.freeze({
    src:'assets/tracking-interface/purchase_credits_button_click-credit-pack-button.jpg',
    title:'积分包 Continue 购买按钮',
    description:'点击后经 400ms 去抖，且当前商品信息存在时，前端先上报所选积分档位和归因字段，再发起一次性支付；不表示订单创建或付款成功。',
    evidenceLabel:'源码还原'
  }),
  purchase_credits_result:Object.freeze({
    src:'assets/tracking-interface/purchase_credits_result-credit-pack-result.jpg',
    title:'一次性积分包支付结果',
    description:'成功来自 not_subscription_perform socket；无凭证或凭证校验失败时上报失败。不是购买按钮点击，取消也可能作为失败结果。',
    evidenceLabel:'源码还原'
  }),
  subscribe_cancel:Object.freeze({
    src:'assets/tracking-interface/subscribe_cancel-backend-status.jpg',
    title:'订阅取消业务结果态',
    description:'平台资产将 subscribe_cancel 归属为订阅服务后端；前端仓库未发现该 action 的定义或调用。图中状态只用于业务定位，精确触发仍需后端证据。',
    evidenceLabel:'后端资产'
  }),
  app_exposure_aggregation:Object.freeze({
    src:'assets/tracking-interface/app_exposure_aggregation-volcano-query.jpg',
    title:'App 维度曝光聚合查询示例',
    description:'由当日基础曝光数据按 app_id、location 等维度聚合形成 PV / UV 资产；这是用户提供的火山查询示例，不是前端点击事件或生产数据验证。',
    evidenceLabel:'火山聚合资产'
  }),
  user_app_exposure_statistics:Object.freeze({
    src:'assets/tracking-interface/user_app_exposure_statistics-volcano-query.jpg',
    title:'用户维度曝光聚合查询示例',
    description:'以用户维度聚合当日曝光次数和去重 App 数，可结合用户属性；这是用户提供的火山查询示例，不是前端点击或页面曝光事件。',
    evidenceLabel:'火山聚合资产'
  }),
  page_exposure_aggregation:Object.freeze({
    src:'assets/tracking-interface/page_exposure_aggregation-volcano-query.jpg',
    title:'页面曝光与停留聚合指标',
    description:'以用户维度聚合 page_all_pv、page_all_duration 及按 page_exposure.after 生成的页面字段；这是用户提供的火山指标片段，不是前端点击或单次页面曝光。',
    evidenceLabel:'火山聚合资产'
  }),
  app_crash:Object.freeze({
    src:'assets/tracking-interface/app_crash-android-crash.jpg',
    title:'Android Native 未捕获异常状态',
    description:'CrashHandler.handleException 捕获 Native 未处理异常后调用 trackAppCrash，并附带 message、stack 和设备 Build 信息；系统画面为业务还原。',
    evidenceLabel:'Android 项目清单'
  }),
  performance_metrics:Object.freeze({
    src:'assets/tracking-interface/performance_metrics-android-webview.jpg',
    title:'首个 WebView 完成加载状态',
    description:'正常在首个 WebView onPageFinished 后自动上报；若本次启动尚未成功上报，App 进入后台时强制补发，每次启动最多一次。',
    evidenceLabel:'Android 项目清单'
  }),
  'leave-android-app':Object.freeze({
    src:'assets/tracking-interface/leave-android-app-background.jpg',
    title:'Android App 进入后台状态',
    description:'首个 Activity 进入前台时记录开始时间，最后一个 Activity 停止时自动上报 active_time，单位为秒；无需点击。',
    evidenceLabel:'Android 项目清单'
  }),
  network_status:Object.freeze({
    src:'assets/tracking-interface/network_status-android-speed-test.jpg',
    title:'Android 网速测试状态',
    description:'只有网速测试成功后才上报速度、字节数和网络类型；当前 SPEED_TEST_ENABLED=false，默认不会触发。',
    evidenceLabel:'Android 项目清单'
  }),
  google_play_query_failure:Object.freeze({
    src:'assets/tracking-interface/google_play_query_failure-product-query.jpg',
    title:'Google Play 订阅商品查询失败',
    description:'BillingManager.querySubscriptionDetails 查询 Google Play 订阅商品详情失败后上报 error_message；这是查询失败结果，不是进入订阅页或点击购买时上报。',
    evidenceLabel:'Android 项目清单'
  }),
  google_play_subscription_failure:Object.freeze({
    src:'assets/tracking-interface/google_play_subscription_failure-purchase-launch.jpg',
    title:'Google Play 订阅购买启动失败',
    description:'Billing 连接失败、购买入口缺少 offer 或启动 Billing Flow 失败时上报；表示购买流程未能启动或继续，不是支付结果或用户取消。',
    evidenceLabel:'Android 项目清单'
  }),
  google_play_subscription_upgrade_failure:Object.freeze({
    src:'assets/tracking-interface/google_play_subscription_upgrade_failure-plan-change.jpg',
    title:'Google Play 订阅升降级失败',
    description:'升降级流程查询目标商品、读取商品详情或 offer、查询当前有效订阅失败时上报；这是切换套餐准备链路失败，不代表付款结果。',
    evidenceLabel:'Android 项目清单'
  }),
  push_permission_popup_action:Object.freeze({
    src:'assets/tracking-interface/push_permission_popup_action-notification-permission.jpg',
    title:'Android 通知权限系统弹窗',
    description:'Android 13+ 系统通知权限请求返回结果时自动上报；allow 与 deny 对应允许和拒绝，close 仅为结果数组为空的兜底分支。',
    evidenceLabel:'Android 项目清单'
  }),
  registration_pop_up:Object.freeze({
    src:'assets/tracking-interface/registration_pop_up-auth-result.jpg',
    title:'登录 / 注册弹窗关闭与成功结果',
    description:'该事件不是弹窗曝光：移动端未完成账号操作即卸载时上报 close，表单成功回调上报 register 或 login；PC Legacy 关闭也上报 close。',
    evidenceLabel:'源码还原'
  }),
  remix_click:Object.freeze({
    src:'assets/tracking-interface/remix_click-remix-entry.jpg',
    title:'App 详情与卡片 Remix 入口',
    description:'登录门禁通过且 App 资源 ID 存在时，点击 Remix 后立即上报，再调用 forkApp；不表示副本已创建成功。',
    evidenceLabel:'源码还原'
  }),
  remix_begin_click:Object.freeze({
    src:'assets/tracking-interface/remix_begin_click-confirm-start.jpg',
    title:'Remix 确认弹层 Begin Remix 按钮',
    description:'forkApp 成功并打开确认弹层后，点击 Begin Remix 时先上报，再进入编辑页；不表示编辑页已加载完成。',
    evidenceLabel:'源码还原'
  }),
  image_change_click:Object.freeze({
    src:'assets/tracking-interface/image_change_click-remix-input-change.jpg',
    title:'Remix 输入图与 Change 入口',
    description:'点击参考图、预设合照、合照图片或 Change 按钮时立即上报并打开编辑弹窗；type 区分 reference、presetphoto 与 groupphoto。',
    evidenceLabel:'源码还原'
  }),
  add_whatsapp_button_click:Object.freeze({
    src:'assets/tracking-interface/add_whatsapp_button_click-result-whatsapp.jpg',
    title:'方形表情包结果页 Add to WhatsApp',
    description:'仅 A1 原生 App 内且结果图严格为 1:1 时显示；点击后先上报，再压缩图片并调用 Android bridge，不表示已添加成功。',
    evidenceLabel:'源码还原'
  }),
  add_whatsapp_result:Object.freeze({
    src:'assets/tracking-interface/add_whatsapp_result-native-callback.jpg',
    title:'Add to WhatsApp Native 回调结果',
    description:'Android Native 调用 trackWhatsAppEmojiResult(successFlag) 后上报 is_success；没有 Native 回调就不会上报，图中结果反馈为源码还原。',
    evidenceLabel:'源码还原'
  }),
  app_lock_reason:Object.freeze({
    src:'assets/tracking-interface/app_lock_reason-generation-threshold.jpg',
    title:'App 生成与下载次数达到锁定规则',
    description:'本地生成或下载计数更新后自动判定并上报锁定原因；部分生成链路在 finally 中递增，不是点击锁图标，也不表示服务端已完成锁定。',
    evidenceLabel:'源码还原'
  }),
  app_publish_success:Object.freeze({
    src:'assets/tracking-interface/app_publish_success-publish-complete.jpg',
    title:'App 发布接口返回成功',
    description:'Remix 移动端、PC Node 与 PC Form 发布接口返回 code=0 后上报；移动端上报时后续详情刷新尚未完成，不表示成功界面已稳定展示。',
    evidenceLabel:'源码还原'
  }),
  award_announcement_click:Object.freeze({
    src:'assets/tracking-interface/award_announcement_click-result-entry.jpg',
    title:'获奖公告结果入口',
    description:'公布后点击 View the result 上报字符串 type="true" 再打开飞书；未到公布时间的锁定分支上报字符串 wrong，不表示外链打开成功。',
    evidenceLabel:'源码还原'
  }),
  back_click:Object.freeze({
    src:'assets/tracking-interface/back_click-remix-close.jpg',
    title:'Remix 顶部关闭入口',
    description:'点击 Remix 顶部 X 时先上报，随后才打开离开确认弹窗；此时用户尚可取消，不表示已离开页面。',
    evidenceLabel:'源码还原'
  }),
  back_pop_cancel_click:Object.freeze({
    src:'assets/tracking-interface/back_pop_cancel_click-stay-remix.jpg',
    title:'Remix 离开确认弹窗取消按钮',
    description:'离开确认弹窗点击左侧 Cancel 时上报并留在 Remix；右侧“仍然离开”属于 back_pop_stillleave_click。',
    evidenceLabel:'源码还原'
  }),
  back_pop_stillleave_click:Object.freeze({
    src:'assets/tracking-interface/back_pop_stillleave_click-leave-confirm.jpg',
    title:'Remix 离开确认弹窗仍然离开按钮',
    description:'点击右侧“仍然离开”后发起未等待结果的草稿删除，随即上报当前 is_generating 并返回；不表示草稿删除成功。',
    evidenceLabel:'源码还原'
  }),
  backtotry_click:Object.freeze({
    src:'assets/tracking-interface/backtotry_click-result-back.jpg',
    title:'Remix 结果页 Back to try 入口',
    description:'成功或失败结果页点击 Back to try 时先上报，随后才关闭结果弹层并返回编辑态；不表示界面切换已完成。',
    evidenceLabel:'源码还原'
  }),
  banner_click:Object.freeze({
    src:'assets/tracking-interface/banner_click-legacy-banner.jpg',
    title:'Explore 旧版 Banner 卡片',
    description:'登录门禁通过且配置了 URL 后，点击整卡或 CTA 时先上报，再执行内部动作或跳转；Studio 入口还受 H5Import 拦截，不表示跳转成功。',
    evidenceLabel:'源码还原'
  }),
  banner_new_click:Object.freeze({
    src:'assets/tracking-interface/banner_new_click-hero-banner.jpg',
    title:'Explore 新版 Hero Banner',
    description:'新版 Hero Banner 整张卡片和 Generate CTA 共用回调，都会先上报再检查作品短 ID；缺少可用 shortId 时仍可能上报，但不会打开详情。',
    evidenceLabel:'源码还原'
  }),
  banner_new_exposure:Object.freeze({
    src:'assets/tracking-interface/banner_new_exposure-hero-visible.jpg',
    title:'Explore 新版 Hero Banner 进入视口',
    description:'仅实验组 Test 且 Banner 列表非空时渲染；进入视口并持续约 1 秒后上报，同一组件挂载最多一次。调用处配置 threshold=0.5，但 Hook 未显式比较可见比例。',
    evidenceLabel:'源码还原'
  }),
  bind_failure:Object.freeze({
    src:'assets/tracking-interface/bind_failure-account-bind-toast.jpg',
    title:'登录流程账号绑定冲突',
    description:'邮箱、Google 或 Facebook 登录接口返回 BindFailed 后，先显示绑定失败 Toast，再上报固定 failure_reason=is_old_account；不是所有登录失败都会上报。',
    evidenceLabel:'源码还原'
  }),
  ceator_activity_banner_click:Object.freeze({
    src:'assets/tracking-interface/ceator_activity_banner_click-creator-banner.jpg',
    title:'创作者活动 Banner 源码组件',
    description:'组件逻辑为 Remix 开启、国家为印度或印尼且活动未结束时显示，点击整张 Banner 先上报再打开活动弹层；固定提交中未发现该组件的挂载引用，可达性待确认。',
    evidenceLabel:'源码组件还原'
  }),
  chatbot_image_to_video_click:Object.freeze({
    src:'assets/tracking-interface/chatbot_image_to_video_click-chat-image-button.jpg',
    title:'Chatbot 图片转视频入口',
    description:'点击对话图片下方或图片结果弹层的图片转视频按钮时立即上报，随后才校验积分并调用生成接口；积分不足或生成失败也已计入点击。',
    evidenceLabel:'源码还原'
  }),
  choose_filter_show:Object.freeze({
    src:'assets/tracking-interface/choose_filter_show-filter-popup.jpg',
    title:'创作者活动选择滤镜弹窗',
    description:'弹窗组件首次效果执行时根据当前 filteredList 上报 have_filter 或 no_filter，且每次挂载只报一次；实现未等待列表初始化，初始空数组可能先报 no_filter。',
    evidenceLabel:'源码还原'
  }),
  close_a1:Object.freeze({
    src:'assets/tracking-interface/close_a1-page-hidden-hybrid-preview.jpg',
    fullSrc:'assets/tracking-interface/close_a1-page-hidden-hybrid.png',
    title:'A1 页面隐藏状态与插件证据',
    description:'真实登录态页面的 Request Checker 已观察到 close_a1；document.visibilityState 变为 hidden 时自动上报，beforeunload 分支只发送停留事件。',
    evidenceLabel:'混合证据 · 已实测'
  }),
  cold_start_click:Object.freeze({
    src:'assets/tracking-interface/cold_start_click-recommend-popup.jpg',
    title:'冷启动推荐创作弹窗点击入口',
    description:'点击任意推荐卡片或“领取奖励”时，先上报 cold_start_click 和 app_click，再进入登录、订阅与详情链路。app_source 实际固定为 onboarding_old，本事件没有 app_id。',
    evidenceLabel:'源码还原'
  }),
  cold_start_popup:Object.freeze({
    src:'assets/tracking-interface/cold_start_popup-recommend-mount.jpg',
    title:'冷启动推荐创作弹窗挂载',
    description:'满足 Explore、实验分组、免费非 VIP 用户与至少 3 条推荐等门禁后，弹窗组件首次挂载即自动上报；无可见比例或停留时长校验，不是操作系统层的 App 冷启动时刻。',
    evidenceLabel:'源码还原'
  }),
  comment_action:Object.freeze({
    src:'assets/tracking-interface/comment_action-comment-sheet.jpg',
    title:'评论长按操作菜单',
    description:'长按评论并通过登录门禁后，复制、删除和举报分别上报 copy、delete、report。回复与白名单“复制ID”不报；删除在二次确认前记录，举报不表示已提交。',
    evidenceLabel:'源码还原'
  }),
  create_same_button_click:Object.freeze({
    src:'assets/tracking-interface/create_same_button_click-pc-detail.jpg',
    title:'PC App 详情页一键同款入口',
    description:'顶部作品区和他人发布卡片的一键同款都会先上报，再解析参数并填充表单，不表示生成开始。他人发布入口实际传值为源码拼写 "other\'s pubilshd"，与类型声明不同。',
    evidenceLabel:'源码还原'
  }),
  create_translate_click:Object.freeze({
    src:'assets/tracking-interface/create_translate_click-translate-entry.jpg',
    title:'Remix 提示词翻译入口',
    description:'PC 与移动端的文本描述、视频提示词入口分别记录 image_prompt 与 video_prompt；点击后先上报再请求翻译，接口失败也已记录，不表示翻译成功。',
    evidenceLabel:'源码还原'
  }),
  creator_announcement_click:Object.freeze({
    src:'assets/tracking-interface/creator_announcement_click-unmounted-entry.jpg',
    title:'创作者公告 Banner 源码组件',
    description:'组件逻辑为 Remix 开启且非开发模式时显示，点击整卡后先打开公告、标记已读，再上报 click_behaviour=2；固定提交中该组件没有任何导入或挂载，当前可达性未证实。',
    evidenceLabel:'源码组件还原'
  }),
  creator_announcement_close:Object.freeze({
    src:'assets/tracking-interface/creator_announcement_close-notice-unmount.jpg',
    title:'创作者公告页卸载',
    description:'CreatorNotice 页面或全屏弹层任何原因卸载时由 useUnmount 自动上报；不只是点击顶部返回，也没有停留时长门槛。',
    evidenceLabel:'源码还原'
  }),
  creator_center_click:Object.freeze({
    src:'assets/tracking-interface/creator_center_click-profile-tab.jpg',
    title:'Profile Tab 与 Creator Center Banner 入口',
    description:'当前可达入口是 Remix 开启时点击底部 Profile Tab，上报 click_behaviour=1，但本身不打开 Creator Center。Banner 组件会上报 2 并打开中心，但其挂载点均已注释。',
    evidenceLabel:'源码还原'
  }),
  creator_center_close:Object.freeze({
    src:'assets/tracking-interface/creator_center_close-center-unmount.jpg',
    title:'Creator Center 页面卸载',
    description:'CreatorCenter 全屏页或弹层任何原因卸载时由 useUnmount 自动上报；不能等同为某个关闭按钮的点击。',
    evidenceLabel:'源码还原'
  }),
  creator_center_datadescription_click:Object.freeze({
    src:'assets/tracking-interface/creator_center_datadescription_click-data-explain.jpg',
    title:'Creator Center 数据说明入口',
    description:'只有 publishedFilterTotal 为真值时显示数据说明文字；点击后先调用 openStack 打开 DataExplainPopup，再上报该事件。',
    evidenceLabel:'源码还原'
  }),
  creator_center_descriptionguide_click:Object.freeze({
    src:'assets/tracking-interface/creator_center_descriptionguide_click-description-guide.jpg',
    title:'Creator Center Descriptor Guide 入口',
    description:'点击 Creator Center 教程区的 Descriptor Guide 卡片时，先根据本地语言打开中文或英文飞书文档，再上报；不表示外部文档已成功打开或阅读。',
    evidenceLabel:'源码还原'
  }),
  creator_center_newfollower_click:Object.freeze({
    src:'assets/tracking-interface/creator_center_newfollower_click-stat-card.jpg',
    title:'Creator Center New Followers 数据卡',
    description:'点击 New Followers 卡片后先将图表指标切换为 newFansCnt，再上报；用户数据仍在加载时卡片也可出现且显示 0。',
    evidenceLabel:'源码还原'
  }),
  creator_center_newlikes_click:Object.freeze({
    src:'assets/tracking-interface/creator_center_newlikes_click-stat-card.jpg',
    title:'Creator Center New Likes 数据卡',
    description:'点击 New Likes 卡片后先将图表指标切换为 newLikedCnt，再上报；该事件只表示指标卡选择，不是获得新点赞时自动上报。',
    evidenceLabel:'源码还原'
  }),
  creator_center_newruns_click:Object.freeze({
    src:'assets/tracking-interface/creator_center_newruns_click-stat-card.jpg',
    title:'Creator Center New Runs 数据卡',
    description:'点击 New Runs 卡片后先将图表指标切换为 newRunCnt，再上报；该卡默认已选中，用户再次点击仍会上报。',
    evidenceLabel:'源码还原'
  }),
  creator_center_notes_click:Object.freeze({
    src:'assets/tracking-interface/creator_center_notes_click-notes-guide.jpg',
    title:"Creator Center Creator's Notes 入口",
    description:"点击 Creator Center 教程区的 Creator's Notes 卡片时，先根据本地语言打开对应飞书文档，再上报；不表示外链已加载或用户已阅读。",
    evidenceLabel:'源码还原'
  }),
  creator_center_publishfirstfilter_click:Object.freeze({
    src:'assets/tracking-interface/creator_center_publishfirstfilter_click-publish-first.jpg',
    title:'Creator Center 首次发布 Filter 引导',
    description:'CreatorInspire 仅在 publishedFilterTotal===0 时显示该入口，点击后先滚动到发布区域再上报；固定提交中组件导入与渲染均被注释，当前正常入口不可达。',
    evidenceLabel:'历史代码定位'
  }),
  creator_center_remixguide_click:Object.freeze({
    src:'assets/tracking-interface/creator_center_remixguide_click-remix-guide.jpg',
    title:'Creator Center Remix 教程入口',
    description:'点击 Creator Center 教程区的 Filter / Remix Guide 卡片时，先按当前语言打开飞书文档，再上报；不表示外链已成功打开或阅读。',
    evidenceLabel:'源码还原'
  }),
  creator_guide_click:Object.freeze({
    src:'assets/tracking-interface/creator_guide_click-pc-build-guide.jpg',
    title:'PC Build 页 Creator Guide 入口',
    description:'仅 Build 场景的表单标题区显示 Creator Guide；点击后先打开创作指南文档，再上报，不表示外部页面加载成功。',
    evidenceLabel:'源码还原'
  }),
  creator_onboarding_popup_notnowclick:Object.freeze({
    src:'assets/tracking-interface/creator_onboarding_popup_notnowclick-entry-popup.jpg',
    title:'Creator Onboarding 弹窗 Not now',
    description:'点击 Not now 后先关闭弹窗，再上报并显示提示、刷新创作者行为数据；Discover 自动打开该弹窗的代码已注释，正常产品可达性未证实。',
    evidenceLabel:'源码组件还原'
  }),
  creator_onboarding_popup_viewclick:Object.freeze({
    src:'assets/tracking-interface/creator_onboarding_popup_viewclick-entry-popup.jpg',
    title:'Creator Onboarding 弹窗 View',
    description:'点击 View 后先关闭弹窗并尝试打开 Creator Center，再上报和刷新行为数据；Discover 自动打开该弹窗的代码已注释，正常产品可达性未证实。',
    evidenceLabel:'源码组件还原'
  }),
  creator_support_button_click:Object.freeze({
    src:'assets/tracking-interface/creator_support_button_click-support-popup.jpg',
    title:'Creator Support 弹窗底部入口',
    description:'点击底部支持按钮后先发起关闭弹窗，再上报并打开外部反馈链接；固定提交中除测试工具外未发现该弹窗的打开入口，正常产品可达性未证实。',
    evidenceLabel:'源码组件还原'
  }),
  cut_page_finish:Object.freeze({
    src:'assets/tracking-interface/cut_page_finish-crop-success.jpg',
    title:'图片裁剪上传成功结果',
    description:'裁剪页点勾后先导出图片并调用复合生成接口；仅复合生成请求返回 code=0、发起关闭弹层后才上报，导出异常或非 0 结果均不记录。固定提交中除 TestTool 外未发现正式打开 CropPopup 的入口。',
    evidenceLabel:'源码组件还原'
  }),
  cutout_function_click:Object.freeze({
    src:'assets/tracking-interface/cutout_function_click-task-cutout.jpg',
    title:'任务结果页 Cutout 入口',
    description:'图片 ID 存在时进入 Cutout 处理即上报，再执行积分、并发与首次引导校验；购买或并发处理后的自动重试可能再次上报，抠图结果的 Recreate 也可进入该链路。',
    evidenceLabel:'源码还原'
  }),
  describe_edit_click:Object.freeze({
    src:'assets/tracking-interface/describe_edit_click-remix-description.jpg',
    title:'Remix 描述词编辑入口',
    description:'点击描述文本区域或 Edit 按钮时上报，随后初始化变更状态并打开描述编辑弹层；不表示用户已修改或提交描述。',
    evidenceLabel:'源码还原'
  }),
  describe_pop_change_close:Object.freeze({
    src:'assets/tracking-interface/describe_pop_change_close-edited-close.jpg',
    title:'已修改描述弹层关闭',
    description:'本次打开期间描述只要曾发生变化，关闭时就会上报，即使后来恢复原文；随后还会上报 describe_pop_close，Finish 路径此前另报 describe_pop_finish。',
    evidenceLabel:'源码还原'
  }),
  describe_pop_close:Object.freeze({
    src:'assets/tracking-interface/describe_pop_close-description-exit.jpg',
    title:'描述编辑弹层统一关闭回调',
    description:'描述编辑弹层关闭后统一上报，前面会按是否改动先记录 describe_pop_direct_close 或 describe_pop_change_close；顶部关闭与 Finish 都会触发。',
    evidenceLabel:'源码还原'
  }),
  describe_pop_direct_close:Object.freeze({
    src:'assets/tracking-interface/describe_pop_direct_close-unchanged-close.jpg',
    title:'未修改描述直接关闭',
    description:'打开描述编辑弹层后未产生改动便关闭时上报，随后还会上报 describe_pop_close；不是仅限顶部 X，任何正常关闭回调都可能进入。',
    evidenceLabel:'源码还原'
  }),
  describe_pop_finish:Object.freeze({
    src:'assets/tracking-interface/describe_pop_finish-finish-button.jpg',
    title:'描述编辑弹层 Finish 按钮',
    description:'内容已变化、Finish 可用时，点击按钮先上报再关闭弹层；关闭回调随后还会记录 describe_pop_change_close 与 describe_pop_close。',
    evidenceLabel:'源码还原'
  }),
  device_id_failed:Object.freeze({
    src:'assets/tracking-interface/device_id_failed-android-device-id.jpg',
    title:'A1 App Device ID 获取失败',
    description:'A1 App WebView 初始化时，Native 失败回调或等待 10 秒仍未取得 Device ID，会先把游客状态设为 DeviceIdError，再自动上报 error_message；无需点击且没有去重保护。',
    evidenceLabel:'源码还原'
  }),
  edit_page_visit:Object.freeze({
    src:'assets/tracking-interface/edit_page_visit-video-recreate.jpg',
    title:'简单视频结果 Recreate 入口',
    description:'SIMPLE_GENERATE_VIDEO 结果通过并发、会员与积分门禁后，先调用 ReVideo 打开逻辑，再立即上报；不等待编辑页加载完成或弹层展示，参数解析失败或弹窗排队时也可能记录。',
    evidenceLabel:'源码还原'
  }),
  edit_profile_click:Object.freeze({
    src:'assets/tracking-interface/edit_profile_click-profile-header.jpg',
    title:'个人主页资料编辑入口',
    description:'在自己的 Profile 点击姓名与简介区域上报 loc=profile，点击 Edit 按钮上报 loc=button，随后打开资料编辑弹层；其他用户主页不报，但访客样式 URL 指向当前用户时按钮仍可上报。',
    evidenceLabel:'源码还原'
  }),
  enhancement_success:Object.freeze({
    src:'assets/tracking-interface/enhancement_success-socket-result.jpg',
    title:'图片精绘任务成功结果',
    description:'任务 Socket 返回 OPTIMIZE 成功（state=FINISH 且 type=OPTIMIZE）后直接读取 images[0] 并自动上报 current_tab 与 app_id；代码假定首张结果存在，无需点击或打开精绘结果。',
    evidenceLabel:'源码还原'
  }),
  enter_comment:Object.freeze({
    src:'assets/tracking-interface/enter_comment-editor-mount.jpg',
    title:'评论输入编辑器挂载',
    description:'评论 MainEditor 首次挂载时立即上报来源、对象与评论上下文；无需输入文字或发送评论，回复与直接评论共用该事件。',
    evidenceLabel:'源码还原'
  }),
  error_page_button_click:Object.freeze({
    src:'assets/tracking-interface/error_page_button_click-empty-action.jpg',
    title:'通用空态或错误态操作按钮',
    description:'共享 EmptyView 配置了按钮且未被订阅状态隐藏时，点击后先上报 type 与可选 code，再执行返回、评论、升级或调用方 action；不表示后续操作成功。',
    evidenceLabel:'源码还原'
  }),
  faceswap_sortmode_switch:Object.freeze({
    src:'assets/tracking-interface/faceswap_sortmode_switch-filter-confirm.jpg',
    title:'FaceSwap 分类与排序弹层 Confirm',
    description:'点击 Confirm 时始终上报当前 sort_mode、tag_id 和 tag_name；即使分类与排序没有变化也会记录，只有发生变化时才会先刷新列表条件。',
    evidenceLabel:'源码还原'
  }),
  faceswap_tag_click:Object.freeze({
    src:'assets/tracking-interface/faceswap_tag_click-label-tabs.jpg',
    title:'FaceSwap 顶部分类标签',
    description:'点击不同于当前项的顶部分类标签时先上报，再更新标签、请求列表并滚回顶部；URL 参数初始化与重复点击当前标签不报。',
    evidenceLabel:'源码还原'
  }),
  feed_guide_click:Object.freeze({
    src:'assets/tracking-interface/feed_guide_click-hand-card.jpg',
    title:'Explore 卡片手势引导点击',
    description:'仅手势引导正覆盖目标卡片时，点击整卡或 Create 入口才上报 type=hand；点击收藏或作者区只会取消引导，不会上报该事件。',
    evidenceLabel:'源码还原'
  }),
  feed_guide_exposure:Object.freeze({
    src:'assets/tracking-interface/feed_guide_exposure-hand-visible.jpg',
    title:'Explore 卡片手势引导展示',
    description:'登录用户向下滚动到新一屏、卡片曝光均就绪且停稳约 1.5 秒后自动上报；需满足未交互、重复率不高于 50% 等条件，模块级状态在整个 JS runtime 最多展示 3 次。',
    evidenceLabel:'源码还原'
  }),
  feed_user_scroll:Object.freeze({
    src:'assets/tracking-interface/feed_user_scroll-explore-grid.jpg',
    title:'Explore 内容流首次滚动',
    description:'Explore 容器首次产生 scroll 事件时自动上报；模块级标记在整次页面运行或 App 冷启动期间最多记录一次，程序触发的滚动也可能进入，不严格等同手指滚动。',
    evidenceLabel:'源码还原'
  }),
  feedback_popup_button_click:Object.freeze({
    src:'assets/tracking-interface/feedback_popup_button_click-whatsapp-popup.jpg',
    title:'WhatsApp Feedback 弹窗操作',
    description:'点击 Confirm 尝试打开 WhatsApp、关闭弹窗后上报 is_add=true；点击 Cancel 或遮罩关闭上报 false，不表示反馈消息已发送。正式 Profile Feedback 入口已改为外部问卷，当前弹窗主要可由 debug TestTool 打开。',
    evidenceLabel:'源码组件还原'
  }),
  filter_delete_cancel:Object.freeze({
    src:'assets/tracking-interface/filter_delete_cancel-delete-confirm.jpg',
    title:'Filter 删除确认弹窗 Cancel',
    description:'移动端点击 Cancel 先关闭删除确认弹窗再上报 source=mobile；PC 本人未发布 App 卡的确认框先上报 source=web 再关闭，均不会发起删除请求。',
    evidenceLabel:'源码还原'
  }),
  filter_delete_click:Object.freeze({
    src:'assets/tracking-interface/filter_delete_click-more-menu.jpg',
    title:'个人 Filter 的 Delete 入口',
    description:'移动端从详情 More 或分享菜单点击 Delete 时先排队打开确认框再上报，分享入口有 3 秒节流；PC 本人未发布 App 卡先上报 source=web，再调用登录弹窗函数并继续确认链路，不表示已确认或删除。',
    evidenceLabel:'源码还原'
  }),
  filter_delete_confirm:Object.freeze({
    src:'assets/tracking-interface/filter_delete_confirm-delete-request.jpg',
    title:'Filter 删除请求完成阶段',
    description:'点击 Delete 后先关闭确认框并发起删除请求，在成功、非零响应或异常处理结束后的 finally 中上报；该事件只表示确认请求链路已结束，不等于 Filter 删除成功。',
    evidenceLabel:'源码还原'
  }),
  filter_more_click:Object.freeze({
    src:'assets/tracking-interface/filter_more_click-app-header.jpg',
    title:'移动 H5 App 详情 More 入口',
    description:'仅非 A1 原生 App 且详情加载完成时显示；点击顶部 More 先打开操作弹层，再上报 short_id 与 app_id。',
    evidenceLabel:'源码还原'
  }),
  filter_permission_entry_click:Object.freeze({
    src:'assets/tracking-interface/filter_permission_entry_click-permission-row.jpg',
    title:'Filter 可见权限设置入口',
    description:'点击 Remix 发布页的可见范围行，或 A1 本人 Filter 分享弹窗的 Permissions 行时，先上报 public / private 状态，再打开权限选择弹层；不表示权限已改变。',
    evidenceLabel:'源码还原'
  }),
  filter_permission_popup_view:Object.freeze({
    src:'assets/tracking-interface/filter_permission_popup_view-permission-sheet.jpg',
    title:'Filter 权限选择弹层挂载',
    description:'权限选择组件每次挂载后通过 exposure 通道自动上报，无需点击或停留；action 通道虽有同名定义，但固定提交未发现对应调用。',
    evidenceLabel:'源码还原'
  }),
  filter_permission_update:Object.freeze({
    src:'assets/tracking-interface/filter_permission_update-permission-option.jpg',
    title:'Filter 权限选项点击',
    description:'STANDARD、PLUS、PREMIUM、WHITELIST 用户选择公开或私密时先上报再回调，即使重复选择当前项也记录；其他用户选私密仅在订阅成功回调后上报。分享场景的可见性接口发生在事件之后且未被等待。',
    evidenceLabel:'源码还原'
  }),
  follow_user_click:Object.freeze({
    src:'assets/tracking-interface/follow_user_click-follow-result.jpg',
    title:'关注关系变更为 Following / Friends',
    description:'登录后关注请求返回 code=0、关系变为 Following 或 Friends 时，由 follow-change 监听器自动上报；不是按钮按下即报，取消关注走 unfollow_user_confirm_click。实际 location 还可能为类型声明外的 post_detail。',
    evidenceLabel:'源码还原'
  }),
  function_click:Object.freeze({
    src:'assets/tracking-interface/function_click-studio-tools.jpg',
    title:'Studio 原子能力入口',
    description:'点击 Studio 工具图标后先经过 H5Import；未被拦截才上报 ability_name，再打开对应能力或介绍层。当前可达值为 ENHANCE_RESOLUTION、GENERATE_VIDEO、SEGMENT、EMOJI、ID_PHOTO、DRESS_UP。',
    evidenceLabel:'源码还原'
  }),
  gallery_more_click:Object.freeze({
    src:'assets/tracking-interface/gallery_more_click-studio-gallery.jpg',
    title:'Studio Gallery 查看更多入口',
    description:'点击集合标题，或在资源多于 5 个时横滑到末端后继续过拉超过阈值并松手，先打开 App / Video Gallery 再上报；gallery_type 区分 app、video 与 generatevideo。',
    evidenceLabel:'源码还原'
  }),
  generate_minimize_click:Object.freeze({
    src:'assets/tracking-interface/generate_minimize_click-view-later.jpg',
    title:'生成中 View later / 最小化入口',
    description:'任务、AI Background、Emoji 与编辑器生成页点击 View later 或关闭后，先收起对应弹层再上报；只表示离开等待界面，不会取消生成任务。',
    evidenceLabel:'源码还原'
  }),
  generate_picture_expose:Object.freeze({
    src:'assets/tracking-interface/generate_picture_expose-chat-thumbnail.jpg',
    title:'Chatbot 图片缩略消息曝光',
    description:'Chatbot 中 Thumbnail 消息达到约 30% 可见并满足约 400ms 曝光判定后批量触发，无需点击；新建会话额外携带 First10sChat scenario。',
    evidenceLabel:'源码还原'
  }),
  generate_pop_close:Object.freeze({
    src:'assets/tracking-interface/generate_pop_close-remix-form.jpg',
    title:'Remix Try 表单弹层关闭',
    description:'已修改且描述非空时打开 RemixFormPopup；该弹层任何正常关闭回调都会先将主编辑区向下滚动，再上报，不只代表点击顶部 X。',
    evidenceLabel:'源码还原'
  }),
  generate_video_result_check:Object.freeze({
    src:'assets/tracking-interface/generate_video_result_check-complete-toast.jpg',
    title:'视频完成通知 View 按钮',
    description:'点击完成通知的操作按钮后设置当前任务、必要时延迟打开任务页并关闭通知，再上报 task_id；不等待任务页实际展示。',
    evidenceLabel:'源码还原'
  }),
  generate_video_result_show:Object.freeze({
    src:'assets/tracking-interface/generate_video_result_show-complete-toast.jpg',
    title:'视频完成通知数据到达',
    description:'notifyTask 的 appId 或 images 变化且可解析 App ID 时 effect 就会上报；该 effect 位于通知可见性判断之前，即使通知被隐藏也可能记录，图片引用变化还可能再次触发。',
    evidenceLabel:'源码还原'
  }),
  google_login_error:Object.freeze({
    src:'assets/tracking-interface/google_login_error-android-callback.jpg',
    title:'Android WebView Google 登录失败回调',
    description:'仅 UA 为 a1.art.app 的 Android WebView 走原生登录并调用 handleAPPGoogleSignInError(error) 时，先显示固定错误提示，再上报原始 error_message；代码先触发 Native 登录再注册回调，普通网页失败不走该事件。',
    evidenceLabel:'源码还原'
  }),
  group_photo_mask_click:Object.freeze({
    src:'assets/tracking-interface/group_photo_mask_click-face-selector.jpg',
    title:'合照人物遮罩选择',
    description:'点击未锁定人物且 nodeId 命中 nodes 后，先更新选中位置与 activeFaceId、执行 onSelect，再上报 location 与从 0 开始的 masksort；首次自动选择、锁定人物和无匹配 node 不报，重复点击当前人物仍会报。',
    evidenceLabel:'源码还原'
  }),
  history_click:Object.freeze({
    src:'assets/tracking-interface/history_click-task-queue.jpg',
    title:'任务历史结果切换',
    description:'点击右侧竖向队列中的非当前结果时先上报 method=click，再震动并更新 currentTaskId；当前实际调用未传 inResult，因此 origin 为 tasklist。主结果区仅在用户手动滑动完成且 fromSelf 为真时上报 swipe，重复点击与程序滚动不报。',
    evidenceLabel:'源码还原'
  }),
  image_delete_enter:Object.freeze({
    src:'assets/tracking-interface/image_delete_enter-long-press.jpg',
    title:'图片列表长按进入批量删除',
    description:'Profile 草稿或生成表单历史图按住默认 1 秒，且期间指针移动不超过 5px，定时器完成后开启删除态并上报；提前松手或滚动不报，进入删除态时仍为 0 selected，长按目标不会自动选中。',
    evidenceLabel:'源码还原'
  }),
  image_download:Object.freeze({
    src:'assets/tracking-interface/image_download-legacy-download.jpg',
    title:'PC History 旧版图片下载入口',
    description:'当前实际调用来自 legacy LoggingAction.IMAGE_DOWNLOAD；typed Track.action.image_download 已标记 deprecated 且没有调用。PC History 在启动文件下载后依次记录 legacy 与 result_download，Build Flow 则在下载请求完成前就可能先记录 legacy。',
    evidenceLabel:'源码还原'
  }),
  image_input_view:Object.freeze({
    src:'assets/tracking-interface/image_input_view-hold-input-preview.jpg',
    title:'按住查看输入图',
    description:'作品详情与原子图片编辑器的 PreviewIcon 在 touchstart 切换输入图并立即上报；Task 则仅在 A1 原生 App 中按住 350ms、位移不超过 6px 后上报。松手和开始滑动只恢复结果图，重复按住无去重；origin=follow 仅存在于类型声明，当前无调用点发送。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  image_pop_direct_close:Object.freeze({
    src:'assets/tracking-interface/image_pop_direct_close-unchanged-remix-close.jpg',
    title:'Remix 图片编辑弹层未修改关闭',
    description:'当前 Remix 编辑入口打开 reference、presetphoto 或 groupphoto 弹层后，X、遮罩、返回或程序 pop 的关闭回调仅在 REF_CHANGE 不存在时上报。选图会先写 true 并抑制本次上报，但 true 当前没有清理路径，可继续抑制后续未修改关闭；已废弃且未挂载的 EditGroupphotoPopup 还存在 ref 条件异常，不作为当前产品行为。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  image_upload_front:Object.freeze({
    src:'assets/tracking-interface/image_upload_front-remix-upload-outcome.jpg',
    title:'Remix 图片上传处理结果',
    description:'Remix 的普通上传与 reference 更换会在格式、体积、服务端结果或合照人数检查得出结果后上报 failure_reason；这是选图后的处理结果，不是文件选择器打开事件。typed 的 remix_reference / remix_upload 与 PC legacy 是两套 wire contract，不能把字段合并成单个 payload；同一合照选择还可能先报 success、再报 GROUPPHOTO_NUMBER_ERROR。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  image_upload_result:Object.freeze({
    src:'assets/tracking-interface/image_upload_result-app-detail-callback.jpg',
    title:'App 详情输入图上传回调',
    description:'App 详情图片输入的上传或查重回调先上报 success / failure，input_image_id 实际取接口返回的 filename；调用方随后才将图片写回表单并清除 loading。success 同时包括 duplicate，不代表界面已渲染；取消文件选择、选历史图和视频输入不报，部分失败可能因内外层 catch 重复上报。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  join_topic:Object.freeze({
    src:'assets/tracking-interface/join_topic-topic-entry.jpg',
    title:'Topic 详情 Join now 入口',
    description:'点击话题详情底部 Join now 时会先上报 topic_id，再打开 TopicApp 并导航到该话题的 App 列表；事件不表示已加入成员关系、发布内容或完成创作。topic_id 缺失时仍可上报空字符串，且不等待后续页面打开成功。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  language_change:Object.freeze({
    src:'assets/tracking-interface/language_change-language-row.jpg',
    title:'语言列表选择行',
    description:'用户在 Choose language 列表点击任一语言行后，代码先发送语言变更通知并改写 URL，再上报 before_language 与 after_language，之后才持久化、通知 Android 并刷新；没有新旧值必须不同的判断，重复选当前语言也可能上报。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  leavea_ctivity_banner:Object.freeze({
    src:'assets/tracking-interface/leavea_ctivity_banner-creator-hero-back.jpg',
    title:'Creator Activity Hero 返回箭头',
    description:'仅 DefaultHero 左上返回箭头的点击会上报，不是首页活动 Banner；事件先发送，随后才清空当前弹层栈并跳转本地化首页，不是浏览器 history back。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  list_feedback_click:Object.freeze({
    src:'assets/tracking-interface/list_feedback_click-settings-feedback.jpg',
    title:'个人设置 Feedback 行',
    description:'用户点击 Personal Settings 中的 Feedback 整行时先上报空 Properties 事件，再以新窗口尝试打开外部反馈问卷；不表示问卷已成功加载或用户已提交。个人页顶部的反馈图标上报另一个事件。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  message_button_click:Object.freeze({
    src:'assets/tracking-interface/message_button_click-profile-message-entry.jpg',
    title:'本人 Profile 消息入口',
    description:'用户点击本人 Profile 头部的消息图标时，先以 non_read_num 上报当前客户端 store 快照，再打开消息列表；未读数大于 99 时 UI 只显示省略号，payload 仍发送原始数字。初始化请求未完成时也可能发送 0，不是服务端实时确认值。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  message_tabbar_click:Object.freeze({
    src:'assets/tracking-interface/message_tabbar_click-message-category-tabs.jpg',
    title:'消息列表分类 Tab',
    description:'用户通过点击或左右滑动切换 All、Likes、Comments 或 Followers 后，先将目标 Tab 的本地未读计数清零，再上报；is_read 表示切换前是否已无红点，有红点时发 false。初次打开和重复点当前 Tab 不会触发，本地清零也不表示服务端已读成功。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  mute_button_click:Object.freeze({
    src:'assets/tracking-interface/mute_button_click-faceswap-video-mute.jpg',
    title:'换脸视频声音控制',
    description:'移动端单视频换脸详情中，用户先点画面显示控制栏，再点静音按钮时上报切换后的 current_state。浏览器自动播放降级为静音后，用户点播放恢复声音也可能上报 non-mute；自动静音本身、长视频详情和已停用的竖滑入口不属于主截图。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  new_message_click:Object.freeze({
    src:'assets/tracking-interface/new_message_click-message-new-toast.jpg',
    title:'消息页新消息浮条',
    description:'实时消息到达后，当前消息分类顶部会短暂显示“You have N new messages”浮条；用户在约 3 秒内点击它，页面滚回顶部并刷新列表时上报 current_tab。消息到达、自动消失、分类红点、切换分类或下拉刷新都不触发本事件。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  onerway_cancel_popup_button_click:Object.freeze({
    src:'assets/tracking-interface/onerway_cancel_popup_button_click-subscription-cancel-confirm.jpg',
    title:'取消订阅确认按钮',
    description:'用户在取消订阅确认步骤点击 Confirm cancel 后发起取消请求。消费者定价页在请求结束后均上报，无论成功或失败；API 定价页仅成功时上报。取消、关闭、按 ESC 或请求一直未结束均不触发。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  onerway_cancel_subscribe_entrance_click:Object.freeze({
    src:'assets/tracking-interface/onerway_cancel_subscribe_entrance_click-subscription-cancel-entry.jpg',
    title:'定价 FAQ 取消订阅入口',
    description:'符合连续订阅资格时，用户展开消费者定价页第 3 问或 API 定价页第 10 问并点击 Cancel plan，会先上报 product_type、period 与 source_type，再打开确认步骤。仅展开 FAQ、入口隐藏或不可用时不触发。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  open_a1:Object.freeze({
    src:'assets/tracking-interface/open_a1-page-visible-open.jpg',
    title:'A1 初始化或恢复前台',
    description:'这是无点击目标的生命周期事件：PC、移动 Web 与 A1 App 初始化时上报，页面从 hidden 变为 visible 时再次上报。非原生环境立即发送；原生 App 没有设备 ID 时约延迟 5 秒，并沿用延迟前捕获的页面快照。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  others_filters_click:Object.freeze({
    src:'assets/tracking-interface/others_filters_click-result-filters-entry.jpg',
    title:'结果页 Filters / Style 入口',
    description:'已完成的证件照或换装结果页中，只有当前没有打开其他面板时，用户手动点击 Filters 或 Style 并准备打开面板才上报 user_scene。进入结果页时自动展开面板不会上报；已有面板时再次点击只会关闭，也不会上报。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  others_filters_customize:Object.freeze({
    src:'assets/tracking-interface/others_filters_customize-filter-custom-entry.jpg',
    title:'滤镜面板自定义入口',
    description:'证件照面板点击首个自定义卡后，准备打开自定义设置并上报；换装面板点击上传卡时，没有可复用图片会在文件选择器打开后上报，因此取消选图也可能已记录；已有自定义图时则等待生成处理后才上报。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  others_filters_customize_generate:Object.freeze({
    src:'assets/tracking-interface/others_filters_customize_generate-filter-custom-confirm.jpg',
    title:'证件照自定义完成勾选',
    description:'证件照自定义页点击完成勾选后，调用生成处理并立即上报，不等待登录、积分、表单或请求结果；换装分支只有生成处理返回 truthy 后才上报，但异常处理后也可能返回 truthy。该事件不能等同于任务已创建或结果已生成。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  page_change:Object.freeze({
    src:'assets/tracking-interface/page_change-app-detail-transition.jpg',
    title:'推荐页面与弹层状态结算',
    description:'这是无通用点击目标的状态事件：进入或离开纳入推荐统计的页面、弹层，或页面转入后台时自动结算上一状态。refer_stay_time 为向下取整的秒字符串；详情页 app_id 来自最近一次 App 点击缓存，可能为空或陈旧。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  post_button_click:Object.freeze({
    src:'assets/tracking-interface/post_button_click-post-editor-topic-ready.jpg',
    title:'Post 编辑器话题查询完成',
    description:'事件名容易误解：移动端 Post 编辑器首次打开并完成关联话题查询后自动上报；PC 在话题查询完成后、发布弹窗展示前上报。它不是底部 Post 按钮，用户随后返回或取消也可能已记录；话题查询失败时不触发。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  post_success:Object.freeze({
    src:'assets/tracking-interface/post_success-post-compose-success.jpg',
    title:'作品发布成功结果',
    description:'用户提交 Post 后，只有发布接口返回 code=0 并取得 post_id，页面更新本地作品或评论并展示成功提示时才上报。打开编辑器、取消首次隐私确认、正文超限、接口非零或异常均不触发；这是发布成功结果，不是点击事件。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  prompt_random_click:Object.freeze({
    src:'assets/tracking-interface/prompt_random_click-background-prompt-random.jpg',
    title:'换背景随机提示词按钮',
    description:'用户在 AI 换背景自定义页或任务结果的自定义背景面板点击 Random 时，先上报空 Properties 事件，再以本地预设覆盖提示词。进入面板、上传图片、手工输入、调整强度或点击生成都不触发；任务分支实际只会随机到 1–29。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  publish_click_withoutname:Object.freeze({
    src:'assets/tracking-interface/publish_click_withoutname-publish-disabled-no-name.jpg',
    title:'Remix 禁用发布区域',
    description:'移动 Remix 中，名称为空或未选中最佳封面时点击禁用的 Publish 区域会立即上报；PC Build 仅名称为空时有这层点击入口。事件不会发起发布请求；名称和封面齐全后的正常发布，以及 PC 其他禁用原因都不触发。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  publish_pop_close:Object.freeze({
    src:'assets/tracking-interface/publish_pop_close-remix-publish-close-lifecycle.jpg',
    title:'Remix 发布弹层关闭完成',
    description:'这是发布弹层的关闭生命周期事件，没有唯一点击目标：右上 X、遮罩、系统或浏览器返回，以及部分代码关闭都可能在弹层完成关闭时上报。是否编辑过内容不影响；只打开不关闭、发布失败且弹层仍保留时不触发。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  publish_pop_direct_close:Object.freeze({
    src:'assets/tracking-interface/publish_pop_direct_close-remix-publish-direct-close.jpg',
    title:'未修改发布弹层的关闭 X',
    description:'Remix 发布弹层打开后，用户没有手工修改名称、封面或权限并点击右上 X 时，先上报本事件，再关闭弹层并通常触发 publish_pop_close。手工点当前封面或改回原值也会被记为已修改；遮罩、返回和外部关闭不触发本事件。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  publish_pop_publish:Object.freeze({
    src:'assets/tracking-interface/publish_pop_publish-remix-publish-submit.jpg',
    title:'Remix 发布弹层 Publish',
    description:'用户点击可用的 Publish 后，本事件会先上报，紧接着同一次点击还会上报 publish_pop_publish_click，之后才检查自动保存状态并进入发布请求。自动保存仍忙或后续保存、发布失败时也可能已记录；不表示 App 发布成功。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  publish_pop_publish_click:Object.freeze({
    src:'assets/tracking-interface/publish_pop_publish_click-remix-publish-submit-detail.jpg',
    title:'同一次 Publish 的详细事件',
    description:'本事件与 publish_pop_publish 来自同一次 Publish 点击，不是第二次点击；它额外携带 App 短 ID 与 filter_level。两条事件都早于自动保存检查和发布请求，因此不能相加作为点击量，也不能作为发布成功量。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  publish_pop_show:Object.freeze({
    src:'assets/tracking-interface/publish_pop_show-remix-publish-entry.jpg',
    title:'Remix 发布流程入口',
    description:'用户从 Remix 编辑页或生成结果页点击可用的 Publish 时，先上报 edit_publish 或 result_publish，再尝试打开发布弹层。事件只表示进入发布流程的意图，不严格证明弹层已展示；入口不可用、直接挂载弹层或关闭弹层均不触发。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  publish_popup_click:Object.freeze({
    src:'assets/tracking-interface/publish_popup_click-privacy-choice.jpg',
    title:'发布隐私提示中的明确选择',
    description:'发布隐私提示中，用户明确点击 Publish 或 Cancel/关闭时上报 button_name=publish 或 close，并携带 checkbox_status。只勾选复选框、点击遮罩、按 ESC 或系统返回都不触发；事件不等待后续发布结果，发布失败也可能已记录。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  publish_popup_show:Object.freeze({
    src:'assets/tracking-interface/publish_popup_show-privacy-mount.jpg',
    title:'发布隐私提示首次挂载',
    description:'发布隐私提示组件首次挂载后自动上报，没有曝光比例或停留时长门槛。已命中“不再提示”状态时会直接进入发布流程，不挂载也不上报；当前正常入口实际为图片发布，移动端可额外携带 user_scene 与 ability_name。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  push_button_click:Object.freeze({
    src:'assets/tracking-interface/push_button_click-notification-permission-guide.jpg',
    title:'稍后查看通知引导的立即开启',
    description:'当前真实可达入口是 A1 App 中“稍后查看”后出现的消息通知底部弹层；用户点击“立即开启”时先尝试打开系统通知设置，再上报 locaiton=view_later 并关闭弹层。右上 X、弹层展示和从系统设置返回都不触发；签到页实现当前未挂载。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  push_message_click:Object.freeze({
    src:'assets/tracking-interface/push_message_click-push-notification-entry.jpg',
    title:'携带 Push 参数的移动端入口',
    description:'移动端应用首次挂载时，只要入口 URL 的 pushId 或 pushType 任一非空就上报；代码不校验本次打开是否真由系统通知点击产生。现行生成通知深链使用 id 而不是 pushId，因此可能发送空 push_id 与 generate_success。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  push_message_send:Object.freeze({
    src:'assets/tracking-interface/push_message_send-video-finish-background.jpg',
    title:'后台视频任务完成的通知尝试',
    description:'登录用户的首个任务状态为四类视频 FINISH，且页面处于 hidden 时，先上报本事件，再尝试调用 Android 系统通知。页面可见、图片或其他任务、失败任务都不触发；没有通知权限或原生通知能力时仍可能已上报。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  rating_popup_click:Object.freeze({
    src:'assets/tracking-interface/rating_popup_click-five-star-rating-choice.jpg',
    title:'五星评分引导的按钮与关闭 X',
    description:'五星评分弹窗中，点击“给出五星好评”会尝试打开 Google Play、关闭弹窗并上报 five_star_praise；点击右上 X 上报 not_now。点击遮罩只关闭、不触发；弹窗挂载使用 rating_popup_show，从商店返回也不重复上报本事件。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  remix_baseimage_choose:Object.freeze({
    src:'assets/tracking-interface/remix_baseimage_choose-remix-history-image-select.jpg',
    title:'Remix 历史生图选择结果',
    description:'用户在 Remix 的“选择 A1 作品”历史瀑布流点击非 pending 图片后，页面先关闭相关弹层并请求复制；只有接口 code=0、图片成功写入参考图后才上报。打开入口、返回、骨架项、接口非零或异常都不触发。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  remix_guide_click:Object.freeze({
    src:'assets/tracking-interface/remix_guide_click-remix-guide-banner-unmounted.jpg',
    title:'当前未挂载的 Remix 帮助横幅',
    description:'固定提交中的 import 与渲染都已注释，正常产品路径当前不可触发。若组件恢复，点击整张引导横幅会先上报 app_id，再按语言打开内嵌或外部帮助文档；文档打开失败也不撤销事件。',
    evidenceLabel:'源码组件还原'
  }),
  remix_guide_start_click:Object.freeze({
    src:'assets/tracking-interface/remix_guide_start_click-remix-onboarding-finish-unmounted.jpg',
    title:'当前未挂载的 Remix 引导最终步骤',
    description:'当前提交没有 RemixOnboardingGuide 的挂载点。若恢复，Start 与前两步 Next 都不报，只有第 3 步区域或 Finish 执行完成处理时先上报 app_id。Finish 未阻止点击冒泡，静态代码存在一次点击同时命中子、父处理器而双报的风险。',
    evidenceLabel:'源码组件还原'
  }),
  remix_notnow_click:Object.freeze({
    src:'assets/tracking-interface/remix_notnow_click-remix-entry-not-now.jpg',
    title:'Remix 入口确认层的两种放弃操作',
    description:'登录并成功 fork 后，用户点击 Not now 或弹窗外遮罩时先上报原模板的 app_id、short_id、user_level、filter_level 与 origin，再关闭确认层；已 fork 的副本不会在这里删除。Begin、系统返回和外部直接 popStack 不触发。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  remix_t2i_textbox_click:Object.freeze({
    src:'assets/tracking-interface/remix_t2i_textbox_click-remix-history-prompt-focus.jpg',
    title:'Remix 历史作品页的提示词聚焦',
    description:'A1 历史作品弹层底部的 textarea 每次获得焦点时立即上报 app_id 与 short_id，并展开输入区；不要求输入内容、积分充足或生成成功。已聚焦时重复点击不报，失焦后再次聚焦可重复上报；输入、清空、失焦和 Generate 都不是本事件。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  remix_uploadfrom_a1_click:Object.freeze({
    src:'assets/tracking-interface/remix_uploadfrom_a1_click-remix-a1-generation-entry.jpg',
    title:'更换参考图中的 A1 作品入口',
    description:'在普通参考图或合照的更换页点击动态产品名的“选择作品”入口时，先上报 app_id 与 short_id，再尝试打开历史作品弹层。固定人物输入不显示这一入口；此时尚未选择图片，真正复制成功后才上报 remix_baseimage_choose。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  remix_uploadfrom_album_click:Object.freeze({
    src:'assets/tracking-interface/remix_uploadfrom_album_click-remix-system-album.jpg',
    title:'更换图片页的系统相册入口',
    description:'普通参考图、合照和固定人物图片的更换页都显示相册入口。点击后先尝试唤起系统文件选择器，随后立即上报 app_id 与 short_id；选择器未打开、取消选图或后续上传失败仍已计数，只打开更换页不触发。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  remix_whatsapp_entry_click:Object.freeze({
    src:'assets/tracking-interface/remix_whatsapp_entry_click-creator-guidance-entry.jpg',
    title:'Creator Announcement 的 Guidance 卡',
    description:'固定提交唯一实际渲染调用位于 Creator Announcement 的 Guidance 卡，点击时先打开 Creator Assistant 引导弹窗，再上报 origin=announcement 且不带 app_id。页面存在直达路由，但常规进入该页的入口尚未证实；edit 与 creator_center 的另一个入口当前未挂载。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  remix_whatsapp_link_click:Object.freeze({
    src:'assets/tracking-interface/remix_whatsapp_link_click-creator-assistant-add-now.jpg',
    title:'Creator Assistant 弹窗的 Add Now',
    description:'点击 Add Now 时先计算 user_level 并上报 origin 与可选 app_id，再尝试打开远程配置地址，随后关闭弹窗。外链失败或被拦截也已计数；默认地址也不能证明是 WhatsApp 页面，因此本事件不表示 WhatsApp 已打开或已添加助手。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  remix_whatsapp_popup_close:Object.freeze({
    src:'assets/tracking-interface/remix_whatsapp_popup_close-creator-assistant-close.jpg',
    title:'Creator Assistant 弹窗的明确放弃操作',
    description:'只有点击弹窗外遮罩或 Not now, thanks 才会先上报 origin 与可选 app_id，再关闭弹窗。点击 Add Now 使用另一个事件；系统返回、外层遮罩包装和程序关闭不触发，本事件不是所有关闭路径的统一生命周期。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  remove_input_cancel_click:Object.freeze({
    src:'assets/tracking-interface/remove_input_cancel_click-remove-input-cancel.jpg',
    title:'移除用户输入确认框的 Cancel',
    description:'用户从 Remix 描述或视频提示词进入“编辑用户输入”，再打开“Remove user input?”确认框后，只有显式点击 Cancel 才上报 app_id 并关闭确认框，底层编辑页与输入内容继续保留。遮罩、返回与程序关闭不触发；Remove 使用另一事件。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  remove_input_click:Object.freeze({
    src:'assets/tracking-interface/remove_input_click-remix-remove-input-entry.jpg',
    title:'编辑用户输入页的移除入口',
    description:'用户从 Remix 描述或视频提示词进入“Edit user input”页后，点击红色 Remove user input 会先打开移除确认框，然后上报 app_id。仅打开编辑页、修改选项、返回或关闭都不触发；确认与取消分别使用后续事件。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  remove_input_confirm_click:Object.freeze({
    src:'assets/tracking-interface/remove_input_confirm_click-remix-remove-input-confirm.jpg',
    title:'移除用户输入确认框的 Remove',
    description:'用户在“Remove user input?”确认框显式点击 Remove 时，先执行用户输入移除回调，再上报 app_id，最后关闭确认框和编辑页。回调抛错时不会上报；Cancel、遮罩、返回或程序关闭都不触发。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  renewal_retention_popup_click:Object.freeze({
    src:'assets/tracking-interface/renewal_retention_popup_click-renewal-retention-offer.jpg',
    title:'续订激励弹窗的 START 与关闭 X',
    description:'续订激励弹窗中，START 只在商品与折扣数据完整时先上报 button=start_button，随后才发起支付，因此取消或支付失败也可能已计数。点击 X 会先关闭弹窗，再上报 button=close_button；曝光、动画、倒计时与程序关闭不触发。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  report_click:Object.freeze({
    src:'assets/tracking-interface/report_click-comment-report-action-sheet.jpg',
    title:'他人评论操作菜单的 Report',
    description:'登录用户长按他人评论并在操作菜单点击 Report 时，先上报 report_click，再尝试打开外部举报表单，然后还会上报 comment_action=report。外链被拦截也可能已计数；report_object_type 表示评论所属的 creator 或 post 父资源，不表示举报已提交。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  reset_button_click:Object.freeze({
    src:'assets/tracking-interface/reset_button_click-faceswap-filter-reset-source-only.jpg',
    title:'当前未挂载的换脸筛选 Reset',
    description:'当前 /faceswap 使用 FaceSwapFilterFeed，唯一上报该事件的旧 FaceSwapFeed 筛选弹窗已注释，因此正常产品路径无法触发。若恢复旧组件，用户修改分类或排序后点击 Reset，会恢复弹窗打开时的值并上报；不会关闭弹窗、应用筛选或请求数据。',
    evidenceLabel:'源码组件还原'
  }),
  result_click:Object.freeze({
    src:'assets/tracking-interface/result_click-remix-inline-result-open.jpg',
    title:'Remix 编辑页的已有 Result 卡',
    description:'Remix 编辑流程末端只有在 images.length > 0 时，点击 Result 卡才上报 app_id、Raw appid=shortId 与 filter_level。同一点击紧接着还会上报 result_pop_show(origin=edit_result)，然后打开结果弹窗；无结果时直接返回。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  result_page_inputInfo_click:Object.freeze({
    src:'assets/tracking-interface/result_page_inputInfo_click-task-input-summary-source.jpg',
    title:'当前未挂载的任务输入摘要',
    description:'固定提交中 ImageInput 组件仍存在，但没有任何 import 或产品挂载点。若恢复使用，点击任务结果页底部输入摘要会切换面板并轻振动，仅原状态为关闭、即切换为展开时上报；再次点击收起、X 或外部关闭不触发。',
    evidenceLabel:'源码组件还原'
  }),
  result_pop_close:Object.freeze({
    src:'assets/tracking-interface/result_pop_close-remix-result-close-lifecycle.jpg',
    title:'Remix 结果弹窗的统一关闭回调',
    description:'本事件在 Remix 结果弹窗完成关闭后由 onClose 回调统一上报，不是专属的 X 点击。点击 X、外部遮罩、Back to try，或点击 Publish 进入发布流程都会触发；字段不包含关闭原因，因此无法区分这些路径。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  result_pop_publish_click:Object.freeze({
    src:'assets/tracking-interface/result_pop_publish_click-remix-result-publish.jpg',
    title:'Remix 结果弹窗的可用 Publish',
    description:'只有结果完成、当前图片存在、isModify=true 且 needTest=false 时 Publish 才可触发。点击后先上报本事件，再上报 publish_pop_show(origin=result_publish)、打开发布弹窗，并在关闭结果弹窗后触发 result_pop_close。此时尚未发起发布请求，不表示发布成功。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  result_pop_show:Object.freeze({
    src:'assets/tracking-interface/result_pop_show-remix-result-show-loading.jpg',
    title:'Remix 结果弹窗打开前的三种入口',
    description:'本事件在 openStack 之前上报，来源包括生成请求创建成功 generate_pop_generate、编辑页点击已有结果 edit_result，以及试用表单点击查看结果 view_result。生成分支只要请求返回 code=0 并取得 room ID 就会记录，不等待 socket 结果；因此不证明图片已生成或弹窗已完整展示。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  retention_popup_button_click:Object.freeze({
    src:'assets/tracking-interface/retention_popup_button_click-paid-retention-subscribe.jpg',
    title:'付费挽留弹窗的订阅 CTA',
    description:'移动端付费挽留弹窗中，点击订阅或 Start Free Trial 只在 productInfo 与 subscribeInfo 齐全时触发。处理先进入 loading，发送支付点击事件，再上报本事件，随后发起订阅；300ms 内同一 CTA 的重复点击被抑制。展示弹窗、关闭、返回或商品数据缺失都不触发。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  retention_popup_click:Object.freeze({
    src:'assets/tracking-interface/retention_popup_click-leave-retention-actions.jpg',
    title:'续订离开挽留弹窗的两种选择',
    description:'点击保留优惠主 CTA 时，只有商品与折扣方案完整才先上报 button=save_button，然后发起订阅，因此后续支付失败也可能已计数。当前的 button=give_up_button 实际来自弹窗下方独立圆形 X，时序为先关闭再上报；显式的 Give Up 文字按钮已注释。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  screen_print:Object.freeze({
    src:'assets/tracking-interface/screen_print-task-result-native-screenshot.jpg',
    title:'A1 App 原生截屏回调',
    description:'本事件不是普通 H5 页面自动监听系统截屏。只有 UA 被识别为 A1 App 时注册 window.handleScreenshot，并由原生 WebView 在 OS 截屏后调用才上报。当 traceId 能命中本地任务记录时携带任务字段，否则发送 fallback 字段；部分详情或个人页还可因海报数据或弹窗状态提前跳过。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  search:Object.freeze({
    src:'assets/tracking-interface/search-mobile-search-results-complete.jpg',
    title:'移动搜索结果请求结束',
    description:'移动端提交非空关键词后，当前结果页签的搜索请求结束才上报，不是点击 Search 的瞬间。首次默认为 app，切换 user 页签或改变排序可再次记录；相同关键词、排序与已访问页签会去重，分页不触发。各搜索 store 会捕获内部失败，因此失败后也可能以 0 结果上报。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  search_history_delete:Object.freeze({
    src:'assets/tracking-interface/search_history_delete-mobile-search-history-delete.jpg',
    title:'搜索历史的单条与全部删除',
    description:'搜索历史非空时，移动端进入编辑态后点击单条会先更新列表，再上报 delete_num=delete_one。点击 Delete all 只打开确认框，确认后才清空、上报 delete_all 并移除本地历史；PC 端点垃圾桶则直接清空。进入编辑、打开确认框、取消、Done 或点击历史词搜索都不触发。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  see_original:Object.freeze({
    src:'assets/tracking-interface/see_original-post-see-original.jpg',
    title:'跨语言作品与评论的 See original',
    description:'仅内容语言与当前界面语言不同时显示入口。作品点击 See original 后请求原文，请求结束才上报，即使请求失败也计；评论已显示译文时点击会立即切回原文并上报。同一内容在本次前端会话最多记录一次，语言相同、字段缺失或只查看译文都不触发。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  see_translation:Object.freeze({
    src:'assets/tracking-interface/see_translation-comment-see-translation.jpg',
    title:'跨语言作品与评论的 See translation',
    description:'作品已取得原文后，点击 See translation 会立即切回缓存译文并上报；评论从原文请求译文时在 finally 上报，因此接口失败也可能已记录且仍停留原文。同一内容在本次前端会话最多一次，语言相同、字段缺失或点击 See original 不触发。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  share_friends_popup_click:Object.freeze({
    src:'assets/tracking-interface/share_friends_popup_click-invitation-share-source-only.jpg',
    title:'当前不可达的邀请好友分享项',
    description:'固定提交只保留带 lanchKey 的邀请分享条件分支和可选类型，仓库内没有任何产品入口传入 lanchKey，因此当前无法从真实产品 UI 触发。若恢复使用，用户点击分享项后会先上报 source 与 button_detail，再处理 token、复制或原生分享；后续失败也不会撤销点击事件。',
    evidenceLabel:'源码组件还原'
  }),
  share_popup_click:Object.freeze({
    src:'assets/tracking-interface/share_popup_click-share-sheet-action-click.jpg',
    title:'A1 App 普通分享抽屉的操作项',
    description:'用户在普通分享抽屉选择社交平台、复制、下载、海报、发布、举报或删除等操作时先上报，再处理 token 与执行实际动作，因此无原生能力、解密失败或动作失败时也可能已计。普通抽屉同一项 3 秒内重复点击被抑制；只打开或关闭抽屉、海报内点击以及带 lanchKey 的邀请分享不触发本事件。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  share_popup_jump_external:Object.freeze({
    src:'assets/tracking-interface/share_popup_jump_external-share-visibility-transition.jpg',
    title:'分享标记后的页面隐藏生命周期',
    description:'这不是分享按钮的直接点击事件。原生分享回调或非任务列表复制链接先写入 isSharing=true，页面下一次进入 hidden 状态时才上报并清除标记。is_success 当前固定为 true，不证明已跳转外部 App 或分享成功；页面始终可见、任务列表复制链接、分享超时或只有按钮点击都不触发。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  share_poster_click:Object.freeze({
    src:'assets/tracking-interface/share_poster_click-share-poster-action.jpg',
    title:'分享海报页的下载与社交渠道',
    description:'海报页当前可点击操作为 Raw button_detail=DownLoad，以及 TikTok、Instagram、Facebook、Whatsapp、Telegram、Messenger、More 七个社交渠道。点击后先上报包含 share_type、shareOrigin、button_detail、app_id、image_id、post_id、topic_id、creator、user_scene、short_id、ability_name、is_download、tag_id 的 13 个业务字段，再执行下载或原生分享，因此后续失败也可能已记录；海报展示、关闭和普通分享抽屉不触发。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  show_more_comments:Object.freeze({
    src:'assets/tracking-interface/show_more_comments-comment-more-replies.jpg',
    title:'根评论下的更多回复入口',
    description:'用户点击某条根评论的 View more replies 后，前端先上报该根评论 comment_id，再设置 loading 并请求下一页回复；接口非零、网络异常或返回空列表时也已计数。一级评论列表的滚动分页、展开评论编辑器、查看已有回复和提交回复都不触发。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  skip_button_click:Object.freeze({
    src:'assets/tracking-interface/skip_button_click-onboarding-exit-lifecycle.jpg',
    title:'Onboarding 的退出与超时生命周期',
    description:'当前 Onboarding 没有可见 Skip 按钮，本事件不能按按钮点击解读。它来自用户信息初始化等待约 8 秒超时 scene=time_out、Android 返回手势关闭 scene=gesture_swipe，或用户进入后续详情、选图、订阅等流程后退出并关闭 Onboarding scene=空值；点击 Try it、开始生成、普通路由切换和页面保持打开不触发。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  sns_button_click:Object.freeze({
    src:'assets/tracking-interface/sns_button_click-feedback-channel.jpg',
    title:'Profile 反馈渠道入口',
    description:'中国区外点击 Profile 反馈图标时先上报 type=whatsapp，再打开配置的反馈问卷；当前实现并不打开 WhatsApp。中国区点击微信图标时上报 type=wechat 并展示二维码。问卷或二维码展示失败仍可能已记录；仅查看 Profile、进入设置、提交反馈或关闭二维码不触发。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  stop_account_delete:Object.freeze({
    src:'assets/tracking-interface/stop_account_delete-login-freeze-response.jpg',
    title:'登录响应中的账号删除中止标记',
    description:'本事件没有独立可点击界面。登录成功处理发送 login_success 并更新渠道后，只有服务端响应携带 isLoginFromFreeze 真值才自动上报 stop_account_delete，且没有事件独有字段；普通登录、登录失败、删除账户入口或确认、取消删除和退出登录都不会直接触发。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  studio_generatevideo_app_click:Object.freeze({
    src:'assets/tracking-interface/studio_generatevideo_app_click-studio-video-app-card.jpg',
    title:'Studio 合集中的视频生成 App 卡',
    description:'用户已通过 requireLogin 后点击 Studio 合集中的视频生成 App 卡片，代码先调用 openStack 打开详情页，再上报 app_id。它不等待详情请求、预加载资源或最终页面渲染完成；未登录、非 App 合集、非视频生成卡或点击视频模板时不触发本事件。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  submit_button_click:Object.freeze({
    src:'assets/tracking-interface/submit_button_click-creator-activity-submit-ended.jpg',
    title:'当前不可用的 Creator Activity 提交按钮',
    description:'源码组件将 Submit 固定设为原生 disabled。虽然 onClick 中定义了清空选择、打开滤镜弹窗并上报的代码，但正常产品界面无法触发该处理；图中仅还原源码组件，不表示该按钮目前可点击或已在生产上报。',
    evidenceLabel:'源码组件还原'
  }),
  submit_comment:Object.freeze({
    src:'assets/tracking-interface/submit_comment-comment-submit-result.jpg',
    title:'评论编辑器等待 onSend 返回后的提交',
    description:'编辑器本地存在时点击 Send 后先等待 onSend；只有 Promise 解析才上报并清空、关闭编辑器。本地校验抛错不会上报，但评论 store 会吞掉部分接口、网络或登录失效错误，因此服务端实际创建失败时也可能解析并上报，不能解读为评论必然发布成功。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  submit_filter:Object.freeze({
    src:'assets/tracking-interface/submit_filter-creator-filter-submit-multi.jpg',
    title:'Creator Activity 的多滤镜提交',
    description:'当前正常产品入口被上游 disabled Submit 阻断；若经调试入口打开滤镜弹窗并勾选 N 个 App，点击一次 Submit 会按选择顺序发送 N 条 submit_filter，每条携带对应 app_id 和当前 user_id，随后关闭弹窗并展示本地成功提示。这里没有后端提交请求。',
    evidenceLabel:'源码组件还原'
  }),
  submit_filter_disabled_click:Object.freeze({
    src:'assets/tracking-interface/submit_filter_disabled_click-creator-filter-submit-unchecked.jpg',
    title:'未勾选滤镜时仍可点击的灰态 Submit',
    description:'当前正常入口已停用；若经调试入口打开弹窗、存在滤镜且未勾选，视觉灰态的 Submit 没有 disabled 属性，点击每次立即上报 type=Unchecked。它不关闭弹窗、不会提交滤镜，也没有节流，因此重复点击可能重复计数。',
    evidenceLabel:'源码组件还原'
  }),
  template_video_select:Object.freeze({
    src:'assets/tracking-interface/template_video_select-faceswap-template-card.jpg',
    title:'FaceSwap 视频模板卡片与 Create 入口',
    description:'用户在移动端点击视频换脸模板卡片或其 Create 按钮时上报；Create 按钮在登录校验前上报，卡片和合集入口仅在登录成功后上报。打开详情失败不撤销已发送事件。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  text_edit_page_finish:Object.freeze({
    src:'assets/tracking-interface/text_edit_page_finish-emoji-text-upload-success.jpg',
    title:'表情包文字编辑的上传成功回调',
    description:'用户完成表情包文字编辑后，只有编辑图片导出并上传成功时上报；点击完成本身、空文字、导出失败、上传失败或上传中的重复点击均不上报。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  text_function_click:Object.freeze({
    src:'assets/tracking-interface/text_function_click-emoji-add-text-entry.jpg',
    title:'表情包结果页的添加文字入口',
    description:'用户点击“添加文字”，或特定 Emoji 结果路径自动打开文字编辑器时上报；当前结果图不可用、编辑器未打开时也可能已经上报，重复触发没有显式节流。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  try_click:Object.freeze({
    src:'assets/tracking-interface/try_click-remix-existing-result-try.jpg',
    title:'已有 Remix 结果后的再次 Try',
    description:'当前 Remix 已有生成结果时，用户点击 Try 后上报；即使后续仅展示修改提示、未打开表单或未开始生成，也可能已上报。无结果时同一 CTA 使用 tryyourfilter_click。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  try_it_button_click:Object.freeze({
    src:'assets/tracking-interface/try_it_button_click-onboarding-ready-cta.jpg',
    title:'Onboarding 倒计时结束后的 Try it',
    description:'用户在 Onboarding 推荐页倒计时结束后点击 Try it 时上报；事件发生在付费页或生成分支之前，不代表生成已经开始。当前调用仅传 location1=onboarding。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  try_now_button_click:Object.freeze({
    src:'assets/tracking-interface/try_now_button_click-atomic-introduce-try-now.jpg',
    title:'原子能力介绍页的 Try it now 上传入口',
    description:'在原子创作能力介绍页点击 Try it now 文件输入时上报；该事件发生在 H5、登录、积分和并发校验前，取消选图后也可能已记录，不表示已选择或上传成功。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  tryyourfilter_click:Object.freeze({
    src:'assets/tracking-interface/tryyourfilter_click-remix-first-try-filter.jpg',
    title:'尚无 Remix 结果时的首次 Try',
    description:'Remix 尚无生成作品时点击底部 Try 会上报；外层点击处理在视觉 disabled 的 Try 区也会运行，事件不代表表单已经打开、修改通过或生成已经开始。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  unfollow_user_confirm_click:Object.freeze({
    src:'assets/tracking-interface/unfollow_user_confirm_click-profile-unfollow-confirm.jpg',
    title:'取消关注成功后的关系变更',
    description:'用户确认取消关注后，只有取消关注请求成功并触发 follow-change 监听器时上报；确认按钮点击、请求失败或关系未变化不构成这个事件。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  unsubscribe_button_click:Object.freeze({
    src:'assets/tracking-interface/unsubscribe_button_click-manage-billing-source-only.jpg',
    title:'当前未挂载的 Manage billing 设置项',
    description:'固定版本的设置项配置已注释，正常产品路径不显示该入口。若恢复，点击会先打开取消订阅挽留弹窗，再上报 unsubscribe_button_click。',
    evidenceLabel:'源码组件还原'
  }),
  unsubscribe_retain_popup_click:Object.freeze({
    src:'assets/tracking-interface/unsubscribe_retain_popup_click-retention-source-only.jpg',
    title:'当前未挂载的取消订阅挽留弹窗',
    description:'固定版本没有显示入口。若组件恢复，Continue subscription 会先关闭后报 continue；Cruel cancellation 会尝试打开 Google Play 管理页后报 cancel，不代表退订成功。',
    evidenceLabel:'源码组件还原'
  }),
  video_describe_close:Object.freeze({
    src:'assets/tracking-interface/video_describe_close-video-describe-close.jpg',
    title:'Remix 视频描述弹层关闭后的回调',
    description:'视频描述弹层关闭时才上报。Finish、右上角关闭和点击空白区分别记录 close_type；编辑过提示词记录 after_edit_close，未改动则为 direct_close。弹层仍打开、普通表单编辑或页面卸载不构成此事件。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  video_describe_edit_click:Object.freeze({
    src:'assets/tracking-interface/video_describe_edit_click-video-describe-edit.jpg',
    title:'Remix 视频生成描述的编辑入口',
    description:'用户点击视频生成节点的描述框或 Edit 入口时，前端先打开描述弹层，再立即上报 video_describe_edit_click；事件不代表弹层已挂载、提示词已修改或视频已生成。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  video_describe_show:Object.freeze({
    src:'assets/tracking-interface/video_describe_show-video-describe-show.jpg',
    title:'Remix 视频描述弹层首次挂载',
    description:'视频描述弹层挂载时自动上报。由视频生成引导打开时 show_type=open_video_show，由编辑入口打开时为 edit_click_show；不是用户完成编辑、关闭弹层或视频生成成功。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  video_download:Object.freeze({
    src:'assets/tracking-interface/video_download-video-result-action.jpg',
    title:'视频结果的下载动作',
    description:'用户从移动端、PC 端或换脸视频结果触发视频下载时上报 video_id 与 ability_name。事件不等待文件下载完成，也不代表文件已保存到设备；图片下载使用其他链路。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  video_full_screen_click:Object.freeze({
    src:'assets/tracking-interface/video_full_screen_click-video-player-control.jpg',
    title:'视频播放器全屏状态切换',
    description:'视频播放器触发全屏状态变化回调时上报，current_state 记录切换后的 full 或 non-full。播放、暂停、静音、自动播放和普通视频曝光不触发该事件。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  video_function_click:Object.freeze({
    src:'assets/tracking-interface/video_function_click-task-video-function-entry.jpg',
    title:'任务结果底部的图转视频入口',
    description:'任务结果存在图片 URL 时，用户点击底部“图转视频”入口立即上报；随后才检查积分或进入付费分支。没有图片 URL、任务未完成、底栏隐藏或禁用时不报，事件不表示视频已开始生成。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  video_generator_click:Object.freeze({
    src:'assets/tracking-interface/video_generator_click-remix-video-generator-toggle.jpg',
    title:'Remix 视频生成开关',
    description:'用户切换 Remix 视频生成开关时上报。开启会先新增视频和音频节点，关闭会先删除节点；事件不代表视频配置已保存或视频已经生成，处理中时开关不可用。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  video_guide_dismissed:Object.freeze({
    src:'assets/tracking-interface/video_guide_dismissed-remix-video-guide-dismiss.jpg',
    title:'视频生成新手引导完成或关闭',
    description:'用户完成或关闭视频生成新手引导时上报，之后约 200ms 才打开视频配置弹层。页面卸载仅停止引导不报，普通配置弹层关闭和视频生成成功也不是此事件。',
    evidenceLabel:'源码组件还原'
  }),
  video_guide_show:Object.freeze({
    src:'assets/tracking-interface/video_guide_show-remix-video-guide-show.jpg',
    title:'视频生成新手引导启动',
    description:'应用加载完成、Remix 首次引导已完成、已有视频生成节点且用户尚未完成该引导时，系统启动引导并上报。它不是所有 Remix 页面曝光，也不证明用户已实际看到每一步。',
    evidenceLabel:'源码组件还原'
  }),
  video_play_click:Object.freeze({
    src:'assets/tracking-interface/video_play_click-video-player-play-pause.jpg',
    title:'视频播放器的手动播放或暂停',
    description:'用户手动点击视频区域或播放/暂停控件时上报视频 ID。自动播放、轮播切换、程序调用播放暂停、静音和全屏不报；当前事件不携带播放状态，不能据此区分播放或暂停。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  video_resolution_click:Object.freeze({
    src:'assets/tracking-interface/video_resolution_click-video-resolution-entry.jpg',
    title:'已完成视频结果的清晰度增强入口',
    description:'用户在已完成视频结果页点击清晰度增强入口、前端请求打开 HD / Full HD 选择层后上报。它只表示进入选择，不代表已选清晰度、通过权益或积分校验，或已创建增强任务。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  video_resolution_submit:Object.freeze({
    src:'assets/tracking-interface/video_resolution_submit-video-resolution-submit.jpg',
    title:'视频清晰度增强确认',
    description:'用户确认 HD 或 Full HD 且权益、积分与并发门禁通过时上报，随后发起增强任务。关闭弹层、仅切换清晰度、门禁拦截均不报；本事件不等于任务或结果成功。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  video_upload_click:Object.freeze({
    src:'assets/tracking-interface/video_upload_click-faceswap-video-upload-entry.jpg',
    title:'自定义视频换脸的 Upload Video 入口',
    description:'用户点击自定义视频换脸 Upload Video 入口时上报。它不表示已选择文件、通过本地校验、开始上传或上传成功；部分新入口会先被 H5 导入或未登录检查拦截。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  video_upload_result:Object.freeze({
    src:'assets/tracking-interface/video_upload_result-pc-animate-video-local-validation.jpg',
    title:'PC Build 动作模仿视频的本地校验结果',
    description:'动作模仿节点选择视频后，本地格式、大小、时长与分辨率校验完成即上报；失败会在错误提示前记录。success 仅表示本地校验通过，不代表文件已上传或任务可生成。',
    evidenceLabel:'源码组件还原'
  }),
  video_upload_success:Object.freeze({
    src:'assets/tracking-interface/video_upload_success-faceswap-video-upload-result.jpg',
    title:'自定义视频上传完成并进入换脸详情',
    description:'上传接口返回视频 ID 后上报成功并打开视频换脸详情；未登录、积分或权限拦截、上传异常也以同一 action 上报失败。它不等于视频换脸生成成功，失败原因可能为动态错误文案。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  view_more_click:Object.freeze({
    src:'assets/tracking-interface/view_more_click-creator-notice-view-more.jpg',
    title:'Creator Notice 模板区的查看更多',
    description:'Creator Notice 模板区仍收起时点击“查看更多”，前端先展开列表再立即上报。模板加载、卡片曝光、普通滚动、点击模板卡及已展开区域都不触发。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  view_result_click:Object.freeze({
    src:'assets/tracking-interface/view_result_click-remix-view-existing-result.jpg',
    title:'Remix 表单的查看生成结果',
    description:'Remix 表单存在已有作品时，点击“查看生成结果”立即上报，随后才标记 result_pop_show 并请求打开结果弹层。它不代表结果弹层已展示；主 Generate 按钮和关闭弹层走其他事件。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  voice_button_click:Object.freeze({
    src:'assets/tracking-interface/voice_button_click-app-video-sound-toggle.jpg',
    title:'App 详情视频样例的声音开关',
    description:'用户点击视频样例的声音按钮切换有声或静音时上报，current_state 记录点击后的声音状态。非视频样例、自动播放、播放暂停及其他代码改写静音状态不触发。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  app_performance:Object.freeze({
    src:'assets/tracking-interface/app_performance-android-app-performance-products-loaded.jpg',
    title:'Android 内容流首次 productsLoaded 的启动性能',
    description:'移动端内容流触发 productsLoaded 后，若 Android 原生桥返回完整启动时间，当前启动周期首次立即上报。普通 H5、PC、桥接或时间戳缺失及后续同次通知都不触发。',
    evidenceLabel:'源码组件还原'
  }),
  atomic_error_entry:Object.freeze({
    src:'assets/tracking-interface/atomic_error_entry-atomic-error-page-mount.jpg',
    title:'原子图片处理错误页挂载',
    description:'图片处理错误页挂载时自动上报，type 表示 Change background、Segment、Enhance resolution、Recolor 等出错能力。普通 Toast、重新选择和返回操作不是该事件触发条件。',
    evidenceLabel:'源码组件还原'
  }),
  chatbot_detail_page_leave:Object.freeze({
    src:'assets/tracking-interface/chatbot_detail_page_leave-chatbot-detail-leave-cleanup.jpg',
    title:'移动端 AI 对话详情离开',
    description:'AI 对话详情组件卸载时上报，停留时长从页面挂载开始累计。关闭、返回或切换对话会触发；仍停留在同一对话、消息收发或 Socket 完成但组件未卸载都不触发。',
    evidenceLabel:'源码组件还原'
  }),
  chatbot_visit:Object.freeze({
    src:'assets/tracking-interface/chatbot_visit-chatbot-detail-visit-mount.jpg',
    title:'移动端 AI 对话详情挂载',
    description:'AI 对话详情组件挂载后立即上报，不等待消息列表、媒体数据或缩略 App 加载成功。入口创建会话失败、组件未挂载时不报；重新挂载会重新计数。',
    evidenceLabel:'源码组件还原'
  }),
  onboarding_performance:Object.freeze({
    src:'assets/tracking-interface/onboarding_performance-onboarding-performance-native-ready.jpg',
    title:'Onboarding 推荐内容首次就绪的原生性能',
    description:'Onboarding 推荐内容首次准备完成且 Android 原生桥能读取完整启动耗时时上报一次。普通浏览器、推荐内容为空、时间戳不完整或同一挂载已上报都不触发。',
    evidenceLabel:'源码组件还原'
  }),
  post_detail_visit:Object.freeze({
    src:'assets/tracking-interface/post_detail_visit-post-detail-data-ready.jpg',
    title:'作品详情数据就绪',
    description:'作品详情取得 data.id 后上报，不是进入路由或点击作品卡片即上报。来自搜索结果时才附带搜索词和方式；移动端源码实际展开 firstView，与契约的 first_view 存在字段差异。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  search_page_visit:Object.freeze({
    src:'assets/tracking-interface/search_page_visit-search-panel-mount.jpg',
    title:'搜索页或顶部搜索推荐面板挂载',
    description:'移动搜索页或 PC 顶部搜索推荐面板挂载时以空业务字段上报，不等待自动聚焦、关键词输入、提交或结果返回。关闭后重新打开并重新挂载会再次上报。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  topic_detail_visit:Object.freeze({
    src:'assets/tracking-interface/topic_detail_visit-topic-detail-visit.jpg',
    title:'话题详情组件挂载',
    description:'打开话题详情后组件挂载即上报，携带来源和话题 ID，不等待详情数据请求完成。加入话题、分享、切换页签和详情请求成功都不是这个事件。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  topic_list_visit:Object.freeze({
    src:'assets/tracking-interface/topic_list_visit-topic-list-visit.jpg',
    title:'话题列表路由展示',
    description:'路径以 /tag 结束的列表组件挂载时上报，来源按分享状态与初始落地页确定。话题详情 /tag/:id、列表接口完成、卡片曝光或点击都不触发。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  appgallery_exposure:Object.freeze({
    src:'assets/tracking-interface/appgallery_exposure-studio-gallery-row.jpg',
    title:'Studio 专题合集曝光',
    description:'专题合集进入可视区域并满足停留资格后，以 2 秒批处理上报本批 gallery_id 与 gallery_type；只是加载合集数据、快速划走或点击合集均不构成该事件。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  banner_exposure:Object.freeze({
    src:'assets/tracking-interface/banner_exposure-banner-qualified.jpg',
    title:'Discover 与 Studio Banner 曝光',
    description:'探索流 Banner 由可视观察器发送，Studio Banner 由轮播停留后的状态检查发送。点击 Banner 使用其他事件，画面展示不等于已经完成点击。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  chatbot_exposure_direct:Object.freeze({
    src:'assets/tracking-interface/chatbot_exposure_direct-chatbot-card.jpg',
    title:'Chatbot 角色卡曝光',
    description:'角色卡达到曝光条件后批量上报；聊天页携带 type=new，探索页携带 type=more，并附带排序和角色标识。Chatbot H5 分支明确抑制这个事件。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  creator_announcement_entryinfo_show:Object.freeze({
    src:'assets/tracking-interface/creator_announcement_entryinfo_show-remix-guide.jpg',
    title:'Creator Notice 的 Remix 引导方式曝光',
    description:'创作者公告中的 Remix 引导模块首次进入视口时上报；仅打开公告页、模块未进入可视区或同一次挂载内再次回滚均不重复发送。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  creator_support_banner_exposure_PC:Object.freeze({
    src:'assets/tracking-interface/creator_support_banner_exposure_PC-source-only.jpg',
    title:'PC 创作者支持横幅挂载',
    description:'源码组件在横幅挂载后上报一次；固定提交的 SHOW_AD_BANNER=false，父级会返回空，因此当前产品页面不会挂载该横幅。',
    evidenceLabel:'源码组件还原'
  }),
  cut_page_show:Object.freeze({
    src:'assets/tracking-interface/cut_page_show-crop-editor.jpg',
    title:'裁剪弹层组件挂载',
    description:'CropView 组件挂载即上报 user_scene，不等待画布加载、裁剪、保存或上传。固定提交未找到生产业务侧打开入口，因此仅作源码组件还原。',
    evidenceLabel:'源码组件还原'
  }),
  dressup_list_page_show:Object.freeze({
    src:'assets/tracking-interface/dressup_list_page_show-dressup-list.jpg',
    title:'换装列表页展示',
    description:'进入换装列表页后立刻上报，标签请求已发起即可发送，不等待列表内容。source 区分 Studio 图标、Banner 或 Discover 广告入口，切换标签不重报。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  emoji_add_text_click:Object.freeze({
    src:'assets/tracking-interface/emoji_add_text_click-text-editor.jpg',
    title:'表情包文字编辑新增文字层',
    description:'在文字编辑页选择字体并成功新增一个文字图层后上报；仅进入编辑页、点击结果页添加文字、编辑已有文字或已达三层上限都不触发。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  emoji_list_page_show:Object.freeze({
    src:'assets/tracking-interface/emoji_list_page_show-emoji-list.jpg',
    title:'AI 表情包列表页展示',
    description:'进入 /emoji 列表页时，标签请求发起后立即上报，不等待标签或列表返回。source 可记录 Studio Banner 或 Emoji 图标入口，切换标签不会重复发送。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  faceswap_tag_popup_show:Object.freeze({
    src:'assets/tracking-interface/faceswap_tag_popup_show-source-only.jpg',
    title:'FaceSwap 标签与排序弹层展示',
    description:'标签弹层从隐藏切换为显示时上报；选择标签、确认或重置不构成此事件。固定提交的唯一宿主已注释，当前页面不能证明该入口可达。',
    evidenceLabel:'源码组件还原'
  }),
  generate_results_show:Object.freeze({
    src:'assets/tracking-interface/generate_results_show-task-result.jpg',
    title:'当前生成结果展示',
    description:'任务或 App 结果页存在当前结果图时上报，切换当前结果图会再次触发。字段来自当前结果，view_source 区分 app_result 与 tasklist。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  like_recommend_exposure:Object.freeze({
    src:'assets/tracking-interface/like_recommend_exposure-empty-like.jpg',
    title:'空收藏页的推荐内容',
    description:'仅当喜欢列表为空且推荐列表至少已有一项时上报 state=1；这不是滚动可视曝光，普通收藏有内容、推荐未返回或推荐为空均不触发。',
    evidenceLabel:'源码组件还原'
  }),
  others_filters_popup_show:Object.freeze({
    src:'assets/tracking-interface/others_filters_popup_show-filter-popup.jpg',
    title:'证件照滤镜或换装相册面板展示',
    description:'证件照结果的滤镜面板或换装结果的相册面板挂载时上报当前 user_scene；手动打开先记录点击事件，自动展开也会发送本事件。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  post_exposure:Object.freeze({
    src:'assets/tracking-interface/post_exposure-post-card-qualified.jpg',
    title:'作品瀑布流卡片曝光',
    description:'PC 或移动端作品卡至少 30% 可见并持续超过 400ms 后，由 2 秒批处理上报；同一 Hook 内按 post_id 去重，点击作品并不是触发条件。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  query_exposure:Object.freeze({
    src:'assets/tracking-interface/query_exposure-search-terms.jpg',
    title:'搜索历史、推荐与热搜词组曝光',
    description:'搜索首页的非空历史、个性化推荐或热搜词组首次展示时，以完整词组数组上报。加载中、空数组和点击单个词搜索都不是该事件。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  rating_popup_show:Object.freeze({
    src:'assets/tracking-interface/rating_popup_show-five-star.jpg',
    title:'五星评分引导弹窗展示',
    description:'FiveRatingGuidePopup 挂载时自动且仅上报一次。仅 A1 App、非 FREE 用户、未评分且距上次展示至少 24 小时才会打开；评分按钮与关闭按钮是其他事件。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  renewal_retention_popup_show:Object.freeze({
    src:'assets/tracking-interface/renewal_retention_popup_show-offer.jpg',
    title:'续订限时优惠弹窗展示',
    description:'RenewSubscribePopup 挂载时上报，scenario 为 home_page 或 image_task_completed。要求过期订阅、有效商品、当日未展示和营销锁，普通定价页并不触发。',
    evidenceLabel:'源码组件还原'
  }),
  retention_popup_show:Object.freeze({
    src:'assets/tracking-interface/retention_popup_show-paid-retention.jpg',
    title:'付费二次挽留弹窗展示',
    description:'PaidRetention、免费试用挽留或续订离开挽留组件挂载时上报；类型可为 pay_retain_low_price、onbord_first 或 renewal_retention，打开定价页本身不触发。',
    evidenceLabel:'源码组件还原'
  }),
  share_friends_popup_jump_external:Object.freeze({
    src:'assets/tracking-interface/share_friends_popup_jump_external-source-only.jpg',
    title:'邀请好友的原生外部分享回调',
    description:'选择外部渠道后，只有原生 shareCallback 返回成功或失败且分享参数含 lanchKey 时上报。固定提交未发现产品入口提供 lanchKey，因此本图仅还原源码链路。',
    evidenceLabel:'源码组件还原'
  }),
  share_popup_show:Object.freeze({
    src:'assets/tracking-interface/share_popup_show-sheet.jpg',
    title:'普通移动端分享抽屉首次展示',
    description:'Share2AppPopup 首次挂载时上报，不需要点击任何渠道。邀请好友的 lanchKey 模式不报；下载、复制、海报与渠道选择分别由其他事件记录。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  share_poster_popup_show:Object.freeze({
    src:'assets/tracking-interface/share_poster_popup_show-poster.jpg',
    title:'可交互分享海报页首次展示',
    description:'GenPosterPopup 首次挂载时上报。个人主页分享抽屉内仅用于生成海报的隐藏组件传 isLoadedOuter=true，会直接跳过；下载与渠道点击另计。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  text_edit_page_show:Object.freeze({
    src:'assets/tracking-interface/text_edit_page_show-editor.jpg',
    title:'图片文字编辑页首次展示',
    description:'TextView 首次挂载后立即上报 source 与 user_scene，不等待画布图片加载。新增文字层、字体选择和编辑完成分别属于其他事件。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  topic_exposure:Object.freeze({
    src:'assets/tracking-interface/topic_exposure-topic-card.jpg',
    title:'话题卡与作品话题曝光',
    description:'话题卡或带话题的作品满足曝光条件后按 exposureList 批量上报；PC 作品详情加载完成且包含话题也会发送。点击话题不是本事件。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  unsubscribe_retain_popup_show:Object.freeze({
    src:'assets/tracking-interface/unsubscribe_retain_popup_show-source-only.jpg',
    title:'取消订阅挽留弹窗展示',
    description:'CancelSubscriptionPopup 挂载后立即上报，type 当前固定为 continuous。正常 Manage billing 设置入口在固定提交中被注释，因此页面为源码组件还原。',
    evidenceLabel:'源码组件还原'
  }),
  video_template_exposure:Object.freeze({
    src:'assets/tracking-interface/video_template_exposure-video-card.jpg',
    title:'Studio 视频模板卡曝光',
    description:'视频模板至少 30% 进入视口并达到停留条件后，按非空 template_id 列表批量上报。点击模板进入创建使用 template_video_select。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  cross_platform_purchase_error:Object.freeze({
    src:'assets/tracking-interface/cross_platform_purchase_error-source-only.jpg',
    title:'跨渠道订阅支付拦截',
    description:'发起订阅时，已有或冻结中订阅的 channelCode 与当前 appOrigin 不一致，前端显示支付不可用提示并尝试上报后终止。静态代码不能证明生产入队成功。',
    evidenceLabel:'源码组件还原'
  }),
  google_play_popup_close_manually:Object.freeze({
    src:'assets/tracking-interface/google_play_popup_close_manually-source-only.jpg',
    title:'Google Play 订阅取消原生回调',
    description:'Android 原生 Google Play 订阅回调返回空 receipt 且 info=cancel 时上报，并关联当前 orderId。一次性积分包取消使用另一事件，画面是原生链路还原。',
    evidenceLabel:'源码组件还原'
  }),
  pay_cancel_recovery:Object.freeze({
    src:'assets/tracking-interface/pay_cancel_recovery-popup.jpg',
    title:'Google Play 取消后的订阅挽回弹窗',
    description:'首次订阅取消后，实验、登录、限频和有效订单条件通过才打开挽回弹窗，组件挂载时上报。TestA 从 Discover 挽回横条再次打开也会再次上报。',
    evidenceLabel:'源码组件还原'
  }),
  pay_cancel_recovery_click:Object.freeze({
    src:'assets/tracking-interface/pay_cancel_recovery_click-continue.jpg',
    title:'取消支付挽回弹窗的继续订阅',
    description:'Google Play 支付取消后，用户在有效挽回订单的弹窗点击 Continue 时，前端先上报再重新发起订阅。仅展示弹窗、关闭横条、订单过期或 loading 不触发。',
    evidenceLabel:'源码组件还原'
  }),
  pricing_premium_subscribe_click:Object.freeze({
    src:'assets/tracking-interface/pricing_premium_subscribe_click-premium.jpg',
    title:'Premium 订阅按钮进入支付',
    description:'移动端普通定价、老用户与各类挽留弹窗的订阅按钮，在调用 paymentSubscription 前上报。只打开套餐页、切换周期或商品信息缺失不触发。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  survey_popup:Object.freeze({
    src:'assets/tracking-interface/survey_popup-payment-cancel.jpg',
    title:'取消支付调研提交',
    description:'用户至少选择一项原因或填写补充文字后点击提交才上报；弹窗展示、勾选、输入未提交或空内容点击提交均不触发。固定提交未找到生产打开入口。',
    evidenceLabel:'源码组件还原'
  }),
  app_detail_page_leave:Object.freeze({
    src:'assets/tracking-interface/app_detail_page_leave-detail.jpg',
    title:'应用详情页离开后的停留时长',
    description:'详情数据已经加载后，返回、关闭、路由离开或切换到另一 App 会在组件 cleanup 中上报 app_id、start_time 和 active_time；进入详情或仍停留时不触发。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  chatbot_bond_journey_click_entry:Object.freeze({
    src:'assets/tracking-interface/chatbot_bond_journey_click_entry-progress.jpg',
    title:'Chatbot 亲密度进度入口点击',
    description:'聊天详情存在 chatbotId 与亲密度 status 时，点击阶段进度卡会先上报当前 chatbot_id 与 bond_level，再打开亲密度路线图。自动曝光另有事件。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  chatbot_bond_journey_click_upgrade_pop:Object.freeze({
    src:'assets/tracking-interface/chatbot_bond_journey_click_upgrade_pop-cta.jpg',
    title:'亲密度升级弹窗的聊天 CTA',
    description:'收到亲密度升级状态且 chatbotId 存在时，用户点击升级弹窗中的“快来聊聊”才上报。仅展示弹窗、点击遮罩或返回关闭都不触发。',
    evidenceLabel:'源码组件还原'
  }),
  chatbot_bond_journey_expose_entry:Object.freeze({
    src:'assets/tracking-interface/chatbot_bond_journey_expose_entry-progress.jpg',
    title:'Chatbot 亲密度进度组件首次展示',
    description:'亲密度状态和 chatbotId 就绪后，进度组件首次 effect 执行时上报一次。这是数据就绪后的组件挂载，不是 IntersectionObserver 可视区曝光。',
    evidenceLabel:'源码组件还原'
  }),
  chatbot_bond_journey_expose_upgrade_pop:Object.freeze({
    src:'assets/tracking-interface/chatbot_bond_journey_expose_upgrade_pop-modal.jpg',
    title:'Chatbot 亲密度升级弹窗首次展示',
    description:'levelUpEvent 存在、当前等级尚未在该组件实例记录且 chatbotId 存在时上报。相同等级重渲染不重复，升级 CTA 点击使用另一个事件。',
    evidenceLabel:'源码组件还原'
  }),
  chatbot_bond_journey_send_intro:Object.freeze({
    src:'assets/tracking-interface/chatbot_bond_journey_send_intro-intro.jpg',
    title:'亲密度升级开场白出现',
    description:'升级弹窗关闭后，亲密度开场白已经进入会话 history、会话和当前状态均就绪时上报；初次进入详情、开场白尚未到达或相同等级重复关闭都不触发。',
    evidenceLabel:'源码组件还原'
  }),
  chatbot_bulb_toggle:Object.freeze({
    src:'assets/tracking-interface/chatbot_bulb_toggle-quick-reply.jpg',
    title:'Chatbot 快捷回复灯泡开关',
    description:'最新可见消息为成功 AI 文本且解析出 suggestions 时，点击输入框右侧灯泡切换快捷回复展示并上报。初始为开启，首次点击通常记录 operation=close。',
    evidenceLabel:'源码组件还原'
  }),
  chatbot_custom_avatar_page_show:Object.freeze({
    src:'assets/tracking-interface/chatbot_custom_avatar_page_show-editor.jpg',
    title:'Chatbot 头像编辑页展示',
    description:'头像编辑组件挂载时上报，type 区分 user_avatar 与 chatbot_avatar，并携带 chatbot_id；保存成功、上传图片和历史列表加载均不是这个展示事件。',
    evidenceLabel:'源码组件还原'
  }),
  chatbot_custom_avatar_save:Object.freeze({
    src:'assets/tracking-interface/chatbot_custom_avatar_save-success.jpg',
    title:'Chatbot 头像或备注名保存成功',
    description:'资料更新请求成功、显示成功提示后上报并关闭编辑器。字段校验失败、保存中重复点击或接口异常都不触发。',
    evidenceLabel:'源码组件还原'
  }),
  chatbot_custom_bg_auto_click:Object.freeze({
    src:'assets/tracking-interface/chatbot_custom_bg_auto_click-toggle.jpg',
    title:'Chatbot 背景自动更新开关',
    description:'点击自动更新开关后立即按切换后的 is_auto 值上报，随后才调用更新接口。接口失败会回滚 UI，但不会撤销已发送事件。',
    evidenceLabel:'源码组件还原'
  }),
  chatbot_custom_bg_page_show:Object.freeze({
    src:'assets/tracking-interface/chatbot_custom_bg_page_show-editor.jpg',
    title:'Chatbot 背景编辑页展示',
    description:'背景编辑器挂载时上报 chatbot_id，不等待图片历史加载、选择背景或保存成功。',
    evidenceLabel:'源码组件还原'
  }),
  chatbot_custom_bg_set:Object.freeze({
    src:'assets/tracking-interface/chatbot_custom_bg_set-success.jpg',
    title:'Chatbot 背景设置成功',
    description:'背景更新成功回调后上报；编辑器入口带 location=custom_bg_page。请求失败、仅选择图片和页面展示都不触发。',
    evidenceLabel:'源码组件还原'
  }),
  chatbot_imagine_character_click:Object.freeze({
    src:'assets/tracking-interface/chatbot_imagine_character_click-mode.jpg',
    title:'Chatbot Imagine 角色模式选择',
    description:'用户在 Imagine 面板选择 Character 时立即上报，不需要用户头像。进入输入模式、发送提示词和生成完成均是后续流程。',
    evidenceLabel:'源码组件还原'
  }),
  chatbot_imagine_click:Object.freeze({
    src:'assets/tracking-interface/chatbot_imagine_click-entry.jpg',
    title:'Chatbot Imagine 入口点击',
    description:'有会话时点击 Imagine 先上报，再打开图片生成模式面板。该事件不代表已选择模式、上传头像或生成图片。',
    evidenceLabel:'源码组件还原'
  }),
  chatbot_imagine_couple_click:Object.freeze({
    src:'assets/tracking-interface/chatbot_imagine_couple_click-mode.jpg',
    title:'Chatbot Imagine 合照模式选择',
    description:'选择 Couple 模式时立即上报，之后才检查或请求用户头像。取消上传或后续生成失败不会撤销这次模式点击。',
    evidenceLabel:'源码组件还原'
  }),
  chatbot_imagine_me_click:Object.freeze({
    src:'assets/tracking-interface/chatbot_imagine_me_click-mode.jpg',
    title:'Chatbot Imagine 自拍模式选择',
    description:'选择 Me 模式时立即上报，随后再确认用户头像和打开输入模式；取消上传、模式未打开或生成失败时也可能已经记录。',
    evidenceLabel:'源码组件还原'
  }),
  chatbot_message_receive:Object.freeze({
    src:'assets/tracking-interface/chatbot_message_receive-result.jpg',
    title:'Chatbot 消息接收结果',
    description:'Socket 回包处理完成后上报等待时长、成功状态及是否来自继续对话；消息仍在生成中或仅显示占位气泡时不触发。',
    evidenceLabel:'源码组件还原'
  }),
  chatbot_message_send:Object.freeze({
    src:'assets/tracking-interface/chatbot_message_send-ack.jpg',
    title:'Chatbot 文字消息发送结果',
    description:'文本消息 Socket ACK 返回后上报发送成功状态、来源与当前亲密度等级；空输入、无会话或未收到 ACK 不触发。图片模式存在独立发送分支。',
    evidenceLabel:'源码组件还原'
  }),
  chatbot_message_send_goon:Object.freeze({
    src:'assets/tracking-interface/chatbot_message_send_goon-ack.jpg',
    title:'Chatbot 继续对话发送结果',
    description:'带 isGoOn 的继续对话消息在 Socket ACK 返回后额外上报。普通文本发送不产生该事件。',
    evidenceLabel:'源码组件还原'
  }),
  chatbot_quick_reply_click:Object.freeze({
    src:'assets/tracking-interface/chatbot_quick_reply_click-chip.jpg',
    title:'Chatbot 快捷回复点击',
    description:'点击未禁用的快捷回复后先上报，再调用 onSelect 发送文本。快捷回复展示和空选项列表不属于此事件。',
    evidenceLabel:'源码组件还原'
  }),
  chatbot_quick_reply_expose:Object.freeze({
    src:'assets/tracking-interface/chatbot_quick_reply_expose-chips.jpg',
    title:'Chatbot 快捷回复选项展示',
    description:'非空快捷回复选项首次 effect 时上报；选项列表变化会重置标记，点击选项使用另一个事件，空列表不触发。',
    evidenceLabel:'源码组件还原'
  }),
  chatbot_send_photo_click:Object.freeze({
    src:'assets/tracking-interface/chatbot_send_photo_click-entry.jpg',
    title:'给 Chatbot 发照片入口',
    description:'点击入口后立即上报，等待键盘关闭后才打开照片合集。该事件不等待合集、App 数据或生图结果。',
    evidenceLabel:'源码组件还原'
  }),
  chatbot_send_photo_generate:Object.freeze({
    src:'assets/tracking-interface/chatbot_send_photo_generate-app-ready.jpg',
    title:'Chatbot 照片生图准备完成',
    description:'选择照片合集 App 并成功加载 App 数据后上报，随后才调用 generateByURL。入口点击、加载失败或最终图片生成成功不是这个事件。',
    evidenceLabel:'源码组件还原'
  }),
  chatbot_snap_character_click:Object.freeze({
    src:'assets/tracking-interface/chatbot_snap_character_click-mode.jpg',
    title:'Chatbot 快照角色模式选择',
    description:'在快照面板选择 Character 后上报，随后使用 Chatbot 头像生成上下文图。打开快照面板和生成完成分别使用其他事件。',
    evidenceLabel:'源码组件还原'
  }),
  chatbot_snap_click:Object.freeze({
    src:'assets/tracking-interface/chatbot_snap_click-entry.jpg',
    title:'Chatbot 快照入口点击',
    description:'有会话时点击快照入口先上报，再打开快照类型面板。具体选择角色或合照、上传头像和生成是后续分支。',
    evidenceLabel:'源码组件还原'
  }),
  chatbot_snap_couple_click:Object.freeze({
    src:'assets/tracking-interface/chatbot_snap_couple_click-mode.jpg',
    title:'Chatbot 快照合照模式选择',
    description:'在快照面板选择 Couple 后上报，事件发生在确认用户头像之前；取消上传或后续生成失败不会撤销模式选择。',
    evidenceLabel:'源码组件还原'
  }),
  chatbot_topic_card_click:Object.freeze({
    src:'assets/tracking-interface/chatbot_topic_card_click-card.jpg',
    title:'Chatbot 话题卡点击',
    description:'点击话题卡先上报，再发送该卡片文本，不等待消息发送成功。卡片展示由 topic_card_expose 记录。',
    evidenceLabel:'源码组件还原'
  }),
  chatbot_topic_card_expose:Object.freeze({
    src:'assets/tracking-interface/chatbot_topic_card_expose-cards.jpg',
    title:'Chatbot 话题卡列表展示',
    description:'非空话题卡列表首次 effect 时上报一次，不依赖滚动可视比例。同一组件实例后续重渲染不重复，点击卡片使用另一个事件。',
    evidenceLabel:'源码组件还原'
  }),
  chatbot_view_photo_click:Object.freeze({
    src:'assets/tracking-interface/chatbot_view_photo_click-thumbnail.jpg',
    title:'Chatbot 图片消息点击',
    description:'点击远端图片消息缩略图后上报并开始图片生成链路。本地快速缩略图使用 chatbot_send_photo_generate；没有图片内容或生成任务不成立时不触发。',
    evidenceLabel:'源码组件还原'
  }),
  chatbot_view_result_download:Object.freeze({
    src:'assets/tracking-interface/chatbot_view_result_download-result.jpg',
    title:'Chatbot 生成结果下载',
    description:'执行 Chatbot 结果下载动作时上报，携带聊天位置和当前亲密度等级；查看图片、生成结果或分享均使用其他事件。',
    evidenceLabel:'源码组件还原'
  }),
  custom_chatbot_click:Object.freeze({
    src:'assets/tracking-interface/custom_chatbot_click-entry.jpg',
    title:'自定义 Chatbot 入口点击',
    description:'点击 Chat 入口先上报，再处理实验分组与会话绑定查询。loading 时抑制重复点击，事件不代表表单已打开或人设已创建。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  custom_chatbot_finish:Object.freeze({
    src:'assets/tracking-interface/custom_chatbot_finish-result.jpg',
    title:'自定义 Chatbot 创建流程完成',
    description:'创建流完成后按成功或失败上报；表单提交点击使用 start_chat_click，网络错误、Abort 与创建回调决定最终 is_success。',
    evidenceLabel:'源码组件还原'
  }),
  custom_chatbot_send_intro:Object.freeze({
    src:'assets/tracking-interface/custom_chatbot_send_intro-intro.jpg',
    title:'自定义 Chatbot 介绍数据到达',
    description:'fromCreation 场景下，新会话的 introduction 字段有值时上报一次。普通旧会话、空 introduction 和重复渲染不触发。',
    evidenceLabel:'源码组件还原'
  }),
  custom_chatbot_send_opener:Object.freeze({
    src:'assets/tracking-interface/custom_chatbot_send_opener-opener.jpg',
    title:'自定义 Chatbot 首条开场消息到达',
    description:'fromCreation 场景下，新会话 history 出现机器人文本消息时上报一次；只有 introduction 字段而无文本开场白不触发。',
    evidenceLabel:'源码组件还原'
  }),
  custom_chatbot_start_chat_click:Object.freeze({
    src:'assets/tracking-interface/custom_chatbot_start_chat_click-form.jpg',
    title:'自定义 Chatbot 开始聊天提交',
    description:'表单校验通过后、创建请求前上报人物设定字段。校验失败或正在提交时重复点击不触发，后续创建失败由 custom_chatbot_finish 记录。',
    evidenceLabel:'源码组件还原'
  }),
  addtodesktop_load_success:Object.freeze({
    src:'assets/tracking-interface/addtodesktop_load_success-pwa-ready.jpg',
    title:'PWA 容器首次可用',
    description:'移动端 PWA/WebView 初始化时，前端根据本机的 LOAD_PWA_APP 记录 isFirstTime 并上报。安装按钮点击不是这个事件。',
    evidenceLabel:'源码组件还原'
  }),
  app_edit_click:Object.freeze({
    src:'assets/tracking-interface/app_edit_click-personal-app-card.jpg',
    title:'PC 个人应用卡的 Edit',
    description:'在个人 Profile 的应用卡点击 Edit 后，前端跳转 Build 链路并记录短 ID 与长 ID；登录提示不会阻止这条调用继续执行。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  app_publish_click:Object.freeze({
    src:'assets/tracking-interface/app_publish_click-build-header.jpg',
    title:'PC Build 页 Publish',
    description:'自动保存未离线、未加载时，点击 Build 页头部 Publish 先上报，再校验 fork 修改状态、作品数量并尝试打开发布弹层。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  app_tab:Object.freeze({
    src:'assets/tracking-interface/app_tab-legacy-tab.jpg',
    title:'Legacy App 分类 Tab',
    description:'带 legacy ButtonClass 的 App 分类切换由全局点击代理记录 tab 与 currentTab；这是源码事件代理定位，不能据此证明当前入口仍挂载。',
    evidenceLabel:'源码组件还原'
  }),
  autologin:Object.freeze({
    src:'assets/tracking-interface/autologin-account-ready.jpg',
    title:'自动登录成功处理',
    description:'账号自动登录链路识别到登录方式后记录 method 与当前位置。打开登录页、手动输入或未成功恢复会话都不属于该事件。',
    evidenceLabel:'源码组件还原'
  }),
  back_to_top:Object.freeze({
    src:'assets/tracking-interface/back_to_top-scroll-top.jpg',
    title:'Legacy 回到顶部按钮',
    description:'全局点击代理接收到对应的 Back-to-top 按钮类别时上报；滚动到顶部、页面首次加载或自动滚动不触发。',
    evidenceLabel:'源码组件还原'
  }),
  banner_click_startcreate:Object.freeze({
    src:'assets/tracking-interface/banner_click_startcreate-video-banner.jpg',
    title:'PC 视频横幅 Start creating',
    description:'点击 GlobalNav 的视频横幅 Start creating 时先上报，再按登录状态直接进入或在登录成功后进入 /build。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  banner_click_viewdetails:Object.freeze({
    src:'assets/tracking-interface/banner_click_viewdetails-video-banner.jpg',
    title:'PC 视频横幅 View details',
    description:'点击同一视频横幅的 View details 时立即上报；当前处理函数没有后续跳转逻辑，因此不能表述为详情页已打开。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  big_image:Object.freeze({
    src:'assets/tracking-interface/big_image-task-preview.jpg',
    title:'PC 任务成功结果查看大图',
    description:'成功任务的图片卡被点击且 task_preview 尚未打开时上报，再打开预览；排队、进行中、失败或已存在预览均不触发。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  build_click:Object.freeze({
    src:'assets/tracking-interface/build_click-global-create.jpg',
    title:'PC 顶部 Build/Create',
    description:'点击 GlobalNav 的 Build 入口时记录当前 is_vip，再初始化 Build 弹层数据；打开后的具体 App、生成与发布属于后续动作。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  change:Object.freeze({
    src:'assets/tracking-interface/change-legacy-control.jpg',
    title:'Legacy Change 控件',
    description:'全局 ButtonClass 事件代理命中 Change 控件时直接上报空 Properties。固定提交中无法从静态代码证明该控件的当前产品入口。',
    evidenceLabel:'源码组件还原'
  }),
  creator_bonus_click:Object.freeze({
    src:'assets/tracking-interface/creator_bonus_click-legacy-entry.jpg',
    title:'Creator Bonus 入口',
    description:'全局 ButtonClass 事件代理命中 Creator bonus 入口时上报；静态代码未提供可验证的当前页面挂载路径。',
    evidenceLabel:'源码组件还原'
  }),
  creator_support_banner_click_PC:Object.freeze({
    src:'assets/tracking-interface/creator_support_banner_click_PC-help-banner.jpg',
    title:'PC Creator Support Banner',
    description:'点击 Creator Help Banner 的 Learn more 时先上报，再按地区打开对应 Feishu 文档。父级展示开关未在本次源码定位中验证。',
    evidenceLabel:'源码组件还原'
  }),
  fork_app:Object.freeze({
    src:'assets/tracking-interface/fork_app-template-fork.jpg',
    title:'应用 Fork 请求',
    description:'调用 App fork 服务前记录来源 App、会员状态与 origin；请求失败、登录门禁或副本创建结果不会撤销已发送的点击事件。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  h5_popup_click:Object.freeze({
    src:'assets/tracking-interface/h5_popup_click-webview-actions.jpg',
    title:'H5/WebView 弹层操作',
    description:'Chatbot 或 H5Import 弹层中点击关闭、下载或登录拦截操作时上报 type 与 button_name；仅展示弹层使用 h5_popup_show。',
    evidenceLabel:'源码组件还原'
  }),
  h5_popup_show:Object.freeze({
    src:'assets/tracking-interface/h5_popup_show-webview-mount.jpg',
    title:'H5/WebView 弹层展示',
    description:'Chatbot H5 或 H5Import 对应弹层挂载时上报 type；不是滚动可视曝光，也不需要用户点击。',
    evidenceLabel:'源码组件还原'
  }),
  image_exposure:Object.freeze({
    src:'assets/tracking-interface/image_exposure-gallery-qualified.jpg',
    title:'旧图库图片可见曝光',
    description:'旧 ExposureManager 收集合格图片到批次列表后上报 exposureList；单张图片点击、列表数据加载或未达到可见条件都不等同于此事件。',
    evidenceLabel:'源码组件还原'
  }),
  image_input_result_switch:Object.freeze({
    src:'assets/tracking-interface/image_input_result_switch-gallery-mode.jpg',
    title:'PC Gallery 输入/结果模式切换',
    description:'在 Gallery 中通过点击或快捷键切换 Input 与 Result 时，上报切换后的 mode 与 switch_method；重复停留在同一模式不触发。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  image_publish:Object.freeze({
    src:'assets/tracking-interface/image_publish-work-request.jpg',
    title:'图片发布请求',
    description:'工作流调用图片发布服务时记录 image_id、app_id 与 origin。该事件描述请求发起，不表示内容已经公开或发布成功。',
    evidenceLabel:'源码组件还原'
  }),
  install_now:Object.freeze({
    src:'assets/tracking-interface/install_now-pwa-install.jpg',
    title:'PWA Install now 点击',
    description:'全局点击代理接收到 Install now 按钮类别时上报。浏览器是否出现安装提示、用户是否确认安装均不是该事件的前置条件。',
    evidenceLabel:'源码组件还原'
  }),
  landing_build_click:Object.freeze({
    src:'assets/tracking-interface/landing_build_click-pc-landing.jpg',
    title:'PC Landing 页 Build CTA',
    description:'在 PC Landing 页面点击 Build 行动按钮时上报，再进入后续 Build 路径；登录、App 选择和生成结果均不包含在内。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  leave:Object.freeze({
    src:'assets/tracking-interface/leave-page-lifecycle.jpg',
    title:'页面离开生命周期',
    description:'页面 hidden 或 beforeunload 时结算从最近一次可见开始的 active_time；beforeunload 使用 sendBeacon，普通 hidden 停留不足 1 秒不发送。',
    evidenceLabel:'源码组件还原'
  }),
  new_feature_confirm:Object.freeze({
    src:'assets/tracking-interface/new_feature_confirm-build-upgrade.jpg',
    title:'Build 新功能确认',
    description:'全局点击代理命中 build_upgrade_modal 的确认动作时上报。该图仅还原源码中声明的操作类别，非生产弹层验证。',
    evidenceLabel:'源码组件还原'
  }),
  optimize:Object.freeze({
    src:'assets/tracking-interface/optimize-image-request.jpg',
    title:'图片精绘请求',
    description:'图片精绘调用链发起时记录源图、目标图片、来源和 App；请求失败或 Socket 没有返回成功结果时不应误称为精绘成功。',
    evidenceLabel:'源码组件还原'
  }),
  optimize_success:Object.freeze({
    src:'assets/tracking-interface/optimize_success-socket-result.jpg',
    title:'图片精绘 Socket 成功结果',
    description:'Build 或任务 Socket 收到有效精绘结果 ID 时上报 sourceId 与 imgId；缺少 sourceId、失败回包或图片仍在请求中不触发。',
    evidenceLabel:'源码组件还原'
  }),
  pic_like:Object.freeze({
    src:'assets/tracking-interface/pic_like-gallery-like.jpg',
    title:'美图点赞',
    description:'对美图执行 addition=true 的点赞请求前上报 pictureid；取消点赞或请求最终是否成功都不属于这条点击事件。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  pic_visit:Object.freeze({
    src:'assets/tracking-interface/pic_visit-gallery-recommend.jpg',
    title:'美图相关推荐请求',
    description:'请求某张美图的推荐列表时上报当前图片与来源，默认 origin=share；这不是单纯打开图片详情后的可视曝光。',
    evidenceLabel:'源码组件还原'
  }),
  profile_enter:Object.freeze({
    src:'assets/tracking-interface/profile_enter-pc-profile.jpg',
    title:'PC Profile 页面进入',
    description:'AiPersonalPage 挂载且 userId 就绪时上报；个人应用卡加载、滚动、编辑或取消发布都不是此页面进入事件。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  rank_visit:Object.freeze({
    src:'assets/tracking-interface/rank_visit-pc-ranking.jpg',
    title:'PC Ranking 页面进入',
    description:'RankingLandPage 首次 effect 根据保存的 rankLocation 上报，并在代码中重置来源；榜单脚本加载成功不是该事件的必要条件。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  rate_popup_click_gotogoogle:Object.freeze({
    src:'assets/tracking-interface/rate_popup_click_gotogoogle-five-star.jpg',
    title:'评分弹层前往 Google Play',
    description:'评分为 5 星时点击提交按钮，前端尝试打开 Google Play 后上报；选星、低于 5 星提交或关闭使用其他分支。',
    evidenceLabel:'源码组件还原'
  }),
  rate_popup_click_submit:Object.freeze({
    src:'assets/tracking-interface/rate_popup_click_submit-feedback.jpg',
    title:'评分弹层提交反馈',
    description:'评分为 1–4 星时点击提交会显示反馈成功提示并携带 rate 上报；0 星时按钮禁用，5 星走 Google Play 分支。',
    evidenceLabel:'源码组件还原'
  }),
  rate_popup_close:Object.freeze({
    src:'assets/tracking-interface/rate_popup_close-dismiss.jpg',
    title:'评分弹层关闭',
    description:'点击 RatingGuidePopup 右上关闭图标时上报后 popStack；点星、提交按钮或外部程序关闭不等同于该显式关闭事件。',
    evidenceLabel:'源码组件还原'
  }),
  referral_link_success:Object.freeze({
    src:'assets/tracking-interface/referral_link_success-result.jpg',
    title:'Referral 链接结果',
    description:'Referral 链路的成功状态由 legacy 数据仓库逻辑记录。固定提交缺少可还原的完整产品入口，画面只标注结果边界。',
    evidenceLabel:'源码组件还原'
  }),
  save_app:Object.freeze({
    src:'assets/tracking-interface/save_app-app-save.jpg',
    title:'保存应用请求',
    description:'调用 App 收藏服务时记录短 ID、长 ID 与 trace_info；只是显示收藏按钮、取消收藏或请求失败不表示已保存。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  sortmode_switch:Object.freeze({
    src:'assets/tracking-interface/sortmode_switch-gallery-sort.jpg',
    title:'Legacy 排序方式切换',
    description:'全局 ButtonClass 事件代理接收到排序控件时记录 sort；当前可见排序 UI以源码组件还原呈现，非生产埋点验证。',
    evidenceLabel:'源码组件还原'
  }),
  tasklist_click:Object.freeze({
    src:'assets/tracking-interface/tasklist_click-task-panel.jpg',
    title:'Legacy 任务列表操作',
    description:'全局 ButtonClass 事件代理接收到任务列表按钮时记录 state；任务卡展示、后台状态变化和抽屉关闭分别是其他行为。',
    evidenceLabel:'源码组件还原'
  }),
  unpublish_click:Object.freeze({
    src:'assets/tracking-interface/unpublish_click-personal-app-card.jpg',
    title:'PC 个人应用取消发布发起',
    description:'在 Profile 应用卡点击 Unpublish 后打开确认弹层，随后立即上报；这不表示用户已确认，也不表示取消发布接口成功。',
    evidenceLabel:'真实界面 + 源码说明'
  }),
  unpublish_success:Object.freeze({
    src:'assets/tracking-interface/unpublish_success-personal-app-result.jpg',
    title:'PC 个人应用取消发布成功',
    description:'取消发布接口返回 code=0 后，前端更新卡片状态、刷新计数并显示成功提示时上报；确认前、非零返回或异常不触发。',
    evidenceLabel:'真实界面 + 源码说明'
  })
});

function renderInterfaceEvidence(event){
  const baseEvidence=INTERFACE_EVIDENCE_BY_ACTION[event?.name];
  if(!baseEvidence)return '';
  const assetOverride=typeof InterfaceEvidenceHdAssets==='object'?InterfaceEvidenceHdAssets[event.name]:null;
  const evidence=assetOverride?{...baseEvidence,...assetOverride}:baseEvidence;
  const previewSrc=evidence.previewSrc||evidence.src;
  const fullSrc=evidence.fullSrc||evidence.src;
  return `<section class="drawer-section interface-evidence-section"><div class="section-line interface-evidence-head"><h3>界面定位</h3><span>${escapeFieldHtml(evidence.evidenceLabel)}</span></div><button class="interface-evidence-preview" type="button" data-aggregation-image="${escapeFieldHtml(fullSrc)}" data-aggregation-preview="${escapeFieldHtml(previewSrc)}" data-aggregation-title="${escapeFieldHtml(evidence.title)}" data-aggregation-description="${escapeFieldHtml(evidence.description)}" aria-label="查看 ${escapeFieldHtml(event.name)} 界面定位大图"><img src="${escapeFieldHtml(previewSrc)}" alt="${escapeFieldHtml(evidence.title)}" loading="lazy" decoding="async" /><span class="interface-evidence-caption"><strong>点击查看大图</strong><small>页面定位示例，不代表生产上报验证</small></span></button></section>`;
}

function renderAggregationGuide(event){
  const guide=event?.aggregationGuide;
  if(!guide)return '';
  const imageCount=(guide.sections||[]).reduce((sum,section)=>sum+(section.images||[]).length,0);
  const sections=(guide.sections||[]).map(section=>`<section class="aggregation-guide-section"><div class="aggregation-guide-section-head"><h4>${escapeFieldHtml(section.title)}</h4><p>${escapeFieldHtml(section.description)}</p></div><div class="aggregation-image-grid">${(section.images||[]).map(item=>`<button class="aggregation-image" type="button" data-aggregation-image="${escapeFieldHtml(item.src)}" data-aggregation-title="${escapeFieldHtml(item.title)}" data-aggregation-description="${escapeFieldHtml(item.description||'')}"><img src="${escapeFieldHtml(item.src)}" alt="${escapeFieldHtml(item.title)}" loading="lazy" /><span><strong>${escapeFieldHtml(item.title)}</strong>${item.description?`<small>${escapeFieldHtml(item.description)}</small>`:''}</span></button>`).join('')}</div></section>`).join('');
  return `<details class="drawer-section drawer-disclosure aggregation-guide" open><summary><span>火山聚合使用说明</span><small>${escapeFieldHtml(guide.scope)} · ${imageCount} 张示例图</small></summary><div class="drawer-disclosure-body"><div class="aggregation-guide-meta"><span class="aggregation-source-badge">火山聚合资产</span><span>${guide.userProperties?'支持用户属性':'不支持用户属性'}</span></div><p class="aggregation-caution">${escapeFieldHtml(guide.caution)}</p>${sections}<div class="aggregation-source-note">来源为用户提供的《火山聚合类埋点使用说明》，仅表示口径文档已收录，不代表前端接入或生产数据已验证。</div></div></details>`;
}

function getAggregationLightbox(){
  let lightbox=document.getElementById('aggregationLightbox');
  if(lightbox)return lightbox;
  lightbox=document.createElement('div');
  lightbox.id='aggregationLightbox';
  lightbox.className='aggregation-lightbox';
  lightbox.hidden=true;
  lightbox.innerHTML='<div class="aggregation-lightbox-panel" role="dialog" aria-modal="true" aria-labelledby="aggregationLightboxTitle"><div class="aggregation-lightbox-head"><div><strong id="aggregationLightboxTitle"></strong><small id="aggregationLightboxDescription"></small></div><button type="button" data-aggregation-close aria-label="关闭大图">×</button></div><div class="aggregation-lightbox-stage"><button type="button" data-aggregation-prev aria-label="上一张">‹</button><img alt="" /><button type="button" data-aggregation-next aria-label="下一张">›</button></div><div class="aggregation-lightbox-foot"><span data-aggregation-position></span><small>点击图片外区域或按 Esc 关闭</small></div></div>';
  document.body.appendChild(lightbox);
  return lightbox;
}

function bindAggregationGuide(){
  const buttons=[...document.querySelectorAll('[data-aggregation-image]')];
  if(!buttons.length)return;
  const lightbox=getAggregationLightbox();
  let activeIndex=0;
  const renderImage=()=>{
    const button=buttons[activeIndex];
    const image=lightbox.querySelector('img');
    image.src=button.dataset.aggregationImage;
    image.alt=button.dataset.aggregationTitle;
    image.decoding='async';
    lightbox.querySelector('#aggregationLightboxTitle').textContent=button.dataset.aggregationTitle;
    lightbox.querySelector('#aggregationLightboxDescription').textContent=button.dataset.aggregationDescription;
    lightbox.querySelector('[data-aggregation-position]').textContent=`${activeIndex+1} / ${buttons.length}`;
    lightbox.querySelector('[data-aggregation-prev]').disabled=activeIndex===0;
    lightbox.querySelector('[data-aggregation-next]').disabled=activeIndex===buttons.length-1;
  };
  const close=()=>{lightbox.hidden=true;document.body.classList.remove('aggregation-preview-open');buttons[activeIndex]?.focus({preventScroll:true});};
  buttons.forEach((button,index)=>button.onclick=()=>{activeIndex=index;renderImage();lightbox.hidden=false;document.body.classList.add('aggregation-preview-open');lightbox.querySelector('[data-aggregation-close]').focus();});
  lightbox.querySelector('[data-aggregation-close]').onclick=close;
  lightbox.querySelector('[data-aggregation-prev]').onclick=()=>{if(activeIndex>0){activeIndex-=1;renderImage();}};
  lightbox.querySelector('[data-aggregation-next]').onclick=()=>{if(activeIndex<buttons.length-1){activeIndex+=1;renderImage();}};
  lightbox.onclick=event=>{if(event.target===lightbox)close();};
  lightbox.onkeydown=event=>{
    if(event.key==='Escape')close();
    if(event.key==='ArrowLeft'&&activeIndex>0){activeIndex-=1;renderImage();}
    if(event.key==='ArrowRight'&&activeIndex<buttons.length-1){activeIndex+=1;renderImage();}
  };
}

openDrawerV2=function openDrawerWithFieldGroups(event){
  if(!event)return;
  const drawer=document.getElementById('detailDrawer');
  const wasOpen=drawer.classList.contains('show');
  if(!wasOpen&&document.activeElement instanceof HTMLElement)lastDrawerTrigger=document.activeElement;
  setSelectedEventRow(event.name);
  const classification=getCatalogViewClassification(event);
  const assetClassification=getCatalogClassification(event);
  const labels=getCatalogViewLabels();
  const reportingLogic=getEventReportingLogic(event,assetClassification);
  const sameModule=events.filter(item=>{
    if(item===event)return false;
    const candidate=getCatalogViewClassification(item);
    return candidate.businessDomain===classification.businessDomain&&candidate.businessModule===classification.businessModule;
  });
  const sameDomain=events.filter(item=>{
    if(item===event||sameModule.includes(item))return false;
    return getCatalogViewClassification(item).businessDomain===classification.businessDomain;
  });
  const similar=[...sameModule,...sameDomain].slice(0,3);
  const wireContractCount=getEventWireContracts(event).length;
  const fieldContractNotice=wireContractCount>1?`<p class="field-contract-variant-note">以下为 ${wireContractCount} 套上报通道的最终字段并集，便于资产检索；单次上报的 key、必传与可空状态以“前端代码来源”中的独立 Wire Contract 为准。</p>`:'';
  document.getElementById('drawerAction').textContent=event.name;
  document.getElementById('drawerReportingLogic').textContent=reportingLogic.text;
  document.getElementById('drawerContent').innerHTML=`${renderInterfaceEvidence(event)}<section class="drawer-section field-explorer-section"><div class="section-line field-explorer-head"><h3>事件独有字段</h3><label class="field-search">⌕<input id="drawerFieldSearch" type="search" placeholder="搜索字段" aria-label="搜索事件独有字段" /></label></div>${fieldContractNotice}${renderFieldExplorer(event)}</section><div class="drawer-secondary">${renderCommonContractReference(event)}${renderAggregationGuide(event)}<details class="drawer-section drawer-disclosure reporting-source-section"${reportingLogic.needsReview?' open':''}><summary><span>上报规则来源</span><small>${escapeFieldHtml(reportingLogic.behaviorLabel)}</small></summary><div class="drawer-disclosure-body"><p>${escapeFieldHtml(reportingLogic.evidenceText)}</p></div></details>${renderCodeEvidence(event)}${renderGovernanceAssessment(event)}${renderPayloadExample(event)}<details class="drawer-section drawer-disclosure"><summary><span>相似事件</span><small>${escapeFieldHtml(labels.similarLabel)}</small></summary><div class="drawer-disclosure-body"><div class="similar-list">${similar.map(item=>{const itemClassification=getCatalogViewClassification(item);const itemLogic=getEventReportingLogic(item,getCatalogClassification(item));const itemCollaboration=(itemClassification.collaborationTags||[]).length?` · 协作：${itemClassification.collaborationTags.join('、')}`:'';return `<button data-similar="${escapeFieldHtml(item.name)}"><strong class="similar-action-name">${escapeFieldHtml(item.name)}</strong><span class="similar-action-logic">${escapeFieldHtml(itemLogic.text)}</span><small>${escapeFieldHtml(itemClassification.businessDomain)} / ${escapeFieldHtml(itemClassification.businessModule)}${escapeFieldHtml(itemCollaboration)}</small></button>`;}).join('')||'<p class="code-evidence-empty">当前目录下暂无相似事件</p>'}</div></div></details><div class="source-note">来源：${escapeFieldHtml(event.source)} · Raw 分类：${escapeFieldHtml(event.group)} / ${escapeFieldHtml(event.domain)} · Theme：${escapeFieldHtml(event.theme)}</div></div>`;
  document.querySelectorAll('[data-similar]').forEach(button=>button.onclick=()=>openDrawerV2(events.find(item=>item.name===button.dataset.similar)));
  bindFieldExplorer();
  bindPayloadExample();
  bindAggregationGuide();
  drawer.classList.add('show');
  document.getElementById('drawerBackdrop').classList.add('show');
  if(!wasOpen)requestAnimationFrame(()=>document.getElementById('closeDrawer')?.focus({preventScroll:true}));
};

const sidebarToggle=document.getElementById('sidebarToggle');
const appShell=document.querySelector('.app-shell');
const sidebarStateKey='tracepoint.sidebar-collapsed';

function setActiveWorkspace(name){
  const normalizedName=String(name||'').trim()||'a1.art';
  const workspaceName=document.getElementById('workspaceName');
  const workspaceGlyph=document.getElementById('workspaceGlyph');
  const workspaceProductLabel=document.getElementById('workspaceProductLabel');
  if(appShell?.dataset)appShell.dataset.workspaceName=normalizedName;
  if(workspaceName)workspaceName.textContent=normalizedName;
  if(workspaceGlyph)workspaceGlyph.textContent=normalizedName.charAt(0).toUpperCase();
  if(workspaceProductLabel)workspaceProductLabel.textContent=`${normalizedName} 埋点平台`;
}

setActiveWorkspace(appShell?.dataset?.workspaceName||document.getElementById('workspaceName')?.textContent);

function setSidebarCollapsed(collapsed){
  appShell.classList.toggle('sidebar-collapsed',collapsed);
  sidebarToggle.setAttribute('aria-expanded',String(!collapsed));
  const actionLabel=collapsed?'展开侧边导航':'收起侧边导航';
  sidebarToggle.setAttribute('aria-label',actionLabel);
  sidebarToggle.title=actionLabel;
}

let sidebarCollapsed=false;
try{sidebarCollapsed=localStorage.getItem(sidebarStateKey)==='true'}catch(error){}
setSidebarCollapsed(sidebarCollapsed);
sidebarToggle.addEventListener('click',()=>{
  sidebarCollapsed=!appShell.classList.contains('sidebar-collapsed');
  setSidebarCollapsed(sidebarCollapsed);
  try{localStorage.setItem(sidebarStateKey,String(sidebarCollapsed))}catch(error){}
});

function setSelectedEventRow(eventName){
  document.getElementById('eventRows')?.querySelectorAll('[data-event-name]').forEach(row=>{
    const selected=row.dataset.eventName===eventName;
    row.classList.toggle('is-selected',selected);
    if(selected)row.setAttribute('aria-current','true');
    else row.removeAttribute('aria-current');
  });
}

function clearSelectedEventRow(){
  document.getElementById('eventRows')?.querySelectorAll('.is-selected').forEach(row=>{
    row.classList.remove('is-selected');
    row.removeAttribute('aria-current');
  });
}

function openEventFromRow(row){
  const event=events.find(item=>item.name===row?.dataset.eventName);
  if(event){
    row.focus({preventScroll:true});
    openDrawerV2(event);
  }
}

document.getElementById('eventRows')?.addEventListener('click',event=>{
  const row=event.target.closest('[data-event-name]');
  if(!row||event.target.closest('button,a,input,select,textarea'))return;
  openEventFromRow(row);
});
document.getElementById('eventRows')?.addEventListener('keydown',event=>{
  const row=event.target.closest('[data-event-name]');
  if(!row||event.target.closest('button,a,input,select,textarea')||!['Enter',' '].includes(event.key))return;
  event.preventDefault();
  openEventFromRow(row);
});
let lastDrawerTrigger=null;

function finishDrawerClose(){
  clearSelectedEventRow();
  if(lastDrawerTrigger?.isConnected)lastDrawerTrigger.focus({preventScroll:true});
  lastDrawerTrigger=null;
}

document.getElementById('closeDrawer')?.addEventListener('click',finishDrawerClose);
document.getElementById('drawerBackdrop')?.addEventListener('click',finishDrawerClose);
document.addEventListener?.('keydown',event=>{
  if(event.key!=='Escape'||!document.getElementById('detailDrawer').classList.contains('show'))return;
  closeDrawer();
  finishDrawerClose();
});

// Lightweight Liquid Glass interaction cues without the repository's WebGL renderer.
const liquidSurfaceSelector='.nav-item,.workspace-btn,.sidebar-toggle,.top-search,.main button,.btn,.row-action,.field-preview,.field-toggle-all,.similar-list button,.location-tree button,.common-field-row button,.icon-btn';
const reduceLiquidMotion=typeof window==='undefined'?{matches:true}:window.matchMedia('(prefers-reduced-motion: reduce)');
let activeLiquidSurface=null;

function getLiquidSurface(target){
  return typeof Element!=='undefined'&&target instanceof Element?target.closest(liquidSurfaceSelector):null;
}

function prepareLiquidSurface(surface){
  if(!surface||surface.classList.contains('liquid-reactive'))return surface;
  surface.classList.add('liquid-reactive');
  const glare=document.createElement('span');
  glare.className='liquid-glare';
  glare.setAttribute('aria-hidden','true');
  surface.append(glare);
  return surface;
}

function updateLiquidPoint(surface,event){
  const rect=surface.getBoundingClientRect();
  surface.style.setProperty('--liquid-x',`${event.clientX-rect.left}px`);
  surface.style.setProperty('--liquid-y',`${event.clientY-rect.top}px`);
}

function releaseLiquidSurface(surface){
  if(!surface)return;
  surface.classList.remove('is-liquid-pressed');
}

document.addEventListener?.('pointerover',event=>{
  const surface=prepareLiquidSurface(getLiquidSurface(event.target));
  if(surface)updateLiquidPoint(surface,event);
});
document.addEventListener?.('pointermove',event=>{
  const surface=getLiquidSurface(event.target);
  if(surface)updateLiquidPoint(prepareLiquidSurface(surface),event);
});
document.addEventListener?.('pointerdown',event=>{
  const surface=prepareLiquidSurface(getLiquidSurface(event.target));
  if(!surface)return;
  activeLiquidSurface=surface;
  updateLiquidPoint(surface,event);
  surface.classList.add('is-liquid-pressed');
});
document.addEventListener?.('pointerup',()=>{
  releaseLiquidSurface(activeLiquidSurface);
  activeLiquidSurface=null;
});
document.addEventListener?.('pointercancel',()=>{
  releaseLiquidSurface(activeLiquidSurface);
  activeLiquidSurface=null;
});
document.addEventListener?.('focusin',event=>prepareLiquidSurface(getLiquidSurface(event.target)));
document.addEventListener?.('keydown',event=>{
  if(event.repeat||!['Enter',' '].includes(event.key))return;
  const surface=prepareLiquidSurface(getLiquidSurface(event.target));
  if(surface)surface.classList.add('is-liquid-pressed');
});
document.addEventListener?.('keyup',event=>{
  if(['Enter',' '].includes(event.key))releaseLiquidSurface(getLiquidSurface(event.target));
});

render();

const COLLECTION_TRACE_SOURCES=[
  {key:'frontend',label:'前端',description:'由 Web 或前端代码直接触发'},
  {key:'backend',label:'后端',description:'由服务端业务流程触发'},
  {key:'bigdata',label:'火山聚合',description:'由 bigData 通道或聚合口径产生'},
  {key:'android',label:'Android',description:'由 Android Native 端采集'}
];
const collectionTraceState={source:'frontend'};
const switchViewWithoutCollectionTrace=switchView;
switchView=function switchViewWithCollectionTrace(view){
  switchViewWithoutCollectionTrace(view);
  if(view==='locations')renderCollectionTraceView();
};

function getCollectionTraceEvents(source=collectionTraceState.source){
  return getActiveAssetEvents().filter(event=>getTrackingSourceEvidence(event).source===source);
}

function getCollectionTraceDetail(event,sourceEvidence=getTrackingSourceEvidence(event)){
  if(sourceEvidence.detail)return sourceEvidence.detail;
  if(sourceEvidence.source==='bigdata'){
    const namespaces=event.codeEvidence?.namespaces||[];
    return namespaces.includes('bigData')?'bigData 通道':event.source||'火山聚合资产清单';
  }
  if(sourceEvidence.source==='android')return event.source||'Android Native 资产清单';
  return event.source||sourceEvidence.title;
}

function renderCollectionTraceRow(event){
  const core=renderAssetCoreCells(event);
  const sourceEvidence=getTrackingSourceEvidence(event);
  const sourceDetail=getCollectionTraceDetail(event,sourceEvidence);
  return `<tr data-collection-event="${escapeFieldHtml(event.name)}" tabindex="0" aria-label="查看 ${escapeFieldHtml(core.actionName)}，${escapeFieldHtml(core.reportingText)}详情">${core.html}<td><span class="collection-trace-evidence" title="${escapeFieldHtml(sourceEvidence.title)}">${escapeFieldHtml(sourceDetail)}</span></td><td><button class="row-action" type="button" data-open-event="${escapeFieldHtml(event.name)}" aria-label="查看 ${escapeFieldHtml(core.actionName)} 详情">›</button></td></tr>`;
}

function renderCollectionTraceView(){
  const special=document.getElementById('specialView');
  const sourceCounts=new Map(COLLECTION_TRACE_SOURCES.map(source=>[source.key,getCollectionTraceEvents(source.key).length]));
  const activeSource=COLLECTION_TRACE_SOURCES.find(source=>source.key===collectionTraceState.source)||COLLECTION_TRACE_SOURCES[0];
  const sourceEvents=getCollectionTraceEvents(activeSource.key);
  const tabs=COLLECTION_TRACE_SOURCES.map(source=>{
    const selected=source.key===activeSource.key;
    return `<button id="collection-source-tab-${source.key}" type="button" role="tab" aria-selected="${selected}" aria-controls="collectionTraceTablePanel" tabindex="${selected?'0':'-1'}" class="collection-source-tab${selected?' active':''}" data-collection-source="${source.key}"><span>${source.label}</span><b>${sourceCounts.get(source.key)||0}</b></button>`;
  }).join('');
  special.innerHTML=`<section class="collection-trace-panel"><div class="asset-view-control collection-trace-toolbar"><div class="asset-view-tabs collection-source-tabs" role="tablist" aria-label="采集归属">${tabs}</div><p class="asset-view-context"><strong>${escapeFieldHtml(activeSource.label)}</strong><span>${escapeFieldHtml(activeSource.description)}</span></p></div><div class="collection-trace-table-wrap" id="collectionTraceTablePanel" role="tabpanel" aria-labelledby="collection-source-tab-${activeSource.key}"><table><colgroup><col class="collection-col-action"><col class="collection-col-logic"><col class="collection-col-contract"><col class="collection-col-evidence"><col class="collection-col-detail"></colgroup><thead><tr><th>埋点 action</th><th>上报逻辑</th><th>字段契约</th><th>归属依据</th><th></th></tr></thead><tbody>${sourceEvents.map(renderCollectionTraceRow).join('')||'<tr><td class="event-table-empty" colspan="5">当前采集归属没有资产</td></tr>'}</tbody></table></div></section>`;
  syncEventTextColumnWidth(special.querySelector('.collection-trace-table-wrap table'),sourceEvents);
  bindCollectionTraceView();
}

function bindCollectionTraceView(){
  const special=document.getElementById('specialView');
  const sourceTabs=[...special.querySelectorAll('[data-collection-source]')];
  sourceTabs.forEach((button,index)=>{
    button.onclick=()=>{
      collectionTraceState.source=button.dataset.collectionSource;
      renderCollectionTraceView();
      requestAnimationFrame(()=>document.querySelector(`[data-collection-source="${collectionTraceState.source}"]`)?.focus({preventScroll:true}));
    };
    button.onkeydown=event=>{
      if(!['ArrowLeft','ArrowRight'].includes(event.key))return;
      event.preventDefault();
      const offset=event.key==='ArrowRight'?1:-1;
      sourceTabs[(index+offset+sourceTabs.length)%sourceTabs.length].click();
    };
  });
  special.querySelectorAll('[data-open-event]').forEach(button=>button.onclick=()=>openDrawerV2(events.find(event=>event.name===button.dataset.openEvent)));
  special.querySelectorAll('[data-collection-event]').forEach(row=>{
    const open=()=>openDrawerV2(events.find(event=>event.name===row.dataset.collectionEvent));
    row.onclick=event=>{if(!event.target.closest('button,a,input,select,textarea'))open();};
    row.onkeydown=event=>{if(['Enter',' '].includes(event.key)&&!event.target.closest('button,a,input,select,textarea')){event.preventDefault();open();}};
  });
}
