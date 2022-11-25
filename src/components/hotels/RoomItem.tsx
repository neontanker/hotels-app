import classes from "./RoomItem.module.css";

const RoomItem: React.FC<Room> = (props) => {
  // inline block?, dynamic size by largest, spread evenly vertically
  return (
    <div className={classes.container}>
      <div className={classes.roomDetails}>
        <p>{props.name}</p>
        <p>Adults: {props.occupancy.maxAdults}</p>
        <p>Children: {props.occupancy.maxChildren}</p>
      </div>
      <div className={classes.roomDescription}>
        <p>{props.longDescription}</p>
      </div>
    </div>
  );
};

export default RoomItem;
