/**
 *  Truncates text to a specified maximum length.
 * @param text
 * @param maxLength
 * @return {*|string}
 */
function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + "...";
}

/**
 * Parses an HTML string and returns a Document object.
 * @param htmlString
 * @return {Document}
 */
function parseHTML(htmlString) {
    const parser = new DOMParser();
    return parser.parseFromString(htmlString, "text/html");
}
const activeItem=(item,items,className)=>{
    items?.forEach(e=>e.classList.remove(className))
    item?.classList.add(className)
}


export { truncateText , parseHTML ,activeItem};