import { motion } from "framer-motion";

export default function ServiceSection() {
  return (
    <section className="pt-4 pb-10 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid flex flex-col-reverse lg:grid-cols-2 gap-14 items-center">
          {/* Left Side: Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-lg aspect-w-16 aspect-h-9"
          >
            <img
              src="/team.jpg"
              alt="IT Consulting Services"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right Side: Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-extrabold text-purple-700 mb-7 ">
              Complete IT Support Without an In-House Team
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              Our consulting model ensures that you get high-quality IT services
              without the need to hire or manage a separate IT department. We
              handle everything from coordination to execution through our
              trusted network of technology partners.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              Whether it’s system integration, cloud infrastructure, or
              connecting you with expert developers, we provide a seamless
              experience so you can focus entirely on your core business.
            </p>
            <p className="text-gray-700 text-lg">
              With us, you get better service, reduced costs, and reliable
              end-to-end IT solutions — all managed by professionals who truly
              care about your success.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
