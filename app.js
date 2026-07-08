const ADMIN_USERNAME = "chloelee";
const ADMIN_PASSWORD_HASH = "df3dcfc0245fb6d3f508523001b0979446249420e3dc4b0081785035fc90a998";
const SESSION_KEY = "wonly-admin-session";
const DATA_KEY = "wonly-editable-social-system-v2";

const defaultData = {
  activeMonth: "2026-07",
  owners: [
    { name: "Mia", title: "内容策划" },
    { name: "Leo", title: "短视频剪辑" },
    { name: "Anna", title: "生活方式运营" },
    { name: "Chris", title: "工厂内容运营" },
    { name: "Jay", title: "测试内容运营" },
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
  topics: [
    topic("Robot Door", "机器人防盗门", "s1", "Mia", "2026-07", "待审核", "KR1 专业信任内容", ["shorts-core", "b2b-proof"], ["机器人门开合特写", "工厂自动化产线 B-roll", "竞品普通门对比画面"], "痛点 Hook：传统门不够智能；主体：机器人门感应、开合、防护演示；CTA：Follow for Wonly-only security tech.", "2026-07-06 09:00", "2026-07-08 18:00", ""),
    topic("6-Meter Sensing", "遥感识别", "s1", "Leo", "2026-07", "剪辑中", "KR2 短视频完播率", ["shorts-core"], ["6 米距离走近门锁", "传感器 UI 动效参考", "夜间归家场景"], "前 3 秒展示远距离感应开门；主体拆解识别距离和安全逻辑；结尾提问：Would your door recognize you first?", "2026-07-07 14:00", "2026-07-10 18:00", ""),
    topic("360 Minutes", "超 C 级锁芯", "s1", "Mia", "2026-08", "脚本待定", "KR1 专业信任内容", ["b2b-proof", "data-thread"], ["锁芯微距", "测试计时器", "标准证书/参数卡"], "用 360 分钟防破坏测试做核心证据，短视频出结果，LinkedIn 写技术解释。", "2026-08-03 10:00", "2026-08-05 18:00", ""),
    topic("The Morning Escape", "早高峰出门", "s2", "Anna", "2026-07", "可发布", "KR3 女性场景转化", ["shorts-core", "visual-social"], ["女主拿咖啡出门", "包包/穿搭定格", "门锁自动识别镜头"], "G 角色旁白开场；主体展示不用掏钥匙的出门体验；结尾：Spotted: someone who never looks for keys.", "2026-07-13 09:00", "2026-07-14 18:00", ""),
    topic("The Hands-Free Hustle", "双手满载回家", "s2", "Anna", "2026-07", "脚本待定", "KR3 女性场景转化", ["shorts-core", "visual-social"], ["购物袋/快递箱", "门前无手开门", "温暖室内灯光"], "前 2 秒制造手忙脚乱；主体让门锁自动完成识别；CTA：Would your door do this?", "2026-07-15 14:00", "2026-07-17 18:00", ""),
    topic("The Midnight Return", "午夜安全归家", "s2", "Anna", "2026-08", "待审核", "KR3 女性场景转化", ["shorts-core"], ["夜间楼道", "低光人脸识别", "安全提示 UI"], "用悬念开场，强调夜间识别和安全感，最后用 G 角色金句收尾。", "2026-08-10 20:00", "2026-08-12 18:00", ""),
    topic("The Scale", "工厂规模展示", "s3", "Chris", "2026-07", "拍摄中", "KR4 B2B 信任背书", ["shorts-core", "visual-social"], ["航拍厂区", "产线广角", "仓储和发货画面"], "前 3 秒航拍冲击；主体展示规模、产线、效率；CTA：Comment for factory tour.", "2026-07-20 09:00", "2026-07-23 18:00", ""),
    topic("5G Factory", "5G 智慧工厂", "s3", "Chris", "2026-07", "待审核", "KR4 B2B 信任背书", ["shorts-core", "b2b-proof"], ["数字看板", "AGV/机械臂", "质检数据屏"], "从数字化看板切入，展示 5G 工厂如何提高一致性和交付稳定性。", "2026-07-22 10:00", "2026-07-24 18:00", ""),
    topic("Born From Steel", "从钢材到成品", "s3", "Chris", "2026-08", "脚本待定", "KR4 B2B 信任背书", ["shorts-core", "visual-social"], ["钢板切割", "焊花慢动作", "表面处理细节"], "用材料变化做叙事线，从钢材进入产线到成品门下线。", "2026-08-18 10:00", "2026-08-20 18:00", ""),
    topic("Crowbar vs Wonly", "撬棍测试", "s4", "Jay", "2026-07", "可发布", "KR5 测试内容破圈", ["shorts-core", "data-thread"], ["撬棍近景", "门体受力慢动作", "测试前后对比"], "前 2 秒直接撬门；5 秒前隐藏结果；主体展示抗破坏过程；置顶评论：Which tool should we test next?", "2026-07-27 09:00", "2026-07-28 18:00", ""),
    topic("Axe vs Door", "斧头冲击", "s4", "Jay", "2026-07", "待分镜", "KR5 测试内容破圈", ["shorts-core"], ["斧头冲击特写", "慢动作碎屑", "门体结果定格"], "标准版讲清测试条件；极速版只保留冲击和结果，测试完播率差异。", "2026-07-29 10:00", "2026-07-31 18:00", ""),
    topic("Tools vs Wonly Door", "撬棍 + 斧头 + 电钻合集", "s4", "Jay", "2026-09", "脚本待定", "KR5 测试内容破圈", ["b2b-proof"], ["前三集测试素材", "工具参数卡", "结论对比表"], "把 3 个工具测试合成 6 分钟 YouTube 长视频，加入测试条件、结果和购买信任点。", "2026-09-21 10:00", "2026-09-25 18:00", ""),
  ],
  okrs: [
    monthlyOkr("2026-07", "Mia", "建立 Wonly 专业信任内容基础", [["完成专业信任主题", 2, 1, "个"], ["LinkedIn 技术向发布", 2, 0, "条"], ["专业内容平均互动率", 5, 0, "%"]]),
    monthlyOkr("2026-07", "Leo", "提升短视频剪辑效率与完播表现", [["完成短视频剪辑", 4, 1, "条"], ["平均完播率", 40, 0, "%"], ["跨平台复用率", 80, 30, "%"]]),
    monthlyOkr("2026-07", "Anna", "验证女性生活场景内容转化", [["完成生活方式主题", 3, 2, "个"], ["Instagram 发布", 5, 0, "条"], ["互动率", 6, 0, "%"]]),
    monthlyOkr("2026-07", "Chris", "扩大工厂实力和 B2B 背书曝光", [["完成工厂主题", 2, 2, "个"], ["LinkedIn B2B 内容", 2, 0, "条"], ["询盘线索", 5, 0, "个"]]),
    monthlyOkr("2026-07", "Jay", "打造测试内容破圈记忆点", [["完成破坏测试主题", 2, 2, "个"], ["短视频播放量", 50000, 0, "次"], ["评论互动", 300, 0, "条"]]),
    monthlyOkr("2026-08", "Mia", "把专业信任内容沉淀成系列资产", [["技术解释内容", 3, 0, "条"], ["资料卡复用", 4, 0, "张"], ["收藏率", 3, 0, "%"]]),
    monthlyOkr("2026-08", "Anna", "继续测试女性安全感场景", [["夜间归家主题", 2, 1, "个"], ["Reels 发布", 4, 0, "条"], ["互动率", 6, 0, "%"]]),
    monthlyOkr("2026-08", "Chris", "完成工厂制造流程内容", [["制造流程主题", 2, 1, "个"], ["B2B 播放量", 30000, 0, "次"], ["询盘线索", 6, 0, "个"]]),
    monthlyOkr("2026-09", "Jay", "完成暴力测试合集转化", [["YouTube 长视频", 1, 0, "条"], ["合集播放量", 80000, 0, "次"], ["评论互动", 500, 0, "条"]]),
  ],
};

let data = loadData();
let activeMonth = data.activeMonth;
let activeSeries = "all";

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
    return { ...clone(defaultData), ...JSON.parse(localStorage.getItem(DATA_KEY) || "{}") };
  } catch {
    return clone(defaultData);
  }
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
    sessionStorage.setItem(SESSION_KEY, "1");
    $("#loginError").textContent = "";
    showApp();
  } else {
    $("#loginError").textContent = "用户名或密码不正确";
  }
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
}

