import { fetchArticles } from "./api.js";
import { renderItems, createArticleCard } from "./card.template.js";

const articlesContainer = document.querySelector(".articles-grid");
const actions = document.querySelector(".articles-actions");

const btnDown = actions.querySelector(".down");
const btnUp = actions.querySelector(".up");

let articles = [];
let visibleCount = 3;
const STEP = 3;

const updateUI = () => {
    renderItems(articles, articlesContainer, createArticleCard, visibleCount);

    btnDown.disabled = visibleCount >= articles.length;
    btnUp.disabled = visibleCount <= STEP;
};

const initArticles = async () => {
    articles = await fetchArticles();
    updateUI();
};

btnDown.addEventListener("click", () => {
    visibleCount = Math.min(visibleCount + STEP, articles.length);
    updateUI();
});

btnUp.addEventListener("click", () => {
    visibleCount = Math.max(STEP, visibleCount - STEP);
    updateUI();
});

initArticles();



