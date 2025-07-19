const carouselDuplicates = 3;
const carousels = document.querySelectorAll(".carousel");
const prefersReducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
const hasFinePointer = matchMedia("(pointer: fine)");

// Utility: Linear interpolation
function lerp(a, b, t) {
    return a + (b - a) * t;
}

// Utility: Midpoint for touch (kept but unused for now)
function getTouchMidpoint(touches) {
    let midpoint = { x: touches[0].clientX, y: touches[0].clientY };
    for (let i = 1; i < touches.length; i++) {
        midpoint.x = lerp(midpoint.x, touches[i].clientX, 0.5);
        midpoint.y = lerp(midpoint.y, touches[i].clientY, 0.5);
    }
    return midpoint;
}

// Each carousel gets its own state
const carouselStates = Array.from(carousels).map(() => ({
    hasMouse: false,
    lastMouseX: null,
    scrollDelta: 0,
    touches: 0,
    lastTouchX: null
}));

// Touch end / cancel handler (for future use)
function handleTouchRemove(state, event) {
    state.touches -= event.changedTouches.length;
    if (state.touches <= 0 && !state.hasMouse) {
        state.lastTouchX = null;
    }
}

// Update loop for infinite scrolling + smooth momentum
function updateScroll(timestamp) {
    carousels.forEach((carousel, index) => {
        const state = carouselStates[index];
        carousel.scrollBy({ left: state.scrollDelta });

        if (state.hasMouse || state.touches > 0 || prefersReducedMotion.matches) {
            state.scrollDelta = 0;
        } else {
            state.scrollDelta = lerp(state.scrollDelta, 0, 0.045);
        }
    });

    requestAnimationFrame(updateScroll);
}

// Setup for each carousel
carousels.forEach((carousel, index) => {
    const state = carouselStates[index];

    // Mouse down → enable dragging
    carousel.addEventListener("mousedown", () => {
        state.hasMouse = true;
    });

    // Mouse up → disable dragging
    window.addEventListener("mouseup", () => {
        state.hasMouse = false;
        state.lastMouseX = null;
    });

    // Mouse move → update drag scroll
    window.addEventListener("mousemove", (event) => {
        if (state.hasMouse) {
            if (state.lastMouseX !== null) {
                state.scrollDelta = state.lastMouseX - event.x;
            }
            state.lastMouseX = event.x;
        }
    });

    // Wheel scroll with Shift → horizontal scroll
    carousel.addEventListener("wheel", (event) => {
        if (hasFinePointer.matches && event.shiftKey) {
            event.preventDefault();
            const scrollMultiplier = prefersReducedMotion.matches ? 2 : 0.1;
            state.scrollDelta += event.deltaY * scrollMultiplier;
        }
    });

    // Infinite scroll: reposition when out of view
    carousel.addEventListener("scroll", () => {
        // const carouselContent = carousel.querySelector(".carousel-items");
        // const rect = carouselContent.getBoundingClientRect();
        // if (rect.left > window.innerWidth) {
        //     carousel.scrollLeft += carouselContent.offsetWidth;
        // } else if (rect.right < 0) {
        //     carousel.scrollLeft -= carouselContent.offsetWidth;
        // }
        const carouselContent = carousel.querySelector(".carousel-items");
        const scrollWidth = carousel.scrollWidth;
        const singleWidth = carouselContent.offsetWidth;

        if (carousel.scrollLeft <= singleWidth) {
            carousel.scrollLeft += singleWidth;
        } else if (carousel.scrollLeft >= scrollWidth - singleWidth) {
            carousel.scrollLeft -= singleWidth;
        }
    });
});

// Duplicate carousel items for infinite loop effect
const carouselItems = document.querySelectorAll(".carousel-items");

for (let i = 0; i < carouselDuplicates; i++) {
    carouselItems.forEach((item) => {
        const duplicate = item.cloneNode(true);
        duplicate.ariaHidden = true;
        item.parentElement.prepend(duplicate);
        item.parentElement.append(duplicate.cloneNode(true));
    });
}

// Shift starting scroll position so we start mid-loop
carousels.forEach((carousel) => {
    const carouselContent = carousel.querySelector(".carousel-items");
    carousel.scrollLeft += carouselContent.offsetWidth * carouselDuplicates;
});

// Start the loop
requestAnimationFrame(updateScroll);
