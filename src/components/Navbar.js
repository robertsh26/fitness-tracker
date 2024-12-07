import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#333", color: "#fff" }}>
      <ul style={{ display: "flex", listStyle: "none", gap: "1rem" }}>
        <li>
          <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Dashboard</Link>
        </li>
        <li>
          <Link to="/workouts" style={{ color: "#fff", textDecoration: "none" }}>Workouts</Link>
        </li>
        <li>
          <Link to="/profile" style={{ color: "#fff", textDecoration: "none" }}>Profile</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
