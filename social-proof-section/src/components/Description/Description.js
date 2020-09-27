import React from "react";
import Star from "../Star/Star";
import "./Description.css";

function Description() {
  return (
    <div className="description">
      <div className="description__left">
        <h1>10,000+ of our users love our products.</h1>
        <p>
          We only provide great products combined with excellent customer
          service. See what our satisfied customers are saying about our
          services.
        </p>
      </div>

      <div className="description__right">
        <Star rating={5} title="Reviews" />
        <Star rating={5} title="Report Guru" />
        <Star rating={5} title="BestTech" />
      </div>
    </div>
  );
}

export default Description;
