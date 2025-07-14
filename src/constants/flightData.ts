import { Airline, Route } from '../types/flight';

export const airlines: Airline[] = [
  { name: "Garuda Indonesia", code: "GA", priceMultiplier: 1.2 },
  { name: "Lion Air", code: "JT", priceMultiplier: 1.0 },
  { name: "Singapore Airlines", code: "SQ", priceMultiplier: 1.5 },
  { name: "AirAsia", code: "QZ", priceMultiplier: 0.8 },
  { name: "Citilink", code: "QG", priceMultiplier: 0.9 },
  { name: "Batik Air", code: "ID", priceMultiplier: 1.1 },
  { name: "Sriwijaya Air", code: "SJ", priceMultiplier: 0.85 },
  { name: "Nam Air", code: "IN", priceMultiplier: 0.95 }
];

export const routes: Route[] = [
  { departure: "CGK Jakarta", arrival: "DPS Bali", baseDuration: "2h 15m", basePrice: 1200000 },
  { departure: "CGK Jakarta", arrival: "JOG Yogyakarta", baseDuration: "1h 30m", basePrice: 800000 },
  { departure: "CGK Jakarta", arrival: "MLG Malang", baseDuration: "1h 45m", basePrice: 900000 },
  { departure: "CGK Jakarta", arrival: "SBY Surabaya", baseDuration: "1h 25m", basePrice: 750000 },
  { departure: "CGK Jakarta", arrival: "MDN Medan", baseDuration: "2h 30m", basePrice: 1100000 },
  { departure: "CGK Jakarta", arrival: "PLM Palembang", baseDuration: "1h 20m", basePrice: 650000 },
  { departure: "CGK Jakarta", arrival: "BDO Bandung", baseDuration: "45m", basePrice: 500000 },
  { departure: "DPS Bali", arrival: "CGK Jakarta", baseDuration: "2h 15m", basePrice: 1200000 },
  { departure: "DPS Bali", arrival: "SBY Surabaya", baseDuration: "1h 10m", basePrice: 600000 },
  { departure: "SBY Surabaya", arrival: "CGK Jakarta", baseDuration: "1h 25m", basePrice: 750000 }
];

export const timeSlots = [
  "06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", "09:30",
  "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
  "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"
];
