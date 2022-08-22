const {DataTypes, Model} = require('sequelize')
const db = require('../db')

class Order extends Model {}

Order.init({

},
{sequelize:db, modelName:'order'})

module.exports = Order;