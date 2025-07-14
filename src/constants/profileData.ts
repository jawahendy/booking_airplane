import { BookingCardProps } from '../types/profile';

export const sampleUserData = {
  name: "Hendy Nurfrianto",
  email: "hendyn25@gmail.com",
  phone: "+62 857 1622 1255",
  memberSince: "January 2020",
  totalFlights: 12,
  milesEarned: "25,400",
  membershipLevel: "Gold"
};

export const sampleBookingsData: BookingCardProps[] = [
  {
    id: "BK001234",
    airline: "Garuda Indonesia",
    flightNumber: "GA 152",
    departure: "CGK Jakarta",
    arrival: "DPS Bali",
    departureTime: "08:30",
    arrivalTime: "11:45",
    date: "Dec 25, 2024",
    status: "confirmed",
    price: "Rp 1,200,000",
    duration: "2h 15m",
    seat: "12A",
    gate: "A5"
  },
  {
    id: "BK001235",
    airline: "Lion Air",
    flightNumber: "JT 930",
    departure: "DPS Bali",
    arrival: "CGK Jakarta",
    departureTime: "14:20",
    arrivalTime: "17:35",
    date: "Dec 30, 2024",
    status: "confirmed",
    price: "Rp 1,500,000",
    duration: "2h 15m",
    seat: "8C",
    gate: "B2"
  },
  {
    id: "BK001236",
    airline: "Singapore Airlines",
    flightNumber: "SQ 740",
    departure: "CGK Jakarta",
    arrival: "SIN Singapore",
    departureTime: "19:45",
    arrivalTime: "23:00",
    date: "Nov 15, 2024",
    status: "completed",
    price: "Rp 3,000,000",
    duration: "2h 15m",
    seat: "4A",
    gate: "B2"
  }
];
