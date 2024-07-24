let slideIndex = 0;

function showSlide(n) {
  const slides = document.querySelectorAll('.slide');
  if (n >= slides.length) {
    slideIndex = slides.length - 3;
  }
  if (n < 0) {
    slideIndex = 0;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (let i = slideIndex; i < slideIndex + 3; i++) {
    slides[i].style.display = 'block';
  }
}

function nextSlide() {
  slideIndex += 3;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex -= 3;
  showSlide(slideIndex);
}

showSlide(slideIndex);

// Show preloader
document.addEventListener('DOMContentLoaded', function () {
  const preloader = document.querySelector('.preloader');
  
  
  setTimeout(function() {
      preloader.classList.add('hide');
  }, 2000); // 2000 milliseconds delay to show preloader

  // Show content after preloader is hidden
  setTimeout(function() {
      preloader.style.display = 'none'; // Hide preloader
      const content = document.querySelector('.content');
      content.style.display = 'block'; // Show content
  }, 4000); // 2000 milliseconds delay to hide preloader and additional 2000 milliseconds for content
});

