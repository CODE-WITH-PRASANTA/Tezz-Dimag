import React, { useState } from "react";
import "./PricingSection.css";

const PricingSection = () => {
  const [billing, setBilling] = useState("monthly");

  const plans = [
    {
      title: "ONLINE",
      monthly: 1000,
      yearly: 11000,
      discount: "Save ₹1000",
      color: "purple",
      desc: "Online skill-based learning program for Nursery to Class 12 with flexible evening timing.",
      note: "Registration Fee: ₹3000",
      extra: "Time: 7:00 PM - 8:00 PM or 8:00 PM - 9:00 PM",
      features: [
        "Nursery to Class 4th programs",
        "Abacus",
        "Vedic Math",
        "Memory Science",
        "Mid Brain Activation",
        "Art & Craft",
        "Phonics",
        "Public Speaking",
        "Brain Gym",
        "Calligraphy / Handwriting",
        "Classes 3 days a week",
        "1 hour guided session",
      ],
    },
    {
      title: "OFFLINE",
      monthly: 2000,
      yearly: 22000,
      discount: "Save ₹2000",
      color: "red",
      highlight: true,
      desc: "Offline classroom learning with structured courses, practical guidance, and activity-based development.",
      note: "Registration Fee: ₹3000",
      extra: "Includes class-based support and selected learning materials",
      features: [
        "Class 5th to Class 12th programs",
        "Spoken English",
        "Public Speaking",
        "Robotics",
        "Coding",
        "STEM",
        "Arduino Robotics",
        "AI Basic",
        "AI Advance",
        "Mid Brain Activation",
        "Monthly classroom learning",
        "Interactive offline practice",
      ],
    },
    {
      title: "DMIT TEST",
      monthly: 3000,
      yearly: 15000,
      discount: "Best Value",
      color: "blue",
      desc: "Assessment and development package with training support, activity tools, and level-based guidance.",
      note: "Assessment / Registration: ₹3000",
      extra: "Level-based plan with add-on practice tools and guided activities",
      features: [
        "3 Month Level Course Structure",
        "Mid Brain Activation",
        "Seven Chakra Session",
        "Brain Gym",
        "Advanced Mid Brain Activation",
        "Telekinesis Practice",
        "Photographic Memory",
        "Healing Session",
        "NLP Basics",
        "Blindfold Practice Kit",
        "Color Card & Triangle Pyramid",
        "Level-wise support materials",
      ],
    },
  ];

  return (
    <section className="Pricing-Sec">
      <div className="Pricing-Sec-container">
        {/* HEADER */}
        <div className="Pricing-Sec-header">
          <div>
            <p className="Pricing-Sec-subtitle">Pricing Plan</p>
            <h2 className="Pricing-Sec-title">
              Choose The Right Learning Package For Your Child
            </h2>
          </div>

          <div className="Pricing-Sec-toggle">
            <button
              className={billing === "monthly" ? "active" : ""}
              onClick={() => setBilling("monthly")}
            >
              Monthly
            </button>
            <button
              className={billing === "yearly" ? "active" : ""}
              onClick={() => setBilling("yearly")}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* CARDS */}
        <div className="Pricing-Sec-cards">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`Pricing-Sec-card ${plan.color} ${
                plan.highlight ? "highlight" : ""
              }`}
            >
              <div className="Pricing-Sec-wave-top"></div>

              {plan.highlight && (
                <div className="Pricing-Sec-badge">Popular</div>
              )}

              {billing === "yearly" && (
                <div className="Pricing-Sec-ribbon">
                  <span>{plan.discount}</span>
                </div>
              )}

              <div className="Pricing-Sec-content">
                <h3>{plan.title}</h3>

                <p className="Pricing-Sec-desc">{plan.desc}</p>

                <div className="Pricing-Sec-priceWrap">
                  <h2 className="Pricing-Sec-price">
                    ₹{billing === "monthly" ? plan.monthly : plan.yearly}
                    <span> / {billing}</span>
                  </h2>
                </div>

                <p className="Pricing-Sec-note">{plan.note}</p>
                <p className="Pricing-Sec-extra">{plan.extra}</p>

                <ul className="Pricing-Sec-features">
                  {plan.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>

                <button className="Pricing-Sec-btn">7327817155 →</button>
              </div>

              <div className="Pricing-Sec-wave-bottom"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;