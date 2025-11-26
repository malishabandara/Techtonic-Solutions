import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '94774401250'; // 0774401250
    const message = encodeURIComponent('Hello, I would like to know more about your services.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      className="fixed bottom-12 right-10 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors z-50"
      aria-label="Contact us on WhatsApp"
      // Continuous subtle pop animation
      animate={{
        scale: [1, 1.15, 1], // pop in and out
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
      }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle size={28} />
    </motion.button>
  );
}
