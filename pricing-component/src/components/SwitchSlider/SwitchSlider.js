import React, { useState } from "react";
import "./SwitchSlider.css";

function SwitchSlider() {
  return (
    <div className="switchSlider">
      <label class="switchSlider__switch">
        <input type="checkbox" />
        <span class="switchSlider__slider round"></span>
      </label>
    </div>
  );
}

export default SwitchSlider;
