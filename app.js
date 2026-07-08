const platformBundles = [
  {
    id: "shorts-core",
    name: "短视频通用包",
    platforms: ["YouTube Shorts", "TikTok", "Instagram Reels"],
    format: "9:16 竖屏，15-45s，英文字幕",
    usage: "同一条核心视频适配三端，统一 Hook 和 CTA，只微调封面与标题。",
  },
  {
    id: "visual-social",
    name: "视觉社交包",
    platforms: ["Instagram Grid", "Instagram Carousel", "Facebook"],
    format: "1:1 / 4:5 图片、短视频转发、本地化文案",
    usage: "适合生活方式、工厂美学、产品细节，把视频素材拆成图文故事。",
  },
  {
    id: "b2b-proof",
    name: "B2B 背书包",
    platforms: ["LinkedIn", "YouTube Long", "Facebook"],
    format: "长视频、文章、工程案例图文",
    usage: "适合工厂实力、技术参数、工程案例和品牌可信度内容。",
  },
  {
    id: "data-thread",
    name: "观点传播包",
    platforms: ["LinkedIn Post", "Facebook Quote Card"],
    format: "数据点、对比图、金句卡",
    usage: "把测试结果和对比数据拆成连续观点，适合复盘和传播。",
  },
];

const series = [
  {
    id: "s1",
    code: "S1",
    name: "只有王力有",
    position: "品牌实力展示",
    audience: "B2B + C端",
    main: "TikTok + LinkedIn",
    episodes: 8,
    output: 22,
    color: "#0f8f61",
    bundles: ["shorts-core", "b2b-proof", "data-thread"],
    topics: [
      {
        title: "Robot Door",
        subtitle: "机器人防盗门",
        owner: "Mia",
        status: "待审核",
        goal: "建立品牌实力基线",
        bundles: ["shorts-core", "b2b-proof"],
        references: ["机器人门开合特写", "工厂自动化产线 B-roll", "竞品普通门对比画面"],
        script: "痛点 Hook：传统门不够智能；主体：机器人门感应、开合、防护演示；CTA：Follow for Wonly-only security tech.",
        shoot: "7月第1周 · 周一上午",
        publish: "7月第1周 · 周三 TikTok/Reels/Shorts，周五 LinkedIn",
      },
      {
        title: "6-Meter Sensing",
        subtitle: "遥感识别",
        owner: "Leo",
        status: "剪辑中",
        goal: "验证 30s Hook",
        bundles: ["shorts-core"],
        references: ["6 米距离走近门锁", "传感器 UI 动效参考", "夜间归家场景"],
        script: "前 3 秒展示远距离感应开门；主体拆解识别距离和安全逻辑；结尾提问：Would your door recognize you first?",
        shoot: "7月第1周 · 周二下午",
        publish: "7月第1周 · 周五 TikTok/Reels/Shorts",
      },
      {
        title: "360 Minutes",
        subtitle: "超 C 级锁芯",
        owner: "Mia",
        status: "脚本待定",
        goal: "强化技术可信度",
        bundles: ["b2b-proof", "data-thread"],
        references: ["锁芯微距", "测试计时器", "标准证书/参数卡"],
        script: "用 360 分钟防破坏测试做核心证据，短视频出结果，LinkedIn 写技术解释。",
        shoot: "8月第1周 · 周一",
        publish: "8月第1周 · 周三短视频，周五 LinkedIn/Thread",
      },
    ],
  },
  {
    id: "s2",
    code: "S2",
    name: "Gossip Girl",
    position: "场景化生活方式",
    audience: "C端女性",
    main: "TikTok + Instagram",
    episodes: 10,
    output: 26,
    color: "#b64f78",
    bundles: ["shorts-core", "visual-social"],
    topics: [
      {
        title: "The Morning Escape",
        subtitle: "早高峰出门",
        owner: "Anna",
        status: "可发布",
        goal: "测试生活方式剧情",
        bundles: ["shorts-core", "visual-social"],
        references: ["女主拿咖啡出门", "包包/穿搭定格", "门锁自动识别镜头"],
        script: "G 角色旁白开场；主体展示不用掏钥匙的出门体验；结尾：Spotted: someone who never looks for keys.",
        shoot: "7月第2周 · 周一上午",
        publish: "7月第2周 · 周二 TikTok/Reels，周三 Grid，周五 Facebook",
      },
      {
        title: "The Hands-Free Hustle",
        subtitle: "双手满载回家",
        owner: "Anna",
        status: "脚本待定",
        goal: "强化女性场景",
        bundles: ["shorts-core", "visual-social"],
        references: ["购物袋/快递盒", "门前无手开门", "温暖室内灯光"],
        script: "前 2 秒制造手忙脚乱；主体让门锁自动完成识别；CTA：Would your door do this?",
        shoot: "7月第2周 · 周三下午",
        publish: "7月第2周 · 周五 TikTok/Reels/Shorts，周六 Carousel",
      },
      {
        title: "The Midnight Return",
        subtitle: "午夜安全归家",
        owner: "Anna",
        status: "待审核",
        goal: "测试夜间氛围转化",
        bundles: ["shorts-core"],
        references: ["夜间楼道", "低光人脸识别", "安全提示 UI"],
        script: "用悬念开场，强调夜间识别和安全感，最后用 G 角色金句收尾。",
        shoot: "8月第2周 · 周一晚",
        publish: "8月第2周 · 周三 TikTok/Reels/Shorts",
      },
    ],
  },
  {
    id: "s3",
    code: "S3",
    name: "超级工厂",
    position: "工厂实力背书",
    audience: "B2B + 经销商",
    main: "TikTok + Instagram",
    episodes: 10,
    output: 15,
    color: "#087b86",
    bundles: ["shorts-core", "visual-social", "b2b-proof"],
    topics: [
      {
        title: "The Scale",
        subtitle: "工厂规模展示",
        owner: "Chris",
        status: "拍摄中",
        goal: "工厂规模视觉冲击",
        bundles: ["shorts-core", "visual-social"],
        references: ["航拍厂区", "产线广角", "仓储和发货画面"],
        script: "前 3 秒航拍冲击；主体展示规模、产线、效率；CTA：Comment for factory tour.",
        shoot: "7月第3周 · 周一全天",
        publish: "7月第3周 · 周四 TikTok/Reels，周五 Carousel",
      },
      {
        title: "5G Factory",
        subtitle: "5G 智慧工厂",
        owner: "Chris",
        status: "待审核",
        goal: "建立智能制造背书",
        bundles: ["shorts-core", "b2b-proof"],
        references: ["数字看板", "AGV/机械臂", "质检数据屏"],
        script: "从数字化看板切入，展示 5G 工厂如何提高一致性和交付稳定性。",
        shoot: "7月第3周 · 周三",
        publish: "7月第3周 · 周五 TikTok/Reels，次周 LinkedIn",
      },
      {
        title: "Born From Steel",
        subtitle: "从钢材到成品",
        owner: "Chris",
        status: "脚本待定",
        goal: "强化制造过程透明度",
        bundles: ["shorts-core", "visual-social"],
        references: ["钢板切割", "焊花慢动作", "表面处理细节"],
        script: "用材料变化做叙事线，从钢材进入产线到成品门下线。",
        shoot: "8月第3周 · 周二",
        publish: "8月第3周 · 周四 TikTok/Reels，周五 Grid",
      },
    ],
  },
  {
    id: "s4",
    code: "S4",
    name: "暴力测试",
    position: "产品力极限验证",
    audience: "C端男性",
    main: "TikTok + YouTube",
    episodes: 12,
    output: 11,
    color: "#bb3d3d",
    bundles: ["shorts-core", "b2b-proof", "data-thread"],
    topics: [
      {
        title: "Crowbar vs Wonly",
        subtitle: "撬棍测试",
        owner: "Jay",
        status: "可发布",
        goal: "测试极限冲击转化",
        bundles: ["shorts-core", "data-thread"],
        references: ["撬棍近景", "门体受力慢动作", "测试前后对比"],
        script: "前 2 秒直接撬门；5 秒前隐藏结果；主体展示抗破坏过程；置顶评论：Which tool should we test next?",
        shoot: "7月第4周 · 周一上午",
        publish: "7月第4周 · 周二 TikTok/Shorts，周五 极速版",
      },
      {
        title: "Axe vs Door",
        subtitle: "斧头冲击",
        owner: "Jay",
        status: "待分镜",
        goal: "A/B 标准版与极速版",
        bundles: ["shorts-core"],
        references: ["斧头冲击特写", "慢动作碎屑", "门体结果定格"],
        script: "标准版讲清测试条件；极速版只保留冲击和结果，测试完播率差异。",
        shoot: "7月第4周 · 周三",
        publish: "7月第4周 · 周五 TikTok/Shorts",
      },
      {
        title: "Tools vs Wonly Door",
        subtitle: "撬棍 + 斧头 + 电钻合集",
        owner: "Jay",
        status: "脚本待定",
        goal: "YouTube 长视频合集",
        bundles: ["b2b-proof"],
        references: ["前三集测试素材", "工具参数卡", "结论对比表"],
        script: "把 3 个工具测试合成 6 分钟 YouTube 长视频，加入测试条件、结果和购买信任点。",
        shoot: "9月第4周 · 素材整合",
        publish: "9月第4周 · YouTube Long + Facebook",
      },
    ],
  },
];

