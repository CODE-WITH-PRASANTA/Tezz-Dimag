const Teacher = require("../models/teacher.model");
const { deleteImageFile } = require("../middlewares/upload");

/* ================= CREATE TEACHER ================= */

exports.createTeacher = async (req, res) => {
  try {
    const teacher = new Teacher({
      name: req.body.name,
      role: req.body.role,
      subject: req.body.subject,
      experience: req.body.experience,
      bio: req.body.bio,
      image: req.body.image || "",
    });

    await teacher.save();

    res.json({
      success: true,
      message: "Teacher created",
      data: teacher,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/* ================= GET ALL TEACHERS ================= */

exports.getTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      data: teachers,
    });
  } catch (error) {
    res.status(500).json({ success: false });
  }
};

/* ================= UPDATE TEACHER ================= */

exports.updateTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id);

    if (!teacher)
      return res.json({ success: false, message: "Teacher not found" });

    teacher.name = req.body.name;
    teacher.role = req.body.role;
    teacher.subject = req.body.subject;
    teacher.experience = req.body.experience;
    teacher.bio = req.body.bio;

    if (req.body.image) {
      deleteImageFile(teacher.image);
      teacher.image = req.body.image;
    }

    await teacher.save();

    res.json({
      success: true,
      message: "Teacher updated",
      data: teacher,
    });
  } catch (error) {
    res.status(500).json({ success: false });
  }
};

/* ================= DELETE TEACHER ================= */

exports.deleteTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id);

    if (!teacher)
      return res.json({ success: false, message: "Teacher not found" });

    deleteImageFile(teacher.image);

    await Teacher.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Teacher deleted",
    });
  } catch (error) {
    res.status(500).json({ success: false });
  }
};
