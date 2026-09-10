# Satu Data Terorisme — Full Code

Paket kode lengkap dashboard **Satu Data Terorisme_prototype**.

## Struktur

- `dist/index.html` — struktur halaman dashboard
- `dist/styles.css` — seluruh desain dan tampilan responsif
- `dist/app.js` — data, grafik, filter, tabel, dan unduhan CSV
- `dist/ikhub-logo.png` — logo I-KHUB
- `.openai/hosting.json` — konfigurasi static directory untuk ChatGPT Sites

## Menjalankan secara lokal

Jalankan perintah berikut dari folder proyek:

```bash
python3 -m http.server 8000 --directory dist
```

Kemudian buka `http://localhost:8000` pada browser.

Dashboard tidak membutuhkan instalasi paket, database, atau proses build. Semua data agregat dan fungsi antarmuka berada di dalam `dist/app.js`.

## Catatan

- Data yang disajikan bersifat agregat dan tidak memuat identitas individu.
- Gunakan data resmi yang telah divalidasi sebelum menerapkan pembaruan pada situs produksi.
- Konfigurasi domain dan DNS dikelola terpisah dari kode aplikasi.
