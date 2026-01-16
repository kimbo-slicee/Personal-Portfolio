import {revealPortfolio} from "../../features/ScrollReveal.js";

const icons={
    calendar:`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon icon--sm">
        <path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 8H4V19H20V8ZM15.0355 10.136L16.4497 11.5503L11.5 16.5L7.96447 12.9645L9.37868 11.5503L11.5 13.6716L15.0355 10.136Z"></path></svg>
    `

}
import dateFormatter from "../../utilities/dateFormatter.js";
import {extractMediumPreview} from "../../utilities/htmlExtractor.js";

export function createArticleCard({
                                      title,
                                      pubDate,
                                      description,
                                      link,
                                      categories = [],
                                      author = "Mohamed el aouri",
                                      variant = "vertical" // vertical | horizontal
                                  }) {
    const formattedDate = dateFormatter(new Date(pubDate));
    const { src, desc } = extractMediumPreview(description, 200);
    const categoryTags = categories.slice(0,3)
        .map(c => {
            return `<span class="tag">${c}</span>`;
        })
        .join("");

    return `
            <article class="article-card">
              <div class="article-card__media">
                <img src="${src}" alt="${title}">
              </div>
            
              <div class="article-card__content">
                <div class="article-card__meta">
                  <div class="article-card__time">
                        <span>${formattedDate}</span>
                        <span>${icons.calendar}</span>
                  </div>
                  <a class="article-card__read" href="${link}" target="_blank">article →</a>   
                </div>
            
                <h3 class="article-card__title">${title}</h3>
            
                <p class="article-card__excerpt">${desc}</p>
            
                <div class="article-card__footer">
                   <div class="article-card__categories">
                        ${categoryTags}
                   </div>
                </div>
              </div>
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
       revealPortfolio();

}
