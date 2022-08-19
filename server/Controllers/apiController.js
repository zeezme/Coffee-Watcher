const Product = require("../Models/product");

const showTable = async () => {
    const table = await Product.findAll();
  return table;
}

module.exports = showTable;
