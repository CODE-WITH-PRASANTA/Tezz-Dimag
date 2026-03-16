import React from "react";
import "./Admission.css";
import { FaCheckCircle } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";

import child1 from "../../assets/Blog-1.webp";
import child2 from "../../assets/Blog_2.webp";

const Admission = () => {
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

            <br/><br/>
{/* 
            With experienced mentors and practical learning activities, we help
            every child discover their natural talent and build essential life
            skills required for the future. */}

          </p>

          <div className="admission-features">

            <div>
              <p><FaCheckCircle /> Improve memory power and fast calculation skills</p>
              <p><FaCheckCircle /> Build confidence and public speaking ability</p>
            </div>

            <div>
              <p><FaCheckCircle /> Discover inborn talent with DMIT analysis</p>
              <p><FaCheckCircle /> Learn robotics, coding and creative skills</p>
            </div>

          </div>


          {/* FORM */}

          <form className="admission-form">

            <div className="admission-form-grid">

              <div className="admission-field">
                <label>Child's Name <span>(Required)</span></label>
                <input type="text" placeholder="Enter child's name"/>
              </div>

              <div className="admission-field">
                <label>Child's DOB <span>(Required)</span></label>

                <div className="admission-date">
                  <input type="text" placeholder="dd-mm-yyyy"/>
                  <FiCalendar />
                </div>

              </div>

              <div className="admission-field">
                <label>Parent's Name <span>(Required)</span></label>
                <input type="text" placeholder="Enter parent's name"/>
              </div>

              <div className="admission-field">
                <label>Parent's Occupation</label>
                <input type="text" placeholder="Enter occupation"/>
              </div>

              <div className="admission-field">
                <label>Email <span>(Required)</span></label>
                <input type="email" placeholder="Enter email address"/>
              </div>

              <div className="admission-field">
                <label>Phone Number</label>
                <input type="text" placeholder="Enter contact number"/>
              </div>

            </div>


            <div className="admission-bottom">

              <label className="admission-checkbox">
                <input type="checkbox" />
                Receive updates about your child's progress and new programs
              </label>

              <button className="admission-btn">
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