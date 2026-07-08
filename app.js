const platformBundles = [
  {
    id: "shorts-core",
    name: "鐭棰戦€氱敤鍖?,
    platforms: ["YouTube Shorts", "TikTok", "Instagram Reels"],
    format: "9:16 绔栧睆锛?5-45s锛岃嫳鏂囧瓧骞?,
    usage: "鍚屼竴鏉℃牳蹇冭棰戦€傞厤涓夌锛岀粺涓€ Hook 鍜?CTA锛屽彧寰皟灏侀潰涓庢爣棰樸€?,
  },
  {
    id: "visual-social",
    name: "瑙嗚绀句氦鍖?,
    platforms: ["Instagram Grid", "Instagram Carousel", "Facebook"],
    format: "1:1 / 4:5 鍥剧墖銆佺煭瑙嗛杞彂銆佹湰鍦板寲鏂囨",
    usage: "閫傚悎鐢熸椿鏂瑰紡銆佸伐鍘傜編瀛︺€佷骇鍝佺粏鑺傦紝鎶婅棰戠礌鏉愭媶鎴愬浘鏂囨晠浜嬨€?,
  },
  {
    id: "b2b-proof",
    name: "B2B 鑳屼功鍖?,
    platforms: ["LinkedIn", "YouTube Long", "Facebook"],
    format: "闀胯棰戙€佹枃绔犮€佸伐绋嬫渚嬪浘鏂?,
    usage: "閫傚悎宸ュ巶瀹炲姏銆佹妧鏈弬鏁般€佸伐绋嬫渚嬪拰鍝佺墝鍙俊搴﹀唴瀹广€?,
  },
  {
    id: "data-thread",
    name: "瑙傜偣浼犳挱鍖?,
    platforms: ["LinkedIn Post", "Facebook Quote Card"],
    format: "鏁版嵁鐐广€佸姣斿浘銆侀噾鍙ュ崱",
    usage: "鎶婃祴璇曠粨鏋滃拰瀵规瘮鏁版嵁鎷嗘垚杩炵画瑙傜偣锛岄€傚悎澶嶇洏鍜屼紶鎾€?,
  },
];

