import ImageCarousel from "../Shared/ImageCarousel";
import Card from "../UI/Card";
import classes from "./HotelItem.module.css";
import RoomItem from "./RoomItem";
import StarRating from "../Shared/StarRating";
import { useState } from "react";

const defaultRoomsToShow = 3;
const HotelItem: React.FC<
  Hotel & { selectedAdultCapacity: number; selectedChildrenCapacity: number }
> = (props) => {
  const [roomsToShow, setRoomsToShow] = useState<number>(defaultRoomsToShow);
  const [expanded, setExpanded] = useState<boolean>(false);

  const onShowMoreHandler = (filteredRoomsLength: number) => {
    if (roomsToShow === defaultRoomsToShow) {
      setRoomsToShow(filteredRoomsLength);
      setExpanded(true);
    } else {
      setRoomsToShow(defaultRoomsToShow);
      setExpanded(false);
    }
  };

  const selectedOverallCapacity =
    props.selectedAdultCapacity + props.selectedChildrenCapacity;
  const filteredRooms = props.roomRates.rooms.filter((room) => {
    const maxOverall: number =
      typeof room.occupancy.maxOverall === "number"
        ? room.occupancy.maxOverall
        : room.occupancy.maxAdults + room.occupancy.maxChildren;

    return (
      room.occupancy.maxAdults >= props.selectedAdultCapacity &&
      room.occupancy.maxChildren >= props.selectedChildrenCapacity &&
      maxOverall >= selectedOverallCapacity
    );
  });
  // @TODO: Model for more info about each room, onClick of RoomDetails?
  const roomsList = filteredRooms.slice(0, roomsToShow).map((room) => {
    return <RoomItem {...room} key={room.id} />;
  });

  return (
    <>
      <Card className={classes.hotelCard}>
        <div className={classes.container}>
          <div className={classes.carousel}>
            <ImageCarousel images={props.images} />
          </div>
          <div className={classes.hotelDetails}>
            <div>
              <h2 className={classes.hotelName}>{props.name}</h2>
              <p>{props.address1}</p>
              <p>{props.address2}</p>
              <p>{props.town}</p>
              <p>{props.postcode}</p>
              <p>{props.country}</p>
              <p>{props.email}</p>
              <p>{props.telephone}</p>
            </div>
            <div className={classes.starRating}>
              <StarRating rating={Number(props.starRating)} />
            </div>
          </div>
        </div>
        {roomsList.length > 0 ? (
          roomsList
        ) : (
          <p className={classes.message}>
            No rooms found with selected filter.
          </p>
        )}
      </Card>
      {/* @TODO: Show more animations w/ React-Transition-Group third party package? */}
      {filteredRooms.length > defaultRoomsToShow && (
        <button
          className={classes.showMoreButton}
          onClick={() => onShowMoreHandler(filteredRooms.length)}
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      )}
    </>
  );
};

export default HotelItem;