function renderSummaryCounts() {
  $("#topicCount").textContent = String(data.topics.length);
  $("#ownerCount").textContent = String(data.owners.length);
}

function renderSeries() {
  $("#seriesGrid").innerHTML = data.series.map((item) => {
    const topics = data.topics.filter((topicItem) => topicItem.seriesId === item.id);
    return `
      <article class="series-card">
        <div class="series-top">
          <button class="series-badge" style="background:${item.color}" data-edit-series="${item.id}" title="编辑系列">${item.code}</button>
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
      <button class="ghost-button table-action" data-edit-bundle="${bundle.id}">编辑组合</button>
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
      <button class="ghost-button table-action" data-edit-bundle="${bundle.id}">编辑</button>
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
    .filter((item) => (activeSeries === "all" || item.seriesId === activeSeries) && item.month === activeMonth)
    .sort((a, b) => a.publish.localeCompare(b.publish));
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
        <div class="week-topics"><button class="topic-link" data-edit-topic="${item.id}">${item.subtitle}<small>${item.status} · ${item.okrKey}</small></button></div>
        <div class="platform-chips">${[...new Set(topicPlatforms(item))].map((chip) => `<span class="chip">${chip}</span>`).join("")}</div>
      </article>
    `;
  }).join("");
}

function renderContentTable(keyword = "") {
  const lower = keyword.trim().toLowerCase();
  const rows = data.topics.filter((item) => {
    const searchable = [item.title, item.subtitle, item.owner, item.status, item.okrKey, item.postUrl, topicPlatforms(item).join(" ")].join(" ").toLowerCase();
    return searchable.includes(lower);
  });
  $("#contentRows").innerHTML = rows.map((item) => `
    <tr>
      <td class="content-title"><strong>${item.title}</strong><span>${getSeries(item.seriesId)?.name ?? ""} · ${item.subtitle}</span></td>
      <td>${[...new Set(topicPlatforms(item))].join(" / ")}</td>
      <td><span class="status">${item.status}</span></td>
      <td>${item.owner}</td>
      <td>${item.okrKey}</td>
      <td>${item.postUrl ? `<a href="${item.postUrl}" target="_blank" rel="noreferrer">${platformFromUrl(item.postUrl)}</a>` : "未上传"}</td>
      <td><button class="ghost-button table-action" data-edit-topic="${item.id}">编辑</button></td>
    </tr>
  `).join("");
}

