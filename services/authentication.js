const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Op } = require("sequelize");
require("dotenv").config();

const { searchByName } = require("./search");
const { User } = require("../models");
const HttpError = require("./HttpError");

const secretKey = process.env.SECRET_KEY;

const createToken = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: {
        email: {
          [Op.like]: email,
        },
      },
    });
    if (!user) {
      return next(new HttpError("Couldn't find user", 404));
    }
    const equal = await bcrypt.compare(password, user.password);
    if (!equal) {
      return next(new HttpError("Password incorrect", 404));
    }
    const token = jwt.sign(user.name, secretKey);
    res.cookie("Ticket", token, { expires: new Date(Date.now() + 90000000), httpOnly: true, secure: true,
      sameSite: 'none' });
    res
      .status(200)
      .json({
        userId: user.id,
        userName: user.name,
        message: `${user.name} logged in successfully`,
      });
  } catch (err) {
    next(err);
  }
};

const delToken = async (req, res) => {
  try {
    res.cookie("Ticket", "");
    res.status(200).json({ error: 0, message: "Logged out successfully" });
  } catch (err) {
    next(err);
  }
};

const checkToken = async (req, res, next) => {
  try {
    const token = req.cookies.Ticket;
    if (token) {
      jwt.verify(token, secretKey, (err, res) => {
        if (err) next(new HttpError("Wrong token", 401));
        else {
          console.log(res);
          next();
        }
      });
    } else {
      next(new HttpError("No token provided", 401));
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { createToken, checkToken, delToken };
