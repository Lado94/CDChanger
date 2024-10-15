const { DataTypes } = require("sequelize");
const sequelize = require("../db/db1");

const Author = sequelize.define(
  "Author",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      len: {
        args: [1, 30],
        msg: "Name must be between 1 and 30 characters long",
      },
      is: {
        args: /^[A-Za-z\s]{1,30}$/,
        msg: "Name can only contain letters",
      },
    },
    biography: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: {
        args: [10, 200],
        msg: "Biography must be between 10 and 200 characters long",
      },
      is: {
        args: /^[A-Za-z\s]{10,200}$/,
        msg: "Biography can only contain letters",
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Author;
