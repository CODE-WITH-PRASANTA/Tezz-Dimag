import React, { useEffect, useRef, useState } from "react";
import "./FindCourse.css";
import {
  FaPhoneAlt,
  FaRegCalendarAlt,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

const FindCourse = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const eventData = [
    {
      id: 1,
      date: "29/07/2020",
      time: "11AM to 15PM",
      title: "Digital Transformation Conference",
      teacher: "Amanda Kern",
      teacherImg:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      location: "43 castle road 517 district",
      price: "FREE",
    },
    {
      id: 2,
      date: "29/07/2020",
      time: "11AM to 15PM",
      title: "Environment Conference",
      teacher: "Cvita Doleschall",
      teacherImg:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
      location: "43 castle road 517 district",
      price: "$16",
    },
    {
      id: 3,
      date: "29/07/2020",
      time: "11AM to 15PM",
      title: "Campus Clean Workshop",
      teacher: "Helena Brauer",
      teacherImg:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
      location: "43 castle road 517 district",
      price: "$8",
    },
  ];

  useEffect(() => {
    const current = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`findCourse ${visible ? "findCourse--visible" : ""}`}
    >
      <div className="findCourse__container">
        <div className="findCourse__grid">
          <div className="findCourse__left">
            <div className="findCourse__leftContent">
              <h2 className="findCourse__title">Find Your Course</h2>

              <p className="findCourse__desc">
                ullam fringilla ipsum sed enim scelerisque, ac porttitor libero
                egestas. Donec iaculis nisi eget bibendum efficitur. Lorem ipsum
                dolor sit
              </p>

              <a href="tel:+2342544667" className="findCourse__phone">
                <span className="findCourse__phoneIcon">
                  <FaPhoneAlt />
                </span>
                <span>Call: +2 342 5446 67</span>
              </a>
            </div>

            <div className="findCourse__imageArea">
              <div className="findCourse__shape findCourse__shape--big"></div>
              <div className="findCourse__shape findCourse__shape--small"></div>
              <div className="findCourse__shape findCourse__shape--striped"></div>
              <div className="findCourse__shape findCourse__shape--bottom"></div>

              <div className="findCourse__imageCard findCourse__imageCard--large">
                <img
                  src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80"
                  alt="Swimming course"
                />
              </div>

              <div className="findCourse__imageCard findCourse__imageCard--small">
                <img
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80"
                  alt="Yoga course"
                />
              </div>
            </div>
          </div>

          <div className="findCourse__right">
            <div className="findCourse__eventList">
              {eventData.map((item, index) => (
                <article
                  className="findCourse__eventCard"
                  key={item.id}
                  style={{ animationDelay: `${index * 0.16}s` }}
                >
                  <div className="findCourse__eventAccent"></div>

                  <div className="findCourse__eventTop">
                    <div className="findCourse__dateTime">
                      <span className="findCourse__meta">
                        <FaRegCalendarAlt />
                        {item.date}
                      </span>
                      <span className="findCourse__metaText">{item.time}</span>
                    </div>

                    <div className="findCourse__price">{item.price}</div>
                  </div>

                  <h3 className="findCourse__eventTitle">{item.title}</h3>

                  <div className="findCourse__eventBottom">
                    <div className="findCourse__teacher">
                      <img
                        src={item.teacherImg}
                        alt={item.teacher}
                        className="findCourse__teacherImg"
                      />
                      <span className="findCourse__teacherName">
                        {item.teacher}
                      </span>
                    </div>

                    <div className="findCourse__location">
                      <FaMapMarkerAlt />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="findCourse__footerLinkWrap">
              <a href="/" className="findCourse__footerLink">
                <span>ALL EVENTS</span>
                <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindCourse;