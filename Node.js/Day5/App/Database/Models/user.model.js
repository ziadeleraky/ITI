const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.methods.check = async function (password) {
  const user = this; // the body of the user that will call this method
  let dbUser = await User.findOne({ email: user.email }); // the user that stored in our DB
  if (!dbUser) return false;
  const isValid = await bcrypt.compare(password, dbUser.password);
  return isValid;
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
