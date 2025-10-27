import { useState } from 'react';
import AboutSection from '../components/AboutSection';
import BookNowSection from '../components/BookNowSection';
import BookingModal from '../components/BookingModal';
import HeroCarousel from '../components/HeroCarousel';
import ServicesTiles from '../components/ServicesTiles';

export default function Home() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div>
      <HeroCarousel onBookNow={() => setIsBookingModalOpen(true)} />
      <ServicesTiles />
      <AboutSection />
      <BookNowSection onBookNow={() => setIsBookingModalOpen(true)} />
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </div>
  );
}
