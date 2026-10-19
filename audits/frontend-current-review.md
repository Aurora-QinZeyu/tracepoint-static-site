# 前端埋点静态核对报告

核对日期：2026-10-19。平台基线 22b0950c33；本地前端 9f3e4c77d4。本地 tracked 文件干净，保留未跟踪文件；未联网确认远程最新状态。

静态代码证据比较，不代表生产上报或正式契约变更；动态 action、运行时展开和界面可达性需人工核验。

## 统计

- addedActions: 75
- removedActions: 3
- changedActions: 49
- fieldChangedActions: 44
- addedFields: 54
- removedFields: 8
- modifiedFields: 65

扫描 action：370 → 442；声明字段：895 → 1084；调用点：641 → 701。字段增删改统计仅针对两版本共有 action，不包含新增 action 的字段。

## 新增 action

- `account_v2_start`（called）：无业务字段。证据：packages/shared/handler/event/impl/action.ts:1368
- `account_v2_success`（called）：无业务字段。证据：packages/shared/handler/event/impl/action.ts:1369
- `app_detail_more`（called）：action: string 必填。证据：packages/shared/handler/event/impl/action.ts:1201
- `app_detail_userguide_cancel`（called）：无业务字段。证据：packages/shared/handler/event/impl/action.ts:1205
- `app_detail_userguide_expose`（called）：无业务字段。证据：packages/shared/handler/event/impl/action.ts:1204
- `chatbot_favorite_click`（called）：chatbot_id: string 必填；favorite_action: string 必填；trigger_scene: string 必填；position: number 必填；is_succsess: string 必填。证据：packages/shared/handler/event/impl/action.ts:1229
- `chatbot_generate_button_click`（defined-only）：chatbot_id: string 必填；conversation_id: string 必填；message_id: string 必填。证据：packages/shared/handler/event/impl/action.ts:1258
- `chatbot_message_feedback_submit`（called）：chatbot_id: string 必填；conversation_id: string 必填；message_id: string 必填；Feedback_id: string 必填；feedback_reason: string 必填；is_succsess: string 必填。证据：packages/shared/handler/event/impl/action.ts:1236
- `chatbot_message_generate_image_click`（defined-only）：chatbot_id: string 必填；conversation_id: string 必填；message_id: string 必填；is_succsess: bool 必填；picture_id: string 必填。证据：packages/shared/handler/event/impl/action.ts:1263
- `device_id_start`（called）：无业务字段。证据：packages/shared/handler/event/impl/action.ts:1370
- `device_id_success`（called）：无业务字段。证据：packages/shared/handler/event/impl/action.ts:1371
- `explore_card_click`（called）：无业务字段。证据：packages/shared/handler/event/impl/action.ts:993
- `filter_apply_click`（called）：tag_name: string 必填；result_count: number 必填。证据：packages/shared/handler/event/impl/action.ts:1323
- `filter_entry_click`（called）：tag_id: string 必填；tag_name: string 必填。证据：packages/shared/handler/event/impl/action.ts:1314
- `filter_option_click`（called）：group: string 必填；option_value: string 必填；tag_name: string 必填。证据：packages/shared/handler/event/impl/action.ts:1318
- `filter_reset_click`（called）：tag_name: string 必填。证据：packages/shared/handler/event/impl/action.ts:1327
- `filter_result_click`（called）：short_id: string 必填；option_value: string 必填。证据：packages/shared/handler/event/impl/action.ts:1330
- `gender_detect_trigger`（called）：filter_mode: string 必填；image_gender_result: string。证据：packages/shared/handler/event/impl/action.ts:473
- `gender_mismatch_bubble_show`（called）：filter_mode: string 必填。证据：packages/shared/handler/event/impl/action.ts:477
- `invite_award_button_click`（called）：无业务字段。证据：packages/shared/handler/event/impl/action.ts:138
- `invite_button_click`（called）：无业务字段。证据：packages/shared/handler/event/impl/action.ts:139
- `invite_popup_click`（called）：button_detail: string 必填。证据：packages/shared/handler/event/impl/action.ts:140
- `onboarding_start`（called）：location1: string 必填。证据：packages/shared/handler/event/impl/action.ts:1188
- `onboarding_wait_start`（called）：location1: string 必填。证据：packages/shared/handler/event/impl/action.ts:1185
- `onboarding_welcome_button_click`（called）：无业务字段。证据：packages/shared/handler/event/impl/action.ts:1192
- `onboarding_welcome_popup`（called）：无业务字段。证据：packages/shared/handler/event/impl/action.ts:1191
- `push_permission_guide_cancel`（called）：scene: string 必填。证据：packages/shared/handler/event/impl/action.ts:1285
- `push_permission_guide_enable`（called）：scene: string 必填。证据：packages/shared/handler/event/impl/action.ts:1282
- `search_suggest_click`（called）：无业务字段。证据：packages/shared/handler/event/impl/action.ts:1421
- `search_tab_click`（called）：tab: string 必填。证据：packages/shared/handler/event/impl/action.ts:1423
- `tag_expand_click`（called）：badge_type: string 必填；badge_show: number 必填。证据：packages/shared/handler/event/impl/action.ts:1427
- `View_all_click`（called）：tag_name: string 必填；option_value: string 必填。证据：packages/shared/handler/event/impl/action.ts:1334
- `marketing_popup_lock_show_performance`（called）：popup_id: number 必填；popup_name: string 必填；lock_wait_time: number 必填；pending_lock_count: number 必填。证据：packages/shared/handler/event/impl/visit.ts:139
- `startup_attribution_performance`（called）：is_first_launch: bool 必填；device_id_wait_time: number 必填；device_id_status: string 必填；device_id_cache_hit: bool 必填；referrer_wait_time: number 必填；referrer_status: string 必填；referrer_cache_hit: bool 必填；channel_resolve_time: number 必填；channel: string 必填；channel_source: string 必填；ddl_cache_hit_before_login: bool 必填；ddl_wait_mode: string 必填；ddl_wait_time: number 必填；ddl_source: string 必填；ddl_status: string 必填；explore_prepare_time: number 必填；late_ddl_channel_miss: bool 必填；native_context_version: number 必填；report_trigger: string 必填。证据：packages/shared/handler/event/impl/visit.ts:93
- `chatbot_favorites_page_exposure`（called）：favorite_count: number 必填。证据：packages/shared/handler/event/impl/exposure.ts:232
- `explore_card_exposure`（called）：无业务字段。证据：packages/shared/handler/event/impl/exposure.ts:101
- `explore_page_exposure`（called）：无业务字段。证据：packages/shared/handler/event/impl/exposure.ts:176
- `filter_empty_exposure`（called）：tag_name: string 必填；option_value: string 必填。证据：packages/shared/handler/event/impl/exposure.ts:266
- `filter_entry_exposure`（called）：tag_id: string 必填；tag_name: string 必填。证据：packages/shared/handler/event/impl/exposure.ts:259
- `filter_result_exposure`（called）：option_value: string 必填。证据：packages/shared/handler/event/impl/exposure.ts:263
- `invite_page_exposure`（called）：无业务字段。证据：packages/shared/handler/event/impl/exposure.ts:175
- `push_permission_guide_expose`（called）：scene: string 必填。证据：packages/shared/handler/event/impl/exposure.ts:249
- `search_suggest_exposure`（called）：无业务字段。证据：packages/shared/handler/event/impl/exposure.ts:253
- `tag_update_exposure`（called）：position: number 必填；badge_type: string 必填。证据：packages/shared/handler/event/impl/exposure.ts:255
- `credits_popup_open`（called）：location: unknown；post_id: string；get_googleplay_info: number；scenario: string；source_type: string；paid_method: string；location1: unknown；location2: unknown。证据：packages/shared/handler/event/impl/commercial.ts:11
- `pay_order_create_attempt`（called）：attempt_id: string 必填；product_id: string 必填；price_id: string 必填；paid_amount: number 必填；paid_currency: string 必填。证据：packages/shared/handler/event/impl/commercial.ts:19
- `pay_order_create_result`（called）：attempt_id: string 必填；order_id: string；payment_id: string；product_id: string 必填；price_id: string 必填；paid_amount: number 必填；paid_currency: string 必填；status: string 必填；failure_reason: string。证据：packages/shared/handler/event/impl/commercial.ts:26
- `pay_verify_attempt`（called）：order_id: string 必填；payment_type: string 必填。证据：packages/shared/handler/event/impl/commercial.ts:46
- `pay_verify_result`（called）：order_id: string 必填；payment_type: string 必填；status: string 必填；verification_duration_ms: number 必填；server_code: string；failure_reason: string；skip_reason: string。证据：packages/shared/handler/event/impl/commercial.ts:37
- `pricing_popup_open`（called）：trace_info: unknown；location: unknown；price_page_type: unknown；show_free_trial: unknown；pricing_plan_type: unknown；is_upgrade: unknown；get_googleplay_info: unknown；is_renewal: number；product_type: unknown；app_source: unknown。证据：packages/shared/handler/event/impl/commercial.ts:9
- `chatbot_after_gen_guidance_delete`（called）：type: string 必填；chatbot_id: string 必填；conversation_id: string 必填；message_id: string 必填。证据：packages/shared/handler/event/impl/chatbot.ts:274
- `chatbot_card_click`（called）：无业务字段。证据：packages/shared/handler/event/impl/chatbot.ts:194
- `chatbot_card_exposure`（called）：无业务字段。证据：packages/shared/handler/event/impl/chatbot.ts:193
- `chatbot_dance_click`（called）：chatbot_id: string 必填；chatbot_type: string。证据：packages/shared/handler/event/impl/chatbot.ts:174
- `chatbot_dance_generate_intention`（called）：chatbot_id: string 必填；chatbot_type: string。证据：packages/shared/handler/event/impl/chatbot.ts:178
- `chatbot_header_more_popup_click`（called）：detail: string 必填。证据：packages/shared/handler/event/impl/chatbot.ts:81
- `chatbot_header_more_popup_show`（called）：无业务字段。证据：packages/shared/handler/event/impl/chatbot.ts:80
- `chatbot_introduction_click`（called）：chatbot_id: string 必填；conversation_id: string 必填；state: string 必填。证据：packages/shared/handler/event/impl/chatbot.ts:281
- `chatbot_language_card_click`（called）：is_default_language: bool；language: string。证据：packages/shared/handler/event/impl/chatbot.ts:65
- `chatbot_language_card_show`（called）：default_language: string 必填。证据：packages/shared/handler/event/impl/chatbot.ts:62
- `chatbot_language_change_toast_show`（called）：default_language: string 必填。证据：packages/shared/handler/event/impl/chatbot.ts:69
- `chatbot_message_retry`（called）：chatbot_id: string 必填；conversation_id: string 必填；reply_id: string 必填；type: string 必填。证据：packages/shared/handler/event/impl/chatbot.ts:123
- `chatbot_message_send_backtrack`（called）：is_success: string 必填。证据：packages/shared/handler/event/impl/chatbot.ts:138
- `chatbot_message_send_retry`（called）：无业务字段。证据：packages/shared/handler/event/impl/chatbot.ts:137
- `chatbot_more_language_page_save`（called）：source: string 必填；is_default_language: bool 必填；language: string 必填。证据：packages/shared/handler/event/impl/chatbot.ts:75
- `chatbot_more_language_page_show`（called）：source: string 必填。证据：packages/shared/handler/event/impl/chatbot.ts:72
- `chatbot_restart_click`（called）：chatbot_id: string 必填；conversation_id: string 必填。证据：packages/shared/handler/event/impl/chatbot.ts:265
- `chatbot_restart_popup_click`（called）：is_success: bool 必填；chatbot_id: string 必填；conversation_id: string 必填。证据：packages/shared/handler/event/impl/chatbot.ts:269
- `chatbot_stream_show_end`（called）：chatbot_id: string 必填；conversation_id: string 必填；reply_id: string 必填；type: string 必填。证据：packages/shared/handler/event/impl/chatbot.ts:117
- `chatbot_stream_show_start`（called）：chatbot_id: string 必填；conversation_id: string 必填；reply_id: string 必填；type: string 必填。证据：packages/shared/handler/event/impl/chatbot.ts:111
- `chatbot_video_end`（called）：chatbot_id: string 必填；conversation_id: string 必填；material_id: string 必填。证据：packages/shared/handler/event/impl/chatbot.ts:301
- `chatbot_video_finish`（called）：无业务字段。证据：packages/shared/handler/event/impl/chatbot.ts:195
- `chatbot_video_option`（called）：location: string 必填。证据：packages/shared/handler/event/impl/chatbot.ts:196
- `chatbot_video_start`（called）：chatbot_id: string 必填；conversation_id: string 必填；material_id: string 必填。证据：packages/shared/handler/event/impl/chatbot.ts:295
- `chatbot_view_visual_detail`（called）：state: string 必填；chatbot_id: string 必填；conversation_id: string 必填；material_id: string 必填；pic_type: string 必填。证据：packages/shared/handler/event/impl/chatbot.ts:287

