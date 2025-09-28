import React, { useEffect, useState } from "react";
import "./Advert.css";

const Advert = () => {
  const sentences = [
  "Daniel joined with $120 in the Basic Plan.",
  "Grace invested $220 in the Basic Plan.",
  "Michael secured $350 in the Standard Plan.",
  "Olivia boosted her portfolio with $450 in the Standard Plan.",
  "Ethan committed $700 to the Premium Plan.",
  "Sophia added $950 in the Premium Plan.",
  "William upgraded with $2,000 in the Elite Plan.",
  "Amelia deposited $150 into the Basic Plan.",
  "Noah diversified with $300 in the Standard Plan.",
  "Isabella secured $800 in the Premium Plan.",
  "James boosted his future with $1,500 in the Elite Plan.",
  "Mia just started an Elite Plan with $2,500.",
  "Benjamin entered the Premium Plan with $900.",
  "Harper locked $4,000 into the Elite Plan.",
  "Lucas invested $200 in the Basic Plan.",
  "Charlotte secured $400 in the Standard Plan.",
  "Henry grew his wealth with $850 in the Premium Plan.",
  "Ava contributed $3,500 to the Elite Plan.",
  "Alexander launched into the Premium Plan with $950.",
  "Ella entered the Elite Plan with $5,000.",
];

  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false); // fade out
      setTimeout(() => {
        setIndex(() => Math.floor(Math.random() * sentences.length)); // pick random
        setVisible(true); // fade in
      }, 500);
    }, 4000); // every 4s

    return () => clearInterval(interval);
  }, [sentences.length]);

  return (
    <div className={`advert-container ${visible ? "show" : "hide"}`}>
      <div className="advert-text">{sentences[index]}</div>
    </div>
  );
};

export default Advert;
