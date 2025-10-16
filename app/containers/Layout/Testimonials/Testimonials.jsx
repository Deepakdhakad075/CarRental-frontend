// import React, { useState } from 'react';
// import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

// const testimonials = [
//   {
//     name: 'Sunil Sharma',
//     location: 'Indore, India',
//     feedback:
//       'I loved the service. The cars were clean and the delivery guy was polite. Thank you for the surprise gift in your car.',
//     image: '/images/logo.png',
//   },
//   {
//     name: 'Preety Naveen',
//     location: 'Jabalpur, India',
//     feedback:
//       'Cheapest yet the best cars. I loved Japanese cars. Great fun on road.',
//     image: '/images/logo.png',
//   },
//   {
//     name: 'Sunil Sharma',
//     location: 'Indore, India',
//     feedback:
//       'I loved the service. The cars were clean and the delivery guy was polite. Thank you for the surprise gift in your car.',
//     image: '/images/logo.png',
//   },
//   {
//     name: 'Preety Naveen',
//     location: 'Jabalpur, India',
//     feedback:
//       'Cheapest yet the best cars. I loved Japanese cars. Great fun on road.',
//     image: '/images/logo.png',
//   },
// ];

// const Testimonials = () => {
//   const [index, setIndex] = useState(0);

//   const prev = () =>
//     setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
//   const next = () =>
//     setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);

//   return (
//     <section className="py-20 px-6 bg-gradient-to-r from-indigo-50 to-purple-50">
//       <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-12 relative">
//         {/* Left Side - Heading & Navigation */}
//         <div className="flex-1 flex flex-col items-start">
//           <h2 className="text-4xl font-extrabold text-indigo-900 leading-tight mb-6">
//             What people say <br /> about <span className="text-indigo-700">us</span>
//           </h2>
//           <p className="text-gray-600 mb-8 max-w-md font-medium">
//             Our clients send us smiles with our services, and we love hearing their feedback.
//           </p>

//           {/* Navigation Arrows */}
//           <div className="flex gap-4 mt-4">
//             <button
//               onClick={prev}
//               className="p-3 rounded-full bg-white shadow-lg hover:bg-indigo-100 transition flex items-center justify-center"
//             >
//               <ArrowLeft className="w-5 h-5 text-indigo-700" />
//             </button>
//             <button
//               onClick={next}
//               className="p-3 rounded-full bg-white shadow-lg hover:bg-indigo-100 transition flex items-center justify-center"
//             >
//               <ArrowRight className="w-5 h-5 text-indigo-700" />
//             </button>
//           </div>
//         </div>

//         {/* Right Side - Carousel */}
//         <div className="flex-1 overflow-hidden max-w-3xl relative">
//           <div
//             className="flex transition-transform duration-700 ease-in-out gap-6"
//             style={{
//               transform: `translateX(-${index * 80}%)`, // partial peek of next card
//             }}
//           >
//             {testimonials.map((t, i) => (
//               <div
//                 key={i}
//                 className="flex-shrink-0 w-[80%] bg-white rounded-3xl shadow-2xl flex flex-col items-center gap-6 p-6 transform transition-all hover:scale-105 hover:shadow-3xl relative"
//               >
//                 {/* Small circular avatar overlapping top */}
//                 <div className="absolute left-14 -top-01  rounded-full p-1 bg-gradient-to-tr from-indigo-500 to-purple-500">
//                   <img
//                     src={t.image}
//                     alt={t.name}
//                     className="w-14 h-14 rounded-full border-4 border-white object-cover"
//                   />
//                 </div>

