import { createContext, useContext, useEffect, useMemo, useState } from "react";

const LanguageContext = createContext(null);

const STORAGE_KEY = "fan-yihsuan-language";

export const LANGUAGES = {
  en: "EN",
  zh: "中文",
};

export const UI_COPY = {
  nav: {
    work: { en: "Work", zh: "作品" },
    about: { en: "About me", zh: "關於我" },
    main: { en: "Main", zh: "主選單" },
    skip: { en: "Skip to content", zh: "跳到主要內容" },
    toggleLanguage: { en: "Switch language", zh: "切換語言" },
    contact: { en: "Contact", zh: "聯絡" },
    openMenu: { en: "Open menu", zh: "開啟選單" },
    closeMenu: { en: "Close menu", zh: "關閉選單" },
    wordmark: {
      en: "Fan YiHsuan · Product-minded UI Engineer",
      zh: "范翊萱 · 產品思維 UI Engineer",
    },
  },
  project: {
    tryDemo: { en: "Try the demo", zh: "查看 Demo" },
    closeDemo: { en: "Close", zh: "關閉" },
    openInNewTab: { en: "Open in new tab", zh: "在新分頁開啟" },
    productLens: { en: "Product Lens", zh: "產品視角" },
    problem: { en: "Problem", zh: "問題" },
    solution: { en: "Solution", zh: "如何解決" },
    inspiration: { en: "Inspiration", zh: "靈感" },
    process: { en: "Process", zh: "流程" },
    screens: { en: "Screens", zh: "畫面" },
    screen: { en: "screen", zh: "畫面" },
    back: { en: "Back to Work", zh: "回到作品" },
    outcome: { en: "Outcome", zh: "成果" },
    nextProject: { en: "Next project", zh: "下一個作品" },
    notFound: { en: "Project not found.", zh: "找不到這個作品。" },
    backHome: { en: "Back home", zh: "回首頁" },
    meta: {
      Role: { en: "Role", zh: "角色" },
      Stack: { en: "Stack", zh: "技術" },
      Year: { en: "Year", zh: "年份" },
      Status: { en: "Status", zh: "狀態" },
    },
  },
  home: {
    eyebrow: {
      en: "From UI/UX design to front-end development",
      zh: "從 UI/UX 設計走向前端開發",
    },
    portfolioYear: { en: "Portfolio — 2026", zh: "作品集 — 2026" },
    greeting: { en: "Hi, I'm Fan", zh: "嗨，我是 Fan" },
    role: { en: "Design Engineer.", zh: "設計工程師。" },
    intro: {
      en: "I enjoy using both my design and engineering skills, and keep growing with a strong team. I'm happy to go deeper into any of these.",
      zh: "我喜歡同時發揮設計與工程能力，也和優秀的團隊一起持續成長。其中任何一項，我都很樂意深入聊聊。",
    },
    viewProjects: { en: "View projects", zh: "查看作品" },
    readCaseStudy: { en: "Read case study", zh: "閱讀案例" },
    keyVisual: { en: "key visual", zh: "主視覺" },
    workLabel: { en: "Work", zh: "作品" },
    indexLabel: { en: "Projects", zh: "作品目錄" },
  },
};

export function tx(value, lang) {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value[lang] ?? value.en ?? "";
  }
  return value ?? "";
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window === "undefined") return "en";
    return localStorage.getItem(STORAGE_KEY) || "en";
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language === "zh" ? "zh-Hant" : "en";
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () =>
        setLanguage((current) => (current === "en" ? "zh" : "en")),
      t: (copy) => tx(copy, language),
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
