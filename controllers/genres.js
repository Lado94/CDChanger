const Genre = require('../models/Genre');

const genresController = {
    async createGenre(req, res) {
        try {
            const { name } = req.body;
            const newGenre = await Genre.create({ name });
            res.status(201).json(newGenre);
        } catch (error) {
            res.status(500).json({ error: 'Error creating genre', details: error.message });
        }
    },

    async getAllGenres(req, res) {
        try {
            const genres = await Genre.findAll();
            res.status(200).json(genres);
        } catch (error) {
            res.status(500).json({ error: 'Error fetching genres', details: error.message });
        }
    },

    async getGenreById(req, res) {
        try {
            const { id } = req.params;
            const genre = await Genre.findByPk(id);
            if (!genre) {
                return res.status(404).json({ error: 'Genre not found' });
            }
            res.status(200).json(genre);
        } catch (error) {
            res.status(500).json({ error: 'Error fetching genre', details: error.message });
        }
    },

    async updateGenre(req, res) {
        try {
            const { id } = req.params;
            const { name } = req.body;
            const genre = await Genre.findByPk(id);
            if (!genre) {
                return res.status(404).json({ error: 'Genre not found' });
            }
            genre.name = name;
            await genre.save();
            res.status(200).json(genre);
        } catch (error) {
            res.status(500).json({ error: 'Error updating genre', details: error.message });
        }
    },

    async deleteGenre(req, res) {
        try {
            const { id } = req.params;
            const genre = await Genre.findByPk(id);
            if (!genre) {
                return res.status(404).json({ error: 'Genre not found' });
            }
            await genre.destroy();
            res.status(200).json({ message: 'Genre deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Error deleting genre', details: error.message });
        }
    }
};

module.exports = genresController;
