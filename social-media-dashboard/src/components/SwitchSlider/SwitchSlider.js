import React from "react";
import "./SwitchSlider.css";

function SwitchSlider() {
  return (
    <div className="switchSlider">
      <p className="switchSlider__mode">Dark Mode</p>

      <label class="switch">
        <input type="checkbox" />
        <span class="switch__slider round"></span>
      </label>
    </div>
  );
}

export default SwitchSlider;
