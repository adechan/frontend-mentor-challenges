import React from "react";
import "./Card.css";

function Card({ title, price, storage, users, sendGB, large }) {
  return (
    <div className={"card " + (large ? "large" : null)}>
      <h3>{title}</h3>
      <p className="card__price">
        <p>$</p>
        <p>{price}</p>
      </p>
      <div className="card__benefits">
        <p>{storage} Storage</p>
        <p>{users} Users Allowed</p>
        <p>Send up to {sendGB} GB</p>
      </div>

      <p className="card__learnMore">LEARN MORE</p>
    </div>
  );
}

export default Card;
