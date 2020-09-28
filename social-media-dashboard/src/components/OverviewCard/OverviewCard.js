import React from "react";
import FacebookIcon from "../../assets/icon-facebook.svg";
import ArrowUp from "../../assets/icon-up.svg";
import { useDataLayerValue } from "../../DataLayer";
import "./OverviewCard.css";

function OverviewCard() {
  const [{ isDarkMode }, dispatch] = useDataLayerValue();

  return (
    <div
      className={
        "overviewCard " +
        (isDarkMode ? "overviewCard__dark" : "overviewCard__light")
      }
    >
      <div className="overviewCard__top">
        <p>Page Views</p>
        <img src={FacebookIcon} alt="" />
      </div>

      <div className="overviewCard__bottom">
        <h1
          className={
            isDarkMode ? "overviewCard__countDark" : "overviewCard__countLight"
          }
        >
          87
        </h1>

        <div className="overviewCard__percent">
          <img src={ArrowUp} alt="" />
          <p>3%</p>
        </div>
      </div>
    </div>
  );
}

export default OverviewCard;
