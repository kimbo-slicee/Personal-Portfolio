const UIUtils = (()=>{
    // filter element by a given data attribute and its value
    const removeClass = (element, className) => {
        if(Array.isArray(element)){
            element.forEach(el => el.classList.remove(className));
            return;
        }
        element.classList.remove(className)
    }
    // filter element by a given data attribute and its value
    const filterByDataAttr = (element, attr, value) => {
        return element.filter(el => el.getAttribute(`data-${attr}`) === value);
    }
    // toggle a class on a given element
    const toggleClass = (element, className) => {
        if (!element) return;
        if(Array.isArray(element)){
            element.forEach(el => el.classList.toggle(className));
            return;
        }
        element.classList.toggle(className);
    }
    return {filterByDataAttr, removeClass, toggleClass};
})();
export default UIUtils;