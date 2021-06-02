import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar(props) {
  return (
    <div id="navigation">
      <div id="title">
        <h3>Dashboard</h3>
      </div>

      <div id="nav_item">
        <Link to="/home">Home</Link>
      </div>
      <div id="nav_item">
        <Link to="/searchChild"> Search Patient</Link>
      </div>
      <div id="nav_item">
        <Link to="/searchParent"> Search Parent</Link>
      </div>
    </div>
  );
}
