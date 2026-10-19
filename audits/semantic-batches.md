# 每五个埋点语义核查

日期：2026-10-19；基准：9f3e4c77d4ede49d70f9edd20356c4034133c294。442 个 action，89 组。
已记录人工初核结论 442 项；待逐项核实 0 项。自动收集的源码不计为核实通过。

完整调用表达式、所在函数、条件和文件哈希见 semantic-batches.json。人工结论单独保存在 semantic-reviews.json，重新生成不会覆盖。

公共 typed 发送链：collection/tracker.ts makeTracker → base/tracker.ts makeTrackPackage → newDataWareHose/index.ts addEventToQueue → checkAndSend。公共字段在打包时注入，JSON 序列化会省略 undefined；此结论不能代替 legacy 和空实现逐项核查。

## 第 1 组 · 本组有逐项初核结论，剩余限制见各项

### account_delete_button_click · 证据不足

OthersPopup.handleDeleteAccount 先打开删除确认层再调用 typed tracker；无业务字段。

修正：无。
限制：直接调用与定义初核一致；最终平台契约及界面证据未全部核实，暂不标为核实一致；静态核查，不代表生产上报验证；截图与真实运行 payload 尚待取证。

- makeTracker：packages/shared/handler/event/impl/action.ts:958
- Track：src/mobile/views/Personal/businessComponents/OthersPopup/index.tsx:15

### account_delete_confirm · 证据不足

确认分支在 await deleteAccount 之前传 is_confirm=true；取消分支在关闭层前传 false；定义为必填 boolean，不是删除成功事件。

修正：无。
限制：直接调用与定义初核一致；最终平台契约及界面证据未全部核实，暂不标为核实一致；静态核查，不代表生产上报验证；截图与真实运行 payload 尚待取证。

- makeTracker：packages/shared/handler/event/impl/action.ts:960
- Track：src/mobile/views/Personal/businessComponents/DeleteNoticePopup/index.tsx:13
- Track：src/mobile/views/Personal/businessComponents/DeleteNoticePopup/index.tsx:21

### account_v2_start · 已修正

postLoginV2 请求 /api/user/v2/accounts/${type}/login 前发送，包含游客登录；无业务字段。

修正：修正目录行为说明：包含 tourist，不代表登录成功。
限制：静态核查，不代表生产上报验证；截图与真实运行 payload 尚待取证。

- makeTracker：packages/shared/handler/event/impl/action.ts:1368
- Track：packages/shared/service/register/index.ts:129

### account_v2_success · 已修正

postLoginV2 响应 code===0 分支发送；没有业务字段，不等于后续页面初始化结束。

修正：修正目录行为说明。
限制：静态核查，不代表生产上报验证；截图与真实运行 payload 尚待取证。

- makeTracker：packages/shared/handler/event/impl/action.ts:1369
- Track：packages/shared/service/register/index.ts:143

### add_whatsapp_button_click · 证据不足

onClickAddWhatsApp 在压缩与 Native 调用前发送 source=imageEditSource；声明枚举 auto_enter/edit_button_click。结果页在 Popup/groups/studio.tsx 注册，全仓未找到产品侧打开 PopupId.EmojiResult 的调用。

修正：将绝对不可达说明改为未找到产品侧调用、待运行验证。
限制：静态核查，不代表生产上报验证；截图与真实运行 payload 尚待取证；尚不能排除动态弹窗调用；trackParams 实际来源与 Native 可用性待验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:995
- Track：src/mobile/views/AIEmoji/EmojiResult/index.tsx:225

## 第 2 组 · 本组有逐项初核结论，剩余限制见各项

### add_whatsapp_result · 证据不足

结果页 effect 注册 window.trackWhatsAppEmojiResult，传回调参数 successFlag 及闭包 source；卸载清理代码被注释，可能残留旧闭包；不能将该回调当作点击后自动成功。

修正：修正平台触发说明，明确 Native 回调及入口限制。
限制：静态核查，不代表生产上报验证；截图与真实运行 payload 尚待取证；Native 是否调用、实际参数类型、组件卸载后回调残留影响待验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:999
- Track：src/mobile/views/AIEmoji/EmojiResult/index.tsx:95

### app_click · 证据不足

两处直接调用：ExposureAppClick 将 image_id 从 MAIN_IMAGE_ID 取值，trace_info 空值时回退 recorder，source 条件展开后再展开 searchParams；召回弹窗校验当前项和 appId 后发送，feed_hot_filter=true，sort=selectedIndex+1。字段声明及通道保留原样。

修正：无。
限制：静态核查，不代表生产上报验证；截图与真实运行 payload 尚待取证；ExposureAppClick 的上游场景多，仍需逐一核对辅助函数调用方和 searchParams；工作线人工映射待复核。

- makeTracker：packages/shared/handler/event/impl/action.ts:1295
- Track：packages/shared/handler/event/utils/exposure.ts:137
- Track：src/mobile/businessComponents/HighContentRecallPopup/index.tsx:61

### app_detail_more · 已修正

详情存在时在 openStack 设置弹窗前发 action=open，onClose 回调发 close；声明必填 string 的 open/close 枚举。

修正：新增精确的开关边界说明。
限制：静态核查，不代表生产上报验证；截图与真实运行 payload 尚待取证。

- makeTracker：packages/shared/handler/event/impl/action.ts:1201
- Track：src/mobile/views/AppDetail/AppDetailUI/AppDetailFormUIRevamp/Bottom/index.tsx:50
- Track：src/mobile/views/AppDetail/AppDetailUI/AppDetailFormUIRevamp/Bottom/index.tsx:59

### app_detail_userguide_cancel · 已修正

仅在 visible=true 注册 effect；返回的清理函数上报空对象。超时、外部点击、隐藏、卸载或依赖变化引起清理均可能上报，并非只在主动取消时发送。

修正：将用户取消语义改为 effect 生命周期清理。
限制：静态核查，不代表生产上报验证；截图与真实运行 payload 尚待取证。

- makeTracker：packages/shared/handler/event/impl/action.ts:1205
- Track：src/mobile/views/AppDetail/AppDetailUI/AppDetailFormUIRevamp/AppDetailSetupGuideBubble/index.tsx:60

### app_detail_userguide_expose · 已修正

visible=true 的 effect 通过 hasTrackedExpose 同一可见周期去重，visible=false 重置；空业务字段，没有曝光比例检测。

修正：补充 visible、去重及非面积曝光边界。
限制：静态核查，不代表生产上报验证；截图与真实运行 payload 尚待取证。

- makeTracker：packages/shared/handler/event/impl/action.ts:1204
- Track：src/mobile/views/AppDetail/AppDetailUI/AppDetailFormUIRevamp/AppDetailSetupGuideBubble/index.tsx:33

## 第 3 组 · 本组有逐项初核结论，剩余限制见各项

### app_lock_reason · 证据不足

trackLockReason 通过 checkExceedUseLimitation 得到 isLocked/lockedCount：锁定且 count=1、generateTotal<2 发 generate_reach3limit；否则 generateTotal===lockedCount 才发，count=2 对应 generate_reach2limit，其余为 generate_reach3limit。

修正：无。
限制：静态核查，不代表生产上报验证；截图与真实运行 payload 尚待取证；权益计算辅助函数及所有 trackLockReason 上游调用仍待核查，不把 origin 文案当作真实次数定义。

- makeTracker：packages/shared/handler/event/impl/action.ts:1010
- Track：packages/shared/utils/app/detail/lock.ts:10
- Track：packages/shared/utils/app/detail/lock.ts:19

### app_publish_success · 证据不足

已读移动 Remix、PC Flow、PC Form 三处调用：均在 publishApp code===0 后发送；PC Flow 的 onSuccess 和 Form 的视图切换先于埋点，若先执行逻辑抛错会漏报。app_type/build_from/cover_resolution 等因路径不同，保留原始声明。

修正：无。
限制：静态核查，不代表生产上报验证；截图与真实运行 payload 尚待取证；存储计数的运行类型、buildNoteTrackData、cover resolution 辅助函数及最终分通道字段仍待逐项追踪。

- makeTracker：packages/shared/handler/event/impl/action.ts:390
- Track：src/mobile/views/Remix/RemixPublish/RemixPublishButton.tsx:162
- Track：src/pc/store/Flow/utils/publish.ts:108
- Track：src/pc/views/AppBuild/components/AppPublishPopup/containers/PublishView/FormView.tsx:140

### award_announcement_click · 证据不足

活动 DefaultResult 未公布分支点击发 type=wrong；已公布分支点击查看发字符串 true，随后 openLink；必填 string，不是 boolean。

修正：无。
限制：直接调用与定义初核一致；最终平台契约及界面证据未全部核实，暂不标为核实一致；静态核查，不代表生产上报验证；截图与真实运行 payload 尚待取证。

- makeTracker：packages/shared/handler/event/impl/action.ts:543
- Track：src/mobile/views/Remix/components/ActivityTemplate/components/DefaultResult/index.tsx:14
- Track：src/mobile/views/Remix/components/ActivityTemplate/components/DefaultResult/index.tsx:18

### back_click · 证据不足

RemixTabs 点击关闭后发空对象，再记录点击并打开离开确认弹窗；不表示已离开。

修正：无。
限制：直接调用与定义初核一致；最终平台契约及界面证据未全部核实，暂不标为核实一致；静态核查，不代表生产上报验证；截图与真实运行 payload 尚待取证。

- makeTracker：packages/shared/handler/event/impl/action.ts:696
- Track：src/mobile/views/Remix/RemixTabs/index.tsx:23

### back_pop_cancel_click · 证据不足

离开弹窗 onCancel 发 app_id，来自全局构建状态；必填 string，取消离开。

修正：无。
限制：直接调用与定义初核一致；最终平台契约及界面证据未全部核实，暂不标为核实一致；静态核查，不代表生产上报验证；截图与真实运行 payload 尚待取证。

- makeTracker：packages/shared/handler/event/impl/action.ts:697
- Track：src/mobile/views/Remix/RemixTabs/index.tsx:47

## 第 4 组 · 本组有逐项初核结论，剩余限制见各项

### back_pop_stillleave_click · 证据不足

onOk 中读取 isGenerating，调用 deleteAppById 但未 await，随后上报 app_id/is_generating；finally goBack，不等于删除请求成功。

修正：无。
限制：直接调用与定义初核一致；最终平台契约及界面证据未全部核实，暂不标为核实一致；静态核查，不代表生产上报验证；截图与真实运行 payload 尚待取证。

- makeTracker：packages/shared/handler/event/impl/action.ts:700
- Track：src/mobile/views/Remix/RemixTabs/index.tsx:38

### backtoedit_click · 证据不足

定义存在 app_id:string；manifest 无调用，全仓检索仅定义（create_pop_backtoedit_click 是另一个 action）；应归仅定义资产，不可给出当前触发结论。

修正：无。
限制：静态核查，不代表生产上报验证；截图与真实运行 payload 尚待取证；不能排除服务端或动态调用，尚无运行证据。

- makeTracker：packages/shared/handler/event/impl/action.ts:727

### backtotry_click · 证据不足

结果页 ImageFooter 发 app_id、appid、getFilterLevel(buildData) 后 await popStack，再可选调用 onBackToEdit；不是返回完成。

修正：无。
限制：静态核查，不代表生产上报验证；截图与真实运行 payload 尚待取证；getFilterLevel 与最终平台说明仍需核实。

- makeTracker：packages/shared/handler/event/impl/action.ts:672
- Track：src/mobile/views/Remix/RemixGenResult/ImageFooter/index.tsx:34

### banner_click · 证据不足

StudioBanner 有 URL 才发送 origin=studio/banner_id/banner_link，早于 URL 解析跳转；另有 BaseListener 的 legacy BANNER_CLICK，switch 置 defaultData，不能直接套 typed 字段契约。

修正：无。
限制：静态核查，不代表生产上报验证；截图与真实运行 payload 尚待取证；legacy handleBuildPopup 的数据来源和最终默认 properties 待核实。

- makeTracker：packages/shared/handler/event/impl/action.ts:916
- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:521
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:24
- loggingEvent:forwarded：packages/shared/components/base/BaseListener/wrapper.tsx:153
- Track：src/mobile/views/Studio/businessComponents/StudioBanner/index.tsx:42

### banner_new_click · 确认代码存在差异

DiscoverHeroBanner 在校验 appId 前发送，app_id=item.resource?.id、short_id=item.shortId||item.resource?.shortId；声明两者必填 string，运行路径可能传 undefined，JSON 序列化会省略。无 appId 时仍发该事件但不打开详情。

修正：保留原始 key/观察类型；不擅改前端或正式契约。
限制：静态核查，不代表生产上报验证；截图与真实运行 payload 尚待取证；需要实际 banner 数据确认字段缺失频率；工作线和截图尚待核。

- makeTracker：packages/shared/handler/event/impl/action.ts:1416
- Track：src/mobile/views/Discover/hooks/useDiscoverHeroBanner.ts:30

## 第 5 组 · 本组有逐项初核结论，剩余限制见各项

### banner_new_exposure · 证据不足

Hero Banner inViewport 回调中要求进入视口、尚未上报且 items 非空；先设置 ref 再发空对象。

修正：无。
限制：组件重挂载、isActive 与实际可见条件仍需验证；尚未验证生产上报和最新界面截图。

- makeTracker：packages/shared/handler/event/impl/action.ts:1415
- Track：src/mobile/views/Discover/components/DiscoverHeroBanner/index.tsx:71

### bind_failure · 证据不足

Facebook、Google、Email 三处仅在 BindFailed 分支发 failure_reason=is_old_account；不是所有登录异常都会发送。

修正：无。
限制：直接调用与定义初核一致；最终平台契约及界面证据未全部核实，暂不标为核实一致；SDK 和服务端错误码的实际响应未运行验证；尚未验证生产上报和最新界面截图。

- makeTracker：packages/shared/handler/event/impl/action.ts:1362
- Track：src/mobile/hooks/useFaceBookLoginhandle.ts:47
- Track：src/mobile/hooks/useGoogleLoginhandler.ts:52
- Track：src/mobile/views/Login/LoginRegister/components/LoginRegisterForm/index.tsx:100

### ceator_activity_banner_click · 证据不足

CreatorBanner 点击先发空对象再 openStack CreatorActivity；Raw ceator 拼写保持不变。

修正：无。
限制：直接调用与定义初核一致；最终平台契约及界面证据未全部核实，暂不标为核实一致；截图与入口显示条件待运行取证；尚未验证生产上报和最新界面截图。

- makeTracker：packages/shared/handler/event/impl/action.ts:561
- Track：src/mobile/views/AppFeed/CreatorBanner/index.tsx:39

### chatbot_favorite_click · 证据不足

收藏按钮阻止冒泡并用 favoriteSubmitting 防重入，await updateChatbotFavorite 后发 success，catch 发 fail；add/remove 取反原 favorited，is_succsess 为保留的原始拼写；辅助 store 在响应非 0 时抛错。

修正：无。
限制：辅助 store 后半段异步刷新失败与成功口径、position 来源和分组待核；尚未验证生产上报和最新界面截图。

- makeTracker：packages/shared/handler/event/impl/action.ts:1229
- Track：packages/chatbot/mobile/views/ChatbotMessage/components/MoreFriends/ChatbotExploreExperimentCard/index.tsx:64
- Track：packages/chatbot/mobile/views/ChatbotMessage/components/MoreFriends/ChatbotExploreExperimentCard/index.tsx:72

### chatbot_generate_button_click · 证据不足

仅找到 makeTracker 定义：chatbot_id/conversation_id/message_id 三个必填 string；manifest 无直接调用。

修正：无。
限制：动态调用和实际入口待运行取证，不能声称当前触发；尚未验证生产上报和最新界面截图。

- makeTracker：packages/shared/handler/event/impl/action.ts:1258

## 第 6 组 · 本组有逐项初核结论，剩余限制见各项

### chatbot_image_to_video_click · 证据不足

handleImg2VideoMessage 在积分校验和生成请求前发送 location 与 chatbotInfo.chatbot_id||空串；积分不足也可能已发送此点击事件。

修正：无。
限制：所有 helper 上游与 markChatbotGenerateSource 仍需追踪；尚未验证生产上报和最新界面截图。

- makeTracker：packages/shared/handler/event/impl/action.ts:1411
- Track：packages/chatbot/shared/utils/index.ts:271

### chatbot_message_feedback_submit · 证据不足

提交未禁用才发请求；code===0 发 success 和 res.data.feedbackId，异常且未成功标记才发 fail、Feedback_id 为空串；成功后回调异常不重复报失败。reason 使用完整映射；Feedback_id 大小写与 is_succsess 原样保留。

修正：无。
限制：直接调用与定义初核一致；最终平台契约及界面证据未全部核实，暂不标为核实一致；反馈 ID 的实际响应类型待运行验证；尚未验证生产上报和最新界面截图。

- makeTracker：packages/shared/handler/event/impl/action.ts:1236
- Track：packages/chatbot/mobile/views/ChatbotFeedbackPopup/index.tsx:63

### chatbot_message_generate_image_click · 证据不足

仅定义 chatbot_id/conversation_id/message_id/picture_id 为 string，is_succsess 为 boolean；未检出调用。

修正：无。
限制：无当前产品触发证据；尚未验证生产上报和最新界面截图。

- makeTracker：packages/shared/handler/event/impl/action.ts:1263

### check_in_v3_button_click · 证据不足

移动自动/每日签到及 PC 自动签到共六处：check_in 或 pricing。记录点击与关闭动画触发，不代表签到请求或支付成功；PC pricing 在 openPurchasePopup 后发送。

修正：无。
限制：直接调用与定义初核一致；最终平台契约及界面证据未全部核实，暂不标为核实一致；动画和打开弹窗异常对发送的影响待运行验证；尚未验证生产上报和最新界面截图。

- makeTracker：packages/shared/handler/event/impl/action.ts:925
- Track：src/mobile/views/DailyTask/components/AutoCheckInPopup/index.tsx:131
- Track：src/mobile/views/DailyTask/components/AutoCheckInPopup/index.tsx:141
- Track：src/mobile/views/DailyTask/components/DailyCheckInPopup/index.tsx:155
- Track：src/mobile/views/DailyTask/components/DailyCheckInPopup/index.tsx:164
- Track：src/pc/views/DailyTask/components/AutoCheckInPopup/index.tsx:61
- Track：src/pc/views/DailyTask/components/AutoCheckInPopup/index.tsx:69

### choose_filter_show · 证据不足

SubmitFilterPopup 首次 effect 按 filteredList.length>0 发 have_filter，否则 no_filter，hasPrinted 防重复；空列表不代表接口成功返回无结果。

修正：无。
限制：直接调用与定义初核一致；最终平台契约及界面证据未全部核实，暂不标为核实一致；实际列表加载时序待运行取证；尚未验证生产上报和最新界面截图。

- makeTracker：packages/shared/handler/event/impl/action.ts:851
- Track：src/mobile/views/Remix/components/SubmitFilterPopup/index.tsx:89
- Track：src/mobile/views/Remix/components/SubmitFilterPopup/index.tsx:93

## 第 7 组 · 本组有逐项初核结论，剩余限制见各项

### close_a1 · 证据不足

ExposureCloseA1 将 getRecommendPageInfo() 展开结果作为参数交给空字段 typed 定义，实际还有统一信封注入。

修正：无。
限制：触发关闭的上游、推荐公共字段与最后发送时序待核；尚未验证生产上报和最新界面截图。

- makeTracker：packages/shared/handler/event/impl/action.ts:1348
- Track：packages/shared/handler/event/utils/exposure.ts:409

### comment_action · 证据不足

ActionSheet 三处 copy/delete/report；copy 在复制调用后、delete 在打开确认流程后（未等待删除成功）、report 在 openLink 后发送；comment_id=parentId||comment.id；reply 只有声明无该文件调用。

修正：无。
限制：直接调用与定义初核一致；最终平台契约及界面证据未全部核实，暂不标为核实一致；剪贴板或打开链接的运行结果未验证；尚未验证生产上报和最新界面截图。

- makeTracker：packages/shared/handler/event/impl/action.ts:823
- Track：src/mobile/businessComponents/Comment/ActionSheet/index.tsx:48
- Track：src/mobile/businessComponents/Comment/ActionSheet/index.tsx:61
- Track：src/mobile/businessComponents/Comment/ActionSheet/index.tsx:81

### continuous_bonus_popup_button_click · 证据不足

仅定义 continuous_times:number、bouns_type:string；未检出调用，原 key bouns_type 保留。

修正：无。
限制：无当前触发证据；尚未验证生产上报和最新界面截图。

- makeTracker：packages/shared/handler/event/impl/action.ts:500

### create_click · 证据不足

仅定义 app_id:string，未检出直接调用。

修正：无。
限制：无当前触发证据；尚未验证生产上报和最新界面截图。

- makeTracker：packages/shared/handler/event/impl/action.ts:704

### create_pop_backtoedit_click · 证据不足

仅定义 app_id:string，未检出直接调用；与 backtoedit_click 不合并。

修正：无。
限制：无当前触发证据；尚未验证生产上报和最新界面截图。

- makeTracker：packages/shared/handler/event/impl/action.ts:730

## 第 8 组 · 本组有逐项初核结论，剩余限制见各项

### create_pop_publish_click · 证据不足

仅定义 app_id:string，未检出直接调用。

修正：无。
限制：无当前触发证据；尚未验证生产上报和最新界面截图。

- makeTracker：packages/shared/handler/event/impl/action.ts:724

### create_same_button_click · 证据不足

PC DetailContentV3 先发 app_id 与 (track as any)||top，再解析 param、创建表单并更新状态；不是创建成功；声明 location=top/others published。

修正：无。
限制：track 的上游传值及字段展开仍需核查；尚未验证生产上报和最新界面截图。

- makeTracker：packages/shared/handler/event/impl/action.ts:389
- Track：src/pc/views/App/AppDetailV2/components/AppDetailContentV3/index.tsx:199

### create_translate_click · 证据不足

useTranslate 的图片/视频两处在 translate 请求前发送 image_prompt/video_prompt；getFilterLevel 返回1/2/3，is_edit=hasChange。失败同样已有点击上报。

修正：无。
限制：buildData、hasChange 的数据来源与最终平台契约尚待核查；尚未验证生产上报和最新界面截图。

- makeTracker：packages/shared/handler/event/impl/action.ts:586
- Track：packages/shared/hooks/remix/useTranslate.ts:44
- Track：packages/shared/hooks/remix/useTranslate.ts:86

### creator_announcement_click · 证据不足

个人页先 openStack 和 setHasClickCA，再发送 click_behaviour=2 与 getUserLevel 结果；定义中的 1 | 2 是运行时位或表达式，不能仅据此视作 TS 枚举。

修正：无。
限制：getUserLevel 及其他入口待核；尚未验证生产上报和最新界面截图。

- makeTracker：packages/shared/handler/event/impl/action.ts:1041
- Track：src/mobile/views/Personal/businessComponents/CreatorAnnouncement/index.tsx:20

### creator_announcement_close · 已修正

CreatorNotice 的 useUnmount 回调发送空对象，覆盖组件卸载，并不限于点击关闭按钮。

修正：说明改为组件卸载语义。
限制：未运行验证路由和弹窗销毁；尚未验证生产上报和最新界面截图。

- makeTracker：packages/shared/handler/event/impl/action.ts:1046
- Track：src/mobile/views/CreatorNotice/index.tsx:12

## 第 9 组 · 本组有逐项初核结论，剩余限制见各项

### creator_center_click · 证据不足

NewHome 仅 remixEnable 时发 click_behaviour=1，个人页打开创作者中心后发2；user_level 来自 getUserLevel：level3>=5 为4、level2>=5 为3、level1>=5 为2，否则1。定义 1|2 是 JS 表达式，不能当 TS 联合枚举。

修正：无。
限制：已读取定义和直接调用；尚需核对完整辅助链、最终平台契约、分组与截图；静态初核不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:1047
- Track：src/mobile/views/NewHome/config/index.tsx:109
- Track：src/mobile/views/Personal/businessComponents/CreatorCenterBanner/index.tsx:19

### creator_center_close · 已修正

CreatorCenter 的 useUnmount 上报空对象；不是只在点击关闭按钮时发送。

修正：说明改为组件卸载。
限制：已读取定义和直接调用；尚需核对完整辅助链、最终平台契约、分组与截图；静态初核不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:1053
- Track：src/mobile/views/CreatorCenter/index.tsx:22

### creator_center_datadescription_click · 证据不足

CreatorData 点击说明先 openStack DataExplainPopup，再上报空对象；不证明弹窗已渲染。

修正：无。
限制：已读取定义和直接调用；尚需核对完整辅助链、最终平台契约、分组与截图；静态初核不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:579
- Track：src/mobile/views/CreatorCenter/components/CreatorData/index.tsx:70

### creator_center_descriptionguide_click · 证据不足

CreatorTeach 按语言选择文档链接并先 openLink，再在 type=description 分支发空对象。

修正：无。
限制：已读取定义和直接调用；尚需核对完整辅助链、最终平台契约、分组与截图；静态初核不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:584
- Track：src/mobile/views/CreatorCenter/components/CreatorTeach/index.tsx:37

### creator_center_newfollower_click · 证据不足

CreatorData setActiveStat 后 statKey=newFansCnt 分支发空对象，不是关注动作或关注成功。

修正：无。
限制：已读取定义和直接调用；尚需核对完整辅助链、最终平台契约、分组与截图；静态初核不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:580
- Track：src/mobile/views/CreatorCenter/components/CreatorData/index.tsx:57

## 第 10 组 · 本组有逐项初核结论，剩余限制见各项

### creator_center_newlikes_click · 证据不足

CreatorData setActiveStat 后 statKey=newLikedCnt 分支发空对象，不是点赞行为。

修正：无。
限制：已读取定义和直接调用；尚需核对完整辅助链、最终平台契约、分组与截图；静态初核不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:582
- Track：src/mobile/views/CreatorCenter/components/CreatorData/index.tsx:63

### creator_center_newruns_click · 证据不足

CreatorData setActiveStat 后 statKey=newRunCnt 分支发空对象，不是实际运行应用。

修正：无。
限制：已读取定义和直接调用；尚需核对完整辅助链、最终平台契约、分组与截图；静态初核不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:581
- Track：src/mobile/views/CreatorCenter/components/CreatorData/index.tsx:60

### creator_center_notes_click · 证据不足

CreatorTeach 先按语言 openLink 文档，type=notes 才发空对象，不表示文档加载成功。

