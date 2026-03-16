import React, { useEffect, useState } from "react";
import "./HeroSection.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import slide1 from "../../assets/image-1.webp";
import slide2 from "../../assets/slide_1.webp";
import slide3 from "../../assets/image-27.webp";

const slides = [
  {
    image: slide1,
    titleTop: "Journey of Tezzdimag (Since 2019)",
    title: "To recognize every child’s hidden potential and guide it in the right direction",
    description:
      "The aim of this organization is not limited to academics. It focuses on developing Mind Power,  Personality Development, and Future Skills in children and young people.",
    link: "/courses",
    button: "Explore Courses",
  },
  {
    image: slide2,
    titleTop: "Modern Kids Education",
    title: "Build Strong Minds From Early Age",
    description:
      "At TEZZ DIMAG, we focus on interactive learning methods that help children grow smarter, think faster, and develop problem-solving skills.",
    link: "/about",
    button: "About Us",
  },
  {
    image: slide3,
    titleTop: "Start Your Child’s Journey",
    title: "Join TEZZ DIMAG Today",
    description:
      "Give your child the right environment to learn, explore, and grow with engaging educational programs created specially for young minds.",
    link: "/contact",
    button: "Contact Us",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(slider);
  }, []);

  const nextSlide = () => {
    setCurrent((current + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + slides.length) % slides.length);
  };

  return (
    <section className="HeroSection" aria-label="Tezz Dimag Kids Learning Hero Section">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={
            index === current ? "HeroSection-slide active" : "HeroSection-slide"
          }
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="HeroSection-overlay"></div>

          <div className="HeroSection-content">

            <h4 className="fade-up">{slide.titleTop}</h4>

            <h1 className="fade-up delay">{slide.title}</h1>

            <p className="HeroSection-description fade-up delay">
              {slide.description}
            </p>

            <Link to={slide.link} className="HeroSection-btn fade-up delay2">
              {slide.button}
            </Link>

          </div>
        </div>
      ))}

      <button className="HeroSection-arrow left" onClick={prevSlide} aria-label="Previous Slide">
        <FaChevronLeft />
      </button>

      <button className="HeroSection-arrow right" onClick={nextSlide} aria-label="Next Slide">
        <FaChevronRight />
      </button>

      <div className="HeroSection-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={
              index === current ? "HeroSection-dot active" : "HeroSection-dot"
            }
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;