import React from "react";
import FacebookIcon from "../../assets/icon-facebook.svg";
import ArrowUp from "../../assets/icon-up.svg";
import "./OverviewCard.css";

function OverviewCard() {
  return (
    <div className="overviewCard">
      <div className="overviewCard__top">
        <p>Page Views</p>
        <img src={FacebookIcon} alt="" />
      </div>

      <div className="overviewCard__bottom">
        <h1>87</h1>

        <div className="overviewCard__percent">
          <img src={ArrowUp} alt="" />
          <p>3%</p>
        </div>
      </div>
    </div>
  );
}

export default OverviewCard;
