const pool = require('../config/db');

// Mengambil semua menu
async function getAllMenus(kategori = '') {
    let sql = 'SELECT * FROM menus';
    const params = [];

    if (kategori) {
        sql += ' WHERE kategori = ?';
        params.push(kategori);
    }

    sql += ' ORDER BY id DESC';

    const [rows] = await pool.execute(sql, params);
    return rows;
}

// Mengambil menu berdasarkan ID
async function getMenuById(id) {
    const [rows] = await pool.execute(
        'SELECT * FROM menus WHERE id = ?',
        [id]
    );

    return rows[0];
}

// Menambahkan menu
async function createMenu(data) {
    const { nama_menu, kategori, harga, deskripsi, foto } = data;

    const [result] = await pool.execute(
        `INSERT INTO menus
        (nama_menu, kategori, harga, deskripsi, foto)
        VALUES (?, ?, ?, ?, ?)`,
        [nama_menu, kategori, harga, deskripsi, foto]
    );

    return result;
}

// Mengubah menu
async function updateMenu(id, data) {
    const { nama_menu, kategori, harga, deskripsi, foto } = data;

    const [result] = await pool.execute(
        `UPDATE menus
        SET nama_menu = ?, kategori = ?, harga = ?,
            deskripsi = ?, foto = ?
        WHERE id = ?`,
        [nama_menu, kategori, harga, deskripsi, foto, id]
    );

    return result;
}

// Menghapus menu
async function deleteMenu(id) {
    const [result] = await pool.execute(
        'DELETE FROM menus WHERE id = ?',
        [id]
    );

    return result;
}

module.exports = {
    getAllMenus,
    getMenuById,
    createMenu,
    updateMenu,
    deleteMenu
};
