const ADMIN_USERNAME = "chloelee";
const ADMIN_PASSWORD_HASH = "df3dcfc0245fb6d3f508523001b0979446249420e3dc4b0081785035fc90a998";
const SESSION_KEY = "wonly-admin-session";
const DATA_KEY = "wonly-editable-social-system-v3";

const ROLE_LABELS = {
  admin: "管理员",
  manager: "运营主管",
  marketing: "市场部运营",
  editor: "内容编辑",
  viewer: "只读成员",
};

const ROLE_PERMISSIONS = {
  admin: {
    views: ["overview", "calendar", "library", "okr", "analytics", "settings"],
    topicScope: "all",
    canCreateTopic: true,
    canManageOkr: true,
    canManageSystem: true,
    canEditData: true,
    canExport: true,
  },
  manager: {
    views: ["overview", "calendar", "library", "okr", "analytics"],
    topicScope: "all",
    canCreateTopic: true,
    canManageOkr: true,
    canManageSystem: false,
    canEditData: true,
    canExport: true,
  },
  marketing: {
    views: ["overview", "calendar", "library", "analytics"],
    topicScope: "all",
    canCreateTopic: true,
    canManageOkr: false,
    canManageSystem: false,
    canEditData: true,
    canExport: true,
  },
  editor: {
    views: ["calendar", "library"],
    topicScope: "own",
    canCreateTopic: true,
    canManageOkr: false,
    canManageSystem: false,
    canEditData: false,
    canExport: false,
  },
  viewer: {
    views: ["overview", "calendar", "library"],
    topicScope: "own",
    canCreateTopic: false,
    canManageOkr: false,
    canManageSystem: false,
    canEditData: false,
    canExport: false,
  },
};

const REAL_OWNERS = [
  { name: "胡译泰", title: "运营负责人" },
  { name: "徐一诺", title: "市场部运营" },
  { name: "周宗莉", title: "市场部运营" },
  { name: "周雨晴", title: "市场部运营" },
];
const REAL_OWNER_NAMES = new Set(REAL_OWNERS.map((owner) => owner.name));
const LEGACY_OWNER_NAMES = new Set(["Mia", "Leo", "Anna", "Chris", "Jay"]);
const FALLBACK_OWNER = REAL_OWNERS[0].name;

const defaultData = {
  activeMonth: "2026-07",
  owners: clone(REAL_OWNERS),
  accounts: [
    { id: "acct-admin", username: ADMIN_USERNAME, owner: FALLBACK_OWNER, role: "admin", passwordHash: ADMIN_PASSWORD_HASH, status: "启用" },
  ],
  platformBundles: [
    { id: "shorts-core", name: "短视频通用包", platforms: ["YouTube Shorts", "TikTok", "Instagram Reels"], format: "9:16 竖屏，15-45s，英文字幕", usage: "同一条核心视频适配三端，统一 Hook 和 CTA，只微调封面与标题。" },
    { id: "visual-social", name: "视觉社交包", platforms: ["Instagram Grid", "Instagram Carousel", "Facebook"], format: "1:1 / 4:5 图片、短视频转发、本地化文案", usage: "适合生活方式、工厂美学、产品细节，把视频素材拆成图文故事。" },
    { id: "b2b-proof", name: "B2B 背书包", platforms: ["LinkedIn", "YouTube Long", "Facebook"], format: "长视频、文章、工程案例图文", usage: "适合工厂实力、技术参数、工程案例和品牌可信度内容。" },
    { id: "data-thread", name: "观点传播包", platforms: ["LinkedIn Post", "Facebook Quote Card"], format: "数据点、对比图、金句卡", usage: "把测试结果和对比数据拆成连续观点，适合复盘和传播。" },
  ],
  series: [
    { id: "s1", code: "S1", name: "只看王力门", position: "品牌实力展示", audience: "B2B + C端", main: "TikTok + LinkedIn", color: "#0f8f61", bundles: ["shorts-core", "b2b-proof", "data-thread"] },
    { id: "s2", code: "S2", name: "Gossip Girl", position: "场景化生活方式", audience: "C端女性", main: "TikTok + Instagram", color: "#b64f78", bundles: ["shorts-core", "visual-social"] },
    { id: "s3", code: "S3", name: "超级工厂", position: "工厂实力背书", audience: "B2B + 经销商", main: "TikTok + Instagram", color: "#087b86", bundles: ["shorts-core", "visual-social", "b2b-proof"] },
    { id: "s4", code: "S4", name: "暴力测试", position: "产品力极限验证", audience: "C端男性", main: "TikTok + YouTube", color: "#bb3d3d", bundles: ["shorts-core", "b2b-proof", "data-thread"] },
  ],
  topics: [],
  okrs: [],
};

