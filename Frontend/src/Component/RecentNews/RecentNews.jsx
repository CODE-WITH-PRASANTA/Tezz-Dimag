import React, { useEffect, useRef, useState } from "react";
import "./RecentNews.css";
import { FaTag, FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const RecentNews = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [mobileIndex, setMobileIndex] = useState(0);

  const newsData = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80",
      category: "English",
      date: "17/09/2020",
      author: "Admin",
      tags: "Teachers,School",
      title: "Campus clean workshop",
      description:
        "Nam mattis felis id sodales rutrum. Nulla ornare tristique mauris, a laoreet erat ornare sit amet",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
      category: "English",
      date: "17/09/2020",
      author: "Admin",
      tags: "Teachers,School",
      title: "Campus clean workshop",
      description:
        "Nam mattis felis id sodales rutrum. Nulla ornare tristique mauris, a laoreet erat ornare sit amet",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
      category: "English",
      date: "17/09/2020",
      author: "Admin",
      tags: "Teachers,School",
      title: "Campus clean workshop",
      description:
        "Nam mattis felis id sodales rutrum. Nulla ornare tristique mauris, a laoreet erat ornare sit amet",
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
      { threshold: 0.18 }
    );

    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  const handlePrev = () => {
    setMobileIndex((prev) => (prev === 0 ? newsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setMobileIndex((prev) => (prev === newsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      ref={sectionRef}
      className={`recentNews ${visible ? "recentNews--visible" : ""}`}
    >
      <div className="recentNews__container">
        <div className="recentNews__heading">
          <h2 className="recentNews__title">Recent News</h2>
          <p className="recentNews__subtitle">
            Nam mattis felis id sodales rutrum. Nulla ornare tristique mauris, a
            laoreet erat ornare sit amet. Nulla sagittis faucibus lacus Morbi
            lorem sem, aliquet
          </p>
        </div>

        {/* desktop / laptop original grid */}
        <div className="recentNews__grid">
          {newsData.map((item, index) => (
            <article
              className="recentNews__card"
              key={item.id}
              style={{ animationDelay: `${index * 0.16}s` }}
            >
              <div className="recentNews__imageWrap">
                <img
                  src={item.image}
                  alt={item.title}
                  className="recentNews__image"
                />
                <span className="recentNews__badge">{item.category}</span>
              </div>

              <div className="recentNews__content">
                <div className="recentNews__meta">
                  <span>{item.date}</span>
                  <span>by {item.author}</span>
                  <span className="recentNews__tagMeta">
                    <FaTag />
                    {item.tags}
                  </span>
                </div>

                <h3 className="recentNews__cardTitle">{item.title}</h3>

                <p className="recentNews__desc">{item.description}</p>

                <a href="/" className="recentNews__link">
                  <span>Read</span>
                  <FaArrowRight />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* mobile slider */}
        <div className="recentNews__mobileSlider">
          <div className="recentNews__mobileCardWrap">
            <article className="recentNews__card recentNews__card--mobile">
              <div className="recentNews__imageWrap">
                <img
                  src={newsData[mobileIndex].image}
                  alt={newsData[mobileIndex].title}
                  className="recentNews__image"
                />
                <span className="recentNews__badge">
                  {newsData[mobileIndex].category}
                </span>
              </div>

              <div className="recentNews__content">
                <div className="recentNews__meta">
                  <span>{newsData[mobileIndex].date}</span>
                  <span>by {newsData[mobileIndex].author}</span>
                  <span className="recentNews__tagMeta">
                    <FaTag />
                    {newsData[mobileIndex].tags}
                  </span>
                </div>

                <h3 className="recentNews__cardTitle">
                  {newsData[mobileIndex].title}
                </h3>

                <p className="recentNews__desc">
                  {newsData[mobileIndex].description}
                </p>

                <a href="/" className="recentNews__link">
                  <span>Read</span>
                  <FaArrowRight />
                </a>
              </div>
            </article>
          </div>

          <div className="recentNews__mobilePagination">
            <button
              className="recentNews__mobileNavBtn"
              onClick={handlePrev}
              aria-label="Previous news"
            >
              <FaChevronLeft />
            </button>

            <div className="recentNews__dots">
              {newsData.map((_, index) => (
                <button
                  key={index}
                  className={`recentNews__dot ${
                    mobileIndex === index ? "recentNews__dot--active" : ""
                  }`}
                  onClick={() => setMobileIndex(index)}
                  aria-label={`Go to news ${index + 1}`}
                />
              ))}
            </div>

            <button
              className="recentNews__mobileNavBtn"
              onClick={handleNext}
              aria-label="Next news"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentNews;