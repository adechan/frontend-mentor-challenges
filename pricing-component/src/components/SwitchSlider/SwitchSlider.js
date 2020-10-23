import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAnnually } from "../../features/app/appSlice";
import "./SwitchSlider.css";

function SwitchSlider() {
  const [checked, setCkecked] = useState(true);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      setAnnually({
        isAnnually: checked,
      })
    );
  };

  return (
    <div className="switchSlider">
      <label className="switchSlider__switch">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setCkecked(!checked)}
          onClick={handleClick}
        />
        <span className="switchSlider__slider round"></span>
      </label>
    </div>
  );
}

export default SwitchSlider;
