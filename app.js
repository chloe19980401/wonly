const ADMIN_USERNAME = "chloelee";
const ADMIN_PASSWORD_HASH = "df3dcfc0245fb6d3f508523001b0979446249420e3dc4b0081785035fc90a998";
const DESIGNER_USERNAME = "zhaolin";
const DESIGNER_PASSWORD_HASH = "2b57de2d606b54b194dc7fbfdbb31a013cae5363e0116998f21ec6c74b9b5e7a";
const SESSION_KEY = "wonly-admin-session";
const DATA_KEY = "wonly-editable-social-system-v3";
const TEAM_OKR_VERSION = "2026-07-team-okr-v7";
const SUPER_FACTORY_TOPIC_VERSION = "2026-07-super-factory-topics-v5";
const SUPER_FACTORY_TOPIC_SOURCE = "super-factory-topic-import-v5";

const ROLE_LABELS = {
  admin: "管理员",
  manager: "运营主管",
  marketing: "市场部运营",
  designer: "设计师",
  editor: "内容编辑",
  viewer: "只读成员",
};

const ROLE_PERMISSIONS = {
  admin: {
    views: ["overview", "calendar", "library", "okr", "analytics", "design", "documents", "settings"],
    topicScope: "all",
    canCreateTopic: true,
    canManageOkr: true,
    canManageSystem: true,
    canEditData: true,
    canExport: true,
  },
  manager: {
    views: ["overview", "calendar", "library", "okr", "analytics", "design", "documents"],
    topicScope: "all",
    canCreateTopic: true,
    canManageOkr: true,
    canManageSystem: false,
    canEditData: true,
    canExport: true,
  },
  marketing: {
    views: ["overview", "calendar", "library", "okr", "analytics", "design", "documents"],
    topicScope: "own",
    canCreateTopic: true,
    canManageOkr: false,
    canManageSystem: false,
    canEditData: true,
    canExport: true,
  },
  designer: {
    views: ["design", "documents"],
    topicScope: "own",
    canCreateTopic: false,
    canManageDesignTasks: true,
    canManageOkr: false,
    canManageSystem: false,
    canEditData: false,
    canExport: false,
  },
  editor: {
    views: ["calendar", "library", "documents"],
    topicScope: "own",
    canCreateTopic: true,
    canManageOkr: false,
    canManageSystem: false,
    canEditData: false,
    canExport: false,
  },
  viewer: {
    views: ["overview", "calendar", "library", "documents"],
    topicScope: "own",
    canCreateTopic: false,
    canManageOkr: false,
    canManageSystem: false,
    canEditData: false,
    canExport: false,
  },
};

const REAL_OWNERS = [
  { name: "李铧燕", title: "运营经理" },
  { name: "徐一诺", title: "市场部运营" },
  { name: "周宗莉", title: "市场部运营" },
  { name: "周雨晴", title: "市场部运营" },
];
const REAL_OWNER_NAMES = new Set(REAL_OWNERS.map((owner) => owner.name));
const LEGACY_OWNER_NAMES = new Set(["Mia", "Leo", "Anna", "Chris", "Jay", "胡译泰"]);
const FALLBACK_OWNER = REAL_OWNERS[0].name;
const DESIGNERS = [{ name: "赵琳", title: "协助设计师" }];
const LEGACY_ACCOUNT_PEOPLE = [{ name: "胡译泰", title: "运营账号" }];
const ACCOUNT_PEOPLE = [...REAL_OWNERS, ...LEGACY_ACCOUNT_PEOPLE, ...DESIGNERS];
const ACCOUNT_PERSON_NAMES = new Set(ACCOUNT_PEOPLE.map((person) => person.name));
const SEEDED_TEAM_ACCOUNTS = [
  { id: "acct-admin", username: ADMIN_USERNAME, owner: "李铧燕", role: "admin", passwordHash: ADMIN_PASSWORD_HASH },
  { id: "acct-xuyinuo", username: "xuyinuo", owner: "徐一诺", role: "marketing", passwordHash: "7e55d951a83b1849491eb4b4290039af2d2e8fe24da07dcf0766324edd4c7fe6" },
  { id: "acct-zhouyuqing", username: "zhouyuqing", owner: "周雨晴", role: "marketing", passwordHash: "f1b6611348f41e1cc6771fd995eb2b498bf617a0a91acf885bb3984ed841e56e" },
  { id: "acct-zhouzongli", username: "zhouzongli", owner: "周宗莉", role: "marketing", passwordHash: "734f8457e266550306f469a89d7f38ab2089fac0c8dd38d0d763c3b18122fc80" },
  { id: "acct-huyitai", username: "huyitai", owner: "胡译泰", role: "admin", passwordHash: "8c15345f11ad1b06117d290a655e1acd79264d41e82e88b5d9521f2e6615defd" },
  { id: "acct-zhaolin", username: DESIGNER_USERNAME, owner: "赵琳", role: "designer", passwordHash: DESIGNER_PASSWORD_HASH },
];
const CONTENT_TYPES = ["视频", "图文"];
const PUBLISH_PLATFORMS = ["YouTube", "TikTok", "Instagram", "Facebook", "LinkedIn"];
const PUBLISH_TAGS = ["未发布", "按时发布", "未按时发布"];
const SERIES_MONTH_OPTIONS = ["2026-07", "2026-08", "2026-09"];
const API_PLATFORMS = [
  ["youtube", "YouTube Data API"],
  ["meta", "Meta Graph API"],
  ["tiktok", "TikTok Business API"],
  ["linkedin", "LinkedIn API"],
];
const JULY_TEAM_OKRS = [
  {
    id: "2026-07-徐一诺-图文okr",
    month: "2026-07",
    owner: "徐一诺",
    objective: "完成 7 月图文内容产出",
    objectives: [
      {
        id: "o-1",
        title: "完成 7 月图文内容产出",
        keyResults: [
          { name: "完成 20 条图文" },
          { name: "每周发布 5 条" },
          { name: "20 条阿/越/印/哈图文上传云盘" },
          { name: "完成 4 次周五规划" },
        ],
      },
      {
        id: "o-2",
        title: "完成工厂证据图文矩阵",
        keyResults: [
          { name: "生产流程 5 条" },
          { name: "质量检测 5 条" },
          { name: "交付包装 5 条" },
          { name: "客户痛点 5 条" },
        ],
      },
      {
        id: "o-3",
        title: "达成 7 月图文效果指标",
        keyResults: [
          { name: "曝光 6000+" },
          { name: "互动率 3%+" },
          { name: "询盘线索 5+" },
          { name: "学习分享 1 次" },
        ],
      },
    ],
  },
  {
    id: "2026-07-周雨晴-印尼视频okr",
    month: "2026-07",
    owner: "周雨晴",
    objective: "完成 7 月印尼视频产出",
    objectives: [
      {
        id: "o-1",
        title: "完成 7 月印尼视频产出",
        keyResults: [
          { name: "完成 8 条视频" },
          { name: "集训后发布 8 条" },
          { name: "8 条阿/越/印/哈音频字幕上传云盘" },
          { name: "完成 4 次周五规划" },
        ],
      },
      {
        id: "o-2",
        title: "完成印尼本地化内容矩阵",
        keyResults: [
          { name: "家庭安全 4 条" },
          { name: "暖色家居 3 条" },
          { name: "防潮耐用 3 条" },
          { name: "家庭价值 2 条" },
        ],
      },
      {
        id: "o-3",
        title: "达成 7 月印尼视频效果指标",
        keyResults: [
          { name: "播放 12000+" },
          { name: "完播率 25%+" },
          { name: "询盘线索 6+" },
          { name: "学习分享 1 次" },
        ],
      },
    ],
  },
  {
    id: "2026-07-周宗莉-越南视频okr",
    month: "2026-07",
    owner: "周宗莉",
    objective: "完成 7 月越南视频产出",
    objectives: [
      {
        id: "o-1",
        title: "完成 7 月越南视频产出",
        keyResults: [
          { name: "完成 12 条视频" },
          { name: "每周发布 3 条" },
          { name: "12 条阿/越/印/哈音频字幕上传云盘" },
          { name: "完成 4 次周五规划" },
        ],
      },
      {
        id: "o-2",
        title: "完成越南本地化内容矩阵",
        keyResults: [
          { name: "Tet 视觉 4 条" },
          { name: "生产过程 3 条" },
          { name: "质量检测 3 条" },
          { name: "经销商信任 2 条" },
        ],
      },
      {
        id: "o-3",
        title: "达成 7 月越南视频效果指标",
        keyResults: [
          { name: "播放 12000+" },
          { name: "完播率 25%+" },
          { name: "询盘线索 6+" },
          { name: "学习分享 1 次" },
        ],
      },
    ],
  },
].map((okr) => ({ ...okr, keyResults: okr.objectives.flatMap((objective) => objective.keyResults) }));
const SUPER_FACTORY_TOPICS = buildSuperFactoryTopics();
function kr(name, target, actual = 0, unit = "") {
  return { name, target, actual, unit };
}

const JULY_TEAM_OKRS_FIXED = [
  {
    id: "2026-07-徐一诺-图文okr",
    month: "2026-07",
    owner: "徐一诺",
    objective: "完成 7 月图文内容产出",
    objectives: [
      { id: "o-1", title: "完成 7 月图文内容产出", keyResults: [kr("完成图文", 20, 0, "条"), kr("每周发布", 5, 0, "条"), kr("多语言图文上传云盘", 20, 0, "条"), kr("周五规划", 4, 0, "次")] },
      { id: "o-2", title: "完成工厂证据图文矩阵", keyResults: [kr("生产流程", 5, 0, "条"), kr("质量检测", 5, 0, "条"), kr("交付包装", 5, 0, "条"), kr("客户痛点", 5, 0, "条")] },
      { id: "o-3", title: "达成 7 月图文效果指标", keyResults: [kr("曝光", 6000, 0, "次"), kr("互动率", 3, 0, "%"), kr("询盘线索", 5, 0, "条"), kr("学习分享", 1, 0, "次")] },
    ],
  },
  {
    id: "2026-07-周雨晴-印尼视频okr",
    month: "2026-07",
    owner: "周雨晴",
    objective: "完成 7 月印尼视频产出",
    objectives: [
      { id: "o-1", title: "完成 7 月印尼视频产出", keyResults: [kr("完成视频", 12, 0, "条"), kr("每周发布", 3, 0, "条"), kr("多语言音频字幕上传云盘", 12, 0, "条"), kr("周五规划", 4, 0, "次")] },
      { id: "o-2", title: "完成印尼本地化内容矩阵", keyResults: [kr("家庭安全", 4, 0, "条"), kr("暖色家居", 3, 0, "条"), kr("防潮耐用", 3, 0, "条"), kr("家庭价值", 2, 0, "条")] },
      { id: "o-3", title: "达成 7 月印尼视频效果指标", keyResults: [kr("播放", 12000, 0, "次"), kr("完播率", 25, 0, "%"), kr("询盘线索", 6, 0, "条"), kr("学习分享", 1, 0, "次")] },
    ],
  },
  {
    id: "2026-07-周宗莉-越南视频okr",
    month: "2026-07",
    owner: "周宗莉",
    objective: "完成 7 月越南视频产出",
    objectives: [
      { id: "o-1", title: "完成 7 月越南视频产出", keyResults: [kr("完成视频", 8, 0, "条"), kr("集训后发布", 8, 0, "条"), kr("多语言音频字幕上传云盘", 8, 0, "条"), kr("周五规划", 3, 0, "次")] },
      { id: "o-2", title: "完成越南本地化内容矩阵", keyResults: [kr("Tet 视觉", 3, 0, "条"), kr("生产过程", 2, 0, "条"), kr("质量检测", 2, 0, "条"), kr("经销商信任", 1, 0, "条")] },
      { id: "o-3", title: "达成 7 月越南视频效果指标", keyResults: [kr("播放", 8000, 0, "次"), kr("完播率", 25, 0, "%"), kr("询盘线索", 4, 0, "条"), kr("学习分享", 1, 0, "次")] },
    ],
  },
].map((okr) => ({ ...okr, keyResults: okr.objectives.flatMap((objective) => objective.keyResults) }));

const defaultData = {
  activeMonth: "2026-07",
  owners: clone(REAL_OWNERS),
  accounts: SEEDED_TEAM_ACCOUNTS.map((account) => ({ ...account, status: "启用" })),
  platformBundles: [
    { id: "shorts-core", name: "短视频通用包", platforms: ["YouTube Shorts", "TikTok", "Instagram Reels"], format: "9:16 竖屏，15-45s，英文字幕", usage: "同一条核心视频适配三端，统一 Hook 和 CTA，只微调封面与标题。" },
    { id: "visual-social", name: "视觉社交包", platforms: ["Instagram Grid", "Instagram Carousel", "Facebook"], format: "1:1 / 4:5 图片、短视频转发、本地化文案", usage: "适合生活方式、工厂美学、产品细节，把视频素材拆成图文故事。" },
    { id: "b2b-proof", name: "B2B 背书包", platforms: ["LinkedIn", "YouTube Long", "Facebook"], format: "长视频、文章、工程案例图文", usage: "适合工厂实力、技术参数、工程案例和品牌可信度内容。" },
    { id: "data-thread", name: "观点传播包", platforms: ["LinkedIn Post", "Facebook Quote Card"], format: "数据点、对比图、金句卡", usage: "把测试结果和对比数据拆成连续观点，适合复盘和传播。" },
  ],
  series: [
    { id: "s1", code: "S1", name: "只看王力门", position: "品牌实力展示", audience: "B2B + C端", main: "TikTok + LinkedIn", months: ["2026-07"], cycle: "每周 1 个主题，连续 12 周", conclusion: "用工厂实力和真实测试建立信任，适合沉淀长线品牌资产。", color: "#0f8f61", bundles: ["shorts-core", "b2b-proof", "data-thread"] },
    { id: "s2", code: "S2", name: "Gossip Girl", position: "场景化生活方式", audience: "C端女性", main: "TikTok + Instagram", months: ["2026-07", "2026-08"], cycle: "每周 1-2 个主题，连续 12 周", conclusion: "用生活化场景拉近距离，适合测试审美、情绪和人群偏好。", color: "#b64f78", bundles: ["shorts-core", "visual-social"] },
    { id: "s3", code: "S3", name: "超级工厂", position: "工厂实力背书", audience: "B2B + 经销商", main: "TikTok + Instagram", months: ["2026-07", "2026-08", "2026-09"], cycle: "7 月集中导入 70 个主题，按周筛选执行", conclusion: "用生产、质检和交付细节提高专业可信度，适合招商和经销线索。", color: "#087b86", bundles: ["shorts-core", "visual-social", "b2b-proof"] },
    { id: "s4", code: "S4", name: "暴力测试", position: "产品力极限验证", audience: "C端男性", main: "TikTok + YouTube", months: ["2026-09"], cycle: "每周 1 个主题，连续 12 周", conclusion: "用强冲突测试制造记忆点，适合快速判断产品卖点是否成立。", color: "#bb3d3d", bundles: ["shorts-core", "b2b-proof", "data-thread"] },
  ],
  topics: [],
  designTasks: [],
  publicDocs: [],
  apiConnections: API_PLATFORMS.map(([id, name]) => ({ id, name, status: "未接入", accountId: "", credentialNote: "", syncMode: "手动同步", lastSync: "", owner: FALLBACK_OWNER, note: "" })),
  okrs: [],
};

