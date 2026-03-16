import React from "react";
import "./PhotoSection.css";

import { IMAGE_URL } from "../../api/axios";

const PhotoSection = ({ image }) => {

  const base = "photo-section";

  return (

    <section className={base}>

      <div className={`${base}__container`}>

        <div className={`${base}__image-wrapper`}>

          <img
            src={`${IMAGE_URL}${image}`}
            alt="Learning"
            className={`${base}__image`}
          />

        </div>

      </div>

    </section>

  );

};

export default PhotoSection;