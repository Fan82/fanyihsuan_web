/**
 * Case study outcomes, keyed by project id.
 *
 * Only add results Fan has confirmed. Leave a value blank (or whitespace)
 * and the whole Outcome block is hidden on that case study — no heading,
 * no placeholder. If `zh` is blank, the English text is shown instead.
 */
export const OUTCOMES = {
  shopifyTranslation: {
    en: "The luxury brand client's Taiwan store was built with the tool and is live in preview mode. Marketing translated 1,367 rows out of 2,824 source rows and strings, all 93 products were filled, and the merge found 0 marker errors.\n\nWhen 8 products failed to import on category metafield conflicts, I re-exported only those 8 and then built a partial re-import into step 6, so it no longer needs a manual fix.",
    zh: "這個海外精品品牌客戶的台灣站以這個工具建置完成，目前以預覽模式上線。行銷從 2,824 筆原始資料與字串中翻譯了 1,367 筆，93 個商品全部填入，合併時標記錯誤為 0。\n\n有 8 個商品因分類 metafield 衝突匯入失敗時，我只重新匯出這 8 個，之後把部分重新匯入做進第 6 步，不必再手動修正。",
  },
  roleFitAnalyzer: { en: "", zh: "" },
  runApp: { en: "", zh: "" },
  planify: { en: "", zh: "" },
  easyBank: { en: "", zh: "" },
  bookFlight: { en: "", zh: "" },
  goTravel: { en: "", zh: "" },
  publicTransp: { en: "", zh: "" },
};

export function getOutcome(id, language) {
  const entry = OUTCOMES[id];
  if (!entry) return "";
  const localized = (entry[language] ?? "").trim();
  return localized || (entry.en ?? "").trim();
}
