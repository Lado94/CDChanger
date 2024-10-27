const { DataTypes } = require("sequelize");
const sequelize = require("../db/db");

const CompactDisk = sequelize.define(
  "CompactDisk",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      len: {
        args: [1, 30],
        msg: "Title must be between 1 and 30 characters long",
      },
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1800
      },
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: 0,
      },
    },
    stars: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
        max: 5
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = CompactDisk;
