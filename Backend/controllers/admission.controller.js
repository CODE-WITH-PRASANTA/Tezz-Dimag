const Admission = require("../models/admission.model");

/* ================= CREATE ADMISSION ================= */
exports.createAdmission = async (req, res) => {
  try {
    const {
      childName,
      dob,
      parentName,
      occupation,
      email,
      phone,
      updates,
    } = req.body;

    if (!childName || !dob || !parentName || !email) {
      return res.status(400).json({
        success: false,
        message: "Required fields missing",
      });
    }

    const admission = new Admission({
      childName,
      dob,
      parentName,
      occupation,
      email,
      phone,
      updates,
    });

    await admission.save();

    res.status(201).json({
      success: true,
      message: "Admission submitted successfully",
      data: admission,
    });

  } catch (error) {
    console.log("🔥 ADMISSION ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ================= GET ALL ADMISSIONS ================= */
exports.getAdmissions = async (req, res) => {
  try {
    const admissions = await Admission.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: admissions,
    });

  } catch (error) {
    console.log("🔥 GET ADMISSION ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};