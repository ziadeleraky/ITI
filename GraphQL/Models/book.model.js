const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  name: String,
  author: String,
  numOfPages: Number,
});

module.exports = mongoose.model("book", BookSchema);
