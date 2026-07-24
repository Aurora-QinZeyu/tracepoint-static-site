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
const USER_SCENE_MEANINGS={emoji:'表情包场景',creator:'创作者场景',id_photo:'证件照场景',dress_up:'换装场景',activity:'运营活动场景','':'未记录用户场景'};
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
const CHATBOT_BOND_LEVEL_MEANINGS={'1':'亲密度 Lv.1','2':'亲密度 Lv.2','3':'亲密度 Lv.3','4':'亲密度 Lv.4','5':'亲密度 Lv.5','6':'亲密度 Lv.6；前端当前最高视觉等级'};
const CHATBOT_TOPIC_SCENARIO_MEANINGS={first_day:'用户首次进入该 Chatbot 的首日话题引导',returning:'用户后续回访该 Chatbot 时的话题引导'};
const CUSTOM_CHATBOT_GENDER_MEANINGS={'1':'男性 / 男孩 Chatbot','2':'女性 / 女孩 Chatbot'};
const CUSTOM_CHATBOT_RELATIONSHIP_MEANINGS={'1':'恋人；根据性别显示男朋友或女朋友','3':'暗恋对象','4':'最好的朋友','5':'邻居'};
const CUSTOM_CHATBOT_CHARACTER_MEANINGS={'6':'女性：关爱且调皮；男性：可靠且温和','7':'女性：害羞且温柔；男性：上进且关爱','8':'女性：活泼且自信；男性：自信且活泼'};
const CHATBOT_RESULT_SOURCE_MEANINGS={chatbot_view_img:'查看单人图片结果；也是无法识别任务类型时的默认值',chatbot_view_img_couple:'查看用户与 Chatbot 合照结果',chatbot_img_to_video:'图片转视频结果',chatbot_send_photo:'发送照片或快捷照片生成结果',chatbot_snap_character:'Snap 角色快照结果',chatbot_snap_couple:'Snap 合照快照结果',chatbot_custom_character:'Imagine 角色图片结果',chatbot_custom_me:'Imagine 用户本人图片结果',chatbot_custom_couple:'Imagine 用户与 Chatbot 合照结果'};

