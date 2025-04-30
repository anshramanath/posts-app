import express from "express"
import multer from "multer"
import dotenv from "dotenv"
import Post from "../models/Post.js"
import { uploadToS3 } from "../utils/uploadToS3.js"

dotenv.config()
const router = express.Router()
const upload = multer({ storage: multer.memoryStorage() })

// POST /api/posts
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { title, description } = req.body
    let imageUrl = ""

    if (req.file) {
      imageUrl = await uploadToS3(req.file)
    }

    const post = new Post({ title, description, imageUrl })
    await post.save()
    res.status(201).json(post)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Upload failed" })
  }
})

// GET /api/posts
router.get("/", async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 })
  res.json(posts)
})

export default router