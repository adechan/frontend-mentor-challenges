import React from "react";
import ArrowUp from "../../assets/icon-up.svg";
import ArrowDown from "../../assets/icon-down.svg";
import { useDataLayerValue } from "../../DataLayer";
import { convertValue } from "../../reducer";
import "./OverviewCard.css";

function OverviewCard({
  title,
  icon,
  count,
  increasedPercent,
  decreasedPercent,
}) {
  const [{ isDarkMode }, dispatch] = useDataLayerValue();

  return (
    <div
      className={
        "overviewCard " +
        (isDarkMode ? "overviewCard__dark" : "overviewCard__light")
      }
    >
      <div className="overviewCard__top">
        <p>{title}</p>
        <img src={icon} alt="" />
      </div>

      <div className="overviewCard__bottom">
        <h1
          className={
            isDarkMode ? "overviewCard__countDark" : "overviewCard__countLight"
          }
        >
          {convertValue(count)}
        </h1>

        {increasedPercent != 0 ? (
          <div className="overviewCard__percent">
            <img src={ArrowUp} alt="" />
            <p className="overviewCard__percentGreen">{increasedPercent}%</p>
          </div>
        ) : (
          <div className="overviewCard__percent">
            <img src={ArrowDown} alt="" />
            <p className="overviewCard__percentRed">{decreasedPercent}%</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default OverviewCard;
