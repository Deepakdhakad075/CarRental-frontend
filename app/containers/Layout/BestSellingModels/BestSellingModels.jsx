import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Container from '@/components/custom-pages/container';
import { NextArrow, PrevArrow } from '@/components/custome-icons/arrow_icons';

const carData = [
  { brand: 'Hyundai', model: 'Creta', image: '/images/Maruti_Ciaz.jpg' },
  { brand: 'Toyota', model: 'Innova Crysta', image: '/images/Maruti_Ciaz.jpg' },
  { brand: 'Maruti', model: 'Ciaz', image: '/images/Maruti_Ciaz.jpg' },
  { brand: 'Mahindra', model: 'Scorpio', image: '/images/Maruti_Ciaz.jpg' },
  { brand: 'Honda', model: 'City', image: '/images/Maruti_Ciaz.jpg' },
  { brand: 'Ford', model: 'EcoSport', image: '/images/Maruti_Ciaz.jpg' },
  { brand: 'Kia', model: 'Seltos', image: '/images/Maruti_Ciaz.jpg' },
  { brand: 'Renault', model: 'Duster', image: '/images/Maruti_Ciaz.jpg' },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  appendDots: (dots) => (
    <ul className="flex justify-center space-x-2">{dots}</ul>
  ),
  responsive: [
    { breakpoint: 1280, settings: { slidesToShow: 3 } },
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
};

const BestSellingModels = () => (
  <Container
    variant="gray"
    header={
      <h1 className="text-3xl font-bold text-gray-800 text-center ">
        Best Selling Models
      </h1>
    }
  >
    <div className="px-4 sm:px-6 lg:px-8 font-montserrat relative">
      <Slider {...settings}>
        {carData.map(({ brand, model, image }, index) => (
          <div key={index} className="px-4 mb-6">
            <div className="group w-full  max-w-[25rem] mx-auto border border-gray-300 rounded-xl shadow-lg overflow-hidden backdrop-blur-md bg-white/10 transition-all duration-300 hover:scale-[1.03]">
              {/* Image Section with Overlay */}
              <div className="relative w-full  overflow-hidden group">
                <img
                  src={image}
                  alt={model}
                  className="w-full  object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Light overlay on hover */}
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Card Content */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  {/* Brand with Car Icon */}
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-8 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 28 28"
                    >
                      <path d="M3 13v-2l1-3c.2-.6.8-1 1.5-1h13c.7 0 1.3.4 1.5 1l1 3v2c0 .6-.4 1-1 1h-.5l.5 2v1c0 .6-.4 1-1 1h-1c-.6 0-1-.4-1-1v-1H7v1c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1v-1l.5-2H4c-.6 0-1-.4-1-1zm3.5-5l-.7 2h12.4l-.7-2H6.5z" />
                    </svg>
                    <span className="text-base font-medium text-gray-700">
                      {brand}
                    </span>
                  </div>

                  {/* Model Name */}
                  <h3 className="text-lg font-bold text-indigo-900">{model}</h3>
                </div>

                {/* View Details Button */}
                <div className="text-right">
                  <button className="text-indigo-900  font-medium">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </Container>
);

export default BestSellingModels;
