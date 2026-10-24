# A Little Universe Written for Fitria — Birthday Edition

Sebuah website kado ulang tahun digital yang personal, hangat, puitis, dan interaktif yang dirancang khusus untuk merayakan ulang tahun **Fitria Salsa Bela** (30 Oktober 2008). Website ini menggabungkan kecintaan Fitria pada penulisan cerpen, cita-citanya menjadi sastrawan, estetika anime Wind Breaker (Sakura Haruka), sudut kucing interaktif, serta surat reflektif yang menghargai perjalanan impiannya dengan bijak dan menyentuh.

## User Review & Critical Decisions

> [!IMPORTANT]
> Keputusan dan preferensi telah dikonfirmasi melalui klarifikasi:
> - **Musik Latar (BGM)**: Melodi kotak musik dan piano akustik yang lembut, hangat, dan puitis menggunakan Web Audio API sintetis (zero external dependency, bebas risiko broken audio URL atau CORS, dengan kontrol Play/Pause/Mute interaktif).
> - **Fitur The Writer's Room**: Buku catatan digital virtual interaktif dengan penyimpanan lokal (`localStorage`), memungkinkan Fitria membuka halaman kosong, menulis satu kalimat atau cerpen, dan menyimpannya di browser perangkatnya.
> - **Akses Publik & Deployment**: Website dioptimasi secara responsif untuk smartphone (Android & iOS) dan desktop, dapat diakses langsung via HTTPS tanpa login, serta dilengkapi konfigurasi deployment GitHub Pages & export.

---

## 1. Overview & Core Concept

- **Apa yang Dibangun**: Digital storytelling & interactive scrapbook birthday experience untuk Fitria Salsa Bela. Website terdiri dari 9 babak interaktif:
  1. *Opening Screen (A Letter Just for You)*: Tirai surat fullscreen yang elegan dengan amplop interaktif dan pembuka musik opsional.
  2. *Birthday Hero*: Komposisi tipografi indah, ucapan ulang tahun 30 Oktober 2008, dan tombol selebrasi partikel/kelopak bunga (*Rayakan Hari Ini ✨*).
  3. *Sakura Haruka Corner*: Editorial visual bernuansa manga/anime Wind Breaker dengan palet merah, hitam arang, dan krem bergaris dinamis, merayakan karakter favoritnya secara elegan.
  4. *Cat Lover Corner*: Area kucing interaktif menggemaskan dengan animasi lembut, tap/click reaksi kucing dengan dialog jenaka dan jejak tapak cakar (*paw prints*).
  5. *The Writer's Room*: Meja kerja penulis yang hangat, efek teks mesin tik (*typewriter*), kutipan sastra, serta buku catatan digital untuk menulis dan menyimpan kalimat cerita.
  6. *A Letter About Her Dream*: Inti emosional website berupa surat tulisan tangan di atas kertas manuskrip krem, mengapresiasi mimpinya sebagai sastrawan dan mendamaikan perbedaan harapan orang tua dengan penuh rasa hormat dan kebijaksanaan.
  7. *Birthday Wishes*: 6 kartu ucapan ulang tahun interaktif dengan efek flip/reveal pesan harapan.
  8. *Interactive Birthday Cake*: Ilustrasi kue ulang tahun dengan lilin menyala yang dapat ditiup secara interaktif disertai pelepasan partikel bintang harapan (*Make a Wish*).
  9. *Final Scene (To Be Continued...)*: Halaman penutup puitis dengan navigasi kembali ke surat utama dan suasana buku tertutup yang tenang.

- **Target Persona & Suasana**: Fitria Salsa Bela (seorang pencinta cerita, sastrawan masa depan, penikmat anime Wind Breaker, penyayang kucing) dan para sahabat yang ingin memberikan apresiasi digital yang paling berkesan.

---

## 2. User Experience & Visual Design

### Alur Interaksi Pengguna (User Flow)
```
┌─────────────────────────────────┐
│     1. Opening Screen           │ ──> Klik [Buka Surat Spesialmu]
│  (Amplop Surat & Partikel)      │     (Inisialisasi BGM & Transisi Mulus)
└────────────────┬────────────────┘
                 │
                 ▼
┌─────────────────────────────────┐
│     2. Birthday Hero            │ ──> Klik [Rayakan Hari Ini ✨] (Confetti & Kelopak)
│  (30 Oktober 2008 - Title)      │
└────────────────┬────────────────┘
                 │
                 ▼
┌─────────────────────────────────┐
│     3. Sakura Haruka Corner     │ ──> Panel Editorial Manga Beraksen Muted Red
│  (Wind Breaker Inspired Visual) │
└────────────────┬────────────────┘
                 │
                 ▼
┌─────────────────────────────────┐
│     4. Cat Lover Corner         │ ──> Klik Kucing (Animasi & Ucapan Kucing Acak)
│  (Sedikit Bulu Banyak Bahagia)  │
└────────────────┬────────────────┘
                 │
                 ▼
┌─────────────────────────────────┐
│     5. The Writer's Room        │ ──> Buka Lembar Kosong & Tulis Cerpen (Simpan Lokal)
│  (Meja Penulis & Typewriter)    │
└────────────────┬────────────────┘
                 │
                 ▼
┌─────────────────────────────────┐
│     6. A Letter About Her Dream │ ──> Membaca Surat Emosional Sastrawan & Harapan
│  (Naskah Tulisan Tangan Krem)   │
└────────────────┬────────────────┘
                 │
                 ▼
┌─────────────────────────────────┐
│     7. Birthday Wishes Cards    │ ──> Buka 6 Kartu Harapan Masa Depan
└────────────────┬────────────────┘
                 │
                 ▼
┌─────────────────────────────────┐
│     8. Interactive Birthday Cake│ ──> Klik [Tiup Lilinnya 🎂] (Padamkan Api & Harapan)
└────────────────┬────────────────┘
                 │
                 ▼
┌─────────────────────────────────┐
│     9. Final Scene              │ ──> [Baca Suratnya Lagi] / Baca Ulang Cerita
└─────────────────────────────────┘
```

