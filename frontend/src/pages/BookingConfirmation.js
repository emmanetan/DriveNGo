import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle, Calendar, MapPin, Car, Mail, Phone, Download } from 'lucide-react';
import { Button } from '../components/ui/button';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { vehicles } from '../mock/mockData';

const BookingConfirmation = () => {
  const [searchParams] = useSearchParams();
  const bookingId = searchParams.get('id');
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    // Retrieve booking from localStorage
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    const foundBooking = bookings.find(b => b.bookingId === bookingId);
    setBooking(foundBooking);
  }, [bookingId]);

  if (!booking) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-[#0f0f10] flex items-center justify-center">
        <p className="text-gray-600 dark:text-gray-400">Loading booking details...</p>
      </div>
    );
  }

  const vehicle = vehicles.find(v => v.id === parseInt(booking.vehicleId));

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0f0f10]">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full mb-6">
              <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Booking Confirmed!
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Your reservation has been successfully confirmed
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
              Booking ID: <span className="font-mono font-semibold text-[#e53935]">{booking.bookingId}</span>
            </p>
          </div>

          {/* Booking Details Card */}
          <div className="bg-white dark:bg-[#1a1a1a] rounded-3xl shadow-xl overflow-hidden mb-8">
            {/* Vehicle Image */}
            {vehicle && (
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full h-64 object-cover"
              />
            )}

            <div className="p-8">
              {/* Vehicle Info */}
              {vehicle && (
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {vehicle.name}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">{vehicle.category}</p>
                </div>
              )}

              {/* Booking Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-3">
                  <Calendar className="h-6 w-6 text-[#e53935] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Pickup Date</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      {booking.pickupDate}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Calendar className="h-6 w-6 text-[#e53935] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Return Date</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      {booking.returnDate}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-[#e53935] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Pickup Location</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      {booking.pickupLocation}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Car className="h-6 w-6 text-[#e53935] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Status</p>
                    <p className="text-lg font-semibold text-green-600 dark:text-green-400 capitalize">
                      {booking.status}
                    </p>
                  </div>
                </div>
              </div>

              {/* Customer Info */}
              <div className="border-t border-gray-200 dark:border-gray-800 pt-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Customer Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-[#e53935]" />
                    <span className="text-gray-700 dark:text-gray-300">{booking.email}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-[#e53935]" />
                    <span className="text-gray-700 dark:text-gray-300">{booking.phone}</span>
                  </div>
                </div>
              </div>

              {/* Total Cost */}
              <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-900 dark:text-white">Total Cost</span>
                  <span className="text-3xl font-bold text-[#e53935]">
                    ₱{booking.totalCost.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-[#e53935] hover:bg-[#ff4d4d] text-white px-8 py-6 rounded-full"
              onClick={() => window.print()}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Confirmation
            </Button>
            <Link to="/">
              <Button
                variant="outline"
                className="w-full border-2 border-[#e53935] text-[#e53935] hover:bg-[#e53935] hover:text-white px-8 py-6 rounded-full"
              >
                Back to Home
              </Button>
            </Link>
          </div>

          {/* Info Box */}
          <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-6">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">What's Next?</h4>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
              <li>• A confirmation email has been sent to {booking.email}</li>
              <li>• Please arrive 15 minutes before your pickup time</li>
              <li>• Bring a valid driver's license and ID</li>
              <li>• Contact us at +1 (234) 567-890 if you have any questions</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookingConfirmation;
