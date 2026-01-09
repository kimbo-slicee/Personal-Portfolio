import "./theme/modes.js";
import "./features/carousel/carousel.js";
import "./modules/portfolio";
import "./modules/articles";
import "./modules/resume/resume.js";
import "./modules/bottomNavBar/bottomNav.js";


/* =====================================================
   Service modal open/close function
===================================================== */
const servicesCard=document.querySelectorAll(".services-card .see-more");
const closeIcon=document.querySelectorAll(".service-model svg");

closeIcon.forEach((icon,index)=>{
    icon.addEventListener("click",()=>{
        const backdrop=document.querySelectorAll(".service-model-backdrop")[index];
        backdrop.classList.remove("open");
    })
})
servicesCard.forEach((card,index)=>{
    card.addEventListener("click",()=>{
        const backdrop=document.querySelectorAll(".service-model-backdrop")[index];
        backdrop.classList.add("open");

    })
})
