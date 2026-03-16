import React, { useState } from "react";
import "./OurGallary.css";

import img1 from "../../assets/Blog-1.webp";
import img2 from "../../assets/Blog_2.webp";
import img3 from "../../assets/Blog-3.webp";
import img4 from "../../assets/course_1.webp";
import img5 from "../../assets/course_2.webp";
import img6 from "../../assets/course_3.webp";

const OurGallary = () => {

  const [activeImg, setActiveImg] = useState(null);

  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <section className="ourgallary-section">

      <div className="ourgallary-header">

        <div className="ourgallary-badge">
          OUR GALLERY
        </div>

        <h2 className="ourgallary-title">
          Happy Moments at <span>Our School</span>
        </h2>

        <p className="ourgallary-desc">
          Explore real moments from Learning Step School through our gallery,
          showcasing student activities, classroom learning, celebrations,
          and a safe, child-friendly school environment.
        </p>

      </div>


      <div className="ourgallary-slider">

        <div className="ourgallary-track">

          {[...images, ...images].map((img, index) => (
            <div
              className="ourgallary-card"
              key={index}
              onClick={() => setActiveImg(img)}
            >
              <img src={img} alt="gallery"/>
            </div>
          ))}

        </div>

      </div>


      {/* IMAGE MODAL */}

      {activeImg && (
        <div
          className="ourgallary-modal"
          onClick={() => setActiveImg(null)}
        >

          <span className="ourgallary-close">×</span>

          <img
            src={activeImg}
            alt="preview"
            className="ourgallary-modal-img"
          />

        </div>
      )}

    </section>
  );
};

export default OurGallary;