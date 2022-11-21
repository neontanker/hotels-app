import { useState } from "react";

import classes from "./StarRating.module.css";
const StarRating: React.FC<{ disabled?: boolean; starRating?: number }> = ({
  disabled = false,
  starRating = 0,
}) => {
  const [rating, setRating] = useState(starRating);
  const [hover, setHover] = useState(starRating);
  const onClickHandler = (index: number) => {
    setRating(index);
    // set
  };
  return (
    <>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={`${classes.button} ${disabled && classes.disabled} ${
              index <= ((rating && hover) || hover) ? classes.on : classes.off
            }`}
            onClick={() => onClickHandler(index)}
            onDoubleClick={() => {
              onClickHandler(0);
              setHover(0);
            }}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
            disabled={disabled}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </>
  );
};

export default StarRating;
