const fetchHotelRooms = async (
  hotelId: string
): Promise<{ rooms: Room[]; ratePlans: RatePlan[] }> => {
  const BASE_HOTELS_URL =
    "https://obmng.dbm.guestline.net/api/roomRates/OBMNG/";

  const response = await fetch(BASE_HOTELS_URL + hotelId, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error(`${response.statusText}: ${response.status}`);
  }

  const data = await response.json();
  return data;
};

export default fetchHotelRooms;
