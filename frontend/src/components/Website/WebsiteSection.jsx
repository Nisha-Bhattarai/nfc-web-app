import React from "react";
import "./WebsiteSection.css";
import WebsiteLink from "./WebsiteLink";

const websites = [
  { url: "https://lunexacapital.com", label: "lunexacapital.com" },
  { url: "https://abc.com/lunexacapital", label: "abc.com/lunexacapital" },
];

const WebsiteSection = () => {
  return (
    <div className="website-section">
      <h3>OUR WEBSITES</h3>
      {websites.map((site, index) => (
        <WebsiteLink key={index} url={site.url} label={site.label} />
      ))}
    </div>
  );
};

export default WebsiteSection;
