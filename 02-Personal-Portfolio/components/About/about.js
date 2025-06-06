import {
    animate,
    createTimer,
    createDraggable,
    createAnimatable,
    utils,
} from 'https://assets.codepen.io/1137/anime.esm.min.js';
const initAbout = () => {

    // Select carousel container
    const [$carousel] = utils.$('.carousel');
    $carousel.innerHTML += $carousel.innerHTML; // Duplicate content for infinite effect

    const carouselItems = utils.$('.carousel-item');

    // Helper to calculate full width
    const getTotalWidth = (total, $el) => {
        const style = getComputedStyle($el);
        const margins = parseInt(style.marginLeft) + parseInt(style.marginRight);
        return total + $el.offsetWidth + margins;
    };

    const carousel = {
        width: carouselItems.reduce(getTotalWidth, 0),
        speedX: 2.5,
        wheelX: 0,
        wheelY: 0
    };

    // Create smooth animatable transform with wrap
    const animatable = createAnimatable($carousel, {
        x: 0,
        modifier: v => utils.wrap(v, -carousel.width / 2, 0)
    });
    const { x } = animatable;

    // Make draggable
    const draggable = createDraggable(carousel, {
        trigger: '#infinite-carousel',
        y: false,
        onGrab: () => animate(carousel, { speedX: 0, duration: 500 }),
        onRelease: () => animate(carousel, { speedX: 2.5, duration: 500 }),
        onResize: () => carousel.width = carouselItems.reduce(getTotalWidth, 0),
        releaseStiffness: 20,
    });

    // Continuous timer to move
    createTimer({
        onUpdate: () => {
            x(x() - carousel.speedX + draggable.deltaX - carousel.wheelX - carousel.wheelY);
        }
    });

    // Mouse wheel smooth support
    const wheelDeltaAnim = animate(carousel, {
        wheelY: 0,
        wheelX: 0,
        duration: 500,
        autoplay: false,
        ease: 'out(4)'
    });

    function onWheel(e) {
        e.preventDefault();
        carousel.wheelY = utils.lerp(carousel.wheelY, e.deltaY, 0.2);
        carousel.wheelX = utils.lerp(carousel.wheelX, e.deltaX, 0.2);
        wheelDeltaAnim.refresh().restart();
    }

    $carousel.addEventListener('wheel', onWheel, { passive: false });
};

export default initAbout;
