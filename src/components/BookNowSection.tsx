import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, Users } from "lucide-react";

interface BookNowSectionProps {
  onBookNow: () => void;
}

export default function BookNowSection({ onBookNow }: BookNowSectionProps) {
  const PURPLE_COLOR = "text-purple-700";
  const BG_PURPLE_COLOR = "bg-purple-700";

  return (
    // --- CHANGED ---
    // Changed background to bg-slate-100 to create contrast
    <section className="py-24 bg-slate-100 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Card Container */}
        {/* --- CHANGED --- */}
        {/* Added bg-white to the card so it pops off the slate background */}
        <div className="bg-white rounded-3xl p-10 md:p-16 shadow-2xl">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-extrabold mb-6 ${PURPLE_COLOR}`}>
              Transform Ideas Into Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Book your <span className="font-semibold text-purple-600">free 60-minute strategy call</span> 
              with our digital experts to uncover opportunities, identify pain points, 
              and map out a high-impact roadmap tailored for your business.
            </p>
          </motion.div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-center p-8 border border-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300`}
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5 bg-purple-100">
                <Calendar size={28} className={PURPLE_COLOR} />
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${PURPLE_COLOR}`}>
                Flexible Scheduling
              </h3>
              <p className="text-gray-600 text-base">
                Choose a time that works best for your team. We’ll adapt to your timezone.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`text-center p-8 border border-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300`}
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5 bg-purple-100">
                <Clock size={28} className={PURPLE_COLOR} />
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${PURPLE_COLOR}`}>
                60-Minute Deep Dive
              </h3>
              <p className="text-gray-600 text-base">
                Gain actionable clarity through a focused one-hour strategy discussion.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={`text-center p-8 border border-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300`}
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5 bg-purple-100">
                <Users size={28} className={PURPLE_COLOR} />
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${PURPLE_COLOR}`}>
                Expert-Led Consultation
              </h3>
              <p className="text-gray-600 text-base">
                Speak directly with senior consultants who specialize in scaling digital growth.
              </p>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(109, 40, 217, 0.4)",
              }}
              whileTap={{ scale: 0.97 }}
              onClick={onBookNow}
              className={`${BG_PURPLE_COLOR} text-white lg:px-12 lg:py-5 px-6 py-2 rounded-full lg:text-lg text-sm font-semibold hover:bg-purple-800 transition-all duration-300 inline-flex items-center justify-center space-x-3 shadow-lg`}
            >
              <Calendar size={22} />
              <span>Book Your Free Consultation</span>
              <ArrowRight size={22} />
            </motion.button>
            <p className="mt-6 text-gray-600 text-base">
              100% free — no sales pitch, no pressure. Let’s shape your next big move.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}