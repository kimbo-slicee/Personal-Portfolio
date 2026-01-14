import dateFormatter from "../../utilities/dateFormatter.js";
import {extractMediumPreview} from "../../utilities/htmlExtractor.js";

export function createArticleCard({
                                      title,
                                      pubDate,
                                      description,
                                      link,
                                      categories = [],
                                      author = "Mohamed",
                                      variant = "vertical" // vertical | horizontal
                                  }) {
    const formattedDate = dateFormatter(new Date(pubDate));
    const { src, desc } = extractMediumPreview(description, 140);

    return `
        <article class="article-card">
            
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
