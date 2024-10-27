const express = require('express');
const router = express.Router();
const artistsController = require('../controllers/artists');

// CRUD-операции
router.post('/', artistsController.createArtist);
router.get('/', artistsController.getAllArtists);
router.get('/:id', artistsController.getArtistById);
router.put('/:id', artistsController.updateArtist);
router.delete('/:id', artistsController.deleteArtist);

module.exports = router;
