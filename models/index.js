const sequelize = require("../db/db");

const User = require("./User");
const CompactDisk = require("./CompactDisk");
const Order = require("./Order");
const Genre = require("./Genre");
const Artist = require("./Artist");
const OrderDetail = require("./OrderDetail");

User.hasMany(Order);
Order.belongsTo(User);

Artist.hasMany(CompactDisk);
CompactDisk.belongsTo(Artist);

Order.hasMany(OrderDetail);
OrderDetail.belongsTo(Order);

CompactDisk.hasMany(OrderDetail);
OrderDetail.belongsTo(CompactDisk);

CompactDisk.belongsToMany(Genre, { through: "CDGenres" });
Genre.belongsToMany(CompactDisk, { through: "CDGenres" });

const createDB = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Connected to database");
  }
};

module.exports = { User, CompactDisk, Order, Genre, createDB };
