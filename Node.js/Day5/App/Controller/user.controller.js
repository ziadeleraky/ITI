const userModel = require("../Database/Models/user.model");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  const checkEmail = await userModel.findOne({ email: req.body.email }); // null or Value
  if (checkEmail) {
    return res.status(400).json({ message: "Email already exists" });
  }
  const hashPassword = await bcrypt.hash(req.body.password, 10);
  let newUserModel = req.body;
  newUserModel.password = hashPassword;
  const user = new userModel(newUserModel);
  await user.save();
  res.status(201).json({ message: "User created successfully" });
};

const login = async (req, res) => {
  let user = new userModel(req.body);
  const isValid = await user.check(req.body.password);
  // console.log(isValid);
  if (isValid) {
    return res.status(200).json({ message: "Logged in successfully" });
  } else {
    return res.status(400).json({ message: "Email or Password is not valid" });
  }
};

const add = async (req, res) => {
  const check = await userModel.findOne({ email: req.body.email });
  if (check) return res.status(400).json({ message: "Email is already taken" });
  let hashPassword = await bcrypt.hash(req.body.password.toString(), 10);
  req.body.password = hashPassword;
  let newUser = new userModel(req.body);
  await newUser.save();
  res.status(200).json({ message: "User has been added successfully" });
};

const read = async (req, res) => {
  let user = await userModel.findOne({ id: req.params.id });
  if (!user) return res.status(400).json({ message: "There's no match" });
  return res.status(200).json(user);
};

const deleteUser = async (req, res) => {
  try {
    let check = await userModel.deleteOne({ id: req.params.id });
    if (!!check.deletedCount) {
      return res.status(200).json({ message: "Deleted successfully" });
    }
    return res.status(400).json({ message: "Failed!" });
  } catch (e) {
    console.log(e.message);
  }
};

const update = async (req, res) => {
  let user = await userModel.findOne({ email: req.body.email });
  if (!user) return res.status(400).json({ message: "Failed!" });
  const inValidUpdates = ["id", "password"];
  for (let property in req.body) {
    // console.log(property);
    if (!inValidUpdates.includes(property)) {
      user[property] = req.body[property];
    }
    // console.log(user);
  }
  await user.save();
  res.status(200).json({ message: "Updated Successfully!" });
};

module.exports = { register, login, add, read, deleteUser, update };
