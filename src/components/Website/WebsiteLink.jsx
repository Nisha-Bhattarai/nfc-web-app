import React from "react";
import { FaLink } from "react-icons/fa";

// Correct default export
const WebsiteLink = ({ url, label }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="website-link">
      <FaLink className="icon" />
      <p>{label}</p>
    </a>
  );
};

export default WebsiteLink; 
