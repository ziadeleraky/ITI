const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
  name: String,
  age: String,
  books: [{ type: String }],
});

module.exports = mongoose.model("author", AuthorSchema);
