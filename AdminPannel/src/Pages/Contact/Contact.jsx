import React, { useState, useEffect } from "react";
import "./Contact.css";
import API from "../../api/axios";

const Contact = () => {
  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    address: "",
    openHours: "",
  });

  const [contactList, setContactList] = useState([]);

  /* ================= FETCH CONTACTS ================= */

  const fetchContacts = async () => {
    try {
      const res = await API.get("/contact/all");

      setContactList(res.data.data || []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  /* ================= HANDLE CHANGE ================= */

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /* ================= SUBMIT ================= */

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editId) {
        await API.put(`/contact/update/${editId}`, formData);

        setEditId(null);
      } else {
        await API.post("/contact/create", formData);
      }

      fetchContacts();

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        address: "",
        openHours: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  /* ================= EDIT ================= */

  const handleEdit = (item) => {
    setFormData({
      name: item.name,
      email: item.email,
      phone: item.phone,
      subject: item.subject,
      message: item.message,
      address: item.address,
      openHours: item.openHours,
    });

    setEditId(item._id);
  };

  /* ================= DELETE ================= */

  const handleDelete = async (id) => {
    try {
      await API.delete(`/contact/delete/${id}`);

      fetchContacts();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="contactUsAdmin-wrapper">
      {/* LEFT FORM */}

      <div className="contactUsAdmin-formSection">
        <h2 className="contactUsAdmin-heading">Create Contact Info</h2>

        <form className="contactUsAdmin-form" onSubmit={handleSubmit}>
          <div className="contactUsAdmin-inputGroup">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="contactUsAdmin-inputGroup">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="contactUsAdmin-inputGroup">
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="contactUsAdmin-inputGroup">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <div className="contactUsAdmin-inputGroup">
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <div className="contactUsAdmin-inputGroup">
            <label>Open Hours</label>
            <input
              type="text"
              name="openHours"
              value={formData.openHours}
              onChange={handleChange}
            />
          </div>

          <div className="contactUsAdmin-inputGroup">
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button className="contactUsAdmin-submitBtn">
            {editId ? "Update Contact" : "Add Contact"}
          </button>
        </form>
      </div>

      {/* RIGHT TABLE */}

      <div className="contactUsAdmin-tableSection">
        <h2 className="contactUsAdmin-heading">Contact List</h2>

        <div className="contactUsAdmin-tableWrapper">
          <table className="contactUsAdmin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Subject</th>
                <th>Address</th>
                <th>Open Hours</th>
                <th>Message</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {contactList.length === 0 ? (
                <tr>
                  <td colSpan="8" className="no-data">
                    No contacts added
                  </td>
                </tr>
              ) : (
                contactList.map((item) => (
                  <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.subject}</td>
                    <td>{item.address}</td>
                    <td>{item.openHours}</td>
                    <td>{item.message}</td>

                    <td className="contact-action">
                      <button
                        className="edit-btn"
                        onClick={() => handleEdit(item)}
                      >
                        Edit
                      </button>

                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(item._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Contact;
