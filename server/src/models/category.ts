import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    category_name: { type: String, require: true }
});

export default mongoose.model("Category", categorySchema);