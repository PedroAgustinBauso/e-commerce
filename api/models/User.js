const {DataTypes, Model} = require('sequelize')
const db = require('../db')

class User extends Model {}

User.init({

},
{sequelize:db, modelName:'user'})

module.exports = User;