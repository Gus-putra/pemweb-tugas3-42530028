CREATE DATABASE IF NOT EXISTS cafemenu_db;

USE cafemenu_db;

CREATE TABLE IF NOT EXISTS menus (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama_menu VARCHAR(100) NOT NULL,
    kategori VARCHAR(50) NOT NULL,
    harga DECIMAL(10, 2) NOT NULL,
    deskripsi TEXT,
    foto VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO menus (nama_menu, kategori, harga, deskripsi, foto) VALUES
('Caramel Latte', 'Kopi', 28000, 'Espresso dengan susu dan sirup caramel.', 'caramel-latte.jpg'),
('Americano', 'Kopi', 20000, 'Kopi espresso dengan tambahan air panas.', 'americano.jpg'),
('Matcha Latte', 'Non-Kopi', 25000, 'Minuman matcha dengan susu creamy.', 'matcha-latte.jpg'),
('Chocolate Cake', 'Makanan', 30000, 'Kue cokelat lembut dengan rasa manis.', 'chocolate-cake.jpg'),
('French Fries', 'Makanan', 18000, 'Kentang goreng renyah dan gurih.', 'french-fries.jpg');