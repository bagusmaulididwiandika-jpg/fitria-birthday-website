# A Little Universe Written for Fitria — Birthday Edition 🎂

Website ucapan ulang tahun interaktif, emosional, puitis, dan personal yang dirancang khusus untuk merayakan ulang tahun **Fitria Salsa Bela** (30 Oktober 2008).

---

## 🌟 Tentang Penerima & Konsep Website

- **Nama Penerima**: Fitria Salsa Bela
- **Tanggal Lahir**: 30 Oktober 2008
- **Tema Utama**: *"A Little Universe Written for Fitria — Birthday Edition"*
- **Elemen Personalisasi**:
  - **Karakter Anime Favorit**: Sakura Haruka (*Wind Breaker*)
  - **Hewan Favorit**: Kucing (dilengkapi interaksi mengelus, animasi cakar, dan suara *purr*)
  - **Hobi**: Menulis cerpen (The Writer's Room dengan buku catatan digital lokal)
  - **Cita-Cita**: Menjadi seorang sastrawan
  - **Pesan Inti**: Menghargai impian menulisnya, memberikan dukungan penuh, dan mendamaikan perbedaan harapan orang tua dengan bijak dan hangat.

---

## 📖 Struktur 9 Babak Cerita Interaktif

1. **Opening Screen — A Letter Just for You**: Layar amplop vintage interaktif fullscreen dengan cap lilin berinisial 'F', partikel bintang mengambang, dan inisialisasi melodi musik boks.
2. **Birthday Hero — Happy Birthday, Fitria!**: Tipografi editorial, selebrasi 30 Oktober 2008, dan tombol selebrasi confetti bintang & kelopak sakura (*Rayakan Hari Ini ✨*).
3. **Sakura Haruka Corner — Her Favorite Character**: Panel manga editorial dinamis terinspirasi anime *Wind Breaker* dengan palet merah cinnabar, hitam arang, dan ornamen keberanian.
4. **Cat Lover Corner — Sedikit Bulu, Banyak Kebahagiaan**: Ilustrasi kucing beranimasi menggemaskan yang bereaksi saat dielus/diklik dengan beragam dialog jenaka dan efek tapak kaki (*paw prints*).
5. **The Writer's Room — Dunia Kecil Seorang Penulis**: Meja penulis hangat dengan lampu meja yang dapat dinyalakan/dimatikan, teks mesin tik sastra, dan buku catatan digital virtual untuk menulis & menyimpan cerpen di browser (`localStorage`) serta mengunduh dokumen `.txt`.
6. **A Letter About Her Dream — Untuk Mimpi yang Kamu Simpan**: Inti emosional website berupa surat tulisan tangan di atas kertas manuskrip, membahas cita-cita sastrawan dan kepedulian orang tua dengan empati mendalam.
7. **Birthday Wishes — 30 Oktober yang Spesial**: Enam kartu ucapan interaktif dengan animasi buka/tutup untuk kesehatan, senyuman, karya cerpen, perjumpaan baik, kesempatan berjuang, dan keberanian memulai halaman baru.
8. **Interactive Birthday Cake — Make a Wish, Fitria!**: Ilustrasi kue ulang tahun dengan lilin beranimasi api yang bisa ditiup secara interaktif, memunculkan partikel bintang dan pesan doa.
9. **Final Scene — To Be Continued...**: Penutup puitis dengan ilustrasi buku tertutup, kucing tidur di atas sampul, dan tombol navigasi kembali ke surat utama.

---

## 🎧 Audio Engine Khusus (Procedural Web Audio API)

Website ini dilengkapi arpeggio melodi kotak musik dan piano akustik lembut yang dibangun langsung dengan **Web Audio API**:
- Tidak memerlukan file audio eksternal sehingga tidak ada risiko link rusak, 404, atau masalah CORS.
- Ringan dan dapat diputar dengan mulus di Google Chrome Android maupun Safari iPhone.
- Dilengkapi kontrol *Play/Pause* dan *Mute/Unmute* yang mudah diakses di bagian atas layar.

---

## 🚀 Panduan Menjalankan Secara Lokal

```bash
# 1. Install dependencies
npm install

# 2. Jalankan development server
npm run dev

# 3. Bangun versi produksi (static build)
npm run build
```

---

## 🌐 Deployment ke GitHub Pages

Repository ini telah dilengkapi alur kerja otomatis GitHub Actions di `.github/workflows/deploy.yml`.

1. Buat repository baru di GitHub bernama `fitria-birthday-website`.
2. Push source code ke branch `main`:
   ```bash
   git init
   git add .
   git commit -m "feat: create Fitria birthday website"
   git branch -M main
   git remote add origin https://github.com/<USERNAME>/fitria-birthday-website.git
   git push -u origin main
   ```
3. Buka tab **Settings** di repository GitHub Anda > **Pages** > pilih Source **GitHub Actions**.
4. Website akan otomatis ter-deploy dan dapat diakses publik di:
   `https://<USERNAME>.github.io/fitria-birthday-website/`
