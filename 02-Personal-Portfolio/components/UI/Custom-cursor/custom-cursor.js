const initCursor=()=>{
    document.addEventListener("DOMContentLoaded",()=>{
        const cursor=document.querySelector(".cursor");
        const cursorDot=document.querySelector(".cursor-dot");
        const cursorCircle=document.querySelector(".cursor-circle");
        document.addEventListener("mousemove",(e)=>{
            let x=e.clientX;
            let y=e.clientY;
            cursorDot.style.top=`${y}px`;
            cursorDot.style.left=`${x}px`;
            cursorCircle.style.top=`${y}px`;
            cursorCircle.style.left=`${x}px`;
        })
        const cursorHoverLinks =document.querySelectorAll(`body a, .theme-btn,.main-btn,.portfolio-card,.swiper-button-next,.swiper-button-prev , .swiper-pagination, .service-card , .contact-social-links li , .submit-btn`);
        console.log(cursorHoverLinks)
        cursorHoverLinks.forEach(link=>{
            link.addEventListener("mouseenter",_=>{
                cursorCircle.style.opacity="0";
                cursorDot.classList.add("large");
            })
        })
        cursorHoverLinks.forEach(link=>{
            link.addEventListener("mouseout",_=>{
                cursorCircle.style.opacity="1";
                cursorDot.classList.remove("large");
            })
        })
    })
}
export default initCursor;
