const bottomNav = document.querySelector(".bottom-nav");
const bottomNavToggle = document.querySelector(".bottom-nav__toggle");
const closeBtn = document.querySelector(".close-btn");
const navItems = bottomNav.querySelectorAll("nav ul li");

const AUTO_HIDE_DELAY = 3000;
let hideTimeout = null;

/* ==================================================
   Helpers
================================================== */

const showBottomNav = () => {
    bottomNav.classList.remove("hidden");
    bottomNavToggle.classList.replace("display", "hidden");
    resetAutoHide();
};

const hideBottomNav = () => {
    bottomNav.classList.add("hidden");
    bottomNavToggle.classList.replace("hidden", "display");
};

const resetAutoHide = () => {
    clearTimeout(hideTimeout);
    hideTimeout = setTimeout(hideBottomNav, AUTO_HIDE_DELAY);
};

const setActiveItem = (activeItem) => {
    navItems.forEach(item => item.classList.remove("active"));
    activeItem.classList.add("active");
};

/* ==================================================
   Navigation Click → Scroll
================================================== */

navItems.forEach(item => {
    item.addEventListener("click", (e) => {
        e.preventDefault();

        const link = item.querySelector("a").hash;
        if (!link) return;
        
        const targetSection = document.querySelector(link);

        targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        setActiveItem(item);
        resetAutoHide();
    });
});

/* ==================================================
   Toggle & Close
================================================== */

closeBtn.addEventListener("click", hideBottomNav);
bottomNavToggle.addEventListener("click", showBottomNav);

/* ==================================================
   Init
================================================== */

resetAutoHide();
