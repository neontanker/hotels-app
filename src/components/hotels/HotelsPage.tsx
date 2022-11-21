import { useEffect, useState } from "react";

import fetchHotels from "./fetchHotels";
import HotelItem from "./HotelItem";
import classes from "./HotelsPage.module.css";

//@TODO: Create a filtering system with star rating etc..
const HotelsPage = () => {
  const [hotels, setHotels] = useState<Hotel[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async function getHotels() {
      //@TODO: Copy to HotelItem & fetchHotels to fetchHotelRooms
      try {
        const data = await fetchHotels();
        setHotels(data);
        setError(null);
      } catch (error) {
        setError(String(error));
      }

      // setSelectedHotel(data[0]);
    })();
  }, []);
  if (error) return <p>{error}</p>;
  if (!hotels) return <div className={classes.main}>Loading...</div>;

  // @TODO: create room list, probably using queries using hotelID, handle empty array scenario
  // perhaps create a model when u click on each room with more info, check how I select current vehicle in my API-app to select & view without sending a request
  // https://obmng.dbm.guestline.net/api/roomRates/OBMNG/OBMNG1

  const hotelsList = hotels.map((hotelData) => (
    <HotelItem {...hotelData} key={hotelData.id} />
    // {/* Room data has to go here, or within Hotel component and then we have to elevate the room capacity/s up to here so we can filter properly */}
  ));

  return (
    <main className={classes.main}>
      <h2>Hotel Page</h2>

      <div className={classes.hotelsList}>{hotelsList}</div>
    </main>
  );
};

export default HotelsPage;
