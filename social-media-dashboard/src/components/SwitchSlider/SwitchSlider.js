import React, { useEffect, useState } from "react";
import { useDataLayerValue } from "../../DataLayer";
import "./SwitchSlider.css";

function SwitchSlider() {
  const [checked, setChecked] = useState(false);
  const [{ isDarkMode }, dispatch] = useDataLayerValue();

  useEffect(() => {
    // checked = false -> isDarkMode = true
    // chcked = true -> isDarkMode = false

    if (checked) {
      dispatch({
        type: "SET_MODE",
        isDarkMode: false,
      });
    } else {
      dispatch({
        type: "SET_MODE",
        isDarkMode: true,
      });
    }
  }, [checked]);

  return (
    <div className="switchSlider">
      {isDarkMode ? (
        <p className="switchSlider__mode">Dark Mode</p>
      ) : (
        <p className="switchSlider__mode">Light Mode</p>
      )}

      <label className="switch">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <span
          className={
            "switch__slider round " +
            (isDarkMode ? "switch__sliderDark" : "switch__sliderLight")
          }
        ></span>
      </label>
    </div>
  );
}

export default SwitchSlider;
