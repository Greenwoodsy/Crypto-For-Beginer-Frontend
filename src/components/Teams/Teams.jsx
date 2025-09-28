import React from "react";
import imageTrust from "../../Assets/shield.jpg";
import { NavLink } from "react-router-dom";
import "./Teams.css";

const Teams = () => {
  return (
    <section className="teams-section">
      <div className="teams-container">
        {/* Left Image */}
        <div className="teams-image-container">
          <img src={imageTrust} alt="Trust Shield" className="teams-image" />
        </div>

        {/* Right Content */}
        <div className="teams-content">
          <h1 className="teams-title">
            CryptoForBeginer – Building Trust in Every Investment
          </h1>
          <p className="teams-description">
            At CryptoForBeginer, your security and trust come first. We empower
            new investors with the knowledge and tools needed to navigate the
            digital world safely. With transparency and guidance, we ensure your
            first step into crypto is a confident one.
          </p>
          <div className="teams-btn-container">
            <NavLink to="/privacy-policy" className="teams-btn">
              Learn More About Security
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;
