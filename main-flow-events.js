const legacyMainFlowEvents=[
  {
    "name": "app_visit",
    "description": "查看应用",
    "theme": "behaviour",
    "group": "主流程",
    "domain": "查看应用",
    "status": "已上线",
    "rule": "点击查看时触发进入app详情页时触发",
    "source": "【A1】核心行为路径埋点整理",
    "terminal": "",
    "fields": [
      [
        "short_id/pub_id/ app_id 三者共存",
        "string",
        "short_id：短id、pub_id:发布id、app_id:长id"
      ],
      [
        "location1",
        "string",
        "discover探索；studio实验室；community社区；profile个人主页；share分享进入；web：web端"
      ],
      [
        "location2",
        "string",
        "task任务挂起；无法触发app_viist：\nstudio：功能块-Cutout、studio：功能块-老照片上色、studio：功能块-精绘、generarion；discover：explore探索；discover：follow关注；discover：likes点赞；studio：功能块-表情包；studio：功能块-faceswap；top_banner：theme_banner；top_banner：theme_banner_detail；community：topic_banner；community：topic_detail；profile:  like；profile:  like: like_filter；profile:  like: like_post；web：web端；profile:  generation历史作品；profile:  message；profile:  message_likes；profile:  message_comments；profile:  message_followers；filters二创滤镜；posts发布帖子；share分享进入"
      ],
      [
        "user_scene",
        "string",
        "场景\n能力；目前无证件照功能"
      ],
      [
        "ability_name",
        "string",
        "FACESWAP视频换脸；GENERATE_VIDEO生成视频"
      ],
      [
        "entry_point",
        "string",
        "detail（详情页）；half-direct（半屏详情页）；commen（评论）"
      ],
      [
        "tag_id",
        "string",
        "🌟 AI视频；💋 性感的；📸3D PicPop；情侣；🚂吉卜力☁️.....；all"
      ],
      [
        "origin（新）9.14上线/详情可展开",
        "string",
        "play：玩一玩\n（名字、图片、直接点生成按钮）\ncreator_app_rank：创作者app排行榜\ncreator_app_rank_more：\n排行榜更多\n（https://a1.art/ranking/apps?dateType=all由这个页面跳转的）\ncreate_same\nimages_image\nimage_detail\nimages_app_name\nimages_edit_more\napps_run\napps_card\ntask_app_name\ncollection_run\ncollection_card\ncollection_more_run\ncollection_more_card\nsimilar_apps_card\nprofile\nsearch\nimage_recommend"
      ],
      [
        "current_tab/详情可展开",
        "string",
        "app, image, collection,\ntop（仅web有），rank(仅web）, share(other),\n task：从任务挂起的 app 标题中进入\nplay：从玩一玩模块进入"
      ],
      [
        "object_type",
        "string",
        "image，video"
      ],
      [
        "tag_name",
        "string",
        "tag的名称；没有的标注none"
      ],
      [
        "trace_info",
        "json",
        "trace_id = selfhold时，填1即可。\ntrace_id=Alibaba，在获取推荐结果时或返回此item的trace_info。"
      ],
      [
        "click_object/详情可展开",
        "string",
        "web：根据主页3个路由判断\nmain（image整图，run，app_name，top,rank）\nweb：根据路由中带a1.art/i/的\n recommend (image, run, app_name)\nh5:\nmain（images下的create，run，整图）\nh5:  根据路由有short_id\nrecommend（similar apps）"
      ]
    ]
  },
  {
    "name": "generate_button_click",
    "description": "生成按钮点击\n/\n同款生成",
    "theme": "behaviour",
    "group": "主流程",
    "domain": "生成过程",
    "status": "已上线",
    "rule": "原子能力无short_id， 生成成功没有pub_id",
    "source": "【A1】核心行为路径埋点整理",
    "terminal": "",
    "fields": [
      [
        "short_id",
        "string",
        "短id"
      ],
      [
        "location1",
        "string",
        "discover探索；studio实验室；community社区；profile个人主页；share分享进入"
      ],
      [
        "location2",
        "string",
        "task任务挂起；discover：explore探索；discover：follow关注；discover：likes点赞；studio：功能块-表情包；studio：功能块-faceswap；top_banner：theme_banner；top_banner：theme_banner_detail；community：topic_banner；community：topic_detail；profile:  like: like_filter；profile:  like：like_post；profile:  generation历史作品；profile:  message；profile:  message_likes；profile:  message_comments；profile:  message_followers；filters二创滤镜；posts发布帖子；share分享进入"
      ],
      [
        "tag_id",
        "string",
        "🌟 AI视频；💋 性感的；📸3D PicPop；情侣；🚂吉卜力☁️；all"
      ],
      [
        "user_scene",
        "string",
        "场景\n能力"
      ],
      [
        "bility_name",
        "string",
        "生图\n视频换脸\n图生视频\n新类别\n原子能力"
      ],
      [
        "entry_point（新增）",
        "string",
        "direct（瀑布流）；没有的话发空字符串；detail（详情页）；half-direct（半屏详情页）；commen（评论）"
      ],
      [
        "source",
        "string",
        "本地储存里面拿；没有的话发空字符串"
      ],
      [
        "plan",
        "string",
        "本地储存里面拿；没有的话发空字符串"
      ],
      [
        "firstenterurl",
        "string",
        "用户24小时内首次访问A1项目的链接"
      ],
      [
        "referrerurl",
        "string",
        "用户24小时内首次访问A1项目时通过document.referrer拿"
      ],
      [
        "generateid",
        "string",
        "由前端生成"
      ],
      [
        "origin（新）9.14上线",
        "string",
        "app_visit的origin 19个；quick_create_same；create_same；others_published"
      ],
      [
        "location",
        "string",
        "top：顶部玩一玩\ndetail_page：其他；7.24 删除该属性"
      ],
      [
        "current_tab",
        "string",
        "app, image, collection,\ntop（仅web）,rank, others\nplay 9.26新增，similar_apps；7.24新增属性"
      ],
      [
        "appid",
        "string",
        "属性说明见原始表"
      ],
      [
        "image_id",
        "string",
        "被同款的美图的 id，没有则为空\n（可理解为来源，知道用户是通过哪张图最终完成的生成）；8月中下旬新增属性"
      ],
      [
        "tag_name",
        "string",
        "tag的名称；\n没有的标注none；10.16新增key"
      ]
    ]
  },
  {
    "name": "generate_success",
    "description": "生成成功",
    "theme": "behaviour",
    "group": "主流程",
    "domain": "生成过程",
    "status": "已上线",
    "rule": "原子能力无short_id， 生成成功没有pub_id",
    "source": "【A1】核心行为路径埋点整理",
    "terminal": "",
    "fields": [
      [
        "short_id",
        "string",
        "短id"
      ],
      [
        "generate_time增加生成完成时间",
        "string",
        "属性说明见原始表"
      ],
      [
        "generate_wait_time增加生成展示时间（给用户展示的生成时间）",
        "string",
        "属性说明见原始表"
      ],
      [
        "location1",
        "string",
        "discover探索；studio实验室；community社区；profile个人主页；share分享进入"
      ],
      [
        "location2",
        "string",
        "task任务挂起；discover：explore探索；discover：follow关注；discover：likes点赞；studio：功能块-表情包；studio：功能块-faceswap；top_banner：theme_banner；top_banner：theme_banner_detail；community：topic_banner；community：topic_detail；profile:  like: like_filter；profile:  like：like_post；profile:  generation历史作品；profile:  message；profile:  message_likes；profile:  message_comments；profile:  message_followers；filters二创滤镜；posts发布帖子；share分享进入"
      ],
      [
        "tag_id",
        "string",
        "🌟 AI视频；💋 性感的；📸3D PicPop；情侣；🚂吉卜力☁️；All"
      ],
      [
        "user_scene",
        "string",
        "场景\n能力"
      ],
      [
        "ability_name",
        "string",
        "生图\n视频换脸\n图生视频\n新类别\n原子能力"
      ],
      [
        "entry_point",
        "string",
        "direct（瀑布流）；detail（详情页）；half-direct（半屏详情页）"
      ],
      [
        "generateid",
        "string",
        "用户点击生成按钮触发generate_button_click时由前端生成的generateid"
      ],
      [
        "imgIds",
        "string",
        "生成的四张图图片id"
      ],
      [
        "app_id",
        "string",
        "属性说明见原始表"
      ],
      [
        "type",
        "string",
        "image 由普通应用生成的美图；member_app_image 由订阅访问应用生成的美图"
      ]
    ]
  },
  {
    "name": "result_show",
    "description": "结果展示",
    "theme": "behaviour",
    "group": "主流程",
    "domain": "生成结果",
    "status": "已上线",
    "rule": "原子能力无short_id， 生成成功没有pub_id",
    "source": "【A1】核心行为路径埋点整理",
    "terminal": "",
    "fields": [
      [
        "short_id",
        "string",
        "短id"
      ],
      [
        "generate_time增加生成完成时间",
        "string",
        "属性说明见原始表"
      ],
      [
        "generate_wait_time增加生成展示时间（给用户展示的生成时间）",
        "string",
        "属性说明见原始表"
      ],
      [
        "location1",
        "string",
        "discover探索；studio实验室；community社区；profile个人主页；share分享进入"
      ],
      [
        "location2",
        "string",
        "task任务挂起；discover：explore探索；discover：follow关注；discover：likes点赞；studio：功能块-表情包；studio：功能块-faceswap；top_banner：theme_banner；top_banner：theme_banner_detail；community：topic_banner；community：topic_detail；profile:  like: like_filter；profile:  like：like_post；profile:  generation历史作品；profile:  message；profile:  message_likes；profile:  message_comments；profile:  message_followers；filters二创滤镜；posts发布帖子；share分享进入"
      ],
      [
        "tag_id",
        "string",
        "🌟 AI视频；💋 性感的；📸3D PicPop；情侣；🚂吉卜力☁️；All"
      ],
      [
        "user_scene",
        "string",
        "场景\n能力"
      ],
      [
        "ability_name",
        "string",
        "生图\n视频换脸\n图生视频\n新类别\n原子能力"
      ],
      [
        "entry_point",
        "string",
        "direct（瀑布流）；detail（详情页）；half-direct（半屏详情页）"
      ]
    ]
  },
  {
    "name": "pricing_popup",
    "description": "定价页曝光",
    "theme": "commercial",
    "group": "主流程",
    "domain": "订阅",
    "status": "已上线",
    "rule": "原子能力无short_id， 生成成功没有pub_id",
    "source": "【A1】核心行为路径埋点整理",
    "terminal": "",
    "fields": [
      [
        "short_id",
        "string",
        "短id"
      ],
      [
        "location1",
        "string",
        "discover探索；studio实验室；community社区；profile个人主页；share分享进入"
      ],
      [
        "location2",
        "string",
        "task任务挂起；discover：explore探索；discover：follow关注；discover：likes点赞；studio：功能块-表情包；studio：功能块-faceswap；top_banner：theme_banner；top_banner：theme_banner_detail；community：topic_banner；community：topic_detail；profile:  like: like_filter；profile:  like：like_post；profile:  generation历史作品；profile:  message；profile:  message_likes；profile:  message_comments；profile:  message_followers；filters二创滤镜；posts发布帖子；share分享进入"
      ],
      [
        "tag_id",
        "string",
        "🌟 AI视频；💋 性感的；📸3D PicPop；情侣；🚂吉卜力☁️；All"
      ],
      [
        "user_scene",
        "string",
        "场景\n能力"
      ],
      [
        "ability_name",
        "string",
        "生图\n视频换脸\n图生视频\n新类别\n原子能力"
      ],
      [
        "entry_point",
        "string",
        "direct（瀑布流）；detail（详情页）；half-direct（半屏详情页）"
      ]
    ]
  },
  {
    "name": "pricing_premium_subscibe_click",
    "description": "点击「订阅」按钮",
    "theme": "commercial",
    "group": "主流程",
    "domain": "订阅",
    "status": "已上线",
    "rule": "原子能力无short_id， 生成成功没有pub_id",
    "source": "【A1】核心行为路径埋点整理",
    "terminal": "",
    "fields": [
      [
        "short_id",
        "string",
        "短id"
      ],
      [
        "location1",
        "string",
        "discover探索；studio实验室；community社区；profile个人主页；share分享进入"
      ],
      [
        "location2",
        "string",
        "task任务挂起；discover：explore探索；discover：follow关注；discover：likes点赞；studio：功能块-表情包；studio：功能块-faceswap；top_banner：theme_banner；top_banner：theme_banner_detail；community：topic_banner；community：topic_detail；profile:  like: like_filter；profile:  like：like_post；profile:  generation历史作品；profile:  message；profile:  message_likes；profile:  message_comments；profile:  message_followers；filters二创滤镜；posts发布帖子；share分享进入"
      ],
      [
        "tag_id",
        "string",
        "🌟 AI视频；💋 性感的；📸3D PicPop；情侣；🚂吉卜力☁️；All"
      ],
      [
        "user_scene",
        "string",
        "场景\n能力"
      ],
      [
        "ability_name",
        "string",
        "生图\n视频换脸\n图生视频\n新类别\n原子能力"
      ],
      [
        "entry_point",
        "string",
        "direct（瀑布流）；detail（详情页）；half-direct（半屏详情页）"
      ]
    ]
  },
  {
    "name": "pay_result",
    "description": "订阅成功",
    "theme": "commercial",
    "group": "主流程",
    "domain": "订阅",
    "status": "已上线",
    "rule": "原子能力无short_id， 生成成功没有pub_id",
    "source": "【A1】核心行为路径埋点整理",
    "terminal": "",
    "fields": [
      [
        "short_id",
        "string",
        "短id"
      ],
      [
        "location1",
        "string",
        "discover探索；studio实验室；community社区；profile个人主页；share分享进入"
      ],
      [
        "location2",
        "string",
        "task任务挂起；discover：explore探索；discover：follow关注；discover：likes点赞；studio：功能块-表情包；studio：功能块-faceswap；top_banner：theme_banner；top_banner：theme_banner_detail；community：topic_banner；community：topic_detail；profile:  like: like_filter；profile:  like：like_post；profile:  generation历史作品；profile:  message；profile:  message_likes；profile:  message_comments；profile:  message_followers；filters二创滤镜；posts发布帖子；share分享进入"
      ],
      [
        "tag_id",
        "string",
        "🌟 AI视频；💋 性感的；📸3D PicPop；情侣；🚂吉卜力☁️；All"
      ],
      [
        "user_scene",
        "string",
        "场景\n能力"
      ],
      [
        "ability_name",
        "string",
        "生图\n视频换脸\n图生视频\n新类别\n原子能力"
      ],
      [
        "entry_point",
        "string",
        "direct（瀑布流）；detail（详情页）；half-direct（半屏详情页）"
      ]
    ]
  },
  {
    "name": "share_button_click",
    "description": "分享",
    "theme": "behaviour",
    "group": "主流程",
    "domain": "分享过程",
    "status": "已上线",
    "rule": "以产品交互触发条件为准",
    "source": "【A1】核心行为路径埋点整理",
    "terminal": "",
    "fields": [
      [
        "short_id",
        "string",
        "短id"
      ],
      [
        "_id:app_id/topic_id....",
        "string",
        "长id"
      ],
      [
        "ability_name（APP能力）",
        "string",
        "segment（抠图）；faceswap（视频换脸）；generate video（图生视频）；enhance_resolution（精绘）；change_background（背景抠图）；A1（生图）；recolor（上色）"
      ],
      [
        "share_type",
        "string",
        "app；image；topic（话题）；post；invitation-（邀请活动）；profile（个人主页）"
      ],
      [
        "location1（行为发生时一级界面位置）",
        "string",
        "discover探索；studio实验室；community社区；profile个人主页；share分享进入"
      ],
      [
        "location2（行为发生时二级界面位置）",
        "string",
        "task任务挂起；discover：explore探索；discover：follow关注；discover：likes点赞；studio：功能块-表情包；studio：功能块-faceswap；top_banner：theme_banner；top_banner：theme_banner_detail；community：topic_banner；community：topic_detail；profile:  like: like_filter；profile:  like：like_post；profile:  generation历史作品；profile:  message；profile:  message_likes；profile:  message_comments；profile:  message_followers；filters二创滤镜；posts发布帖子；share分享进入"
      ],
      [
        "tag_id（行为发生时标签页面id）",
        "string",
        "🌟 AI视频；💋 性感的；📸3D PicPop；情侣；🚂吉卜力☁️；all"
      ],
      [
        "user_scene（APP用户场景）-用户场景",
        "string",
        "场景；能力"
      ],
      [
        "current_tab",
        "string",
        "apps, images, collections，top（玩一玩），rank"
      ]
    ]
  },
  {
    "name": "share_popup_show",
    "description": "分享",
    "theme": "behaviour",
    "group": "主流程",
    "domain": "分享过程",
    "status": "已上线",
    "rule": "以产品交互触发条件为准",
    "source": "【A1】核心行为路径埋点整理",
    "terminal": "",
    "fields": [
      [
        "short_id",
        "string",
        "短id"
      ],
      [
        "_id:app_id/topic_id....",
        "string",
        "长id"
      ],
      [
        "ability_name（APP能力）",
        "string",
        "segment（抠图）；faceswap（视频换脸）；generate video（图生视频）；enhance_resolution（精绘）；change_background（背景抠图）；A1（生图）；recolor（上色）"
      ],
      [
        "share_type",
        "string",
        "image（图片）；video（视频）；topic（话题）；profile（个人中心）；app（应用）；post（帖子）"
      ],
      [
        "location1（行为发生时一级界面位置）",
        "string",
        "discover探索；studio实验室；community社区；profile个人主页；share分享进入"
      ],
      [
        "location2（行为发生时二级界面位置）",
        "string",
        "task任务挂起；discover：explore探索；discover：follow关注；discover：likes点赞；studio：功能块-表情包；studio：功能块-faceswap；top_banner：theme_banner；top_banner：theme_banner_detail；community：topic_banner；community：topic_detail；profile:  like: like_filter；profile:  like：like_post；profile:  generation历史作品；profile:  message；profile:  message_likes；profile:  message_comments；profile:  message_followers；filters二创滤镜；posts发布帖子；share分享进入"
      ],
      [
        "tag_id（行为发生时标签页面id）",
        "string",
        "🌟 AI视频；💋 性感的；📸3D PicPop；情侣；🚂吉卜力☁️；all"
      ],
      [
        "user_scene（APP用户场景）-用户场景",
        "string",
        "场景；能力"
      ],
      [
        "current_tab",
        "string",
        "apps, images, collections，top（玩一玩），rank"
      ]
    ]
  },
  {
    "name": "share_popup_click",
    "description": "常规分享弹窗曝光",
    "theme": "behaviour",
    "group": "主流程",
    "domain": "分享过程",
    "status": "已上线",
    "rule": "以产品交互触发条件为准",
    "source": "【A1】核心行为路径埋点整理",
    "terminal": "",
    "fields": [
      [
        "short_id",
        "string",
        "短id"
      ],
      [
        "_id:app_id/topic_id....",
        "string",
        "长id"
      ],
      [
        "button_detail",
        "string",
        "TikTok；Facebook；Instagram；Whatsapp；Telegram；Messenger；More(调起系统弹窗)；copy link；download；report（举报）；delete；Gen poster（增加）"
      ],
      [
        "is_download（是否下载自动弹出）",
        "string",
        "ture"
      ],
      [
        "creator（创作者）",
        "string",
        "myself（创作者是本人）；others（创作者不是本人）"
      ],
      [
        "share_type",
        "string",
        "image（图片）；video（视频）；topic（话题）；profile（个人中心）；app（应用）；post（帖子）；invitation-（活动）"
      ],
      [
        "location1（行为发生时一级界面位置）",
        "string",
        "discover探索；studio实验室；community社区；profile个人主页；share分享进入"
      ],
      [
        "location2（行为发生时二级界面位置）",
        "string",
        "task任务挂起；discover：explore探索；discover：follow关注；discover：likes点赞；studio：功能块-表情包；studio：功能块-faceswap；top_banner：theme_banner；top_banner：theme_banner_detail；community：topic_banner；community：topic_detail；profile:  like: like_filter；profile:  like：like_post；profile:  generation历史作品；profile:  message；profile:  message_likes；profile:  message_comments；profile:  message_followers；filters二创滤镜；posts发布帖子；share分享进入"
      ],
      [
        "user_scene（APP用户场景）-用户场景",
        "string",
        "场景；能力"
      ],
      [
        "tag_id（行为发生时标签页面id）",
        "string",
        "all；🌟 AI视频；💋 性感的；📸3D PicPop；情侣；🚂吉卜力☁️"
      ],
      [
        "current_tab",
        "string",
        "apps, images, collections，top（玩一玩），rank"
      ]
    ]
  },
  {
    "name": "share_popup_jump_external",
    "description": "分享成功",
    "theme": "behaviour",
    "group": "主流程",
    "domain": "分享过程",
    "status": "已上线",
    "rule": "以产品交互触发条件为准",
    "source": "【A1】核心行为路径埋点整理",
    "terminal": "",
    "fields": [
      [
        "short_id",
        "string",
        "短id"
      ],
      [
        "_id:app_id/topic_id....",
        "string",
        "长id"
      ],
      [
        "is_success",
        "string",
        "ture"
      ],
      [
        "button_detail",
        "string",
        "TikTok；Facebook；Instagram；Whatsapp；Telegram；Messenger；More(调起系统弹窗)；copy link；download；report（举报）；delete；Gen poster（增加）"
      ],
      [
        "is_download（是否下载自动弹出）",
        "string",
        "ture"
      ],
      [
        "creator（创作者）",
        "string",
        "myself（创作者是本人）；others（创作者不是本人）"
      ],
      [
        "share_type",
        "string",
        "image（图片）；video（视频）；topic（话题）；profile（个人中心）；app（应用）；post（帖子）"
      ],
      [
        "location1（行为发生时一级界面位置）",
        "string",
        "discover探索；studio实验室；community社区；profile个人主页；share分享进入"
      ],
      [
        "location2（行为发生时二级界面位置）",
        "string",
        "task任务挂起；discover：explore探索；discover：follow关注；discover：likes点赞；studio：功能块-表情包；studio：功能块-faceswap；top_banner：theme_banner；top_banner：theme_banner_detail；community：topic_banner；community：topic_detail；profile:  like: like_filter；profile:  like：like_post；profile:  generation历史作品；profile:  message；profile:  message_likes；profile:  message_comments；profile:  message_followers；filters二创滤镜；posts发布帖子；share分享进入"
      ],
      [
        "user_scene（APP用户场景）-用户场景",
        "string",
        "场景；能力"
      ],
      [
        "ability_name（APP能力）",
        "string",
        "segment（抠图）；faceswap（视频换脸）；generate video（图生视频）；enhance_resolution（精绘）；A1（生图）；recolor（上色）；change_background（换背景）"
      ],
      [
        "tag_id（行为发生时标签页面id）",
        "string",
        "all；🌟 AI视频；💋 性感的；📸3D PicPop；情侣；🚂吉卜力☁️"
      ]
    ]
  },
  {
    "name": "screen_print",
    "description": "截图",
    "theme": "behaviour",
    "group": "主流程",
    "domain": "截图",
    "status": "已上线",
    "rule": "以产品交互触发条件为准",
    "source": "【A1】核心行为路径埋点整理",
    "terminal": "",
    "fields": [
      [
        "short_id",
        "string",
        "短id"
      ],
      [
        "_id:app_id/topic_id....",
        "string",
        "长id"
      ],
      [
        "location1（行为发生时一级界面位置）",
        "string",
        "discover-探索；studio-实验室；community-社区；profile-个人主页；share-分享进入"
      ],
      [
        "location2（行为发生时二级界面位置）",
        "string",
        "task任务挂起；discover：explore探索；discover：follow关注；discover：likes点赞；studio：功能块-表情包；studio：功能块-faceswap；top_banner：theme_banner；top_banner：theme_banner_detail；community：topic_banner；community：topic_detail；profile:  like: like_filter；profile:  like：like_post；profile:  generation历史作品；profile:  message；profile:  message_likes；profile:  message_comments；profile:  message_followers；filters二创滤镜；posts发布帖子；share分享进入"
      ],
      [
        "tag_id（行为发生时标签页面id）",
        "string",
        "all；🌟 AI视频；💋 性感的；📸3D PicPop；情侣；🚂吉卜力☁️"
      ],
      [
        "user_scene（APP用户场景）-用户场景",
        "string",
        "场景；能力"
      ],
      [
        "ability_name（APP能力）",
        "string",
        "segment（抠图）；faceswap（视频换脸）；generate video（图生视频）；enhance_resolution（精绘）；A1（生图）；recolor（上色）；change_background（换背景）"
      ]
    ]
  }
];

