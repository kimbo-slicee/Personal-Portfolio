const initScrollIndicator=()=>{
window.addEventListener("scroll",()=>{
    const toTopBtn=document.querySelector(".to-top-btn")
    toTopBtn.classList.toggle("active",window.scrollY>0);
    const scrollInDicatorBar=document.querySelector(".scroll-indicator-bar");
    const pageScroll=document.body.scrollTop || document.documentElement.scrollTop;
    const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;
    scrollInDicatorBar.style.height=(pageScroll / height) * 100 + "%"
})
}
export default initScrollIndicator