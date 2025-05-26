// /* =====================================================
//    Resume section tabs and tab contents
// ===================================================== */
// const resumeTabs = document.querySelector(".resume-tabs");
// const resumePortfolioTabBtn = resumeTabs.querySelectorAll(".tab-btn");
// const resumeTabContents = document.querySelectorAll(".resume-tab-content");
//
// resumePortfolioTabBtn.forEach((btn, index) => {
//     btn.addEventListener("click", () => activateTab(index));
// });
//
// const activateTab = (index) => {
//     // Deactivate all tabs
//     resumePortfolioTabBtn.forEach((btn) => btn.classList.remove("active"));
//
//     // Hide all sections
//     resumeTabContents.forEach((content) => content.classList.remove("active", "visible"));
//
//     // Activate the selected tab
//     resumePortfolioTabBtn[index].classList.add("active");
//
//     // Show the selected section
//     resumeTabContents[index].classList.add("active");
//     setTimeout(() => resumeTabContents[index].classList.add("visible"), 50);
// };
//
// /* =====================================================
//    Service modal open/close function
// ===================================================== */
// const serviceCardWithModals=document.querySelectorAll(".service-container .card-with-modal");
// serviceCardWithModals.forEach((serviceCardWithModal)=>{
// const serviceCard=serviceCardWithModal.querySelector(".service-card");
// const serviceBackDrop=serviceCardWithModal.querySelector(".service-modal-backdrop");
// const serviceModel=serviceCardWithModal.querySelector(".service-modal");
// const modalCloseBtn=serviceCardWithModal.querySelector(".modal-close-btn");
// serviceCard.addEventListener("click",()=>{
//     serviceBackDrop.style.display="flex";
//     setTimeout(()=>{
//         serviceBackDrop.classList.add("active")
//     },100)
//     setTimeout(()=>{
//         serviceModel.classList.add("active")
//     },300)
// })
// modalCloseBtn.addEventListener("click",()=>{
//     setTimeout(()=>{
//     serviceBackDrop.style.display="none";
//     },500)
//     setTimeout(()=>{
//     serviceBackDrop.classList.remove("active");
//     serviceModel.classList.remove("active")
//     },100)
// })
// })
//
// /* =====================================================
//    Portfolio modals, tabs and cards
// ===================================================== */
// document.addEventListener("DOMContentLoaded",()=>{
//     const portfolioTabs=document.querySelector(".portfolio-tabs");
//     const portfolioTabBtns=portfolioTabs.querySelectorAll(".tab-btn");
//     const cardsWithModals=document.querySelectorAll(".portfolio-container .card-with-modal");
//     portfolioTabBtns.forEach((tabBtn)=>{
//         tabBtn.addEventListener("click",()=>{
//             const filter=tabBtn.getAttribute("data-filter");
//             cardsWithModals.forEach((cardsWithModal)=>{
//                 if(filter==="all" || cardsWithModal.classList.contains(filter)){
//                     cardsWithModal.classList.remove("hidden")
//                     setTimeout(()=>{
//                     cardsWithModal.style.opacity="1"
//                     cardsWithModal.style.transition=".5s ease"
//                     },1)
//                 }else {
//                     cardsWithModal.style.opacity="0";
//                     cardsWithModal.classList.add("hidden")
//                 }
//             })
//             // Add Active class to the clicked tab button
//             portfolioTabBtns.forEach((tabBtn)=>tabBtn.classList.remove("active"))
//             tabBtn.classList.add("active")
//
//         })
//     })
// })
//
//
//
// const portfolioCardWithModals=document.querySelectorAll(".portfolio-container .card-with-modal");
// portfolioCardWithModals.forEach(portfolioCardWithModal=>{
//     const portfolioCard=portfolioCardWithModal.querySelector(".portfolio-card");
//     const portfolioBackdrop=portfolioCardWithModal.querySelector(".portfolio-modal-backdrop");
//     const portfolioModal=portfolioCardWithModal.querySelector(".portfolio-modal");
//     const modalCloseBtn=portfolioCardWithModal.querySelector(".modal-close-btn");
//     portfolioCard.addEventListener("click",()=>{
//         portfolioBackdrop.style.display="flex";
//         setTimeout(()=>{
//         portfolioBackdrop.classList.add("active");
//             },300)
//         setTimeout(()=>{
//         portfolioModal.classList.add("active")
//
//         },300)
//     })
//     modalCloseBtn.addEventListener("click",()=>{
//         setTimeout(()=>{
//             portfolioBackdrop.style.display="none";
//         },300)
//         setTimeout(()=>{
//             portfolioBackdrop.classList.remove("active");
//             portfolioModal.classList.remove("active")
//
//         },300)
//     })
// })
//
// /* =====================================================
//    Testimonial Swiper
// ===================================================== */
// let swiper = new Swiper(".client-swiper", {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     loop: true,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });
//
// /* =====================================================
//    Send/Receive emails from contact form - EmailJS
// ===================================================== */
//
// /* =====================================================
//    Shrink the height of the header on scroll
// ===================================================== */
// window.addEventListener("scroll",()=>{
// const  header=document.querySelector(".header");
// header.classList.toggle("shrink",window.scrollY>0)
//
// })
//
// /* =====================================================
//    Bottom navigation menu
// ===================================================== */
//
// // Each bottom navigation menu items active on page scroll.
window.addEventListener("scroll",()=>{
    const NavMeshSections=document.querySelectorAll(".nav-menu-section");
    const scrollY=window.pageYOffset
    NavMeshSections.forEach(navMenuSection=>{
        let sectionHeight=navMenuSection.offsetHeight;
        let sectionTop=navMenuSection.offsetTop-50
        let id =navMenuSection.getAttribute("id")
        if(scrollY>sectionTop && scrollY<=sectionTop + sectionHeight){
            document.querySelector(".bottom-nav .menu li a[href*="+id+"]").classList.add("current")
        }else {
            document.querySelector(".bottom-nav .menu li a[href*="+id+"]").classList.remove("current")
        }
    })
})

