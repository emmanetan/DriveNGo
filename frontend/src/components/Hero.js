import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-[10000ms] hover:scale-110"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/33987617/pexels-photo-33987617.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent dark:from-black/90 dark:via-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-[#e53935]/10 backdrop-blur-sm border border-[#e53935]/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <CheckCircle className="h-4 w-4 text-[#e53935]" />
            <span className="text-sm font-medium text-white">
              Trusted by 10,000+ Happy Customers
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
            Drive Your Way
            <br />
            <span className="text-[#e53935]">with Drive 'N Go</span>
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed animate-slide-up animation-delay-200">
            Reliable, affordable, and flexible car rentals for every trip. 
            Experience the freedom of the open road with our premium fleet.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-400">
            <Link to="/booking">
              <Button 
                size="lg"
                className="bg-[#e53935] hover:bg-[#ff4d4d] text-white px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-[#e53935]/50 transition-all duration-300 group w-full sm:w-auto"
              >
                Book a Car
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            <Link to="/vehicles">
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg rounded-full backdrop-blur-sm transition-all duration-300 w-full sm:w-auto"
              >
                View Fleet
              </Button>
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 animate-fade-in animation-delay-600">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#e53935] mb-2">50+</div>
              <div className="text-sm text-gray-300">Premium Vehicles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#e53935] mb-2">24/7</div>
              <div className="text-sm text-gray-300">Customer Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#e53935] mb-2">5★</div>
              <div className="text-sm text-gray-300">Average Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
