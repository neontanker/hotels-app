import React, { useEffect, useState } from "react";

import fetchHotelRooms from "./fetchHotelRooms";
import ImageGalleryList from "../Shared/ImageCarousel";
import Card from "../UI/Card";
import classes from "./HotelItem.module.css";
import RoomItem from "./RoomItem";
import StarRating from "./HotelFilterMenu/StarRating";

type RoomsData = {
  rooms: Room[];
  ratePlans: RatePlan[];
};
const HotelItem: React.FC<Hotel> = (props) => {
  const [roomsData, setRoomsData] = useState<RoomsData | null>(null);

  const [error, setError] = useState<string | null>(null);
  //@todo: setup hotel details
  useEffect(() => {
    (async function getHotelRooms() {
      try {
        const data = await fetchHotelRooms(props.id);
        setRoomsData(data);
      } catch (error) {
        setError(String(error));
      }
      // setSelectedHotel(data[0]);
    })();
  }, [props.id]);

  if (error) return <p>{error}</p>;
  if (!roomsData) return <div className={classes.main}>Loading...</div>;

  const roomsList = roomsData.rooms.map((room) => {
    return (
      <div className={classes.container} key={room.id}>
        <RoomItem {...room} />
      </div>
    );
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
        <div>
          <StarRating disabled={true} starRating={Number(props.starRating)} />
        </div>
      </div>
      {/* create a div container to contain all the rooms with a "show more" */}
      {/* <div className={classes.container}>{props.description}</div> */}
      {roomsList}
    </Card>
  );
};

export default HotelItem;
