/**
 * Initializes the theme toggle button logic
 * @param {HTMLElement} themeBtn - The toggle button element
 */
function initThemeToggle(themeBtn) {
    if (!themeBtn) {
        console.warn("Theme toggle button is not provided or not found.");
        return;
    }

    // --- Restore saved theme from localStorage ---
    const savedTheme = localStorage.getItem("theme");
    const isLight = savedTheme === "light";

    if (savedTheme) {
        document.documentElement.setAttribute("data-theme", savedTheme);
        themeBtn.classList.toggle("active-sun-icon", isLight);
    }

    themeBtn.addEventListener("click", () => {
        const isCurrentlyLight = themeBtn.classList.toggle("active-sun-icon");
        const newTheme = isCurrentlyLight ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    });
}

export default initThemeToggle;

