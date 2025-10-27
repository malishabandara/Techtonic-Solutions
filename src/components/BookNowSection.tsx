import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, Users } from "lucide-react";

interface BookNowSectionProps {
  onBookNow: () => void;
}

export default function BookNowSection({ onBookNow }: BookNowSectionProps) {
  const PURPLE_COLOR = "text-purple-700";
  const BG_PURPLE_COLOR = "bg-purple-700";
  const RING_PURPLE_COLOR = "ring-purple-500";

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Card Container with Background Image and Glass Effect */}
        <div
          className="relative rounded-3xl p-10 md:p-16 shadow-2xl overflow-hidden"
          style={{
            backgroundImage: 'url("/form.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Glass overlay - Reduced opacity here (bg-white/50 instead of bg-white/10) */}
          {/* Also increased blur to make sure text is still readable over the now more visible image */}
          <div className="absolute inset-0 bg-white/50 backdrop-blur-md border border-white/20 rounded-3xl"></div> 

          {/* Card Content */}
          <div className="relative z-10">
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
              <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
                Book your <span className="font-semibold text-purple-200">free 60-minute strategy call </span> 
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
                className={`text-center p-8 rounded-2xl transition-all duration-300 bg-white/20 hover:bg-white/30 ring-1 ring-white/20 hover:${RING_PURPLE_COLOR} shadow-lg`}
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5 bg-purple-50/30">
                  <Calendar size={28} className={PURPLE_COLOR} />
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${PURPLE_COLOR}`}>
                  Flexible Scheduling
                </h3>
                <p className="text-white/80 text-base">
                  Choose a time that works best for your team. We’ll adapt to your timezone.
                </p>
              </motion.div>

              {/* Feature 2 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`text-center p-8 rounded-2xl transition-all duration-300 bg-white/20 hover:bg-white/30 ring-1 ring-white/20 hover:${RING_PURPLE_COLOR} shadow-lg`}
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5 bg-purple-50/30">
                  <Clock size={28} className={PURPLE_COLOR} />
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${PURPLE_COLOR}`}>
                  60-Minute Deep Dive
                </h3>
                <p className="text-white/80 text-base">
                  Gain actionable clarity through a focused one-hour strategy discussion.
                </p>
              </motion.div>

              {/* Feature 3 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className={`text-center p-8 rounded-2xl transition-all duration-300 bg-white/20 hover:bg-white/30 ring-1 ring-white/20 hover:${RING_PURPLE_COLOR} shadow-lg`}
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5 bg-purple-50/30">
                  <Users size={28} className={PURPLE_COLOR} />
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${PURPLE_COLOR}`}>
                  Expert-Led Consultation
                </h3>
                <p className="text-white/80 text-base">
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
                className={`
                  ${BG_PURPLE_COLOR} text-white px-12 py-5 rounded-full text-lg font-semibold
                  hover:bg-purple-800 transition-all duration-300 ease-in-out
                  inline-flex items-center justify-center space-x-3 shadow-lg
                `}
              >
                <Calendar size={22} />
                <span>Book Your Free Consultation</span>
                <ArrowRight size={22} />
              </motion.button>
              <p className="mt-6 text-white/80 text-base">
                100% free — no sales pitch, no pressure. Let’s shape your next big move.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}