import React from "react";
import { useDataLayerValue } from "../../DataLayer";
import SwitchSlider from "../SwitchSlider/SwitchSlider";
import "./Header.css";

function Header() {
  const [{ isDarkMode }, dispatch] = useDataLayerValue();

  return (
    <div
      className={"header " + (isDarkMode ? "header__dark" : "header__light")}
    >
      <div
        className={
          "header__description " +
          (isDarkMode ? "header__descriptionDark" : "header__descriptionLight")
        }
      >
        <h3
          className={
            "header__title " +
            (isDarkMode ? "header__titleDark" : "header__titleLight")
          }
        >
          Social Media Dashboard
        </h3>
        <p className="header__followers">Total Followers: 23,004</p>
      </div>

      <SwitchSlider />
    </div>
  );
}

export default Header;
