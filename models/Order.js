const { DataTypes } = require("sequelize");
const sequelize = require("../db/db1");

const Order = sequelize.define(
  "Order",
  {
    totalPrice: {
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

module.exports = Order;
