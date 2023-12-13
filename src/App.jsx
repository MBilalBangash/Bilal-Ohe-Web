import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";

import {
  Bussiness,
  Home,
  Hsk,
  Information,
  // Login,
  Mbbs,
  StudyInChina,
  TeachingChines,
  NotFound
} from "./pages";
import { Footer } from "./pages";
import { Service } from "./pages";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/study" element={<StudyInChina />} />
        <Route path="/teaching" element={<TeachingChines />} />
        <Route path="/bussniess" element={<Bussiness />} />
        <Route path="/hsk" element={<Hsk />} />
        <Route path="/mbbs" element={<Mbbs />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/info" element={<Information />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
