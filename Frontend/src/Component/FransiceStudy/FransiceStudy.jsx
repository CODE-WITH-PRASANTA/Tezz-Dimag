import React, { useEffect, useRef, useState } from "react";
import "./FransiceStudy.css";
import {
  FaGraduationCap,
  FaCertificate,
  FaAtom,
  FaSchool,
} from "react-icons/fa";

const FransiceStudy = () => {
  const base = "fransiceStudy";
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
      { threshold: 0.15 }
    );

    observer.observe(current);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      id: 1,
      icon: <FaGraduationCap />,
      title: "Awesome Teachers",
      desc: "Vivamus interdum, mauris interdum quis curdum sodales",
      accent: "orange",
    },
    {
      id: 2,
      icon: <FaCertificate />,
      title: "Global Certificate",
      desc: "Pelleneget tespharetra que fringilla egugue id eget pharetra",
      accent: "blue",
    },
    {
      id: 3,
      icon: <FaAtom />,
      title: "Best Programm",
      desc: "Etiam risus neque, volutpat vel laoreet a, finibus volutpat non",
      accent: "orange",
    },
    {
      id: 4,
      icon: <FaSchool />,
      title: "Student Support Service",
      desc: "Mauris nec mi fequis ugiat, cursus tortor nec, pharetra tellus",
      accent: "blue",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`${base} ${visible ? `${base}--visible` : ""}`}
    >
      <div className={`${base}__container`}>
        <div className={`${base}__headingWrap`}>
          <h2 className={`${base}__title ${base}__reveal ${base}__reveal--one`}>
            Welcome to <span>Shelly</span>
          </h2>

          <p className={`${base}__subtitle ${base}__reveal ${base}__reveal--two`}>
            Nunc consectetur ex nunc, id porttitor leo semper eget. Vivamus
            interdum, mauris quis cursus sodales, urn
          </p>
        </div>

        <div className={`${base}__featureGrid`}>
          {features.map((item, index) => (
            <div
              key={item.id}
              className={`${base}__featureCard ${base}__reveal`}
              style={{ transitionDelay: `${0.15 + index * 0.12}s` }}
            >
              <div
                className={`${base}__featureIcon ${
                  item.accent === "orange"
                    ? `${base}__featureIcon--orange`
                    : `${base}__featureIcon--blue`
                }`}
              >
                {item.icon}
              </div>

              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className={`${base}__gallery ${base}__reveal ${base}__reveal--four`}>
          <div className={`${base}__shape ${base}__shape--planet`}></div>
          <div className={`${base}__shape ${base}__shape--ring`}></div>
          <div className={`${base}__shape ${base}__shape--dotOne`}></div>
          <div className={`${base}__shape ${base}__shape--dotTwo`}></div>
          <div className={`${base}__shape ${base}__shape--dotThree`}></div>
          <div className={`${base}__shape ${base}__shape--smallBadge`}></div>

          <div className={`${base}__galleryCol ${base}__galleryCol--one`}>
            <div className={`${base}__imgCard ${base}__imgCard--smallTall`}>
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80"
                alt="Students classroom"
              />
            </div>
          </div>

          <div className={`${base}__galleryCol ${base}__galleryCol--two`}>
            <div className={`${base}__imgCard ${base}__imgCard--largeTall`}>
              <img
                src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1000&q=80"
                alt="Child activity"
              />
            </div>

            <div className={`${base}__imgCard ${base}__imgCard--bottomFood`}>
              <img
                src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80"
                alt="Healthy food"
              />
            </div>
          </div>

          <div className={`${base}__galleryCol ${base}__galleryCol--three`}>
            <div className={`${base}__imgCard ${base}__imgCard--mediumTall`}>
              <img
                src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=80"
                alt="Science activity"
              />
            </div>

            <div className={`${base}__imgCard ${base}__imgCard--mini`}>
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=500&q=80"
                alt="Creative study"
              />
            </div>
          </div>

          <div className={`${base}__galleryCol ${base}__galleryCol--four`}>
            <div className={`${base}__imgCard ${base}__imgCard--miniTop`}>
              <img
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=500&q=80"
                alt="Little child"
              />
            </div>

            <div className={`${base}__imgCard ${base}__imgCard--squareMid`}>
              <img
                src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=900&q=80"
                alt="Students with books"
              />
            </div>
          </div>

          <div className={`${base}__galleryCol ${base}__galleryCol--five`}>
            <div className={`${base}__imgCard ${base}__imgCard--wideTop`}>
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80"
                alt="Teacher classroom"
              />
            </div>

            <div className={`${base}__imgCard ${base}__imgCard--mediumBottom`}>
              <img
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80"
                alt="Craft learning"
              />
            </div>

            <div className={`${base}__imgCard ${base}__imgCard--miniSide`}>
              <img
                src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=500&q=80"
                alt="Study card"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FransiceStudy;