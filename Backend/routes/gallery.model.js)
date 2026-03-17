const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema(
  {
    image: {
      type: String, // image URL / filename
      required: true,
    },
    alt: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Gallery", gallerySchema);