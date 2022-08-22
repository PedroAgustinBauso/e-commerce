const {DataTypes, Model} = require('sequelize')
const db = require('../db')

class Product extends Model {}

Product.init({

},
{sequelize:db, modelName:'product'})

module.exports = Product;