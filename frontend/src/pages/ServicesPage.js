import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Clock, Shield, Headphones, MapPin, CreditCard, Users, Briefcase, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ServicesPage = () => {
  const services = [
    {
      icon: Car,
      title: 'Daily Car Rental',
      description: 'Rent a car for a day or week with flexible pickup and drop-off options. Perfect for short trips and city exploration.',
      features: ['Flexible rental periods', 'Multiple pickup locations', 'No hidden fees', '24-hour support']
    },
    {
      icon: Clock,
      title: 'Long-term Leasing',
      description: 'Extended rental periods from 1 month to 1 year with special discounted rates for long-term customers.',
      features: ['Monthly payment plans', 'Free maintenance', 'Vehicle replacement option', 'Dedicated account manager']
    },
    {
      icon: Briefcase,
      title: 'Corporate Solutions',
      description: 'Tailored fleet solutions for businesses with volume discounts and priority service for corporate clients.',
      features: ['Fleet management', 'Invoicing options', 'Priority booking', 'Customized packages']
    },
    {
      icon: MapPin,
      title: 'Airport Pickup & Delivery',
      description: 'Convenient airport pickup and drop-off service. Your car will be ready when you land.',
      features: ['Meet & greet service', 'Flight tracking', 'Express checkout', 'All major airports']
    },
    {
      icon: Users,
      title: 'Chauffeur Service',
      description: 'Professional driver service available for all vehicle categories. Sit back and enjoy the ride.',
      features: ['Licensed drivers', 'Local expertise', 'Hourly or daily rates', 'Luxury experience']
    },
    {
      icon: Shield,
      title: 'Insurance & Protection',
      description: 'Comprehensive insurance coverage options to protect you and the vehicle during your rental period.',
      features: ['Collision damage waiver', 'Theft protection', 'Personal accident insurance', 'Third-party liability']
    }
  ];

  const additionalServices = [
    {
      icon: CreditCard,
      title: 'Flexible Payment',
      description: 'Multiple payment options including credit cards, debit cards, and online banking.'
    },
    {
      icon: Headphones,
      title: '24/7 Roadside Assistance',
      description: 'Round-the-clock support for any emergencies or issues during your rental.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0f0f10]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-[#1a1a1a] to-gray-900 dark:from-black dark:via-[#0f0f10] dark:to-black">
          <div className="absolute top-20 right-10 w-96 h-96 bg-[#e53935]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#e53935]/20 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-[#e53935]">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive car rental solutions designed to meet all your transportation needs
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white dark:bg-[#1a1a1a] rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:shadow-[#e53935]/20 transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Icon */}
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-[#e53935]/20 blur-xl rounded-full group-hover:bg-[#e53935]/30 transition-all duration-500" />
                    <div className="relative bg-gradient-to-br from-[#e53935] to-[#ff4d4d] p-4 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-500">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#e53935] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                        <div className="w-1.5 h-1.5 bg-[#e53935] rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white dark:bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Additional <span className="text-[#e53935]">Benefits</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Extra services to enhance your rental experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="flex items-start space-x-4 bg-gray-50 dark:bg-[#0f0f10] rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="bg-[#e53935] p-3 rounded-xl">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-[#1a1a1a] to-gray-900 dark:from-black dark:via-[#0f0f10] dark:to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#e53935] rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ff4d4d] rounded-full blur-3xl animate-pulse animation-delay-1000" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience Our Services?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Book your vehicle now and enjoy premium service at competitive rates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button 
                size="lg"
                className="bg-[#e53935] hover:bg-[#ff4d4d] text-white px-10 py-7 text-lg rounded-full shadow-2xl hover:shadow-[#e53935]/50 transition-all duration-300 group"
              >
                Book Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-7 text-lg rounded-full backdrop-blur-sm transition-all duration-300"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
