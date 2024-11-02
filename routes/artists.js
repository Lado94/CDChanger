const express = require('express');
const router = express.Router();
const artistsController = require('../controllers/artists');

router.post('/', (req, res) => artistsController.createArtist(req, res));
router.get('/', (req, res) => artistsController.getAllArtists(req, res));
router.get('/:id', (req, res) => artistsController.getArtistById(req, res));
router.put('/:id', (req, res) => artistsController.updateArtist(req, res));
router.delete('/:id', (req, res) => artistsController.deleteArtist(req, res));

module.exports = router;
