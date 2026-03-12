import React from "react";
import "./PhotoSection.css";

import learningImg from "../../assets/image.webp";

const PhotoSection = () => {

  const base = "photo-section";

  return (

    <section className={base}>

      <div className={`${base}__container`}>

        <div className={`${base}__image-wrapper`}>

          <img
            src={learningImg}
            alt="Learning"
            className={`${base}__image`}
          />

        </div>

      </div>

    </section>

  );

};

export default PhotoSection;