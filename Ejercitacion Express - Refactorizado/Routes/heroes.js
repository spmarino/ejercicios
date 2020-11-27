const express = require('express');
const router = express.Router();

const heroesController = require('../controllers/heroesController');

router.get('/', heroesController.listaHeroes);
router.get('/detalle/:id', heroesController.heroesDetalle);
router.get('/bio/:id/:ok?', heroesController.heroesBio);

module.exports = router;