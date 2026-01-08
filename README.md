# My To-Do List

## Fitur

* **Menambahkan Tugas**: Menambahkan tugas baru ke dalam daftar dengan mudah.
* **Mengedit Tugas**: Mengubah tugas yang sudah ada secara langsung (inline).
* **Menghapus Tugas**: Menghapus tugas yang sudah tidak diperlukan.
* **Menandai Status Tugas**: Menandai tugas sebagai selesai atau belum selesai.
* **Memfilter Tugas**: Melihat semua tugas, hanya tugas aktif, atau hanya tugas yang sudah selesai.
* **Penyimpanan Persisten**: Tugas disimpan di `localStorage` browser sehingga tetap ada meskipun halaman di-refresh atau browser ditutup.
* **Desain Responsif**: Tampilan UI sederhana dan bersih yang dapat digunakan di berbagai ukuran layar.

## Teknologi yang Digunakan

* **React**: Untuk membangun antarmuka pengguna.
* **Vite**: Untuk proses development dan build yang cepat.
* **localStorage**: Untuk menyimpan data secara lokal.
* **CSS**: Untuk styling komponen.

## Instalasi

1. Clone repository:

   ```bash
   git clone <repository-url>
   cd todo-app
   ```

2. Install dependency:

   ```bash
   pnpm install
   ```

## Penggunaan

1. Jalankan server development:

   ```bash
   pnpm dev
   ```

2. Buka browser dan akses:

   ```
   http://localhost:5173
   ```

   (atau port lain yang ditampilkan di terminal)

3. To Do App siap dipakai

## Struktur Proyek

```
src/
├── components/
│   ├── FilterButtons.jsx
│   ├── TodoInput.jsx
│   ├── TodoItem.jsx
│   └── TodoList.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

* **App.jsx**: Komponen utama aplikasi yang mengelola state dan melakukan render.
* **components/**: Kumpulan komponen UI yang dapat digunakan kembali untuk aplikasi todo.