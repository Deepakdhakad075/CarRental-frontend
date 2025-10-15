import React from 'react';
import { CreditCard, XCircle, IndianRupee } from 'lucide-react';

const promoFeatures = [
  {
    id: 1,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 text-indigo-600 group-hover:scale-110 transition-transform duration-300"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="6" width="20" height="12" rx="2" ry="2" />
        <path d="M2 10h20" />
        <path d="M6 14h2" />
      </svg>
    ),
    title: 'Multiple Payment Options',
    description:
      "Don't let payment mode come in between you and your dream car! Choose from credit card, debit card, net banking, or UPI!",
    bg: 'bg-indigo-50',
  },
  {
    id: 2,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 text-red-500 group-hover:scale-110 transition-transform duration-300"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="4" y="8" width="16" height="8" rx="2" ry="2" />
        <path d="M9 12h6" />
        <path d="M12 9v6" />
      </svg>
    ),
    title: 'Easy Cancellation',
    description:
      'Change of plans made easy with ZoomRide. Enjoy the flexibility to cancel your rental car reservation with just a few clicks.',
    bg: 'bg-red-50',
  },
  {
    id: 3,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 text-green-600 group-hover:scale-110 transition-transform duration-300"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3v18" />
        <path d="M8 7h8" />
        <path d="M8 17h8" />
        <path d="M8 12h8" />
      </svg>
    ),
    title: 'Best Price Guarantee',
    description:
      'We guarantee the lowest prices on self-drive car rentals and subscriptions in India!',
    bg: 'bg-green-50',
  },
];

const PromoFeatures = () => {
  return (
    <section className="py-16 px-6 bg-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-indigo-900 leading-tight inline-block">
          Why ride with{' '}
          <span className="relative inline-block text-indigo-900">
            ZOOM RIDE?
            {/* Dots container inside the word */}
            {/* <span className="absolute -top-4 right-0 flex flex-col items-center gap-[2px]">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-900 opacity-70"></span>
              <span className="w-2 h-2 rounded-full bg-indigo-900 opacity-80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-900 opacity-90"></span>
            </span> */}
          </span>
        </h2>

        <p className="mt-4 text-sm text-gray-600 max-w-xl mx-auto">
          Enjoy flexibility, affordability, and convenience with our self-drive
          car rentals.
        </p>
      </div>
      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
        {promoFeatures.map(({ id, icon, title, description }) => (
          <div
            key={id}
            className="group w-full h-[320px] p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-white hover:bg-gray-50"
          >
            <div className="mb-6 flex items-center justify-center">
              <div className="p-4 rounded-full bg-gray-100 shadow-sm transition-all duration-300">
                {icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-3 group-hover:text-indigo-700 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-center text-gray-600 group-hover:text-gray-800 transition-colors duration-300 text-sm leading-relaxed">
              {description}
            </p>
          </div>
        ))}

       
      </div>
    </section>
  );
};

export default PromoFeatures;
