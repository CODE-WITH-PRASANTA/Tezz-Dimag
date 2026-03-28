import React, { useEffect, useRef, useState } from "react";
import "./FransiceHome.css";
import { FiSearch } from "react-icons/fi";

const FransiceHome = () => {
  const base = "fransiceHome";
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const current = sectionRef.current;
    if (!current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(current);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(current);

    return () => observer.disconnect();
  }, []);

  const floatingImages = [
    {
      id: 1,
      className: `${base}__photo ${base}__photo--large`,
      src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
      alt: "Teacher and child learning together",
      delay: "0.2s",
    },
    {
      id: 2,
      className: `${base}__photo ${base}__photo--medium`,
      src: "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?auto=format&fit=crop&w=700&q=80",
      alt: "Mother and child smiling",
      delay: "0.45s",
    },
    {
      id: 3,
      className: `${base}__photo ${base}__photo--wide`,
      src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
      alt: "Kids having fun",
      delay: "0.7s",
    },
    {
      id: 4,
      className: `${base}__photo ${base}__photo--small`,
      src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=500&q=80",
      alt: "Little girl portrait",
      delay: "0.95s",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`${base} ${visible ? `${base}--visible` : ""}`}
    >
      <div className={`${base}__shape ${base}__shape--panel`}></div>
      <div className={`${base}__shape ${base}__shape--orangeLg`}></div>
      <div className={`${base}__shape ${base}__shape--orangeSm`}></div>
      <div className={`${base}__shape ${base}__shape--yellowMd`}></div>
      <div className={`${base}__shape ${base}__shape--yellowLg`}></div>
      <div className={`${base}__shape ${base}__shape--orangeBottom`}></div>
      <div className={`${base}__shape ${base}__shape--tealRing`}></div>
      <div className={`${base}__shape ${base}__shape--dotTopOne`}></div>
      <div className={`${base}__shape ${base}__shape--dotTopTwo`}></div>
      <div className={`${base}__shape ${base}__shape--dotTopThree`}></div>

      <div className={`${base}__container`}>
        <div className={`${base}__content`}>
          <div
            className={`${base}__topText ${base}__reveal ${base}__reveal--zero`}
          >
            <span className={`${base}__miniLine`}></span>
            <span className={`${base}__eyebrow`}>
              Best Online Learning Platform
            </span>
          </div>

          <h1 className={`${base}__title ${base}__reveal ${base}__reveal--one`}>
            The Smarter Way
            <br />
            to Learn <span>Anything</span>
          </h1>

          <p className={`${base}__lead ${base}__reveal ${base}__reveal--two`}>
            For Tezzdimag Kids Gurukulam Preschool Partners

            We provide a complete academic and operational ecosystem designed to
            help franchise partners start with confidence, operate smoothly, and
            grow profitably. Our structured training, ready-to-use resources,
            and ongoing implementation support ensure long-term success.
          </p>

          <p className={`${base}__desc ${base}__reveal ${base}__reveal--three`}>
            We offer a complete academic and operational system to help
            franchise partners start, run, and grow successfully with
            structured training and practical support.
          </p>

          <form
            className={`${base}__search ${base}__reveal ${base}__reveal--four`}
            onSubmit={(e) => e.preventDefault()}
          >
            <input type="text" placeholder="Search Class" />
            <button type="submit" aria-label="Search">
              <FiSearch />
            </button>
          </form>

          <div className={`${base}__stats ${base}__reveal ${base}__reveal--five`}>
            <div className={`${base}__statCard`}>
              <strong>12k+</strong>
              <span>Active Students</span>
            </div>
            <div className={`${base}__statCard`}>
              <strong>150+</strong>
              <span>Expert Teachers</span>
            </div>
            <div className={`${base}__statCard`}>
              <strong>98%</strong>
              <span>Success Rate</span>
            </div>
          </div>
        </div>

        <div className={`${base}__visual ${base}__reveal ${base}__reveal--six`}>
          {floatingImages.map((item) => (
            <div
              key={item.id}
              className={item.className}
              style={{ animationDelay: item.delay }}
            >
              <img src={item.src} alt={item.alt} />
            </div>
          ))}

          <div className={`${base}__floatingCard ${base}__floatingCard--one`}>
            <span>Live Classes</span>
            <strong>25+ Running Now</strong>
          </div>

          <div className={`${base}__floatingCard ${base}__floatingCard--two`}>
            <span>Top Rated</span>
            <strong>4.9/5 Student Review</strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FransiceHome;