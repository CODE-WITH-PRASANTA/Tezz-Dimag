import React from "react";
import "./SchoolFacilites.css";

import {
  FaUtensils,
  FaMusic,
  FaFutbol,
  FaBus,
  FaMapMarkedAlt,
  FaLanguage
} from "react-icons/fa";

const SchoolFacilites = () => {
  const facilities = [
    {
      title: "Custom Food",
      icon: <FaUtensils />,
      color: "#46b576"
    },
    {
      title: "Music Lesson",
      icon: <FaMusic />,
      color: "#f06277"
    },
    {
      title: "Many Sports",
      icon: <FaFutbol />,
      color: "#e4b847"
    },
    {
      title: "Bus Service",
      icon: <FaBus />,
      color: "#3e3e49"
    },
    {
      title: "Excursions",
      icon: <FaMapMarkedAlt />,
      color: "#59a7b9"
    },
    {
      title: "Language",
      icon: <FaLanguage />,
      color: "#e87547"
    }
  ];

  return (
    <section className="SchoolFacilites-wrapper">

      <div className="SchoolFacilites-header">
        <h2 className="SchoolFacilites-title">School Facilities</h2>
        <p className="SchoolFacilites-subtitle">
          Starting with the new school year in our kindergarten
        </p>
      </div>

      <div className="SchoolFacilites-grid">

        {facilities.map((item, index) => (
          <div
            key={index}
            className="SchoolFacilites-card"
            style={{ background: item.color }}
          >
            <div className="SchoolFacilites-bgIcon">
              {item.icon}
            </div>

            <h3 className="SchoolFacilites-cardTitle">
              {item.title}
            </h3>

            <p className="SchoolFacilites-cardText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam.
            </p>
          </div>
        ))}

      </div>

    </section>
  );
};

export default SchoolFacilites;