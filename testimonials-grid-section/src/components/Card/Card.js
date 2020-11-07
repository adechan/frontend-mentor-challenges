import React from "react";
import "./Card.css";

function Card({
  image,
  name,
  verified,
  description,
  quote,
  color,
  width,
  height,
}) {
  return (
    <div
      className="card"
      style={{
        backgroundColor: { color },
        width: { width },
        height: { height },
      }}
    >
      <div className="card__personalInfo">
        <img src={image} alt="" />

        <div className="card__name">
          <p>{name}</p>
          <p>{verified}</p>
        </div>
      </div>
      <p className="card__description">{description}</p>

      <q className="card__quote">{quote}</q>
    </div>
  );
}

export default Card;
