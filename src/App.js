// App.jsx
import { BrowserRouter, Routes, Route, useParams, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import PrimaryHome from "./pages/PrimaryHome/PrimaryHome.jsx";
import EventHome from "./pages/EventHome/EventHome.jsx";
import EventRegistration from "./pages/EventRegistration/EventRegistration.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy.jsx";
import Layout from "./components/Layout/Layout";
import LoadingScreen from "./components/Loading/LoadingScreen";

// Simple 404 page
function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}

// Component to handle "/" with dynamic userId
function HomeWrapper() {
  const { userId } = useParams();
  const [loading, setLoading] = useState(true);
  const [homeType, setHomeType] = useState(null); // "primary" or "event"
  const [error, setError] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    console.log("Userid=====> ", userId)
    if (!userId) return;

    const fetchHomeType = async () => {
      try {
        const res = await fetch(`https://nfc-be.onrender.com/api/v1/profile/${userId}`);
        if (!res.ok) throw new Error("User not found");

        const data = await res.json();
        console.log("Data ===>", JSON.stringify(data))
        if (!data?.user) {
          setError(true); // invalid userId
        } else if (data.primaryProfile) {
          setHomeType("PRIMARY");
          setUserData(data);
        } else if (data.eventProfile) {
          setHomeType("EVENT");
          setUserData(data);
        } else {
          // user exists but no profiles
          setHomeType(null);
        }
      } catch (err) {
        console.error("API Error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchHomeType();
  }, [userId]);

  if (loading) return <LoadingScreen />;
  if (error) return <Navigate to="/404" replace />;

  if (!homeType) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>No profiles found for this user.</h2>
        <p>Please create a profile to continue.</p>
      </div>
    );
  }

  return homeType === "PRIMARY" ? <PrimaryHome user={userData?.user} profile={userData?.primaryProfile} /> : <EventHome user={userData?.user} profile={userData?.eventProfile} />;
}

function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
           {/* Event registration */}
        <Route path="/event-registration" element={<EventRegistration />} />
        {/* Dynamic userId route */}
        <Route path="/:userId" element={<HomeWrapper />} />

     

        {/* Privacy Policy */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        {/* 404 Page */}
        <Route path="/404" element={<NotFound />} />

        {/* Optional root fallback */}
        <Route path="/" element={<p>Please provide a user ID in the URL, e.g., /685c0ddcd82e52b759079dec</p>} />

        {/* Catch all unmatched routes */}
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Layout>
    </BrowserRouter>
  );
}

export default App;
