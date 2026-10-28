/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TravelerProfiles } from './components/TravelerProfiles';
import { RoomCatalog } from './components/RoomCatalog';
import { ExperiencesSection } from './components/ExperiencesSection';
import { CaobosRestaurant } from './components/CaobosRestaurant';
import { EventsSection } from './components/EventsSection';
import { GallerySection } from './components/GallerySection';
import { WhyUsSection } from './components/WhyUsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingConcierge } from './components/FloatingConcierge';
import { BookingModal } from './components/BookingModal';
import { RoomDetailModal } from './components/RoomDetailModal';
import { Room } from './data/hotelData';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [preselectedRoomId, setPreselectedRoomId] = useState<string | undefined>(undefined);
  const [searchCheckIn, setSearchCheckIn] = useState<string | undefined>(undefined);
  const [searchCheckOut, setSearchCheckOut] = useState<string | undefined>(undefined);
  const [searchGuests, setSearchGuests] = useState<number>(2);

  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');
  const [selectedRoomForDetail, setSelectedRoomForDetail] = useState<Room | null>(null);

  const handleOpenBooking = (
    roomId?: string,
    checkIn?: string,
    checkOut?: string,
    guests?: number
  ) => {
    if (roomId) setPreselectedRoomId(roomId);
    if (checkIn) setSearchCheckIn(checkIn);
    if (checkOut) setSearchCheckOut(checkOut);
    if (guests) setSearchGuests(guests);
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
  };

  const handleSelectTravelerCategory = (category: string) => {
    setActiveCategoryFilter(category);
  };

  const handleViewRoomDetails = (room: Room) => {
    setSelectedRoomForDetail(room);
  };

  return (
    <div className="min-h-screen bg-[#fbf9f4] font-sans text-[#1b1c19] selection:bg-[#ffdeaa] selection:text-[#271900]">
      {/* Top Bar Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="w-full">
        {/* 1. Hero with Availability Search */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 2. Personalized Traveler Experiences */}
        <TravelerProfiles onSelectCategory={handleSelectTravelerCategory} />

        {/* 3. Room Catalog (8 Categories) */}
        <RoomCatalog
          onOpenBooking={handleOpenBooking}
          onViewRoomDetails={handleViewRoomDetails}
          activeCategoryFilter={activeCategoryFilter}
        />

        {/* 4. Wellness, Terrace, Jacuzzi, Romantic & Pasadía Relax ($60.000) */}
        <ExperiencesSection onOpenBooking={() => handleOpenBooking()} />

        {/* 5. Restaurante Gourmet Caobos */}
        <CaobosRestaurant />

        {/* 6. Corporate Events, Meetings & Workshop Services */}
        <EventsSection />

        {/* 7. Hotel Visual Mosaic & Video Tours */}
        <GallerySection />

        {/* 8. Why Hotel Ucla Center */}
        <WhyUsSection />

        {/* 9. Verified Guest Testimonials */}
        <TestimonialsSection />

        {/* 10. Frequently Asked Questions Accordion */}
        <FaqSection />

        {/* 11. Final Call to Action, Location, Maps & Contact Form */}
        <ContactSection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Concierge & WhatsApp Widget */}
      <FloatingConcierge onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Reservation & Price Estimator Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        preselectedRoomId={preselectedRoomId}
        initialCheckIn={searchCheckIn}
        initialCheckOut={searchCheckOut}
        initialGuests={searchGuests}
      />

      {/* Detailed Room Specification Modal */}
      <RoomDetailModal
        room={selectedRoomForDetail}
        onClose={() => setSelectedRoomForDetail(null)}
        onBookRoom={(roomId) => {
          setSelectedRoomForDetail(null);
          handleOpenBooking(roomId);
        }}
      />
    </div>
  );
}
