import fetchHotelRooms from "./fetchHotelRooms";
import fetchHotels from "./fetchHotels";

const getMergedHotels = async () => {
  let hotels = await fetchHotels();
  const mergeRoomsWithHotels = async (hotels: Hotel[]) => {
    const result = Promise.all(
      hotels.map(async (hotel) => {
        const rooms = await fetchHotelRooms(hotel.id);
        return { ...hotel, roomRates: rooms };
      })
    ).then((values) => {
      return values;
    });
    return result;
  };
  return await mergeRoomsWithHotels(hotels);
};

export default getMergedHotels;
