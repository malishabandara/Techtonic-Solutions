import { motion } from 'framer-motion';
import { ArrowRight, Building2, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'personal',
    icon: User,
    title: 'My Techtonic',
    headline: 'Your Personal, Private IT Department.',
    description:
      'Confidential tech management, device guidance, and one-on-one training designed around your personal and professional privacy.',
    link: '/my-techtonic',
    // Styles for Service A (Personal -> Emerald/Teal)
    styles: {
      border: 'border-emerald-500',
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
      headlineColor: 'text-emerald-700',
      hoverText: 'group-hover:text-emerald-600',
      buttonHover: 'hover:text-emerald-700',
    }
  },
  {
    id: 'business',
    icon: Building2,
    title: 'Techtonic Pro',
    headline: 'Strategic IT Roadmaps for Business Efficiency.',
    description:
      'Comprehensive system study, solution roadmaps, and end-to-end implementation of best-in-class systems.',
    link: '/techtonic-pro',
    // Styles for Service B (Business -> Navy Blue)
    styles: {
      border: 'border-blue-900',
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-900',
      headlineColor: 'text-blue-900',
      hoverText: 'group-hover:text-blue-900',
      buttonHover: 'hover:text-blue-800',
    }
  },
];

export default function ServicesTiles() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          {/* Increased from text-3xl to text-4xl/5xl */}
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Select Your Solution
          </h2>
          {/* Increased from text-lg to text-xl */}
          <p className="text-slate-500 max-w-3xl mx-auto text-xl leading-relaxed">
            Whether you need private technology management or enterprise-grade strategy, we have a dedicated path for you.
          </p>
        </motion.div>

        {/* Service Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`group relative bg-white p-12 rounded-sm shadow-sm hover:shadow-2xl transition-all duration-300 border-t-8 ${service.styles.border}`}
              >
                {/* Icon Container */}
                <div className={`${service.styles.iconBg} w-20 h-20 rounded-lg flex items-center justify-center mb-10 transition-transform group-hover:scale-110 duration-300`}>
                  {/* Increased icon size slightly */}
                  <Icon className={service.styles.iconColor} size={40} strokeWidth={1.5} />
                </div>

                {/* Title: Increased from text-2xl to text-3xl */}
                <h3 className={`text-3xl font-bold text-slate-800 mb-4 transition-colors ${service.styles.hoverText}`}>
                  {service.title}
                </h3>

                {/* Headline: Increased from text-lg to text-xl */}
                <h4 className={`text-xl font-semibold mb-6 ${service.styles.headlineColor}`}>
                  {service.headline}
                </h4>

                {/* Description: Increased from text-base to text-lg */}
                <p className="text-slate-500 leading-relaxed mb-10 text-lg">
                  {service.description}
                </p>

                {/* Link/Action: Added text-lg */}
                <Link
                  to={service.link}
                  className={`inline-flex items-center font-semibold text-lg text-slate-700 transition-all group/link ${service.styles.buttonHover}`}
                >
                  Explore {service.title}
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform transform group-hover/link:translate-x-1" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}