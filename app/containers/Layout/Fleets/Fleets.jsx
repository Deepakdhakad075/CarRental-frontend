import React, { useState } from 'react';
import Container from '@/components/custom-pages/container';
import CustomButton from '@/components/custom-button/Button';

function Fleets() {
  const [showAll, setShowAll] = useState(false);

  const carData = [
    { brand: 'Hyundai', model: 'Creta', image: '/images/Maruti_Ciaz.jpg' },
    {
      brand: 'Toyota',
      model: 'Innova Crysta',
      image: '/images/Maruti_Ciaz.jpg',
    },
    { brand: 'Maruti', model: 'Ciaz', image: '/images/Maruti_Ciaz.jpg' },
    { brand: 'Mahindra', model: 'Scorpio', image: '/images/Maruti_Ciaz.jpg' },
    { brand: 'Honda', model: 'City', image: '/images/Maruti_Ciaz.jpg' },
    { brand: 'Ford', model: 'EcoSport', image: '/images/Maruti_Ciaz.jpg' },
    { brand: 'Kia', model: 'Seltos', image: '/images/Maruti_Ciaz.jpg' },
    { brand: 'Renault', model: 'Duster', image: '/images/Maruti_Ciaz.jpg' },
    { brand: 'Honda', model: 'City', image: '/images/Maruti_Ciaz.jpg' },
    { brand: 'Ford', model: 'EcoSport', image: '/images/Maruti_Ciaz.jpg' },
    { brand: 'Kia', model: 'Seltos', image: '/images/Maruti_Ciaz.jpg' },
    { brand: 'Renault', model: 'Duster', image: '/images/Maruti_Ciaz.jpg' },
  ];

  const visibleCars = showAll ? carData : carData.slice(0, 4);

  return (
    <Container
      variant="white"
      header={
        <>
          <h1 className="text-4xl mt-20 font-bold text-center text-indigo-900 mb-2">
            Our Fleets
          </h1>
          <p className="text-center text-gray-500 mb-4">
            Choose from Wide Range of our Self-Drive Cars
          </p>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-8">
            {visibleCars.map(({ brand, model, image }, index) => (
              <div key={index} className="w-full">
                <div className="group w-full border border-gray-300 rounded-xl shadow-lg overflow-hidden backdrop-blur-md bg-white/10 transition-all duration-300 hover:scale-[1.03]">
                  {/* Image Section */}
                  <div className="relative w-full h-52 overflow-hidden group">
                    <img
                      src={image}
                      alt={model}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-10 w-8 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 28 28"
                        >
                          <path d="M3 13v-2l1-3c.2-.6.8-1 1.5-1h13c.7 0 1.3.4 1.5 1l1 3v2c0 .6-.4 1-1 1h-.5l.5 2v1c0 .6-.4 1-1 1h-1c-.6 0-1-.4-1-1v-1H7v1c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1v-1l.5-2H4c-.6 0-1-.4-1-1zm3.5-5l-.7 2h12.4l-.7-2H6.5z" />
                        </svg>
                        <span className="text-base font-medium text-gray-700">
                          {brand}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-indigo-900">
                        {model}
                      </h3>
                    </div>
                    <div className="text-right">
                      <button className="text-indigo-900 font-medium">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Show More / Show Less Button */}
          <div className="flex justify-center mt-6">
            <div className="flex justify-center mt-6">
              <CustomButton
                variant="primary"
                className="rounded-full px-6 py-2 font-semibold"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? 'Show Less' : 'Show More'}
              </CustomButton>
            </div>
          </div>
        </>
      }
    />
  );
}

export default Fleets;
