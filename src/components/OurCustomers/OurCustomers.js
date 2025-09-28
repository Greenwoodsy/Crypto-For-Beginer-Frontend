



import React from "react";
import {
  Award,
  BarChart,
  Target,
  Users,
  Shield,
  Lightbulb,
} from "lucide-react";
import member1 from "../../Assets/lasssst.jpg";
import member2 from "../../Assets/image-one.jpg";
import member3 from "../../Assets/images-six.jpg";
import member4 from "../../Assets/image-four.jpg";
import member5 from "../../Assets/images-five.jpg"; // 👉 add two new images
import member6 from "../../Assets/image-two.jpg";
import "./OurCustomers.css";

const teamMembers = [
  {
    id: 1,
    name: "Angela Brooks",
    title: "Portfolio Director",
    image: member1,
    description:
      "Angela specializes in tailoring client portfolios to match long-term wealth-building goals with minimal risk.",
    icon: <Award size={28} />,
  },
  {
    id: 2,
    name: "Robert Hayes",
    title: "Risk Management Lead",
    image: member2,
    description:
      "Robert ensures all client assets are protected with advanced strategies for risk assessment and reduction.",
    icon: <Shield size={28} />,
  },
  {
    id: 3,
    name: "Priya Desai",
    title: "Investment Strategist",
    image: member3,
    description:
      "Priya identifies global opportunities, providing insights on high-growth markets across multiple sectors.",
    icon: <BarChart size={28} />,
  },
  {
    id: 4,
    name: "Daniel Evans",
    title: "Client Relations Manager",
    image: member4,
    description:
      "Daniel leads client engagement, ensuring trust, transparency, and exceptional investor experience.",
    icon: <Users size={28} />,
  },
  {
    id: 5,
    name: "Maria Rossi",
    title: "Innovation & Growth Analyst",
    image: member5,
    description:
      "Maria drives research into fintech innovations, connecting clients with cutting-edge investment tools.",
    icon: <Lightbulb size={28} />,
  },
  {
    id: 6,
    name: "James Thompson",
    title: "Strategic Planner",
    image: member6,
    description:
      "James designs long-term financial plans, aligning investments with clients’ life goals and milestones.",
    icon: <Target size={28} />,
  },
];

const OurCustomers = () => {
  return (
    <section className="team-section">
      <h2 className="team-header">Meet Our Expert Team</h2>
      <p className="team-subtitle">
        A dedicated group of professionals driving success, innovation, and
        trust in every investment journey.
      </p>
      <div className="team-container">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-card fade-in-up">
            <div className="team-image-wrapper">
              <img
                src={member.image}
                alt={member.name}
                className="team-image"
              />
            </div>
            <h3 className="team-name">{member.name}</h3>
            <p className="team-title">{member.title}</p>
            <div className="team-icon">{member.icon}</div>
            <p className="team-description">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurCustomers;
