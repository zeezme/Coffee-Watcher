const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/db.config");
const customer = require("./customer");
const customerProduct = require("./customerProduct");

const Product = db.define("product", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  preco: DataTypes.DECIMAL,
  descricao: DataTypes.STRING,
});
customer.belongsToMany(Product, {
  through: {
    model: customerProduct,
  },
  foreignKey: "idProduct",
  constraint: true,
});

module.exports = Product;
