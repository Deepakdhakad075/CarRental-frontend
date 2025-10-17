import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import CustomButton from '@/components/custom-button/Button';

const faqs = [
  {
    question: 'What Is ZoomRide Car Rental Service?',
    answer:
      'ZoomRide offers self-drive car rentals that give you freedom and flexibility to travel at your own pace.',
  },
  {
    question: 'Is ZoomRide Available In My City?',
    answer:
      'Yes! ZoomRide is available in multiple cities across India. Check our website for the full list.',
  },
  {
    question: 'What Type Of Vehicle/Cars Does ZoomRide Offer?',
    answer:
      'From hatchbacks to SUVs and luxury cars — we’ve got a wide range to suit every need.',
  },
  {
    question: 'How Much Does It Cost To Rent A Car At ZoomRide?',
    answer:
      'Pricing depends on the car model, duration, and location. Visit our pricing page for details.',
  },
  {
    question: 'What Are The Advantages Of Availing Cars On Rent At ZoomRide?',
    answer:
      'No ownership hassle, flexible plans, 24/7 support, and complete freedom to drive your way.',
  },
  {
    question: 'What Are The Advantages Of Subscribing To ZoomRide Cars?',
    answer:
      'Lower monthly costs, car swaps, and inclusive maintenance & insurance — all in one subscription.',
  },
];

const FAQsComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (i) => {
    setActiveIndex(activeIndex === i ? null : i);
  };

  return (
    <section className="md:py-16 py-8 px-6 bg-slate-200  font-montserrat">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row md:gap-12">
        {/* Left Side */}
        <div className="lg:w-1/3">
          <h2 className="text-4xl font-bold text-slate-800 text-center md:text-start  mb-4 relative inline-block">
            FAQ'<span className="text-red-600">s</span>
            {/* <span className="absolute -top-4 right-0 flex flex-col gap-[2px]">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-900 opacity-70"></span>
              <span className="w-2 h-2 rounded-full bg-indigo-900 opacity-80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-900 opacity-90"></span>
            </span> */}
          </h2>
          <p className="text-gray-600 mb-6">
            Frequently Asked Questions about ZoomRide.
          </p>

          {/* <CustomButton
            variant="primary"
            className="rounded-full px-6 py-2 font-semibold"
          >
            View All
          </CustomButton> */}
        </div>

        {/* Right Side - Accordion */}
        <div className="lg:w-2/3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
            >
              <div
                className="flex justify-between items-center bg-gray-100 px-4 py-3 cursor-pointer"
                onClick={() => toggle(i)}
              >
                <h4 className="text-indigo-900  font-medium">{faq.question}</h4>
                {activeIndex === i ? (
                  <Minus className="w-5 h-5 text-indigo-700" />
                ) : (
                  <Plus className="w-5 h-5 text-indigo-700" />
                )}
              </div>
              {activeIndex === i && (
                <div className="bg-gray-100 px-4 py-3 text-gray-800">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQsComponent;
