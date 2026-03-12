import React, { useState, useEffect } from "react";
import API, { IMAGE_URL } from "../../api/axios";
import "./TeacherPosting.css";

const TeacherPosting = () => {
  const base = "teacher-posting";

  const [editId, setEditId] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);

  const [form, setForm] = useState({
    name: "",
    role: "",
    subject: "",
    experience: "",
    bio: "",
    preview: "",
    image: null,
  });

  const [teachers, setTeachers] = useState([]);

  /* ================= FETCH TEACHERS ================= */

  const fetchTeachers = async () => {
    try {
      const res = await API.get("/teachers/all");

      if (res.data.success) {
        const data = res.data.data.map((t) => ({
          id: t._id,
          name: t.name,
          role: t.role,
          subject: t.subject,
          experience: t.experience,
          bio: t.bio,
          preview: `${IMAGE_URL}${t.image}`,
        }));

        setTeachers(data);
      }
    } catch (error) {
      console.error("Failed to fetch teachers");
    }
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  /* ================= INPUT CHANGE ================= */

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  /* ================= IMAGE ================= */

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setForm({
        ...form,
        image: file,
        preview: URL.createObjectURL(file),
      });
    }
  };

  /* ================= SAVE / UPDATE ================= */

  const saveTeacher = async () => {
    if (!form.name || !form.role) return;

    try {
      const formData = new FormData();

      formData.append("name", form.name);
      formData.append("role", form.role);
      formData.append("subject", form.subject);
      formData.append("experience", form.experience);
      formData.append("bio", form.bio);

      if (form.image) {
        formData.append("image", form.image);
      }

      if (editId) {
        await API.put(`/teachers/update/${editId}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        await API.post("/teachers/create", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      fetchTeachers();
      clearForm();
      setEditId(null);
    } catch (error) {
      console.error("Save teacher error", error);
    }
  };

  /* ================= CLEAR ================= */

  const clearForm = () => {
    setForm({
      name: "",
      role: "",
      subject: "",
      experience: "",
      bio: "",
      preview: "",
      image: null,
    });

    const fileInput = document.querySelector('input[type="file"]');
    if (fileInput) fileInput.value = "";
  };

  /* ================= EDIT ================= */

  const editTeacher = (teacher) => {
    setForm({
      name: teacher.name,
      role: teacher.role,
      subject: teacher.subject,
      experience: teacher.experience,
      bio: teacher.bio,
      preview: teacher.preview,
      image: null,
    });

    setEditId(teacher.id);
    setOpenMenu(null);
  };

  /* ================= DELETE ================= */

  const deleteTeacher = async (id) => {
    try {
      await API.delete(`/teachers/delete/${id}`);
      fetchTeachers();
      setOpenMenu(null);
    } catch (error) {
      console.error("Delete teacher error");
    }
  };

  return (
    <div className={base}>
      <div className={`${base}__grid`}>
        {/* FORM */}

        <div className={`${base}__card`}>
          <h2>Teacher Posting Form</h2>

          <div className="form-group">
            <input
              type="text"
              placeholder="Teacher Name"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <select name="role" value={form.role} onChange={handleChange}>
              <option value="">Teacher Role</option>
              <option>Teacher</option>
              <option>Assistant Teacher</option>
              <option>Professor</option>
            </select>
          </div>

          <div className="form-group">
            <input type="file" onChange={handleImage} />
          </div>

          <div className="form-group">
            <textarea
              placeholder="Short Bio"
              name="bio"
              value={form.bio}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <input
              type="number"
              placeholder="Experience"
              name="experience"
              value={form.experience}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
            />
          </div>

          <div className="buttons">
            <button className="save" onClick={saveTeacher}>
              {editId ? "Update" : "Save"}
            </button>

            <button className="clear" onClick={clearForm}>
              Clear
            </button>
          </div>
        </div>

        {/* PREVIEW */}

        <div className={`${base}__card ${base}__preview`}>
          <h2>Live Preview</h2>

          <div className="preview-card">
            <img
              src={form.preview || "https://via.placeholder.com/200x160"}
              alt=""
            />

            <div className="preview-info">
              <h4>{form.name || "Teacher Name"}</h4>
              <p>{form.role || "Teacher Role"}</p>
            </div>
          </div>
        </div>
      </div>

      {/* TABLE */}

      <div className={`${base}__card`}>
        <h2>Teacher Posting List</h2>

        <div className="table-wrap">
          <table className="teacher-table">
            <thead>
              <tr>
                <th>Photo</th>
                <th>Name</th>
                <th>Role</th>
                <th>Subject</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {teachers.map((t) => (
                <tr key={t.id}>
                  <td className="photo">
                    <img src={t.preview} alt="" />
                  </td>

                  <td>{t.name}</td>
                  <td>{t.role}</td>
                  <td>{t.subject}</td>

                  <td className="action-cell">
                    <div className="action-dropdown">
                      <button
                        className="action-btn"
                        onClick={() =>
                          setOpenMenu(openMenu === t.id ? null : t.id)
                        }
                      >
                        ⋮
                      </button>

                      {openMenu === t.id && (
                        <div className="dropdown-menu">
                          <button onClick={() => editTeacher(t)}>Edit</button>

                          <button
                            className="delete"
                            onClick={() => deleteTeacher(t.id)}
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

export default TeacherPosting;