import { motion } from 'framer-motion';
import { Award, Lock, TrendingUp } from 'lucide-react';

const values = [
  {
    icon: Lock,
    title: 'Integrity & Trust',
    description: 'Maintaining the highest standards of professional discretion and confidentiality.',
  },
  {
    icon: TrendingUp,
    title: 'Strategic Partnership',
    description: 'Going beyond simple fixes to provide long-term, value-driven solutions.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Delivering robust documentation and successful, seamless implementations.',
  },
];

export default function About() {
  return (
    <div>
     <section
  className="relative py-20 bg-cover bg-center"
  style={{ backgroundImage: `url('/team.jpg')` }}
>
  {/* Overlay for better readability */}
  <div className="absolute inset-0 bg-black/50"></div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-5xl md:text-6xl font-bold mb-4"
    >
      The Techtonic Advantage: Built on Experience and Trust.
    </motion.h1>
  </div>
</section>
      {/* --- Our Story Section --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Techtonic Solutions was founded to deliver enterprise-level IT strategy and support to individuals and SMEs who need efficiency, clarity, and unwavering privacy. Our deep understanding of complex business processes allows us to create strategic IT roadmaps that truly drive growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- Mission Section --- */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              To be the premier IT solutions partner known for delivering personalized service, strategic roadmaps, and end-to-end system implementation, ensuring every client's technology is an asset, not an obstacle.
            </p>
          </motion.div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Values</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
          <h2 className="text-4xl font-bold mb-6">Let's Build Your Solution Together</h2>
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
