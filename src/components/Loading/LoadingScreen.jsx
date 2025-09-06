// LoadingScreen.jsx
import React from "react";
import "./LoadingScreen.css";

const LoadingScreen = () => {
  return (
    <div className="loading-overlay">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

export default LoadingScreen;
