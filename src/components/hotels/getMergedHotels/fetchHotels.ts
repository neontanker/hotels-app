const fetchHotels = async (): Promise<Hotel[]> => {
  const BASE_HOTELS_URL =
    "https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG";

  const response = await fetch(BASE_HOTELS_URL, {
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

export default fetchHotels;
