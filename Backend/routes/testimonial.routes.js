const express = require("express")
const router = express.Router()

const {
  createTestimonial,
  getTestimonials,
  updateTestimonial,
  deleteTestimonial
} = require("../controllers/testimonial.controller")

const { upload, convertToWebp } = require("../middlewares/upload")


/* CREATE */

router.post(
  "/testimonials/create",
  upload.single("image"),
  convertToWebp,
  createTestimonial
)


/* GET ALL */

router.get(
  "/testimonials/all",
  getTestimonials
)


/* UPDATE */

router.put(
  "/testimonials/update/:id",
  upload.single("image"),
  convertToWebp,
  updateTestimonial
)


/* DELETE */

router.delete(
  "/testimonials/delete/:id",
  deleteTestimonial
)

module.exports = router