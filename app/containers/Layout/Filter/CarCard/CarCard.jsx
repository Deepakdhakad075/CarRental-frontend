/* eslint-disable */
import React, { useState } from 'react';
import CustomButton from '@/components/custom-button/Button';
import { FaThLarge, FaListUl, FaCar } from 'react-icons/fa';

function CarCard({ car, wide }) {
  const [selected, setSelected] = useState(0);

  // fallback values
  const carImg =
    car?.images?.[0]?.url ||
    'https://via.placeholder.com/300x200?text=No+Image';
  const availability = car?.availability ?? false;
  const color = car?.color || 'N/A';
  const brandModel = `${car?.brand || 'Unknown'} ${car?.model || ''}`;
  const price = car?.pricing?.daily || '—';
  const fuel = car?.fuelType || 'N/A';
  const year = car?.year || 'N/A';
  const mileage = car?.mileage || 0; // Add if exists
  const seats = car?.seats || 0;

  return (
    <div
      className={`transition-all duration-300 w-full bg-white rounded-xl shadow-md mb-6 ${
        wide ? 'flex flex-row p-2' : 'flex flex-col'
      }`}
      style={{ border: '1px solid #E2E8F0' }}
    >
      {/* Car Image */}
      <div className={`relative ${wide ? 'w-40 h-32' : 'w-full h-48'}`}>
        <img
          src={carImg}
          alt={brandModel}
          className="w-full h-full object-cover rounded-t-xl sm:rounded-xl"
        />
        {availability && (
          <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
            Available
          </span>
        )}
      </div>

      {/* Info */}
      <div className={`flex-1 p-3 ${wide ? 'ml-4' : ''}`}>
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-gray-800 text-base sm:text-lg">
            {brandModel}
          </h2>
          <FaCar className="text-gray-500 text-lg" title={color} />
        </div>

        <div className="flex items-center mt-1 space-x-2 text-green-600 font-semibold text-lg sm:text-xl">
          <span>₹{price}</span>
          <span className="text-gray-500 font-normal text-sm">/Day</span>
        </div>

        <div className="flex flex-col sm:flex-row justify-between mt-3 text-gray-500 text-xs sm:text-sm space-y-1 sm:space-y-0 sm:space-x-4">
          <span>{mileage || '20.0'} kmpl</span>
          <span>{fuel}</span>
          <span>{year}</span>
        </div>

        <div className="mt-3">
          <CustomButton
            variant="primary"
            className="w-full sm:w-auto !rounded-full !text-sm"
          >
            Book Now
          </CustomButton>
        </div>
      </div>
    </div>
  );
}

export default function CarCardsGroup({ cars, loading }) {
  const [wide, setWide] = useState(false);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Toggle View */}
      <div className="hidden md:flex items-end justify-end w-full max-w-6xl px-4 mb-4">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setWide(false)}
            className={`p-2 rounded-md border transition-colors duration-300 ${
              !wide
                ? 'bg-indigo-700 text-white border-indigo-700'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
            }`}
          >
            <FaThLarge />
          </button>
          <button
            onClick={() => setWide(true)}
            className={`p-2 rounded-md border transition-colors duration-300 ${
              wide
                ? 'bg-indigo-700 text-white border-indigo-700'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
            }`}
          >
            <FaListUl />
          </button>
        </div>
      </div>

      {/* Grid / List */}
      <div
        className={`${
          wide
            ? 'flex flex-col w-full items-center'
            : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl'
        }`}
      >
        {loading
          ? Array.from({ length: 3 }).map((_, idx) => (
              <div
                key={idx}
                className="animate-pulse bg-gray-200 w-full h-48 rounded-xl mb-6"
              />
            ))
          : cars.map((car, idx) => <CarCard key={car._id} car={car} wide={wide} />)}
      </div>
    </div>
  );
}