let data = loadData();
let activeMonth = data.activeMonth;
let activeSeries = "all";
let currentAccount = null;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function topic(title, subtitle, seriesId, owner, month, status, okrKey, bundles, references, script, shoot, publish, postUrl) {
  return { id: idFrom(title), title, subtitle, seriesId, owner, month, status, okrKey, bundles, references, script, shoot, publish, postUrl };
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
      const owner = REAL_OWNER_NAMES.has(account.owner) ? account.owner : FALLBACK_OWNER;
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
  if (!next.accounts.length) next.accounts = clone(defaultData.accounts);

  ["topics", "okrs"].forEach((key) => {
    if (!Array.isArray(next[key])) next[key] = [];
    next[key].forEach((item) => {
      if (!REAL_OWNER_NAMES.has(item.owner)) {
        if (LEGACY_OWNER_NAMES.has(item.owner) || !item.owner) changed = true;
        item.owner = FALLBACK_OWNER;
      }
    });
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

function canSeeTopic(item) {
  const scope = currentPermissions().topicScope;
  return scope === "all" || !currentAccount?.owner || item.owner === currentAccount.owner;
}

function canSeeOwner(ownerName) {
  const scope = currentPermissions().topicScope;
  return scope === "all" || !currentAccount?.owner || ownerName === currentAccount.owner;
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

function canManageSystem() {
  return Boolean(currentPermissions().canManageSystem);
}

function canEditData() {
  return Boolean(currentPermissions().canEditData);
}

function canExport() {
  return Boolean(currentPermissions().canExport);
}

function roleLockedMessage() {
  return "当前账号没有这个操作权限。";
}

function topicPlatforms(item) {
  return item.bundles.flatMap((id) => getBundle(id)?.platforms ?? []);
}

function monthLabel(month) {
  const [year, value] = month.split("-");
  return `${year}年${Number(value)}月`;
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
  $("#currentAccountPill").textContent = `${ROLE_LABELS[account.role] ?? account.role} · ${account.username}`;
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
  renderSeries();
  renderBundles();
  renderTasks();
  renderPlatforms();
  renderFilters();
  renderCalendar();
  renderContentTable($("#contentSearch")?.value ?? "");
  renderOkrMonths();
  renderOkr();
  renderAnalytics();
  renderSystemEditor();
  applyRoleAccess();
}

function renderSummaryCounts() {
  $("#topicCount").textContent = String(data.topics.length);
  $("#ownerCount").textContent = String(data.owners.length);
}

function renderSeries() {
  $("#seriesGrid").innerHTML = data.series.map((item) => {
    const topics = data.topics.filter((topicItem) => topicItem.seriesId === item.id && canSeeTopic(topicItem));
    const seriesBadge = canManageSystem()
      ? `<button class="series-badge" style="background:${item.color}" data-edit-series="${item.id}" title="编辑系列">${item.code}</button>`
      : `<span class="series-badge" style="background:${item.color}">${item.code}</span>`;
    return `
      <article class="series-card">
        <div class="series-top">
          ${seriesBadge}
          <span class="tag">${item.main}</span>
        </div>
        <h3>${item.name}</h3>
        <p>${item.position}，面向 ${item.audience}。</p>
        <div class="mini-stats">
          <div><strong>${topics.length}</strong><span>主题</span></div>
          <div><strong>${item.bundles.length}</strong><span>平台包</span></div>
          <div><strong>${topics.filter((topicItem) => topicItem.postUrl).length}</strong><span>已发链接</span></div>
        </div>
      </article>
    `;
  }).join("");
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
}

function renderCalendar() {
  const rows = data.topics
    .filter((item) => canSeeTopic(item) && (activeSeries === "all" || item.seriesId === activeSeries) && item.month === activeMonth)
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

function renderContentTable(keyword = "") {
  const lower = keyword.trim().toLowerCase();
  const rows = data.topics.filter((item) => {
    const searchable = [item.title, item.subtitle, item.owner, item.status, item.okrKey, item.postUrl, topicPlatforms(item).join(" ")].join(" ").toLowerCase();
    return canSeeTopic(item) && searchable.includes(lower);
  });
  $("#contentRows").innerHTML = rows.length ? rows.map((item) => `
    <tr>
      <td class="content-title"><strong>${item.title}</strong><span>${getSeries(item.seriesId)?.name ?? ""} · ${item.subtitle}</span></td>
      <td>${[...new Set(topicPlatforms(item))].join(" / ")}</td>
      <td><span class="status">${item.status}</span></td>
      <td>${item.owner}</td>
      <td>${item.okrKey}</td>
      <td>${item.postUrl ? `<a href="${item.postUrl}" target="_blank" rel="noreferrer">${platformFromUrl(item.postUrl)}</a>` : "未上传"}</td>
      <td>${canEditTopic(item) ? `<button class="ghost-button table-action" data-edit-topic="${item.id}">编辑</button>` : `<span class="muted">只读</span>`}</td>
    </tr>
  `).join("") : `<tr><td colspan="7" class="empty-table">还没有帖子主题，可以从“新建内容”开始手动添加。</td></tr>`;
}

function okrScore(okr) {
  const keyResults = okrObjectives(okr).flatMap((objective) => objective.keyResults);
  if (!keyResults.length) return 0;
  const total = keyResults.reduce((sum, kr) => sum + Math.min(Number(kr.actual || 0) / Math.max(Number(kr.target || 1), 1), 1), 0);
  return Math.round((total / keyResults.length) * 100);
}

function okrObjectives(okr) {
  if (Array.isArray(okr.objectives) && okr.objectives.length) {
    return okr.objectives.map((objective, index) => ({
      id: objective.id || `o-${index + 1}`,
      title: objective.title || objective.objective || "",
      keyResults: Array.isArray(objective.keyResults) ? objective.keyResults : [],
    }));
  }
  return [{
    id: "o-1",
    title: okr.objective || "",
    keyResults: Array.isArray(okr.keyResults) ? okr.keyResults : [],
  }];
}

function renderOkrMonths() {
  const months = [...new Set(data.okrs.map((item) => item.month).concat(data.topics.map((item) => item.month)))].sort();
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
                ${objective.keyResults.map((kr) => `<div><span>${kr.name}</span><strong>${kr.actual}/${kr.target}${kr.unit}</strong></div>`).join("")}
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
  const totalViews = monthTopics.reduce((sum, item) => sum + dataForTopic(item).views, 0);
  const avgCompletion = average(monthTopics.map((item) => dataForTopic(item).completion).filter(Boolean));
  const avgEngagement = average(monthTopics.map((item) => dataForTopic(item).engagement).filter(Boolean));
  const totalFollowers = monthTopics.reduce((sum, item) => sum + dataForTopic(item).followers, 0);
  $("#analyticsGrid").innerHTML = [
    ["本月播放/展示", totalViews.toLocaleString("zh-CN"), 78],
    ["平均完播率", `${avgCompletion}%`, avgCompletion],
    ["平均互动率", `${avgEngagement}%`, avgEngagement * 10],
    ["粉丝增长", totalFollowers, 66],
  ].map((metric) => `
    <article class="metric-card">
      <span>${metric[0]}</span>
      <strong>${metric[1]}</strong>
      <div class="bar"><i style="width:${Math.min(metric[2], 100)}%"></i></div>
    </article>
  `).join("");
  $("#postBoard").innerHTML = `
    <div class="post-row post-head"><span>主题</span><span>平台</span><span>播放</span><span>完播</span><span>互动</span><span>判断</span></div>
    ${monthTopics.map((item) => {
      const stats = dataForTopic(item);
      const decision = !item.postUrl ? "待链接" : stats.completion >= 45 && stats.engagement >= 6 ? "Go" : stats.completion >= 32 ? "优化重测" : "No-Go";
      return `
        <div class="post-row ${canEditTopic(item) ? "editable-row" : ""}" ${canEditTopic(item) ? `data-edit-topic="${item.id}"` : ""}>
          <div><strong>${item.title}</strong><span>${item.owner} · ${getSeries(item.seriesId)?.name ?? ""}</span></div>
          <span>${item.postUrl ? platformFromUrl(item.postUrl) : "未上传"}</span>
          <span>${stats.views ? stats.views.toLocaleString("zh-CN") : "-"}</span>
          <span>${stats.completion ? `${stats.completion}%` : "-"}</span>
          <span>${stats.engagement ? `${stats.engagement}%` : "-"}</span>
          <span class="status">${decision}</span>
        </div>
      `;
    }).join("")}
  `;
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

function openTopicEditor(id) {
  if (!currentPermissions().canCreateTopic) {
    alert(roleLockedMessage());
    return;
  }
  const item = data.topics.find((topicItem) => topicItem.id === id) ?? topic("", "", data.series[0]?.id ?? "", currentAccount?.owner ?? data.owners[0]?.name ?? "", activeMonth, "脚本待定", "", [], [], "", "", "", "");
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
      monthField("month", "OKR 月份", item.month || activeMonth),
      selectField("status", "状态", item.status, ["待审核", "剪辑中", "可发布", "脚本待定", "拍摄中", "待分镜"].map((value) => [value, value])),
      textField("okrKey", "关联 KR", item.okrKey),
      textField("bundles", "平台组合 ID，用逗号分隔", item.bundles.join(",")),
      textareaField("references", "参考素材，每行一个", item.references.join("\n")),
      textareaField("script", "脚本结构", item.script),
      textField("shoot", "预计拍摄时间", item.shoot),
      textField("publish", "预计发布时间", item.publish),
      textField("postUrl", "帖子链接", item.postUrl || ""),
      numberField("views", "播放/展示", item.views || 0),
      numberField("completion", "完播率 %", item.completion || 0),
      numberField("engagement", "互动率 %", item.engagement || 0),
      numberField("followers", "转粉", item.followers || 0),
    ],
    deleteLabel: item.id ? "删除帖子主题" : "",
    onDelete: item.id ? () => {
      data.topics = data.topics.filter((topicItem) => topicItem.id !== item.id);
      saveAndRefresh();
    } : null,
    onSave(values) {
      const next = {
        ...item,
        ...values,
        id: item.id || idFrom(values.title),
        bundles: values.bundles.split(",").map((value) => value.trim()).filter(Boolean),
        references: values.references.split("\n").map((value) => value.trim()).filter(Boolean),
      };
      const index = data.topics.findIndex((topicItem) => topicItem.id === item.id);
      if (index >= 0) data.topics[index] = next;
      else data.topics.push(next);
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
  const item = getSeries(id) ?? { id: "", code: "", name: "", position: "", audience: "", main: "", color: "#2f64b7", bundles: [] };
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
      textField("main", "主要平台", item.main),
      textField("color", "颜色", item.color),
      textField("bundles", "平台组合 ID，用逗号分隔", item.bundles.join(",")),
    ],
    deleteLabel: item.id ? "删除系列和关联主题" : "",
    onDelete: item.id ? () => {
      if (data.series.length <= 1) {
        alert("至少保留一个系列。");
        return;
      }
      data.series = data.series.filter((seriesItem) => seriesItem.id !== item.id);
      data.topics = data.topics.filter((topicItem) => topicItem.seriesId !== item.id);
      if (activeSeries === item.id) activeSeries = "all";
      saveAndRefresh();
    } : null,
    onSave(values) {
      const next = { ...item, ...values, id: values.id || idFrom(values.name), bundles: values.bundles.split(",").map((value) => value.trim()).filter(Boolean) };
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
      selectField("owner", "绑定成员", item.owner, data.owners.map((owner) => [owner.name, `${owner.name} · ${owner.title}`])),
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
        builder.insertAdjacentHTML("beforeend", okrObjectiveBlock({ title: "", keyResults: [{ name: "", target: 0, actual: 0, unit: "" }] }, builder.children.length));
        reindexOkrEditor();
      };
      builder.onclick = (event) => {
        const addKrButton = event.target.closest("[data-add-kr]");
        if (addKrButton) {
          const block = addKrButton.closest(".okr-objective-block");
          const list = block.querySelector(".okr-kr-list");
          list.insertAdjacentHTML("beforeend", okrKeyResultRow({ name: "", target: 0, actual: 0, unit: "" }, list.children.length));
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
  ["owners", "accounts", "platformBundles", "series", "topics", "okrs"].forEach((key) => {
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
      if (!confirm("确定删除？删除后当前浏览器里的这项数据会被移除。")) return;
      config.onDelete();
      closeEditor();
    };
  }
  $("#cancelEditButton").onclick = closeEditor;
  $("#editModal").hidden = false;
  config.onMount?.();
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

function okrStructureField(item) {
  const objectives = okrObjectives(item).map((objective) => ({
    title: objective.title,
    keyResults: objective.keyResults.length ? objective.keyResults : [{ name: "", target: 0, actual: 0, unit: "" }],
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
  const keyResults = objective.keyResults?.length ? objective.keyResults : [{ name: "", target: 0, actual: 0, unit: "" }];
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
  return `
    <div class="okr-kr-row">
      <span class="okr-index" data-kr-index>KR${index + 1}</span>
      <input name="krName" value="${escapeAttr(kr.name || "")}" placeholder="添加 Key Result" />
      <input type="number" step="0.1" min="0" name="krTarget" value="${escapeAttr(kr.target ?? 0)}" placeholder="目标" />
      <input type="number" step="0.1" min="0" name="krActual" value="${escapeAttr(kr.actual ?? 0)}" placeholder="实际" />
      <input name="krUnit" value="${escapeAttr(kr.unit || "")}" placeholder="单位" />
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
      target: Number(row.querySelector('[name="krTarget"]').value || 0),
      actual: Number(row.querySelector('[name="krActual"]').value || 0),
      unit: row.querySelector('[name="krUnit"]').value.trim(),
    })).filter((kr) => kr.name);
    return { id: `o-${objectiveIndex + 1}`, title, keyResults };
  }).filter((objective) => objective.title);
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
      activeMonth = button.dataset.month === "all" ? activeMonth : `2026-0${button.dataset.month}`;
      renderAll();
    });
  });
  $("#seriesFilter").addEventListener("change", (event) => {
    activeSeries = event.target.value;
    renderCalendar();
  });
  $("#contentSearch").addEventListener("input", (event) => renderContentTable(event.target.value));
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
    const target = event.target.closest("[data-edit-topic],[data-edit-series],[data-edit-bundle],[data-edit-owner],[data-edit-account],[data-edit-okr],[data-okr-month],[data-new-topic],[data-new-okr],[data-new-owner],[data-new-account],[data-new-series],[data-new-bundle],[data-export-data],[data-import-data],[data-reset-data]");
    if (!target) return;
    if (target.dataset.editTopic) openTopicEditor(target.dataset.editTopic);
    if (target.dataset.editSeries) openSeriesEditor(target.dataset.editSeries);
    if (target.dataset.editBundle) openBundleEditor(target.dataset.editBundle);
    if (target.dataset.editOwner) openOwnerEditor(target.dataset.editOwner);
    if (target.dataset.editAccount) openAccountEditor(target.dataset.editAccount);
    if (target.dataset.editOkr) openOkrEditor(target.dataset.editOkr);
    if (target.dataset.okrMonth) {
      activeMonth = target.dataset.okrMonth;
      saveAndRefresh();
    }
    if (target.dataset.newTopic) openTopicEditor();
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