const REVIEWED_FIELD_SEMANTICS={
  'account_delete_confirm.is_confirm':{meaning:'表示用户在删除账号确认流程中的最终选择。',valueMeaningSource:'frontend_code',values:{true:'确认删除账号',false:'取消删除账号'}},

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

  'image_upload_click.origin':{meaning:'typed 通道中触发图片上传的创作流程。',valueMeaningSource:'frontend_code',values:{remix:'Remix 二创生成表单'}},
  'image_upload_click.filter_level':{meaning:'当前 Remix 表单的滤镜复杂度等级，由表单节点组合计算。',valueMeaningSource:'frontend_code',values:{'1':'一级滤镜：满足基础 Class 1 节点组合','2':'二级滤镜：满足 Class 2，或不属于一级/合照的默认等级','3':'三级滤镜：表单包含 groupPhoto 合照节点'}},
  'image_upload_click.trace_info':{meaning:'当前 App 推荐链路的追踪信息；legacy 通道未传入时按 appId 从事件追踪器补齐。'},
  'image_upload_click.product_name':{meaning:'legacy 通道自动注入的当前产品标识，取事件模块运行时的 product 值。'},
  'image_upload_click.app_id':{meaning:'legacy 转换后的滤镜/App 资源 ID，来源于调用参数 appId；缺失时上报空字符串。'},
  'image_upload_click.user_type':{meaning:'触发上传时的用户使用形态，由是否位于 Build 创作页计算。',valueMeaningSource:'frontend_code',values:{creator:'位于 Build 创作页',consumer:'不在 Build 创作页的消费场景'}},
  'image_upload_click.user_scene':{meaning:'legacy 通道携带的 App 用户业务场景；取值口径与 USER_SCENE_TRACK_CONFIG 一致。',valueMeaningSource:'frontend_code',values:{emoji:'表情包场景',creator:'创作者场景',id_photo:'证件照场景',dress_up:'换装场景',activity:'运营活动场景','':'调用未提供用户场景'}},
  'image_upload_click.ability_name':{meaning:'legacy 通道携带的 App 原子能力分类；取值口径与 app_click.ability_name 一致，缺失时为空字符串。'},
  'image_upload_click.appId':{meaning:'legacy 调用入口使用的原始 App 标识；转换后写入最终字段 app_id。',valueMeaningSource:'frontend_code',values:{faceswap:'历史 ControlNet/换脸上传入口',resource_id:'其他入口传入的实际 App 资源 ID'}},
  'image_upload_click.search':{meaning:'标记本次上传是否发生在搜索上下文；为 true 时展开 search_content、search_id、search_method，不作为最终独立业务字段发送。',valueMeaningSource:'frontend_code',values:{true:'搜索结果场景，附带搜索上下文',false:'非搜索场景，不附带搜索上下文'}},

  'generate_intention.origin':{meaning:'用户表达生成意愿时所在的业务来源，由页面栈、一次性 generate_entry 或基础页面计算。',valueMeaningSource:'frontend_code',values:GENERATE_ORIGIN_MEANINGS},
  'generate_intention.ability_name':{meaning:'本次准备使用的生成能力分类；由调用场景或任务类型确定。',valueMeaningSource:'frontend_code',values:GENERATE_ABILITY_MEANINGS},
  'generate_intention.type':{meaning:'Remix 内部生成链路的测试类型标记。',valueMeaningSource:'frontend_code',values:{test:'Remix 表单内的普通内部生成',test_t2i:'Remix 内部描述词文生图'}},
  'generate_intention.resolution':{meaning:'用户发起生成时选择的输出分辨率档位。',valueMeaningSource:'frontend_code',values:{SD:'标准清晰度',HD:'高清',FHD:'全高清（Full HD）'}},
  'generate_intention.chatbot_id':{meaning:'本次生成意愿关联的 Chatbot 标识，用于归属到对应的对话或角色；非 Chatbot 场景可为空。'},
  'generate_intention.tag_id':{meaning:'用户准备生成时所处内容场景关联的标签 ID，用于按内容标签分析生成意愿。'},
  'generate_intention.entry_point':{meaning:'用户触发生成意愿的具体产品入口。',valueMeaningSource:'frontend_code',values:GENERATE_ENTRY_POINT_MEANINGS},
  'generate_intention.object_type':{meaning:'用户准备生成的结果媒体类型。',valueMeaningSource:'frontend_code',values:{image:'图片',video:'视频'}},
  'generate_intention.search_method':{meaning:'生成意愿来自搜索场景时，记录用户采用的搜索入口或方式；非搜索场景可为空。'},
  'generate_intention.user_scene':{meaning:'本次生成面向的用户业务场景。',valueMeaningSource:'frontend_code',values:USER_SCENE_MEANINGS},
  'generate_intention.sort':{meaning:'触发生成意愿的滤镜或内容在当前推荐列表中的排序位置。'},
  'generate_intention.commend_label':{meaning:'触发本次生成意愿的推荐内容所携带的推荐标签，用于区分推荐策略或推荐分组。'},
  'generate_intention.credit':{meaning:'本次生成预计消耗的积分数量。'},
  'generate_intention.multiple':{meaning:'本次生成选择的结果份数或批量生成倍数。'},

  'generate_button_click.app_id':{meaning:'成功创建生成请求所关联的滤镜或 App 资源长 ID；Chatbot 等无 App 场景上报空字符串。'},
  'generate_button_click.appid':{meaning:'旧主流程资产中的 App 标识写法；当前代码使用 appId 作为 legacy 输入并转换为最终 app_id，未发现独立 appid 输出。'},
  'generate_button_click.generate_location':{meaning:'区分本次请求是首次创建还是基于已有任务重新生成。',valueMeaningSource:'frontend_code',values:{create:'首次创建生成任务',recreate:'基于任务页或结果页重新生成'}},
  'generate_button_click.origin':{meaning:'生成请求创建成功时的业务来源，由页面栈、一次性来源缓存或当前页面计算。',valueMeaningSource:'frontend_code',values:GENERATE_ORIGIN_MEANINGS},
  'generate_button_click.ability_name':{meaning:'本次生成请求使用的能力分类。',valueMeaningSource:'frontend_code',values:GENERATE_ABILITY_MEANINGS},
  'generate_button_click.type':{meaning:'Remix 内部生成链路的测试类型标记。',valueMeaningSource:'frontend_code',values:{test:'Remix 表单内的普通内部生成',test_t2i:'Remix 内部描述词文生图'}},
  'generate_button_click.button_type':{meaning:'触发生成请求的按钮权益类型。',valueMeaningSource:'frontend_code',values:{VIP:'会员专属生成按钮',normal:'普通生成按钮'}},
  'generate_button_click.type_2':{meaning:'legacy Web 链路用于区分生成对象及其会员属性；从一次性 GENERATE_BUTTON_TYPE 缓存读取。',valueMeaningSource:'frontend_code',values:{vip_image:'会员图片快捷生成',image:'普通图片快捷生成',vip_app:'会员 App 详情生成',app:'普通 App 详情生成',none:'未记录生成对象类型'}},
  'generate_button_click.lsk_type':{meaning:'legacy 调用的本地缓存选择参数，用于从 GENERATE_BUTTON_CLICK_PROPS 读取 currentTab；转换过程会消费该参数，不应作为最终业务 Properties。',valueMeaningSource:'frontend_code',values:{generate_button_click_props:'读取生成按钮一次性埋点上下文'}},
  'generate_button_click.LSKType':{meaning:'legacy 调用的本地缓存选择参数，用于读取 currentTab；该参数不应作为最终业务 Properties。'},
  'generate_button_click.post_id':{meaning:'本次生成请求关联的来源作品 ID，用于识别从哪条作品发起同款生成或二创。'},
  'generate_button_click.topic_id':{meaning:'本次生成请求关联的话题 ID，用于归因从话题内容进入的生成。'},
  'generate_button_click.gallery_id':{meaning:'本次生成请求关联的 Gallery 内容或卡片 ID，用于归因 Gallery 入口。'},
  'generate_button_click.chatbot_id':{meaning:'发起本次生成请求的 Chatbot 标识；非 Chatbot 场景可为空。'},
  'generate_button_click.is_slide_view':{meaning:'表示本次生成是否来自详情流滑动浏览到的内容。',valueMeaningSource:'frontend_code',values:{true:'来自详情流滑动浏览',false:'不是来自详情流滑动浏览'}},
  'generate_button_click.first_view':{meaning:'表示触发生成的内容是否为用户在当前推荐列表中首次看到的内容。',valueMeaningSource:'frontend_code',values:{true:'首次看到',false:'非首次看到'}},
  'generate_button_click.app_source':{meaning:'本次生成所用滤镜或 App 的业务来源，用于区分推荐、运营或其他供给渠道。'},
  'generate_button_click.object_type':{meaning:'本次生成请求的目标媒体类型。',valueMeaningSource:'frontend_code',values:{image:'图片',video:'视频'}},
  'generate_button_click.search_method':{meaning:'生成请求来自搜索场景时，记录用户采用的搜索入口或方式；非搜索场景可为空。'},
  'generate_button_click.commend_label':{meaning:'触发本次生成请求的推荐内容所携带的推荐标签，用于区分推荐策略或推荐分组。'},
  'generate_button_click.credit':{meaning:'本次生成请求预计消耗的积分数量。'},
  'generate_button_click.image_type':{meaning:'本次生成输入图片的业务类型，用于区分不同图片输入来源或处理形态。'},
  'generate_button_click.resolution':{meaning:'本次生成请求选择的输出分辨率档位。',valueMeaningSource:'frontend_code',values:{SD:'标准清晰度',HD:'高清',FHD:'全高清（Full HD）'}},
  'generate_button_click.multiple':{meaning:'本次请求选择的结果份数或批量生成倍数。'},
  'generate_button_click.bond_level':{meaning:'从 Chatbot 对话场景发起本次生成请求时，用户与该 Chatbot 的当前亲密度等级；非 Chatbot 生成场景可为空。前端固定支持 Lv.1–Lv.6。',valueMeaningSource:'frontend_code',values:CHATBOT_BOND_LEVEL_MEANINGS},
  'generate_button_click.scenario':{meaning:'本次生成请求所属的专项业务场景，用于区分相同能力在不同产品流程中的使用。'},

  'is_read.scene':{meaning:'标记某个引导、红点、气泡或推荐模块已被用户看过或已完成一次性处理，用于避免重复展示。',valueMeaningSource:'frontend_code',values:{like_tabbar_point:'点赞 Tab 红点已读',like_botton_bubble:'点赞按钮气泡已展示；Raw 值保留代码中的 botton 拼写',like_guide_bubble:'点赞引导气泡已关闭或读过',gen_video_new:'视频生成功能“新”标识已读',cutout_new:'抠图功能“新”标识已读',gen_video_guide:'视频生成引导已读',generate_button_click:'Onboarding 中已点击生成按钮',skip_button_click:'Onboarding 中已点击跳过或通过手势退出',fewer_than_three:'Onboarding 推荐 App 少于 3 个，本次不再展示弹窗',taskview_guide_bubble:'任务结果页引导气泡已展示',chatbot_message_exposure:'用户已进入并离开 Chatbot 会话，消息引导已曝光',creator_onboarding_popup_show:'创作者 Onboarding 弹窗已展示',app_commend:'App 推荐模块已曝光',app_commend_popup:'App 推荐弹窗已曝光'}},
  'feed_guide_click.type':{meaning:'用户点击内容流筛选引导时展示的引导样式。当前前端固定使用 hand，表示手势点击引导。',valueMeaningSource:'frontend_code',values:{hand:'手势点击样式的内容流引导'}},
  'feed_guide_click.short_id':{meaning:'内容流引导所指向的目标 App 对外短 ID；由当前引导目标动态提供，前端未限制固定枚举。'},
  'feed_guide_exposure.type':{meaning:'内容流筛选引导曝光时展示的引导样式。当前前端固定使用 hand，表示手势点击引导。',valueMeaningSource:'frontend_code',values:{hand:'手势点击样式的内容流引导'}},
  'feed_guide_exposure.short_id':{meaning:'本次内容流引导曝光所指向的目标 App 对外短 ID，直接取 target.appId。'},
  'skip_button_click.location1':{meaning:'跳过行为发生的一级产品位置。当前调用固定来自 onboarding。',valueMeaningSource:'frontend_code',values:{onboarding:'新用户 Onboarding 引导流程'}},
  'skip_button_click.scene':{meaning:'用户退出或跳过 Onboarding 的具体触发方式。',valueMeaningSource:'frontend_code',values:{time_out:'引导等待超时后自动跳过',gesture_swipe:'用户通过滑动手势跳过','':'调用未提供具体跳过方式'}},
  'try_it_button_click.location1':{meaning:'用户点击 Try it 按钮时所在的一级产品位置。当前调用来自 onboarding。',valueMeaningSource:'frontend_code',values:{onboarding:'新用户 Onboarding 推荐流程'}},
  'try_it_button_click.app_source':{meaning:'Try it 对应推荐 App 的业务来源，由当前推荐数据动态提供，前端未限制固定枚举。'},
  'try_it_button_click.commend_label':{meaning:'Try it 对应推荐 App 的推荐标签，由当前推荐资源动态提供，前端未限制固定枚举。'},
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
  'addtodesktop_load_success.is_first_time':{meaning:'PWA 桌面安装引导加载时是否为首次展示的 snake_case 契约字段；当前扫描未发现该 Raw key 的直接赋值，需与实际 isFirstTime 调用字段统一口径。'},
  'addtodesktop_load_success.isfirsttime':{meaning:'PWA 桌面安装引导加载时是否为首次展示；前端通过本地存储 LOAD_PWA_APP 是否不存在计算 !localStorage.getItem(...)，具体序列化为 number 的规则需确认。'},

  'generate_success.app_id':{meaning:'生成结果关联的滤镜或 App 资源长 ID；任务 ID 不是纯数字或无 App 场景时可能为空。'},
  'generate_success.generate_location':{meaning:'区分本次成功结果来自首次创建还是重新生成。',valueMeaningSource:'frontend_code',values:{create:'首次创建的生成任务成功',recreate:'基于已有任务重新生成成功'}},
  'generate_success.origin':{meaning:'生成成功结果所属的业务来源，继承任务创建时保存的 generateLocation。',valueMeaningSource:'frontend_code',values:GENERATE_ORIGIN_MEANINGS},
  'generate_success.generate_time':{meaning:'生成任务的预计处理时间，直接取任务状态返回的 processTime；前端未声明该值的时间单位。'},
  'generate_success.generate_wait_time':{meaning:'从生成任务开始到收到成功结果的实际等待时长，使用 dayjs.diff 按秒计算，单位为秒。'},
  'generate_success.gallery_id':{meaning:'触发本次生成的 Gallery 内容或卡片 ID，用于关联 Gallery 入口与生成结果；非 Gallery 场景可为空。'},
  'generate_success.trace_info':{meaning:'本次生成所属的推荐链路追踪信息，用于关联推荐曝光、点击与最终生成成功。'},
  'generate_success.chatbot_id':{meaning:'发起本次生成的 Chatbot 标识，用于将生成结果归属到对应的 Chatbot 对话或角色；非 Chatbot 场景可为空。'},
  'generate_success.first_view':{meaning:'表示生成来源内容是否为用户在当前推荐列表中首次看到的内容。',valueMeaningSource:'frontend_code',values:{true:'首次看到',false:'非首次看到'}},
  'generate_success.app_source':{meaning:'生成结果关联滤镜或 App 的业务来源，用于分析不同供给渠道的生成成功表现。'},
  'generate_success.object_type':{meaning:'本次成功生成结果的媒体类型。',valueMeaningSource:'frontend_code',values:{image:'图片',video:'视频'}},
  'generate_success.sort':{meaning:'触发本次成功生成的滤镜或内容在来源推荐列表中的排序位置。'},
  'generate_success.commend_label':{meaning:'本次成功生成所关联推荐内容的推荐标签，用于按推荐策略或分组分析成功结果。'},
  'generate_success.credit':{meaning:'本次成功生成实际对应的积分消耗数量。'},
  'generate_success.image_type':{meaning:'本次成功生成所使用输入图片的业务类型。'},
  'generate_success.resolution_detail':{meaning:'本次成功结果的具体输出分辨率信息，用于补充分辨率档位。'},
  'generate_success.multiple':{meaning:'本次成功生成的结果份数或批量生成倍数。'},
  'generate_success.bond_level':{meaning:'Chatbot 对话场景的生成任务成功时，用户与该 Chatbot 的当前亲密度等级；非 Chatbot 生成场景可为空。前端固定支持 Lv.1–Lv.6。',valueMeaningSource:'frontend_code',values:CHATBOT_BOND_LEVEL_MEANINGS},
  'generate_success.scenario':{meaning:'本次成功生成所属的专项业务场景，用于区分相同能力在不同产品流程中的结果。'},

  'generate_failure.task_period':{meaning:'生成失败发生的任务阶段；请求创建前的校验或接口错误为 before_task，任务已创建后由 Socket/任务状态返回失败为 after_task。',valueMeaningSource:'frontend_code',values:{before_task:'生成任务创建前失败',after_task:'生成任务创建后失败'}},
  'generate_failure.failure_reason':{meaning:'生成失败原因；可能是前端预检枚举，也可能直接使用接口、异常或任务响应的错误文本。',valueMeaningSource:'frontend_code',values:{chatbot:'Chatbot 生成表单校验未通过',not_login:'用户未登录',no_enough_credits:'用户积分不足',form_not_filled:'生成表单未完整填写'}},
  'generate_failure.ability_name':{meaning:'生成失败所属的原子能力分类。',valueMeaningSource:'frontend_code',values:GENERATE_ABILITY_MEANINGS},
  'generate_failure.app_id':{meaning:'生成失败所关联的滤镜或 App 资源长 ID，用于定位具体失败资产；无 App 场景可为空。'},
  'generate_failure.track_id':{meaning:'失败生成任务或请求的追踪 ID，用于关联同一次生成链路中的请求与异常。'},
  'generate_failure.trace_info':{meaning:'生成失败所关联的推荐链路追踪信息，用于分析推荐内容从曝光、点击到生成失败的路径。'},
  'generate_failure.first_view':{meaning:'表示失败生成所来源的内容是否为用户在当前推荐列表中首次看到的内容。',valueMeaningSource:'frontend_code',values:{true:'首次看到',false:'非首次看到'}},
  'generate_failure.app_source':{meaning:'生成失败所关联滤镜或 App 的业务来源，用于分析不同供给渠道的失败情况。'},
  'generate_failure.sort':{meaning:'触发失败生成的滤镜或内容在来源推荐列表中的排序位置。'},
  'generate_failure.object_type':{meaning:'本次生成失败对应的目标媒体类型。',valueMeaningSource:'frontend_code',values:{image:'图片',video:'视频'}},
  'generate_failure.resolution_detail':{meaning:'失败请求所选择或期望的具体输出分辨率信息。'},
  'generate_failure.scenario':{meaning:'本次生成失败所属的专项业务场景，用于区分相同能力在不同产品流程中的失败。'},

  'result_show.generate_location':{meaning:'结果曝光对应的生成方式，完全继承生成成功事件。',valueMeaningSource:'frontend_code',values:{create:'首次创建生成任务',recreate:'基于已有任务重新生成'}},
  'result_show.origin':{meaning:'结果曝光所属的业务来源，继承 generate_success 保存的生成来源。',valueMeaningSource:'frontend_code',values:GENERATE_ORIGIN_MEANINGS},
  'result_show.generate_time':{meaning:'生成任务的预计处理时间，继承 generate_success 的 processTime；前端未声明时间单位。'},
  'result_show.generate_wait_time':{meaning:'从生成任务开始到收到成功结果的实际等待时长，继承 generate_success 按秒计算的值，单位为秒。'},
  'result_show.ability_name':{meaning:'生成结果使用的原子能力分类。',valueMeaningSource:'frontend_code',values:GENERATE_ABILITY_MEANINGS},
  'result_show.entry_point':{meaning:'用户看到生成结果时所在的具体产品入口。',valueMeaningSource:'frontend_code',values:GENERATE_ENTRY_POINT_MEANINGS},
  'result_show.image_id':{meaning:'本次曝光的生成结果图片或视频结果 ID，用于识别用户实际看到的结果内容。'},
  'result_show.app_id':{meaning:'生成该曝光结果所使用的滤镜或 App 资源长 ID；无 App 场景可为空。'},
  'result_show.gallery_id':{meaning:'该曝光结果关联的 Gallery 内容或卡片 ID，用于归因结果的 Gallery 入口。'},

  'result_download.type':{meaning:'用户本次下载的结果媒体类型。',valueMeaningSource:'frontend_code',values:{video:'视频结果',image:'图片结果'}},
  'result_download.image_id':{meaning:'用户实际下载的图片或视频结果 ID，用于对应具体下载内容。'},
  'result_download.post_id':{meaning:'本次下载所属作品的 ID；从作品详情或作品分享场景下载时传入。'},
  'result_download.tag_id':{meaning:'下载动作发生时当前内容标签的 ID，用于按标签归因下载。'},
  'result_download.app_id':{meaning:'生成该下载结果的滤镜或 App 资源长 ID；无 App 的原子能力场景可为空。'},
  'result_download.trace_info':{meaning:'被下载结果所属的推荐链路追踪信息，用于关联推荐曝光、点击、生成与下载。'},
  'result_download.chatbot_id':{meaning:'产生该下载结果的 Chatbot 标识，用于将下载归属到对应对话或角色；非 Chatbot 场景可为空。'},
  'result_download.ability_name':{meaning:'被下载结果所属的原子能力分类；调用方缺失时多数回退为 a1。',valueMeaningSource:'frontend_code',values:GENERATE_ABILITY_MEANINGS},
  'result_download.is_with_watermark':{meaning:'标记实际下载文件是否包含水印。',valueMeaningSource:'frontend_code',values:{true:'下载带水印的文件',false:'下载无水印的文件'}},
  'result_download.origin':{meaning:'下载动作的业务来源；优先读取一次性 download_share_action_location，未记录时回退到 history。',valueMeaningSource:'frontend_code',values:{history:'生成历史或历史结果区'}},
  'result_download.location':{meaning:'执行下载的具体交互入口。',valueMeaningSource:'frontend_code',values:{download_no_watermark:'无水印下载入口',post_detail_longpress:'作品详情长按下载'}},
  'result_download.user_scene':{meaning:'被下载结果所属的用户业务场景，用于区分表情包、创作者、证件照、换装等结果。',valueMeaningSource:'frontend_code',values:USER_SCENE_MEANINGS},

  'image_delete_click.image_type':{meaning:'用户点击删除的图片来源类型。',valueMeaningSource:'frontend_code',values:IMAGE_DELETE_TYPE_MEANINGS},
  'image_delete_click.location':{meaning:'用户点击图片删除的业务界面。',valueMeaningSource:'frontend_code',values:IMAGE_DELETE_LOCATION_MEANINGS},
  'image_delete_success.image_type':{meaning:'成功删除的图片来源类型。',valueMeaningSource:'frontend_code',values:IMAGE_DELETE_TYPE_MEANINGS},
  'image_delete_success.location':{meaning:'图片删除成功时所在的业务界面。',valueMeaningSource:'frontend_code',values:IMAGE_DELETE_LOCATION_MEANINGS},

  'enhancement.current_tab':{meaning:'用户点击图像增强时所在的业务入口。',valueMeaningSource:'frontend_code',values:{post_detail:'作品详情页',creator_top:'创作者顶部作品区',creator_detail:'创作者详情页',search_result:'搜索结果页',task:'任务结果页'}},
  'enhancement.trace_info':{meaning:'待增强图片所属的推荐链路追踪信息，用于关联原内容曝光与后续图像增强。'},
  'enhancement.user_scene':{meaning:'待增强图片所属的用户业务场景。',valueMeaningSource:'frontend_code',values:USER_SCENE_MEANINGS},
  'enhancement.ability_name':{meaning:'待增强图片原生成任务所属的原子能力。',valueMeaningSource:'frontend_code',values:GENERATE_ABILITY_MEANINGS},

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
  'retention_popup_click.button':{meaning:'用户在续订离开挽留弹窗中的选择。',valueMeaningSource:'frontend_code',values:{save_button:'接受优惠并保持续订',give_up_button:'放弃优惠并离开'}},
  'retention_popup_button_click.type':{meaning:'用户点击订阅按钮时所在的付费挽留弹窗类型。',valueMeaningSource:'frontend_code',values:{pay_retain_trigger_discount:'触发折扣的支付挽留',pay_retain_low_price:'低价套餐支付挽留'}},

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
const volcanoAggregationAssets=globalThis.VolcanoAggregationAssets||[];
const events=[
  ...mainFlowEvents,
  ...volcanoAggregationAssets,
  ...seedEvents.filter(seed=>!mainFlowEvents.some(event=>event.name===seed.name)&&!volcanoAggregationAssets.some(event=>event.name===seed.name))
];
const frontendTrackingManifest=globalThis.FrontendTrackingManifest||null;
const codeAssetSummary=globalThis.CodeAssetSync&&frontendTrackingManifest
  ?globalThis.CodeAssetSync.sync(frontendTrackingManifest,events)
  :null;
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
  const explicitSource=String(event?.trackingSource||'').toLowerCase();
  const callSiteCount=Number(evidence.callSiteCount||evidence.callSites?.length||0);
  const source=explicitSource==='backend'||BACKEND_TRACKING_EVENTS.has(event.name)
    ?'backend'
    :explicitSource==='android'||/android/.test(repository)||/(?:^|\/)android(?:\/|$)/.test(referenceText)
      ?'android'
      :explicitSource==='bigdata'||namespaces.includes('bigData')
        ?'bigdata'
        :callSiteCount||evidence.definitions?.length
          ?'frontend'
          :'frontend';
  if(source==='backend')return {source,label:TRACKING_SOURCE_LABELS.backend,detail:event.name==='subscribe_cancel'?'服务端触发 · 订阅服务上报':'服务端触发 · 后端服务上报',title:'采集归属：后端'};
  if(source==='android')return {source,label:TRACKING_SOURCE_LABELS.android,detail:callSiteCount?`Android 端触发 · ${callSiteCount} 处调用`:'Android 端触发 · 当前扫描未发现调用',title:'采集归属：Android 端'};
  if(source==='bigdata')return {source,label:TRACKING_SOURCE_LABELS.bigdata,detail:callSiteCount?`前端触发 · bigData 通道 · ${callSiteCount} 处调用`:'火山聚合口径 · 文档已收录',title:'采集归属：火山聚合；bigData 通道统一归入此类'};
  return {source:'frontend',label:TRACKING_SOURCE_LABELS.frontend,detail:callSiteCount?`前端触发 · 发现 ${callSiteCount} 处上报代码`:'前端归属 · 当前扫描未发现上报代码',title:'采集归属：前端；静态扫描不代表生产环境已收到数据'};
}

function isVolcanoTrackingSource(event){
  return getTrackingSourceEvidence(event).source==='bigdata';
}

