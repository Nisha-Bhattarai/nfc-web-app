import React from "react";

const SocialIcon = ({ icon: Icon, url, className }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Icon className={`icon ${className}`} />
    </a>
  );
};

export default SocialIcon;
