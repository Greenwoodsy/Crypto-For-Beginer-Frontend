import React from "react";
import "./SectionTwo.css";
import { FaLock, FaCoins, FaChartPie } from "react-icons/fa";

const features = [
  {
    icon: <FaLock size={50} />,
    header: "Secure Investments",
    content:
      "Your funds and data are protected with top-level security, giving you peace of mind while you focus on building wealth.",
  },
  {
    icon: <FaCoins size={50} />,
    header: "Beginner-Friendly Tools",
    content:
      "We simplify crypto investing with easy-to-use features designed for newcomers. Start small, grow big.",
  },
  {
    icon: <FaChartPie size={50} />,
    header: "Smart Portfolio Growth",
    content:
      "Balance high-growth opportunities with long-term strategies. Build a sustainable crypto portfolio that grows with you.",
  },
];

const SectionTwo = () => {
  return (
    <div className="sectionTwo">
      {/* Intro Section */}
      <div className="sectionTwo-top centered">
        <div className="sectionTwo-text">
          <h1>CryptoForBeginer Gives You The Edge</h1>
          <p>
            Take the first step into smart crypto investing. Our tools and
            guidance make it simple for beginners to start, learn, and grow
            confidently in the digital finance world.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="sectionTwo-cards">
        {features.map((feature, index) => (
          <div key={index} className="card">
            <div className="icon">{feature.icon}</div>
            <h2>{feature.header}</h2>
            <p>{feature.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionTwo;
