const express = require('express');
const router = express.Router();
const genresController = require('../controllers/genres');

router.post('/', (req, res) => genresController.createGenre(req, res));
router.get('/', (req, res) => genresController.getAllGenres(req, res));
router.get('/:id', (req, res) => genresController.getGenreById(req, res));
router.put('/:id', (req, res) => genresController.updateGenre(req, res));
router.delete('/:id', (req, res) => genresController.deleteGenre(req, res));

module.exports = router;
