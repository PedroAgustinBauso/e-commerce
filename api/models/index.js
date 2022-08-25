const Product = require("./Product");
const User = require("./User");
const Cart = require("./Cart");
const Categories = require("./Categories");

Cart.belongsTo(User);
User.hasOne(Cart);

Cart.hasMany(Product);
Product.belongsTo(Cart);

Product.hasMany(Categories);
Categories.belongsTo(Product);


module.exports = { Product, User, Cart, Categories };
