import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <span className="left-panel">
        <h3>Navbar</h3>
      </span>
      <span className="right-panel">
        <Link to={"/"} className="nav-link">
          Home
        </Link>
        <Link to={"/users"} className="nav-link">
          Users
        </Link>
      </span>
    </nav>
  );
};

export default Navbar;
