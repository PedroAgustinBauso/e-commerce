const { DataTypes, Model } = require("sequelize");
const db = require("../db");

class CartItem extends Model {}

CartItem.init(
  {
    name: {
      type: DataTypes.STRING,
    },
    cant: {
      type: DataTypes.INTEGER,
    },
    price: {
      type: DataTypes.INTEGER,
    },
  },

  { sequelize: db, modelName: "cart_item" }
);

module.exports = CartItem;
