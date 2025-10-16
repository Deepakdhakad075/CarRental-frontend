import React from 'react';
import { FileText, Car, User, Star } from 'lucide-react';

const stats = [
  {
    icon: <FileText className="w-8 h-8 text-pink-600" />,
    value: '200K+',
    label: 'Customers Served',
    bg: 'bg-pink-100',
  },
  {
    icon: <Car className="w-8 h-8 text-green-600" />,
    value: '100 Million+',
    label: 'Kms',
    bg: 'bg-green-100',
  },
  {
    icon: <User className="w-8 h-8 text-blue-600" />,
    value: '4.3',
    label: 'Rating on App',
    bg: 'bg-blue-100',
  },
];

const StatsShowcase = () => {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-10 bg-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 min-h-[500px]">
        
        {/* Left Side - Stacked Stats */}
        <div className="relative flex-1 flex flex-col items-center lg:items-start justify-center gap-6 sm:gap-8">
          
          {/* Card 1 (Top) */}
          <div
            className={`rounded-xl p-6 sm:p-8 shadow-xl flex flex-col items-center justify-center ${stats[1].bg} transition-all`}
            style={{
              zIndex: 1,
              width: '100%',
              maxWidth: '240px',
              transform: 'translateX(0px)',
            }}
          >
            <div className="mb-3 sm:mb-4">{stats[1].icon}</div>
            <h3 className="text-2xl sm:text-3xl font-bold text-indigo-900 mb-1">
              {stats[1].value}
            </h3>
            <p className="text-sm sm:text-base font-medium text-slate-700 text-center">
              {stats[1].label}
            </p>
          </div>

          {/* Card 2 (Center) */}
          <div
            className={`rounded-xl p-8 sm:p-10 shadow-2xl flex flex-col items-center justify-center ${stats[0].bg} transition-all`}
            style={{ zIndex: 2, width: '100%', maxWidth: '280px' }}
          >
            <div className="mb-3 sm:mb-4">{stats[0].icon}</div>
            <h3 className="text-3xl sm:text-4xl font-bold text-indigo-900 mb-1">
              {stats[0].value}
            </h3>
            <p className="text-base sm:text-lg font-medium text-gray-700 text-center">
              {stats[0].label}
            </p>
          </div>

          {/* Card 3 (Bottom) */}
          <div
            className={`rounded-xl p-6 sm:p-8 shadow-xl flex flex-col items-center justify-center ${stats[2].bg} transition-all`}
            style={{
              zIndex: 1,
              width: '100%',
              maxWidth: '240px',
              transform: 'translateX(0px)',
            }}
          >
            <div className="mb-3 sm:mb-4">{stats[2].icon}</div>
            <h3 className="text-2xl sm:text-3xl font-bold text-indigo-900 mb-1">
              {stats[2].value}
            </h3>
            <p className="text-sm sm:text-base font-medium text-gray-700 text-center">
              {stats[2].label}
            </p>
          </div>
        </div>

        {/* Right Side - Rating Text */}
        <div className="flex-1 flex flex-col items-center lg:items-start justify-center text-center lg:text-left p-4 sm:p-6 w-full">
          <div className="flex gap-1 mb-3 justify-center lg:justify-start">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
            ))}
          </div>
          <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 leading-snug max-w-md">
            8 Out of 10 customers love{' '}
            <span className="text-red-600">ZoomRide</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsShowcase;
