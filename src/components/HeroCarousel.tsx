import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

interface HeroCarouselProps {
  onBookNow: () => void;
}

// Update paths to point to your /public folder assets
const slides = [
  {
    title: 'Transformation Readiness Assessment',
    subtitle: 'Are You Ready for Digital Transformation?',
    description: "Discover your organization's readiness to embrace change and unlock new opportunities with our comprehensive assessment.",
    imageUrl: '/meeting.jpg', // Assumes /public/images/assessment-bg.jpg
  },
  {
    title: 'Strategic Planning',
    subtitle: 'Build Your Transformation Roadmap',
    description: 'We help you create a clear, actionable plan that aligns with your business goals and drives sustainable growth.',
    imageUrl: '/unity.jpg', // Assumes /public/images/planning-bg.jpg
  },
  {
    title: 'Expert Guidance',
    subtitle: 'Navigate Change with Confidence',
    description: 'Leverage our expertise to identify challenges, assess technologies, and design solutions that work for your organization.',
    imageUrl: '/puzzle.jpg', // Assumes /public/images/guidance-bg.jpg
  },
  {
    title: 'Free Exploratory Call',
    subtitle: 'Start Your Journey Today',
    description: 'Schedule a complimentary consultation to discuss your transformation needs and explore how we can help.',
    imageUrl: '/consult.jpg', // Assumes /public/images/consult-bg.jpg
  },
];

export default function HeroCarousel({ onBookNow }: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[600px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          style={{ backgroundImage: `url(${slides[currentSlide].imageUrl})` }}
          className="absolute inset-0 bg-cover bg-center"
        >
          {/* Dark Overlay for text contrast */}
          <div className="absolute inset-0 bg-black bg-opacity-50" />

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 flex h-full items-center justify-center"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-6xl font-bold mb-4"
              >
                {slides[currentSlide].title}
              </motion.h1>
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-2xl md:text-3xl mb-6"
              >
                {slides[currentSlide].subtitle}
              </motion.h2>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl mb-8 max-w-3xl mx-auto"
              >
                {slides[currentSlide].description}
              </motion.p>
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onBookNow}
                className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Book Your Free Call
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full transition-all z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full transition-all z-20"
        aria-label="Next slide"
      >
        <ChevronRight size={32} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}