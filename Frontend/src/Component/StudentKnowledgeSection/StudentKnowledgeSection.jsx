import React from "react";
import "./StudentKnowledgeSection.css";

// IMPORT IMAGES
import treeImg from "../../assets/image-55.webp";
import turtleImg from "../../assets/image-60.webp";

const StudentKnowledgeSection = () => {
  return (
    <section className="StudentKnowledgeSection">
      <div className="StudentKnowledgeSection-container">

        {/* LEFT CONTENT */}
        <div className="StudentKnowledgeSection-left">

          <img
            src={treeImg}
            alt="Tezz Dimag learning tree"
            className="StudentKnowledgeSection-tree"
          />

          <div className="StudentKnowledgeSection-content">
            <p className="StudentKnowledgeSection-subtitle">
              Student Knowledge
            </p>

            <h2 className="StudentKnowledgeSection-title">
              Knowledge for All learn <br />
              design Excellence for <br />
              Everyone
            </h2>

            <p className="StudentKnowledgeSection-desc">
              At Tezz Dimag, we believe every child deserves quality education
              that builds confidence, creativity, and strong thinking skills.
              Our learning approach focuses on clarity, engagement, and real
              understanding to help students grow academically and personally.
            </p>

            <button className="StudentKnowledgeSection-btn">
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT BOXES */}
        <div className="StudentKnowledgeSection-right">

          <img
            src={turtleImg}
            alt="Cute turtle learning"
            className="StudentKnowledgeSection-turtle"
          />

          <div className="StudentKnowledgeSection-box box-large">
            <span>Years</span>
          </div>

          <div className="StudentKnowledgeSection-box box-1">
            <span>3-5<br />Years</span>
          </div>

          <div className="StudentKnowledgeSection-box box-2">
            <span>6-8<br />Years</span>
          </div>

          <div className="StudentKnowledgeSection-box box-3">
            <span>9-11<br />Years</span>
          </div>

          <div className="StudentKnowledgeSection-box box-4">
            <span>12-15<br />Years</span>
          </div>

          <div className="StudentKnowledgeSection-box box-5">
            <span>16-18<br />Years</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StudentKnowledgeSection;