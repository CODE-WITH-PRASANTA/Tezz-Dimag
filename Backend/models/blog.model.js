const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
{
  title:{
    type:String,
    required:true
  },

  quote:{
    type:String
  },

  content:{
    type:String,
    required:true
  },

  author:{
    type:String
  },

  designation:{
    type:String
  },

  location:{
    type:String
  },

  category:{
    type:String
  },

  tags:{
    type:String
  },

  image:{
    type:String
  },

  comments:{
    type:Number,
    default:0
  },

  likes:{
    type:Number,
    default:0
  }

},
{timestamps:true}
);

module.exports = mongoose.model("Blog",blogSchema);