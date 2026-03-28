import React from "react";
import "./AwardSection.css";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import awardImg from "../../assets/AwardSection.webp";

const AwardSection = () => {
  const base = "awardSection";

  const features = [
    "National & International Recognition",
    "Trusted Learning Excellence",
    "Innovative Skill Development",
    "Student Success & Achievement",
  ];

  return (
    <section className={base}>
      <div className={`${base}__shape ${base}__shape--dotOne`}></div>
      <div className={`${base}__shape ${base}__shape--dotTwo`}></div>
      <div className={`${base}__shape ${base}__shape--star`}>✦</div>
      <div className={`${base}__shape ${base}__shape--bolt`}>⚡</div>
      <div className={`${base}__shape ${base}__shape--sun`}>☀</div>

      <div className={`${base}__container`}>
        <div className={`${base}__left`}>
          <div className={`${base}__imageWrap`}>
            <div className={`${base}__blob`}></div>
            <img
              src={awardImg}
              alt="Award winner holding trophy and medal"
              className={`${base}__image`}
            />

            <div className={`${base}__experienceCard`}>
              <h3>10+</h3>
              <p>Awards & Recognition</p>
            </div>
          </div>
        </div>

        <div className={`${base}__right`}>
          <span className={`${base}__tag`}>Award Section</span>

          <h2 className={`${base}__title`}>
            Celebrating Excellence &
            <span> Achievement With Pride</span>
          </h2>

          <p className={`${base}__desc`}>
            At Tezz Dimag, every award reflects dedication, innovation, and the
            passion to create a meaningful learning journey for students. These
            achievements inspire us to continue building a safe, fun, and
            future-focused environment where every child can grow with
            confidence.
          </p>

          <p className={`${base}__desc`}>
            Our recognition stands as a symbol of trust, quality education, and
            commitment to empowering young minds through smart learning,
            creativity, discipline, and skill-based development programs.
          </p>

          <div className={`${base}__features`}>
            {features.map((item, index) => (
              <div className={`${base}__feature`} key={index}>
                <FaCheckCircle className={`${base}__featureIcon`} />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <button className={`${base}__button`}>
            Explore Achievements
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AwardSection;