## 移除 action

- cold_start_click
- cold_start_popup
- remix_guide_close_click

## 已有 action 差异

### app_click

调用点 2 → 2；证据：packages/shared/handler/event/impl/action.ts:1295

- 字段 trace_info：changed；typeExpressions: ["string","trace_info ?? eventTracker.getTraceInfo(app_id)","currentApp.resource?.aiRecTraceInfo || ''"] → ["string","trace_info ?? eventTracker.getTraceInfo(app_id)","current.resource?.aiRecTraceInfo || ''"]
- 字段 sort：changed；typeExpressions: ["number","appIndex >= 0 ? appIndex + 1 : selectedIndex + 1"] → ["number","selectedIndex + 1"]
- 字段 user_scene：changed；typeExpressions: ["string","getImageUserScene({ userScene: currentApp.userScene }) || ''"] → ["string","getImageUserScene({ userScene: current.resource?.userScene }) || ''"]
- 字段 ability_name：changed；typeExpressions: ["string","getAppCategoryName(currentApp)"] → ["string","getAppCategoryName(current as Application.DTO)"]
- 字段 location：changed；allowedValues: ["cold_start_commend"] → []；typeExpressions: ["_string","'cold_start_commend'"] → ["_string"]
- 字段 location1：changed；allowedValues: [""] → []；typeExpressions: ["_string","''"] → ["_string"]
- 字段 location2：changed；allowedValues: [""] → []；typeExpressions: ["_string","''"] → ["_string"]
- 字段 source：added；{"name":"source","type":"string","required":false,"nullable":false,"description":"前端类型定义：string（可选）","allowedValues":[],"typeExpressions":["_string","trackRecorder.source.trackSource"],"definitions":[{"file":"packages/shared/handler/event/impl/action.ts","line":1311,"column":4,"namespace":"action","event":"app_click"}],"observedAt":[{"file":"packages/shared/handler/event/utils/exposure.ts","line":150,"column":8}]}
- 字段 feed_hot_filter：added；{"name":"feed_hot_filter","type":"bool","required":false,"nullable":false,"description":"前端类型定义：bool（可选）","allowedValues":["true"],"typeExpressions":["_boolean","true"],"definitions":[{"file":"packages/shared/handler/event/impl/action.ts","line":1312,"column":4,"namespace":"action","event":"app_click"}],"observedAt":[{"file":"src/mobile/businessComponents/HighContentRecallPopup/index.tsx","line":70,"column":4}]}

### app_publish_success

调用点 3 → 3；证据：packages/shared/handler/event/impl/action.ts:390

- 字段 cover_resolution：changed；typeExpressions: ["_string as ResolutionTrackType | undefined","hasVideoNode\n\t\t\t? getCoverResolutionTrackLabel({\n\t\t\t\t\tresolution: coverRow?.resolution,\n\t\t\t\t\tparam: coverRow?.param,\n\t\t\t\t\tpublishSelectedResolution: videoResolution,\n\t\t\t\t})\n\t\t\t: undefined","hasVideoGen\n\t\t\t\t? getCoverResolutionTrackLabel({\n\t\t\t\t\t\tresolution: coverRow?.resolution,\n\t\t\t\t\t\tparam: coverRow?.param,\n\t\t\t\t\t})\n\t\t\t\t: undefined"] → ["_string as ResolutionTrackType | undefined","hasVideoNode\n\t\t\t? getCoverResolutionTrackLabel({\n\t\t\t\t\tresolution: coverRow?.resolution,\n\t\t\t\t\tparam: coverRow?.param,\n\t\t\t\t\tpublishSelectedResolution: videoResolution,\n\t\t\t\t})\n\t\t\t: undefined","hasVideoGen || hasAnimate\n\t\t\t\t\t? getCoverResolutionTrackLabel({\n\t\t\t\t\t\t\tresolution: coverRow?.resolution,\n\t\t\t\t\t\t\tparam: coverRow?.param,\n\t\t\t\t\t\t})\n\t\t\t\t\t: undefined"]
- 字段 app_category：added；{"name":"app_category","type":"string","required":false,"nullable":false,"description":"可选值：VIDEO / VIDEO_V2 / INFINITE_TALK / VIDEO_LONG / FACE_SWAP / OTHER","allowedValues":["VIDEO","VIDEO_V2","INFINITE_TALK","VIDEO_LONG","FACE_SWAP","OTHER"],"typeExpressions":["_string as\n\t\t\t\t| 'VIDEO'\n\t\t\t\t| 'VIDEO_V2'\n\t\t\t\t| 'INFINITE_TALK'\n\t\t\t\t| 'VIDEO_LONG'\n\t\t\t\t| 'FACE_SWAP'\n\t\t\t\t| 'OTHER'\n\t\t\t\t| undefined","getAppTrackCategory(result.data.appCategory)"],"definitions":[{"file":"packages/shared/handler/event/impl/action.ts","line":417,"column":4,"namespace":"action","event":"app_publish_success"}],"observedAt":[{"file":"src/mobile/views/Remix/RemixPublish/RemixPublishButton.tsx","line":182,"column":5},{"file":"src/pc/store/Flow/utils/publish.ts","line":120,"column":4},{"file":"src/pc/views/AppBuild/components/AppPublishPopup/containers/PublishView/FormView.tsx","line":156,"column":5}]}

### banner_click

调用点 3 → 2；证据：packages/shared/handler/event/impl/action.ts:916

- 字段 banner_id：changed；typeExpressions: ["string","id","item.id"] → ["string","item.id"]
- 字段 banner_link：changed；typeExpressions: ["string","url","item.url"] → ["string","item.url"]

### filter_more_click

调用点 2 → 3；证据：packages/shared/handler/event/impl/action.ts:1197


### generate_button_click

调用点 4 → 4；证据：packages/shared/handler/event/impl/action.ts:151

- 字段 origin：changed；allowedValues: ["home","community","explore","topic","topic_app","image","gallery","big_image","task_list","detail_page_slide","","likes","profile","post_list","post_detail","post_landing_page","creator_list","creator_detail","feed_detail","faceswap","faceswap_detail","search_result","build","follow","studio","none","remix","chatbot","onboarding","collection_like_recommend","remix_t2i"] → ["home","community","explore","filter","topic","topic_app","image","gallery","big_image","task_list","detail_page_slide","","likes","profile","post_list","post_detail","post_landing_page","creator_list","creator_detail","feed_detail","faceswap","faceswap_detail","search_result","build","follow","studio","none","remix","chatbot","onboarding","collection_like_recommend","remix_t2i"]
- 字段 chatbot_type：added；{"name":"chatbot_type","type":"string","required":false,"nullable":false,"description":"可选值：pgc / ugc","allowedValues":["pgc","ugc"],"typeExpressions":["_string as 'pgc' | 'ugc' | undefined","trackRecorder.chatbotInfo?.chatbot_type"],"definitions":[{"file":"packages/shared/handler/event/impl/action.ts","line":179,"column":4,"namespace":"action","event":"generate_button_click"}],"observedAt":[{"file":"packages/chatbot/hooks/useChatbotGenerate.ts","line":109,"column":6},{"file":"packages/chatbot/shared/utils/index.ts","line":288,"column":4}]}
- 字段 app_category：added；{"name":"app_category","type":"string","required":false,"nullable":false,"description":"可选值：VIDEO / VIDEO_V2 / INFINITE_TALK / VIDEO_LONG / FACE_SWAP / OTHER","allowedValues":["VIDEO","VIDEO_V2","INFINITE_TALK","VIDEO_LONG","FACE_SWAP","OTHER"],"typeExpressions":["_string as\n\t\t\t\t| 'VIDEO'\n\t\t\t\t| 'VIDEO_V2'\n\t\t\t\t| 'INFINITE_TALK'\n\t\t\t\t| 'VIDEO_LONG'\n\t\t\t\t| 'FACE_SWAP'\n\t\t\t\t| 'OTHER'\n\t\t\t\t| undefined","resolvedAppCategory"],"definitions":[{"file":"packages/shared/handler/event/impl/action.ts","line":184,"column":4,"namespace":"action","event":"generate_button_click"},{"file":"packages/shared/utils/event/newDataWareHose/index.ts","line":295,"column":12,"namespace":"legacy","event":"generate_button_click","kind":"legacySwitchField"}],"observedAt":[{"file":"packages/shared/handler/event/utils/exposure.ts","line":203,"column":38}]}

