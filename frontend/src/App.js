import {BrowserRouter, Routes, Route} from "react-router"
import PrimaryHome from "./pages/PrimaryHome/PrimaryHome.jsx";
import EventHome from "./pages/EventHome/EventHome.jsx";
import EventRegistration from "./pages/EventRegistration/EventRegistration.jsx";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<EventHome />} />
      <Route path="/event-registration" element={<EventRegistration />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;