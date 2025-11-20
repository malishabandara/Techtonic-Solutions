import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TechtonicAcademySection() {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          // Changed border color to Dark Pink (pink-600)
          className="relative bg-slate-50 rounded-sm p-10 md:p-16 shadow-sm hover:shadow-lg transition-shadow duration-300 border-t-8 border-pink-600 overflow-hidden group"
        >
          {/* Background Decoration (Subtle Watermark) */}
          <div className="absolute -right-10 -bottom-10 text-pink-100 opacity-50 transform rotate-12 pointer-events-none">
            <GraduationCap size={300} strokeWidth={0.5} />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8">
            
            {/* Icon Section */}
            <div className="flex-shrink-0">
              {/* Icon Background & Color */}
              <div className="bg-pink-50 w-20 h-20 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
                <GraduationCap className="text-pink-600" size={40} strokeWidth={1.5} />
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                Techtonic Academy
              </h2>
              {/* Headline in Darker Pink for readability */}
              <h3 className="text-lg font-semibold text-pink-700 mb-4">
                Data Skills for Smarter Decisions.
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-2xl">
                Specialized training and analytical services that turn raw data into actionable business intelligence, empowering your team and leadership.
              </p>
              
              <Link
                to="/techtonic-academy"
                // Button hover effects mapped to Pink
                className="inline-flex items-center px-6 py-3 bg-white border border-slate-200 rounded hover:border-pink-500 hover:text-pink-600 text-slate-700 font-semibold transition-all duration-300 shadow-sm group/btn"
              >
                Explore Academy
                <ArrowRight className="ml-2 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}