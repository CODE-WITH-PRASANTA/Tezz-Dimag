import React, { useState, useEffect } from "react";
import "./OurGallary.css";
import API, { IMAGE_URL } from "../../api/axios"; // ✅ IMPORT IMAGE_URL

const OurGallary = () => {
  const [activeImg, setActiveImg] = useState(null);
  const [images, setImages] = useState([]);

  // ✅ FETCH FROM BACKEND
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await API.get("/gallery");
        setImages(res.data.data || []);
      } catch (err) {
        console.log(err);
      }
    };

    fetchImages();
  }, []);

  return (
    <section className="ourgallary-section" id="gallery">

      <div className="ourgallary-header">
        <div className="ourgallary-badge">OUR GALLERY</div>

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
          for students from Class 1 to Class 12.
        </p>
      </div>

      <div className="ourgallary-slider">
        <div className="ourgallary-track">

          {/* ✅ DYNAMIC IMAGES */}
          {[...images, ...images].map((img, index) => (
            <div
              className="ourgallary-card"
              key={index}
              onClick={() =>
                setActiveImg(`${IMAGE_URL}${img.image}`) // ✅ FIXED
              }
            >
              <img
                src={`${IMAGE_URL}${img.image}`} // ✅ FIXED
                alt={img.alt || "gallery image"}
                loading="lazy"
              />
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