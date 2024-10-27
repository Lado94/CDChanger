const { DataTypes } = require("sequelize");
const sequelize = require("../db/db");

const Order = sequelize.define(
  "Order",
  {
    totalPrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 0,
        },
      },
  },
  {
    timestamps: true,
  }
);

module.exports = Order;
