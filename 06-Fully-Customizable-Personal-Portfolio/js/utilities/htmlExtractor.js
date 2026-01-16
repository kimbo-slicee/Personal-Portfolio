import {parseHTML, truncateText} from "./helpers.js";
/**
 * Truncates text to a specified maximum length.
 * @param html
 * @param maxLength
 * @return {{image: (string|string), description: *, title: string}}
 */
function extractMediumPreview(html, maxLength = 100) {
    const doc = parseHTML(html);
    const h3 = doc.querySelector("h3")?.textContent || "";
    const imageSrc = doc.querySelector("img")?.getAttribute("src") || "";
    const p = doc.querySelector("p")?.textContent || "";
    // console.log({h3, imageSrc, p});
    return {
        title: h3.trim(),
        src: imageSrc,
        desc: truncateText(p, maxLength),
    };
}


export { extractMediumPreview };