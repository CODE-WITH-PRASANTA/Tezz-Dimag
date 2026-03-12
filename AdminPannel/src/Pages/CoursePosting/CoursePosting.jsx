import React, { useState, useEffect } from "react";
import "./CoursePosting.css";
import API, { IMAGE_URL } from "../../api/axios";

const CoursePosting = () => {
  const base = "course-posting";

  const [openMenu, setOpenMenu] = useState(null);
  const [editId, setEditId] = useState(null);
  const [file, setFile] = useState(null);

  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    desc: "",
    image: "",
  });

  const [courses, setCourses] = useState([]);

  /* ================= LOAD COURSES ================= */

  const fetchCourses = async () => {
    try {
      const res = await API.get("/courses/all");
      setCourses(res.data.data || []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  /* ================= HANDLE CHANGE ================= */

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  /* ================= HANDLE IMAGE ================= */

  const handleImage = (e) => {
    const selected = e.target.files[0];
    if (!selected) return;

    setFile(selected);

    setForm((prev) => ({
      ...prev,
      image: URL.createObjectURL(selected),
    }));
  };

  /* ================= SAVE COURSE ================= */

  const saveCourse = async () => {
    if (!form.name) return;

    try {
      const formData = new FormData();

      formData.append("name", form.name);
      formData.append("price", form.price);
      formData.append("category", form.category);
      formData.append("desc", form.desc);

      if (file) {
        formData.append("image", file);
      }

      if (editId) {
        await API.put(`/courses/update/${editId}`, formData);
        setEditId(null);
      } else {
        await API.post("/courses/create", formData);
      }

      clearForm();
      fetchCourses();
    } catch (err) {
      console.error("Course Save Error:", err);
    }
  };

  /* ================= CLEAR FORM ================= */

  const clearForm = () => {
    setForm({
      name: "",
      price: "",
      category: "",
      desc: "",
      image: "",
    });

    setFile(null);
    setEditId(null);
  };

  /* ================= EDIT COURSE ================= */

  const editCourse = (course) => {
    setForm({
      name: course.name,
      price: course.price,
      category: course.category,
      desc: course.desc,
      image: course.image ? IMAGE_URL + course.image : "",
    });

    setEditId(course._id);
    setFile(null);
  };

  /* ================= DELETE COURSE ================= */

  const deleteCourse = async (id) => {
    try {
      await API.delete(`/courses/delete/${id}`);
      fetchCourses();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={base}>
      <div className={`${base}__grid`}>
        {/* FORM */}

        <div className={`${base}__card`}>
          <h2>Course Posting Form</h2>

          <div className="form-group">
            <input
              type="text"
              placeholder="Course Name"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <input
              type="number"
              placeholder="Course Price"
              name="price"
              value={form.price}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
            >
              <option value="">Course Category</option>
              <option>Painting</option>
              <option>Sports</option>
              <option>Science</option>
              <option>Language</option>
              <option>Cooking</option>
            </select>
          </div>

          <div className="form-group">
            <input type="file" onChange={handleImage} />
          </div>

          <div className="form-group">
            <textarea
              placeholder="Course Description"
              name="desc"
              value={form.desc}
              onChange={handleChange}
            />
          </div>

          <div className="buttons">
            <button className="save" onClick={saveCourse}>
              {editId ? "Update" : "Save"}
            </button>

            <button className="clear" onClick={clearForm}>
              Clear
            </button>
          </div>
        </div>

        {/* LIVE PREVIEW */}

        <div className={`${base}__card ${base}__preview`}>
          <h2>Live Preview</h2>

          <div className="preview-card">
            <img
              src={form.image || "https://placehold.co/250x170"}
              alt=""
            />

            <div className="preview-info">
              <h4>{form.name || "Course Name"}</h4>

              <div className="preview-price">
                <span>{form.price || 80} USD</span>

                <button className="read-btn">Readmore</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* COURSE TABLE */}

      <div className={`${base}__card`}>
        <h2>Course List</h2>

        <div className="table-wrap">
          <table className="course-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {courses.map((c) => (
                <tr key={c._id}>
                  <td className="photo">
                    <img
                      src={
                        c.image
                          ? IMAGE_URL + c.image
                          : "https://placehold.co/80x80"
                      }
                      alt=""
                    />
                  </td>

                  <td>{c.name}</td>
                  <td>{c.category}</td>
                  <td>{c.price} USD</td>

                  <td className="action-cell">
                    <div className="action-dropdown">
                      <button
                        className="action-btn"
                        onClick={() =>
                          setOpenMenu(openMenu === c._id ? null : c._id)
                        }
                      >
                        ⋮
                      </button>

                      {openMenu === c._id && (
                        <div className="dropdown-menu">
                          <button onClick={() => editCourse(c)}>Edit</button>

                          <button
                            className="delete"
                            onClick={() => deleteCourse(c._id)}
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
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

export default CoursePosting;