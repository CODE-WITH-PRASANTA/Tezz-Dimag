import React, { useEffect, useRef, useState } from "react";
import "./OurClasses.css";
import { FaArrowLeft, FaArrowRight, FaShoppingCart, FaArrowCircleRight } from "react-icons/fa";

const OurClasses = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const classData = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80",
      title: "Basic English Speaking and Grammar",
      schedule: "Mon-Fri 10 AM - 12 AM",
      teacher: "Amanda Kern",
      teacherImg:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      price: "$45",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
      title: "Natural Sciences & Mathematics Courses",
      schedule: "Mon-Fri 10 AM - 12 AM",
      teacher: "Gypsy Hardinge",
      teacherImg:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      price: "$67",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=80",
      title: "Environmental Studies & Earth Sciences",
      schedule: "Mon-Fri 10 AM - 12 AM",
      teacher: "Margje Jutten",
      teacherImg:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
      price: "$89",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
      title: "Hospitality, Leisure & Sports Courses",
      schedule: "Mon-Fri 10 AM - 12 AM",
      teacher: "Hubert Franck",
      teacherImg:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
      price: "$67",
    },
  ];

  useEffect(() => {
    const currentRef = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section
      className={`ourClasses ${isVisible ? "ourClasses--visible" : ""}`}
      ref={sectionRef}
    >
      <div className="ourClasses__container">
        <div className="ourClasses__top">
          <div className="ourClasses__headingWrap">
            <div className="ourClasses__shape">
              <span className="ourClasses__shapeCircle"></span>
              <span className="ourClasses__shapeStripe"></span>
            </div>

            <div className="ourClasses__headingContent">
              <h2 className="ourClasses__title">Our Classes</h2>
              <p className="ourClasses__subtitle">
                Nam mattis felis id sodales rutrum. Nulla ornare tristique
                mauris, a laoreet erat ornare sit amet. Nulla sagittis faucibus
                lacus.
              </p>
            </div>
          </div>

          <div className="ourClasses__nav">
            <button className="ourClasses__navBtn" aria-label="Previous">
              <FaArrowLeft />
            </button>
            <button className="ourClasses__navBtn" aria-label="Next">
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div className="ourClasses__grid">
          {classData.map((item, index) => (
            <article
              className="ourClasses__card"
              key={item.id}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="ourClasses__imageWrap">
                <img
                  src={item.image}
                  alt={item.title}
                  className="ourClasses__image"
                />
                <button className="ourClasses__cartBtn" aria-label="Add to cart">
                  <FaShoppingCart />
                </button>
              </div>

              <div className="ourClasses__cardBody">
                <h3 className="ourClasses__cardTitle">{item.title}</h3>
                <p className="ourClasses__schedule">{item.schedule}</p>

                <div className="ourClasses__footer">
                  <div className="ourClasses__teacher">
                    <img
                      src={item.teacherImg}
                      alt={item.teacher}
                      className="ourClasses__teacherImg"
                    />
                    <span className="ourClasses__teacherName">{item.teacher}</span>
                  </div>

                  <span className="ourClasses__price">{item.price}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="ourClasses__bottom">
          <button className="ourClasses__cta">
            <span className="ourClasses__ctaIcon">
              <FaArrowCircleRight />
            </span>
            <span>Classes</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurClasses;