/* ========= ThemeToggle Functionality ========== */
import {toggleTheme} from "/utils/ThemeToggle.js";
import UIUtils from "../../utils/UIUtils.js";
toggleTheme();

/* ======== Main JavaScript file for the project ========== */

/*====================== |  | ======================*/

const buttons =document.querySelectorAll('.resume-buttons button');
const wrappers =document.querySelectorAll('.resume-wrapper');
// reusable function to handle button click
const handleButtonClick = (event,i,e1=null,e2=null) => {
    const button = event.currentTarget;
    UIUtils.removeClass([...e1,...e2],'active');
    UIUtils.toggleClass([button,wrappers[i]],'active');
}
buttons.forEach((button,i)=>{
    // add event listener to each button
    button.addEventListener("click",(e)=>handleButtonClick(e,i,buttons,wrappers));
});


/* ====================== | SERVICES LOGIC  | ======================*/
const seeMore = document.querySelectorAll('.services-card .see-more');
seeMore.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        const card = e.currentTarget.closest('.services-card');
        const serviceCardBackDrop= card.querySelector('.service-model-backdrop');
        const colseBtn = serviceCardBackDrop.querySelector('.service-model-backdrop .service-model svg');
        serviceCardBackDrop.classList.add('open');
        colseBtn.addEventListener('click',()=>{
            serviceCardBackDrop.classList.remove('open');
        });
    });
});

/* ===================== | Smooth Scroll | ===================== */



