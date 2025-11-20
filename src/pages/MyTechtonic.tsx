import { motion } from 'framer-motion';
import { GraduationCap, Headphones, Lock, MessageCircle, Plane, Shield, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import BookingModal from '../components/BookingModal';

export default function MyTechtonic() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const services = [
    {
      icon: Headphones,
      title: 'Dedicated Support & Management',
      description: 'Single assigned technical resource for all needs. Remote and on-site support for PCs, Laptops, Mobile Devices, and Home Networking.',
    },
    {
      icon: Shield,
      title: 'Digital Security & Data Assurance',
      description: 'Advanced security setup (VPNs, firewalls, threat management). Encrypted, scheduled data backup and rapid recovery services.',
    },
    {
      icon: ShoppingCart,
      title: 'Tech Procurement Guidance',
      description: 'Unbiased advice and guided purchasing for new hardware (laptops, phones, smart home devices). Subscription and software license management.',
    },
    {
      icon: GraduationCap,
      title: 'One-on-One Training',
      description: 'Personalized lessons on new software, security best practices, and effective cloud service usage.',
    },
    {
      icon: Plane,
      title: 'Travel Tech Preparation',
      description: 'Secure device setup and provisioning for domestic and international travel.',
    },
  ];

  return (
    <div>
      {/* Header Section */}
      <section 
        className="relative py-20 md:py-44 bg-cover  bg-center "
        style={{ backgroundImage: `url('/meeting.jpg')` }}
      >
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            My Techtonic: Your Personal, Private IT Department.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto text-white/90"
          >
            Confidential, dedicated tech support and guidance, ensuring your devices, data, and digital life run flawlessly, prioritizing discretion above all else.
          </motion.p>
        </div>
      </section>

      {/* Privacy Highlight Box */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-purple-50 border-l-4 border-purple-600 p-8 rounded-lg shadow-md"
          >
            <div className="flex items-start space-x-4">
              <div className="bg-purple-600 p-3 rounded-full">
                <Lock className="text-white" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Privacy is Our Policy
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We offer a single, dedicated point of contact, ensuring your personal and professional tech matters remain entirely confidential and secure, away from corporate IT exposure.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Breakdown */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Service Breakdown
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="bg-purple-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-purple-600" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing/Engagement Model */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Choose Your Partnership
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Available on an on-demand/project basis or via a monthly subscription for continuous, dedicated support.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
            >
              <MessageCircle size={20} />
              <span>Discuss My Confidential IT Needs</span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
}

