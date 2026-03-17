const cursorDot = document.querySelector(".cursor-dot");
const cursorCircle = document.querySelector(".cursor-circle");

let mouseX = 0;
let mouseY = 0;
let circleX = 0;
let circleY = 0;

// Track mouse position
document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    // Instant dot (no lag)
    cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
});

// Smooth animation loop for circle
function animate() {
    // Smooth follow (lerp)
    circleX += (mouseX - circleX) * 0.1;
    circleY += (mouseY - circleY) * 0.1;

    cursorCircle.style.transform = `translate(${circleX}px, ${circleY}px)`;

    requestAnimationFrame(animate);
}
animate();

// Hover (using event delegation → better performance)
document.addEventListener("mouseover", (e) => {
    if (e.target.closest("button, a, .icon, .theme-switcher, .carousel-item")) {
        cursorDot.classList.add("large");
        cursorCircle.style.opacity = "0";
    }
});

document.addEventListener("mouseout", (e) => {
    if (e.target.closest("button, a, .icon, .theme-switcher, .carousel-item")) {
        cursorDot.classList.remove("large");
        cursorCircle.style.opacity = "1";
    }
});