let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
  slides.forEach(slide => slide.classList.remove('active'));
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add('active');
}

// Initial display
slides[slideIndex].classList.add('active');
setInterval(showSlides, 3000); // Change every 3 seconds// JavaScript Document
