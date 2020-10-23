import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAnnually, setAnnually } from "../../features/app/appSlice";
import "./SwitchSlider.css";

function SwitchSlider() {
  const isAnnually = useSelector(selectIsAnnually);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      setAnnually({
        isAnnually: !isAnnually,
      })
    );
  };

  return (
    <div className="switchSlider">
      <label className="switchSlider__switch">
        <input type="checkbox" checked={isAnnually} onChange={handleClick} />
        <span className="switchSlider__slider round"></span>
      </label>
    </div>
  );
}

export default SwitchSlider;
