import React from 'react';
import { DollarSign, Shield, Clock, HeadphonesIcon } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: DollarSign,
      title: 'Affordable Rates',
      description: 'Competitive pricing with no hidden fees. Get the best value for your money with transparent pricing.'
    },
    {
      icon: Shield,
      title: 'Well-Maintained Vehicles',
      description: 'All our vehicles undergo regular maintenance and safety checks for your peace of mind.'
    },
    {
      icon: Clock,
      title: 'Easy Booking',
      description: 'Book your car in minutes with our simple online system. Instant confirmation guaranteed.'
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'Our dedicated support team is always ready to assist you, anytime, anywhere.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-[#0f0f10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose <span className="text-[#e53935]">Drive 'N Go</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Experience the difference with our premium car rental service designed for your convenience
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white dark:bg-[#1a1a1a] rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-[#e53935]/20 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              >
                {/* Icon */}
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-[#e53935]/20 blur-xl rounded-full group-hover:bg-[#e53935]/30 transition-all duration-500" />
                  <div className="relative bg-gradient-to-br from-[#e53935] to-[#ff4d4d] p-4 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-500">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#e53935] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative Element */}
                <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#e53935] to-transparent transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
