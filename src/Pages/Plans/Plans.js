import React from "react";
import { NavLink } from "react-router-dom";
import "./Plans.css";
import Footer from "../../components/Footer/Footer";

const plansData = [
  {
    title: "Basic Plan",
    percent: "10",
    price: "$50 - $250",
    duration: "1-Day Duration",
    description:
      "The perfect starting point for new investors. Test the waters with minimal risk while earning steady daily profits.",
    benefits: [
      "Beginner-friendly entry",
      "Daily payout within 24 hours",
      "No hidden charges",
      "24/7 support",
    ],
  },
  {
    title: "Standard Plan",
    percent: "15",
    price: "$300 - $500",
    duration: "1-Day Duration",
    description:
      "Designed for growing investors ready to scale up. Reliable daily returns within a budget-friendly range.",
    benefits: [
      "Steady daily ROI",
      "Affordable investment range",
      "Flexible withdrawal options",
      "Dedicated support anytime",
    ],
  },
  {
    title: "Premium Plan",
    percent: "18",
    price: "$600 - $1,000",
    duration: "1-Day Duration",
    description:
      "A balanced package for those seeking stronger returns without taking too much risk. Great for sustainable growth.",
    benefits: [
      "Moderate daily ROI",
      "Instant withdrawals on maturity",
      "Personal portfolio manager",
      "Monthly growth reports",
    ],
  },
  {
    title: "Elite Plan",
    percent: "23",
    price: "$1,500 - $5,000",
    duration: "1-Day Duration",
    description:
      "Crafted for experienced investors who want higher rewards and premium services.",
    benefits: [
      "Top-tier daily ROI",
      "Priority investment access",
      "Fast-tracked payouts",
      "Exclusive guidance & support",
    ],
  },
];


const Plans = () => {
  return (
    <>
      <section className="plans-wrapper">
        <header className="plans-hero">
          <h1 className="plans-title">CryptoForBeginer Investment Plans</h1>
          <p className="plans-subtitle">
            Choose from our carefully designed packages and start your journey
            to financial freedom. Each plan is tailored to meet the needs of
            investors at every level.
          </p>
        </header>

        <div className="plans-grid">
          {plansData.map((plan, index) => (
            <div className="plan-card" key={index}>
              <div className="plan-header">
                <span className="plan-percent">{plan.percent}% ROI</span>
              </div>

              <div className="plan-body">
                <h2 className="plan-name">{plan.title}</h2>
                <p className="plan-duration">{plan.duration}</p>
                <p className="plan-price">{plan.price}</p>
                <p className="plan-description">{plan.description}</p>

                <ul className="plan-benefits">
                  {plan.benefits?.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
              </div>

              <div className="plan-footer">
                <NavLink to="/start-invest" className="plan-btn">
                  Get Started
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Plans;
