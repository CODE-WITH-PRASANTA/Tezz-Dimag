import React, { useEffect, useRef, useState } from "react";
import "./Teachers.css";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaPlus,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const Teachers = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [mobileIndex, setMobileIndex] = useState(0);

  const teachersData = [
    {
      id: 1,
      name: "Polina Kerston",
      role: "English Teacher",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 2,
      name: "Faadi Al Rahman",
      role: "Instructor",
      image:
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 3,
      name: "Chikelu Obasea",
      role: "Art Teacher",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 4,
      name: "Katayama Fumiki",
      role: "Teacher",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
    },
  ];

  useEffect(() => {
    const current = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  const toggleSocialBar = (id) => {
    setActiveCard((prev) => (prev === id ? null : id));
  };

  const handlePrev = () => {
    setMobileIndex((prev) =>
      prev === 0 ? teachersData.length - 1 : prev - 1
    );
    setActiveCard(null);
  };

  const handleNext = () => {
    setMobileIndex((prev) =>
      prev === teachersData.length - 1 ? 0 : prev + 1
    );
    setActiveCard(null);
  };

  const handleDotClick = (index) => {
    setMobileIndex(index);
    setActiveCard(null);
  };

  return (
    <section
      ref={sectionRef}
      className={`teachersSection ${visible ? "teachersSection--visible" : ""}`}
    >
      <div className="teachersSection__container">
        <div className="teachersSection__heading">
          <h2 className="teachersSection__title">
            Our Awesome
            <br />
            Teachers
          </h2>

          <p className="teachersSection__subtitle">
            Quisque id ultrices tellus, ac sodales ex. Cras nec ante viverra,
            bibendum justo eget, lacinia dui. Donec ligula ligula, elementum sit
            amet.
          </p>
        </div>

        {/* Desktop / Laptop Original View */}
        <div className="teachersSection__grid">
          {teachersData.map((teacher, index) => {
            const isOpen = activeCard === teacher.id;

            return (
              <article
                className="teachersSection__card"
                key={teacher.id}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="teachersSection__imageWrap">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="teachersSection__image"
                  />

                  <div
                    className={`teachersSection__socialBar ${
                      isOpen ? "teachersSection__socialBar--open" : ""
                    }`}
                  >
                    <div className="teachersSection__socialIcons">
                      <a
                        href="/"
                        className="teachersSection__socialItem"
                        aria-label="Instagram"
                      >
                        <FaInstagram />
                      </a>

                      <a
                        href="/"
                        className="teachersSection__socialItem"
                        aria-label="LinkedIn"
                      >
                        <FaLinkedinIn />
                      </a>

                      <a
                        href="/"
                        className="teachersSection__socialItem"
                        aria-label="Facebook"
                      >
                        <FaFacebookF />
                      </a>
                    </div>

                    <button
                      type="button"
                      className="teachersSection__toggleBtn"
                      aria-label={isOpen ? "Close social icons" : "Open social icons"}
                      onClick={() => toggleSocialBar(teacher.id)}
                    >
                      {isOpen ? <FaTimes /> : <FaPlus />}
                    </button>
                  </div>
                </div>

                <div className="teachersSection__content">
                  <h3 className="teachersSection__name">{teacher.name}</h3>
                  <p className="teachersSection__role">{teacher.role}</p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Mobile Pagination View */}
        <div className="teachersSection__mobileSlider">
          <div className="teachersSection__mobileCardWrap">
            {(() => {
              const teacher = teachersData[mobileIndex];
              const isOpen = activeCard === teacher.id;

              return (
                <article className="teachersSection__card teachersSection__card--mobile">
                  <div className="teachersSection__imageWrap">
                    <img
                      src={teacher.image}
                      alt={teacher.name}
                      className="teachersSection__image"
                    />

                    <div
                      className={`teachersSection__socialBar ${
                        isOpen ? "teachersSection__socialBar--open" : ""
                      }`}
                    >
                      <div className="teachersSection__socialIcons">
                        <a
                          href="/"
                          className="teachersSection__socialItem"
                          aria-label="Instagram"
                        >
                          <FaInstagram />
                        </a>

                        <a
                          href="/"
                          className="teachersSection__socialItem"
                          aria-label="LinkedIn"
                        >
                          <FaLinkedinIn />
                        </a>

                        <a
                          href="/"
                          className="teachersSection__socialItem"
                          aria-label="Facebook"
                        >
                          <FaFacebookF />
                        </a>
                      </div>

                      <button
                        type="button"
                        className="teachersSection__toggleBtn"
                        aria-label={isOpen ? "Close social icons" : "Open social icons"}
                        onClick={() => toggleSocialBar(teacher.id)}
                      >
                        {isOpen ? <FaTimes /> : <FaPlus />}
                      </button>
                    </div>
                  </div>

                  <div className="teachersSection__content">
                    <h3 className="teachersSection__name">{teacher.name}</h3>
                    <p className="teachersSection__role">{teacher.role}</p>
                  </div>
                </article>
              );
            })()}
          </div>

          <div className="teachersSection__mobilePagination">
            <button
              className="teachersSection__mobileNavBtn"
              onClick={handlePrev}
              aria-label="Previous teacher"
            >
              <FaChevronLeft />
            </button>

            <div className="teachersSection__dots">
              {teachersData.map((_, index) => (
                <button
                  key={index}
                  className={`teachersSection__dot ${
                    mobileIndex === index ? "teachersSection__dot--active" : ""
                  }`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Go to teacher ${index + 1}`}
                />
              ))}
            </div>

            <button
              className="teachersSection__mobileNavBtn"
              onClick={handleNext}
              aria-label="Next teacher"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teachers;