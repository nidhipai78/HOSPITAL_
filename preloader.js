document.addEventListener('DOMContentLoaded', function () {
    const preloader = document.querySelector('.preloader');
    const content = document.querySelector('.content');

    // Hide preloader after 2 seconds
    setTimeout(function() {
        preloader.style.display = 'none';
        content.style.display = 'block'; // Show content
    }, 10000);
});
