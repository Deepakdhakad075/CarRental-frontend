import React from 'react';
import Container from '@/components/custom-pages/container'; // adjust path

const BookingSteps = () => (
  <Container
    variant="white"
    header={
      <>
        <h1 className="text-4xl font-bold text-center text-indigo-900 mb-2">
          How To Book a Self-Drive Car Online
        </h1>
        <p className="text-center text-gray-500 mb-4">
          Book a car online in Udaipur from ZoomRide in 4 Simple steps.
        </p>

        <div className="w-full">
          <img
            src="/images/steps.png"
            alt="Booking Banner"
            className="w-full object-cover block border-0 outline-none shadow-none"
          />
        </div>
      </>
    }
  ></Container>
);
export default BookingSteps;
