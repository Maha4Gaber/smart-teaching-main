import i18n from "../locales/i18n";

export function editTitle(lang) {
  if (lang === "ar") {
    document.title = "نظام التعليم الذكي";
  } else {
    document.title = "Smart Teaching System";
  }
}

export function checkFixLang(lang) {
  if (lang === "en") {
    document.getElementsByTagName("html")[0].setAttribute("dir", "ltr");
    document.getElementsByTagName("body")[0].setAttribute("dir", "ltr");
  }

  if (lang === "ar") {
    document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
    document.getElementsByTagName("body")[0].setAttribute("dir", "rtl");
  }
}

export function switchLang(lang) {
  i18n.changeLanguage(lang);
  checkFixLang(lang);
  document.getElementsByTagName("html")[0].setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  document.getElementsByTagName("body")[0].setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  document.getElementsByTagName("html")[0].setAttribute("lang", lang);
  editTitle(lang);
}
