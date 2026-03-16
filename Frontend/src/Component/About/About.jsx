import React from "react";
import "./About.css";
import aboutImg from "../../assets/about.webp";
import grass from "../../assets/about_bottom_shape.webp";   // grass image

const About = () => {

  const goToHero = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <section className="About">

      <div className="About-container">

        {/* heading */}

        <div className="About-header">
          <h2>Welcome To TEZZ DIMAG</h2>
          <p>Helping young minds grow with creativity, confidence, and smart learning</p>
        </div>

        {/* content */}

        <div className="About-content">

          {/* left text */}

          <div className="About-text">

            <h3>Overview</h3>

            <p>
              TEZZ DIMAG is a learning platform dedicated to developing the hidden
              potential of children. Our programs focus on improving mind power,
              memory skills, creativity, and overall personality development.
              We believe that every child has unique abilities that can grow
              with the right guidance and learning environment.
            </p>

            <p>
              Through research-based and scientifically designed activities,
              TEZZ DIMAG helps students strengthen their thinking ability,
              concentration, and confidence. Our goal is to support children in
              becoming independent learners who are prepared for the future
              with strong skills and positive mindset.
            </p>

            <button className="About-btn" onClick={goToHero}>
              Contact Us
            </button>

          </div>

          {/* right image */}

          <div className="About-image">
            <img src={aboutImg} alt="Children learning and developing skills at TEZZ DIMAG" />
          </div>

        </div>

      </div>

      {/* grass bottom */}

      <div className="About-grass">
        <img src={grass} alt="decorative grass shape"/>
      </div>

    </section>
  );
};

export default About;