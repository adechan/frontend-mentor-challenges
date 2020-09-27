import React from "react";
import starImage from "../../assets/icon-star.svg";
import "./Star.css";

function Star({ rating, title }) {
  return (
    <div className="star">
      <p className="star__stars">
        {Array(rating) // creates an array of rating.length => 5
          .fill() // fill it with empty values
          // map it through and print stars
          .map((_) => (
            // <p>⭐</p>
            <img src={starImage} alt="" />
          ))}
      </p>
      <p className="star__description">
        Rated {rating} Stars in {title}
      </p>
    </div>
  );
}

export default Star;
