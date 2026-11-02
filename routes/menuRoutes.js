const express = require('express');
const router = express.Router();

const menuController = require('../controllers/menuController');

// READ
router.get('/', menuController.index);
router.get('/menu/:id', menuController.detail);

// CREATE
router.get('/menus/tambah', menuController.createForm);
router.post('/menus', menuController.store);

// UPDATE
router.get('/menus/:id/edit', menuController.editForm);
router.post('/menus/:id/update', menuController.update);

// DELETE
router.post('/menus/:id/delete', menuController.destroy);

module.exports = router;
