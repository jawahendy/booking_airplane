export interface FlightCardProps {
  airline: string;
  flightNumber: string;
  departure: string;
  arrival: string;
  departureTime: string;
  arrivalTime: string;
  price: string;
  duration: string;
  available: boolean;
  onBook: () => void;
}

export interface BookingFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  seatClass: string;
  seatNumber: string;
}

export interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  flight: FlightCardProps | null;
  selectedDate: Date;
}

export interface Airline {
  name: string;
  code: string;
  priceMultiplier: number;
}

export interface Route {
  departure: string;
  arrival: string;
  baseDuration: string;
  basePrice: number;
}
