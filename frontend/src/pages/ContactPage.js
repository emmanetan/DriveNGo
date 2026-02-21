import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { toast } from 'sonner';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Drive Street', 'City Center', 'Manila, Philippines 1000']
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+63 (2) 8123-4567', '+63 917 123 4567', 'Mon-Sun: 24/7']
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@drivengo.com', 'support@drivengo.com', 'bookings@drivengo.com']
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Office: Mon-Fri 8AM-6PM', 'Sat-Sun: 9AM-5PM', 'Rentals: 24/7 Available']
    }
  ];

  const locations = [
    {
      name: 'Main Office - Manila',
      address: '123 Drive Street, City Center, Manila',
      phone: '+63 (2) 8123-4567',
      hours: 'Mon-Fri: 8AM-6PM'
    },
    {
      name: 'NAIA Terminal 3',
      address: 'Arrival Area, Terminal 3, Pasay City',
      phone: '+63 917 123 4567',
      hours: '24/7 Available'
    },
    {
      name: 'Makati Branch',
      address: '456 Business Ave, Makati City',
      phone: '+63 (2) 8765-4321',
      hours: 'Mon-Sun: 7AM-9PM'
    },
    {
      name: 'BGC Branch',
      address: '789 Fort St, Bonifacio Global City',
      phone: '+63 917 987 6543',
      hours: 'Mon-Sun: 7AM-9PM'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Mock form submission
    console.log('Contact form submitted:', formData);
    
    // Store in localStorage for mock
    const existingMessages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    existingMessages.push({
      ...formData,
      timestamp: new Date().toISOString(),
      id: Date.now()
    });
    localStorage.setItem('contactMessages', JSON.stringify(existingMessages));

    toast.success('Message sent successfully! We\'ll get back to you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

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
              Get in <span className="text-[#e53935]">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-[#1a1a1a] rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:shadow-[#e53935]/20 transition-all duration-300 hover:-translate-y-2 text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#e53935] to-[#ff4d4d] rounded-2xl mb-6">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {info.title}
                  </h3>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 dark:text-gray-400">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white dark:bg-[#1a1a1a] rounded-3xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Send us a Message
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Fill out the form below and we'll get back to you within 24 hours
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Juan Dela Cruz"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="h-12"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email" className="text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="juan@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="h-12"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+63 917 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="h-12"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject" className="text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="How can we help you?"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="h-12"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="min-h-[150px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#e53935] hover:bg-[#ff4d4d] text-white py-6 text-lg rounded-full shadow-lg hover:shadow-[#e53935]/50 transition-all duration-300 group"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Locations List */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Our Locations
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Visit us at any of our convenient locations
              </p>

              <div className="space-y-6">
                {locations.map((location, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {location.name}
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-5 w-5 text-[#e53935] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 dark:text-gray-400">
                          {location.address}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-[#e53935] flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400">
                          {location.phone}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-[#e53935] flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400">
                          {location.hours}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Quick <span className="text-[#e53935]">Answers</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Find answers to commonly asked questions
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-[#0f0f10] rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                What documents do I need to rent a car?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                You'll need a valid driver's license, government-issued ID, and a credit or debit card for the security deposit.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-[#0f0f10] rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Can I modify or cancel my booking?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Yes! You can modify or cancel your booking up to 24 hours before pickup for a full refund.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-[#0f0f10] rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Do you offer airport pickup service?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Yes, we offer convenient airport pickup at all major airports. Just select the airport location when booking.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-[#0f0f10] rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Is insurance included in the rental price?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Basic insurance is included. Additional coverage options are available during the booking process.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
