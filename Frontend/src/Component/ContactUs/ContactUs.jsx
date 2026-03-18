import React, { useEffect, useState } from "react";
import "./ContactUs.css";

import {
  FaMapMarkedAlt,
  FaMobileAlt,
  FaEnvelope,
  FaCalendarAlt,
} from "react-icons/fa";

import API from "../../api/axios";

const ContactUs = () => {
  const [contact, setContact] = useState(null);

  /* ================= FETCH CONTACT ================= */
  const fetchContact = async () => {
    try {
      const res = await API.get("/contact/all");

      if (res.data.data && res.data.data.length > 0) {
        setContact(res.data.data[0]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchContact();
  }, []);

  return (
    <section className="ContactUs-wrapper" id="contact">
      {/* HEADER */}
      <div className="ContactUs-header">
        <h2 className="ContactUs-title">Contact Tezz Dimag</h2>

        <p className="ContactUs-subtitle">
          Visit our skill development centre in Bhubaneswar or get in touch for
          course details and admission information.
        </p>
      </div>

      {/* CONTACT INFO */}
      <div className="ContactUs-grid">
        <div className="ContactUs-card">
          <div className="ContactUs-icon orange">
            <FaMapMarkedAlt />
          </div>

          <div>
            <h4>Our Address</h4>
            <p>
              {contact?.address ||
                "North View Appartment, 368, Infocity Ave, Patia, Bhubaneswar, Odisha, Pin-751024"}
            </p>
          </div>
        </div>

        <div className="ContactUs-card">
          <div className="ContactUs-icon blue">
            <FaMobileAlt />
          </div>

          <div>
            <h4>Phone</h4>
            <p>{contact?.phone || "+91 7327817155"}</p>
          </div>
        </div>

        <div className="ContactUs-card">
          <div className="ContactUs-icon yellow">
            <FaEnvelope />
          </div>

          <div>
            <h4>Email</h4>
            <p>{contact?.email || "info@tezzdimag.com"}</p>
          </div>
        </div>

        <div className="ContactUs-card">
          <div className="ContactUs-icon green">
            <FaCalendarAlt />
          </div>

          <div>
            <h4>Open Hours</h4>
            <p>{contact?.openHours || "Saturday & Sunday – 3 Hour Classes"}</p>
          </div>
        </div>
      </div>

      {/* GOOGLE MAP */}
      <div className="ContactUs-map">
        <iframe
          src="https://www.google.com/maps?q=Tezz%20Dimag%20Bhubaneswar&z=15&output=embed"
          width="800"
          height="600"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Tezz Dimag Bhubaneswar Location"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactUs;