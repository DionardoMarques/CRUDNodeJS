const express = require("express");
const app = express();

const product_route = require("./src/routes/product_route");

// Instanciando o express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/produtos", product_route);
app.listen(3000, () => {
  console.log("Servidor iniciado!");
});
