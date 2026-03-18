const express = require("express");
const router = express.Router();

const {
  addImage,
  getImages,
  deleteImage,
} = require("../controllers/gallery.controller");

const {
  upload,
  convertToWebp,
} = require("../middlewares/upload");

// ✅ ADD IMAGE (MULTER)
router.post(
  "/gallery",
  upload.single("image"),   // important
  convertToWebp,
  addImage
);

// ✅ GET IMAGES
router.get("/gallery", getImages);

// ✅ DELETE
router.delete("/gallery/:id", deleteImage);

module.exports = router;