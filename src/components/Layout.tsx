import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { ReactNode, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import BookingModal from './BookingModal';
import WhatsAppButton from './WhatsAppButton';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    // { path: '/services', label: 'Services' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    // Use a light gray background to make content sections pop
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-white/80 backdrop-blur-md fixed w-full top-0 z-40 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-purple-600">SYNERIS</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-purple-600'
                      : 'text-gray-700 hover:text-purple-600'
                  }`}
                >
                  {link.label}
                  {/* Animated underline for active link */}
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

      {/* Main Content Area */}
      {/* pt-16 (h-16) on mobile, md:pt-20 (md:h-20) on desktop to offset fixed nav */}
      <main className="pt-16 md:pt-20">
        {/* THIS IS THE KEY ALIGNMENT FIX:
          This div wraps all page content ({children}) in the same max-width
          container as the header and footer, with vertical padding.
        */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Column 1: Brand */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">SYNERIS</h3>
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
            </div>
            {/* Column 3: Contact */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Get in Touch
              </h4>
              <p className="text-slate-400 text-sm mb-4">
                Ready to transform your organization? Get in touch with us
                today.
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
            <p>&copy; {new Date().getFullYear()} SYNERIS. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating utility components */}
      <WhatsAppButton />
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
}