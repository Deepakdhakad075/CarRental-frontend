/*eslint-disable*/
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
// function CarCard({ car, wide }) {
//   const [selected, setSelected] = useState(1);

//   return (
//     <div
//       className={`transition-all duration-300 w-full ${
//         wide
//           ? 'flex flex-row items-center bg-white rounded-xl shadow-md p-1 mb-6'
//           : 'flex flex-col bg-white rounded-xl shadow-md mb-6'
//       }`}
//       style={{ border: '1px solid #E2E8F0' }}
//     >
//       {wide ? (
//         // Wide card layout (unchanged)
//         <div className="flex flex-row items-center w-full justify-between p-2">
//           {/* Image */}
//           <div className="flex-shrink-0 w-36 h-28 mr-4">
//             <img
//               src={car.img}
//               alt={car.name}
//               className="object-cover  rounded-lg border w-full"
//             />
//           </div>
//           {/* Info & Packages */}
//           <div className="flex flex-row items-center w-full justify-between">
//             <div className="flex flex-col justify-center min-w-[130px] mr-8">
//               <h2 className="text-lg font-semibold text-gray-700">
//                 {car.name} <span className="text-xs">{car.type}</span>
//               </h2>
//               <div className="flex space-x-1 2xl:space-x-5 text-gray-500 mt-1 2xl:mt-2 text-xs 2xl:text-sm">
//                 <span>🕹 {car.transmission}</span>
//                 <span>⛽ {car.fuel}</span>
//                 <span>🚙 {car.seats}</span>
//               </div>
//               <div className="text-xs text-gray-600 mt-2 whitespace-nowrap">
//                 {selected === 2 ? (
//                   <span>Unlimited kms</span>
//                 ) : (
//                   <span>
//                     {car.packages[selected].included} kms included | Extra kms @
//                     ₹13/km
//                     <br />
//                     <span style={{ color: '#8F95A3' }}>Excluding GST</span>
//                   </span>
//                 )}
//               </div>
//             </div>
//             <div className="flex flex-row space-x-1 min-w-[190px]">
//               {car.packages.map((pkg, idx) => (
//                 <button
//                   key={pkg.label}
//                   onClick={() => setSelected(idx)}
//                   className={`px-1 py-2 rounded-md border text-xs 2xl:text-sm font-medium transition-all ${
//                     selected === idx
//                       ? 'bg-[rgba(49,46,129,0.6)] text-white shadow-md'
//                       : 'bg-white text-gray-700 border-gray-300'
//                   }`}
//                 >
//                   <div>{pkg.label}</div>
//                   <div className="font-bold">₹{pkg.price}</div>
//                   <div className="text-xs mt-1">{pkg.description}</div>
//                 </button>
//               ))}
//             </div>
//             <CustomButton
//               variant="primary"
//               className="min-w-[100px] !rounded-full !text-12"
//             >
//               Book Now
//             </CustomButton>
//           </div>
//         </div>
//       ) : (
//         // Non-wide card layout
//         <>
//           {/* Top Section - 70% */}
//           <div className="flex w-full h-[70%] p-2">
//             {/* Car Image */}
//             <div className="flex-shrink-0 w-[38%] h-full ">
//               <img
//                 src={car.img}
//                 alt={car.name}
//                 className="object-cover rounded-lg border w-full "
//               />
//             </div>
//             {/* Car Info & Packages */}
//             <div className="flex flex-col justify-between w-full">
//               <div>
//                 <h2 className="text-base font-semibold text-gray-800 ">
//                   {car.name}{' '}
//                   <span className="text-xs text-primary-300">{car.type}</span>
//                 </h2>
//                 <div className="flex space-x-1 md:space-x-2 2xl:space-x-4 text-indigo-900  text-10 md:text-12 2xl:text-sm font-medium">
//                   <span>🕹 {car.transmission}</span>
//                   <span>⛽ {car.fuel}</span>
//                   <span>🚙 {car.seats}</span>
//                 </div>
//               </div>

