type Room = {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  occupancy: { maxAdults: number; maxChildren: number; maxOverall?: number };
  disabledAccess: boolean;
  bedConfiguration: string;
  images: { url: string; alt?: string }[];
  facilities: { code: string; name: string }[];
};
type RatePlan = {
  id: string;
  shortDescription: string;
  longDescription: string;
  prePayment: string;
  cancellationPolicy: {
    name: string;
    text: string;
    penalty: string;
    applicable: string;
    hour: string;
  };
};
