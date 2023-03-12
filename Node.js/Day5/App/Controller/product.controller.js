const productModel = require("../Database/Models/product.model");

const add = async (req, res) => {
  try {
    const check = await productModel.findOne({ id: req.body.id });
    if (check) return res.status(400).json({ message: "Product is already exist" });
    const newProduct = new productModel(req.body);
    await newProduct.save();
    res.status(200).json({ message: "Product has been added successfully" });
  } catch (e) {
    res.send(e.message);
  }
};

const read = async (req, res) => {
  let product = await productModel.findOne({ id: req.params.id });
  if (!product) return res.status(400).json({ message: "There's no match" });
  return res.status(200).json(product);
};

const deleteProduct = async (req, res) => {
  try {
    let check = await productModel.deleteOne({ id: req.params.id });
    if (!!check.deletedCount) {
      return res.status(200).json({ message: "Deleted successfully" });
    }
    return res.status(400).json({ message: "Failed!" });
  } catch (e) {
    console.log(e.message);
  }
};

const update = async (req, res) => {
  let product = await productModel.findOne({ name: req.body.name });
  if (!product) return res.status(400).json({ message: "Failed!" });
  const inValidUpdates = ["id", "password"];
  for (let property in req.body) {
    if (!inValidUpdates.includes(property)) {
      product[property] = req.body[property];
    }
  }
  await product.save();
  res.status(200).json({ message: "Updated Successfully!" });
};

module.exports = { add, read, deleteProduct, update };
