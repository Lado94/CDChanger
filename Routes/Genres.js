const express = require('express');
const router = express.Router();
const genresController = require('../controllers/genres');


router.post('/', genresController.createGenre);
router.get('/', genresController.getAllGenres);
router.get('/:id', genresController.getGenreById);
router.put('/:id', genresController.updateGenre);
router.delete('/:id', genresController.deleteGenre);

module.exports = router;
