import React, { useEffect, useState } from "react";
import "./ContactUs.css";

import { FaMapMarkedAlt, FaMobileAlt, FaEnvelope, FaCalendarAlt } from "react-icons/fa";

import API from "../../api/axios";

const ContactUs = () => {

  const [contact,setContact] = useState(null);

  /* ================= FETCH CONTACT ================= */

  const fetchContact = async () => {

    try{

      const res = await API.get("/contact/all");

      if(res.data.data && res.data.data.length > 0){
        setContact(res.data.data[0]);
      }

    }catch(err){
      console.error(err);
    }

  };

  useEffect(()=>{
    fetchContact();
  },[]);


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
            <p>
              {contact?.address || "No Address"}
            </p>
          </div>
        </div>

        <div className="ContactUs-card">
          <div className="ContactUs-icon blue">
            <FaMobileAlt />
          </div>
          <div>
            <h4>Phone</h4>
            <p>
              {contact?.phone || "No Phone"}
            </p>
          </div>
        </div>

        <div className="ContactUs-card">
          <div className="ContactUs-icon yellow">
            <FaEnvelope />
          </div>
          <div>
            <h4>Email</h4>
            <p>
              {contact?.email || "No Email"}
            </p>
          </div>
        </div>

        <div className="ContactUs-card">
          <div className="ContactUs-icon green">
            <FaCalendarAlt />
          </div>
          <div>
            <h4>Open Hours</h4>
            <p>
              {contact?.openHours || "Not Available"}
            </p>
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