import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import BookingModal from './BookingModal';
import WhatsAppButton from './WhatsAppButton';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/contact', label: 'Contact Us' },
    { path: '/about', label: 'About Us' },
  ];

  const serviceLinks = [
    { path: '/my-techtonic', label: 'My Techtonic' },
    { path: '/techtonic-pro', label: 'Techtonic Pro' },
    { path: '/techtonic-academy', label: 'Techtonic Academy' },
  ];

  // Check if current path is a service page
  const isServicePage = serviceLinks.some(link => location.pathname === link.path);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 w-full overflow-x-hidden">
      {/* Navigation Bar */}
      <nav className="bg-white/80 backdrop-blur-md fixed w-full top-0 z-40 border-b border-slate-200">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20 max-w-[100%]">
            <Link to="/" className="flex items-center">
              <img src="/logo.png" alt="Techtonic Solutions Logo" className="h-12 w-auto object-cover" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {/* Home */}
              <Link
                to="/"
                className={`relative text-lg font-medium transition-colors ${
                  location.pathname === '/'
                    ? 'text-purple-600'
                    : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                Home
                {location.pathname === '/' && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-600"
                    layoutId="underline"
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  />
                )}
              </Link>

              {/* Services Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                  className={`relative text-lg font-medium transition-colors flex items-center gap-1 ${
                    isServicePage
                      ? 'text-purple-600'
                      : 'text-gray-700 hover:text-purple-600'
                  }`}
                >
                  Services
                  <ChevronDown 
                    size={18} 
                    className={`transition-transform duration-200 ${
                      isServicesDropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                  {isServicePage && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-600"
                      layoutId="underline"
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    />
                  )}
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {isServicesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                    >
                      {serviceLinks.map((link) => (
                        <Link
                          key={link.path}
                          to={link.path}
                          onClick={() => setIsServicesDropdownOpen(false)}
                          className={`block px-4 py-2 text-base transition-colors ${
                            location.pathname === link.path
                              ? 'bg-purple-50 text-purple-600 font-medium'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-purple-600'
                          }`}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Contact Us and About Us */}
              {navLinks.filter(link => link.path !== '/').map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-lg font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-purple-600'
                      : 'text-gray-700 hover:text-purple-600'
                  }`}
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-600"
                      layoutId="underline"
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    />
                  )}
                </Link>
              ))}

              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-purple-700 transition-all duration-200 ease-in-out hover:shadow-md"
              >
                Book Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-slate-200 shadow-lg"
            >
              <div className="px-4 py-4 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block text-base font-medium ${
                      location.pathname === link.path
                        ? 'text-purple-600'
                        : 'text-gray-700 hover:text-purple-600'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-2 border-t border-gray-200">
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Services</p>
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block text-base font-medium py-2 ${
                        location.pathname === link.path
                          ? 'text-purple-600'
                          : 'text-gray-700 hover:text-purple-600'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsBookingModalOpen(true);
                  }}
                  className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium"
                >
                  Book Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="pt-16 md:pt-20 w-full bg-p">
        {/* Removed max-width restriction for full-width layout */}
        <div className="w-full">{children}</div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 w-full">
        <div className="w-full px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Column 1: Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/Logo2.png" alt="Techtonic Solutions Logo" className="h-12 w-auto object-cover" />
                <h3 className="text-2xl font-bold text-white">Techtonic Solutions</h3>
              </div>
              <p className="text-slate-400 text-sm">
                Empowering organizations through transformation readiness
                assessments and strategic guidance.
              </p>
            </div>
            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-slate-300 hover:text-purple-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <h4 className="text-lg font-semibold text-white mb-4 mt-6">
                Our Services
              </h4>
              <ul className="space-y-2">
                {serviceLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-slate-300 hover:text-purple-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Column 3: Contact */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Get in Touch
              </h4>
              <p className="text-slate-400 text-sm mb-4">
                Ready to transform your organization? Get in touch with us today.
              </p>
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-purple-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-purple-700 transition-all duration-200"
              >
                Schedule a Call
              </button>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-10 pt-8 border-t border-slate-700 text-center text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Global Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Components */}
      <WhatsAppButton />
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
}
