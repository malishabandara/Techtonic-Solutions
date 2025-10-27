import { motion } from 'framer-motion';
import { Award, Briefcase, MonitorSmartphone, Network, Target, TrendingUp, Users } from 'lucide-react';

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'We uphold the highest standards in every solution we deliver — from technology recommendations to long-term digital transformation strategies.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'We act as your dedicated technology partner — aligning our success with yours through close collaboration and transparency.',
  },
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'Our consulting approach is outcome-oriented, ensuring measurable business impact through practical and scalable IT solutions.',
  },
  {
    icon: TrendingUp,
    title: 'Innovation',
    description: 'We constantly embrace emerging technologies — enabling our clients to stay ahead in an ever-evolving digital landscape.',
  },
];

export default function About() {
  return (
    <div>
      {/* --- Hero Section --- */}
      <section className="bg-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold mb-4"
          >
            About SYNERIS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Empowering organizations with modern IT solutions and strategic consulting to drive growth, innovation, and digital transformation.
          </motion.p>
        </div>
      </section>

      {/* --- Mission Section --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At <span className="font-semibold text-purple-700">SYNERIS</span>, we believe that digital success starts with understanding business fundamentals. 
                Our mission is to empower companies by aligning technology with strategy — 
                providing tailored IT solutions that enhance efficiency, agility, and customer experience.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We partner with businesses across industries to assess their current operations, identify improvement opportunities, 
                and implement robust systems such as POS, ERP, and HRIS — all without the need for an in-house IT department.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-purple-100 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Businesses Choose SYNERIS</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-2">✓</span>
                  <span className="text-gray-700">Tailored IT consulting designed around your business goals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-2">✓</span>
                  <span className="text-gray-700">End-to-end support — from requirement analysis to deployment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-2">✓</span>
                  <span className="text-gray-700">Specialized expertise in POS, HRIS, and ERP system integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-2">✓</span>
                  <span className="text-gray-700">No need for an internal IT team — we become your dedicated digital partner</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Services Section --- */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our IT Solutions & Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Providing business-driven, future-ready digital solutions that streamline operations and accelerate growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow"
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MonitorSmartphone className="text-purple-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">POS System Solutions</h3>
              <p className="text-gray-600">
                Seamless, efficient, and scalable POS solutions for retail and restaurants to manage sales, inventory, and customers effortlessly.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow"
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="text-purple-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">HRIS & ERP Implementation</h3>
              <p className="text-gray-600">
                We design and deploy integrated systems that simplify workforce management, financials, and operations across your organization.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow"
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Network className="text-purple-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dedicated IT Consulting</h3>
              <p className="text-gray-600">
                We act as your outsourced technology partner — studying your business model and creating IT solutions that evolve with your goals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Core Values Section --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The foundation of our success and the reason clients trust us as their long-term technology partner.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-purple-600" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="py-20 bg-purple-600 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto px-6"
        >
          <h2 className="text-4xl font-bold mb-6">Let’s Build Your Digital Future Together</h2>
          <p className="text-lg mb-8 leading-relaxed">
            Whether you need a new POS system, HRIS platform, or a complete digital strategy — 
            SYNERIS is ready to be your trusted technology partner.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-purple-700 px-10 py-4 rounded-full font-semibold text-lg shadow-md hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}