//                 {/* Card Content */}
//                 <div className="mt-10 text-center">
//                   <div className="flex justify-center gap-1 mb-2">
//                     {[...Array(5)].map((_, i) => (
//                       <Star key={i} className="w-6 h-6 text-yellow-400" />
//                     ))}
//                   </div>
//                   <p className="text-gray-800 text-lg mb-2 font-medium italic leading-relaxed">
//                     “{t.feedback}”
//                   </p>
//                   <h4 className="text-indigo-800 font-bold text-lg">{t.name}</h4>
//                   <p className="text-gray-500 text-sm">{t.location}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sunil Sharma',
    location: 'Indore, India',
    feedback:
      'I loved the service. The cars were clean and the delivery guy was polite. Thank you for the surprise gift in your car.',
    image: '/images/logo.png',
  },
  {
    name: 'Preety Naveen',
    location: 'Jabalpur, India',
    feedback:
      'Cheapest yet the best cars. I loved Japanese cars. Great fun on road.',
    image: '/images/logo.png',
  },
  {
    name: 'Amit Verma',
    location: 'Bhopal, India',
    feedback:
      'Excellent service! I was impressed with the quick delivery and clean cars.',
    image: '/images/logo.png',
  },
  {
    name: 'Priya Singh',
    location: 'Delhi, India',
    feedback:
      'Super affordable and reliable service. I’ll definitely book again!',
    image: '/images/logo.png',
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonials.length) % testimonials.length,
    );
  const next = () =>
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);

  return (
    <section className="py-8 font-montserrat md:py-16 px-4 sm:px-8 bg-slate-200 to-purple-50">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-10 relative">
        {/* Left Section */}
        <div className="flex-1 flex flex-col items-start text-center lg:text-left">
          <h2 className="md:text-3xl text-xl sm:text-4xl w-full md:w-auto text-center md:text-start font-extrabold text-slate-800 leading-tight mb-4">
            What people say <br className="hidden sm:block" /> about{' '}
            <span className="text-red-600">us</span>
          </h2>
          <p className="text-gray-600 mb-6 max-w-md font-medium mx-auto lg:mx-0">
            Our clients send us smiles with our services, and we love hearing
            their feedback.
          </p>

          {/* Navigation Buttons */}
          <div className="flex justify-center lg:justify-start gap-4 mt-2">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-white shadow-lg hover:bg-indigo-100 transition flex items-center justify-center"
            >
              <ArrowLeft className="w-5 h-5 text-red-600" />
            </button>
            <button
              onClick={next}
              className="p-3 rounded-full bg-white shadow-lg hover:bg-indigo-100 transition flex items-center justify-center"
            >
              <ArrowRight className="w-5 h-5 text-red-600" />
            </button>
          </div>
        </div>

        {/* Right Section - Carousel */}
        <div className="flex-1 overflow-hidden w-full relative">
          <div
            className="flex transition-transform duration-700 ease-in-out gap-6 sm:gap-8"
            style={{
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="relative flex-shrink-0 w-full sm:w-[85%] md:w-[70%] lg:w-[50%] bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] px-6 py-10 sm:p-10 flex flex-col items-center text-center"
              >
                {/* Decorative Gradient Border for Avatar */}
                <div className="absolute left-1/2 top-0 transform -translate-x-1/2 rounded-full bg-gradient-to-tr from-red-400 to-red-900 p-[3px] shadow-md">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white object-cover"
                  />
                </div>

                {/* Content */}
                <div className="mt-14 sm:mt-16 px-2 sm:px-4">
                  {/* Rating Stars */}
                  <div className="flex justify-center gap-1 sm:gap-1.5 mb-3 sm:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Feedback Text */}
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg font-medium italic leading-relaxed mb-4 sm:mb-6">
                    “{t.feedback}”
                  </p>

                  {/* Name and Location */}
                  <div>
                    <h4 className="text-indigo-800 font-bold text-base sm:text-lg md:text-xl mb-1">
                      {t.name}
                    </h4>
                    <p className="text-gray-500 text-xs sm:text-sm">
                      {t.location}
                    </p>
                  </div>
                </div>

                {/* Decorative Quote Icon */}
                <div className="absolute top-6 right-6 text-indigo-200 opacity-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 sm:w-12 sm:h-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M7 7h4v10H7zm6 0h4v10h-4z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
