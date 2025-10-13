import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import CustomDatePicker from '@/components/custom-datepicker/DatePicker';
import CustomButton from '@/components/custom-button/Button';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useNavigate } from 'react-router-dom';
import { useRentalTab } from '@/contexts/RentalTabProvider';

const HeroCarousel = () => {
  const [activeTab, setActiveTab] = useState('daily');

  const [pickUpDate, setPickUpDate] = React.useState(null);
  const [returnDate, setReturnDate] = React.useState(null);
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/filter');
  };

  const slides = [
    {
      img: '/images/card1.jpg',
      title: 'Self Drive Car Rental from Rs 60/hr',
      description:
        'Wide range of Hatchbacks, Sedans and SUVs with multiple fuel and transmission options',
    },
    {
      img: '/images/card2.jpg',
      title: 'Flexible Rentals, Zero Hassle',
      description:
        'Choose from automatic or manual cars, perfect for city drives or weekend getaways',
    },
    {
      img: '/images/card3.jpg',
      title: 'Unlimited Kilometers, No Hidden Charges',
      description:
        'Drive as much as you want with transparent pricing and no surprise fees',
    },
    {
      img: '/images/card4.jpg',
      title: '24/7 Roadside Assistance',
      description:
        'Travel worry-free with round-the-clock support across major cities',
    },
  ];

  return (
    <section className="relative w-full h-[90vh] md:h-screen">
      <Carousel
        autoPlay
        infiniteLoop
        interval={5000}
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        showIndicators
        transitionTime={800}
      >
        {slides.map((slide, i) => (
          <div key={i} className="relative h-[90vh] md:h-screen">
            <img
              src={slide.img}
              alt={`slide-${i}`}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute bottom-16 md:bottom-24 left-4 md:left-16 text-white z-20 max-w-xl md:max-w-2xl px-4 md:px-16">
              <h2
                className="text-3xl md:text-5xl font-extrabold mb-3 md:mb-4 drop-shadow-xl"
                style={{ color: 'rgba(49, 46, 129, 0.6)' }}
              >
                {slide.title}
              </h2>
              <p
                className="text-base md:text-lg font-medium"
                style={{ color: 'rgba(49, 46, 129, 0.6)' }}
              >
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </Carousel>

      {/* Tabs */}
      <div className="absolute top-[25%] md:top-36 left-1/2 md:left-32 -translate-x-1/2 md:-translate-x-0 -translate-y-1/2 flex flex-wrap justify-center md:justify-start gap-2 z-30 px-4">
        {/* Daily Rentals Tab */}
        <button
          onClick={() => setActiveTab('daily')}
          className={`px-3 md:px-4 py-2 rounded-t-md font-semibold border text-sm md:text-base transition ${
            activeTab === 'daily'
              ? ''
              : 'bg-white text-purple-700 border-purple-300 hover:bg-purple-50'
          }`}
          style={
            activeTab === 'daily'
              ? {
                  backgroundColor: 'rgba(49, 46, 129, 0.6)',
                  color: 'white',
                  borderColor: '#6b21a8',
                }
              : {}
          }
        >
          Daily Rentals
        </button>

        {/* Monthly Subscription Tab */}
        <button
          onClick={() => setActiveTab('monthly')}
          className={`px-3 md:px-4 py-2 rounded-t-md font-semibold border text-sm md:text-base transition ${
            activeTab === 'monthly'
              ? ''
              : 'bg-white text-purple-700 border-purple-300 hover:bg-purple-50'
          }`}
          style={
            activeTab === 'monthly'
              ? {
                  backgroundColor: 'rgba(49, 46, 129, 0.6)',
                  color: 'white',
                  borderColor: '#6b21a8',
                }
              : {}
          }
        >
          Monthly Subscription
        </button>
      </div>

      {/* Search Filter Box */}
      <div className="absolute top-[40%] md:top-1/3 left-1/2 md:left-32 -translate-x-1/2 md:-translate-x-0 -translate-y-1/2 bg-white rounded-xl p-4 md:p-6 shadow-xl flex flex-col md:flex-row items-center gap-4 md:gap-6 max-w-[95%] md:max-w-3xl w-full md:w-[70%] z-30">
        {/* Location */}
        <div className="flex flex-col w-full md:w-1/3">
          <label className="text-sm font-semibold text-gray-700 mb-1">
            Location
          </label>
          <select className="border rounded px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600 transition w-full text-sm md:text-base">
            <option>Udaipur</option>
            <option>Jaipur</option>
            <option>Delhi</option>
          </select>
        </div>

        {/* Daily Rentals */}
        {activeTab === 'daily' && (
          <>
            <div className="flex flex-col w-full md:w-1/4">
              <label className="text-sm font-semibold text-gray-700 mb-1">
                Pick-Up Date & Time
              </label>
              <CustomDatePicker
                selected={pickUpDate}
                onChange={setPickUpDate}
                showTimeSelect
                placeholderText="Select pick-up date"
              />
            </div>

            <div className="flex flex-col w-full md:w-1/4">
              <label className="text-sm font-semibold text-gray-700 mb-1">
                Return Date & Time
              </label>
              <CustomDatePicker
                selected={returnDate}
                onChange={setReturnDate}
                showTimeSelect
                placeholderText="Select return date"
              />
            </div>
          </>
        )}

        {/* Monthly Subscription */}
        {activeTab === 'monthly' && (
          <div className="flex flex-col w-full md:w-1/4">
            <label className="text-sm font-semibold text-gray-700 mb-1">
              Pick-Up Date & Time
            </label>
            <CustomDatePicker
              selected={pickUpDate}
              onChange={setPickUpDate}
              showTimeSelect
              placeholderText="Select pick-up date"
            />
          </div>
        )}

        {/* Search Button */}
        <CustomButton
          variant="primary"
          className="bg-purple-700 text-white hover:bg-purple-800 rounded-full px-6 md:px-8 py-2 font-semibold shadow-md transition w-full md:w-auto text-sm md:text-base"
          onClick={handleSearch}
        >
          Search
        </CustomButton>
      </div>
    </section>
  );
};

export default HeroCarousel;
