const io = require("socket.io")();
const socketApi = {
  io,
};

var getApi = require("./Controllers/apiController");
var sequelize = require("./Controllers/productController")

io.on("connection", async (client) => {
  //Quando recebe a conexão
  console.log("User connected", client.id);
  client.join("products");
  client.emit("productsList", await getApi());
  //socket.io.to('products').emit("productsList",await getTables());

  client.on('delete', (message) => {
    console.log('Delete item with id ',message);
    sequelize.remove(message);
  })
});


module.exports = socketApi;
