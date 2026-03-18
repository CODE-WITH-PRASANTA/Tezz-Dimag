const Gallery = require("../models/gallery.model");
const { deleteImageFile } = require("../middlewares/upload");

/* ================= ADD IMAGE ================= */
exports.addImage = async (req, res) => {
  try {
    const { alt } = req.body;

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Image file is required",
      });
    }

    const imagePath = req.file.path;

    const newImage = new Gallery({
      image: imagePath,
      alt,
    });

    await newImage.save();

    res.status(201).json({
      success: true,
      message: "Image uploaded successfully",
      data: newImage,
    });

  } catch (error) {
    console.log("🔥 ADD IMAGE ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ================= GET IMAGES ================= */
exports.getImages = async (req, res) => {
  try {
    const images = await Gallery.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      data: images,
    });

  } catch (error) {
    console.log("🔥 GET IMAGE ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ================= DELETE IMAGE ================= */
exports.deleteImage = async (req, res) => {
  try {
    const id = req.params.id;

    const image = await Gallery.findById(id);

    if (!image) {
      return res.status(404).json({
        success: false,
        message: "Image not found",
      });
    }

    // ✅ delete file from uploads folder
    deleteImageFile(image.image);

    await Gallery.findByIdAndDelete(id);

    res.json({
      success: true,
      message: "Image deleted",
    });

  } catch (error) {
    console.log("🔥 DELETE IMAGE ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};