export const initNavbar =()=>{
    const themeBtn=document.querySelector(".theme-btn");
        themeBtn.addEventListener("click",()=>{
        themeBtn.classList.toggle("active-sun-icon");
        document.body.classList.toggle("light-theme");
        const getCurrentIcon=()=>themeBtn.classList.contains("active-sun-icon")?"sun":"moon";
        const getCurrentTheme=()=>document.body.classList.contains("light-theme")?"light":"dark"
        localStorage.setItem("saved-Icon",getCurrentIcon());
        localStorage.setItem("saved-theme",getCurrentTheme());
    })
    // Get saved theme icon and theme on document loaded.
    const savedIcon=localStorage.getItem("saved-Icon");
    const savedTheme=localStorage.getItem("saved-theme")
    document.addEventListener("DOMContentLoaded",()=>{
        themeBtn.classList[savedIcon==="sun"?"add":"remove"]("active-sun-icon")
        document.body.classList[savedTheme==="light"?"add":"remove"]("light-theme")
    })
}