### generate_intention

调用点 26 → 25；证据：packages/shared/handler/event/impl/action.ts:1378

- 字段 short_id：added；{"name":"short_id","type":"string","required":false,"nullable":false,"description":"前端类型定义：string（可选）","allowedValues":[],"typeExpressions":["_string","res?.resource?.shortId || data.resource?.shortId","appDetail.resource?.shortId"],"definitions":[{"file":"packages/shared/handler/event/impl/action.ts","line":1392,"column":4,"namespace":"action","event":"generate_intention"}],"observedAt":[{"file":"src/mobile/hooks/useAppCardActions.ts","line":197,"column":10},{"file":"src/mobile/views/AppDetail/AppDetailUI/GenerateBtn/index.tsx","line":253,"column":8}]}
- 字段 tag_name：added；{"name":"tag_name","type":"string","required":false,"nullable":false,"description":"前端类型定义：string（可选）","allowedValues":[],"typeExpressions":["_string","trackRecorder.source.labelName || 'all'"],"definitions":[{"file":"packages/shared/handler/event/impl/action.ts","line":1393,"column":4,"namespace":"action","event":"generate_intention"}],"observedAt":[{"file":"src/mobile/hooks/useAppCardActions.ts","line":198,"column":10},{"file":"src/mobile/views/AppDetail/AppDetailUI/GenerateBtn/index.tsx","line":254,"column":8}]}
- 字段 option_value：added；{"name":"option_value","type":"string","required":false,"nullable":false,"description":"前端类型定义：string（可选）","allowedValues":[],"typeExpressions":["_string","trackRecorder.source.exploreFilterOptionValue"],"definitions":[{"file":"packages/shared/handler/event/impl/action.ts","line":1394,"column":4,"namespace":"action","event":"generate_intention"}],"observedAt":[{"file":"src/mobile/hooks/useAppCardActions.ts","line":199,"column":10},{"file":"src/mobile/views/AppDetail/AppDetailUI/GenerateBtn/index.tsx","line":255,"column":8}]}
- 字段 origin：changed；allowedValues: ["home","community","explore","topic","topic_app","image","gallery","big_image","task_list","detail_page_slide","","likes","profile","post_list","post_detail","post_landing_page","creator_list","creator_detail","feed_detail","faceswap","faceswap_detail","search_result","build","follow","studio","none","remix","chatbot","onboarding","collection_like_recommend","remix_t2i"] → ["home","community","explore","filter","topic","topic_app","image","gallery","big_image","task_list","detail_page_slide","","likes","profile","post_list","post_detail","post_landing_page","creator_list","creator_detail","feed_detail","faceswap","faceswap_detail","search_result","build","follow","studio","none","remix","chatbot","onboarding","collection_like_recommend","remix_t2i"]；typeExpressions: ["GenerateLocation","'chatbot'","'studio'","origin || 'none'","outerOrigin || trackRecorder.source.generateLocation","'task_list'","'onboarding'","'remix'"] → ["GenerateLocation","'chatbot'","'studio'","trackRecorder.source.trackSource === 'filter' ? 'filter' : origin || 'none'","trackRecorder.source.trackSource === 'filter'\n\t\t\t\t\t\t? 'filter'\n\t\t\t\t\t\t: outerOrigin || trackRecorder.source.generateLocation","'task_list'","'remix'"]
- 字段 source：added；{"name":"source","type":"string","required":false,"nullable":false,"description":"前端类型定义：string（可选）","allowedValues":[],"typeExpressions":["_string","trackRecorder.source.trackSource"],"definitions":[{"file":"packages/shared/handler/event/impl/action.ts","line":1404,"column":4,"namespace":"action","event":"generate_intention"}],"observedAt":[{"file":"src/mobile/views/AppDetail/AppDetailUI/GenerateBtn/index.tsx","line":249,"column":10}]}
- 字段 feed_hot_filter：added；{"name":"feed_hot_filter","type":"bool","required":false,"nullable":false,"description":"前端类型定义：bool（可选）","allowedValues":[],"typeExpressions":["_boolean","trackRecorder.source.feedHotFilterAppId === appDetail?.resource?.id || undefined"],"definitions":[{"file":"packages/shared/handler/event/impl/action.ts","line":1409,"column":4,"namespace":"action","event":"generate_intention"}],"observedAt":[{"file":"src/mobile/views/AppDetail/AppDetailUI/GenerateBtn/index.tsx","line":258,"column":5}]}

### generate_minimize_click

调用点 5 → 5；证据：packages/shared/handler/event/impl/action.ts:426

- 字段 origin：changed；allowedValues: ["home","community","explore","topic","topic_app","image","gallery","big_image","task_list","detail_page_slide","","likes","profile","post_list","post_detail","post_landing_page","creator_list","creator_detail","feed_detail","faceswap","faceswap_detail","search_result","build","follow","studio","none","remix","chatbot","onboarding","collection_like_recommend","remix_t2i"] → ["home","community","explore","filter","topic","topic_app","image","gallery","big_image","task_list","detail_page_slide","","likes","profile","post_list","post_detail","post_landing_page","creator_list","creator_detail","feed_detail","faceswap","faceswap_detail","search_result","build","follow","studio","none","remix","chatbot","onboarding","collection_like_recommend","remix_t2i"]

### generate_success

调用点 3 → 3；证据：packages/shared/handler/event/impl/action.ts:198

- 字段 origin：changed；allowedValues: ["home","community","explore","topic","topic_app","image","gallery","big_image","task_list","detail_page_slide","","likes","profile","post_list","post_detail","post_landing_page","creator_list","creator_detail","feed_detail","faceswap","faceswap_detail","search_result","build","follow","studio","none","remix","chatbot","onboarding","collection_like_recommend","remix_t2i"] → ["home","community","explore","filter","topic","topic_app","image","gallery","big_image","task_list","detail_page_slide","","likes","profile","post_list","post_detail","post_landing_page","creator_list","creator_detail","feed_detail","faceswap","faceswap_detail","search_result","build","follow","studio","none","remix","chatbot","onboarding","collection_like_recommend","remix_t2i"]
- 字段 chatbot_id：changed；type: "unknown" → "string"；typeExpressions: ["trackRecorder.task[nextTask.traceId].chatbot_id"] → ["_string","trackRecorder.task[nextTask.traceId].chatbot_id"]
- 字段 chatbot_type：added；{"name":"chatbot_type","type":"string","required":false,"nullable":false,"description":"可选值：pgc / ugc","allowedValues":["pgc","ugc"],"typeExpressions":["_string as 'pgc' | 'ugc' | undefined","trackRecorder.task[nextTask.traceId].chatbot_type"],"definitions":[{"file":"packages/shared/handler/event/impl/action.ts","line":228,"column":4,"namespace":"action","event":"generate_success"}],"observedAt":[{"file":"packages/shared/handler/task/useTaskSocket.ts","line":386,"column":4}]}
- 字段 tag_name：added；{"name":"tag_name","type":"string","required":false,"nullable":false,"description":"前端类型定义：string（可选）","allowedValues":[],"typeExpressions":["_string","trackRecorder.task[nextTask.traceId].tag_name"],"definitions":[{"file":"packages/shared/handler/event/impl/action.ts","line":234,"column":4,"namespace":"action","event":"generate_success"}],"observedAt":[{"file":"packages/shared/handler/task/useTaskSocket.ts","line":388,"column":4}]}
- 字段 option_value：added；{"name":"option_value","type":"string","required":false,"nullable":false,"description":"前端类型定义：string（可选）","allowedValues":[],"typeExpressions":["_string","trackRecorder.task[nextTask.traceId].option_value"],"definitions":[{"file":"packages/shared/handler/event/impl/action.ts","line":235,"column":4,"namespace":"action","event":"generate_success"}],"observedAt":[{"file":"packages/shared/handler/task/useTaskSocket.ts","line":389,"column":4}]}
- 字段 app_category：added；{"name":"app_category","type":"string","required":false,"nullable":false,"description":"可选值：VIDEO / VIDEO_V2 / INFINITE_TALK / VIDEO_LONG / FACE_SWAP / OTHER","allowedValues":["VIDEO","VIDEO_V2","INFINITE_TALK","VIDEO_LONG","FACE_SWAP","OTHER"],"typeExpressions":["_string as\n\t\t\t\t| 'VIDEO'\n\t\t\t\t| 'VIDEO_V2'\n\t\t\t\t| 'INFINITE_TALK'\n\t\t\t\t| 'VIDEO_LONG'\n\t\t\t\t| 'FACE_SWAP'\n\t\t\t\t| 'OTHER'\n\t\t\t\t| undefined","getAppTrackCategory(nextTask.images[0]?.appInfo?.appCategory)"],"definitions":[{"file":"packages/shared/handler/event/impl/action.ts","line":236,"column":4,"namespace":"action","event":"generate_success"}],"observedAt":[{"file":"packages/shared/handler/task/useTaskSocket.ts","line":394,"column":7}]}

### image_delete_click

调用点 4 → 5；证据：packages/shared/handler/event/impl/action.ts:465


### image_delete_enter

调用点 2 → 3；证据：packages/shared/handler/event/impl/action.ts:461


### image_delete_success

调用点 3 → 4；证据：packages/shared/handler/event/impl/action.ts:469


### image_download

调用点 3 → 3；证据：packages/shared/handler/event/impl/action.ts:314

- 字段 app_category：added；{"name":"app_category","type":"unknown","required":false,"nullable":false,"description":"legacy loggingData 静态输出字段","allowedValues":[],"typeExpressions":["getAppTrackCategory(\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tappDetailData?.resource?.appCategory,\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t)"],"definitions":[{"file":"packages/shared/utils/event/newDataWareHose/index.ts","line":329,"column":6,"namespace":"legacy","event":"image_download","kind":"legacySwitchField"}],"observedAt":[{"file":"src/pc/views/App/AppDetailV2/components/HistoryButton/GenHistory/index.tsx","line":193,"column":16},{"file":"src/pc/views/App/AppDetailV2/components/HistoryButton/GenHistory/index.tsx","line":228,"column":16}]}

### is_read

调用点 15 → 4；证据：packages/shared/handler/event/impl/action.ts:1133

