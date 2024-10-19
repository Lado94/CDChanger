const { Op } = require("sequelize");
const express = require("express");

const { Customer, Movie } = require("../models/index");
const HttpError = require("./HttpError");

const router = express.Router();

// Search by email
router.get("/customer/email/:email", async (req, res, next) => {
  try {
    const email = req.params.email;
    if (!email) {
      return next(new HttpError("Email parameter is required", 400));
    }

    const customers = await Customer.findAll({
      where: {
        email: {
          [Op.like]: "%" + email + "%",
        },
      },
    });

    if (customers.length === 0) {
      return next(new HttpError("No customers found", 404));
    }

    res.status(200).json(customers);
  } catch (err) {
    next(err);
  }
});
// Search by name
router.get("/customer/name/:name", async (req, res, next) => {
  try {
    const name = req.params.name;
    if (!name) {
      return next(new HttpError("Name parameter is required", 400));
    }

    const customers = await Customer.findAll({
      where: {
        name: {
          [Op.like]: "%" + name + "%",
        },
      },
    });

    if (customers.length === 0) {
      return next(new HttpError("No customers found", 404));
    }

    res.status(200).json(customers);
  } catch (err) {
    next(err);
  }
});
// Search by name (movie)
router.get("/movie/name/:title", async (req, res, next) => {
  try {
    const title = req.params.title;
    if (!title) {
      return next(new HttpError("title parameter is required", 400));
    }

    const movies = await Movie.findAll({
      where: {
        title: {
          [Op.like]: "%" + title + "%",
        },
      },
    });

    if (movies.length === 0) {
      return next(new HttpError("No movies found", 404));
    }

    res.status(200).json(movies);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
