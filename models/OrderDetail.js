const { DataTypes } = require("sequelize");
const sequelize = require("../db/db");

const OrderDetail = sequelize.define(
  "OrderDetail",
  {
    quantity: {
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

module.exports = OrderDetail;
