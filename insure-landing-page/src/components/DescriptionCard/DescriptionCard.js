import React from "react";
import "./DescriptionCard.css";

function DescriptionCard({ icon, title, description }) {
  return (
    <div className="descriptionCard">
      <img src={icon} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default DescriptionCard;
