import React from "react";
import "./ClubsSection.css";

import mainImg from "../../assets/Main-img.webp";
import earlyImg from "../../assets/Gal-11.webp";
import lunchImg from "../../assets/Gal-22.webp";
import afternoonImg from "../../assets/Gal-44.webp";
import musicImg from "../../assets/Gal-55.webp";

const clubsLeft = [
  {
    title: "Mind Power Club",
    image: earlyImg,
    points: [
      "Activities designed to improve concentration and focus",
      "Exercises that strengthen memory and thinking ability",
      "Helps children build strong learning habits",
    ],
  },
  {
    title: "Creative Learning Club",
    image: lunchImg,
    points: [
      "Encourages imagination and creative thinking",
      "Fun learning activities that make education enjoyable",
      "Supports confidence and self-expression in children",
    ],
  },
];

const clubsRight = [
  {
    title: "Skill Development Club",
    image: afternoonImg,
    points: [
      "Improves problem solving and logical thinking",
      "Builds confidence through guided learning activities",
      "Helps children develop important future skills",
    ],
  },
  {
    title: "Memory & Brain Training Club",
    image: musicImg,
    points: [
      "Memory improvement techniques for young learners",
      "Activities that strengthen brain development",
      "Supports faster learning and better understanding",
    ],
  },
];

const ClubCard = ({ title, image, points }) => {
  return (
    <div className="club-card">
      <div className="club-thumb-wrap">
        <img src={image} alt={title + " at TEZZ DIMAG"} className="club-thumb" />
      </div>

      <div className="club-info">
        <h3>{title}</h3>
        <ul>
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ClubsSection = () => {
  return (
    <section
      className="clubs-section"
      aria-label="TEZZ DIMAG learning clubs and programs"
    >
      <div className="clubs-bg-shape clubs-bg-shape-1"></div>
      <div className="clubs-bg-shape clubs-bg-shape-2"></div>

      <div className="clubs-header">
        <span className="clubs-badge">TEZZ DIMAG Programs</span>
        <h2>Learning Clubs at TEZZ DIMAG</h2>
        <p>
          TEZZ DIMAG offers special learning clubs designed to help children
          improve memory, creativity, thinking ability, and overall personality
          development through fun and engaging activities.
        </p>
      </div>

      <div className="clubs-layout">
        <div className="clubs-column">
          {clubsLeft.map((club, i) => (
            <ClubCard key={i} {...club} />
          ))}
        </div>

        <div className="clubs-center">
          <div className="orbit orbit-1">
            <span className="orbit-dot"></span>
          </div>

          <div className="orbit orbit-2">
            <span className="orbit-dot"></span>
          </div>

          <div className="orbit orbit-3">
            <span className="orbit-dot"></span>
          </div>

          <div className="center-image-wrap">
            <img
              src={mainImg}
              alt="Children learning and developing skills at TEZZ DIMAG"
              className="center-image"
            />
          </div>
        </div>

        <div className="clubs-column">
          {clubsRight.map((club, i) => (
            <ClubCard key={i} {...club} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClubsSection;