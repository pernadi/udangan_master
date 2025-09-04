// Daftar gambar background
const backgrounds = [
  '../images/wedding_header.avif',
  '../images/wedding_header_2.jpg',
  '../images/wedding_header_3.jpg'
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
    e.preventDefault(); // biar nggak langsung pindah
    const link = this.href;
    document.body.classList.add('fade-out');
    setTimeout(() => {
      window.location = link;
    }, 600); // harus sama dengan durasi transition CSS
  });
});


//Countdown timer
function updateCountdown() {
  const eventDate = new Date("2025-09-13T00:00:00").getTime();
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    document.querySelector(".countdown-wrapper").innerHTML = "The wedding has started!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();

//img galery highlight


const marquee = document.querySelector('.photo-marquee');
const track = document.getElementById('track');
const images = track.querySelectorAll('img');

// Clone semua gambar ke akhir track
images.forEach(img => {
  const clone = img.cloneNode(true);
  track.appendChild(clone);
});

// Auto scroll
function autoScroll() {
  marquee.scrollLeft += 1;
  // Kalau sudah di ujung, reset ke awal
  if (marquee.scrollLeft >= track.scrollWidth / 2) {
    marquee.scrollLeft = 0;
  }
}

setInterval(autoScroll, 20);

function checkHighlight() {
  const images = track.querySelectorAll('img'); // ambil yang sudah di-clone
  images.forEach(img => {
    const rect = img.getBoundingClientRect();
    if (rect.left > window.innerWidth/2 - 160 && rect.left < window.innerWidth/2 + 160) {
      img.classList.add('highlight');
    } else {
      img.classList.remove('highlight');
    }
  });
}

setInterval(checkHighlight, 100);