import {getProjectsByCategory} from "../services/projects.service.js";
import {renderItems} from "./dom.js";
import {portfolioCard} from "../ui/projectsCard.template.js";
import {activeItem} from "../utilities/helpers.js";
import {imageSlliders} from "../features/projects-sliders.js";

const portfolioContainer=document.querySelector(".portfolio-items");
const portfolioFilterButtons=document.querySelectorAll(".portfolio-buttons button");
let currentCategory = "all";
async function init(){
    let projectList= await getProjectsByCategory(currentCategory);
    renderItems(projectList,portfolioContainer,portfolioCard,6);
}
// filler based on filter buttons
portfolioFilterButtons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        activeItem(button,portfolioFilterButtons,"active");
        currentCategory=e.target.dataset.filter;
        init();
    })
});




init().then(()=>{
    const portfolioItems=document.querySelectorAll(".portfolio-items .portfolio-item");
    const closeBtn=document.querySelectorAll(".back-overlay .close-mark");
    console.log(closeBtn);
    portfolioItems.forEach((item)=>{
        item.addEventListener("click",()=>{
            const cardBackOverlay=item.querySelector(".back-overlay");
            cardBackOverlay.classList.add("open");
        })
    })
    imageSlliders()
});

