const Course = require("../models/course.model");
const { deleteImageFile } = require("../middlewares/upload");

/* ================= CREATE ================= */
exports.createCourse = async (req, res) => {
  try {
    const course = new Course({
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
      desc: req.body.desc,
      image: req.body.image
    });

    await course.save();

    res.json({
      success: true,
      message: "Course created successfully",
      data: course
    });

  } catch (err) {
    res.status(500).json({ success:false, message: err.message });
  }
};

/* ================= GET ALL ================= */
exports.getCourses = async (req, res) => {
  try {

    const courses = await Course.find().sort({ createdAt:-1 });

    res.json({
      success:true,
      data:courses
    });

  } catch (err) {
    res.status(500).json({ success:false, message: err.message });
  }
};

/* ================= GET SINGLE ================= */
exports.getCourseById = async (req, res) => {
  try {

    const course = await Course.findById(req.params.id);

    if(!course){
      return res.status(404).json({message:"Course not found"});
    }

    res.json({
      success:true,
      data:course
    });

  } catch (err) {
    res.status(500).json({ success:false, message: err.message });
  }
};

/* ================= UPDATE ================= */
exports.updateCourse = async (req, res) => {
  try {

    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({ message:"Course not found" });
    }

    /* delete old image if new uploaded */
    if (req.body.image && course.image) {
      deleteImageFile(course.image);
    }

    const updated = await Course.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        desc: req.body.desc,
        image: req.body.image || course.image
      },
      { new:true }
    );

    res.json({
      success:true,
      message:"Course updated",
      data:updated
    });

  } catch (err) {
    res.status(500).json({ success:false, message: err.message });
  }
};

/* ================= DELETE ================= */
exports.deleteCourse = async (req, res) => {
  try {

    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({ message:"Course not found" });
    }

    deleteImageFile(course.image);

    await course.deleteOne();

    res.json({
      success:true,
      message:"Course deleted"
    });

  } catch (err) {
    res.status(500).json({ success:false, message: err.message });
  }
};