修正：无。
限制：已读取定义和直接调用；尚需核对完整辅助链、最终平台契约、分组与截图；静态初核不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:585
- Track：src/mobile/views/CreatorCenter/components/CreatorTeach/index.tsx:41

### creator_center_publishfirstfilter_click · 已修正

CreatorInspire 有 containerRef 才执行 scrollIntoView，但随后无条件发送空对象；CreatorCenter 对该组件的 import 已注释，入口可达性不足，不能仅凭函数推断正在使用。

修正：补充组件入口未确认限制。
限制：已读取定义和直接调用；尚需核对完整辅助链、最终平台契约、分组与截图；静态初核不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:1108
- Track：src/mobile/views/CreatorCenter/components/CreatorInspire/index.tsx:25

### creator_center_remixguide_click · 证据不足

CreatorTeach 按语言选择文件并 openLink，type=filter 时发空对象。

修正：无。
限制：已读取定义和直接调用；尚需核对完整辅助链、最终平台契约、分组与截图；静态初核不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:583
- Track：src/mobile/views/CreatorCenter/components/CreatorTeach/index.tsx:33

## 第 11 组 · 本组有逐项初核结论，剩余限制见各项

### creator_guide_click · 证据不足

PC BuildFormTitle 按 zh-CN/zh-TW 或其他语言选择创作者指南，openLink 后发空对象。

修正：无。
限制：已读取定义和直接调用；尚需核对完整辅助链、最终平台契约、分组与截图；静态初核不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:1270
- Track：src/pc/components/build/BuildFormTitle/index.tsx:29

### creator_onboarding_popup_notnowclick · 证据不足

CreatorEntryPopup 点击稍后先 popStack，再发空对象，然后 Toast、initUserBehaviorData，不是初始化完成事件。

修正：无。
限制：已读取定义和直接调用；尚需核对完整辅助链、最终平台契约、分组与截图；静态初核不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:1107
- Track：src/mobile/views/Remix/components/CreatorEntryPopup/index.tsx:31

### creator_onboarding_popup_show · 证据不足

仅找到空对象事件定义，无直接调用；不能给出当前曝光时机。

修正：无。
限制：已读取定义和直接调用；尚需核对完整辅助链、最终平台契约、分组与截图；静态初核不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:1105

### creator_onboarding_popup_viewclick · 证据不足

CreatorEntryPopup 点击查看先 pop 当前层并打开 CreatorCenter，再发空对象，然后初始化行为数据，不表示目标页面已加载。

修正：无。
限制：已读取定义和直接调用；尚需核对完整辅助链、最终平台契约、分组与截图；静态初核不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:1106
- Track：src/mobile/views/Remix/components/CreatorEntryPopup/index.tsx:39

### creator_support_banner_click_mobile · 证据不足

仅找到空对象定义，无直接调用，当前入口待取证。

修正：无。
限制：已读取定义和直接调用；尚需核对完整辅助链、最终平台契约、分组与截图；静态初核不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:1051

## 第 12 组 · 本组有逐项初核结论，剩余限制见各项

### creator_support_button_click · 证据不足

CreatorHelpPopup 先 closeStack，再发送空对象，最后 goToRemoteLink(creatorCenter)；as never 是 TS 断言，不产生业务字段。

修正：无。
限制：已读取定义和直接调用；尚需核对完整辅助链、最终平台契约、分组与截图；静态初核不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:1052
- Track：src/mobile/views/Personal/businessComponents/CreatorHelpPopup/index.tsx:17

### cut_function_click · 证据不足

仅定义 user_scene:string as UserSceneTrackType，无直接调用。

修正：无。
限制：已读取定义和直接调用；尚需核对完整辅助链、最终平台契约、分组与截图；静态初核不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:1021

### cut_page_finish · 证据不足

CropView success callback 先调用外部 successCallback，再发 user_scene=trackParam.user_scene；若外部回调抛错则不发，不能等同点击裁剪完成。

修正：无。
限制：已读取定义和直接调用；尚需核对完整辅助链、最终平台契约、分组与截图；静态初核不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:1018
- Track：src/mobile/views/EditImageView/CropView/index.tsx:117

### cutout_function_click · 证据不足

TaskAction 校验 imageId 后上报 user_scene/ability_name/location2=task/trace_info||空串；早于积分、会员、并发限制检查及 newAtomicGenerate；失败和受限也可能已有点击上报。

修正：无。
限制：已读取定义和直接调用；尚需核对完整辅助链、最终平台契约、分组与截图；静态初核不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:1149
- Track：src/mobile/views/Tasks/hooks/useTaskAction.ts:165

### describe_edit_click · 证据不足

EditDescription 先执行可选 onClick，再上报 app_id，随后写本地缓存并打开编辑弹窗，不表示编辑成功。

修正：无。
限制：已读取定义和直接调用；尚需核对完整辅助链、最终平台契约、分组与截图；静态初核不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:632
- Track：src/mobile/views/Remix/components/EditDescription/index.tsx:105

## 第 13 组 · 本组有逐项初核结论，剩余限制见各项

### describe_pop_change_close · 证据不足

EditDescription.handleClose 从本地 DES_CHANGED 读 hasChange，truthy 时发送 app_id，随后总会发 describe_pop_close；不等同内容保存成功。

修正：无。
限制：已读取定义和直接调用；尚需核对完整辅助链、最终平台契约、分组与截图；静态初核不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:638
- Track：src/mobile/views/Remix/components/EditDescription/index.tsx:94

### describe_pop_close · 证据不足

handleClose 在有改/无改分支事件后发送 app_id、appid=shortId、filter_level；空文本会先恢复缓存状态。

修正：无。
限制：已读取定义和直接调用；尚需核对完整辅助链、最终平台契约、分组与截图；静态初核不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:646
- Track：src/mobile/views/Remix/components/EditDescription/index.tsx:96

### describe_pop_direct_close · 证据不足

handleClose 的 !hasChange 分支发送 app_id 并将 DES_CHANGED 写 false；有改与无改由缓存而非现场比较判定。

修正：无。
限制：已读取定义和直接调用；尚需核对完整辅助链、最终平台契约、分组与截图；静态初核不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:635
- Track：src/mobile/views/Remix/components/EditDescription/index.tsx:91

### describe_pop_finish · 证据不足

DescriptionPopupComp 先存 curState.text，空文本恢复缓存；仅 origin=finish 发 app_id/appid/getFilterLevel(buildData)，随后 popStack。

修正：无。
限制：已读取定义和直接调用；尚需核对完整辅助链、最终平台契约、分组与截图；静态初核不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:641
- Track：src/mobile/views/Remix/components/EditDescription/DescriptionPopupComp/index.tsx:89

### device_id_failed · 证据不足

handler/event/index.tsx 为 Tourist.track 注入转发函数 ActionTrack.device_id_failed(props)，仅凭这个包装点无法确定错误来源与 error_message。

修正：无。
限制：已读取定义和直接调用；尚需核对完整辅助链、最终平台契约、分组与截图；静态初核不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:1365
- ActionTrack：packages/shared/handler/event/index.tsx:31

## 第 14 组 · 本组有逐项初核结论，剩余限制见各项

### device_id_start · 证据不足

handler/event/index.tsx 将 Tourist.track 起始回调转发空对象；实际设备 ID 初始化路径待追踪。

修正：无。
限制：已读取定义和直接调用；尚需核对完整辅助链、最终平台契约、分组与截图；静态初核不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:1370
- ActionTrack：packages/shared/handler/event/index.tsx:32

### device_id_success · 证据不足

handler/event/index.tsx 将 Tourist.track 成功回调转发空对象；成功条件需追踪 tourist 模块，不能凭包装命名认定。

修正：无。
限制：已读取定义和直接调用；尚需核对完整辅助链、最终平台契约、分组与截图；静态初核不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:1371
- ActionTrack：packages/shared/handler/event/index.tsx:33

### edit_page_visit · 证据不足

TaskBottom recreate 回调中仅 SIMPLE_GENERATE_VIDEO 分支发送 ability_name，其他能力走 ExposureAppGenerateClick；并非所有编辑页访问。

修正：无。
限制：已读取定义和直接调用；尚需核对完整辅助链、最终平台契约、分组与截图；静态初核不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:1164
- Track：src/mobile/views/Task/TaskBottom/index.tsx:670

### edit_profile_click · 证据不足

UserInfoHeader 两处：非 visitor 点击资料发 profile；按钮逻辑先检查登录，自己主页或非 visitor 发 button，否则走关注；发送早于 openStack。

修正：无。
限制：已读取定义和直接调用；尚需核对完整辅助链、最终平台契约、分组与截图；静态初核不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:760
- Track：src/mobile/views/Personal/businessComponents/UserInfoHeader/index.tsx:72
- Track：src/mobile/views/Personal/businessComponents/UserInfoHeader/index.tsx:215

### enhancement · 证据不足

Tasks.useTaskAction 校验 imageId 后将 enhancementPath 写 recorder，发送 current_tab、user_scene、ability_name、location2=task、trace_info；早于积分、免费用户和并发校验。

修正：无。
限制：已读取定义和直接调用；尚需核对完整辅助链、最终平台契约、分组与截图；静态初核不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:1156
- Track：src/mobile/views/Tasks/hooks/useTaskAction.ts:208

## 第 15 组 · 本组有逐项初核结论，剩余限制见各项

### enhancement_success · 证据不足

useTaskSocket 的 OPTIMIZE 结果分支从 nextTask.images[0] 取 app_id，current_tab 取全局 recorder，不是请求时冻结的路径；成功分支外围条件和并发覆盖风险待核。

修正：无。
限制：已读取定义和直接调用；尚需核对完整辅助链、最终平台契约、分组与截图；静态初核不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:269
- Track：packages/shared/handler/task/useTaskSocket.ts:425

### enter_comment · 证据不足

Comment.MainEditor 以 {...track} 展开发送；仅凭此调用无法证明 origin、object、ability_name 等必填值在全部入口齐全。

修正：无。
限制：已读取定义和直接调用；尚需核对完整辅助链、最终平台契约、分组与截图；静态初核不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:774
- Track：src/mobile/businessComponents/Comment/CustomInput/MainEditor.tsx:227

### error_page_button_click · 证据不足

EmptyView 按钮点击发送 type/code 后执行 propAction??action 回调；按钮动作失败也已发送，code 可选。

修正：无。
限制：已读取定义和直接调用；尚需核对完整辅助链、最终平台契约、分组与截图；静态初核不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:903
- Track：packages/shared/components/business/EmptyView/index.tsx:498

### error_page_enter · 证据不足

EmptyView effect 中发送 type/code；没有可见面积检测，effect 的完整依赖与组件挂载条件待核。

修正：无。
限制：已读取定义和直接调用；尚需核对完整辅助链、最终平台契约、分组与截图；静态初核不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:904
- Track：packages/shared/components/business/EmptyView/index.tsx:440

### explore_card_click · 证据不足

ExploreCardSection 点击先发空对象再调用可选 onClick(item)，不代表跳转成功。

修正：无。
限制：已读取定义和直接调用；尚需核对完整辅助链、最终平台契约、分组与截图；静态初核不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:993
- Track：src/mobile/views/Discover/components/ExploreCardSection/index.tsx:52

## 第 16 组 · 本组有逐项初核结论，剩余限制见各项

### faceswap_sortmode_switch · 证据不足

FaceSwapLabelPopup 确认时，无论 hasChanged 都上报 sort_mode=sortTypeName/tag_name=labelName/tag_id=currentKey；只有 onConfirm 受 hasChanged 限制。

修正：无。
限制：已读取定义和直接调用；尚需核对完整辅助链、最终平台契约、分组与截图；静态初核不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:974
- Track：src/mobile/businessComponents/Label/LabelPopup/FaceSwapLabelPopup.tsx:59

### faceswap_tag_click · 证据不足

FaceSwapLabelWrapper update 回调仅 withTrack=true 才上报 id/getLabelName(id)，然后设置标签、fetchFaceSwap、滚顶。

修正：无。
限制：已读取定义和直接调用；尚需核对完整辅助链、最终平台契约、分组与截图；静态初核不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:981
- Track：src/mobile/businessComponents/Label/FaceSwapLabelWrapper.tsx:43

### feed_guide_click · 证据不足

useExploreFilterClickGuide 仅 activeGuideAppId===appId 才发 type=hand/short_id=appId；不是任意卡片点击。

修正：无。
限制：已读取定义和直接调用；尚需核对完整辅助链、最终平台契约、分组与截图；静态初核不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:1342
- Track：src/mobile/views/AppFeed/hooks/useExploreFilterClickGuide.ts:238

### feed_guide_exposure · 证据不足

须 enabled、pending、未交互、次数未达上限、当前屏未点击/未展示、非空、延迟足够、重复率<=0.5、scroll 来源、超出已见位置、屏幕曝光就绪并有 target；状态先更新再发 type=hand/short_id。

修正：无。
限制：已读取定义和直接调用；尚需核对完整辅助链、最终平台契约、分组与截图；静态初核不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:1338
- Track：src/mobile/views/AppFeed/hooks/useExploreFilterClickGuide.ts:153

### feed_user_scroll · 证据不足

ExploreAppFeedCardWrapper handleScroll 用模块级 hasReportedExploreAllLabelScroll 去重，首次执行后发空对象并移除监听，不是每次滚动。

修正：无。
限制：已读取定义和直接调用；尚需核对完整辅助链、最终平台契约、分组与截图；静态初核不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:1346
- Track：src/mobile/views/AppFeed/components/ExploreAppFeedCardWrapper/index.tsx:478

## 第 17 组 · 本组有逐项初核结论，剩余限制见各项

### feedback_pop_click · 证据不足

仅定义空业务字段；当前无直接调用，不能声称有触发入口。

修正：无。
限制：仍需核对完整辅助链、字段运行类型、分通道契约、分组和截图；静态初核，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:1193

### feedback_pop_close · 证据不足

仅定义 origin:string；当前无直接调用，不能给出当前关闭路径。

修正：无。
限制：仍需核对完整辅助链、字段运行类型、分通道契约、分组和截图；静态初核，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:1194

### feedback_popup_button_click · 证据不足

FeedbackPopup 关闭按钮先 popStack，is_add=false；添加按钮先 goToWhatsApp、popStack，is_add=true；location1 从 props 传入。不是加 WhatsApp 成功。

修正：无。
限制：仍需核对完整辅助链、字段运行类型、分通道契约、分组和截图；静态初核，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:1224
- Track：src/mobile/views/Personal/businessComponents/FeedbackPopup/index.tsx:20
- Track：src/mobile/views/Personal/businessComponents/FeedbackPopup/index.tsx:29

### filter_apply_click · 证据不足

useExploreFilter.reportApply 接收 values/resultCount，先发 tag_name 和 result_count，只有 resultCount>0 且 optionNames 非空才继续发 filter_result_exposure；需追踪 reportApply 上游确认请求边界。

修正：无。
限制：仍需核对完整辅助链、字段运行类型、分通道契约、分组和截图；静态初核，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:1323
- Track：src/mobile/views/Discover/hooks/useExploreFilter.ts:247

### filter_delete_cancel · 证据不足

移动端取消先 popStack 后发 short_id/app_id/source=mobile；PC cancelClickFunc 发 source=web，cardData?.id 可能为空。不是删除成功。

修正：无。
限制：仍需核对完整辅助链、字段运行类型、分通道契约、分组和截图；静态初核，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:1216
- Track：src/mobile/views/AppDetail/AppDeleteConfirmPopup/index.tsx:55
- Track：src/pc/views/AiPersonalPage/components/PersonalAppCard/index.tsx:225

## 第 18 组 · 本组有逐项初核结论，剩余限制见各项

### filter_delete_click · 证据不足

三处：移动分享菜单、移动详情更多、PC卡片；在打开或排队打开确认框时发送；PC 在登录与确认流程前发送，source=mobile/web，非删除请求成功。

修正：无。
限制：仍需核对完整辅助链、字段运行类型、分通道契约、分组和截图；静态初核，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:1206
- Track：src/mobile/businessComponents/Share2AppPopup/dataProvider.tsx:587
- Track：src/mobile/views/AppDetail/AppMoreActionPopup/index.tsx:60
- Track：src/pc/views/AiPersonalPage/components/PersonalAppCard/index.tsx:192

### filter_delete_confirm · 证据不足

移动端与PC均在删除请求 finally 发送 short_id/app_id/source，因此请求失败、非0响应也发送。平台原说明与这个成功失败边界一致。

修正：无。
限制：仍需核对完整辅助链、字段运行类型、分通道契约、分组和截图；静态初核，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:1211
- Track：src/mobile/views/AppDetail/AppDeleteConfirmPopup/index.tsx:45
- Track：src/pc/views/AiPersonalPage/components/PersonalAppCard/index.tsx:215

### filter_entry_click · 证据不足

useExploreFilter 在尝试标记已读后发 tag_id=activeLabelId、tag_name，然后调用 onEntryClick，持久化异常被捕获不阻断；不表示面板成功显示。

修正：无。
限制：仍需核对完整辅助链、字段运行类型、分通道契约、分组和截图；静态初核，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:1314
- Track：src/mobile/views/Discover/hooks/useExploreFilter.ts:170

### filter_more_click · 已修正

旧UI/V2先 openStack 再发，Revamp 先翻转 isMoreOpen 再发，同一 action 包含打开和关闭的切换点击。

修正：补充准确触发边界。
限制：仍需核对完整辅助链、字段运行类型、分通道契约、分组和截图；静态初核，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:1197
- Track：src/mobile/views/AppDetail/AppDetailUI/AppDetailFormUI/Head/index.tsx:143
- Track：src/mobile/views/AppDetail/AppDetailUI/AppDetailFormUIRevamp/Head/index.tsx:31
- Track：src/mobile/views/AppDetail/AppDetailUI/AppDetailFormUIV2/Head/index.tsx:118

### filter_option_click · 证据不足

optionType 通过 TRACK_GROUP_MAP 取 group，找不到 group 则不发；option_value=optionName、tag_name=tagName，映射具体值仍待核。

修正：无。
限制：仍需核对完整辅助链、字段运行类型、分通道契约、分组和截图；静态初核，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:1318
- Track：src/mobile/views/Discover/hooks/useExploreFilter.ts:231

## 第 19 组 · 本组有逐项初核结论，剩余限制见各项

### filter_permission_entry_click · 证据不足

移动自有App分享菜单通过 isAppShareWithPermission 和 appData 门禁后发 current_status；Remix发布页按 anyone→public、其余→private 发，同步打开权限层。

修正：无。
限制：仍需核对完整辅助链、字段运行类型、分通道契约、分组和截图；静态初核，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:739
- Track：src/mobile/businessComponents/Share2AppPopup/index.tsx:125
- Track：src/mobile/views/Remix/RemixPublish/RemixFilterPermission.tsx:29

### filter_permission_popup_view · 证据不足

权限弹窗 useEffect([]) 挂载发送空对象，不是曝光比例判定。

修正：无。
限制：仍需核对完整辅助链、字段运行类型、分通道契约、分组和截图；静态初核，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:742
- makeTracker：packages/shared/handler/event/impl/exposure.ts:248
- Track：src/mobile/views/Remix/RemixPublish/RemixFilterPermissionPopup.tsx:42

### filter_permission_update · 已修正

reportPermissionUpdate 将 currentPermission??anyone 与 after 映射 public/private；会员或公开直接先报再 onSelect；非会员私密在订阅成功回调先报再 onSelect；不等待 updateAppVisibility 请求成功。分享菜单旧重复上报已注释。

修正：补充准确触发边界。
限制：仍需核对完整辅助链、字段运行类型、分通道契约、分组和截图；静态初核，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:743
- Track：src/mobile/views/Remix/RemixPublish/RemixFilterPermissionPopup.tsx:55

### filter_reset_click · 证据不足

useExploreFilter 的重置回调发送 tag_name；不表示数据请求完成，重置实际调用方待核。

修正：无。
限制：仍需核对完整辅助链、字段运行类型、分通道契约、分组和截图；静态初核，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:1327
- Track：src/mobile/views/Discover/hooks/useExploreFilter.ts:241

### filter_result_click · 证据不足

先 saveFilterAttribution；optionNames 非空才发 short_id=item.resource?.shortId||空串、option_value=optionNames；归因保存失败可能阻止后续发送。

修正：无。
限制：仍需核对完整辅助链、字段运行类型、分通道契约、分组和截图；静态初核，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:1330
- Track：src/mobile/views/Discover/hooks/useExploreFilter.ts:141

## 第 20 组 · 本组有逐项初核结论，剩余限制见各项

### follow_user_click · 证据不足

移动事件处理器和PC搜索处理器根据更新后的 followType 识别已关注才发送；is_followed_me 区分 Follower/Friends；否则发 unfollow_user_confirm_click；非所有点击都报该事件，trace_info 仅移动传。

修正：无。
限制：仍需核对完整辅助链、字段运行类型、分通道契约、分组和截图；静态初核，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:764
- Track：src/mobile/handler/event.ts:60
- Track：src/pc/views/Search/index.tsx:115

### function_click · 证据不足

两个 Studio FeatureAtom 点击处理器先 await H5Import，结果 truthy 则直接返回不报；否则上报 ability_name=type 后按能力打开对应入口，StayTuned 分支不打开页面也会报。

修正：无。
限制：仍需核对完整辅助链、字段运行类型、分通道契约、分组和截图；静态初核，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:909
- Track：src/mobile/views/Studio/businessComponents/MicroFeaturePanel/FeatureAtom/index.tsx:73
- Track：src/mobile/views/Studio/businessComponents/MicroFeaturePanel/FeatureAtomHightLight/index.tsx:32

### gallery_more_click · 证据不足

CategoryTopicBar 分 APP/V​IDEO，先 openStack 再发送 gallery_id；APP 可为 generatevideo/app，VIDEO 为 video；不表示内容请求成功。

修正：无。
限制：仍需核对完整辅助链、字段运行类型、分通道契约、分组和截图；静态初核，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:912
- Track：src/mobile/views/Studio/businessComponents/CategoryTopicBarWrapper/CategoryTopicBar/index.tsx:35
- Track：src/mobile/views/Studio/businessComponents/CategoryTopicBarWrapper/CategoryTopicBar/index.tsx:45

### gender_detect_trigger · 已修正

同一 action 包含两个阶段：beginImage 建立 pending 记录后只发 filter_mode；completeImage 校验 version/round/pageEpoch/key 丢弃迟到结果后，仅 trackGenderResult 非空再发 image_gender_result。不可把两次计数当两次检测。

修正：补充准确触发边界。
限制：仍需核对完整辅助链、字段运行类型、分通道契约、分组和截图；静态初核，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:473
- Track：src/mobile/views/AppDetail/handle/GenderCheckContext.tsx:248
- Track：src/mobile/views/AppDetail/handle/GenderCheckContext.tsx:304

### gender_mismatch_bubble_show · 证据不足

GenderCheckContext 的 effect 要求 visibleWarningKey 非空才发 filter_mode；实际警告计算和 effect 依赖尚待完整核查。

修正：无。
限制：仍需核对完整辅助链、字段运行类型、分通道契约、分组和截图；静态初核，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:477
- Track：src/mobile/views/AppDetail/handle/GenderCheckContext.tsx:423

## 第 21 组 · 本组有逐项初核结论，剩余限制见各项

### generate_button_click · 证据不足

四个调用点已区分：Chatbot 两条路径在积分检查前上报；ExposureAppGenerateClick 先从 props 移除 task_id/is_search/appCategory，展开 trace_info→searchParams→rest，credit/multiple 用 ||1（0 也变1），build 页面不发送 app_category。PC AccountEvent 为请求拦截路径，legacy 将 appId 改为 app_id，生成 generateid、补 current_tab/来源/搜索字段；不能把辅助输入作为最终 payload 字段。

修正：无，保留源码原始行为。
限制：尚需逐个检查 ExposureAppGenerateClick 上游和 legacy 公共默认转换，不能认定所有字段齐全；未验证生产上报、最终截图和全部分通道模拟payload。

- makeTracker：packages/shared/handler/event/impl/action.ts:151
- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:258
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:11
- Track：packages/chatbot/hooks/useChatbotGenerate.ts:97
- Track：packages/chatbot/shared/utils/index.ts:276
- Track：packages/shared/handler/event/utils/exposure.ts:197
- loggingEvent：packages/shared/utils/event/nonBussiness/AccountEvent.ts:120

### generate_failure · 证据不足

23个直接调用覆盖任务创建前校验失败、异常捕获及 socket 任务后失败；task_period 区分 before_task/after_task，failure_reason 可为固定字符串、API消息或异常 message。字段因路径而异，部分 app_id 可为 undefined；不能用一个失败原因枚举代表全部路径。

修正：无，保留源码原始行为。
限制：尚未逐一完成23处外围条件、动态展开与异常类型核实；未验证生产上报、最终截图和全部分通道模拟payload。

- makeTracker：packages/shared/handler/event/impl/action.ts:940
- Track：packages/chatbot/hooks/useChatbotGenerate.ts:196
- Track：packages/shared/handler/socket/init.ts:66
- Track：packages/shared/handler/task/useTaskSocket.ts:285
- Track：src/mobile/hooks/useHandelGenerate.ts:159
- Track：src/mobile/hooks/useHandelGenerate.ts:244
- Track：src/mobile/hooks/useHandelGenerate.ts:316
- Track：src/mobile/hooks/useHandelGenerate.ts:439
- Track：src/mobile/views/AiBackground/Editor/index.tsx:125
- Track：src/mobile/views/AiBackground/Editor/index.tsx:175
- Track：src/mobile/views/AppDetail/AppDetailUI/GenerateBtn/index.tsx:267
- Track：src/mobile/views/Faceswap/FaceSwapDetail/FaceSwapGeneratePopup.tsx:49
- Track：src/mobile/views/Faceswap/FaceSwapDetail/FaceSwapGeneratePopup.tsx:78
- Track：src/mobile/views/Faceswap/FaceSwapDetail/hook/useFaceSwapDetailControl.ts:68
- Track：src/mobile/views/ImageEditor/index.tsx:69
- Track：src/pc/components/business/ContrastCard/QuickSamePopup/index.tsx:230
- Track：src/pc/components/business/ContrastCard/QuickSamePopup/index.tsx:269
- Track：src/pc/components/business/ContrastCard/QuickSamePopup/index.tsx:281
- Track：src/pc/components/business/ContrastCard/QuickSamePopup/index.tsx:309
- Track：src/pc/views/App/AppDetailV2/components/DetailConsForm/index.tsx:159
- Track：src/pc/views/App/AppDetailV2/components/DetailConsForm/index.tsx:179
- Track：src/pc/views/App/AppDetailV2/components/DetailConsForm/index.tsx:240
- Track：src/pc/views/App/AppDetailV2/hook/useConsGenerate.ts:212
- Track：src/pc/views/App/AppDetailV2/hook/useConsGenerate.ts:243

