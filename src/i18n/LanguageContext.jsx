import { createContext, useContext, useEffect, useMemo, useState } from "react";

const LanguageContext = createContext(null);

const STORAGE_KEY = "fan-yihsuan-language";

export const LANGUAGES = {
  en: "EN",
  zh: "中文",
};

export const UI_COPY = {
  nav: {
    projects: { en: "Projects", zh: "作品" },
    about: { en: "About", zh: "關於" },
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
    back: { en: "Back", zh: "返回" },
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
    portfolioFocus: { en: "Portfolio Positioning", zh: "作品集定位" },
    focusHeading: {
      en: "Product-minded work, built from design and front-end depth.",
      zh: "以設計與前端能力為基礎，延伸到產品與解決方案思維。",
    },
    focusBody: {
      en: "These projects show how I move from user problems to product decisions, demos, and implementation-ready interfaces. The goal is not just polished UI, but clearer workflows that customers, stakeholders, and engineering teams can align around.",
      zh: "這些作品呈現我如何從使用者問題出發，整理成產品判斷、可展示的 demo，以及可交付給工程實作的介面。重點不只是漂亮 UI，而是讓客戶、利害關係人與工程團隊都能對齊的清楚流程。",
    },
    focusAreas: [
      {
        title: { en: "Technical Product", zh: "Technical Product" },
        body: {
          en: "Clarify ambiguous requirements, map workflows, and turn product questions into testable prototypes.",
          zh: "釐清模糊需求、整理工作流程，並把產品問題轉成可以測試的原型。",
        },
      },
      {
        title: { en: "Solutions Consulting", zh: "Solutions Consulting" },
        body: {
          en: "Explain product value through demos, customer scenarios, and implementation-aware recommendations.",
          zh: "透過 demo、客戶情境與導入可行性，說明產品價值與建議方案。",
        },
      },
      {
        title: { en: "Implementation PM", zh: "Implementation PM" },
        body: {
          en: "Bridge design, engineering, and users with practical specs, delivery context, and adoption-focused UX.",
          zh: "用清楚規格、交付脈絡與導入體驗，連接設計、工程與使用者。",
        },
      },
    ],
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
