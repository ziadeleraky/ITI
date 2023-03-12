const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    validate(value) {
      if (value < 0) throw new Error("Can't set quantity less than zero!");
    },
  },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
