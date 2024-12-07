import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import WorkoutCard from "./components/WorkoutCard";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/workouts" element={<WorkoutCard />} />
          <Route path="/navbars" element={<Navbar />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

