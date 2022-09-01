const { DataTypes, Model } = require("sequelize");
const db = require("../db");


class Review extends Model {}

Review.init(
  {
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    valoracion: {
        type: DataTypes.INTEGER,
        validate:{max:5, min:1},
        allowNull: false,
      },
  },
  { sequelize: db, modelName: "review" },
  { indexes: [{ unique: true, fields: ["userId", "productId"]}]},
);

module.exports = Review;