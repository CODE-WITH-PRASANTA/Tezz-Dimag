import React from "react";
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
  return (
    <section className="HomeCourse">

      <div className="HomeCourse-container">

        <div className="HomeCourse-header">
          <h2>Our Courses</h2>
          <p>Additional courses for your kids</p>
        </div>

        <div className="HomeCourse-grid">

          {courses.map((course, index) => (
            <div className="HomeCourse-card" key={index}>

              <div className="HomeCourse-image">
                <img src={course.img} alt={course.title} />
              </div>

              <h3>{course.title}</h3>

              <div className="HomeCourse-footer">
                <span>80 <small>USD</small></span>
                <button>Readmore</button>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default HomeCourse;