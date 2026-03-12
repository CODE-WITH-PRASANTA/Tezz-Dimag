const Message = require("../models/message.model");

/* ================= CREATE MESSAGE ================= */

exports.createMessage = async (req, res) => {
  try {
    const message = new Message(req.body);

    await message.save();

    res.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

/* ================= GET MESSAGE BY BLOG ================= */

exports.getBlogMessages = async (req, res) => {
  try {
    const messages = await Message.find({
      blogId: req.params.blogId,
    }).sort({ createdAt: -1 });

    res.json({
      success: true,
      data: messages,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
