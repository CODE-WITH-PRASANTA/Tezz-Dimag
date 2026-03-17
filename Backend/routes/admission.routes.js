const express = require("express");
const router = express.Router();

const {
  createAdmission,
  getAdmissions, // ✅ ADD THIS
} = require("../controllers/admission.controller");

// POST
router.post("/admission", createAdmission);

// ✅ GET (FIX FOR 404 ERROR)
router.get("/admission", getAdmissions);

module.exports = router;