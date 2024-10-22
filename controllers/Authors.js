const Author = require('../models/Author');


exports.createAuthor = async (req, res) => {
    try {
        const { name, biography } = req.body;
        const newAuthor = await Author.create({ name, biography });
        res.status(201).json(newAuthor);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.getAllAuthors = async (req, res) => {
    try {
        const authors = await Author.findAll();
        res.status(200).json(authors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.getAuthorById = async (req, res) => {
    try {
        const { id } = req.params;
        const author = await Author.findByPk(id);
        if (author) {
            res.status(200).json(author);
        } else {
            res.status(404).json({ message: "Author not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.updateAuthor = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, biography } = req.body;
        const author = await Author.findByPk(id);
        if (author) {
            await author.update({ name, biography });
            res.status(200).json(author);
        } else {
            res.status(404).json({ message: "Author not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.deleteAuthor = async (req, res) => {
    try {
        const { id } = req.params;
        const author = await Author.findByPk(id);
        if (author) {
            await author.destroy();
            res.status(200).json({ message: "Author deleted successfully" });
        } else {
            res.status(404).json({ message: "Author not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

