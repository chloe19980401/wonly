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

const owners = {
  Mia: { role: "内容策划", objective: "建立 Wonly 智能安防门的专业信任感", targetTopics: 4, targetPosts: 9 },
  Leo: { role: "短视频剪辑", objective: "提升短视频完播率和复用效率", targetTopics: 3, targetPosts: 8 },
  Anna: { role: "生活方式运营", objective: "验证女性生活场景内容转化", targetTopics: 4, targetPosts: 10 },
  Chris: { role: "工厂内容运营", objective: "扩大工厂实力和 B2B 背书曝光", targetTopics: 4, targetPosts: 9 },
  Jay: { role: "测试内容运营", objective: "打造破坏测试系列记忆点", targetTopics: 4, targetPosts: 8 },
};

const series = [
  {
    id: "s1",
    code: "S1",
    name: "只看王力门",
    position: "品牌实力展示",
    audience: "B2B + C端",
    main: "TikTok + LinkedIn",
    episodes: 8,
    output: 22,
    color: "#0f8f61",
    bundles: ["shorts-core", "b2b-proof", "data-thread"],
    topics: [
      topic("Robot Door", "机器人防盗门", "Mia", "待审核", "KR1 专业信任内容", ["shorts-core", "b2b-proof"], ["机器人门开合特写", "工厂自动化产线 B-roll", "竞品普通门对比画面"], "痛点 Hook：传统门不够智能；主体：机器人门感应、开合、防护演示；CTA：Follow for Wonly-only security tech.", "7月第1周 · 周一上午", "7月第1周 · 周三 TikTok/Reels/Shorts，周五 LinkedIn"),
      topic("6-Meter Sensing", "遥感识别", "Leo", "剪辑中", "KR2 短视频完播率", ["shorts-core"], ["6 米距离走近门锁", "传感器 UI 动效参考", "夜间归家场景"], "前 3 秒展示远距离感应开门；主体拆解识别距离和安全逻辑；结尾提问：Would your door recognize you first?", "7月第1周 · 周二下午", "7月第1周 · 周五 TikTok/Reels/Shorts"),
      topic("360 Minutes", "超 C 级锁芯", "Mia", "脚本待定", "KR1 专业信任内容", ["b2b-proof", "data-thread"], ["锁芯微距", "测试计时器", "标准证书/参数卡"], "用 360 分钟防破坏测试做核心证据，短视频出结果，LinkedIn 写技术解释。", "8月第1周 · 周一", "8月第1周 · 周三短视频，周五 LinkedIn"),
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
      topic("The Morning Escape", "早高峰出门", "Anna", "可发布", "KR3 女性场景转化", ["shorts-core", "visual-social"], ["女主拿咖啡出门", "包包/穿搭定格", "门锁自动识别镜头"], "G 角色旁白开场；主体展示不用掏钥匙的出门体验；结尾：Spotted: someone who never looks for keys.", "7月第2周 · 周一上午", "7月第2周 · 周二 TikTok/Reels，周三 Grid，周五 Facebook"),
      topic("The Hands-Free Hustle", "双手满载回家", "Anna", "脚本待定", "KR3 女性场景转化", ["shorts-core", "visual-social"], ["购物袋/快递箱", "门前无手开门", "温暖室内灯光"], "前 2 秒制造手忙脚乱；主体让门锁自动完成识别；CTA：Would your door do this?", "7月第2周 · 周三下午", "7月第2周 · 周五 TikTok/Reels/Shorts，周六 Carousel"),
      topic("The Midnight Return", "午夜安全归家", "Anna", "待审核", "KR3 女性场景转化", ["shorts-core"], ["夜间楼道", "低光人脸识别", "安全提示 UI"], "用悬念开场，强调夜间识别和安全感，最后用 G 角色金句收尾。", "8月第2周 · 周一晚", "8月第2周 · 周三 TikTok/Reels/Shorts"),
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
      topic("The Scale", "工厂规模展示", "Chris", "拍摄中", "KR4 B2B 信任背书", ["shorts-core", "visual-social"], ["航拍厂区", "产线广角", "仓储和发货画面"], "前 3 秒航拍冲击；主体展示规模、产线、效率；CTA：Comment for factory tour.", "7月第3周 · 周一全天", "7月第3周 · 周四 TikTok/Reels，周五 Carousel"),
      topic("5G Factory", "5G 智慧工厂", "Chris", "待审核", "KR4 B2B 信任背书", ["shorts-core", "b2b-proof"], ["数字看板", "AGV/机械臂", "质检数据屏"], "从数字化看板切入，展示 5G 工厂如何提高一致性和交付稳定性。", "7月第3周 · 周三", "7月第3周 · 周五 TikTok/Reels，次周 LinkedIn"),
      topic("Born From Steel", "从钢材到成品", "Chris", "脚本待定", "KR4 B2B 信任背书", ["shorts-core", "visual-social"], ["钢板切割", "焊花慢动作", "表面处理细节"], "用材料变化做叙事线，从钢材进入产线到成品门下线。", "8月第3周 · 周二", "8月第3周 · 周四 TikTok/Reels，周五 Grid"),
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
      topic("Crowbar vs Wonly", "撬棍测试", "Jay", "可发布", "KR5 测试内容破圈", ["shorts-core", "data-thread"], ["撬棍近景", "门体受力慢动作", "测试前后对比"], "前 2 秒直接撬门；5 秒前隐藏结果；主体展示抗破坏过程；置顶评论：Which tool should we test next?", "7月第4周 · 周一上午", "7月第4周 · 周二 TikTok/Shorts，周五极速版"),
      topic("Axe vs Door", "斧头冲击", "Jay", "待分镜", "KR5 测试内容破圈", ["shorts-core"], ["斧头冲击特写", "慢动作碎屑", "门体结果定格"], "标准版讲清测试条件；极速版只保留冲击和结果，测试完播率差异。", "7月第4周 · 周三", "7月第4周 · 周五 TikTok/Shorts"),
      topic("Tools vs Wonly Door", "撬棍 + 斧头 + 电钻合集", "Jay", "脚本待定", "KR5 测试内容破圈", ["b2b-proof"], ["前三集测试素材", "工具参数卡", "结论对比表"], "把 3 个工具测试合成 6 分钟 YouTube 长视频，加入测试条件、结果和购买信任点。", "9月第4周 · 素材整合", "9月第4周 · YouTube Long + Facebook"),
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
  ["W8", "9月第4周", "s4", "合集", ["Tools vs Wonly Door"]],
];

const metrics = [
  ["播放/展示", 128400, 78],
  ["平均完播率", 41, 62],
  ["互动率", 7.8, 74],
  ["粉丝增长", 1260, 66],
];

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
const POST_LINKS_KEY = "wonly-post-links";

let activeMonth = "all";
let activeSeries = "all";
let postLinks = loadPostLinks();

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function topic(title, subtitle, owner, status, okr, bundles, references, script, shoot, publish) {
  return { title, subtitle, owner, status, okr, bundles, references, script, shoot, publish };
}

function allTopics() {
  return series.flatMap((item) => item.topics.map((topicItem, index) => ({ ...topicItem, seriesId: item.id, seriesName: item.name, topicIndex: index })));
}

function getSeries(id) {
  return series.find((item) => item.id === id);
}

function getBundle(id) {
  return platformBundles.find((item) => item.id === id);
}

function topicKey(topicTitle) {
  return topicTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function topicPlatforms(topicItem) {
  return topicItem.bundles.flatMap((id) => getBundle(id)?.platforms ?? []);
}

function loadPostLinks() {
  try {
    return JSON.parse(localStorage.getItem(POST_LINKS_KEY) || "{}");
  } catch {
    return {};
  }
}

function savePostLinks() {
  localStorage.setItem(POST_LINKS_KEY, JSON.stringify(postLinks));
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
  $("#usernameInput").focus();
}

async function handleLogin(event) {
  event.preventDefault();
  $("#loginError").textContent = "";
  const username = $("#usernameInput").value.trim();
  const passwordHash = await sha256($("#passwordInput").value);

  if (username === ADMIN_USERNAME && passwordHash === ADMIN_PASSWORD_HASH) {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify({ user: ADMIN_USERNAME, role: "admin", signedInAt: Date.now() }));
    localStorage.removeItem(SESSION_KEY);
    showApp();
    return;
  }

  $("#loginError").textContent = "用户名或密码不正确";
}

function renderSummaryCounts() {
  $("#topicCount").textContent = String(allTopics().length);
  $("#ownerCount").textContent = String(Object.keys(owners).length);
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
          <div><strong>${item.topics.length}</strong><span>主题</span></div>
          <div><strong>${item.output}</strong><span>产出</span></div>
          <div><strong>${item.bundles.length}</strong><span>平台包</span></div>
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
    ["短视频通用包", "YouTube Shorts + TikTok + Instagram Reels 共用核心剪辑", "周二"],
    ["主题负责人", "每个主题必须绑定负责人，并计入个人 OKR", "持续"],
    ["帖子链接", "发布后在主题库录入链接，进入数据采集队列", "发布后"],
    ["数据看板", "跟踪播放、完播、互动、转粉和 Go/No-Go 判断", "每日"],
  ];
  $("#taskList").innerHTML = tasks
    .map(
      (taskItem, index) => `
      <div class="task-item">
        <span class="checkbox">${index === 0 ? "✓" : ""}</span>
        <div><strong>${taskItem[0]}</strong><span>${taskItem[1]}</span></div>
        <span class="tag">${taskItem[2]}</span>
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
        <span class="tag">${bundle.platforms.length} 平台</span>
      </div>
    `,
    )
    .join("");
}

function renderFilters() {
  $("#seriesFilter").innerHTML += series.map((item) => `<option value="${item.id}">${item.name}</option>`).join("");
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
      const topics = week[4].map((title) => allTopics().find((topicItem) => topicItem.title === title)).filter(Boolean);
      const chips = [...new Set(topics.flatMap((topicItem) => topicItem.bundles.map((id) => getBundle(id)?.name).filter(Boolean)))];
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
            ${topics.map((topicItem) => `<button class="topic-link" data-topic-title="${topicItem.title}">${topicItem.title}<small>${topicItem.owner} · ${topicItem.okr}</small></button>`).join("")}
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
    const searchable = [item.title, item.subtitle, item.seriesName, item.owner, item.okr, topicPlatforms(item).join(" ")].join(" ").toLowerCase();
    return searchable.includes(lower);
  });

  $("#contentRows").innerHTML = rows
    .map((item) => {
      const key = topicKey(item.title);
      const value = postLinks[key]?.url ?? "";
      return `
      <tr>
        <td class="content-title"><strong>${item.title}</strong><span>${item.seriesName} · ${item.subtitle}</span></td>
        <td>${[...new Set(topicPlatforms(item))].join(" / ")}</td>
        <td><span class="status ${statusClass[item.status] ?? "todo"}">${item.status}</span></td>
        <td><strong>${item.owner}</strong><span class="muted">${owners[item.owner]?.role ?? ""}</span></td>
        <td>${item.okr}</td>
        <td>
          <div class="link-cell">
            <input data-link-topic="${item.title}" value="${value}" placeholder="粘贴帖子链接" />
            <button class="ghost-button save-link" data-save-topic="${item.title}">保存</button>
          </div>
        </td>
        <td><button class="ghost-button table-action" data-topic-title="${item.title}">查看</button></td>
      </tr>
    `;
    })
    .join("");
}

