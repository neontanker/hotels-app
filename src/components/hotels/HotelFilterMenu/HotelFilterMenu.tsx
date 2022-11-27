import classes from "./HotelFilterMenu.module.css";
import CapacityControls from "./CapacityControls";
import StarRatingControls from "./StarRatingControls";

//@TODO: Create a "clear filters" button
const HotelFilterMenu: React.FC<{
  changeStarRating: (starRating: number) => void;
  starRating: number;
  changeAdultCapacity: (count: number) => void;
  adultCapacity: number;
  changeChildrenCapacity: (count: number) => void;
  childrenCapacity: number;
}> = (props) => {
  const changeStarRating = (starRating: number) => {
    props.changeStarRating(starRating);
  };
  const changeAdultCapacity = (count: number) => {
    props.changeAdultCapacity(count);
  };
  const changeChildrenCapacity = (count: number) => {
    props.changeChildrenCapacity(count);
  };
  return (
    <div className={classes.container}>
      <div>
        <StarRatingControls
          changeStarRating={changeStarRating}
          rating={props.starRating}
        />
      </div>
      <div className={classes.capacityControlsContainer}>
        <div>
          <CapacityControls
            text={"Adults"}
            changeCapacity={changeAdultCapacity}
            value={props.adultCapacity}
          />
        </div>
        <div>
          <CapacityControls
            text={"Children"}
            changeCapacity={changeChildrenCapacity}
            value={props.childrenCapacity}
          />
        </div>
      </div>
    </div>
  );
};

export default HotelFilterMenu;
