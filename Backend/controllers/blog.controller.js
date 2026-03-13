const Blog = require("../models/blog.model");
const { deleteImageFile } = require("../middlewares/upload");

/* ================= CREATE BLOG ================= */

exports.createBlog = async (req, res) => {
  try {
    const blog = new Blog({
      title: req.body.title,
      quote: req.body.quote,
      content: req.body.content,
      author: req.body.author,
      designation: req.body.designation,
      location: req.body.location,
      category: req.body.category,
      tags: req.body.tags,
      image: req.body.image || "",
    });

    await blog.save();

    res.json({
      success: true,
      message: "Blog created successfully",
      data: blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ================= GET ALL BLOGS ================= */

exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      data: blogs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    res.json({
      success: true,
      data: blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ================= UPDATE BLOG ================= */

exports.updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog)
      return res.json({
        success: false,
        message: "Blog not found",
      });

    blog.title = req.body.title;
    blog.quote = req.body.quote;
    blog.content = req.body.content;
    blog.author = req.body.author;
    blog.designation = req.body.designation;
    blog.location = req.body.location;
    blog.category = req.body.category;
    blog.tags = req.body.tags;

    if (req.body.image) {
      deleteImageFile(blog.image);
      blog.image = req.body.image;
    }

    await blog.save();

    res.json({
      success: true,
      message: "Blog updated successfully",
      data: blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ================= DELETE BLOG ================= */

exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog)
      return res.json({
        success: false,
        message: "Blog not found",
      });

    deleteImageFile(blog.image);

    await Blog.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