// 主流程模块只整理资产归属，不改写 Raw action 或已有 Properties。
const mainFlowCatalog=[
  ['注册/登录',[
    ['userpath','打开 App'],
    ['login_popup','登录弹窗曝光时上报'],
    ['login_button_click','点击登录链路按钮时上报'],
    ['register','注册账号成功时上报',true],
    ['login_success','登录/注册成功时上报'],
    ['account_delete_button_click','点击删除账号时上报'],
    ['account_delete_confirm','确认删除账号时上报']
  ]],
  ['签到链路',[
    ['check_in_new','签到弹窗曝光时上报'],
    ['check_in_v3_button_click','点击签到弹窗按钮时上报'],
    ['point_icon_button_click','点击积分入口时上报'],
    ['check_in_exposure','签到详情页曝光时上报']
  ]],
  ['通用上报',[
    ['app_exposure_direct','滤镜曝光时上报',true],
    ['page_exposure','页面曝光时上报',true],
    ['error_page_enter','页面值为空时上报']
  ]],
  ['Discover',[
    ['tabbar_click','点击顶部 Tab 时上报'],
    ['home_click_tag','点击标签 Tag 时上报']
  ]],
  ['任务挂起',[
    ['tasklist_entrance_click','点击任务挂起时上报']
  ]],
  ['创作前',[
    ['app_visit','滤镜详情页曝光时上报',true],
    ['app_click','点击滤镜时上报',true],
    ['like','点赞']
  ]],
  ['创作中',[
    ['image_upload_click','上传 input 图片'],
    ['generate_intention','生成按钮点击',true],
    ['generate_button_click','生成请求成功',true]
  ]],
  ['创作后',[
    ['is_read','用户查看或完成一次性引导状态'],
    ['generate_success','生成成功',true],
    ['generate_failure','生成失败'],
    ['result_show','生成结果曝光',true],
    ['result_download','下载',true],
    ['image_delete_click','图片删除点击'],
    ['image_delete_success','图片删除成功'],
    ['enhancement','点击图像增强时上报'],
    ['share_button_click','点击分享入口时上报',true]
  ]],
  ['商业化',[
    ['pricing_popup','订阅弹窗弹出时上报',true],
    ['pay_result','订阅购买结果',true],
    ['credits_popup','加量包弹窗',true],
    ['purchase_credits_button_click','加量包订阅点击',true],
    ['purchase_credits_result','加量包购买结果',true],
    ['subscribe_cancel','取消订阅',true]
  ]]
];

