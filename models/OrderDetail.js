const { DataTypes } = require("sequelize");
const sequelize = require("../db/db1");

const OrderDetail = sequelize.define(
  "OrderDetail",
  {
    quantity: {
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

module.exports = OrderDetail;
