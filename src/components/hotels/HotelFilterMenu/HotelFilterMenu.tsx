import { useState } from "react";
import classes from "./HotelFilterMenu.module.css";
import StarRating from "./StarRating";

const HotelFilterMenu: React.FC = () => {
  //@TODO: create a filtering menu of star rating & room capacity (amount of children, adults)
  // might help: https://dev.to/michaelburrows/create-a-custom-react-star-rating-component-5o6
  const onStarClickHandler = (starRating: number) => {
    // setStarRating on parent
  };
  return (
    <div className={classes.container}>
      <div>
        <StarRating />
      </div>
    </div>
  );
};

export default HotelFilterMenu;
