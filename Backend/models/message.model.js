const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
{
  blogId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Blog"
  },

  name:String,
  email:String,
  phone:String,
  subject:String,
  message:String,
  agree:Boolean
},
{timestamps:true}
);

module.exports = mongoose.model("Message",messageSchema);