import * as mongoose from 'mongoose';

export let AuthSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  password: String,
  isAdmin: Boolean,
});