function isEventCommonField(event,field,index){
  const rawName=String(field?.[0]||'').trim();
  if(!rawName)return false;
  const assessment=event?.governanceAssessment;
  if((assessment?.commonEnvelopeFields||[]).includes(rawName))return true;
  const canonicalName=assessment?.canonicalSuggestions?.fields?.find(item=>item.index===index)?.key;
  const governance=globalThis.TrackingGovernance;
  if(!governance?.isCommonEnvelopeField)return false;
  return [rawName,canonicalName]
    .filter(Boolean)
    .some(name=>governance.isCommonEnvelopeField(name,{manifest:frontendTrackingManifest}));
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

function isProtectedAssetEvent(event){
  return mainFlowEvents.includes(event)||volcanoAggregationAssets.includes(event)||event?.name==='subscribe_cancel';
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
    developing:activeEvents.filter(event=>IN_PROGRESS_STATUSES.has(event.status)).length,
    disabled:activeEvents.filter(event=>event.status==='已停用').length
  };
}
const assetStats=calculateAssetStats();
const metricElements=document.querySelectorAll('.metric-grid .metric');
const allCatalogTab=document.querySelector('[data-tab="all"]');
if(allCatalogTab&&!document.querySelector('[data-tab="volcano"]'))allCatalogTab.insertAdjacentHTML('afterend','<button class="tab" data-tab="volcano">火山聚合 <b>3</b></button>');
function updateAssetMetricElements(){
  metricElements[0].querySelector('.metric-label').textContent='当前埋点资产';metricElements[0].querySelector('strong').textContent=assetStats.total;metricElements[0].querySelector('small').textContent=`${assetStats.code} 个已关联前端代码`;
  metricElements[1].querySelector('.metric-label').textContent='主流程埋点';metricElements[1].querySelector('strong').textContent=assetStats.main;metricElements[1].querySelector('small').textContent='覆盖 6 个核心环节';
  metricElements[2].querySelector('.metric-label').textContent='独有字段定义';metricElements[2].querySelector('strong').textContent=assetStats.fields;metricElements[2].querySelector('small').textContent=`主流程 ${assetStats.mainFields} 个`;
  metricElements[3].querySelector('.metric-label').textContent='已确认上线';metricElements[3].querySelector('strong').textContent=assetStats.live;metricElements[3].querySelector('small').textContent=`${assetStats.pending} 个代码资产待确认`;
  document.querySelector('[data-tab="all"] b').textContent=assetStats.total;document.querySelector('[data-tab="governance"] b').textContent=assetStats.governanceBlocked+assetStats.governanceReview;document.querySelector('[data-tab="issue"] b').textContent=assetStats.developing;document.querySelector('[data-tab="unused"] b').textContent=assetStats.disabled;
  document.querySelector('[data-tab="volcano"] b').textContent=getActiveAssetEvents().filter(isVolcanoTrackingSource).length;
}
function updateCatalogTabCounts(scopedEvents){
  const scoped=Array.isArray(scopedEvents)?scopedEvents:[];
  const count=(predicate)=>scoped.filter(predicate).length;
  const governance=count(event=>event.governanceAssessment?.status!=='ready');
  document.querySelector('[data-tab="all"] b').textContent=scoped.length;
  document.querySelector('[data-tab="governance"] b').textContent=governance;
  document.querySelector('[data-tab="issue"] b').textContent=count(event=>IN_PROGRESS_STATUSES.has(event.status));
  document.querySelector('[data-tab="unused"] b').textContent=count(event=>event.status==='已停用');
  document.querySelector('[data-tab="volcano"] b').textContent=getActiveAssetEvents().filter(isVolcanoTrackingSource).length;
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
document.querySelectorAll('.nav-item').forEach(b=>b.onclick=()=>{const label=b.querySelector('.nav-label')?.textContent.trim()||b.getAttribute('aria-label')||'';document.querySelectorAll('.nav-item').forEach(x=>x.classList.remove('active'));b.classList.add('active');document.getElementById('crumb').textContent=label;document.getElementById('page-title').textContent=label;document.getElementById('pageEyebrow').textContent=label});document.querySelectorAll('.tab').forEach(b=>b.onclick=()=>{document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));b.classList.add('active');if(b.dataset.tab==='volcano')resetCatalogSelection();render()});['search','evidence'].forEach(id=>document.getElementById(id)?.addEventListener('input',render));
const modal=document.getElementById('modal');document.getElementById('addBtn').onclick=()=>document.querySelector('[data-view="intake"]')?.click();document.getElementById('closeModal').onclick=()=>modal.classList.remove('show');document.getElementById('cancelModal').onclick=()=>modal.classList.remove('show');document.getElementById('saveEvent').onclick=()=>{modal.classList.remove('show');document.querySelector('[data-view="intake"]')?.click();showToast('请在需求与设计中补齐 Tracking Contract v1 后提交方案评审')};document.getElementById('exportBtn').onclick=()=>showToast('报告已导出');document.querySelector('.range-control').onclick=()=>showToast('当前统计范围：近 7 日');document.getElementById('allActivity').onclick=()=>showToast('已展开全部动态');function showToast(t){const el=document.getElementById('toast');el.textContent=t;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),2200)}

const standardSections={assist:document.querySelector('.design-assist'),metrics:document.querySelector('.metric-grid'),toolbar:document.querySelector('.toolbar'),table:document.querySelector('.table-panel'),bottom:document.querySelector('.bottom-grid')};
function buildCatalogSubtitle(){
  const repository=frontendTrackingManifest?.repository;
  const revision=repository?[repository.branch,repository.commitShort].filter(Boolean).join(' · '):'';
  const codeSummary=assetStats.code?`已对齐前端 ${assetStats.code} 个 action${revision?`（${revision}）`:''}`:'尚未载入前端代码清单';
  return `共 ${assetStats.total} 个事件，其中 ${assetStats.main} 个主流程事件；${codeSummary}，包含 ${assetStats.fields} 个事件独有字段定义。`;
}
const viewCopy={intake:['需求与设计','粘贴 PRD 或埋点记录，或直接设计 Tracking Contract v1，再提交方案评审。'],review:['埋点方案评审','确认统计目标、用户行为与触发边界、复用决策和字段契约；评审记录仅在当前浏览器会话中模拟。'],debug:['上报调试','构造并校验事件 payload，预览本地模拟上报结果。'],acceptance:['验收上线','核对需求设计、方案评审、开发和调试结果，演示验收登记流程。'],issues:['问题处置','登记上报异常、火山或数仓聚合反馈、数据质量问题和停用下架申请。'],catalog:['埋点资产',buildCatalogSubtitle()],deprecated:['废弃埋点','集中查看仅有定义或暂无代码证据的埋点；这是静态扫描候选，不代表生产环境已确认废弃。'],locations:['位置追溯','基于前端代码调用点整理页面、组件和交互位置，待业务负责人确认。'],commonFields:['公共字段','统一维护所有事件可复用的用户、设备、渠道和业务上下文字段。']};
function refreshAssetStats(){
  refreshGovernanceAssessments();
  Object.assign(assetStats,calculateAssetStats());
  updateAssetMetricElements();
  viewCopy.catalog[1]=buildCatalogSubtitle();
}
function switchView(view){const special=document.getElementById('specialView'),copy=viewCopy[view]||viewCopy.requirements;document.getElementById('page-title').textContent=copy[0];document.getElementById('page-subtitle').textContent=copy[1];Object.values(standardSections).forEach(el=>el.classList.add('view-hidden'));special.classList.remove('show');special.innerHTML='';if(view==='requirements'){standardSections.assist.classList.remove('view-hidden');standardSections.toolbar.classList.remove('view-hidden');standardSections.table.classList.remove('view-hidden')}else if(view==='design'){special.classList.add('show');special.innerHTML=`<div class="tracking-builder"><section class="builder-form"><div class="builder-head"><div><h2>定义统计目标</h2><p>从产品问题生成一份可交付的埋点方案</p></div><span>草稿</span></div><div class="builder-fields"><label class="wide">要回答的问题<textarea placeholder="例如：用户点击生成后，在哪一步流失最多？"></textarea></label><label>产品端<select><option>PixPop Web</option><option>PixPop App</option></select></label><label>业务模块<select><option>主流程 / 生成</option><option>用户与账号</option><option>商业化</option></select></label><label>页面位置<input value="生成页 / 底部操作区" /></label><label>交互动作<select><option>点击</option><option>曝光</option><option>提交</option><option>完成</option></select></label></div><button class="btn primary builder-generate">生成埋点方案</button></section><aside class="builder-preview"><div class="builder-head"><div><h2>方案预览</h2><p>保存前完成命名和字段检查</p></div><span class="preview-state">待生成</span></div><div class="preview-block"><small>事件名称</small><code>generate_button_click</code></div><div class="preview-block"><small>触发时机</small><p>用户点击生成按钮且请求成功发送时</p></div><div class="preview-block"><small>建议属性</small><div class="property-tags"><span>app_id</span><span>template_id</span><span>entry_point</span></div></div><div class="preview-checks"><p><b>✓</b> 命名符合规范</p><p><b>✓</b> 未发现重复事件</p><p><b>·</b> 等待绑定产品位置</p></div></aside></div>`}else if(view==='catalog'){standardSections.assist.classList.remove('view-hidden');standardSections.toolbar.classList.remove('view-hidden');standardSections.table.classList.remove('view-hidden')}else if(view==='check'){special.classList.add('show');special.innerHTML=`<div class="view-stats"><div><span>待处理</span><strong>12</strong><small>需要负责人确认</small></div><div><span>命名不规范</span><strong>5</strong><small>action 不符合规范</small></div><div><span>字段缺失</span><strong>4</strong><small>缺少类型或说明</small></div><div><span>疑似重复</span><strong>3</strong><small>相似度超过 85%</small></div></div><div class="issue-panel"><div class="view-panel-head"><div><h2>检查结果</h2><p>按风险优先级排序</p></div><button class="btn secondary">重新检查</button></div><div class="issue-row"><span class="severity high">高</span><div><strong>pricing_premium_subscibe_click</strong><p>事件名疑似拼写错误：subscibe → subscribe</p></div><em>命名规范</em><button>处理</button></div><div class="issue-row"><span class="severity medium">中</span><div><strong>remix_begin_click</strong><p>同时存在 app_id 与 appid，字段口径不一致</p></div><em>字段一致性</em><button>处理</button></div><div class="issue-row"><span class="severity low">低</span><div><strong>remix_guide_close_click</strong><p>已停用事件近 30 日仍存在少量上报</p></div><em>生命周期</em><button>查看</button></div></div>`}else if(view==='locations'){special.classList.add('show');special.innerHTML=`<div class="location-layout"><aside class="location-tree"><h2>产品位置</h2><button class="tree-active">▾ PixPop Web <b>8</b></button><button>　├ 首页 <b>2</b></button><button>　├ 登录注册 <b>3</b></button><button>　├ 定价页 <b>3</b></button><button>▸ PixPop App <b>5</b></button></aside><div class="location-main"><div class="view-panel-head"><div><h2>PixPop Web / 登录注册</h2><p>3 个事件 · 最近更新 2026-07-15</p></div><button class="btn primary">＋ 绑定位置</button></div><div class="location-card"><span class="position-index">01</span><div><strong>LoginButton</strong><p>首页 / Header / 登录按钮</p><code>login_button_click</code></div><em>点击</em></div><div class="location-card"><span class="position-index">02</span><div><strong>RegistrationModal</strong><p>全局 / 注册弹窗 / 关闭</p><code>registration_pop_up</code></div><em>关闭</em></div><div class="location-card"><span class="position-index">03</span><div><strong>PageContainer</strong><p>全局页面 / 加载完成</p><code>userpath</code></div><em>曝光</em></div></div></div>`}else{special.classList.add('show');special.innerHTML=`<div class="empty-view"><strong>${copy[0]}</strong><p>${copy[1]}</p><button class="btn primary">开始配置</button></div>`}}
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
];

function renderExcelCommonFields(){
  const special=document.getElementById('specialView');
  const categories=[...new Set(commonFieldsData.map(field=>field.category))];
  special.classList.add('show');
  special.innerHTML=`<div class="cf-summary"><div><span>注册字段</span><strong>${commonFieldsData.length}</strong></div><div><span>字段分类</span><strong>${categories.length}</strong></div><div><span>事件侧手填</span><strong>0</strong></div></div><div class="cf-panel"><div class="cf-table-wrap"><table class="cf-table"><thead><tr><th>字段 / 说明</th><th>分类</th><th>发现场景</th><th>发送时机</th><th>内容示例</th><th>现网注入层</th></tr></thead><tbody id="commonFieldRows">${commonFieldsData.map(field=>`<tr><td><code>${field.name}</code><small>${field.description}</small></td><td><span class="cf-category">${field.category}</span></td><td>${field.scenes}</td><td class="cf-timing" title="${field.timing}">${field.timing}</td><td><span class="cf-example">${field.example||'-'}</span></td><td><span class="cf-property ${field.inProperties?'yes':'no'}">${field.inProperties?'统一属性层':'顶层信封'}</span></td></tr>`).join('')}</tbody></table></div><div class="cf-foot"><span id="commonFieldCount">显示 ${commonFieldsData.length} / ${commonFieldsData.length} 个字段</span><span>来源：公共字段.xlsx / 公共字段表</span></div></div>`;
}
document.querySelector('[data-view="commonFields"]').addEventListener('click',renderExcelCommonFields);

