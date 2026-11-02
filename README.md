# CafeMenu – Praktikum Tugas 3 Pemrograman Web

## Deskripsi Proyek

CafeMenu merupakan aplikasi web sederhana untuk mengelola data menu cafe. Aplikasi ini dibuat menggunakan Express.js, EJS, dan MySQL dengan menerapkan konsep CRUD (Create, Read, Update, Delete).

## Teknologi yang Digunakan

- Node.js
- Express.js
- EJS
- MySQL
- MySQL2
- HTML dan CSS

## Fitur Aplikasi

- Menampilkan daftar menu cafe.
- Melihat detail menu.
- Menambahkan menu baru.
- Mengubah data menu.
- Menghapus menu.
- Memfilter menu berdasarkan kategori.
- Menggunakan Prepared Statements untuk membantu mencegah SQL Injection.
- Menggunakan metode POST dan pola Post/Redirect/Get (PRG).

## Struktur Proyek

```text
cafemenu-tugas3/
├── config/
│   └── db.js
├── controllers/
│   └── menuController.js
├── models/
│   └── menuModel.js
├── public/
│   ├── css/
│   └── images/
├── routes/
│   └── menuRoutes.js
├── views/
│   ├── layouts/
│   └── pages/
├── .env.example
├── .gitignore
├── app.js
├── database.sql
├── package.json
└── README.md
```

## Cara Menjalankan Aplikasi

1. Clone repository:

```bash
git clone https://github.com/Gus-putra/pemweb-tugas3-42530028.git
```

2. Masuk ke folder proyek:

```bash
cd pemweb-tugas3-42530028
```

3. Install dependencies:

```bash
npm install
```

4. Buat database MySQL dengan mengimpor file `database.sql` melalui phpMyAdmin.

5. Salin file `.env.example` menjadi `.env`, kemudian sesuaikan konfigurasi database:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=cafemenu_db
DB_PORT=3306
PORT=3000
```

6. Jalankan aplikasi:

```bash
npm run dev
```

7. Buka aplikasi melalui browser:

```text
http://localhost:3000
```

## Video Demonstrasi

Video demonstrasi aplikasi CafeMenu dapat dilihat melalui tautan berikut:

[Klik di sini untuk menonton video YouTube](https://youtu.be/0mjIrwv0wDI)

## Repository

[GitHub – pemweb-tugas3-42530028](https://github.com/Gus-putra/pemweb-tugas3-42530028)

---

**Praktikum Tugas 3 – Pemrograman Web (4 SKS)**