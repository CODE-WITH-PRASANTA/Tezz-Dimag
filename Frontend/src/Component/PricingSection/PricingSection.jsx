import React, { useState } from "react";
import "./PricingSection.css";

const PricingSection = () => {
  const [billing, setBilling] = useState("monthly");

  const plans = [
    {
      title: "1ST SESSION",
      monthly: 12559,
      yearly: 99999,
      color: "purple",
      features: [
        "Outdoor Games",
        "School Transports",
        "Best/Special Programs",
        "Annual Tours & Travels",
      ],
    },
    {
      title: "1ST SESSION",
      monthly: 24959,
      yearly: 189999,
      color: "red",
      highlight: true,
      features: [
        "Outdoor Games",
        "School Transports",
        "Best/Special Programs",
        "Annual Tours & Travels",
        "Fun & Game Campaign",
        "Tiffen & Lunch Package",
      ],
    },
    {
      title: "1ST SESSION",
      monthly: 39859,
      yearly: 299999,
      color: "blue",
      features: [
        "Outdoor Games",
        "School Transports",
        "Best/Special Programs",
        "Annual Tours & Travels",
        "Fun & Game Campaign",
        "Tiffen & Lunch Package",
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
              We Provide Awesome Pricing Package For Study
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
  {/* TOP CURVE */}
  <div className="Pricing-Sec-wave-top"></div>

  {plan.highlight && (
    <div className="Pricing-Sec-badge">★★★★★</div>
  )}

  <div className="Pricing-Sec-content">
    <h3>{plan.title}</h3>

    <p className="Pricing-Sec-desc">
      Sit amet, consectetur adipiscing elit sed eiusmod tempor
    </p>

    <h2 className="Pricing-Sec-price">
      ₹{billing === "monthly" ? plan.monthly : plan.yearly}
      <span>/{billing}</span>
    </h2>

    <ul className="Pricing-Sec-features">
      {plan.features.map((f, i) => (
        <li key={i}>{f}</li>
      ))}
    </ul>

    <button className="Pricing-Sec-btn">
      CHOOSE PLAN →
    </button>
  </div>

  {/* BOTTOM CURVE */}
  <div className="Pricing-Sec-wave-bottom"></div>
</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;