import React from "react";
import "./AboutSection.css";

// Assets
import MissionIcon from "../../assets/Mission-icon.svg";
import VisionIcon from "../../assets/Vision-icon.svg";
import authorimg from "../../assets/author.jpeg";
import Bordershape from "../../assets/border-shape.png";
import lefthomeAboutimg from "../../assets/Home-About.webp";
import frame from "../../assets/frame.png";
import lineshape from "../../assets/line-shape.png";

const AboutSection = () => {
  return (
    <section className="homeabout">
      {/* Decorative Line */}
      <img src={lineshape} alt="" className="homeabout-line" />

      <div className="homeabout-container">
        {/* LEFT SIDE IMAGE */}
        <div className="homeabout-left">
          <img src={Bordershape} alt="" className="homeabout-border" />

          <div className="homeabout-image-wrap">
            <img src={lefthomeAboutimg} alt="Learning Environment" />
          </div>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="homeabout-right">
          <img src={frame} alt="" className="homeabout-frame" />

          <span className="homeabout-subtitle">About Us</span>

          <h2 className="homeabout-title homeabout-title--colorful">
            Welcome To TEZZ DIMAG <br />
            <span>School</span>
          </h2>

          <p className="homeabout-desc">
            TEZZ DIMAG is a professionally managed institute dedicated to
            building and nurturing young talent. Our goal is to help students
            discover their true potential and develop the skills they need for a
            successful future. We offer a research-based and scientifically
            designed holistic learning curriculum that encourages children to
            imagine, innovate, and grow intellectually. Our programs are
            carefully structured to support the overall development of a child’s
            mind, creativity, and confidence. At TEZZ DIMAG, we believe that the
            potential of the human brain goes far beyond our imagination. With
            this belief, we have developed a unique program under the brand name
            “TEZZDIMAG”, designed to support the learning and development needs
            of students.
          </p>

          {/* FEATURES */}
          <div className="homeabout-features">
            {/* MISSION */}
            <div className="feature-card mission-card">
              <div className="feature-icon">
                <img src={MissionIcon} alt="Mission" />
              </div>

              <div>
                <h4>Our Mission</h4>
                <p>
                  OUR MISSION IS TO PLACE INDIA IN TOP 3 COUNTRIES ACROSS THE
                  WORLD IN HAPPINESS INDEX TILL 2025
                </p>
              </div>
            </div>

            {/* VISION */}
            <div className="feature-card vision-card">
              <div className="feature-icon">
                <img src={VisionIcon} alt="Vision" />
              </div>

              <div>
                <h4>Our Vision</h4>
                <p>
                  TEZZ DIMAG IS A VISION TRANSFORMED TO CREATE AN EDUCATION
                  SYSTEM WITH A GOAL TO DEVELOP A WHOLE NEW ART OF TEACHING AND
                  LEARNING ENCIRCLED WITHIN FUN AND CREATIVITY.
                </p>
              </div>
            </div>
          </div>

          {/* AUTHOR / FOUNDER SECTION */}
          <div className="homeabout-author">
            <div className="author-info">
              <img src={authorimg} alt="Founder" />

              <div>
                <h5>Mr. Vishnu Sharma</h5>
                <span>Founder & Managing Director</span>
              </div>
            </div>

            {/* CALL BUTTON */}
            <a
              href="tel:+917014627894"
              className="author-call"
              aria-label="Call Learning Step International School"
            >
              <div className="call-icon">📞</div>

              <div>
                <span>Call Us Now</span> <br />
                <strong>+91 7327817155</strong>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
