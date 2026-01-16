const cursorDot = document.querySelector(".cursor-dot");
const cursorCircle = document.querySelector(".cursor-circle");
const hoverTargets = document.querySelectorAll(
    "button, a[href], .icon, .theme-switcher, .carousel-item"
);

// Move cursor
document.addEventListener("mousemove", ({ clientX, clientY }) => {
    const x = `${clientX}px`;
    const y = `${clientY}px`;

    cursorDot.style.left = x;
    cursorDot.style.top = y;

    cursorCircle.style.left = x;
    cursorCircle.style.top = y;
});

// Hover effects
const onHoverIn = () => {
    cursorDot.classList.add("large");
    cursorCircle.style.display = "none";
};

const onHoverOut = () => {
    cursorDot.classList.remove("large");
    cursorCircle.style.display = "block";
};

hoverTargets.forEach(el => {
    el.addEventListener("mouseenter", onHoverIn);
    el.addEventListener("mouseleave", onHoverOut);
});