const owners = {
  Mia: { role: "鍐呭绛栧垝", objective: "寤虹珛 Wonly 鏅鸿兘瀹夐槻闂ㄧ殑涓撲笟淇′换鎰?, targetTopics: 4, targetPosts: 9 },
  Leo: { role: "鐭棰戝壀杈?, objective: "鎻愬崌鐭棰戝畬鎾巼鍜屽鐢ㄦ晥鐜?, targetTopics: 3, targetPosts: 8 },
  Anna: { role: "鐢熸椿鏂瑰紡杩愯惀", objective: "楠岃瘉濂虫€х敓娲诲満鏅唴瀹硅浆鍖?, targetTopics: 4, targetPosts: 10 },
  Chris: { role: "宸ュ巶鍐呭杩愯惀", objective: "鎵╁ぇ宸ュ巶瀹炲姏鍜?B2B 鑳屼功鏇濆厜", targetTopics: 4, targetPosts: 9 },
  Jay: { role: "娴嬭瘯鍐呭杩愯惀", objective: "鎵撻€犵牬鍧忔祴璇曠郴鍒楄蹇嗙偣", targetTopics: 4, targetPosts: 8 },
};

const series = [
  {
    id: "s1",
    code: "S1",
    name: "鍙湅鐜嬪姏闂?,
    position: "鍝佺墝瀹炲姏灞曠ず",
    audience: "B2B + C绔?,
    main: "TikTok + LinkedIn",
    episodes: 8,
    output: 22,
    color: "#0f8f61",
    bundles: ["shorts-core", "b2b-proof", "data-thread"],
    topics: [
      topic("Robot Door", "鏈哄櫒浜洪槻鐩楅棬", "Mia", "寰呭鏍?, "KR1 涓撲笟淇′换鍐呭", ["shorts-core", "b2b-proof"], ["鏈哄櫒浜洪棬寮€鍚堢壒鍐?, "宸ュ巶鑷姩鍖栦骇绾?B-roll", "绔炲搧鏅€氶棬瀵规瘮鐢婚潰"], "鐥涚偣 Hook锛氫紶缁熼棬涓嶅鏅鸿兘锛涗富浣擄細鏈哄櫒浜洪棬鎰熷簲銆佸紑鍚堛€侀槻鎶ゆ紨绀猴紱CTA锛欶ollow for Wonly-only security tech.", "7鏈堢1鍛?路 鍛ㄤ竴涓婂崍", "7鏈堢1鍛?路 鍛ㄤ笁 TikTok/Reels/Shorts锛屽懆浜?LinkedIn"),
      topic("6-Meter Sensing", "閬ユ劅璇嗗埆", "Leo", "鍓緫涓?, "KR2 鐭棰戝畬鎾巼", ["shorts-core"], ["6 绫宠窛绂昏蛋杩戦棬閿?, "浼犳劅鍣?UI 鍔ㄦ晥鍙傝€?, "澶滈棿褰掑鍦烘櫙"], "鍓?3 绉掑睍绀鸿繙璺濈鎰熷簲寮€闂紱涓讳綋鎷嗚В璇嗗埆璺濈鍜屽畨鍏ㄩ€昏緫锛涚粨灏炬彁闂細Would your door recognize you first?", "7鏈堢1鍛?路 鍛ㄤ簩涓嬪崍", "7鏈堢1鍛?路 鍛ㄤ簲 TikTok/Reels/Shorts"),
      topic("360 Minutes", "瓒?C 绾ч攣鑺?, "Mia", "鑴氭湰寰呭畾", "KR1 涓撲笟淇′换鍐呭", ["b2b-proof", "data-thread"], ["閿佽姱寰窛", "娴嬭瘯璁℃椂鍣?, "鏍囧噯璇佷功/鍙傛暟鍗?], "鐢?360 鍒嗛挓闃茬牬鍧忔祴璇曞仛鏍稿績璇佹嵁锛岀煭瑙嗛鍑虹粨鏋滐紝LinkedIn 鍐欐妧鏈В閲娿€?, "8鏈堢1鍛?路 鍛ㄤ竴", "8鏈堢1鍛?路 鍛ㄤ笁鐭棰戯紝鍛ㄤ簲 LinkedIn"),
    ],
  },
  {
    id: "s2",
    code: "S2",
    name: "Gossip Girl",
    position: "鍦烘櫙鍖栫敓娲绘柟寮?,
    audience: "C绔コ鎬?,
    main: "TikTok + Instagram",
    episodes: 10,
    output: 26,
    color: "#b64f78",
    bundles: ["shorts-core", "visual-social"],
    topics: [
      topic("The Morning Escape", "鏃╅珮宄板嚭闂?, "Anna", "鍙彂甯?, "KR3 濂虫€у満鏅浆鍖?, ["shorts-core", "visual-social"], ["濂充富鎷垮挅鍟″嚭闂?, "鍖呭寘/绌挎惌瀹氭牸", "闂ㄩ攣鑷姩璇嗗埆闀滃ご"], "G 瑙掕壊鏃佺櫧寮€鍦猴紱涓讳綋灞曠ず涓嶇敤鎺忛挜鍖欑殑鍑洪棬浣撻獙锛涚粨灏撅細Spotted: someone who never looks for keys.", "7鏈堢2鍛?路 鍛ㄤ竴涓婂崍", "7鏈堢2鍛?路 鍛ㄤ簩 TikTok/Reels锛屽懆涓?Grid锛屽懆浜?Facebook"),
      topic("The Hands-Free Hustle", "鍙屾墜婊¤浇鍥炲", "Anna", "鑴氭湰寰呭畾", "KR3 濂虫€у満鏅浆鍖?, ["shorts-core", "visual-social"], ["璐墿琚?蹇€掔", "闂ㄥ墠鏃犳墜寮€闂?, "娓╂殩瀹ゅ唴鐏厜"], "鍓?2 绉掑埗閫犳墜蹇欒剼涔憋紱涓讳綋璁╅棬閿佽嚜鍔ㄥ畬鎴愯瘑鍒紱CTA锛歐ould your door do this?", "7鏈堢2鍛?路 鍛ㄤ笁涓嬪崍", "7鏈堢2鍛?路 鍛ㄤ簲 TikTok/Reels/Shorts锛屽懆鍏?Carousel"),
      topic("The Midnight Return", "鍗堝瀹夊叏褰掑", "Anna", "寰呭鏍?, "KR3 濂虫€у満鏅浆鍖?, ["shorts-core"], ["澶滈棿妤奸亾", "浣庡厜浜鸿劯璇嗗埆", "瀹夊叏鎻愮ず UI"], "鐢ㄦ偓蹇靛紑鍦猴紝寮鸿皟澶滈棿璇嗗埆鍜屽畨鍏ㄦ劅锛屾渶鍚庣敤 G 瑙掕壊閲戝彞鏀跺熬銆?, "8鏈堢2鍛?路 鍛ㄤ竴鏅?, "8鏈堢2鍛?路 鍛ㄤ笁 TikTok/Reels/Shorts"),
    ],
  },
  {
    id: "s3",
    code: "S3",
    name: "瓒呯骇宸ュ巶",
    position: "宸ュ巶瀹炲姏鑳屼功",
    audience: "B2B + 缁忛攢鍟?,
    main: "TikTok + Instagram",
    episodes: 10,
    output: 15,
    color: "#087b86",
    bundles: ["shorts-core", "visual-social", "b2b-proof"],
    topics: [
      topic("The Scale", "宸ュ巶瑙勬ā灞曠ず", "Chris", "鎷嶆憚涓?, "KR4 B2B 淇′换鑳屼功", ["shorts-core", "visual-social"], ["鑸媿鍘傚尯", "浜х嚎骞胯", "浠撳偍鍜屽彂璐х敾闈?], "鍓?3 绉掕埅鎷嶅啿鍑伙紱涓讳綋灞曠ず瑙勬ā銆佷骇绾裤€佹晥鐜囷紱CTA锛欳omment for factory tour.", "7鏈堢3鍛?路 鍛ㄤ竴鍏ㄥぉ", "7鏈堢3鍛?路 鍛ㄥ洓 TikTok/Reels锛屽懆浜?Carousel"),
      topic("5G Factory", "5G 鏅烘収宸ュ巶", "Chris", "寰呭鏍?, "KR4 B2B 淇′换鑳屼功", ["shorts-core", "b2b-proof"], ["鏁板瓧鐪嬫澘", "AGV/鏈烘鑷?, "璐ㄦ鏁版嵁灞?], "浠庢暟瀛楀寲鐪嬫澘鍒囧叆锛屽睍绀?5G 宸ュ巶濡備綍鎻愰珮涓€鑷存€у拰浜や粯绋冲畾鎬с€?, "7鏈堢3鍛?路 鍛ㄤ笁", "7鏈堢3鍛?路 鍛ㄤ簲 TikTok/Reels锛屾鍛?LinkedIn"),
      topic("Born From Steel", "浠庨挗鏉愬埌鎴愬搧", "Chris", "鑴氭湰寰呭畾", "KR4 B2B 淇′换鑳屼功", ["shorts-core", "visual-social"], ["閽㈡澘鍒囧壊", "鐒婅姳鎱㈠姩浣?, "琛ㄩ潰澶勭悊缁嗚妭"], "鐢ㄦ潗鏂欏彉鍖栧仛鍙欎簨绾匡紝浠庨挗鏉愯繘鍏ヤ骇绾垮埌鎴愬搧闂ㄤ笅绾裤€?, "8鏈堢3鍛?路 鍛ㄤ簩", "8鏈堢3鍛?路 鍛ㄥ洓 TikTok/Reels锛屽懆浜?Grid"),
    ],
  },
  {
    id: "s4",
    code: "S4",
    name: "鏆村姏娴嬭瘯",
    position: "浜у搧鍔涙瀬闄愰獙璇?,
    audience: "C绔敺鎬?,
    main: "TikTok + YouTube",
    episodes: 12,
    output: 11,
    color: "#bb3d3d",
    bundles: ["shorts-core", "b2b-proof", "data-thread"],
    topics: [
      topic("Crowbar vs Wonly", "鎾娴嬭瘯", "Jay", "鍙彂甯?, "KR5 娴嬭瘯鍐呭鐮村湀", ["shorts-core", "data-thread"], ["鎾杩戞櫙", "闂ㄤ綋鍙楀姏鎱㈠姩浣?, "娴嬭瘯鍓嶅悗瀵规瘮"], "鍓?2 绉掔洿鎺ユ挰闂紱5 绉掑墠闅愯棌缁撴灉锛涗富浣撳睍绀烘姉鐮村潖杩囩▼锛涚疆椤惰瘎璁猴細Which tool should we test next?", "7鏈堢4鍛?路 鍛ㄤ竴涓婂崍", "7鏈堢4鍛?路 鍛ㄤ簩 TikTok/Shorts锛屽懆浜旀瀬閫熺増"),
      topic("Axe vs Door", "鏂уご鍐插嚮", "Jay", "寰呭垎闀?, "KR5 娴嬭瘯鍐呭鐮村湀", ["shorts-core"], ["鏂уご鍐插嚮鐗瑰啓", "鎱㈠姩浣滅灞?, "闂ㄤ綋缁撴灉瀹氭牸"], "鏍囧噯鐗堣娓呮祴璇曟潯浠讹紱鏋侀€熺増鍙繚鐣欏啿鍑诲拰缁撴灉锛屾祴璇曞畬鎾巼宸紓銆?, "7鏈堢4鍛?路 鍛ㄤ笁", "7鏈堢4鍛?路 鍛ㄤ簲 TikTok/Shorts"),
      topic("Tools vs Wonly Door", "鎾 + 鏂уご + 鐢甸捇鍚堥泦", "Jay", "鑴氭湰寰呭畾", "KR5 娴嬭瘯鍐呭鐮村湀", ["b2b-proof"], ["鍓嶄笁闆嗘祴璇曠礌鏉?, "宸ュ叿鍙傛暟鍗?, "缁撹瀵规瘮琛?], "鎶?3 涓伐鍏锋祴璇曞悎鎴?6 鍒嗛挓 YouTube 闀胯棰戯紝鍔犲叆娴嬭瘯鏉′欢銆佺粨鏋滃拰璐拱淇′换鐐广€?, "9鏈堢4鍛?路 绱犳潗鏁村悎", "9鏈堢4鍛?路 YouTube Long + Facebook"),
    ],
  },
];

