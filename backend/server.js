import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import postsRoute from "./routes/posts.js"

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/posts", postsRoute)

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT || 5001, () => {
      console.log("🚀 Server running on port", process.env.PORT || 5001)
    })
  })
  .catch(err => console.error("❌ MongoDB connection error:", err))