### generate_intention · 证据不足

25个调用入口涉及 Chatbot、原子能力、裁剪/文字、滤镜、视频和结果重生成；这是意图入口集合，不等同实际生成请求已发出。已保留逐调用源码和展开证据。

修正：无，保留源码原始行为。
限制：25处的入口门禁、成功失败边界及所有展开仍需逐一核实，不标通过；未验证生产上报、最终截图和全部分通道模拟payload。

- makeTracker：packages/shared/handler/event/impl/action.ts:1378
- Track：packages/chatbot/mobile/views/ChatbotDetailPopup/hooks/useImageGenerateActions.ts:36
- Track：packages/chatbot/mobile/views/ChatbotDetailPopup/SendPhotoEntry.tsx:25
- Track：packages/chatbot/shared/components/ChatbotImageMessage/hook.tsx:192
- Track：src/mobile/businessComponents/AtomicIntroduce/index.tsx:66
- Track：src/mobile/hooks/useAppCardActions.ts:184
- Track：src/mobile/views/AppDetail/AppDetailUI/GenerateBtn/index.tsx:231
- Track：src/mobile/views/DressUp/DressUpCardWrapper/DressUpCard/index.tsx:94
- Track：src/mobile/views/EditImageView/CropView/index.tsx:83
- Track：src/mobile/views/EditImageView/TextView/index.tsx:56
- Track：src/mobile/views/IDPhoto/IDPhotoCardWrapper/IDPhotoCard/index.tsx:91
- Track：src/mobile/views/Remix/RemixContent/components/CreateFooter/index.tsx:85
- Track：src/mobile/views/Studio/businessComponents/MicroFeaturePanel/FeatureAtom/index.tsx:122
- Track：src/mobile/views/Task/components/AlbumPopup/TabItem/index.tsx:202
- Track：src/mobile/views/Task/components/AlbumPopup/TabItem/index.tsx:275
- Track：src/mobile/views/Task/components/CustomFilterPopup/index.tsx:95
- Track：src/mobile/views/Task/components/FilterPopup/TabItem/index.tsx:201
- Track：src/mobile/views/Task/components/VideoPopup/AiVideoFrom/index.tsx:111
- Track：src/mobile/views/Task/components/VideoResolutionPopup/index.tsx:46
- Track：src/mobile/views/Task/TaskBottom/index.tsx:516
- Track：src/mobile/views/Task/TaskBottom/index.tsx:582
- Track：src/mobile/views/Task/TaskBottom/index.tsx:596
- Track：src/mobile/views/Task/TaskBottom/index.tsx:614
- Track：src/mobile/views/Task/TaskBottom/index.tsx:632
- Track：src/mobile/views/Task/TaskBottom/index.tsx:647
- Track：src/mobile/views/Task/TaskBottom/index.tsx:779

### generate_minimize_click · 确认代码存在差异

五处调用已读：通常先关闭结果层，再记录最小化；TaskResult 视频换脸用 app_id=faceswap 并单独传 template_video_id，其余取图片 App ID。ImageEditor 原子图片编辑路径固定 object_type=video，与图片能力语义不一致；generate_location 取 recorder.isRegenerate，初始值为空字符串但声明仅 create/recreate。平台现有字段说明已记录这两项差异。

修正：无，保留源码原始行为。
限制：动态 type 对应媒体的运行实例和页面可达性仍待验证；不自动修改原始值或正式契约；未验证生产上报、最终截图和全部分通道模拟payload。

- makeTracker：packages/shared/handler/event/impl/action.ts:426
- Track：src/mobile/views/AiBackground/Result/index.tsx:100
- Track：src/mobile/views/AppDetail/EmojiAppResult/index.tsx:108
- Track：src/mobile/views/ImageEditor/index.tsx:161
- Track：src/mobile/views/Task/TaskResult/index.tsx:130
- Track：src/mobile/views/Task/TaskResult/index.tsx:139

### generate_picture_expose · 已修正

ChatbotDetailPopup→ColumnVirtualList→useExporsusor→trackChatbotMessageExposure：按 message.id 筛出 Thumbnail，每条符合条件的消息发一次 location1=chatbot/location2=chatbot_view_message；新建会话条件追加 scenario。默认比例>=0.3；每2秒检查停留>400ms，离开时>1000ms也可进入待发集合，卸载执行 claimExp。sended Set 仅当前 hook 生命周期去重，重新挂载可重报；无 picture_id 业务字段。

修正：补充曝光比例、批量检查、离开/卸载与生命周期去重边界。
限制：IntersectionObserver 与真实滚动时序、重挂载和网络发送未运行取证；未验证生产上报、最终截图和全部分通道模拟payload。

- makeTracker：packages/shared/handler/event/impl/action.ts:193
- Track：packages/chatbot/mobile/views/ChatbotDetailPopup/utils/messageExposure.ts:27

## 第 22 组 · 本组有逐项初核结论，剩余限制见各项

### generate_pop_close · 证据不足

CreateFooter 将 handleClose 传为 RemixFormPopup.onClose；回调可选滚动1000，再发 state.appId/state.shortId/getFilterLevel(state.buildData)。需要确认弹窗 onClose 的所有触发来源，不等同仅点击X。

修正：无。
限制：动态输入类型、全部辅助链、最终契约、分组及界面截图仍待核实；不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:713
- Track：src/mobile/views/Remix/RemixContent/components/CreateFooter/index.tsx:61

### generate_success · 证据不足

三处 typed 调用：旧 generate_image socket 在 res.code===0 且 build 页面发，早于图片预加载完成，音频失败也不阻断；新 task socket 在 state===10 且 isGenerateTaskType 时发。新路径组装 generateSuccessInfo，从 traceId recorder 读取场景和多个字段；app_category 在 build 页面省略、其他页面映射兜底。未证明 UI 展示完成。

修正：无。
限制：动态输入类型、全部辅助链、最终契约、分组及界面截图仍待核实；不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:198
- Track：packages/shared/handler/socket/init.ts:93
- Track：packages/shared/handler/socket/init.ts:107
- Track：packages/shared/handler/task/useTaskSocket.ts:399

### generate_video_result_check · 证据不足

通知按钮停止冒泡，设置当前任务，必要时500ms后打开TaskView，关闭通知后发送 task_id=notifyTask.id。事件发生时目标页可能尚未打开，不是结果加载成功。

修正：无。
限制：动态输入类型、全部辅助链、最终契约、分组及界面截图仍待核实；不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:1003
- Track：src/mobile/businessComponents/TaskCompleteNotify/index.tsx:57

### generate_video_result_show · 已修正

TaskCompleteNotify effect 依赖 notifyTask.appId/images，优先取图片 appInfo.shortId，回退 notifyTask.appId；有ID就发。该 effect 位于 notifyVisible/积分提示/订阅引导/签到遮挡的 return null 判断之前，因此不可将它当作通知实际可见曝光，app_id 也可能是短ID。

修正：改正实际可见曝光和ID含义的说明。
限制：动态输入类型、全部辅助链、最终契约、分组及界面截图仍待核实；不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:1006
- Track：src/mobile/businessComponents/TaskCompleteNotify/index.tsx:38

### google_login_error · 证据不足

仅 Android 分支注册 window.handleAPPGoogleSignInError，原样把 Native error 回调值作为 error_message；不是所有 Google Web SDK/API 登录错误都会报。回调未做字符串规范化，真实类型待 Native 取证。

修正：无。
限制：动态输入类型、全部辅助链、最终契约、分组及界面截图仍待核实；不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/action.ts:1288
- Track：src/mobile/hooks/useGoogleLoginhandler.ts:114

## 第 23 组 · 本组有逐项初核结论，剩余限制见各项

### group_photo_mask_click · 证据不足

MobileCoverSelector 找到 nodeId 后先更新选中状态并调用 onSelect，再发送 location=provider.origin、masksort=node.position；as number 是类型断言而非运行时转换。初始化默认选中不发送。

修正：无。
限制：各 provider 的 origin 和节点位置完整来源、可点击区域仍需逐一核实；静态核查，不代表生产上报验证；完整分组、截图及运行时 payload 尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:1372
- Track：src/mobile/views/AppDetail/AppForm/GroupPhotoItem/MobileCoverSelector/index.tsx:90

### history_click · 证据不足

两处调用：滑动回调要求 fromSelf.current 且索引对应图片存在；点击要求目标 taskImageKey 不等于当前值。发送后再更新当前任务，origin=tasklist/result，method=swipe/click。

修正：无。
限制：手势 fromSelf 的完整写入链及最终模拟 payload 仍需核实；静态核查，不代表生产上报验证；完整分组、截图及运行时 payload 尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:905
- Track：src/mobile/views/Task/index.tsx:416
- Track：src/mobile/views/Tasks/TaskQueueHorizon/useTaskQueueCommon.ts:47

### home_click_tag · 证据不足

社区与发现标签选择只在 withTrack 为真时发送，分别 current_tab=post/explore；tag_name 来自 getLabelName(key)，tag_id 原样为 key。传 false 的初始化不会发送。

修正：无。
限制：所有选择调用方和标签名缺失回退仍待核实；静态核查，不代表生产上报验证；完整分组、截图及运行时 payload 尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:988
- Track：src/mobile/views/community/context/postLabelPopupContext.tsx:44
- Track：src/mobile/views/Discover/context/creatorLabelPopupContext.tsx:156

### image_change_click · 证据不足

Remix handleOpenEditPop 在打开 editReference 前发送；calcuType 依次判断 groupPhoto→groupphoto、数字 position→presetphoto，否则 reference，app_id=build store appId。不是替换完成。

修正：无。
限制：表单 store 的 appId 和所有入口可达性待核实；静态核查，不代表生产上报验证；完整分组、截图及运行时 payload 尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:593
- Track：src/mobile/views/Remix/RemixContent/components/RemixEditArea/index.tsx:126

### image_delete_click · 证据不足

5处调用均在确认框前发送。上传历史为 upload_image/generate_popup；任务与分享结果为 result_image/tasklist；草稿为 result_image/profile 且要求选择非空。封面图或缺少任务等校验可在点击已发送后拦截删除。

修正：无。
限制：全部删除入口对应界面与最终 payload 待验证；静态核查，不代表生产上报验证；完整分组、截图及运行时 payload 尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:465
- Track：src/mobile/businessComponents/Share2AppPopup/dataProvider.tsx:522
- Track：src/mobile/views/AppDetail/AppForm/ControlNetItem/HistoryList.tsx:156
- Track：src/mobile/views/AppDetail/AppForm/RevampControlNetItem/index.tsx:208
- Track：src/mobile/views/Personal/businessComponents/Drafts/index.tsx:205
- Track：src/mobile/views/Tasks/TaskOperationPopup/index.tsx:30

## 第 24 组 · 本组有逐项初核结论，剩余限制见各项

### image_delete_enter · 证据不足

3处在 onPointerDown 辅助函数回调中发送，上传历史和 Revamp 为 upload_image/generate_popup，草稿为 result_image/profile；并非每次指针按下即发送。

修正：无。
限制：长按辅助函数的时间阈值、移动取消与禁用条件待逐项追踪；静态核查，不代表生产上报验证；完整分组、截图及运行时 payload 尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:461
- Track：src/mobile/views/AppDetail/AppForm/ControlNetItem/HistoryList.tsx:203
- Track：src/mobile/views/AppDetail/AppForm/RevampControlNetItem/index.tsx:267
- Track：src/mobile/views/Personal/businessComponents/Drafts/index.tsx:183

### image_delete_success · 证据不足

4处调用来自 useTasks.deleteImages 或 ImageHistory.deleteImageHistory 的成功回调；均要求 API res.code===0 并先更新本地列表。上传历史还在表单节点/性别检测更新后发送，期间异常会阻止事件。草稿删除的成功回调没有该事件。

修正：无。
限制：最终接口响应与所有节点更新异常路径待运行验证；静态核查，不代表生产上报验证；完整分组、截图及运行时 payload 尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:469
- Track：src/mobile/businessComponents/Share2AppPopup/dataProvider.tsx:564
- Track：src/mobile/views/AppDetail/AppForm/ControlNetItem/HistoryList.tsx:180
- Track：src/mobile/views/AppDetail/AppForm/RevampControlNetItem/index.tsx:246
- Track：src/mobile/views/Tasks/TaskOperationPopup/index.tsx:59

### image_download · 证据不足

当前3处调用均为 legacy。服务层在下载计数 PATCH 前发送；PC历史启动图片/视频下载后发送，不等待保存成功。转换器只用 data.pic_id 生成 image_id 和 pic_id，app_id 缺省空串、app_category 缺省 OTHER、is_ai_video 真值时展开。typed 定义暂无直接调用，image_id 支持 string|string[]，不可强制统一为数组。

修正：无。
限制：单次缓存数据的展开覆盖、下载辅助函数与分通道模拟 payload 仍待完整核对；静态核查，不代表生产上报验证；完整分组、截图及运行时 payload 尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:314
- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:323
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:15
- loggingEvent：packages/shared/service/work/index.ts:51
- loggingEvent：src/pc/views/App/AppDetailV2/components/HistoryButton/GenHistory/index.tsx:188
- loggingEvent：src/pc/views/App/AppDetailV2/components/HistoryButton/GenHistory/index.tsx:223

### image_input_view · 已修正

三处调用：图片编辑器和作品详情在 bool=true 回调发送；任务页 effect 在 isPreview&&currentImage 时发送，依赖 currentImage/inTask/isPreview，预览中换图也会再次发送。编辑器 app_id 取 type（能力值），image_id 可回退空串，与详情/任务的资源App ID语义不同。

修正：修正触发说明，明确 effect 可重复与 app_id 来源差异。
限制：任务手势阈值与 Native 门控完整链、截图与 payload 尚待验证；静态核查，不代表生产上报验证；完整分组、截图及运行时 payload 尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:968
- Track：src/mobile/views/ImageEditor/index.tsx:249
- Track：src/mobile/views/PostDetail/PostImageWrapper/index.tsx:253
- Track：src/mobile/views/Task/index.tsx:229

### image_pop_direct_close · 确认代码存在差异

两处边界不同。RemixEditArea 仅 REF_CHANGE===null 时发送并在该分支清理；EditReferencePopup 修改时写 true，可能残留。标记 deprecated 的 EditGroupphotoPopup 用 if(hasBehavior) 判断 useRef 对象而非 .current，因此处理函数执行时恒为真，且实际 popStack 已注释；全仓未找到组件使用，Popup枚举已注释，不能当作当前正常关闭路径。

修正：修正平台统一的“未改图关闭”说明，区分缓存分支与历史代码问题。
限制：旧组件运行可达性未证实；不修改前端代码或原始契约；静态核查，不代表生产上报验证；完整分组、截图及运行时 payload 尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:597
- Track：src/mobile/views/Remix/components/EditGroupphotoPopup/index.tsx:157
- Track：src/mobile/views/Remix/RemixContent/components/RemixEditArea/index.tsx:119

## 第 25 组 · 本组有逐项初核结论，剩余限制见各项

### image_upload_click · 证据不足

typed Remix发送 origin=remix/filter_level/trace_info；ExposureImageUploadClick 经legacy传 appId/search等内部参数，switch 转换为 app_id/user_type/trace_info/user_scene/ability_name，并按 search 展开搜索字段。unusedPopups有旧调用，不能把内部 appId 当最终 key。

修正：无。
限制：七处包装调用方的完整入口及失效页面仍需逐一核实；静态核查，不代表生产上报验证；完整分组、截图及运行时 payload 尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:601
- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:700
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:97
- loggingEvent：packages/shared/handler/event/utils/exposure.ts:309
- loggingEvent：src/mobile/_unusedPopups/CNetHistoryPanel/ControlNetItemComp/index.tsx:163
- Track：src/mobile/views/Remix/RemixContent/components/GenerateForm/index.tsx:120

### image_upload_front · 已修正

该事件包含成功。reference/upload在格式、体积预检及上传结果发送，failure_reason 可为 success、错误消息或上传过程异常；详细结果先onSuccess再发送，旧tuple分支顺序相反。合照人数不足另发GROUPPHOTO_NUMBER_ERROR。PC无onUploadResult时legacy输出file_path等；successCode严格===0，否则duplicate。

修正：补充 success 有效值及回调异常、PC通道差异说明。
限制：9处调用的全部上游参数、最终契约和真实回调顺序尚需验证；静态核查，不代表生产上报验证；完整分组、截图及运行时 payload 尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:606
- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:713
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:98
- Track：packages/shared/hooks/build/form/useGroupPhoto.ts:88
- loggingEvent：packages/shared/utils/build/component/controlnet/upload.ts:131
- Track：packages/shared/utils/build/component/reference/upload.ts:31
- Track：packages/shared/utils/build/component/reference/upload.ts:42
- Track：packages/shared/utils/build/component/reference/upload.ts:80
- Track：packages/shared/utils/build/component/reference/upload.ts:87
- Track：packages/shared/utils/build/component/reference/upload.ts:97
- Track：packages/shared/utils/build/component/reference/upload.ts:107
- Track：src/mobile/views/Remix/RemixContent/components/GenerateForm/index.tsx:126

### image_upload_result · 证据不足

ExposureImageUploadResult 将 boolean success 映射为 success/failure；search真时展开search_content/search_id/search_method。已核对最终平台fieldMeta和action wireContract均保留这3个条件字段及共同出现约束，未用仅扫描的6字段清单覆盖。Revamp有uploadContext存在门控且imageId缺省空串。

修正：无。
限制：其余包装调用方及上传完成时机尚需完整核实；不能统一宣称事件先于写表单；静态核查，不代表生产上报验证；完整分组、截图及运行时 payload 尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:612
- Track：packages/shared/handler/event/utils/exposure.ts:338

### interest_tag · 证据不足

全仓检索仅action.ts定义，未发现直接调用。source枚举ad/share/direct；tagList为含tag_id/tag_name的对象数组，保留camelCase原始key，不因规范建议改名。

修正：无。
限制：无调用证据，不能验证触发、字段实值或生产仍在上报；静态核查，不代表生产上报验证；完整分组、截图及运行时 payload 尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:861

### invite_award_button_click · 证据不足

InviteEntryWidget.handleOpen 发送空业务字段后打开 DailyTask invite 页签；有待领积分及角色时带inviteRewardRole。组件eligible包含实验组、登录、非VIP、注册满24小时及未dismiss等条件，不能当作奖励领取成功。

修正：无。
限制：组件全部渲染门控与实验配置运行取值待核实；静态核查，不代表生产上报验证；完整分组、截图及运行时 payload 尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:138
- Track：src/mobile/views/Discover/components/InviteEntryWidget/index.tsx:73

## 第 26 组 · 本组有逐项初核结论，剩余限制见各项

### invite_button_click · 证据不足

InviteActivityPanel邀请按钮点击先发送空业务字段，再调用shareInvitationPage，shareWay=poster/scene=SHARE_FISSION_PHASE；不等待分享弹窗或分享成功。

修正：无。
限制：分享辅助函数失败路径及界面证据待核实；静态核查，不代表生产上报验证；完整分组、截图及运行时 payload 尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:139
- Track：src/mobile/views/DailyTask/components/InviteActivityPanel/index.tsx:126

### invite_popup_click · 证据不足

ShareOPItem点击需detailData.type=invitation、scene=SHARE_FISSION_PHASE且映射存在才发送。button_detail映射WhatsApp/Instagram/Facebook/TikTok/Telegram/Messenger/More/Copy link，之后才进行token处理和data.onclick；不是分享成功。

修正：无。
限制：分享配置可见性、节流调用与真实Native结果待核实；静态核查，不代表生产上报验证；完整分组、截图及运行时 payload 尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:140
- Track：src/mobile/businessComponents/Share2AppPopup/ShareItem/index.tsx:85

### is_read · 已修正

4种调用：like_guide_bubble 点击继续；like_botton_bubble在符合local/remote条件并setShowBubble(true)后立即发送，5秒后才写已读状态；like_tabbar_point切换Like页签且红点/气泡存在；cutout_new通过积分/并发门控且此前未读时发送。gen_video_new仅定义未见调用，保留botton拼写。

修正：修正“用户看过后统一标已读”说明，区分展示、点击和开始抠图阶段。
限制：气泡可见性、effect重复执行和真实UI停留尚未运行验证；静态核查，不代表生产上报验证；完整分组、截图及运行时 payload 尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:1133
- Track：src/mobile/hooks/useLikeGuideBubbleLogic.ts:46
- Track：src/mobile/hooks/useLikeRedDotLogic.ts:79
- Track：src/mobile/views/Discover/index.tsx:272
- Track：src/mobile/views/Tasks/hooks/useTaskAction.ts:191

### join_topic · 证据不足

TopicDetail.onJoin先发送topic_id=topicId??空串，再打开TopicApp；不是加入请求成功。保留必填string，不自动禁止源码允许的空串。

修正：无。
限制：路由topicId与TopicApp后续流程、界面证据待核实；静态核查，不代表生产上报验证；完整分组、截图及运行时 payload 尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:363
- Track：src/mobile/views/Topic/TopicDetail/index.tsx:115

### language_change · 证据不足

handelSelectedLanguage先捕获langPrefix，再changeLanguageUrl(pushState)，随后发送before_language=旧prefix映射或空串、after_language=目标route映射或默认语言；再写本地、通知Android并reload。未比较新旧值，不能认定实际切换成功或事件已送达。

修正：无。
限制：类型断言as any无运行校验，reload前发送可靠性及所有选择调用方待验证；静态核查，不代表生产上报验证；完整分组、截图及运行时 payload 尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:364
- Track：packages/shared/utils/i18n/change.ts:15

## 第 27 组 · 本组有逐项初核结论，剩余限制见各项

### leavea_ctivity_banner · 证据不足

DefaultHero返回操作先发送空对象，再清理弹窗栈并landingBack；保留原始leavea_ctivity拼写，不代表导航成功。

修正：无。
限制：活动模板真实入口、返回辅助函数和最终契约待核实；静态核查，不代表生产上报验证；完整分组、截图及运行时 payload 尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:542
- Track：src/mobile/views/Remix/components/ActivityTemplate/components/DefaultHero/index.tsx:19

### like · 证据不足

直接调用3处但有事件总线间接来源。ExposureAppLike先展开params，再回退trace_info，最后展开搜索字段；移动端Post/App监听按isLiked发送state=1/-1。PC App详情先乐观更新，postPublicationFavorite promise resolve后发送，reject回滚；不能把所有点赞统一当点击即发送。定义state写成表达式1|-1，扫描仅列1而调用有-1，保留原始证据，枚举语义不能仅依赖扫描。

修正：无。
限制：移动端十余处emit来源与接口非零码处理、最终枚举和payload尚需完整核实；静态核查，不代表生产上报验证；完整分组、截图及运行时 payload 尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:348
- Track：packages/shared/handler/event/utils/exposure.ts:293
- Track：src/mobile/handler/event.ts:11
- Track：src/pc/store/AiAppDetailV2/appDetailStore.ts:192

### list_feedback_click · 证据不足

PersonalSetting的Label.Feedback分支先发送空对象，再openLink(FEEDBACK_QUESTIONNAIRE_URL)，不是反馈提交或问卷加载成功。

修正：无。
限制：问卷配置、openLink平台差异和截图待核实；静态核查，不代表生产上报验证；完整分组、截图及运行时 payload 尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:1222
- Track：src/mobile/views/Personal/businessComponents/PersonalSetting/index.tsx:80

### message_button_click · 证据不足

MessageEntrance.handleOpenMessageList先发送non_read_num=客户端store.unReadCount快照，再openStack MessageList；无未读也可点击，展示99+不改变发送值。

修正：无。
限制：未读store完整更新链与真实页面入口待验证；静态核查，不代表生产上报验证；完整分组、截图及运行时 payload 尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:827
- Track：src/mobile/views/Message/businessComponents/MessageEntrance/index.tsx:23

### message_tabbar_click · 已修正

切换分类先设置当前索引和tab；config.hasCount由旧render中unreadCounts>0捕获，清零后发送is_read=!hasCount。true表示切换前没有未读，false表示切换前有未读，不是本次清零后的状态；定义boolean，扫描mixed来自动态取值。

修正：明确is_read取反方向及切换前快照。
限制：全部消息计数来源、最终契约bool/mixed显示与真实socket数据待核实；静态核查，不代表生产上报验证；完整分组、截图及运行时 payload 尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:830
- Track：src/mobile/views/Message/MessageList.tsx:137

## 第 28 组 · 本组有逐项初核结论，剩余限制见各项

### mute_button_click · 证据不足

3处消费者均将isMute映射mute/non-mute。共享视频控制器toggleMute修改muted后回调；handlePlayPause在暂停转播放且isMuted时也回调false，故自动恢复声音也发送，不仅静音按钮。

修正：无。
限制：播放器渲染及浏览器播放失败与静音状态同步待运行验证；静态核查，不代表生产上报验证；完整分组、截图及运行时 payload 尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:887
- Track：src/mobile/views/AppDetail/AppDetailUI/AppDetailFullVideoUI/index.tsx:129
- Track：src/mobile/views/Faceswap/FaceSwapDetail/index.tsx:136
- Track：src/mobile/views/Faceswap/FaceSwapDetailList/index.tsx:209

### new_message_click · 证据不足

All/Comment/Follower/Like四处ToastMessage点击：先handleRefreshAndToTop平滑滚动并refreshing(true)，不await，再发送对应All/comments/followers/likes；不代表刷新请求成功。

修正：无。
限制：Toast可见门控与刷新失败、截图待核实；静态核查，不代表生产上报验证；完整分组、截图及运行时 payload 尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:834
- Track：src/mobile/views/Message/components/All/index.tsx:56
- Track：src/mobile/views/Message/components/Comment/index.tsx:56
- Track：src/mobile/views/Message/components/Follower/index.tsx:55
- Track：src/mobile/views/Message/components/Like/index.tsx:54

### onboarding_start · 已修正

useGolbalLoading effect在游客能力可用、登录状态为Success或Init、用户类型非UNKNOWN、Android后按ref去重发送。发送早于userId/isShowOnboarding就绪检查及最终展示决定，后端不展示或打开失败也可已发送；非欢迎页曝光。

