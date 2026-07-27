(function initUserPlatformSystemReviewData(root, factory) {
  const data = factory();
  if (typeof module === 'object' && module.exports) module.exports = data;
  root.UserPlatformSystemReviewData = data;
})(typeof globalThis !== 'undefined' ? globalThis : this, function createUserPlatformSystemReviewData() {
  'use strict';

  const freeze = value => {
    if (!value || typeof value !== 'object' || Object.isFrozen(value)) return value;
    Object.values(value).forEach(freeze);
    return Object.freeze(value);
  };
  const dynamic = (meaning, extra = {}) => ({ meaning, valueMode: 'dynamic', ...extra });
  const open = (meaning, entries, extra = {}) => ({
    meaning,
    valueMode: 'open',
    valueMeaningSource: 'frontend_code',
    values: entries,
    ...extra
  });
  const closed = (meaning, entries, extra = {}) => ({
    meaning,
    valueMode: 'closed',
    valueMeaningSource: 'frontend_code',
    values: entries,
    ...extra
  });

  const BIGDATA_ACTIONS = ['page_exposure_aggregation'];
  const FRONTEND_ACTIONS = [
    'userpath',
    'page_exposure',
    'error_page_enter',
    'app_click',
    'close_a1',
    'device_id_failed',
    'error_page_button_click',
    'language_change',
    'open_a1',
    'page_change',
    'app_performance',
    'atomic_error_entry',
    'onboarding_performance',
    'app_detail_page_leave',
    'h5_popup_click',
    'h5_popup_show',
    'leave'
  ];
  const DEFINITION_ONLY_ACTIONS = ['page_exposure_direct'];
  const ANDROID_ACTIONS = [
    'app_crash',
    'performance_metrics',
    'leave-android-app',
    'network_status'
  ];
  const PLATFORM_ACTIONS = [...BIGDATA_ACTIONS, ...FRONTEND_ACTIONS, ...ANDROID_ACTIONS];
  const ACTIVE_ACTIONS = PLATFORM_ACTIONS;

  const EVENT_BEHAVIORS = {
    page_exposure_aggregation:
      '火山按用户汇总当天各页面的访问次数和停留时长时生成。',
    userpath:
      '移动端或 PC 页面地址发生变化后记录本次访问环境，并标记是否为本设备首次记录。',
    page_exposure:
      '页面或弹窗切换且上一状态停留至少 1 秒时上报；Onboarding 展示时也会单独上报一次。',
    error_page_enter:
      '空状态或错误状态页面首次展示时上报。',
    app_click:
      '用户点击 App 卡片、Banner、冷启动推荐或生成等待中的推荐 App 时上报。',
    close_a1:
      'A1 页面进入后台时上报。',
    device_id_failed:
      '获取设备 ID 失败并进入设备 ID 异常状态时上报。',
    error_page_button_click:
      '用户点击空状态或错误状态页面中的操作按钮时上报。',
    language_change:
      '用户点击语言列表行、URL 已改写且页面即将刷新时上报；重复选当前语言也可能触发。',
    open_a1:
      '打开 A1 或从后台回到前台时上报；原生 App 尚未取得设备 ID 时延迟约 5 秒。',
    page_change:
      '用户进入或离开纳入推荐统计的页面、弹窗时，记录上一页面停留时长。',
    app_performance:
      '原生 App 首个内容列表加载完成且已取得启动耗时信息时上报，每次打开最多一次。',
    atomic_error_entry:
      '图片处理能力进入错误结果页时上报。',
    onboarding_performance:
      'Onboarding 推荐内容首次准备完成且已取得启动耗时信息时上报，每次打开最多一次。',
    app_detail_page_leave:
      '用户离开 App 详情页、详情弹窗或切换到另一个 App 详情时上报。',
    h5_popup_click:
      '用户在 H5 导流弹窗中点击关闭或打开 App 时上报。',
    h5_popup_show:
      'H5 登录、生成或 Chatbot 导流弹窗展示时上报。',
    leave:
      'A1 页面进入后台且本次停留至少 1 秒时上报；关闭页面时通过离开请求上报。',
    app_crash:
      'Android App 发生未处理异常时上报。',
    performance_metrics:
      'Android App 首个页面加载完成时上报；若此前未成功记录，退到后台时补报，每次打开最多一次。',
    'leave-android-app':
      'Android App 从前台切换到后台时上报本次前台活跃时长。',
    network_status:
      'Android App 网速测试成功时上报；当前默认关闭测速，因此通常不会触发。'
  };

  const FIELD_KEYS = {
    page_exposure_aggregation: ['page_all_pv', 'page_all_duration', 'page_{page_name}_pv'],
    userpath: [
      'preUrl',
      'isnew',
      'gpu',
      'user_agent',
      'os',
      'platform',
      'screen_magnification',
      'screen_resolution',
      'browser_window_size',
      'userLanguage',
      'device_brand',
      'device_model',
      'google_play_referrer'
    ],
    page_exposure: ['before', 'after', 'stayTime', 'location1'],
    error_page_enter: ['type', 'code'],
    app_click: [
      'app_id',
      'is_banner',
      'trace_info',
      'exposure_ratio',
      'image_id',
      'sort',
      'user_scene',
      'search_id',
      'search_content',
      'search_method',
      'ability_name',
      'app_source',
      'recommendAppId',
      'location',
      'location1',
      'location2'
    ],
    close_a1: [],
    device_id_failed: ['error_message'],
    error_page_button_click: ['type', 'code'],
    language_change: ['before_language', 'after_language'],
    open_a1: [],
    page_change: ['app_id', 'refer_stay_time'],
    app_performance: [
      'cold_start_time',
      'load_html_time',
      'load_list_time',
      'total_start_time',
      'load_html_detail'
    ],
    atomic_error_entry: ['type'],
    onboarding_performance: [
      'cold_start_time',
      'load_html_time',
      'onboarding_load_time',
      'total_onboarding_time',
      'prepare_tourist_context_time',
      'login_v2_time',
      'abtest_init_time',
      'user_behavior_init_time',
      'onboarding_init_wait_time',
      'big_data_api_time',
      'onboarding_api_time',
      'login_to_onboarding_time',
      'load_html_detail'
    ],
    page_exposure_direct: ['app_source'],
    app_detail_page_leave: ['app_id', 'start_time', 'active_time', 'ability_name', 'user_scene'],
    h5_popup_click: ['type', 'button_name'],
    h5_popup_show: ['type'],
    leave: ['start_time', 'active_time'],
    app_crash: ['error_message', 'crash_message', 'crash_stack'],
    performance_metrics: [
      'total_resource_requests',
      'offline_resource_hits',
      'offline_hit_rate',
      'app_duration',
      'cold_start_duration',
      'load_html_duration',
      'launch_to_main_request_time',
      'defer_deeplink_time',
      'google_deferred_deeplink_override',
      'is_new_launch',
      'is_first_active',
      'launch_count',
      'is_forced_by_exit',
      'has_notification_permission'
    ],
    'leave-android-app': ['start_time', 'active_time'],
    network_status: [
      'speed_kbps',
      'total_bytes',
      'duration_ms',
      'success_count',
      'test_time',
      'network_type'
    ]
  };

  const OS_VALUES = {
    'Windows Phone': 'Windows Phone 设备',
    Android: 'Android 设备',
    iOS: 'iPhone、iPad 或 iPod',
    Mac: 'macOS 设备',
    Linux: 'Linux 设备',
    'Windows 10': 'Windows 10 设备',
    'Windows 8.1': 'Windows 8.1 设备',
    'Windows 8': 'Windows 8 设备',
    'Windows 7': 'Windows 7 设备',
    'Windows Vista': 'Windows Vista 设备',
    'Windows Server 2003': 'Windows Server 2003 设备',
    'Windows XP': 'Windows XP 设备',
    'Windows 2000': 'Windows 2000 设备',
    Windows: '其他可识别的 Windows 版本',
    other: '没有匹配到已识别的操作系统'
  };
  const LANGUAGE_VALUES = {
    'en-US': '英语（美国）',
    'zh-CN': '简体中文',
    'ru-RU': '俄语',
    'ja-JP': '日语',
    'pt-BR': '葡萄牙语（巴西）',
    'es-MX': '西班牙语（墨西哥）',
    'de-DE': '德语',
    'zh-TW': '繁体中文',
    'tr-TR': '土耳其语',
    'id-ID': '印度尼西亚语',
    'vi-VN': '越南语',
    'th-TH': '泰语',
    'ms-MY': '马来语',
    'hi-IN': '印地语',
    'ar-SA': '阿拉伯语',
    'ko-KR': '韩语'
  };
  const USER_SCENE_VALUES = {
    emoji: '表情包场景',
    creator: '创作者场景',
    id_photo: '证件照场景',
    dress_up: '换装场景',
    activity: '运营活动场景',
    '': '没有关联业务场景'
  };
  const ABILITY_VALUES = {
    a1: 'A1 通用生图',
    FACESWAP: '视频换脸',
    CUSTOM_FACESWAP: '自定义换脸',
    SEGMENT: '智能抠图',
    ENHANCE_RESOLUTION: '图片清晰度增强',
    RECOLOR: '老照片上色',
    CHANGE_BACKGROUND: '更换背景',
    CHANGE_BACKGROUND_SEGMENT: '背景分割更换',
    EMOJI: 'AI 表情包',
    GENERATE_VIDEO: '视频生成',
    ID_PHOTO: '证件照',
    DRESS_UP: 'AI 换装',
    STAY_TUNED: '待开放能力',
    SIMPLE_GENERATE_VIDEO: '简易视频生成',
    VIDEO_ENHANCE_RESOLUTION: '视频清晰度增强'
  };
  const SEARCH_METHOD_VALUES = {
    input: '用户手动输入搜索内容',
    history: '用户点击历史搜索词',
    individuation: '用户点击个性化推荐词',
    top_search: '用户点击顶部热搜词',
    hot_today: '用户从今日热门列表进入',
    '': '没有记录搜索方式'
  };
  const PAGE_VALUES = {
    Like_Page: '喜欢页面',
    Follow_Page: '关注页面',
    Explore_Page: '探索页面',
    Post_Page: '作品页面',
    Topic_Page: '话题页面',
    Message_New_Page: '新消息页面',
    Message_More_Page: '更多消息页面',
    Profile_Post_Page: '个人主页作品页',
    Profile_App_Page: '个人主页 App 页',
    Profile_Liked_Post_Page: '个人主页喜欢的作品页',
    Profile_Liked_App_Page: '个人主页喜欢的 App 页',
    Draft_Page: '草稿页面',
    Home_Page: '首页',
    Studio: 'Studio 页面',
    appDetail: 'App 详情',
    purchase: '购买页',
    other_personal: '其他用户个人主页',
    postDetail: '作品详情',
    topicDetail: '话题详情',
    taskView: '任务结果页',
    faceswap: '换脸页面',
    appGallery: 'App 合集',
    videoGallery: '视频合集'
  };
  const EMPTY_TYPE_VALUES = {
    SearchEmpty: '搜索没有结果',
    postEmpty: '作品列表为空',
    creatorEmpty: '创作者列表为空',
    likeEmpty: '喜欢列表为空',
    DraftsEmpty: '草稿列表为空',
    TopicEmpty: '话题列表为空',
    TopicAppEmpty: '话题下没有 App',
    creatorDetailEmpty: '创作者详情内容为空',
    creatorDetailPageEmpty: '创作者详情页为空',
    follow_empty: '关注内容为空',
    message_empty: '消息列表为空',
    message_chat_empty: '聊天消息为空',
    comment_empty: '评论列表为空',
    follow_apps_empty: '关注的 App 列表为空',
    history_Popup_empty: '历史记录弹窗为空',
    face_swap_detail_page_empty: '换脸详情页为空',
    face_swap_list_page_empty: '换脸列表页为空',
    activity_submit_empty: '活动提交内容为空',
    profile_post_empty: '个人主页作品为空',
    profile_creator_empty: '个人主页创作内容为空',
    profile_like_empty: '个人主页喜欢内容为空',
    profile_drafts_empty: '个人主页草稿为空',
    discover_like_empty: 'Discover 喜欢内容为空',
    following_empty: '正在关注列表为空',
    followers_empty: '关注者列表为空',
    friends_empty: '好友列表为空',
    task_a1_error: 'A1 生图任务失败',
    task_a1_error_test: 'A1 生图测试任务失败',
    task_nsfw_error: '任务因内容安全限制失败',
    task_nsfw_error_test: '内容安全测试任务失败',
    task_faceswap_error: '换脸任务失败',
    task_video_gen_error: '视频生成任务失败',
    task_video_gen_nsfw_error: '视频生成因内容安全限制失败',
    task_video_over_time_error: '视频生成超时',
    task_partial_error: '任务部分结果失败',
    task_vsr_hd_error: '高清视频增强失败',
    task_vsr_fhd_error: '全高清视频增强失败',
    fromCode: '按错误码展示的通用错误',
    emoji_empty: '表情包内容为空',
    idphoto_empty: '证件照内容为空',
    background_empty: '背景内容为空',
    dressup_empty: '换装内容为空',
    soundpick_empty: '音频选择内容为空',
    generations_empty: '生成记录为空'
  };
  const H5_TYPE_VALUES = {
    chatbot_send_intercept: '已登录用户发送 Chatbot 消息时出现 App 导流',
    chatbot_send_login_intercept: '未登录用户发送 Chatbot 消息时出现登录与 App 导流',
    login_intercept: 'H5 登录入口出现 App 导流',
    generate_intercept: 'H5 首次生成前出现 App 导流'
  };
  const ATOMIC_ERROR_VALUES = {
    CHANGE_BACKGROUND: '更换背景失败',
    SEGMENT: '智能抠图失败',
    ENHANCE_RESOLUTION: '图片清晰度增强失败',
    RECOLOR: '老照片上色失败',
    CHANGE_BACKGROUND_SEGMENT: '背景分割更换失败'
  };

  const FIELD_SEMANTICS = {
    'page_exposure_aggregation.page_all_pv': dynamic('该用户当天所有页面的访问总次数。'),
    'page_exposure_aggregation.page_all_duration': dynamic('该用户当天所有页面的停留总时长。'),
    'page_exposure_aggregation.page_{page_name}_pv': dynamic(
      '按页面名称生成的当日访问次数字段，page_name 来自页面曝光的 after 值。',
      { nameValues: PAGE_VALUES }
    ),

    'userpath.preUrl': open('本次访问的上一页面地址。', { '': '没有可用的上一页面地址' }),
    'userpath.isnew': closed('本设备是否首次记录页面访问。', {
      true: '首次记录',
      false: '已有历史记录'
    }),
    'userpath.gpu': dynamic('当前设备的动态 GPU 信息。'),
    'userpath.user_agent': dynamic('当前浏览器或 App Web 容器提供的设备与浏览器信息。'),
    'userpath.os': closed('当前设备的操作系统。', OS_VALUES),
    'userpath.platform': closed('本次访问所在的平台。', {
      android: 'Android App 内访问',
      web: '浏览器访问'
    }),
    'userpath.screen_magnification': dynamic('当前屏幕像素倍率，按字符串发送。'),
    'userpath.screen_resolution': dynamic('当前屏幕分辨率，格式为宽度x高度。'),
    'userpath.browser_window_size': dynamic('当前页面可视区域尺寸，格式为宽度x高度。'),
    'userpath.userLanguage': dynamic('设备或浏览器当前使用的语言。'),
    'userpath.device_brand': open('设备品牌。', { '': '没有取得设备品牌' }),
    'userpath.device_model': open('设备型号。', { '': '没有取得设备型号' }),
    'userpath.google_play_referrer': open('首次访问时取得的 Google Play 动态安装归因信息。', {
      '': '没有 Google Play 安装归因信息'
    }),

    'page_exposure.before': closed('页面切换前的页面或弹窗。', {
      landing: '进入站点后的初始状态',
      ...PAGE_VALUES
    }),
    'page_exposure.after': closed('页面切换后展示的页面或弹窗。', PAGE_VALUES),
    'page_exposure.stayTime': dynamic('切换前页面或弹窗的停留时长，单位毫秒。'),
    'page_exposure.location1': closed('单独记录 Onboarding 展示时的业务位置。', {
      onboarding: 'Onboarding 推荐页'
    }),
    'page_exposure_direct.app_source': dynamic('预留的页面曝光业务来源。'),

    'error_page_enter.type': closed('本次展示的空状态或错误状态。', EMPTY_TYPE_VALUES),
    'error_page_enter.code': dynamic('本次错误对应的动态错误码；没有错误码时不发送。'),

    'app_click.app_id': dynamic('用户点击的动态 App 资源 ID。'),
    'app_click.is_banner': closed('用户点击的内容是否为 Banner。', {
      true: 'Banner',
      false: '普通 App 卡片或推荐项'
    }),
    'app_click.trace_info': open('本次点击关联的动态推荐追踪信息。', {
      '': '没有推荐追踪信息'
    }),
    'app_click.exposure_ratio': open('点击发生时该内容的可见比例，按字符串发送。', {
      0: '没有记录到可见比例或 Banner 点击固定值',
      1: '内容完全可见或固定按完全可见记录'
    }),
    'app_click.image_id': open('点击时主输入图的动态图片 ID。', {
      '': '没有关联主输入图'
    }),
    'app_click.sort': dynamic('被点击内容在当前列表中的顺序，从 1 开始；无法定位时为 0。'),
    'app_click.user_scene': closed('被点击 App 所属的业务场景。', USER_SCENE_VALUES),
    'app_click.search_id': dynamic('从搜索结果点击时对应的动态搜索记录 ID。'),
    'app_click.search_content': dynamic('从搜索结果点击时使用的动态搜索词。'),
    'app_click.search_method': closed('从搜索结果点击时采用的搜索方式。', SEARCH_METHOD_VALUES),
    'app_click.ability_name': open('被点击 App 的生成能力。', {
      '': '当前入口没有提供生成能力',
      a1: ABILITY_VALUES.a1,
      FACESWAP: ABILITY_VALUES.FACESWAP,
      GENERATE_VIDEO: ABILITY_VALUES.GENERATE_VIDEO
    }),
    'app_click.app_source': open('生成等待场景中推荐 App 的来源。', {
      generate_wait: '生成等待期间展示的推荐 App'
    }),
    'app_click.recommendAppId': dynamic('生成等待场景中推荐项关联的动态 App ID。'),
    'app_click.location': open('本次 App 点击的业务位置。', {
      cold_start_commend: '冷启动推荐弹窗'
    }),
    'app_click.location1': open('本次 App 点击的一级业务位置。', {
      '': '冷启动推荐没有记录一级位置'
    }),
    'app_click.location2': open('本次 App 点击的二级业务位置。', {
      '': '冷启动推荐没有记录二级位置'
    }),

    'device_id_failed.error_message': dynamic('设备 ID 获取失败时返回的动态错误信息。'),

    'error_page_button_click.type': closed('用户操作的空状态或错误状态。', EMPTY_TYPE_VALUES),
    'error_page_button_click.code': dynamic('本次错误对应的动态错误码；没有错误码时不发送。'),

    'language_change.before_language': closed('切换前的语言；无法识别当前语言路径时为空。', {
      '': '无法识别切换前的语言路径',
      ...LANGUAGE_VALUES
    }),
    'language_change.after_language': closed('用户选择的新语言。', LANGUAGE_VALUES),

    'page_change.app_id': open('App 详情页关联的动态 App 资源 ID。', {
      '': '当前页面不是 App 详情页'
    }),
    'page_change.refer_stay_time': dynamic('上一推荐页面的停留时长，按整数秒字符串发送。'),

    'app_performance.cold_start_time': dynamic('App 冷启动阶段耗时，单位毫秒。'),
    'app_performance.load_html_time': dynamic('首个页面基础内容加载耗时，单位毫秒。'),
    'app_performance.load_list_time': dynamic('首个页面基础内容完成到首批列表完成的耗时，单位毫秒。'),
    'app_performance.total_start_time': dynamic('创建首个页面到首批列表完成的总耗时，单位毫秒。'),
    'app_performance.load_html_detail': dynamic('首个页面各加载阶段的动态耗时明细。'),

    'atomic_error_entry.type': closed('发生错误的图片处理能力。', ATOMIC_ERROR_VALUES),

    'onboarding_performance.cold_start_time': dynamic('App 冷启动阶段耗时，单位毫秒。'),
    'onboarding_performance.load_html_time': dynamic('首个页面基础内容加载耗时，单位毫秒。'),
    'onboarding_performance.onboarding_load_time': dynamic('基础内容完成到 Onboarding 展示的耗时，单位毫秒。'),
    'onboarding_performance.total_onboarding_time': dynamic('创建首个页面到 Onboarding 展示的总耗时，单位毫秒。'),
    'onboarding_performance.prepare_tourist_context_time': dynamic('登录前准备设备、归因和分享信息的耗时，单位毫秒。'),
    'onboarding_performance.login_v2_time': dynamic('游客或账号登录请求耗时，单位毫秒。'),
    'onboarding_performance.abtest_init_time': dynamic('登录完成到实验配置准备完成的耗时，单位毫秒。'),
    'onboarding_performance.user_behavior_init_time': dynamic('登录完成到用户行为数据准备完成的耗时，单位毫秒。'),
    'onboarding_performance.onboarding_init_wait_time': dynamic('登录完成到 Onboarding 所需初始化条件满足的耗时，单位毫秒。'),
    'onboarding_performance.big_data_api_time': dynamic('用户行为数据请求耗时，单位毫秒。'),
    'onboarding_performance.onboarding_api_time': dynamic('Onboarding 推荐内容请求耗时，单位毫秒。'),
    'onboarding_performance.login_to_onboarding_time': dynamic('开始用户初始化到 Onboarding 首次展示的总耗时，单位毫秒。'),
    'onboarding_performance.load_html_detail': dynamic('首个页面各加载阶段的动态耗时明细。'),

    'app_detail_page_leave.app_id': dynamic('用户离开的动态 App 资源 ID。'),
    'app_detail_page_leave.start_time': dynamic('本次 App 详情开始展示时的毫秒时间戳。'),
    'app_detail_page_leave.active_time': dynamic('本次 App 详情的停留时长，单位毫秒。'),
    'app_detail_page_leave.ability_name': closed('该 App 对应的生成能力。', ABILITY_VALUES, {
      observedValues: ['a1', 'FACESWAP', 'GENERATE_VIDEO']
    }),
    'app_detail_page_leave.user_scene': closed('该 App 对应的业务场景。', USER_SCENE_VALUES),

    'h5_popup_click.type': closed('本次导流弹窗所属的业务场景。', H5_TYPE_VALUES),
    'h5_popup_click.button_name': closed('用户在导流弹窗中的操作。', {
      close: '关闭弹窗',
      download: '打开或下载 App'
    }),
    'h5_popup_show.type': closed('本次展示的导流弹窗所属业务场景。', H5_TYPE_VALUES),

    'leave.start_time': dynamic('本次页面活跃开始时间，使用东八区 YYYY-MM-DD HH:mm:ss 格式。'),
    'leave.active_time': dynamic('本次页面活跃时长，按整数秒发送。'),

    'app_crash.error_message': dynamic('Android 未处理异常的动态错误信息。'),
    'app_crash.crash_message': dynamic('Android 未处理异常的动态异常内容。'),
    'app_crash.crash_stack': dynamic('Android 未处理异常的动态调用堆栈。'),

    'performance_metrics.total_resource_requests': dynamic('本次首屏加载发起的资源请求总数。'),
    'performance_metrics.offline_resource_hits': dynamic('本次首屏加载命中的离线资源数。'),
    'performance_metrics.offline_hit_rate': dynamic('本次首屏加载的离线资源命中率。'),
    'performance_metrics.app_duration': dynamic('App 本次启动阶段的耗时数值。'),
    'performance_metrics.cold_start_duration': dynamic('App 本次冷启动的耗时数值。'),
    'performance_metrics.load_html_duration': dynamic('App 本次首个页面加载的耗时数值。'),
    'performance_metrics.launch_to_main_request_time': dynamic('App 启动到主请求发起的耗时数值。'),
    'performance_metrics.defer_deeplink_time': dynamic('App 处理延迟深链的耗时数值。'),
    'performance_metrics.google_deferred_deeplink_override': closed('本次启动归因是否被 Google 延迟深链覆盖。', {
      true: '被 Google 延迟深链覆盖',
      false: '未被 Google 延迟深链覆盖'
    }),
    'performance_metrics.is_new_launch': closed('本次是否为一次新的 App 启动。', {
      true: '新的 App 启动',
      false: '不是新的 App 启动'
    }),
    'performance_metrics.is_first_active': closed('本次启动是否首次进入活跃状态。', {
      true: '首次进入活跃状态',
      false: '此前已进入过活跃状态'
    }),
    'performance_metrics.launch_count': dynamic('当前记录到的 App 启动次数。'),
    'performance_metrics.is_forced_by_exit': closed('本次性能数据是否因 App 退到后台而补报。', {
      true: '退到后台时补报',
      false: '首个页面加载完成时正常上报'
    }),
    'performance_metrics.has_notification_permission': closed('上报时是否已获得通知权限。', {
      true: '已获得通知权限',
      false: '未获得通知权限'
    }),

    'leave-android-app.start_time': dynamic('Android App 本次进入前台时记录的动态开始时间。'),
    'leave-android-app.active_time': dynamic('Android App 本次前台活跃时长，单位秒。'),

    'network_status.speed_kbps': dynamic('测速得到的网络速度，单位 kbps。'),
    'network_status.total_bytes': dynamic('本次测速接收的总字节数。'),
    'network_status.duration_ms': dynamic('本次测速耗时，单位毫秒。'),
    'network_status.success_count': dynamic('本次测速成功完成的请求数。'),
    'network_status.test_time': dynamic('本次测速发生时记录的动态时间值。'),
    'network_status.network_type': dynamic('本次测速时识别出的动态网络类型。')
  };

  const SOURCE_EVIDENCE = {
    page_exposure_aggregation: {
      sourceType: 'bigdata',
      directFrontendCall: false,
      files: ['volcano-aggregation-assets.js'],
      description: '来自用户提供的火山聚合口径，不是单次页面行为。'
    },
    userpath: {
      sourceType: 'frontend',
      directFrontendCall: true,
      files: ['src/mobile/hooks/init/useMobileAppEvent.ts', 'src/pc/hooks/init/useAppEvent.ts']
    },
    page_exposure: {
      sourceType: 'frontend',
      directFrontendCall: true,
      files: ['src/mobile/handler/cache/recorder.ts', 'src/mobile/views/Onborading/index.tsx']
    },
    error_page_enter: {
      sourceType: 'frontend',
      directFrontendCall: true,
      files: ['packages/shared/components/business/EmptyView/index.tsx']
    },
    app_click: {
      sourceType: 'frontend',
      directFrontendCall: true,
      files: [
        'packages/shared/handler/event/utils/exposure.ts',
        'src/mobile/businessComponents/RecommendAppPopup/index.tsx'
      ]
    },
    close_a1: {
      sourceType: 'frontend',
      directFrontendCall: true,
      files: ['src/bootstrap/page-state.ts']
    },
    device_id_failed: {
      sourceType: 'frontend',
      directFrontendCall: true,
      files: ['packages/shared/utils/tourist/handle.ts', 'packages/shared/handler/event/index.tsx']
    },
    error_page_button_click: {
      sourceType: 'frontend',
      directFrontendCall: true,
      files: ['packages/shared/components/business/EmptyView/index.tsx']
    },
    language_change: {
      sourceType: 'frontend',
      directFrontendCall: true,
      files: ['packages/shared/utils/i18n/change.ts']
    },
    open_a1: {
      sourceType: 'frontend',
      directFrontendCall: true,
      files: ['src/bootstrap/page-state.ts']
    },
    page_change: {
      sourceType: 'frontend',
      directFrontendCall: true,
      files: ['packages/shared/handler/event/utils/exposure.ts', 'packages/shared/handler/cache/recommend.ts']
    },
    app_performance: {
      sourceType: 'frontend',
      directFrontendCall: true,
      files: ['src/mobile/hooks/useMonitorAppPerformance.ts', 'src/mobile/utils/app/appPerformance.ts']
    },
    atomic_error_entry: {
      sourceType: 'frontend',
      directFrontendCall: true,
      files: ['src/mobile/businessComponents/AtomicError/index.tsx']
    },
    onboarding_performance: {
      sourceType: 'frontend',
      directFrontendCall: true,
      files: ['src/mobile/views/Onborading/index.tsx', 'src/mobile/utils/app/appPerformance.ts']
    },
    app_detail_page_leave: {
      sourceType: 'frontend',
      directFrontendCall: true,
      files: [
        'src/mobile/views/AppDetail/AppDetailPopup.tsx',
        'src/mobile/views/AppDetail/index.tsx',
        'src/pc/views/App/AppDetailV2/components/AppDetailContentV3/index.tsx'
      ]
    },
    h5_popup_click: {
      sourceType: 'frontend',
      directFrontendCall: true,
      files: ['packages/chatbot/mobile/views/ChatbotMessageH5/index.tsx', 'src/mobile/components/H5Import/index.ts']
    },
    h5_popup_show: {
      sourceType: 'frontend',
      directFrontendCall: true,
      files: ['packages/chatbot/mobile/views/ChatbotMessageH5/index.tsx', 'src/mobile/components/H5Import/index.ts']
    },
    leave: {
      sourceType: 'frontend',
      directFrontendCall: true,
      files: ['src/bootstrap/page-state.ts']
    },
    page_exposure_direct: {
      sourceType: 'frontend',
      directFrontendCall: false,
      files: ['packages/shared/handler/event/impl/visit.ts']
    },
    app_crash: {
      sourceType: 'android',
      directFrontendCall: false,
      files: ['Android 项目内埋点清单.md']
    },
    performance_metrics: {
      sourceType: 'android',
      directFrontendCall: false,
      files: ['Android 项目内埋点清单.md']
    },
    'leave-android-app': {
      sourceType: 'android',
      directFrontendCall: false,
      files: ['Android 项目内埋点清单.md']
    },
    network_status: {
      sourceType: 'android',
      directFrontendCall: false,
      files: ['Android 项目内埋点清单.md']
    }
  };

  const WIRE_CORRECTIONS = Object.fromEntries(
    ACTIVE_ACTIONS.map(action => [action, { migrationStrategy: 'keep' }])
  );
  WIRE_CORRECTIONS.userpath = {
    ...WIRE_CORRECTIONS.userpath,
    commonOutputFields: ['traceId']
  };
  WIRE_CORRECTIONS.app_click = {
    ...WIRE_CORRECTIONS.app_click,
    outputFields: [{
      name: 'search_method',
      type: 'string',
      required: false,
      nullable: false,
      description: '从搜索结果点击时采用的搜索方式。'
    }],
    commonOutputFields: [
      'page',
      'page_timestamp',
      'page_url',
      'refer_page',
      'refer_page_timestamp',
      'refer_page_url'
    ]
  };
  WIRE_CORRECTIONS.open_a1 = {
    ...WIRE_CORRECTIONS.open_a1,
    commonInputFields: [
      'page',
      'page_timestamp',
      'page_url',
      'refer_page',
      'refer_page_timestamp',
      'refer_page_url'
    ]
  };
  WIRE_CORRECTIONS.close_a1 = {
    ...WIRE_CORRECTIONS.close_a1,
    commonInputFields: [...WIRE_CORRECTIONS.open_a1.commonInputFields]
  };
  WIRE_CORRECTIONS.page_change = {
    ...WIRE_CORRECTIONS.page_change,
    commonInputFields: [...WIRE_CORRECTIONS.open_a1.commonInputFields]
  };
  WIRE_CORRECTIONS.app_performance = {
    ...WIRE_CORRECTIONS.app_performance,
    internalInputFields: ['device_type']
  };
  WIRE_CORRECTIONS.onboarding_performance = {
    ...WIRE_CORRECTIONS.onboarding_performance,
    internalInputFields: ['device_type']
  };
  WIRE_CORRECTIONS['leave-android-app'] = {
    ...WIRE_CORRECTIONS['leave-android-app'],
    canonicalActionProposal: 'leave_android_app'
  };
  const ACTIVE_EVENT_BEHAVIORS = Object.fromEntries(
    ACTIVE_ACTIONS.map(action => [action, EVENT_BEHAVIORS[action]])
  );
  const DEFINITION_ONLY_BEHAVIORS = {
    page_exposure_direct: '当前版本未发现实际上报入口，仅保留页面曝光来源的备用埋点。'
  };
  const ACTIVE_FIELD_KEYS = Object.fromEntries(
    ACTIVE_ACTIONS.map(action => [action, FIELD_KEYS[action]])
  );
  const ACTIVE_FIELD_SEMANTICS = Object.fromEntries(
    Object.entries(FIELD_SEMANTICS).filter(([qualifiedName]) =>
      ACTIVE_ACTIONS.includes(qualifiedName.slice(0, qualifiedName.indexOf('.')))
    )
  );
  const ACTIVE_SOURCE_EVIDENCE = Object.fromEntries(
    ACTIVE_ACTIONS.map(action => [action, SOURCE_EVIDENCE[action]])
  );
  const DEFINITION_ONLY_FIELD_KEYS = Object.fromEntries(
    DEFINITION_ONLY_ACTIONS.map(action => [action, FIELD_KEYS[action]])
  );
  const DEFINITION_ONLY_FIELD_SEMANTICS = Object.fromEntries(
    Object.entries(FIELD_SEMANTICS).filter(([qualifiedName]) =>
      DEFINITION_ONLY_ACTIONS.includes(qualifiedName.slice(0, qualifiedName.indexOf('.')))
    )
  );
  const DEFINITION_ONLY_SOURCE_EVIDENCE = Object.fromEntries(
    DEFINITION_ONLY_ACTIONS.map(action => [action, SOURCE_EVIDENCE[action]])
  );

  return freeze({
    schemaVersion: 1,
    sourceRevision: 'fe-a1-art@22b0950c33762b40da30c0137e1281fd4b3d8098',
    scope: {
      workstream: '用户与平台',
      assetCount: 23,
      activeCount: 22,
      definitionOnlyCount: 1,
      fieldCount: 99,
      previousFieldEstimate: 98,
      modules: { 平台与系统: 22 },
      sourceCounts: { frontend: 17, bigdata: 1, android: 4 }
    },
    bigdataActions: BIGDATA_ACTIONS,
    platformActions: PLATFORM_ACTIONS,
    frontendActions: FRONTEND_ACTIONS,
    androidActions: ANDROID_ACTIONS,
    definitionOnlyActions: DEFINITION_ONLY_ACTIONS,
    activeActions: ACTIVE_ACTIONS,
    keepActions: ACTIVE_ACTIONS,
    eventBehaviors: ACTIVE_EVENT_BEHAVIORS,
    definitionOnlyBehaviors: DEFINITION_ONLY_BEHAVIORS,
    fieldKeysByAction: ACTIVE_FIELD_KEYS,
    fieldSemantics: ACTIVE_FIELD_SEMANTICS,
    sourceEvidence: ACTIVE_SOURCE_EVIDENCE,
    definitionOnlyFieldKeysByAction: DEFINITION_ONLY_FIELD_KEYS,
    definitionOnlyFieldSemantics: DEFINITION_ONLY_FIELD_SEMANTICS,
    definitionOnlySourceEvidence: DEFINITION_ONLY_SOURCE_EVIDENCE,
    wireCorrections: WIRE_CORRECTIONS,
    currentPlatformDifferences: {
      critical: [
        'app_click 搜索场景实际发送 search_method，静态扫描清单漏掉了该字段。',
        'app_performance 和 onboarding_performance 传入的 device_type 会被统一设备字段覆盖，不是事件独有字段。',
        'userpath 的 traceId 以及推荐页面上下文字段属于公共字段，不在事件业务 Properties 中重复展示。',
        '原 98 字段估算漏掉 app_click.search_method；按最终事件独有字段核对后应为 99 个。',
        '4 个 Android 事件来自 Android 项目清单，不应标记为 Web 代码直接上报。',
        'network_status 当前默认关闭，只能视为已定义且具备 Android 上报路径，不能描述为日常稳定触发。'
      ]
    }
  });
});
