import React, { useState } from "react";
import "./OurTeachers.css";

import teacher1 from "../../assets/teacher_1.webp";
import teacher2 from "../../assets/teacher_2.webp";
import teacher3 from "../../assets/teacher_3.webp";
import teacher4 from "../../assets/teacher_4.webp";

import wave from "../../assets/Team-bg.webp";

import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const OurTeachers = () => {

  const [currentPage, setCurrentPage] = useState(0);

  const teachers = [
    {
      name: "Angel Di Maria",
      role: "Assistant Teacher",
      image: teacher1
    },
    {
      name: "Albert Cole",
      role: "Teacher",
      image: teacher2
    },
    {
      name: "Fanny Greer",
      role: "Professor",
      image: teacher3
    },
    {
      name: "Rhoda Byrd",
      role: "Teacher",
      image: teacher4
    }
  ];

  const visibleTeacher = teachers[currentPage];

  return (
    <section className="OurTeachers-wrapper">

      <div className="OurTeachers-header">
        <h2 className="OurTeachers-title">Our Teachers</h2>
        <p className="OurTeachers-subtitle">
          Professional team that aims to respect your child's feelings
        </p>
      </div>

      {/* DESKTOP GRID */}
      <div className="OurTeachers-grid OurTeachers-desktop">

        {teachers.map((teacher, index) => (
          <div key={index} className="OurTeachers-card">

            <img
              src={teacher.image}
              alt={teacher.name}
              className="OurTeachers-image"
            />

            <div className="OurTeachers-bottom">

              <img
                src={wave}
                alt="wave"
                className="OurTeachers-wave"
              />

              <div className="OurTeachers-info">

                <h3 className="OurTeachers-name">
                  {teacher.name}
                </h3>

                <p className="OurTeachers-role">
                  {teacher.role}
                </p>

                <div className="OurTeachers-social">
                  <FaFacebookF />
                  <FaTwitter />
                  <FaLinkedinIn />
                </div>

              </div>

            </div>

          </div>
        ))}

      </div>


      {/* MOBILE PAGINATION */}
      <div className="OurTeachers-mobile">

        <div className="OurTeachers-card">

          <img
            src={visibleTeacher.image}
            alt={visibleTeacher.name}
            className="OurTeachers-image"
          />

          <div className="OurTeachers-bottom">

            <img
              src={wave}
              alt="wave"
              className="OurTeachers-wave"
            />

            <div className="OurTeachers-info">

              <h3 className="OurTeachers-name">
                {visibleTeacher.name}
              </h3>

              <p className="OurTeachers-role">
                {visibleTeacher.role}
              </p>

              <div className="OurTeachers-social">
                <FaFacebookF />
                <FaTwitter />
                <FaLinkedinIn />
              </div>

            </div>

          </div>

        </div>

        {/* PAGINATION DOTS */}
        <div className="OurTeachers-pagination">

          {teachers.map((_, index) => (
            <button
              key={index}
              className={`OurTeachers-dot ${
                currentPage === index ? "active" : ""
              }`}
              onClick={() => setCurrentPage(index)}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default OurTeachers;