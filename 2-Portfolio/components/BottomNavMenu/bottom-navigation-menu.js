export const initBottomNavigationMenu=()=>{
    window.addEventListener("DOMContentLoaded",()=>{
        const bottomNav=document.querySelector(".bottom-nav");
        bottomNav.classList.toggle("active",window.scrollY<10)
    })

// Javascript to show/hide bottom navigation menu on Hero(scroll).
    const bottomNav=document.querySelector(".bottom-nav");
    const menuHideBtn=document.querySelector(".menu-hide-btn");
    const menuShowBtn=document.querySelector(".menu-show-btn");
    let navTimeout;
    window.addEventListener("scroll",()=>{
        bottomNav.classList.add("active");
        menuShowBtn.classList.remove("active")
        if(window.scrollY < 10){
            menuHideBtn.classList.remove("active")
            function scrollStopped() {
                bottomNav.classList.add("active")
            }
            clearTimeout(navTimeout);
            navTimeout=setTimeout(scrollStopped,2500)
        }
        if(window.scrollY>10 || window.scrollY < 10){
            menuHideBtn.classList.add("active")
            function scrollStopped() {
                bottomNav.classList.remove("active")
                menuShowBtn.classList.add("active")
            }
            clearTimeout(navTimeout);
            navTimeout=setTimeout(scrollStopped,2500)
        }
    })

// Hide bottom navigation menu on click menu-hide-btn.
    menuHideBtn.addEventListener("click",()=>{
        bottomNav.classList.toggle("active");
        menuHideBtn.classList.toggle("active");
        menuShowBtn.classList.toggle("active");

    })
    menuShowBtn.addEventListener("click",()=>{
        bottomNav.classList.toggle("active");
        menuHideBtn.classList.add("active");
        menuShowBtn.classList.toggle("active")
    })

}
