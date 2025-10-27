import { motion } from 'framer-motion';
import ServicesTiles from '../components/ServicesTiles';

export default function Services() {
  return (
    <div>
      <section className="bg-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold mb-4"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Comprehensive transformation readiness assessment services designed to prepare your organization for success
          </motion.p>
        </div>
      </section>

      <ServicesTiles />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Assessment?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">10+</div>
                <p className="text-gray-600">Years of Experience</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
                <p className="text-gray-600">Organizations Assessed</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
                <p className="text-gray-600">Customized Solutions</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
