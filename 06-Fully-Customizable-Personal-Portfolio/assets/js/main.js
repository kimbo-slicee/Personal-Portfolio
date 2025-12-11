/* ======== Main JavaScript file for the project ========== */
import {DOMUtils} from "/utils/DOMUtils.js";
const resumeButtons = document.querySelectorAll(".resume-buttons a");
const servesCards= document.querySelectorAll(".resume .resume-wrapper");
resumeButtons.forEach((button,index)=>{
    button.addEventListener("click",(event)=>{
        event.preventDefault();
        DOMUtils.toggleClass(resumeButtons,"btn-secondary",index);
        DOMUtils.toggleClass(servesCards,"active",index);
    });
});