function renderTrackingReportLegacy(){
  const special=document.getElementById('specialView');
  special.classList.add('show');
  special.innerHTML=`<div class="report-layout"><section class="report-config"><div class="report-section-head"><div><h2>上报配置</h2><p>选择事件并补充本次模拟上报的运行参数</p></div><div class="environment-switch"><button class="active" data-env="test">测试模拟</button><button data-env="production">生产预览</button></div></div><div class="report-form"><label class="wide">事件名称<select id="reportEvent">${events.map(event=>`<option value="${escapeFieldHtml(event.name)}">${escapeFieldHtml(event.name)} - ${escapeFieldHtml(getEventReportingLogic(event).text)}</option>`).join('')}</select></label><label>触发端<select id="reportPlatform"><option value="PC">Web / PC</option><option value="MOBILE">H5 / Mobile</option><option value="APP">iOS / App</option></select></label><label>用户标识<input id="reportUser" value="1820730895731752961" /></label><label>请求地址<input id="reportEndpoint" value="/v1/track（未连接）" readonly /></label><label>上报方式<select id="reportMethod"><option>即时上报</option><option>批量上报</option></select></label><label class="wide">事件 Properties<textarea id="reportProperties" spellcheck="false">{
  "source": "tracking_console",
  "page": "event_report"
}</textarea></label></div><div class="report-actions"><button class="btn secondary" id="validateReport">校验参数</button><button class="btn primary" id="sendTestReport">运行模拟上报</button></div></section><aside class="report-preview"><div class="report-section-head"><div><h2>请求预览</h2><p>运行前确认公共信封和事件参数</p></div><span class="report-state ready" id="reportState">可模拟</span></div><div class="request-meta"><span id="reportEnvLabel">TEST</span><code>POST /v1/track · MOCK</code></div><pre id="reportPayload"></pre><div class="report-checks"><div><span>✓</span><p><strong>事件已登记</strong><small>来自埋点资产</small></p></div><div><span id="reportEnvelopeMark">✓</span><p><strong>公共信封已补齐</strong><small id="reportEnvelopeText">business_type、device_type、user_id、time、theme</small></p></div><div><span>✓</span><p><strong>JSON 格式有效</strong><small id="jsonCheckText">3 个自定义属性</small></p></div></div></aside></div><section class="report-history"><div class="view-panel-head"><div><h2>最近模拟上报</h2><p>仅保留当前浏览器会话中的模拟结果</p></div><button class="btn secondary" id="clearReportHistory">清空记录</button></div><div class="report-history-head"><span>时间</span><span>事件</span><span>环境</span><span>触发端</span><span>模拟响应</span><span>状态</span></div><div id="reportHistoryRows"><div class="report-history-row"><time>刚刚</time><code>login_button_click</code><span>TEST</span><span>Web / PC</span><span>200 · 42 ms</span><b class="success">成功</b></div><div class="report-history-row"><time>3 分钟前</time><code>generate_button_click</code><span>TEST</span><span>iOS / App</span><span>200 · 67 ms</span><b class="success">成功</b></div><div class="report-history-row"><time>12 分钟前</time><code>pricing_popup</code><span>TEST</span><span>H5 / Mobile</span><span>400 · 参数缺失</span><b class="failed">失败</b></div></div></section>`;
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
      if(!key||governance?.isCommonEnvelopeField(key,{manifest:frontendTrackingManifest}))return;
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

let prdPasteDraft=globalThis.PrdPasteParser?.standardExampleText||globalThis.PrdPasteParser?.exampleText||'';
let importedPrdEvents=[];
let importedPrdValidation=[];
let importedPrdParserIssues=[];
let intakeMode='paste';
let analystReviewState={status:'未提交',submittedAt:'',reviewedAt:'',note:''};

function addIntakeModeSwitch(activeMode){
  const workflow=document.querySelector('#specialView .workflow-bar');
  const modes=[
    ['paste','粘贴 PRD / 埋点记录','自动整理复制内容'],
    ['direct','直接设计','手动填写标准契约']
  ];
  if(importedPrdEvents.length)modes.push(['contract','方案确认',`${importedPrdEvents.length} 个事件`]);
  const markup=`<div class="intake-mode-switch" role="tablist" aria-label="需求与设计录入方式">${modes.map(([mode,label,hint])=>`<button type="button" role="tab" data-intake-mode="${mode}" aria-selected="${activeMode===mode}" class="${activeMode===mode?'active':''}"><strong>${label}</strong><small>${hint}</small></button>`).join('')}</div>`;
  if(workflow)workflow.insertAdjacentHTML('afterend',markup);
  else document.getElementById('specialView').insertAdjacentHTML('afterbegin',markup);
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
  addWorkflowBar('intake');
  addIntakeModeSwitch(intakeMode);
}

function renderDirectTrackingDesign(){
  const special=document.getElementById('specialView');
  special.classList.add('show');
  special.innerHTML=`<section class="direct-design-panel"><div class="view-panel-head"><div><h2>直接设计 Tracking Contract v1</h2><p>产品可从统计目标开始填写；Raw action 与字段 key 不会被自动改名</p></div><span class="prototype-badge">浏览器草稿</span></div><form class="direct-design-form" id="directDesignForm"><label class="wide">统计目标<textarea id="directGoal" required placeholder="例如：衡量用户从首页滤镜点击到生成成功的转化"></textarea></label><label>事件中文名<input id="directLabel" required value="滤镜点击" /></label><label>Raw action<input id="directAction" required value="app_click" spellcheck="false" /></label><label>工作线<select id="directDomain"><option>搜推与触达</option><option>商业化</option><option>Chatbot</option><option>运营增长</option><option>创作工具</option><option>用户与平台</option></select></label><label>工作模块<input id="directModule" required value="推荐与浏览" /></label><label class="wide">触发边界<input id="directTrigger" required value="用户点击首页瀑布流中的滤镜卡片时上报" /></label><label>页面位置<input id="directPosition" required value="discover / 首页瀑布流" /></label><label>上报端<select id="directPlatform"><option>Web</option><option>iOS</option><option>Android</option><option>Web / iOS / Android</option></select></label><label>负责人<input id="directOwner" required value="产品负责人" /></label><label>版本<input id="directVersion" required value="1.0.0" /></label><label>契约策略<select id="directChangeType"><option value="keep">keep - 保持 Raw 契约</option><option value="alias">alias - 建立别名</option><option value="dual_write">dual_write - 双写迁移</option><option value="replace">replace - 审批后替换</option></select></label><label>独有字段 key<input id="directFieldKey" value="location1" spellcheck="false" /></label><label>字段类型<select id="directFieldType"><option>string</option><option>integer</option><option>number</option><option>boolean</option><option>datetime</option><option>object</option><option>array</option></select></label><label class="wide">字段说明<input id="directFieldDescription" value="页面与功能位置，例如 discover：首页瀑布流" /></label><label>是否必填<select id="directFieldRequired"><option value="true">必填</option><option value="false">可选</option></select></label><label>是否可空<select id="directFieldNullable"><option value="false">不可空</option><option value="true">可空</option></select></label><div class="direct-design-actions wide"><p id="directDesignFeedback" role="status">保存后进入同一模块内的方案确认，再提交方案评审。</p><button class="btn primary" type="submit">生成契约方案</button></div></form></section>`;
  document.getElementById('directAction').insertAdjacentHTML('afterend','<small class="direct-action-hint">建议使用“业务对象_用户动作”，例如 login_popup_exposure</small>');
  document.getElementById('directDesignForm').onsubmit=event=>{
    event.preventDefault();
    const key=document.getElementById('directFieldKey').value.trim();
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
      params:key?[{
        key,
        type:document.getElementById('directFieldType').value,
        required:document.getElementById('directFieldRequired').value,
        nullable:document.getElementById('directFieldNullable').value,
        description:document.getElementById('directFieldDescription').value.trim(),
        allowedValues:'',
        example:'discover：首页瀑布流',
        sensitivity:''
      }]:[]
    };
    const validation=globalThis.PrdAssetSync?.validateSubmission?.([candidate])||{valid:true,errors:[]};
    if(!validation.valid){
      document.getElementById('directDesignFeedback').textContent=`契约还不能送审：${validation.errors[0].message}`;
      document.getElementById('directDesignFeedback').classList.add('is-error');
      return;
    }
    importedPrdEvents=[candidate];
    importedPrdValidation=[];
    importedPrdParserIssues=[];
    analystReviewState={status:'未提交',submittedAt:'',reviewedAt:'',note:''};
    intakeMode='contract';
    renderRequirementsDesign('contract');
    showToast('已生成 1 个标准契约方案，尚未写入正式资产');
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
  special.innerHTML=`<div class="prd-paste-layout"><section class="prd-upload-panel prd-paste-panel"><div class="prd-panel-head"><div><h2>粘贴 PRD / 埋点记录</h2><p>支持 Tracking Contract v1，也兼容旧四列记录</p></div><span>Excel · 飞书 · TSV</span></div><label class="prd-paste-field" for="prdPasteInput"><span class="prd-paste-field-label"><strong>原始契约</strong><small id="prdPasteMeta">优先使用标准 18 列，旧格式保存为待治理草稿</small></span><textarea id="prdPasteInput" spellcheck="false" placeholder="粘贴事件、action、触发时机、位置、字段类型与治理信息"></textarea></label><div class="prd-paste-actions"><span>原始 action 与 key 不会被自动改名</span><div><button class="btn secondary" id="pastePrdRecords" type="button">从剪贴板粘贴</button><button class="btn secondary" id="loadPrdExample" type="button">标准示例</button><button class="btn secondary" id="clearPrdRecords" type="button">清空</button></div></div></section><aside class="prd-process-panel prd-format-panel"><div class="prd-panel-head"><div><h2>Tracking Contract v1</h2><p>运行契约与治理建议分层保存</p></div><span class="prd-process-state" id="prdProcessState">等待粘贴</span></div><div class="prd-format-columns" aria-label="标准契约组成"><div><span>01</span><p><strong>事件标识</strong><small>事件名称、action、业务域、业务模块</small></p></div><div><span>02</span><p><strong>责任与位置</strong><small>触发时机、页面位置、上报端、负责人、版本</small></p></div><div><span>03</span><p><strong>字段契约</strong><small>key、类型、必填、可空、枚举、示例</small></p></div><div><span>04</span><p><strong>数据治理</strong><small>参数说明、变更类型</small></p></div></div><div class="prd-live-status" id="prdLiveStatus" role="status" aria-live="polite" aria-atomic="true"><strong>还没有可整理的内容</strong><small>粘贴后将在下方生成结构化契约。</small></div></aside></div><section class="prd-result" id="prdResult"><div class="view-panel-head"><div><h2>契约检查结果</h2><p id="prdResultDescription">粘贴后自动检查 wire contract 与治理字段</p></div><div class="prd-result-actions"><button class="btn primary" id="goToTrackingDesign" disabled>进入方案确认</button></div></div><div class="prd-result-summary"><div><span>记录事件</span><strong id="prdEventCount">0 个</strong></div><div><span>Action</span><strong id="prdActionCount">0 个</strong></div><div><span>业务字段</span><strong id="prdParamCount">0 个</strong></div><div><span>规范检查</span><strong id="prdValidationState">等待粘贴</strong></div></div><div id="prdResultBody" class="prd-empty-state"><strong>粘贴后自动整理</strong><p>标准契约可直接送审，旧四列会保留为待治理草稿。</p></div><div id="prdIssueList" class="prd-issue-list hidden"></div></section>`;
  document.querySelector('.prd-paste-actions > div').insertAdjacentHTML('afterbegin','<a class="btn secondary" href="tracking-contract-v1-template.tsv" download>下载模板</a>');

  const input=document.getElementById('prdPasteInput');
  const pasteButton=document.getElementById('pastePrdRecords');
  const clearButton=document.getElementById('clearPrdRecords');
  const exampleButton=document.getElementById('loadPrdExample');
  const importButton=document.getElementById('goToTrackingDesign');
  const processState=document.getElementById('prdProcessState');
  const liveStatus=document.getElementById('prdLiveStatus');
  const resultBody=document.getElementById('prdResultBody');
  const issueList=document.getElementById('prdIssueList');
  const validationState=document.getElementById('prdValidationState');
  const synchronizer=globalThis.PrdAssetSync;
  let latestResult=parser.parse('');
  let latestGovernanceResults=[];
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
      const eventMarker=isNewEvent?'<span class="prd-inline-change is-event">新增埋点</span>':'';
      const fieldMarker=isNewField?'<span class="prd-inline-change is-field">新增字段</span>':'';
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
    latestGovernanceResults=validateImportedEvents(latestResult);
    const governanceIssues=latestGovernanceResults.flatMap((validation,index)=>validation.issues.map(issue=>({...issue,eventIndex:index,eventAction:events[index]?.action||events[index]?.label||`事件 ${index+1}`})));
    const contractIssues=synchronizer?.validateSubmission? synchronizer.validateSubmission(events).errors.map(issue=>({...issue,severity:'error'})) : [];
    const parserIssues=issues.map(issue=>({...issue,severity:'error',path:issue.location||'source'}));
    const blockingIssues=[...parserIssues,...governanceIssues.filter(issue=>issue.severity==='error'),...contractIssues].filter((issue,index,list)=>list.findIndex(item=>item.code===issue.code&&item.path===issue.path&&item.message===issue.message)===index);
    const blockingCount=blockingIssues.length;
    const warningCount=governanceIssues.filter(issue=>issue.severity==='warning').length;
    const assetPlan=getAssetPlan(latestResult);
    document.getElementById('prdEventCount').textContent=`${stats.events} 个`;
    document.getElementById('prdActionCount').textContent=`${stats.actions} 个`;
    document.getElementById('prdParamCount').textContent=`${stats.params} 个`;
    document.getElementById('prdPasteMeta').textContent=input.value.trim()?`已读取 ${input.value.trim().length} 个字符 · ${latestResult.schema==='tracking-contract-v1'?'Tracking Contract v1':'旧格式草稿'}`:'优先使用标准 18 列，旧格式保存为待治理草稿';

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

    const canImport=stats.completeEvents>0;
    const state=events.length?(blockingCount?`${blockingCount} 项阻断`:warningCount?'需审核':'契约完整'):'未识别';
    processState.textContent=events.length?(blockingCount?'存在阻断':warningCount?'待治理审核':'契约完整'):'需检查格式';
    processState.className=`prd-process-state ${blockingCount||!events.length?'blocked':warningCount?'needs-review':'ready'}`;
    validationState.textContent=state;
    validationState.className=blockingCount||!events.length?'prd-blocked':warningCount?'prd-needs-review':'prd-valid';
    document.getElementById('prdResultDescription').textContent=events.length?`已生成 ${stats.events} 个事件和 ${stats.params} 个业务字段。${blockingCount?`${blockingCount} 项问题会阻断正式同步。`:`资产对比：${getAssetChangeSummary(assetPlan)}`}`:'暂未识别到事件与 action 的对应关系';
    const formatLabel=latestResult.schema==='tracking-contract-v1'?'Tracking Contract v1':sourceFormat==='tsv'?'旧四列表格':'旧纵向文本';
    liveStatus.innerHTML=events.length?`<strong>已识别 ${stats.events} 个事件</strong><small>${escapeFieldHtml(formatLabel)}${blockingCount?`，${blockingCount} 项阻断`:warningCount?`，${warningCount} 项待审核`:'，可进入设计'}</small>`:'<strong>暂未识别到完整事件</strong><small>请检查事件名称与 action 是否相邻。</small>';
    importButton.disabled=!canImport;

    if(events.length){
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

  input.addEventListener('input',()=>{importedPrdEvents=[];importedPrdValidation=[];importedPrdParserIssues=[];renderResult()});
  clearButton.onclick=()=>{importedPrdEvents=[];importedPrdValidation=[];importedPrdParserIssues=[];input.value='';renderResult();input.focus();showToast('已清空粘贴内容')};
  exampleButton.onclick=()=>{importedPrdEvents=[];importedPrdValidation=[];importedPrdParserIssues=[];input.value=parser.standardExampleText||parser.exampleText;renderResult();input.focus();showToast('已填入 Tracking Contract v1 标准示例')};
  pasteButton.onclick=async()=>{
    input.focus();
    try{
      const clipboardText=await navigator.clipboard.readText();
      if(!clipboardText){showToast('剪贴板中没有文本内容');return}
      importedPrdEvents=[];
      importedPrdValidation=[];
      importedPrdParserIssues=[];
      input.value=clipboardText;
      renderResult();
      showToast(`已粘贴并整理 ${latestResult.stats.events} 个事件`);
    }catch(error){
      showToast('浏览器未授权读取剪贴板，请在输入框中直接粘贴');
    }
  };
  importButton.onclick=()=>{
    if(!latestResult.stats.completeEvents)return;
    importedPrdEvents=latestResult.events.filter(event=>event.label?.trim()&&event.action?.trim()).map(event=>({
      ...event,
      params:event.params.map(param=>({...param}))
    }));
    importedPrdValidation=latestGovernanceResults;
    importedPrdParserIssues=latestResult.issues.map(issue=>({...issue,severity:'error',path:issue.location||'source'}));
    intakeMode='contract';
    analystReviewState={status:'未提交',submittedAt:'',reviewedAt:'',note:''};
    renderRequirementsDesign('contract');
    showToast(`已导入 ${latestResult.stats.completeEvents} 个事件进入方案确认`);
  };
  renderResult();
  requestAnimationFrame(()=>input.focus({preventScroll:true}));
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
  const reviewButtonLabel=blockingIssues.length?`修正 ${blockingIssues.length} 项后送审`:'提交方案评审';
  const renderChange=change=>{
    if(change.type==='create')return `<span class="prd-asset-change is-create"><strong>新增埋点</strong><small>同时建立 ${change.newFields.length} 个字段</small></span>`;
    if(change.type==='fields')return `<span class="prd-asset-change is-update"><strong>补充 ${change.newFields.length} 个字段</strong><small>添加到 ${escapeFieldHtml(change.existingEvent.name)}</small></span>`;
    if(change.type==='metadata')return `<span class="prd-asset-change is-update"><strong>补充治理信息</strong><small>Raw contract 不变</small></span>`;
    return '<span class="prd-asset-change is-none"><strong>无需变更</strong><small>资产中已存在</small></span>';
  };
  const rows=importedPrdEvents.map((event,eventIndex)=>{
    const change=plan[eventIndex]||{type:'none',newFields:[]};
    const params=event.params.length?event.params:[{key:'',description:''}];
    return params.map((param,index)=>{
      const required=synchronizer?.parseBoolean(param.required);
      const nullable=synchronizer?.parseBoolean(param.nullable);
      const rawType=String(param.type||'未声明');
      const canonicalType=String(synchronizer?.normalizeFieldType(param.type,'')||rawType);
      const contract=`Raw ${rawType}${canonicalType!==rawType?` → 规范 ${canonicalType}`:''} · ${required===true?'必填':required===false?'可选':'必填未知'} · ${nullable===true?'可空':nullable===false?'不可空':'可空未知'}`;
      return `<tr${index?' class="prd-param-continuation"':''}>${index===0?`<td rowspan="${params.length}"><strong>${escapeFieldHtml(event.label)}</strong>${event.trigger?`<small class="prd-event-trigger">${escapeFieldHtml(event.trigger)}</small>`:''}</td><td rowspan="${params.length}"><code>${escapeFieldHtml(event.action)}</code><small class="prd-event-meta">${escapeFieldHtml([event.businessDomain,event.module,event.position,event.owner,event.version].filter(Boolean).join(' · ')||'治理信息待补')}</small></td>`:''}<td>${param.key?`<code>${escapeFieldHtml(param.key)}</code>`:'<span class="prd-cell-empty">无额外参数</span>'}</td><td><span class="prd-contract-inline">${escapeFieldHtml(contract)}</span></td><td>${param.description?escapeFieldHtml(param.description):'<span class="prd-cell-empty">待补充说明</span>'}</td>${index===0?`<td rowspan="${params.length}">${renderChange(change)}</td>`:''}</tr>`;
    }).join('');
  }).join('');
  special.classList.add('show');
  const blockerMarkup=blockingIssues.length?`<div class="prd-governance-blocker"><strong>${blockingIssues.length} 项规范错误阻断送审</strong><span>可以返回修改；Raw action/key 不会被平台自动改写。</span><ul>${blockingIssues.slice(0,8).map(issue=>`<li>${escapeFieldHtml(issue.message)}${issue.suggestion?`<small>建议：${escapeFieldHtml(issue.suggestion)}</small>`:''}</li>`).join('')}</ul></div>`:'';
  special.innerHTML=`<section class="prd-result prd-imported-design"><div class="view-panel-head"><div><h2>埋点契约与变更方案</h2><p>确认 Raw contract、触发边界与资产影响后提交方案评审；此时不会写入资产</p></div><div class="prd-result-actions"><button class="btn secondary" id="backToPrdPaste">返回修改</button><button class="btn primary" id="submitAnalystReview"${canSubmitReview?'':' disabled'}>${reviewButtonLabel}</button></div></div><div class="prd-result-summary"><div><span>规范阻断</span><strong${blockingIssues.length?'':' class="prd-valid"'}>${blockingIssues.length} 项</strong></div><div><span>变更事件</span><strong>${createdCount+updatedCount} 个</strong></div><div><span>新增字段</span><strong>${addedFieldCount} 个</strong></div><div><span>无需变更</span><strong>${unchangedCount} 个</strong></div></div>${blockerMarkup}<div class="prd-extract-wrap"><table class="prd-extract-table prd-contract-table"><thead><tr><th>事件与触发</th><th>Raw action</th><th>Raw key</th><th>字段契约</th><th>参数说明</th><th>资产变更</th></tr></thead><tbody>${rows}</tbody></table></div></section>`;
  document.getElementById('backToPrdPaste').onclick=()=>renderRequirementsDesign('paste');
  document.getElementById('submitAnalystReview').onclick=()=>{
    if(!canSubmitReview)return;
    analystReviewState={status:'待评审',submittedAt:new Date().toLocaleString('zh-CN',{hour12:false}),reviewedAt:'',note:''};
    document.querySelector('[data-view="review"]')?.click();
    showToast('已提交到浏览器内的模拟方案评审队列，尚未写入正式资产');
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
    special.innerHTML=`<section class="review-panel review-empty"><div class="view-panel-head"><div><h2>埋点方案评审</h2><p>确认统计目标、用户行为与触发边界、复用决策、字段契约和责任信息</p></div><span class="prototype-badge">原型模拟</span></div><div class="workflow-empty-state"><strong>暂无待评审方案</strong><p>请先在“需求与设计”中粘贴 PRD / 埋点记录，或直接设计标准契约。</p><button class="btn primary" id="goToRequirementsDesign" type="button">前往需求与设计</button></div></section>`;
    addWorkflowBar('review');
    document.getElementById('goToRequirementsDesign').onclick=()=>document.querySelector('[data-view="intake"]')?.click();
    return;
  }
  const synchronizer=globalThis.PrdAssetSync;
  const plan=synchronizer?synchronizer.buildChangePlan(importedPrdEvents,events):[];
  const statusClass={'待评审':'is-pending','需补充':'is-warning','评审通过':'is-approved','已退回':'is-rejected'}[analystReviewState.status]||'is-pending';
  const reviewRows=importedPrdEvents.map((event,index)=>{
    const change=plan[index]||{type:'none',newFields:[]};
    const decision=change.type==='create'?'新增埋点':change.type==='fields'?`已有埋点补 ${change.newFields.length} 个字段`:change.type==='metadata'?'补充治理信息':'复用已有埋点';
    return `<tr><td><strong>${escapeFieldHtml(event.label)}</strong><code>${escapeFieldHtml(event.action)}</code></td><td>${escapeFieldHtml(event.goal||'统计目标随 PRD 提交')}</td><td>${escapeFieldHtml(event.trigger||'待补充')}</td><td>${escapeFieldHtml(event.position||'待补充')}</td><td><span class="review-decision">${decision}</span></td><td>${escapeFieldHtml(event.owner||'待补充')}<small>${escapeFieldHtml(event.version||'版本待补')}</small></td></tr>`;
  }).join('');
  const uniqueFieldCount=importedPrdEvents.reduce((sum,event)=>sum+(event.params||[]).filter(param=>param.key?.trim()).length,0);
  special.innerHTML=`<section class="review-panel"><div class="view-panel-head"><div><h2>埋点方案评审</h2><p>评审通过后才会把方案同步到当前浏览器会话中的埋点资产</p></div><div class="review-head-state"><span class="prototype-badge">评审模拟</span><strong class="review-state ${statusClass}">${escapeFieldHtml(analystReviewState.status)}</strong></div></div><div class="review-summary"><div><span>评审对象</span><strong>${importedPrdEvents.length} 个事件</strong><small>${uniqueFieldCount} 个独有字段</small></div><div><span>统计目标</span><strong>${escapeFieldHtml(importedPrdEvents[0]?.goal||'依据 PRD 统计目标')}</strong><small>需确认指标可以被事件链路回答</small></div><div><span>提交时间</span><strong>${escapeFieldHtml(analystReviewState.submittedAt||'当前会话')}</strong><small>未连接真实审批系统</small></div><div><span>评审责任</span><strong>数据分析牵头</strong><small>产品、开发与测试可共同参与</small></div></div><div class="review-checklist" aria-label="评审范围"><span>统计目标</span><span>触发边界</span><span>复用 / 新增决策</span><span>字段契约</span><span>位置与负责人</span><span>版本</span></div><div class="review-table-wrap"><table class="review-table"><thead><tr><th>事件</th><th>统计目标</th><th>用户行为与上报边界</th><th>位置</th><th>资产决策</th><th>负责人 / 版本</th></tr></thead><tbody>${reviewRows}</tbody></table></div><label class="review-note">评审意见<textarea id="analystReviewNote" placeholder="填写需补充内容，或记录评审通过依据">${escapeFieldHtml(analystReviewState.note)}</textarea></label><div class="review-actions"><p>所有状态和资产同步仅保留在当前浏览器会话，不代表生产评审或审批已经完成。</p><div><button class="btn secondary" id="requestReviewChanges" type="button"${analystReviewState.status==='评审通过'?' disabled':''}>退回补充</button><button class="btn primary" id="approveAnalystReview" type="button"${analystReviewState.status==='评审通过'?' disabled':''}>评审通过并同步模拟资产</button></div></div></section>`;
  addWorkflowBar('review');
  document.getElementById('requestReviewChanges').onclick=()=>{
    analystReviewState.status='需补充';
    analystReviewState.note=document.getElementById('analystReviewNote').value.trim()||'请补充统计目标、触发边界或字段口径';
    analystReviewState.reviewedAt=new Date().toLocaleString('zh-CN',{hour12:false});
    intakeMode='contract';
    document.querySelector('[data-view="intake"]')?.click();
    showToast('模拟评审已退回补充，正式资产未发生变化');
  };
  document.getElementById('approveAnalystReview').onclick=()=>{
    analystReviewState.note=document.getElementById('analystReviewNote').value.trim()||'字段契约与触发边界已确认';
    const result=syncApprovedReview();
    if(!result.ok){showToast(result.message);return}
    analystReviewState.status='评审通过';
    analystReviewState.reviewedAt=new Date().toLocaleString('zh-CN',{hour12:false});
    renderAnalystReview();
    showToast('模拟评审已通过，变更仅同步到当前浏览器会话资产');
  };
}

const issueHandlingRecords=[];
function renderIssueHandling(){
  const special=document.getElementById('specialView');
  special.classList.add('show');
  const statusOrder=['待确认','处理中','待验证','已关闭'];
  const recordRows=issueHandlingRecords.map((record,index)=>`<div class="handling-row"><div><strong>${escapeFieldHtml(record.type)}</strong><code>${escapeFieldHtml(record.action)}</code></div><span>${escapeFieldHtml(record.warehouseObject||'未填写')}</span><span>${escapeFieldHtml(record.impact)}</span><span>${escapeFieldHtml(record.owner)}</span><b class="handling-status">${escapeFieldHtml(record.status)}</b><button type="button" data-advance-issue="${index}"${record.status==='已关闭'?' disabled':''}>${record.status==='待验证'?'关闭':'推进'}</button></div>`).join('')||'<div class="handling-empty">当前浏览器会话还没有问题记录</div>';
  special.innerHTML=`<section class="issue-handling-panel"><div class="view-panel-head"><div><h2>问题处置</h2><p>承接上线后的上报报错、火山 / 数仓聚合反馈、数据质量反馈和停用下架申请</p></div><span class="prototype-badge">工单原型模拟</span></div><div class="handling-type-strip"><div><strong>上报异常</strong><small>漏报、重复、参数或接口报错</small></div><div><strong>聚合口径反馈</strong><small>火山指标与数仓聚合定义</small></div><div><strong>数据质量反馈</strong><small>延迟、突增、缺失和异常值</small></div><div><strong>停用下架申请</strong><small>评估、迁移、观察后审批停用</small></div></div><div class="issue-handling-layout"><form class="handling-form" id="issueHandlingForm"><h3>新建问题记录</h3><label>问题类型<select id="handlingType"><option>上报报错</option><option>聚合口径反馈</option><option>数据质量反馈</option><option>停用下架申请</option></select></label><label>关联 action<select id="handlingAction">${events.map(event=>`<option>${escapeFieldHtml(event.name)}</option>`).join('')}</select></label><label>火山 / 数仓对象<input id="handlingWarehouseObject" placeholder="例如：dws_a1_event_daily / 火山指标名" /></label><label>发现来源<select id="handlingSource"><option>数据分析巡检</option><option>产品反馈</option><option>开发 / 测试反馈</option><option>数仓反馈</option><option>火山看板反馈</option></select></label><label>影响范围<textarea id="handlingImpact" required placeholder="说明影响的指标、时间范围、端和用户"></textarea></label><label>负责人<input id="handlingOwner" required placeholder="产品、数据、前端或数仓负责人" /></label><label>证据链接或说明<textarea id="handlingEvidence" placeholder="报错截图、查询 SQL、看板链接或复现步骤"></textarea></label><button class="btn primary" type="submit">创建模拟问题记录</button><p>提交只创建当前浏览器会话中的模拟工单，不会停止上报，也不会改写 Raw action、字段或生命周期。</p></form><aside class="retirement-flow"><h3>停用下架处理约束</h3><ol><li><strong>影响评估</strong><span>确认看板、指标与下游任务依赖</span></li><li><strong>调用迁移</strong><span>选择 keep、alias、dual_write 或 replace</span></li><li><strong>数据观察</strong><span>比较新旧口径并完成观察期</span></li><li><strong>审批停用</strong><span>业务、数据和研发共同确认后执行</span></li></ol><p>平台原型不会因创建下架申请而直接修改现有埋点状态。</p></aside></div><section class="handling-list"><div class="handling-list-head"><span>类型 / action</span><span>火山或数仓对象</span><span>影响范围</span><span>负责人</span><span>状态</span><span></span></div><div id="handlingRows">${recordRows}</div></section></section>`;
  document.getElementById('issueHandlingForm').onsubmit=event=>{
    event.preventDefault();
    issueHandlingRecords.unshift({
      type:document.getElementById('handlingType').value,
      action:document.getElementById('handlingAction').value,
      warehouseObject:document.getElementById('handlingWarehouseObject').value.trim(),
      source:document.getElementById('handlingSource').value,
      impact:document.getElementById('handlingImpact').value.trim(),
      owner:document.getElementById('handlingOwner').value.trim(),
      evidence:document.getElementById('handlingEvidence').value.trim(),
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

function addWorkflowBar(active){
  const steps=[['intake','需求与设计'],['review','方案评审'],['development','开发实现'],['debug','上报调试'],['acceptance','验收上线']];
  const activeIndex=steps.findIndex(step=>step[0]===active);
  document.getElementById('specialView').insertAdjacentHTML('afterbegin',`<div class="workflow-bar">${steps.map((step,index)=>`<div class="workflow-step ${index<activeIndex?'complete':index===activeIndex?'active':''}"><span>${index<activeIndex?'✓':index+1}</span><strong>${step[1]}</strong>${step[0]==='development'?'<small>代码实现</small>':''}</div>`).join('')}</div>`);
}

function renderAcceptance(){
  const special=document.getElementById('specialView');
  special.classList.add('show');
  special.innerHTML=`<section class="acceptance-overview"><div class="acceptance-head"><div><span>待验收需求</span><h2>首页滤镜瀑布流优化</h2><p>来源：PixPop_首页滤镜优化_v1.3.docx</p></div><b>待最终确认</b></div><div class="acceptance-status"><div><span>埋点设计</span><strong class="passed">已确认</strong><small>3 个事件 · 6 个参数</small></div><div><span>开发实现</span><strong class="passed">已完成</strong><small>Web / PC</small></div><div><span>上报调试</span><strong class="watch">2 / 3 通过</strong><small>1 项等待复测</small></div><div><span>验收负责人</span><strong>林晓</strong><small>产品数据平台</small></div></div></section><section class="acceptance-table-panel"><div class="view-panel-head"><div><h2>事件验收清单</h2><p>核对触发、参数、位置和测试上报结果</p></div><div class="acceptance-actions"><button class="btn secondary" id="returnAcceptance">退回修改</button><button class="btn primary" id="confirmAcceptance">确认验收上线</button></div></div><div class="acceptance-table-head"><span>事件</span><span>触发时机</span><span>参数</span><span>位置绑定</span><span>测试结果</span></div><div class="acceptance-row"><div><code>app_click</code><small>滤镜点击</small></div><span>点击滤镜卡片</span><span>2 / 2 完整</span><span>首页 / 滤镜瀑布流</span><b class="pass">通过</b></div><div class="acceptance-row"><div><code>app_visit</code><small>滤镜访问</small></div><span>滤镜区域曝光</span><span>2 / 2 完整</span><span>首页 / 滤镜瀑布流</span><b class="pass">通过</b></div><div class="acceptance-row" id="pendingAcceptance"><div><code>generate_intention</code><small>生成意愿</small></div><span>点击生成入口</span><span>2 / 2 完整</span><span>首页 / 滤镜瀑布流</span><b class="pending">待复测</b></div><div class="acceptance-note"><span></span><p><strong>待复测项</strong><small>generate_intention 在 H5 端首次点击时未收到上报，开发已修复。</small></p><button class="btn secondary" id="markRetested">标记复测通过</button></div></section>`;
  addWorkflowBar('acceptance');
  document.getElementById('markRetested').onclick=()=>{const status=document.querySelector('#pendingAcceptance b');status.textContent='通过';status.className='pass';document.querySelector('.acceptance-status>div:nth-child(3) strong').textContent='3 / 3 通过';document.querySelector('.acceptance-status>div:nth-child(3) strong').className='passed';document.querySelector('.acceptance-note').classList.add('hidden');showToast('复测结果已更新为通过')};
  document.getElementById('returnAcceptance').onclick=()=>showToast('已退回埋点设计，等待修改');
  document.getElementById('confirmAcceptance').onclick=()=>{const pending=document.querySelector('#pendingAcceptance b');if(pending.classList.contains('pending')){showToast('仍有待复测事件，暂不能确认上线');return}showToast('原型验收流程已完成，未写入正式资产')};
}

function renderAcceptanceV2(){
  renderAcceptance();
  const states=document.querySelectorAll('.acceptance-status > div');
  if(states[0]){
    states[0].querySelector('span').textContent='需求与设计';
    states[0].querySelector('strong').textContent='已确认';
  }
  if(states[3]){
    states[3].querySelector('span').textContent='方案评审';
    states[3].querySelector('strong').textContent='评审通过';
    states[3].querySelector('strong').className='passed';
    states[3].querySelector('small').textContent='浏览器模拟记录';
  }
  document.getElementById('returnAcceptance').onclick=()=>showToast('已退回上报调试，等待重新联调');
}
function configurePrimaryAction(view){
  const button=document.getElementById('addBtn');
  const actions={
    intake:{label:'＋ 直接设计',run:()=>renderRequirementsDesign('direct')},
    review:{label:'＋ 新建评审方案',run:()=>document.querySelector('[data-view="intake"]')?.click()},
    debug:{label:'＋ 新建模拟上报',run:()=>document.getElementById('reportEvent')?.focus()},
    acceptance:{label:'查看验收清单',run:()=>document.querySelector('.acceptance-table-panel')?.scrollIntoView({block:'start'})},
    issues:{label:'＋ 新建问题',run:()=>document.getElementById('handlingType')?.focus()},
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
  document.querySelector('.head-actions')?.classList.toggle('view-hidden',isAssetManagementView);
  document.getElementById('page-subtitle')?.classList.toggle('view-hidden',isAssetManagementView);
  if(view==='intake')renderRequirementsDesign();
  else if(view==='review')renderAnalystReview();
  else if(view==='debug'){
    renderTrackingReportLegacy();
    addWorkflowBar('debug');
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
  {key:'other',label:'其他字段',hint:'仅凭字段名暂无法判断'}
];

const EVENT_HIDDEN_PRESENTATION_FIELDS={
  app_visit:new Set([
    'short_id/pub_id/ app_id 三者共存',
    'origin（新）9.14上线/详情可展开',
    'current_tab/详情可展开',
    'click_object/详情可展开'
  ])
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
  'search.search_method':{meaning:'用户发起本次搜索所采用的入口或方式。',valueMeaningSource:'frontend_code',values:{input:'用户手动输入搜索内容',individuation:'点击个性化搜索推荐词',history:'点击历史搜索词',top_search:'点击顶部热搜词',hot_today:'今日热门列表场景'}},
  'search.search_content':{meaning:'用户本次提交的原始搜索关键词，typed 调用直接取当前 appFilters.keyword。'},
  'search.post_result_num':{meaning:'本次搜索返回的帖子结果总数，取 pageInfo.postPageTotal；没有结果或接口未返回时上报 0。'},
  'search.user_result_num':{meaning:'本次搜索返回的用户结果总数，取 pageInfo.userPageTotal；没有结果或接口未返回时上报 0。'},
  'search.creator_result_num':{meaning:'本次搜索返回的滤镜或 App 结果总数，字段名沿用 creator_result_num，实际取 pageInfo.appPageTotal；没有结果或接口未返回时上报 0。'},
  'search.search_content_en':{meaning:'搜索关键词对应的英文内容，取搜索记录器中的 searchInfo.keyword_en。'},
  'search.result_num':{meaning:'legacy 搜索链路的当前页签结果数；仅 current_tab=app 时传入 App 结果数，其他页签固定传 0。'},
  'search_history_delete.delete_num':{meaning:'用户本次删除搜索历史的范围。字段名虽然包含 num，实际记录删除类型而不是数量。',valueMeaningSource:'frontend_code',values:{delete_all:'清空全部搜索历史',delete_one:'删除单条搜索历史'}},
  'query_exposure.search_method':{meaning:'本批搜索词在页面曝光时所属的推荐或历史来源。',valueMeaningSource:'frontend_code',values:{input:'用户手动输入搜索内容',individuation:'个性化推荐搜索词',history:'历史搜索词',top_search:'顶部热搜词',hot_today:'今日热门搜索词'}},
  'query_exposure.search_content':{meaning:'本次进入可视区域的一组搜索词，按 string[] 数组批量上报；内容来自热搜、搜索历史或个性化推荐词列表。'},
  'cold_start_click.app_source':{meaning:'用户在冷启动推荐弹窗中点击推荐 App 时，标识该推荐所属的业务来源。当前前端调用固定上报 onboarding_old。',valueMeaningSource:'frontend_code',values:{onboarding_old:'旧版新用户冷启动推荐流程'}},
  'cold_start_click.commend_label':{meaning:'用户点击的冷启动推荐 App 对应的推荐标签，直接读取当前推荐资源的 source；该值由推荐数据动态返回，前端未限制固定枚举。'},
  'push_button_click.locaiton':{meaning:'用户点击通知权限开启按钮时所在的业务入口。Raw key 为代码现状中的 locaiton 拼写，本次仅补充说明，不自动改写为 location。',valueMeaningSource:'frontend_code',values:{check_in_page:'签到页中的通知权限开启入口，包括现行与新版签到组件',view_later:'“稍后查看”引导弹窗中的通知权限开启入口'}},
  'push_message_click.push_id':{meaning:'用户点击通知进入 App 时关联的 Push 消息唯一 ID；URL 未携带 pushId 时前端上报空字符串。'},
  'push_message_click.push_type':{meaning:'用户点击通知进入 App 时关联的 Push 消息类型；URL 未携带 pushType 时前端上报空字符串。'},
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
  'tasklist_entrance_click.state':{meaning:'任务列表入口被操作时的任务状态，由 legacy BaseListener 原样传入，前端未限制具体枚举。'},
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
  'history_click.method':{meaning:'用户浏览历史任务时采用的交互方式。',example:'click'},
  'registration_pop_up.method':{meaning:'注册或登录弹窗完成账号操作时采用的认证方式。',example:'email'},
  'autologin.method':{meaning:'自动登录成功时识别出的认证方式。',example:'email'},
  'login_button_click.method':{meaning:'用户点击登录入口时选择的登录方式。',example:'email'},
  'login_success.method':{meaning:'登录或注册成功时实际采用的认证方式。',example:'email'},
  'register.method':{meaning:'注册事件携带的注册方式；当前前端仅通过通用参数转发，代码未限制具体枚举。',example:'example_value'}
};

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
  const eventSemantic=EVENT_FIELD_SEMANTICS[`${field.eventName}.${rawKey}`]||EVENT_FIELD_SEMANTICS[`${field.eventName}.${key}`];
  const commonSemantic=COMMON_LOCATION_SEMANTICS[key];
  if(commonSemantic){
    return eventSemantic
      ? {...commonSemantic,...eventSemantic,values:{...commonSemantic.values,...(eventSemantic.values||{})}}
      : commonSemantic;
  }
  return eventSemantic||FIELD_SEMANTICS[key]||null;
}

function hasUsefulFieldDescription(field){
  const description=String(field.description||'').trim();
  return Boolean(description)&&!/(属性说明见原始表|legacy.*(?:调用点|静态输出字段)|代码.*(?:直接传入|自动解析)|字段说明待补|^可选值：|^代码定义\s*\d+\s*个可选值)/i.test(description);
}

function getFieldExample(field){
  if(field.allowedValues?.length)return String(field.allowedValues[0]);
  const semantic=getFieldSemantic(field);
  if(semantic)return semantic.example;
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
  if(semantic?.valueMeaningSource==='frontend_code'&&semantic?.values&&Object.keys(semantic.values).length)return {label:'可选值',values:Object.keys(semantic.values),source:'前端代码场景归纳'};
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

function getEventPayloadExample(event){
  if(EVENT_PAYLOAD_EXAMPLES[event.name])return {payload:EVENT_PAYLOAD_EXAMPLES[event.name],kind:'用户提供的完整上报样例'};
  const properties={};
  normalizeEventFields(event).forEach(field=>{
    const example=getFieldExample(field);
    if(example==='example_value')return;
    properties[field.rawName]=example==='false'?false:example==='20'?20:example;
  });
  return {payload:{action:event.name,business_type:'A1',device_type:'PC',distinct_id:'example_distinct_id',sessionId:'example_session_id',theme:event.theme==='-'?'behaviour':event.theme,time:Date.now(),user_id:'example_user_id',properties},kind:'按当前契约生成的模拟样例'};
}

function renderPayloadExample(event){
  const example=getEventPayloadExample(event);
  const json=JSON.stringify(example.payload,null,2);
  const commonCount=Object.keys(example.payload).filter(key=>key!=='properties').length;
  return `<details class="drawer-section drawer-disclosure payload-example-section"><summary><span>完整上报数据</span><small>${commonCount} 个公共字段 + ${Object.keys(example.payload.properties||{}).length} 个独有字段</small></summary><div class="drawer-disclosure-body"><div class="payload-actions"><span>${escapeFieldHtml(example.kind)}</span><button class="payload-copy" id="copyEventPayload" type="button">复制 JSON</button></div><p class="payload-example-note">模拟数据，仅用于契约说明和本地调试。</p><pre id="eventPayloadExample">${escapeFieldHtml(json)}</pre></div></details>`;
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
  return `<button class="field-contract-summary" data-open-event="${escapeFieldHtml(event.name)}" title="查看 ${fields.length} 个事件独有字段" aria-label="查看 ${escapeFieldHtml(event.name)} 的字段契约"><strong>${fields.length} 个字段</strong><span>${explained} 已说明${pending?` · <b>${pending} 待完善</b>`:' · 说明完整'}</span><i style="--field-progress:${Math.round(explained/fields.length*100)}%"></i></button>`;
}

function renderFieldRow(field){
  const primaryName=field.originalChanged?field.canonicalName:field.displayName;
  const originalMarkup=field.originalChanged?`<small class="field-original"><span>Raw</span><code>${escapeFieldHtml(field.displayName)}</code></small>`:'';
  const range=getFieldValueRange(field);
  const semantic=getFieldSemantic(field);
  const valueMeanings=semantic?.values||{};
  const hasValueMeanings=semantic?.valueMeaningSource==='frontend_code'&&range.values.some(value=>valueMeanings[String(value)]);
  const rangeMarkup=range.values.length
    ?`<div class="field-enum-values${hasValueMeanings?' has-value-meanings':''}">${range.values.map(value=>{const displayValue=typeof value==='string'?value:JSON.stringify(value);const valueMeaning=hasValueMeanings?valueMeanings[String(value)]:'';return `<div><code>${escapeFieldHtml(displayValue)}</code>${valueMeaning?`<span>：${escapeFieldHtml(valueMeaning)}</span>`:''}</div>`;}).join('')}</div>`
    :'';
  const codeReferences=getFieldCodeReferences(field);
  const fieldName=String(field.canonicalName||field.rawName||'').toLowerCase();
  const hideExample=['location1','location2','entry_point'].includes(fieldName)||semantic?.suppressValues;
  const example=getFieldExample(field);
  const hasReliableExample=example&&example!=='example_value';
  const meaningMarkup=range.derivedFromDescription?'':`<span>业务含义</span><p>${escapeFieldHtml(getFieldReportingLogic(field))}</p>`;
  const valueMarkup=range.values.length
    ?`<span>可选值</span>${rangeMarkup}`
    :hideExample||!hasReliableExample?'':`<span>示例</span><code>${escapeFieldHtml(example)}</code>`;
  return `<div class="field-row" data-field-search="${escapeFieldHtml(`${field.searchable} ${getFieldReportingLogic(field)} ${hasReliableExample?example:''} ${range.values.join(' ')} ${Object.values(valueMeanings).join(' ')} ${codeReferences.map(reference=>reference.location).join(' ')}`)}"><div class="field-identity"><div class="field-name-line"><code>${escapeFieldHtml(primaryName)}</code></div>${originalMarkup}</div><div class="field-reporting">${meaningMarkup}${valueMarkup}</div></div>`;
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
  const button=document.getElementById('copyEventPayload');
  const payload=document.getElementById('eventPayloadExample');
  if(!button||!payload)return;
  button.onclick=async()=>{
    try{
      await navigator.clipboard.writeText(payload.textContent);
      button.textContent='已复制';
    }catch(error){
      button.textContent='复制失败';
    }
    setTimeout(()=>{button.textContent='复制 JSON'},1400);
  };
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
    allPath:'全部工作线',
    clearTitle:'查看全部工作线',
    columnHeader:'工作线 / 模块',
    drawerDomainLabel:'主要工作线',
    drawerModuleLabel:'工作模块',
    similarLabel:'按工作线与模块匹配'
  };
}

function getEventReportingLogic(event,classification=getCatalogClassification(event)){
  const logic=globalThis.CatalogTaxonomy?.getReportingLogic?.(event,classification);
  return logic||{
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
    ||(filters.tab==='volcano'&&isVolcanoTrackingSource(event))
    ||(filters.tab==='governance'&&event.governanceAssessment?.status!=='ready')
    ||(filters.tab==='issue'&&IN_PROGRESS_STATUSES.has(event.status))
    ||(filters.tab==='unused'&&event.status==='已停用');
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
  const labels=getCatalogViewLabels();
  const journeyCount=activeEvents.filter(event=>getCatalogWorkstreamClassification(event).journeyKey==='main_flow').length;
  const journeyButton=document.querySelector('[data-catalog-journey="main_flow"]');
  const isAll=!catalogSelection.journeyKey&&!catalogSelection.workstream&&!catalogSelection.workstreamModule;
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
  tree.querySelectorAll('[data-catalog-module]').forEach(button=>button.addEventListener('click',()=>setCatalogWorkstreamModule(button.dataset.catalogModuleWorkstream,button.dataset.catalogModule)));

  const clearButton=document.getElementById('clearCatalogSelection');
  const filters=getCatalogFilterState();
  const hasBaseFilter=Boolean(filters.query)||filters.evidence!=='all'||filters.tab!=='all';
  clearButton.disabled=isAll&&!hasBaseFilter;
  clearButton.title=clearButton.disabled?`当前已显示${labels.allPath}`:'重置全部目录和筛选';
  clearButton.setAttribute('aria-label',clearButton.disabled?labels.clearTitle:'重置全部目录和筛选');
}

document.querySelector('[data-catalog-journey="main_flow"]')?.addEventListener('click',()=>setCatalogJourney('main_flow'));
document.getElementById('clearCatalogSelection')?.addEventListener('click',()=>{
  resetCatalogSelection();
  if(document.getElementById('search'))document.getElementById('search').value='';
  if(document.getElementById('evidence'))document.getElementById('evidence').value='all';
  document.querySelectorAll('.tab').forEach(tab=>tab.classList.toggle('active',tab.dataset.tab==='all'));
  render();
});
const mainFlowScopeButton=document.querySelector('[data-catalog-journey="main_flow"]');
if(mainFlowScopeButton){
  mainFlowScopeButton.title='固定清单：成员、模块与顺序不会随代码扫描改变';
}

const EVENT_TABLE_COLUMN_GROUP='<colgroup><col class="event-col-action"><col class="event-col-logic"><col class="event-col-contract"><col class="event-col-evidence"><col class="event-col-detail"></colgroup>';
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
    const classification=getCatalogViewClassification(event);
    const assetClassification=getCatalogClassification(event);
    const reportingLogic=getEventReportingLogic(event,getCatalogClassification(event));
    const actionName=event.name;
    const reportingText=reportingLogic.text||'上报时机待确认';
    const evidenceCopy=getTrackingSourceEvidence(event,assetClassification);
    return `<tr data-event-name="${escapeFieldHtml(event.name)}" tabindex="0" aria-label="查看 ${escapeFieldHtml(actionName)}，${escapeFieldHtml(reportingText)}详情"><td><span class="event-action-line"><code class="event-action-name" title="英文 action：${escapeFieldHtml(actionName)}">${escapeFieldHtml(actionName)}</code></span></td><td><span class="event-action-logic" title="${escapeFieldHtml(reportingText)}">${escapeFieldHtml(reportingText)}</span></td><td>${renderFieldContractSummary(event)}</td><td><span class="catalog-evidence source-evidence" title="${escapeFieldHtml(evidenceCopy.title)}"><b class="source-kind is-${escapeFieldHtml(evidenceCopy.source)}">${escapeFieldHtml(evidenceCopy.label)}</b><small>${escapeFieldHtml(evidenceCopy.detail)}</small></span></td><td><button class="row-action" data-open-event="${escapeFieldHtml(event.name)}" title="查看详情" aria-label="查看 ${escapeFieldHtml(actionName)} 详情">›</button></td></tr>`;
  }).join('')||'<tr><td class="event-table-empty" colspan="5">没有匹配的埋点</td></tr>';
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
    return `<tr><td><code class="event-action-name">${escapeFieldHtml(event.name)}</code></td><td><span class="event-action-logic">${escapeFieldHtml(reporting.text||'上报逻辑待确认')}</span></td><td>${renderFieldContractSummary(event)}</td><td><span class="catalog-evidence"><b class="evidence-label is-${isDefined?'defined':'manual'}">${label}</b><small>${detail}</small></span></td><td><button class="row-action" type="button" data-open-deprecated-event="${escapeFieldHtml(event.name)}" aria-label="查看 ${escapeFieldHtml(event.name)} 详情">›</button></td></tr>`;
  }).join('')||'<tr><td colspan="5" class="event-table-empty">当前没有此类埋点</td></tr>';
  special.classList.add('show');
  special.innerHTML=`<section class="deprecated-summary" aria-label="废弃埋点候选说明"><div><span>候选总数</span><strong>${candidates.length}</strong><small>已排除固定主流程与 subscribe_cancel</small></div><div><span>仅有定义</span><strong>${defined.length}</strong><small>未发现实际调用位置</small></div><div><span>暂无代码证据</span><strong>${unresolved.length}</strong><small>人工资产或代码未解析</small></div></section><section class="deprecated-group"><div class="view-panel-head"><div><h2>仅有定义</h2><p>代码中声明了 action，但没有找到实际调用上报函数的位置</p></div><span>${defined.length} 个</span></div><div class="deprecated-table-wrap"><table><thead><tr><th>埋点 action</th><th>上报逻辑</th><th>字段契约</th><th>静态证据</th><th></th></tr></thead><tbody>${renderCandidateRows(defined)}</tbody></table></div></section><section class="deprecated-group"><div class="view-panel-head"><div><h2>暂无代码证据</h2><p>人工维护的资产，或当前扫描无法从前端代码解析</p></div><span>${unresolved.length} 个</span></div><div class="deprecated-table-wrap"><table><thead><tr><th>埋点 action</th><th>上报逻辑</th><th>字段契约</th><th>静态证据</th><th></th></tr></thead><tbody>${renderCandidateRows(unresolved)}</tbody></table></div></section>`;
  special.querySelectorAll('.deprecated-table-wrap table').forEach(table=>table.insertAdjacentHTML('afterbegin',EVENT_TABLE_COLUMN_GROUP));
  special.querySelectorAll('[data-open-deprecated-event]').forEach(button=>button.onclick=()=>openDrawerV2(events.find(event=>event.name===button.dataset.openDeprecatedEvent)));
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

function renderCodeEvidence(event){
  const evidence=event.codeEvidence;
  if(!evidence)return '';
  const repository=evidence.repository||{};
  const commit=repository.commitShort||String(repository.commit||'').slice(0,10)||'未知版本';
  const namespace=(evidence.namespaces||[]).join(' / ')||'未分类';
  const contracts=evidence.contracts||event.wireContracts||[];
  const usageBase=evidence.callSiteCount?`${evidence.callSiteCount} 个直接调用点`:'未发现直接调用点';
  const usage=evidence.deprecated?`${usageBase} · 已标记弃用`:usageBase;
  const usageState=evidence.callSiteCount?'is-called':'is-defined-only';
  const contractMarkup=contracts.length>1?`<div class="wire-contract-list"><h4>独立 Wire Contract</h4>${contracts.map(contract=>`<div><code>${escapeFieldHtml(contract.namespace)}</code><span>${(contract.fields||[]).length} 个字段 · ${(contract.callSites||[]).length} 个调用点</span><small>${escapeFieldHtml(contract.contractId)}</small></div>`).join('')}</div>`:'';
  return `<details class="drawer-section drawer-disclosure code-evidence-section"><summary><span>前端代码来源</span><small>${escapeFieldHtml(usage)}</small></summary><div class="drawer-disclosure-body"><div class="code-revision"><div><span>仓库版本</span><strong>${escapeFieldHtml(repository.name||'fe-a1-art')} / ${escapeFieldHtml(repository.branch||'未知分支')} · <code>${escapeFieldHtml(commit)}</code></strong></div><div><span>埋点通道</span><strong>${escapeFieldHtml(namespace)}</strong></div></div>${contractMarkup}<div class="code-reference-grid"><div><h4>定义位置</h4>${renderCodeReferences(evidence.definitions,'仅发现调用，未找到集中定义')}</div><div><h4>调用位置</h4>${renderCodeReferences(evidence.callSites,'代码中已定义，暂未发现直接调用')}</div></div></div></details>`;
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
  document.getElementById('drawerAction').textContent=event.name;
  document.getElementById('drawerReportingLogic').textContent=reportingLogic.text;
  document.getElementById('drawerContent').innerHTML=`<section class="drawer-section field-explorer-section"><div class="section-line field-explorer-head"><h3>事件独有字段</h3><label class="field-search">⌕<input id="drawerFieldSearch" type="search" placeholder="搜索字段" aria-label="搜索事件独有字段" /></label></div>${renderFieldExplorer(event)}</section><div class="drawer-secondary">${renderAggregationGuide(event)}<details class="drawer-section drawer-disclosure reporting-source-section"><summary><span>上报规则来源</span><small>${escapeFieldHtml(reportingLogic.behaviorLabel)}</small></summary><div class="drawer-disclosure-body"><p>${escapeFieldHtml(reportingLogic.evidenceText)}</p></div></details>${renderCodeEvidence(event)}${renderGovernanceAssessment(event)}${renderPayloadExample(event)}<details class="drawer-section drawer-disclosure"><summary><span>相似事件</span><small>${escapeFieldHtml(labels.similarLabel)}</small></summary><div class="drawer-disclosure-body"><div class="similar-list">${similar.map(item=>{const itemClassification=getCatalogViewClassification(item);const itemLogic=getEventReportingLogic(item,getCatalogClassification(item));const itemCollaboration=(itemClassification.collaborationTags||[]).length?` · 协作：${itemClassification.collaborationTags.join('、')}`:'';return `<button data-similar="${escapeFieldHtml(item.name)}"><strong class="similar-action-name">${escapeFieldHtml(item.name)}</strong><span class="similar-action-logic">${escapeFieldHtml(itemLogic.text)}</span><small>${escapeFieldHtml(itemClassification.businessDomain)} / ${escapeFieldHtml(itemClassification.businessModule)}${escapeFieldHtml(itemCollaboration)}</small></button>`;}).join('')||'<p class="code-evidence-empty">当前目录下暂无相似事件</p>'}</div></div></details><div class="source-note">来源：${escapeFieldHtml(event.source)} · Raw 分类：${escapeFieldHtml(event.group)} / ${escapeFieldHtml(event.domain)} · Theme：${escapeFieldHtml(event.theme)}</div></div>`;
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
  sidebarToggle.querySelector('span').textContent=collapsed?'›':'‹';
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
const liquidSurfaceSelector='.nav-item,.workspace-btn,.sidebar-toggle,.top-search,.btn,.row-action,.field-preview,.field-toggle-all,.similar-list button,.location-tree button,.common-field-row button,.icon-btn';
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
  if(!reduceLiquidMotion.matches&&typeof surface.animate==='function'){
    surface.animate(
      [{scale:.975},{scale:1.012,offset:.52},{scale:1}],
      {duration:340,easing:'cubic-bezier(.16,1,.3,1)'}
    );
  }
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

const locationViewState={module:'all',query:'',evidence:'all'};
const locationScreenshotPreviews=new Map();
const switchViewWithoutCodeLocations=switchView;
switchView=function switchViewWithCodeLocations(view){
  switchViewWithoutCodeLocations(view);
  if(view==='locations')renderLocationsView();
};

function locationModuleFromReference(reference){
  const parts=String(reference?.file||'').replace(/\\/g,'/').split('/').filter(Boolean);
  const rootIndex=parts.findIndex(part=>part==='src'||part==='packages');
  if(rootIndex>=0&&parts[rootIndex+1])return `${parts[rootIndex]}/${parts[rootIndex+1]}`;
  return parts.length>1?parts.slice(0,-1).join('/'):'未分模块';
}

function getLocationRecords(){
  const records=[];
  events.forEach(event=>(event.codeEvidence?.callSites||[]).forEach((reference,index)=>{
    const classification=getCatalogClassification(event);
    const reportingLogic=getEventReportingLogic(event,classification);
    const filename=String(reference.file||'').split(/[\\/]/).pop()||'未识别组件';
    records.push({
      id:`${event.name}:${reference.file||''}:${reference.line||index}`,
      event,reference,reportingLogic,
      module:locationModuleFromReference(reference),
      component:filename.replace(/\.(?:tsx?|jsx?|vue)$/i,''),
      verified:['declared','verified'].includes(reportingLogic.behaviorSource)
    });
  }));
  return records;
}

function renderLocationsView(){
  const records=getLocationRecords();
  const modules=[...new Set(records.map(record=>record.module))].sort((a,b)=>a.localeCompare(b));
  if(locationViewState.module!=='all'&&!modules.includes(locationViewState.module))locationViewState.module='all';
  const query=locationViewState.query.toLowerCase();
  const filtered=records.filter(record=>{
    const evidenceMatch=locationViewState.evidence==='all'||(locationViewState.evidence==='verified'?record.verified:!record.verified);
    const search=[record.event.name,record.module,record.component,record.reference.file,record.reportingLogic.text].join(' ').toLowerCase();
    return (locationViewState.module==='all'||record.module===locationViewState.module)&&evidenceMatch&&(!query||search.includes(query));
  });
  const repository=frontendTrackingManifest?.repository||{};
  const commit=repository.commitShort||String(repository.commit||'').slice(0,10)||'未知版本';
  const moduleRows=modules.map(module=>`<button type="button" class="${locationViewState.module===module?'tree-active':''}" data-location-module="${escapeFieldHtml(module)}"><span>${escapeFieldHtml(module)}</span><b>${records.filter(record=>record.module===module).length}</b></button>`).join('');
  const recordRows=filtered.slice(0,100).map((record,index)=>renderLocationRecord(record,index)).join('');
  document.getElementById('specialView').innerHTML=`
    <div class="location-summary" role="status">
      <div><span>代码调用点</span><strong>${records.length}</strong><small>${new Set(records.map(record=>record.event.name)).size} 个 action</small></div>
      <div><span>代码模块</span><strong>${modules.length}</strong><small>按前端目录自动整理</small></div>
      <div><span>代码版本</span><strong class="location-commit">${escapeFieldHtml(commit)}</strong><small>${escapeFieldHtml(repository.branch||'未知分支')}</small></div>
      <div><span>截图资产</span><strong>${locationScreenshotPreviews.size}</strong><small>仅当前浏览器会话</small></div>
    </div>
    <div class="location-toolbar"><label class="location-search">⌕<input id="locationSearch" value="${escapeFieldHtml(locationViewState.query)}" placeholder="搜索 action、组件或代码路径" /></label><select id="locationEvidence" aria-label="筛选位置证据"><option value="all">全部证据</option><option value="verified" ${locationViewState.evidence==='verified'?'selected':''}>已核实</option><option value="review" ${locationViewState.evidence==='review'?'selected':''}>待人工确认</option></select><span>显示 ${filtered.length} / ${records.length} 个调用位置</span></div>
    <div class="location-layout"><aside class="location-tree"><div class="location-tree-head"><h2>前端代码模块</h2><small>以调用文件目录为候选位置</small></div><button type="button" class="${locationViewState.module==='all'?'tree-active':''}" data-location-module="all"><span>全部模块</span><b>${records.length}</b></button>${moduleRows}</aside>
    <section class="location-main"><div class="view-panel-head"><div><h2>${locationViewState.module==='all'?'全部前端位置':escapeFieldHtml(locationViewState.module)}</h2><p>位置由代码调用点推导，页面和业务区域需负责人确认</p></div><button class="btn secondary" id="locationScreenshotInfo" type="button">截图入口说明</button></div><div class="location-record-head"><span>#</span><span>组件 / 调用位置</span><span>Action / 通道</span><span>证据</span><span>截图</span></div><div class="location-records">${recordRows||'<div class="location-empty"><strong>没有匹配的位置证据</strong><p>请调整搜索、模块或证据筛选。</p></div>'}</div>${filtered.length>100?'<div class="location-limit">当前展示前 100 条，请使用搜索或模块筛选缩小范围。</div>':''}</section></div>
    <input id="locationScreenshotInput" type="file" accept="image/png,image/jpeg,image/webp" hidden />`;
  bindLocationView();
}

function renderLocationRecord(record,index){
  const location=[record.reference.file,record.reference.line].filter(Boolean).join(':');
  const preview=locationScreenshotPreviews.get(record.id);
  return `<article class="location-record"><button class="location-record-main" type="button" data-location-event="${escapeFieldHtml(record.event.name)}"><span class="position-index">${String(index+1).padStart(2,'0')}</span><span class="location-record-copy"><strong>${escapeFieldHtml(record.component)}</strong><small>${escapeFieldHtml(record.module)} / ${escapeFieldHtml(record.reportingLogic.eventType)} / ${escapeFieldHtml(record.reportingLogic.text)}</small><code title="${escapeFieldHtml(location)}">${escapeFieldHtml(location)}</code></span><span class="location-action"><code>${escapeFieldHtml(record.event.name)}</code><small>${escapeFieldHtml(record.reference.namespace||record.reference.kind||'前端调用')}</small></span><span class="location-evidence ${record.verified?'is-verified':'is-review'}">${record.verified?'已核实':'待确认'}</span></button><div class="location-screenshot-cell">${preview?`<img src="${preview.url}" alt="${escapeFieldHtml(record.event.name)} 本地截图预览" />`:''}<button type="button" data-location-screenshot="${escapeFieldHtml(record.id)}" title="${preview?'更换本地截图':'添加本地截图'}">${preview?'更换':'截图'}</button></div></article>`;
}

function bindLocationView(){
  const search=document.getElementById('locationSearch');
  if(search)search.oninput=event=>{locationViewState.query=event.target.value;renderLocationsView();requestAnimationFrame(()=>{const next=document.getElementById('locationSearch');next?.focus();next?.setSelectionRange(locationViewState.query.length,locationViewState.query.length);});};
  document.getElementById('locationEvidence').onchange=event=>{locationViewState.evidence=event.target.value;renderLocationsView();};
  document.querySelectorAll('[data-location-module]').forEach(button=>button.onclick=()=>{locationViewState.module=button.dataset.locationModule;renderLocationsView();});
  document.querySelectorAll('[data-location-event]').forEach(button=>button.onclick=()=>openDrawerV2(events.find(event=>event.name===button.dataset.locationEvent)));
  document.getElementById('locationScreenshotInfo').onclick=()=>showToast('截图仅在当前浏览器会话预览，持久化与版本管理待后端接入');
  document.querySelectorAll('[data-location-screenshot]').forEach(button=>button.onclick=()=>{const input=document.getElementById('locationScreenshotInput');input.dataset.locationId=button.dataset.locationScreenshot;input.click();});
  const input=document.getElementById('locationScreenshotInput');
  input.onchange=()=>{
    const file=input.files?.[0],id=input.dataset.locationId;
    if(!file||!id)return;
    const previous=locationScreenshotPreviews.get(id);
    if(previous?.url)URL.revokeObjectURL(previous.url);
    locationScreenshotPreviews.set(id,{name:file.name,url:URL.createObjectURL(file)});
    showToast('截图已加入本地预览，未写入正式资产');
    renderLocationsView();
  };
}

function reportingPositionField(event,name){
  return (event.fields||[]).find(field=>String(field?.[0]||'').trim().toLowerCase().match(new RegExp(`^${name}(?:$|[\\s（(])`)))||null;
}

function reportingPositionValues(field){
  const description=String(field?.[2]||'').trim();
  if(!description)return [];
  return [...new Set(description.split(/[；;\n]+/).map(value=>value.trim()).filter(Boolean))];
}

function primaryReportingPosition(value){
  const cleaned=String(value||'').trim();
  if(!cleaned||/(代码|可选值|类型定义|自动解析|调用点|直接传入|字段说明)/.test(cleaned))return '';
  const colonPrefix=cleaned.split(/[:：]/)[0].trim();
  const englishPrefix=colonPrefix.match(/^[a-z][a-z0-9_-]*/i)?.[0];
  if(!englishPrefix||/^(?:ms|string|number|boolean|legacy|unknown|enum|location)$/i.test(englishPrefix))return '';
  return englishPrefix.replace(/[-_]+$/,'');
}

function getReportingPositionRecords(){
  return events.map(event=>{
    const location1=reportingPositionField(event,'location1');
    const location=reportingPositionField(event,'location');
    const location2=reportingPositionField(event,'location2');
    const entryPoint=reportingPositionField(event,'entry_point');
    const primaryField=location1||location;
    const secondaryField=location2||entryPoint;
    const primaryValues=reportingPositionValues(primaryField);
    const secondaryValues=reportingPositionValues(secondaryField);
    return {
      id:event.name,
      event,
      primaryField:primaryField?.[0]||'',
      secondaryField:secondaryField?.[0]||'',
      primaryValues,
      secondaryValues,
      groups:primaryField
        ?(primaryValues.map(primaryReportingPosition).filter(Boolean).length?primaryValues.map(primaryReportingPosition).filter(Boolean):['其他已声明位置'])
        :['未声明位置'],
      callSites:event.codeEvidence?.callSites||[],
      verified:Boolean(primaryField)
    };
  });
}

renderLocationsView=function renderReportingLocationsView(){
  const records=getReportingPositionRecords();
  const groups=[...new Set(records.flatMap(record=>record.groups))].sort((a,b)=>['其他已声明位置','未声明位置'].includes(a)?1:['其他已声明位置','未声明位置'].includes(b)?-1:a.localeCompare(b));
  if(locationViewState.module!=='all'&&!groups.includes(locationViewState.module))locationViewState.module='all';
  const query=locationViewState.query.toLowerCase();
  const filtered=records.filter(record=>{
    const evidenceMatch=locationViewState.evidence==='all'||(locationViewState.evidence==='verified'?record.verified:!record.verified);
    const search=[record.event.name,record.primaryField,record.secondaryField,...record.primaryValues,...record.secondaryValues,...record.callSites.map(reference=>reference.file)].join(' ').toLowerCase();
    return (locationViewState.module==='all'||record.groups.includes(locationViewState.module))&&evidenceMatch&&(!query||search.includes(query));
  });
  const declared=records.filter(record=>record.verified).length;
  const codeBacked=records.filter(record=>record.callSites.length).length;
  const groupRows=groups.map(group=>`<button type="button" class="${locationViewState.module===group?'tree-active':''}" data-location-module="${escapeFieldHtml(group)}"><span>${escapeFieldHtml(group)}</span><b>${records.filter(record=>record.groups.includes(group)).length}</b></button>`).join('');
  const rows=filtered.slice(0,100).map((record,index)=>renderReportingPositionRecord(record,index)).join('');
  document.getElementById('specialView').innerHTML=`
    <div class="location-summary" role="status"><div><span>事件 action</span><strong>${records.length}</strong><small>按 action 去重</small></div><div><span>已声明位置</span><strong>${declared}</strong><small>location1 / location</small></div><div><span>一级位置枚举</span><strong>${groups.filter(group=>!['其他已声明位置','未声明位置'].includes(group)).length}</strong><small>保留 Raw 字段说明</small></div><div><span>有代码证据</span><strong>${codeBacked}</strong><small>调用点仅作追溯证据</small></div></div>
    <div class="location-toolbar"><label class="location-search">⌕<input id="locationSearch" value="${escapeFieldHtml(locationViewState.query)}" placeholder="搜索上报位置、action 或代码路径" /></label><select id="locationEvidence" aria-label="筛选位置声明"><option value="all">全部位置状态</option><option value="verified" ${locationViewState.evidence==='verified'?'selected':''}>已声明位置</option><option value="review" ${locationViewState.evidence==='review'?'selected':''}>未声明位置</option></select><span>显示 ${filtered.length} / ${records.length} 个 action</span></div>
    <div class="location-layout"><aside class="location-tree"><div class="location-tree-head"><h2>一级上报位置</h2><small>来自 location1 或 location 字段声明</small></div><button type="button" class="${locationViewState.module==='all'?'tree-active':''}" data-location-module="all"><span>全部位置</span><b>${records.length}</b></button>${groupRows}</aside>
    <section class="location-main"><div class="view-panel-head"><div><h2>${locationViewState.module==='all'?'全部上报位置':escapeFieldHtml(locationViewState.module)}</h2><p>以位置字段区分 action，代码调用点和截图作为辅助证据</p></div><button class="btn secondary" id="locationScreenshotInfo" type="button">截图入口说明</button></div><div class="reporting-location-head"><span>#</span><span>一级上报位置</span><span>二级上报位置</span><span>Action / 代码证据</span><span>截图</span></div><div class="location-records">${rows||'<div class="location-empty"><strong>没有匹配的上报位置</strong><p>请调整搜索、一级位置或声明状态。</p></div>'}</div>${filtered.length>100?'<div class="location-limit">当前展示前 100 条，请使用位置搜索缩小范围。</div>':''}</section></div><input id="locationScreenshotInput" type="file" accept="image/png,image/jpeg,image/webp" hidden />`;
  bindLocationView();
};

function positionValuesMarkup(fieldName,values,emptyText){
  if(!values.length)return `<span class="location-undeclared">${escapeFieldHtml(emptyText)}</span>`;
  return `<small>${escapeFieldHtml(fieldName)}</small><div class="location-value-list">${values.slice(0,3).map(value=>`<span title="${escapeFieldHtml(value)}">${escapeFieldHtml(value)}</span>`).join('')}${values.length>3?`<b>+${values.length-3}</b>`:''}</div>`;
}

function renderReportingPositionRecord(record,index){
  const preview=locationScreenshotPreviews.get(record.id);
  const firstReference=record.callSites[0];
  const codeLocation=firstReference?[firstReference.file,firstReference.line].filter(Boolean).join(':'):'未发现直接调用';
  return `<article class="reporting-location-record"><button class="reporting-location-main" type="button" data-location-event="${escapeFieldHtml(record.event.name)}"><span class="position-index">${String(index+1).padStart(2,'0')}</span><span class="reporting-position-cell">${positionValuesMarkup(record.primaryField,record.primaryValues,'未声明 location1 / location')}</span><span class="reporting-position-cell">${positionValuesMarkup(record.secondaryField,record.secondaryValues,'未声明 location2 / entry_point')}</span><span class="location-action"><code>${escapeFieldHtml(record.event.name)}</code><small title="${escapeFieldHtml(codeLocation)}">${record.callSites.length?`${record.callSites.length} 个调用点 · ${escapeFieldHtml(codeLocation)}`:'未发现直接调用'}</small></span></button><div class="location-screenshot-cell">${preview?`<img src="${preview.url}" alt="${escapeFieldHtml(record.event.name)} 本地截图预览" />`:''}<button type="button" data-location-screenshot="${escapeFieldHtml(record.id)}">${preview?'更换':'截图'}</button></div></article>`;
}
