const imageSliders = () => {
    const containers = document.querySelectorAll(".sliders-container");

    containers.forEach((container) => {
        const track = container.querySelector(".slider-track");
        const slides = Array.from(track.children);
        const indicators = Array.from(
            container.querySelectorAll(".indicator")
        );
        const arrowRight = container.querySelector(".arrow-right");
        const arrowLeft = container.querySelector(".arrow-left");

        let index = 0;

        const updateIndicators = (activeIndex) => {
            indicators.forEach((indicator, i) => {
                indicator.classList.toggle("active", i === activeIndex);
            });
        };
        const scrollToSlide = (i, smooth = true) => {
            slides[i].scrollIntoView({
                behavior: smooth ? "smooth" : "auto",
                inline: "center",
                block: "nearest",
            });

            index = i;
            updateIndicators(i);
        };
        /* arrows */
        arrowRight?.addEventListener("click", () => {
            if (index < slides.length - 1) {
                scrollToSlide(index + 1);
            }
        });
        arrowLeft?.addEventListener("click", () => {
            if (index > 0) {
                scrollToSlide(index - 1);
            }
        });


        /* indicators click */
        indicators.forEach((indicator) => {
            indicator.addEventListener("click", () => {
                const i = Number(indicator.dataset.index);
                scrollToSlide(i);
            });
        });

        /* sync indicator on manual scroll */
        track.addEventListener("scroll", () => {
            const newIndex = Math.floor(
                track.scrollLeft / track.clientWidth
            );
            if (newIndex !== index) {
                index = newIndex;
                // updateIndicators(index);

            }

        });

        /* init */
        updateIndicators(0);
    });
};

export { imageSliders };
