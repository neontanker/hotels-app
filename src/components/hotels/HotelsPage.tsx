import { useEffect, useState } from "react";

import HotelFilterMenu from "./HotelFilterMenu/HotelFilterMenu";
import HotelItem from "./HotelItem";
import classes from "./HotelsPage.module.css";
import getMergedHotels from "./api/getMergedHotels";

const HotelsPage = () => {
  const [hotels, setHotels] = useState<Hotel[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedStarRating, setSelectedStarRating] = useState<number>(0);
  const [selectedAdultCapacity, setSelectedAdultCapacity] = useState<number>(0);
  const [selectedChildrenCapacity, setselectedChildrenCapacity] =
    useState<number>(0);

  const changeStarRating = (starRating: number) => {
    setSelectedStarRating(starRating);
  };
  const changeAdultCapacity = (count: number) => {
    setSelectedAdultCapacity(count);
  };
  const changeChildrenCapacity = (count: number) => {
    setselectedChildrenCapacity(count);
  };

  useEffect(() => {
    (async function getHotels() {
      try {
        const data = await getMergedHotels();
        setHotels(data);
        setError(null);
      } catch (error) {
        setError(String(error));
      }
    })();
  }, []);
  if (error) return <p className={classes.error}>{error}</p>;
  if (!hotels) return <div className={classes.main}>Loading...</div>;

  const filteredHotels = hotels.filter(
    (hotel) => Number(hotel.starRating) >= selectedStarRating
  );

  const hotelsList = filteredHotels.map((hotelData) => {
    return (
      <HotelItem
        {...hotelData}
        selectedAdultCapacity={selectedAdultCapacity}
        selectedChildrenCapacity={selectedChildrenCapacity}
        key={hotelData.id}
      />
    );
  });

  return (
    <main className={classes.main}>
      <h2>Hotels</h2>
      <HotelFilterMenu
        changeStarRating={changeStarRating}
        starRating={selectedStarRating}
        changeAdultCapacity={changeAdultCapacity}
        adultCapacity={selectedAdultCapacity}
        changeChildrenCapacity={changeChildrenCapacity}
        childrenCapacity={selectedChildrenCapacity}
      />

      <div className={classes.hotelsList}>{hotelsList}</div>
    </main>
  );
};

export default HotelsPage;
