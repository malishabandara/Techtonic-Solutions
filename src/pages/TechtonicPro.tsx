import { motion } from 'framer-motion';
import { FileText, Map, MessageCircle, Search, Settings, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import BookingModal from '../components/BookingModal';

export default function TechtonicPro() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const timelineData = [
    {
      phase: 'Phase 1: Analysis & Strategy',
      icon: Search,
      title: 'IT Health Check & System Study',
      description: 'Deep-Dive Analysis of current systems. Stakeholder Workshops for requirements gathering. Delivery of As-Is documents and process maps.',
    },
    {
      phase: 'Phase 1: Analysis & Strategy',
      icon: Map,
      title: 'IT Solution Roadmap Development',
      description: 'Strategic plan outlining solutions. Focus on efficiency, cost reduction, and scalability. ROI analysis.',
    },
    {
      phase: 'Phase 2: Implementation & Partnership',
      icon: ShoppingBag,
      title: 'Product & Vendor Selection',
      description: 'Guided selection of industry-specific systems (POS, HRIS, Garment Management, etc.). Leveraging vetted vendor networks.',
    },
    {
      phase: 'Phase 2: Implementation & Partnership',
      icon: Settings,
      title: 'End-to-End Project Management',
      description: 'Full engagement. Overseeing configuration, data migration, UAT, and go-live.',
    },
    {
      phase: 'Phase 2: Implementation & Partnership',
      icon: FileText,
      title: 'Post-Implementation Support',
      description: 'System handover, detailed documentation, and optional Managed IT Services.',
    },
  ];

  // Helper to get colors based on phase
  const getPhaseStyles = (phase: string) => {
    if (phase.includes('Phase 1')) {
      return {
        dot: 'bg-purple-600',
        border: 'border-purple-600',
        text: 'text-purple-600',
        badge: 'bg-purple-100 text-purple-900',
        line: 'bg-purple-200',
        iconBg: 'bg-purple-50'
      };
    }
    return {
      dot: 'bg-blue-600',
      border: 'border-blue-600',
      text: 'text-blue-600',
      badge: 'bg-blue-100 text-blue-900',
      line: 'bg-blue-200',
      iconBg: 'bg-blue-50'
    };
  };

  return (
    <div className="overflow-x-hidden bg-gray-50">
      {/* Header Section */}
      <section 
        className="relative py-20 md:py-44 bg-cover bg-center"
        style={{ backgroundImage: `url('/puzzle.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            Techtonic Pro: Strategic IT Solutions for Growth and Efficiency.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto text-white/90"
          >
            We transform your operational challenges into documented, efficient processes, partnering with you from strategic analysis to successful system implementation.
          </motion.p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A seamless journey from analysis to implementation.
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            
            {/* DESKTOP ONLY: Continuous Center Line with Gradient Transition */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-200 via-purple-200 to-blue-200 rounded-full z-0"></div>

            {timelineData.map((item, index) => {
              const Icon = item.icon;
              const isPhase1 = item.phase.includes('Phase 1');
              const styles = getPhaseStyles(item.phase);

              return (
                <div 
                  key={index} 
                  className={`relative flex w-full mb-12 md:mb-24
                    ${/* Mobile: Row (Phase 1) vs Row-Reverse (Phase 2) */ ''}
                    ${isPhase1 ? 'flex-row' : 'flex-row-reverse md:flex-row'}
                  `}
                >
                  
                  {/* --- DESKTOP SPACERS --- */}
                  <div className={`hidden md:block w-1/2 flex-shrink-0 ${!isPhase1 && 'order-last'}`}></div>

                  {/* --- MOBILE LINE SEGMENTS (Colored per phase) --- */}
                  <div className={`absolute top-0 bottom-0 w-1 md:hidden z-0
                    ${styles.line}
                    ${isPhase1 ? 'left-8' : 'right-8'}
                    ${index === timelineData.length - 1 ? 'h-1/2' : 'h-full'} 
                  `}></div>

                  {/* --- CENTER DOT / ICON --- */}
                  <div className={`absolute top-0 z-10 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-white shadow-lg
                    ${styles.dot}
                    
                    ${/* Mobile Positioning */ ''}
                    ${isPhase1 ? 'left-8 -translate-x-1/2' : 'right-8 translate-x-1/2'}
                    
                    ${/* Desktop Positioning */ ''}
                    md:left-1/2 md:right-auto md:-translate-x-1/2
                  `}>
                    <span className="text-white font-bold text-sm md:text-lg">{index + 1}</span>
                  </div>

                  {/* --- CONTENT CARD --- */}
                  <motion.div 
                    initial={{ opacity: 0, x: isPhase1 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className={`w-full z-10 relative
                      ${/* Mobile Padding & Text Align */ ''}
                      ${isPhase1 ? 'pl-20 text-left' : 'pr-20 text-right md:text-left'}
                      
                      ${/* Desktop Padding & Width */ ''}
                      md:w-1/2 
                      ${isPhase1 ? 'md:pl-24 md:pr-0' : 'md:pr-24 md:pl-0'}
                    `}
                  >
                    <div className={`bg-white p-6 md:p-8 rounded-xl shadow-lg border-t-4 hover:shadow-2xl transition-all duration-300
                       ${styles.border}
                       ${isPhase1 ? 'md:rounded-tl-none' : 'md:rounded-tr-none'}
                    `}>
                      
                      {/* Phase Label */}
                      <div className={`inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider uppercase rounded-full
                        ${styles.badge}
                        ${!isPhase1 && 'ml-auto md:ml-0'}
                      `}>
                        {item.phase}
                      </div>

                      {/* Title & Icon Wrapper */}
                      <div className={`flex items-center gap-4 mb-3 
                        ${!isPhase1 ? 'flex-row-reverse md:flex-row justify-end md:justify-start' : ''}
                      `}>
                         <div className={`p-2 rounded-lg hidden md:block ${styles.iconBg}`}>
                            <Icon className={styles.text} size={24} />
                         </div>
                         {/* Mobile Icon */}
                         <Icon className={`${styles.text} md:hidden block`} size={24} />
                         
                         <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-tight">
                           {item.title}
                         </h3>
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section 
        className="relative py-20 bg-cover bg-center"
        style={{ backgroundImage: `url('/consult.jpg')` }}
      >
        {/* Dark overlay for better contrast */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 md:p-12 shadow-2xl"
          >
            <h2 className="text-3xl font-bold mb-6 text-white">
              Ready to Transform Your Business Operations?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Let's start with a comprehensive IT Health Check and Strategic Roadmap tailored to your business needs.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
            >
              <MessageCircle size={20} />
              <span>Request an IT Health Check and Strategic Roadmap</span>
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