import React from "react";
import { FaCoins, FaLock, FaChartBar } from "react-icons/fa";
import AboutImg from "../../Assets/abouuuut.jpg";
import "./About.css";
import Footer from "../../components/Footer/Footer";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="about-container">
        {/* Hero Section */}
        <div className="about-hero">
          <h1>About Our Investment Platform</h1>
          <p>
            We help individuals and businesses grow wealth through smart, 
            transparent, and secure investment opportunities designed 
            for long-term success.
          </p>
        </div>

        {/* Purpose Section */}
        <div className="about-section">
          <div className="about-content">
            <h2>Our Purpose</h2>
            <p>
              At the heart of our platform is a simple goal: to make 
              investing accessible, safe, and profitable for everyone. 
              Whether you’re starting your first investment or expanding 
              your portfolio, we provide the tools and guidance to help 
              you succeed.
            </p>
            <NavLink to="/deposit-payment" className="about-btn">
              Start Your Journey
            </NavLink>
          </div>
          <div className="about-image">
            <img src={AboutImg} alt="Invest With Us" />
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="about-mission-section">
          <div className="mission-item">
            <FaCoins className="icon" />
            <h3>Smart Strategies</h3>
            <p>
              We combine market insights and innovative tools to deliver 
              smarter investment solutions tailored to your goals.
            </p>
          </div>
          <div className="mission-item">
            <FaLock className="icon" />
            <h3>Trust & Security</h3>
            <p>
              Your investments are protected with strong security measures, 
              full transparency, and a focus on risk management.
            </p>
          </div>
          <div className="mission-item">
            <FaChartBar className="icon" />
            <h3>Wealth Growth</h3>
            <p>
              Our mission is to help you achieve financial independence by 
              maximizing returns and building lasting wealth.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
