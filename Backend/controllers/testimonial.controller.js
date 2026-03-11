const Testimonial = require("../models/testimonial.model");
const { deleteImageFile } = require("../middlewares/upload");


/* ================= CREATE ================= */

exports.createTestimonial = async (req,res) => {

  try{

    const testimonial = new Testimonial({
      name:req.body.name,
      designation:req.body.designation,
      feedback:req.body.feedback,
      rating:req.body.rating,
      image:req.body.image || ""
    })

    await testimonial.save()

    res.json({
      success:true,
      message:"Testimonial created",
      data:testimonial
    })

  }catch(error){

    res.status(500).json({
      success:false,
      message:error.message
    })

  }

}


/* ================= GET ALL ================= */

exports.getTestimonials = async (req,res)=>{

  try{

    const testimonials = await Testimonial
      .find()
      .sort({createdAt:-1})

    res.json({
      success:true,
      data:testimonials
    })

  }catch(error){

    res.status(500).json({
      success:false
    })

  }

}


/* ================= UPDATE ================= */

exports.updateTestimonial = async (req,res)=>{

  try{

    const testimonial = await Testimonial.findById(req.params.id)

    if(!testimonial)
      return res.json({
        success:false,
        message:"Testimonial not found"
      })

    testimonial.name = req.body.name
    testimonial.designation = req.body.designation
    testimonial.feedback = req.body.feedback
    testimonial.rating = req.body.rating

    if(req.body.image){

      deleteImageFile(testimonial.image)
      testimonial.image = req.body.image

    }

    await testimonial.save()

    res.json({
      success:true,
      message:"Testimonial updated",
      data:testimonial
    })

  }catch(error){

    res.status(500).json({
      success:false
    })

  }

}


/* ================= DELETE ================= */

exports.deleteTestimonial = async (req,res)=>{

  try{

    const testimonial = await Testimonial.findById(req.params.id)

    if(!testimonial)
      return res.json({
        success:false,
        message:"Testimonial not found"
      })

    deleteImageFile(testimonial.image)

    await Testimonial.findByIdAndDelete(req.params.id)

    res.json({
      success:true,
      message:"Testimonial deleted"
    })

  }catch(error){

    res.status(500).json({
      success:false
    })

  }

}