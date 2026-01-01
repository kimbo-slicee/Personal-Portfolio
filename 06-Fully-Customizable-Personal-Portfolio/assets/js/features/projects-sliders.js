const imageSlliders=()=>{
    const track = document.querySelector(".slider-track");
    const slides = Array.from(track.children);
    console.log(slides[0].offsetLeft);
    let index = 0;
    const scrollToSlide = (i) => {
        slides[i].scrollIntoView({
            behavior: "smooth",
            inline: "start",
            block: "nearest"
        });
    };

    document.querySelector(".arrow-right").onclick = () => {
        index = Math.min(index + 1, slides.length - 1);
        // index++
        scrollToSlide(index);
    };

    document.querySelector(".arrow-left").onclick = () => {
        index = Math.max(index - 1, 0);
        scrollToSlide(index);
    };
    const indicators = document.querySelectorAll(".indicator");

    track.addEventListener("scroll", () => {
        const newIndex = Math.round(track.scrollLeft / track.clientWidth);
        if (newIndex !== index) {
            indicators[index].classList.remove("active");
            indicators[newIndex].classList.add("active");
            index = newIndex;
        }
    });
}
export {imageSlliders}
