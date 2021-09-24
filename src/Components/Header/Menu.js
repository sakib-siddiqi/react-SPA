import React from "react";
import "./Menu.css"
const Menu = () => {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" href="# ">
            Shop
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="# ">
            Order Review
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="# ">
            Manage inventory here
          </a>
        </li>
      </ul>
      
    </div>
  );
};

export default Menu;
