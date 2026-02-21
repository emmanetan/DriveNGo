import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Fuel, Gauge, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { vehicles } from '../mock/mockData';

const VehiclesPage = () => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const categories = [
    { value: 'all', label: 'All Vehicles' },
    { value: 'Luxury Sedan', label: 'Luxury Sedans' },
    { value: 'Premium Sedan', label: 'Premium Sedans' },
    { value: 'Economy Sedan', label: 'Economy Sedans' },
    { value: 'Luxury SUV', label: 'Luxury SUVs' },
    { value: 'Adventure SUV', label: 'Adventure SUVs' },
    { value: 'Electric Premium', label: 'Electric Vehicles' }
  ];

  // Filter vehicles based on category and search
  const filteredVehicles = vehicles.filter(v => {
    const matchesCategory = filter === 'all' || v.category === filter;
    const matchesSearch = v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         v.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredVehicles.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentVehicles = filteredVehicles.slice(startIndex, endIndex);

  // Reset to page 1 when filter or search changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [filter, searchQuery]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0f0f10]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-[#1a1a1a] to-gray-900 dark:from-black dark:via-[#0f0f10] dark:to-black">
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02LTYgMi42OS02IDYgMi42OSA2IDYgNnptMCAxMmMzLjMxIDAgNi0yLjY5IDYtNnMtMi42OS02LTYtNi02IDIuNjktNiA2IDIuNjkgNiA2IDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-[#e53935]">Fleet</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our diverse collection of premium vehicles for every journey
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search by vehicle name or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 bg-white dark:bg-[#1a1a1a] border-gray-300 dark:border-gray-700 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vehicles Grid Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === cat.value
                    ? 'bg-[#e53935] text-white shadow-lg shadow-[#e53935]/30'
                    : 'bg-white dark:bg-[#1a1a1a] text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <p className="text-center text-gray-600 dark:text-gray-400">
              Showing <span className="font-semibold text-[#e53935]">{startIndex + 1}-{Math.min(endIndex, filteredVehicles.length)}</span> of <span className="font-semibold text-[#e53935]">{filteredVehicles.length}</span> vehicle{filteredVehicles.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Vehicle Grid */}
          {currentVehicles.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentVehicles.map((vehicle) => (
                  <div
                    key={vehicle.id}
                    className="group bg-white dark:bg-[#1a1a1a] rounded-3xl overflow-hidden shadow-lg transition-shadow duration-300"
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

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center space-x-2 mt-12">
                  {/* Previous Button */}
                  <Button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    variant="outline"
                    className="border-2 border-gray-300 dark:border-gray-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-full px-4"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>

                  {/* Page Numbers */}
                  <div className="flex items-center space-x-2">
                    {[...Array(totalPages)].map((_, index) => {
                      const pageNumber = index + 1;
                      return (
                        <Button
                          key={pageNumber}
                          onClick={() => handlePageChange(pageNumber)}
                          className={`rounded-full w-12 h-12 ${
                            currentPage === pageNumber
                              ? 'bg-[#e53935] hover:bg-[#ff4d4d] text-white'
                              : 'bg-white dark:bg-[#1a1a1a] text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 border-2 border-gray-300 dark:border-gray-700'
                          }`}
                        >
                          {pageNumber}
                        </Button>
                      );
                    })}
                  </div>

                  {/* Next Button */}
                  <Button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    variant="outline"
                    className="border-2 border-gray-300 dark:border-gray-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-full px-4"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600 dark:text-gray-400">
                No vehicles found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VehiclesPage;
