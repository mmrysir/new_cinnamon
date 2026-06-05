
export interface Treatment {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  category: "all" | "massage" | "beauty" | "facial" | "scrub";
}

export interface BookingDetails {
  name: string;
  date: string;
  time: string;
  guests: string;
  notes: string;
}
