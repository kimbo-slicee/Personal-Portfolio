/* =====================================================
   Resume section tabs and tab contents
===================================================== */
const resumeTabs = document.querySelector(".resume-tabs");
const resumePortfolioTabBtn = resumeTabs.querySelectorAll(".tab-btn");
const resumeTabContents = document.querySelectorAll(".resume-tab-content");

resumePortfolioTabBtn.forEach((btn, index) => {
    btn.addEventListener("click", () => activateTab(index));
});

const activateTab = (index) => {
    // Deactivate all tabs
    resumePortfolioTabBtn.forEach((btn) => btn.classList.remove("active"));

    // Hide all sections
    resumeTabContents.forEach((content) => content.classList.remove("active", "visible"));

    // Activate the selected tab
    resumePortfolioTabBtn[index].classList.add("active");

    // Show the selected section
    resumeTabContents[index].classList.add("active");
    setTimeout(() => resumeTabContents[index].classList.add("visible"), 50);
};

/* =====================================================
   Service modal open/close function
===================================================== */
const serviceCardWithModals=document.querySelectorAll(".service-container .card-with-modal");
serviceCardWithModals.forEach((serviceCardWithModal)=>{
const serviceCard=serviceCardWithModal.querySelector(".service-card");
const serviceBackDrop=serviceCardWithModal.querySelector(".service-modal-backdrop");
const serviceModel=serviceCardWithModal.querySelector(".service-modal");
const modalCloseBtn=serviceCardWithModal.querySelector(".modal-close-btn");
serviceCard.addEventListener("click",()=>{
    serviceBackDrop.style.display="flex";
    setTimeout(()=>{
        serviceBackDrop.classList.add("active")
    },100)
    setTimeout(()=>{
        serviceModel.classList.add("active")
    },300)
})
modalCloseBtn.addEventListener("click",()=>{
    setTimeout(()=>{
    serviceBackDrop.style.display="none";
    },500)
    setTimeout(()=>{
    serviceBackDrop.classList.remove("active");
    serviceModel.classList.remove("active")
    },100)
})
})

/* =====================================================
   Portfolio modals, tabs and cards
===================================================== */
document.addEventListener("DOMContentLoaded",()=>{
    const portfolioTabs=document.querySelector(".portfolio-tabs");
    const portfolioTabBtns=portfolioTabs.querySelectorAll(".tab-btn");
    const cardsWithModals=document.querySelectorAll(".portfolio-container .card-with-modal");
    portfolioTabBtns.forEach((tabBtn)=>{
        tabBtn.addEventListener("click",()=>{
            const filter=tabBtn.getAttribute("data-filter");
            cardsWithModals.forEach((cardsWithModal)=>{
                if(filter==="all" || cardsWithModal.classList.contains(filter)){
                    cardsWithModal.classList.remove("hidden")
                    setTimeout(()=>{
                    cardsWithModal.style.opacity="1"
                    cardsWithModal.style.transition=".5s ease"

                    },1)
                }else {
                    cardsWithModal.style.opacity="0";
                    cardsWithModal.classList.add("hidden")
                }
            })
            // Add Active class to the clicked tab button
            portfolioTabBtns.forEach((tabBtn)=>tabBtn.classList.remove("active"))
            tabBtn.classList.add("active")

        })
    })
})






// Filter portfolio cards according to portfolio tabs.

// Open/Close Portfolio modals.
const portfolioCardWithModals=document.querySelectorAll(".portfolio-container .card-with-modal");
portfolioCardWithModals.forEach(portfolioCardWithModal=>{
    const portfolioCard=portfolioCardWithModal.querySelector(".portfolio-card");
    const portfolioBackdrop=portfolioCardWithModal.querySelector(".portfolio-modal-backdrop");
    const portfolioModal=portfolioCardWithModal.querySelector(".portfolio-modal");
    const modalCloseBtn=portfolioCardWithModal.querySelector(".modal-close-btn");
    portfolioCard.addEventListener("click",()=>{
        portfolioBackdrop.style.display="flex";
        setTimeout(()=>{
        portfolioBackdrop.classList.add("active");
            },300)
        setTimeout(()=>{
        portfolioModal.classList.add("active")

        },300)
    })
    console.log(modalCloseBtn)
    modalCloseBtn.addEventListener("click",()=>{
        setTimeout(()=>{
            portfolioBackdrop.style.display="none";
        },300)
        setTimeout(()=>{
            portfolioBackdrop.classList.remove("active");
            portfolioModal.classList.remove("active")

        },300)
    })
})

/* =====================================================
   Testimonial Swiper
===================================================== */
let swiper = new Swiper(".client-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/* =====================================================
   Send/Receive emails from contact form - EmailJS
===================================================== */
(function() {
    emailjs.init({
        publicKey: "rveiSv-6DyLzfu1UO",
    });
})();
const contactFormAlert=document.querySelector(".contact-form-alert");
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // these IDs from the previous steps
    emailjs.sendForm('contact_service', 'contact_form', this)
        .then(() => {
            console.log('SUCCESS!');
        }, (error) => {
            console.log('FAILED...', error);
        });
});
/* =====================================================
   Shrink the height of the header on scroll
===================================================== */

/* =====================================================
   Bottom navigation menu
===================================================== */

// Each bottom navigation menu items active on page scroll.

// Javascript to show bottom navigation menu on home(page load).

// Javascript to show/hide bottom navigation menu on home(scroll).

// Hide bottom navigation menu on click menu-hide-btn.

// Show bottom navigation menu on click menu-show-btn.

/* =====================================================
   To-top-button with scroll indicator bar
===================================================== */

/* =====================================================
   Customized cursor on mousemove
===================================================== */

// Cursor effects on hover website elements.

/* =====================================================
   Website dark/light theme
===================================================== */

// Change theme and save current theme on click the theme button.

// Get saved theme icon and theme on document loaded.

/* =====================================================
   ScrollReveal JS animations
===================================================== */

// Common reveal options to create reveal animations.

// Target elements and specify options to create reveal animations.