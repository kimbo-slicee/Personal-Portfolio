const portfolioButtons = document.querySelectorAll(
    ".portfolio-buttons button"
);
const itemsContainer = document.querySelector(".portfolio-items");

export function initPortfolioEvents(onFilterChange, projectsList) {
    initFilterButtons(onFilterChange, projectsList);
    initCardOverlayEvents();
}

/* ================= FILTER BUTTONS ================= */

function initFilterButtons(onFilterChange, projectsList) {
    portfolioButtons.forEach((button) => {
        button.addEventListener("click", () => {
            setActiveButton(button);
            const category = button.dataset.filter;
            onFilterChange(category, projectsList);
        });
    });
}

function setActiveButton(activeButton) {
    portfolioButtons.forEach(b => b.classList.remove("active"));
    activeButton.classList.add("active");
}

/* ================= CARD OVERLAYS ================= */

function initCardOverlayEvents() {
    itemsContainer.addEventListener("click", handleCardClick);
}

function handleCardClick(e) {
    const fullscreenIcon = e.target.closest(".full-screen");
    const closeBtn = e.target.closest("[data-close]");

    if (fullscreenIcon) openBackOverlay(fullscreenIcon);
    if (closeBtn) closeBackOverlay(closeBtn);
}

function openBackOverlay(frontCard) {
    const backOverlay = frontCard.closest(".front-face").nextElementSibling;
    console.log(backOverlay);
    if (!backOverlay) return;
    backOverlay.classList.add("open");
}

function closeBackOverlay(closeBtn) {
    const backOverlay = closeBtn.closest(".back-overlay");
    if (!backOverlay) return;

    backOverlay.classList.remove("open");
}


