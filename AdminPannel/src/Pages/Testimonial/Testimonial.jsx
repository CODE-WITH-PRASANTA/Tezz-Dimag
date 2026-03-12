import React, { useState, useEffect } from "react";
import "./Testimonial.css";
import { FaStar, FaEdit, FaTrash } from "react-icons/fa";
import API, { IMAGE_URL } from "../../api/axios";

const Testimonial = () => {

  const [formData,setFormData] = useState({
    image:null,
    name:"",
    designation:"",
    feedback:"",
    rating:0
  })

  const [preview,setPreview] = useState(null)
  const [testimonials,setTestimonials] = useState([])
  const [editIndex,setEditIndex] = useState(null)

  /* ================= FETCH TESTIMONIALS ================= */

  const fetchTestimonials = async () => {

    try{

      const res = await API.get("/testimonials/all")

      if(res.data.success){

        const data = res.data.data.map(item => ({
          ...item,
          image:`${IMAGE_URL}${item.image}`
        }))

        setTestimonials(data)

      }

    }catch(error){
      console.error("Failed to fetch testimonials")
    }

  }

  useEffect(()=>{
    fetchTestimonials()
  },[])


  /* ================= INPUT CHANGE ================= */

  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  /* ================= IMAGE ================= */

  const handleImage=(e)=>{
    const file = e.target.files[0]

    if(file){
      setFormData({...formData,image:file})
      setPreview(URL.createObjectURL(file))
    }
  }

  /* ================= RATING ================= */

  const handleRating=(value)=>{
    setFormData({...formData,rating:value})
  }


  /* ================= SUBMIT ================= */

  const handleSubmit=async(e)=>{
    e.preventDefault()

    try{

      const form = new FormData()

      form.append("name",formData.name)
      form.append("designation",formData.designation)
      form.append("feedback",formData.feedback)
      form.append("rating",formData.rating)

      if(formData.image){
        form.append("image",formData.image)
      }

      if(editIndex){

        await API.put(`/testimonials/update/${editIndex}`,form,{
          headers:{ "Content-Type":"multipart/form-data" }
        })

      }else{

        await API.post("/testimonials/create",form,{
          headers:{ "Content-Type":"multipart/form-data" }
        })

      }

      fetchTestimonials()

      setFormData({
        image:null,
        name:"",
        designation:"",
        feedback:"",
        rating:0
      })

      setPreview(null)
      setEditIndex(null)

    }catch(error){
      console.error("Submit testimonial error")
    }

  }


  /* ================= DELETE ================= */

  const handleDelete = async(id)=>{

    try{

      await API.delete(`/testimonials/delete/${id}`)

      fetchTestimonials()

    }catch(error){
      console.error("Delete testimonial error")
    }

  }


  /* ================= EDIT ================= */

  const handleEdit=(item)=>{

    setFormData({
      image:null,
      name:item.name,
      designation:item.designation,
      feedback:item.feedback,
      rating:item.rating
    })

    setPreview(item.image)
    setEditIndex(item._id)

  }


  return (
    <div className="testimonialAdmin-wrapper">

      {/* FORM SECTION */}

      <div className="testimonialAdmin-formSection">

        <h2 className="testimonialAdmin-heading">
          {editIndex ? "Edit Testimonial" : "Add Testimonial"}
        </h2>

        <form
          className="testimonialAdmin-form"
          onSubmit={handleSubmit}
        >

          {/* IMAGE */}

          <div className="testimonialAdmin-field">

            <label>Upload Image</label>

            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
            />

            {preview && (
              <img
                src={preview}
                alt="preview"
                className="testimonialAdmin-preview"
              />
            )}

          </div>


          {/* NAME */}

          <div className="testimonialAdmin-field">

            <label>Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter client name"
              value={formData.name}
              onChange={handleChange}
              required
            />

          </div>


          {/* DESIGNATION */}

          <div className="testimonialAdmin-field">

            <label>Designation</label>

            <input
              type="text"
              name="designation"
              placeholder="Enter designation"
              value={formData.designation}
              onChange={handleChange}
              required
            />

          </div>


          {/* FEEDBACK */}

          <div className="testimonialAdmin-field">

            <label>Feedback</label>

            <textarea
              name="feedback"
              placeholder="Enter client feedback"
              value={formData.feedback}
              onChange={handleChange}
              required
            />

          </div>


          {/* RATING */}

          <div className="testimonialAdmin-field">

            <label>Star Rating</label>

            <div className="testimonialAdmin-stars">

              {[1,2,3,4,5].map((star)=>(
                <FaStar
                  key={star}
                  className={
                    star <= formData.rating
                    ? "testimonialAdmin-star active"
                    : "testimonialAdmin-star"
                  }
                  onClick={()=>handleRating(star)}
                />
              ))}

            </div>

          </div>


          {/* BUTTON */}

          <button
            type="submit"
            className="testimonialAdmin-submitBtn"
          >
            {editIndex ? "Update Testimonial" : "Submit Testimonial"}
          </button>

        </form>

      </div>



      {/* TABLE SECTION */}

      <div className="testimonialAdmin-tableSection">

        <h2 className="testimonialAdmin-heading">
          Testimonial List
        </h2>

        <div className="testimonialAdmin-tableWrapper">

          <table className="testimonialAdmin-table">

            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Feedback</th>
                <th>Rating</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {testimonials.map((item)=>(
                <tr key={item._id}>

                  <td>
                    <img
                      src={item.image}
                      alt=""
                      className="testimonialAdmin-tableImg"
                    />
                  </td>

                  <td>{item.name}</td>

                  <td>{item.designation}</td>

                  <td className="testimonialAdmin-feedbackCell">
                    {item.feedback}
                  </td>

                  <td>
                    {[...Array(item.rating)].map((_,i)=>(
                      <FaStar
                        key={i}
                        className="testimonialAdmin-star active"
                      />
                    ))}
                  </td>

                  <td className="testimonialAdmin-actions">

                    <button
                      className="testimonialAdmin-editBtn"
                      onClick={()=>handleEdit(item)}
                    >
                      <FaEdit/>
                    </button>

                    <button
                      className="testimonialAdmin-deleteBtn"
                      onClick={()=>handleDelete(item._id)}
                    >
                      <FaTrash/>
                    </button>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default Testimonial;