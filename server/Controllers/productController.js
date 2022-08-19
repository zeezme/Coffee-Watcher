const Product = require("../Models/product");

const productController = {
  add: async (nome, preco, descricao) => {
    try {
      await Product.create({
        nome: nome,
        preco: preco,
        descricao: descricao,
      });
    } catch (error) {
      console.log(error);
    }
  },
  remove: async(productId) => {
    try {
      await Product.destroy( {where: {id: productId}});
    } catch (error) {
      console.log(error);
    }
  }
} 

module.exports = productController;
