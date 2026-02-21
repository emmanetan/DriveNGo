// Mock data for Drive 'N Go Car Rental Service

export const vehicles = [
  {
    id: 1,
    name: "Mercedes-Benz E-Class",
    category: "Luxury Sedan",
    image: "https://images.pexels.com/photos/12152812/pexels-photo-12152812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    pricePerDay: 89,
    available: true,
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol"
  },
  {
    id: 2,
    name: "Tesla Model 3",
    category: "Electric Premium",
    image: "https://images.pexels.com/photos/27243718/pexels-photo-27243718.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    pricePerDay: 95,
    available: true,
    seats: 5,
    transmission: "Automatic",
    fuel: "Electric"
  },
  {
    id: 3,
    name: "Range Rover Sport",
    category: "Luxury SUV",
    image: "https://images.pexels.com/photos/33431295/pexels-photo-33431295.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    pricePerDay: 125,
    available: false,
    seats: 7,
    transmission: "Automatic",
    fuel: "Diesel"
  },
  {
    id: 4,
    name: "BMW 5 Series",
    category: "Premium Sedan",
    image: "https://images.pexels.com/photos/31040150/pexels-photo-31040150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    pricePerDay: 79,
    available: true,
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol"
  },
  {
    id: 5,
    name: "Jeep Wrangler",
    category: "Adventure SUV",
    image: "https://images.pexels.com/photos/33431240/pexels-photo-33431240.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    pricePerDay: 99,
    available: true,
    seats: 5,
    transmission: "Manual",
    fuel: "Diesel"
  },
  {
    id: 6,
    name: "Classic Sedan",
    category: "Economy Sedan",
    image: "https://images.pexels.com/photos/36067529/pexels-photo-36067529.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    pricePerDay: 49,
    available: true,
    seats: 5,
    transmission: "Manual",
    fuel: "Petrol"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    image: "https://images.pexels.com/photos/5467593/pexels-photo-5467593.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    rating: 5,
    review: "Excellent service! The booking process was smooth and the car was in perfect condition. Highly recommend Drive 'N Go!"
  },
  {
    id: 2,
    name: "Michael Chen",
    image: "https://images.pexels.com/photos/34129727/pexels-photo-34129727.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    rating: 5,
    review: "Best car rental experience I've had. Professional staff, clean vehicles, and transparent pricing."
  },
  {
    id: 3,
    name: "David Martinez",
    image: "https://images.pexels.com/photos/30004315/pexels-photo-30004315.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    rating: 4,
    review: "Great selection of vehicles at competitive prices. The 24/7 support was really helpful during my trip."
  },
  {
    id: 4,
    name: "Emma Wilson",
    image: "https://images.pexels.com/photos/30004323/pexels-photo-30004323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    rating: 5,
    review: "Seamless booking and excellent customer service. Will definitely use Drive 'N Go for my next rental!"
  }
];

export const bookings = [
  {
    id: 1,
    vehicleId: 1,
    customerName: "John Doe",
    email: "john@example.com",
    phone: "+1234567890",
    pickupLocation: "Downtown Office",
    pickupDate: "2025-01-15",
    returnDate: "2025-01-20",
    totalCost: 445,
    status: "confirmed"
  },
  {
    id: 2,
    vehicleId: 3,
    customerName: "Jane Smith",
    email: "jane@example.com",
    phone: "+1234567891",
    pickupLocation: "Airport Terminal",
    pickupDate: "2025-01-10",
    returnDate: "2025-01-18",
    totalCost: 1000,
    status: "active"
  }
];

export const locations = [
  "Downtown Office",
  "Airport Terminal",
  "North Station",
  "South Branch",
  "East Mall Location"
];

// Helper function to check availability
export const checkAvailability = (vehicleId, startDate, endDate) => {
  // Mock logic - in real app, this would check against actual bookings
  const vehicle = vehicles.find(v => v.id === vehicleId);
  return vehicle ? vehicle.available : false;
};
