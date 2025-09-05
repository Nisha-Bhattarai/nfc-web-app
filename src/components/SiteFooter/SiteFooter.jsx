import React from "react";
import "./SiteFooter.css"

const SiteFooter = ({
  companyName = "Captain Printworks",
  startYear = 1986,
  privacyHref = "/privacy-policy",
  align = "center",     
  fixed = false,        
  dark = false,        
}) => {
  const y = new Date().getFullYear();
  const yearText = startYear && startYear < y ? `${startYear}–${y}` : `${y}`;

  return (
    <footer
      className={`site-footer ${fixed ? "is-fixed" : ""} ${dark ? "is-dark" : ""}`}
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="footer-inner" data-align={align}>
        <span>© {yearText} {companyName}</span>
        {privacyHref && (
          <>
            <span className="dot" aria-hidden="true">•</span>
            <a className="link" href={privacyHref}>Privacy Policy</a>
          </>
        )}
      </div>
    </footer>
  );
};

export default SiteFooter;