// Javascript to show bottom navigation menu on Hero(page load).

// // Show bottom navigation menu on click menu-show-btn.
// /* =====================================================
//    To-top-button with scroll indicator bar
// ===================================================== */
// window.addEventListener("scroll",()=>{
//     const toTopBtn=document.querySelector(".to-top-btn")
//     toTopBtn.classList.toggle("active",window.scrollY>0);
//     const scrollInDicatorBar=document.querySelector(".scroll-indicator-bar");
//     const pageScroll=document.body.scrollTop || document.documentElement.scrollTop;
//     const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;
//     scrollInDicatorBar.style.height=(pageScroll / height) * 100 + "%"
// })
//
// /* =====================================================
//    Customized cursor on mousemove
// ===================================================== */
// const cursor=document.querySelector(".cursor");
// const cursorDot=document.querySelector(".cursor-dot");
// const cursorCircle=document.querySelector(".cursor-circle");
// document.addEventListener("mousemove",(e)=>{
//     let x=e.clientX;
//     let y=e.clientY;
//     cursorDot.style.top=`${y}px`;
//     cursorDot.style.left=`${x}px`;
//     cursorCircle.style.top=`${y}px`;
//     cursorCircle.style.left=`${x}px`;
// })
// // add Cursor Effect
// const cursorHoverLinks =document.querySelectorAll(`body a, .theme-btn,.main-btn,.portfolio-card,.swiper-button-next,.swiper-button-prev , .swiper-pagination, .service-card , .contact-social-links li , .submit-btn`);
// cursorHoverLinks.forEach(link=>{
//     link.addEventListener("mouseover",_=>{
//         cursorCircle.style.opacity="0";
//         cursorDot.classList.add("large");
//     })
// })
// cursorHoverLinks.forEach(link=>{
//     link.addEventListener("mouseout",_=>{
//         cursorCircle.style.opacity="1";
//         cursorDot.classList.remove("large");
//     })
// })
//
//
// /*
// =====================================================
//            Website dark/light theme
// =====================================================
// */
//
// // Change theme and save current theme on click the theme button.
// // const themeBtn=document.querySelector(".theme-btn");
// // themeBtn.addEventListener("click",()=>{
// //     themeBtn.classList.toggle("active-sun-icon");
// //     document.body.classList.toggle("light-theme");
// //     const getCurrentIcon=()=>themeBtn.classList.contains("active-sun-icon")?"sun":"moon";
// //     const getCurrentTheme=()=>document.body.classList.contains("light-theme")?"light":"dark"
// //     localStorage.setItem("saved-Icon",getCurrentIcon());
// //     localStorage.setItem("saved-theme",getCurrentTheme());
// // })
// // // Get saved theme icon and theme on document loaded.
// // const savedIcon=localStorage.getItem("saved-Icon");
// // const savedTheme=localStorage.getItem("saved-theme")
// // document.addEventListener("DOMContentLoaded",()=>{
// //     themeBtn.classList[savedIcon==="sun"?"add":"remove"]("active-sun-icon")
// //     document.body.classList[savedTheme==="light"?"add":"remove"]("light-theme")
// // })
//
// /* =====================================================
//    ScrollReveal JS animations
// ===================================================== */
// // Common reveal options to create reveal animations.
// ScrollReveal({
//     distance:"60px",
//     duration:250,
//     delay:200,
// })
// // ScrollReveal().reveal(".avatar-img",{delay: 300,origin:'top'});
// // ScrollReveal().reveal(".avatar-info,.section-title",{delay:300,origin:'top'});
// // ScrollReveal().reveal(".Hero-social, .Hero-scroll-btn",{delay: 400,origin:'bottom'});
// // ScrollReveal().reveal(".about-image",{delay: 700,origin:'top'});
// // ScrollReveal().reveal(".about-info,.Footer,.logo",{delay: 300,origin:'bottom'});
// // ScrollReveal().reveal(".pro-card,.about-buttons,.main-btn,.resume-tabs,.tab-btn",
// //     {delay: 500,origin:'right',interval:200});
// // ScrollReveal().reveal("#resume, .section-content",{delay: 700,origin:'bottom'});
// // ScrollReveal().reveal(".service-card",{delay: 300,origin:'bottom',interval: 300});
// // ScrollReveal().reveal(".service-card,.portfolio-card,.contact-item,.contact-social-links li,.Footer-menu .menu-item",{delay: 300,origin:'bottom',interval: 300});
// // ScrollReveal().reveal(".client-swiper,.contact-form-container",{delay: 700,origin:'right'});
// // ScrollReveal().reveal(".contact-info h3",{delay: 100,origin:'bottom',interval:300});
// /*==========================BackGround Animation================================*/
//
