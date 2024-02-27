import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const About = lazy(() => import("./components/About.jsx"));
const Tools = lazy(() => import("./components/Tools.jsx"));
const Contact = lazy(() => import("./components/Contact.jsx"));
const Works = lazy(() => import("./components/Works.jsx"));

function App() {
  return (
    <Router>
      <div className="flex flex-col md:flex-row overflow-y-auto min-h-screen bg-slate-50">
        <Navbar />
        <div className="flex-1 m-5 flex justify-center">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/works" element={<Works />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </Router>
  );
}

export default App;
