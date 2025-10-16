import React, { useState } from 'react';
import CustomButton from '@/components/custom-button/Button';

import { FaThLarge, FaListUl } from 'react-icons/fa'; // Add these icons
// Dummy car data
const carList = [
  {
    name: 'Maruti Ertiga',
    type: 'muv',
    img: '/images/Maruti_Ciaz.jpg',
    seats: '7 Seater',
    fuel: 'Diesel',
    transmission: 'Manual',
    packages: [
      {
        label: '120kms/day',
        price: 7605,
        included: 405,
        description: '405 kms included',
      },
      {
        label: '300kms/day',
        price: 8694,
        included: 1013,
        description: '1013 kms included',
      },
      {
        label: 'Unlimited',
        price: 10383,
        included: 'Unlimited kms',
        description: 'Unlimited kms',
      },
    ],
  },
  {
    name: 'Toyota Innova',
    type: 'muv',
    img: '/images/Maruti_Ciaz.jpg',
    seats: '7 Seater',
    fuel: 'Diesel',
    transmission: 'Manual',
    packages: [
      {
        label: '120kms/day',
        price: 9000,
        included: 405,
        description: '405 kms included',
      },
      {
        label: '300kms/day',
        price: 10500,
        included: 1013,
        description: '1013 kms included',
      },
      {
        label: 'Unlimited',
        price: 12000,
        included: 'Unlimited kms',
        description: 'Unlimited kms',
      },
    ],
  },
  {
    name: 'Toyota Innova',
    type: 'muv',
    img: '/images/Maruti_Ciaz.jpg',
    seats: '7 Seater',
    fuel: 'Diesel',
    transmission: 'Manual',
    packages: [
      {
        label: '120kms/day',
        price: 9000,
        included: 405,
        description: '405 kms included',
      },
      {
        label: '300kms/day',
        price: 10500,
        included: 1013,
        description: '1013 kms included',
      },
      {
        label: 'Unlimited',
        price: 12000,
        included: 'Unlimited kms',
        description: 'Unlimited kms',
      },
    ],
  },
];

