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
          <h2>Welcome To Our School</h2>
          <p>Starting with the new school year in our kindergarten</p>
        </div>

        {/* content */}

        <div className="About-content">

          {/* left text */}

          <div className="About-text">

            <h3>Overview</h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>

            <button className="About-btn" onClick={goToHero}>
              Readmore
            </button>

          </div>

          {/* right image */}

          <div className="About-image">
            <img src={aboutImg} alt="kids swimming" />
          </div>

        </div>

      </div>

      {/* grass bottom */}

      <div className="About-grass">
        <img src={grass} alt="grass decoration"/>
      </div>

    </section>
  );
};

export default About;