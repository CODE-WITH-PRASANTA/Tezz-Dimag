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
              Tezz Dimag Bhubaneswar
            </p>

            <h2 className="StudentKnowledgeSection-title">
              Mid Brain Activation <br />
              Mind Power Training <br />
              For Smart Growth
            </h2>

            <p className="StudentKnowledgeSection-desc">
              At Tezz Dimag Bhubaneswar, we offer Mid Brain Activation programs
              designed for children and students to improve focus, memory,
              concentration, confidence, and overall personality development.
              Our structured learning journey includes 3rd eye activation,
              mind training, photographic memory practice, meditation-based
              focus sessions, counselling support, and future-ready development
              activities that help learners grow with discipline and
              self-belief.
            </p>

            <button className="StudentKnowledgeSection-btn">
              Explore Program
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
            <span>Age Groups</span>
          </div>

          <div className="StudentKnowledgeSection-box box-1">
            <span>5-8<br />Years</span>
          </div>

          <div className="StudentKnowledgeSection-box box-2">
            <span>9-12<br />Years</span>
          </div>

          <div className="StudentKnowledgeSection-box box-3">
            <span>13-16<br />Years</span>
          </div>

          <div className="StudentKnowledgeSection-box box-4">
            <span>16-18<br />Years</span>
          </div>

          <div className="StudentKnowledgeSection-box box-5">
            <span>18+<br />Years</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentKnowledgeSection;