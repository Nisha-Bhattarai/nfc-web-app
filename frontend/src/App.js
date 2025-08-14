import {BrowserRouter, Routes, Route} from "react-router"
import PrimaryHome from "./PrimaryHome/PrimaryHome";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<PrimaryHome />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;