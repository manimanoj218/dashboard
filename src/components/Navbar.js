import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark d-flex justify-content-center">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" exact={true} to="/">
              Raw
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/customized">
              Categorized
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
