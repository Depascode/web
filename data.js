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
    nama: "SUPERNGANGA",
    kampus: "UADEH",
    jurusan: "Kedokteran",
    angkatan: 2026,
    asal: "Tanah Bumbu",
    kamar: "President Suite",
    foto: "images/penghuni/abay.jpg"
  },
  {
    nama: "Contoh Penghuni 2",
    kampus: "UNY",
    jurusan: "Pendidikan Matematika",
    angkatan: 2024,
    asal: "Barabai",
    kamar: "",
    foto: ""
  },
  {
    nama: "Contoh Penghuni 3",
    kampus: "UIN Sunan Kalijaga",
    jurusan: "Ilmu Hukum",
    angkatan: 2022,
    asal: "Martapura",
    kamar: "",
    foto: ""
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
    judul: "Gotong Royong Bersih Asrama",
    tanggal: "2026-01-15",
    kategori: "Kebersamaan",
    deskripsi: "Penghuni bersama-sama membersihkan dan merapikan lingkungan asrama.",
    foto: "images/kegiatan/gotong-royong.jpg"
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
