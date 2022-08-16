const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/db.config');

    const customerProduct = db.define('customerProduct', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        }
    })

module.exports = customerProduct;