//               {/* Package Buttons */}
//               <div className="flex rounded-lg bg-white p-1 space-x-1 mt-1">
//                 {car.packages.map((pkg, idx) => (
//                   <button
//                     key={pkg.label}
//                     onClick={() => setSelected(idx)}
//                     className={`flex-1 px-2 py-1 rounded-md border text-xs transition-all focus:outline-none ${
//                       selected === idx
//                         ? 'bg-[rgba(49,46,129,0.6)] text-white shadow-md'
//                         : 'bg-white text-indigo-900 border-gray-200'
//                     }`}
//                   >
//                     <div>{pkg.label}</div>
//                     <div className="font-semibold text-xs">₹{pkg.price}</div>
//                     <div className="text-xs mt-1">{pkg.description}</div>
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Bottom Section - 30% */}
//           <div className="flex items-center justify-between p-2 border-t border-gray-200 h-[30%]">
//             <div className="text-xs text-indigo-900">
//               {selected === 2 ? (
//                 <span>Unlimited kms</span>
//               ) : (
//                 <span>
//                   {car.packages[selected].included} kms included | Extra kms @
//                   ₹13/km
//                   <br />
//                   <span style={{ color: '#8F95A3' }}>Excluding GST</span>
//                 </span>
//               )}
//             </div>
//             <CustomButton
//               variant="primary"
//               className="min-w-[100px] !rounded-full !text-12"
//             >
//               Book Now
//             </CustomButton>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

