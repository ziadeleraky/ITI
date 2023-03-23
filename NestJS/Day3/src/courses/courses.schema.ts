import * as mongoose from 'mongoose';

export const courseSchema = new mongoose.Schema({
  id: Number,
  name: String,
  duration: Number,
  description: String,
});
