import React from "react";
import "./navBarStyle.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Top</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/demo">Demo</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
