const { Sequelize, Model, Datayupes } = require("sequelize");
const Product = require("../Models/product");

const creates = async (nome, preco, descricao) => {
  try {
    const create = await Product.create({
      nome: nome,
      preco: preco,
      descricao: descricao,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = creates;
