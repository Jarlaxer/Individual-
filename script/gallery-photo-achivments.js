let currentImageIndex = 0;
const galleryPhotos = document.querySelectorAll('.gallery-photo');

function switchImage() {
  galleryPhotos[currentImageIndex].style.display = 'none'; // Приховати поточне фото
  currentImageIndex = (currentImageIndex + 1) % galleryPhotos.length; // Перейти до наступного
  galleryPhotos[currentImageIndex].style.display = 'block'; // Показати нове фото
}

setInterval(switchImage, 3000);