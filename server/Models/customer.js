const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/db.config');
const Product = require('./product');
const customerProduct = require('../models/customerProduct');


const customer = db.define('customer', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cpf: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })


   
module.exports = customer;

