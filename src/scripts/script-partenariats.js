document.addEventListener("DOMContentLoaded", function () {
    const track = document.getElementById("slider-track");
    const testimonials = document.querySelectorAll(".testimonial");

    testimonials.forEach(t => {
        const clone = t.cloneNode(true);
        track.appendChild(clone);
    });

    let offset = 0;
    const speed = 1;

    function autoScroll() {
        offset += speed;
        track.style.transform = `translateX(-${offset}px)`;
        if (offset >= track.scrollWidth / 2) offset = 0;
        requestAnimationFrame(autoScroll);
    }

    autoScroll();

    document.getElementById("next-btn").onclick = () => {
        offset += 200;
        track.style.transform = `translateX(-${offset}px)`;
    };

    document.getElementById("prev-btn").onclick = () => {
        offset -= 200;
        if (offset < 0) offset = 0;
        track.style.transform = `translateX(-${offset}px)`;
    };
});