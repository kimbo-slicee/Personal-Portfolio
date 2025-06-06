import initHeader from "./components/Header/header.js";
import initHero from "./components/Hero/hero.js";
import initAbout from "./components/About/about.js";
import initFooter from "./components/Footer/footer.js";
import initResume from "./components/Resume/resume.js";
import initServices from "./components/Services/services.js";
import initPortFolio from "./components/Portfolio/portfolio.js";
import initContact from "./components/Contact/contact.js";
import initBottomNavigationMenu from "./components/Bottom-bar/bottom-bar.js";
import initScrollIndicator from "./components/UI/Scroll-Indicator/scroll-indicator.js";
import initCursor from "./components/UI/Custom-cursor/custom-cursor.js";

const components = [
    {
        id: "header",
        html: "./components/Header/header.html",
        css: "./components/Header/header.css",
        init: initHeader,
    },
    {
        id: "hero",
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
        init: initPortFolio,
    },
    {
        id: "contact",
        html: "./components/Contact/contact.html",
        css: "./components/Contact/contact.css",
        init:initContact ,
    },
    {
        id: "footer",
        html: "./components/Footer/footer.html",
        css: "./components/Footer/footer.css",
        init: initFooter,

    },
    {
        id:"bottom-navigation-bar",
        html:"./components/Bottom-bar/bottom-bar.html",
        css:"./components/Bottom-bar/bottom-bar.css",
        init:initBottomNavigationMenu
    },
    {
        id:"scroll-indicator",
        html:"./components/UI/Scroll-indicator/scroll-indicator.html",
        css:"./components/UI/Scroll-indicator/scroll-indicator.css",
        init:initScrollIndicator
    },
    {
        id:"custom-cursor",
        html:"./components/UI/Custom-cursor/custom-cursor.html",
        css:"./components/UI/Custom-cursor/custom-cursor.css",
        init:initCursor
    }
];
/*BootStrap Components*/
function loadCSS(path) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = path;
    document.head.appendChild(link);
}
// Load global theme CSS
loadCSS("./global/styles/themes.css");

async function loadComponent(id, htmlPath, cssPath, initFn) {
    // Load CSS
    if (cssPath) loadCSS(cssPath);

    // Load HTML
    const res = await fetch(htmlPath);
    document.getElementById(id).innerHTML = await res.text();

    // Run the component's JS logic
    if (typeof initFn === "function") initFn();
}
/*Load All Components */
components.forEach(({ id, html, css, init }) => {
    loadComponent(id, html, css, init).then(()=>{
    });
});

