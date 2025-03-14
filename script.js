// Inisialisasi index foto saat ini
let currentIndex = 0;
const totalPhotos = 72;
const photos = [];

// Mengisi array dengan nama file foto (foto1.jpg, foto2.jpg, ... foto60.jpg)
for (let i = 1; i <= totalPhotos; i++) {
  photos.push(`images/foto${i}.jpg`);
}

// Fungsi untuk mengganti foto ke foto berikutnya
function nextPhoto() {
  currentIndex = (currentIndex + 1) % photos.length; // kembali ke 0 setelah mencapai foto terakhir
  document.getElementById("images/foto").src = photos[currentIndex];
}

// Menambahkan event listener untuk klik dan sentuhan
const imageElement = document.getElementById("images/foto");
imageElement.addEventListener("click", nextPhoto);
imageElement.addEventListener("touchstart", nextPhoto);
