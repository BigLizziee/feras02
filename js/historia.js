function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightbox.style.display = 'flex';
    lightboxImg.src = src;
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

const images = document.querySelectorAll('.gallery-img');
images.forEach(image => {
    image.addEventListener('click', (e) => {
        openLightbox(e.target.src);
    });
})

