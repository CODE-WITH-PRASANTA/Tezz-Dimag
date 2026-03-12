const express = require("express");
const router = express.Router();

const {
createBlog,
getBlogs,
updateBlog,
deleteBlog
} = require("../controllers/blog.controller");

const { upload, convertToWebp } = require("../middlewares/upload");


router.post(
"/blogs/create",
upload.single("image"),
convertToWebp,
createBlog
);

router.get("/blogs/all", getBlogs);

router.put(
"/blogs/update/:id",
upload.single("image"),
convertToWebp,
updateBlog
);

router.delete("/blogs/delete/:id", deleteBlog);


module.exports = router;