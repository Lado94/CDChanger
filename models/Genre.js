const { DataTypes } = require("sequelize");
const sequelize = require("../db/db");

const Genre = sequelize.define(
  "Genre",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      len: {
        args: [3, 18],
        msg: "Name must be between 3 and 18 characters long",
      },
      is: {
        args: /^[A-Za-z\s]{3,18}$/,
        msg: "Name can only contain letters",
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Genre;