修正：新增资格初判阶段说明，区分实际欢迎页挂载。
限制：实验、marketing锁、生命周期去重与运行环境待验证；静态核查，不代表生产上报验证；完整分组、截图及运行时 payload 尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:1188
- Track：src/mobile/hooks/useGolbalLoading.ts:136

### onboarding_wait_start · 证据不足

startUserIdTimeout在startTimeRef为null首次记录起点并发送location1=onboarding，后续重建timer不重复。剩余超时按初始时间扣减，到期发skip_button_click(time_out)，不是所有初始化都发送。

修正：无。
限制：所有startUserIdTimeout调用条件和组件重挂载待核实；静态核查，不代表生产上报验证；完整分组、截图及运行时 payload 尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:1185
- Track：src/mobile/hooks/useGolbalLoading.ts:93

### onboarding_welcome_button_click · 证据不足

欢迎页按钮先发空对象，再openStack AppPurchasePageOnboarding并启动隐藏兜底；shouldGenerate=false，不代表支付成功或生成开始。

修正：无。
限制：按钮全部门控和异步弹窗打开结果待验证；静态核查，不代表生产上报验证；完整分组、截图及运行时 payload 尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:1192
- Track：src/mobile/views/Onborading/WelcomePage/index.tsx:176

## 第 29 组 · 本组有逐项初核结论，剩余限制见各项

### onboarding_welcome_popup · 证据不足

WelcomePage useMount发送空对象后markNewHomeMountReady；清理隐藏定时器。表示组件挂载，未实现可见比例/停留时间校验，不等于用户看到完整内容。

修正：无。
限制：遮挡、挂载重复和截图待运行取证；静态核查，不代表生产上报验证；完整分组、截图及运行时 payload 尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:1191
- Track：src/mobile/views/Onborading/WelcomePage/index.tsx:137

### onerway_cancel_popup_button_click · 已修正

同名action不同边界：移动/PC PaymentFAQ在await patchRestorePlan后的try/catch之外发送，失败返回码及抛错也可计数；API页仅res.code==0并fetchProperty调用后发送，失败return或catch不发。product_type为priceId按连字符首段、period辅助函数、source_type区分pricing_toC/pricing_api。

修正：补充分入口成功/失败差异，不能统一当取消成功。
限制：计费周期辅助链和请求实际行为待核实；不改正式契约；静态核查，不代表生产上报验证；完整分组、截图及运行时 payload 尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:898
- Track：src/mobile/components/Payment/PaymentFAQ/index.tsx:47
- Track：src/pc/components/business/Payment/FAQ/index.tsx:47
- Track：src/pc/views/API/index.tsx:1170

### onerway_cancel_subscribe_entrance_click · 证据不足

移动/PC FAQ要求currentBilling存在，API页要求endDate存在；发送产品、周期、source_type后才打开确认框。不是取消请求已执行，原始onerway拼写保留。

修正：无。
限制：currentChannelPriceId和period空值及正式枚举待核实；静态核查，不代表生产上报验证；完整分组、截图及运行时 payload 尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:893
- Track：src/mobile/components/Payment/PaymentFAQ/index.tsx:56
- Track：src/pc/components/business/Payment/FAQ/index.tsx:56
- Track：src/pc/views/API/index.tsx:1155

### open_a1 · 证据不足

bootstrap初始化和visibility恢复调用ExposureA1Open，先resetTime并取page快照；非Android立即发送，Android有DEVICE_ID立即发，缺ID则5秒后发送旧page快照，不会在timer再次检查ID。

修正：无。
限制：页面公共信封注入与后台/多timer重复时序待验证；静态核查，不代表生产上报验证；完整分组、截图及运行时 payload 尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:1347
- Track：packages/shared/handler/event/utils/exposure.ts:391

### others_filters_click · 证据不足

TaskBottom打开面板且此前openPopup===undefined、showTrack=true、value=filter或album才发送user_scene；关闭已有面板、background或showTrack=false不发送。

修正：无。
限制：面板当前产品入口及getImageUserScene回退待核实；静态核查，不代表生产上报验证；完整分组、截图及运行时 payload 尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:1027
- Track：src/mobile/views/Task/TaskBottom/index.tsx:757

## 第 30 组 · 本组有逐项初核结论，剩余限制见各项

### others_filters_customize · 证据不足

FilterPopup自定义先openStack再发送。Album路径有图片时await handleGenerate后才到该事件；需新图时注册文件选择异步回调后即发送，选图取消仍可能计数。不是两条路径均只打开自定义弹窗。

修正：无。
限制：Album handleGenerate真值含义和文件选择失败路径待核实；静态核查，不代表生产上报验证；完整分组、截图及运行时 payload 尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:1030
- Track：src/mobile/views/Task/components/AlbumPopup/TabItem/index.tsx:263
- Track：src/mobile/views/Task/components/FilterPopup/TabItem/index.tsx:189

### others_filters_customize_generate · 证据不足

Album两处仅await handleGenerate返回truthy时发送user_scene=dress_up；CustomFilterPopup调用handleGenerateFunc不await，重置表单后发送trackParam.user_scene。不能统一当生成成功，甚至请求接收成功边界也不相同。

修正：无。
限制：handleGenerate完整返回值与生成前门控、正式枚举待核实；静态核查，不代表生产上报验证；完整分组、截图及运行时 payload 尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:1033
- Track：src/mobile/views/Task/components/AlbumPopup/TabItem/index.tsx:219
- Track：src/mobile/views/Task/components/AlbumPopup/TabItem/index.tsx:241
- Track：src/mobile/views/Task/components/CustomFilterPopup/index.tsx:109

### page_change · 证据不足

RecommendPageManager.exposure用floor((now-time)/1000)计算秒并重置time；包装器将refer_stay_time字符串化，leave时把当前page转refer并清空page，last分支覆盖refer；app_id仅新page为app_detail/app_detail_popup时取lastClickedAppId否则空串。

修正：无。
限制：所有页面栈事件和可见性入口、公共字段排除与最终payload待核实；静态核查，不代表生产上报验证；完整分组、截图及运行时 payload 尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:1291
- Track：packages/shared/handler/event/utils/exposure.ts:378

### point_icon_button_click · 证据不足

HeaderRight先openStack DailyTask再发送空对象；待领取积分且有角色时带initialTab=credits和inviteRewardRole，否则默认页。不是领取积分成功。

修正：无。
限制：Header全入口门控及openStack异常路径待核实；静态核查，不代表生产上报验证；完整分组、截图及运行时 payload 尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:924
- Track：src/mobile/businessComponents/Header/HeaderRight/index.tsx:241

### post_button_click · 已修正

移动PostEditor在useEffect([])里getTopicIdByImages resolve后发送，并非发布按钮onPost；PC usePostPublish先isPosting防重、查询topic后发送再打开编辑弹窗。topic_id无话题为no_topic，否则ID数组；请求reject不发送，PC可能保留isPosting锁。

修正：明确进入发布编辑流程的触发及topic查询前置，不是发布成功。
限制：postInfo/appInfo空值、锁复位失败和最终mixed契约待核实；静态核查，不代表生产上报验证；完整分组、截图及运行时 payload 尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:328
- Track：src/mobile/views/PostEditor/index.tsx:174
- Track：src/pc/views/Post/hooks/usePostPublish.tsx:48

## 第 31 组 · 本组有逐项初核结论，剩余限制见各项

### post_success · 证据不足

移动与PC均在postPublish返回code===0后发送，之前还有emitPostAdd、toast等可能抛错的操作。移动topic_id为空为no_topic否则数组，is_joined_topic=非空；is_publish_to_comments取UI勾选而非res.commentInfo实际成功。PC固定无话题且不发评论。

修正：无。
限制：topic/评论勾选与后端最终结果、模拟payload待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:337
- Track：src/mobile/views/PostEditor/index.tsx:121
- Track：src/pc/views/Post/PostPublishPopup/index.tsx:59

### preview_direct_click · 证据不足

仅在action.ts定义app_id:string；全仓未检出调用，不能确认有当前预览点击触发。

修正：无。
限制：定义存在不代表产品运行上报；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:693

### prompt_random_click · 证据不足

背景编辑Customize与任务背景自定义各一处先发送空对象再setPrompt；两处分支随机取值范围不同，事件无字段不能从payload区分具体提示词。

修正：无。
限制：两个组件入口与随机索引上限待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:1017
- Track：src/mobile/views/AiBackground/Editor/Customize.tsx:125
- Track：src/mobile/views/Task/components/BackgroundPopup/CustomizeBackground/index.tsx:97

### publish_click_withoutname · 证据不足

移动Remix disabled=!appName||!bestSampleId，故名字非空但封面未选也可发送；PC Layout禁用点击处理发送short_id/app_id，不可只按action名字判无名称。

修正：无。
限制：PC按钮所有disabled绑定条件及ID来源待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:575
- Track：src/mobile/views/Remix/RemixPublish/RemixPublishButton.tsx:100
- Track：src/pc/views/AppBuild/components/AppPublishPopup/containers/PublishView/Layout.tsx:84

### publish_pop_close · 证据不足

CreateFooter和ImageFooter传入RemixPublish的onClose回调发送app_id、appid=shortId、filter_level；appid与app_id不是别名替换。成功发布popStack也可能调用，不是只点X。

修正：无。
限制：Popup store关闭回调所有执行路径和getFilterLevel待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:688
- Track：src/mobile/views/Remix/RemixContent/components/CreateFooter/index.tsx:126
- Track：src/mobile/views/Remix/RemixGenResult/ImageFooter/index.tsx:44

## 第 32 组 · 本组有逐项初核结论，剩余限制见各项

### publish_pop_direct_close · 证据不足

RemixPublish初始hasChanged.current=false，关闭X回调在无修改时先发送app_id再popStack；封面/名称/权限子组件changeRecord将ref置true。不是所有onClose路径都执行该处理。

修正：无。
限制：三个子组件changeRecord完整调用覆盖与外部返回关闭待验证；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:733
- Track：src/mobile/views/Remix/RemixPublish/index.tsx:37

### publish_pop_name_edit · 证据不足

action.ts仅定义app_id字段，未检出调用；不把名称输入框存在当作此事件已发送。

修正：无。
限制：当前名称编辑真实上报缺少调用证据；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:736

### publish_pop_publish · 已修正

RemixPublishButton disabled时return；否则与publish_pop_publish_click连续发送，随后才检查autoSaveStage是否REQUEST_LOADING、flush自动保存及publishApp。自动保存忙或发布失败时点击事件也已发送。

修正：补充事件先于自动保存门控与请求的边界。
限制：getFilterLevel和保存失败、重复点击时序待验证；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:747
- Track：src/mobile/views/Remix/RemixPublish/RemixPublishButton.tsx:112

### publish_pop_publish_click · 已修正

与publish_pop_publish在同一handlePublish连续发送；字段app_id、appid=shortId、filter_level；位于autoSaveStage忙检查和publishApp前，不是服务端接收或发布成功。

修正：补充自动保存阻断后仍已计数。
限制：完整字段辅助链和实际payload尚待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:683
- Track：src/mobile/views/Remix/RemixPublish/RemixPublishButton.tsx:113

### publish_pop_show · 证据不足

CreateFooter发送origin=edit_publish后openStack；ImageFooter要求isModify，先result_pop_publish_click，再发送origin=result_publish并调整弹窗栈。发送在展示前，不是可见曝光。

修正：无。
限制：isModify完整来源、弹窗打开失败与截图待验证；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:677
- Track：src/mobile/views/Remix/RemixContent/components/CreateFooter/index.tsx:134
- Track：src/mobile/views/Remix/RemixGenResult/ImageFooter/index.tsx:60

## 第 33 组 · 本组有逐项初核结论，剩余限制见各项

### publish_popup_click · 证据不足

移动和PC隐私弹窗的publish/close按钮均发送object和Number(neverTip)=0/1。移动发布先publishCb再closePopup，PC先closePopup再publishCb，两者都不await回调；同步抛错可阻止事件，不是发布成功。

修正：无。
限制：所有publishCb实现及异步拒绝与用户行为写入待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:373
- Track：src/mobile/businessComponents/PublishPrivacyPopup/index.tsx:44
- Track：src/mobile/businessComponents/PublishPrivacyPopup/index.tsx:53
- Track：src/pc/components/popups/PublishPrivacyPopup/index.tsx:49
- Track：src/pc/components/popups/PublishPrivacyPopup/index.tsx:58

### publish_popup_show · 证据不足

移动useEffect([])和PC挂载时发送object，移动附user_scene/ability_name，PC不附；不做可见比例或停留校验。

修正：无。
限制：PC挂载辅助函数、遮挡和重复挂载待验证；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:368
- Track：src/mobile/businessComponents/PublishPrivacyPopup/index.tsx:26
- Track：src/pc/components/popups/PublishPrivacyPopup/index.tsx:27

### publish_share_pop_close · 证据不足

全仓仅定义空业务字段，无直接调用，不能确认当前发布后分享弹窗关闭上报。

修正：无。
限制：当前运行入口及替代事件待查；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:756

### publish_share_pop_download · 证据不足

全仓仅定义app_id:string，无直接调用，不将其他下载事件当本事件调用。

修正：无。
限制：发布分享下载入口缺少当前证据；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:750

### publish_share_pop_share · 证据不足

全仓仅定义app_id:string，无直接调用，不将其他分享事件当本事件调用。

修正：无。
限制：发布分享入口缺少当前调用证据；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:753

## 第 34 组 · 本组有逐项初核结论，剩余限制见各项

### push_button_click · 证据不足

ViewLater先可选调用Android.openNotificationSettings再发送并关闭弹窗；NewDayCheckIn先发送再调用。原始key为locaiton，值view_later/check_in_page，保留拼写；接口不存在仍可发送，不代表权限开启成功。

修正：无。
限制：Native抛错和设置页返回实际状态待验证；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:1279
- Track：src/mobile/businessComponents/ViewLaterGuidePopup/index.tsx:14
- Track：src/mobile/views/DailyTask/components/AutoCheckIn/NewDayCheckIn/index.tsx:67

### push_message_click · 证据不足

globalInfo初始化从entryUrl读取pushId/pushType，任一存在即发送，另一项回退空串；可由含参数URL触发，不要求两项齐全，也不验证用户真的点击系统通知。

修正：无。
限制：entryUrl所有更新来源与重复初始化、Native入参待验证；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:1272
- Track：packages/shared/stores/globalInfo/index.tsx:65

### push_message_send · 已修正

taskState在nextTask.state===10且type为VIDEO_GENERATE/SIMPLE_GENERATE_VIDEO/FACE_SWAP_NEW/VIDEO_SWAP_GENERATE、document非visible时发送空对象，随后showAndroidNotification。不是系统通知发送成功回执；可无Native能力，不按任务ID去重。

修正：明确后台任务通知尝试，而非推送成功。
限制：socket重复消息、Native权限和通知送达待运行验证；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:1277
- Track：packages/shared/handler/task/useTaskSocket.ts:317

### push_permission_guide_cancel · 证据不足

取消按钮先发送映射scene再popStack；HomeEnter→feed、ExploreScroll→browse、PayCancel→pay_cancel，默认HomeEnter。非所有外部关闭都调用取消处理。

修正：无。
限制：引导弹窗全部调度与外部关闭待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:1285
- Track：src/mobile/businessComponents/PushPermissionGuidePopup/index.tsx:79

### push_permission_guide_enable · 证据不足

先可选调用Android.openNotificationSettings，再发映射scene并关闭；Native不存在仍发送，不代表权限已开启。scene映射feed/browse/pay_cancel。

修正：无。
限制：权限返回状态、异常及实际入口待运行验证；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:1282
- Track：src/mobile/businessComponents/PushPermissionGuidePopup/index.tsx:72

## 第 35 组 · 本组有逐项初核结论，剩余限制见各项

### rating_popup_click · 证据不足

FiveRateGuide正向先标记待从商店返回奖励、openLink GooglePlay评论链接、关闭弹窗及写本地标记，再发送five_star_praise；取消关闭后发送not_now。不是用户实际给出五星评价。

修正：无。
限制：商店返回奖励链与外链跳转后送达待运行验证；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:985
- Track：src/mobile/businessComponents/FiveRateGuide/index.tsx:34
- Track：src/mobile/businessComponents/FiveRateGuide/index.tsx:39

### remix_baseimage_choose · 证据不足

GenerationsPopup选图先关闭相关弹窗并patchImagesCopy；code===0且写节点后发送，item.appId===innerAppId为t2i，否则a1_history。请求失败不发送，不仅是点击选择。

修正：无。
限制：复制API真实响应及节点回调抛错、组件可达性待验证；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:558
- Track：src/mobile/views/Remix/components/GenerationsPopup/index.tsx:126
- Track：src/mobile/views/Remix/components/GenerationsPopup/index.tsx:130

### remix_begin_click · 证据不足

RemixEntryPopup确认先发原始资源app_id/短appid、会员与积分等，再打开fork后id对应Remix并关闭确认框；original_filter_type由getAppCategoryName等于VideoGenerate决定ai_video否则image。不是fork成功事件（fork先前已发生）。

修正：无。
限制：userLevel/filterLevel参数来源和当前Billing空值待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:526
- Track：src/mobile/views/Remix/components/RemixEntryPopup/index.tsx:132

### remix_click · 证据不足

CreatorCenter/CreatorNotice/RemixEntry三处要求data.id后发送，再执行forkApp；失败也已发送。app_id与appid取原资源长短ID，成功后才将新shortId写build store并打开确认层。credits_balance取getUserPower，vip_type取billInterval||none。

修正：无。
限制：多处filterLevel/userLevel props完整来源与所有origin入口待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:511
- Track：src/mobile/views/CreatorCenter/components/FilterCard/index.tsx:56
- Track：src/mobile/views/CreatorNotice/components/FilterCard/index.tsx:56
- Track：src/mobile/views/Remix/components/RemixEntry/index.tsx:115

### remix_guide_click · 证据不足

GuideBanner先发送app_id，再按存储语言取教程地址；Android打开IFramePopup，其余openLink。不是教程加载或观看完成。

修正：无。
限制：语言映射、地址失败及页面入口待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:921
- Track：src/mobile/views/Remix/RemixContent/components/GuideBanner/index.tsx:24

## 第 36 组 · 本组有逐项初核结论，剩余限制见各项

### remix_guide_notnow_click · 证据不足

action.ts定义仍存在；OnboardingGuide中handleCancel、其中Track调用和取消按钮均已注释。UserBehavior里同名字符串为历史行为查询，不是当前发送。

修正：无。
限制：未找到当前直接调用，不据历史行为查询认定仍在上报；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:847

### remix_guide_start_click · 已修正

OnboardingGuide.handleAllFinish发送app_id后写isRemixBootFinish并停引导，绑定OnBoardingGuide的onFinish。真正开始按钮handleStart只启动tour不发此事件，名称start与真实结束时机不同。

修正：修正为引导onFinish回调，而非开始点击。
限制：OnBoardingGuide何种结束/跳过路径调用onFinish仍待完整核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:844
- Track：src/mobile/views/Remix/components/OnboardingGuide/index.tsx:88

### remix_notnow_click · 证据不足

RemixEntryPopup关闭处理先发送原始resource.id/shortId和传入user/filter级别及origin，再popStack；与引导notnow不是同一事件。

修正：无。
限制：关闭处理全部绑定和返回手势路径待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:546
- Track：src/mobile/views/Remix/components/RemixEntryPopup/index.tsx:120

### remix_t2i_textbox_click · 证据不足

InnerDescriptionGen.handleClick先setIsExpend(true)再发送app_id/short_id，不表示输入内容发生改变。

修正：无。
限制：文本框完整点击绑定、ID store来源和截图待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:628
- Track：src/mobile/views/Remix/components/InnerDescriptionGen/index.tsx:56

### remix_uploadfrom_a1_click · 证据不足

EditReferencePopup从A1选图处理先发送app_id/short_id，再open GenerationsPopup并带ratio/size和节点回调；不代表已选中或复制成功。

修正：无。
限制：弹窗入口门控、sizeNode缺失和媒体来源待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:624
- Track：src/mobile/views/Remix/components/EditReferencePopup/index.tsx:190

## 第 37 组 · 本组有逐项初核结论，剩余限制见各项

### remix_uploadfrom_album_click · 证据不足

EditReferencePopup.handleClickUpload先handleChangeSelect再发送app_id/short_id；文件选择异步结果未等待，取消选择也可计数。

修正：无。
限制：useFormImageUploader内部选图环境分支及抛错待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:620
- Track：src/mobile/views/Remix/components/EditReferencePopup/index.tsx:137

### remix_whatsapp_entry_click · 证据不足

CreatorBenefit公告卡先open WhatsAppPopup再发origin=announcement，无app_id；WhatsAppEntrance组件先发送再打开但全仓未找到组件使用。不能把定义允许edit/creator_center当作现有页面入口。

修正：无。
限制：CreatorNotice常规可达入口与动态组件注入待运行核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:562
- Track：src/mobile/views/CreatorNotice/components/CreatorBenefit/index.tsx:22
- Track：src/mobile/views/Remix/components/WhatsAppEntrance/index.tsx:24

### remix_whatsapp_link_click · 证据不足

WhatsAppPopup AddNow先发送可选app_id、原始origin及getUserLevel结果，再goToRemoteLink(featureSwitch.creatorCenter)并关闭。getUserLevel按level3/2/1Count依次>=5返回4/3/2，否则1；目标地址不保证是WhatsApp。

修正：无。
限制：远程配置真实URL、外链打开与Native结果待验证；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:566
- Track：src/mobile/views/Remix/components/WhatsAppPopup/index.tsx:44

### remix_whatsapp_popup_close · 证据不足

遮罩和NotNow均调用closePopup先发送可选app_id/origin再popStack；内容区stopPropagation。AddNow直接popStack不发该close事件；外部关闭未必调用此处理。

修正：无。
限制：Popup store外部关闭与截图待运行取证；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:571
- Track：src/mobile/views/Remix/components/WhatsAppPopup/index.tsx:35

### remove_input_cancel_click · 证据不足

DescriptionConfirmPopup取消按钮先发app_id再关闭DesVarDeleteConfirm；未调用onRemove。

修正：无。
限制：确认弹窗全部入口和非按钮关闭路径待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:1173
- Track：src/mobile/views/Remix/components/EditDescription/DescriptionConfirmPopup/inde.tsx:18

## 第 38 组 · 本组有逐项初核结论，剩余限制见各项

### remove_input_click · 证据不足

DescriptionCheckPopup.handleDeleteVariant先open确认框，再发app_id；onRemove回调将curState.tags[0]或curState.value交给onDelete。事件本身不是实际删除。

修正：无。
限制：删除按钮可见/禁用门控和onDelete完整行为待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:1167
- Track：src/mobile/views/Remix/components/EditDescription/DescriptionCheckPopup/index.tsx:166

### remove_input_confirm_click · 证据不足

确认处理先同步onRemove?.()，再发送app_id并pop确认框及DescriptionCheckPopup；回调缺省仍发送，抛错则不发送。不能据事件断言持久化删除成功。

修正：无。
限制：上游onDelete与保存落盘及异常路径待验证；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:1170
- Track：src/mobile/views/Remix/components/EditDescription/DescriptionConfirmPopup/inde.tsx:24

### renewal_retention_popup_click · 已修正

全仓检索仅action.ts定义button=start_button/close_button，未检出调用；原平台明确描述可点击START/关闭，与当前证据不符。保留定义和历史资产。

修正：改为仅定义、未发现当前调用，撤回正在上报的确定说明。
限制：不能排除未采集运行代码或历史版本，需运行环境取证；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:931

### report_click · 证据不足

评论ActionSheet先构造举报URL，再发report_object_type（关联资源是Creator才creator，否则post），openLink后另发comment_action(report)并关弹窗。不是举报表单提交成功，也不是举报评论类型枚举。

修正：无。
限制：资源类型映射、举报URL编码与真实外部表单待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:837
- Track：src/mobile/businessComponents/Comment/ActionSheet/index.tsx:77

### report_type · 证据不足

仅action.ts六种category定义，未发现直接调用，不能宣称当前举报表单选项会发送；保留原始politically_sensitivity等枚举拼写。

修正：无。
限制：表单可能外部实现，静态前端不能证明上报；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:1124

## 第 39 组 · 本组有逐项初核结论，剩余限制见各项

### reset_button_click · 证据不足

FaceSwapLabelPopup重置暂选key/sort为当前activeKey/activeSortType并清hasChanged后发送空对象；不是重置成产品默认推荐。

修正：无。
限制：重置按钮门控与父级参数待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:980
- Track：src/mobile/businessComponents/Label/LabelPopup/FaceSwapLabelPopup.tsx:71

### result_click · 证据不足

ResultArea要求images.length>0后先发result_click，再发result_pop_show(edit_result)，之后打开RemixGenResult；字段app_id、appid=shortId、filter_level。非结果生成成功或弹窗实际可见。

修正：无。
限制：images筛选和getFilterLevel全来源、打开失败待验证；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:651
- Track：src/mobile/views/Remix/RemixContent/components/RemixEditArea/components/ResultArea/index.tsx:81

### result_page_inputInfo_click · 证据不足

ImageInput.onClick切换panelVisible，旧值false时发空对象，收起不发；全仓检索未发现产品使用该组件，不能以函数存在证明当前可达。保留Raw中Info大写。

修正：无。
限制：可能恢复/动态使用，运行可达性尚缺证据；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:1009
- Track：src/mobile/views/Task/ImageInput/index.tsx:80

### result_pop_close · 证据不足

GenerateForm与ResultArea传给RemixGenResult的onClose处理发app_id、appid、filter_level，ResultArea还先滚动；去发布页导致popStack也可能触发。

修正：无。
限制：Popup store onClose统一时机及完整退出路径待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:667
- Track：src/mobile/views/Remix/RemixContent/components/GenerateForm/index.tsx:68
- Track：src/mobile/views/Remix/RemixContent/components/RemixEditArea/components/ResultArea/index.tsx:72

### result_pop_publish_click · 证据不足

ImageFooter先校验isModify，否则toast并return；通过后发该事件和publish_pop_show(result_publish)，随后切换弹窗栈。不是发布请求或发布成功。

修正：无。
限制：isModify来源与所有触发入口待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:662
- Track：src/mobile/views/Remix/RemixGenResult/ImageFooter/index.tsx:55

## 第 40 组 · 本组有逐项初核结论，剩余限制见各项

