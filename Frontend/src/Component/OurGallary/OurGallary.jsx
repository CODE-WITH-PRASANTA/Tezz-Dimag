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

  const images = [
    {
      src: img1,
      alt: "Students learning abacus training at Tezz Dimag skill development class"
    },
    {
      src: img2,
      alt: "Children participating in brain development activities at Tezz Dimag"
    },
    {
      src: img3,
      alt: "Students practicing creative learning and memory development programs"
    },
    {
      src: img4,
      alt: "Kids learning robotics and coding in Tezz Dimag classroom"
    },
    {
      src: img5,
      alt: "Students attending spoken English and public speaking training"
    },
    {
      src: img6,
      alt: "Children enjoying skill development activities at Tezz Dimag institute"
    }
  ];

  return (
    <section className="ourgallary-section" id="gallery">

      <div className="ourgallary-header">

        <div className="ourgallary-badge">
          OUR GALLERY
        </div>

        <h2 className="ourgallary-title">
          Moments from <span>Tezz Dimag Classes</span>
        </h2>

        <p className="ourgallary-desc">

          Take a look at some memorable moments from Tezz Dimag, where
          students actively participate in brain development activities,
          abacus training, robotics learning, creative workshops and
          communication skill programs.

          <br /><br />

          Our gallery reflects the vibrant learning environment we create
          for students from Class 1 to Class 12. Through skill development
          courses such as Vedic Maths, DMIT talent analysis, spoken English,
          public speaking and coding classes, children gain confidence,
          creativity and practical knowledge that supports their future
          academic and personal growth.

        </p>

      </div>


      <div className="ourgallary-slider">

        <div className="ourgallary-track">

          {[...images, ...images].map((img, index) => (
            <div
              className="ourgallary-card"
              key={index}
              onClick={() => setActiveImg(img.src)}
            >
              <img src={img.src} alt={img.alt}/>
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
            alt="Tezz Dimag classroom activity preview"
            className="ourgallary-modal-img"
          />

        </div>
      )}

    </section>
  );
};

export default OurGallary;