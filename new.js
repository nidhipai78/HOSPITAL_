const boxes = document.querySelectorAll('.box');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.display = 'block';
    }
  });
});

boxes.forEach(box => {
  observer.observe(box);
});