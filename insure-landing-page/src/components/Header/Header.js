import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.svg";

function Header() {
  return (
    <div className="header">
      <img src={Logo} alt="" />
      <div className="header__links">
        <p>HOW WE WORK</p>
        <p>BLOG</p>
        <p>ACCOUNT</p>
        <p>VIEW PLANS</p>
      </div>
    </div>
  );
}

export default Header;