const schedule = [
  ["W1", "7月第1周", "s1", "第1-2集", ["Robot Door", "6-Meter Sensing"]],
  ["W2", "7月第2周", "s2", "第1-2集", ["The Morning Escape", "The Hands-Free Hustle"]],
  ["W3", "7月第3周", "s3", "第1-2集", ["The Scale", "5G Factory"]],
  ["W4", "7月第4周", "s4", "第1-2集", ["Crowbar vs Wonly", "Axe vs Door"]],
  ["W5", "8月第1周", "s1", "第3-4集", ["360 Minutes"]],
  ["W6", "8月第2周", "s2", "第3-4集", ["The Midnight Return"]],
  ["W7", "8月第3周", "s3", "第3-4集", ["Born From Steel"]],
  ["W8", "8月第4周", "s4", "第3-4集", ["Tools vs Wonly Door"]],
  ["W9", "9月第1周", "s1", "第5-6集", ["5G Factory", "Vertical Integration"]],
  ["W10", "9月第2周", "s2", "第5-6集", ["The Package Dilemma", "The Stormy Night"]],
  ["W11", "9月第3周", "s3", "第5-6集", ["The Lock Within", "The Finish"]],
  ["W12", "9月第4周", "s4", "第5-6集", ["Sledgehammer Marathon", "Angle Grinder"]],
];

