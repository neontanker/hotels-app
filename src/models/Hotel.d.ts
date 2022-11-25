type Hotel = {
  id: string;
  name: string;
  description: string;
  address1: string;
  address2: string;
  postcode: string;
  town: string;
  country: string;
  countryCode: string;
  starRating: string;
  // facilities: [
  //   {
  //     code: "1",
  //   },
  // ],
  telephone: string;
  email: string;
  images: { url: string; alt?: string }[];
  checkInHours: string;
  checkInMinutes: string;
  checkOutHours: string;
  checkOutMinutes: string;
  position: {
    latitude: number;
    longitude: number;
    timezone: string;
  };
  roomRates: {
    rooms: Room[];
    ratePlans: RatePlan[];
  };
};