function ownerStats() {
  return Object.entries(owners).map(([name, owner]) => {
    const assigned = allTopics().filter((item) => item.owner === name);
    const links = assigned.filter((item) => postLinks[topicKey(item.title)]?.url);
    const ready = assigned.filter((item) => item.status === "可发布").length;
    const completion = Math.min(Math.round(((links.length + ready) / Math.max(owner.targetTopics, 1)) * 50), 100);
    return { name, ...owner, assigned, links, ready, completion };
  });
}

function renderOkr() {
  $("#okrGrid").innerHTML = ownerStats()
    .map(
      (owner) => `
      <article class="okr-card">
        <div class="okr-head">
          <div><h3>${owner.name}</h3><span>${owner.role}</span></div>
          <strong>${owner.completion}%</strong>
        </div>
        <p>${owner.objective}</p>
        <div class="okr-bar"><i style="width:${owner.completion}%"></i></div>
        <div class="okr-stats">
          <span>主题 ${owner.assigned.length}/${owner.targetTopics}</span>
          <span>已传链接 ${owner.links.length}/${owner.targetPosts}</span>
          <span>可发布 ${owner.ready}</span>
        </div>
        <div class="okr-topics">
          ${owner.assigned.map((item) => `<button data-topic-title="${item.title}">${item.title}</button>`).join("")}
        </div>
      </article>
    `,
    )
    .join("");
}

