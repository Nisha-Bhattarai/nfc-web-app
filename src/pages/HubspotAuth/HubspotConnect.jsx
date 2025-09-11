import { useEffect, useState } from "react";

export default function HubspotConnect() {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const uid = params.get("userId");

    if (uid) {
      setUserId(uid);

      // Fallback redirect after delay
      const timer = setTimeout(() => {
        window.location.href = `https://nfc-be.onrender.com/api/v1/hubspotauth/connect?userId=${uid}`;
      }, 1000);

      return () => clearTimeout(timer);
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
      {userId ? (
        <>
          <p>Redirecting to HubSpot...</p>
          <p>
            <a
              href={`https://nfc-be.onrender.com/api/v1/hubspotauth/connect?userId=${userId}`}
              style={{ color: 'orange', textDecoration: 'underline' }}
            >
              Click here if not redirected
            </a>
          </p>
        </>
      ) : <p>Loading...</p>}
    </div>
  );
}
