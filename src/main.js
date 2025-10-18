const MENU = document.querySelector("#mobile-nav");
const OVERLAY = document.querySelector(".overlay");
const CLOSE_BTN = document.querySelector("#close-btn");

const toggleOverlay = () => {
    OVERLAY.classList.toggle("open");
}

MENU.addEventListener("click", toggleOverlay);
CLOSE_BTN.addEventListener("click", toggleOverlay);



const CONTAINER = document.querySelector("#our-work-container");
const TRACK = document.querySelector("#image-scroll-track");

    if (CONTAINER && TRACK) {
        function handleHorizontalScroll() {
            const CONTAINER_TOP = CONTAINER.offsetTop;
            const CONTAINER_HEIGHT = CONTAINER.offsetHeight;
            const VIEWPORT_HEIGHT = window.innerHeight;
            const SCROLL_TOP = window.scrollY;
            const SCROLLABLE_DISTANCE = CONTAINER_HEIGHT - VIEWPORT_HEIGHT;
            const SCROLL_OFFSET = SCROLL_TOP - CONTAINER_TOP; 
            const PROGRESS = Math.min(1, Math.max(0, SCROLL_OFFSET / (SCROLLABLE_DISTANCE * 0.8)));
            const MAX_SCROLL = TRACK.scrollWidth - window.innerWidth;
            const TRANSFORM_X = PROGRESS * MAX_SCROLL;

            TRACK.style.transform = `translateX(-${TRANSFORM_X}px)`;
        }

        window.addEventListener("scroll", handleHorizontalScroll);
        handleHorizontalScroll();
    }