- 字段 scene：changed；allowedValues: ["like_tabbar_point","like_botton_bubble","like_guide_bubble","gen_video_new","cutout_new","gen_video_guide","generate_button_click","skip_button_click","fewer_than_three","taskview_guide_bubble","chatbot_message_exposure","creator_onboarding_popup_show","app_commend","app_commend_popup"] → ["like_tabbar_point","like_botton_bubble","like_guide_bubble","gen_video_new","cutout_new"]；typeExpressions: ["string as\n\t\t\t\t| 'like_tabbar_point'\n\t\t\t\t| 'like_botton_bubble'\n\t\t\t\t| 'like_guide_bubble'\n\t\t\t\t| 'gen_video_new'\n\t\t\t\t| 'cutout_new'\n\t\t\t\t| 'gen_video_guide'\n\t\t\t\t| 'generate_button_click'\n\t\t\t\t| 'skip_button_click'\n\t\t\t\t| 'fewer_than_three'\n\t\t\t\t| 'taskview_guide_bubble'\n\t\t\t\t| 'chatbot_message_exposure'\n\t\t\t\t| 'creator_onboarding_popup_show'\n\t\t\t\t| 'app_commend'\n\t\t\t\t| 'app_commend_popup'","'taskview_guide_bubble'","'chatbot_message_exposure'","'skip_button_click'","'fewer_than_three'","'like_guide_bubble'","'like_botton_bubble'","'like_tabbar_point'","'generate_button_click'","'cutout_new'"] → ["string as\n\t\t\t\t| 'like_tabbar_point'\n\t\t\t\t| 'like_botton_bubble'\n\t\t\t\t| 'like_guide_bubble'\n\t\t\t\t| 'gen_video_new'\n\t\t\t\t| 'cutout_new'","'like_guide_bubble'","'like_botton_bubble'","'like_tabbar_point'","'cutout_new'"]

### push_button_click

调用点 3 → 2；证据：packages/shared/handler/event/impl/action.ts:1279


### renewal_retention_popup_click

调用点 2 → 0；证据：packages/shared/handler/event/impl/action.ts:931

- usage："called" → "defined-only"
- 字段 button：changed；typeExpressions: ["string as 'start_button' | 'close_button'","'start_button'","'close_button'"] → ["string as 'start_button' | 'close_button'"]

### result_show

调用点 1 → 1；证据：packages/shared/handler/event/impl/action.ts:245

- 字段 origin：changed；allowedValues: ["home","community","explore","topic","topic_app","image","gallery","big_image","task_list","detail_page_slide","","likes","profile","post_list","post_detail","post_landing_page","creator_list","creator_detail","feed_detail","faceswap","faceswap_detail","search_result","build","follow","studio","none","remix","chatbot","onboarding","collection_like_recommend","remix_t2i"] → ["home","community","explore","filter","topic","topic_app","image","gallery","big_image","task_list","detail_page_slide","","likes","profile","post_list","post_detail","post_landing_page","creator_list","creator_detail","feed_detail","faceswap","faceswap_detail","search_result","build","follow","studio","none","remix","chatbot","onboarding","collection_like_recommend","remix_t2i"]

### retention_popup_click

调用点 2 → 0；证据：packages/shared/handler/event/impl/action.ts:934

- usage："called" → "defined-only"
- 字段 button：changed；typeExpressions: ["string as 'save_button' | 'give_up_button'","'save_button'","'give_up_button'"] → ["string as 'save_button' | 'give_up_button'"]

### screen_print

调用点 2 → 2；证据：packages/shared/handler/event/impl/action.ts:1054

- 字段 origin：changed；allowedValues: ["home","community","explore","topic","topic_app","image","gallery","big_image","task_list","detail_page_slide","","likes","profile","post_list","post_detail","post_landing_page","creator_list","creator_detail","feed_detail","faceswap","faceswap_detail","search_result","build","follow","studio","none","remix","chatbot","onboarding","collection_like_recommend","remix_t2i"] → ["home","community","explore","filter","topic","topic_app","image","gallery","big_image","task_list","detail_page_slide","","likes","profile","post_list","post_detail","post_landing_page","creator_list","creator_detail","feed_detail","faceswap","faceswap_detail","search_result","build","follow","studio","none","remix","chatbot","onboarding","collection_like_recommend","remix_t2i"]

### search

调用点 2 → 3；证据：packages/shared/handler/event/impl/action.ts:378

- 字段 current_tab：changed；typeExpressions: ["string as 'post' | 'app' | 'user'","SearchTab"] → ["string as 'post' | 'app' | 'user'","SearchTab","tab === 'user' ? 'user' : 'app'"]
- 字段 post_result_num：changed；allowedValues: [] → ["0"]；typeExpressions: ["number","pageInfo?.postPageTotal || 0"] → ["number","pageInfo?.postPageTotal || 0","0"]
- 字段 user_result_num：changed；typeExpressions: ["number","pageInfo?.userPageTotal || 0"] → ["number","pageInfo?.userPageTotal || 0","totals.user || 0"]
- 字段 creator_result_num：changed；typeExpressions: ["number","pageInfo?.appPageTotal || 0"] → ["number","pageInfo?.appPageTotal || 0","totals.all || 0"]
- 字段 search_content_normalize：added；{"name":"search_content_normalize","type":"string","required":false,"nullable":false,"description":"归一化搜索词，仅 V3 搜索上报（后端 standardWord）","allowedValues":[],"typeExpressions":["_string","trackRecorder.searchInfo.search_content_normalize || undefined"],"definitions":[{"file":"packages/shared/handler/event/impl/action.ts","line":387,"column":4,"namespace":"action","event":"search"}],"observedAt":[{"file":"src/mobile/views/Search/store/searchResult/index.ts","line":104,"column":3}]}

### share_button_click

调用点 15 → 15；证据：packages/shared/handler/event/impl/action.ts:273

- 字段 app_category：added；{"name":"app_category","type":"string","required":false,"nullable":false,"description":"加undefined为了变成可选","allowedValues":["VIDEO","VIDEO_V2","INFINITE_TALK","VIDEO_LONG","FACE_SWAP","OTHER"],"typeExpressions":["_string as\n\t\t\t\t| 'VIDEO'\n\t\t\t\t| 'VIDEO_V2'\n\t\t\t\t| 'INFINITE_TALK'\n\t\t\t\t| 'VIDEO_LONG'\n\t\t\t\t| 'FACE_SWAP'\n\t\t\t\t| 'OTHER'\n\t\t\t\t| undefined","getAppTrackCategory(appCategory)","traceInfo.app_category ?? getAppTrackCategory(appCategory)"],"definitions":[{"file":"packages/shared/handler/event/impl/action.ts","line":300,"column":4,"namespace":"action","event":"share_button_click"}],"observedAt":[{"file":"packages/shared/handler/share/app.ts","line":108,"column":5},{"file":"packages/shared/handler/share/image.ts","line":104,"column":5},{"file":"packages/shared/handler/share/post.ts","line":93,"column":6},{"file":"packages/shared/handler/share/post.ts","line":102,"column":6}]}

### skip_button_click

调用点 3 → 2；证据：packages/shared/handler/event/impl/action.ts:1181

- 字段 scene：changed；typeExpressions: ["string as 'time_out' | 'gesture_swipe' | ''","'time_out'","'gesture_swipe'","''"] → ["string as 'time_out' | 'gesture_swipe' | ''","'time_out'","'gesture_swipe'"]

### tabbar_click

调用点 3 → 4；证据：packages/shared/handler/event/impl/action.ts:125

- 字段 current_tab：changed；allowedValues: ["discover","community","profile","topic","post","likes","explore","follow"] → ["discover","community","profile","topic","post","likes","explore","follow","credit","invite"]；typeExpressions: ["string as\n\t\t\t\t| 'discover'\n\t\t\t\t| 'community'\n\t\t\t\t| 'profile'\n\t\t\t\t| 'topic'\n\t\t\t\t| 'post'\n\t\t\t\t| 'likes'\n\t\t\t\t| 'explore'\n\t\t\t\t| 'follow'","'explore'","any"] → ["string as\n\t\t\t\t| 'discover'\n\t\t\t\t| 'community'\n\t\t\t\t| 'profile'\n\t\t\t\t| 'topic'\n\t\t\t\t| 'post'\n\t\t\t\t| 'likes'\n\t\t\t\t| 'explore'\n\t\t\t\t| 'follow'\n\t\t\t\t| 'credit'\n\t\t\t\t| 'invite'","tab === 'credits' ? 'credit' : 'invite'","'explore'","any"]

### try_it_button_click

调用点 1 → 0；证据：packages/shared/handler/event/impl/action.ts:1176

- usage："called" → "defined-only"
- 字段 location1：changed；allowedValues: ["onboarding"] → []；typeExpressions: ["_string","'onboarding'"] → ["_string"]

### app_performance

调用点 1 → 1；证据：packages/shared/handler/event/impl/visit.ts:75

