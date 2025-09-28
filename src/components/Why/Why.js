import React from "react";
import { FaShieldAlt, FaUsers, FaGlobe, FaChartLine } from "react-icons/fa";
import "./Why.css";
import bgImage from "../../Assets/mad-design.jpg";

const whyData = [
  {
    id: 1,
    icon: <FaShieldAlt />,
    title: "Secure & Reliable",
    text: "We use advanced security protocols to safeguard your investments and ensure transparency.",
  },
  {
    id: 2,
    icon: <FaUsers />,
    title: "Trusted by Thousands",
    text: "Over 5,000 active investors trust us to grow and manage their assets globally.",
  },
  {
    id: 3,
    icon: <FaGlobe />,
    title: "Worldwide Reach",
    text: "Operating in 30+ countries, we provide access to global investment opportunities.",
  },
  {
    id: 4,
    icon: <FaChartLine />,
    title: "Proven Growth",
    text: "Consistent performance with millions in assets under management over the years.",
  },
];

const Why = () => {
  return (
    <section
      className="why-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="why-overlay">
        <h2 className="why-title">Why Choose Us</h2>
        <p className="why-subtitle">
          We combine experience, trust, and innovation to give you the best
          investment journey possible.
        </p>

        <div className="why-grid">
          {whyData.map((item) => (
            <div className="why-card fade-in-up" key={item.id}>
              <div className="why-icon">{item.icon}</div>
              <h3 className="why-card-title">{item.title}</h3>
              <p className="why-card-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
