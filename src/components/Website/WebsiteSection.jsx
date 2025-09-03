import React from "react";
import "./WebsiteSection.css";
import WebsiteLink from "./WebsiteLink";

const WebsiteSection = ({sites}) => {
  return (
    <div className="website-section">
      <h3>OUR WEBSITES</h3>
      {sites.map((site, index) => (
        <WebsiteLink key={index} url={site.url} label={site.url} />
      ))}
    </div>
  );
};

export default WebsiteSection;
