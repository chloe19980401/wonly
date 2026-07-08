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
  },
];

const platforms = [
  ["TikTok", "核心引流阵地", "15-60s 竖屏短视频"],
  ["Instagram", "视觉美学阵地", "Reels + Carousel + Grid"],
  ["YouTube", "深度内容阵地", "Shorts + 5-10min 长视频"],
  ["LinkedIn", "B2B 专业阵地", "文章 + 图片帖"],
  ["Facebook", "本地化传播阵地", "视频转发 + 图文"],
  ["Twitter/X", "数据传播阵地", "Thread + 金句卡"],
];

const schedule = [
  ["W1", "7月第1周", "s1", "第1-2集", ["TikTok 2条", "Instagram 1套", "YouTube 长视频", "LinkedIn 文章", "Facebook 2条", "Twitter Thread"]],
  ["W2", "7月第2周", "s2", "第1-2集", ["TikTok 2条", "Instagram Reels+Grid", "Facebook 2条", "Twitter 金句卡"]],
  ["W3", "7月第3周", "s3", "第1-2集", ["TikTok 2条", "Instagram Reels+Carousel"]],
  ["W4", "7月第4周", "s4", "第1-2集", ["TikTok 标准+极速", "YouTube Shorts"]],
  ["W5", "8月第1周", "s1", "第3-4集", ["TikTok 2条", "Instagram 1套", "YouTube Short", "Facebook 2条"]],
  ["W6", "8月第2周", "s2", "第3-4集", ["TikTok 2条", "Instagram Reels+Grid+Carousel", "YouTube Short", "Facebook 2条", "Twitter 金句卡"]],
  ["W7", "8月第3周", "s3", "第3-4集", ["TikTok 2条", "Instagram Reels+Carousel"]],
  ["W8", "8月第4周", "s4", "第3-4集", ["TikTok 标准+慢动作", "YouTube Short"]],
  ["W9", "9月第1周", "s1", "第5-6集", ["TikTok 2条", "Instagram 1套", "YouTube 长视频", "LinkedIn 文章", "Facebook 2条", "Twitter Thread"]],
  ["W10", "9月第2周", "s2", "第5-6集", ["TikTok 2条", "Instagram Reels+Grid+Carousel", "YouTube Short", "Facebook 2条", "Twitter 金句卡"]],
  ["W11", "9月第3周", "s3", "第5-6集", ["TikTok 2条", "Instagram Reels+Carousel"]],
  ["W12", "9月第4周", "s4", "第5-6集", ["TikTok 标准+极速", "YouTube 长视频合集"]],
];

const contentItems = [
  ["Robot Door", "只有王力有 · 第1集", "TikTok, YouTube, LinkedIn", "review", "待审核", "Mia", "建立品牌实力基线"],
  ["6-Meter Sensing", "只有王力有 · 第2集", "TikTok, Instagram", "progress", "剪辑中", "Leo", "验证 30s Hook"],
  ["The Morning Escape", "Gossip Girl · 第1集", "TikTok, Instagram, Facebook", "ready", "可发布", "Anna", "测试生活方式剧情"],
  ["The Hands-Free Hustle", "Gossip Girl · 第2集", "TikTok, Instagram", "todo", "脚本待定", "Anna", "强化女性场景"],
  ["The Scale", "超级工厂 · 第1集", "TikTok, Instagram", "progress", "拍摄中", "Chris", "工厂规模视觉冲击"],
  ["Crowbar vs Wonly", "暴力测试 · 第1集", "TikTok, YouTube", "ready", "可发布", "Jay", "测试极限冲击转化"],
  ["Axe vs Door", "暴力测试 · 第2集", "TikTok, YouTube", "todo", "待分镜", "Jay", "A/B 标准版与极速版"],
];

