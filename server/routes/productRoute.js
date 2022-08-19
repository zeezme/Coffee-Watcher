var express = require("express");
var router = express.Router();
require("dotenv/config");
const socket = require('../socketApi');

var sequelize = require("../Controllers/productController");



router.post("/", async (req, res) => {
  await sequelize.add(req.body.NOME, req.body.PRECO, req.body.DESC);
 // socket.io.to('products').emit("productsList",await getTable.getTables());

  res.redirect(
    `http://${process.env.FRONTEND_IP}:${process.env.FRONTEND_PORT}/`
  );
});
module.exports = router;
