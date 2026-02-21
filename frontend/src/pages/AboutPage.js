import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Target, Heart, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AboutPage = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our service, from vehicle quality to customer support.'
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Our customers are at the heart of everything we do. Your satisfaction is our success.'
    },
    {
      icon: Target,
      title: 'Reliability',
      description: 'Count on us for dependable service, well-maintained vehicles, and transparent pricing.'
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'We continuously improve our services with the latest technology and industry best practices.'
    }
  ];

  const milestones = [
    { year: '2018', title: 'Company Founded', description: 'Started with 5 vehicles and a dream' },
    { year: '2020', title: '1,000+ Customers', description: 'Reached our first thousand happy customers' },
    { year: '2022', title: 'Fleet Expansion', description: 'Expanded to 50+ premium vehicles' },
    { year: '2024', title: '10,000+ Rentals', description: 'Celebrated 10,000 successful rentals' }
  ];

  const team = [
    {
      name: 'Maria Santos',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/5467593/pexels-photo-5467593.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      description: 'Visionary leader with 15+ years in the automotive industry'
    },
    {
      name: 'Carlos Reyes',
      role: 'Operations Manager',
      image: 'https://images.pexels.com/photos/34129727/pexels-photo-34129727.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      description: 'Expert in fleet management and customer service'
    },
    {
      name: 'Juan dela Cruz',
      role: 'Customer Relations Head',
      image: 'https://images.pexels.com/photos/30004315/pexels-photo-30004315.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      description: 'Dedicated to ensuring exceptional customer experiences'
    }
  ];

  const achievements = [
    '50+ Premium Vehicles',
    '10,000+ Happy Customers',
    '5 Star Average Rating',
    '24/7 Customer Support',
    '98% Customer Satisfaction',
    'Award-Winning Service'
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
              About <span className="text-[#e53935]">Drive 'N Go</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your trusted partner for premium car rental services in the Philippines
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Our <span className="text-[#e53935]">Story</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  Founded in 2018, Drive 'N Go began with a simple vision: to provide Filipinos with reliable, affordable, and premium car rental services that exceed expectations.
                </p>
                <p>
                  What started as a small operation with just 5 vehicles has grown into one of the most trusted car rental services in the region, serving thousands of satisfied customers.
                </p>
                <p>
                  Today, we pride ourselves on our diverse fleet of well-maintained vehicles, exceptional customer service, and commitment to making every journey memorable.
                </p>
                <p>
                  Our team works tirelessly to ensure that whether you're renting for business or pleasure, your experience with Drive 'N Go is nothing short of excellent.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/33987617/pexels-photo-33987617.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Luxury car"
                className="rounded-3xl shadow-2xl w-full h-64 object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/27243718/pexels-photo-27243718.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Electric car"
                className="rounded-3xl shadow-2xl w-full h-64 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white dark:bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Our <span className="text-[#e53935]">Values</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="text-center group"
                >
                  <div className="mb-6 inline-block relative">
                    <div className="absolute inset-0 bg-[#e53935]/20 blur-xl rounded-full group-hover:bg-[#e53935]/30 transition-all duration-500" />
                    <div className="relative bg-gradient-to-br from-[#e53935] to-[#ff4d4d] p-6 rounded-3xl group-hover:scale-110 transition-transform duration-500">
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Our <span className="text-[#e53935]">Journey</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Key milestones in our story
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#e53935] to-[#ff4d4d]" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col gap-8`}
                >
                  <div className="lg:w-1/2 text-center lg:text-left">
                    <div className={index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}>
                      <div className="inline-block bg-[#e53935] text-white px-6 py-2 rounded-full font-bold text-2xl mb-4">
                        {milestone.year}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="hidden lg:block relative z-10">
                    <div className="w-6 h-6 bg-[#e53935] rounded-full border-4 border-white dark:border-[#0f0f10]" />
                  </div>

                  <div className="lg:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white dark:bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our <span className="text-[#e53935]">Team</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              The people behind Drive 'N Go's success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group text-center"
              >
                <div className="relative mb-6 overflow-hidden rounded-3xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-[#e53935] font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-900 via-[#1a1a1a] to-gray-900 dark:from-black dark:via-[#0f0f10] dark:to-black rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#e53935]/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#e53935]/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Our <span className="text-[#e53935]">Achievements</span>
                </h2>
                <p className="text-xl text-gray-300">
                  Numbers that speak for themselves
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
                  >
                    <CheckCircle className="h-6 w-6 text-[#e53935] flex-shrink-0" />
                    <span className="text-white font-semibold text-center">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white dark:bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Join Thousands of Satisfied Customers
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10">
            Experience the Drive 'N Go difference today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button 
                size="lg"
                className="bg-[#e53935] hover:bg-[#ff4d4d] text-white px-10 py-7 text-lg rounded-full shadow-xl hover:shadow-[#e53935]/50 transition-all duration-300 group"
              >
                Book Your Car
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            <Link to="/vehicles">
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-[#e53935] text-[#e53935] hover:bg-[#e53935] hover:text-white px-10 py-7 text-lg rounded-full transition-all duration-300"
              >
                View Our Fleet
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
