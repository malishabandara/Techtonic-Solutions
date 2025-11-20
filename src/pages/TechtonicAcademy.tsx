import { motion } from 'framer-motion';
import { BarChart3, BookOpen, Database, FileText, MessageCircle, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import BookingModal from '../components/BookingModal';

export default function TechtonicAcademy() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const skillsWorkshops = [
    {
      icon: FileText,
      title: 'Crystal Reports Mastery',
      description: 'From basic report design to complex formula creation and dynamic report linking.',
    },
    {
      icon: Database,
      title: 'SQL Query Fundamentals',
      description: 'Practical training for business users to confidently extract and analyze data directly from databases.',
    },
    {
      icon: TrendingUp,
      title: 'Advanced Excel for Business',
      description: 'Mastering data visualization, Pivot Tables, and VLOOKUPs for efficient management reporting.',
    },
  ];

  const strategicServices = [
    {
      icon: BarChart3,
      title: 'Custom Report Development',
      description: 'Creating bespoke, high-impact Crystal Reports and SQL-based dashboards based on specific business KPIs.',
    },
    {
      icon: Database,
      title: 'Data Cleansing and Integrity',
      description: 'Projects focused on improving the quality and reliability of business data.',
    },
    {
      icon: TrendingUp,
      title: 'Performance Insights',
      description: 'Developing analytical views that uncover trends, identify bottlenecks, and inform strategic business moves.',
    },
  ];

  return (
    <div>
      {/* Header Section */}
      <section 
        className="relative py-20 md:py-44 bg-cover bg-center"
        style={{ backgroundImage: `url('/unity.jpg')` }}
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
            Techtonic Academy: Data Skills for Smarter Decisions.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto text-white/90"
          >
            Specialized training and analytical services that turn raw data into actionable business intelligence, empowering your team and leadership.
          </motion.p>
        </div>
      </section>

      {/* Skills Enhancement Workshops Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Skills Enhancement Workshops
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillsWorkshops.map((workshop, index) => {
              const Icon = workshop.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border-l-4 border-purple-600"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-purple-600" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {workshop.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {workshop.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Strategic Data Analysis & Reporting Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Strategic Data Analysis & Reporting
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {strategicServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border-l-4 border-purple-600"
                >
                  <div className="flex flex-col items-start">
                    <div className="bg-purple-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-purple-600" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer Note & CTA */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-purple-700/50 p-8 rounded-xl mb-8">
              <BookOpen className="w-12 h-12 mx-auto mb-4 text-purple-200" />
              <p className="text-xl text-purple-100 leading-relaxed">
                All training and analytical services can be delivered through customized on-site workshops or remote sessions tailored to your team's specific needs.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
            >
              <MessageCircle size={20} />
              <span>Inquire About Corporate Training or Analytical Projects</span>
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

