import React from "react";
import "./ContactUs.css";

import { FaMapMarkedAlt, FaMobileAlt, FaEnvelope, FaCalendarAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="ContactUs-wrapper">

      {/* HEADER */}
      <div className="ContactUs-header">
        <h2 className="ContactUs-title">Contact Us</h2>
        <p className="ContactUs-subtitle">If Need Any Help</p>
      </div>

      {/* CONTACT INFO */}
      <div className="ContactUs-grid">

        <div className="ContactUs-card">
          <div className="ContactUs-icon orange">
            <FaMapMarkedAlt />
          </div>
          <div>
            <h4>Our Address</h4>
            <p>525 tenth Avenue,<br/>Godson, PS 5945</p>
          </div>
        </div>

        <div className="ContactUs-card">
          <div className="ContactUs-icon blue">
            <FaMobileAlt />
          </div>
          <div>
            <h4>Phone</h4>
            <p>+1 800 123 45 67<br/>+1 800 123 45 67</p>
          </div>
        </div>

        <div className="ContactUs-card">
          <div className="ContactUs-icon yellow">
            <FaEnvelope />
          </div>
          <div>
            <h4>Email</h4>
            <p>mail@domain.com<br/>mail@domain.com</p>
          </div>
        </div>

        <div className="ContactUs-card">
          <div className="ContactUs-icon green">
            <FaCalendarAlt />
          </div>
          <div>
            <h4>Open Hours</h4>
            <p>Mn - St: 8:00am<br/>9:00pm</p>
          </div>
        </div>

      </div>


      {/* MAP */}
      <div className="ContactUs-map">

        <iframe
          title="map"
          src="https://maps.google.com/maps?q=new%20york&t=&z=12&ie=UTF8&iwloc=&output=embed"
          loading="lazy"
        ></iframe>

      </div>

    </section>
  );
};

export default ContactUs;