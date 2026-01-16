const sr = ScrollReveal({
    origin: 'bottom',
    distance: '40px',
    duration: 800,
    delay: 100,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    reset: false,
    mobile: true,
    viewFactor: 0.2
});

export function revealPortfolio() {
    sr.reveal('.project-card .front-face , .article-card', {
        origin: 'bottom',
        interval: 150,
        scale: 0.97,
        beforeReveal(el) {
            el.style.transform = 'none';
        }
    });
}

/* heder */
sr.reveal('#header', {
    opacity: 0,
    duration: 600
});
sr.reveal('#header .logo', {
    origin: 'top',
    delay: 100
});
sr.reveal('#header .controls', {
    origin: 'top',
    delay: 200
});
sr.reveal(
    '#header .theme-switcher, #header .cta-button',
    {
        origin: 'top',
        interval: 120,
        delay: 300
    }
);
if (window.innerWidth < 768) {
    ScrollReveal().reveal('#header *', {
        duration: 400,
        distance: '12px'
    });
}
if (!document.body.classList.contains('page-loaded')) {
    document.body.classList.add('page-loaded');
}

// 1. Social Links (Left)
sr.reveal('#hero .social-links', {
    origin: 'left',
    delay: 200
});

// 2. Hero Image (Center)
sr.reveal('#hero .hero-image', {
    origin: 'bottom',
    delay: 400,
    scale: 0.95 // subtle zoom-in
});

// 3. Hero Text (Right)
sr.reveal('#hero .hero-title', {
    origin: 'top',
    delay: 500
});

sr.reveal('#hero .name', {
    origin: 'top',
    delay: 600
});

sr.reveal('#hero .profession', {
    origin: 'top',
    delay: 700
});

sr.reveal('#hero .hero-button', {
    origin: 'bottom',
    delay: 800,
    scale: 0.95
});

// 4. Scroll Indicator (Bottom)
sr.reveal('#hero .mouse-scroll', {
    origin: 'bottom',
    delay: 500,
    distance: '20px'
});



/* ========================================= */

sr.reveal('.section-title', {
    origin: 'top',
    delay: 100,
    opacity:0
});

sr.reveal('.section-subtitle', {
    origin: 'top',
    delay: 200
});

sr.reveal('#about .hero-circle .big-circle', {
    origin: 'left',
    distance: '60px',
    delay: 300
});

sr.reveal('#about .hero-circle .circle', {
    origin: 'right',
    distance: '60px',
    delay: 400
});

// Individual icons inside circles (staggered)
sr.reveal('#about .tech-icon', {
    origin: 'bottom',
    distance: '20px',
    interval: 100
});
sr.reveal('#about .about-text', {
    origin: 'right',
    distance: '50px',
    delay: 500
});

sr.reveal('#about .about-button', {
    origin: 'bottom',
    distance: '20px',
    interval: 150,
    delay: 600
});

sr.reveal('#about .carousel', {
    origin: 'left',
    distance: '30px',
    interval: 100,
    delay: 700,
});

sr.reveal('#about .tech-icon', {
    origin: 'bottom',
    distance: '20px',
    interval: 100,
    scale: 0.95
});

sr.reveal('#about .center-logo img', {
    origin: 'bottom',
    distance: '40px',
    scale: 0.95,
    delay: 450
});


const resumeSR = ScrollReveal({
    distance: '40px',
    duration: 800,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    reset: false,
    mobile: true,
    viewFactor: 0.2
});


resumeSR.reveal('.resume-buttons .btn', {
    origin: 'top',
    distance: '20px',
    interval: 120
});

resumeSR.reveal('.resume-wrapper .timeline-bar', {
    origin: 'top',
    distance: '80px',
    delay: 200
});

// Left items
resumeSR.reveal('.timeline-item.left', {
    origin: 'left',
    distance: '50px',
    interval: 200
});

// Right items
resumeSR.reveal('.timeline-item.right', {
    origin: 'right',
    distance: '50px',
    interval: 200
});

resumeSR.reveal('.resume-icon', {
    scale: 0.85,
    duration: 600,
    interval: 150
});

resumeSR.reveal('.resume-details h2', {
    origin: 'bottom',
    distance: '15px',
    delay: 100
});

resumeSR.reveal('.resume-details h3, .resume-details .date', {
    origin: 'bottom',
    distance: '10px',
    interval: 100
});

/* ==================================== */

sr.reveal('.services-card .front', {
    origin: 'bottom',
    distance: '40px',
    duration: 700,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    interval: 150,
    reset: false
});


sr.reveal('.services-card', {
    origin: 'bottom',
    distance: '40px',
    beforeReveal(el) {
        el.style.transform = 'none';
    }
});

sr.reveal(".portfolio-buttons .btn",{
    origin: 'top',
    distance: '20px',
    interval: 120
})

/* ========================================== */
sr.reveal('.contact-card', {
    origin: 'bottom',   // cards come from bottom
    interval: 150,      // stagger animation
    opacity: 0,
    scale: 0.97
});

sr.reveal('.social-icon', {
    origin: 'left',    // icons slide from left
    interval: 100,
    opacity: 0,
    distance: '30px'
});

sr.reveal('.contact-form > h3, .contact-form > p, .contact-form-fields', {
    origin: 'right',   // form comes from right
    distance: '40px',
    interval: 120,
    opacity: 0,
    scale: 0.98
});

sr.reveal('.contact-action, .btn-primary', {
    origin: 'bottom',
    distance: '20px',
    opacity: 0,
    duration: 500,
    delay: 200
});

sr.reveal('.footer-title', {
    origin: 'top',     // slides down from top
    distance: '30px',
    duration: 800,
    opacity: 0
});

sr.reveal('.footer-links li', {
    origin: 'left',    // links slide from left
    distance: '20px',
    interval: 150,     // stagger each link
    opacity: 0,
    duration: 700
});

sr.reveal('.footer-copy', {
    origin: 'bottom',  // slides up slightly
    distance: '20px',
    opacity: 0,
    duration: 700,
    delay: 200          // after links finish
});

sr.reveal('.footer-title, .footer-links li, .footer-copy', {
    scale: 0.98,
    opacity: 0,
    distance: '20px',
    interval: 120
});

