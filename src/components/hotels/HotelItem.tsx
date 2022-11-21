import { useEffect, useState } from "react";

import fetchHotelRooms from "./fetchHotelRooms";
import ImageGalleryList from "../Shared/ImageCarousel";
import Card from "../UI/Card";
import classes from "./HotelItem.module.css";
const HotelItem: React.FC<Hotel> = (props) => {
  const [roomsData, setRoomsData] = useState<{
    rooms: Room[];
    ratePlans: RatePlan[];
  } | null>(null);
  const [error, setError] = useState<string | null>(null);
  //@todo: setup hotel details
  useEffect(() => {
    (async function getHotelRooms() {
      try {
        const rooms = await fetchHotelRooms(props.id);
        setRoomsData(rooms);
        setError(null);
      } catch (error) {
        setError(String(error));
      }

      // setSelectedHotel(data[0]);
    })();
  }, [props.id]);
  if (error) return <p>{error}</p>;
  if (!roomsData) return <div className={classes.main}>Loading...</div>;

  const roomsList = roomsData.rooms.map((room) => {
    return <div className={classes.container}>{room.name}</div>;
  });

  return (
    <Card className={classes.hotelCard}>
      <div className={classes.container}>
        <ImageGalleryList images={props.images} />
        <div>
          <p className={classes.hotelName}>{props.name}</p>
          <p>{props.address1}</p>
          <p>{props.address2}</p>
          <p>{props.town}</p>
          <p>{props.postcode}</p>
          <p>{props.country}</p>
          <p>{props.email}</p>
          <p>{props.telephone}</p>
        </div>
        <div>star rating</div>
      </div>
      {/* create a div container to contain all the rooms with a "show more" */}
      {/* <div className={classes.container}>{props.description}</div> */}
      {roomsList}
    </Card>
  );
};

export default HotelItem;
