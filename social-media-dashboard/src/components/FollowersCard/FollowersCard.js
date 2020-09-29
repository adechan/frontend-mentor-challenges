import React, { useEffect } from "react";
import ArrowUp from "../../assets/icon-up.svg";
import ArrowDown from "../../assets/icon-down.svg";
import { useDataLayerValue } from "../../DataLayer";
import { convertValue } from "../../reducer";
import "./FollowersCard.css";

function FollowersCard({
  icon,
  borderColour,
  account,
  followers,
  increasedToday,
  decreasedToday,
}) {
  const [{ isDarkMode }, dispatch] = useDataLayerValue();

  useEffect(() => {
    dispatch({
      type: "SET_LIST_OF_FOLLOWERS",
      listOfFollowers: followers,
    });
  }, []);

  return (
    <div
      className={
        "followersCard " +
        (isDarkMode ? "followersCard__dark" : "followersCard__light")
      }
      style={{ borderTopColor: borderColour }}
    >
      <div className="followersCard__app">
        <img src={icon} alt="" />
        <p>@{account}</p>
      </div>

      <div className="followersCard__followersCount">
        <h1
          className={
            isDarkMode
              ? "followersCard__followersCountDark"
              : "followersCard__followersCountLight"
          }
        >
          {convertValue(followers)}
        </h1>
        <p>FOLLOWERS</p>
      </div>

      {increasedToday ? (
        <div className="followersCard__today">
          <img src={ArrowUp} alt="" />
          <p className="followersCard__todayGreen">{increasedToday} Today</p>
        </div>
      ) : (
        <div className="followersCard__today">
          <img src={ArrowDown} alt="" />
          <p className="followersCard__todayRed">{decreasedToday} Today</p>
        </div>
      )}
    </div>
  );
}

export default FollowersCard;
