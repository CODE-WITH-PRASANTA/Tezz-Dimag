import React, { useState } from "react";
import "./Testimonial.css";
import { FaStar, FaEdit, FaTrash } from "react-icons/fa";

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

  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const handleImage=(e)=>{
    const file = e.target.files[0]
    if(file){
      setFormData({...formData,image:file})
      setPreview(URL.createObjectURL(file))
    }
  }

  const handleRating=(value)=>{
    setFormData({...formData,rating:value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault()

    const newData={
      ...formData,
      image:preview
    }

    if(editIndex !== null){

      const updated=[...testimonials]
      updated[editIndex]=newData
      setTestimonials(updated)
      setEditIndex(null)

    }else{

      setTestimonials([...testimonials,newData])

    }

    setFormData({
      image:null,
      name:"",
      designation:"",
      feedback:"",
      rating:0
    })

    setPreview(null)
  }

  const handleDelete=(index)=>{
    const updated=testimonials.filter((_,i)=>i!==index)
    setTestimonials(updated)
  }

  const handleEdit=(index)=>{

    const item=testimonials[index]

    setFormData({
      image:item.image,
      name:item.name,
      designation:item.designation,
      feedback:item.feedback,
      rating:item.rating
    })

    setPreview(item.image)
    setEditIndex(index)
  }

  return (
    <div className="testimonialAdmin-wrapper">

      {/* FORM SECTION */}

      <div className="testimonialAdmin-formSection">

        <h2 className="testimonialAdmin-heading">
          {editIndex !== null ? "Edit Testimonial" : "Add Testimonial"}
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
            {editIndex !== null ? "Update Testimonial" : "Submit Testimonial"}
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

              {testimonials.map((item,index)=>(
                <tr key={index}>

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
                      onClick={()=>handleEdit(index)}
                    >
                      <FaEdit/>
                    </button>

                    <button
                      className="testimonialAdmin-deleteBtn"
                      onClick={()=>handleDelete(index)}
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