import { motion } from 'framer-motion';
import {
  Briefcase,
  CheckCircle,
  Cpu,
  Map,
  Network,
  Rocket,
  Target,
  Users,
} from 'lucide-react';

const services = [
  {
    icon: Target,
    title: 'Understanding Your Business Goals',
    description:
      'We begin by studying your business model, workflow, and objectives to design technology solutions perfectly aligned with your vision and operational needs.',
  },
  {
    icon: Cpu,
    title: 'Providing Smart IT Solutions',
    description:
      'We deliver end-to-end IT solutions by introducing the best POS systems, HRIS platforms, and ERP providers to optimize your organization’s performance and scalability.',
  },
  {
    icon: Network,
    title: 'Acting as Your Dedicated IT Partner',
    description:
      'Instead of relying on an in-house IT team, we serve as your long-term technology partner — managing integrations, updates, and improvements with full accountability.',
  },
  {
    icon: Map,
    title: 'Strategic Roadmap & Implementation',
    description:
      'Our experts design a customized technology roadmap and implement solutions that streamline your business processes while minimizing downtime.',
  },
  {
    icon: Users,
    title: 'Client-Focused Collaboration',
    description:
      'We work closely with your stakeholders to ensure smooth adoption, continuous support, and measurable outcomes that align with your goals.',
  },
  {
    icon: Briefcase,
    title: 'Consulting for Digital Transformation',
    description:
      'From system modernization to business process automation, our consulting services empower you to transform operations efficiently and sustainably.',
  },
  {
    icon: Rocket,
    title: 'Driving Growth & Innovation',
    description:
      'We help you stay ahead by integrating the latest technologies that enhance efficiency, decision-making, and customer experience across your organization.',
  },
  {
    icon: CheckCircle,
    title: 'Delivering Lasting Success',
    description:
      'Our mission doesn’t end at deployment — we ensure ongoing optimization, analytics, and performance monitoring for continued success.',
  },
];

export default function ServicesTiles() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our IT Consulting & Solutions Approach
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide strategic technology consulting, offering POS, HRIS, and ERP systems tailored to your business — so you can focus on growth while we handle your IT needs.
          </p>
        </motion.div>

        {/* Service Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="text-purple-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
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
  );
}
