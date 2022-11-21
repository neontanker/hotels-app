// https://stackoverflow.com/questions/54649465/how-to-do-try-catch-and-finally-statements-in-typescript
const fetchHotelRooms = async (
  hotelId: string
): Promise<{ rooms: Room[]; ratePlans: RatePlan[] }> => {
  const BASE_HOTELS_URL =
    "https://obmng.dbm.guestline.net/api/roomRates/OBMNG/";

  const response = await fetch(BASE_HOTELS_URL + hotelId, {
    method: "GET",
    // body: JSON.stringify(queryOptions),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Something went wrong!");
  }
  // let data: { rooms: Room[]; ratePlans: RatePlan[] } | null = null;
  const data = await response.json();

  return data;
  // @TODO fix error handling and display!!
};

export default fetchHotelRooms;
