const menuModel = require('../models/menuModel');

// Menampilkan daftar menu dan filter kategori
async function index(req, res) {
    try {
        const kategori = req.query.kategori || '';
        const menus = await menuModel.getAllMenus(kategori);

        res.render('layouts/main', {
            title: 'Daftar Menu Cafe',
            page: 'pages/index',
            menus,
            kategori,
            kategoriList: ['Kopi', 'Non-Kopi', 'Makanan']
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Gagal mengambil data menu.');
    }
}

// Menampilkan detail menu
async function detail(req, res) {
    try {
        const id = Number(req.params.id);

        if (!Number.isInteger(id) || id < 1) {
            return res.status(400).send('ID menu tidak valid.');
        }

        const menu = await menuModel.getMenuById(id);

        if (!menu) {
            return res.status(404).send('Menu tidak ditemukan.');
        }

        res.render('layouts/main', {
            title: 'Detail Menu',
            page: 'pages/detail',
            menu
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Gagal mengambil detail menu.');
    }
}

// Menampilkan form tambah menu
function createForm(req, res) {
    res.render('layouts/main', {
        title: 'Tambah Menu',
        page: 'pages/form',
        menu: null,
        action: '/menus'
    });
}

// Memproses tambah menu
async function store(req, res) {
    try {
        const { nama_menu, kategori, harga, deskripsi, foto } = req.body;

        if (!nama_menu?.trim() || !kategori || !harga ||
            !Number.isFinite(Number(harga)) || Number(harga) <= 0) {
            return res.status(400).send('Data menu tidak valid.');
        }

        await menuModel.createMenu({
            nama_menu: nama_menu.trim(),
            kategori,
            harga: Number(harga),
            deskripsi: deskripsi || '',
            foto: foto || ''
        });

        res.redirect('/?success=created');
    } catch (error) {
        console.error(error);
        res.status(500).send('Gagal menambahkan menu.');
    }
}

// Menampilkan form edit menu
async function editForm(req, res) {
    try {
        const id = Number(req.params.id);
        const menu = await menuModel.getMenuById(id);

        if (!menu) {
            return res.status(404).send('Menu tidak ditemukan.');
        }

        res.render('layouts/main', {
            title: 'Edit Menu',
            page: 'pages/form',
            menu,
            action: `/menus/${id}/update`
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Gagal membuka form edit.');
    }
}

// Memproses perubahan menu
async function update(req, res) {
    try {
        const id = Number(req.params.id);
        const { nama_menu, kategori, harga, deskripsi, foto } = req.body;

        if (!Number.isInteger(id) || id < 1 ||
            !nama_menu?.trim() || !kategori ||
            !Number.isFinite(Number(harga)) || Number(harga) <= 0) {
            return res.status(400).send('Data menu tidak valid.');
        }

        const existingMenu = await menuModel.getMenuById(id);

        if (!existingMenu) {
            return res.status(404).send('Menu tidak ditemukan.');
        }

        await menuModel.updateMenu(id, {
            nama_menu: nama_menu.trim(),
            kategori,
            harga: Number(harga),
            deskripsi: deskripsi || '',
            foto: foto || ''
        });

        res.redirect('/?success=updated');
    } catch (error) {
        console.error(error);
        res.status(500).send('Gagal memperbarui menu.');
    }
}

// Menghapus menu
async function destroy(req, res) {
    try {
        const id = Number(req.params.id);

        if (!Number.isInteger(id) || id < 1) {
            return res.status(400).send('ID menu tidak valid.');
        }

        await menuModel.deleteMenu(id);

        res.redirect('/?success=deleted');
    } catch (error) {
        console.error(error);
        res.status(500).send('Gagal menghapus menu.');
    }
}

module.exports = {
    index,
    detail,
    createForm,
    store,
    editForm,
    update,
    destroy
};
