import React from "react";
import { FaInstagram, FaTiktok, FaLinkedin, FaYoutube, FaFacebook, FaSnapchat  } from "react-icons/fa";
import SocialIcon from "./SocialIcon";
import "./Social.css";

const socialLinks = [
  { icon: FaFacebook, url: "https://facebook.com", className: "facebook" },
  { icon: FaInstagram, url: "https://instagram.com", className: "instagram" },
  { icon: FaTiktok, url: "https://tiktok.com", className: "tiktok" },
  { icon: FaSnapchat, url: "", className: "snapchat" },
  { icon: FaLinkedin, url: "https://linkedin.com", className: "linkedin" },
  { icon: FaYoutube, url: "https://youtube.com", className: "youtube" },
];

const SocialSection = () => {
  return (
    <div className="social-section">
      <h3>FOLLOW US</h3>
      <div className="social-icons">
        {socialLinks.map((item, index) => (
          <SocialIcon
            key={index}
            icon={item.icon}
            url={item.url}
            className={item.className}
          />
        ))}
      </div>
    </div>
  );
};

export default SocialSection;
