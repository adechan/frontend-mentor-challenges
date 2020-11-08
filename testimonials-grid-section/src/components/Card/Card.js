import React, { useEffect, useState } from "react";
import "./Card.css";

function Card({
  id,
  image,
  name,
  verified,
  description,
  quote,
  color,
  size,
  background,
}) {
  const [isBackgroundBlue, setIsBackgroundBlue] = useState(false);
  const [isBackgroundGray, setIsBackgroundGray] = useState(false);
  const [isBackgroundWhite, setIsBackgroundWhite] = useState(false);
  const [isBackgroundDarkGray, setIsBackgroundDarkGray] = useState(false);

  const [smallSize, setSmallSize] = useState(false);
  const [mediumSize, setMediumSize] = useState(false);
  const [longSize, setLongSize] = useState(false);

  const [backgroundIcon, setBackgroundIcon] = useState(false);

  useEffect(() => {
    if (color === "#733fc8") {
      setIsBackgroundBlue(true);
    } else if (color === "#49556b") {
      setIsBackgroundGray(true);
    } else if (color === "#ffffff") {
      setIsBackgroundWhite(true);
    } else if (color === "#19212e") {
      setIsBackgroundDarkGray(true);
    }

    if (size === "small") {
      setSmallSize(true);
    } else if (size === "medium") {
      setMediumSize(true);
    } else if (size === "long") {
      setLongSize(true);
    }

    if (background === "true") {
      setBackgroundIcon(true);
    } else {
      setBackgroundIcon(false);
    }
  }, [background, color, size]);

  return (
    <div
      className={
        "card " +
        (isBackgroundBlue
          ? "backgroundBlue "
          : isBackgroundDarkGray
          ? "backgroundDarkGray "
          : isBackgroundGray
          ? "backgroundGray "
          : isBackgroundWhite
          ? "backgroundWhite "
          : null) +
        (smallSize
          ? "small "
          : mediumSize
          ? "medium "
          : longSize
          ? "long "
          : null) +
        (backgroundIcon ? "icon " : "")
      }
    >
      <div className="card__personalInfo">
        <img src={image} alt="" />

        <div className="card__name">
          <p>{name}</p>
          <p>{verified}</p>
        </div>
      </div>
      <p className="card__description">{description}</p>

      <q className="card__quote">{quote}</q>
    </div>
  );
}

export default Card;