function okrScore(okr) {
  if (!okr.keyResults.length) return 0;
  const total = okr.keyResults.reduce((sum, kr) => sum + Math.min(Number(kr.actual || 0) / Math.max(Number(kr.target || 1), 1), 1), 0);
  return Math.round((total / okr.keyResults.length) * 100);
}

function renderOkrMonths() {
  const months = [...new Set(data.okrs.map((item) => item.month).concat(data.topics.map((item) => item.month)))].sort();
  if (!months.length) months.push(activeMonth || defaultData.activeMonth);
  if (!months.includes(activeMonth)) activeMonth = months[0];
  $("#okrMonthTabs").innerHTML = months.map((month) => `<button class="${month === activeMonth ? "active" : ""}" data-okr-month="${month}">${monthLabel(month)}</button>`).join("");
}

function renderOkr() {
  const monthOkrs = data.okrs.filter((item) => item.month === activeMonth);
  const monthTopics = data.topics.filter((item) => item.month === activeMonth);
  $("#okrGrid").innerHTML = monthOkrs.map((okr) => {
    const score = okrScore(okr);
    const ownerTopics = monthTopics.filter((item) => item.owner === okr.owner);
    return `
      <article class="okr-card">
        <div class="okr-head">
          <div><h3>${okr.owner}</h3><span>${getOwner(okr.owner)?.title ?? "成员"}</span></div>
          <strong>${score}%</strong>
        </div>
        <p><b>O：</b>${okr.objective}</p>
        <div class="okr-bar"><i style="width:${score}%"></i></div>
        <div class="kr-list">
          ${okr.keyResults.map((kr) => `<div><span>${kr.name}</span><strong>${kr.actual}/${kr.target}${kr.unit}</strong></div>`).join("")}
        </div>
        <div class="okr-stats">
          <span>本月主题 ${ownerTopics.length}</span>
          <span>已传链接 ${ownerTopics.filter((item) => item.postUrl).length}</span>
          <span>可发布 ${ownerTopics.filter((item) => item.status === "可发布").length}</span>
        </div>
        <button class="ghost-button table-action" data-edit-okr="${okr.id}">编辑月度 OKR</button>
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
  const monthTopics = data.topics.filter((item) => item.month === activeMonth);
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
        <div class="post-row editable-row" data-edit-topic="${item.id}">
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
  $("#systemEditor").innerHTML = `
    <div class="system-edit-grid">
      <button class="ghost-button" data-new-topic="1">新增帖子主题</button>
      <button class="ghost-button" data-new-okr="1">新增月度 OKR</button>
      <button class="ghost-button" data-new-owner="1">新增成员</button>
      <button class="ghost-button" data-new-series="1">新增系列</button>
      <button class="ghost-button" data-new-bundle="1">新增平台组合</button>
      <button class="ghost-button" data-export-data="1">导出全部数据</button>
      <button class="ghost-button" data-import-data="1">导入/替换数据</button>
      <button class="ghost-button" data-reset-data="1">恢复默认数据</button>
    </div>
    <div class="system-edit-list">
      <section><h4>系列</h4>${data.series.map((item) => `<button data-edit-series="${item.id}">${item.code} · ${item.name}</button>`).join("")}</section>
      <section><h4>平台组合</h4>${data.platformBundles.map((item) => `<button data-edit-bundle="${item.id}">${item.name}</button>`).join("")}</section>
      <section><h4>成员</h4>${data.owners.map((item) => `<button data-edit-owner="${item.name}">${item.name} · ${item.title}</button>`).join("")}</section>
    </div>
  `;
}

function openTopicEditor(id) {
  const item = data.topics.find((topicItem) => topicItem.id === id) ?? topic("", "", data.series[0]?.id ?? "", data.owners[0]?.name ?? "", activeMonth, "脚本待定", "", [], [], "", "", "", "");
  openEditor({
    scope: "帖子主题",
    title: item.id ? `编辑：${item.title}` : "新增帖子主题",
    hint: "帖子主题、负责人、状态、脚本、时间、链接和数据都可以修改。",
    fields: [
      textField("title", "主题标题", item.title),
      textField("subtitle", "主题说明", item.subtitle),
      selectField("seriesId", "所属系列", item.seriesId, data.series.map((seriesItem) => [seriesItem.id, seriesItem.name])),
      selectField("owner", "负责人", item.owner, data.owners.map((owner) => [owner.name, owner.name])),
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
  const item = getOwner(name) ?? { name: "", title: "" };
  openEditor({
    scope: "成员配置",
    title: item.name ? `编辑成员：${item.name}` : "新增成员",
    hint: "成员用于分配帖子负责人和月度 OKR 绩效看板。",
    fields: [textField("name", "成员姓名", item.name), textField("title", "岗位/备注", item.title)],
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
      saveAndRefresh();
    } : null,
    onSave(values) {
      if (!item.name) {
        data.owners.push(values);
      } else {
        const oldName = item.name;
        Object.assign(item, values);
        data.topics.forEach((topicItem) => {
          if (topicItem.owner === oldName) topicItem.owner = values.name;
        });
        data.okrs.forEach((okr) => {
          if (okr.owner === oldName) okr.owner = values.name;
        });
      }
      saveAndRefresh();
    },
  });
}

function openOkrEditor(id) {
  const exists = data.okrs.some((okr) => okr.id === id);
  const item = data.okrs.find((okr) => okr.id === id) ?? monthlyOkr(activeMonth, data.owners[0]?.name ?? "", "新的月度 Objective", [["关键结果", 1, 0, ""]]);
  openEditor({
    scope: "月度 OKR",
    title: exists ? `编辑：${item.owner} ${monthLabel(item.month)}` : "新增月度 OKR",
    hint: "OKR 是月度绩效管理工具：O 写方向，KR 写可量化结果，完成率由实际值/目标值计算。",
    fields: [
      monthField("month", "月份", item.month),
      selectField("owner", "成员", item.owner, data.owners.map((owner) => [owner.name, owner.name])),
      textareaField("objective", "Objective", item.objective),
      textareaField("keyResultsText", "Key Results，每行：名称 | 目标 | 实际 | 单位", item.keyResults.map((kr) => `${kr.name} | ${kr.target} | ${kr.actual} | ${kr.unit}`).join("\n")),
    ],
    deleteLabel: exists ? "删除月度 OKR" : "",
    onDelete: exists ? () => {
      data.okrs = data.okrs.filter((okr) => okr.id !== item.id);
      saveAndRefresh();
    } : null,
    onSave(values) {
      const next = {
        ...item,
        month: values.month,
        owner: values.owner,
        objective: values.objective,
        id: item.id || idFrom(`${values.month}-${values.owner}-${Date.now()}`),
        keyResults: values.keyResultsText.split("\n").map((line) => {
          const [name, target, actual, unit] = line.split("|").map((part) => part.trim());
          return { name, target: Number(target || 0), actual: Number(actual || 0), unit: unit || "" };
        }).filter((kr) => kr.name),
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
  ["owners", "platformBundles", "series", "topics", "okrs"].forEach((key) => {
    if (!Array.isArray(next[key])) throw new Error(`缺少 ${key} 列表`);
  });
  if (!next.owners.length) throw new Error("至少需要一个成员");
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
  $("#editForm").onsubmit = (event) => {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(event.currentTarget).entries());
    const shouldClose = config.onSave(values);
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
}

function textField(name, label, value = "") {
  return `<label><span>${label}</span><input name="${name}" value="${escapeAttr(value)}" /></label>`;
}

function numberField(name, label, value = 0) {
  return `<label><span>${label}</span><input type="number" step="0.1" name="${name}" value="${escapeAttr(value)}" /></label>`;
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
  $$(".nav-item").forEach((button) => button.classList.toggle("active", button.dataset.view === viewId));
  $$(".view").forEach((view) => view.classList.toggle("active", view.id === viewId));
}

function bindEvents() {
  $("#loginForm").addEventListener("submit", handleLogin);
  $("#logoutButton").addEventListener("click", () => {
    sessionStorage.removeItem(SESSION_KEY);
    showLogin();
  });
  $("#newTopicButton").addEventListener("click", () => openTopicEditor());
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
  $("#exportButton").addEventListener("click", downloadSchedule);
  $("#simulateButton").addEventListener("click", () => {
    data.topics.filter((item) => item.month === activeMonth).forEach((item) => {
      if (item.postUrl) item.views = Math.round((Number(item.views) || dataForTopic(item).views) * 1.08);
    });
    saveAndRefresh();
  });
  document.addEventListener("click", (event) => {
    const target = event.target.closest("[data-edit-topic],[data-edit-series],[data-edit-bundle],[data-edit-owner],[data-edit-okr],[data-okr-month],[data-new-topic],[data-new-okr],[data-new-owner],[data-new-series],[data-new-bundle],[data-export-data],[data-import-data],[data-reset-data]");
    if (!target) return;
    if (target.dataset.editTopic) openTopicEditor(target.dataset.editTopic);
    if (target.dataset.editSeries) openSeriesEditor(target.dataset.editSeries);
    if (target.dataset.editBundle) openBundleEditor(target.dataset.editBundle);
    if (target.dataset.editOwner) openOwnerEditor(target.dataset.editOwner);
    if (target.dataset.editOkr) openOkrEditor(target.dataset.editOkr);
    if (target.dataset.okrMonth) {
      activeMonth = target.dataset.okrMonth;
      saveAndRefresh();
    }
    if (target.dataset.newTopic) openTopicEditor();
    if (target.dataset.newOkr) openOkrEditor();
    if (target.dataset.newOwner) openOwnerEditor();
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
  renderAll();
  bindEvents();
  if (sessionStorage.getItem(SESSION_KEY)) showApp();
  else showLogin();
}

init();