- 字段 is_first_launch：added；{"name":"is_first_launch","type":"bool","required":true,"nullable":false,"description":"前端类型定义：bool（必填）","allowedValues":[],"typeExpressions":["boolean"],"definitions":[{"file":"packages/shared/handler/event/impl/visit.ts","line":76,"column":3,"namespace":"visit","event":"app_performance"}],"observedAt":[]}
- 字段 total_memory：added；{"name":"total_memory","type":"number","required":false,"nullable":false,"description":"前端类型定义：number（可选）","allowedValues":[],"typeExpressions":["_number"],"definitions":[{"file":"packages/shared/handler/event/impl/visit.ts","line":83,"column":3,"namespace":"visit","event":"app_performance"}],"observedAt":[]}
- 字段 available_memory：added；{"name":"available_memory","type":"number","required":false,"nullable":false,"description":"MB, Android native memory snapshot","allowedValues":[],"typeExpressions":["_number"],"definitions":[{"file":"packages/shared/handler/event/impl/visit.ts","line":84,"column":3,"namespace":"visit","event":"app_performance"}],"observedAt":[]}
- 字段 low_memory：added；{"name":"low_memory","type":"bool","required":false,"nullable":false,"description":"MB, Android native memory snapshot","allowedValues":[],"typeExpressions":["_boolean"],"definitions":[{"file":"packages/shared/handler/event/impl/visit.ts","line":85,"column":3,"namespace":"visit","event":"app_performance"}],"observedAt":[]}
- 字段 cpu_core_count：added；{"name":"cpu_core_count","type":"number","required":false,"nullable":false,"description":"前端类型定义：number（可选）","allowedValues":[],"typeExpressions":["_number"],"definitions":[{"file":"packages/shared/handler/event/impl/visit.ts","line":86,"column":3,"namespace":"visit","event":"app_performance"}],"observedAt":[]}
- 字段 cpu_architecture：added；{"name":"cpu_architecture","type":"string","required":false,"nullable":false,"description":"前端类型定义：string（可选）","allowedValues":[],"typeExpressions":["_string"],"definitions":[{"file":"packages/shared/handler/event/impl/visit.ts","line":87,"column":3,"namespace":"visit","event":"app_performance"}],"observedAt":[]}
- 字段 cpu_max_frequency：added；{"name":"cpu_max_frequency","type":"number","required":false,"nullable":false,"description":"前端类型定义：number（可选）","allowedValues":[],"typeExpressions":["_number"],"definitions":[{"file":"packages/shared/handler/event/impl/visit.ts","line":88,"column":3,"namespace":"visit","event":"app_performance"}],"observedAt":[]}
- 字段 gpu_vendor：added；{"name":"gpu_vendor","type":"string","required":false,"nullable":false,"description":"MHz","allowedValues":[],"typeExpressions":["_string"],"definitions":[{"file":"packages/shared/handler/event/impl/visit.ts","line":89,"column":3,"namespace":"visit","event":"app_performance"}],"observedAt":[]}
- 字段 gpu_renderer：added；{"name":"gpu_renderer","type":"string","required":false,"nullable":false,"description":"前端类型定义：string（可选）","allowedValues":[],"typeExpressions":["_string"],"definitions":[{"file":"packages/shared/handler/event/impl/visit.ts","line":90,"column":3,"namespace":"visit","event":"app_performance"}],"observedAt":[]}
- 字段 gpu_version：added；{"name":"gpu_version","type":"string","required":false,"nullable":false,"description":"前端类型定义：string（可选）","allowedValues":[],"typeExpressions":["_string"],"definitions":[{"file":"packages/shared/handler/event/impl/visit.ts","line":91,"column":3,"namespace":"visit","event":"app_performance"}],"observedAt":[]}

### app_visit

调用点 2 → 1；证据：packages/shared/handler/event/impl/visit.ts:194

- 字段 app_id：changed；typeExpressions: ["string","data?.resource?.id","resource.id"] → ["string","data?.resource?.id"]
- 字段 short_id：changed；typeExpressions: ["string","appid","resource.shortId"] → ["string","appid"]
- 字段 pub_id：changed；typeExpressions: ["string","data?.id","id"] → ["string","data?.id"]
- 字段 ability_name：changed；typeExpressions: ["_string","getAppCategoryName(data)","getAppCategoryName(item.appDetail)"] → ["_string","getAppCategoryName(data)"]
- 字段 user_scene：changed；typeExpressions: ["_string as UserSceneTrackType | undefined","USER_SCENE_TRACK_CONFIG[data.userScene as UserScene]","getImageUserScene({ userScene })"] → ["_string as UserSceneTrackType | undefined","USER_SCENE_TRACK_CONFIG[data.userScene as UserScene]"]
- 字段 location1：changed；allowedValues: ["onboarding"] → []；typeExpressions: ["_string","'onboarding'"] → ["_string"]
- 字段 feed_hot_filter：added；{"name":"feed_hot_filter","type":"bool","required":false,"nullable":false,"description":"前端类型定义：bool（可选）","allowedValues":["true"],"typeExpressions":["_boolean","true"],"definitions":[{"file":"packages/shared/handler/event/impl/visit.ts","line":203,"column":3,"namespace":"visit","event":"app_visit"},{"file":"packages/shared/utils/event/newDataWareHose/index.ts","line":377,"column":44,"namespace":"legacy","event":"app_visit","kind":"legacySwitchField"}],"observedAt":[{"file":"packages/shared/utils/app/detail/index.ts","line":102,"column":63}]}
- 字段 app_category：added；{"name":"app_category","type":"string","required":false,"nullable":false,"description":"可选值：VIDEO / VIDEO_V2 / INFINITE_TALK / VIDEO_LONG / FACE_SWAP / OTHER","allowedValues":["VIDEO","VIDEO_V2","INFINITE_TALK","VIDEO_LONG","FACE_SWAP","OTHER"],"typeExpressions":["_string as\n\t\t\t| 'VIDEO'\n\t\t\t| 'VIDEO_V2'\n\t\t\t| 'INFINITE_TALK'\n\t\t\t| 'VIDEO_LONG'\n\t\t\t| 'FACE_SWAP'\n\t\t\t| 'OTHER'\n\t\t\t| undefined","getAppTrackCategory(appCategory)"],"definitions":[{"file":"packages/shared/handler/event/impl/visit.ts","line":204,"column":3,"namespace":"visit","event":"app_visit"},{"file":"packages/shared/utils/event/newDataWareHose/index.ts","line":371,"column":6,"namespace":"legacy","event":"app_visit","kind":"legacySwitchField"}],"observedAt":[{"file":"packages/shared/utils/app/detail/index.ts","line":101,"column":3}]}
- 字段 commend_label：removed；{"name":"commend_label","type":"unknown","required":false,"nullable":false,"description":"legacy loggingData 静态输出字段","allowedValues":[],"typeExpressions":[],"definitions":[{"file":"packages/shared/utils/event/newDataWareHose/index.ts","line":328,"column":8,"namespace":"legacy","event":"app_visit","kind":"legacySwitchField"}],"observedAt":[]}

### chatbot_detail_page_leave

调用点 1 → 1；证据：packages/shared/handler/event/impl/visit.ts:175

- 字段 source：changed；allowedValues: ["filter_page_tips","result_page_tip","result_page_chat","result_page_tips","message_tab_tip","list_new","list_more"] → ["filter_page_tips","result_page_tip","result_page_chat","result_page_tips","message_tab_tip","list_new","list_more","guide"]；typeExpressions: ["string as\n\t\t\t| 'filter_page_tips'\n\t\t\t| 'result_page_tip'\n\t\t\t| 'result_page_chat'\n\t\t\t| 'result_page_tips'\n\t\t\t| 'message_tab_tip'\n\t\t\t| 'list_new'\n\t\t\t| 'list_more'"] → ["string as\n\t\t\t| 'filter_page_tips'\n\t\t\t| 'result_page_tip'\n\t\t\t| 'result_page_chat'\n\t\t\t| 'result_page_tips'\n\t\t\t| 'message_tab_tip'\n\t\t\t| 'list_new'\n\t\t\t| 'list_more'\n\t\t\t| 'guide'"]

### chatbot_visit

调用点 1 → 1；证据：packages/shared/handler/event/impl/visit.ts:155

- 字段 source：changed；allowedValues: ["filter_page_tips","result_page_tip","result_page_chat","result_page_tips","message_tab_tip","list_new","list_more"] → ["filter_page_tips","result_page_tip","result_page_chat","result_page_tips","message_tab_tip","list_new","list_more","guide"]；typeExpressions: ["string as\n\t\t\t| 'filter_page_tips'\n\t\t\t| 'result_page_tip'\n\t\t\t| 'result_page_chat'\n\t\t\t| 'result_page_tips'\n\t\t\t| 'message_tab_tip'\n\t\t\t| 'list_new'\n\t\t\t| 'list_more'"] → ["string as\n\t\t\t| 'filter_page_tips'\n\t\t\t| 'result_page_tip'\n\t\t\t| 'result_page_chat'\n\t\t\t| 'result_page_tips'\n\t\t\t| 'message_tab_tip'\n\t\t\t| 'list_new'\n\t\t\t| 'list_more'\n\t\t\t| 'guide'"]
- 字段 chatbot_category_id：added；{"name":"chatbot_category_id","type":"string","required":false,"nullable":false,"description":"前端类型定义：string（可选）","allowedValues":[],"typeExpressions":["_string"],"definitions":[{"file":"packages/shared/handler/event/impl/visit.ts","line":172,"column":3,"namespace":"visit","event":"chatbot_visit"}],"observedAt":[]}
- 字段 chatbot_label_id：added；{"name":"chatbot_label_id","type":"string","required":true,"nullable":true,"description":"前端类型定义：string（必填）","allowedValues":[],"typeExpressions":["null as string | null"],"definitions":[{"file":"packages/shared/handler/event/impl/visit.ts","line":173,"column":3,"namespace":"visit","event":"chatbot_visit"}],"observedAt":[]}

### onboarding_performance

调用点 1 → 1；证据：packages/shared/handler/event/impl/visit.ts:114

