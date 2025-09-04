// Daftar gambar background
const backgrounds = [
  'images/beranda_foto_1.JPG',
  'images/beranda_foto_2.JPG',
  'images/beranda_foto_3.JPG',
];


let current = 0;
const hero = document.getElementById('hero');

// Fungsi ganti background
function changeBackground() {
  hero.style.backgroundImage = `url('${backgrounds[current]}')`;
  current = (current + 1) % backgrounds.length;
}

// Ganti gambar tiap 5 detik
setInterval(changeBackground, 5000);

// Set gambar awal
changeBackground();


document.querySelectorAll('.btn-open-invitation-link').forEach(button => {
  button.addEventListener('click', function(e) {
    document.getElementById('bg-music').play();
    e.preventDefault(); // biar nggak langsung pindah
    const link = this.href;
    document.body.classList.add('fade-out');
    setTimeout(() => {
      window.location = link;
    }, 600); // harus sama dengan durasi transition CSS
  });
});

const boxes = document.querySelectorAll('.hero-section');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.2 }); // threshold 0.2 = 20% elemen terlihat

  boxes.forEach(box => observer.observe(box));


    // Ambil query parameter dari URL
    const params = new URLSearchParams(window.location.search);
    const nama = params.get("kepada") || "Tamu Undangan";

    // Tampilkan di elemen HTML
    document.getElementById("guestName").textContent = nama;
