const express = require('express');
const router = express.Router();
const marcasController = require('../controllers/marcasController')

router.get('/', marcasController.listaDeMarcas)
router.get('/:id', marcasController.marcaSeleccionada)

module.exports = router;