- 字段 app_share_info_time：added；{"name":"app_share_info_time","type":"number","required":false,"nullable":false,"description":"登录前准备耗时，包括 deviceId、referrer、share info 这段前置初始化","allowedValues":[],"typeExpressions":["_number"],"definitions":[{"file":"packages/shared/handler/event/impl/visit.ts","line":120,"column":3,"namespace":"visit","event":"onboarding_performance"}],"observedAt":[]}
- 字段 onboarding_marketing_lock_wait_time：added；{"name":"onboarding_marketing_lock_wait_time","type":"number","required":false,"nullable":false,"description":"首屏整链路耗时，从 initUserInfoWithTouristLogin 开始到 onboarding 首次曝光","allowedValues":[],"typeExpressions":["_number"],"definitions":[{"file":"packages/shared/handler/event/impl/visit.ts","line":124,"column":3,"namespace":"visit","event":"onboarding_performance"}],"observedAt":[]}
- 字段 onboarding_retention_ab_time：added；{"name":"onboarding_retention_ab_time","type":"number","required":false,"nullable":false,"description":"满足展示条件后等待 onboarding 营销锁的耗时","allowedValues":[],"typeExpressions":["_number"],"definitions":[{"file":"packages/shared/handler/event/impl/visit.ts","line":125,"column":3,"namespace":"visit","event":"onboarding_performance"}],"observedAt":[]}
- 字段 onboarding_open_to_mount_time：added；{"name":"onboarding_open_to_mount_time","type":"number","required":false,"nullable":false,"description":"onboarding retention 实验读取耗时","allowedValues":[],"typeExpressions":["_number"],"definitions":[{"file":"packages/shared/handler/event/impl/visit.ts","line":126,"column":3,"namespace":"visit","event":"onboarding_performance"}],"observedAt":[]}
- 字段 total_memory：added；{"name":"total_memory","type":"number","required":false,"nullable":false,"description":"前端类型定义：number（可选）","allowedValues":[],"typeExpressions":["_number"],"definitions":[{"file":"packages/shared/handler/event/impl/visit.ts","line":129,"column":3,"namespace":"visit","event":"onboarding_performance"}],"observedAt":[]}
- 字段 available_memory：added；{"name":"available_memory","type":"number","required":false,"nullable":false,"description":"MB, Android native memory snapshot","allowedValues":[],"typeExpressions":["_number"],"definitions":[{"file":"packages/shared/handler/event/impl/visit.ts","line":130,"column":3,"namespace":"visit","event":"onboarding_performance"}],"observedAt":[]}
- 字段 low_memory：added；{"name":"low_memory","type":"bool","required":false,"nullable":false,"description":"MB, Android native memory snapshot","allowedValues":[],"typeExpressions":["_boolean"],"definitions":[{"file":"packages/shared/handler/event/impl/visit.ts","line":131,"column":3,"namespace":"visit","event":"onboarding_performance"}],"observedAt":[]}
- 字段 cpu_core_count：added；{"name":"cpu_core_count","type":"number","required":false,"nullable":false,"description":"前端类型定义：number（可选）","allowedValues":[],"typeExpressions":["_number"],"definitions":[{"file":"packages/shared/handler/event/impl/visit.ts","line":132,"column":3,"namespace":"visit","event":"onboarding_performance"}],"observedAt":[]}
- 字段 cpu_architecture：added；{"name":"cpu_architecture","type":"string","required":false,"nullable":false,"description":"前端类型定义：string（可选）","allowedValues":[],"typeExpressions":["_string"],"definitions":[{"file":"packages/shared/handler/event/impl/visit.ts","line":133,"column":3,"namespace":"visit","event":"onboarding_performance"}],"observedAt":[]}
- 字段 cpu_max_frequency：added；{"name":"cpu_max_frequency","type":"number","required":false,"nullable":false,"description":"前端类型定义：number（可选）","allowedValues":[],"typeExpressions":["_number"],"definitions":[{"file":"packages/shared/handler/event/impl/visit.ts","line":134,"column":3,"namespace":"visit","event":"onboarding_performance"}],"observedAt":[]}
- 字段 gpu_vendor：added；{"name":"gpu_vendor","type":"string","required":false,"nullable":false,"description":"MHz","allowedValues":[],"typeExpressions":["_string"],"definitions":[{"file":"packages/shared/handler/event/impl/visit.ts","line":135,"column":3,"namespace":"visit","event":"onboarding_performance"}],"observedAt":[]}
- 字段 gpu_renderer：added；{"name":"gpu_renderer","type":"string","required":false,"nullable":false,"description":"前端类型定义：string（可选）","allowedValues":[],"typeExpressions":["_string"],"definitions":[{"file":"packages/shared/handler/event/impl/visit.ts","line":136,"column":3,"namespace":"visit","event":"onboarding_performance"}],"observedAt":[]}
- 字段 gpu_version：added；{"name":"gpu_version","type":"string","required":false,"nullable":false,"description":"前端类型定义：string（可选）","allowedValues":[],"typeExpressions":["_string"],"definitions":[{"file":"packages/shared/handler/event/impl/visit.ts","line":137,"column":3,"namespace":"visit","event":"onboarding_performance"}],"observedAt":[]}
- 字段 abtest_init_time：removed；{"name":"abtest_init_time","type":"number","required":false,"nullable":false,"description":"登录 v2 接口请求耗时","allowedValues":[],"typeExpressions":["_number"],"definitions":[{"file":"packages/shared/handler/event/impl/visit.ts","line":82,"column":3,"namespace":"visit","event":"onboarding_performance"}],"observedAt":[]}
- 字段 user_behavior_init_time：removed；{"name":"user_behavior_init_time","type":"number","required":false,"nullable":false,"description":"登录成功后到 AB 初始化完成的耗时，对应 useAbTestStore.init.inited 就绪时间","allowedValues":[],"typeExpressions":["_number"],"definitions":[{"file":"packages/shared/handler/event/impl/visit.ts","line":83,"column":3,"namespace":"visit","event":"onboarding_performance"}],"observedAt":[]}
- 字段 big_data_api_time：removed；{"name":"big_data_api_time","type":"number","required":false,"nullable":false,"description":"登录成功后到 init/behavior 条件满足的总等待耗时","allowedValues":[],"typeExpressions":["_number"],"definitions":[{"file":"packages/shared/handler/event/impl/visit.ts","line":85,"column":3,"namespace":"visit","event":"onboarding_performance"}],"observedAt":[]}
- 字段 onboarding_api_time：removed；{"name":"onboarding_api_time","type":"number","required":false,"nullable":false,"description":"大数据接口请求耗时","allowedValues":[],"typeExpressions":["_number"],"definitions":[{"file":"packages/shared/handler/event/impl/visit.ts","line":86,"column":3,"namespace":"visit","event":"onboarding_performance"}],"observedAt":[]}

### page_exposure

调用点 2 → 1；证据：packages/shared/handler/event/impl/visit.ts:146

- 字段 location1：changed；allowedValues: ["onboarding"] → []；typeExpressions: ["_string","'onboarding'"] → ["_string"]

### app_exposure_direct

调用点 7 → 4；证据：packages/shared/handler/event/impl/exposure.ts:68

- 字段 exposureList：changed；required: false → true；typeExpressions: ["[] as {\n\t\t\t\tapp_id: string;\n\t\t\t\ttrace_info: string;\n\t\t\t\tability_name: string | undefined;\n\t\t\t\tuser_scene: string | undefined;\n\t\t\t\tapp_source?: string;\n\t\t\t\trecommendAppId?: string;\n\t\t\t}[]","data","arr.map((id, index) => {\n\t\t\tconst { isRecommendApp, source } = NoneBusinessDependency.checkIsRecommendAppByData(id);\n\t\t\tconst recommendFields = isRecommendApp\n\t\t\t\t? {\n\t\t\t\t\t\tapp_source: 'onboarding_old',\n\t\t\t\t\t\tcommend_label: source,\n\t\t\t\t\t}\n\t\t\t\t: {};\n\n\t\t\treturn {\n\t\t\t\tapp_id: id,\n\t\t\t\tappid: id,\n\t\t\t\ttrace_info: rec[index]?.rec || '',\n\t\t\t\tuser_scene: rec[index]?.user_scene || '',\n\t\t\t\tability_name: rec[index]?.ability_name || '',\n\t\t\t\tsort: rec[index]?.idx || 0,\n\t\t\t\t...recommendFields,\n\t\t\t};\n\t\t})","recommendApps.map((item) => {\n\t\t\t\tconst { resource, userScene } = item;\n\t\t\t\treturn {\n\t\t\t\t\tapp_id: resource.id,\n\t\t\t\t\ttrace_info: resource?.aiRecTraceInfo ?? '',\n\t\t\t\t\tuser_scene: getImageUserScene({ userScene }),\n\t\t\t\t\tability_name: getAppCategoryName(item),\n\t\t\t\t\tapp_source: 'onboarding_old',\n\t\t\t\t\tcommend_label: resource?.source,\n\t\t\t\t};\n\t\t\t})","[\n\t\t\t\t\t{\n\t\t\t\t\t\tapp_id: data.resource.id,\n\t\t\t\t\t\tappid: data.resource.id,\n\t\t\t\t\t\ttrace_info: data.resource.aiRecTraceInfo || '',\n\t\t\t\t\t\tuser_scene: USER_SCENE_TRACK_CONFIG[data?.userScene as UserScene] || '',\n\t\t\t\t\t\tability_name: getAppCategoryName(data) || '',\n\t\t\t\t\t},\n\t\t\t\t]","displayData.map((item) => {\n\t\t\t\tconst { resource, userScene } = item.appDetail;\n\t\t\t\treturn {\n\t\t\t\t\tapp_id: resource.id,\n\t\t\t\t\ttrace_info: resource?.aiRecTraceInfo ?? '',\n\t\t\t\t\tuser_scene: getImageUserScene({ userScene }),\n\t\t\t\t\tability_name: getAppCategoryName(item.appDetail),\n\t\t\t\t};\n\t\t\t})","guideList.map((item) => {\n\t\t\t\t\treturn {\n\t\t\t\t\t\tapp_id: item.appId,\n\t\t\t\t\t\tuser_scene: '',\n\t\t\t\t\t\tability_name: '',\n\t\t\t\t\t\tapp_source: 'generate_wait',\n\t\t\t\t\t\ttype: item.componentFilter ? 'fast_generation' : 'regular_generation',\n\t\t\t\t\t\trecommendAppId: item.recommendAppId,\n\t\t\t\t\t\ttrace_info: item.aiRecTraceInfo ?? '',\n\t\t\t\t\t};\n\t\t\t\t})"] → ["[] as (AppExposureDirectAppItem | AppExposureDirectChatbotItem)[]","data","arr.map((id, index) => {\n\t\t\tconst recItem = rec[index];\n\t\t\tconst bizType = recItem?.biz_type;\n\t\t\tif (bizType === AppCardType.ChatbotDrama) {\n\t\t\t\t// Chatbot 卡片沿用 App Feed 曝光事件名，但 payload 只保留大数据确认的卡片字段。\n\t\t\t\treturn {\n\t\t\t\t\tid,\n\t\t\t\t\ttrace_info: recItem?.rec || '',\n\t\t\t\t\tsort: recItem?.idx || 0,\n\t\t\t\t\tbiz_type: AppCardType.ChatbotDrama,\n\t\t\t\t\tchatbot_id: recItem?.chatbot_id || '',\n\t\t\t\t};\n\t\t\t}\n\n\t\t\tconst exposureItem = {\n\t\t\t\tapp_id: id,\n\t\t\t\tappid: id,\n\t\t\t\ttrace_info: rec[index]?.rec || '',\n\t\t\t\tuser_scene: rec[index]?.user_scene || '',\n\t\t\t\tability_name: rec[index]?.ability_name || '',\n\t\t\t\tsort: rec[index]?.idx || 0,\n\t\t\t\tapp_category: getAppTrackCategory(rec[index]?.app_category),\n\t\t\t};\n\t\t\treturn bizType === AppCardType.App\n\t\t\t\t? { ...exposureItem, biz_type: AppCardType.App }\n\t\t\t\t: exposureItem;\n\t\t})","guideList.map((item) => {\n\t\t\t\t\tconst cached = item.shortId ? appDetailsCache.get(item.shortId) : undefined;\n\t\t\t\t\treturn {\n\t\t\t\t\t\tapp_id: item.appId,\n\t\t\t\t\t\tuser_scene: '',\n\t\t\t\t\t\tability_name: '',\n\t\t\t\t\t\tapp_source: 'generate_wait',\n\t\t\t\t\t\ttype: item.componentFilter ? 'fast_generation' : 'regular_generation',\n\t\t\t\t\t\trecommendAppId: item.recommendAppId,\n\t\t\t\t\t\ttrace_info: item.aiRecTraceInfo ?? '',\n\t\t\t\t\t\tapp_category: getAppTrackCategory(cached?.resource?.appCategory),\n\t\t\t\t\t};\n\t\t\t\t})"]
- 字段 location1：changed；typeExpressions: ["string as 'onboarding' | undefined","'onboarding'"] → ["string as 'onboarding' | undefined"]
- 字段 tag_id：changed；typeExpressions: ["_string","getTagId(trackRecorder.source.basePage)","getTagId(location)","getTagId(origin)"] → ["_string","getTagId(trackRecorder.source.basePage)","getTagId(location)"]

