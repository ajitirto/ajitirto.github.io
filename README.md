# Membumikan Git

Ini adalah blog sederhana tentang penjelasan git. 

## Prasyarat

Pastikan Anda telah menginstal dependensi berikut:

- [Ruby](https://www.ruby-lang.org/en/downloads/)
- [Bundler](https://bundler.io/)
- [Jekyll](https://jekyllrb.com/)

## Instalasi

1. Clone repositori ini:
   ```bash
   git clone https://github.com/ajitirto/ajitirto.github.io && cd ajitirto.github.io
   ```

2. Install dependensi menggunakan Bundler:
   ```bash
   bundle install
   ```

## Menjalankan Blog Secara Lokal

Untuk melihat blog secara lokal, jalankan perintah berikut:

```bash
bundle exec jekyll serve
```

OR

```bash
make serve
```


Setelah server berjalan, buka browser dan kunjungi:

```
http://localhost:4000
```

## Struktur Folder

- `_layouts/` - Template halaman blog.
- `_posts/` - Tempat menyimpan postingan blog dengan format `YYYY-MM-DD-title.md`.
- `_includes/` - Potongan kode yang dapat digunakan ulang dalam layout.
- `assets/` - File statis seperti CSS, JS, dan gambar.
- `_config.yml` - File konfigurasi utama untuk blog.

## Membuat Postingan Baru

Gunakan format berikut untuk membuat postingan baru di dalam folder `_posts/`:

```markdown
---
title: "Judul Post"
date: YYYY-MM-DD HH:MM:SS
categories: [kategori]
tags: [tag1, tag2]
---

Isi postingan di sini...
```

## Deployment

Blog ini dapat di-deploy ke berbagai layanan seperti GitHub Pages atau Netlify.

### GitHub Pages

1. Pastikan branch `gh-pages` tersedia.
2. Push perubahan ke GitHub.
3. Aktifkan GitHub Pages di repository settings.

### Netlify

1. Hubungkan repository dengan Netlify.
2. Atur build command: `jekyll build`
3. Atur publish directory: `_site/`

## Lisensi

Proyek ini menggunakan lisensi [MIT](LICENSE).

