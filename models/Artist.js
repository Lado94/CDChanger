const { DataTypes } = require("sequelize");
const sequelize = require("../db/db");

const Artist = sequelize.define(
  "Artist",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      len: {
        args: [1, 30],
        msg: "Name must be between 1 and 30 characters long",
      },
    },
    biography: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: {
        args: [10, 200],
        msg: "Biography must be between 10 and 200 characters long",
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Artist;