let data = loadData();
let activeMonth = data.activeMonth;
let activeSeriesMonth = "all";
let activeSeries = "all";
let activeCalendarWeek = "all";
let activeContentTopic = "all";
let activeContentOwner = "all";
let activeContentPlatform = "all";
let currentAccount = null;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function topic(title, subtitle, seriesId, owner, month, status, okrKey, bundles, references, script, shoot, publish, postUrl) {
  return { id: idFrom(title), title, subtitle, seriesId, owner, month, status, okrKey, bundles, references, script, shoot, publish, postUrl, publishedAt: "", publishTag: "未发布", platforms: [], contentType: "视频", referenceType: "图片", designer: "" };
}

function buildSuperFactoryTopics() {
  const shortVideos = [
    ["Inside the Door Factory", "通用", "胡译泰", "痛点：海外客户怕供应商不是真工厂。拍生产线、设备、工序流转。"],
    ["How a Security Door Is Made", "通用", "胡译泰", "痛点：客户不知道质量差异来自哪里。拍钢板到成品流程。"],
    ["Steel Thickness Test", "通用", "胡译泰", "痛点：采购怕低价门偷工减料。拍卡尺和切面。"],
    ["Lock Body Assembly Close-Up", "通用", "胡译泰", "痛点：客户担心核心锁体不稳定。拍装配细节。"],
    ["Anti-Rust Coating Process", "通用", "胡译泰", "痛点：客户怕潮湿、高温、风沙导致生锈掉漆。拍喷涂和防锈工艺。"],
    ["Heat and Sand Resistance Check", "Saudi", "胡译泰", "痛点：沙特客户担心高温风沙。拍耐热耐沙测试。"],
    ["Humidity Resistance for ASEAN Homes", "Indonesia", "周雨晴", "痛点：印尼雨季湿度高。拍防潮、门体稳定和锁具表现。"],
    ["Door Opening and Closing Cycle Test", "通用", "胡译泰", "痛点：工程商担心频繁使用后松动。拍连续开合测试。"],
    ["Factory Quality Inspection Steps", "通用", "胡译泰", "痛点：客户怕到货才发现问题。拍出厂质检清单。"],
    ["Why Cheap Doors Cost More Later", "通用", "胡译泰", "痛点：采购只看报价。拍低价门和标准门长期成本对比。"],
    ["Real Packing for Export Orders", "通用", "胡译泰", "痛点：海外客户怕运输损坏。拍木箱、护角、防潮包装。"],
    ["Container Loading Day", "通用", "胡译泰", "痛点：客户关心真实出口和交付能力。拍装柜封柜。"],
    ["From Factory to Your Project Site", "通用", "胡译泰", "痛点：海外项目怕跨国交付不可控。拍交付链路。"],
    ["Custom Size Door Production", "通用", "胡译泰", "痛点：工程项目有非标尺寸。拍定制尺寸生产。"],
    ["Color Matching for Local Markets", "通用", "徐一诺", "痛点：不同国家审美不同。拍颜色、纹理和本地化应用。"],
    ["Premium Black and Gold Door Finish", "Saudi", "胡译泰", "痛点：沙特高端项目要豪宅质感。拍黑金表面细节。"],
    ["Warm Family Door Design", "Indonesia", "周雨晴", "痛点：印尼重视家庭安全感。拍暖色家居场景。"],
    ["Tet-Ready Smart Home Entrance", "Vietnam", "周宗莉", "痛点：越南 Tet 有焕新需求。拍红金入户门场景。"],
    ["No Face Factory Marketing Works", "通用", "胡译泰", "痛点：老板不想出镜但客户要证据。拍不出镜工厂证据链。"],
    ["Four Proofs Buyers Need", "通用", "胡译泰", "痛点：B 端客户要验证风险。拍能力、过程、结果、第三方证据。"],
    ["Can You Deliver on Time?", "通用", "胡译泰", "痛点：工程客户怕延误。拍排产、仓库和装柜。"],
    ["What Happens Before Shipment", "通用", "胡译泰", "痛点：客户怕发错货、漏配件。拍清点和拍照留档。"],
    ["Door Hardware Compatibility Check", "通用", "胡译泰", "痛点：客户怕安装返工。拍锁、铰链、门框匹配。"],
    ["Fire Safety Door Details", "通用", "胡译泰", "痛点：工程项目需要消防安全信任。拍防火结构。"],
    ["Why Door Frames Matter", "通用", "胡译泰", "痛点：客户只看门扇忽略门框。拍门框结构。"],
    ["Smart Lock Installation Demo", "通用", "胡译泰", "痛点：经销商担心安装复杂。拍安装步骤。"],
    ["One Door, Three Buyer Concerns", "通用", "胡译泰", "痛点：采购、技术、老板关注不同。拍三类顾虑对应证据。"],
    ["Buyer’s Checklist Before Ordering Doors", "通用", "胡译泰", "痛点：客户不会判断供应商。拍采购检查清单。"],
    ["Factory Test vs. Sales Promise", "通用", "胡译泰", "痛点：客户不信广告词。拍实测替代口头承诺。"],
    ["Why We Show the Process", "通用", "胡译泰", "痛点：海外客户无法到厂。拍透明生产过程。"],
    ["Door Surface Scratch Check", "通用", "胡译泰", "痛点：客户怕表面易刮花。拍耐刮检查。"],
    ["Noise Reduction Door Demo", "通用", "胡译泰", "痛点：酒店、公寓关心体验。拍关门声和隔音体验。"],
    ["Safe Entrance for Apartments", "Vietnam", "周宗莉", "痛点：越南城市公寓增长。拍公寓入户门方案。"],
    ["Villa Entrance Door Ideas", "Saudi", "胡译泰", "痛点：高端别墅要安全和豪华感。拍别墅门款。"],
    ["Hotel Project Door Solution", "通用", "胡译泰", "痛点：酒店项目怕批量不稳定。拍工程门型和批量交付。"],
    ["Distributor Support from Factory", "通用", "胡译泰", "痛点：经销商怕卖后无支持。拍样册、培训、售后。"],
    ["How We Reduce After-Sales Problems", "通用", "胡译泰", "痛点：经销商怕投诉。拍质检和安装标准。"],
    ["Arabic / Bahasa / Vietnamese Ready", "通用", "胡译泰", "痛点：本地化材料影响转化。拍多语言说明和包装。"],
    ["Door Security Test in 15 Seconds", "通用", "胡译泰", "痛点：客户要直观看到安全。拍防撬、防撞、锁点。"],
    ["From Parameter to Buyer Pain", "通用", "胡译泰", "痛点：客户听不懂参数。拍参数如何转成客户处境。"],
  ];
  const longVideos = [
    ["Complete Factory Tour: How WONLY Doors Are Made", "通用", "胡译泰", "痛点：海外客户无法到厂。拍完整远程验厂内容。"],
    ["How to Choose a Reliable Security Door Supplier", "通用", "胡译泰", "痛点：采购怕选错供应商。讲产能、质检、包装、交期。"],
    ["Security Door Testing Explained", "通用", "胡译泰", "痛点：客户不懂测试参数。讲防撬、耐用、防锈和表面测试。"],
    ["Vietnam Market Door Design and Marketing Ideas", "Vietnam", "周宗莉", "痛点：越南需要 Tet 视觉和平台打法。讲红金、Facebook、TikTok。"],
    ["Indonesia Family Security Door Strategy", "Indonesia", "周雨晴", "痛点：印尼重视家庭和宗教文化。讲暖色、家庭安全、电商信任。"],
    ["Saudi Arabia Premium Door Market Strategy", "Saudi", "胡译泰", "痛点：沙特看重合规和高端感。讲黑金、SASO、IP65。"],
    ["Cheap Door vs. Reliable Door: Total Cost Comparison", "通用", "胡译泰", "痛点：财务只看采购价。讲长期维护和返工成本。"],
    ["What B2B Buyers Really Care About", "通用", "胡译泰", "痛点：B 端是组织决策。讲采购、技术、老板、财务。"],
    ["Export Packing and Delivery Process for Door Projects", "通用", "胡译泰", "痛点：客户怕破损、漏件、延迟。讲出口包装和装柜流程。"],
    ["How Factory Content Builds Trust Before Sales Calls", "通用", "胡译泰", "痛点：销售解释成本高。讲内容如何提前建立信任。"],
  ];
  const graphics = [
    ["4 Proofs Every Door Buyer Needs", "图文", "痛点：客户缺可验证证据。做能力、过程、结果、第三方证据图。"],
    ["Buyer Checklist for Security Doors", "图文", "痛点：客户不知道如何避坑。做采购检查清单。"],
    ["Cheap Door Hidden Costs", "图文", "痛点：采购只比价格。做隐藏成本图解。"],
    ["Vietnam Visual Guide: Red, Gold and Tet", "图文", "痛点：越南节庆视觉强。做 Tet 红金视觉指南。"],
    ["Indonesia Visual Guide: Warm Family Security", "图文", "痛点：印尼需要家庭信任。做暖色家庭安全视觉指南。"],
    ["Saudi Visual Guide: Premium Black and Gold", "图文", "痛点：沙特高端项目要高级感。做黑金视觉指南。"],
    ["Door Factory Quality Flow", "图文", "痛点：客户看不见过程。做工厂质量流程图。"],
    ["What Procurement Cares About", "图文", "痛点：采购需要转发理由。做采购关注点图。"],
    ["What Engineers Care About", "图文", "痛点：技术部门要结构和参数。做工程师关注点图。"],
    ["What Bosses Care About", "图文", "痛点：老板买低风险。做老板决策关注点图。"],
    ["What Distributors Care About", "图文", "痛点：经销商怕售后压力。做经销商关注点图。"],
    ["Door Export Packing Standard", "图文", "痛点：海外客户怕运输损坏。做包装标准图。"],
    ["Humidity vs. Door Durability", "图文", "痛点：东南亚潮湿。做湿度和耐久图解。"],
    ["Heat and Sand vs. Smart Locks", "图文", "痛点：沙特高温风沙。做环境适配图。"],
    ["From Parameter to Buyer Pain", "图文", "痛点：客户听不懂参数。做参数到痛点转换图。"],
    ["Why On-Time Delivery Matters", "图文", "痛点：项目怕延期。做交期影响图。"],
    ["One Door, Six Decision Makers", "图文", "痛点：B 端多人决策。做六类决策人图。"],
    ["Factory Content That Sells Before Sales", "图文", "痛点：销售解释成本高。做销转前置图。"],
    ["Localized Door Content Matrix", "图文", "痛点：三个国家不能用同一套内容。做本地化矩阵。"],
    ["Trust Signals for Overseas Buyers", "图文", "痛点：远程合作风险感强。做海外信任信号图。"],
  ];
  const items = [
    ...shortVideos.map((item) => ({ title: item[0], market: item[1], owner: item[2], subtitle: item[3], contentType: "视频", platforms: ["TikTok", "Instagram", "YouTube"] })),
    ...longVideos.map((item) => ({ title: item[0], market: item[1], owner: item[2], subtitle: item[3], contentType: "视频", platforms: ["YouTube", "LinkedIn", "Facebook"], long: true })),
    ...graphics.map((item) => ({ title: item[0], market: item[1], owner: "徐一诺", subtitle: item[2], contentType: "图文", platforms: ["Instagram", "Facebook", "LinkedIn"], designer: "赵琳" })),
  ];
  return items.map((item, index) => {
    const owner = superFactoryOwner(item, index);
    const shoot = scheduledJulyWorkday(index, owner, 0);
    const publish = scheduledPublishWorkday(index);
    return {
      id: `sf-${idFrom(item.title)}`,
      title: item.title,
      subtitle: item.subtitle,
      seriesId: "s3",
      owner,
      month: publish.slice(0, 7),
      status: "待分镜",
      okrKey: item.contentType === "图文" ? "徐一诺 O2" : owner === "周雨晴" ? "周雨晴 O2" : "周宗莉 O2",
      bundles: item.contentType === "图文" ? ["visual-social", "data-thread"] : item.long ? ["b2b-proof", "data-thread"] : ["shorts-core", "b2b-proof"],
      references: [],
      script: `${item.subtitle}\n拍摄/制作：围绕「${item.title}」展示工厂证据、客户痛点和可验证细节。`,
      shoot,
      publish,
      postUrl: "",
      platforms: item.platforms,
      contentType: item.contentType,
      referenceType: item.contentType === "图文" ? "图片" : "视频",
      designer: item.designer || "",
      source: SUPER_FACTORY_TOPIC_SOURCE,
    };
  });
}

function superFactoryOwner(item, index) {
  if (item.contentType === "图文") return "徐一诺";
  if (item.market === "Indonesia") return "周雨晴";
  if (item.market === "Vietnam") return "周宗莉";
  return index % 2 === 0 ? "周雨晴" : "周宗莉";
}

function scheduledJulyWorkday(index, owner, extraDays = 0) {
  const date = new Date(2026, 6, 10 + (index % 22) + extraDays);
  let guard = 0;
  while ((!isWorkday(date) || isUnavailable(owner, date)) && guard < 40) {
    date.setDate(date.getDate() + 1);
    guard += 1;
  }
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}

function scheduledPublishWorkday(index) {
  const date = new Date(2026, 6, 22 + (index % 22));
  let guard = 0;
  while (!isWorkday(date) && guard < 40) {
    date.setDate(date.getDate() + 1);
    guard += 1;
  }
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}

function isWorkday(date) {
  const day = date.getDay();
  return day !== 0 && day !== 6;
}

function isUnavailable(owner, date) {
  if (owner !== "周宗莉") return false;
  const start = new Date(2026, 6, 14);
  const end = new Date(2026, 6, 21);
  return date >= start && date <= end;
}

function monthlyOkr(month, owner, objective, keyResults) {
  return { id: idFrom(`${month}-${owner}`), month, owner, objective, keyResults: keyResults.map(([name, target, actual, unit]) => ({ name, target, actual, unit })) };
}

