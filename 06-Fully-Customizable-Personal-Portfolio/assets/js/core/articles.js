import dateFormatter  from "../utilities/dateFormatter.js";
import {extractMediumPreview} from "../utilities/htmlExtractor.js";
import {arrowRight} from "../ui/icons.template.js";

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
    const {src,desc}= extractMediumPreview(description, 200);
    return `
    <article class="article-card">
        <div class="article card">
            <div class="article-card__header">
                <img src="${src}" alt="${title}" class="article-card__image"/>
            </div>
            <div class="article-card__body">
                <h3 class="card__title">${title}</h3>
                <p class="card__description">${desc}</p>
                <time class="article-card__date">
                 Published · ${formattedDate}   
                 </time>
                  <a href="${link}"
                     target="_blank"
                     rel="noopener noreferrer"
                     class="article-card__link">
                     <span class="icon icon--right">${arrowRight}</span>
                </a>
            </div>
        </div>
    </article>
    `;
}


