import { useState } from 'react';
import AboutSection from '../components/AboutSection';
import BookNowSection from '../components/BookNowSection';
import BookingModal from '../components/BookingModal';
import HeroCarousel from '../components/HeroCarousel';
import InhouseTeam from '../components/InhouseTeam';
import ServicesTiles from '../components/ServicesTiles';

export default function Home() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className=''>
      <HeroCarousel onBookNow={() => setIsBookingModalOpen(true)} />
      <ServicesTiles />
      <AboutSection />
      <InhouseTeam/>
      <BookNowSection onBookNow={() => setIsBookingModalOpen(true)} />
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </div>
  );
}