const MAIN_FLOW_CATALOG_VERSION='2026-07-22';
const VERIFIED_FRONTEND_MAIN_FLOW_ACTIONS=new Set(['is_read']);
mainFlowCatalog.forEach(entry=>{
  entry[1].forEach(item=>Object.freeze(item));
  Object.freeze(entry[1]);
  Object.freeze(entry);
});
Object.freeze(mainFlowCatalog);

const legacyMainFlowByAction=new Map(legacyMainFlowEvents.map(event=>[event.name,event]));
const mainFlowEvents=mainFlowCatalog.flatMap(([module,items])=>items.map(([name,description,core=false])=>{
  const existing=legacyMainFlowByAction.get(name);
  return {
    ...(existing||{}),
    name,
    description,
    rule:description,
    theme:module==='商业化'?'commercial':'behaviour',
    group:'主流程',
    domain:module,
    status:existing?.status||(VERIFIED_FRONTEND_MAIN_FLOW_ACTIONS.has(name)?'已接入前端':'待确认'),
    source:'用户提供 · 主流程埋点整理',
    terminal:existing?.terminal||'',
    fields:existing?.fields||[],
    core,
    fixed:true,
    catalogVersion:MAIN_FLOW_CATALOG_VERSION
  };
}));
Object.freeze(mainFlowEvents);
