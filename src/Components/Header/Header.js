import React from "react";
import Logo from "../../images/logo.png";
import "./header.css";
import Menu from "./Menu";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark my-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="# ">
          <img src={Logo} alt="" width="100" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Menu />
      </div>
    </nav>
  );
};

export default Header;
