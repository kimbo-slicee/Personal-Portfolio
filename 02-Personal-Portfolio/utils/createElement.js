const createElement=(tag,className=null,hidden=undefined)=>{
    if(!tag) return;
    const element=document.createElement(tag);
    if (className) element.className=className;
    if(hidden) element.setAttribute("aria-hidden",hidden);
    return element;
}
export default createElement