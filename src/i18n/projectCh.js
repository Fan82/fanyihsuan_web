const lensLabelsZh = {
  User: "使用者",
  "Product Goal": "產品目標",
  "Key Decision": "關鍵決策",
  Measure: "衡量指標",
};

const PROJECT_ZH = {
  roleFitAnalyzer: {
    tagline: "投遞前先判斷是否值得。",
    desc: "從真實求職痛點出發的決策輔助工具：貼上工作內容，幾秒內得到匹配分數、強項與技能落差。",
    focus: "AI 產品策略 · 決策輔助",
    meta: {
      Role: "產品 + 設計 + 工程",
      Status: "已上線",
    },
    overview: {
      problemSummary: "求職很耗時，因為很難快速判斷一個職缺是否值得投遞。",
      problem:
        "每次投遞前都要讀工作內容、猜自己是否符合，再花時間寫 cover letter。等到投入時間後才發現匹配度不高，決策成本太高。",
      solutionSummary:
        "一個 AI 工具，讀取工作內容後直接回傳匹配分數、強項與技能缺口。",
      solution:
        "貼上工作內容後，工具會產出匹配百分比、強項與缺口拆解、逐項技能比較，以及是否值得投遞的清楚摘要。結果會被保存，方便比較不同職缺。",
    },
    story: [
      {
        label: "問題",
        heading: "我在求職時，很難快速判斷一個職缺值不值得投。",
        body: "我正在職涯轉向，背景是 UX/UI，目標是 Design Engineer 或 Product Engineer。每份工作內容的要求都不一樣，我常常花 20 到 30 分鐘準備投遞，最後才發現匹配度很低。我需要一個更快的判斷方式。",
      },
      {
        label: "決策",
        heading: "我不想做 checklist，而是想做真正的比較工具。",
        body: "手動勾選技能雖然簡單，但不夠細緻也不符合真實求職情境。我希望使用者只要貼上工作內容，就能得到有脈絡的判斷。這讓 Claude API 成為合適選擇：輸入清楚、輸出可結構化，問題也足夠真實。",
      },
      {
        label: "取捨",
        heading: "Prompt是核心，也因此是最容易有誤的地方。",
        body: "分析品質高度依賴 prompt。早期版本常回傳不一致的結果，導致UI壞掉。若工作內容本身缺少明確需求，工具會顯示不匹配技能，而不是假裝分析仍然可靠。",
      },
      {
        label: "建置",
        heading: "React 前端、Claude API，週末完成並部署到 Vercel。",
        body: "這是一個單頁 React app。主畫面是 textarea 與分析按鈕，回傳的結構化 JSON 會驅動分數環、技能條與摘要卡。我也加入 localStorage 的歷史紀錄，方便比較多個工作內容。",
      },
      {
        label: "結果",
        heading: "我真的拿它來求職，也改變了投遞策略。",
        body: "我用它篩選正在申請的職缺，讓投遞時間大約減半。更重要的是，我開始避開低於 60% 匹配的職缺，集中投遞缺口可補、但方向符合的角色。歷史比較也讓我更了解市場需求。",
      },
    ],
    productLens: [
      "職涯轉換者與求職者，需要快速判斷一個職缺是否值得投遞。",
      "降低投遞前的判斷時間，並讓技能落差變得足夠具體、可行動。",
      "用 AI 比較完整工作內容與候選人背景，而不是要求使用者手動填 checklist。",
      "節省的投遞時間、apply/skip 決策信心，以及跨多個工作內容的重複使用。",
    ],
  },
  runApp: {
    tagline: "零時差的一起跑步。",
    desc: "設計並打造完整跑步產品：包含登入、即時 GPS 追蹤與社群回饋循環，幫助使用者維持動力。",
    focus: "完整產品流程 · 社群回饋循環",
    meta: { Role: "產品設計 + 前端" },
    overview: {
      problemSummary: "跑步 app 很會記錄數字，卻不一定讓你想明天再跑。",
      problem:
        "我開始跑步後發現，真正讓我持續下去的不是數據，而是朋友的鼓勵。但很多跑步 app 並沒有讓分享與互動變得自然。",
      solutionSummary: "一個結合 GPS 追蹤與社群 feed 的 full-stack 跑步 app。",
      solution:
        "包含 Supabase 登入、Leaflet.js 即時路線追蹤，以及可以發佈跑步紀錄、互動與追蹤朋友的社群 feed。",
    },
    inspiration: "一句話！要不要一起跑步🏃",
    process: [
      {
        title: "先設計，再實作",
        desc: "先在 Figma 定義完整流程，包含追蹤、發佈與瀏覽，再開始寫程式。設計限制也影響了元件架構。",
      },
      {
        title: "真實後端，不用假資料",
        desc: "使用 Supabase 處理登入與資料庫，讓每筆跑步紀錄與每個使用者都是真實狀態。",
      },
      {
        title: "Leaflet.js 即時 GPS",
        desc: "透過瀏覽器 geolocation API 串接 Leaflet.js，並處理權限拒絕、GPS 飄移等邊界情境。",
      },
      {
        title: "Mobile-first",
        desc: "跑步時使用者多半拿手機，所以開始跑步、發文與互動都以單手操作為優先。",
      },
    ],
    productLens: [
      "需要記錄進度，也需要社群動力維持習慣的 casual runners。",
      "不只追蹤數字，而是建立跑步、分享、回饋之間的輕量循環。",
      "優先做真實登入、儲存跑步紀錄與社群 feed，讓 demo 像真正產品而不是靜態原型。",
      "跑步完成率、發文率、回訪率，以及與朋友活動互動的頻率。",
    ],
  },
  planify: {
    tagline: "計畫真正有用的時候，是它能告訴你下一步該做什麼。",
    desc: "一個 workspace planning 工具，將目標拆成可執行步驟，並把團隊任務、負責人、期限與個人 focus work 放在同一個工作區。",
    focus: "目標規劃 · 團隊執行",
    meta: { Role: "產品 UX + 前端", Stack: "Vue · Vite" },
    overview: {
      problemSummary:
        "很多任務工具能追蹤工作，卻不一定能幫助團隊決定下一步該做什麼。",
      problem:
        "當目標、專案看板、負責人、期限與個人優先事項分散在不同脈絡裡，規劃本身就會變成另一個任務。真正的問題不只是記錄工作，而是如何把一個目標轉成清楚步驟，並讓每個人知道下一個有用行動。",
      solutionSummary:
        "Planify 將 goal planning、kanban execution、personal focus 與 calendar timing 放進同一個 workspace。",
      solution:
        "使用者可以先建立 goal plan，Planify 會把它拆成成功標準、第一個 milestone、下一步 action 與 review tasks。這些工作會同步出現在專案看板、個人 focus list 與 timeline view，讓團隊能從規劃直接進入執行，不需要重新整理脈絡。",
    },
    inspiration: "各就各位！！我們要下一步啦！",
    process: [
      {
        title: "Goal-first task creation",
        desc: "設計從 outcome 開始的建立流程，讓使用者先定義目標，再產出第一批執行步驟，而不是手動從空白任務開始。",
      },
      {
        title: "Workspace-level structure",
        desc: "建立 project selection、members、owners、priorities 與 statuses，讓看板能支援團隊規劃，而不只是個人 task tracking。",
      },
      {
        title: "Focus view for personal execution",
        desc: "新增 My Tasks view，根據 status、priority 與 due date 推薦下一個任務，並區分 due today、upcoming、review 與 completed work。",
      },
      {
        title: "Delivery views beyond the board",
        desc: "串接 board、list、timeline 與 settings views，讓使用者能用不同角度檢視工作，但不需要重複建立任務資料。",
      },
    ],
    productLens: [
      "需要把目標轉成可見任務、負責人與下一步行動的小型團隊與 solo builders。",
      "縮短規劃到執行之間的落差，讓 goals、team board 與 personal focus 留在同一個系統。",
      "以 goal planning 作為起點，再把拆解出的工作分配到 board、personal 與 timeline contexts。",
      "從建立目標到開始第一個 action 的時間、open task progress、overdue tasks，以及使用者能否快速辨識下一步任務。",
    ],
  },
  easyBank: {
    tagline: "用精準前端打造值得信任的銀行體驗。",
    desc: "研究銀行產品如何透過資訊層級、回饋與一致實作傳達信任感的介面練習。",
    focus: "信任感 UX · Design system",
    meta: { Role: "UI 策略 + 前端" },
    overview: {
      problemSummary: "銀行必須安全可信，但也不能有距離。",
      problem:
        "數位銀行需要透過視覺語言建立信任。研究真實 app 後可以看到，顏色、層級與微互動都在默默影響使用者信心。",
      solutionSummary:
        "以嚴謹 design token 建構的模組化 React component system。",
      solution:
        "我不是直接複製既有銀行app，而是身為使用者時，我會希望有什麼改變後，透過 CSS variables 維持每個元件的一致性。",
    },
    inspiration: "好的前端實作，讓你攔不住地發大財！",
    process: [
      {
        title: "先研究再建置",
        desc: "分析多個銀行 app，理解視覺模式如何建立可信感，而不只是看起來像什麼。",
      },
      {
        title: "Design token system",
        desc: "用 CSS variables 管理顏色、間距與字級，讓一致性不需要靠手動記憶。",
      },
      {
        title: "Component architecture",
        desc: "餘額卡、交易列表、匯率模組與轉帳表單都以可重用元件拆分。",
      },
    ],
    productLens: [
      "需要快速理解帳戶狀態、交易與操作的銀行使用者。",
      "透過清楚層級與互動回饋，讓金融操作更清楚、一致且可信。",
      "建立 token-based component system，讓信任訊號在不同流程中保持一致。",
      "任務清晰度、錯誤預防、感知信任度，以及找到關鍵帳戶資訊的速度。",
    ],
  },
  bookFlight: {
    tagline: "訂好機票，提早請假，出發吧！",
    desc: "一個訂票流程原型，透過驗證規則與條件式介面狀態預防常見錯誤。",
    focus: "商業規則 · 錯誤預防",
    meta: { Role: "UI/ UX + 前端" },
    overview: {
      problemSummary: "訂票表單充滿使用者不應該能犯的錯。",
      problem:
        "回程日期早於去程、單程與來回狀態不清楚、表單未完成就能送出，這些都是常見且可避免的問題。",
      solutionSummary: "讓 UI 主動處理驗證，而不是把負擔丟給使用者。",
      solution:
        "回程日期不可早於去程；單程模式隱藏不相關欄位；只有表單完整時才能提交。",
    },
    inspiration: "無止盡的等待連假，我現在就想出去玩！！",
    process: [
      {
        title: "整理失敗情境",
        desc: "列出自己曾遇過或看過的訂票錯誤，並把每個錯誤轉成設計限制。",
      },
      {
        title: "日期驗證",
        desc: "元件層級限制回程日期不能早於去程，並提供即時視覺回饋。",
      },
      {
        title: "條件式 UI",
        desc: "單程模式直接移除回程日期區塊，降低不必要資訊與錯誤機會。",
      },
    ],
    productLens: [
      "希望快速完成訂票，且避免日期、路線或乘客數錯誤的旅客。",
      "在送出前預防無效輸入，降低訂票流程摩擦。",
      "把商業規則直接編進 UI 狀態，包括單程、日期順序與完成條件。",
      "表單完成率、避免的驗證錯誤、可提交前所需時間與欄位修正頻率。",
    ],
  },
  goTravel: {
    tagline: "感同身受的旅行家",
    desc: "研究如何透過圖片、內容層級與畫面排版引導旅遊探索的介面練習。",
    focus: "內容層級 · 探索體驗",
    meta: { Role: "UI/UX + 設計系統" },
    overview: {
      problemSummary: "旅遊網站常把感受埋在過多資訊下面。",
      problem:
        "使用者剛開始探索目的地時，不一定想先讀大量文字。很多旅遊網站追求資訊完整，卻讓人感受不到想出發的理由。",
      solutionSummary: "以圖片優先的版面，讓目的地先說話。",
      solution:
        "用 CSS Grid 與 Flexbox 建立卡片式版面，讓圖片先引導情緒，文字再支援決策。",
    },
    inspiration: "我嚮往的永遠是下一站要去哪！",
    process: [
      {
        title: "Visual-first constraint",
        desc: "設定規則：每個區塊都要先透過圖片傳達目的，再由文字補充。",
      },
      {
        title: "CSS Grid as structure",
        desc: "用 Grid 安排目的地卡片，讓版面本身呈現多樣與豐富感。",
      },
      {
        title: "Mobile-first",
        desc: "手機上卡片堆疊、桌機展開成 grid，符合旅行中用手機瀏覽的情境。",
      },
    ],
    productLens: [
      "正在瀏覽目的地、需要快速情緒與實用訊號的旅客。",
      "讓使用者透過圖片快速掃描選項，再用內容支援比較與決策。",
      "採用 visual-first grid，讓不同目的地在桌機與手機上都能快速被理解。",
      "目的地點擊率、捲動深度、收藏目的地，以及比較選項的速度。",
    ],
  },
  publicTransp: {
    tagline: "搞清楚自己在哪裡。",
    desc: "由台灣與倫敦的跨城市觀察發展出的交通產品概念：在決策瞬間呈現正確即時資訊，好的交通設計不是顯示更多資料，而是在正確時間顯示正確資料。",
    focus: "資訊架構 · 即時資訊 UX",
    meta: { Role: "產品 UI/ UX + 設計系統" },
    overview: {
      problemSummary: "交通 app 顯示太多資訊，真正問題是過濾，而不是取得資料。",
      problem:
        "從台灣到倫敦，我都感受到複雜交通系統的相同痛點：資料很多，但使用者在移動中真正需要的是被優先排序後的資訊。",
      solutionSummary: "一個重視資訊優先級，而不是一次顯示所有資料的交通介面。",
      solution:
        "透過清楚層級、即時更新與快速搜尋，把複雜交通資料整理成移動中也能快速判斷的體驗。",
    },
    inspiration: "拜託別再罷工了！我就是想回家！",
    process: [
      {
        title: "跨文化觀察",
        desc: "在台灣日常使用交通系統，再到倫敦觀察更大規模的相同痛點。",
      },
      {
        title: "資訊層級",
        desc: "把公車、火車、捷運與高鐵整理成一致層級，支援快速掃描。",
      },
      {
        title: "即時行為設計",
        desc: "思考 live data 應該如何更新，讓資訊可信而不是干擾使用者。",
      },
      {
        title: "即時搜尋與篩選",
        desc: "輸入後立即回應，降低移動中做決策的摩擦。",
      },
    ],
    productLens: [
      "在高壓時間內使用複雜交通系統的通勤者與旅客。",
      "透過過濾資訊，讓即時交通資料更容易被信任與行動。",
      "圍繞資訊優先級設計，而不是顯示更多資料，特別是搜尋、即時更新與路線掃描。",
      "做出路線決策的時間、搜尋成功率、錯過轉乘減少，以及對即時狀態的信心。",
    ],
  },
};

function mergeArrayByIndex(base = [], translated = []) {
  return base.map((item, index) => {
    const copy = translated[index];
    if (!copy) return item;
    if (typeof copy === "string") return { ...item, value: copy };
    return { ...item, ...copy };
  });
}

export function localizeProject(project, language) {
  if (language !== "zh") return project;

  const copy = PROJECT_ZH[project.id];
  if (!copy) return project;

  return {
    ...project,
    tagline: copy.tagline ?? project.tagline,
    desc: copy.desc ?? project.desc,
    focus: copy.focus ?? project.focus,
    meta: {
      ...project.meta,
      ...(copy.meta ?? {}),
    },
    overview: {
      ...project.overview,
      ...(copy.overview ?? {}),
    },
    story: mergeArrayByIndex(project.story, copy.story),
    process: mergeArrayByIndex(project.process, copy.process),
    productLens: mergeArrayByIndex(project.productLens, copy.productLens).map(
      (item) => ({
        ...item,
        label: lensLabelsZh[item.label] ?? item.label,
      }),
    ),
    inspiration: copy.inspiration ?? project.inspiration,
  };
}
