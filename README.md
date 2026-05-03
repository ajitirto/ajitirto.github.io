# Antigravity Astro Portfolio

## 🚀 Teknologi yang Digunakan

*   **Framework:** [Astro](https://astro.build/) (v4+)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Runtime:** Node.js (v22 recommended)
*   **CI/CD:** GitHub Actions
*   **Deployment:** GitHub Pages

## 📂 Struktur Proyek

Berikut adalah penjelasan mengenai struktur direktori utama dalam proyek ini:
```text
├── .github/workflows      # Konfigurasi CI/CD untuk GitHub Actions
├── antigravity
│   └── raw                # Aset mentah, dokumentasi desain, dan mockup
├── public                 # Aset statis (favicon, gambar, robot.txt)
├── src
│   ├── components         # Komponen UI modular (Hero, BentoGrid, Footer, dll)
│   ├── layouts            # Template layout utama
│   ├── pages              # Entry point halaman (index.astro)
│   └── styles             # File konfigurasi CSS global
├── astro.config.mjs       # Konfigurasi utama Astro
├── tailwind.config.mjs    # Konfigurasi Tailwind CSS
└── package.json           # Dependensi proyek dan skrip build
```

## 🛠️ Pengembangan & Deployment


### 1. Prasyarat Sistem
Pastikan perangkat Anda telah terpasang:
*   **Node.js**: Versi `v22.x.x` 
*   **Package Manager**: `npm` versi `10.x.x` atau lebih baru

### 2. Pengembangan Lokal (Local Development)

```bash
# Instalasi dependensi menggunakan flag legacy peer deps jika diperlukan
npm install --legacy-peer-deps

# Menjalankan server lokal
npm run dev
```
