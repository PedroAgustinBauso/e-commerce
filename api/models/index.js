const Product = require("./Product");
const User = require("./User");
const Cart = require("./Cart");
const Categories = require("./Categories");
const CartItem = require("./CartItem");

Cart.belongsTo(User);
User.hasOne(Cart);

Cart.hasMany(CartItem);
CartItem.belongsTo(Cart);

Product.hasMany(Categories);
Categories.belongsTo(Product);

module.exports = { Product, User, Cart, Categories, CartItem };
