import React, { useEffect, useState } from "react";
import "./SwitchSlider.css";

function SwitchSlider() {
  const [checked, setCkecked] = useState(true);

  useEffect(() => {
    console.log(checked);
  }, [checked]);

  return (
    <div className="switchSlider">
      <label className="switchSlider__switch">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setCkecked(!checked)}
        />
        <span className="switchSlider__slider round"></span>
      </label>
    </div>
  );
}

export default SwitchSlider;