let metrics = [
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

function bindAuth() {
  $("#loginForm").addEventListener("submit", handleLogin);
  $("#logoutButton").addEventListener("click", () => {
    localStorage.removeItem(SESSION_KEY);
    showLogin();
  });

  const session = localStorage.getItem(SESSION_KEY);
  if (session) {
    showApp();
  } else {
    showLogin();
  }
}

function getSeries(id) {
  return series.find((item) => item.id === id);
}

function renderSeries() {
  $("#seriesGrid").innerHTML = series
    .map(
      (item) => `
      <article class="series-card">
        <div class="series-top">
          <div class="series-badge" style="background:${item.color}">${item.code}</div>
          <span class="tag">${item.main}</span>
        </div>
        <h3>${item.name}</h3>
        <p>${item.position}，面向 ${item.audience}。</p>
        <div class="mini-stats">
          <div><strong>${item.episodes}</strong><span>总集数</span></div>
          <div><strong>${item.output}</strong><span>Phase 1产出</span></div>
          <div><strong>3周</strong><span>集中投放</span></div>
        </div>
      </article>
    `,
    )
    .join("");
}

function renderTasks() {
  const tasks = [
    ["脚本确认", "Hook、主体、CTA 三段式结构", "本周一"],
    ["拍摄执行", "保留原素材并标注平台规格", "本周二"],
    ["后期剪辑", "9:16、4:5、16:9 版本适配", "本周三"],
    ["审核发布", "按日历确认发布时间", "本周四"],
    ["数据追踪", "发布后每日录入播放和互动", "持续"],
  ];

  $("#taskList").innerHTML = tasks
    .map(
      (task, index) => `
      <div class="task-item">
        <span class="checkbox">${index < 2 ? "✓" : ""}</span>
        <div><strong>${task[0]}</strong><span>${task[1]}</span></div>
        <span class="tag">${task[2]}</span>
      </div>
    `,
    )
    .join("");
}

function renderPlatforms() {
  $("#platformList").innerHTML = platforms
    .map(
      (platform) => `
      <div class="platform-item">
        <span class="checkbox">${platform[0][0]}</span>
        <div><strong>${platform[0]}</strong><span>${platform[1]}</span></div>
        <span class="tag">${platform[2]}</span>
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
      return `
        <article class="week-card">
          <div class="week-head">
            <div>
              <h3>${week[0]} · ${item.name}</h3>
              <span>${week[1]} · ${week[3]}</span>
            </div>
            <span class="series-badge" style="background:${item.color}">${item.code}</span>
          </div>
          <div class="platform-chips">
            ${week[4].map((chip) => `<span class="chip">${chip}</span>`).join("")}
          </div>
        </article>
      `;
    })
    .join("");
}

function renderContentTable(keyword = "") {
  const lower = keyword.trim().toLowerCase();
  const rows = contentItems.filter((item) => item.join(" ").toLowerCase().includes(lower));

  $("#contentRows").innerHTML = rows
    .map(
      (item) => `
      <tr>
        <td class="content-title"><strong>${item[0]}</strong><span>${item[1]}</span></td>
        <td>${item[2]}</td>
        <td><span class="status ${statusClass[item[4]]}">${item[4]}</span></td>
        <td>${item[5]}</td>
        <td>${item[6]}</td>
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

function switchView(viewId) {
  $$(".nav-item").forEach((button) => button.classList.toggle("active", button.dataset.view === viewId));
  $$(".view").forEach((view) => view.classList.toggle("active", view.id === viewId));
}

function downloadSchedule() {
  const header = "周次,月份,系列,集数,平台安排\n";
  const csv = schedule
    .map((week) => {
      const item = getSeries(week[2]);
      return [week[0], week[1], item.name, week[3], week[4].join(" / ")].map((cell) => `"${cell}"`).join(",");
    })
    .join("\n");
  const blob = new Blob([header + csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "wonly-phase1-schedule.csv";
  link.click();
  URL.revokeObjectURL(url);
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
    metrics = metrics.map((metric) => [metric[0], Number((metric[1] * 1.06).toFixed(1)), Math.min(metric[2] + 5, 96)]);
    renderAnalytics();
  });
}

renderSeries();
renderTasks();
renderPlatforms();
renderFilters();
renderCalendar();
renderContentTable();
renderAnalytics();
bindEvents();
bindAuth();