function idFrom(value) {
  return String(value).toLowerCase().replace(/[^a-z0-9\u4e00-\u9fa5]+/g, "-").replace(/(^-|-$)/g, "");
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function loadData() {
  try {
    const saved = JSON.parse(localStorage.getItem(DATA_KEY) || "{}");
    const next = { ...clone(defaultData), ...saved };
    next.accounts = Array.isArray(next.accounts) && next.accounts.length ? next.accounts : clone(defaultData.accounts);
    return normalizeData(next);
  } catch {
    return normalizeData(clone(defaultData));
  }
}

function normalizeData(next) {
  let changed = false;
  const beforeOwners = JSON.stringify(next.owners ?? []);
  next.owners = clone(REAL_OWNERS);
  if (beforeOwners !== JSON.stringify(next.owners)) changed = true;

  next.accounts = (Array.isArray(next.accounts) ? next.accounts : [])
    .filter((account) => account?.username)
    .map((account) => {
      const owner = ACCOUNT_PERSON_NAMES.has(account.owner) ? account.owner : FALLBACK_OWNER;
      const role = ROLE_PERMISSIONS[account.role] ? account.role : "viewer";
      const status = account.status === "停用" ? "停用" : "启用";
      if (owner !== account.owner || role !== account.role || status !== account.status) changed = true;
      return { ...account, owner, role, status };
    });

  const adminIndex = next.accounts.findIndex((account) => account.username === ADMIN_USERNAME);
  const adminAccount = {
    id: adminIndex >= 0 ? next.accounts[adminIndex].id : "acct-admin",
    username: ADMIN_USERNAME,
    owner: FALLBACK_OWNER,
    role: "admin",
    passwordHash: adminIndex >= 0 ? (next.accounts[adminIndex].passwordHash || ADMIN_PASSWORD_HASH) : ADMIN_PASSWORD_HASH,
    status: "启用",
  };
  if (adminIndex >= 0) {
    const beforeAdmin = JSON.stringify(next.accounts[adminIndex]);
    next.accounts[adminIndex] = { ...next.accounts[adminIndex], ...adminAccount };
    if (beforeAdmin !== JSON.stringify(next.accounts[adminIndex])) changed = true;
  } else {
    next.accounts.unshift(adminAccount);
    changed = true;
  }
  const designerIndex = next.accounts.findIndex((account) => account.username === DESIGNER_USERNAME);
  const designerAccount = {
    id: designerIndex >= 0 ? next.accounts[designerIndex].id : "acct-zhaolin",
    username: DESIGNER_USERNAME,
    owner: "赵琳",
    role: "designer",
    passwordHash: designerIndex >= 0 ? (next.accounts[designerIndex].passwordHash || DESIGNER_PASSWORD_HASH) : DESIGNER_PASSWORD_HASH,
    status: "启用",
  };
  if (designerIndex >= 0) {
    const beforeDesigner = JSON.stringify(next.accounts[designerIndex]);
    next.accounts[designerIndex] = { ...next.accounts[designerIndex], ...designerAccount };
    if (beforeDesigner !== JSON.stringify(next.accounts[designerIndex])) changed = true;
  } else {
    next.accounts.push(designerAccount);
    changed = true;
  }
  SEEDED_TEAM_ACCOUNTS.forEach((seed) => {
    const index = next.accounts.findIndex((account) => account.username === seed.username);
    const account = {
      ...seed,
      id: index >= 0 ? next.accounts[index].id : seed.id,
      passwordHash: seed.passwordHash,
      status: "启用",
    };
    if (index >= 0) {
      const before = JSON.stringify(next.accounts[index]);
      next.accounts[index] = { ...next.accounts[index], ...account };
      if (before !== JSON.stringify(next.accounts[index])) changed = true;
    } else {
      next.accounts.push(account);
      changed = true;
    }
  });
  if (!next.accounts.length) next.accounts = clone(defaultData.accounts);

  if (!Array.isArray(next.series)) next.series = clone(defaultData.series);
  next.series = next.series.map((seriesItem, index) => {
    const fallback = defaultData.series[index] ?? defaultData.series[0];
    const normalized = {
      ...seriesItem,
      cycle: seriesItem.cycle || fallback?.cycle || "每周 1 个主题，连续 12 周",
      conclusion: seriesItem.conclusion || fallback?.conclusion || "等待复盘结论。",
      months: Array.isArray(seriesItem.months) && seriesItem.months.length ? seriesItem.months : (fallback?.months || SERIES_MONTH_OPTIONS),
      bundles: Array.isArray(seriesItem.bundles) ? seriesItem.bundles : [],
    };
    if (JSON.stringify(normalized) !== JSON.stringify(seriesItem)) changed = true;
    return normalized;
  });

  ["topics", "okrs"].forEach((key) => {
    if (!Array.isArray(next[key])) next[key] = [];
    next[key].forEach((item) => {
      if (!REAL_OWNER_NAMES.has(item.owner)) {
        if (LEGACY_OWNER_NAMES.has(item.owner) || !item.owner) changed = true;
        item.owner = FALLBACK_OWNER;
      }
    });
  });
  next.okrs.forEach((okr) => normalizeOkrMetrics(okr));
  if (!Array.isArray(next.migrations)) next.migrations = [];
  if (!next.migrations.includes(TEAM_OKR_VERSION)) {
    JULY_TEAM_OKRS_FIXED.forEach((okr) => {
      const index = next.okrs.findIndex((item) => item.id === okr.id || (item.month === okr.month && item.owner === okr.owner));
      if (index >= 0) next.okrs[index] = clone(okr);
      else next.okrs.push(clone(okr));
    });
    next.activeMonth = "2026-07";
    next.migrations.push(TEAM_OKR_VERSION);
    changed = true;
  }

  if (!Array.isArray(next.designTasks)) {
    next.designTasks = [];
    changed = true;
  }
  if (!Array.isArray(next.publicDocs)) {
    next.publicDocs = [];
    changed = true;
  }
  if (!next.migrations.includes(SUPER_FACTORY_TOPIC_VERSION)) {
    const importedTopicIds = new Set(next.topics.filter((item) => String(item.source || "").startsWith("super-factory-topic-import")).map((item) => item.id));
    next.topics = next.topics.filter((item) => !String(item.source || "").startsWith("super-factory-topic-import"));
    next.designTasks = next.designTasks.filter((task) => task.source !== "topic" || !importedTopicIds.has(task.topicId));
    const superFactory = next.series.find((item) => item.id === "s3");
    if (superFactory) {
      superFactory.months = [...new Set([...(superFactory.months || []), "2026-07", "2026-08", "2026-09"])];
      superFactory.cycle = "7 月集中导入 70 个主题，按周筛选执行";
      superFactory.conclusion = "用生产、质检和交付细节提高专业可信度，适合招商和经销线索。";
    }
    SUPER_FACTORY_TOPICS.forEach((topicItem) => {
      const nextTopic = clone(topicItem);
      next.topics.push(nextTopic);
      if (nextTopic.designer) {
        next.designTasks.push({
          id: designTaskIdForTopic(nextTopic.id),
          source: "topic",
          topicId: nextTopic.id,
          title: nextTopic.title,
          requester: nextTopic.owner,
          designer: nextTopic.designer,
          contentType: nextTopic.contentType || "视频",
          platforms: topicPlatforms(nextTopic),
          requestedAt: nextTopic.shoot || todayString(),
          dueDate: nextTopic.publish || nextTopic.shoot || "",
          status: "待设计",
          delayed: false,
          completedAt: "",
          assetUrl: "",
          note: "",
        });
      }
    });
    next.migrations.push(SUPER_FACTORY_TOPIC_VERSION);
    changed = true;
  }
  next.designTasks.forEach((task) => {
    if (!task.requestedAt) {
      task.requestedAt = task.dueDate || todayString();
      changed = true;
    }
    if (!task.completedAt) task.completedAt = "";
  });
  if (!Array.isArray(next.apiConnections)) {
    next.apiConnections = clone(defaultData.apiConnections);
    changed = true;
  } else {
    API_PLATFORMS.forEach(([id, name]) => {
      if (!next.apiConnections.some((item) => item.id === id)) {
        next.apiConnections.push({ id, name, status: "未接入", accountId: "", credentialNote: "", syncMode: "手动同步", lastSync: "", owner: FALLBACK_OWNER, note: "" });
        changed = true;
      }
    });
  }
  next.topics.forEach((item) => {
    if (!Array.isArray(item.platforms)) {
      item.platforms = Array.isArray(item.bundles) ? platformsFromBundles(item.bundles, next.platformBundles) : [];
      changed = true;
    }
    if (!item.contentType) {
      item.contentType = "视频";
      changed = true;
    }
    if (item.designer === undefined) {
      item.designer = "";
      changed = true;
    }
    if (!item.referenceType) {
      item.referenceType = "图片";
      changed = true;
    }
    const beforePublishState = JSON.stringify({ publishedAt: item.publishedAt, publishTag: item.publishTag });
    normalizePublishState(item);
    if (beforePublishState !== JSON.stringify({ publishedAt: item.publishedAt, publishTag: item.publishTag })) changed = true;
  });

  if (changed) localStorage.setItem(DATA_KEY, JSON.stringify(next));
  return next;
}

function saveData() {
  data.activeMonth = activeMonth;
  localStorage.setItem(DATA_KEY, JSON.stringify(data));
}

function getSeries(id) {
  return data.series.find((item) => item.id === id);
}

function getBundle(id) {
  return data.platformBundles.find((item) => item.id === id);
}

function getOwner(name) {
  return data.owners.find((item) => item.name === name);
}

function getAccount(id) {
  return data.accounts.find((item) => item.id === id);
}

function platformsFromBundles(bundleIds = [], bundles = data?.platformBundles || []) {
  return [...new Set(bundleIds.flatMap((bundleId) => bundles.find((bundle) => bundle.id === bundleId)?.platforms ?? []))];
}

function topicPlatforms(item) {
  const selected = Array.isArray(item.platforms) ? item.platforms.filter(Boolean) : [];
  if (selected.length) return selected;
  return platformsFromBundles(item.bundles);
}

function normalizePublishState(item) {
  if (!item.postUrl) {
    item.publishedAt = "";
    item.publishTag = "未发布";
    return item;
  }
  if (!item.publishedAt) item.publishedAt = item.publish || todayString();
  if (!PUBLISH_TAGS.includes(item.publishTag)) item.publishTag = publishTagForTopic(item, item.publishedAt);
  return item;
}

function publishTagForTopic(item, actualDate = todayString()) {
  if (!item.postUrl) return "未发布";
  if (!item.publish) return "按时发布";
  return compareDateOnly(actualDate, item.publish) <= 0 ? "按时发布" : "未按时发布";
}

function compareDateOnly(left, right) {
  const leftTime = Date.parse(`${left}T00:00:00`);
  const rightTime = Date.parse(`${right}T00:00:00`);
  if (Number.isNaN(leftTime) || Number.isNaN(rightTime)) return 0;
  return leftTime - rightTime;
}

function publishStats(topics) {
  const published = topics.filter((item) => item.postUrl);
  return {
    onTime: published.filter((item) => item.publishTag === "按时发布").length,
    late: published.filter((item) => item.publishTag === "未按时发布").length,
  };
}

function currentPermissions() {
  return ROLE_PERMISSIONS[currentAccount?.role] ?? ROLE_PERMISSIONS.viewer;
}

function isAdmin() {
  return currentAccount?.role === "admin";
}

function canAccessView(viewId) {
  return currentPermissions().views.includes(viewId);
}

function firstAllowedView() {
  return currentPermissions().views[0] ?? "overview";
}

function defaultLandingView() {
  if (currentAccount?.role === "designer" && canAccessView("design")) return "design";
  if (canAccessView("overview")) return "overview";
  return firstAllowedView();
}

function canSeeTopic(item) {
  const scope = currentPermissions().topicScope;
  return scope === "all" || !currentAccount?.owner || item.owner === currentAccount.owner;
}

function canSeeOwner(ownerName) {
  const scope = currentPermissions().topicScope;
  return scope === "all" || !currentAccount?.owner || ownerName === currentAccount.owner;
}

function canSeeDesignTask(task) {
  const scope = currentPermissions().topicScope;
  if (scope === "all" || !currentAccount?.owner) return true;
  return task.requester === currentAccount.owner || task.owner === currentAccount.owner || task.designer === currentAccount.owner;
}

function visibleDesignTasks() {
  return (data.designTasks || []).filter(canSeeDesignTask);
}

function canManageDesignTask(task = null) {
  if (canManageSystem()) return true;
  if (!currentPermissions().canManageDesignTasks) return false;
  return !task || canSeeDesignTask(task);
}

function canEditTopic(item = null) {
  const scope = currentPermissions().topicScope;
  if (!currentPermissions().canCreateTopic) return false;
  if (!item || scope === "all") return true;
  return item.owner === currentAccount?.owner;
}

function canManageOkr() {
  return Boolean(currentPermissions().canManageOkr);
}

function canUpdateOkrActual(okr) {
  return canManageOkr() || (currentAccount?.role === "marketing" && okr.owner === currentAccount.owner);
}

function canManageSystem() {
  return Boolean(currentPermissions().canManageSystem);
}

function canEditData() {
  return Boolean(currentPermissions().canEditData);
}

function canExport() {
  return Boolean(currentPermissions().canExport);
}

function canUploadPublicDocs() {
  return canEditData() || currentPermissions().canManageDesignTasks || currentPermissions().canCreateTopic;
}

function canDeletePublicDoc(doc) {
  return canManageSystem() || doc.uploader === currentAccount?.owner;
}

function roleLockedMessage() {
  return "当前账号没有这个操作权限。";
}

function monthLabel(month) {
  const [year, value] = month.split("-");
  return `${year}年${Number(value)}月`;
}

function shortMonthLabel(month) {
  return `${Number(String(month).split("-")[1])}月`;
}

function parsePlatformList(value = "") {
  return String(value)
    .split(/[+,/，、]/)
    .map((item) => item.replace(/\++$/g, "").trim())
    .filter(Boolean);
}

async function sha256(text) {
  const bytes = new TextEncoder().encode(text);
  const hash = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(hash), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

function showApp() {
  $("#loginScreen").hidden = true;
  $("#appShell").hidden = false;
  renderCurrentAccount();
  renderAll();
  switchView(defaultLandingView());
}

function showLogin() {
  $("#loginScreen").hidden = false;
  $("#appShell").hidden = true;
  $("#passwordInput").value = "";
}

async function handleLogin(event) {
  event.preventDefault();
  const username = $("#usernameInput").value.trim();
  const passwordHash = await sha256($("#passwordInput").value);
  const account = data.accounts.find((item) => item.username === username && item.status !== "停用");
  const fallbackAdmin = username === ADMIN_USERNAME && passwordHash === ADMIN_PASSWORD_HASH;
  if ((account && account.passwordHash === passwordHash) || fallbackAdmin) {
    currentAccount = account ?? defaultData.accounts[0];
    sessionStorage.setItem(SESSION_KEY, currentAccount.username);
    $("#loginError").textContent = "";
    showApp();
  } else {
    $("#loginError").textContent = "用户名或密码不正确";
  }
}

function restoreSession() {
  const username = sessionStorage.getItem(SESSION_KEY);
  currentAccount = data.accounts.find((item) => item.username === username) ?? null;
  return Boolean(currentAccount);
}

function renderCurrentAccount() {
  const account = currentAccount ?? data.accounts.find((item) => item.username === ADMIN_USERNAME);
  if (!account) return;
  $("#currentAccountPill").textContent = `${account.owner || account.username} · ${ROLE_LABELS[account.role] ?? account.role} · ${account.username}`;
}

function applyRoleAccess() {
  const allowedViews = currentPermissions().views;
  $$(".nav-item").forEach((button) => {
    button.hidden = !allowedViews.includes(button.dataset.view);
  });
  $("#exportButton").hidden = !canExport();
  $("#simulateButton").hidden = !canEditData();
  const activeView = $(".view.active")?.id;
  if (!activeView || !canAccessView(activeView)) switchView(firstAllowedView());
  else {
    $("#homeBanner").hidden = activeView !== "overview";
    updatePrimaryAction(activeView);
  }
}

function updatePrimaryAction(viewId = $(".view.active")?.id) {
  const button = $("#newTopicButton");
  if (!button) return;
  const actions = {
    overview: currentPermissions().canCreateTopic ? { label: "新建内容", action: "new-topic" } : null,
    calendar: currentPermissions().canCreateTopic ? { label: "新建帖子", action: "new-topic" } : null,
    library: currentPermissions().canCreateTopic ? { label: "新增主题", action: "new-topic" } : null,
    okr: canManageOkr() ? { label: "新增 OKR", action: "new-okr" } : null,
  };
  const config = actions[viewId] ?? null;
  button.hidden = !config;
  if (!config) return;
  button.dataset.action = config.action;
  button.innerHTML = `<span>＋</span>${config.label}`;
}

function renderAll() {
  renderSummaryCounts();
  renderSeriesMonthTabs();
  renderSeries();
  renderBundles();
  renderTasks();
  renderPlatforms();
  renderFilters();
  renderCalendar();
  renderContentTable();
  renderOkrMonths();
  renderOkr();
  renderAnalytics();
  renderSystemEditor();
  renderDesignSchedule();
  renderPublicDocs();
  renderApiConnections();
  applyRoleAccess();
}

function renderSummaryCounts() {
  const visibleTopics = data.topics.filter(canSeeTopic);
  const visibleOwners = currentPermissions().topicScope === "all" ? data.owners : data.owners.filter((owner) => canSeeOwner(owner.name));
  $("#topicCount").textContent = String(visibleTopics.length);
  $("#ownerCount").textContent = String(visibleOwners.length);
}

function renderSeriesMonthTabs() {
  $$(".segmented button[data-month]").forEach((button) => {
    const value = button.dataset.month === "all" ? "all" : `2026-0${button.dataset.month}`;
    button.classList.toggle("active", value === activeSeriesMonth);
  });
}

function renderSeries() {
  const rows = data.series.filter((item) => activeSeriesMonth === "all" || (item.months || []).includes(activeSeriesMonth));
  $("#seriesGrid").innerHTML = rows.length ? rows.map((item) => {
    const topics = data.topics.filter((topicItem) => topicItem.seriesId === item.id && canSeeTopic(topicItem) && (activeSeriesMonth === "all" || topicItem.month === activeSeriesMonth));
    const mainPlatforms = parsePlatformList(item.main);
    const seriesBadge = canManageSystem()
      ? `<button class="series-badge" style="background:${item.color}" data-edit-series="${item.id}" title="编辑系列">${item.code}</button>`
      : `<span class="series-badge" style="background:${item.color}">${item.code}</span>`;
    return `
      <article class="series-card series-button" data-view-series="${item.id}" tabindex="0" role="button" aria-label="查看${escapeAttr(item.name)}主题列表">
        <div class="series-top">
          ${seriesBadge}
          <div class="series-platforms">${mainPlatforms.length ? mainPlatforms.map((platform) => `<span>${platform}</span>`).join("") : "<span>未选平台</span>"}</div>
        </div>
        <h3>${item.name}</h3>
        <p>${item.position}，面向 ${item.audience}。</p>
        <div class="series-meta">
          <span>${(item.months || []).map(shortMonthLabel).join(" / ")} · ${item.cycle || "未设置周期"}</span>
          <span>${item.conclusion || "未填写结论"}</span>
        </div>
        <div class="mini-stats">
          <div><strong>${topics.length}</strong><span>主题</span></div>
          <div><strong>${item.bundles.length}</strong><span>平台包</span></div>
          <div><strong>${topics.filter((topicItem) => topicItem.postUrl).length}</strong><span>已发链接</span></div>
        </div>
      </article>
    `;
  }).join("") : `<div class="empty-state">这个月份还没有配置系列。进入设置页编辑系列，勾选适用月份。</div>`;
}

function openSeriesTopics(seriesId) {
  const series = getSeries(seriesId);
  if (!series) return;
  const topics = data.topics
    .filter((topicItem) => topicItem.seriesId === series.id && canSeeTopic(topicItem))
    .sort((a, b) => (a.publish || "").localeCompare(b.publish || ""));
  const canAddTopic = currentPermissions().canCreateTopic;
  $("#detailSeries").textContent = `${series.code} · ${series.cycle || "未设置周期"}`;
  $("#detailTitle").textContent = series.name;
  $("#detailSubtitle").textContent = `${series.position}，面向 ${series.audience}。${series.conclusion || ""}`;
  $("#detailPlatforms").innerHTML = series.bundles.length
    ? series.bundles.map((bundleId) => `<span class="chip">${getBundle(bundleId)?.name ?? bundleId}</span>`).join("")
    : `<span class="muted">还没有配置平台包</span>`;
  $("#detailOkr").innerHTML = `
    <div><strong>主要平台</strong><span>${series.main || "未设置"}</span></div>
    <div><strong>周期</strong><span>${series.cycle || "未设置"}</span></div>
    <div><strong>结论</strong><span>${series.conclusion || "未填写"}</span></div>
  `;
  $("#detailReferences").innerHTML = topics.length
    ? topics.map((topicItem) => `<li>${canEditTopic(topicItem)
      ? `<button class="topic-detail-link" data-edit-topic="${topicItem.id}">${topicItem.title}<span>${topicItem.owner} · ${topicItem.status}</span></button>`
      : `<span class="topic-detail-link">${topicItem.title}<span>${topicItem.owner} · ${topicItem.status}</span></span>`}</li>`).join("")
    : `<li class="muted">这个系列还没有主题。</li>`;
  $("#detailLinks").innerHTML = `
    <div><strong>主题数量</strong><span>${topics.length}</span></div>
    <div><strong>已发链接</strong><span>${topics.filter((topicItem) => topicItem.postUrl).length}</span></div>
    <div><strong>本月主题</strong><span>${topics.filter((topicItem) => topicItem.month === activeMonth).length}</span></div>
  `;
  $("#detailScript").innerHTML = `
    <div class="series-topic-actions">
      ${canAddTopic ? `<button class="primary-button" data-new-topic-for-series="${series.id}">添加主题</button>` : ""}
      ${canManageSystem() ? `<button class="ghost-button" data-edit-series="${series.id}">编辑系列</button>` : ""}
    </div>
  `;
  $("#detailTimes").innerHTML = topics.length
    ? topics.map((topicItem) => `<div><strong>${topicItem.publish || "发布时间待定"}</strong><span>${topicItem.title} · ${topicItem.okrKey || "未关联 KR"}</span></div>`).join("")
    : `<div><strong>暂无排期</strong><span>添加主题后会在这里展示发布时间。</span></div>`;
  $("#detailModal").hidden = false;
}

function renderBundles() {
  $("#bundleGrid").innerHTML = data.platformBundles.map((bundle) => `
    <article class="bundle-card">
      <div>
        <h4>${bundle.name}</h4>
        <p>${bundle.usage}</p>
      </div>
      <div class="platform-chips">${bundle.platforms.map((platform) => `<span class="chip">${platform}</span>`).join("")}</div>
      <span class="bundle-format">${bundle.format}</span>
      ${canManageSystem() ? `<button class="ghost-button table-action" data-edit-bundle="${bundle.id}">编辑组合</button>` : ""}
    </article>
  `).join("");
}

function renderTasks() {
  $("#taskList").innerHTML = [
    ["月度 OKR", "按月设 Objective 和可量化 KR，系统按实际值计算完成率", monthLabel(activeMonth)],
    ["帖子可编辑", "主题、状态、负责人、脚本、时间、链接和数据都可以修改", "已开放"],
    ["系统可编辑", "系列、平台组合、成员、月度 OKR 都在设置页维护", "已开放"],
    ["数据追踪", "发布链接后录入播放、完播、互动、转粉，进入绩效看板", "每日"],
  ].map((taskItem, index) => `
    <div class="task-item">
      <span class="checkbox">${index === 0 ? "✓" : ""}</span>
      <div><strong>${taskItem[0]}</strong><span>${taskItem[1]}</span></div>
      <span class="tag">${taskItem[2]}</span>
    </div>
  `).join("");
}

function renderPlatforms() {
  $("#platformList").innerHTML = data.platformBundles.map((bundle) => `
    <div class="platform-item">
      <span class="checkbox">${bundle.name.slice(0, 1)}</span>
      <div><strong>${bundle.name}</strong><span>${bundle.format}</span></div>
      ${canManageSystem() ? `<button class="ghost-button table-action" data-edit-bundle="${bundle.id}">编辑</button>` : ""}
    </div>
  `).join("");
}

function renderFilters() {
  const current = $("#seriesFilter").value || "all";
  $("#seriesFilter").innerHTML = `<option value="all">全部系列</option>${data.series.map((item) => `<option value="${item.id}">${item.name}</option>`).join("")}`;
  $("#seriesFilter").value = data.series.some((item) => item.id === current) ? current : "all";
  const visibleWeeks = calendarWeekOptions();
  if (!visibleWeeks.some((item) => item.id === activeCalendarWeek)) activeCalendarWeek = "all";
  $("#weekFilter").innerHTML = `<option value="all">全部周次</option>${visibleWeeks.map((item) => `<option value="${item.id}">${item.label}</option>`).join("")}`;
  $("#weekFilter").value = activeCalendarWeek;
  renderContentFilters();
}

function renderContentFilters() {
  const visibleTopics = data.topics.filter(canSeeTopic);
  const topicOptions = visibleTopics
    .slice()
    .sort((a, b) => a.title.localeCompare(b.title, "zh-CN"))
    .map((item) => [item.id, item.title]);
  const ownerOptions = [...new Set(visibleTopics.map((item) => item.owner).filter(Boolean))]
    .sort((a, b) => a.localeCompare(b, "zh-CN"))
    .map((owner) => [owner, owner]);
  const platformOptions = [...new Set(visibleTopics.flatMap((item) => topicPlatforms(item)).filter(Boolean))]
    .sort((a, b) => a.localeCompare(b, "zh-CN"))
    .map((platform) => [platform, platform]);
  activeContentTopic = renderSelectOptions("#contentTopicFilter", activeContentTopic, "全部主题", topicOptions);
  activeContentOwner = renderSelectOptions("#contentOwnerFilter", activeContentOwner, "全部负责人", ownerOptions);
  activeContentPlatform = renderSelectOptions("#contentPlatformFilter", activeContentPlatform, "全部平台", platformOptions);
}

function renderSelectOptions(selector, currentValue, allLabel, options) {
  const select = $(selector);
  if (!select) return "all";
  const exists = options.some(([value]) => value === currentValue);
  const value = exists ? currentValue : "all";
  select.innerHTML = `<option value="all">${allLabel}</option>${options.map(([optionValue, optionLabel]) => `<option value="${escapeAttr(optionValue)}">${optionLabel}</option>`).join("")}`;
  select.value = value;
  return value;
}

function calendarWeekOptions() {
  const map = new Map();
  data.topics
    .filter((item) => canSeeTopic(item) && (activeSeries === "all" || item.seriesId === activeSeries) && item.month === activeMonth)
    .forEach((item) => {
      const id = calendarWeekId(item.publish);
      if (!map.has(id)) map.set(id, calendarWeekLabel(item.publish));
    });
  return Array.from(map, ([id, label]) => ({ id, label })).sort((a, b) => {
    if (a.id === "unscheduled") return 1;
    if (b.id === "unscheduled") return -1;
    return a.id.localeCompare(b.id);
  });
}

function calendarWeekId(dateText = "") {
  if (!dateText) return "unscheduled";
  const date = new Date(`${dateText}T00:00:00`);
  if (Number.isNaN(date.getTime())) return "unscheduled";
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  const week = Math.floor((date.getDate() + firstDay.getDay() - 1) / 7) + 1;
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-w${week}`;
}

function calendarWeekLabel(dateText = "") {
  if (!dateText) return "待定";
  const date = new Date(`${dateText}T00:00:00`);
  if (Number.isNaN(date.getTime())) return "待定";
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  const week = Math.floor((date.getDate() + firstDay.getDay() - 1) / 7) + 1;
  return `${date.getMonth() + 1}月第${week}周`;
}

function renderCalendar() {
  const rows = data.topics
    .filter((item) => canSeeTopic(item) && (activeSeries === "all" || item.seriesId === activeSeries) && item.month === activeMonth && (activeCalendarWeek === "all" || calendarWeekId(item.publish) === activeCalendarWeek))
    .sort((a, b) => a.publish.localeCompare(b.publish));
  if (!rows.length) {
    $("#calendarBoard").innerHTML = `<div class="empty-state">还没有内容规划。点击右上角“新建内容”或到设置里新增帖子主题。</div>`;
    return;
  }
  $("#calendarBoard").innerHTML = rows.map((item) => {
    const series = getSeries(item.seriesId);
    return `
      <article class="week-card">
        <div class="week-head">
          <div>
            <h3>${item.title}</h3>
            <span>${item.publish || "待定"} · ${item.owner}</span>
          </div>
          <span class="series-badge" style="background:${series?.color ?? "#2f64b7"}">${series?.code ?? "S"}</span>
        </div>
        <div class="week-topics"><button class="topic-link" ${canEditTopic(item) ? `data-edit-topic="${item.id}"` : ""}>${item.subtitle}<small>${item.status} · ${item.okrKey}</small></button></div>
        <div class="platform-chips">${[...new Set(topicPlatforms(item))].map((chip) => `<span class="chip">${chip}</span>`).join("")}</div>
      </article>
    `;
  }).join("");
}

function renderContentTable() {
  const rows = data.topics.filter((item) => {
    const platforms = topicPlatforms(item);
    return canSeeTopic(item)
      && (activeContentTopic === "all" || item.id === activeContentTopic)
      && (activeContentOwner === "all" || item.owner === activeContentOwner)
      && (activeContentPlatform === "all" || platforms.includes(activeContentPlatform));
  });
  $("#contentRows").innerHTML = rows.length ? rows.map((item) => `
    <tr>
      <td class="content-title"><strong>${item.title}</strong><span>${getSeries(item.seriesId)?.name ?? ""} · ${item.subtitle} · ${item.contentType || "未选形式"}${item.designer ? ` · ${item.designer}协助` : ""}</span></td>
      <td>${[...new Set(topicPlatforms(item))].join(" / ")}</td>
      <td><span class="status">${item.status}</span>${item.postUrl ? `<span class="status ${item.publishTag === "未按时发布" ? "risk" : "go"}">${item.publishTag}</span>` : ""}</td>
      <td>${item.owner}</td>
      <td>${item.okrKey}</td>
      <td>${item.postUrl ? `<a href="${item.postUrl}" target="_blank" rel="noreferrer">${platformFromUrl(item.postUrl)}</a>` : "未上传"}</td>
      <td>${canEditTopic(item) ? `<button class="ghost-button table-action" data-edit-topic="${item.id}">编辑</button>` : `<span class="muted">只读</span>`}</td>
    </tr>
  `).join("") : `<tr><td colspan="7" class="empty-table">还没有帖子主题，可以从“新建内容”开始手动添加。</td></tr>`;
}

function normalizeKr(krItem = {}) {
  const name = String(krItem.name || "").trim();
  const inferredTarget = Math.round(Number(krItem.target || String(name).match(/(\d+(?:\.\d+)?)/)?.[1] || 1));
  return {
    ...krItem,
    name,
    target: Number.isFinite(inferredTarget) && inferredTarget > 0 ? inferredTarget : 1,
    actual: Math.max(0, Math.round(Number(krItem.actual || 0))),
    unit: krItem.unit || inferKrUnit(name),
  };
}

function inferKrUnit(name = "") {
  if (name.includes("%") || name.includes("率")) return "%";
  if (name.includes("播放") || name.includes("曝光")) return "次";
  if (name.includes("分享") || name.includes("规划")) return "次";
  if (name.includes("线索")) return "条";
  return "条";
}

function normalizeOkrMetrics(okr) {
  if (Array.isArray(okr.objectives) && okr.objectives.length) {
    okr.objectives = okr.objectives.map((objective, index) => ({
      id: objective.id || `o-${index + 1}`,
      title: objective.title || objective.objective || "",
      keyResults: (Array.isArray(objective.keyResults) ? objective.keyResults : []).map(normalizeKr),
    }));
    okr.keyResults = okr.objectives.flatMap((objective) => objective.keyResults);
    return okr;
  }
  okr.keyResults = (Array.isArray(okr.keyResults) ? okr.keyResults : []).map(normalizeKr);
  return okr;
}

function okrScore(okr) {
  const keyResults = okrObjectives(okr).flatMap((objective) => objective.keyResults).filter((krItem) => krItem.name);
  if (!keyResults.length) return 0;
  const total = keyResults.reduce((sum, krItem) => {
    const target = Number(krItem.target || 0);
    if (target <= 0) return sum;
    return sum + Math.min(Number(krItem.actual || 0) / target, 1);
  }, 0);
  return Math.round((total / keyResults.length) * 100);
}

function okrObjectives(okr) {
  normalizeOkrMetrics(okr);
  if (Array.isArray(okr.objectives) && okr.objectives.length) {
    return okr.objectives.map((objective, index) => ({
      id: objective.id || `o-${index + 1}`,
      title: objective.title || objective.objective || "",
      keyResults: Array.isArray(objective.keyResults) ? objective.keyResults.map(normalizeKr) : [],
    }));
  }
  return [{
    id: "o-1",
    title: okr.objective || "",
    keyResults: Array.isArray(okr.keyResults) ? okr.keyResults.map(normalizeKr) : [],
  }];
}

function renderOkrMonths() {
  const months = [...new Set(SERIES_MONTH_OPTIONS.concat(data.okrs.map((item) => item.month), data.topics.map((item) => item.month)))].sort();
  if (!months.length) months.push(activeMonth || defaultData.activeMonth);
  if (!months.includes(activeMonth)) activeMonth = months[0];
  $("#okrMonthTabs").innerHTML = months.map((month) => `<button class="${month === activeMonth ? "active" : ""}" data-okr-month="${month}">${monthLabel(month)}</button>`).join("");
}

function renderOkr() {
  const monthOkrs = data.okrs.filter((item) => item.month === activeMonth && canSeeOwner(item.owner));
  const monthTopics = data.topics.filter((item) => item.month === activeMonth && canSeeTopic(item));
  if (!monthOkrs.length) {
    $("#okrGrid").innerHTML = `<div class="empty-state">还没有月度 OKR。到设置里新增月度 OKR 后，这里会自动计算成员完成率。</div>`;
    return;
  }
  $("#okrGrid").innerHTML = monthOkrs.map((okr) => {
    const score = okrScore(okr);
    const ownerTopics = monthTopics.filter((item) => item.owner === okr.owner);
    const objectives = okrObjectives(okr);
    const canUpdate = canUpdateOkrActual(okr);
    return `
      <article class="okr-card">
        <div class="okr-head">
          <div><h3>${okr.owner}</h3><span>${getOwner(okr.owner)?.title ?? "成员"}</span></div>
          <strong>${score}%</strong>
        </div>
        <div class="okr-objective-list">
          ${objectives.map((objective, objectiveIndex) => `
            <div class="okr-objective-summary">
              <p><b>O${objectiveIndex + 1}：</b>${objective.title || "未填写 Objective"}</p>
              <div class="kr-list">
                ${objective.keyResults.map((krItem, krIndex) => `
                  <div class="kr-metric-row">
                    <span>${krItem.name}</span>
                    <label>
                      <input type="number" step="1" min="0" value="${escapeAttr(Math.round(krItem.actual || 0))}" ${canUpdate ? "" : "disabled"} data-okr-actual="${okr.id}" data-objective-index="${objectiveIndex}" data-kr-index="${krIndex}" />
                      <b>/ ${krItem.target}${krItem.unit || ""}</b>
                    </label>
                  </div>
                `).join("")}
              </div>
            </div>
          `).join("")}
        </div>
        <div class="okr-bar"><i style="width:${score}%"></i></div>
        <div class="okr-stats">
          <span>本月主题 ${ownerTopics.length}</span>
          <span>已传链接 ${ownerTopics.filter((item) => item.postUrl).length}</span>
          <span>可发布 ${ownerTopics.filter((item) => item.status === "可发布").length}</span>
        </div>
        ${canManageOkr() ? `<button class="ghost-button table-action" data-edit-okr="${okr.id}">编辑月度 OKR</button>` : ""}
      </article>
    `;
  }).join("");
}

function updateOkrActual(input) {
  const okr = data.okrs.find((item) => item.id === input.dataset.okrActual);
  if (!okr || !canUpdateOkrActual(okr)) return;
  const objectiveIndex = Number(input.dataset.objectiveIndex);
  const krIndex = Number(input.dataset.krIndex);
  normalizeOkrMetrics(okr);
  const keyResult = okr.objectives?.[objectiveIndex]?.keyResults?.[krIndex];
  if (!keyResult) return;
  keyResult.actual = Math.max(0, Math.round(Number(input.value || 0)));
  input.value = keyResult.actual;
  okr.keyResults = okr.objectives.flatMap((objective) => objective.keyResults);
  saveData();
  renderOkr();
}

function dataForTopic(item) {
  const seed = item.title.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return {
    views: Number(item.views || (item.postUrl ? seed * 37 : 0)),
    completion: Number(item.completion || (item.postUrl ? 28 + (seed % 34) : 0)),
    engagement: Number(item.engagement || (item.postUrl ? (2.5 + (seed % 60) / 10).toFixed(1) : 0)),
    followers: Number(item.followers || (item.postUrl ? seed % 86 : 0)),
  };
}

function renderAnalytics() {
  const monthTopics = data.topics.filter((item) => item.month === activeMonth && canSeeTopic(item));
  const timing = publishStats(monthTopics);
  const totalViews = monthTopics.reduce((sum, item) => sum + dataForTopic(item).views, 0);
  const avgCompletion = average(monthTopics.map((item) => dataForTopic(item).completion).filter(Boolean));
  const avgEngagement = average(monthTopics.map((item) => dataForTopic(item).engagement).filter(Boolean));
  const totalFollowers = monthTopics.reduce((sum, item) => sum + dataForTopic(item).followers, 0);
  $("#analyticsGrid").innerHTML = [
    ["本月播放/展示", totalViews.toLocaleString("zh-CN"), 78],
    ["平均完播率", `${avgCompletion}%`, avgCompletion],
    ["平均互动率", `${avgEngagement}%`, avgEngagement * 10],
    ["粉丝增长", totalFollowers, 66],
    ["按时发布", timing.onTime, timing.onTime ? 100 : 0],
    ["未按时发布", timing.late, timing.late ? 100 : 0],
  ].map((metric) => `
    <article class="metric-card">
      <span>${metric[0]}</span>
      <strong>${metric[1]}</strong>
      <div class="bar"><i style="width:${Math.min(metric[2], 100)}%"></i></div>
    </article>
  `).join("");
  $("#postBoard").innerHTML = `
    <div class="post-row post-head"><span>主题</span><span>平台</span><span>发布</span><span>播放</span><span>完播</span><span>互动</span><span>判断</span></div>
    ${monthTopics.map((item) => {
      const stats = dataForTopic(item);
      const decision = !item.postUrl ? "待链接" : stats.completion >= 45 && stats.engagement >= 6 ? "Go" : stats.completion >= 32 ? "优化重测" : "No-Go";
      return `
        <div class="post-row ${canEditTopic(item) ? "editable-row" : ""}" ${canEditTopic(item) ? `data-edit-topic="${item.id}"` : ""}>
          <div><strong>${item.title}</strong><span>${item.owner} · ${getSeries(item.seriesId)?.name ?? ""}</span></div>
          <span>${item.postUrl ? platformFromUrl(item.postUrl) : "未上传"}</span>
          <span>${item.postUrl ? `<i class="status ${item.publishTag === "未按时发布" ? "risk" : "go"}">${item.publishTag}</i>` : "-"}</span>
          <span>${stats.views ? stats.views.toLocaleString("zh-CN") : "-"}</span>
          <span>${stats.completion ? `${stats.completion}%` : "-"}</span>
          <span>${stats.engagement ? `${stats.engagement}%` : "-"}</span>
          <span class="status">${decision}</span>
        </div>
      `;
    }).join("")}
  `;
  $("#goNoGoRules").innerHTML = [
    ["Go", "完播率 ≥ 45%，互动率 ≥ 6%", "继续加码同类主题，追加同系列选题和设计资源。", "负责人：运营主管"],
    ["优化重测", "完播率 32%-44%，或互动率未达 6%", "调整 Hook、时长、字幕、封面或首屏信息，7 天内重发测试。", "负责人：主题负责人 + 设计师"],
    ["No-Go", "低于基准 50%，或两轮重测仍未达标", "暂停同题材投入，沉淀失败原因，保留素材但不继续排期。", "负责人：运营负责人"],
  ].map(([name, threshold, action, owner]) => `
    <div class="rule-card">
      <strong>${name}</strong>
      <span>${threshold}</span>
      <p>${action}</p>
      <small>${owner}</small>
    </div>
  `).join("");
}

function average(values) {
  if (!values.length) return 0;
  return Number((values.reduce((sum, value) => sum + Number(value), 0) / values.length).toFixed(1));
}

function platformFromUrl(url) {
  if (/youtube|youtu\.be/i.test(url)) return "YouTube";
  if (/tiktok/i.test(url)) return "TikTok";
  if (/instagram/i.test(url)) return "Instagram";
  if (/facebook|fb\.watch/i.test(url)) return "Facebook";
  if (/linkedin/i.test(url)) return "LinkedIn";
  return "待识别";
}

function designTaskIdForTopic(topicId) {
  return `design-${topicId}`;
}

function syncDesignTaskForTopic(item) {
  if (!Array.isArray(data.designTasks)) data.designTasks = [];
  const taskId = designTaskIdForTopic(item.id);
  const index = data.designTasks.findIndex((task) => task.id === taskId);
  if (!item.designer) {
    if (index >= 0) data.designTasks.splice(index, 1);
    return;
  }
  const existing = index >= 0 ? data.designTasks[index] : {};
  const next = {
    id: taskId,
    source: "topic",
    topicId: item.id,
    title: item.title,
    requester: item.owner,
    designer: item.designer,
    contentType: item.contentType || "视频",
    platforms: topicPlatforms(item),
    requestedAt: existing.requestedAt || item.shoot || item.publish || todayString(),
    dueDate: item.publish || item.shoot || "",
    status: existing.status || "待设计",
    delayed: Boolean(existing.delayed),
    completedAt: existing.completedAt || "",
    assetUrl: existing.assetUrl || "",
    note: existing.note || "",
  };
  if (index >= 0) data.designTasks[index] = next;
  else data.designTasks.push(next);
}

function renderDesignSchedule() {
  const mount = $("#designSchedule");
  if (!mount) return;
  const rows = visibleDesignTasks().slice().sort((a, b) => (a.dueDate || "").localeCompare(b.dueDate || ""));
  mount.innerHTML = `
    <div class="design-schedule-head">
      <div>
        <strong>赵琳设计排期表</strong>
        <span>${rows.length} 个设计需求</span>
      </div>
      ${canManageDesignTask() ? `<button class="primary-button" data-new-design-task="1">添加设计需求</button>` : ""}
    </div>
    <div class="design-schedule-table">
      <div class="design-row design-head"><span>需求</span><span>平台/形式</span><span>设计师</span><span>提出</span><span>截止</span><span>耗时</span><span>状态</span><span>成品</span></div>
      ${rows.length ? rows.map((task) => {
        const tag = canManageDesignTask(task) ? "button" : "div";
        const editAttr = canManageDesignTask(task) ? ` data-edit-design-task="${task.id}"` : "";
        return `
        <${tag} class="design-row ${task.delayed ? "is-delayed" : ""}"${editAttr}>
          <span><strong>${task.title}</strong><small>${task.source === "topic" ? "来自主题" : "手动需求"} · 需求人：${task.requester || "未填写"}</small></span>
          <span>${(task.platforms || []).join(" / ") || "未选平台"} · ${task.contentType || "未选形式"}</span>
          <span>${task.designer || "赵琳"}</span>
          <span>${task.requestedAt || "待定"}</span>
          <span>${task.dueDate || "待定"}</span>
          <span>${designDuration(task)}</span>
          <span><i class="status ${task.delayed ? "risk" : ""}">${task.delayed ? "延期" : task.status}</i></span>
          <span>${assetSummary(task.assetUrl)}</span>
        </${tag}>
      `;
      }).join("") : `<div class="empty-state">还没有设计排期。运营在主题里选择协助设计师后会自动生成，也可以手动添加。</div>`}
    </div>
  `;
}

function renderPublicDocs() {
  const mount = $("#publicDocs");
  if (!mount) return;
  const rows = (data.publicDocs || []).slice().sort((a, b) => (b.uploadedAt || "").localeCompare(a.uploadedAt || ""));
  mount.innerHTML = `
    <div class="design-schedule-head">
      <div>
        <strong>公共文档库</strong>
        <span>${rows.length} 个公共资料</span>
      </div>
      ${canUploadPublicDocs() ? `
        <div class="doc-actions">
          <button class="ghost-button" data-upload-public-doc="1">上传文件</button>
          <button class="primary-button" data-new-public-doc="1">添加链接</button>
        </div>
      ` : ""}
    </div>
    <div class="doc-grid">
      ${rows.length ? rows.map((doc) => `
        <article class="doc-card">
          <div>
            <strong>${escapeHtml(doc.name || "未命名文档")}</strong>
            <span>${escapeHtml(doc.category || "公共资料")} · ${formatFileSize(doc.size)} · ${escapeHtml(doc.uploader || "未知")}</span>
          </div>
          <p>${escapeHtml(doc.note || "暂无备注")}</p>
          <small>${escapeHtml(doc.uploadedAt || "未记录时间")}</small>
          <div class="doc-card-actions">
            ${doc.url ? `<a class="ghost-button" href="${escapeAttr(doc.url)}" target="_blank" rel="noopener">打开</a>` : ""}
            ${canDeletePublicDoc(doc) ? `<button class="ghost-button danger" data-delete-public-doc="${doc.id}">删除</button>` : ""}
          </div>
        </article>
      `).join("") : `<div class="empty-state">还没有公共文档。可以上传小文件，或添加云盘/在线文档链接。</div>`}
    </div>
  `;
}

function renderApiConnections() {
  const mount = $("#apiConnections");
  if (!mount) return;
  if (!canManageSystem()) {
    mount.innerHTML = `<div class="empty-state">当前账号不能管理 API 接入。</div>`;
    return;
  }
  const rows = data.apiConnections || [];
  mount.innerHTML = `
    <div class="api-grid">
      ${rows.map((item) => `
        <button class="api-card" data-edit-api="${item.id}">
          <div>
            <strong>${item.name}</strong>
            <span class="status ${item.status === "已接入" ? "go" : item.status === "测试中" ? "progress" : ""}">${item.status}</span>
          </div>
          <p>${item.accountId || "未填写账号 / 主页 ID"}</p>
          <small>${item.syncMode || "手动同步"} · ${item.lastSync || "未同步"} · ${item.owner || "未分配负责人"}</small>
        </button>
      `).join("")}
    </div>
  `;
}

function renderSystemEditor() {
  if (!canManageSystem()) {
    $("#systemEditor").innerHTML = `<div class="empty-state">当前账号不能管理系统设置和团队账号。</div>`;
    return;
  }
  $("#systemEditor").innerHTML = `
    <div class="system-edit-grid">
      <button class="ghost-button" data-new-topic="1">新增帖子主题</button>
      <button class="ghost-button" data-new-okr="1">新增月度 OKR</button>
      <button class="ghost-button" data-new-owner="1">新增成员</button>
      <button class="ghost-button" data-new-account="1">新增账号</button>
      <button class="ghost-button" data-new-series="1">新增系列</button>
      <button class="ghost-button" data-new-bundle="1">新增平台组合</button>
      <button class="ghost-button" data-export-data="1">导出全部数据</button>
      <button class="ghost-button" data-import-data="1">导入/替换数据</button>
      <button class="ghost-button" data-reset-data="1">恢复默认数据</button>
    </div>
    <div class="system-edit-list">
      <section><h4>系列</h4>${data.series.map((item) => `<button data-edit-series="${item.id}">${item.code} · ${item.name}</button>`).join("")}</section>
      <section><h4>平台组合</h4>${data.platformBundles.map((item) => `<button data-edit-bundle="${item.id}">${item.name}</button>`).join("")}</section>
      <section><h4>成员</h4>${data.owners.map((item) => {
        const account = data.accounts.find((accountItem) => accountItem.owner === item.name);
        const role = account ? (ROLE_LABELS[account.role] ?? account.role) : "未开通账号";
        const status = account ? account.status : "未开通账号";
        return `<button data-edit-owner="${item.name}">${item.name} · ${item.title} · ${role} · ${status}</button>`;
      }).join("")}</section>
      <section class="wide-list"><h4>账号与角色</h4>${data.accounts.map((item) => `<button data-edit-account="${item.id}">${item.username} · ${ROLE_LABELS[item.role] ?? item.role} · ${item.owner || "未绑定成员"} · ${item.status}</button>`).join("")}</section>
    </div>
  `;
}

function openTopicEditor(id = "", defaultSeriesId = "") {
  if (!currentPermissions().canCreateTopic) {
    alert(roleLockedMessage());
    return;
  }
  const initialSeriesId = defaultSeriesId || (activeSeries !== "all" ? activeSeries : "") || data.series[0]?.id || "";
  const item = data.topics.find((topicItem) => topicItem.id === id) ?? topic("", "", initialSeriesId, currentAccount?.owner ?? data.owners[0]?.name ?? "", activeMonth, "脚本待定", "", [], [], "", "", "", "");
  if (item.id && !canEditTopic(item)) {
    alert(roleLockedMessage());
    return;
  }
  const ownerOptions = data.owners
    .filter((owner) => currentPermissions().topicScope === "all" || owner.name === currentAccount?.owner)
    .map((owner) => [owner.name, owner.name]);
  openEditor({
    scope: "帖子主题",
    title: item.id ? `编辑：${item.title}` : "新增帖子主题",
    hint: "帖子主题、负责人、状态、脚本、时间、链接和数据都可以修改。",
    fields: [
      textField("title", "主题标题", item.title),
      textField("subtitle", "主题说明", item.subtitle),
      selectField("seriesId", "所属系列", item.seriesId, data.series.map((seriesItem) => [seriesItem.id, seriesItem.name])),
      selectField("owner", "负责人", item.owner, ownerOptions),
      multiDropdownField("platforms", "发布平台", topicPlatforms(item), PUBLISH_PLATFORMS),
      selectField("contentType", "内容形式", item.contentType || "视频", CONTENT_TYPES.map((value) => [value, value])),
      selectField("designer", "协助设计师", item.designer || "", [["", "不需要设计协助"], ...DESIGNERS.map((designer) => [designer.name, designer.name])]),
      monthField("month", "OKR 月份", item.month || activeMonth),
      selectField("status", "状态", item.status, ["待审核", "剪辑中", "可发布", "脚本待定", "拍摄中", "待分镜"].map((value) => [value, value])),
      textField("okrKey", "关联 KR", item.okrKey),
      textField("bundles", "平台组合 ID，用逗号分隔", item.bundles.join(",")),
      selectField("referenceType", "参考素材类型", item.referenceType || "图片", ["图片", "视频", "图片+视频"].map((value) => [value, value])),
      textareaField("references", "参考图片/视频链接，每行一个", item.references.join("\n")),
      textareaField("script", "脚本结构", item.script),
      textField("shoot", "预计拍摄时间", item.shoot),
      textField("publish", "预计发布时间", item.publish),
      textField("postUrl", "帖子链接", item.postUrl || ""),
      ...(canManageSystem() ? [
        textField("publishedAt", "实际上传日期", item.publishedAt || ""),
        selectField("publishTag", "发布标签", item.publishTag || "未发布", PUBLISH_TAGS.map((value) => [value, value])),
      ] : []),
      numberField("views", "播放/展示", item.views || 0),
      numberField("completion", "完播率 %", item.completion || 0),
      numberField("engagement", "互动率 %", item.engagement || 0),
      numberField("followers", "转粉", item.followers || 0),
    ],
    deleteLabel: item.id ? "删除帖子主题" : "",
    onDelete: item.id ? () => {
      data.topics = data.topics.filter((topicItem) => topicItem.id !== item.id);
      data.designTasks = (data.designTasks || []).filter((task) => task.topicId !== item.id);
      saveAndRefresh();
    } : null,
    onSave(values) {
      const next = {
        ...item,
        ...values,
        id: item.id || idFrom(values.title),
        platforms: arrayValue(values.platforms).filter(Boolean),
        bundles: values.bundles.split(",").map((value) => value.trim()).filter(Boolean),
        references: values.references.split("\n").map((value) => value.trim()).filter(Boolean),
      };
      if (!next.postUrl) {
        next.publishedAt = "";
        next.publishTag = "未发布";
      } else {
        const linkChanged = next.postUrl !== (item.postUrl || "");
        if (linkChanged || !next.publishedAt) next.publishedAt = canManageSystem() && values.publishedAt ? values.publishedAt : todayString();
        if (canManageSystem() && PUBLISH_TAGS.includes(values.publishTag)) next.publishTag = values.publishTag;
        else next.publishTag = publishTagForTopic(next, next.publishedAt);
      }
      const index = data.topics.findIndex((topicItem) => topicItem.id === item.id);
      if (index >= 0) data.topics[index] = next;
      else data.topics.push(next);
      syncDesignTaskForTopic(next);
      activeMonth = next.month || activeMonth;
      saveAndRefresh();
    },
  });
}

function openSeriesEditor(id = "") {
  if (!canManageSystem()) {
    alert(roleLockedMessage());
    return;
  }
  const item = getSeries(id) ?? { id: "", code: "", name: "", position: "", audience: "", main: "", cycle: "每周 1 个主题，连续 12 周", conclusion: "", color: "#2f64b7", bundles: [] };
  openEditor({
    scope: "系统配置",
    title: item.id ? `编辑系列：${item.name}` : "新增系列",
    hint: "这里修改的是系统里的系列结构，会影响总览、日历和主题库。",
    fields: [
      textField("id", "系列 ID", item.id),
      textField("code", "系列编号", item.code),
      textField("name", "系列名称", item.name),
      textField("position", "定位", item.position),
      textField("audience", "受众", item.audience),
      multiDropdownField("months", "适用月份", item.months || SERIES_MONTH_OPTIONS, SERIES_MONTH_OPTIONS.map((month) => [month, shortMonthLabel(month)])),
      multiDropdownField("mainPlatforms", "主要平台", parsePlatformList(item.main), PUBLISH_PLATFORMS),
      textField("cycle", "周期", item.cycle),
      textField("color", "颜色", item.color),
      textField("bundles", "平台组合 ID，用逗号分隔", item.bundles.join(",")),
      textareaField("conclusion", "结论", item.conclusion || ""),
    ],
    deleteLabel: item.id ? "删除系列和关联主题" : "",
    deleteConfirm: item.id ? `确定删除「${item.name}」系列？该系列下的主题和关联设计排期也会一起删除。` : "",
    onDelete: item.id ? () => {
      if (data.series.length <= 1) {
        alert("至少保留一个系列。");
        return false;
      }
      const removedTopicIds = data.topics.filter((topicItem) => topicItem.seriesId === item.id).map((topicItem) => topicItem.id);
      data.series = data.series.filter((seriesItem) => seriesItem.id !== item.id);
      data.topics = data.topics.filter((topicItem) => topicItem.seriesId !== item.id);
      data.designTasks = (data.designTasks || []).filter((task) => !removedTopicIds.includes(task.topicId));
      if (activeSeries === item.id) activeSeries = "all";
      saveAndRefresh();
    } : null,
    onSave(values) {
      const next = {
        ...item,
        ...values,
        id: values.id || idFrom(values.name),
        months: arrayValue(values.months).filter(Boolean),
        main: arrayValue(values.mainPlatforms).filter(Boolean).join(" + "),
        bundles: values.bundles.split(",").map((value) => value.trim()).filter(Boolean),
      };
      delete next.mainPlatforms;
      if (!next.months.length) next.months = SERIES_MONTH_OPTIONS;
      const index = data.series.findIndex((seriesItem) => seriesItem.id === item.id);
      if (index >= 0) {
        const oldId = data.series[index].id;
        data.series[index] = next;
        if (oldId !== next.id) data.topics.forEach((topicItem) => {
          if (topicItem.seriesId === oldId) topicItem.seriesId = next.id;
        });
      } else {
        data.series.push(next);
      }
      saveAndRefresh();
    },
  });
}

function openDesignTaskEditor(id = "") {
  const exists = (data.designTasks || []).find((task) => task.id === id);
  if (!canManageDesignTask(exists)) {
    alert(roleLockedMessage());
    return;
  }
  const item = exists ?? {
    id: "",
    source: "manual",
    topicId: "",
    title: "",
    requester: currentAccount?.owner || FALLBACK_OWNER,
    designer: currentAccount?.role === "designer" ? currentAccount.owner : DESIGNERS[0].name,
    contentType: "图文",
    platforms: [],
    requestedAt: todayString(),
    dueDate: "",
    status: "待设计",
    delayed: false,
    completedAt: "",
    assetUrl: "",
    note: "",
  };
  openEditor({
    scope: "设计排期",
    title: item.id ? `编辑设计需求：${item.title}` : "新增设计需求",
    hint: "手动需求会进入赵琳排期表；主题联动需求会继续跟随主题标题、平台、负责人和发布时间。",
    fields: [
      textField("title", "设计需求", item.title),
      selectField("designer", "设计师", item.designer || DESIGNERS[0].name, DESIGNERS.map((designer) => [designer.name, designer.name])),
      selectField("requester", "需求负责人", item.requester || currentAccount?.owner || FALLBACK_OWNER, ACCOUNT_PEOPLE.map((owner) => [owner.name, owner.name])),
      multiDropdownField("platforms", "发布平台", item.platforms || [], PUBLISH_PLATFORMS),
      selectField("contentType", "内容形式", item.contentType || "图文", CONTENT_TYPES.map((value) => [value, value])),
      textField("requestedAt", "需求提出时间", item.requestedAt || todayString()),
      textField("dueDate", "设计截止时间", item.dueDate || ""),
      selectField("status", "设计状态", item.status || "待设计", ["待设计", "设计中", "待确认", "已完成"].map((value) => [value, value])),
      textField("completedAt", "完成时间（已完成时填写）", item.completedAt || ""),
      selectField("delayed", "是否延期", item.delayed ? "true" : "false", [["false", "未延期"], ["true", "已延期"]]),
      textareaField("assetUrl", "成品文件/链接，每行一个，支持多图", item.assetUrl || ""),
      `<label class="wide"><span>上传多图</span><input id="designAssetFiles" type="file" accept="image/*" multiple /></label>`,
      textareaField("note", "备注", item.note || ""),
    ],
    deleteLabel: item.id ? "删除设计需求" : "",
    onDelete: item.id ? () => {
      data.designTasks = (data.designTasks || []).filter((task) => task.id !== item.id);
      saveAndRefresh();
    } : null,
    onSave(values) {
      const next = {
        ...item,
        ...values,
        id: item.id || `design-manual-${Date.now()}`,
        source: item.source || "manual",
        requester: canManageSystem() ? values.requester : currentAccount?.owner || values.requester,
        designer: canManageSystem() ? values.designer : currentAccount?.owner || values.designer,
        requestedAt: values.requestedAt || item.requestedAt || todayString(),
        completedAt: values.status === "已完成" ? (values.completedAt || item.completedAt || todayString()) : "",
        platforms: arrayValue(values.platforms).filter(Boolean),
        delayed: values.delayed === "true",
      };
      const index = (data.designTasks || []).findIndex((task) => task.id === item.id);
      if (index >= 0) data.designTasks[index] = next;
      else data.designTasks.push(next);
      saveAndRefresh();
    },
    onMount() {
      $("#designAssetFiles")?.addEventListener("change", handleDesignAssetFiles);
    },
  });
}

function openPublicDocEditor() {
  if (!canUploadPublicDocs()) {
    alert(roleLockedMessage());
    return;
  }
  openEditor({
    scope: "公共文档",
    title: "添加公共文档链接",
    hint: "适合保存云盘文件夹、在线文档、翻译稿、脚本模板、设计规范和复盘资料链接。",
    fields: [
      textField("name", "文档名称", ""),
      selectField("category", "资料类型", "云盘链接", ["云盘链接", "脚本模板", "翻译文件", "设计规范", "复盘资料", "其他"].map((value) => [value, value])),
      textField("url", "文档/云盘链接", ""),
      textareaField("note", "备注", ""),
    ],
    onSave(values) {
      if (!values.name.trim() || !values.url.trim()) {
        alert("请填写文档名称和链接。");
        return false;
      }
      data.publicDocs.push({
        id: `doc-${Date.now()}`,
        name: values.name.trim(),
        category: values.category,
        url: values.url.trim(),
        size: 0,
        uploader: currentAccount?.owner || currentAccount?.username || "未知",
        uploadedAt: new Date().toISOString().slice(0, 16).replace("T", " "),
        note: values.note.trim(),
      });
      saveAndRefresh();
    },
  });
}

function uploadPublicDocFile(file) {
  if (!file || !canUploadPublicDocs()) return;
  const maxInlineSize = 1.5 * 1024 * 1024;
  if (file.size > maxInlineSize) {
    alert("这个文件较大。当前静态站点更适合保存云盘链接，请先上传到云盘，再用“添加链接”登记。");
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    data.publicDocs.push({
      id: `doc-${Date.now()}`,
      name: file.name,
      category: "上传文件",
      url: String(reader.result || ""),
      size: file.size,
      uploader: currentAccount?.owner || currentAccount?.username || "未知",
      uploadedAt: new Date().toISOString().slice(0, 16).replace("T", " "),
      note: "浏览器本地保存的小文件",
    });
    saveAndRefresh();
  };
  reader.readAsDataURL(file);
}

function handleDesignAssetFiles(event) {
  const files = Array.from(event.target.files || []);
  if (!files.length) return;
  const totalSize = files.reduce((sum, file) => sum + file.size, 0);
  if (totalSize > 2 * 1024 * 1024) {
    alert("多图总大小超过 2MB。当前静态站点更适合保存云盘链接，请先上传到云盘，再把链接粘贴到成品文件/链接里。");
    event.target.value = "";
    return;
  }
  Promise.all(files.map(readFileAsDataUrl)).then((urls) => {
    const textarea = document.querySelector('[name="assetUrl"]');
    const existing = textarea.value.trim();
    textarea.value = [existing, ...urls].filter(Boolean).join("\n");
    event.target.value = "";
  });
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function assetSummary(assetUrl = "") {
  const count = String(assetUrl || "").split(/\n+/).map((item) => item.trim()).filter(Boolean).length;
  if (!count) return "未上传";
  return count === 1 ? "1 个文件" : `${count} 个文件`;
}

function todayString() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${now.getFullYear()}-${month}-${day}`;
}

function designDuration(task) {
  if (!task.requestedAt) return "待定";
  const start = new Date(`${task.requestedAt}T00:00:00`);
  const endText = task.status === "已完成" && task.completedAt ? task.completedAt : todayString();
  const end = new Date(`${endText}T00:00:00`);
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) return "待定";
  const days = Math.max(0, Math.ceil((end - start) / 86400000));
  return task.status === "已完成" ? `${days} 天完成` : `已 ${days} 天`;
}

function openApiConnectionEditor(id = "") {
  if (!canManageSystem()) {
    alert(roleLockedMessage());
    return;
  }
  const item = (data.apiConnections || []).find((connection) => connection.id === id);
  if (!item) return;
  openEditor({
    scope: "平台 API",
    title: `配置：${item.name}`,
    hint: "这里先保存接入信息和同步责任人。真正的密钥建议放在后端环境变量，不要直接公开写进前端页面。",
    fields: [
      selectField("status", "接入状态", item.status || "未接入", ["未接入", "申请中", "测试中", "已接入", "暂停"].map((value) => [value, value])),
      selectField("owner", "负责人", item.owner || FALLBACK_OWNER, data.owners.map((owner) => [owner.name, owner.name])),
      textField("accountId", "账号 / 主页 / App ID", item.accountId || ""),
      selectField("syncMode", "同步方式", item.syncMode || "手动同步", ["手动同步", "每日自动同步", "每周自动同步", "仅保存配置"].map((value) => [value, value])),
      textField("lastSync", "最近同步时间", item.lastSync || ""),
      textareaField("credentialNote", "凭证保存位置", item.credentialNote || ""),
      textareaField("note", "接入备注", item.note || ""),
    ],
    onSave(values) {
      Object.assign(item, values);
      saveAndRefresh();
    },
  });
}

function openBundleEditor(id = "") {
  if (!canManageSystem()) {
    alert(roleLockedMessage());
    return;
  }
  const item = getBundle(id) ?? { id: "", name: "", platforms: [], format: "", usage: "" };
  openEditor({
    scope: "系统配置",
    title: item.id ? `编辑平台组合：${item.name}` : "新增平台组合",
    hint: "这里决定一个素材适合分发到哪些平台。",
    fields: [
      textField("id", "组合 ID", item.id),
      textField("name", "组合名称", item.name),
      textField("platforms", "平台，用逗号分隔", item.platforms.join(",")),
      textField("format", "格式要求", item.format),
      textareaField("usage", "使用说明", item.usage),
    ],
    deleteLabel: item.id ? "删除平台组合" : "",
    onDelete: item.id ? () => {
      if (data.platformBundles.length <= 1) {
        alert("至少保留一个平台组合。");
        return;
      }
      data.platformBundles = data.platformBundles.filter((bundle) => bundle.id !== item.id);
      data.series.forEach((seriesItem) => {
        seriesItem.bundles = seriesItem.bundles.filter((bundleId) => bundleId !== item.id);
      });
      data.topics.forEach((topicItem) => {
        topicItem.bundles = topicItem.bundles.filter((bundleId) => bundleId !== item.id);
      });
      saveAndRefresh();
    } : null,
    onSave(values) {
      const next = { ...item, ...values, id: values.id || idFrom(values.name), platforms: values.platforms.split(",").map((value) => value.trim()).filter(Boolean) };
      const index = data.platformBundles.findIndex((bundle) => bundle.id === item.id);
      if (index >= 0) {
        const oldId = data.platformBundles[index].id;
        data.platformBundles[index] = next;
        if (oldId !== next.id) {
          data.series.forEach((seriesItem) => {
            seriesItem.bundles = seriesItem.bundles.map((bundleId) => bundleId === oldId ? next.id : bundleId);
          });
          data.topics.forEach((topicItem) => {
            topicItem.bundles = topicItem.bundles.map((bundleId) => bundleId === oldId ? next.id : bundleId);
          });
        }
      } else {
        data.platformBundles.push(next);
      }
      saveAndRefresh();
    },
  });
}

function openOwnerEditor(name) {
  if (!canManageSystem()) {
    alert(roleLockedMessage());
    return;
  }
  const item = getOwner(name) ?? { name: "", title: "" };
  const account = data.accounts.find((accountItem) => accountItem.owner === item.name) ?? { id: "", username: "", owner: item.name, role: "editor", passwordHash: "", status: "启用" };
  openEditor({
    scope: "成员配置",
    title: item.name ? `编辑成员：${item.name}` : "新增成员",
    hint: "新增成员时同步设置登录账号、初始密码和权限角色；编辑时密码留空则保持不变。",
    fields: [
      textField("name", "成员姓名", item.name),
      textField("title", "岗位/备注", item.title),
      textField("username", "登录账号", account.username),
      passwordField("password", item.name && account.passwordHash ? "新密码（留空不修改）" : "初始密码", ""),
      selectField("role", "权限角色", account.role, Object.entries(ROLE_LABELS)),
      selectField("status", "账号状态", account.status, ["启用", "停用"].map((value) => [value, value])),
    ],
    deleteLabel: item.name ? "删除成员" : "",
    onDelete: item.name ? () => {
      if (data.owners.length <= 1) {
        alert("至少保留一个成员。");
        return;
      }
      const fallback = data.owners.find((owner) => owner.name !== item.name)?.name ?? "";
      data.owners = data.owners.filter((owner) => owner.name !== item.name);
      data.topics.forEach((topicItem) => {
        if (topicItem.owner === item.name) topicItem.owner = fallback;
      });
      data.okrs = data.okrs.filter((okr) => okr.owner !== item.name);
      data.accounts = data.accounts.filter((accountItem) => accountItem.owner !== item.name);
      saveAndRefresh();
    } : null,
    async onSave(values) {
      if (!values.name.trim()) {
        alert("请填写成员姓名。");
        return false;
      }
      if (!values.username.trim()) {
        alert("请填写登录账号。");
        return false;
      }
      if (!account.passwordHash && !values.password) {
        alert("请设置初始密码。");
        return false;
      }
      const duplicate = data.accounts.some((accountItem) => accountItem.username === values.username.trim() && accountItem.id !== account.id);
      if (duplicate) {
        alert("这个登录账号已经存在。");
        return false;
      }
      const ownerValues = { name: values.name.trim(), title: values.title.trim() };
      if (!item.name) {
        data.owners.push(ownerValues);
      } else {
        const oldName = item.name;
        Object.assign(item, ownerValues);
        data.topics.forEach((topicItem) => {
          if (topicItem.owner === oldName) topicItem.owner = ownerValues.name;
        });
        data.okrs.forEach((okr) => {
          if (okr.owner === oldName) okr.owner = ownerValues.name;
        });
        data.accounts.forEach((accountItem) => {
          if (accountItem.owner === oldName) accountItem.owner = ownerValues.name;
        });
      }
      const nextAccount = {
        ...account,
        id: account.id || idFrom(`acct-${values.username}-${Date.now()}`),
        username: values.username.trim(),
        owner: ownerValues.name,
        role: values.role,
        status: values.status,
        passwordHash: values.password ? await sha256(values.password) : account.passwordHash,
      };
      const accountIndex = data.accounts.findIndex((accountItem) => accountItem.id === account.id);
      if (accountIndex >= 0) data.accounts[accountIndex] = nextAccount;
      else data.accounts.push(nextAccount);
      if (currentAccount?.id === nextAccount.id) currentAccount = nextAccount;
      saveAndRefresh();
    },
  });
}

async function openAccountEditor(id) {
  if (!canManageSystem()) {
    alert(roleLockedMessage());
    return;
  }
  const item = getAccount(id) ?? { id: "", username: "", owner: data.owners[0]?.name ?? "", role: "editor", passwordHash: "", status: "启用" };
  openEditor({
    scope: "账号与角色",
    title: item.id ? `编辑账号：${item.username}` : "新增团队账号",
    hint: "账号可绑定到团队成员，并分配管理员、运营主管、内容编辑或只读成员角色。新账号必须设置密码，编辑时密码留空则保持不变。",
    fields: [
      textField("username", "登录账号", item.username),
      selectField("owner", "绑定成员", item.owner, ACCOUNT_PEOPLE.map((owner) => [owner.name, `${owner.name} · ${owner.title}`])),
      selectField("role", "角色", item.role, Object.entries(ROLE_LABELS)),
      selectField("status", "状态", item.status, ["启用", "停用"].map((value) => [value, value])),
      passwordField("password", item.id ? "新密码（留空不修改）" : "初始密码", ""),
    ],
    deleteLabel: item.id ? "删除账号" : "",
    onDelete: item.id ? () => {
      if (data.accounts.length <= 1) {
        alert("至少保留一个账号。");
        return;
      }
      data.accounts = data.accounts.filter((account) => account.id !== item.id);
      if (currentAccount?.id === item.id) {
        sessionStorage.removeItem(SESSION_KEY);
        showLogin();
      }
      saveAndRefresh();
    } : null,
    async onSave(values) {
      if (!values.username.trim()) {
        alert("请填写登录账号。");
        return false;
      }
      if (!item.id && !values.password) {
        alert("新账号需要设置初始密码。");
        return false;
      }
      const duplicate = data.accounts.some((account) => account.username === values.username.trim() && account.id !== item.id);
      if (duplicate) {
        alert("这个登录账号已经存在。");
        return false;
      }
      const next = {
        ...item,
        id: item.id || idFrom(`acct-${values.username}-${Date.now()}`),
        username: values.username.trim(),
        owner: values.owner,
        role: values.role,
        status: values.status,
        passwordHash: values.password ? await sha256(values.password) : item.passwordHash,
      };
      const index = data.accounts.findIndex((account) => account.id === item.id);
      if (index >= 0) data.accounts[index] = next;
      else data.accounts.push(next);
      if (currentAccount?.id === next.id) currentAccount = next;
      saveAndRefresh();
    },
  });
}

function openOkrEditor(id) {
  if (!canManageOkr()) {
    alert(roleLockedMessage());
    return;
  }
  const exists = data.okrs.some((okr) => okr.id === id);
  const item = data.okrs.find((okr) => okr.id === id) ?? monthlyOkr(activeMonth, data.owners[0]?.name ?? "", "", [["", 0, 0, ""]]);
  openEditor({
    scope: "月度 OKR",
    title: exists ? `编辑：${item.owner} ${monthLabel(item.month)}` : "新增月度 OKR",
    hint: "按 Objective 和 Key Result 的层级填写：先写目标，再添加可量化的关键结果。",
    fields: [
      monthField("month", "月份", item.month),
      selectField("owner", "成员", item.owner, data.owners.map((owner) => [owner.name, owner.name])),
      okrStructureField(item),
    ],
    onMount() {
      const builder = $("#okrBuilder");
      $("#addObjectiveButton").onclick = () => {
        builder.insertAdjacentHTML("beforeend", okrObjectiveBlock({ title: "", keyResults: [{ name: "" }] }, builder.children.length));
        reindexOkrEditor();
      };
      builder.onclick = (event) => {
        const addKrButton = event.target.closest("[data-add-kr]");
        if (addKrButton) {
          const block = addKrButton.closest(".okr-objective-block");
          const list = block.querySelector(".okr-kr-list");
          list.insertAdjacentHTML("beforeend", okrKeyResultRow({ name: "" }, list.children.length));
          reindexOkrEditor();
          return;
        }
        const removeButton = event.target.closest("[data-remove-kr]");
        if (removeButton) {
          const list = removeButton.closest(".okr-kr-list");
          if (list.children.length <= 1) return;
          removeButton.closest(".okr-kr-row").remove();
          reindexOkrEditor();
          return;
        }
        const removeObjectiveButton = event.target.closest("[data-remove-objective]");
        if (removeObjectiveButton) {
          if (builder.children.length <= 1) return;
          removeObjectiveButton.closest(".okr-objective-block").remove();
          reindexOkrEditor();
        }
      };
    },
    deleteLabel: exists ? "删除月度 OKR" : "",
    onDelete: exists ? () => {
      data.okrs = data.okrs.filter((okr) => okr.id !== item.id);
      saveAndRefresh();
    } : null,
    onSave(values) {
      const objectives = collectOkrObjectivesFromEditor();
      if (!objectives.length) {
        alert("请至少填写一个 Objective。");
        return false;
      }
      if (objectives.some((objective) => !objective.keyResults.length)) {
        alert("每个 Objective 至少需要一个 Key Result。");
        return false;
      }
      const keyResults = objectives.flatMap((objective) => objective.keyResults);
      const next = {
        ...item,
        month: values.month,
        owner: values.owner,
        objective: objectives[0].title,
        objectives,
        id: item.id || idFrom(`${values.month}-${values.owner}-${Date.now()}`),
        keyResults,
      };
      const index = data.okrs.findIndex((okr) => okr.id === item.id);
      if (index >= 0) data.okrs[index] = next;
      else data.okrs.push(next);
      activeMonth = next.month;
      saveAndRefresh();
    },
  });
}

function openDataImportEditor() {
  openEditor({
    scope: "数据管理",
    title: "导入/替换全部数据",
    hint: "粘贴从系统导出的 JSON，会替换当前本机保存的数据。建议先导出备份。",
    fields: [textareaField("json", "系统数据 JSON", JSON.stringify(data, null, 2))],
    onSave(values) {
      try {
        const next = JSON.parse(values.json);
        validateImportedData(next);
        data = next;
        activeMonth = data.activeMonth || defaultData.activeMonth;
        activeSeries = "all";
        saveAndRefresh();
      } catch (error) {
        alert(`导入失败：${error.message}`);
        return false;
      }
      return true;
    },
  });
}

function validateImportedData(next) {
  ["owners", "accounts", "platformBundles", "series", "topics", "designTasks", "publicDocs", "apiConnections", "okrs"].forEach((key) => {
    if (!Array.isArray(next[key])) throw new Error(`缺少 ${key} 列表`);
  });
  if (!next.owners.length) throw new Error("至少需要一个成员");
  if (!next.accounts.length) throw new Error("至少需要一个账号");
  if (!next.series.length) throw new Error("至少需要一个系列");
  if (!next.platformBundles.length) throw new Error("至少需要一个平台组合");
}

function openEditor(config) {
  $("#editScope").textContent = config.scope;
  $("#editTitle").textContent = config.title;
  $("#editHint").textContent = config.hint;
  const deleteButton = config.onDelete ? `<button class="danger-button" type="button" id="deleteEditButton">${config.deleteLabel || "删除"}</button>` : "";
  $("#editForm").innerHTML = `
    <div class="edit-grid">${config.fields.join("")}</div>
    <div class="edit-actions">
      ${deleteButton}
      <span class="edit-spacer"></span>
      <button class="ghost-button" type="button" id="cancelEditButton">取消</button>
      <button class="primary-button" type="submit">保存修改</button>
    </div>
  `;
  $("#editForm").onsubmit = async (event) => {
    event.preventDefault();
    const values = formValues(event.currentTarget);
    const shouldClose = await config.onSave(values);
    if (shouldClose !== false) closeEditor();
  };
  if (config.onDelete) {
    $("#deleteEditButton").onclick = () => {
      if (!confirm(config.deleteConfirm || "确定删除？删除后当前浏览器里的这项数据会被移除。")) return;
      const shouldClose = config.onDelete();
      if (shouldClose !== false) closeEditor();
    };
  }
  $$("#editForm [data-multi-select]").forEach(updateMultiSelectSummary);
  $("#editForm").onchange = (event) => {
    const fieldset = event.target.closest("[data-multi-select]");
    if (fieldset) updateMultiSelectSummary(fieldset);
  };
  $("#cancelEditButton").onclick = closeEditor;
  $("#editModal").hidden = false;
  config.onMount?.();
}

function updateMultiSelectSummary(fieldset) {
  const labels = Array.from(fieldset.querySelectorAll("input:checked"))
    .map((input) => input.closest("label")?.querySelector("span")?.textContent?.trim())
    .filter(Boolean);
  const summary = fieldset.querySelector("summary");
  if (summary) summary.firstChild.textContent = labels.length ? labels.join(" / ") : "请选择";
}

function formValues(form) {
  const values = {};
  new FormData(form).forEach((value, key) => {
    if (Object.hasOwn(values, key)) {
      values[key] = Array.isArray(values[key]) ? values[key].concat(value) : [values[key], value];
    } else {
      values[key] = value;
    }
  });
  return values;
}

function arrayValue(value) {
  if (Array.isArray(value)) return value;
  if (value === undefined) return [];
  return [value];
}

function textField(name, label, value = "") {
  return `<label><span>${label}</span><input name="${name}" value="${escapeAttr(value)}" /></label>`;
}

function numberField(name, label, value = 0) {
  return `<label><span>${label}</span><input type="number" step="0.1" name="${name}" value="${escapeAttr(value)}" /></label>`;
}

function passwordField(name, label, value = "") {
  return `<label><span>${label}</span><input type="password" name="${name}" value="${escapeAttr(value)}" autocomplete="new-password" /></label>`;
}

function monthField(name, label, value = activeMonth) {
  return `<label><span>${label}</span><input type="month" name="${name}" value="${escapeAttr(value)}" /></label>`;
}

function textareaField(name, label, value = "") {
  return `<label class="wide"><span>${label}</span><textarea name="${name}">${escapeHtml(value)}</textarea></label>`;
}

function selectField(name, label, value, options) {
  return `<label><span>${label}</span><select name="${name}">${options.map(([optionValue, optionLabel]) => `<option value="${escapeAttr(optionValue)}" ${optionValue === value ? "selected" : ""}>${optionLabel}</option>`).join("")}</select></label>`;
}

function optionPair(option) {
  return Array.isArray(option) ? option : [option, option];
}

function multiDropdownField(name, label, selectedValues = [], options = []) {
  const selected = new Set(arrayValue(selectedValues));
  const pairs = options.map(optionPair);
  const selectedLabels = pairs.filter(([value]) => selected.has(value)).map(([, optionLabel]) => optionLabel);
  return `
    <fieldset class="multi-select" data-multi-select>
      <legend>${label}</legend>
      <details>
        <summary>${selectedLabels.length ? selectedLabels.join(" / ") : "请选择"}</summary>
        <div class="multi-select-menu">
          ${pairs.map(([optionValue, optionLabel]) => `
            <label>
              <input type="checkbox" name="${name}" value="${escapeAttr(optionValue)}" ${selected.has(optionValue) ? "checked" : ""} />
              <span>${optionLabel}</span>
            </label>
          `).join("")}
        </div>
      </details>
    </fieldset>
  `;
}

function checkboxGroupField(name, label, selectedValues = [], options = []) {
  const selected = new Set(arrayValue(selectedValues));
  return `
    <fieldset class="wide checkbox-group">
      <legend>${label}</legend>
      <div>
        ${options.map((option) => `<label><input type="checkbox" name="${name}" value="${escapeAttr(option)}" ${selected.has(option) ? "checked" : ""} /><span>${option}</span></label>`).join("")}
      </div>
    </fieldset>
  `;
}

function okrStructureField(item) {
  const objectives = okrObjectives(item).map((objective) => ({
    title: objective.title,
    keyResults: objective.keyResults.length ? objective.keyResults : [{ name: "" }],
  }));
  return `
    <section class="okr-builder wide">
      <div class="okr-builder-head">
        <strong>Objectives</strong>
        <button class="ghost-button" type="button" id="addObjectiveButton">＋ 添加 Objective</button>
      </div>
      <div class="okr-objective-builder" id="okrBuilder">
        ${objectives.map((objective, index) => okrObjectiveBlock(objective, index)).join("")}
      </div>
    </section>
  `;
}

function okrObjectiveBlock(objective, index) {
  const keyResults = objective.keyResults?.length ? objective.keyResults : [{ name: "" }];
  return `
    <div class="okr-objective-block">
      <div class="okr-objective-card">
        <span class="okr-index" data-objective-index>O${index + 1}</span>
        <label>
          <span>Objective</span>
          <textarea name="objectiveTitle" placeholder="添加 Objective：目标要与团队方向对齐，避免含糊描述">${escapeHtml(objective.title || "")}</textarea>
        </label>
        <button class="icon-button" type="button" data-remove-objective title="删除 Objective" aria-label="删除 Objective">×</button>
      </div>
      <div class="okr-kr-header">
        <strong>Key Results</strong>
        <button class="ghost-button" type="button" data-add-kr>＋ 添加 Key Result</button>
      </div>
      <div class="okr-kr-list">
        ${keyResults.map((kr, krIndex) => okrKeyResultRow(kr, krIndex)).join("")}
      </div>
    </div>
  `;
}

function okrKeyResultRow(kr, index) {
  const item = normalizeKr(kr);
  return `
    <div class="okr-kr-row">
      <span class="okr-index" data-kr-index>KR${index + 1}</span>
      <input name="krName" value="${escapeAttr(item.name || "")}" placeholder="填写可量化指标" />
      <input type="number" step="1" min="0" name="krTarget" value="${escapeAttr(Math.round(item.target || 0))}" placeholder="目标" />
      <input type="number" step="1" min="0" name="krActual" value="${escapeAttr(Math.round(item.actual || 0))}" placeholder="实际" />
      <input name="krUnit" value="${escapeAttr(item.unit || "")}" placeholder="单位" />
      <button class="icon-button" type="button" data-remove-kr title="删除 KR" aria-label="删除 KR">×</button>
    </div>
  `;
}

function reindexOkrEditor() {
  $$("#okrBuilder .okr-objective-block").forEach((block, objectiveIndex) => {
    block.querySelector("[data-objective-index]").textContent = `O${objectiveIndex + 1}`;
    block.querySelectorAll("[data-kr-index]").forEach((label, krIndex) => {
      label.textContent = `KR${krIndex + 1}`;
    });
  });
}

function collectOkrObjectivesFromEditor() {
  return $$("#okrBuilder .okr-objective-block").map((block, objectiveIndex) => {
    const title = block.querySelector('[name="objectiveTitle"]').value.trim();
    const keyResults = Array.from(block.querySelectorAll(".okr-kr-row")).map((row) => ({
      name: row.querySelector('[name="krName"]').value.trim(),
      target: Math.max(0, Math.round(Number(row.querySelector('[name="krTarget"]')?.value || 0))),
      actual: Math.max(0, Math.round(Number(row.querySelector('[name="krActual"]')?.value || 0))),
      unit: row.querySelector('[name="krUnit"]')?.value.trim() || "",
    })).filter((kr) => kr.name);
    return { id: `o-${objectiveIndex + 1}`, title, keyResults };
  }).filter((objective) => objective.title);
}

function formatFileSize(size = 0) {
  const value = Number(size) || 0;
  if (!value) return "链接";
  if (value < 1024) return `${value} B`;
  if (value < 1024 * 1024) return `${Math.round(value / 1024)} KB`;
  return `${(value / 1024 / 1024).toFixed(1)} MB`;
}

function escapeHtml(value) {
  return String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll('"', "&quot;");
}

function closeEditor() {
  $("#editModal").hidden = true;
}

function saveAndRefresh() {
  saveData();
  renderAll();
}

function downloadJson() {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `wonly-social-system-data-${activeMonth}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

function downloadSchedule() {
  const header = "月份,系列,主题,负责人,状态,KR,拍摄时间,发布时间,帖子链接\n";
  const csv = data.topics.map((item) => [item.month, getSeries(item.seriesId)?.name ?? "", item.title, item.owner, item.status, item.okrKey, item.shoot, item.publish, item.postUrl].map((cell) => `"${String(cell ?? "").replaceAll('"', '""')}"`).join(",")).join("\n");
  const blob = new Blob([header + csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "wonly-social-editable-schedule.csv";
  link.click();
  URL.revokeObjectURL(url);
}

function switchView(viewId) {
  if (!canAccessView(viewId)) viewId = firstAllowedView();
  $$(".nav-item").forEach((button) => button.classList.toggle("active", button.dataset.view === viewId));
  $$(".view").forEach((view) => view.classList.toggle("active", view.id === viewId));
  $("#homeBanner").hidden = viewId !== "overview";
  updatePrimaryAction(viewId);
}

function bindEvents() {
  $("#loginForm").addEventListener("submit", handleLogin);
  $("#logoutButton").addEventListener("click", () => {
    sessionStorage.removeItem(SESSION_KEY);
    currentAccount = null;
    showLogin();
  });
  $("#newTopicButton").addEventListener("click", () => {
    if ($("#newTopicButton").dataset.action === "new-okr") {
      if (!canManageOkr()) return alert(roleLockedMessage());
      openOkrEditor();
      return;
    }
    if (!currentPermissions().canCreateTopic) return alert(roleLockedMessage());
    openTopicEditor();
  });
  $$(".nav-item").forEach((button) => button.addEventListener("click", () => switchView(button.dataset.view)));
  $$(".segmented button[data-month]").forEach((button) => {
    button.addEventListener("click", () => {
      activeSeriesMonth = button.dataset.month === "all" ? "all" : `2026-0${button.dataset.month}`;
      renderSeriesMonthTabs();
      renderSeries();
    });
  });
  $("#seriesFilter").addEventListener("change", (event) => {
    activeSeries = event.target.value;
    renderFilters();
    renderCalendar();
  });
  $("#weekFilter").addEventListener("change", (event) => {
    activeCalendarWeek = event.target.value;
    renderCalendar();
  });
  $("#contentTopicFilter")?.addEventListener("change", (event) => {
    activeContentTopic = event.target.value;
    renderContentTable();
  });
  $("#contentOwnerFilter")?.addEventListener("change", (event) => {
    activeContentOwner = event.target.value;
    renderContentTable();
  });
  $("#contentPlatformFilter")?.addEventListener("change", (event) => {
    activeContentPlatform = event.target.value;
    renderContentTable();
  });
  $("#exportButton").addEventListener("click", () => {
    if (!canExport()) return alert(roleLockedMessage());
    downloadSchedule();
  });
  $("#simulateButton").addEventListener("click", () => {
    if (!canEditData()) return alert(roleLockedMessage());
    data.topics.filter((item) => item.month === activeMonth && canSeeTopic(item)).forEach((item) => {
      if (item.postUrl) item.views = Math.round((Number(item.views) || dataForTopic(item).views) * 1.08);
    });
    saveAndRefresh();
  });
  document.addEventListener("click", (event) => {
    const target = event.target.closest("[data-view-series],[data-edit-topic],[data-edit-series],[data-edit-design-task],[data-edit-api],[data-edit-bundle],[data-edit-owner],[data-edit-account],[data-edit-okr],[data-okr-month],[data-new-topic],[data-new-topic-for-series],[data-new-design-task],[data-new-public-doc],[data-upload-public-doc],[data-delete-public-doc],[data-new-okr],[data-new-owner],[data-new-account],[data-new-series],[data-new-bundle],[data-export-data],[data-import-data],[data-reset-data]");
    if (!target) return;
    if (target.dataset.viewSeries) openSeriesTopics(target.dataset.viewSeries);
    if (target.dataset.editTopic) openTopicEditor(target.dataset.editTopic);
    if (target.dataset.editSeries) openSeriesEditor(target.dataset.editSeries);
    if (target.dataset.editDesignTask) openDesignTaskEditor(target.dataset.editDesignTask);
    if (target.dataset.newPublicDoc) openPublicDocEditor();
    if (target.dataset.uploadPublicDoc) $("#publicDocFileInput")?.click();
    if (target.dataset.deletePublicDoc) {
      const item = (data.publicDocs || []).find((doc) => doc.id === target.dataset.deletePublicDoc);
      if (item && canDeletePublicDoc(item) && confirm(`删除公共文档「${item.name}」？`)) {
        data.publicDocs = (data.publicDocs || []).filter((doc) => doc.id !== item.id);
        saveAndRefresh();
      }
    }
    if (target.dataset.editApi) openApiConnectionEditor(target.dataset.editApi);
    if (target.dataset.editBundle) openBundleEditor(target.dataset.editBundle);
    if (target.dataset.editOwner) openOwnerEditor(target.dataset.editOwner);
    if (target.dataset.editAccount) openAccountEditor(target.dataset.editAccount);
    if (target.dataset.editOkr) openOkrEditor(target.dataset.editOkr);
    if (target.dataset.okrMonth) {
      activeMonth = target.dataset.okrMonth;
      saveAndRefresh();
    }
    if (target.dataset.newTopic) openTopicEditor();
    if (target.dataset.newTopicForSeries) openTopicEditor("", target.dataset.newTopicForSeries);
    if (target.dataset.newDesignTask) openDesignTaskEditor();
    if (target.dataset.newOkr) openOkrEditor();
    if (target.dataset.newOwner) openOwnerEditor();
    if (target.dataset.newAccount) openAccountEditor();
    if (target.dataset.newSeries) openSeriesEditor();
    if (target.dataset.newBundle) openBundleEditor();
    if (target.dataset.exportData) downloadJson();
    if (target.dataset.importData) openDataImportEditor();
    if (target.dataset.resetData && confirm("确定恢复默认数据？当前本机编辑会被清空。")) {
      localStorage.removeItem(DATA_KEY);
      data = loadData();
      activeMonth = data.activeMonth;
      renderAll();
    }
  });
  $("#publicDocFileInput")?.addEventListener("change", (event) => {
    const file = event.target.files?.[0];
    uploadPublicDocFile(file);
    event.target.value = "";
  });
  document.addEventListener("change", (event) => {
    if (event.target?.matches?.("[data-okr-actual]")) updateOkrActual(event.target);
  });
  document.addEventListener("keydown", (event) => {
    if ((event.key === "Enter" || event.key === " ") && event.target?.matches?.("[data-view-series]")) {
      event.preventDefault();
      openSeriesTopics(event.target.dataset.viewSeries);
    }
  });
  $("#closeEditButton").addEventListener("click", closeEditor);
  $("#editModal").addEventListener("click", (event) => {
    if (event.target.id === "editModal") closeEditor();
  });
  $("#closeDetailButton").addEventListener("click", () => {
    $("#detailModal").hidden = true;
  });
}

function init() {
  bindEvents();
  if (restoreSession()) showApp();
  else {
    renderAll();
    showLogin();
  }
}

init();
