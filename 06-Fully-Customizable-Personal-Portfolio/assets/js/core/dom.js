import dateFormatter  from "../utilities/dateFormatter.js";
import {extractMediumPreview} from "../utilities/htmlExtractor.js";
const arrowRight = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon icon--md">
  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z">
</path>
</svg>
`;

/**
 * Creates an article card HTML string.
 * @param title
 * @param pubDate
 * @param description
 * @param link
 * @return {string}
 */
export function createArticleCard({title,pubDate,description,link}) {
    const formattedDate = dateFormatter.formatDate(new Date(pubDate));
    const {src,desc}= extractMediumPreview(description, 100);
    return `
    <article class="article-card">
        <div class="front-overlay">
            <div class="card-header">
                <img src="${src}" alt="${title}" class="card-image"/>
            </div>
            <div class="overlay-content">
                <h3 class="card-title">${title}</h3>
                <p class="card-description">${desc}</p>
                <date class="card-date">
                    ${formattedDate}
                </date>
                <a href="${link}" target="_blank" rel="noopener" class="card-link">
                    Read More
                    <span class="icon icon--right">${arrowRight}</span>
                </a>
            </div>
        </div>
    </article>
    `;
}

/**
 * Renders articles into the specified container.
 * @param articles
 * @param container
 */
export function renderArticles(articles, container) {
    container.innerHTML = articles
        .slice(0, 3)
        .map(createArticleCard)
        .join("");
}