### banner_exposure

调用点 3 → 2；证据：packages/shared/handler/event/impl/exposure.ts:171

- 字段 banner_id：changed；typeExpressions: ["string","id","bannerList[Number(key)]?.id"] → ["string","bannerList[Number(key)]?.id"]

### chatbot_exposure_direct

调用点 2 → 3；证据：packages/shared/handler/event/impl/exposure.ts:235

- description："0: 未曝光 1: 曝光" → "前端代码定义的 exposure 埋点"
- 字段 exposureList：changed；nullable: false → true；allowedValues: ["new","more"] → ["new","more","favorites"]；typeExpressions: ["[] as {\n\t\t\t\ttype: 'new' | 'more';\n\t\t\t\tsort: number;\n\t\t\t\tchatbot_id: string;\n\t\t\t\tpersona_id: string;\n\t\t\t\tpersona_type: string;\n\t\t\t}[]","ids.map((id) => {\n\t\t\t\t\t\t\tconst item = indexMap[id];\n\n\t\t\t\t\t\t\treturn {\n\t\t\t\t\t\t\t\ttype: 'more' as 'new' | 'more',\n\t\t\t\t\t\t\t\tsort: item.index,\n\t\t\t\t\t\t\t\tchatbot_id: item.id,\n\t\t\t\t\t\t\t\tpersona_id: item.personaId,\n\t\t\t\t\t\t\t\tpersona_type: item.personaType,\n\t\t\t\t\t\t\t};\n\t\t\t\t\t\t})","ids.map((id) => {\n\t\t\t\t\t\t\t\t\tconst item = indexMap[id];\n\t\t\t\t\t\t\t\t\treturn {\n\t\t\t\t\t\t\t\t\t\ttype: 'new' as 'new' | 'more',\n\t\t\t\t\t\t\t\t\t\tsort: item.index,\n\t\t\t\t\t\t\t\t\t\tchatbot_id: item.chatbot.id,\n\t\t\t\t\t\t\t\t\t\tpersona_id: item.chatbot.personaId,\n\t\t\t\t\t\t\t\t\t\tpersona_type: item.chatbot.personaType,\n\t\t\t\t\t\t\t\t\t};\n\t\t\t\t\t\t\t\t})"] → ["[] as {\n\t\t\t\ttype: 'new' | 'more' | 'favorites';\n\t\t\t\tsort: number;\n\t\t\t\tposition?: number;\n\t\t\t\tchatbot_id: string;\n\t\t\t\tpersona_id: string;\n\t\t\t\tpersona_type: string;\n\t\t\t\tchatbot_category_id?: string;\n\t\t\t\tchatbot_label_id?: string | null;\n\t\t\t}[]","ids.flatMap((id) => {\n\t\t\t\tconst item = indexMap[id];\n\t\t\t\treturn item\n\t\t\t\t\t? [\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\ttype: 'favorites' as const,\n\t\t\t\t\t\t\t\tsort: item.index,\n\t\t\t\t\t\t\t\tposition: item.index + 1,\n\t\t\t\t\t\t\t\tchatbot_id: item.id,\n\t\t\t\t\t\t\t\tpersona_id: item.personaId,\n\t\t\t\t\t\t\t\tpersona_type: item.personaType,\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t]\n\t\t\t\t\t: [];\n\t\t\t})","ids.map((id) => {\n\t\t\t\t\tconst item = indexMap[id];\n\n\t\t\t\t\treturn {\n\t\t\t\t\t\ttype: 'more' as 'new' | 'more',\n\t\t\t\t\t\tsort: item.index,\n\t\t\t\t\t\tposition: item.index + 1,\n\t\t\t\t\t\tchatbot_id: item.id,\n\t\t\t\t\t\tpersona_id: item.personaId,\n\t\t\t\t\t\tpersona_type: item.personaType,\n\t\t\t\t\t\tchatbot_category_id: getChatbotFeedCategoryId(filter.sortMode),\n\t\t\t\t\t\tchatbot_label_id: filter.labelId,\n\t\t\t\t\t};\n\t\t\t\t})","ids.map((id) => {\n\t\t\t\t\t\t\t\t\tconst item = indexMap[id];\n\t\t\t\t\t\t\t\t\treturn {\n\t\t\t\t\t\t\t\t\t\ttype: 'new' as 'new' | 'more',\n\t\t\t\t\t\t\t\t\t\tsort: item.index,\n\t\t\t\t\t\t\t\t\t\tchatbot_id: item.chatbot.id,\n\t\t\t\t\t\t\t\t\t\tpersona_id: item.chatbot.personaId,\n\t\t\t\t\t\t\t\t\t\tpersona_type: item.chatbot.personaType,\n\t\t\t\t\t\t\t\t\t};\n\t\t\t\t\t\t\t\t})"]
- 字段 trigger_scene：added；{"name":"trigger_scene","type":"string","required":false,"nullable":false,"description":"可选值：explore / favorites","allowedValues":["explore","favorites"],"typeExpressions":["_string as 'explore' | 'favorites' | undefined","'favorites'","'explore'"],"definitions":[{"file":"packages/shared/handler/event/impl/exposure.ts","line":246,"column":4,"namespace":"exposure","event":"chatbot_exposure_direct"}],"observedAt":[{"file":"packages/chatbot/mobile/views/ChatbotMessage/components/Favorites/index.tsx","line":124,"column":5},{"file":"packages/chatbot/mobile/views/ChatbotMessage/components/MoreFriends/index.tsx","line":86,"column":5}]}

### renewal_retention_popup_show

调用点 1 → 0；证据：packages/shared/handler/event/impl/exposure.ts:177

- usage："called" → "defined-only"
- 字段 scenario：changed；typeExpressions: ["string as 'home_page' | 'image_task_completed'","useAbTestStore.getState().updateSubscribeInfo?.discountTriggerTime === 'first_start'\n\t\t\t\t\t? 'home_page'\n\t\t\t\t\t: 'image_task_completed'"] → ["string as 'home_page' | 'image_task_completed'"]

### retention_popup_show

调用点 3 → 2；证据：packages/shared/handler/event/impl/exposure.ts:164

- 字段 type：changed；typeExpressions: ["string as\n\t\t\t\t| 'renewal_retention'\n\t\t\t\t| 'pay_retain_trigger_discount'\n\t\t\t\t| 'pay_retain_low_price'\n\t\t\t\t| 'onbord_first'","type ?? PaymentLocation.payRetainLowPrice","'renewal_retention'"] → ["string as\n\t\t\t\t| 'renewal_retention'\n\t\t\t\t| 'pay_retain_trigger_discount'\n\t\t\t\t| 'pay_retain_low_price'\n\t\t\t\t| 'onbord_first'","type ?? PaymentLocation.payRetainLowPrice"]

### pay_cancel_recovery

调用点 1 → 1；证据：packages/shared/handler/event/impl/commercial.ts:16

- 字段 ab_group：removed；{"name":"ab_group","type":"unknown","required":false,"nullable":false,"description":"前端 legacy 调用点中直接传入","allowedValues":[],"typeExpressions":["order.abGroup"],"definitions":[],"observedAt":[{"file":"src/mobile/businessComponents/Purchase/PayCancelRecovery/Popup/index.tsx","line":92,"column":3}]}

### pay_cancel_recovery_click

调用点 1 → 1；证据：packages/shared/handler/event/impl/commercial.ts:17

- 字段 ab_group：removed；{"name":"ab_group","type":"unknown","required":false,"nullable":false,"description":"前端 legacy 调用点中直接传入","allowedValues":[],"typeExpressions":["order.abGroup"],"definitions":[],"observedAt":[{"file":"src/mobile/businessComponents/Purchase/PayCancelRecovery/Popup/index.tsx","line":92,"column":3}]}

### pay_result

调用点 5 → 5；证据：packages/shared/handler/event/impl/commercial.ts:13

- 字段 location：added；{"name":"location","type":"unknown","required":false,"nullable":false,"description":"前端 legacy 调用点中直接传入","allowedValues":[],"typeExpressions":["restParams.location ?? payResultLocation"],"definitions":[],"observedAt":[{"file":"packages/shared/handler/event/utils/exposure.ts","line":263,"column":29}]}

### pricing_premium_subscribe_click

调用点 6 → 5；证据：packages/shared/handler/event/impl/commercial.ts:14

- 字段 period：changed；typeExpressions: ["SubscriptionPlan.Week","'Wk'","discountProduct?.billInterval","productInfo?.billInterval"] → ["SubscriptionPlan.Week","'Wk'","productInfo?.billInterval"]
- 字段 product_type：changed；typeExpressions: ["productInfo.level || ''","productInfo?.level || ''"] → ["selectedPlan.productInfo.level","currentProductInfo.level || ''","productInfo.level || ''","productInfo?.level || ''"]
- 字段 open_free_trial：changed；allowedValues: ["close_free"] → ["open_free","close_free"]；typeExpressions: ["freeTrialInfo.openFreeTrialTrack","'close_free'"] → ["selectedPlan.subscribeInfo.hasFreeTrial ? 'open_free' : 'close_free'","freeTrialInfo.openFreeTrialTrack"]
- 字段 location：changed；typeExpressions: ["locationProp ?? PaymentLocation.Old_User_Pay_Guide","PaymentLocation.payRetainLowPrice","PaymentLocation.RenewRetention"] → ["LOCATION","locationProp ?? PaymentLocation.Old_User_Pay_Guide","PaymentLocation.payRetainLowPrice","paymentLocation"]
- 字段 pricing_plan_type：changed；typeExpressions: ["PaymentLocation.payRetainLowPrice","PaymentLocation.RenewRetention"] → ["LOCATION","PaymentLocation.payRetainLowPrice"]
- 字段 has_discount_data：changed；type: "bool" → "unknown"；allowedValues: ["false"] → []；typeExpressions: ["hasFirstWeekDiscount","false"] → ["selectedPlan.isDiscount","hasFirstWeekDiscount"]
- 字段 get_googleplay_info：changed；typeExpressions: ["true"] → ["isBillingReady","true"]
- 字段 is_renewal：changed；typeExpressions: ["false","true","!!updateSubscribeInfo"] → ["true","false","!!renewSubscribeInfo"]

