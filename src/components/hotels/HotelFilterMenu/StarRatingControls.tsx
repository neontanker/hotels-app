import { useState } from "react";
import StarRating from "../../shared/StarRating/StarRating";

import classes from "./StarRatingControls.module.css";
const StarRatingControls: React.FC<{
  rating: number;
  changeStarRating: (starRating: number) => void;
}> = ({ rating, changeStarRating }) => {
  const [hover, setHover] = useState(0);
  const onStarClickHandler = (index: number) => {
    if (!(index === rating)) {
      changeStarRating(index);
    }
  };

  return (
    <StarRating
      rating={rating}
      buttonClassName={classes.button}
      onStarClick={onStarClickHandler}
      onHover={(index) => setHover(index)}
      hover={hover}
    />
  );
};

export default StarRatingControls;
