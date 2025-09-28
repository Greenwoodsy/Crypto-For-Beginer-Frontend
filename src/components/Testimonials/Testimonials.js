import React, { useState } from "react";
import { Star } from "lucide-react";
import "./Testimonials.css";

const testimonials = [
  {
    text: "This platform gave me the confidence to expand my investments overseas. The team explained every detail and my returns have been solid month after month.",
    name: "Laura Mitchell",
    role: "Business Consultant",
  },
  {
    text: "I was nervous about shifting from traditional banking to an investment portfolio, but their guidance made the transition smooth and profitable.",
    name: "David Kim",
    role: "Healthcare Entrepreneur",
  },
  {
    text: "Their portfolio diversification strategy protected me during market downturns and still delivered growth. That’s real expertise at work.",
    name: "Olivia White",
    role: "Software Engineer",
  },
  {
    text: "Trustworthy, transparent, and reliable. I’ve withdrawn multiple times without issues, and my portfolio keeps compounding steadily.",
    name: "Ahmed Musa",
    role: "Retail Investor",
  },
  {
    text: "The personalized advisory sessions set them apart. I finally feel like my investments are working toward my actual life goals.",
    name: "Rebecca Jones",
    role: "Marketing Executive",
  },
  {
    text: "I’ve tried other platforms, but this one is by far the most professional. Their insights on global markets keep me ahead of the curve.",
    name: "Chen Wei",
    role: "Logistics Manager",
  },
  {
    text: "I wanted passive income without stress — and that’s exactly what I’ve gotten here. My portfolio feels balanced and secure.",
    name: "Sarah Johnson",
    role: "Freelance Designer",
  },
  {
    text: "The combination of strategy, transparency, and consistent payouts makes this my go-to investment partner for the long term.",
    name: "Mark Anderson",
    role: "Property Developer",
  },
  {
    text: "Their risk management approach gave me peace of mind. Even during volatile markets, my investments stayed on track.",
    name: "Isabella Rossi",
    role: "Fashion Entrepreneur",
  },
  {
    text: "Finally, a platform that delivers more than promises. My portfolio growth has exceeded my expectations year after year.",
    name: "John Peterson",
    role: "Civil Engineer",
  },
  {
    text: "They don’t just manage money — they educate. I feel more empowered and financially literate thanks to their approach.",
    name: "Hannah Lee",
    role: "University Lecturer",
  },
  {
    text: "The platform’s transparency and regular updates make me feel like a true partner, not just another client.",
    name: "Kwame Mensah",
    role: "Agribusiness Investor",
  },
  {
    text: "From onboarding to withdrawals, everything is seamless. Their customer support is also outstanding.",
    name: "Emma Williams",
    role: "Corporate Lawyer",
  },
  {
    text: "Their global outlook on investments helped me diversify beyond my local economy — a real game changer.",
    name: "Mohammed Al-Farsi",
    role: "Energy Consultant",
  },
  {
    text: "Every payout has been on time, every projection realistic. That level of consistency builds trust.",
    name: "Sophia Grant",
    role: "Real Estate Broker",
  },
];


const Testimonials = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleTestimonials = showAll ? testimonials : testimonials.slice(0, 4);

  return (
    <section className="testimonials">
      <h2 className="testimonials-title">What Our Investors Say</h2>
      <p className="testimonials-subtitle">
        Real feedback from clients who trusted us to manage and grow their wealth.
      </p>

      <div className="testimonials-grid">
        {visibleTestimonials.map((t, idx) => (
          <div key={idx} className="testimonial-card">
            <div className="testimonial-user">
              <div className="testimonial-avatar">{t.name[0]}</div>
              <div>
                <h4 className="testimonial-name">{t.name}</h4>
                <p className="testimonial-role">{t.role}</p>
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#FFD700" stroke="#FFD700" />
                  ))}
                </div>
              </div>
            </div>
            <p className="testimonial-text">“{t.text}”</p>
          </div>
        ))}
      </div>

      <button
        className="show-more-btn"
        onClick={() => setShowAll((prev) => !prev)}
      >
        {showAll ? "Show Less" : "Show More"}
      </button>
    </section>
  );
};

export default Testimonials;
