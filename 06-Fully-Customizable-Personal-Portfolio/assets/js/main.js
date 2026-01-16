import "./theme/modes.js";
import "./features/carousel/carousel.js";
import "./modules/portfolio";
import "./modules/articles";
import "./modules/resume/resume.js";
import "./modules/bottomNavBar/bottomNav.js";
import "./features/cursor.js";
import "./features/ScrollReveal.js";

const mouseScroll=document.querySelector(".mouse-scroll");
const compass = document.querySelector(".scroll-compass");
const progressCircle = compass.querySelector(".progress");
const dial = compass.querySelector(".dial");
const RADIUS = 52;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const updateCompass = () => {
    const scrollTop = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    const progress = Math.min(scrollTop / maxScroll, 1);

    // Progress ring
    progressCircle.style.strokeDashoffset = CIRCUMFERENCE * (1 - progress);

    // Dial rotation (subtle compass movement)
    dial.style.transform = `rotate(${progress * 90}deg)`;

    // Show / hide
    compass.style.opacity = scrollTop > 200 ? "1" : "0";
};

window.addEventListener("scroll", updateCompass, { passive: true });
compass.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

updateCompass();





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
/* =========================================================*/
const heroSection = document.getElementById("hero");
const nextSection = heroSection.nextElementSibling;

mouseScroll.addEventListener("click", () => {
    nextSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
});
/* ================================

   ================================
 */