const express = require("express");
const router = express.Router();

const {
  createMessage,
  getBlogMessages,
} = require("../controllers/message.controller");

/* SEND MESSAGE */

router.post("/messages/create", createMessage);

/* GET BLOG MESSAGES */

router.get("/messages/blog/:blogId", getBlogMessages);

module.exports = router;