// Single card component
function CarCard({ car, wide }) {
  const [selected, setSelected] = useState(1);

  return (
    <div
      className={`transition-all duration-300 w-full ${
        wide
          ? 'flex flex-row items-center bg-white rounded-xl shadow-md p-1 mb-6'
          : 'flex flex-col bg-white rounded-xl shadow-md mb-6'
      }`}
      style={{ border: '1px solid #E2E8F0' }}
    >
      {wide ? (
        // Wide card layout (unchanged)
        <div className="flex flex-row items-center w-full justify-between p-2">
          {/* Image */}
          <div className="flex-shrink-0 w-36 h-28 mr-4">
            <img
              src={car.img}
              alt={car.name}
              className="object-cover  rounded-lg border w-full "
            />
          </div>
          {/* Info & Packages */}
          <div className="flex flex-row items-center w-full justify-between">
            <div className="flex flex-col justify-center min-w-[130px] mr-8">
              <h2 className="text-lg font-semibold text-gray-700">
                {car.name} <span className="text-xs">{car.type}</span>
              </h2>
              <div className="flex space-x-5 text-gray-500 mt-2 text-sm">
                <span>🕹 {car.transmission}</span>
                <span>⛽ {car.fuel}</span>
                <span>🚙 {car.seats}</span>
              </div>
              <div className="text-xs text-gray-600 mt-2 whitespace-nowrap">
                {selected === 2 ? (
                  <span>Unlimited kms</span>
                ) : (
                  <span>
                    {car.packages[selected].included} kms included | Extra kms @
                    ₹13/km
                    <br />
                    <span style={{ color: '#8F95A3' }}>Excluding GST</span>
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-row space-x-1 min-w-[190px]">
              {car.packages.map((pkg, idx) => (
                <button
                  key={pkg.label}
                  onClick={() => setSelected(idx)}
                  className={`px-2 py-2 rounded-md border text-sm font-medium transition-all ${
                    selected === idx
                      ? 'bg-[rgba(49,46,129,0.6)] text-white shadow-md'
                      : 'bg-white text-gray-700 border-gray-300'
                  }`}
                >
                  <div>{pkg.label}</div>
                  <div className="font-bold">₹{pkg.price}</div>
                  <div className="text-xs mt-1">{pkg.description}</div>
                </button>
              ))}
            </div>
            <CustomButton
              variant="primary"
              className="min-w-[100px] !rounded-full !text-12"
            >
              Book Now
            </CustomButton>
          </div>
        </div>
      ) : (
        // Non-wide card layout
        <>
          {/* Top Section - 70% */}
          <div className="flex w-full h-[70%] p-2">
            {/* Car Image */}
            <div className="flex-shrink-0 w-[36%] h-full mr-4">
              <img
                src={car.img}
                alt={car.name}
                className="object-cover rounded-lg border w-full "
              />
            </div>
            {/* Car Info & Packages */}
            <div className="flex flex-col justify-between w-full">
              <div>
                <h2 className="text-base font-semibold text-gray-800 mb-1">
                  {car.name}{' '}
                  <span className="text-xs text-gray-500">{car.type}</span>
                </h2>
                <div className="flex space-x-3 lg:space-x-4 text-indigo-900 mt-1 text-xs lg:text-sm font-medium">
                  <span>🕹 {car.transmission}</span>
                  <span>⛽ {car.fuel}</span>
                  <span>🚙 {car.seats}</span>
                </div>
              </div>

              {/* Package Buttons */}
              <div className="flex rounded-lg bg-white p-1 space-x-1 lg:space-x-2 mt-1 ">
                {car.packages.map((pkg, idx) => (
                  <button
                    key={pkg.label}
                    onClick={() => setSelected(idx)}
                    className={`flex-1 xl:px-2 px-1 py-1 leading-3 rounded-md border lg:text-xs text-10 transition-all focus:outline-none ${
                      selected === idx
                        ? 'bg-[rgba(49,46,129,0.6)] text-white shadow-md'
                        : 'bg-white text-indigo-900 border-gray-200'
                    }`}
                  >
                    <div className='font-thine'>{pkg.label}</div>
                    <div className="font-semibold  text-sm">₹{pkg.price}</div>
                    <div className="text-xs mt-1">{pkg.description}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section - 30% */}
          <div className="flex items-center justify-between p-2 border-t border-gray-200 h-[30%]">
            <div className="text-xs text-indigo-900">
              {selected === 2 ? (
                <span>Unlimited kms</span>
              ) : (
                <span>
                  {car.packages[selected].included} kms included | Extra kms @
                  ₹13/km
                  <br />
                  <span style={{ color: '#8F95A3' }}>Excluding GST</span>
                </span>
              )}
            </div>
            <CustomButton
              variant="primary"
              className="min-w-[100px] !rounded-full !text-12"
            >
              Book Now
            </CustomButton>
          </div>
        </>
      )}
    </div>
  );
}

export default function CarCardsGroup() {
  const [wide, setWide] = useState(false);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Toggle View Controls */}
      <div className="flex items-end justify-end w-full max-w-6xl px-4 mb-4">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setWide(false)}
            className={`p-2 rounded-md border ${
              !wide ? 'bg-indigo-700 text-white' : 'bg-white text-gray-700'
            }`}
          >
            <FaThLarge />
          </button>
          <button
            onClick={() => setWide(true)}
            className={`p-2 rounded-md border ${
              wide ? 'bg-indigo-700 text-white' : 'bg-white text-gray-700'
            }`}
          >
            <FaListUl />
          </button>
        </div>
      </div>

      {/* Grid or List View */}
      <div
        className={`${
          wide
            ? 'flex flex-col w-full items-center'
            : 'grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl'
        }`}
      >
        {carList.map((car, idx) => (
          <CarCard car={car} wide={wide} key={car.name + idx} />
        ))}
      </div>
    </div>
  );
}
