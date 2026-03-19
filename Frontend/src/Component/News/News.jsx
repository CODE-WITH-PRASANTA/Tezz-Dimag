import React from "react";
import "./News.css";
import { FaBullhorn, FaStar } from "react-icons/fa";

const News = () => {
  const newsItems = [
    "Admission Open 2026-27",
    "New Batch Starting Soon",
    "Limited Seats Available",
    "Enroll Now for Early Benefits",
    "Abacus, Vedic Maths & Robotics Classes",
    "Mid Brain Activation & DMIT Programs",
    "Public Speaking & Personality Development",
    "Smart Learning Programs for Future Skills",
  ];

  return (
    <section className="News">
      <div className="News-overlay"></div>

      <div className="News-container">
        <div className="News-label">
          <FaBullhorn />
          <span>Latest Updates</span>
        </div>

        <div className="News-marquee">
          <div className="News-track">
            {[...newsItems, ...newsItems].map((item, index) => (
              <div className="News-item" key={index}>
                <span className="News-badge">NEW</span>
                <span className="News-icon">
                  <FaStar />
                </span>
                <span className="News-text">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;