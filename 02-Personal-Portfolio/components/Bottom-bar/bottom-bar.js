const initBottomNavigationMenu = () => {
    const bottomNav = document.querySelector(".bottom-nav");
    const menuHideBtn = document.querySelector(".menu-hide-btn");
    const menuShowBtn = document.querySelector(".menu-show-btn");
    const sections = document.querySelectorAll(".nav-menu-section");

    let navTimeout;

    const toggleNavVisibility = () => {
        const scrollY = window.scrollY;

        bottomNav.classList.add("active");
        menuShowBtn.classList.remove("active");

        if (scrollY < 10) {
            menuHideBtn.classList.remove("active");
            clearTimeout(navTimeout);
            navTimeout = setTimeout(() => bottomNav.classList.add("active"), 2500);
        } else {
            menuHideBtn.classList.add("active");
            clearTimeout(navTimeout);
            navTimeout = setTimeout(() => {
                bottomNav.classList.remove("active");
                menuShowBtn.classList.add("active");
            }, 2500);
        }

        highlightCurrentSection(scrollY);
    };

    const highlightCurrentSection = (scrollY) => {
        sections.forEach((section) => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 50;
            const id = section.getAttribute("id");
            const navLink = document.querySelector(`.bottom-nav .menu li a[href*=${id}]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink?.classList.add("current");
            } else {
                navLink?.classList.remove("current");
            }
        });
    };

    const hideMenu = () => {
        bottomNav.classList.toggle("active");
        menuHideBtn.classList.toggle("active");
        menuShowBtn.classList.toggle("active");
    };

    const showMenu = () => {
        bottomNav.classList.toggle("active");
        menuHideBtn.classList.add("active");
        menuShowBtn.classList.toggle("active");
    };

    // Initial visibility on load
    bottomNav.classList.toggle("active", window.scrollY < 10);

    // Event listeners
    window.addEventListener("scroll", toggleNavVisibility);
    menuHideBtn.addEventListener("click", hideMenu);
    menuShowBtn.addEventListener("click", showMenu);
};

export default initBottomNavigationMenu;
