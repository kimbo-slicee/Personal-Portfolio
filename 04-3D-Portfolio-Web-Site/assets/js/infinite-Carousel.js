const carouselDuplicates = 3;
const carousels = document.querySelectorAll(".carousel");
const prefersReducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
const hasFinePointer = matchMedia("(pointer: fine)");

function lerp(a, b, t) {
    return a + (b - a) * t;
}

const carouselStates = Array.from(carousels).map(() => ({
    hasPointer: false,
    lastX: null,
    scrollDelta: 0
}));

function updateScroll() {
    carousels.forEach((carousel, index) => {
        const state = carouselStates[index];
        carousel.scrollBy({ left: state.scrollDelta });

        if (state.hasPointer || prefersReducedMotion.matches) {
            state.scrollDelta = 0;
        } else {
            state.scrollDelta = lerp(state.scrollDelta, 0, 0.045);
        }
    });

    requestAnimationFrame(updateScroll);
}

carousels.forEach((carousel, index) => {
    const state = carouselStates[index];

    // Prevent default touch scroll behavior
    carousel.addEventListener("pointerdown", (event) => {
        event.preventDefault();
        state.hasPointer = true;
        state.lastX = event.clientX;
    });

    carousel.addEventListener("pointermove", (event) => {
        if (state.hasPointer) {
            event.preventDefault();
            if (state.lastX !== null) {
                state.scrollDelta = state.lastX - event.clientX;
            }
            state.lastX = event.clientX;
        }
    });

    window.addEventListener("pointerup", () => {
        state.hasPointer = false;
        state.lastX = null;
    });

    carousel.addEventListener("wheel", (event) => {
        if (hasFinePointer.matches && event.shiftKey) {
            event.preventDefault();
            const scrollMultiplier = prefersReducedMotion.matches ? 2 : 0.1;
            state.scrollDelta += event.deltaY * scrollMultiplier;
        }
    });

    carousel.addEventListener("scroll", () => {
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

// Duplicate items for infinite loop
const carouselItems = document.querySelectorAll(".carousel-items");
for (let i = 0; i < carouselDuplicates; i++) {
    carouselItems.forEach((item) => {
        const duplicate = item.cloneNode(true);
        duplicate.ariaHidden = true;
        item.parentElement.prepend(duplicate);
        item.parentElement.append(duplicate.cloneNode(true));
    });
}

// Initial scroll offset to center the carousel
carousels.forEach((carousel) => {
    const carouselContent = carousel.querySelector(".carousel-items");
    carousel.scrollLeft += carouselContent.offsetWidth * carouselDuplicates;
});

requestAnimationFrame(updateScroll);
