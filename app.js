const express = require('express');
const path = require('path');
require('dotenv').config();

const pool = require('./config/db');
const menuRoutes = require('./routes/menuRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Konfigurasi EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', menuRoutes);

// Halaman 404
app.use((req, res) => {
    res.status(404).send('Halaman tidak ditemukan.');
});

// Menjalankan server
async function startServer() {
    try {
        const connection = await pool.getConnection();
        console.log('MySQL berhasil terhubung!');
        connection.release();

        app.listen(PORT, () => {
            console.log(`CafeMenu berjalan di http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Koneksi MySQL gagal:', error.message);
    }
}

startServer();
