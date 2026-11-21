const pageRoot = document.documentElement;
const themeToggle = document.querySelector("#theme-toggle");
const savedTheme = localStorage.getItem("portfolio-theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";
const startingTheme = savedTheme === "dark" || savedTheme === "light"
  ? savedTheme
  : systemTheme;

function setTheme(theme, shouldSave) {
  pageRoot.dataset.theme = theme;
  themeToggle.setAttribute("aria-pressed", String(theme === "dark"));

  if (shouldSave) {
    localStorage.setItem("portfolio-theme", theme);
  }
}

setTheme(startingTheme, false);

themeToggle.addEventListener("click", () => {
  const nextTheme = pageRoot.dataset.theme === "dark" ? "light" : "dark";
  setTheme(nextTheme, true);
});
