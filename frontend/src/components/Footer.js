import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Vehicles', path: '/vehicles' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const services = [
    'Car Rental',
    'Long-term Leasing',
    'Corporate Solutions',
    'Airport Pickup',
    'Chauffeur Service'
  ];

  return (
    <footer className="bg-white dark:bg-[#0f0f10] border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="https://customer-assets.emergentagent.com/job_a7a388d3-ee83-4526-ab33-1da1b5ddc219/artifacts/axw9l8dr_Adobe%20Express%20-%20file%20%282%29.png" 
                alt="Drive 'N Go Logo" 
                className="h-12 w-12"
              />
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Drive 'N Go
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Reliable, affordable, and flexible car rentals for every trip. Your journey begins with us.
            </p>
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-[#e53935] dark:hover:bg-[#e53935] text-gray-600 dark:text-gray-400 hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-[#e53935] dark:hover:bg-[#e53935] text-gray-600 dark:text-gray-400 hover:text-white transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-[#e53935] dark:hover:bg-[#e53935] text-gray-600 dark:text-gray-400 hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-[#e53935] dark:hover:bg-[#e53935] text-gray-600 dark:text-gray-400 hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-gray-600 dark:text-gray-400 hover:text-[#e53935] dark:hover:text-[#e53935] transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-600 dark:text-gray-400 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#e53935] flex-shrink-0 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-400 text-sm">
                  123 Drive Street, City Center, ST 12345
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#e53935] flex-shrink-0" />
                <a 
                  href="tel:+1234567890"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#e53935] dark:hover:text-[#e53935] transition-colors duration-200 text-sm"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#e53935] flex-shrink-0" />
                <a 
                  href="mailto:info@drivengo.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#e53935] dark:hover:text-[#e53935] transition-colors duration-200 text-sm"
                >
                  info@drivengo.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {currentYear} Drive 'N Go. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link 
                to="/privacy" 
                className="text-gray-600 dark:text-gray-400 hover:text-[#e53935] dark:hover:text-[#e53935] transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-gray-600 dark:text-gray-400 hover:text-[#e53935] dark:hover:text-[#e53935] transition-colors duration-200 text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
