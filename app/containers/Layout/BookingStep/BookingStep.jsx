import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Container from '@/components/custom-pages/container'; // Adjust as needed
import { FaBullseye } from 'react-icons/fa';

// Features for left and right
const featuresLeft = [
  {
    title: 'Service Speciality',
    description:
      'Expert team finds your perfect car. Road trips, work, or daily errands – we listen & match you to the ideal vehicle.',
  },
  {
    title: 'Experience the Unique Self Drive Difference',
    description:
      'Skip the hassle! Precise Self Drive offers a fun, easy car rental experience for everyone. Open the door to discovery. Every drive, a journey.',
  },
  {
    title: 'Handle Emergency Situations',
    description:
      'Rent with confidence: Roadside help, safety features, and 24/7 assistance ensure your peace of mind.',
  },
];

const featuresRight = [
  {
    title: 'High-Technology Instruments',
    description:
      'Our tech streamlines your rental process. Get there fast, and our online booking makes reservations a breeze.',
  },
  {
    title: 'Access Control System',
    description:
      'Our vehicles encompass keyless access structures that provide secure and realistic entry for delivered peace of mind.',
  },
  {
    title: 'Experience Support Team',
    description:
      '24/7 support from our dedicated team helps you navigate any issue, big or small.',
  },
];

const BookingSteps = () => {
  const carRef = useRef(null);
  const inView = useInView(carRef, { once: true, margin: '-100px' });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        rotate: 90,
        transition: { duration: 1.5, ease: 'easeInOut' },
      });
    }
  }, [inView, controls]);

  return (
    <Container
      variant="white"
      header={
        <>
          <h1 className="text-2xl bg-slate-200 md:text-4xl font-bold text-center text-slate-800 md:mb-2 font-montserrat">
            Our Facilities
          </h1>
        </>
      }
    >
      <div className="relative !bg-slate-200 w-full flex flex-col md:flex-row items-center justify-center md:gap-6 gap-4 px-4 md:px-10 pb-6">
        {/* Left Features */}
        <div className="flex flex-col gap-10 md:w-1/3 text-center md:text-right">
          {featuresLeft.map((item, index) => (
            <div key={index}>
              <div className="flex items-center justify-center md:justify-end gap-2 mb-2 text-lg md:text-xl font-bold text-[#0f1c4d] font-montserrat">
                <FaBullseye className="text-red-500 "  />
                <span>{item.title}</span>
              </div>
              <p className="text-gray-600 text-sm md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Center Image - Animated on scroll */}
        <motion.div
          ref={carRef}
          animate={controls}
          initial={{ rotate: 0 }}
          className="relative w-40 md:w-60 lg:w-72 flex-shrink-0"
        >
          <img
            src="/images/center-car.png" // Make sure the path is correct
            alt="Center Car"
            className="w-full h-auto object-contain mx-auto"
          />
        </motion.div>

        {/* Right Features */}
        <div className="flex flex-col gap-10 md:w-1/3 text-center md:text-left">
          {featuresRight.map((item, index) => (
            <div key={index}>
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2 text-lg md:text-xl font-bold text-[#0f1c4d] font-montserrat">
                <FaBullseye className="text-red-500" />
                <span>{item.title}</span>
              </div>
              <p className="text-gray-600 text-sm md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default BookingSteps;
