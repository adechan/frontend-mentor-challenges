import React from "react";
import FacebookIcon from "../../assets/icon-facebook.svg";
import ArrowUp from "../../assets/icon-up.svg";
import "./FollowersCard.css";

function FollowersCard() {
  return (
    <div className="followersCard">
      <div className="followersCard__app">
        <img src={FacebookIcon} alt="" />
        <p>@nathanf</p>
      </div>

      <div className="followersCard__followersCount">
        <h1>1987</h1>
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