### result_pop_show · 证据不足

三处均先发送再openStack：生成回调generate_pop_generate、手动查看view_result、ResultArea非空图片edit_result。genSuccess命名不足以判断图片完成，需要追生成辅助函数回调。

修正：无。
限制：genSuccess完整回调链、真实可见性和截图待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:656
- Track：src/mobile/views/Remix/RemixContent/components/GenerateForm/index.tsx:91
- Track：src/mobile/views/Remix/RemixContent/components/GenerateForm/index.tsx:108
- Track：src/mobile/views/Remix/RemixContent/components/RemixEditArea/components/ResultArea/index.tsx:86

### result_show · 证据不足

Task effect需currentImage.traceId及recorder.task对应项存在；image_id取记录imgIds[0]而非当前选图ID，imgIds整组发送，多图切换时可能仍报首图。多项字符串缺省空串且用类型断言绕过枚举，不自动修前端或正式契约。

修正：无。
限制：recorder全写入链、effect依赖重复次数及最终payload待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:245
- Track：src/mobile/views/Task/index.tsx:168

### retention_popup_button_click · 证据不足

PaidRetentionPopup和FreeTrialPopup都要求productInfo/subscribeInfo，先上报pricing点击与本事件，再await paymentSubscription；type缺省payRetainLowPrice，免费版300ms leading防抖无trailing。不代表支付完成。

修正：无。
限制：两个版本按钮防抖/禁用及pricing辅助链待完整核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:841
- Track：src/mobile/businessComponents/Purchase/PaidRetentionFreeTrialPopup/index.tsx:59
- Track：src/mobile/businessComponents/Purchase/PaidRetentionPopup/index.tsx:131

### retention_popup_click · 已修正

全仓仅action.ts定义save_button/give_up_button，无直接调用；不能沿用目前用户点击挽留按钮即上报的确定说明。

修正：改为仅定义且无当前调用证据。
限制：真实运行或其他仓库可能有实现，静态核查无法确认；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:934

### screen_print · 证据不足

ScreenShotTrackPoint有traceId且recorder存在时取生成记录；否则发送空imgIds/ID、0耗时及source默认字段。原生window.handleScreenshot在多个页面被替换并在清理恢复，不能证明实际系统截屏或只有一个调用。

修正：无。
限制：所有全局回调注册覆盖/清理、Native传参和发送可靠性待验证；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:1054
- Track：packages/shared/handler/event/utils/global.ts:57
- Track：packages/shared/handler/event/utils/global.ts:74

## 第 41 组 · 本组有逐项初核结论，剩余限制见各项

### search · 已修正

三条路径不同：新移动SearchResultStore只在V3 code===0且data存在后发送，初始all和replace tab查询发送，翻页不发；image/video映射current_tab=app，creator_result_num为totals.all且post=0。旧useSearchData捕获/回退逻辑与legacy首请求路径不同，不应统一写失败后也报0。

修正：区分V3成功门控与旧路径，修正统一搜索边界。
限制：旧辅助请求全部错误回退和legacy最终输出、搜索排序并发仍需核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:378
- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:659
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:32
- Track：packages/shared/hooks/search/useSearchData.ts:136
- loggingEvent：packages/shared/utils/search/handle.ts:85
- Track：src/mobile/views/Search/store/searchResult/index.ts:96

### search_history_delete · 证据不足

useSearchHistory删除单条后发delete_one，clear后发delete_all并removeItem SEARCH_HISTORY；辅助函数本身不校验历史非空。序列化按当前用户保存，清空还删除整个存储key。

修正：无。
限制：移动/PC全部调用方门控和多用户历史影响待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:325
- Track：packages/shared/hooks/search/index.ts:57
- Track：packages/shared/hooks/search/index.ts:62

### search_suggest_click · 证据不足

SearchWrapper建议词点击先发空对象，再更新keyword、存SEARCH_METHOD=top_search并执行handleSearch；无建议词字段，也不是搜索成功。

修正：无。
限制：建议词列表类型与handleSearch去重/失败待验证；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:1421
- Track：src/mobile/views/Search/SearchWrapper/index.tsx:119

### search_tab_click · 证据不足

SearchResult切换先发送SEARCH_TAB_TRACK_MAP[key]再setCurrentTab；不能把UI image/video/all名称直接当上报tab，需按映射保留。

修正：无。
限制：映射枚举与全部可见tab规则待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:1423
- Track：src/mobile/views/Search/SearchResult/index.tsx:104

### see_original · 证据不足

评论从译文回原文时同步切状态后按id+see_original集合去重发送；Post获取原文请求结束后发送，失败catch后也可能计数，缓存原文分支不再发。按内容ID在recorder生命周期去重。

修正：无。
限制：cooldown清理周期、content_type/ID来源及真实渲染待验证；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:815
- Track：src/mobile/businessComponents/Comment/CommentItem/index.tsx:239
- Track：src/mobile/views/PostDetail/PostInfoWrapper/index.tsx:161

## 第 42 组 · 本组有逐项初核结论，剩余限制见各项

### see_translation · 证据不足

评论首次翻译在finally里发送，接口失败也发送，已有翻译缓存切回不发；Post从原文回既有译文时切状态后发。分别按id+see_translation去重，不证明翻译请求成功。

修正：无。
限制：cooldown作用域与组件重挂载、错误UI待运行核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:810
- Track：src/mobile/businessComponents/Comment/CommentItem/index.tsx:266
- Track：src/mobile/views/PostDetail/PostInfoWrapper/index.tsx:132

### seven_free_trail_pay_result · 证据不足

全仓仅定义is_success为字符串true/false，未检出直接调用；不能替换成boolean或据名称认定支付已上报。

修正：无。
限制：当前支付链没有该事件直接证据；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:965

### seven_free_trail_pricing_popup_click · 证据不足

全仓仅定义button=plan_button/Upgrade_button，未检出直接调用；保留Upgrade大小写及trail原始拼写。

修正：无。
限制：当前付费弹窗点击是否改用其他action待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:928

### share_button_click · 证据不足

15处包含typed及PC legacy。typed分享App/图片/Post/邀请/个人/话题按localAESStorage.getFlag门控；getFlag实际返回未设置或已过期时true，setFlag后抑制冷却期间重复，并非flag已存在才发送。弹窗路径通常在openStack后即发，复制路径在await复制后发。PC legacy switch将picid映射image_id/image_long_id、objectName→object_name等，不能混同typed share_type字段。

修正：无。
限制：15处完整source数据、冷却期限、其他分享辅助链和分通道payload未全部核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:273
- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:542
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:31
- Track：packages/shared/handler/share/app.ts:97
- Track：packages/shared/handler/share/faceswap.ts:48
- Track：packages/shared/handler/share/image.ts:94
- Track：packages/shared/handler/share/invitation.ts:42
- Track：packages/shared/handler/share/personal.ts:44
- Track：packages/shared/handler/share/post.ts:83
- Track：packages/shared/handler/share/post.ts:96
- Track：packages/shared/handler/share/topic.ts:53
- loggingEvent：src/pc/components/business/FullScreenImgV2/index.tsx:331
- loggingEvent：src/pc/components/business/FullScreenTaskPreview/index.tsx:274
- loggingEvent：src/pc/components/business/Tasks/TaskInfo/TaskInfoCardTop.tsx:49
- loggingEvent：src/pc/views/AiPersonalPage/components/PersonalAppCard/index.tsx:148
- loggingEvent：src/pc/views/App/AppDetailV2/components/HistoryButton/GenHistory/index.tsx:266
- loggingEvent：src/pc/views/AppSpecials/SpecialDetail/index.tsx:111
- loggingEvent：src/pc/views/AppSpecials/SpecialLand/index.tsx:91

### share_friends_popup_click · 证据不足

ShareOPItem中lanchKey真值时发送source=lanchKey、button_detail=data.type，发生在token解密/重加密与渠道onclick之前。inPoster真且lanchKey真时还可能同时发share_poster_click；不能简单当分享成功。

修正：无。
限制：lanchKey所有来源和Native渠道回调待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:309
- Track：src/mobile/businessComponents/Share2AppPopup/ShareItem/index.tsx:143

## 第 43 组 · 本组有逐项初核结论，剩余限制见各项

### share_popup_click · 证据不足

ShareOPItem在非inPoster且无lanchKey时发送trackData并写shareInfo；图片longId优先覆盖image_id，appData的app_id优先shortId；AiBackground和Emoji结果另有直接调用，先发事件再shareToOtherApp。不代表渠道实际分享成功。

修正：无。
限制：分享场景ID语义、所有data.type和上报转换仍需逐项核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:434
- Track：src/mobile/businessComponents/Share2AppPopup/ShareItem/index.tsx:138
- Track：src/mobile/views/AiBackground/Result/index.tsx:124
- Track：src/mobile/views/AIEmoji/EmojiResult/index.tsx:201

### share_popup_jump_external · 证据不足

bootstrap visibilitychange转后台且isSharing字符串true时发送recorder.shareInfo，强制is_success=true且share_type覆盖为shareInfo.type，再置isShareJump与清isSharing。标记由Native shareCallback无论data.success真假都写，也可由复制链接写；不是外跳/分享成功证据。

修正：无。
限制：标记滞留、shareInfo默认字段及真实Native回调时序待验证；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:480
- Track：src/bootstrap/page-state.ts:46

### share_poster_click · 证据不足

ShareOPItem inPoster真时发trackData并写is_poster=yes，可能同时发lanchKey好友事件；在解密token和渠道onclick前，creator由userId===curUserId决定，is_download取shareOrigin是否download_trigger。

修正：无。
限制：上游type/ID/user_scene与最终契约、模拟payload待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:451
- Track：src/mobile/businessComponents/Share2AppPopup/ShareItem/index.tsx:135

### show_more_comments · 证据不足

Comment store加载子回复前发送comment_id=parentId，之后才设loading并请求getReplyCommentList；父评论不存在甚至设loading失败时可能已发送，不是成功展开。

修正：无。
限制：所有options.parentId来源、请求并发和截图待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:820
- Track：src/mobile/store/Comment/index.ts:128

### skip_button_click · 证据不足

初始化等待超时分支发scene=time_out，欢迎页markSkipRead(true)按ref去重发gesture_swipe，markSkipRead(false)只记用户行为不发本事件。不能将全部关闭流程当skip，也没有当前可见Skip按钮。

修正：无。
限制：原生返回与所有markSkipRead参数来源、计时常量待完整核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:1181
- Track：src/mobile/hooks/useGolbalLoading.ts:104
- Track：src/mobile/views/Onborading/WelcomePage/index.tsx:58

## 第 44 组 · 本组有逐项初核结论，剩余限制见各项

### sns_button_click · 已修正

FeedbackChannel按isInChina分支，国内点微信码发wechat，海外反馈图标发whatsapp但实际goToRemoteLink(FEEDBACK_QUESTIONNAIRE_URL)，并非必须打开WhatsApp；旧FeedbackPopup调用已注释。

修正：明确type=whatsapp为历史命名，当前跳反馈问卷。
限制：远程地址和地域判断、二维码显示待验证；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:757
- Track：src/mobile/businessComponents/FeedbackChannel/index.tsx:18
- Track：src/mobile/businessComponents/FeedbackChannel/index.tsx:40

### stop_account_delete · 证据不足

AccountEvent自动登录事件处理完成若userData.isLoginFromFreeze为真发空对象；不是恢复按钮点击或删除接口取消请求发起。

修正：无。
限制：响应过滤器触发登录处理的全条件与该后端字段含义待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:964
- Track：packages/shared/utils/event/nonBussiness/AccountEvent.ts:105

### studio_generatevideo_app_click · 证据不足

CollectionCard要求type=APP并isVideoGenApp，先openAppDetail后发送app_id=resource.shortId||data.id；视频模板分支走template_video_select，不发此事件。

修正：无。
限制：isVideoGenApp判定和短/长ID回退与分组待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:937
- Track：src/mobile/views/Studio/businessComponents/CategoryTopicBarWrapper/CollectionCard/index.tsx:72

### submit_button_click · 证据不足

DefaultFooter先清submitList、open SubmitFilterPopup再发空对象；仅打开选滤镜流程，不是后端提交或submit_filter。

修正：无。
限制：活动模板正常入口是否启用与弹窗成功打开待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:850
- Track：src/mobile/views/Remix/components/ActivityTemplate/components/DefaultFooter/index.tsx:20

### submit_comment · 证据不足

MainEditor序列化文本与IMG.alt，await onSend({text,images,alsoPost}) resolve后发{...track,content_type}；content_type取postImage及序列化文本长度，随后清缓存/关弹窗。是否真正成功依赖各onSend是否在业务失败时reject。

修正：无。
限制：所有onSend实现、track动态展开和空文本边界待完整核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:791
- Track：src/mobile/businessComponents/Comment/CustomInput/MainEditor.tsx:252

## 第 45 组 · 本组有逐项初核结论，剩余限制见各项

### submit_filter · 证据不足

SubmitFilterPopup选择非空时遍历每个item发送app_id=item/user_id当前用户或空串，再关闭并显示本地成功UI；handleSubmit无后端提交请求，一次N项发N条，不能将Toast当服务端成功。

修正：无。
限制：候选item是否长短ID、活动正常入口及后端采集效果待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:854
- Track：src/mobile/views/Remix/components/SubmitFilterPopup/index.tsx:114

### submit_filter_disabled_click · 证据不足

同一handleSubmit在submitList为空时发type=Unchecked（保留大小写），不遍历提交也不显示本地成功。

修正：无。
限制：按钮disabled区域点击绑定、状态闭包和截图待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:858
- Track：src/mobile/views/Remix/components/SubmitFilterPopup/index.tsx:122

### tabbar_click · 证据不足

4处含社区topic/post、DailyTask credits→credit或invite、Discover动态tab.key、底部item.key。Discover/底部需登录的tab在未登录时return不发；其他调用无统一去重，不保证当前tab重复点击不发。

修正：无。
限制：全部动态tab配置、索引合法性和最终枚举待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:125
- Track：src/mobile/views/community/index.tsx:54
- Track：src/mobile/views/DailyTask/components/InviteActivityTabs/index.tsx:14
- Track：src/mobile/views/Discover/index.tsx:297
- Track：src/mobile/views/NewHome/components/BottomTab/index.tsx:59

### tag_expand_click · 已修正

AppFeed展开分类先markInteracted，仅feedType=explore且categoryUpdateBadgeType有值才发送；badge_show用shouldShowCategoryUpdateBadge转0/1，徽标不显示时仍可发0。随后滚动并开popup，非所有展开都发。

修正：明确Explore徽标类型门控与badge_show=0路径。
限制：徽标实验配置及popup打开时序、截图待验证；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:1427
- Track：src/mobile/views/AppFeed/index.tsx:341

### template_video_select · 证据不足

4处模板点击，FaceSwapCardGen先发送template_id再requireLogin；未登录可计数。其他卡片发送标签/gallery后再openStack；Collection视频标签固定_Collection。不是模板生成成功。

修正：无。
限制：4处可见门控、ID/标签来源与弹窗运行结果待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:878
- Track：src/mobile/views/Faceswap/FaceSwapCardWrapper/FaceSwapCard/index.tsx:55
- Track：src/mobile/views/Faceswap/FaceSwapCardWrapper/FaceSwapCardGen/index.tsx:45
- Track：src/mobile/views/Studio/businessComponents/CategoryTopicBarWrapper/CollectionCard/index.tsx:77
- Track：src/mobile/views/Studio/businessComponents/VideoGalleryFeed/VideoGalleryCard/index.tsx:47

## 第 46 组 · 本组有逐项初核结论，剩余限制见各项

### text_edit_page_finish · 证据不足

TextView要求file及imageId后调用uploadImage，成功回调先发trackParam.source/user_scene，再调外部successCallback；不是点完成即发，失败回调不发送。upload async未return/await内部uploadImage，不能以外层await结束证明成功。

修正：无。
限制：uploadImage成功条件和所有编辑入口trackParam待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:1037
- Track：src/mobile/views/EditImageView/TextView/index.tsx:100

### text_function_click · 已修正

TaskBottom.onClickAddText中curImageSrc真才打开编辑弹窗，随后无论图片URL存在与否都发送user_scene；不是编辑器实际打开证据。

修正：明确无图片URL也可发送的边界。
限制：底部按钮可见性、Native环境门控与截图待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:1024
- Track：src/mobile/views/Task/TaskBottom/index.tsx:747

### try_click · 证据不足

CreateFooter试用先发generate_intention，再根据isModify/descriptionText启动引导或打开表单；recordEleClicked后works.length>=1才发try_click，否则tryyourfilter_click。不能单据该事件确认已开始生成。

修正：无。
限制：works过滤和所有disable门控、getFilterLevel待完整核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:1119
- Track：src/mobile/views/Remix/RemixContent/components/CreateFooter/index.tsx:117

### try_it_button_click · 已修正

全仓仅action.ts定义可选location1/app_source/commend_label，未找到直接调用；原平台“推荐页倒计时结束点Try it”的说明没有当前源码支持。

修正：改为仅定义未发现当前调用，保留字段历史。
限制：其他仓库/运行代码无法由本地扫描确认；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:1176

### try_now_button_click · 证据不足

AtomicIntroduce先发generate_intention和ability_name=type的try_now_button_click，再onFileClick；用户可取消选文件，事件不证明上传或生成已开始。

修正：无。
限制：onFileClick登录/文件门控及动态type完整集合待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:1014
- Track：src/mobile/businessComponents/AtomicIntroduce/index.tsx:74

## 第 47 组 · 本组有逐项初核结论，剩余限制见各项

### tryyourfilter_click · 证据不足

CreateFooter在works.length<1分支发送，type由锁定videoGen节点与isProcess||!isModify组合image/video_filter_try_disabled/clickable；发送前已选择启动引导或开表单，不等于实际生成。

修正：无。
限制：禁用区域绑定与works来源、完整getFilterLevel待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:1109
- Track：src/mobile/views/Remix/RemixContent/components/CreateFooter/index.tsx:110

### unfollow_user_confirm_click · 证据不足

移动和PC Search的followChange监听根据followType推导is_follow=false时发送；follow_user_id=data.followId/location=data.from as any，不是直接点击确认框的统一回调。

修正：无。
限制：全部emitFollowChange来源、接口成功条件及location越界待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:770
- Track：src/mobile/handler/event.ts:66
- Track：src/pc/views/Search/index.tsx:120

### unsubscribe_button_click · 证据不足

PersonalSetting ManageBilling分支先open CancelSubscriptionPopup再发送空对象；不是直接取消请求或成功。

修正：无。
限制：管理订阅入口可见性及弹窗运行状态待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:509
- Track：src/mobile/views/Personal/businessComponents/PersonalSetting/index.tsx:70

### unsubscribe_retain_popup_click · 证据不足

type固定continuous。continue关闭挽留弹窗后发送；cancel先goToSubscriptionManagePage再发送，不代表在商店实际取消订阅。

修正：无。
限制：系统订阅管理方法、跳转失败及返回状态待运行验证；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:505
- Track：src/mobile/views/Personal/businessComponents/CancelSubscriptionPopup/index.tsx:26
- Track：src/mobile/views/Personal/businessComponents/CancelSubscriptionPopup/index.tsx:34

### video_describe_close · 证据不足

handlePopupClose读取持久化closeWay与promptChanged，映射finish/close/其他→finish_click/close_button_click/blank_area_click；is_edit由promptChanged真值决定，发送后清两项。取当前global store而非打开时快照，事件不保证保存成功。

修正：无。
限制：所有onClose绑定、缓存滞留与节流更新待验证；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:1093
- Track：src/mobile/views/Remix/components/EditVideoGenPopup/utils.ts:12

## 第 48 组 · 本组有逐项初核结论，剩余限制见各项

### video_describe_edit_click · 证据不足

EditVideoGen与EditVideoGenPrompt两处先openStack EditVideoGenPopup，再从global store取app_id/short_id/filter_level发送；非提示词实际修改。

修正：无。
限制：两组件入口门控和弹窗打开结果待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:1100
- Track：src/mobile/views/Remix/components/EditVideoGen/index.tsx:74
- Track：src/mobile/views/Remix/components/EditVideoGenPrompt/index.tsx:69

### video_describe_show · 证据不足

EditVideoGenPopup useMount发送，show_type由openWay=guide映射open_video_show，否则edit_click_show；其450ms动画完成另计，不等待后者。

修正：无。
限制：挂载遮挡和重复打开、实际openWay调用来源待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:1087
- Track：src/mobile/views/Remix/components/EditVideoGenPopup/index.tsx:72

### video_download · 证据不足

4处含共享分享下载、移动downloadVideoTrack、PC能力回调，均不等待文件保存成功。移动包装器最后展开rest，可覆盖先写的video_id/ability_name；与bigData.result_download分开，deprecated定义仍有调用不能直接删除。

修正：无。
限制：downloadVideo及全部rest来源、PC结果判定与实际保存待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:890
- Track：src/mobile/businessComponents/Share2AppPopup/process.ts:51
- Track：src/mobile/handler/image.ts:310
- Track：src/pc/handler/ability/init.ts:22
- Track：src/pc/handler/ability/init.ts:76

### video_full_screen_click · 已修正

三处回调将isFullscreen映射full/non-full；控制器调用requestFullscreen或webkitEnterFullscreen后即set状态并发送，未await标准API成功；退出亦不等系统确认。

修正：明确全屏切换尝试，不等于真实全屏成功。
限制：系统全屏事件/手势返回和异步拒绝待验证；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:891
- Track：src/mobile/views/AppDetail/AppDetailUI/AppDetailFullVideoUI/index.tsx:134
- Track：src/mobile/views/Faceswap/FaceSwapDetail/index.tsx:141
- Track：src/mobile/views/Faceswap/FaceSwapDetailList/index.tsx:214

### video_function_click · 证据不足

TaskBottom先要求图片URL存在，随后发原任务abilityName、user_scene、location2=task、trace_info回退空串，再做积分等生成门控；订阅成功重入可能再次发送。

修正：无。
限制：后续所有权限与并发路径、完整字段来源待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:1142
- Track：src/mobile/views/Task/TaskBottom/index.tsx:770

## 第 49 组 · 本组有逐项初核结论，剩余限制见各项

### video_generator_click · 证据不足

EditVideoGen.handleSelect为true时创建视频及音频节点，已完成引导则打开描述弹窗；false删除节点并清描述；之后读取global store发送toggle_state=value，filter_level是操作后的分级。

修正：无。
限制：节点更新异步反映时机、callback依赖与反复操作待验证；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:1071
- Track：src/mobile/views/Remix/components/EditVideoGen/index.tsx:115

### video_guide_dismissed · 证据不足

VideoGeNodeGuide.handleFinish关闭tour、发送后写引导完成，200ms后打开描述弹窗；GuideView开始按钮调用该处理。dismissed不代表用户放弃，可能是点击开始编辑。

修正：无。
限制：tour其他结束回调与延时取消/卸载待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:1082
- Track：src/mobile/views/Remix/components/VideoGeNodeGuide/index.tsx:56

### video_guide_show · 证据不足

effect要求appPageLoaded、Remix引导已完成、state存在且video引导未完成，先ref.setRun(true)再发送；依赖变化或重新挂载可重复，不检测目标可见比例。

修正：无。
限制：state/目标节点是否真实可见、ref就绪及截图待验证；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:1077
- Track：src/mobile/views/Remix/components/VideoGeNodeGuide/index.tsx:115

### video_play_click · 已修正

三处onPlayStatusChange回调均只发template_id，不带播放/暂停状态；控制器在play()/pause()之前回调，播放Promise未等待，失败也可计数。ID分别appDetail.id/VideoId/video.id。

修正：明确播放或暂停尝试，非成功播放/完成观看。
限制：自动播放是否走回调及当前ID语义待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:884
- Track：src/mobile/views/AppDetail/AppDetailUI/AppDetailFullVideoUI/index.tsx:126
- Track：src/mobile/views/Faceswap/FaceSwapDetail/index.tsx:133
- Track：src/mobile/views/Faceswap/FaceSwapDetailList/index.tsx:206

### video_resolution_click · 证据不足

TaskBottom打开分辨率弹窗后发送VideoEnhanceResolution及recorder entry/location回退空串；无recorder也发送，非生成请求。

修正：无。
限制：外层用户权限门控和trackInfo来源待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:1349
- Track：src/mobile/views/Task/TaskBottom/index.tsx:572

## 第 50 组 · 本组有逐项初核结论，剩余限制见各项

### video_resolution_submit · 证据不足

两处：弹窗在会员/积分/并发门控通过并关闭后发送所选resolution映射，再newAtomicGenerate；TaskBottom快捷路径通过门控后发固定FHD再生成。不是任务受理或增强成功。

修正：无。
限制：快捷路径全部门控与resolutionTrackTypeMap映射待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:1355
- Track：src/mobile/views/Task/components/VideoResolutionPopup/index.tsx:84
- Track：src/mobile/views/Task/TaskBottom/index.tsx:548

### video_upload_click · 证据不足

3处上传入口，旧handler和弃用uploader在登录校验前发送；CustomFaceSwap组件在未登录return之后发送。故未登录点击并非各入口都有click，但可能都有失败事件。

修正：无。
限制：弃用组件可达性、重复点击和实际文件对话框待验证；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:865
- Track：src/mobile/views/Faceswap/CustomFaceSwap/index.tsx:72
- Track：src/mobile/views/Faceswap/CustomFaceSwap/index.tsx:191
- Track：src/mobile/views/Faceswap/FaceSwapVideoUploader/index.tsx:77

### video_upload_result · 已修正

PC useFormVideoUploader仅node.type=animate时在validVideoFile后、网络上传前调用reportVideoUploadResult。valid=true直接success，metadata读取失败也可success且duration=0/resolution空；失败按格式/大小/时长/分辨率优先级映射1001/1002/1003/1004。文件MiB保留3位，时长四舍五入秒，分辨率W*H。

修正：改为animate视频文件校验结果，不是网络上传结果。
限制：校验配置、validVideoFile具体规则与网络上传结果分离，仍需运行取证；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:871
- Track：src/pc/utils/reportVideoUploadResult.ts:34
- Track：src/pc/utils/reportVideoUploadResult.ts:44
- Track：src/pc/utils/reportVideoUploadResult.ts:54
- Track：src/pc/utils/reportVideoUploadResult.ts:64
- Track：src/pc/utils/reportVideoUploadResult.ts:75
- Track：src/pc/utils/reportVideoUploadResult.ts:90
- Track：src/pc/utils/reportVideoUploadResult.ts:100
- Track：src/pc/utils/reportVideoUploadResult.ts:110
- Track：src/pc/utils/reportVideoUploadResult.ts:119

