(function initCatalogTaxonomy(root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.CatalogTaxonomy = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function createCatalogTaxonomy() {
  'use strict';

  const DOMAIN_ORDER = Object.freeze([
    '内容',
    'Chatbot',
    '用户',
    '商业化与增长',
    '系统',
    '待归类'
  ]);

  const COMPACT_DOMAIN_MAP = Object.freeze({
    '内容创作与生成': '内容',
    '内容浏览': '内容',
    '社区互动': '用户',
    'AI 对话': 'Chatbot',
    '商业化与支付': '商业化与增长',
    '用户与账号': '用户',
    '增长与运营': '商业化与增长',
    '平台与系统': '系统',
    '待归类': '待归类'
  });

  const CONTENT_MODULE_ORDER = Object.freeze([
    '发现与浏览',
    '模板与素材',
    '生成与创作',
    '编辑与加工',
    '结果与分享'
  ]);

  // Directory-only grouping; Raw group/domain remain unchanged for evidence and contract export.
  const COMPACT_CONTENT_MODULE_ACTIONS = Object.freeze({
    '发现与浏览': [
      'app_exposure_direct', 'app_exposure_loose', 'app_tab', 'app_visit', 'back_to_top', 'change',
      'feed_user_scroll', 'feedback_pop_click', 'feedback_pop_close', 'feedback_popup_button_click',
      'home_click_tag', 'list_feedback_click', 'pic_visit', 'query_exposure', 'rank_visit', 'search',
      'search_history_delete', 'search_page_visit', 'sortmode_switch', 'view_more_click', 'voice_button_click'
    ],
    '模板与素材': [
      'choose_filter_show', 'dressup_list_page_show', 'emoji_list_page_show', 'faceswap_tag_click',
      'faceswap_tag_popup_show', 'filter_delete_cancel', 'filter_delete_click', 'filter_delete_confirm',
      'filter_more_click', 'filter_permission_entry_click', 'filter_permission_popup_view',
      'filter_permission_update', 'group_photo_mask_click', 'image_change_click', 'image_input_result_switch',
      'image_input_view', 'image_upload_click', 'image_upload_front', 'image_upload_result',
      'others_filters_click', 'others_filters_customize', 'others_filters_popup_show', 'remix_baseimage_choose',
      'remix_uploadfrom_a1_click', 'remix_uploadfrom_album_click', 'remove_input_cancel_click',
      'remove_input_click', 'remove_input_confirm_click', 'template_video_select', 'video_guide_dismissed',
      'video_guide_show', 'video_template_exposure', 'video_upload_click', 'video_upload_result',
      'video_upload_success'
    ],
    '生成与创作': [
      'app_lock_reason', 'build_click', 'create_click', 'create_pop_publish_click', 'create_same_button_click',
      'creator_announcement_click', 'creator_announcement_close', 'creator_announcement_entryinfo_show',
      'creator_bonus_click', 'creator_center_click', 'creator_center_close', 'creator_center_datadescription_click',
      'creator_center_descriptionguide_click', 'creator_center_newlikes_click', 'creator_center_newruns_click',
      'creator_center_notes_click', 'creator_center_remixguide_click', 'creator_guide_click',
      'creator_onboarding_popup_notnowclick', 'creator_onboarding_popup_show',
      'creator_onboarding_popup_viewclick', 'fork_app', 'function_click', 'generate_button_click',
      'generate_failure', 'generate_intention', 'generate_minimize_click', 'generate_pop_close',
      'generate_success', 'new_feature_confirm', 'others_filters_customize_generate', 'remix_begin_click',
      'remix_click', 'remix_guide_click', 'remix_guide_close_click', 'remix_guide_notnow_click',
      'remix_guide_start_click', 'remix_notnow_click', 'studio_generatevideo_app_click', 'submit_button_click',
      'submit_filter', 'submit_filter_disabled_click', 'try_click', 'try_now_button_click',
      'tryyourfilter_click', 'video_function_click', 'video_generator_click'
    ],
    '编辑与加工': [
      'app_edit_click', 'back_click', 'back_pop_cancel_click', 'back_pop_stillleave_click', 'backtoedit_click',
      'backtotry_click', 'create_pop_backtoedit_click', 'create_translate_click', 'cut_function_click',
      'cut_page_finish', 'cut_page_show', 'cutout_function_click', 'describe_edit_click',
      'describe_pop_change_close', 'describe_pop_close', 'describe_pop_direct_close', 'describe_pop_finish',
      'edit_page_visit', 'edit_profile_click', 'emoji_add_text_click', 'emoji_edit_page_done', 'enhancement',
      'enhancement_success', 'faceswap_sortmode_switch', 'optimize', 'optimize_success', 'prompt_random_click',
      'publish_pop_name_edit', 'remix_t2i_textbox_click', 'reset_button_click', 'text_edit_page_finish',
      'text_edit_page_show', 'text_function_click', 'video_describe_close', 'video_describe_edit_click',
      'video_describe_show', 'video_resolution_click', 'video_resolution_submit'
    ],
    '结果与分享': [
      'add_whatsapp_button_click', 'add_whatsapp_result', 'addtodesktop_download_popup', 'app_publish_success',
      'award_announcement_click', 'big_image', 'creator_center_publishfirstfilter_click',
      'generate_picture_expose', 'generate_results_show', 'generate_video_result_check',
      'generate_video_result_show', 'history_click', 'image_delete_click', 'image_delete_enter',
      'image_delete_success', 'image_download', 'image_exposure', 'image_pop_direct_close', 'image_publish',
      'like', 'mute_button_click', 'publish_click_withoutname', 'publish_pop_close', 'publish_pop_direct_close',
      'publish_pop_publish', 'publish_pop_publish_click', 'publish_pop_show', 'remix_whatsapp_entry_click',
      'remix_whatsapp_link_click', 'remix_whatsapp_popup_close', 'result_click', 'result_download',
      'result_page_inputInfo_click', 'result_pop_close', 'result_pop_publish_click', 'result_pop_show',
      'result_show', 'screen_print', 'sns_button_click', 'tasklist_click', 'tasklist_entrance_click',
      'video_download', 'video_full_screen_click', 'video_play_click', 'view_result_click'
    ]
  });

  const CONTENT_ACTION_MODULE_OVERRIDES = Object.freeze(Object.fromEntries(
    Object.entries(COMPACT_CONTENT_MODULE_ACTIONS).flatMap(([module, actions]) =>
      actions.map(action => [action, module])
    )
  ));

  const COMMERCIAL_GROWTH_MODULE_ORDER = Object.freeze([
    '定价与试用',
    '订阅与续费',
    '支付与订单',
    '积分与加量包',
    '取消与挽回',
    '增长运营'
  ]);

  // Revenue actions are explicit; adjacent activation work remains visible as growth operations.
  const COMPACT_COMMERCIAL_MODULE_ACTIONS = Object.freeze({
    '定价与试用': [
      'pricing_popup', 'pay_plan_popup', 'seven_free_trail_pricing_popup_show',
      'seven_free_trail_pricing_popup_click'
    ],
    '订阅与续费': [
      'pricing_premium_subscibe_click', 'pricing_premium_subscribe_click',
      'continuous_bonus_popup_button_click'
    ],
    '支付与订单': [
      'pay_method_option_popup', 'pay_result', 'seven_free_trail_pay_result',
      'cross_platform_purchase_error', 'google_play_popup_close_manually'
    ],
    '积分与加量包': [
      'credits_popup', 'purchase_credits_button_click', 'purchase_credits_result'
    ],
    '取消与挽回': [
      'subscribe_cancel', 'unsubscribe_button_click', 'unsubscribe_retain_popup_show',
      'unsubscribe_retain_popup_click', 'onerway_cancel_subscribe_entrance_click',
      'onerway_cancel_popup_button_click', 'renewal_retention_popup_show',
      'renewal_retention_popup_click', 'retention_popup_show', 'retention_popup_click',
      'retention_popup_button_click', 'pay_cancel_recovery', 'pay_cancel_recovery_click', 'survey_popup'
    ]
  });

  const COMMERCIAL_ACTION_MODULE_OVERRIDES = Object.freeze(Object.fromEntries(
    Object.entries(COMPACT_COMMERCIAL_MODULE_ACTIONS).flatMap(([module, actions]) =>
      actions.map(action => [action, module])
    )
  ));

  const WORKSTREAM_ORDER = Object.freeze([
    '商业化',
    'Chatbot',
    '搜推与触达',
    '运营增长',
    '创作工具',
    '用户与平台',
    '待确认'
  ]);

  const WORKSTREAM_MODULE_ORDER = Object.freeze({
    '商业化': Object.freeze(['定价、订阅与支付', '积分与加量包', '取消与挽回']),
    '搜推与触达': Object.freeze(['推荐与浏览', '搜索', 'Push 与召回']),
    'Chatbot': Object.freeze(['对话入口', '消息与会话', '对话过程', '对话结果']),
    '运营增长': Object.freeze(['活动与激励', '引导与转化', '反馈与评分', '增长运营']),
    '创作工具': Object.freeze(['模板与素材', '生成与创作', '编辑与加工', '结果与分享']),
    '用户与平台': Object.freeze(['登录与账号', '社区与关系', '用户路径与访问', '平台与系统']),
    '待确认': Object.freeze(['待确认'])
  });

  const WORKSTREAM_DESCRIPTIONS = Object.freeze({
    '商业化': '定价、试用、订阅、支付、积分、取消挽回',
    '搜推与触达': 'Discover、搜索、Feed、排序、推荐、冷启动、Push',
    'Chatbot': '对话入口、消息、对话过程与结果',
    '运营增长': 'Banner、活动、签到、引导、评分、邀请、PWA',
    '创作工具': '模板、生成、编辑、Remix、素材和结果',
    '用户与平台': '登录、账号、社区、用户路径、权限、性能和异常'
  });

  const OPERATION_WORKSTREAM_ACTION = /^(?:feedback_|list_feedback|creator_|ceator_|banner_|leavea_ctivity)|(?:rating|rate_popup|check_in|checkin|pwa_|install_now|addtodesktop|landing_|referral_|preference_selection|feed_guide|skip_button|try_it_button|onboarding_)/;

  const EVENT_TYPE_ORDER = Object.freeze([
    '曝光', '访问', '点击', '提交', '结果', '状态变化', '系统', '其他'
  ]);

  const GENERIC_CODE_DESCRIPTION = /^前端代码定义的[\s\S]*埋点$/;
  const CHAIN_LABELS = Object.freeze({
    action: '前端行为链路',
    visit: '前端访问链路',
    exposure: '前端曝光链路',
    commercial: '前端商业化链路',
    bigData: '前端数据链路',
    chatbot: '前端 AI 对话链路',
    autoReport: '前端自动上报链路',
    legacy: '前端历史链路',
    'call-only': '前端调用链路'
  });

  const TECHNICAL_TRIGGER_RULE = /(?:前端代码已发现|前端代码已定义|直接调用点|具体触发时机待确认|当前扫描未发现)/;
  const AMBIGUOUS_BEHAVIOR_ACTIONS = new Set(['submit_button_click']);

  const ACTION_BEHAVIOR_OVERRIDES = Object.freeze({
    app_tab: {
      text: '用户在首页点击“滤镜”或“专题”内容页签时上报',
      eventType: '点击'
    },
    back_click: {
      text: '用户点击关闭二创编辑页、准备打开离开确认弹窗时上报',
      eventType: '点击'
    },
    back_pop_cancel_click: {
      text: '用户在离开确认弹窗选择继续编辑时上报',
      eventType: '点击'
    },
    back_pop_stillleave_click: {
      text: '用户在离开确认弹窗确认离开二创编辑页时上报',
      eventType: '点击'
    },
    app_click: {
      text: '用户点击内容流、搜索结果或推荐弹窗中的应用或滤镜卡片时上报',
      eventType: '点击'
    },
    change: {
      text: '用户点击“换一换”刷新当前推荐内容时上报',
      eventType: '点击'
    },
    back_to_top: {
      text: '用户点击返回顶部时上报',
      eventType: '点击'
    },
    sortmode_switch: {
      text: '用户切换内容排序方式时上报',
      eventType: '状态变化'
    },
    tasklist_click: {
      text: '用户展开或收起任务列表时上报',
      eventType: '状态变化'
    },
    tasklist_entrance_click: {
      text: '用户展开或收起任务入口时上报',
      eventType: '状态变化'
    },
    language_change: {
      text: '用户选择另一种界面语言时上报',
      eventType: '状态变化'
    },
    page_change: {
      text: '用户切换或离开页面、前端结算上一页停留时长时上报',
      eventType: '状态变化'
    },
    autologin: {
      text: '账号登录成功并完成用户状态恢复时上报',
      eventType: '结果'
    },
    is_read: {
      text: '用户看过指定引导、红点、推荐或消息后，前端将对应场景标记为已读时上报',
      eventType: '状态变化'
    },
    check_in_new: {
      text: '移动端或 PC 端签到弹窗展示，并取得连续签到与累计签到数据时上报',
      eventType: '曝光'
    },
    check_in_v3_button_click: {
      text: '用户在签到弹窗中点击签到按钮或积分订阅入口时上报',
      eventType: '点击'
    },
    check_in_exposure: {
      text: '移动端每日签到区域或 PC 端签到卡片展示时上报',
      eventType: '曝光'
    },
    banner_click: {
      text: '用户点击 Discover、Discover 顶部或 Studio 中的横幅时上报',
      eventType: '点击'
    },
    banner_new_click: {
      text: '用户点击 Discover 新版 Hero 横幅中的 App 推荐项时上报',
      eventType: '点击'
    },
    ceator_activity_banner_click: {
      text: '用户点击 App Feed 中的创作者活动横幅时上报',
      eventType: '点击'
    },
    creator_announcement_click: {
      text: '用户在个人主页点击创作者公告入口时上报',
      eventType: '点击'
    },
    creator_announcement_close: {
      text: '用户关闭创作者公告页面时上报',
      eventType: '关闭'
    },
    creator_center_click: {
      text: '用户从新版首页或个人主页横幅进入创作者中心时上报',
      eventType: '点击'
    },
    creator_center_close: { text: '用户关闭创作者中心页面时上报', eventType: '关闭' },
    creator_center_datadescription_click: { text: '用户在创作者中心点击数据说明入口时上报', eventType: '点击' },
    creator_center_descriptionguide_click: { text: '用户在创作者中心点击说明引导入口时上报', eventType: '点击' },
    creator_center_newfollower_click: { text: '用户在创作者中心点击新增粉丝指标时上报', eventType: '点击' },
    creator_center_newlikes_click: { text: '用户在创作者中心点击新增点赞指标时上报', eventType: '点击' },
    creator_center_newruns_click: { text: '用户在创作者中心点击新增运行指标时上报', eventType: '点击' },
    creator_center_notes_click: { text: '用户在创作者中心点击备注或创作笔记入口时上报', eventType: '点击' },
    creator_center_publishfirstfilter_click: { text: '用户在创作者中心点击发布首个滤镜引导时上报', eventType: '点击' },
    creator_center_remixguide_click: { text: '用户在创作者中心点击 Remix 创作引导时上报', eventType: '点击' },
    creator_guide_click: { text: '用户在 PC Build 表单标题区域点击创作者引导时上报', eventType: '点击' },
    creator_onboarding_popup_notnowclick: { text: '用户在 Remix 创作者新手引导弹窗点击“Not now”时上报', eventType: '点击' },
    creator_onboarding_popup_viewclick: { text: '用户在 Remix 创作者新手引导弹窗点击查看入口时上报', eventType: '点击' },
    creator_support_button_click: { text: '用户在个人主页创作者帮助弹窗中点击支持按钮时上报', eventType: '点击' },
    leavea_ctivity_banner: { text: 'Remix 活动模板默认 Hero 组件触发离开活动横幅行为时上报，具体交互边界待确认', eventType: '状态变化' },
    banner_exposure: { text: 'Discover、Discover 顶部或 Studio 横幅进入可视区域并被曝光管理器汇总时上报', eventType: '曝光' },
    creator_announcement_entryinfo_show: { text: '创作者公告中的 Remix 引导方式信息展示时上报', eventType: '曝光' },
    creator_support_banner_exposure_PC: { text: 'PC 全局导航中的创作者支持横幅展示时上报', eventType: '曝光' },
    banner_click_startcreate: { text: '用户点击 PC 全局导航视频横幅中的“Start create”入口时上报', eventType: '点击' },
    banner_click_viewdetails: { text: '用户点击 PC 全局导航视频横幅中的“View details”入口时上报', eventType: '点击' },
    creator_bonus_click: { text: '用户点击创作者奖励入口时上报', eventType: '点击' },
    creator_support_banner_click_PC: { text: '用户点击 PC 全局导航中的创作者支持横幅时上报', eventType: '点击' },
    comment_action: {
      text: '用户在评论操作菜单复制、删除或举报评论时上报',
      eventType: '点击'
    },
    image_upload_front: {
      text: '用户上传图片后，前端获得成功、重复、格式不支持、超限或异常结果时上报',
      eventType: '结果'
    },
    save_app: {
      text: '用户收藏或取消收藏应用时上报',
      eventType: '状态变化'
    },
    survey_popup: {
      text: '用户提交支付取消原因问卷时上报',
      eventType: '提交'
    },
    pay_cancel_recovery: {
      text: '支付取消后的挽回弹窗展示时上报',
      eventType: '曝光'
    },
    app_lock_reason: {
      text: '用户尝试继续生成，系统判定已达到使用次数限制并锁定应用时上报',
      eventType: '结果'
    },
    big_image: {
      text: '用户点击已完成的生成结果并打开大图预览时上报',
      eventType: '点击'
    },
    atomic_error_entry: {
      text: '图片编辑异常页展示时上报',
      eventType: '曝光'
    },
    open_a1: {
      text: 'A1 页面或应用完成打开时上报',
      eventType: '访问'
    },
    close_a1: {
      text: 'A1 页面或应用被关闭或离开时上报',
      eventType: '状态变化'
    },
    app_performance: {
      text: '应用启动与页面资源加载耗时采集完成时上报',
      eventType: '系统'
    },
    onboarding_performance: {
      text: '新手引导初始化与接口加载耗时采集完成时上报',
      eventType: '系统'
    },
    app_detail_page_leave: {
      text: '用户离开应用详情页并结算停留时长时上报',
      eventType: '状态变化'
    },
    chatbot_detail_page_leave: {
      text: '用户离开 AI 对话详情页并结算停留时长时上报',
      eventType: '状态变化'
    },
    chatbot_exposure_direct: {
      text: 'Chatbot 新朋友或更多朋友列表中的卡片进入可视区域时批量上报',
      eventType: '曝光'
    },
    chatbot_bulb_toggle: {
      text: '用户打开或关闭 AI 对话灵感快捷回复开关时上报',
      eventType: '状态变化'
    },
    chatbot_image_to_video_click: {
      text: '用户在 AI 对话聊天页或图片结果页点击“图片转视频”时上报',
      eventType: '点击'
    },
    chatbot_bond_journey_click_upgrade_pop: {
      text: '用户点击亲密度升级弹窗中的“See what changed”按钮时上报',
      eventType: '点击'
    },
    chatbot_bond_journey_expose_upgrade_pop: {
      text: '每次亲密度升级事件对应的升级弹窗首次展示时上报',
      eventType: '曝光'
    },
    chatbot_custom_avatar_page_show: {
      text: '用户进入个人头像或 Chatbot 角色头像编辑页时上报',
      eventType: '曝光'
    },
    chatbot_custom_avatar_save: {
      text: '用户资料或 Chatbot 角色资料通过校验并保存成功时上报',
      eventType: '结果'
    },
    chatbot_custom_bg_auto_click: {
      text: '用户切换 Chatbot 背景自动更新开关、保存请求发起前上报目标状态',
      eventType: '状态变化'
    },
    chatbot_custom_bg_page_show: {
      text: '用户进入 Chatbot 自定义背景编辑页时上报',
      eventType: '曝光'
    },
    chatbot_custom_bg_set: {
      text: '用户在自定义背景页或图片结果页成功设置 Chatbot 背景时上报',
      eventType: '结果'
    },
    chatbot_imagine_click: {
      text: '用户点击 Imagine 入口并打开图片想象模式选择面板时上报',
      eventType: '点击'
    },
    chatbot_imagine_character_click: {
      text: '用户在 Imagine 模式中选择生成 Chatbot 角色图片时上报',
      eventType: '点击'
    },
    chatbot_imagine_couple_click: {
      text: '用户在 Imagine 模式中选择生成用户与 Chatbot 合照时上报',
      eventType: '点击'
    },
    chatbot_imagine_me_click: {
      text: '用户在 Imagine 模式中选择生成用户本人图片时上报',
      eventType: '点击'
    },
    chatbot_quick_reply_click: {
      text: '用户在快捷回复可用时选择一条回复、准备发送对应文本时上报',
      eventType: '点击'
    },
    chatbot_quick_reply_expose: {
      text: '快捷回复选项非空，且该组选项在当前展示周期首次出现时上报',
      eventType: '曝光'
    },
    chatbot_snap_click: {
      text: '用户点击 Snap 入口并打开角色/合照快照选择面板时上报',
      eventType: '点击'
    },
    chatbot_snap_character_click: {
      text: '用户在 Snap 面板选择生成仅包含 Chatbot 角色的快照时上报',
      eventType: '点击'
    },
    chatbot_snap_couple_click: {
      text: '用户在 Snap 面板选择生成用户与 Chatbot 合照快照时上报',
      eventType: '点击'
    },
    chatbot_topic_card_click: {
      text: '用户点击对话专题卡片并发送该卡片文案时上报',
      eventType: '点击'
    },
    chatbot_topic_card_expose: {
      text: '专题卡片列表有数据，且在当前组件生命周期首次展示时上报',
      eventType: '曝光'
    },
    custom_chatbot_start_chat_click: {
      text: '自定义 Chatbot 表单校验通过、创建请求发起前上报所选角色配置',
      eventType: '提交'
    },
    chatbot_view_result_download: {
      text: '用户在 Chatbot 图片预览页点击下载按钮并发起文件保存流程时上报',
      eventType: '点击'
    },
    custom_chatbot_finish: {
      text: '自定义 Chatbot 创建接口异常，或异步创建 Socket 返回最终成功/失败结果时上报',
      eventType: '结果'
    },
    chatbot_message_receive: {
      text: 'AI 对话消息返回结果时上报',
      eventType: '结果'
    },
    chatbot_send_photo_click: {
      text: '用户点击 AI 对话页“发送照片”入口、准备打开照片模板选择弹窗时上报',
      eventType: '点击'
    },
    chatbot_send_photo_generate: {
      text: '用户选择照片模板、点击快捷图片或发起角色/合照快照，照片生成请求实际开始时上报',
      eventType: '提交'
    },
    chatbot_view_photo_click: {
      text: '用户点击 AI 对话中的非快捷图片消息并发起查看或生成时上报',
      eventType: '点击'
    },
    custom_chatbot_send_intro: {
      text: '自定义 Chatbot 创建完成后，前端首次检测到介绍文案时上报',
      eventType: '结果'
    },
    custom_chatbot_send_opener: {
      text: '自定义 Chatbot 创建完成后，前端首次检测到机器人文本开场消息时上报',
      eventType: '结果'
    },
    login_popup: {
      text: '登录弹窗展示时上报',
      eventType: '曝光'
    },
    cold_start_popup: {
      text: '冷启动推荐弹窗展示时上报',
      eventType: '曝光'
    },
    cold_start_click: {
      text: '用户在冷启动推荐弹窗中点击推荐 App 时上报',
      eventType: '点击'
    },
    push_button_click: {
      text: '用户在签到页或“稍后查看”引导弹窗中点击通知权限开启按钮时上报',
      eventType: '点击'
    },
    push_message_click: {
      text: '用户通过 Push 通知进入 App，前端读取通知参数时上报',
      eventType: '点击'
    },
    push_message_send: {
      text: '生成任务成功后，前端任务 Socket 链路触发成功 Push 时上报',
      eventType: '结果'
    },
    credits_popup: {
      text: '积分提示弹窗展示时上报',
      eventType: '曝光'
    },
    feed_user_scroll: {
      text: '用户在内容流中继续滚动浏览时上报',
      eventType: '状态变化'
    },
    join_topic: {
      text: '用户加入指定专题时上报',
      eventType: '提交'
    },
    see_original: {
      text: '用户查看评论或帖子原文时上报',
      eventType: '点击'
    },
    see_translation: {
      text: '用户查看评论或帖子翻译内容时上报',
      eventType: '点击'
    },
    fork_app: {
      text: '用户基于当前应用发起同款创作时上报',
      eventType: '提交'
    },
    install_now: {
      text: '用户点击立即安装 PWA 时上报',
      eventType: '点击'
    },
    feed_guide_click: { text: '用户点击 App Feed 中指向目标 App 的手势筛选引导时上报', eventType: '点击' },
    feed_guide_exposure: { text: 'App Feed 中指向目标 App 的手势筛选引导展示时上报', eventType: '曝光' },
    skip_button_click: { text: 'Onboarding 超时、滑动退出或其他跳过行为发生时上报', eventType: '点击' },
    try_it_button_click: { text: '用户在 Onboarding 推荐流程中点击目标 App 的 Try it 按钮时上报', eventType: '点击' },
    addtodesktop_load_success: { text: 'PWA 桌面安装引导加载完成，并判断是否首次展示时上报', eventType: '结果' },
    landing_build_click: { text: '用户在 PC Landing Page 点击 Build 创作入口时上报', eventType: '点击' },
    referral_link_success: { text: 'Referral 链接处理流程完成并返回成功结果时上报', eventType: '结果' },
    pic_like: {
      text: '用户点赞或取消点赞图片作品时上报',
      eventType: '状态变化'
    },
    optimize: {
      text: '用户对图片发起优化处理时上报',
      eventType: '提交'
    },
    function_click: {
      text: '用户在 Studio 选择具体创作能力时上报',
      eventType: '点击'
    },
    result_click: {
      text: '用户点击二创页已生成的结果图、准备打开结果弹窗时上报',
      eventType: '点击'
    },
    try_click: {
      text: '用户在二创页点击试用当前滤镜时上报',
      eventType: '点击'
    }
  });

  const ACTION_TOKEN_LABELS = Object.freeze({
    account: '账号', app: '应用', chatbot: 'AI 对话', comment: '评论', creator: '创作者',
    delete: '删除', detail: '详情', edit: '编辑', error: '异常', feed: '内容流', filter: '滤镜',
    generate: '生成', guide: '引导', history: '历史记录', home: '首页', image: '图片', input: '输入内容',
    language: '语言', login: '登录', message: '消息', onboarding: '新手引导', page: '页面', pay: '支付',
    payment: '支付', post: '帖子', preference: '偏好选择', pricing: '定价', profile: '个人资料', publish: '发布',
    rating: '评分', remix: '二创', report: '举报', result: '结果', search: '搜索', share: '分享',
    sortmode: '排序方式', subscription: '订阅', tasklist: '任务列表', template: '模板', text: '文本',
    topic: '专题', unsubscribe: '取消订阅', upload: '上传', user: '用户', video: '视频', whatsapp: 'WhatsApp', preview: '预览', push: '推送', print: '打印', h5: 'H5', premium: '高级权益', subscibe: '订阅', subscribe: '订阅', jump: '跳转', external: '外部',
    announcement: '公告', avatar: '头像', back: '返回', banner: '横幅', bonus: '奖励', center: '中心', activity: '活动', begin: '开始', bind: '绑定',
    credits: '积分', custom: '自定义', customize: '自定义', description: '说明', datadescription: '数据说明', descriptionguide: '说明引导', download: '下载', exposure: '曝光', gallery: '图库',
    like: '点赞', permission: '权限', popup: '弹窗', pop: '弹窗', quick: '快捷', reply: '回复', feedback: '反馈', follow: '关注',
    retention: '挽留', screen: '屏幕', tab: '页签', tabbar: '标签栏', voice: '语音', function: '功能', inputinfo: '输入信息', interest: '兴趣',
    button: '按钮', entry: '入口', entrance: '入口', list: '列表', more: '更多', new: '新', newfollower: '新增粉丝', newlikes: '新增点赞', newruns: '新增运行', notes: '备注', original: '原内容',
    photo: '照片', picture: '图片', random: '随机内容', remove: '移除', renewal: '续费', reset: '重置', skip: '跳过', start: '开始', stillleave: '仍然离开', tag: '标签', translate: '翻译', translation: '翻译内容', textbox: '文本框', type: '类型', view: '查看', withoutname: '无名称', baseimage: '原图', comments: '评论', link: '链接', mask: '蒙版', minimize: '最小化', mute: '静音', name: '名称', prompt: '提示词', t2i: '文生图', uploadfrom: '上传来源', cut: '裁剪', cutout: '抠图', describe: '描述', change: '更改', close: '关闭', confirm: '确认', create: '创建', notnow: '暂不', onerway: '单次', seven: '七日', check: '检查', ceator: '创作者', publishfirstfilter: '发布首个滤镜', remixguide: '二创引导', interest_tag: '兴趣标签'
  });

  const ACTION_PHRASE_LABELS = Object.freeze({
    account_delete: '删除账号', add_whatsapp: '添加 WhatsApp', activity_banner: '活动横幅',
    ai_background: 'AI 背景', all_apps: '全部应用', app_detail: '应用详情', app_publish: '应用发布',
    appgallery: '应用图库', award_announcement: '奖励公告', back_to_edit: '返回编辑', back_to_try: '返回试用',
    chatbot_image_to_video: 'AI 对话图片转视频', check_in: '签到', cold_start: '冷启动',
    create_same: '同款创作', creator_activity: '创作者活动', creator_bonus: '创作者奖励',
    creator_center: '创作者中心', creator_guide: '创作者引导', creator_onboarding: '创作者新手引导',
    creator_support: '创作者支持', cut_page: '裁剪页面', data_description: '数据说明',
    describe_pop: '描述弹窗', device_id: '设备 ID', dressup_list: '装扮列表',
    edit_profile: '编辑个人资料', error_page: '异常页面', faceswap: '换脸',
    filter_permission: '滤镜权限', google_login: 'Google 登录', group_photo: '合照',
    image_delete: '删除图片', image_input: '图片输入', image_upload: '图片上传',
    leave_confirm: '离开确认', new_follower: '新增粉丝', new_likes: '新增点赞', new_runs: '新增运行',
    one_way_cancel: '单次订阅取消', others_filters: '其他滤镜', payment_cancel: '支付取消',
    point_icon: '积分图标', publish_first_filter: '发布首个滤镜', publish_pop: '发布弹窗',
    publish_share: '发布分享', quick_reply: '快捷回复', rate_popup: '评分弹窗',
    rating_popup: '评分弹窗', remix_guide: '二创引导', result_page: '结果页',
    seven_free_trial: '7 天免费试用', share_friends: '好友分享', share_poster: '分享海报',
    sort_mode: '排序方式', start_chat: '开始对话', text_edit: '文本编辑',
    video_describe: '视频描述', video_generator: '视频生成', video_resolution: '视频分辨率',
    video_upload: '视频上传', view_more: '查看更多', view_result: '查看结果'
  });

  const BEHAVIOR_NOISE_TOKENS = new Set([
    'action', 'event', 'track', 'button', 'v2', 'v3', 'pc', 'mobile', 'direct', 'front'
  ]);

  const INFRASTRUCTURE_CALL_PATH = /(?:packages\/shared\/handler\/event\/|\/handler\/event\/utils\/|\/utils\/(?:exposure|logging|tracking|analytics)(?:\.|\/))/i;
  const GENERIC_CALL_MODULES = new Set([
    '', 'index', 'wrapper', 'global', 'init', 'event', 'events', 'utils', 'handler',
    'action', 'change', 'exposure', 'form', 'logging', 'publish', 'track', 'tracking', 'visit',
    'src', 'packages', 'shared', 'mobile', 'pc', 'views', 'components',
    'businesscomponents', 'hooks', 'service', 'services', 'store', 'stores'
  ]);

  const GENERIC_MODULES = new Set([
    '', '待归类', 'PRD 导入', '行为事件', '访问事件', '曝光事件', '商业化事件',
    '大数据事件', 'Chatbot 事件', '自动上报', '历史埋点', '仅调用事件', '前端代码埋点'
  ]);

  const EXPLICIT_DOMAIN_MAP = Object.freeze({
    'Chatbot': 'AI 对话',
    '商业化': '商业化与支付',
    '用户与账号': '用户与账号',
    '增长运营': '增长与运营',
    '产营': '增长与运营',
    '平台能力': '平台与系统'
  });

  const EXPLICIT_MODULE_DOMAIN_MAP = Object.freeze({
    '查看应用': '内容浏览',
    '生成结果': '内容创作与生成',
    '截图': '内容创作与生成'
  });

  const ACTION_TAXONOMY_OVERRIDES = Object.freeze({
    app_exposure_loose: ['内容浏览', '首页与发现'],
    app_tab: ['内容浏览', '内容详情'],
    back_to_top: ['内容浏览', '浏览行为'],
    change: ['内容浏览', '首页与发现'],
    pic_visit: ['内容浏览', '内容详情'],
    rank_visit: ['内容浏览', '首页与发现'],
    sortmode_switch: ['内容浏览', '首页与发现'],

    result_show: ['内容创作与生成', '生成结果'],
    screen_print: ['内容创作与生成', '作品与下载'],
    add_whatsapp_button_click: ['内容创作与生成', '作品与下载'],
    add_whatsapp_result: ['内容创作与生成', '作品与下载'],
    cut_function_click: ['内容创作与生成', '编辑器'],
    enhancement: ['内容创作与生成', '编辑与增强'],
    enhancement_success: ['内容创作与生成', '编辑与增强'],
    optimize: ['内容创作与生成', '编辑与增强'],
    optimize_success: ['内容创作与生成', '编辑与增强'],
    history_click: ['内容创作与生成', '生成任务与历史'],
    tasklist_click: ['内容创作与生成', '生成任务与历史'],
    tasklist_entrance_click: ['内容创作与生成', '生成任务与历史'],
    text_function_click: ['内容创作与生成', '编辑器'],
    dressup_list_page_show: ['内容创作与生成', '模板与二创'],
    emoji_list_page_show: ['内容创作与生成', '模板与二创'],
    try_now_button_click: ['内容创作与生成', '生成入口'],
    build_click: ['内容创作与生成', 'App Builder'],
    fork_app: ['内容创作与生成', '模板与二创'],
    new_feature_confirm: ['内容创作与生成', 'App Builder'],

    message_button_click: ['社区互动', '消息中心'],
    message_tabbar_click: ['社区互动', '消息中心'],
    publish_popup_click: ['社区互动', '内容发布'],
    publish_popup_show: ['社区互动', '内容发布'],
    app_publish_click: ['社区互动', '内容发布'],
    report_type: ['社区互动', '举报治理'],
    save_app: ['社区互动', '点赞收藏'],
    unpublish_click: ['社区互动', '内容发布'],
    unpublish_success: ['社区互动', '内容发布'],
    profile_enter: ['用户与账号', '账号资料'],

    check_in_v3_button_click: ['增长与运营', '任务与激励'],
    check_in_exposure: ['增长与运营', '任务与激励'],
    check_in_new: ['增长与运营', '任务与激励'],
    checkin_free_membership: ['增长与运营', '任务与激励'],
    point_icon_button_click: ['增长与运营', '任务与激励'],
    cold_start_click: ['增长与运营', '激活与召回'],
    cold_start_popup: ['增长与运营', '激活与召回'],
    push_button_click: ['增长与运营', '激活与召回'],
    push_message_click: ['增长与运营', '激活与召回'],
    push_message_send: ['增长与运营', '激活与召回'],
    rating_popup_click: ['增长与运营', '评分引导'],
    rating_popup_show: ['增长与运营', '评分引导'],
    rate_popup_click_gotogoogle: ['增长与运营', '评分引导'],
    rate_popup_click_submit: ['增长与运营', '评分引导'],
    rate_popup_close: ['增长与运营', '评分引导'],
    rate_popup_show: ['增长与运营', '评分引导'],
    skip_button_click: ['增长与运营', '新手引导'],
    try_it_button_click: ['增长与运营', '新手引导'],
    preference_selection_exposure: ['增长与运营', '新手引导'],
    preference_selection_skip: ['增长与运营', '新手引导'],
    preference_selection_start: ['增长与运营', '新手引导'],
    addtodesktop_load_success: ['增长与运营', 'PWA 安装'],
    install_now: ['增长与运营', 'PWA 安装'],
    pwa_icon_click: ['增长与运营', 'PWA 安装'],
    landing_build_click: ['增长与运营', '落地页转化'],
    recommend_app_exposure: ['增长与运营', '激活与召回'],

    continuous_bonus_popup_button_click: ['商业化与支付', '订阅'],
    seven_free_trail_pay_result: ['商业化与支付', '支付'],
    app_click: ['平台与系统', '自动行为采集'],
    close_a1: ['平台与系统', '自动行为采集'],
    language_change: ['平台与系统', '国际化与生命周期'],
    leave: ['平台与系统', '国际化与生命周期'],
    open_a1: ['平台与系统', '自动行为采集'],
    page_change: ['平台与系统', '页面与性能'],
    page_exposure_direct: ['平台与系统', '自动行为采集'],
    h5_popup_click: ['平台与系统', 'H5 容器'],
    h5_popup_show: ['平台与系统', 'H5 容器']
  });

  function text(value) {
    return String(value ?? '').trim();
  }

  function list(value) {
    if (value === undefined || value === null || value === '') return [];
    return Array.isArray(value) ? value : [value];
  }

  function evidenceText(event) {
    const evidence = event?.codeEvidence || {};
    const references = list(evidence.callSites);
    return [
      event?.name,
      event?.description,
      event?.rule,
      event?.source,
      event?.theme,
      event?.group,
      event?.domain,
      ...list(evidence.namespaces),
      ...list(evidence.themes),
      ...references.map(reference => reference?.file)
    ].map(text).filter(Boolean).join(' ').toLowerCase();
  }

  function actionText(event) {
    return text(event?.name).toLowerCase();
  }

  function compactContentModule(event, detailedModule) {
    const curated = CONTENT_ACTION_MODULE_OVERRIDES[actionText(event)];
    if (curated) return curated;

    const legacyModule = text(detailedModule);
    if (/(?:发现|浏览|搜索|详情|discover|通用上报)/i.test(legacyModule)) return '发现与浏览';
    if (/(?:模板|素材|remix|输入)/i.test(legacyModule)) return '模板与素材';
    if (/(?:编辑|增强|加工)/i.test(legacyModule)) return '编辑与加工';
    if (/(?:结果|作品|下载|创作后|历史|任务|挂起|分享)/i.test(legacyModule)) return '结果与分享';
    return '生成与创作';
  }

  function compactCommercialGrowthModule(event) {
    return COMMERCIAL_ACTION_MODULE_OVERRIDES[actionText(event)] || '增长运营';
  }

  function matches(value, pattern) {
    return pattern.test(value);
  }

  function domainFromSignals(value) {
    const rules = [
      ['商业化与支付', /(?:pricing|premium|subscribe|subscription|purchase|payment|checkout|billing|order|credits?|\bpay(?:_|\b)|_pay\b|vip)/],
      ['用户与账号', /(?:login|logout|register|registration|sign_in|sign_up|account|password|delete_account|user_center)/],
      ['AI 对话', /(?:chatbot|conversation|chat_|_chat|assistant|dialogue)/],
      ['增长与运营', /(?:creator_support)/],
      ['社区互动', /(?:community|comment|follow|follower|following|like_|_like|favorite|collect|topic|share_|_share|post_|_post)/],
      ['内容创作与生成', /(?:generate|generation|creator|create_|_create|editor|edit_|_edit|upload|template|filter|image|video|remix|cutout|faceswap|studio|download)/],
      ['增长与运营', /(?:onboarding|campaign|activity|invite|invitation|referral|retention|activation|channel_|_channel|guide_|_guide|banner)/],
      ['内容浏览', /(?:discover|feed|search|detail|content|browse|home_|_home)/],
      ['平台与系统', /(?:userpath|performance|permission|network|device|system|heartbeat|debug|exception|error|page_load|route_change|api_)/]
    ];
    const match = rules.find(([, pattern]) => matches(value, pattern));
    return match?.[0] || '';
  }

  function inferBusinessDomain(event) {
    const rawGroup = text(event?.group);
    if (EXPLICIT_DOMAIN_MAP[rawGroup]) {
      return { value: EXPLICIT_DOMAIN_MAP[rawGroup], source: 'declared' };
    }
    const rawModule = text(event?.domain);
    if (EXPLICIT_MODULE_DOMAIN_MAP[rawModule]) {
      return { value: EXPLICIT_MODULE_DOMAIN_MAP[rawModule], source: 'declared' };
    }

    const action = actionText(event);
    const signals = evidenceText(event);
    const inferred = domainFromSignals(action) || domainFromSignals(signals);
    if (inferred) return { value: inferred, source: 'inferred' };
    if (rawGroup === '内容') return { value: '内容创作与生成', source: 'declared' };
    return { value: '待归类', source: 'fallback' };
  }

  function preferDeclaredModule(event) {
    const rawGroup = text(event?.group);
    const rawModule = text(event?.domain);
    return rawGroup !== '待归类' && !GENERIC_MODULES.has(rawModule) ? rawModule : '';
  }

  function inferModule(event, businessDomain) {
    const declared = preferDeclaredModule(event);
    if (declared) return { value: declared, source: 'declared' };

    const action = actionText(event);
    const signals = evidenceText(event);
    const searchable = `${action} ${signals}`;

    if (businessDomain === '用户与账号') {
      if (matches(searchable, /(?:login|logout|register|registration|sign_in|sign_up)/)) return { value: '登录注册', source: 'inferred' };
      if (matches(searchable, /(?:password|permission|delete_account|security)/)) return { value: '账号与安全', source: 'inferred' };
      if (matches(searchable, /(?:profile|account|user_center)/)) return { value: '账号资料', source: 'inferred' };
      return { value: '用户状态', source: 'inferred' };
    }
    if (businessDomain === '商业化与支付') {
      if (matches(searchable, /(?:pricing|price|premium|benefit|vip)/)) return { value: '定价与权益', source: 'inferred' };
      if (matches(searchable, /(?:subscribe|subscription|renew|unsubscribe)/)) return { value: '订阅', source: 'inferred' };
      if (matches(searchable, /(?:payment|checkout|order|\bpay(?:_|\b)|_pay\b)/)) return { value: '支付', source: 'inferred' };
      if (matches(searchable, /(?:credits?|balance)/)) return { value: '积分与余额', source: 'inferred' };
      return { value: '商业化通用', source: 'inferred' };
    }
    if (businessDomain === 'AI 对话') {
      if (matches(searchable, /(?:message|send|receive)/)) return { value: '消息与会话', source: 'inferred' };
      if (matches(searchable, /(?:entry|open|visit)/)) return { value: '对话入口', source: 'inferred' };
      if (matches(searchable, /(?:success|fail|complete|finish|result)/)) return { value: '对话结果', source: 'inferred' };
      return { value: '对话过程', source: 'inferred' };
    }
    if (businessDomain === '社区互动') {
      if (matches(searchable, /comment/)) return { value: '评论', source: 'inferred' };
      if (matches(searchable, /(?:like|favorite|collect)/)) return { value: '点赞收藏', source: 'inferred' };
      if (matches(searchable, /follow/)) return { value: '关注', source: 'inferred' };
      if (matches(searchable, /share/)) return { value: '分享', source: 'inferred' };
      if (matches(searchable, /(?:post|topic|community)/)) return { value: '内容发布', source: 'inferred' };
      return { value: '社区互动', source: 'inferred' };
    }
    if (businessDomain === '增长与运营') {
      if (matches(searchable, /(?:onboarding|guide)/)) return { value: '新手引导', source: 'inferred' };
      if (matches(searchable, /(?:campaign|activity|banner)/)) return { value: '活动与 Banner', source: 'inferred' };
      if (matches(searchable, /(?:invite|invitation|referral|channel)/)) return { value: '渠道与邀请', source: 'inferred' };
      if (matches(searchable, /creator_support/)) return { value: '创作者运营', source: 'inferred' };
      return { value: '增长运营', source: 'inferred' };
    }
    if (businessDomain === '内容创作与生成') {
      if (matches(searchable, /(?:success|fail|failure|complete|finish|result)/)) return { value: '生成结果', source: 'inferred' };
      if (matches(searchable, /(?:generate|generation)/)) return { value: matches(searchable, /(?:click|intention|entry|start)/) ? '生成入口' : '生成过程', source: 'inferred' };
      if (matches(searchable, /(?:editor|edit_|_edit)/)) return { value: '编辑器', source: 'inferred' };
      if (matches(searchable, /upload/)) return { value: '素材上传', source: 'inferred' };
      if (matches(searchable, /(?:template|filter|remix|cutout|faceswap)/)) return { value: '模板与二创', source: 'inferred' };
      if (matches(searchable, /(?:image|video|download)/)) return { value: '作品与下载', source: 'inferred' };
      return { value: '创作通用', source: 'inferred' };
    }
    if (businessDomain === '内容浏览') {
      if (matches(searchable, /search/)) return { value: '搜索', source: 'inferred' };
      if (matches(searchable, /(?:discover|feed|home)/)) return { value: '首页与发现', source: 'inferred' };
      if (matches(searchable, /(?:detail|app_visit|content)/)) return { value: '内容详情', source: 'inferred' };
      return { value: '浏览行为', source: 'inferred' };
    }
    if (businessDomain === '平台与系统') {
      if (matches(searchable, /(?:error|exception|fail)/)) return { value: '错误与异常', source: 'inferred' };
      if (matches(searchable, /permission/)) return { value: '权限', source: 'inferred' };
      if (matches(searchable, /(?:device|network)/)) return { value: '设备与环境', source: 'inferred' };
      if (matches(searchable, /(?:page|route|path|load|performance)/)) return { value: '页面与性能', source: 'inferred' };
      return { value: '平台通用', source: 'inferred' };
    }
    return { value: '未分模块', source: 'fallback' };
  }

  function inferEventType(event) {
    const action = actionText(event);
    const behaviorOverride = ACTION_BEHAVIOR_OVERRIDES[action];
    if (behaviorOverride?.eventType) return behaviorOverride.eventType;
    const description = `${text(event?.description)} ${text(event?.rule)}`;
    const suffix = action.split('_').filter(Boolean).pop() || '';

    if (['click', 'tap', 'press', 'select'].includes(suffix)) return '点击';
    if (['success', 'fail', 'failure', 'complete', 'finish', 'result', 'error'].includes(suffix)) return '结果';
    if (/(?:^|_)(?:exposure|expose|impression|show)(?:_|$)/.test(action) || /(?:^|_)popup_(?:view|show)(?:_|$)/.test(action) || /曝光|展示|展现|弹窗出现/.test(description)) return '曝光';
    if (['visit', 'view', 'open', 'enter', 'pageview'].includes(suffix)) return '访问';
    if (['submit', 'send', 'upload', 'start', 'begin', 'create', 'intention'].includes(suffix)) return '提交';
    if (['change', 'update', 'switch', 'close', 'pause', 'resume', 'cancel', 'delete', 'logout'].includes(suffix)) return '状态变化';
    if (/(?:^|_)(?:system|device|network|performance|permission|heartbeat|debug|load|path)(?:_|$)/.test(action)) return '系统';
    if (/点击|选择|按下/.test(description)) return '点击';
    if (/成功|失败|完成|结果|异常/.test(description)) return '结果';
    if (/访问|进入|打开|浏览/.test(description)) return '访问';
    if (/提交|发送|开始|上传/.test(description)) return '提交';
    if (/切换|变更|关闭|取消|删除/.test(description)) return '状态变化';
    return '其他';
  }

  function classifyEvidence(event) {
    const evidence = event?.codeEvidence;
    if (!evidence) return { key: 'manual', label: '人工资产' };
    if (evidence.dynamic) return { key: 'dynamic', label: '动态未解析' };
    if (Number(evidence.callSiteCount || 0) > 0 || evidence.usage === 'called') return { key: 'called', label: '已调用' };
    return { key: 'defined', label: '仅定义' };
  }

  function isMainFlowEvent(event, options) {
    const configured = options?.mainFlowEvents;
    if (Array.isArray(configured)) return configured.includes(event);
    return text(event?.source) === '【A1】核心行为路径埋点整理';
  }

  function classifyEvent(event, options) {
    const behaviorOverride = ACTION_BEHAVIOR_OVERRIDES[actionText(event)];
    const override = ACTION_TAXONOMY_OVERRIDES[actionText(event)];
    const mainFlow = isMainFlowEvent(event, options);
    const detailedDomain = override
      ? { value: override[0], source: 'curated' }
      : inferBusinessDomain(event);
    const module = mainFlow && text(event?.domain)
      ? { value: text(event.domain), source: 'main-flow' }
      : override
      ? { value: override[1], source: 'curated' }
      : inferModule(event, detailedDomain.value);
    const businessDomain = COMPACT_DOMAIN_MAP[detailedDomain.value] || '待归类';
    const businessModule = businessDomain === '内容'
      ? compactContentModule(event, module.value)
      : businessDomain === '商业化与增长'
      ? compactCommercialGrowthModule(event)
      : module.value;
    const evidence = classifyEvidence(event);
    return {
      businessDomain,
      businessModule,
      eventType: behaviorOverride?.eventType || inferEventType(event),
      evidenceKey: evidence.key,
      evidenceLabel: evidence.label,
      journeyKey: mainFlow ? 'main_flow' : '',
      journeyLabel: mainFlow ? '主流程链路' : '',
      classificationSource: override
        ? 'curated'
        : detailedDomain.source === 'declared' && module.source === 'declared' ? 'declared' : 'inferred',
      rawGroup: text(event?.group),
      rawModule: text(event?.domain)
    };
  }

  function operationalWorkstreamModule(action) {
    if (/(?:rating|rate_popup|feedback)/.test(action)) return '反馈与评分';
    if (/(?:check|banner|activity|creator)/.test(action)) return '活动与激励';
    if (/(?:onboarding|preference_selection|feed_guide|skip_button|try_it_button|pwa_|install_now|addtodesktop|landing_|referral_)/.test(action)) return '引导与转化';
    return '增长运营';
  }

  const VOLCANO_AGGREGATION_WORKSTREAMS = Object.freeze({
    app_exposure_aggregation: Object.freeze({ primaryWorkstream: '搜推与触达', workstreamModule: '推荐与浏览' }),
    user_app_exposure_statistics: Object.freeze({ primaryWorkstream: '搜推与触达', workstreamModule: '推荐与浏览' }),
    page_exposure_aggregation: Object.freeze({ primaryWorkstream: '用户与平台', workstreamModule: '用户路径与访问' })
  });

  function workstreamCollaborationTags(primaryWorkstream, workstreamModule, action) {
    const tags = [];
    if (primaryWorkstream === '商业化' && workstreamModule === '取消与挽回') tags.push('运营增长');
    if (primaryWorkstream === '搜推与触达' && workstreamModule === 'Push 与召回') tags.push('运营增长');
    if (primaryWorkstream === '运营增长' && /^(?:creator_|ceator_)/.test(action)) tags.push('创作工具');
    if (primaryWorkstream === '创作工具' && workstreamModule === '结果与分享' && /(?:publish|share|whatsapp)/.test(action)) tags.push('用户与平台');
    if (primaryWorkstream === '用户与平台' && /(?:share|publish|comment|follow|like|message)/.test(action)) tags.push('运营增长');
    return [...new Set(tags)].filter(tag => tag !== primaryWorkstream);
  }

  function classifyWorkstream(event, options) {
    const asset = classifyEvent(event, options);
    const action = actionText(event);
    let primaryWorkstream = '待确认';
    let workstreamModule = '待确认';
    let workstreamSource = 'review';
    let confidence = 'review';

    const volcanoAggregationWorkstream = list(event?.assetTags).includes('火山聚合')
      ? VOLCANO_AGGREGATION_WORKSTREAMS[action]
      : null;
    if (volcanoAggregationWorkstream) {
      primaryWorkstream = volcanoAggregationWorkstream.primaryWorkstream;
      workstreamModule = volcanoAggregationWorkstream.workstreamModule;
      workstreamSource = 'curated';
      confidence = 'high';
    } else if (asset.businessDomain === 'Chatbot') {
      primaryWorkstream = 'Chatbot';
      workstreamModule = asset.businessModule;
      workstreamSource = 'asset-domain';
      confidence = 'high';
    } else if (action === 'point_icon_button_click') {
      primaryWorkstream = '商业化';
      workstreamModule = '积分与加量包';
      workstreamSource = 'curated';
      confidence = 'high';
    } else if (action === 'page_exposure') {
      primaryWorkstream = '用户与平台';
      workstreamModule = '平台与系统';
      workstreamSource = 'curated';
      confidence = 'high';
    } else if (action === 'is_read') {
      primaryWorkstream = '运营增长';
      workstreamModule = '引导与转化';
      workstreamSource = 'curated';
      confidence = 'high';
    } else if (['like', 'sns_button_click', 'edit_profile_click'].includes(action)) {
      primaryWorkstream = '用户与平台';
      workstreamModule = action === 'edit_profile_click' ? '登录与账号' : '社区与关系';
      workstreamSource = 'curated';
      confidence = 'high';
    } else if (action === 'voice_button_click') {
      primaryWorkstream = '创作工具';
      workstreamModule = '模板与素材';
      workstreamSource = 'curated';
      confidence = 'high';
    } else if (OPERATION_WORKSTREAM_ACTION.test(action)) {
      primaryWorkstream = '运营增长';
      workstreamModule = operationalWorkstreamModule(action);
      workstreamSource = 'curated';
      confidence = 'high';
    } else if (asset.businessDomain === '商业化与增长') {
      if (asset.businessModule !== '增长运营') {
        primaryWorkstream = '商业化';
        workstreamModule = ['定价与试用','订阅与续费','支付与订单'].includes(asset.businessModule)
          ?'定价、订阅与支付'
          :asset.businessModule;
        workstreamSource = 'commercial-contract';
        confidence = 'high';
      } else if (/(?:push|cold_start|recommend)/.test(action)) {
        primaryWorkstream = '搜推与触达';
        workstreamModule = 'Push 与召回';
        workstreamSource = 'curated';
        confidence = 'high';
      } else {
        primaryWorkstream = '运营增长';
        workstreamModule = '增长运营';
        workstreamSource = 'asset-domain';
        confidence = 'medium';
      }
    } else if (asset.businessDomain === '内容') {
      if (asset.businessModule === '发现与浏览') {
        primaryWorkstream = '搜推与触达';
        workstreamModule = /(?:search|query)/.test(action) ? '搜索' : '推荐与浏览';
      } else {
        primaryWorkstream = '创作工具';
        workstreamModule = asset.businessModule;
      }
      workstreamSource = 'asset-domain';
      confidence = 'high';
    } else if (asset.businessDomain === '用户') {
      primaryWorkstream = '用户与平台';
      workstreamModule = /(?:login|register|account|profile)/.test(action) ? '登录与账号' : '社区与关系';
      workstreamSource = 'asset-domain';
      confidence = 'high';
    } else if (asset.businessDomain === '系统') {
      primaryWorkstream = '用户与平台';
      workstreamModule = '平台与系统';
      workstreamSource = 'asset-domain';
      confidence = 'high';
    }

    const collaborationTags = workstreamCollaborationTags(primaryWorkstream, workstreamModule, action);
    return {
      ...asset,
      businessDomain: primaryWorkstream,
      businessModule: workstreamModule,
      primaryWorkstream,
      workstreamModule,
      collaborationTags,
      workstreamSource,
      confidence,
      assetBusinessDomain: asset.businessDomain,
      assetBusinessModule: asset.businessModule,
      assetClassificationSource: asset.classificationSource,
      classificationSource: 'workstream-derived'
    };
  }

  function reportingChainLabel(event) {
    const namespaces = [...new Set(list(event?.codeEvidence?.namespaces).map(text).filter(Boolean))];
    if (namespaces.length > 1) return '前端多链路';
    return CHAIN_LABELS[namespaces[0]] || '前端代码链路';
  }

  function reportingCallModule(reference) {
    const file = text(reference?.file);
    if (!file || INFRASTRUCTURE_CALL_PATH.test(file)) return '';
    const segments = file.split('/').filter(Boolean);
    if (!segments.length) return '';
    let candidate = (segments[segments.length - 1] || '').replace(/\.[^.]+$/, '');
    if (GENERIC_CALL_MODULES.has(candidate.toLowerCase())) {
      candidate = [...segments].reverse().map(segment => segment.replace(/\.[^.]+$/, '')).find(segment => !GENERIC_CALL_MODULES.has(segment.toLowerCase())) || '';
    }
    return candidate;
  }

  function specificTriggerRule(event) {
    const rule = text(event?.rule);
    if (!rule || TECHNICAL_TRIGGER_RULE.test(rule)) return '';
    return rule;
  }

  function triggerSentence(value) {
    const sentence = text(value);
    if (!sentence) return '';
    if (/(?:上报|触发)$/.test(sentence)) return sentence;
    if (/时$/.test(sentence)) return `${sentence}上报`;
    if (/^(?:点击|选择|提交|发送|进入|打开|关闭|切换|更改|上传|下载|发布|取消|确认)/.test(sentence)) {
      return `用户${sentence}时上报`;
    }
    return `${sentence}时上报`;
  }

  function normalizedActionTokens(action) {
    return action
      .replace(/notnowclick/g, 'not_now_click')
      .replace(/viewclick/g, 'view_click')
      .replace(/backtoedit/g, 'back_to_edit')
      .replace(/backtotry/g, 'back_to_try')
      .replace(/stillleave/g, 'still_leave')
      .split('_')
      .map(token => token.trim())
      .filter(Boolean);
  }

  function joinBehaviorLabels(labels) {
    return labels.reduce((result, label) => {
      if (!result) return label;
      const resultEndsAscii = /[A-Za-z0-9]$/.test(result);
      const labelStartsAscii = /^[A-Za-z0-9]/.test(label);
      return `${result}${resultEndsAscii || labelStartsAscii ? ' ' : ''}${label}`;
    }, '');
  }

  function behaviorObject(action, omittedTokens) {
    const omitted = new Set(omittedTokens);
    let tokens = normalizedActionTokens(action).filter(token => !omitted.has(token) && !BEHAVIOR_NOISE_TOKENS.has(token));
    const parts = [];
    for (let index = 0; index < tokens.length;) {
      let matched = false;
      for (const length of [4, 3, 2]) {
        const key = tokens.slice(index, index + length).join('_');
        if (!ACTION_PHRASE_LABELS[key]) continue;
        parts.push(ACTION_PHRASE_LABELS[key]);
        index += length;
        matched = true;
        break;
      }
      if (matched) continue;
      parts.push(ACTION_TOKEN_LABELS[tokens[index]] || tokens[index]);
      index += 1;
    }
    return joinBehaviorLabels(parts) || '相关操作';
  }

  function inferActionBehavior(event) {
    const action = actionText(event);
    const has = pattern => pattern.test(action);
    let object = '';

    if (has(/(?:^|_)(?:click|tap|press)(?:_|$)|click$/)) {
      object = behaviorObject(action, ['click', 'tap', 'press']);
      return { text: `用户点击${object}时上报`, eventType: '点击' };
    }
    if (has(/(?:^|_)(?:select|choose)(?:_|$)/)) {
      object = behaviorObject(action, ['select', 'choose']);
      return { text: `用户选择${object}时上报`, eventType: '点击' };
    }
    if (has(/(?:^|_)(?:exposure|expose|impression|show|view)(?:_|$)/)) {
      object = behaviorObject(action, ['exposure', 'expose', 'impression', 'show', 'view']);
      return { text: `${object}展示或进入可视区域时上报`, eventType: '曝光' };
    }
    if (has(/(?:^|_)(?:visit|enter|entry)(?:_|$)/)) {
      object = behaviorObject(action, ['visit', 'enter', 'entry']);
      return { text: `用户进入${object}时上报`, eventType: '访问' };
    }
    if (has(/(?:^|_)(?:close|dismissed)(?:_|$)/)) {
      object = behaviorObject(action, ['close', 'dismissed']);
      return { text: `${object}关闭时上报`, eventType: '状态变化' };
    }
    if (has(/(?:^|_)(?:cancel)(?:_|$)/)) {
      object = behaviorObject(action, ['cancel']);
      return { text: `用户取消${object}时上报`, eventType: '状态变化' };
    }
    if (has(/(?:^|_)(?:failure|failed|error)(?:_|$)/)) {
      object = behaviorObject(action, ['failure', 'failed', 'error']);
      return { text: `${object}流程返回失败或异常状态时上报`, eventType: '结果' };
    }
    if (has(/(?:^|_)(?:success|result)(?:_|$)/)) {
      object = behaviorObject(action, ['success', 'result']);
      return { text: `${object}流程返回结果时上报`, eventType: '结果' };
    }
    if (has(/(?:^|_)(?:finish|done|complete)(?:_|$)/)) {
      object = behaviorObject(action, ['finish', 'done', 'complete']);
      return { text: `${object}流程结束时上报`, eventType: '结果' };
    }
    if (has(/(?:^|_)(?:submit)(?:_|$)/)) {
      object = behaviorObject(action, ['submit']);
      return { text: `用户提交${object}时上报`, eventType: '提交' };
    }
    if (has(/(?:^|_)(?:send)(?:_|$)/)) {
      object = behaviorObject(action, ['send']);
      return { text: `用户发送${object}时上报`, eventType: '提交' };
    }
    if (has(/(?:^|_)(?:upload)(?:_|$)/)) {
      object = behaviorObject(action, ['upload']);
      return { text: `用户上传${object}时上报`, eventType: '提交' };
    }
    if (has(/(?:^|_)(?:download)(?:_|$)/)) {
      object = behaviorObject(action, ['download']);
      return { text: `用户下载${object}时上报`, eventType: '点击' };
    }
    if (has(/(?:^|_)(?:publish)(?:_|$)/)) {
      object = behaviorObject(action, ['publish']);
      return { text: `用户发布${object}时上报`, eventType: '提交' };
    }
    if (has(/(?:^|_)(?:switch|change|update)(?:_|$)/)) {
      object = behaviorObject(action, ['switch', 'change', 'update']);
      return { text: `用户切换或更改${object}时上报`, eventType: '状态变化' };
    }
    if (has(/(?:^|_)(?:delete)(?:_|$)/)) {
      object = behaviorObject(action, ['delete']);
      return { text: `用户删除${object}时上报`, eventType: '状态变化' };
    }
    if (has(/(?:^|_)(?:save)(?:_|$)/)) {
      object = behaviorObject(action, ['save']);
      return { text: `用户保存${object}时上报`, eventType: '状态变化' };
    }
    if (has(/(?:^|_)(?:confirm)(?:_|$)/)) {
      object = behaviorObject(action, ['confirm']);
      return { text: `用户确认${object}时上报`, eventType: '提交' };
    }
    if (action === 'search') return { text: '用户发起搜索时上报', eventType: '提交' };
    if (action === 'like') return { text: '用户点赞内容时上报', eventType: '状态变化' };
    if (action === 'register') return { text: '账号完成注册时上报', eventType: '结果' };
    return null;
  }

  function compactActionLabel(value) {
    const sentence = text(value);
    if (!sentence) return '';
    if (sentence === '上报时机待确认') return '行为待确认';
    return sentence
      .replace(/时上报$/, '')
      .replace(/时触发$/, '')
      .replace(/^用户(?=(?:点击|选择|提交|发送|进入|打开|关闭|切换|更改|上传|下载|发布|取消|确认|删除|保存))/, '')
      .replace(/^(点击|选择|提交|发送|进入|打开|关闭|切换|更改|上传|下载|发布|取消|确认|删除|保存)(?=[A-Za-z])/, '$1 ')
      .trim();
  }

  const READABLE_ACTION_TERMS = new Set(['ai', 'h5', 'whatsapp', 'google', 'a1', 'id', 'url', 'pwa']);

  function containsUntranslatedEnglish(value) {
    return [...String(value ?? '').matchAll(/[A-Za-z][A-Za-z0-9-]*/g)]
      .some(match => !READABLE_ACTION_TERMS.has(match[0].toLowerCase()));
  }

  function genericActionLabel(event, reportingLogic) {
    const labels = {
      曝光: '曝光行为',
      访问: '访问行为',
      点击: '点击行为',
      提交: '提交行为',
      结果: '结果行为',
      '状态变化': '状态变化',
      系统: '系统行为',
      其他: '其他行为'
    };
    return labels[reportingLogic?.eventType] || '相关行为';
  }

  function getActionLabel(event, reportingLogic) {
    const logicText = text(reportingLogic?.text);
    const inferred = inferActionBehavior(event);
    const technicalRule = /(?:short_id|pub_id|原子能力|产品交互触发条件|前端代码|调用点)/i.test(logicText);

    const inferredLabel = inferred?.text ? compactActionLabel(inferred.text) : '';
    if (inferredLabel && (event?.codeEvidence || technicalRule) && !containsUntranslatedEnglish(inferredLabel)) {
      return inferredLabel;
    }

    if (technicalRule) {
      const actionObject = behaviorObject(actionText(event), []);
      if (actionObject && actionObject !== actionText(event) && !containsUntranslatedEnglish(actionObject)) return actionObject;
    }

    if (logicText && logicText !== '上报时机待确认') {
      const compactLogic = compactActionLabel(logicText);
      if (!containsUntranslatedEnglish(compactLogic)) return compactLogic;
    }

    const description = text(event?.description);
    if (description && !GENERIC_CODE_DESCRIPTION.test(description) && !containsUntranslatedEnglish(description)) return description;

    if (inferredLabel && !containsUntranslatedEnglish(inferredLabel)) return inferredLabel;

    return genericActionLabel(event, reportingLogic);
  }

  function reportingEvidenceSummary(source, evidenceState, callSiteCount) {
    if (source === 'declared') return '人工定义 · 来自资产中的触发规则';
    if (source === 'verified') return `已核实 · 前端代码发现 ${callSiteCount} 个直接调用点`;
    if (source === 'inferred') return `按 action 命名推断 · 前端代码发现 ${callSiteCount} 个直接调用点`;
    if (evidenceState === 'defined') return '待确认 · 代码中已定义，未发现直接调用';
    return `待确认 · 已发现 ${callSiteCount} 个代码调用点，但无法确认具体用户行为`;
  }

  function getReportingLogic(event, classification) {
    const rawDescription = text(event?.description);
    const generic = !rawDescription || GENERIC_CODE_DESCRIPTION.test(rawDescription);
    const resolvedClassification = classification || classifyEvent(event);
    const references = list(event?.codeEvidence?.callSites);
    const callSiteCount = Math.max(Number(event?.codeEvidence?.callSiteCount || 0), references.length);
    const chainLabel = reportingChainLabel(event);
    const evidenceState = event?.codeEvidence ? classifyEvidence(event).key : 'manual';
    const locations = [];
    references.forEach(reference => {
      const module = reportingCallModule(reference);
      if (module && !locations.includes(module)) locations.push(module);
    });
    const base = {
      rawDescription,
      eventType: resolvedClassification.eventType,
      evidenceState,
      callSiteCount,
      chainLabel,
      locations
    };

    const action = actionText(event);
    const override = ACTION_BEHAVIOR_OVERRIDES[action];
    if (override) {
      return {
        ...base,
        text: override.text,
        eventType: override.eventType || base.eventType,
        evidenceText: reportingEvidenceSummary('verified', evidenceState, callSiteCount),
        behaviorSource: 'verified',
        behaviorLabel: '已核实',
        derived: true,
        needsReview: false
      };
    }

    const declaredRule = specificTriggerRule(event);
    if (declaredRule) {
      return {
        ...base,
        text: triggerSentence(declaredRule),
        evidenceText: reportingEvidenceSummary('declared', evidenceState, callSiteCount),
        behaviorSource: 'declared',
        behaviorLabel: '人工定义',
        derived: false,
        needsReview: false
      };
    }

    if (!generic) {
      return {
        ...base,
        text: triggerSentence(rawDescription),
        evidenceText: reportingEvidenceSummary('declared', evidenceState, callSiteCount),
        behaviorSource: 'declared',
        behaviorLabel: '人工定义',
        derived: false,
        needsReview: false
      };
    }

    if (!callSiteCount) {
      return {
        ...base,
        text: '上报时机待确认',
        evidenceText: reportingEvidenceSummary('unknown', 'defined', 0),
        behaviorSource: 'unknown',
        behaviorLabel: '待确认',
        derived: true,
        needsReview: true
      };
    }

    const inferred = AMBIGUOUS_BEHAVIOR_ACTIONS.has(action) ? null : inferActionBehavior(event);
    if (inferred) {
      return {
        ...base,
        text: inferred.text,
        eventType: inferred.eventType || base.eventType,
        evidenceText: reportingEvidenceSummary('inferred', evidenceState, callSiteCount),
        behaviorSource: 'inferred',
        behaviorLabel: '按命名推断',
        derived: true,
        needsReview: false
      };
    }

    return {
      ...base,
      text: '上报时机待确认',
      evidenceText: reportingEvidenceSummary('unknown', evidenceState, callSiteCount),
      behaviorSource: 'unknown',
      behaviorLabel: '待确认',
      derived: true,
      needsReview: true
    };
  }

  function buildDirectory(events, options) {
    const domains = new Map();
    list(events).forEach(event => {
      const classification = classifyEvent(event, options);
      if (!domains.has(classification.businessDomain)) {
        domains.set(classification.businessDomain, { name: classification.businessDomain, count: 0, modules: new Map() });
      }
      const domain = domains.get(classification.businessDomain);
      domain.count += 1;
      domain.modules.set(classification.businessModule, (domain.modules.get(classification.businessModule) || 0) + 1);
    });

    return [...domains.values()]
      .sort((left, right) => {
        const leftIndex = DOMAIN_ORDER.indexOf(left.name);
        const rightIndex = DOMAIN_ORDER.indexOf(right.name);
        const safeLeft = leftIndex === -1 ? DOMAIN_ORDER.length : leftIndex;
        const safeRight = rightIndex === -1 ? DOMAIN_ORDER.length : rightIndex;
        return safeLeft - safeRight || left.name.localeCompare(right.name, 'zh-CN');
      })
      .map(domain => ({
        name: domain.name,
        count: domain.count,
        modules: [...domain.modules.entries()]
          .map(([name, count]) => ({ name, count }))
          .sort((left, right) => {
            const fixedOrder = domain.name === '内容'
              ? CONTENT_MODULE_ORDER
              : domain.name === '商业化与增长'
              ? COMMERCIAL_GROWTH_MODULE_ORDER
              : null;
            if (fixedOrder) {
              const leftIndex = fixedOrder.indexOf(left.name);
              const rightIndex = fixedOrder.indexOf(right.name);
              const safeLeft = leftIndex === -1 ? fixedOrder.length : leftIndex;
              const safeRight = rightIndex === -1 ? fixedOrder.length : rightIndex;
              return safeLeft - safeRight || left.name.localeCompare(right.name, 'zh-CN');
            }
            return right.count - left.count || left.name.localeCompare(right.name, 'zh-CN');
          })
      }));
  }

  function buildWorkstreamDirectory(events, options) {
    const workstreams = new Map();
    list(events).forEach(event => {
      const classification = classifyWorkstream(event, options);
      if (!workstreams.has(classification.primaryWorkstream)) {
        workstreams.set(classification.primaryWorkstream, {
          name: classification.primaryWorkstream,
          count: 0,
          modules: new Map()
        });
      }
      const workstream = workstreams.get(classification.primaryWorkstream);
      workstream.count += 1;
      workstream.modules.set(
        classification.workstreamModule,
        (workstream.modules.get(classification.workstreamModule) || 0) + 1
      );
    });

    return [...workstreams.values()]
      .sort((left, right) => {
        const leftIndex = WORKSTREAM_ORDER.indexOf(left.name);
        const rightIndex = WORKSTREAM_ORDER.indexOf(right.name);
        const safeLeft = leftIndex === -1 ? WORKSTREAM_ORDER.length : leftIndex;
        const safeRight = rightIndex === -1 ? WORKSTREAM_ORDER.length : rightIndex;
        return safeLeft - safeRight || left.name.localeCompare(right.name, 'zh-CN');
      })
      .map(workstream => {
        const fixedOrder = WORKSTREAM_MODULE_ORDER[workstream.name] || [];
        return {
          name: workstream.name,
          count: workstream.count,
          modules: [...workstream.modules.entries()]
            .map(([name, count]) => ({ name, count }))
            .sort((left, right) => {
              const leftIndex = fixedOrder.indexOf(left.name);
              const rightIndex = fixedOrder.indexOf(right.name);
              const safeLeft = leftIndex === -1 ? fixedOrder.length : leftIndex;
              const safeRight = rightIndex === -1 ? fixedOrder.length : rightIndex;
              return safeLeft - safeRight || left.name.localeCompare(right.name, 'zh-CN');
            })
        };
      });
  }

  return Object.freeze({
    DOMAIN_ORDER,
    EVENT_TYPE_ORDER,
    WORKSTREAM_ORDER,
    WORKSTREAM_DESCRIPTIONS,
    classifyEvent,
    classifyWorkstream,
    classifyEvidence,
    getActionLabel,
    getReportingLogic,
    buildDirectory,
    buildWorkstreamDirectory
  });
});
