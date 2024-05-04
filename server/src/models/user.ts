import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
  first_name: { type: String, default: null },
  last_name: { type: String, default: null },
  email: { type: String, unique: true },
  password: { type: String },
  isAdmin: { type: Boolean },
  reviews: { type: [Schema.Types.ObjectId] }
});

export default mongoose.model("User", userSchema);