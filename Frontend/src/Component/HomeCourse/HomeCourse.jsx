import React, { useState, useEffect } from "react";
import "./HomeCourse.css";
import API, { IMAGE_URL } from "../../api/axios";

const HomeCourse = () => {
  const [courses, setCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  const coursesPerPage = 4;

  /* ================= LOAD COURSES ================= */

  const fetchCourses = async () => {
    try {
      const res = await API.get("/courses/all");

      setCourses(res.data.data || []);
    } catch (err) {
      console.error("Course Fetch Error:", err);
    }
  };

  useEffect(() => {
    fetchCourses();

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
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
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

              <h3>{course.name}</h3>

              <p className="HomeCourse-desc">
                {course.desc
                  ? course.desc.slice(0, 80) + "..."
                  : "Course description not available"}
              </p>

              <div className="HomeCourse-footer">
                <span>
                  {course.price || 80} <small> ₹</small>
                </span>
                <button>Readmore</button>
              </div>
            </div>
          ))}
        </div>

        {isMobile && (
          <div className="HomeCourse-pagination">
            <button onClick={prevPage} disabled={currentPage === 1}>
              Prev
            </button>

            <span>
              {currentPage} / {totalPages}
            </span>

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
