var express = require("express");
var router = express.Router();
require("dotenv/config");

var create = require("../Controllers/productController");

router.post("/", async (req, res) => {
  await create(req.body.fprato, req.body.fpreco, req.body.fdesc);
  res.redirect(
    `http://${process.env.FRONTEND_IP}:${process.env.FRONTEND_PORT}/`
  );
});
module.exports = router;
