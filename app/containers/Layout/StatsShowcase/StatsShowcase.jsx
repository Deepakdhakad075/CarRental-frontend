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
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10 min-h-[500px]">
        {/* Stats Stack */}
        <div className="relative flex-1 flex flex-col items-center lg:items-start justify-center lg:ml-4">
          {/* Top Card */}
          <div
            className={`rounded-xl p-7 shadow-xl flex flex-col items-center justify-center ${stats[1].bg}`}
            style={{
              transform: 'translateX(50px)',
              marginBottom: '-20px',
              zIndex: 1,
              width: '240px',
            }}
          >
            <div className="mb-4">{stats[1].icon}</div>
            <h3 className="text-2xl font-bold text-indigo-900 mb-1">
              {stats[1].value}
            </h3>
            <p className="text-sm font-medium text-gray-700 text-center">
              {stats[1].label}
            </p>
          </div>

          {/* Center Card */}
          <div
            className={`rounded-xl p-10 shadow-2xl flex flex-col items-center justify-center ${stats[0].bg}`}
            style={{ zIndex: 2, width: '280px' }}
          >
            <div className="mb-4">{stats[0].icon}</div>
            <h3 className="text-3xl font-bold text-indigo-900 mb-1">
              {stats[0].value}
            </h3>
            <p className="text-base font-medium text-gray-700 text-center">
              {stats[0].label}
            </p>
          </div>

          {/* Bottom Card */}
          <div
            className={`rounded-xl p-7 shadow-xl flex flex-col items-center justify-center ${stats[2].bg}`}
            style={{
              transform: 'translateX(50px)',
              marginTop: '-20px',
              zIndex: 1,
              width: '240px',
            }}
          >
            <div className="mb-4">{stats[2].icon}</div>
            <h3 className="text-2xl font-bold text-indigo-900 mb-1">
              {stats[2].value}
            </h3>
            <p className="text-sm font-medium text-gray-700 text-center">
              {stats[2].label}
            </p>
          </div>
        </div>

        {/* Rating Block */}
        <div className="flex flex-col items-start justify-center text-left left-16  p-6 w-[650px]">
          <div className="flex gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 text-yellow-400" />
            ))}
          </div>
          <p className="text-4xl font-extrabold text-indigo-900 leading-snug">
            8 Out of 10 customers love{' '}
            <span className="text-indigo-700">MyChoize</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsShowcase;