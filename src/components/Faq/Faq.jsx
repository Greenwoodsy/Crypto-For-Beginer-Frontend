import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "./Faq.css";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-container" id="faq">
      <div className="faq-wrapper">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-subtitle">
          Everything you need to know about our platform — simple, clear, and user-friendly.
        </p>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "active" : ""}`}
              onClick={() => toggleAnswer(index)}
            >
              <div className="faq-question">
                <p>{item.question}</p>
                <MdOutlineKeyboardArrowDown
                  className={`faq-icon ${openIndex === index ? "rotate" : ""}`}
                />
              </div>
              <div
                className="faq-answer"
                style={{ maxHeight: openIndex === index ? "500px" : "0px" }}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const faqData = [
  {
    question: "How do I create an investment account?",
    answer:
      "Click the Sign Up button, complete your details, and verify your email. Once verified, Upload kyc. Then you can log in and start investing.",
  },
  {
    question: "How do I deposit funds?",
    answer:
      "Go to your dashboard, select 'Deposit', and follow the instructions. Deposits are processed instantly in most cases.",
  },
  {
    question: "What is the minimum amount I can invest?",
    answer:
      "You can start investing with as little as 100, making it easy for both beginners and experienced investors.",
  },
  {
    question: "Can I withdraw my funds anytime?",
    answer:
      "Yes. Withdrawals are available 24/7. Most withdrawals are processed within 1–2 business days depending on the payment method.",
  },
  {
    question: "How do I track my investment returns?",
    answer:
      "Your dashboard provides real-time updates on your deposits, active investments, and profits earned.",
  },
  {
    question: "Can I reinvest my earnings?",
    answer:
      "Absolutely. You can choose to withdraw your earnings or reinvest them directly into a new plan for compounding growth.",
  },
  {
    question: "Do you charge hidden fees?",
    answer:
      "No. All fees, such as transaction charges, are clearly displayed before you confirm any deposit or withdrawal.",
  },
  {
    question: "Is my money secure?",
    answer:
      "Yes. We use bank-grade encryption, secure payment gateways, and regular audits to keep your funds safe at all times.",
  },
];


export default Faq;