### result_download

调用点 10 → 10；证据：packages/shared/handler/event/impl/bigdata.ts:6

- 字段 app_category：added；{"name":"app_category","type":"string","required":false,"nullable":false,"description":"前端类型定义：string（可选）","allowedValues":["OTHER"],"typeExpressions":["_string as AppTrackCategory | undefined","getAppTrackCategory(appCategory)","'OTHER'"],"definitions":[{"file":"packages/shared/handler/event/impl/bigdata.ts","line":21,"column":3,"namespace":"bigData","event":"result_download"}],"observedAt":[{"file":"src/mobile/businessComponents/Share2AppPopup/process.ts","line":62,"column":4},{"file":"src/mobile/businessComponents/Share2AppPopup/process.ts","line":89,"column":4},{"file":"src/mobile/handler/image.ts","line":296,"column":3},{"file":"src/mobile/handler/image.ts","line":323,"column":3}]}

### chatbot_message_receive

调用点 1 → 1；证据：packages/shared/handler/event/impl/chatbot.ts:89

- 字段 source：changed；allowedValues: ["filter_page_tips","result_page_tip","result_page_chat","result_page_tips","message_tab_tip","list_new","list_more"] → ["filter_page_tips","result_page_tip","result_page_chat","result_page_tips","message_tab_tip","list_new","list_more","guide"]；typeExpressions: ["string as\n\t\t\t| 'filter_page_tips'\n\t\t\t| 'result_page_tip'\n\t\t\t| 'result_page_chat'\n\t\t\t| 'result_page_tips'\n\t\t\t| 'message_tab_tip'\n\t\t\t| 'list_new'\n\t\t\t| 'list_more'"] → ["string as\n\t\t\t| 'filter_page_tips'\n\t\t\t| 'result_page_tip'\n\t\t\t| 'result_page_chat'\n\t\t\t| 'result_page_tips'\n\t\t\t| 'message_tab_tip'\n\t\t\t| 'list_new'\n\t\t\t| 'list_more'\n\t\t\t| 'guide'"]

### chatbot_message_send

调用点 3 → 2；证据：packages/shared/handler/event/impl/chatbot.ts:18

- 字段 source：changed；allowedValues: ["filter_page_tips","result_page_tip","result_page_chat","result_page_tips","message_tab_tip","list_new","list_more","input","topic_card","quick_reply"] → ["filter_page_tips","result_page_tip","result_page_chat","result_page_tips","message_tab_tip","list_new","list_more","guide","input","topic_card","quick_reply"]；typeExpressions: ["string as\n\t\t\t| 'filter_page_tips'\n\t\t\t| 'result_page_tip'\n\t\t\t| 'result_page_chat'\n\t\t\t| 'result_page_tips'\n\t\t\t| 'message_tab_tip'\n\t\t\t| 'list_new'\n\t\t\t| 'list_more'\n\t\t\t| 'input'\n\t\t\t| 'topic_card'\n\t\t\t| 'quick_reply'","msgSource || ChatbotMessage.Source.Input"] → ["string as\n\t\t\t| 'filter_page_tips'\n\t\t\t| 'result_page_tip'\n\t\t\t| 'result_page_chat'\n\t\t\t| 'result_page_tips'\n\t\t\t| 'message_tab_tip'\n\t\t\t| 'list_new'\n\t\t\t| 'list_more'\n\t\t\t| 'guide'\n\t\t\t| 'input'\n\t\t\t| 'topic_card'\n\t\t\t| 'quick_reply'","msgSource || ChatbotMessage.Source.Input"]

### chatbot_view_result_download

调用点 1 → 1；证据：packages/shared/handler/event/impl/chatbot.ts:166

- 字段 chatbot_type：added；{"name":"chatbot_type","type":"string","required":false,"nullable":false,"description":"可选值：pgc / ugc","allowedValues":["pgc","ugc"],"typeExpressions":["_string as 'pgc' | 'ugc' | undefined","data.chatbot_type ?? trackRecorder.chatbotInfo?.chatbot_type"],"definitions":[{"file":"packages/shared/handler/event/impl/chatbot.ts","line":171,"column":3,"namespace":"chatbot","event":"chatbot_view_result_download"}],"observedAt":[{"file":"packages/chatbot/utils/tracking.ts","line":113,"column":3}]}

### custom_chatbot_finish

调用点 2 → 1；证据：packages/shared/handler/event/impl/chatbot.ts:206

- 字段 is_success：changed；allowedValues: ["false"] → []；typeExpressions: ["boolean","data.success","false"] → ["boolean","data.success"]
- 字段 gender：changed；typeExpressions: ["string","String(data.gender)","String(form.gender)"] → ["string","String(data.gender)"]
- 字段 relationship：changed；typeExpressions: ["string","String(data.relationship)","String(form.relationship)"] → ["string","String(data.relationship)"]
- 字段 character：changed；typeExpressions: ["string","String(data.personality)","String(form.personality)"] → ["string","String(data.personality)"]

### custom_chatbot_start_chat_click

调用点 1 → 0；证据：packages/shared/handler/event/impl/chatbot.ts:201

- usage："called" → "defined-only"
- 字段 gender：changed；typeExpressions: ["string","String(form.gender)"] → ["string"]
- 字段 relationship：changed；typeExpressions: ["string","String(form.relationship)"] → ["string"]
- 字段 character：changed；typeExpressions: ["string","String(form.personality)"] → ["string"]

### addtodesktop_load_success

调用点 1 → 0；证据：packages/shared/utils/event/newDataWareHose/index.ts:633

- usage："called" → "defined-only"
- 字段 isFirstTime：removed；{"name":"isFirstTime","type":"number","required":false,"nullable":false,"description":"前端 legacy 调用点中直接传入","allowedValues":[],"typeExpressions":["!localStorage.getItem(LSK.LOAD_PWA_APP)"],"definitions":[],"observedAt":[{"file":"src/mobile/hooks/abtest/useAbTestData.ts","line":143,"column":5}]}

### h5_popup_click

调用点 6 → 6；证据：packages/shared/utils/event/newDataWareHose/index.ts:725

- 字段 type：changed；typeExpressions: ["EVENT_TYPE","'login_intercept'"] → ["eventType","'login_intercept'","EVENT_TYPE"]
- 字段 chatbot_id：added；{"name":"chatbot_id","type":"unknown","required":false,"nullable":false,"description":"前端 legacy 调用点中直接传入","allowedValues":[],"typeExpressions":["chatbotId"],"definitions":[],"observedAt":[{"file":"packages/chatbot/mobile/views/ChatbotSeoMessageH5/SeoGuideModal.tsx","line":45,"column":3}]}
- 字段 chatbot_name：added；{"name":"chatbot_name","type":"unknown","required":false,"nullable":false,"description":"前端 legacy 调用点中直接传入","allowedValues":[],"typeExpressions":["chatbotName"],"definitions":[],"observedAt":[{"file":"packages/chatbot/mobile/views/ChatbotSeoMessageH5/SeoGuideModal.tsx","line":46,"column":3}]}
- 字段 url_name：added；{"name":"url_name","type":"unknown","required":false,"nullable":false,"description":"前端 legacy 调用点中直接传入","allowedValues":[],"typeExpressions":["urlName"],"definitions":[],"observedAt":[{"file":"packages/chatbot/mobile/views/ChatbotSeoMessageH5/SeoGuideModal.tsx","line":47,"column":3}]}

### h5_popup_show

调用点 3 → 3；证据：packages/shared/utils/event/newDataWareHose/index.ts:724

- 字段 type：changed；typeExpressions: ["EVENT_TYPE","'login_intercept'"] → ["eventType","'login_intercept'","EVENT_TYPE"]
- 字段 chatbot_id：added；{"name":"chatbot_id","type":"unknown","required":false,"nullable":false,"description":"前端 legacy 调用点中直接传入","allowedValues":[],"typeExpressions":["chatbotId"],"definitions":[],"observedAt":[{"file":"packages/chatbot/mobile/views/ChatbotSeoMessageH5/SeoGuideModal.tsx","line":45,"column":3}]}
- 字段 chatbot_name：added；{"name":"chatbot_name","type":"unknown","required":false,"nullable":false,"description":"前端 legacy 调用点中直接传入","allowedValues":[],"typeExpressions":["chatbotName"],"definitions":[],"observedAt":[{"file":"packages/chatbot/mobile/views/ChatbotSeoMessageH5/SeoGuideModal.tsx","line":46,"column":3}]}
- 字段 url_name：added；{"name":"url_name","type":"unknown","required":false,"nullable":false,"description":"前端 legacy 调用点中直接传入","allowedValues":[],"typeExpressions":["urlName"],"definitions":[],"observedAt":[{"file":"packages/chatbot/mobile/views/ChatbotSeoMessageH5/SeoGuideModal.tsx","line":47,"column":3}]}

### register

调用点 1 → 1；证据：packages/shared/utils/event/newDataWareHose/index.ts:417

- 字段 ad_app_short_id：changed；type: "string" → "unknown"

### userpath

调用点 3 → 3；证据：packages/shared/utils/event/newDataWareHose/index.ts:407

- 字段 platform：changed；typeExpressions: ["isA1App ? 'android' : 'web'"] → ["isAndroidApp ? 'android' : 'web'"]
- 字段 userLanguage：changed；typeExpressions: ["window.navigator.language"] → ["getI18nSetting()"]

## 未静态解析的调用

- packages/shared/utils/event/newDataWareHose/event/payment.ts:30，loggingEvent，action 表达式：action
- packages/shared/utils/event/newDataWareHose/event/payment.ts:42，dataWareHandle，action 表达式：action

## 处理边界

本次保留平台现有 manifest、Raw action、property key、正式契约及图片资产。新扫描输出另存为 frontend-current-manifest.js；不能仅刷新 manifest 就认定已有业务文案、截图和契约全部符合最新代码。正式契约更新仍须显式选择 keep、alias、dual_write 或 replace。
