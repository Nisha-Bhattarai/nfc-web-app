import { useEffect, useState } from "react";

export default function HubspotConnect() {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const uid = params.get("userId");

    if (uid) {
      setUserId(uid);
      // Delay redirect slightly so message is visible
      setTimeout(() => {
        window.location.href = `https://nfc-be.onrender.com/api/v1/hubspotauth/connect?userId=${uid}`;
      }, 500); // 0.5 seconds delay
    }
  }, []);

  return (
    <div style={{
      fontFamily: "sans-serif",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      flexDirection: "column",
      color: 'orange'
    }}>
      {userId ? <p>Redirecting to HubSpot...</p> : <p>Loading...</p>}
    </div>
  );
}
