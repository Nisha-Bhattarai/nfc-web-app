import { useEffect } from "react";

export default function HubspotConnect() {
  useEffect(() => {
    // Get query params from current URL
    const params = new URLSearchParams(window.location.search);
    const userId = params.get("userId");

    if (userId) {
      window.location.href = `https://nfc-be.onrender.com/api/v1/hubspotauth/connect?userId=${userId}`;
    }
  }, []);

  return (
    <div style={{
        fontFamily: "sans-serif",
        height: "100vh", // full viewport height
        display: "flex", // enable flexbox
        justifyContent: "center", // center horizontally
        alignItems: "center", // center vertically
        textAlign: "center",
      }}>
      <p>Redirecting to HubSpot...</p>
    </div>
  );
}
