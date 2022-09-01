const Sequelize = require("sequelize");

const sequelize = new Sequelize("bbt", "gonzalo", null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = sequelize;
