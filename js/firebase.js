import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot, query, orderBy } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

  // 🔑 Config Firebase kamu
  const firebaseConfig = {
    apiKey: "AIzaSyATbqVsGH1S11IAkmdGGlcd4JXTkHfOsgE",
    authDomain: "familyproject-3b076.firebaseapp.com",
    projectId: "familyproject-3b076",
    storageBucket: "familyproject-3b076.appspot.com",
    messagingSenderId: "1053768658608",
    appId: "1:1053768658608:web:56cd82bafa556e9c059575"
  };

  // Init Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // 🔹 Simpan data ke Firestore
  document.getElementById("saveBtn").addEventListener("click", async () => {
    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !message) {
      alert("Nama dan Harapan & Doa tidak boleh kosong!");
      return;
    }

    try {
      await addDoc(collection(db, "wishes"), {
        name: name,
        message: message,
        timestamp: new Date()
      });
      alert("Doa & Harapan berhasil dikirim!");
      
      // reset form
      document.getElementById("name").value = "";
      document.getElementById("message").value = "";
    } catch (error) {
      console.error("Error menambahkan dokumen: ", error);
      alert("Gagal mengirim, coba lagi!");
    }
  });


  // 🔹 Tampilkan data wishes real-time
  const wishesList = document.getElementById("wishesList");
  const q = query(collection(db, "wishes"), orderBy("timestamp", "desc"));

  onSnapshot(q, (snapshot) => {
    wishesList.innerHTML = ""; // reset
    snapshot.forEach((doc) => {
      const data = doc.data();

      // format tanggal
      const date = data.timestamp?.toDate 
        ? data.timestamp.toDate().toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })
        : "";

      const li = document.createElement("li");
      li.classList.add("list-group-item");
      li.innerHTML = `
        <div class="congrats-list">
          <h4 class="congrats-name"><b>${data.name}</b></h4>
          <h6 class="congrats-date">${date}</h6>
          <h5 class="congrats-word">${data.message}</h5>
        </div>
      `;
      wishesList.appendChild(li);
    });
  });