import mongoose from "mongoose"

const PostSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String,
}, { timestamps: true })

export default mongoose.model("Post", PostSchema)