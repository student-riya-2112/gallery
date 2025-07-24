let currentIndex = 0;
let images = [];

function openLightbox(src) {
  images = Array.from(document.querySelectorAll('.gallery-item img')).map(img => img.src);
  currentIndex = images.indexOf(src);
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox').style.display = 'flex';
}

function navigate(direction) {
  event.stopPropagation();
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;
  document.getElementById('lightbox-img').src = images[currentIndex];
}

function filterImages(category) {
  let items = document.querySelectorAll('.gallery-item');
  items.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}