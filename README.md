# 🐦 Post Feed App

A full-stack Twitter-style post feed where users can create posts with a title, description, and optional image — uploaded and stored on **AWS S3**. This project was built to learn how to integrate AWS S3 for file uploads and manage full-stack data flow with modern tools.

![Posts App](screenshots/posts-app.png)

---

## 🧠 What I Learned

This project was a hands-on exploration of:

- Uploading files to AWS S3 via a Node.js backend
- Sending multipart/form-data from the frontend
- Serving image URLs stored in MongoDB
- Styling a clean UI using React Bootstrap
- Testing backend routes using Hoppscotch

---

## ⚙️ Tech Stack

### 🖥 Frontend
- **React** + **TypeScript**
- **Vite** (for fast dev setup)
- **React-Bootstrap**
- Live image previews before submission

### 🔧 Backend
- **Node.js** + **Express**
- **MongoDB** with Mongoose
- **AWS S3** via `@aws-sdk/client-s3`
- **Multer** for handling file uploads

### 🧪 API Testing
- **Hoppscotch** was used to test:
  - File upload endpoints
  - JSON responses
  - Error handling