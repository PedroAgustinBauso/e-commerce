const { DataTypes, Model } = require("sequelize");
const db = require("../db");

class Categories extends Model {}

Categories.init(
  {
    name: {
      type: DataTypes.STRING,
    },
  },
  { sequelize: db, modelName: "categories" }
);

module.exports = Categories;