### Visual Identity & Theme
- **Dominant Neutral Canvas (60%)**: Warm ivory, soft antique cream (`#FBF9F5` / `#F5F0E8`), dan deep charcoal paper (`#18181B`) untuk nuansa buku klasik dan panel anime.
- **Structural Surfaces (30%)**: Lembar manuskrip bertekstur halus, garis pemisah hairline tipis (`border-stone-200 / border-stone-800`), dan bayangan lembut berdimensi tunggal.
- **Focal Accent Budget (10%)**: Muted cinnabar red khas Sakura Haruka (`#D94848`), soft gold untuk bintang & kelopak lilin (`#D4AF37`), serta dusty pink untuk kehangatan kartu ucapan.
- **Tipografi**:
  - *Display Headings*: Serif editorial anggun dan sans-serif geometris tajam (`Playfair Display` & `Outfit` / `Plus Jakarta Sans`).
  - *Prose & Surat*: Tipografi tulisan tangan dan naskah klasik bernapas panjang (`Lora` / `Georgia` / `Merriweather`).
  - *Writer Typewriter*: Monospace mekanis elegan untuk kutipan sastra mesin tik.
- **Audio & Musik**: Web Audio API Procedural Music Engine memainkan arpeggio melodi kotak musik dan chord piano lembut (nada C Major / F Major yang hangat) dengan sakelar kontrol musik tetap di sudut atas.

---

## 3. Key Product Decisions & Trade-Offs

- **Web Audio API Synth vs File Audio Eksternal**:
  - *Pilihan*: Menggunakan Web Audio API synthesizer terprogram untuk menghasilkan denting kotak musik dan akor piano akustik secara instan di sisi klien.
  - *Alasan*: Menghindari ketergantungan link MP3 eksternal yang rentan 404, CORS block, atau buffering lambat di jaringan seluler. Berjalan 100% reliabel di Android Chrome dan iOS Safari.
- **Penyimpanan Catatan Penulis (localStorage)**:
  - *Pilihan*: Catatan cerpen atau kalimat yang ditulis Fitria disimpan secara lokal di `localStorage` peramban.
  - *Alasan*: Menjaga privasi penuh (tanpa mengirim data pribadi ke server luar sesuai brief), namun tetap memberikan fungsionalitas nyata di mana Fitria dapat melihat kembali tulisannya setiap kali membuka kembali website dari perangkatnya.
- **Zero-Broken-Asset Visual Architecture**:
  - *Pilihan*: Membangun ilustrasi SVG modular artistik (kucing interaktif beranimasi, kue ulang tahun dengan api lilin berkedip, amplop surat dinamis, ornamen manga Sakura Haruka geometris dan artistik).
  - *Alasan*: Memastikan ketajaman vektor resolusi tinggi pada semua layar retina (HP Android/iPhone), kecepatan muat instan tanpa lag, dan tidak ada aset gambar eksternal yang pecah atau gagal dimuat.

---

## 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────┐
│                      App Container                     │
│  - Active Section Observer & Scroll Progress Bar       │
│  - Procedural Audio Engine (Music Box / Acoustic Piano)│
│  - Confetti & Floating Particle Canvas                 │
├────────────────────────────────────────────────────────┤
│                       Sections                         │
│  ├── OpeningScreen (Interactive Envelope & Intro)      │
│  ├── HeroSection (Happy Birthday 30 Oktober 2008)      │
│  ├── SakuraCorner (Wind Breaker / Sakura Haruka Aesthetic)
│  ├── CatCorner (Animated Cat & Speech Bubble Reactions)│
│  ├── WriterRoom (Typewriter Text & Notebook Editor)    │
│  ├── DreamLetter (Handwritten Empathic Letter)         │
│  ├── WishesSection (6 Interactive Flip/Reveal Cards)   │
│  ├── CakeSection (Candle Blow Physics & Particle Burst)│
│  └── FinalScene (Closing Book & Replay Navigation)     │
└────────────────────────────────────────────────────────┘
```

- **OpenGraph & SEO Metadata**: Dikonfigurasi di `index.html` dengan judul `Happy Birthday Fitria Salsa Bela 🎂` dan deskripsi puitis untuk preview WhatsApp yang rapi dan memikat saat dibagikan.
- **GitHub Deployment Readiness**: Menyertakan konfigurasi GitHub Actions `.github/workflows/deploy.yml`, file `README.md`, dan script build statis Vite yang siap dipublikasikan ke GitHub Pages maupun diakses langsung via live URL.
