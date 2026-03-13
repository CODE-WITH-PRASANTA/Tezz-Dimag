import React, { useState } from "react";
import "./SendMessage.css";
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaInfoCircle,
  FaPen,
} from "react-icons/fa";

import { useParams } from "react-router-dom";
import API from "../../api/axios";

const SendMessage = () => {
  const base = "send-message";

  const { id } = useParams();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/messages/create", {
        ...form,
        blogId: id,
      });

      alert("Message sent successfully");

      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        agree: false,
      });

    } catch (err) {
      console.log("Message error", err);
    }
  };

  return (
    <section className={base}>
      <div className={`${base}__container`}>
        <h2 className={`${base}__title`}>Send Me Message</h2>

        <form className={`${base}__form`} onSubmit={handleSubmit}>

          {/* NAME */}
          <div className={`${base}__input-group`}>
            <FaUser className={`${base}__icon`} />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          {/* EMAIL */}
          <div className={`${base}__input-group`}>
            <FaEnvelope className={`${base}__icon`} />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          {/* PHONE */}
          <div className={`${base}__input-group`}>
            <FaPhoneAlt className={`${base}__icon`} />

            <input
              type="tel"
              name="phone"
              placeholder="Your Number"
              value={form.phone}
              onChange={handleChange}
            />
          </div>

          {/* SUBJECT */}
          <div className={`${base}__input-group`}>
            <FaInfoCircle className={`${base}__icon`} />

            <select
              name="subject"
              value={form.subject}
              onChange={handleChange}
            >
              <option value="">Select Subject</option>
              <option>General Inquiry</option>
              <option>Course Information</option>
              <option>Technical Support</option>
              <option>Admission Query</option>
              <option>Feedback</option>
            </select>

            <span className={`${base}__select-arrow`}></span>
          </div>

          {/* MESSAGE */}
          <div className={`${base}__textarea-group`}>
            <FaPen className={`${base}__icon`} />

            <textarea
              name="message"
              placeholder="Feel free to get in touch!"
              rows="4"
              value={form.message}
              onChange={handleChange}
            />
          </div>

          {/* FOOTER */}
          <div className={`${base}__footer`}>
            <button className={`${base}__btn`}>Send Message</button>

            <label className={`${base}__checkbox`}>
              <input
                type="checkbox"
                name="agree"
                checked={form.agree}
                onChange={handleChange}
              />

              <span>I agree that my data is collected and stored.</span>
            </label>
          </div>

        </form>
      </div>
    </section>
  );
};

export default SendMessage;