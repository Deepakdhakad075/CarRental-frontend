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
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  const next = () =>
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-indigo-50 to-purple-50">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-12 relative">
        {/* Left Side - Heading & Navigation */}
        <div className="flex-1 flex flex-col items-start">
          <h2 className="text-4xl font-extrabold text-indigo-900 leading-tight mb-6">
            What people say <br /> about <span className="text-indigo-700">us</span>
          </h2>
          <p className="text-gray-600 mb-8 max-w-md font-medium">
            Our clients send us smiles with our services, and we love hearing their feedback.
          </p>

          {/* Navigation Arrows */}
          <div className="flex gap-4 mt-4">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-white shadow-lg hover:bg-indigo-100 transition flex items-center justify-center"
            >
              <ArrowLeft className="w-5 h-5 text-indigo-700" />
            </button>
            <button
              onClick={next}
              className="p-3 rounded-full bg-white shadow-lg hover:bg-indigo-100 transition flex items-center justify-center"
            >
              <ArrowRight className="w-5 h-5 text-indigo-700" />
            </button>
          </div>
        </div>

        {/* Right Side - Carousel */}
        <div className="flex-1 overflow-hidden max-w-3xl relative">
          <div
            className="flex transition-transform duration-700 ease-in-out gap-6"
            style={{
              transform: `translateX(-${index * 80}%)`, // partial peek of next card
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[80%] bg-white rounded-3xl shadow-2xl flex flex-col items-center gap-6 p-6 transform transition-all hover:scale-105 hover:shadow-3xl relative"
              >
                {/* Small circular avatar overlapping top */}
                <div className="absolute left-14 -top-01  rounded-full p-1 bg-gradient-to-tr from-indigo-500 to-purple-500">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-14 h-14 rounded-full border-4 border-white object-cover"
                  />
                </div>

                {/* Card Content */}
                <div className="mt-10 text-center">
                  <div className="flex justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-800 text-lg mb-2 font-medium italic leading-relaxed">
                    “{t.feedback}”
                  </p>
                  <h4 className="text-indigo-800 font-bold text-lg">{t.name}</h4>
                  <p className="text-gray-500 text-sm">{t.location}</p>
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
