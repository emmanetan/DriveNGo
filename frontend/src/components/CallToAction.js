import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-[#1a1a1a] to-gray-900 dark:from-black dark:via-[#0f0f10] dark:to-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#e53935] rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ff4d4d] rounded-full blur-3xl animate-pulse animation-delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Icon Badge */}
          <div className="inline-flex items-center space-x-2 bg-[#e53935]/20 backdrop-blur-sm border border-[#e53935]/30 rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-5 w-5 text-[#e53935]" />
            <span className="text-sm font-medium text-white">
              Limited Time Offer
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Hit the Road?
          </h2>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Book your dream car today and experience the freedom of the open road. 
            <span className="text-[#e53935] font-semibold"> Get 10% off</span> your first rental!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/booking">
              <Button 
                size="lg"
                className="bg-[#e53935] hover:bg-[#ff4d4d] text-white px-10 py-7 text-lg rounded-full shadow-2xl hover:shadow-[#e53935]/50 transition-all duration-300 group min-w-[250px]"
              >
                Reserve Your Car Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-7 text-lg rounded-full backdrop-blur-sm transition-all duration-300 min-w-[250px]"
              >
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-gray-400">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm">24/7 Available</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm">Instant Confirmation</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm">No Hidden Fees</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Road Lines */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden opacity-20">
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-white" />
        <div className="absolute bottom-6 left-0 right-0 h-1 bg-white animate-road-line" />
        <div className="absolute bottom-12 left-0 right-0 h-1 bg-white animate-road-line animation-delay-500" />
      </div>
    </section>
  );
};

export default CallToAction;