const metrics = [
  ["播放/展示", 128400, 78],
  ["平均完播率", 41, 62],
  ["互动率", 7.8, 74],
  ["粉丝增长", 1260, 66],
];

let activeMonth = "all";
let activeSeries = "all";

const statusClass = {
  待审核: "review",
  剪辑中: "progress",
  可发布: "ready",
  脚本待定: "todo",
  拍摄中: "progress",
  待分镜: "todo",
};

const ADMIN_USERNAME = "chloelee";
const ADMIN_PASSWORD_HASH = "df3dcfc0245fb6d3f508523001b0979446249420e3dc4b0081785035fc90a998";
const SESSION_KEY = "wonly-admin-session";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function allTopics() {
  return series.flatMap((item) => item.topics.map((topic, index) => ({ ...topic, seriesId: item.id, seriesName: item.name, topicIndex: index })));
}

function getSeries(id) {
  return series.find((item) => item.id === id);
}

function getBundle(id) {
  return platformBundles.find((item) => item.id === id);
}

function topicPlatforms(topic) {
  return topic.bundles.flatMap((id) => getBundle(id)?.platforms ?? []);
}

async function sha256(text) {
  const data = new TextEncoder().encode(text);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

function showApp() {
  $("#loginScreen").hidden = true;
  $("#appShell").hidden = false;
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

  if (username === ADMIN_USERNAME && passwordHash === ADMIN_PASSWORD_HASH) {
    localStorage.setItem(SESSION_KEY, JSON.stringify({ user: ADMIN_USERNAME, role: "admin", signedInAt: Date.now() }));
    $("#loginError").textContent = "";
    showApp();
    return;
  }

  $("#loginError").textContent = "用户名或密码不正确";
}

function renderSeries() {
  $("#seriesGrid").innerHTML = series
    .map(
      (item) => `
      <button class="series-card series-button" data-series-id="${item.id}">
        <div class="series-top">
          <div class="series-badge" style="background:${item.color}">${item.code}</div>
          <span class="tag">${item.main}</span>
        </div>
        <h3>${item.name}</h3>
        <p>${item.position}，面向 ${item.audience}。</p>
        <div class="mini-stats">
          <div><strong>${item.topics.length}</strong><span>已建主题</span></div>
          <div><strong>${item.output}</strong><span>Phase 1产出</span></div>
          <div><strong>${item.bundles.length}</strong><span>平台组合</span></div>
        </div>
      </button>
    `,
    )
    .join("");
}

function renderBundles() {
  $("#bundleGrid").innerHTML = platformBundles
    .map(
      (bundle) => `
        <article class="bundle-card">
          <div>
            <h4>${bundle.name}</h4>
            <p>${bundle.usage}</p>
          </div>
          <div class="platform-chips">${bundle.platforms.map((platform) => `<span class="chip">${platform}</span>`).join("")}</div>
          <span class="bundle-format">${bundle.format}</span>
        </article>
      `,
    )
    .join("");
}

function renderTasks() {
  const tasks = [
    ["本周短视频通用包", "YouTube Shorts + TikTok + Instagram Reels 共用核心剪辑", "周二"],
    ["系列主题脚本确认", "每个主题补齐 Hook、主体、CTA 和参考素材", "提前1周"],
    ["拍摄时间锁定", "主题详情内登记预计拍摄时间和负责人", "持续"],
    ["平台发布时间", "同一素材按平台最佳时间拆分发布", "持续"],
    ["数据追踪", "发布后每日录入播放和互动，2 周后 Go/No-Go", "持续"],
  ];

  $("#taskList").innerHTML = tasks
    .map(
      (task, index) => `
      <div class="task-item">
        <span class="checkbox">${index < 1 ? "✓" : ""}</span>
        <div><strong>${task[0]}</strong><span>${task[1]}</span></div>
        <span class="tag">${task[2]}</span>
      </div>
    `,
    )
    .join("");
}

function renderPlatforms() {
  $("#platformList").innerHTML = platformBundles
    .map(
      (bundle) => `
      <div class="platform-item">
        <span class="checkbox">${bundle.name.slice(0, 1)}</span>
        <div><strong>${bundle.name}</strong><span>${bundle.format}</span></div>
        <span class="tag">${bundle.platforms.length}平台</span>
      </div>
    `,
    )
    .join("");
}

function renderFilters() {
  $("#seriesFilter").innerHTML += series
    .map((item) => `<option value="${item.id}">${item.name}</option>`)
    .join("");
}

function renderCalendar() {
  const rows = schedule.filter((week) => {
    const matchesSeries = activeSeries === "all" || week[2] === activeSeries;
    const matchesMonth = activeMonth === "all" || week[1].startsWith(`${activeMonth}月`);
    return matchesSeries && matchesMonth;
  });

  $("#calendarBoard").innerHTML = rows
    .map((week) => {
      const item = getSeries(week[2]);
      const topics = week[4].map((title) => allTopics().find((topic) => topic.title === title)).filter(Boolean);
      const chips = [...new Set(topics.flatMap((topic) => topic.bundles.map((id) => getBundle(id)?.name).filter(Boolean)))];
      return `
        <article class="week-card">
          <div class="week-head">
            <div>
              <h3>${week[0]} · ${item.name}</h3>
              <span>${week[1]} · ${week[3]}</span>
            </div>
            <span class="series-badge" style="background:${item.color}">${item.code}</span>
          </div>
          <div class="week-topics">
            ${week[4].map((title) => `<button class="topic-link" data-topic-title="${title}">${title}</button>`).join("")}
          </div>
          <div class="platform-chips">${chips.map((chip) => `<span class="chip">${chip}</span>`).join("")}</div>
        </article>
      `;
    })
    .join("");
}

function renderContentTable(keyword = "") {
  const lower = keyword.trim().toLowerCase();
  const rows = allTopics().filter((item) => {
    const searchable = [item.title, item.subtitle, item.seriesName, item.owner, item.goal, topicPlatforms(item).join(" ")].join(" ").toLowerCase();
    return searchable.includes(lower);
  });

  $("#contentRows").innerHTML = rows
    .map(
      (item) => `
      <tr>
        <td class="content-title"><strong>${item.title}</strong><span>${item.seriesName} · ${item.subtitle}</span></td>
        <td>${[...new Set(topicPlatforms(item))].join(" / ")}</td>
        <td><span class="status ${statusClass[item.status]}">${item.status}</span></td>
        <td>${item.owner}</td>
        <td>${item.goal}</td>
        <td><button class="ghost-button table-action" data-topic-title="${item.title}">查看</button></td>
      </tr>
    `,
    )
    .join("");
}

function renderAnalytics() {
  $("#analyticsGrid").innerHTML = metrics
    .map((metric) => {
      const value = typeof metric[1] === "number" && metric[1] > 1000 ? metric[1].toLocaleString("zh-CN") : metric[1];
      const suffix = metric[0].includes("率") ? "%" : "";
      return `
        <article class="metric-card">
          <span>${metric[0]}</span>
          <strong>${value}${suffix}</strong>
          <div class="bar"><i style="width:${metric[2]}%"></i></div>
        </article>
      `;
    })
    .join("");
}

function openTopicDetail(topicTitle) {
  const topic = allTopics().find((item) => item.title === topicTitle);
  if (!topic) return;
  $("#detailSeries").textContent = `${topic.seriesName} · ${topic.status}`;
  $("#detailTitle").textContent = topic.title;
  $("#detailSubtitle").textContent = `${topic.subtitle} · 负责人 ${topic.owner} · ${topic.goal}`;
  $("#detailPlatforms").innerHTML = [...new Set(topicPlatforms(topic))].map((platform) => `<span class="chip">${platform}</span>`).join("");
  $("#detailReferences").innerHTML = topic.references.map((item) => `<li>${item}</li>`).join("");
  $("#detailScript").textContent = topic.script;
  $("#detailTimes").innerHTML = `
    <div><strong>预计拍摄</strong><span>${topic.shoot}</span></div>
    <div><strong>预计发布</strong><span>${topic.publish}</span></div>
  `;
  $("#detailModal").hidden = false;
}

function openSeriesDetail(seriesId) {
  const item = getSeries(seriesId);
  if (item?.topics?.[0]) openTopicDetail(item.topics[0].title);
}

function closeTopicDetail() {
  $("#detailModal").hidden = true;
}

function switchView(viewId) {
  $$(".nav-item").forEach((button) => button.classList.toggle("active", button.dataset.view === viewId));
  $$(".view").forEach((view) => view.classList.toggle("active", view.id === viewId));
}

function downloadSchedule() {
  const header = "周次,月份,系列,集数,主题\n";
  const csv = schedule
    .map((week) => [week[0], week[1], getSeries(week[2]).name, week[3], week[4].join(" / ")].map((cell) => `"${cell}"`).join(","))
    .join("\n");
  const blob = new Blob([header + csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "wonly-phase1-schedule.csv";
  link.click();
  URL.revokeObjectURL(url);
}

function bindAuth() {
  $("#loginForm").addEventListener("submit", handleLogin);
  $("#logoutButton").addEventListener("click", () => {
    localStorage.removeItem(SESSION_KEY);
    showLogin();
  });

  if (localStorage.getItem(SESSION_KEY)) {
    showApp();
  } else {
    showLogin();
  }
}

function bindEvents() {
  $$(".nav-item").forEach((button) => button.addEventListener("click", () => switchView(button.dataset.view)));
  $$("[data-view-jump]").forEach((button) => button.addEventListener("click", () => switchView(button.dataset.viewJump)));
  $$(".segmented button").forEach((button) => {
    button.addEventListener("click", () => {
      $$(".segmented button").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      activeMonth = button.dataset.month;
      renderCalendar();
    });
  });
  $("#seriesFilter").addEventListener("change", (event) => {
    activeSeries = event.target.value;
    renderCalendar();
  });
  $("#contentSearch").addEventListener("input", (event) => renderContentTable(event.target.value));
  $("#exportButton").addEventListener("click", downloadSchedule);
  $("#simulateButton").addEventListener("click", () => {
    metrics.forEach((metric) => {
      metric[1] = Number((metric[1] * 1.06).toFixed(1));
      metric[2] = Math.min(metric[2] + 5, 96);
    });
    renderAnalytics();
  });
  $("#seriesGrid").addEventListener("click", (event) => {
    const button = event.target.closest("[data-series-id]");
    if (button) openSeriesDetail(button.dataset.seriesId);
  });
  document.addEventListener("click", (event) => {
    const topicButton = event.target.closest("[data-topic-title]");
    if (topicButton) openTopicDetail(topicButton.dataset.topicTitle);
  });
  $("#closeDetailButton").addEventListener("click", closeTopicDetail);
  $("#detailModal").addEventListener("click", (event) => {
    if (event.target.id === "detailModal") closeTopicDetail();
  });
}

renderSeries();
renderBundles();
renderTasks();
renderPlatforms();
renderFilters();
renderCalendar();
renderContentTable();
renderAnalytics();
bindEvents();
bindAuth();
