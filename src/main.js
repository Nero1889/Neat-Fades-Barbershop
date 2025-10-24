const MENU = document.querySelector("#mobile-nav");
const OVERLAY = document.querySelector(".overlay");
const CLOSE_BTN = document.querySelector("#close-btn");

const toggleOverlay = () => {
    OVERLAY.classList.toggle("open");
}

MENU.addEventListener("click", toggleOverlay);
CLOSE_BTN.addEventListener("click", toggleOverlay);


/* Gallery Horizontal Scrolling */
const CONTAINER = document.querySelector("#our-work-container");
const TRACK = document.querySelector("#image-scroll-track");

if (CONTAINER && TRACK) {
    let targetX = 0;
    let currentX = 0;
    const EASE = 0.04;

    function handleScroll() {
        const CONTAINER_TOP = CONTAINER.offsetTop;
        const CONTAINER_HEIGHT = CONTAINER.offsetHeight;
        const VIEWPORT_HEIGHT = window.innerHeight;
        const SCROLL_TOP = window.scrollY;
        
        const SCROLLABLE_DISTANCE = CONTAINER_HEIGHT - VIEWPORT_HEIGHT;
        const SCROLL_OFFSET = SCROLL_TOP - CONTAINER_TOP;

        if (SCROLLABLE_DISTANCE <= 0) return;

        const PROGRESS = Math.min(1, Math.max(0, SCROLL_OFFSET / SCROLLABLE_DISTANCE));
        const FULL_MAX_SCROLL = TRACK.scrollWidth - window.innerWidth;
        const MAX_SCROLL_ADJUSTED = FULL_MAX_SCROLL;
        targetX = PROGRESS * MAX_SCROLL_ADJUSTED;
    }

    function animate() {
        currentX += (targetX - currentX) * EASE; 
        TRACK.style.transform = `translateX(-${currentX}px)`;
        requestAnimationFrame(animate);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    animate();
}

/* Lazy Loading */
document.addEventListener("DOMContentLoaded", () => {
    const ANIMATE = document.querySelectorAll(".lazy-loading");

    const OBSERVER_OPTIONS = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const ANIMATE_OBSERVER = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const ELEMENT = entry.target;

                ELEMENT.classList.add("is-visible");
                observer.unobserve(ELEMENT);
            }
        });
    }, OBSERVER_OPTIONS);

    ANIMATE.forEach(element => {
        ANIMATE_OBSERVER.observe(element);
    });
});
