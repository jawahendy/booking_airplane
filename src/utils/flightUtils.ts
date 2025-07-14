import { FlightCardProps } from '../types/flight';
import { airlines, routes, timeSlots } from '../constants/flightData';

// Generate random flight number
export const generateFlightNumber = (airlineCode: string): string => {
  const number = Math.floor(Math.random() * 9000) + 1000;
  return `${airlineCode} ${number}`;
};

// Calculate arrival time based on departure time and duration
export const calculateArrivalTime = (departureTime: string, duration: string): string => {
  const [depHour, depMin] = departureTime.split(':').map(Number);
  const durationMatch = duration.match(/(\d+)h\s*(\d+)m/);
  if (!durationMatch) return departureTime;
  
  const durHours = parseInt(durationMatch[1]);
  const durMinutes = parseInt(durationMatch[2]);
  
  const totalMinutes = depHour * 60 + depMin + durHours * 60 + durMinutes;
  const arrHour = Math.floor(totalMinutes / 60) % 24;
  const arrMin = totalMinutes % 60;
  
  return `${arrHour.toString().padStart(2, '0')}:${arrMin.toString().padStart(2, '0')}`;
};

// Format price in Indonesian Rupiah
export const formatPrice = (price: number): string => {
  return `Rp ${price.toLocaleString('id-ID')}`;
};

// Generate flights for a specific date
export const generateFlightsForDate = (date: Date): FlightCardProps[] => {
  const flights: FlightCardProps[] = [];
  
  // Use date as seed for consistent random generation
  const seed = date.getTime();
  const random = (index: number) => {
    const x = Math.sin(seed + index) * 10000;
    return x - Math.floor(x);
  };
  
  // 15% chance of no flights available (random days with no flights)
  const hasNoFlights = random(999) < 0.15;
  if (hasNoFlights) {
    return []; // Return empty array for no flights
  }
  
  // Generate 1-6 flights per day randomly (including possibility of just 1 flight)
  const flightCount = Math.floor(random(0) * 6) + 1;
  
  for (let i = 0; i < flightCount; i++) {
    const airline = airlines[Math.floor(random(i * 3) * airlines.length)];
    const route = routes[Math.floor(random(i * 3 + 1) * routes.length)];
    const departureTime = timeSlots[Math.floor(random(i * 3 + 2) * timeSlots.length)];
    const arrivalTime = calculateArrivalTime(departureTime, route.baseDuration);
    
    // Add some price variation
    const priceVariation = 0.8 + (random(i * 4) * 0.4); // 0.8 to 1.2 multiplier
    const finalPrice = Math.round(route.basePrice * airline.priceMultiplier * priceVariation);
    
    // Random availability (85% chance of being available, 15% sold out)
    const available = random(i * 5) > 0.15;
    
    flights.push({
      airline: airline.name,
      flightNumber: generateFlightNumber(airline.code),
      departure: route.departure,
      arrival: route.arrival,
      departureTime,
      arrivalTime,
      price: formatPrice(finalPrice),
      duration: route.baseDuration,
      available,
      onBook: () => {}
    });
  }
  
  // Sort flights by departure time
  flights.sort((a, b) => a.departureTime.localeCompare(b.departureTime));
  
  return flights;
};

// Dynamic flight data cache
const flightDataCache = new Map<string, FlightCardProps[]>();

// Get flights for any date with caching
export const getFlightsByDate = (date: Date): FlightCardProps[] => {
  const dateKey = date.toISOString().split('T')[0];
  
  if (!flightDataCache.has(dateKey)) {
    flightDataCache.set(dateKey, generateFlightsForDate(date));
  }
  
  return flightDataCache.get(dateKey) || [];
};
