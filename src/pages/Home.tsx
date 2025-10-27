import { useState } from 'react';
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
      <BookNowSection onBookNow={() => setIsBookingModalOpen(true)} />
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </div>
  );
}
