const User = require("./User");
const CompactDisk = require("./CompactDisk");
const Order = require("./Order");
const Genre = require("./Genre");
const Author = require("./Author");
const OrderDetail = require("./OrderDetail");

User.hasMany(Order);
Order.belongsTo(User);

Author.hasMany(CompactDisk);
CompactDisk.belongsTo(Author);

CompactDisk.hasMany(OrderDetail);
OrderDetail.belongsTo(Order, { foreignKey: 'orderId' });
OrderDetail.belongsTo(CompactDisk, { foreignKey: 'cdId' });

CompactDisk.belongsToMany(Genre, { through: "CDGenres" });
Genre.belongsToMany(CompactDisk, { through: "CDGenres" });

module.exports = { User, CompactDisk, Order, Genre };
