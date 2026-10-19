# 数分展示与前端代码口径核对

日期：2026-10-19。基准：前端 9f3e4c77d4。

本次验收仅关注平台 action、字段 key、类型、含义、触发条件、分组及示例与源码的一致性。前端存在的分支差异如实记录，不自动修改业务代码或正式契约。截图、生产送达不作为本轮验收条件。

## 本次已修正的数分解释

| 展示项 | 以源码为准的解释 |
| --- | --- |
| chatbot_message_send.is_success | 普通聊天按 ACK 判断；custom_image 请求前固定 true，不代表生图完成；超时可能缺事件。 |
| chatbot_restart_popup_click.is_success | true 为确认重启、false 为取消；确认发送早于接口，不能当重启结果。 |
| pay_order_create_result.status | 建单返回即 success；后续异常可能同 attempt 再发 failed，不作支付成功率。 |
| pay_order_create_result.failure_reason | message 或 code 或缺省字符串；code 可能为数字。 |
| pic_visit.current_tab | 最终转换用全局 origin 覆盖入口 PIC_ORIGIN，不能直接等同本事件 origin。 |
| pic_visit.searchword | 本地关键词缺失或空值回落字符串 none。 |
| query_exposure.search_content | 列表 effect 的字符串数组，不是逐词可见曝光。 |
| app_exposure_direct.location | 普通辅助器为场景字符串，自动 sender 则引用浏览器 Location 对象；保留路径差异，已观察值不冒充完整枚举。 |
| chatbot_view_photo_click.chatbot_type | 调用缺省为空字符串，已展示该实际回落值与定义差异。 |
| filter_result_exposure.option_value | 应用筛选且结果数为正、条件名非空时发送，不是逐卡可见。 |
| video_upload_success.failure_reason | 可能为字符串、数字或对象，且包括上传前权限拦截。 |

证据位置沿用 [逐项记录](semantic-batches.md)，例如 store/index.ts:429、useImageModeHandlers.ts:185、ChatbotRestartEntry/index.tsx:45、payment/price/util.ts:558/623、newDataWareHose/index.ts 的 PIC_VISIT 转换、autoExposure.ts:120。

仅修正说明与示例依据，不自动改变 Raw key、代码观察类型或正式契约。

## 当前范围与剩余工作

442 个 action 均有初核记录，但不是 442 项最终展示验收通过。原 392 项“证据不足”混有截图及运行证据限制，不能用作本轮展示问题数；历史初核中的 11 项源码差异也不等同平台错误。

尚需逐条核对 107 处扫描类型与人工展示类型的覆盖来源、分通道 payload 和剩余分组。两个性能事件的 device_type 已追到统一发送层：调用处 GPU 值被 properties.device_type=getDevice() 覆盖，最终仍为公共端类型；撤回此前最终上报冲突判断。未把这些事项自动标通过。

模拟 payload 生成已修正：字符串 20/false 保持字符串，数组使用真正 JSON 数组，数值和布尔字段按类型生成；不再按文字内容无条件转换类型。固定的用户完整样例保留，不擅自改写。

验证：analytics-display-consistency.test.cjs 实际加载平台最终字段解释，验证成功分支、最终来源覆盖、默认值与异常类型；保留既有 payload、公共字段、详情治理、废弃分区检查。

## 统一发送层复核

base/tracker.ts:36—54 先展开 TrackPoint，再注入 properties.app_version/device_type、用户信息及其他上下文。因此两个性能事件调用处 GPU device_type 不会作为最终同名值发送。已撤回两项最终冲突结论，更新台账；当前代码差异标签为 9 项。getDevice 具体取值由 utils/tracker/baidu.ts 决定。

## 2026-10-19 补充确认：剩余项的具体范围

- 107 处类型覆盖中，16 处为 bool → boolean 同义类型；其余 91 处涉及 unknown 推导或混合类型收窄/扩展，仍需逐字段补充依据，不计为已确认错误。
- 加载平台实际资产与字段生成函数，覆盖 442 个 action、462 份通道契约、1,334 个契约字段：生成示例未发现 string/number/boolean/array 基础类型冲突。这是生成器检查，不代表示例业务取值、发送前转换或页面最终 payload 已全部通过。
- 442 个 action 均有工作线与二级分组，无工作线待归类项；其中 336 项沿用资产域映射，76 项为人工整理，26 项商业契约映射，1 项跨域、3 项 review 来源。存在分组不等于已逐项确认业务归属。
- 可复查数据：analytics-display-check.json；执行脚本：check-analytics-display.cjs。

结论：仍需完成类型依据、实际分通道示例字段及业务归属的逐项对照。上述结果不表示前端存在上报故障，也不作为全量展示验收通过。
