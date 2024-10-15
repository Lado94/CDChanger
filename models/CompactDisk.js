const { DataTypes } = require("sequelize");
const sequelize = require("../db/db1");

const CompactDisk = sequelize.define(
  "CompactDisk",
  {
    title: {
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
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: {
          args: 1800,
        },
        max: {
          args: new Date(),
        },
      },
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: {
          args: 0,
        },
      },
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: {
          args: 0,
        },
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = CompactDisk;
