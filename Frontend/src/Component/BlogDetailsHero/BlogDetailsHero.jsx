import React from "react";
import "./BlogDetailsHero.css";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const BlogDetailsHero = () => {
  const base = "blog-details-hero";

  return (
    <section className={base}>

      {/* background shapes */}
      <div className={`${base}__shape ${base}__shape--left`}></div>
      <div className={`${base}__shape ${base}__shape--right`}></div>

      {/* floating star */}
      <div className={`${base}__star`}>
        <FaStar />
      </div>

      {/* content */}
      <div className={`${base}__content`}>

        <h1 className={`${base}__title`}>
          Blog Details
        </h1>

        <div className={`${base}__breadcrumb`}>
          <Link to="/">Home</Link>
          <span>/</span>
          <span className={`${base}__active`}>
            Blog Details
          </span>
        </div>

      </div>

    </section>
  );
};

export default BlogDetailsHero;