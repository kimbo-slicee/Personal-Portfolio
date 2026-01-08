import dateFormatter from "../../utilities/dateFormatter.js";
import {extractMediumPreview} from "../../utilities/htmlExtractor.js";

const categoriesBadges=(categories) => categories
                                    .map(c => `<span class="article-card__category" data-category="${c}">${c}</span>`)
                                    .slice(0,1)
                                    .join("")

export function createArticleCard({title, pubDate, description, link, categories}) {
    const formattedDate = dateFormatter(new Date(pubDate));
    const {src, desc} = extractMediumPreview(description, 200);
    return `
         <article class="article-card">
            <a href="${link}" target="_blank" rel="noopener noreferrer" class="article-card__wrapper">
        
              <div class="article-card__image-wrapper">
                <img src="${src}" alt="${title}" />
              </div>
        
              <div class="article-card__content">
                <div class="flex-center flex-between gap-md">
                    <time class="article-card__date">${formattedDate}</time>
                    <div class="article-card__categories flex gap-sm">${categoriesBadges(categories)}</div>
                </div>
        
                <h3 class="article-card__title">${title}</h3>
        
                <p class="article-card__description">${desc}</p>
                <span class="article-card__read">Read article →</span>
              </div>
              
              </divclas>
            </a>
         </article>
  `;
}

export function renderItems(items, container, renderItem, limit=3) {
    if (!Array.isArray(items)) return;
    if (!(container instanceof HTMLElement)) return;
    container.innerHTML = items
        .slice(0, limit)
        .map(e=>renderItem(e))
        .join("");
}