function CarCard({ car, wide }) {
  const [selected, setSelected] = useState(1);

  // ✅ Handle dynamic fields safely with fallbacks
  const carName =
    car?.brand && car?.model ? (
      `${car.brand} ${car.model}`
    ) : (
      <span className="text-red-600">Unknown Car</span>
    );
  const carType = car?.carType || <span className="text-red-600">N/A</span>;
  const carFuel = car?.fuelType || <span className="text-red-600">N/A</span>;
  const carTransmission = car?.transmission || (
    <span className="text-red-600">N/A</span>
  );
  const carSeats = car?.seats || <span className="text-red-600">N/A</span>;
  const carImg =
    car?.images?.[0]?.url ||
    'https://via.placeholder.com/150x100?text=No+Image';
  const carPrice = car?.pricing?.daily || (
    <span className="text-red-600">N/A</span>
  );

  // ✅ Static fallback packages (to keep the UI same)
  const packages = [
    {
      label: 'Hourly',
      price: car?.pricing?.hourly || '—',
      description: 'Hourly Plan',
      included: 10,
    },
    {
      label: 'Daily',
      price: car?.pricing?.daily || '—',
      description: 'Daily Plan',
      included: 100,
    },
    {
      label: 'Weekly',
      price: car?.pricing?.weekly || '—',
      description: 'Weekly Plan',
      included: 700,
    },
  ];

  // ✅ Build the object expected by your UI
  const carData = {
    img: carImg,
    name: carName,
    type: carType,
    fuel: carFuel,
    transmission: carTransmission,
    seats: carSeats,
    packages,
  };

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
        // ✅ Wide Card Layout
        <div className="flex flex-row items-center w-full justify-between p-2">
          {/* Image */}
          <div className="flex-shrink-0 w-36  mr-2">
            <img
              src={carData.img}
              alt={carData.name}
              className="object-cover rounded-lg border w-full"
            />
          </div>

          {/* Info & Packages */}
          <div className="flex flex-row items-center w-full justify-between">
            <div className="flex flex-col justify-center min-w-[130px] mr-8">
              <h2 className="text-lg font-semibold text-gray-700">
                {carData.name} <span className="text-xs">{carData.type}</span>
              </h2>
              <div className="flex space-x-1 2xl:space-x-5 text-gray-500 mt-1 2xl:mt-2 text-xs 2xl:text-sm">
                <span>🕹 {carData.transmission}</span>
                <span>⛽ {carData.fuel}</span>
                <span>🚙 {carData.seats}</span>
              </div>
              <div className="text-xs text-gray-600 mt-2 whitespace-nowrap">
                {selected === 2 ? (
                  <span>Unlimited kms</span>
                ) : (
                  <span>
                    {carData.packages[selected].included} kms included | Extra
                    kms @ ₹13/km
                    <br />
                    <span style={{ color: '#8F95A3' }}>Excluding GST</span>
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-row space-x-1 min-w-[190px]">
              {carData.packages.map((pkg, idx) => (
                <button
                  key={pkg.label}
                  onClick={() => setSelected(idx)}
                  className={`px-1 py-2 rounded-md border text-xs 2xl:text-sm font-medium transition-all ${
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
        // ✅ Non-Wide Card Layout (same UI)
        <>
          <div className="flex w-full h-[70%] p-2 gap-2">
            {/* Image */}
            <div className="flex-shrink-0 w-[38%] h-full flex items-center justify-center bg-gray-50 rounded-lg border">
              <img
                src={carData.img}
                alt={carData.name}
                className="max-h-full max-w-full object-contain rounded-lg"
              />
            </div>

            {/* Info & Packages */}
            <div className="flex flex-col justify-between w-full">
              <div>
                <h2 className="text-base font-semibold text-gray-800">
                  {carData.name}{' '}
                  <span className="text-xs text-primary-300">
                    {carData.type}
                  </span>
                </h2>
                <div className="flex space-x-1 md:space-x-2 2xl:space-x-4 text-indigo-900 text-10 md:text-12 2xl:text-sm font-medium">
                  <span>🕹 {carData.transmission}</span>
                  <span>⛽ {carData.fuel}</span>
                  <span>🚙 {carData.seats}</span>
                </div>
              </div>

              {/* Packages */}
              <div className="flex rounded-lg bg-white p-1 space-x-1 mt-1">
                {carData.packages.map((pkg, idx) => (
                  <button
                    key={pkg.label}
                    onClick={() => setSelected(idx)}
                    className={`flex-1 xl:px-2 px-1 py-1 leading-3 rounded-md border lg:text-xs text-10 transition-all focus:outline-none ${
                      selected === idx
                        ? 'bg-[rgba(49,46,129,0.6)] text-white shadow-md'
                        : 'bg-white text-indigo-900 border-gray-200'
                    }`}
                  >
                    <div>{pkg.label}</div>
                    <div className="font-semibold text-xs">₹{pkg.price}</div>
                    <div className="text-xs mt-1">{pkg.description}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex items-center justify-between p-2 border-t border-gray-200 h-[30%]">
            <div className="text-xs text-indigo-900">
              {selected === 2 ? (
                <span>Unlimited kms</span>
              ) : (
                <span>
                  {carData.packages[selected].included} kms included | Extra kms
                  @ ₹13/km
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

// export default function CarCardsGroup({ cars }) {
//   const [wide, setWide] = useState(false);
//   console.log(cars, 'cars data inside carlisting');
//   return (
//     <div className="w-full flex flex-col items-center">
//       {/* Toggle View Controls */}
//       <div className="flex items-end justify-end w-full max-w-6xl px-4 mb-4">
//         <div className="flex items-center space-x-2">
//           <button
//             onClick={() => setWide(false)}
//             className={`p-2 rounded-md border ${
//               !wide ? 'bg-indigo-700 text-white' : 'bg-white text-gray-700'
//             }`}
//           >
//             <FaThLarge />
//           </button>
//           <button
//             onClick={() => setWide(true)}
//             className={`p-2 rounded-md border ${
//               wide ? 'bg-indigo-700 text-white' : 'bg-white text-gray-700'
//             }`}
//           >
//             <FaListUl />
//           </button>
//         </div>
//       </div>

//       {/* Grid or List View */}
//       <div
//         className={`${
//           wide
//             ? 'flex flex-col w-full items-center'
//             : 'grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl'
//         }`}
//       >
//         {cars.map((car, idx) => (
//           <CarCard car={car} wide={wide} key={car.name + idx} />
//         ))}
//       </div>
//     </div>
//   );
// }



export default function CarCardsGroup({ cars }) {
  const [wide, setWide] = useState(false);

  console.log(cars, "cars data inside carlisting");

  return (
    <div className="w-full flex flex-col items-center">
      {/* Toggle View Controls */}
      <div className="hidden md:flex items-end justify-end w-full max-w-6xl px-4 mb-4">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setWide(false)}
            className={`p-2 rounded-md border transition-colors duration-300 ${
              !wide
                ? "bg-indigo-700 text-white border-indigo-700"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            <FaThLarge />
          </button>
          <button
            onClick={() => setWide(true)}
            className={`p-2 rounded-md border transition-colors duration-300 ${
              wide
                ? "bg-indigo-700 text-white border-indigo-700"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
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
            ? "flex flex-col w-full items-center"
            : "grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl"
        }`}
      >
        {cars.map((car, idx) => (
          <CarCard car={car} wide={wide} key={car.name + idx} />
        ))}
      </div>
    </div>
  );
}
