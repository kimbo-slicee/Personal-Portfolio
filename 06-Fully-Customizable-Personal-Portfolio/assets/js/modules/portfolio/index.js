import { initPortfolioEvents } from "./events.js";
import { fetchAllProjects } from "./api.js";
import {renderProjectsCards} from "./render.js";
import {imageSliders} from "./carousel-logique.js";

let projectsList = [];
let category = "all";
async function initPortfolio() {
    projectsList = await fetchAllProjects()
    renderProjectsCards(category,projectsList);
    initPortfolioEvents(renderProjectsCards,projectsList);
    imageSliders();
}

initPortfolio()


/* ==================================== */

