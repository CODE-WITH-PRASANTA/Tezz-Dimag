const mongoose = require("mongoose");

const admissionSchema = new mongoose.Schema(
  {
    childName: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    parentName: {
      type: String,
      required: true,
    },
    occupation: String,
    email: {
      type: String,
      required: true,
    },
    phone: String,
    updates: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Admission", admissionSchema);