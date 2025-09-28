import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="dot-pulse">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p className="loader-text">Crypto For Beginer</p>
    </div>
  );
};

export default Loader;
