const imageGallery = document.getElementById('imageGallery');
const images = document.querySelectorAll('.image-wrapper img');

imageGallery.addEventListener('scroll', function() {
    const scrollPosition = imageGallery.scrollLeft;
    const galleryWidth = imageGallery.offsetWidth;

    images.forEach(function(image) {
        const imageOffset = image.offsetLeft;
        if (imageOffset <= scrollPosition + galleryWidth / 2 && imageOffset + image.offsetWidth >= scrollPosition + galleryWidth / 2) {
            image.classList.add('active');
        } else {
            image.classList.remove('active');
        }
    });
});
