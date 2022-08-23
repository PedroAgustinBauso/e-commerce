const Product = require("./Product");
const User = require("./User");
const Ticket = require("./Ticket");
const Cart = require("./Cart");
const Categories = require("./Categories");

Cart.belongsTo(User);
User.hasOne(Cart);

Cart.hasMany(Product);
Product.belongsTo(Cart);

Product.hasMany(Categories);
Categories.belongsTo(Product);

User.hasMany(Ticket, { as: "tickets" });
Ticket.belongsTo(User);

module.exports = { Product, User, Ticket, Cart, Categories };
