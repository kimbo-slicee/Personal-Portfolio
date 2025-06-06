const initBottomNavigationMenu=()=>{
//     window.addEventListener("DOMContentLoaded",()=>{
//         const bottomNav=document.querySelector(".bottom-nav");
//         bottomNav.classList.toggle("active",window.scrollY<10)
//     })
//     const bottomNav=document.querySelector(".bottom-nav");
//     const menuHideBtn=document.querySelector(".menu-hide-btn");
//     const menuShowBtn=document.querySelector(".menu-show-btn");
//     let navTimeout;
//     window.addEventListener("scroll",()=>{
//         bottomNav.classList.add("active");
//         menuShowBtn.classList.remove("active")
//         if(window.scrollY < 10){
//             menuHideBtn.classList.remove("active")
//             function scrollStopped() {
//                 bottomNav.classList.add("active")
//             }
//             clearTimeout(navTimeout);
//             navTimeout=setTimeout(scrollStopped,2500)
//         }
//         if(window.scrollY>10 || window.scrollY < 10){
//             menuHideBtn.classList.add("active")
//             function scrollStopped() {
//                 bottomNav.classList.remove("active")
//                 menuShowBtn.classList.add("active")
//             }
//             clearTimeout(navTimeout);
//             navTimeout=setTimeout(scrollStopped,2500)
//         }
//     })
//
// // Hide bottom navigation menu on click menu-hide-btn.
//     menuHideBtn.addEventListener("click",()=>{
//         bottomNav.classList.toggle("active");
//         menuHideBtn.classList.toggle("active");
//         menuShowBtn.classList.toggle("active");
//
//     })
//     menuShowBtn.addEventListener("click",()=>{
//         bottomNav.classList.toggle("active");
//         menuHideBtn.classList.add("active");
//         menuShowBtn.classList.toggle("active")
//     })
//     // Each bottom navigation menu items active on page scroll.
//     window.addEventListener("scroll",()=>{
//         const NavMeshSections=document.querySelectorAll(".nav-menu-section");
//         const scrollY=window.scrollY
//             NavMeshSections.forEach(navMenuSection=>{
//             let sectionHeight=navMenuSection.offsetHeight;
//             let sectionTop=navMenuSection.offsetTop-50
//             let id =navMenuSection.getAttribute("id")
//             if(scrollY>sectionTop && scrollY<=sectionTop + sectionHeight){
//                 document.querySelector(".bottom-nav .menu li a[href*="+id+"]").classList.add("current")
//             }else {
//                 document.querySelector(".bottom-nav .menu li a[href*="+id+"]").classList.remove("current")
//             }
//         })
//     })

}
export default initBottomNavigationMenu;