### video_upload_success · 确认代码存在差异

17处包括上传前not_login/generate/no_vip、handleUpload错误及callback成功，甚至FaceSwap生成权限拦截。成功取result.id，失败取err.code||err.message||err，可能为number或object而定义failure_reason为string。外层uploadVideo未返回handleUpload Promise，await不能保证捕获异步错误。

修正：保留原始string定义及实际表达式，标记代码潜在类型差异，不自动改契约。
限制：handleUpload全部校验/上传回调、重复失败和运行实际error类型待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:866
- Track：src/mobile/views/Faceswap/CustomFaceSwap/index.tsx:76
- Track：src/mobile/views/Faceswap/CustomFaceSwap/index.tsx:80
- Track：src/mobile/views/Faceswap/CustomFaceSwap/index.tsx:91
- Track：src/mobile/views/Faceswap/CustomFaceSwap/index.tsx:127
- Track：src/mobile/views/Faceswap/CustomFaceSwap/index.tsx:133
- Track：src/mobile/views/Faceswap/CustomFaceSwap/index.tsx:151
- Track：src/mobile/views/Faceswap/CustomFaceSwap/index.tsx:187
- Track：src/mobile/views/Faceswap/CustomFaceSwap/index.tsx:200
- Track：src/mobile/views/Faceswap/CustomFaceSwap/index.tsx:215
- Track：src/mobile/views/Faceswap/CustomFaceSwap/index.tsx:256
- Track：src/mobile/views/Faceswap/CustomFaceSwap/index.tsx:262
- Track：src/mobile/views/Faceswap/CustomFaceSwap/index.tsx:281
- Track：src/mobile/views/Faceswap/FaceSwapDetail/hook/useFaceSwapGenerate.ts:106
- Track：src/mobile/views/Faceswap/FaceSwapVideoUploader/index.tsx:38
- Track：src/mobile/views/Faceswap/FaceSwapVideoUploader/index.tsx:58
- Track：src/mobile/views/Faceswap/FaceSwapVideoUploader/index.tsx:64
- Track：src/mobile/views/Faceswap/FaceSwapVideoUploader/index.tsx:80

### View_all_click · 证据不足

useExploreFilter空态查看全部先发tag_name=tagName/option_value=optionNames，再清筛选归因并void onViewAll；无optionNames非空检查，不等刷新成功。保留Raw View大写。

修正：无。
限制：tagName/optionNames组合生成和全部空态入口待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:1334
- Track：src/mobile/views/Discover/hooks/useExploreFilter.ts:151

## 第 51 组 · 本组有逐项初核结论，剩余限制见各项

### view_more_click · 证据不足

CreatorNotice.FiltersZone点击查看更多发送空对象；无内容ID或分页参数，不能以名称认定加载更多完成。

修正：无。
限制：全部点击绑定与CreatorNotice入口待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:1045
- Track：src/mobile/views/CreatorNotice/components/FiltersZone/index.tsx:33

### view_result_click · 证据不足

GenerateForm手动查看先发app_id/appid=shortId/filter_level，随后result_pop_show(view_result)并open RemixGenResult；不是可见曝光。

修正：无。
限制：按钮显示/禁用条件和结果数据完整性待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:718
- Track：src/mobile/views/Remix/RemixContent/components/GenerateForm/index.tsx:103

### voice_button_click · 证据不足

SoundToggleButton stopPropagation后newMuted=!isMuted，先onToggle再发送turn off/on；回调抛错阻止事件，音频实际是否播放不由本事件验证。

修正：无。
限制：所有onToggle实现及prop状态同步待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/action.ts:892
- Track：src/mobile/views/AppDetail/components/SoundToggleButton/index.tsx:32

### app_performance · 确认代码存在差异

useMonitorAppPerformance监听productsLoaded，buildAppPerformanceInfo非null后每hook生命周期发一次。依赖Native三个非零时间，差值单位毫秒；冷启动=finish-webViewCreate，HTML=loadHtmlFinish-coldStartFinish，列表=当前时间-loadHtmlFinish，总计=当前-webViewCreate；另展开timeline及过滤过的Native设备性能。 发送前device_type=getGpuInfo()，与平台公共字段device_type表示APP/MOBILE/PC的含义冲突；当前契约排除了该公共同名字段，需保留命名空间/路径证据并另行提正式契约选择，不能直接自动改key。

修正：无。
限制：productsLoaded所有分发、timeline动态字段、Native时间类型与时钟基准待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收；公共device_type与性能GPU同名语义冲突待契约决策。

- makeTracker：packages/shared/handler/event/impl/visit.ts:75
- Track：src/mobile/hooks/useMonitorAppPerformance.ts:21

### app_visit · 证据不足

当前直接调用仅legacy detail包装器，传hasVideo/appCategory等内部输入；最终switch重建current_tab/origin/object_type并按origin条件展开搜索和gallery，不能把这些内部参数当稳定wire字段。feed_hot_filter仅recorder匹配当前app_id时true，indexInfo最后可覆盖先前值。

修正：无。
限制：legacy完整转换及详情所有包装调用、动态indexInfo和分通道契约待全面核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/visit.ts:194
- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:333
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:16
- loggingEvent：packages/shared/utils/app/detail/index.ts:83

## 第 52 组 · 本组有逐项初核结论，剩余限制见各项

### atomic_error_entry · 证据不足

AtomicError useEffect([])挂载时发送type，不含msg/uploadImage，不做可见检测；重新选图后转编辑器不代表恢复成功。

修正：无。
限制：所有异常入口type来源与挂载失败、截图待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/visit.ts:152
- Track：src/mobile/businessComponents/AtomicError/index.tsx:26

### chatbot_detail_page_leave · 证据不足

聊天socket hook onLeave发送Date.now()-mountTimeRef.current，单位毫秒，再展开全局trackRecorder.chatbotInfo（可能覆盖同名字段）。是room离开回调，不能直接等同用户主动关闭或可见停留。

修正：无。
限制：room hook断开/重连触发与全局归因更新链待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/visit.ts:175
- Track：packages/chatbot/mobile/views/ChatbotDetailPopup/index.tsx:324

### chatbot_visit · 证据不足

ChatbotDetailPopup useEffect([])直接发送global recorder.chatbotInfo再加载缩略图app；不等待socket入房、历史消息或页面可见。

修正：无。
限制：所有chatbotInfo初始化/切会话写入及默认必填值待完整核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/visit.ts:155
- Track：packages/chatbot/mobile/views/ChatbotDetailPopup/index.tsx:345

### login_popup · 证据不足

LoginPopup挂载发送location=props.reason，之后才写recorder.source.login与loginHasReported=false；不是登录成功或按钮点击。

修正：无。
限制：所有reason调用方、组件重挂载和最终枚举待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/visit.ts:54
- Track：src/mobile/views/Login/LoginPopup/index.tsx:86

### marketing_popup_lock_show_performance · 证据不足

Popup依赖回调trackMarketingPopupLockShow中lockTimestamp真值才发送，lock_wait_time=max(0,Date.now()-timestamp)毫秒，pending_lock_count取当前队列长度，popup_id为type数字。

修正：无。
限制：Popup store何时调用、队列是否含当前项和真实可见时机待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/visit.ts:139
- Track：src/mobile/handler/popup/init.ts:34

## 第 53 组 · 本组有逐项初核结论，剩余限制见各项

### onboarding_performance · 确认代码存在差异

欢迎页挂载effect结束openToMount/loginToOnboarding阶段，Native性能信息可用时发送一次。onboarding_load_time=挂载当前时间-loadHtmlFinishTime，total_onboarding_time=当前-webViewCreateTime，毫秒；再展开startup阶段与设备性能。不是页面图片/视频加载完成。 发送前device_type=getGpuInfo()，与平台公共字段device_type表示APP/MOBILE/PC的含义冲突；当前契约排除了该公共同名字段，需保留命名空间/路径证据并另行提正式契约选择，不能直接自动改key。

修正：补充计时边界和毫秒单位，替换尚待确定的展示解释。
限制：全部阶段计时辅助链、Native时钟与缺失数据待运行核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收；公共device_type与性能GPU同名语义冲突待契约决策。

- makeTracker：packages/shared/handler/event/impl/visit.ts:114
- Track：src/mobile/views/Onborading/WelcomePage/index.tsx:130

### page_exposure · 证据不足

PageExposurer页面/弹窗栈变化时顶部value与before不同且距changeTime>=1000ms才发送before/after/stayTime，单位毫秒。小于1秒时更新before但不更新changeTime，下次时长不一定纯属该before页。

修正：无。
限制：所有栈操作和跨快速切换归属、最终payload待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/visit.ts:146
- Track：src/mobile/handler/cache/recorder.ts:27

### page_exposure_direct · 证据不足

仅visit定义app_source可选，未发现直接调用；不能以page_exposure或open_a1的调用作为此事件上报证据。

修正：无。
限制：动态/其他仓库发送仍需运行证据；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/visit.ts:213

### post_detail_visit · 证据不足

移动data.id变化且存在时发送；PC详情data存在且ref未发送时发送，推荐Post卡片另在点击时发you_might_alse_like。移动/PC origin实际有search_result条件但定义枚举列search；保留两种原始证据，不自动归一。

修正：无。
限制：postEntryPath/indexInfo动态展开、推荐点击与详情重复计数待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/visit.ts:59
- Track：src/mobile/views/PostDetail/index.tsx:144
- Track：src/pc/views/Post/PostDetail/index.tsx:96
- Track：src/pc/views/Post/PostDetail/RecommendPosts/index.tsx:40

### registration_pop_up · 证据不足

mixed typed/legacy：移动LoginPopup卸载且loginHasReported=false发close，LoginRegister.finishSuccess按isRegister发register/login并置true；旧AccountEvent非游客登录也传register，BaseListener未登录关闭发close。不能统一当注册成功。

修正：无。
限制：旧登录全部响应过滤器、location全局来源、公共user_id排除及分通道契约待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/visit.ts:55
- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:247
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:10
- loggingEvent：packages/shared/components/base/BaseListener/wrapper.tsx:85
- loggingEvent：packages/shared/utils/event/nonBussiness/AccountEvent.ts:48
- loggingEvent：packages/shared/utils/event/nonBussiness/AccountEvent.ts:86
- Track：src/mobile/views/Login/LoginPopup/index.tsx:91
- Track：src/mobile/views/Login/LoginRegister/index.tsx:55

## 第 54 组 · 本组有逐项初核结论，剩余限制见各项

### search_page_visit · 证据不足

移动SearchWrapper与PC SearchRecommendWrapper挂载effect发空对象，不等待200ms聚焦计时器，也不是提交关键词；重复挂载可重复。

修正：无。
限制：PC推荐层显隐是否卸载、截图与真实曝光待验证；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/visit.ts:74
- Track：src/mobile/views/Search/SearchWrapper/index.tsx:147
- Track：src/pc/components/business/GlobalNav/HeaderSearch/SearchRecommendWrapper/index.tsx:70

### seven_free_trail_pricing_popup_show · 证据不足

仅visit空字段定义，未检出直接调用；不将其他pricing_popup当本事件。

修正：无。
限制：现行付费页面实际是否上报尚缺调用证据；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/visit.ts:145

### startup_attribution_performance · 证据不足

StartupPerformanceRecorder仅默认Android报告；completeExplore与reportTouristLoginFailure竞争reportOnce，一次实例最多一次，后者先到可能冻结未完成字段。耗时Math.max(0,round(now-start))毫秒；传状态/来源，不包含完整deviceId/referrer/DDL URL。

修正：无。
限制：所有recorder调用顺序、依赖注入、渠道解析与lateDDL判定链待完整核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/visit.ts:93
- Track：src/mobile/handler/startup/performance.ts:68

### topic_detail_visit · 证据不足

TopicDetail mount effect发origin=track||landingOrigin，topic_id=prop topicId或route.tagId的非空断言，断言不做运行校验；可能undefined，事件不等待话题API。

修正：无。
限制：landingOrigin与路由合法性、真实入参待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/visit.ts:70
- Track：src/mobile/views/Topic/TopicDetail/index.tsx:216

### topic_list_visit · 证据不足

Topic挂载另发fetchTopic，但visit effect仅pathname.endsWith(/tag)时发，依赖pathname，origin优先withShare，再basePage==home为bottom_tab，否则landing_page；不是请求成功或每次可见恢复必发。

修正：无。
限制：路由尾斜杠和栈恢复时pathname变化、归因生命周期待核实；静态核查，不代表生产上报验证；最终契约、分组及截图尚未全部验收。

- makeTracker：packages/shared/handler/event/impl/visit.ts:69
- Track：src/mobile/views/Topic/index.tsx:32

## 第 55 组 · 本组有逐项初核结论，剩余限制见各项

### app_exposure_direct · 确认代码存在差异

typed、legacy、列表辅助器及生成等待轮播共用事件。普通卡片含app_id/appid，ChatbotDrama改为id/chatbot_id；restParams最后可覆盖字段。autoExposure.ts未声明或导入location，发送location as any实际引用浏览器全局Location，与字符串枚举不一致；轮播按列表变化延迟发送，不等逐卡可见。

修正：无；代码问题保留证据，未修改前端业务代码。
限制：完整调用辅助链、最终分通道契约及截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/exposure.ts:68
- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:594
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:46
- ExposureTrack：packages/shared/handler/event/impl/autoExposure.ts:120
- Track：packages/shared/handler/event/utils/exposure.ts:71
- loggingEvent：packages/shared/utils/event/newDataWareHose/ExposureManager/index.ts:68
- Track：src/mobile/views/Task/TaskContentItem/MobileGenerateLoading/Carousel3D/index.tsx:489

### app_exposure_loose · 证据不足

仅定义，未发现直接调用；不能以direct事件代替本事件证据。

修正：无；代码问题保留证据，未修改前端业务代码。
限制：完整调用辅助链、最终分通道契约及截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/exposure.ts:88

### appgallery_exposure · 证据不足

全局曝光sender批发data；Studio分类条另由ColumnVirtualList曝光ID映射gallery_id及查找type（无匹配默认0）。需继续追踪虚拟列表观察与全局注册来源。

修正：无；代码问题保留证据，未修改前端业务代码。
限制：完整调用辅助链、最终分通道契约及截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/exposure.ts:102
- ExposureTrack：packages/shared/handler/event/impl/autoExposure.ts:138
- Track：src/mobile/views/Studio/businessComponents/CategoryTopicBarWrapper/index.tsx:48

### banner_exposure · 证据不足

legacy批发arrList；StudioBanner仅Studio活跃且无弹层时检查计时，超过1000ms发送并用Infinity防重，之后记录新索引起点。不是所有轮播切换都必发，调度链待核。

修正：无；代码问题保留证据，未修改前端业务代码。
限制：完整调用辅助链、最终分通道契约及截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/exposure.ts:171
- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:612
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:59
- loggingEvent：packages/shared/utils/event/newDataWareHose/ExposureManager/index.ts:86
- Track：src/mobile/views/Studio/businessComponents/StudioBanner/index.tsx:71

### chatbot_exposure_direct · 已修正

新朋友、更多朋友和收藏均有卡片曝光调用。收藏及更多含position=index+1和sort=index；新朋友无trigger_scene，收藏为favorites、更多为explore；保留各分支字段差异。

修正：修正目录触发说明。
限制：完整调用辅助链、最终分通道契约及截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/exposure.ts:235
- Track：packages/chatbot/mobile/views/ChatbotMessage/components/Favorites/index.tsx:123
- Track：packages/chatbot/mobile/views/ChatbotMessage/components/MoreFriends/index.tsx:85
- Track：packages/chatbot/mobile/views/ChatbotMessage/components/New/index.tsx:90

## 第 56 组 · 本组有逐项初核结论，剩余限制见各项

### chatbot_favorites_page_exposure · 证据不足

收藏页需isActive、mounted、inited且非loading；同一活跃周期ref防重，离开重置，favorite_count=total；数量变化不必重复发。

修正：无；代码问题保留证据，未修改前端业务代码。
限制：完整调用辅助链、最终分通道契约及截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/exposure.ts:232
- Track：packages/chatbot/mobile/views/ChatbotMessage/components/Favorites/index.tsx:74

### check_in_new · 证据不足

移动自动/每日签到弹窗及PC自动签到弹窗effect读取rewardLog连续天数和总数，动画前发送；不是本次签到请求成功或实际到账证明。

修正：无；代码问题保留证据，未修改前端业务代码。
限制：完整调用辅助链、最终分通道契约及截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/exposure.ts:157
- Track：src/mobile/views/DailyTask/components/AutoCheckInPopup/index.tsx:49
- Track：src/mobile/views/DailyTask/components/DailyCheckInPopup/index.tsx:71
- Track：src/pc/views/DailyTask/components/AutoCheckInPopup/index.tsx:43

### checkin_free_membership · 证据不足

仅曝光定义，未发现直接调用。

修正：无；代码问题保留证据，未修改前端业务代码。
限制：完整调用辅助链、最终分通道契约及截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/exposure.ts:162

### creator_announcement_entryinfo_show · 证据不足

RemixGuideWays IntersectionObserver配置threshold0.5，但回调只检isIntersecting和ref防重，没有检查intersectionRatio；不能保证实际至少50%可见。

修正：无；代码问题保留证据，未修改前端业务代码。
限制：完整调用辅助链、最终分通道契约及截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/exposure.ts:222
- Track：src/mobile/views/CreatorNotice/components/RemixGuideWays/index.tsx:23

### creator_support_banner_exposure_mobile · 证据不足

仅定义，未发现直接调用，不能认定移动横幅正在上报。

修正：无；代码问题保留证据，未修改前端业务代码。
限制：完整调用辅助链、最终分通道契约及截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/exposure.ts:191

## 第 57 组 · 本组有逐项初核结论，剩余限制见各项

### creator_support_banner_exposure_PC · 已修正

CreatorHelpBanner存在两个mount effect，共用hasTracked ref，首个发送后第二个被阻止；无视口检测，正常每次挂载一次。

修正：修正目录触发说明。
限制：完整调用辅助链、最终分通道契约及截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/exposure.ts:189
- Track：src/pc/components/business/GlobalNav/CreatorHelpBanner/index.tsx:14
- Track：src/pc/components/business/GlobalNav/CreatorHelpBanner/index.tsx:20

### cut_page_show · 证据不足

CropView挂载effect发送trackParam.user_scene，不等待canvas初始化，也不验证可视面积。

修正：无；代码问题保留证据，未修改前端业务代码。
限制：完整调用辅助链、最终分通道契约及截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/exposure.ts:209
- Track：src/mobile/views/EditImageView/CropView/index.tsx:41

### dressup_list_page_show · 证据不足

换装页effect启动fetchLabels后立即发送source，不等待标签接口成功；source可选。

修正：无；代码问题保留证据，未修改前端业务代码。
限制：完整调用辅助链、最终分通道契约及截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/exposure.ts:192
- Track：src/mobile/views/DressUp/index.tsx:53

### emoji_add_text_click · 证据不足

选择字体时需canvasCore存在且当前文本节点不超过2，addNode后发送source；被最多3层限制拦截不发。虽在exposure命名空间实际是操作事件，不改Raw。

修正：无；代码问题保留证据，未修改前端业务代码。
限制：完整调用辅助链、最终分通道契约及截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/exposure.ts:205
- Track：src/mobile/views/EditImageView/TextView/index.tsx:136

### emoji_edit_page_done · 证据不足

仅定义，未发现直接调用；不能以text_edit_page_finish视为同一事件。

修正：无；代码问题保留证据，未修改前端业务代码。
限制：完整调用辅助链、最终分通道契约及截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/exposure.ts:217

## 第 58 组 · 本组有逐项初核结论，剩余限制见各项

### emoji_list_page_show · 证据不足

AIEmoji挂载effect启动fetchLabels后立即发送source，不等待数据或画面完成。

修正：无；代码问题保留证据，未修改前端业务代码。
限制：完整调用辅助链、最终分通道契约及截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/exposure.ts:185
- Track：src/mobile/views/AIEmoji/index.tsx:55

### explore_card_exposure · 证据不足

ExploreCardSection使用useExporsusor，配置duration400ms、threshold0.8；辅助器检查isIntersecting且ratio>=threshold并超时后逐ID发送空对象，不含卡片ID。showCard与分组至少3资源影响渲染。

修正：无；代码问题保留证据，未修改前端业务代码。
限制：完整调用辅助链、最终分通道契约及截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/exposure.ts:101
- Track：src/mobile/views/Discover/components/ExploreCardSection/index.tsx:150

### explore_page_exposure · 证据不足

Discover注册PageActiveEvent的Explore激活回调发送空对象并返回取消监听，不是仅mount发送。事件分发源仍待核。

修正：无；代码问题保留证据，未修改前端业务代码。
限制：完整调用辅助链、最终分通道契约及截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/exposure.ts:176
- Track：src/mobile/views/Discover/index.tsx:242

### faceswap_tag_popup_show · 证据不足

isPopupVisible effect为true发送，false返回；每次重新打开可发，不等待视口观察。

修正：无；代码问题保留证据，未修改前端业务代码。
限制：完整调用辅助链、最终分通道契约及截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/exposure.ts:221
- Track：src/mobile/businessComponents/Label/LabelPopup/FaceSwapLabelPopup.tsx:36

### filter_empty_exposure · 证据不足

仅emptyVisible且optionNames非空发送；按activeLabelId:optionNames去重，隐藏或无条件清空key。tag_name和option_value是业务字段；同key仅tagName变化不会重复，emptyVisible上游仍待核。

修正：无；代码问题保留证据，未修改前端业务代码。
限制：完整调用辅助链、最终分通道契约及截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/exposure.ts:266
- Track：src/mobile/views/Discover/hooks/useExploreFilter.ts:116

## 第 59 组 · 本组有逐项初核结论，剩余限制见各项

### filter_entry_exposure · 证据不足

entryVisible为真才发；按activeLabelId:tagName去重，隐藏清空key。发送tag_id/tag_name，不是点击，也没有视口比例检测；entryVisible上游待核。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/exposure.ts:259
- Track：src/mobile/views/Discover/hooks/useExploreFilter.ts:100

### filter_result_exposure · 已修正

handleApply回调先发filter_apply_click，再在resultCount>0且选项名非空时发送option_value。不是逐结果卡片可见事件，应用回调的结果统计来源待核。

修正：修正平台目录行为说明，明确触发边界及成功字段限制。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/exposure.ts:263
- Track：src/mobile/views/Discover/hooks/useExploreFilter.ts:254

### generate_results_show · 证据不足

Task effect依赖currentImage/currentImageIdx/inTask；currentImage存在即发。app_id=relatedTask.appId，appid=appInfo.shortId或空，并非同值别名；view_source为tasklist/app_result；不要求traceId缓存存在（前面的result_show才要求）。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/exposure.ts:223
- Track：src/mobile/views/Task/index.tsx:196

### invite_page_exposure · 证据不足

InviteActivityPanel mount effect发送空对象，不等待邀请列表请求或视口确认。全部邀请入口和重挂载策略待核。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/exposure.ts:175
- Track：src/mobile/views/DailyTask/components/InviteActivityPanel/index.tsx:44

### like_recommend_exposure · 证据不足

推荐列表长度>0且主收藏列表为空才发state=1；effect依赖两者长度，长度改变可重发。定义0|1但此调用没有state=0路径，不能宣称两种状态均有上报。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/exposure.ts:231
- Track：src/mobile/views/Like/RecommendLikeList/index.tsx:44

## 第 60 组 · 本组有逐项初核结论，剩余限制见各项

### others_filters_popup_show · 证据不足

AlbumPopup/FilterPopup挂载effect启动缺失标签请求后立即发送user_scene，不等待请求成功；两个弹层共用事件，需依据user_scene区分。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/exposure.ts:213
- Track：src/mobile/views/Task/components/AlbumPopup/index.tsx:90
- Track：src/mobile/views/Task/components/FilterPopup/index.tsx:67

### post_exposure · 确认代码存在差异

普通辅助器映射post_id/app_id/topic_id（缺失回落no_topic）/trace_info，app_id可能undefined；自动曝光sender的location未声明或导入，实际引用浏览器全局Location，与定义字符串枚举不一致。保留原始观察类型，不修改业务代码。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/exposure.ts:45
- ExposureTrack：packages/shared/handler/event/impl/autoExposure.ts:129
- Track：packages/shared/handler/event/utils/exposure.ts:26

### push_permission_guide_expose · 证据不足

Popup effect依赖scene，映射HomeEnter→feed、ExploreScroll→browse、PayCancel→pay_cancel，默认HomeEnter。不证明通知权限已开启，也不等待Native设置。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/exposure.ts:249
- Track：src/mobile/businessComponents/PushPermissionGuidePopup/index.tsx:65

### query_exposure · 证据不足

移动/PC热搜、历史、个性推荐共6处effect：列表非空，个性推荐另需!loading；search_content为字符串数组，search_method分别top_search/history/individuation。不是提交搜索或每词独立事件，数据变化可重发。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/exposure.ts:180
- Track：src/mobile/views/Search/HotSearchWrapper/HotSearchTerm/index.tsx:48
- Track：src/mobile/views/Search/SearchHistory/index.tsx:97
- Track：src/mobile/views/Search/SearchRecommendTerm/index.tsx:22
- Track：src/pc/components/business/GlobalNav/HeaderSearch/SearchRecommendWrapper/SearchHistory/index.tsx:48
- Track：src/pc/components/business/GlobalNav/HeaderSearch/SearchRecommendWrapper/SearchHotTerm/index.tsx:41
- Track：src/pc/components/business/GlobalNav/HeaderSearch/SearchRecommendWrapper/SearchRecommend/index.tsx:25

### rating_popup_show · 证据不足

FiveRateGuide挂载effect先发空对象再注册返回奖励监听，不代表评分完成或奖励到账；实际弹层准入和Native回跳待核。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/exposure.ts:220
- Track：src/mobile/businessComponents/FiveRateGuide/index.tsx:24

## 第 61 组 · 本组有逐项初核结论，剩余限制见各项

### renewal_retention_popup_show · 证据不足

仅定义scenario=home_page/image_task_completed，未发现直接调用，不能当现行挽留曝光证据。

修正：无；保留原始代码证据。
限制：最终商业化转换、全量辅助调用、契约及截图未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/exposure.ts:177

