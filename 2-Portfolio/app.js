import {initNavbar} from "./components/NavBar/navBar.js";
import {initHero} from "./components/Hero/hero.js";
import {initAbout} from "./components/About/about.js";
import {initResume} from "./components/Resume/resume.js";
import {initServices} from "./components/Services/services.js";
import {initPortFolio} from "./components/Portfolio/portfolio.js";
import {initContactMe} from "./components/ContactMe/contactMe.js";
import {initFooter} from "./components/Footer/footer.js";
import {initBottomNavigationMenu} from "./components/BottomNavMenu/bottom-navigation-menu.js";

const components = [
    {
        id: "header",
        html: "./components/NavBar/navBar.html",
        css: "./components/NavBar/navBar.css",
        init: initNavbar,
    },
    {
        id: "home",
        html: "./components/Hero/hero.html",
        css: "./components/Hero/hero.css",
        init: initHero,
    },
    {
        id: "about",
        html: "./components/About/about.html",
        css: "./components/About/about.css",
        init: initAbout,
    },
    {
        id: "resume",
        html: "./components/Resume/resume.html",
        css: "./components/Resume/resume.css",
        init: initResume,
    },
    {
        id: "services",
        html: "./components/Services/services.html",
        css: "./components/Services/services.css",
        init: initServices,
    },
    {
        id: "portfolio",
        html: "./components/Portfolio/portfolio.html",
        css: "./components/Portfolio/portfolio.css",
        init: initContactMe,
    },
    {
        id: "contact",
        html: "./components/ContactMe/contactMe.html",
        css: "./components/ContactMe/contactMe.css",
        init: initPortFolio,
    },
    {
        id: "footer",
        html: "./components/Footer/footer.html",
        css: "./components/Footer/footer.css",
        init: initFooter,

    },
    {
        id:"bottom-navigation-bar",
        html:"./components/BottomNavMenu/bottom-navigation-menu.html",
        css:"./components/BottomNavMenu/bottom-navigation-menu.css",
        init:initBottomNavigationMenu
    }
];
/*BootStrap Components*/
function loadCSS(path) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = path;
    document.head.appendChild(link);
}

async function loadComponent(id, htmlPath, cssPath, initFn) {
    // Load CSS
    if (cssPath) loadCSS(cssPath);

    // Load HTML
    const res = await fetch(htmlPath);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;

    // Run the component's JS logic
    if (typeof initFn === "function") initFn();
}

components.forEach(({ id, html, css, init }) => {
    loadComponent(id, html, css, init);
});

