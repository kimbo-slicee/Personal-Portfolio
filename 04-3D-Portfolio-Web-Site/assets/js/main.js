const pages=document.querySelectorAll(".page-container");
const book=document.querySelector(".book");
window.addEventListener("resize", ()=>{
    // Recalculate the z-index of each page based on the current number of pages
    console.log(book.getBoundingClientRect().width)
})
pages.forEach((page,index)=>{
    page.style.zIndex=String(pages.length - index -1);
    page.addEventListener("click", (e)=>{
        if(page.classList.contains("front-cover") && index===0){
            document.documentElement.style.setProperty("--translate-x", "100%");
            if(!page.classList.contains("flip")){
                page.classList.add("flip");
                page.style.zIndex=String(pages.length+index);
            }else{
                document.documentElement.style.setProperty("--translate-x", "50%");
                page.classList.remove("flip");
                page.style.zIndex=String(pages.length - index);
            }
        }else if(page.classList.contains("back-cover")){
            document.documentElement.style.setProperty("--translate-x", "150%");
            if(!page.classList.contains("flip")){
                page.classList.add("flip");
                page.style.zIndex=String(pages.length+index);
            }else{
                document.documentElement.style.setProperty("--translate-x", "100%");
                page.classList.remove("flip");
                // Delay the zIndex change to allow the flip animation to complete
                // before changing the zIndex back to its original value.
                setTimeout(()=>{
                    page.style.zIndex=String(pages.length - index);
                },100 + index * 100);
            }
        }else{
            if(!e.target.classList.contains("page")) return; // Ignore clicks on buttons
                if(!page.classList.contains("flip")){
                page.classList.add("flip");
                page.style.zIndex=String(pages.length+index);
            }else{
                page.classList.remove("flip");
                setTimeout(()=>{
                page.style.zIndex=String(pages.length - index);
                },200 + index *100);
            }
        }
    })
})
// Add event listener for the download Cv button
const downloadCvButton = document.querySelector(".download-cv");
downloadCvButton.addEventListener("click", () => {
        const a = document.createElement("a");
        a.setAttribute("download", "");
        a.href = "assets/pdf/Mohammed.pdf"; // Replace with the actual path to your PDF file
        a.download = "Mohammed_El_Aouri_Resume.file"; // Set the desired file name
        document.body.appendChild(a);
        a.click();
});
/*=========================Projects ===========================*/
// const list = document.querySelector(".projects-container ul");
// const items = list.querySelectorAll("li");
// const setIndex = (event) => {
//     // for flex
//     // if (event.target.closest('li'))
//     //   for (const item of items)
//     //     item.dataset.active =
//     //       item === event.target.closest('li') ? 'true' : 'false'
//     // for grid
//     const closest = event.target.closest("li");
//     if (closest) {
//         const index = [...items].indexOf(closest);
//         const cols = new Array(list.children.length)
//             .fill()
//             .map((_, i) => {
//                 items[i].dataset.active = (index === i).toString();
//                 return index === i ? "10fr" : "1fr";
//             })
//             .join(" ");
//         list.style.setProperty("grid-template-columns", cols);
//     }
// };
// list.addEventListener("focus", setIndex, true);
// list.addEventListener("click", setIndex);
// list.addEventListener("pointermove", setIndex);
// const resync = () => {
//     const w = Math.max(
//         ...[...items].map((i) => {
//             return i.offsetWidth;
//         })
//     );
//     list.style.setProperty("--article-width", w);
// };
// window.addEventListener("resize", resync);
// resync();
/*--------------------Accordion------------*/
// function activeToggle(){
//     let d = document,
//         accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
//         setAria,
//         setAccordionAria,
//         touchSupported = ('ontouchstart' in window),
//         pointerSupported = ('pointerdown' in window);
//
//    const skipClickDelay = function(e){
//         e.preventDefault();
//         e.target.click();
//     }
//
//     const setAriaAttr = function(el, ariaType, newProperty){
//         el.setAttribute(ariaType, newProperty);
//     };
//     setAccordionAria = function(el1, el2, expanded){
//         switch(expanded) {
//             case "true":
//                 setAriaAttr(el1, 'aria-expanded', 'true');
//                 setAriaAttr(el2, 'aria-hidden', 'false');
//                 break;
//             case "false":
//                 setAriaAttr(el1, 'aria-expanded', 'false');
//                 setAriaAttr(el2, 'aria-hidden', 'true');
//                 break;
//             default:
//                 break;
//         }
//     };
//     switchAccordion= function  (e)  {
//         e.preventDefault();
//         let thisAnswer = e.target.parentNode.nextElementSibling;
//         let thisQuestion = e.target;
//         if(thisAnswer.classList.contains('is-collapsed')) {
//             setAccordionAria(thisQuestion, thisAnswer, 'true');
//         } else {
//             setAccordionAria(thisQuestion, thisAnswer, 'false');
//         }
//         thisQuestion.classList.toggle('is-collapsed');
//         thisQuestion.classList.toggle('is-expanded');
//         thisAnswer.classList.toggle('is-collapsed');
//         thisAnswer.classList.toggle('is-expanded');
//
//         thisAnswer.classList.toggle('animateIn');
//     };
//     for (let i=0,len=accordionToggles.length; i<len; i++) {
//         if(touchSupported) {
//             accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
//         }
//         if(pointerSupported){
//             accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
//         }
//         accordionToggles[i].addEventListener('click', switchAccordion, false);
//     }
// }
// activeToggle();