### retention_popup_show · 证据不足

两个移动付费挽留弹层mount effect发送type，缺省payRetainLowPrice；不是支付成功，完整准入条件待核。

修正：无；保留原始代码证据。
限制：最终商业化转换、全量辅助调用、契约及截图未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/exposure.ts:164
- Track：src/mobile/businessComponents/Purchase/PaidRetentionFreeTrialPopup/index.tsx:37
- Track：src/mobile/businessComponents/Purchase/PaidRetentionPopup/index.tsx:110

### search_suggest_exposure · 证据不足

SearchWrapper effect中isSuggestionPanelOpen为真发送空对象；不要求建议列表非空，不等同建议词逐条可见。

修正：无；保留原始代码证据。
限制：最终商业化转换、全量辅助调用、契约及截图未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/exposure.ts:253
- Track：src/mobile/views/Search/SearchWrapper/index.tsx:162

### share_friends_popup_jump_external · 证据不足

Native分享回调先写isSharing、记录successStatus并resolve/关闭loading，只有lanchKey真值才发source/is_success=data.success；回调失败也可发，不是仅分享成功。

修正：无；保留原始代码证据。
限制：最终商业化转换、全量辅助调用、契约及截图未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/exposure.ts:137
- Track：src/mobile/businessComponents/Share2AppPopup/dataProvider.tsx:197

### share_popup_show · 证据不足

Share2AppPopup挂载且无lanchKey才发；image时mp4后缀转video，image_id优先longId；appData和post trace缓存分别补app/short/scene字段，creator比较用户ID。不能把app_id和short_id统一为同一标识。

修正：无；保留原始代码证据。
限制：最终商业化转换、全量辅助调用、契约及截图未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/exposure.ts:109
- Track：src/mobile/businessComponents/Share2AppPopup/index.tsx:98

## 第 62 组 · 本组有逐项初核结论，剩余限制见各项

### share_poster_popup_show · 证据不足

海报弹层mount且!isLoadedOuter才发；app_id优先resource.shortId再id，image_id取props.imageId；不是海报生成完成，外部已加载路径不发。

修正：无；保留原始代码证据。
限制：最终商业化转换、全量辅助调用、契约及截图未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/exposure.ts:127
- Track：src/mobile/businessComponents/Share2AppPopup/GenPosterPopup/index.tsx:225

### tag_update_exposure · 证据不足

reportTagExposure回调需shouldShowLabelBadge、badgeType、targetLabelId，发送position=1及badge_type；自身不防重，由调用方控制每次首屏曝光，调用方尚待核。

修正：无；保留原始代码证据。
限制：最终商业化转换、全量辅助调用、契约及截图未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/exposure.ts:255
- Track：src/mobile/hooks/explore/useExploreCategoryUpdatePrompt.ts:125

### text_edit_page_show · 证据不足

TextView挂载effect发送trackParam.source及user_scene，无视口检测，也不等待字体或canvas完成。

修正：无；保留原始代码证据。
限制：最终商业化转换、全量辅助调用、契约及截图未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/exposure.ts:200
- Track：src/mobile/views/EditImageView/TextView/index.tsx:121

### topic_exposure · 证据不足

辅助器将ID数组映射topic_id后发送location as any；全部helper调用方和虚拟列表可见门槛尚未核全，不能以辅助器存在认定可见。

修正：无；保留原始代码证据。
限制：最终商业化转换、全量辅助调用、契约及截图未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/exposure.ts:56
- Track：packages/shared/handler/event/utils/exposure.ts:40

### unsubscribe_retain_popup_show · 证据不足

CancelSubscriptionPopup挂载effect传Type为type，不代表退订完成。Type来自调用方，实际枚举和入口待核。

修正：无；保留原始代码证据。
限制：最终商业化转换、全量辅助调用、契约及截图未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/exposure.ts:153
- Track：src/mobile/views/Personal/businessComponents/CancelSubscriptionPopup/index.tsx:19

## 第 63 组 · 本组有逐项初核结论，剩余限制见各项

### video_template_exposure · 证据不足

辅助器将arr映射template_id，location强转any；定义appgallery/discover_tag/faceswap，实际调用枚举与曝光观察链待核。

修正：无；保留原始代码证据。
限制：最终商业化转换、全量辅助调用、契约及截图未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/exposure.ts:62
- Track：packages/shared/handler/event/utils/exposure.ts:46

### credits_popup_open · 证据不足

useAppSvipOnetimeInfo挂载发送location后展开purchaseInfo（可覆盖location），再固定post_id空、scenario home_page、source_type pricing_toC、paid_method google_pay，另补Google商品信息布尔和location1/2。定义空对象不是无实际字段，最终商业化注入链待核。

修正：无；保留原始代码证据。
限制：最终商业化转换、全量辅助调用、契约及截图未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/commercial.ts:11
- Track：src/mobile/businessComponents/Purchase/hooks/useAppSvipOnetimeInfo.ts:88

### cross_platform_purchase_error · 证据不足

handleInterceptPayment检查currentBilling或currentHoldSubscription的非空channelCode与appOrigin不同，拦截时发送failure_reason=cross_platform_error并返回true；不是服务端支付错误。

修正：无；保留原始代码证据。
限制：最终商业化转换、全量辅助调用、契约及截图未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/commercial.ts:50
- Track：packages/shared/utils/payment/price/handle.ts:28

### google_play_popup_close_manually · 证据不足

handleGooglePlaySuccess仅!receipt且info==cancel发送transactionId，随后处理取消挽留/回调。typed定义空但此路径走legacy商业化转换，最终wire字段待核。

修正：无；保留原始代码证据。
限制：最终商业化转换、全量辅助调用、契约及截图未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/commercial.ts:15
- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:672
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:66
- dataWareHandle：packages/shared/utils/payment/price/util.ts:353

### pay_cancel_recovery · 证据不足

order存在时effect依赖orderId/source；helper采用订单trackData快照，追加order_id/period和discover横条标志，generate删chatbot_id，其他删app_id；不代表重试成功。

修正：无；保留原始代码证据。
限制：最终商业化转换、全量辅助调用、契约及截图未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/commercial.ts:16
- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:673
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:76
- loggingEvent:forwarded：src/mobile/businessComponents/Purchase/PayCancelRecovery/Popup/index.tsx:127

## 第 64 组 · 本组有逐项初核结论，剩余限制见各项

### pay_cancel_recovery_click · 证据不足

有order时先用订单快照上报button=continue，再设loading并重试paymentSubscription；生成类移除chatbot_id，其他移除app_id，discover保留原始拼写pay_cancle_recovery_bar_cilck。不是支付成功。

修正：无；保留原始代码证据。
限制：最终商业化转换、全量辅助调用、契约及截图未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/commercial.ts:17
- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:674
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:77
- loggingEvent:forwarded：src/mobile/businessComponents/Purchase/PayCancelRecovery/Popup/index.tsx:154

### pay_order_create_attempt · 证据不足

订阅和一次性支付在版本能力、商品信息等前置检查通过后生成nanoid，再于Onerway.openOrder之前发送商品/价格/金额/币种。前置返回不会发，不代表Native收银台已经打开。

修正：无；保留原始代码证据。
限制：最终商业化转换、全量辅助调用、契约及截图未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/commercial.ts:19
- Track：packages/shared/utils/payment/price/util.ts:550
- Track：packages/shared/utils/payment/price/util.ts:731

### pay_order_create_result · 确认代码存在差异

订阅和一次性openOrder返回即发success，早于Native调用及receipt校验；但同一try还包await支付回调，后续异常也会发failed，因此同attempt可能先success再failed。failure_reason取message||code可能number；不自动改正式类型。

修正：修正平台目录行为说明，明确触发边界及成功字段限制。
限制：最终商业化转换、全量辅助调用、契约及截图未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/commercial.ts:26
- Track：packages/shared/utils/payment/price/util.ts:558
- Track：packages/shared/utils/payment/price/util.ts:623
- Track：packages/shared/utils/payment/price/util.ts:739
- Track：packages/shared/utils/payment/price/util.ts:777

### pay_plan_popup · 证据不足

仅空定义，未发现直接调用；不能用其他定价页事件替代该事件证据。

修正：无；保留原始代码证据。
限制：最终商业化转换、全量辅助调用、契约及截图未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/commercial.ts:12
- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:668
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:63

### pay_result · 证据不足

多路径legacy：ExposurePayResult独立归因有值走dataWareHandleOnce并finally清除，否则普通发送；UserCredit失败、PC URL status=S且reason/transactionId非空、API socket成功均可发。缓存wareDataObj最后展开能覆盖字段，API预先计算config但未展开；所有支付链及转换仍待核。

修正：无；保留原始代码证据。
限制：最终商业化转换、全量辅助调用、契约及截图未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/commercial.ts:13
- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:669
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:64
- dataWareHandle：packages/shared/handler/event/utils/exposure.ts:274
- dataWareHandle：packages/shared/stores/UserCredit/interface.ts:48
- dataWareHandle：src/pc/hooks/init/useAppEvent.ts:65
- dataWareHandle：src/pc/hooks/init/useAppEvent.ts:78
- dataWareHandle：src/pc/views/API/utils/func.ts:48

## 第 65 组 · 本组有逐项初核结论，剩余限制见各项

### pay_verify_attempt · 证据不足

有receipt且未跳过验证时，在verifyThirdPartyPayment之前发送order_id/payment_type；订阅subscription，一次性one_time。无receipt或已有订阅跳过不会发attempt。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/commercial.ts:46
- Track：packages/shared/utils/payment/price/util.ts:460
- Track：packages/shared/utils/payment/price/util.ts:671

### pay_verify_result · 证据不足

code===0且verifyResult真才发success，server_code转字符串，耗时Date.now差毫秒；订阅notVerifyReceipt分支发skipped/0及skip_reason。订阅success后业务回调也在try里，回调同步抛错可再发failed；不得将此事件当到账证明。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/commercial.ts:37
- Track：packages/shared/utils/payment/price/util.ts:448
- Track：packages/shared/utils/payment/price/util.ts:465
- Track：packages/shared/utils/payment/price/util.ts:475
- Track：packages/shared/utils/payment/price/util.ts:676
- Track：packages/shared/utils/payment/price/util.ts:684

### pricing_popup · 证据不足

旧商业化转换路径和PC API入口/初始化弹窗共用。PC补api/free计划及国家分组价格类型；最终loggingData辅助生成和缓存尚未逐条核全，空定义不代表无业务字段。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/commercial.ts:10
- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:665
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:62
- dataWareHandle：packages/shared/handler/event/utils/exposure.ts:240
- dataWareHandle：src/pc/components/business/GlobalNav/APIEntrance.tsx:21
- dataWareHandle：src/pc/components/popups/initPaymentPopupFunc.tsx:22

### pricing_popup_open · 证据不足

forSVIP展开getLocation和purchaseInfo后覆盖location=_location，补价格分组、试用、升级/续费、Google信息、product_type/app_source等。需继续追踪effect及公共商业化字段，不当成支付完成。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/commercial.ts:9
- Track：packages/shared/hooks/payment/forSVIP.ts:343

### pricing_premium_subscribe_click · 证据不足

多个移动订阅按钮支付前发送。通用SubscribeButton需productInfo及subscribeInfo，显式paymentLocation走dataWareHandleOnce，其他走普通缓存；首屏续费、旧用户引导、两种挽留分支各自补周计划/折扣/试用字段。尚未验收全部最终转换。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/commercial.ts:14
- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:670
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:65
- dataWareHandle：src/mobile/businessComponents/Purchase/components/SubscribeButton/index.tsx:120
- dataWareHandle：src/mobile/businessComponents/Purchase/FirstScreenRenewalRecoveryPopup/index.tsx:159
- dataWareHandle：src/mobile/businessComponents/Purchase/OldUserPayGuide/index.tsx:192
- dataWareHandle：src/mobile/businessComponents/Purchase/PaidRetentionFreeTrialPopup/index.tsx:47
- dataWareHandle：src/mobile/businessComponents/Purchase/PaidRetentionPopup/index.tsx:119

## 第 66 组 · 本组有逐项初核结论，剩余限制见各项

### survey_popup · 已修正

CancelSurveyContent仅!submitDisabled时发送is_submit=submit和选项/其他文本以斜杠拼接，随后关闭和本地成功toast；不是问卷曝光，也无此处服务端提交请求。

修正：修正平台目录行为说明，明确触发边界及成功字段限制。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/commercial.ts:18
- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:697
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:67
- loggingEvent：src/mobile/components/PopupManager/PaymentCancelSurveyPopup/CancelSurveyContent.tsx:46

### app_detail_page_leave · 证据不足

移动详情页/弹窗与PC内容卸载清理路径发送app_id=resource.id、start_time和Date.now-startTime毫秒。不能把active_time当扣除后台后的有效可见时长；各闭包数据与挂载依赖待核。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/bigdata.ts:23
- Track：src/mobile/views/AppDetail/AppDetailPopup.tsx:94
- Track：src/mobile/views/AppDetail/index.tsx:142
- Track：src/pc/views/App/AppDetailV2/components/AppDetailContentV3/index.tsx:274

### result_download · 证据不足

10个直接调用跨移动/PC、分享、历史、视频换脸及imageOP。部分请求code0后发，其他在触发下载路径发；rest可能覆盖既有字段，图片app_category固定OTHER，视频经helper映射。不能统一称系统保存成功，全部下载Promise/Native回调待核。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/bigdata.ts:6
- Track：packages/shared/handler/ability/faceswap.ts:97
- Track：packages/shared/service/build/request/imageOP.ts:53
- Track：src/mobile/businessComponents/Share2AppPopup/process.ts:55
- Track：src/mobile/businessComponents/Share2AppPopup/process.ts:80
- Track：src/mobile/handler/image.ts:285
- Track：src/mobile/handler/image.ts:315
- Track：src/pc/handler/ability/init.ts:35
- Track：src/pc/handler/ability/init.ts:60
- Track：src/pc/views/App/AppDetailV2/components/HistoryButton/GenHistory/index.tsx:197
- Track：src/pc/views/App/AppDetailV2/components/HistoryButton/GenHistory/index.tsx:232

### chatbot_after_gen_guidance_delete · 证据不足

需message.id/conversationId，发起recordChatbotMessageVisible但不await，查session映射Custom→ugc否则pgc（不存在也pgc），bot缺失为空；是本地隐藏上报，不保证接口成功。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:274
- Track：packages/chatbot/hooks/useChatSocketConnection.ts:57

### chatbot_bond_journey_click_entry · 证据不足

亲密度入口点击仅chatbotId和status存在才发当前level，实际弹窗打开边界与无状态点击待核。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:248
- Track：packages/chatbot/mobile/views/ChatbotIntimacyProgressBar/index.tsx:103

## 第 67 组 · 本组有逐项初核结论，剩余限制见各项

### chatbot_bond_journey_click_upgrade_pop · 证据不足

升级弹窗按钮仅chatbotId存在才发level；点击不代表等级改变，按钮与关闭顺序待核。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:256
- Track：packages/chatbot/mobile/views/ChatbotIntimacyLevelUpModal/index.tsx:106

### chatbot_bond_journey_expose_entry · 证据不足

status/chatbotId存在且exposedRef未设置才发并置true；无视口比例检查，ref生命周期和切bot重置待核。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:244
- Track：packages/chatbot/mobile/views/ChatbotIntimacyProgressBar/index.tsx:87

### chatbot_bond_journey_expose_upgrade_pop · 证据不足

升级弹窗effect在chatbotId存在时发送levelUpEvent.currentLevel，无视口检测；levelUpEvent和重复effect门槛待核。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:252
- Track：packages/chatbot/mobile/views/ChatbotIntimacyLevelUpModal/index.tsx:89

### chatbot_bond_journey_send_intro · 证据不足

检测levelUpEvent从有到无后，需session、store bot/status，且该level未报，history含IntimacyPrologue才发送。不是实际发送消息的接口回调，可能匹配既有历史序言。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:260
- Track：packages/chatbot/mobile/views/ChatbotDetailPopup/useIntimacyIntroTrack.ts:42

### chatbot_bulb_toggle · 证据不足

store切换到next状态时展开chatbotInfo并覆盖operation=open/close；不代表推荐回复已返回，全部调用源和全局字段默认值待核。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:84
- Track：packages/chatbot/mobile/views/ChatbotDetailPopup/store.ts:39

## 第 68 组 · 本组有逐项初核结论，剩余限制见各项

### chatbot_card_click · 证据不足

drama辅助方法发送空对象；全部辅助调用入口及商业归因注入尚待核，不以包装器存在认定用户点击路径已验收。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:194
- Track：packages/chatbot/utils/drama.ts:33

### chatbot_card_exposure · 证据不足

drama辅助方法发送空对象，无本层可见性约束；需继续追踪卡片注册和观察器调用。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:193
- Track：packages/chatbot/utils/drama.ts:28

### chatbot_custom_avatar_page_show · 证据不足

ChatbotProfileEditor effect发送type=user_avatar或chatbot_avatar及chatbotId，组件挂载不能代表图片加载完成。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:141
- Track：packages/chatbot/mobile/views/ChatbotProfile/views/ChatbotProfileEditor/index.tsx:75

### chatbot_custom_avatar_save · 证据不足

saving拦截及schema校验通过后await用户/机器人profile更新成功返回，再toast、发送type/chatbot_id并关闭；catch不发，底层store是否严格校验响应待核。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:145
- Track：packages/chatbot/mobile/views/ChatbotProfile/views/ChatbotProfileEditor/index.tsx:119

### chatbot_custom_bg_auto_click · 证据不足

先发送反转后的is_auto，再await updateChatbotProfile；失败回滚本地且toast，已发事件不会撤销。表示切换尝试而非服务端保存成功。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:156
- Track：packages/chatbot/mobile/views/ChatbotProfile/views/ChatbotVisualEditor/index.tsx:106

## 第 69 组 · 本组有逐项初核结论，剩余限制见各项

### chatbot_custom_bg_page_show · 证据不足

VisualEditor挂载effect发送chatbotId，不等待背景图片加载或视口确认。

修正：无；保留分支差异。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:149
- Track：packages/chatbot/mobile/views/ChatbotProfile/views/ChatbotVisualEditor/index.tsx:65

### chatbot_custom_bg_set · 证据不足

结果页及背景编辑页的成功回调发送location=result_page/custom_bg_page；编辑页来自useSetChatbotBackground.onSuccess，结果页查session无bot回落空ID。底层请求判成功和回调异常链待核。

修正：无；保留分支差异。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:152
- Track：packages/chatbot/mobile/views/ChatBotMediasPopup/ChatBottom/ActionButtonWrapper.tsx:27
- Track：packages/chatbot/mobile/views/ChatbotProfile/views/ChatbotVisualEditor/index.tsx:87

### chatbot_dance_click · 证据不足

需session.chatbot，先发botID与可选recorder.chatbot_type，再blur并打开DancePopup，不是生成点击。

修正：无；保留分支差异。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:174
- Track：packages/chatbot/mobile/views/ChatbotDetailPopup/index.tsx:435

### chatbot_dance_generate_intention · 证据不足

需选中模板且非generatingRef；先置防重并发事件，再await可选onGenerate，只有返回真才关闭。回调不存在或失败也已记录意图，不含模板ID。

修正：无；保留分支差异。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:178
- Track：packages/chatbot/mobile/views/ChatbotDancePopup/index.tsx:308

### chatbot_header_more_popup_click · 证据不足

菜单选项change_background/change_language先发detail，再关闭菜单和执行action；不保证目标弹层打开成功。

修正：无；保留分支差异。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:81
- Track：packages/chatbot/mobile/views/ChatbotDetailPopup/components/MoreMenu/index.tsx:21

## 第 70 组 · 本组有逐项初核结论，剩余限制见各项

### chatbot_header_more_popup_show · 证据不足

handleToggle仅原open为false时发空对象，再反转状态；关闭不发，无视口检测。

修正：无；保留分支差异。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:80
- Track：packages/chatbot/mobile/views/ChatbotDetailPopup/components/MoreMenu/index.tsx:16

### chatbot_imagine_character_click · 证据不足

mode回调Us与Self分别提前返回，其他模式均发character；botID取全局recorder或空，不是生成成功。

修正：无；保留分支差异。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:236
- Track：packages/chatbot/mobile/views/ChatbotDetailPopup/hooks/useImageModeHandlers.ts:148

### chatbot_imagine_click · 证据不足

需chatbotSession，先发recorder botID（缺失为空），再打开新Imagine选择面板。

修正：无；保留分支差异。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:229
- Track：packages/chatbot/mobile/views/ChatbotDetailPopup/hooks/useImageModeHandlers.ts:294

### chatbot_imagine_couple_click · 证据不足

mode==Us分支发送botID与hasChatbotUserAvatar当前store判断值，然后返回；表示选择合照模式，不保证用户头像补充完成。

修正：无；保留分支差异。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:232
- Track：packages/chatbot/mobile/views/ChatbotDetailPopup/hooks/useImageModeHandlers.ts:135

### chatbot_imagine_me_click · 证据不足

mode==Self分支发送botID及当前has_user_avatar，然后返回；不是生成成功。

修正：无；保留分支差异。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:239
- Track：packages/chatbot/mobile/views/ChatbotDetailPopup/hooks/useImageModeHandlers.ts:142

## 第 71 组 · 本组有逐项初核结论，剩余限制见各项

### chatbot_introduction_click · 证据不足

richMediaTracking包装器传chatbotId/conversationId/state=Expand或Collapse。全部调用绑定与初始展开行为待追踪，保留大小写枚举。

修正：无；保留分支差异。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:281
- Track：packages/chatbot/mobile/views/ChatbotDetailPopup/utils/richMediaTracking.ts:36

### chatbot_language_card_click · 证据不足

点击语言选项发is_default_language（option.languageName与normalized系统语言严格比较）及language，再chooseLanguage；点击更多入口发送空对象再打开语言层，两字段因此可选。

修正：无；保留分支差异。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:65
- Track：packages/chatbot/mobile/views/ChatbotDetailPopup/components/ReplyLanguagePrompt/index.tsx:56
- Track：packages/chatbot/mobile/views/ChatbotDetailPopup/components/ReplyLanguagePrompt/index.tsx:63

### chatbot_language_card_show · 证据不足

消息曝光helper仅处理exposedIds内非Thumbnail且businessType=LanguageSelectPrompt，解析成功后default_language优先currentSelect，否则系统语言将首个短横线改下划线。helper自身未做生命周期防重。

修正：无；保留分支差异。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:62
- Track：packages/chatbot/mobile/views/ChatbotDetailPopup/utils/messageExposure.ts:39

### chatbot_language_change_toast_show · 证据不足

同曝光helper的LanguageSlowPrompt分支传原始systemLanguage，不同于语言卡的normalizedSystemLanguage；不是普通Toast调用即发送。上游曝光去重待核。

修正：无；保留分支差异。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:69
- Track：packages/chatbot/mobile/views/ChatbotDetailPopup/utils/messageExposure.ts:47

### chatbot_message_receive · 证据不足

store处理回复落地并同步stream后发送，wait_time=Date.now-startTime毫秒，from_goon来自关联前消息及状态，展开全局chatbotInfo。失败分支同样可发；startTime全部回落路径和网络失败覆盖待核。

修正：无；保留分支差异。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:89
- Track：packages/chatbot/store/index.ts:654

## 第 72 组 · 本组有逐项初核结论，剩余限制见各项

### chatbot_message_retry · 证据不足

消息重试按钮先发chatbot/conversation/reply ID和Custom→ugc否则pgc，再retryReplayMessage并滚动，表示尝试，不代表重试成功。

修正：无；保留分支差异。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:123
- Track：packages/chatbot/mobile/views/ChatbotDetailPopup/index.tsx:951

### chatbot_message_send · 确认代码存在差异

普通聊天await socket ACK后按code0且无errorCode设is_success；5秒超时在该发送前抛错，失败覆盖不完整。Imagine custom_image在生成请求前固定true，含义与普通聊天不同，不能统一为发送成功；保留分支证据。

修正：修正平台目录行为说明，明确触发边界及成功字段限制。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:18
- Track：packages/chatbot/mobile/views/ChatbotDetailPopup/hooks/useImageModeHandlers.ts:185
- Track：packages/chatbot/store/index.ts:429

### chatbot_message_send_backtrack · 证据不足

先校验目标存在及最大回溯条数，再await recallConversation，成功/失败分别传字符串true/false；成功事件早于本地history裁剪，后续裁剪失败仍可能已发true。

修正：无；保留分支差异。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:138
- Track：packages/chatbot/mobile/views/ChatbotDetailPopup/hooks/useChatbotMessageOperationFlow.ts:61
- Track：packages/chatbot/mobile/views/ChatbotDetailPopup/hooks/useChatbotMessageOperationFlow.ts:63

### chatbot_message_send_goon · 证据不足

普通消息ACK后且isGoOn为真才另发，is_success=code0且无errorCode；超时前抛错不会发本事件。

修正：无；保留分支差异。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:129
- Track：packages/chatbot/store/index.ts:439

### chatbot_message_send_retry · 证据不足

ChatbotAiTextMessage按钮stopPropagation后发空对象再void retryReplayMessage；不等待成功，与带reply_id的chatbot_message_retry是不同action。

修正：无；保留分支差异。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:137
- Track：packages/chatbot/mobile/views/ChatbotDetailPopup/components/ChatbotAiTextMessage.tsx:189

## 第 73 组 · 本组有逐项初核结论，剩余限制见各项

### chatbot_more_language_page_save · 证据不足

saveDisabled或无draftLanguage返回；先发送source/is_default_language（系统语言首个横线转下划线严格比较）/language，再调用save，不代表服务端保存成功。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:75
- Track：packages/chatbot/mobile/views/ChatbotReplyLanguagePopup/index.tsx:50

### chatbot_more_language_page_show · 证据不足

回复语言弹层mount effect发送props.source，cleanup释放语言历史；不等待语言列表可见。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:72
- Track：packages/chatbot/mobile/views/ChatbotReplyLanguagePopup/index.tsx:34

### chatbot_quick_reply_click · 证据不足

disabled拦截后先传全局chatbotInfo，再onSelect(text)，没有发送建议文本字段，也不保证消息发送成功。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:57
- Track：packages/chatbot/mobile/views/ChatbotDetailPopup/hooks/useQuickReplyTracking.ts:33

### chatbot_quick_reply_expose · 证据不足

