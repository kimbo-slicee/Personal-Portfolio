export function renderItems(items, container, renderItem, limit = 3) {
    if (!Array.isArray(items)) return;
    if (!(container instanceof HTMLElement)) return;
    container.innerHTML = items
        .slice(0, limit)
        .map(e=>renderItem(e))
        .join("");
}
// display more projects and articles
