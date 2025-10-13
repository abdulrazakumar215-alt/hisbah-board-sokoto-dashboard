let currentLang = "en";

function loadTranslations(lang) {
  fetch("translations.json")
    .then((res) => res.json())
    .then((data) => {
      const translations = data[lang];
      document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (translations[key]) {
          el.textContent = translations[key];
        }
      });
    });
}

function switchLanguage(lang) {
  currentLang = lang;
  loadTranslations(lang);
}

document.addEventListener("DOMContentLoaded", () => {
  loadTranslations(currentLang);
  document.getElementById("lang-en")?.addEventListener("click", () => switchLanguage("en"));
  document.getElementById("lang-ha")?.addEventListener("click", () => switchLanguage("ha"));
});
