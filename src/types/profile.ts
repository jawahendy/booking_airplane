export interface BookingCardProps {
  id: string;
  airline: string;
  flightNumber: string;
  departure: string;
  arrival: string;
  departureTime: string;
  arrivalTime: string;
  date: string;
  status: 'confirmed' | 'cancelled' | 'completed';
  price: string;
  duration: string;
  seat: string;
  gate?: string;
}

export interface UserData {
  name: string;
  email: string;
  phone: string;
  memberSince: string;
  totalFlights: number;
  milesEarned: string;
  membershipLevel: string;
}

export type TabType = 'bookings' | 'settings';
