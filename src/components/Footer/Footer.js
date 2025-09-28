// Footer.jsx
import React from "react";
import {
  FaWhatsapp,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="simple-footer">
      {/* Decorative circle top-left */}
      <div className="footer-decor-circle"></div>

      <div className="footer-grid">
        <div className="footer-col">
          <h3>Crypto For Beginner</h3>
          <p>
            Secure, transparent investment solutions designed to help you grow
            your financial future with confidence.
          </p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/our-story">Our Story</a>
            </li>
            <li>
              <a href="/investment-plans">Investment Plans</a>
            </li>
            <li>
              <a href="/how-it-works">How It Works</a>
            </li>
            <li>
              <a href="/support">Support</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/license">License</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p>
            Email: <span>invest@cryptoforbeginer.com</span>
          </p>
          <p>
            Phone: <span> +1 (913) 279-8830</span>
          </p>
          <p>Address: New York, NY, USA</p>

          <div className="footer-socials">
            <a
              href="https://wa.me/19132798830"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <FaSquareXTwitter />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-copy">
        &copy; {new Date().getFullYear()} CryptoForBeginer. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