const schedule = [
  ["W1", "7鏈堢1鍛?, "s1", "绗?-2闆?, ["Robot Door", "6-Meter Sensing"]],
  ["W2", "7鏈堢2鍛?, "s2", "绗?-2闆?, ["The Morning Escape", "The Hands-Free Hustle"]],
  ["W3", "7鏈堢3鍛?, "s3", "绗?-2闆?, ["The Scale", "5G Factory"]],
  ["W4", "7鏈堢4鍛?, "s4", "绗?-2闆?, ["Crowbar vs Wonly", "Axe vs Door"]],
  ["W5", "8鏈堢1鍛?, "s1", "绗?-4闆?, ["360 Minutes"]],
  ["W6", "8鏈堢2鍛?, "s2", "绗?-4闆?, ["The Midnight Return"]],
  ["W7", "8鏈堢3鍛?, "s3", "绗?-4闆?, ["Born From Steel"]],
  ["W8", "9鏈堢4鍛?, "s4", "鍚堥泦", ["Tools vs Wonly Door"]],
];

const metrics = [
  ["鎾斁/灞曠ず", 128400, 78],
  ["骞冲潎瀹屾挱鐜?, 41, 62],
  ["浜掑姩鐜?, 7.8, 74],
  ["绮変笣澧為暱", 1260, 66],
];

const statusClass = {
  寰呭鏍? "review",
  鍓緫涓? "progress",
  鍙彂甯? "ready",
  鑴氭湰寰呭畾: "todo",
  鎷嶆憚涓? "progress",
  寰呭垎闀? "todo",
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

  $("#loginError").textContent = "鐢ㄦ埛鍚嶆垨瀵嗙爜涓嶆纭?;
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
        <p>${item.position}锛岄潰鍚?${item.audience}銆?/p>
        <div class="mini-stats">
          <div><strong>${item.topics.length}</strong><span>涓婚</span></div>
          <div><strong>${item.output}</strong><span>浜у嚭</span></div>
          <div><strong>${item.bundles.length}</strong><span>骞冲彴鍖?/span></div>
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
    ["鐭棰戦€氱敤鍖?, "YouTube Shorts + TikTok + Instagram Reels 鍏辩敤鏍稿績鍓緫", "鍛ㄤ簩"],
    ["涓婚璐熻矗浜?, "姣忎釜涓婚蹇呴』缁戝畾璐熻矗浜猴紝骞惰鍏ヤ釜浜?OKR", "鎸佺画"],
    ["甯栧瓙閾炬帴", "鍙戝竷鍚庡湪涓婚搴撳綍鍏ラ摼鎺ワ紝杩涘叆鏁版嵁閲囬泦闃熷垪", "鍙戝竷鍚?],
    ["鏁版嵁鐪嬫澘", "璺熻釜鎾斁銆佸畬鎾€佷簰鍔ㄣ€佽浆绮夊拰 Go/No-Go 鍒ゆ柇", "姣忔棩"],
  ];
  $("#taskList").innerHTML = tasks
    .map(
      (taskItem, index) => `
      <div class="task-item">
        <span class="checkbox">${index === 0 ? "鉁? : ""}</span>
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
        <span class="tag">${bundle.platforms.length} 骞冲彴</span>
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
    const matchesMonth = activeMonth === "all" || week[1].startsWith(`${activeMonth}鏈坄);
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
              <h3>${week[0]} 路 ${item.name}</h3>
              <span>${week[1]} 路 ${week[3]}</span>
            </div>
            <span class="series-badge" style="background:${item.color}">${item.code}</span>
          </div>
          <div class="week-topics">
            ${topics.map((topicItem) => `<button class="topic-link" data-topic-title="${topicItem.title}">${topicItem.title}<small>${topicItem.owner} 路 ${topicItem.okr}</small></button>`).join("")}
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
        <td class="content-title"><strong>${item.title}</strong><span>${item.seriesName} 路 ${item.subtitle}</span></td>
        <td>${[...new Set(topicPlatforms(item))].join(" / ")}</td>
        <td><span class="status ${statusClass[item.status] ?? "todo"}">${item.status}</span></td>
        <td><strong>${item.owner}</strong><span class="muted">${owners[item.owner]?.role ?? ""}</span></td>
        <td>${item.okr}</td>
        <td>
          <div class="link-cell">
            <input data-link-topic="${item.title}" value="${value}" placeholder="绮樿创甯栧瓙閾炬帴" />
            <button class="ghost-button save-link" data-save-topic="${item.title}">淇濆瓨</button>
          </div>
        </td>
        <td><button class="ghost-button table-action" data-topic-title="${item.title}">鏌ョ湅</button></td>
      </tr>
    `;
    })
    .join("");
}

function ownerStats() {
  return Object.entries(owners).map(([name, owner]) => {
    const assigned = allTopics().filter((item) => item.owner === name);
    const links = assigned.filter((item) => postLinks[topicKey(item.title)]?.url);
    const ready = assigned.filter((item) => item.status === "鍙彂甯?).length;
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
          <span>涓婚 ${owner.assigned.length}/${owner.targetTopics}</span>
          <span>宸蹭紶閾炬帴 ${owner.links.length}/${owner.targetPosts}</span>
          <span>鍙彂甯?${owner.ready}</span>
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
      const suffix = metric[0].includes("鐜?) ? "%" : "";
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
    const decision = !link ? "寰呴摼鎺? : data.completion >= 45 && data.engagement >= 6 ? "Go" : data.completion >= 32 ? "浼樺寲閲嶆祴" : "No-Go";
    return `
      <div class="post-row">
        <div><strong>${item.title}</strong><span>${item.owner} 路 ${item.seriesName}</span></div>
        <span>${link ? platformFromUrl(link) : "鏈笂浼?}</span>
        <span>${data.views ? data.views.toLocaleString("zh-CN") : "-"}</span>
        <span>${data.completion ? `${data.completion}%` : "-"}</span>
        <span>${data.engagement ? `${data.engagement}%` : "-"}</span>
        <span class="status ${decision === "Go" ? "go" : decision === "No-Go" ? "risk" : "review"}">${decision}</span>
      </div>
    `;
  });
  $("#postBoard").innerHTML = `
    <div class="post-row post-head"><span>涓婚</span><span>骞冲彴</span><span>鎾斁</span><span>瀹屾挱</span><span>浜掑姩</span><span>鍒ゆ柇</span></div>
    ${rows.join("")}
  `;
}

function platformFromUrl(url) {
  if (/youtube|youtu\.be/i.test(url)) return "YouTube";
  if (/tiktok/i.test(url)) return "TikTok";
  if (/instagram/i.test(url)) return "Instagram";
  if (/facebook|fb\.watch/i.test(url)) return "Facebook";
  if (/linkedin/i.test(url)) return "LinkedIn";
  return "寰呰瘑鍒?;
}

function openTopicDetail(topicTitle) {
  const item = allTopics().find((topicItem) => topicItem.title === topicTitle);
  if (!item) return;
  const key = topicKey(item.title);
  const link = postLinks[key]?.url;
  const data = dataForTopic(item);
  $("#detailSeries").textContent = `${item.seriesName} 路 ${item.status}`;
  $("#detailTitle").textContent = item.title;
  $("#detailSubtitle").textContent = `${item.subtitle} 路 璐熻矗浜?${item.owner}`;
  $("#detailPlatforms").innerHTML = [...new Set(topicPlatforms(item))].map((platform) => `<span class="chip">${platform}</span>`).join("");
  $("#detailOkr").innerHTML = `<div><strong>${item.okr}</strong><span>${owners[item.owner]?.objective ?? ""}</span></div>`;
  $("#detailReferences").innerHTML = item.references.map((reference) => `<li>${reference}</li>`).join("");
  $("#detailLinks").innerHTML = link
    ? `<div><strong>${platformFromUrl(link)}</strong><span><a href="${link}" target="_blank" rel="noreferrer">${link}</a></span></div><div><strong>閲囬泦鏁版嵁</strong><span>鎾斁 ${data.views.toLocaleString("zh-CN")} 路 瀹屾挱 ${data.completion}% 路 浜掑姩 ${data.engagement}% 路 杞矇 ${data.followers}</span></div>`
    : `<div><strong>寰呬笂浼?/strong><span>鍦ㄤ富棰樺簱绮樿创甯栧瓙閾炬帴鍚庤繘鍏ョ湅鏉裤€?/span></div>`;
  $("#detailScript").textContent = item.script;
  $("#detailTimes").innerHTML = `<div><strong>棰勮鎷嶆憚</strong><span>${item.shoot}</span></div><div><strong>棰勮鍙戝竷</strong><span>${item.publish}</span></div>`;
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
  const header = "鍛ㄦ,鏈堜唤,绯诲垪,闆嗘暟,涓婚,璐熻矗浜?OKR\n";
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
