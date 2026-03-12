import React, { useState, useEffect } from "react";
import "./HomeCourse.css";
import API, { IMAGE_URL } from "../../api/axios";

const HomeCourse = () => {
  const [courses, setCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage, setCoursesPerPage] = useState(4);

  /* ================= LOAD COURSES ================= */

  const fetchCourses = async () => {
    try {
      const res = await API.get("/courses/all");
      setCourses(res.data.data || []);
    } catch (err) {
      console.log(err);
    }
  };

  /* ================= RESPONSIVE ================= */

  const handleResize = () => {
    const width = window.innerWidth;

    if (width <= 600) {
      setCoursesPerPage(2); // mobile
    } else if (width <= 992) {
      setCoursesPerPage(4); // tablet
    } else {
      setCoursesPerPage(8); // laptop / desktop
    }
  };

  useEffect(() => {
    fetchCourses();
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ================= PAGINATION ================= */

  const totalPages = Math.ceil(courses.length / coursesPerPage);

  const indexOfLast = currentPage * coursesPerPage;
  const indexOfFirst = indexOfLast - coursesPerPage;

  const currentCourses = courses.slice(indexOfFirst, indexOfLast);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((p) => p + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((p) => p - 1);
    }
  };

  const goToPage = (num) => {
    setCurrentPage(num);
  };

  return (
    <section className="HomeCourse">
      <div className="HomeCourse-container">

        <div className="HomeCourse-header">
          <h2>Our Courses</h2>
          <p>Additional courses for your kids</p>
        </div>

        {/* GRID */}

        <div className="HomeCourse-grid">
          {currentCourses.map((course) => (
            <div className="HomeCourse-card" key={course._id}>

              <div className="HomeCourse-image">
                <img
                  src={
                    course.image
                      ? IMAGE_URL + course.image
                      : "https://placehold.co/300x200"
                  }
                  alt={course.name}
                />
              </div>

              <div className="HomeCourse-content">

                <h3>{course.name}</h3>

                <p>
                  {course.desc
                    ? course.desc.slice(0, 80) + "..."
                    : "Course description not available"}
                </p>

                <div className="HomeCourse-footer">

                  <span className="price">
                    ₹ {course.price || 80}
                  </span>

                  <a href="#contact" className="coursecontact-btn">
                    Contact
                  </a>

                </div>

              </div>

            </div>
          ))}
        </div>


        {/* PAGINATION */}

        <div className="HomeCourse-pagination">

          <button onClick={prevPage} disabled={currentPage === 1}>
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <span
              key={i}
              className={
                currentPage === i + 1
                  ? "page active"
                  : "page"
              }
              onClick={() => goToPage(i + 1)}
            >
              {i + 1}
            </span>
          ))}

          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>

        </div>

      </div>
    </section>
  );
};

export default HomeCourse;