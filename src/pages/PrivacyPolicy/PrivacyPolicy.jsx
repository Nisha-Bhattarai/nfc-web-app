import React from "react";
import "./PrivacyPolicy.css"

export default function PrivacyPolicy({
  companyName = "Captain Printworks",
  appName = "NFC Business Card Management System",
  supportEmail = "webmaster@captainprint.com",
  effectiveDate = "September 4, 2025",
  lastUpdated = "September 4, 2025",
}) {
  const sections = [
    {
      id: "overview",
      title: "Privacy Policy",
      content: (
        <p>
          This Privacy Policy explains how {companyName} (“we,” “our,” or “us”) collects, uses, and protects
          information when someone scans an NFC business card or interacts with our platform.
        </p>
      ),
    },
    {
      id: "contact-collection",
      title: "Contact Information Collection",
      content: (
        <>
          <p>
            If you choose to fill out a contact form when scanning a card, we collect the personal details you provide
            (such as your name, email address, and phone number). This information is shared with the card owner so they
            can follow up with you directly.
          </p>
          <p>
            We do not use your contact details for any other purpose without your explicit consent, and we do not sell
            or share your personal information with third parties. You may request deletion of your information at any
            time by contacting us at{" "}
            <a className="link" href={`mailto:${supportEmail}`}>
              {supportEmail}
            </a>.
          </p>
        </>
      ),
    },
    {
      id: "information-we-collect",
      title: "1. Information We Collect",
      content: (
        <>
          <h3>a) Analytics Data (collected automatically)</h3>
          <ul>
            <li>Date and time of scan</li>
            <li>Device type (e.g., iOS, Android, browser)</li>
            <li>City-level location (e.g., Toronto, Scarborough, Vaughan)</li>
            <li>Scan counts (total scans, unique scans, scans by day/hour)</li>
          </ul>
          <p>
            To determine your city, we briefly process your IP address using a secure lookup service. The IP itself is
            not stored beyond this process. We do not collect exact addresses or GPS data.
          </p>

          <h3>b) Contact Information (only if you provide it)</h3>
          <p>
            If you choose to fill out the Exchange Contact form, we collect your name, email address, and phone number.
            This information is shared directly with the NFC Card Owner so they can follow up with you.
          </p>
        </>
      ),
    },
    {
      id: "how-we-use",
      title: "2. How We Use Your Information",
      content: (
        <ul>
          <li>Analytics data is used only to provide the card owner with aggregated insights about card usage.</li>
          <li>
            Contact information is shared only with the card owner you connected with. It is not used by us for
            marketing or shared with third parties.
          </li>
        </ul>
      ),
    },
    {
      id: "your-choices",
      title: "3. Your Choices",
      content: (
        <ul>
          <li>You can view the NFC Card Owner’s profile without submitting your personal details.</li>
          <li>Providing your contact details through the Exchange Contact form is completely optional.</li>
        </ul>
      ),
    },
    {
      id: "retention",
      title: "4. Retention",
      content: (
        <ul>
          <li>Analytics data is stored in aggregated form for reporting.</li>
          <li>Contact details remain in the card owner’s app until deleted by them or upon your request.</li>
        </ul>
      ),
    },
    {
      id: "your-rights",
      title: "5. Your Rights",
      content: (
        <>
          <p>Under Canadian privacy law, you have the right to:</p>
          <ul>
            <li>Request deletion of your submitted contact details.</li>
            <li>Request confirmation of what data has been shared with the card owner.</li>
          </ul>
          <p>
            To make a request, please contact us at{" "}
            <a className="link" href={`mailto:${supportEmail}`}>
              {supportEmail}
            </a>
            .
          </p>
        </>
      ),
    },
    {
      id: "security",
      title: "6. Security",
      content: (
        <p>
          We use encryption and secure storage methods to protect your data. Only the card owner you shared your details
          with can access them.
        </p>
      ),
    },
    {
      id: "updates",
      title: "7. Updates to This Policy",
      content: (
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated
          effective date.
        </p>
      ),
    },
    {
      id: "contact",
      title: "Contact",
      content: (
        <p>
          If you have any questions, please contact:
          <br />
          {companyName}
          <br />
          <a className="link" href={`mailto:${supportEmail}`}>
            {supportEmail}
          </a>
        </p>
      ),
    },
  ];

  return (
    <div className="policy-container">
      <header className="policy-header">
        <h1>Privacy Policy</h1>
        <p className="subtitle">{appName}</p>
      </header>

      <div className="policy-grid">
        <nav className="toc" aria-label="Table of contents">
          <strong>On this page</strong>
          <ul>
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>{s.title}</a>
              </li>
            ))}
          </ul>
          <button
            className="print-btn"
            type="button"
            onClick={() => window.print()}
            aria-label="Print Privacy Policy"
          >
            Print
          </button>
        </nav>

        <main className="policy-content">
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="section" aria-labelledby={`${s.id}-title`}>
              <h2 id={`${s.id}-title`}>{s.title}</h2>
              <div className="section-body">{s.content}</div>
            </section>
          ))}

          <footer className="meta">
            <span>Effective: {effectiveDate}</span>
            <span className="dot">•</span>
            <span>Last Updated: {lastUpdated}</span>
          </footer>
        </main>
      </div>
    </div>
  );
}