function dataForTopic(topicItem) {
  const hasLink = Boolean(postLinks[topicKey(topicItem.title)]?.url);
  const seed = topicItem.title.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return {
    views: hasLink ? seed * 37 : 0,
    completion: hasLink ? 28 + (seed % 34) : 0,
    engagement: hasLink ? Number((2.5 + (seed % 60) / 10).toFixed(1)) : 0,
    followers: hasLink ? seed % 86 : 0,
  };
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

  const rows = allTopics().map((item) => {
    const key = topicKey(item.title);
    const link = postLinks[key]?.url;
    const data = dataForTopic(item);
    const decision = !link ? "待链接" : data.completion >= 45 && data.engagement >= 6 ? "Go" : data.completion >= 32 ? "优化重测" : "No-Go";
    return `
      <div class="post-row">
        <div><strong>${item.title}</strong><span>${item.owner} · ${item.seriesName}</span></div>
        <span>${link ? platformFromUrl(link) : "未上传"}</span>
        <span>${data.views ? data.views.toLocaleString("zh-CN") : "-"}</span>
        <span>${data.completion ? `${data.completion}%` : "-"}</span>
        <span>${data.engagement ? `${data.engagement}%` : "-"}</span>
        <span class="status ${decision === "Go" ? "go" : decision === "No-Go" ? "risk" : "review"}">${decision}</span>
      </div>
    `;
  });
  $("#postBoard").innerHTML = `
    <div class="post-row post-head"><span>主题</span><span>平台</span><span>播放</span><span>完播</span><span>互动</span><span>判断</span></div>
    ${rows.join("")}
  `;
}

