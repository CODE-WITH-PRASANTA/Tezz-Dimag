const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    name: String,

    price: Number,

    category: String,

    desc: String,

    image: String,
  },
  { timestamps: true },
);

module.exports = mongoose.model("Course", courseSchema);
