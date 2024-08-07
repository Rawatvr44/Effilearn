let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slideWidth = slides[0].clientWidth;

document.getElementById('slideRight').addEventListener('click', () => {
    if (currentIndex < totalSlides - 1) { // Ensure the condition is correct for sliding
        currentIndex++;
        updateSliderPosition();
    }
});

document.getElementById('slideLeft').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSliderPosition();
    }
});

function updateSliderPosition() {
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`; // Use backticks
}
