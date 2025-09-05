import React from "react";
import SiteFooter from "../SiteFooter/SiteFooter";
import './Layout.css'

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <div className="footer-container">
        <SiteFooter
        companyName="Captain Printworks"
        startYear={1986}
        privacyHref="/privacy-policy"
      />
      </div>
      
    </>
  );
};

export default Layout;
