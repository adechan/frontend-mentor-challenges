import React from "react";
import FacebookIcon from "../../assets/icon-facebook.svg";
import ArrowUp from "../../assets/icon-up.svg";
import { useDataLayerValue } from "../../DataLayer";
import "./FollowersCard.css";

function FollowersCard() {
  const [{ isDarkMode }, dispatch] = useDataLayerValue();
  return (
    <div
      className={
        "followersCard " +
        (isDarkMode ? "followersCard__dark" : "followersCard__light")
      }
    >
      <div className="followersCard__app">
        <img src={FacebookIcon} alt="" />
        <p>@nathanf</p>
      </div>

      <div className="followersCard__followersCount">
        <h1
          className={
            isDarkMode
              ? "followersCard__followersCountDark"
              : "followersCard__followersCountLight"
          }
        >
          1987
        </h1>
        <p>FOLLOWERS</p>
      </div>

      <div className="followersCard__today">
        <img src={ArrowUp} alt="" />
        <p>12 Today</p>
      </div>
    </div>
  );
}

export default FollowersCard;
