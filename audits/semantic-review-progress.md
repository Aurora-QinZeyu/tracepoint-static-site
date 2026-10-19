# 逐组源码核查执行进度

日期：2026-10-19。前端基准：9f3e4c77d4ede49d70f9edd20356c4034133c294；本地 tracked 文件干净，未联网确认远程最新状态。

## 当前未完成全量验收

442 个 action 已按顺序建立 89 组台账，并采集 340 个源码文件中的定义、调用表达式、所在函数、条件分支及 SHA-256。自动采集不计为语义核实。

全部 89 组、442 个 action 均有人工源码初核记录，没有以扫描结果自动标通过的项目。当前结论：41 项已修正展示，9 项确认代码存在差异，392 项证据不足。完整验收通过数为 0：这些结论覆盖定义、直接调用和记录中列明的部分辅助链，不代表全部调用链、字段必填性/枚举、最终契约、截图和运行时均已核实。

尚无初核记录 0 项，不等于剩余验证 0 项。每个 action 的 acceptanceComplete 仍为 false；限制和源码位置保存在逐项台账。

详见 [逐组台账](semantic-batches.md)、[人工结论源文件](semantic-reviews.json)、[完整源码上下文](semantic-batches.json)。重新运行 build-semantic-batches.cjs 不会覆盖人工结论；基准提交不符或 tracked 源码变化会中止。

## 已实施的展示和资产修正

- 登录 start/success 说明包含游客登录和 code===0 边界。
- 设置引导取消事件说明改为 effect 清理，曝光说明补充 visible 周期去重。
- WhatsApp 结果说明区分点击、Native 回调和未找到产品侧打开调用；不再绝对宣称页面不可达。
- 创作者公告及中心关闭事件说明改为组件卸载；首个滤镜入口记录组件 import 已注释限制。
- 详情“更多”说明覆盖 Revamp 的打开/关闭切换。
- 权限更新明确不等待服务端保存请求成功。
- gender_detect_trigger 区分检测开始与有效结果两个阶段。
- banner_new_click 明确在 App ID 校验前发送；可能传 undefined，保持原始字段与类型，不自动修改业务代码或契约。
- 恢复 cold_start_click/cold_start_popup 历史资产与字段，仅在废弃目录出现；历史调用不当作当前证据。
- 历史界面示例统一提示待对照当前前端复核，保留废弃资产截图映射；重新扫描不再自动把截图 sourceCommit 改成新代码提交。
- 详情及版本更新页显示真实核查状态；版本表格补充防溢出约束。没有浏览器交互工具，尚未完成视觉验收。

## 验证结果与剩余失败

通过：JS 语法、完整清单及人工状态隔离、历史字段保留和活动/废弃分区、公共字段排除、模拟 payload、同步治理、详情治理、PRD 解析与交付、表格列宽、静态发布资源清单、界面证据进度与图片质量。git diff --check 通过。本机 HTTP 服务返回 200；不等于页面交互验收。

旧测试中，废弃目录的旧过滤正则改为行为分区验证；界面证据的旧总数改为检查活动资产覆盖和历史分区，保留图片尺寸质量检查，相关测试通过。

以下旧测试仍失败，尚未通过修改数字掩盖：

- frontend-tracking-baseline.test.cjs：固定旧定义提交 259f08ef50 和旧通道数量；当前 definitionRevision 为 bdd500bef5。需独立核实新定义基线后更新。
- catalog-behavior.test.cjs：固定旧扫描占位资产数 284；新增资产使该断言过期，但仍需逐项补业务语义，不能只替换成345。
- user-platform-completion-audit.test.cjs：固定旧84资产/356字段和旧逐项覆盖；新字段如 feed_hot_filter 等仍需说明核实，不能只换数量。

未做生产上报、Native 回调、真实 SDK/API 响应及最新界面截图取证；也未完成全部442项、89组语义验收。

## 2026-10-19 本次续查与最终字段对照

第 23—89 组已补逐项源码初核记录，包含 typed、legacy 发送前字段转换、空实现/仅定义、条件分支及可见性限制。

本轮重点差异：

- app_exposure_direct、post_exposure：autoExposure sender 的 location 未声明或导入，引用浏览器全局 Location，与字符串枚举不一致。
- pay_order_create_result：建单 success 早于 Native 支付，同一 try 的后续异常可能再发 failed；failure_reason 也可能取数值 code。
- chatbot_message_send：普通聊天按 ACK 判断成功，Imagine custom_image 在请求前固定 true；两条路径不具备统一成功语义。
- chatbot_view_photo_click：chatbot_type 缺失时发送空字符串，而定义不含该枚举。
- app_performance、onboarding_performance：调用处 device_type 来自 getGpuInfo，但统一发送层在展开参数后用 getDevice() 覆盖；此前最终冲突判断已撤回，最终仍为公共端类型。
- chatbot_restart_popup_click：is_success 区分确认/取消，确认上报早于重启请求，已修正平台说明。
- filter_result_exposure 是应用筛选后正结果计数分支，不是逐卡片可见；survey_popup 的本地成功提示不是接口成功；均已修正目录说明。
- 曝光补充收藏列表场景，PC 创作者横幅按组件挂载而非可视检测；保留原有字段及历史资产。

运行最终资产对照脚本后：107 处扫描类型与展示类型不同，均有 frontend_code_review 来源标记。这只是待审差异清单，不能据此把旧人工覆盖认定正确。两个最终契约未列出的扫描字段均为上述性能事件的 device_type；统一发送层最终覆盖为公共端类型，平台按公共字段排除符合最终路径，不再计作最终字段冲突。

本次重新通过：逐项台账与状态隔离、模拟 payload、公共信封排除、废弃目录分区、详情治理、代码同步治理、app/catalog JS 语法，以及 git diff --check。未修改旧失败测试的数量来掩盖问题。

版本更新页保留“进行中”，展示 442/442 初核记录和报告入口；完整验收与生产上报均未完成。后续须继续处理每项限制、107 处展示类型覆盖和旧失败测试，不得把本轮初核完成描述为平台与代码完全一致。

## 验收范围调整

按用户确认，当前仅核对数分展示与代码实际发送逻辑，生产送达及截图不属于本轮验收。新版页面不再显示混合范围的“证据不足392/完整验收0”作为展示问题计数。详见 [数分展示修正](analytics-display-review.md)。
