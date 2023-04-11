const express = require("express");
const app = express();
const PORT = process.env.PORT || 7000;

const cors = require("cors");
const mongoose = require("mongoose");

const express_graphql = require("express-graphql").graphqlHTTP;

app.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/booksDB");
mongoose.connection.once("open", () => {
  console.log("DB connected successfully");
});

const graphqlSchema = require("./Schema/schema");
app.use("/graphql", express_graphql({ schema: graphqlSchema, graphiql: true }));

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/graphql`);
});
