const bottomNav = document.querySelector(".bottom-nav");
const bottomNavToggle = document.querySelector(".bottom-nav__toggle");
const closeBtn = document.querySelector(".close-btn");
const navItems = bottomNav.querySelectorAll("nav ul li");

const AUTO_HIDE_DELAY = 5000;
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

/* =================================================================
    Change active item based on scroll event using observer pattern
   ==================================================================
 */
const sections = [...navItems].map(item => {
    const link = item.querySelector("a");
    return document.querySelector(link.hash);
});

const observerOptions = {
    root: null,
    threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const activeId = `#${entry.target.id}`;
        navItems.forEach(item => {
            const link = item.querySelector("a");
            item.classList.toggle("active", link.hash === activeId);
        });
    });
}, observerOptions);

sections.forEach(section => {
    if (section) observer.observe(section);
});

