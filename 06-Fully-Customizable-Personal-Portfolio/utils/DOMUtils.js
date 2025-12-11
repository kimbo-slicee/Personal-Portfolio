export const DOMUtils=(()=>{

    /**
     * Utility functions for DOM manipulation and querying.
     * @module Utils/DOMUtils
     */

    /**
     * Creates a new DOM element with specified attributes and children.
     * @param {string} tagName - The type of element to create.
     * @param {Object} [attributes={}] - An object containing key-value pairs of attributes to set on the element.
     * @param {Array<HTMLElement|string>}
     */

    const createElement=(tagName,attributes={},children=[])=>{
        const element=document.createElement(tagName);
        for(const [key,value]of Object.entries(attributes)){
            element.setAttribute(key,value);
        }
        children.forEach(child=>{
            if(typeof child==='string'){
                element.appendChild(document.createTextNode(child));
            }else{
                element.appendChild(child);
            }
        });
        return element;
    };

    /**
     * Toggles a class on a specific HTML element inside a list.
     * Removes the class from all elements, then adds it to the element at the given index.
     * @param {NodeListOf<Element>} elements - Array of HTML elements.
     * @param {string} className - The class name to toggle.
     * @param {number} index - Index of the element that should receive the class.
     */

    const toggleClass=(elements, className,index)=>{
             if(!elements || !className || elements.length === 0) return;
             elements.forEach(ele=>ele.classList.remove(className));
             elements[index].classList.add(className);
    }

    return{createElement, toggleClass};

})();