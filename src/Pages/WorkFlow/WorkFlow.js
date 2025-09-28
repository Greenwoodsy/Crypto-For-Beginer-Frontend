import React from "react";
import "./WorkFlow.css";
import { FaUserAlt, FaCoins, FaUserFriends } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { BsFillPatchCheckFill, BsBank2 } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
import Footer from "../../components/Footer/Footer";

const steps = [
  {
    icon: <FaUserAlt />,
    title: "Create Your Account",
    desc: "Sign up quickly to unlock our investment platform.",
  },
  {
    icon: <MdMarkEmailRead />,
    title: "Verify Your Email",
    desc: "Activate your account by confirming your email address.",
  },
  {
    icon: <BsFillPatchCheckFill />,
    title: "Complete KYC",
    desc: "Submit verification documents for compliance approval.",
  },
  {
    icon: <BsBank2 />,
    title: "Fund Your Wallet",
    desc: "Deposit using bank transfer, card, or crypto assets.",
  },
  {
    icon: <FaCoins />,
    title: "Choose an Investment Plan",
    desc: "Select a plan that best fits your financial goals.",
  },
  {
    icon: <GiReceiveMoney />,
    title: "Manage Transactions",
    desc: "Send, receive, and track funds seamlessly.",
  },
  {
    icon: <FaUserFriends />,
    title: "Refer & Earn",
    desc: "Invite friends to earn rewards and bonuses.",
  },
];

const WorkFlow = () => {
  return (
    <>
      <section className="workflow-timeline">
        <h1 className="workflow-title">How It Works</h1>
        <p className="workflow-subtitle">
          Our step-by-step process makes investing easy, secure, and rewarding.
        </p>
        <div className="timeline">
          {steps.map((step, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-icon">{step.icon}</div>
              <div className="timeline-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                <span className="timeline-step">Step {index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default WorkFlow;
