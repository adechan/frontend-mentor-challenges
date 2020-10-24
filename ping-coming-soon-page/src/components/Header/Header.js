import React from "react";
import Logo from "../../assets/logo.svg";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img src={Logo} alt="" />
      <div className="header__title">
        <p>
          We are launching <strong>soon!</strong>
        </p>
        <p>Subscribe and get notified</p>
      </div>
    </div>
  );
}

export default Header;
