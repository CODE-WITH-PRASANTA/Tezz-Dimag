import React, { useEffect, useState } from "react";
import "./HeroSection.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import slide1 from "../../assets/slide_3.webp";
import slide2 from "../../assets/slide_1.webp";
import slide3 from "../../assets/slide_1.webp";

const slides = [
  {
    image: slide3,
    titleTop: "Our Courses",
    title: "See What's In Our Courses",
  },
  {
    image: slide2,
    titleTop: "The Best Theme For",
    title: "Kids Education",
  },
  {
    image: slide1,
    titleTop: "Get Ready",
    title: "to Join with us",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(slider);
  }, []);

  const nextSlide = () => {
    setCurrent((current + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + slides.length) % slides.length);
  };

  return (
    <section className="HeroSection">

      {slides.map((slide, index) => (
        <div
          key={index}
          className={index === current ? "HeroSection-slide active" : "HeroSection-slide"}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="HeroSection-overlay"></div>

          <div className="HeroSection-content">
            <h4>{slide.titleTop}</h4>
            <h1>{slide.title}</h1>

            <Link to="/about" className="HeroSection-btn">
              LEARN MORE
            </Link>
          </div>
        </div>
      ))}

      {/* arrows */}

      <button className="HeroSection-arrow left" onClick={prevSlide}>
        <FaChevronLeft />
      </button>

      <button className="HeroSection-arrow right" onClick={nextSlide}>
        <FaChevronRight />
      </button>

      {/* dots */}

      <div className="HeroSection-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={index === current ? "HeroSection-dot active" : "HeroSection-dot"}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>

    </section>
  );
};

export default HeroSection;