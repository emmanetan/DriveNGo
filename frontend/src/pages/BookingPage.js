import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Calendar as CalendarIcon, MapPin, Phone, Mail, User, CreditCard } from 'lucide-react';
import { format } from 'date-fns';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Calendar } from '../components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { toast } from 'sonner';
import { vehicles, locations } from '../mock/mockData';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BookingPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const preSelectedVehicleId = searchParams.get('vehicleId');

  const [formData, setFormData] = useState({
    vehicleId: preSelectedVehicleId || '',
    pickupLocation: '',
    pickupDate: null,
    returnDate: null,
    customerName: '',
    email: '',
    phone: ''
  });

  const selectedVehicle = vehicles.find(v => v.id === parseInt(formData.vehicleId));
  
  const calculateTotalCost = () => {
    if (!selectedVehicle || !formData.pickupDate || !formData.returnDate) return 0;
    const days = Math.ceil((formData.returnDate - formData.pickupDate) / (1000 * 60 * 60 * 24));
    return days * selectedVehicle.pricePerDay;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.vehicleId || !formData.pickupLocation || !formData.pickupDate || 
        !formData.returnDate || !formData.customerName || !formData.email || !formData.phone) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (formData.returnDate <= formData.pickupDate) {
      toast.error('Return date must be after pickup date');
      return;
    }

    // Mock booking submission
    const bookingData = {
      ...formData,
      pickupDate: format(formData.pickupDate, 'yyyy-MM-dd'),
      returnDate: format(formData.returnDate, 'yyyy-MM-dd'),
      totalCost: calculateTotalCost(),
      status: 'confirmed',
      bookingId: `BK${Date.now()}`
    };

    console.log('Booking submitted:', bookingData);
    
    // Store in localStorage for mock
    const existingBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    existingBookings.push(bookingData);
    localStorage.setItem('bookings', JSON.stringify(existingBookings));

    toast.success('Booking confirmed! Redirecting to confirmation...');
    
    setTimeout(() => {
      navigate(`/booking-confirmation?id=${bookingData.bookingId}`);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0f0f10]">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Book Your <span className="text-[#e53935]">Dream Car</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Complete the form below to reserve your vehicle
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white dark:bg-[#1a1a1a] rounded-3xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Booking Details
                </h2>

                {/* Vehicle Selection */}
                <div className="mb-6">
                  <Label htmlFor="vehicle" className="text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                    <CreditCard className="h-4 w-4 mr-2 text-[#e53935]" />
                    Select Vehicle *
                  </Label>
                  <Select 
                    value={formData.vehicleId} 
                    onValueChange={(value) => setFormData({...formData, vehicleId: value})}
                  >
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Choose your vehicle" />
                    </SelectTrigger>
                    <SelectContent>
                      {vehicles.filter(v => v.available).map((vehicle) => (
                        <SelectItem key={vehicle.id} value={vehicle.id.toString()}>
                          {vehicle.name} - ₱{vehicle.pricePerDay.toLocaleString()}/day
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Pickup Location */}
                <div className="mb-6">
                  <Label htmlFor="location" className="text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-[#e53935]" />
                    Pickup Location *
                  </Label>
                  <Select 
                    value={formData.pickupLocation} 
                    onValueChange={(value) => setFormData({...formData, pickupLocation: value})}
                  >
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select pickup location" />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map((location) => (
                        <SelectItem key={location} value={location}>
                          {location}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Date Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Pickup Date */}
                  <div>
                    <Label className="text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-2 text-[#e53935]" />
                      Pickup Date *
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full h-12 justify-start text-left font-normal"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formData.pickupDate ? format(formData.pickupDate, 'PPP') : 'Pick a date'}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={formData.pickupDate}
                          onSelect={(date) => setFormData({...formData, pickupDate: date})}
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Return Date */}
                  <div>
                    <Label className="text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-2 text-[#e53935]" />
                      Return Date *
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full h-12 justify-start text-left font-normal"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formData.returnDate ? format(formData.returnDate, 'PPP') : 'Pick a date'}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={formData.returnDate}
                          onSelect={(date) => setFormData({...formData, returnDate: date})}
                          disabled={(date) => date < new Date() || (formData.pickupDate && date <= formData.pickupDate)}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
                  Contact Information
                </h3>

                {/* Customer Name */}
                <div className="mb-6">
                  <Label htmlFor="name" className="text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                    <User className="h-4 w-4 mr-2 text-[#e53935]" />
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.customerName}
                    onChange={(e) => setFormData({...formData, customerName: e.target.value})}
                    className="h-12"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Label htmlFor="email" className="text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-[#e53935]" />
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-[#e53935]" />
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (234) 567-8900"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="h-12"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-[#e53935] hover:bg-[#ff4d4d] text-white py-6 text-lg rounded-full shadow-lg hover:shadow-[#e53935]/50 transition-all duration-300"
                >
                  Confirm Booking
                </Button>
              </form>
            </div>

            {/* Booking Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-[#1a1a1a] rounded-3xl shadow-xl p-8 sticky top-32">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Booking Summary
                </h2>

                {selectedVehicle ? (
                  <>
                    <img
                      src={selectedVehicle.image}
                      alt={selectedVehicle.name}
                      className="w-full h-48 object-cover rounded-2xl mb-4"
                    />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {selectedVehicle.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {selectedVehicle.category}
                    </p>

                    <div className="border-t border-gray-200 dark:border-gray-800 pt-4 space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Price per day</span>
                        <span className="font-semibold text-gray-900 dark:text-white">
                          ${selectedVehicle.pricePerDay}
                        </span>
                      </div>
                      
                      {formData.pickupDate && formData.returnDate && (
                        <>
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Number of days</span>
                            <span className="font-semibold text-gray-900 dark:text-white">
                              {Math.ceil((formData.returnDate - formData.pickupDate) / (1000 * 60 * 60 * 24))}
                            </span>
                          </div>
                          <div className="border-t border-gray-200 dark:border-gray-800 pt-3 flex justify-between">
                            <span className="text-lg font-bold text-gray-900 dark:text-white">Total</span>
                            <span className="text-2xl font-bold text-[#e53935]">
                              ${calculateTotalCost()}
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  </>
                ) : (
                  <p className="text-gray-600 dark:text-gray-400 text-center py-8">
                    Select a vehicle to see booking summary
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookingPage;
