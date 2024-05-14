import mongoose, { Types } from "mongoose";

const reviewSchema = new mongoose.Schema({
    title: { type: String, default: null, require: true },
    address: { type: String, default: null },
    text: { type: String, default: null },
    rate: { type: Number, default: null, require: true },
    owner: { type: Types.ObjectId, require: true },
    category: { type: Types.ObjectId, require: true }
});

export default mongoose.model("Review", reviewSchema);