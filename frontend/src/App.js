import {BrowserRouter, Routes, Route} from "react-router"
import PrimaryHome from "./pages/PrimaryHome/PrimaryHome.jsx";
import EventHome from "./pages/EventHome/EventHome.jsx";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<EventHome />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;