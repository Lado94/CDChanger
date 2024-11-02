const Artist = require('../models/Artist');

const artistsController = {
    async createArtist(req, res) {
        try {
            const { name, biography } = req.body;
            const newArtist = await Artist.create({ name, biography });
            res.status(201).json(newArtist);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    async getAllArtists(req, res) {
        try {
            const artists = await Artist.findAll();
            res.status(200).json(artists);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async getArtistById(req, res) {
        try {
            const { id } = req.params;
            const artist = await Artist.findByPk(id);
            if (artist) {
                res.status(200).json(artist);
            } else {
                res.status(404).json({ message: "Artist not found" });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async updateArtist(req, res) {
        try {
            const { id } = req.params;
            const { name, biography } = req.body;
            const artist = await Artist.findByPk(id);
            if (artist) {
                await artist.update({ name, biography });
                res.status(200).json(artist);
            } else {
                res.status(404).json({ message: "Artist not found" });
            }
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    async deleteArtist(req, res) {
        try {
            const { id } = req.params;
            const artist = await Artist.findByPk(id);
            if (artist) {
                await artist.destroy();
                res.status(200).json({ message: "Artist deleted successfully" });
            } else {
                res.status(404).json({ message: "Artist not found" });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = artistsController;
