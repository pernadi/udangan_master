const navEntries = performance.getEntriesByType("navigation");
  if (navEntries.length > 0 && navEntries[0].type === "reload") {
    window.location.replace("index.html");
  }

  // Cegah user kembali ke halaman ini
  window.history.pushState(null, "", window.location.href);
  window.onpopstate = function () {
    window.location.replace("index.html");
  };

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


//Gallery 
// const heroImages = [
//     "../images/beranda_foto_1.jpg",
//     "https://picsum.photos/id/1021/1600/900",
//     "https://picsum.photos/id/1031/1600/900",
//     "https://picsum.photos/id/1041/1600/900"
//   ];

//   let currentHero = 0;
//   const heroImage = document.getElementById('heroImage');

//   function nextHero() {
//     currentHero = (currentHero + 1) % heroImages.length;
//     heroImage.src = heroImages[currentHero];
//   }

//   setInterval(nextHero, 4000);

  document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-bride");
        entry.target.classList.add("show-reseption");
        entry.target.classList.add("show-wishes");
        entry.target.classList.add("show-gift");
        entry.target.classList.add("show-footer");
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll(".bride-section, .galery-section, .reseption-section, .wishes-section, .gift-section, .footer").forEach(el => observer.observe(el));
});


function copyNumber1() {
      const number = document.getElementById("account-number-bank1").innerText;
      navigator.clipboard.writeText(number)
        .then(() => {
          alert("Nomor berhasil disalin: " + number);
        })
        .catch(err => {
          console.error("Gagal menyalin: ", err);
        });
    }

function copyNumber2() {
      const number = document.getElementById("account-number-bank2").innerText;
      navigator.clipboard.writeText(number)
        .then(() => {
          alert("Nomor berhasil disalin: " + number);
        })
        .catch(err => {
          console.error("Gagal menyalin: ", err);
        });
    }
