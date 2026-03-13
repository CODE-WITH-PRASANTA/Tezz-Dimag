const express = require("express");
const router = express.Router();

const {
  createCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse
} = require("../controllers/course.controller");

const { upload, convertToWebp } = require("../middlewares/upload");

/* ================= CREATE ================= */
router.post(
  "/create",
  upload.single("image"),
  convertToWebp,
  createCourse
);

/* ================= READ ALL ================= */
router.get("/all", getCourses);

/* ================= READ SINGLE ================= */
router.get("/:id", getCourseById);

/* ================= UPDATE ================= */
router.put(
  "/update/:id",
  upload.single("image"),
  convertToWebp,
  updateCourse
);

/* ================= DELETE ================= */
router.delete("/delete/:id", deleteCourse);

module.exports = router;