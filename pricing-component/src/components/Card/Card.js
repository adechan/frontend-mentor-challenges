import React from "react";
import "./Card.css";

function Card() {
  return (
    <div className="card">
      <h3>Basic</h3>
      <p className="card__price">
        <p>$</p>
        <p>19.99</p>
      </p>
      <div className="card__benefits">
        <p>500 GB Storage</p>
        <p>2 Users Allowed</p>
        <p>Send up to 3 GB</p>
      </div>

      <p className="card__learnMore">Learn More</p>
    </div>
  );
}

export default Card;