options非空且exposedRef未报时effect发chatbotInfo并防重；无视口检测，options替换及会话切换时ref重置链待核。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:53
- Track：packages/chatbot/mobile/views/ChatbotDetailPopup/hooks/useQuickReplyTracking.ts:26

### chatbot_restart_click · 证据不足

取当前活跃会话和bot（缺失为空），消红点，发送后打开确认层；不是重启成功。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:265
- Track：packages/chatbot/mobile/views/ChatbotDetailPopup/components/ChatbotRestartEntry/index.tsx:28

## 第 74 组 · 本组有逐项初核结论，剩余限制见各项

### chatbot_restart_popup_click · 已修正

确认先取最新会话发is_success=true，再await restartConversation，失败null仍已发true；取消发false并用打开时闭包ID。is_success实际区分确认/取消，不是重启结果。

修正：修正平台目录行为说明，明确触发边界及成功字段限制。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:269
- Track：packages/chatbot/mobile/views/ChatbotDetailPopup/components/ChatbotRestartEntry/index.tsx:45
- Track：packages/chatbot/mobile/views/ChatbotDetailPopup/components/ChatbotRestartEntry/index.tsx:64

### chatbot_send_photo_click · 证据不足

先发recorder bot/persona字段（缺失空），blur输入框，100ms后打开收藏选择层；不等弹层可见或图片上传。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:187
- Track：packages/chatbot/mobile/views/ChatbotDetailPopup/SendPhotoEntry.tsx:50

### chatbot_send_photo_generate · 证据不足

3个路径：SendPhotoEntry先loadData成功再发送后generateByURL；Snap经triggerConversationImageGenerate.onTracked；图片消息hook另有直接发送。不是统一的生成成功，onTracked及消息hook完整链待核。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:182
- Track：packages/chatbot/mobile/views/ChatbotDetailPopup/hooks/useImageModeHandlers.ts:262
- Track：packages/chatbot/mobile/views/ChatbotDetailPopup/SendPhotoEntry.tsx:36
- Track：packages/chatbot/shared/components/ChatbotImageMessage/hook.tsx:202

### chatbot_snap_character_click · 证据不足

handleQuickGenerate需session且!isBusy，先关闭选择层，非Us分支发character，再走生成/头像校验路径；不是生成成功。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:226
- Track：packages/chatbot/mobile/views/ChatbotDetailPopup/hooks/useImageModeHandlers.ts:234

### chatbot_snap_click · 证据不足

入口回调发送recorder botID或空，本回调无session/isBusy guard；实际绑定及打开面板由外层处理待核。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:219
- Track：packages/chatbot/mobile/views/ChatbotDetailPopup/hooks/useImageModeHandlers.ts:288

## 第 75 组 · 本组有逐项初核结论，剩余限制见各项

### chatbot_snap_couple_click · 证据不足

QuickGenerate通过session与busy门槛后，mode Us发送botID及闭包profile的has_user_avatar；后续生成再读最新avatar，曝光字段与最终头像可能不同。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:222
- Track：packages/chatbot/mobile/views/ChatbotDetailPopup/hooks/useImageModeHandlers.ts:229

### chatbot_stream_show_end · 证据不足

completeStreamDisplay仅runtime存在且canCompleteRuntime成立，删除runtime前取trackingParams，同步replay后发送；不是单纯网络结束，完成判定及展示调用源待核。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:117
- Track：packages/chatbot/store/stream/index.ts:105

### chatbot_stream_show_start · 证据不足

handleStreamSnapshot之后仅先前无runtime且当前创建成功才取参数并发送；同runtime后续chunk不重发，真实可见与缓冲处理仍待核。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:111
- Track：packages/chatbot/store/stream/index.ts:53

### chatbot_tips_click · 证据不足

仅空定义，未发现直接调用；不能替代topic_card/quick_reply证据。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:192

### chatbot_topic_card_click · 证据不足

先展开chatbotInfo并覆盖scenario，再onSend(card.text)；未上报card ID，不等待消息ACK。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:48
- Track：packages/chatbot/mobile/views/ChatbotDetailPopup/TopicCards/index.tsx:75

## 第 76 组 · 本组有逐项初核结论，剩余限制见各项

### chatbot_topic_card_expose · 证据不足

cards非空且ref未报时发送chatbotInfo/scenario并置ref，无视口比例判断；首日/回访scenario和ref重置待核。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:43
- Track：packages/chatbot/mobile/views/ChatbotDetailPopup/TopicCards/index.tsx:67

### chatbot_video_end · 证据不足

富媒体helper发送chatbot/conversation ID，material_id由URL pathname去除query/hash（异常回落split）；不含观看时长，播放器绑定待核。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:301
- Track：packages/chatbot/mobile/views/ChatbotDetailPopup/utils/richMediaTracking.ts:70

### chatbot_video_finish · 证据不足

drama helper发空对象，不含素材或会话字段；全部播放结束调用与去重尚待核。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:195
- Track：packages/chatbot/utils/drama.ts:37

### chatbot_video_option · 证据不足

drama helper发送location，类型来自ChatbotVideoOptionLocation；全部调用实际枚举、点击与导航边界待核。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:196
- Track：packages/chatbot/utils/drama.ts:41

### chatbot_video_start · 证据不足

富媒体helper发送bot/conversation及URL pathname素材标识，不含播放时长；注释意图为每轮从头开始，实际播放器续播防重需追踪调用验证。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:295
- Track：packages/chatbot/mobile/views/ChatbotDetailPopup/utils/richMediaTracking.ts:61

## 第 77 组 · 本组有逐项初核结论，剩余限制见各项

### chatbot_view_photo_click · 确认代码存在差异

图片消息hook直接调用包含recorder bot/persona、可选level；chatbot_type使用||空字符串回落，而定义pgc|ugc|undefined不含空字符串。保留代码差异，完整点击分支待核。

修正：无；保留原始key和观察类型。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:159
- Track：packages/chatbot/shared/components/ChatbotImageMessage/hook.tsx:208

### chatbot_view_result_download · 证据不足

tracking辅助器先展开data，再用??补chatbot_type和bond_level，显式空字符串不回落；全部下载调用和Native保存边界待核。

修正：无；保留原始key和观察类型。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:166
- Track：packages/chatbot/utils/tracking.ts:111

### chatbot_view_visual_detail · 证据不足

富媒体全屏helper传Expand/Collapse、bot/conversation、URL pathname素材标识及picture/gif/video；系统全屏确认与组件查看器显隐需要追踪绑定，不能仅凭包装器认定。

修正：无；保留原始key和观察类型。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:287
- Track：packages/chatbot/mobile/views/ChatbotDetailPopup/utils/richMediaTracking.ts:50

### custom_chatbot_click · 证据不足

入口非loading先发空对象，再根据resId直接创建或请求绑定并resolveEntryAction；打开已有会话也可能发，不是创建成功。

修正：无；保留原始key和观察类型。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:200
- Track：packages/chatbot/mobile/components/ChatbotCreateEntry/index.tsx:39

### custom_chatbot_finish · 证据不足

socket回调helper按success传boolean，gender/relationship/personality转String，character实际personality编号字符串；socket注册过滤、重复及失败分支待核。

修正：无；保留原始key和观察类型。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:206
- Track：packages/chatbot/hooks/useChatbotCreateSocket.ts:28

## 第 78 组 · 本组有逐项初核结论，剩余限制见各项

### custom_chatbot_send_intro · 证据不足

需fromCreation、session且ref未发，仅chatbot.introduction非空即发并置ref；不检查消息发送接口，不等于新序言已送达。

修正：无；保留原始key和观察类型。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:212
- Track：packages/chatbot/mobile/views/ChatbotDetailPopup/useCreationTrack.ts:23

### custom_chatbot_send_opener · 证据不足

需创建来源/session且未报；history任一model文本非空即发，未要求新创建的开场白特定消息；生命周期ref防重。

修正：无；保留原始key和观察类型。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:215
- Track：packages/chatbot/mobile/views/ChatbotDetailPopup/useCreationTrack.ts:38

### custom_chatbot_start_chat_click · 证据不足

仅定义gender/relationship/character，未发现直接调用；不可用custom_chatbot_click替代。

修正：无；保留原始key和观察类型。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- makeTracker：packages/shared/handler/event/impl/chatbot.ts:201

### addtodesktop_download_popup · 证据不足

legacy enum/switch存在，clickObject转换click_object，未检出直接调用；不能认定当前PWA下载弹窗曝光在发。

修正：无；保留原始key和观察类型。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:640
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:53

### addtodesktop_load_success · 证据不足

legacy enum/switch把isFirstTime转is_first_time，未发现直接调用；不能认定安装或加载成功事件有现行调用。

修正：无；保留原始key和观察类型。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:633
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:52

## 第 79 组 · 本组有逐项初核结论，剩余限制见各项

### app_edit_click · 证据不足

PC个人卡片isOffline拦截后evokeLoginPopup、openLink，再发appid短ID及app_id长ID；不等待登录成功。legacy透传data，完整登录包装待核。

修正：无；保留原始key和观察类型。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:660
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:37
- loggingEvent：src/pc/views/AiPersonalPage/components/PersonalAppCard/index.tsx:137

### app_publish_click · 证据不足

先拦离线/保存中，再发事件，后续未修改fork或无作品仍可阻断；switch将forkFromId→build_from=fork/scratch、type→app_type，原参数不等于wire key。

修正：无；保留原始key和观察类型。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:576
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:36
- loggingEvent：src/pc/views/AppBuild/components/AppBuildNav/usePublish.tsx:46

### app_tab · 证据不足

BaseListener回调先updateLogging({tab})，再发tab/currentTab；legacy转换为presentation_mode/current_tab，空回落。事件总线所有发射点尚待核。

修正：无；保留原始key和观察类型。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:400
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:19
- loggingEvent：packages/shared/components/base/BaseListener/wrapper.tsx:75

### autologin · 证据不足

旧账号响应回调按URL映射email/google/phone/facebook/tourist，user_id/是否游客来自data；switch又补全局location。与名称不同不只自动恢复登录，响应成功过滤入口待核，user_id归公共信封。

修正：无；保留原始key和观察类型。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:501
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:23
- loggingEvent：packages/shared/utils/event/nonBussiness/AccountEvent.ts:80

### back_to_top · 证据不足

BaseListener包装器无参发送；switch空分支不补业务字段。总线发射点和回到顶部实际完成待核。

修正：无；保留原始key和观察类型。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:649
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:49
- loggingEvent：packages/shared/components/base/BaseListener/wrapper.tsx:66

## 第 80 组 · 本组有逐项初核结论，剩余限制见各项

### banner_click_startcreate · 证据不足

PC VideoBanner先发空对象，再看userName跳build或登录后跳转；不代表已进入创建页。legacy透传空业务数据。

修正：无；保留原始key和观察类型。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:675
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:68
- loggingEvent：src/pc/components/business/GlobalNav/VideoBanner/index.tsx:140

### banner_click_viewdetails · 证据不足

PC VideoBanner按钮回调发空对象，legacy透传；跳转/弹层逻辑在其他绑定层待核，不说明详情已加载。

修正：无；保留原始key和观察类型。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:676
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:69
- loggingEvent：src/pc/components/business/GlobalNav/VideoBanner/index.tsx:153

### big_image · 证据不足

PC任务卡和队列需task.isSuccess且无task_preview才发，然后打开预览；先前卡片回调也可能运行。switch将imageId/appId改为image_id/app_id，origin=hover/popup/sidebar；不是任意任务点击。

修正：无；保留原始key和观察类型。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:621
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:42
- loggingEvent：src/pc/components/business/Tasks/TaskInfo/index.tsx:145
- loggingEvent：src/pc/components/business/Tasks/TaskQueue/index.tsx:178

### build_click · 证据不足

PC全局入口先读isVIP发is_vip，再初始化构建弹层并dispatch；不等待权限或创建完成，legacy defaultData=true。

修正：无；保留原始key和观察类型。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:514
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:25
- loggingEvent：src/pc/components/business/GlobalNav/index.tsx:95

### change · 证据不足

BaseListener包装器发送无参，legacy switch空分支；仅名称无法确定换图/切换语义，总线发射源待核。

修正：无；保留原始key和观察类型。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:647
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:58
- loggingEvent：packages/shared/components/base/BaseListener/wrapper.tsx:50

## 第 81 组 · 本组有逐项初核结论，剩余限制见各项

### check_in_exposure · 证据不足

移动AutoCheckIn及PC CheckInCard mount发送无业务参数，legacy透传；不能与带连续天数的check_in_new混同，不证明奖励到账。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:687
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:86
- loggingEvent：src/mobile/views/DailyTask/components/AutoCheckIn/index.tsx:23
- loggingEvent：src/pc/views/DailyTask/components/CheckInCard/index.tsx:20

### creator_bonus_click · 证据不足

BaseListener无参包装发送，switch空分支；实际总线发射入口和点击后的导航待核。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:648
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:43
- loggingEvent：packages/shared/components/base/BaseListener/wrapper.tsx:70

### creator_support_banner_click_PC · 证据不足

PC横幅先无参发送，再按isInnerChina打开不同飞书文档；不等待新窗口成功，switch使用defaultData=true。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:522
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:104
- loggingEvent：src/pc/components/business/GlobalNav/CreatorHelpBanner/index.tsx:25

### credits_popup · 证据不足

曝光helper先删除purchase_credits_type/get_googleplay_info/is_success旧缓存，再展开params并强制app_id=lastClickedAppId；商业化最终缓存合并待核，不等同credits_popup_open。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:666
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:74
- dataWareHandle：packages/shared/handler/event/utils/exposure.ts:247

### fork_app · 证据不足

仅!isMobile发，HTTP fork请求之前；appid=shortId||id，app_id=params.appid，含VIP/origin。legacy透传，不代表fork成功，参数命名与长短ID需调用方核实。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:661
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:34
- loggingEvent：packages/shared/service/app/index.ts:344

## 第 82 组 · 本组有逐项初核结论，剩余限制见各项

### h5_popup_click · 证据不足

SEO分享引导与H5Import登录/生成拦截共6处，close和download分支；下载先发再window.open，关闭路径仅明确isClickClose才发。legacy透传type等原始字段，不保证外跳成功。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:725
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:103
- loggingEvent：packages/chatbot/mobile/views/ChatbotSeoMessageH5/SeoGuideModal.tsx:57
- loggingEvent：packages/chatbot/mobile/views/ChatbotSeoMessageH5/SeoGuideModal.tsx:65
- loggingEvent：src/mobile/components/H5Import/index.ts:71
- loggingEvent：src/mobile/components/H5Import/index.ts:85
- loggingEvent：src/mobile/components/H5Import/index.ts:113
- loggingEvent：src/mobile/components/H5Import/index.ts:126

### h5_popup_show · 证据不足

SEO手动弹层和H5Import.beforeOpenModal发送，早于打开完成，SEO eventParams来自包装；不是视口确认。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:724
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:102
- loggingEvent：packages/chatbot/mobile/views/ChatbotSeoMessageH5/SeoGuideModal.tsx:76
- loggingEvent：src/mobile/components/H5Import/index.ts:78
- loggingEvent：src/mobile/components/H5Import/index.ts:120

### image_exposure · 证据不足

旧ExposureManager仅临时图片数组非空批发，发后并入session去重数组并清空；switch arrList→exposureList，补全局labelId/name且defaultData=false；注册和观察门槛待核。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:611
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:47
- loggingEvent：packages/shared/utils/event/newDataWareHose/ExposureManager/index.ts:77

### image_input_result_switch · 证据不足

PC Gallery调用onClick切到相反mode后再发mode/switch_method=hotkey或click，onClick抛错则不发；legacy透传，不保证目标图加载完成。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:664
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:57
- loggingEvent：src/pc/views/Gallery/components/mode-switch/index.tsx:47

### image_publish · 证据不足

服务函数先消费一次性TASK_PUBLISH上下文，发送pictureid及展开data后才HTTP发布；switch生成image_id/pictureid和可选origin/app_id，不是发布成功，缓存可覆盖输入pictureid。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:315
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:14
- loggingEvent：packages/shared/service/work/index.ts:65

## 第 83 组 · 本组有逐项初核结论，剩余限制见各项

### install_now · 证据不足

BaseListener无参包装发送，switch defaultData=true；全部安装按钮发射源和beforeinstallprompt回调待核，不证明安装完成。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:629
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:54
- loggingEvent：packages/shared/components/base/BaseListener/wrapper.tsx:93

### landing_build_click · 证据不足

PC落地页先无参发，再openLink(A1art+build)，不等待加载；legacy defaultData=true。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:523
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:26
- loggingEvent：src/pc/views/LandPage/index.tsx:129

### leave · 证据不足

page-state把duration毫秒向下取整为秒，start_time格式Asia/Shanghai字符串；普通分支小于1秒不发，close分支无此门槛，用onlyGetData后sendBeacon，返回值未作为送达证明。完整生命周期计时待核。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:723
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:101
- loggingEvent：src/bootstrap/page-state.ts:19
- loggingEvent：src/bootstrap/page-state.ts:32

### login_button_click · 证据不足

移动登录弹层和表单5处在email切页/Google或Facebook登录之前发method；不代表成功，旧switch透传且defaultData=true，未发现此事件phone调用。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:509
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:30
- loggingEvent：src/mobile/views/Login/LoginPopup/index.tsx:53
- loggingEvent：src/mobile/views/Login/LoginPopup/index.tsx:72
- loggingEvent：src/mobile/views/Login/LoginPopup/index.tsx:79
- loggingEvent：src/mobile/views/Login/LoginRegister/components/LoginRegisterForm/index.tsx:294
- loggingEvent：src/mobile/views/Login/LoginRegister/components/LoginRegisterForm/index.tsx:307

### login_success · 证据不足

旧AccountEvent注册回调发type=sign_up、登录发login，均含游客、method/pre_user_id/visitor_bind/is_visitor；响应拦截成功门槛及与新typed事件重复待核。pre_user_id保留业务语义，不替换公共user_id。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:677
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:70
- loggingEvent：packages/shared/utils/event/nonBussiness/AccountEvent.ts:54
- loggingEvent：packages/shared/utils/event/nonBussiness/AccountEvent.ts:96

## 第 84 组 · 本组有逐项初核结论，剩余限制见各项

### new_feature_confirm · 证据不足

BaseListener注册回调发送origin=build_upgrade_modal，legacy透传；实际弹窗绑定和确认后的动作待核。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:688
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:89
- loggingEvent：packages/shared/components/base/BaseListener/wrapper.tsx:180

### optimize · 证据不足

trackerOptimize包装器接收任意data；switch imgId→image_id/pictureid，可选origin/app_id且defaultData=true。所有调用及计费/权限门槛待核，不能称精绘完成。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:306
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:13
- loggingEvent：packages/shared/utils/event/newDataWareHose/index.ts:1162

### optimize_success · 证据不足

socket有sourceId且resultData.id、build页时发送，早于loadImageAsync；另一task socket路径也发。switch imgId→pictureid/image_id，sourceId保留驼峰。不是图片已显示，需查跨路径重复。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:303
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:12
- loggingEvent：packages/shared/handler/socket/init.ts:40
- loggingEvent：packages/shared/handler/task/useTaskSocket.ts:429

### pic_like · 证据不足

两个service仅addition===true在HTTP之前发；取消不发。switch pictureid→image_id/pic_id，可选truthy is_ai_video；表示点赞尝试，不保证请求成功。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:393
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:18
- loggingEvent：packages/shared/service/gallery/app.ts:93
- loggingEvent：packages/shared/service/work/index.ts:42

### pic_visit · 证据不足

图片recommend service在GET之前发ID，origin从本地PIC_ORIGIN缺省share（忽略入参origin）；switch current_tab强制覆盖为全局origin，searchword取本地关键词缺省none。分页同service可发，不能直接解释为唯一详情访问。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:383
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:17
- loggingEvent：packages/shared/service/gallery/app.ts:67

## 第 85 组 · 本组有逐项初核结论，剩余限制见各项

### preference_selection_exposure · 证据不足

只有legacy枚举定义，未检出直接调用或本事件专用转换；不能认定当前偏好面板曝光正在上报。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:91

### preference_selection_skip · 证据不足

只有legacy枚举，未发现直接调用或专用转换；不以其他新手跳过事件替代。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:92

### preference_selection_start · 证据不足

enum和switch将preferenceNames/Ids改为preference_names/ids，未发现直接调用；字段转换存在不代表页面可达或实时上报。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:691
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:93

### profile_enter · 证据不足

PC个人页effect发送userId（被访问对象，驼峰保留），switch检测URL source=share后取全局userLocation，发送后重置other；不是登录者公共user_id。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:530
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:28
- loggingEvent：src/pc/views/AiPersonalPage/index.tsx:22

### purchase_credits_button_click · 证据不足

一次性购买按钮需productInfo，先发送商品解析类型及归因/Google信息，再paymentOnetimeCredit；source固定app_enter。最终商业化缓存字段和商品映射helper待核，不等于购买成功。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:671
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:73
- dataWareHandle：src/mobile/businessComponents/Purchase/components/OnetimePaymentButton/index.tsx:32

## 第 86 组 · 本组有逐项初核结论，剩余限制见各项

### purchase_credits_result · 证据不足

ExposureCreditsPayResult包装器把params交商业化dataWareHandle，legacy透传；调用方包括无receipt/校验异常路径，全部参数覆盖与成功到账链待核。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:667
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:75
- dataWareHandle：packages/shared/handler/event/utils/exposure.ts:280

### pwa_icon_click · 证据不足

仅legacy enum，未检出直接调用；不将install_now认定为本事件证据。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:55

### rank_visit · 证据不足

PC排行榜mount分支：已有rankLocation先发再重置none，否则先置byUrl再发。switch读取全局rankLocation并写session CURRENT_TAB=rank；location不是简单referrer。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:536
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:29
- loggingEvent：src/pc/views/RankingLandPage/index.tsx:24
- loggingEvent：src/pc/views/RankingLandPage/index.tsx:30

### rate_popup_click_gotogoogle · 证据不足

RatingGuidePopup提交且rating===5，先openLink Google评论页再发送空业务事件；不证明已评分或成功外跳。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:683
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:83
- loggingEvent：src/mobile/businessComponents/RatingGuidePopup/index.tsx:83

### rate_popup_click_submit · 证据不足

同提交回调rating!==5时本地成功toast后发送rate=rating，未见此处服务端反馈请求。不能用toast证明提交已入库，按钮禁用门槛待核。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:686
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:82
- loggingEvent：src/mobile/businessComponents/RatingGuidePopup/index.tsx:86

## 第 87 组 · 本组有逐项初核结论，剩余限制见各项

### rate_popup_close · 证据不足

评分弹层关闭按钮先无参发送再popStack，不包括所有自动卸载；legacy空分支。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:682
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:81
- loggingEvent：src/mobile/businessComponents/RatingGuidePopup/index.tsx:76

### rate_popup_show · 证据不足

仅enum和switch空分支，未检出直接调用；不能把rating_popup_show新事件视为同一Raw action。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:681
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:80

### recommend_app_exposure · 证据不足

仅legacy枚举，未发现直接调用；不以app_exposure_direct替代当前证据。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:94

### referral_link_success · 证据不足

REGISTER转换内部仅inviter非空就发送，无参且defaultData=true；名称success不是独立验证邀请兑换成功的接口结果，解密和归因链待核。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:526
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:27
- loggingEvent：packages/shared/utils/event/newDataWareHose/index.ts:485

### register · 证据不足

ExposureRegister包装器发送任意params；legacy转换做邀请码/Google referrer解密归因，重建method/is_visitor/location/tag及广告字段，公共user_id进paramsData。完整异步失败与真实注册响应链待核。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:417
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:22
- loggingEvent：packages/shared/handler/event/utils/exposure.ts:284

## 第 88 组 · 本组有逐项初核结论，剩余限制见各项

### save_app · 证据不足

service无论addition true/false都在HTTP收藏请求前发送appid/app_long_id/app_id/addition；switch追加按app_id查的trace_info并覆盖同名值。不代表收藏成功。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:652
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:33
- loggingEvent：packages/shared/service/app/index.ts:261

### sortmode_switch · 证据不足

BaseListener接收sort，switch仅生成sortmode_mode；原始sort不是wire key。所有排序入口及请求完成边界待核。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:404
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:20
- loggingEvent：packages/shared/components/base/BaseListener/wrapper.tsx:79

### tasklist_click · 证据不足

BaseListener接收state并透传legacy；全部总线发射和state实际枚举待核，不能只凭名称判成功任务点击。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:662
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:40
- loggingEvent：packages/shared/components/base/BaseListener/wrapper.tsx:54

### tasklist_entrance_click · 证据不足

BaseListener接收state透传，与tasklist_click保留不同Raw action；入口状态来源、自动打开是否会发待核。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:663
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:41
- loggingEvent：packages/shared/components/base/BaseListener/wrapper.tsx:58

### unpublish_click · 证据不足

PC个人卡先evokeLoginPopup并开确认层，再发送app标识；不是确认删除或下架成功。switch object=app保留appid/app_id，否则改image_id/pic_id。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:585
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:38
- loggingEvent：src/pc/views/AiPersonalPage/components/PersonalAppCard/index.tsx:184

## 第 89 组 · 本组有逐项初核结论，剩余限制见各项

### unpublish_success · 证据不足

两个PC路径需unPublish API code==0，更新列表/计数及toast后发app字段，catch不发；一个API参数appid另一个id，完整长短ID来源待核，历史资产不删除。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:586
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:39
- loggingEvent：src/pc/store/Personal/postIApp/index.tsx:95
- loggingEvent：src/pc/views/AiPersonalPage/components/PersonalAppCard/index.tsx:174

### userpath · 证据不足

移动按pathname变化effect发送，首次USER_PATH_LOAD缺失时先写标记且Android补referrer，之后isnew=false；PC用UNIQUE_ID判断isnew。含设备字段，switch补traceId/preUrl后展开data；不是唯一会话访问，公共字段需统一信封排除。

修正：无。
限制：完整辅助链、最终契约、分组与截图尚未全部验收；静态核查，不代表生产上报验证。

- legacySwitch：packages/shared/utils/event/newDataWareHose/index.ts:407
- LoggingAction：packages/shared/utils/event/newDataWareHose/types.ts:21
- loggingEvent：src/mobile/hooks/init/useMobileAppPostContentEvent.ts:37
- loggingEvent：src/mobile/hooks/init/useMobileAppPostContentEvent.ts:48
- loggingEvent：src/pc/hooks/init/useAppEvent.ts:103
