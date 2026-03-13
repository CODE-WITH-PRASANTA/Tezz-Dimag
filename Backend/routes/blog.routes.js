const express = require("express");
const router = express.Router();

const {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog
} = require("../controllers/blog.controller");

const { upload, convertToWebp } = require("../middlewares/upload");


/* ================= CREATE BLOG ================= */

router.post(
  "/blogs/create",
  upload.single("image"),
  convertToWebp,
  createBlog
);


/* ================= GET ALL BLOGS ================= */

router.get("/blogs/all", getBlogs);


/* ================= GET SINGLE BLOG ================= */

router.get("/blogs/:id", getBlogById);


/* ================= UPDATE BLOG ================= */

router.put(
  "/blogs/update/:id",
  upload.single("image"),
  convertToWebp,
  updateBlog
);


/* ================= DELETE BLOG ================= */

router.delete("/blogs/delete/:id", deleteBlog);


module.exports = router;