function platformFromUrl(url) {
  if (/youtube|youtu\.be/i.test(url)) return "YouTube";
  if (/tiktok/i.test(url)) return "TikTok";
  if (/instagram/i.test(url)) return "Instagram";
  if (/facebook|fb\.watch/i.test(url)) return "Facebook";
  if (/linkedin/i.test(url)) return "LinkedIn";
  return "待识别";
}

function openTopicDetail(topicTitle) {
  const item = allTopics().find((topicItem) => topicItem.title === topicTitle);
  if (!item) return;
  const key = topicKey(item.title);
  const link = postLinks[key]?.url;
  const data = dataForTopic(item);
  $("#detailSeries").textContent = `${item.seriesName} · ${item.status}`;
  $("#detailTitle").textContent = item.title;
  $("#detailSubtitle").textContent = `${item.subtitle} · 负责人 ${item.owner}`;
  $("#detailPlatforms").innerHTML = [...new Set(topicPlatforms(item))].map((platform) => `<span class="chip">${platform}</span>`).join("");
  $("#detailOkr").innerHTML = `<div><strong>${item.okr}</strong><span>${owners[item.owner]?.objective ?? ""}</span></div>`;
  $("#detailReferences").innerHTML = item.references.map((reference) => `<li>${reference}</li>`).join("");
  $("#detailLinks").innerHTML = link
    ? `<div><strong>${platformFromUrl(link)}</strong><span><a href="${link}" target="_blank" rel="noreferrer">${link}</a></span></div><div><strong>采集数据</strong><span>播放 ${data.views.toLocaleString("zh-CN")} · 完播 ${data.completion}% · 互动 ${data.engagement}% · 转粉 ${data.followers}</span></div>`
    : `<div><strong>待上传</strong><span>在主题库粘贴帖子链接后进入看板。</span></div>`;
  $("#detailScript").textContent = item.script;
  $("#detailTimes").innerHTML = `<div><strong>预计拍摄</strong><span>${item.shoot}</span></div><div><strong>预计发布</strong><span>${item.publish}</span></div>`;
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
  const header = "周次,月份,系列,集数,主题,负责人,OKR\n";
  const csv = schedule
    .flatMap((week) => week[4].map((title) => {
      const item = allTopics().find((topicItem) => topicItem.title === title);
      return [week[0], week[1], getSeries(week[2]).name, week[3], title, item?.owner ?? "", item?.okr ?? ""].map((cell) => `"${cell}"`).join(",");
    }))
    .join("\n");
  const blob = new Blob([header + csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "wonly-social-okr-schedule.csv";
  link.click();
  URL.revokeObjectURL(url);
}

function saveTopicLink(topicTitle) {
  const input = document.querySelector(`[data-link-topic="${CSS.escape(topicTitle)}"]`);
  const url = input?.value.trim();
  const key = topicKey(topicTitle);
  if (url) {
    postLinks[key] = { url, savedAt: Date.now() };
  } else {
    delete postLinks[key];
  }
  savePostLinks();
  renderContentTable($("#contentSearch").value);
  renderOkr();
  renderAnalytics();
}

function bindAuth() {
  localStorage.removeItem(SESSION_KEY);
  $("#loginForm").addEventListener("submit", handleLogin);
  $("#logoutButton").addEventListener("click", () => {
    sessionStorage.removeItem(SESSION_KEY);
    showLogin();
  });
  if (sessionStorage.getItem(SESSION_KEY)) showApp();
  else showLogin();
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
    const saveButton = event.target.closest("[data-save-topic]");
    if (saveButton) saveTopicLink(saveButton.dataset.saveTopic);
  });
  $("#closeDetailButton").addEventListener("click", closeTopicDetail);
  $("#detailModal").addEventListener("click", (event) => {
    if (event.target.id === "detailModal") closeTopicDetail();
  });
}

function init() {
  renderSummaryCounts();
  renderSeries();
  renderBundles();
  renderTasks();
  renderPlatforms();
  renderFilters();
  renderCalendar();
  renderContentTable();
  renderOkr();
  renderAnalytics();
  bindEvents();
  bindAuth();
}

init();
