import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Fuel, Gauge } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { vehicles } from '../mock/mockData';

const FeaturedVehicles = () => {
  const [filter, setFilter] = useState('all');

  const categories = [
    { value: 'all', label: 'All Vehicles' },
    { value: 'Luxury Sedan', label: 'Sedans' },
    { value: 'Luxury SUV', label: 'SUVs' },
    { value: 'Electric Premium', label: 'Electric' }
  ];

  // Filter to show only available vehicles
  const availableVehicles = vehicles.filter(v => v.available);
  
  const filteredVehicles = filter === 'all' 
    ? availableVehicles 
    : availableVehicles.filter(v => v.category === filter);

  return (
    <section className="py-20 bg-white dark:bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="text-[#e53935]">Vehicles</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose from our premium collection of well-maintained vehicles
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === cat.value
                  ? 'bg-[#e53935] text-white shadow-lg shadow-[#e53935]/30'
                  : 'bg-gray-100 dark:bg-[#0f0f10] text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="group bg-gray-50 dark:bg-[#0f0f10] rounded-3xl overflow-hidden shadow-lg transition-shadow duration-300"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Availability Badge */}
                <div className="absolute top-4 right-4">
                  <Badge 
                    className={`${
                      vehicle.available 
                        ? 'bg-green-500 hover:bg-green-600' 
                        : 'bg-gray-500 hover:bg-gray-600'
                    } text-white px-3 py-1`}
                  >
                    {vehicle.available ? 'Available' : 'Booked'}
                  </Badge>
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white backdrop-blur-sm px-3 py-1">
                    {vehicle.category}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {vehicle.name}
                </h3>

                {/* Specs */}
                <div className="flex items-center justify-between mb-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{vehicle.seats} Seats</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Gauge className="h-4 w-4" />
                    <span>{vehicle.transmission}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Fuel className="h-4 w-4" />
                    <span>{vehicle.fuel}</span>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-800">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Starting at</p>
                    <p className="text-3xl font-bold text-[#e53935]">
                      ₱{vehicle.pricePerDay.toLocaleString()}
                      <span className="text-base text-gray-600 dark:text-gray-400">/day</span>
                    </p>
                  </div>
                  <Link to={`/booking?vehicleId=${vehicle.id}`}>
                    <Button
                      className="bg-[#e53935] hover:bg-[#ff4d4d] text-white rounded-full group/btn"
                      disabled={!vehicle.available}
                    >
                      Book Now
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/vehicles">
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-[#e53935] text-[#e53935] hover:bg-[#e53935] hover:text-white px-8 py-6 rounded-full transition-all duration-300 group"
            >
              View All Vehicles
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVehicles;
