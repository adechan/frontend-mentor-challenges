import React from "react";
import SwitchSlider from "../SwitchSlider/SwitchSlider";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__description">
        <h3 className="header__title">Social Media Dashboard</h3>
        <p className="header__followers">Total Followers: 23,004</p>
      </div>

      <SwitchSlider />
    </div>
  );
}

export default Header;
