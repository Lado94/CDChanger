const CompactDisk = require("../models/CompactDisk");
const Genre = require("../models/Genre");
const Artist = require("../models/Artist");

exports.createCompactDisk = async (req, res) => {
  try {
    const { title, year, price, stars, artistId, genres } = req.body;
    const newCompactDisk = await CompactDisk.create({
      title,
      year,
      price,
      stars,
      ArtistId: artistId,
    });
    if (genres) {
      if (Array.isArray(genres)) {
        genres.forEach((genreId) => {
          newCompactDisk.addGenre(genreId);
        });
      }
    }
    res.status(201).json(newCompactDisk);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllCompactDisks = async (req, res) => {
  try {
    const compactDisks = await CompactDisk.findAll();
    res.status(200).json(compactDisks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCompactDiskById = async (req, res) => {
  try {
    const { id } = req.params;
    const compactDisk = await CompactDisk.findByPk(id);
    if (!compactDisk) {
      return res.status(404).json({ message: "CompactDisk not found" });
    }
    res.status(200).json(compactDisk);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateCompactDisk = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, year, price, stars } = req.body;
    const compactDisk = await CompactDisk.findByPk(id);

    if (!compactDisk) {
      return res.status(404).json({ message: "CompactDisk not found" });
    }

    compactDisk.title = title || compactDisk.title;
    compactDisk.year = year || compactDisk.year;
    compactDisk.price = price || compactDisk.price;
    compactDisk.stars = stars || compactDisk.stars;

    await compactDisk.save();
    res.status(200).json(compactDisk);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteCompactDisk = async (req, res) => {
  try {
    const { id } = req.params;
    const compactDisk = await CompactDisk.findByPk(id);
    if (!compactDisk) {
      return res.status(404).json({ message: "CompactDisk not found" });
    }

    await compactDisk.destroy();
    res.status(200).json({ message: "CompactDisk deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCDsByGenre = async (req, res) => {
  try {
    const { genreId } = req.params;

    const genre = await Genre.findByPk(genreId, {
      include: {
        model: CompactDisk,
        attributes: ["title", "year", "price", "stars"],
        include: [
          {
            model: Artist,
            attributes: ["name"],
          },
        ],
        through: { attributes: [] },
      },
    });

    if (!genre) {
      return res.status(404).json({ message: "Genre not found" });
    }

    res.status(200).json(genre.CompactDisks || []);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
