const Product = require('./Product')
const User = require('./User')
const Order = require('./Order')

Product.belongsToMany(Order, {through : 'OrderOwner'})
Order.belongsToMany(Product, {through : 'OrderOwner'})
Order.belongsTo(User)
User.hasMany(Order)

module.exports = {Product,User,Order}