// === NAVIGASI MENU ===
const buttons = document.querySelectorAll(".menu-btn");
const sections = document.querySelectorAll(".content-section");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // hapus aktif dari semua tombol dan section
    buttons.forEach((b) => b.classList.remove("active"));
    sections.forEach((s) => s.classList.remove("active"));

    // tambahkan aktif ke tombol yang diklik dan section target
    btn.classList.add("active");
    document.getElementById(btn.dataset.target).classList.add("active");
  });
});

// === ALERT NAMA SAAT HALAMAN DIBUKA ===
window.addEventListener("load", function () {
  let nama = prompt("Masukkan nama Anda:");

  if (nama && nama.trim() !== "") {
    document.getElementById(
      "greet"
    ).textContent = `Selamat datang, ${nama}! 👋`;
  } else {
    document.getElementById("greet").textContent =
      "Selamat datang, Pengunjung! 👋";
  }
});
