import "./features/carousel/carousel.js";
import "./theme/theme.js";
import {createArticleCard, renderArticles} from "./core/dom.js";
import { fetchArticles } from "./services/articles.service.js";


/* ============ Articles Section ============ */
const container = document.querySelector(".articles-list");
const articles = await fetchArticles();
// console.log(articles);
// Render articles in the container

renderArticles(articles, container);