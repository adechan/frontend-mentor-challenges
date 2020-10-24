import React from "react";
import "./Illustration.css";

import IllustrationPng from "../../assets/illustration-dashboard.png";

function Illustration() {
  return (
    <div className="illustration">
      <img src={IllustrationPng} alt="" />
    </div>
  );
}

export default Illustration;
