const initScrollIndicator=()=>{
// Create scroll indicator bar
window.addEventListener("scroll",()=>{
    const toTopBtn=document.querySelector(".to-top-btn");
    toTopBtn.classList.toggle("active",window.scrollY>0);
    const scrollIndicatorBar=document.querySelector(".scroll-indicator-bar");
    const pageScroll=document.body.scrollTop || document.documentElement.scrollTop;
    const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;
    scrollIndicatorBar.style.height=(pageScroll / height) * 100 + "%"
})
// Scroll to top button functionality
const toTopBtn=document.querySelector(".to-top-btn");
toTopBtn.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
});
}
export default initScrollIndicator