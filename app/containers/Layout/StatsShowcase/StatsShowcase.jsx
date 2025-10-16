import React, { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaAward, FaCarAlt, FaTachometerAlt } from 'react-icons/fa';
import AnimatedCounter from '@/components/AnimatedCounter/AnimatedCounter';

const statData = [
  {
    icon: <FaAward className="text-red-500 w-10 h-10 mb-2" />,
    label: 'Total Awards',
    value: 70,
  },
  {
    icon: <FaCarAlt className="text-red-500 w-10 h-10 mb-2" />,
    label: 'Car Rent Month',
    value: 3000,
  },
  {
    icon: <FaTachometerAlt className="text-red-500 w-10 h-10 mb-2" />,
    label: 'Available Brands',
    value: 30,
  },
];


const StatsShowcase = () => {
  return (
    <section className="py-14 px-6 md:px-12 bg-white font-montserrat">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {statData?.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              {stat.icon}
              <h3 className="text-lg font-semibold text-[#0f1c4d] mb-1">
                {stat.label}
              </h3>
              <p className="text-3xl font-bold text-[#0f1c4d]">
                <AnimatedCounter to={stat.value} />
              </p>
            </div>
          ))}
        </div>

        {/* Description Text */}
        <div className="text-gray-600 text-base md:text-lg leading-relaxed">
          <p>
            <span className="text-[#0f1c4d] font-semibold">Zoom Ride</span> is an award-winning car rental company
            known for excellent customer service, a large fleet with 17 brands, and reliable service. Renting
            over 100 cars monthly, they provide a variety of comfortable and stylish vehicles to meet your needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsShowcase;
