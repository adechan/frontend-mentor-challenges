import React from "react";
import "../Card/Card.css";

function Card({ image, name, age, city, followers, likes, photos }) {
  return (
    <div className="card">
      <div className="card__header"></div>
      <div className="card__credentials">
        <img src={image} alt="" />
        <div className="card__profile">
          <div className="card__userInfo">
            <p>{name}</p>
            <p>{age}</p>
          </div>
          <p>{city}</p>
        </div>
      </div>
      <dv className="card__info">
        <div className="card__infoNumbers">
          <p>{followers}</p>
          <p>Followers</p>
        </div>

        <div className="card__infoNumbers">
          <p>{likes}</p>
          <p>Likes</p>
        </div>

        <div className="card__infoNumbers">
          <p>{photos}</p>
          <p>Photos</p>
        </div>
      </dv>
    </div>
  );
}

export default Card;
