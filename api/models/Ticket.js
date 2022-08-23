const {DataTypes, Model} = require('sequelize')
const db = require('../db')

class Ticket extends Model {}

Ticket.init({
    product_amount: {
        type: DataTypes.INTEGER
    },    
    total: {
        type: DataTypes.INTEGER
    },
    shipment: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    status: {
        type: DataTypes.STRING
    }
},
{sequelize:db, modelName:'ticket'})

module.exports = Ticket;