const express = require("express");

const router = express.Router();

const {
  createContact,
  getContacts,
  updateContact,
  deleteContact,
} = require("../controllers/contact.controller");

/* CREATE */
router.post("/create", createContact);

/* GET ALL */
router.get("/all", getContacts);

/* UPDATE */
router.put("/update/:id", updateContact);

/* DELETE */
router.delete("/delete/:id", deleteContact);

module.exports = router;
