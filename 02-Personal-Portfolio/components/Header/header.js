import initThemeToggle from "../../utils/theme.js";

const initHeader=()=>{
    const themeIcons=document.querySelector(".theme-btn");
    initThemeToggle(themeIcons);
}
export default initHeader;