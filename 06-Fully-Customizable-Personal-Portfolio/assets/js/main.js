/* ====================================================
     About me Section accordion
   ===================================================
*/

/* ====================================================
   About Me Section Tabs (Accordion)
==================================================== */


/* =====================================================
   Resume section tabs and tab contents
===================================================== */
const resumeButtons=document.querySelectorAll(".resume-btn .btn");
const resumeWrapper=document.querySelectorAll(".resume-wrapper");

resumeButtons.forEach((btn,index)=>{
        btn.addEventListener("click",()=>{
            resumeButtons.forEach((btn)=>btn.classList.remove("active"));
            resumeWrapper.forEach((btn)=>btn.classList.remove("active"));
            btn.classList.add("active");
            resumeWrapper[index].classList.add("active");
        })
})

/* =====================================================
   Service modal open/close function
===================================================== */

/* =====================================================
   Portfolio modals, tabs and cards
===================================================== */

// Filter portfolio cards according to portfolio tabs.

// Open/Close Portfolio modals.

/* =====================================================
   Testimonial Swiper
===================================================== */

/* =====================================================
   Send/Receive emails from contact form - EmailJS
===================================================== */

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

// Rolling Text Hover Animation
