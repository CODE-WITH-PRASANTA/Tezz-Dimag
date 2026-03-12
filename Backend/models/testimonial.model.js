const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema(
{
  name: {
    type: String,
    required: true
  },

  designation: {
    type: String,
    required: true
  },

  feedback: {
    type: String,
    required: true
  },

  rating: {
    type: Number,
    required: true
  },

  image: {
    type: String
  }

},
{ timestamps: true }
);

module.exports = mongoose.model("Testimonial", testimonialSchema);