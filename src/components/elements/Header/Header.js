import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="rmdb-header">
      <div className="rmdb-header-content">
        <Link style={{ textDecoration: "none" }} to="/">
          <h1>
            Movie <i>Browser</i>
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Header;
