import React, { useEffect, useState } from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import OurCustomers from "../../components/OurCustomers/OurCustomers";
import Faq from "../../components/Faq/Faq";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";
import SectionTwo from "../../components/SectionTwo/SectionTwo";
import SectionThree from "../../components/SectionThree/SectionThree";
import Advert from "../../Payment/Advert/Advert";
import Teams from "../../components/Teams/Teams";
import Forum from "../../components/Forum/Forum";
import Why from "../../components/Why/Why";
import Testimonials from "../../components/Testimonials/Testimonials";

const Home = () => {
  const words = [
    "Start Your Crypto Journey with CryptoForBeginer.",
    "Learn, Invest, and Grow in Crypto — Made Simple.",
    "CryptoForBeginer — Your First Step into Smart Investing",
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      setDisplayedText(currentWord.substring(0, charIndex + 1));
      charIndex++;
      if (charIndex === currentWord.length) {
        clearInterval(typeInterval);
        setTimeout(() => {
          setWordIndex((prev) => (prev + 1) % words.length);
        }, 2000); // pause before switching
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [wordIndex]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = process.env.REACT_APP_JIVOCHAT_URL;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Advert />
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="text-content" data-aos="fade-up">
            <h1>
              {displayedText}
              <span className="cursor">|</span>
            </h1>
            <p>
              Unlock the crypto world with step-by-step guidance designed for
              beginners. From understanding the basics to making smart
              investments, CryptoForBeginer helps you grow with confidence.
            </p>
            <NavLink to="/my-account" className="dashboard-link">
              Dashboard
            </NavLink>
          </div>
        </div>
      </div>
      <SectionTwo />
      <Teams />
      <Why />
      <Testimonials />
      <OurCustomers />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
