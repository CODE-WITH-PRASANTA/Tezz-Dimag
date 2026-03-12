import React, { useState, useEffect } from "react";
import "./HomeCourse.css";

import img1 from "../../assets/course_1.webp";
import img2 from "../../assets/course_2.webp";
import img3 from "../../assets/course_3.webp";
import img4 from "../../assets/about.webp";
import img5 from "../../assets/course_5.webp";
import img6 from "../../assets/course_6.webp";
import img7 from "../../assets/course_7.webp";
import img8 from "../../assets/course_8.webp";

const courses = [
  { title: "Water Color", img: img1 },
  { title: "Oil Painting", img: img2 },
  { title: "Biology", img: img3 },
  { title: "Swimming", img: img4 },
  { title: "English", img: img5 },
  { title: "Acrylic Painting", img: img6 },
  { title: "Tennis Practice", img: img7 },
  { title: "Cooking", img: img8 }
];

const HomeCourse = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  const coursesPerPage = 4;

  useEffect(() => {

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);

  }, []);

  const totalPages = Math.ceil(courses.length / coursesPerPage);

  const indexOfLast = currentPage * coursesPerPage;
  const indexOfFirst = indexOfLast - coursesPerPage;

  const currentCourses = isMobile
    ? courses.slice(indexOfFirst, indexOfLast)
    : courses;

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  return (

    <section className="HomeCourse">

      <div className="HomeCourse-container">

        <div className="HomeCourse-header">
          <h2>Our Courses</h2>
          <p>Additional courses for your kids</p>
        </div>

        <div className="HomeCourse-grid">

          {currentCourses.map((course, index) => (

            <div className="HomeCourse-card" key={index}>

              <div className="HomeCourse-image">
                <img src={course.img} alt={course.title} />
              </div>

              <h3>{course.title}</h3>

              <div className="HomeCourse-footer">
                <span>80 <small>USD</small></span>
                <button>Contact Us</button>
              </div>

            </div>

          ))}

        </div>

        {isMobile && (

          <div className="HomeCourse-pagination">

            <button onClick={prevPage} disabled={currentPage === 1}>
              Prev
            </button>

            <span>{currentPage} / {totalPages}</span>

            <button onClick={nextPage} disabled={currentPage === totalPages}>
              Next
            </button>

          </div>

        )}

      </div>

    </section>

  );
};

export default HomeCourse;