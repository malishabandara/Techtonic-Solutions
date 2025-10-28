import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-extrabold text-purple-700 mb-6">
              Your Dedicated IT Partner
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              We are your trusted IT consulting partner, committed to helping
              businesses find the right technological solutions through our
              network of expert partners. Our goal is to connect you with
              reliable professionals who can bring your digital vision to life.
            </p>
            <p className="text-gray-700 text-lg">
              From system integration, cloud solutions, and IT consultancy to
              connecting you with skilled software development teams, we ensure
              your business has the right tools and partnerships to succeed in
              the digital world.
            </p>
          </motion.div>

          {/* Right Side: Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-lg aspect-w-16 aspect-h-9"
          >
            <img
              src="/form2.jpg"
              alt="About Company"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
