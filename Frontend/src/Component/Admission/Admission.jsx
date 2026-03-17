import React, { useState } from "react";
import "./Admission.css";
import { FaCheckCircle } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";
import API from "../../api/axios";

import child1 from "../../assets/Blog-1.webp";
import child2 from "../../assets/Blog_2.webp";

const Admission = () => {

  // ✅ STATE
  const [formData, setFormData] = useState({
    childName: "",
    dob: "",
    parentName: "",
    occupation: "",
    email: "",
    phone: "",
    updates: false,
  });

  // ✅ HANDLE CHANGE
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // ✅ SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.childName || !formData.dob || !formData.parentName || !formData.email) {
      alert("Please fill all required fields");
      return;
    }

    try {
      await API.post("/admission", formData);

      alert("Admission submitted successfully");

      // RESET
      setFormData({
        childName: "",
        dob: "",
        parentName: "",
        occupation: "",
        email: "",
        phone: "",
        updates: false,
      });

    } catch (err) {
      console.log(err);
      alert("Error submitting form");
    }
  };

  return (
    <section className="admission-section" id="admission">

      <div className="admission-container">

        {/* LEFT IMAGES */}
        <div className="admission-images">

          <img
            src={child1}
            alt="Tezz Dimag skill development class for children"
            className="admission-img admission-img-top"
          />

          <img
            src={child2}
            alt="students learning brain development activities"
            className="admission-img admission-img-bottom"
          />

        </div>

        {/* RIGHT CONTENT */}
        <div className="admission-content">

          <h2 className="admission-title">
            Apply For Admission at Tezz Dimag
          </h2>

          <p className="admission-description">
            Tezz Dimag is Odisha’s first platform dedicated to brain development
            and skill development programs for students from Class 1 to Class 12.
            Our courses such as Abacus, Vedic Maths, Robotics, Coding, Public
            Speaking, Spoken English and DMIT Talent Analysis help children
            improve memory power, logical thinking, creativity and confidence.
            <br /><br />
          </p>

          <div className="admission-features">

            <div className="admission-features-data">
              <p><FaCheckCircle /> Improve memory power and fast calculation skills</p>
              <p><FaCheckCircle /> Build confidence and public speaking ability</p>
            </div>

            <div className="admission-features-data">
              <p><FaCheckCircle /> Discover inborn talent with DMIT analysis</p>
              <p><FaCheckCircle /> Learn robotics, coding and creative skills</p>
            </div>

          </div>

          {/* FORM */}
          <form className="admission-form" onSubmit={handleSubmit}>

            <div className="admission-form-grid">

              <div className="admission-field">
                <label>Child's Name <span>(Required)</span></label>
                <input
                  type="text"
                  name="childName"
                  value={formData.childName}
                  onChange={handleChange}
                  placeholder="Enter child's name"
                />
              </div>

              <div className="admission-field">
                <label>Child's DOB <span>(Required)</span></label>

                <div className="admission-date">
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                  />
                  <FiCalendar />
                </div>
              </div>

              <div className="admission-field">
                <label>Parent's Name <span>(Required)</span></label>
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  placeholder="Enter parent's name"
                />
              </div>

              <div className="admission-field">
                <label>Parent's Occupation</label>
                <input
                  type="text"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  placeholder="Enter occupation"
                />
              </div>

              <div className="admission-field">
                <label>Email <span>(Required)</span></label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email address"
                />
              </div>

              <div className="admission-field">
                <label>Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter contact number"
                />
              </div>

            </div>

            <div className="admission-bottom">

              <label className="admission-checkbox">
                <input
                  type="checkbox"
                  name="updates"
                  checked={formData.updates}
                  onChange={handleChange}
                />
                Receive updates about your child's progress and new programs
              </label>

              <button type="submit" className="admission-btn">
                Apply Now
              </button>

            </div>

          </form>

        </div>

      </div>

    </section>
  );
};

export default Admission;