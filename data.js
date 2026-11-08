/* =====================================================================
   DATA WEBSITE AMKS PANGERAN SURIANSYAH
   Edit file ini di VS Code, simpan, lalu upload ulang ke GitHub.
   Jangan ubah nama PENGHUNI dan KEGIATAN di bawah.

   ATURAN PENTING:
   - Setiap data ada di antara { }, dan diakhiri koma setelah }
   - Teks ditulis di dalam tanda kutip "..."
   - Kalau tidak punya foto, isi foto: ""  (akan tampil inisial nama)
   - Nama file foto harus sama persis dengan file di folder images
     (huruf kecil, tanpa spasi, ekstensi .jpg)
   - Jangan masukkan data sensitif (NIK, nomor HP pribadi, alamat rumah)
   ===================================================================== */


/* ---------------------------------------------------------------------
   PENGHUNI
   Cara tambah: salin satu blok { ... }, tempel di bawahnya, ubah isinya.
   Cara hapus : hapus satu blok { ... } beserta koma di belakangnya.
   Kolom kamar boleh dikosongkan: kamar: ""
   --------------------------------------------------------------------- */
const PENGHUNI = [
  {
    nama: "Adrian Alwy Ramadhan",
    kampus: "Universitas Mercu Buana Yogyakarta",
    jurusan: "Psikologi",
    angkatan: 2024,
    asal: "Batulicin",
    kamar: "",
    foto: "images/penghuni/abay.png"
  },
  {
    nama: "Fayyaz  Zihni Rasyidi",
    kampus: "Universitas Ahmad Dahlan Yogyakarta",
    jurusan: "Akuntansi",
    angkatan: 2022,
    asal: "Tanah Bumbu",
    kamar: "",
    foto: "images/penghuni/fayas.png"
  },
  {
    nama: "Andi Fardiaz AKbar",
    kampus: "Universitas Ahmad Dahlan Yogyakarta",
    jurusan: "Informatika",
    angkatan: 2022,
    asal: "Tanah Bumbu",
    kamar: "",
    foto: "images/penghuni/depas.jpg"
  }
];


/* ---------------------------------------------------------------------
   KEGIATAN
   tanggal  : format TAHUN-BULAN-TANGGAL, contoh "2026-03-15"
              (boleh dikosongkan: tanggal: "")
   kategori : bebas, misalnya Kebersamaan, Keagamaan, Budaya,
              Olahraga, Pendidikan, Sosial
   Kegiatan terbaru otomatis tampil paling depan.
   --------------------------------------------------------------------- */
const KEGIATAN = [
  {
    judul: "Syukuran Wisuda Penghuni",
    tanggal: "2026-10-31",
    kategori: "Kebersamaan",
    deskripsi: "Syukuran dan doa bersama untuk penghuni yang diwisuda, sekaligus melepas mereka kembali ke Banua.",
    foto: "images/kegiatan/wisuda.jpg"
  },
  {
    judul: "Penyambutan Mahasiswa Baru",
    tanggal: "2026-08-20",
    kategori: "Sosial",
    deskripsi: "Menyambut penghuni baru dan memperkenalkan lingkungan asrama serta kota Yogyakarta.",
    foto: ""
  },
  {
    judul: "Malam Keakraban dan Budaya Banjar",
    tanggal: "",
    kategori: "Budaya",
    deskripsi: "Berkumpul, makan bersama, dan merawat budaya Banua di tanah rantau.",
    foto: ""
  }
];


/* ---------------------------------------------------------------------
   MUSIK LATAR (otomatis diputar di seluruh website, tanpa tombol)
   - Taruh file mp3 di folder  music/  (sejajar dengan folder images)
   - Tulis nama file persis sama (huruf kecil, tanpa spasi)
   - Boleh lebih dari satu lagu, diputar berurutan lalu mengulang
   - Kosongkan daftar ( const MUSIK = []; ) untuk mematikan musik
   - Pakai lagu yang kamu punya haknya (milik sendiri / bebas royalti),
     karena website ini bisa dilihat publik.
   --------------------------------------------------------------------- */
const MUSIK = [
  { judul: "Musik Banjar", file: "music/banjar.mp3" }
];
