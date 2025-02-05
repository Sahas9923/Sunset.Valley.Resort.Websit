let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const carousel = document.querySelector(".carousel");

function showSlides() {
    slideIndex++;
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }
    updateCarousel();
}

// Function to manually move slides
function moveSlide(n) {
    slideIndex += n;
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }
    updateCarousel();
}

// Update the carousel position
function updateCarousel() {
    const offset = -slideIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

// Auto-slide every 5 seconds
setInterval(showSlides, 5000);