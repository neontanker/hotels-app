import React from "react";
import classes from "./StarRating.module.css";
type Props = {
  rating: number;
  buttonClassName?: string;
  onStarClick?: (index: number) => void;
  onHover?: (index: number) => void;
  hover?: number;
};
const StarRating: React.FC<Props> = ({
  rating,
  buttonClassName = "",
  onStarClick = () => {},
  onHover = () => {},
  hover = rating,
}) => {
  return (
    <div className={classes.starRating}>
      {[...Array(5)].map((_star, index) => {
        return (
          <button
            type="button"
            key={index}
            className={`${classes.button} ${
              index < ((rating && hover) || hover) ? classes.on : classes.off
            } ${buttonClassName}`}
            onClick={() => onStarClick(index + 1)}
            onDoubleClick={() => {
              onStarClick(0);
              onHover(0);
            }}
            onMouseEnter={() => onHover(index + 1)}
            onMouseLeave={() => onHover(rating)}
          >
            <span>&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
