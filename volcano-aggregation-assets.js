(function exposeVolcanoAggregationAssets(root) {
  'use strict';

  const assetPath = name => `assets/volcano-aggregation/${name}`;
  const image = (file, title, description) => ({ src: assetPath(file), title, description });

  const shared = {
    theme: 'aggregation',
    group: '平台与系统',
    domain: '火山聚合',
    status: '文档已收录',
    source: '用户提供 · 火山聚合类埋点使用说明',
    trackingSource: 'bigdata',
    assetTags: ['火山聚合'],
    fixed: true,
    catalogVersion: '2026-07-23'
  };

  root.VolcanoAggregationAssets = Object.freeze([
    {
      ...shared,
      name: 'app_exposure_aggregation',
      description: '按 App 与 location 汇总每日曝光 PV、UV',
      rule: '对当天 App 曝光数据按 app_id、location 等维度聚合后上报；app_id 与 location 为 all 时表示不限范围',
      fields: [
        ['app_id', 'string', 'App 标识；all 表示不限 App'],
        ['location', 'string', '曝光场景；all 表示不限场景'],
        ['location1_json', 'string', '各一级位置的曝光 PV 聚合 JSON'],
        ['user_version_json', 'string', '各用户版本的曝光 PV 聚合 JSON'],
        ['tag_json', 'string', '各内容标签的曝光 PV 聚合 JSON'],
        ['location1_product_stat_json', 'string', '各 product、location1 下按 App 汇总的曝光 PV 与 UV']
      ],
      aggregationGuide: {
        scope: 'App 维度',
        userProperties: false,
        caution: '该事件无法使用用户属性。需要用户属性时，请改用 user_app_exposure_statistics。',
        sections: [
          {
            title: '总量与基础维度',
            description: '查询全部、指定 location、指定 app_id，以及 app_id + location 组合下的曝光 PV、UV。',
            images: [
              image('img_v3_02om_61ddda5d-70bf-4e78-ad8e-1a177aa1fdeg.jpg', '当日总曝光 PV 与 UV', 'app_id、location 均选择 all'),
              image('img_v3_02om_64cdd699-30e1-4580-bbab-fc86c0eb9cfg.jpg', '指定 location 的曝光 PV、UV', '以 feed_detail 为例'),
              image('img_v3_02om_cd2ced2e-1993-4146-8ff1-6b035f52ba0g.jpg', '指定 app_id 的曝光 PV、UV', '按单个 App 过滤'),
              image('img_v3_02om_82e8f822-e1f1-4290-bd7d-830365ce0b4g.jpg', '指定 App 与位置的曝光 PV、UV', '同时选择 app_id 与 location')
            ]
          },
          {
            title: 'location1、用户版本与标签',
            description: '通过 JSON 虚拟属性查询一级位置、用户版本和内容标签维度。',
            images: [
              image('image 5.png', 'location1 为 discover 的曝光次数', '使用 location1_discover_pv'),
              image('image 13.png', 'location1 为 discover 的曝光 App 数', '筛选 discover 曝光大于 0'),
              image('image 11.png', 'user_version 为 ad 的曝光 PV', '使用 user_version_ad_pv'),
              image('image 10.png', 'tag_name 为 undress 的曝光次数', '使用 tag_json_Undress_pv'),
              image('image 1.png', 'tag_name 为 undress 的曝光 App 数', '筛选标签曝光大于 0')
            ]
          }
        ]
      }
    },
    {
      ...shared,
      name: 'user_app_exposure_statistics',
      description: '以用户维度汇总每日曝光 App 次数与 App 个数',
      rule: '以用户维度聚合当日 App 曝光次数和去重 App 数；用于转化分析时需选择无序漏斗',
      fields: [
        ['exposure_app_freq', 'number', '用户当日曝光 App 总次数'],
        ['exposure_app_num', 'number', '用户当日曝光 App 去重个数'],
        ['mobile_homepage_exposure_app_freq', 'number', 'Mobile 首页曝光 App 次数'],
        ['mobile_homepage_exposure_app_num', 'number', 'Mobile 首页曝光 App 个数'],
        ['pc_homepage_exposure_app_freq', 'number', 'PC 首页曝光 App 次数'],
        ['pc_homepage_exposure_app_num', 'number', 'PC 首页曝光 App 个数'],
        ['vip_json', 'string', '不同 VIP 状态下的曝光次数与 App 个数聚合 JSON'],
        ['matrix_app_json', 'string', '矩阵产品下的曝光次数与 App 个数聚合 JSON']
      ],
      aggregationGuide: {
        scope: '用户维度',
        userProperties: true,
        caution: '使用该事件搭建转化分析时，需要选择无序漏斗。',
        sections: [
          {
            title: '当日曝光 PV 与 UV',
            description: 'PV 使用曝光次数求和；UV 通过用户维度事件人数或曝光次数大于 0 统计。',
            images: [
              image('image 12.png', '当日总曝光 PV', '对 exposure_app_freq 求和'),
              image('image 3.png', '当日总曝光 UV', '统计发生聚合事件的用户')
            ]
          },
          {
            title: 'VIP 与矩阵产品',
            description: '通过 vip_json 和 matrix_app_json 的虚拟属性筛选不同会员状态或矩阵产品。',
            images: [
              image('img_v3_02to_dc556e04-ed85-47d4-8150-365e3df63bcg.jpg', '指定 VIP 状态的当日活跃 UV', 'free、standard、plus 示例'),
              image('image 2.png', '矩阵 App 曝光虚拟属性', 'A1、POPDoll、CoupleLens 等矩阵产品'),
              image('image 4.png', 'POPDoll 当日曝光总次数', '对 POPDoll_exposure_app_freq 求和'),
              image('image 6.png', 'POPDoll 当日活跃用户', '筛选 POPDoll 曝光次数大于 0'),
              image('image 14.png', '按 user_id 查询 POPDoll 曝光', '查看指定用户的曝光次数与 App 个数')
            ]
          }
        ]
      }
    },
    {
      ...shared,
      name: 'page_exposure_aggregation',
      description: '以用户维度汇总每日页面访问次数与停留时长',
      rule: '按用户聚合当天不同页面的访问次数和停留时长；页面维度来自原 page_exposure 事件的 after 值',
      fields: [
        ['page_all_pv', 'number', '用户当日所有页面曝光次数'],
        ['page_all_duration', 'number', '用户当日所有页面停留时长'],
        ['page_{page_name}_pv', 'number', '按页面名称生成的动态曝光次数字段']
      ],
      aggregationGuide: {
        scope: '用户维度',
        userProperties: true,
        caution: '特定页面字段按 page_页面名称_pv 生成；页面名称来自原 page_exposure.after。',
        sections: [
          {
            title: '页面曝光与停留',
            description: '查询全部页面总曝光、总停留时长，以及指定页面的 PV、UV。',
            images: [
              image('image 7.png', '所有页面总曝光次数', '对 page_all_pv 求和'),
              image('image 9.png', '所有页面总停留时长', '对 page_all_duration 求和'),
              image('image.png', 'taskView 页面曝光 PV', '使用 page_taskView_pv'),
              image('image 8.png', 'taskView 页面曝光 UV', '筛选 page_taskView_pv 大于 0')
            ]
          }
        ]
      }
    }
  ]);
})(typeof globalThis !== 'undefined' ? globalThis : window);
