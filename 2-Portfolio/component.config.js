// components.config.js
export const components = [
    {
        id: "navbar",
        html: "./components/navbar/navbar.html",
        css: "./components/navbar/navbar.css",
        js: "./components/navbar/navbar.js", // optional
        init: "initNavbar", // function to call if needed
        lazy: false,
    },
    {
        id: "hero",
        html: "./components/hero/hero.html",
        css: "./components/hero/hero.css",
        js: "./components/hero/hero.js",
        init: "initHero",
        lazy: false,
    },
    {
        id: "projects",
        html: "./components/projects/projects.html",
        css: "./components/projects/projects.css",
        js: "./components/projects/projects.js",
        init: "initProjects",
        lazy: true, // will be lazy-loaded
    },
    {
        id: "Footer",
        html: "./components/Footer/Footer.html",
        css: "./components/Footer/Footer.css",
        lazy: false,
    },
];
