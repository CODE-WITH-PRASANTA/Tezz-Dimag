const express = require("express");
const router = express.Router();

const {
  createTeacher,
  getTeachers,
  updateTeacher,
  deleteTeacher,
} = require("../controllers/teacher.controller");

const { upload, convertToWebp } = require("../middlewares/upload");

/* CREATE */
router.post(
  "/teachers/create",
  upload.single("image"),
  convertToWebp,
  createTeacher
);

/* GET ALL */
router.get("/teachers/all", getTeachers);

/* UPDATE */
router.put(
  "/teachers/update/:id",
  upload.single("image"),
  convertToWebp,
  updateTeacher
);

/* DELETE */
router.delete("/teachers/delete/:id", deleteTeacher);

module.exports = router;