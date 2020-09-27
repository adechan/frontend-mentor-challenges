import React from "react";
import "./ReviewCard.css";

function ReviewCard({ name, avatar, buyerType, description }) {
  return (
    <div className="reviewCard">
      <div className="reviewCard__info">
        <img className="reviewCard__avatar" src={avatar} alt="" />
        <div className="reviewCard__personalInfo">
          <p className="reviewCard__name">{name}</p>
          <p className="reviewCard__buyer">{buyerType} Buyer</p>
        </div>
      </div>

      <p className="reviewCard__description">“{description}”</p>
    </div>
  );
}

export default ReviewCard;
