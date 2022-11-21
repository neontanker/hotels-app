// https://stackoverflow.com/questions/54649465/how-to-do-try-catch-and-finally-statements-in-typescript
const fetchHotels = async (): Promise<Hotel[]> => {
  const BASE_HOTELS_URL =
    "https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG";

  const response = await fetch(BASE_HOTELS_URL, {
    method: "GET",
    // body: JSON.stringify(queryOptions),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  const data = await response.json();

  return data;
};

export default fetchHotels;
