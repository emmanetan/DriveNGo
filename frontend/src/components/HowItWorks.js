import React from 'react';
import { Search, Calendar, Key, Car } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'Choose a Car',
      description: 'Browse our extensive fleet and select the perfect vehicle for your journey.'
    },
    {
      icon: Calendar,
      number: '02',
      title: 'Book Online',
      description: 'Complete your reservation in minutes with our secure online booking system.'
    },
    {
      icon: Key,
      number: '03',
      title: 'Pick Up',
      description: 'Collect your keys at your chosen location. Quick and hassle-free process.'
    },
    {
      icon: Car,
      number: '04',
      title: 'Drive & Enjoy',
      description: 'Hit the road and enjoy your adventure with our premium, well-maintained vehicle.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-[#0f0f10] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#e53935]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#e53935]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            How It <span className="text-[#e53935]">Works</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Four simple steps to get you on the road
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-[#e53935] via-[#e53935] to-[#e53935] opacity-20" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative group"
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                {/* Card */}
                <div className="bg-white dark:bg-[#1a1a1a] rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:shadow-[#e53935]/20 transition-all duration-500 hover:-translate-y-2 relative z-10">
                  {/* Number Badge */}
                  <div className="absolute -top-4 -right-4">
                    <div className="bg-gradient-to-br from-[#e53935] to-[#ff4d4d] text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold shadow-lg">
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-[#e53935]/20 blur-xl rounded-full group-hover:bg-[#e53935]/30 transition-all duration-500" />
                    <div className="relative bg-gray-100 dark:bg-[#0f0f10] p-4 rounded-2xl w-fit group-hover:bg-gradient-to-br group-hover:from-[#e53935] group-hover:to-[#ff4d4d] transition-all duration-500">
                      <Icon className="h-8 w-8 text-[#e53935] group-hover:text-white transition-colors duration-500" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-0">
                    <div className="w-8 h-8 text-[#e53935] opacity-30">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Text */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Ready to get started? 
            <span className="text-[#e53935] font-semibold ml-2">
              Book your car in under 5 minutes!
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
