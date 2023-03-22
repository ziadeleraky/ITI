import * as mongoose from 'mongoose';

export const studentSchema = new mongoose.Schema({
  id: Number,
  name: String,
  age: Number,
  courseIds: [],
});
