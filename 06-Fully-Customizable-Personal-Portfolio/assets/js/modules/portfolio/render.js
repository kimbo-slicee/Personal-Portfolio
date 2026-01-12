import {renderProjectCard} from "./card.template.js";

export const portfolioContainer = document.querySelector(".portfolio-items");

export function renderProjectsCards(category,projectsList) {
    const projects =
        category === "all"
            ? projectsList
            : projectsList.filter(({ type }) => type === category);

    portfolioContainer.innerHTML = projects
        .map(renderProjectCard)
        .join("");
}