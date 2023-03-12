const express = require("express");
const app = express();

require("./Database/connectDB");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userRoutes = require("./Routes/user.routes");
const productRoutes = require("./Routes/product.routes");

app.use("/user", userRoutes);
app.use("/product", productRoutes);

module.exports = app;
