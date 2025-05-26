import {initNavbar} from "./components/NavBar/navBar.js";

const components = [
    {
        id: "navbar",
        html: "./components/NavBar/navBar.html",
        css: "./components/NavBar/navBar.css",
        init: initNavbar,
    },
    // {
    //     id: "hero",
    //     html: "./components/hero/hero.html",
    //     css: "./components/hero/hero.css",
    //     init: initHero,
    // },
    // {
    //     id: "about",
    //     html: "./components/hero/hero.html",
    //     css: "./components/hero/hero.css",
    //     init: initHero,
    //
    // }

];
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

