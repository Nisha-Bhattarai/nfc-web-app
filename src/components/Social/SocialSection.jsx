import React from "react";
import { FaInstagram, FaTiktok, FaLinkedin, FaYoutube, FaFacebook, FaSnapchat } from "react-icons/fa";
import SocialIcon from "./SocialIcon";
import "./Social.css";

const iconMap = {
  facebook: { icon: FaFacebook, className: "facebook" },
  instagram: { icon: FaInstagram, className: "instagram" },
  tiktok: { icon: FaTiktok, className: "tiktok" },
  snapchat: { icon: FaSnapchat, className: "snapchat" },
  linkedin: { icon: FaLinkedin, className: "linkedin" },
  youtube: { icon: FaYoutube, className: "youtube" },
};

const SocialSection = ({ socialMedia }) => {
  return (
    <div className="social-section">
      <h3>FOLLOW US</h3>
      <div className="social-icons">
        {socialMedia?.map((item, index) => {
          const mapped = iconMap[item.platform.toLowerCase()];
          // Skip unknown platforms
          if (!mapped) return null; 
          return (
            <SocialIcon
              key={index}
              icon={mapped.icon}
              url={item.url}
              className={mapped.className}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SocialSection;
