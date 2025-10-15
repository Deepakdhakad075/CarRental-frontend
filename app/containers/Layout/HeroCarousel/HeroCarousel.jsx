
// import React, { useState } from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import CustomDatePicker from '@/components/custom-datepicker/DatePicker';
// import CustomButton from '@/components/custom-button/Button';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { useNavigate } from 'react-router-dom';
// import { useRentalTab } from '@/contexts/RentalTabProvider';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   setLocation,
//   setPickUpDate,
//   setReturnDate,
// } from '@/redux/slices/filterSlice';
// import { getReq } from '@/utils/apiHandlers';

// const HeroCarousel = () => {
//   const [activeTab, setActiveTab] = useState('daily');
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   // Redux state
//   const { location, pickUpDate, returnDate } = useSelector(
//     (state) => state.filters
//   );
//   console.log(location,pickUpDate,returnDate,"reduxData");
//   const handleSearch = () => {
//     console.log('Filters:', { location, pickUpDate, returnDate });
//     navigate('/cars/indore');
//   };

//   const slides = [
//     {
//       img: '/images/card1.png',
//       title: '',
//       description:
//         ''
//     },
//     {
//       img: '/images/card2.png',
//       title: '',
//       description:
//         '',
//     },
//     {
//       img: '/images/card3.png',
//       title: '',
//       description:
//         '',
//     },
//     {
//       img: '/images/card4.png',
//       title: '24/7 Roadside Assistance',
//       description:
//         'Travel worry-free with round-the-clock support across major cities',
//     },
//   ];

//   return (
//     <section className="relative w-full h-[90vh] md:h-screen">
//       {/* Background Carousel */}
//       <Carousel
//         autoPlay
//         infiniteLoop
//         interval={5000}
//         showThumbs={false}
//         showStatus={false}
//         showArrows={false}
//         showIndicators
//         transitionTime={800}
//       >
//         {slides.map((slide, i) => (
//           <div key={i} className="relative h-[90vh] md:h-screen">
//             <img
//               src={slide.img}
//               alt={`slide-${i}`}
//               className="object-cover w-full h-full"
//             />
//             <div className="absolute inset-0 bg-black/10"></div>
//             <div className="absolute bottom-16 md:bottom-24 left-4 md:left-16 text-white z-20 max-w-xl md:max-w-2xl px-4 md:px-16">
//               <h2
//                 className="text-3xl md:text-5xl font-extrabold mb-3 md:mb-4 drop-shadow-xl"
//                 style={{ color: 'rgba(49, 46, 129, 0.6)' }}
//               >
//                 {slide.title}
//               </h2>
//               <p
//                 className="text-base md:text-lg font-medium"
//                 style={{ color: 'rgba(49, 46, 129, 0.6)' }}
//               >
//                 {slide.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </Carousel>

//       {/* Tabs + Search Filter Box */}
//       <div className="absolute font-montserrat flex flex-col left-24 top-24 md:top-36 w-full items-start">
//         {/* Tabs */}
//         <div>
//           <button
//             onClick={() => setActiveTab('daily')}
//             className={`px-3 md:px-4 min-w-[200px] py-2 rounded-tl-md font-medium border text-sm transition ${
//               activeTab === 'daily'
//                 ? ''
//                 : 'bg-slate-200 text-black hover:bg-purple-50'
//             }`}
//             style={
//               activeTab === 'daily'
//                 ? {
//                     backgroundColor: 'rgba(49, 46, 129, 0.6)',
//                     color: 'white',
//                     borderColor: '#6b21a8',
//                   }
//                 : {}
//             }
//           >
//             Daily Rentals
//           </button>

//           <button
//             onClick={() => setActiveTab('monthly')}
//             className={`px-3 md:px-4 py-2 min-w-[200px] rounded-tr-md font-medium border text-sm transition ${
//               activeTab === 'monthly'
//                 ? ''
//                 : 'bg-slate-200 text-black hover:bg-purple-50'
//             }`}
//             style={
//               activeTab === 'monthly'
//                 ? {
//                     backgroundColor: 'rgba(49, 46, 129, 0.6)',
//                     color: 'white',
//                     borderColor: '#6b21a8',
//                   }
//                 : {}
//             }
//           >
//             Monthly Subscription
//           </button>
//         </div>

//         {/* Search Filter Box */}
//         <div className="flex flex-row items-center justify-between w-[50%] p-3 bg-primary-500 rounded-bl-md rounded-tr-md rounded-br-md">
//           {/* Location */}
//           <div className="flex flex-col w-[100px] md:w-1/6 gap-0 cursor-pointer">
//             <label
//               htmlFor="location"
//               className="text-sm pl-2 font-semibold text-gray-700 cursor-pointer"
//             >
//               Location
//             </label>
//             <div className="relative">
//               <select
//                 id="location"
//                 value={location}
//                 onChange={(e) => dispatch(setLocation(e.target.value))}
//                 className="appearance-none w-full text-12 px-2 rounded-lg bg-white text-gray-500 cursor-pointer focus:outline-none"
//               >
//                 <option value="">Add City</option>
//                 <option value="Indore">Indore</option>
//                 <option value="Jaipur">Jaipur</option>
//                 <option value="Delhi">Delhi</option>
//               </select>
//             </div>
//           </div>

//           {/* Daily Rentals */}
//           {activeTab === 'daily' && (
//             <>
//               <CustomDatePicker
//                 label="Pick-Up Date & Time"
//                 selected={pickUpDate}
//                 onChange={(date) => dispatch(setPickUpDate(date))}
//                 showTimeSelect
//                 placeholderText="Select pick-up date"
//               />

//               <CustomDatePicker
//                 label="Return Date & Time"
//                 selected={returnDate}
//                 onChange={(date) => dispatch(setReturnDate(date))}
//                 showTimeSelect
//                 placeholderText="Select return date"
//               />
//             </>
//           )}

//           {/* Monthly Subscription */}
//           {activeTab === 'monthly' && (
//             <CustomDatePicker
//               label="Pick-Up Date & Time"
//               selected={pickUpDate}
//               onChange={(date) => dispatch(setPickUpDate(date))}
//               showTimeSelect
//               placeholderText="Select pick-up date"
//             />
//           )}

//           {/* Search Button */}
//           <CustomButton
//             variant="primary"
//             className="bg-purple-700 text-white hover:bg-purple-800 px-2 font-semibold shadow-md transition !rounded-full max-h-[40px] md:w-auto text-sm md:text-base"
//             onClick={handleSearch}
//           >
//             Search
//           </CustomButton>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroCarousel;
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import CustomDatePicker from "@/components/custom-datepicker/DatePicker";
import CustomButton from "@/components/custom-button/Button";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLocation, setPickUpDate, setReturnDate } from "@/redux/slices/filterSlice";
import { getReq } from "@/utils/apiHandlers";

const HeroCarousel = () => {
  const [activeTab, setActiveTab] = useState("daily");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { location, pickUpDate, returnDate } = useSelector((state) => state.filters);

  const handleSearch = async () => {
    if (!location) {
      alert("Please select a location before searching.");
      return;
    }

    try {
      setLoading(true);
      const endpoint = `cars/search/location?city=${location}`;
      const response = await getReq(endpoint);
       console.log(response,"response");
      if (response.status) {
        console.log("Cars found:", response.data);

        // ✅ Send to next page with API data and selected filters
        navigate(`/cars/${location.toLowerCase()}`, {
          state: {
            cars: response.data.data,
            filters: {
              location,
              pickUpDate,
              returnDate,
              activeTab,
            },
          },
        });
      } else {
        alert("No cars found or API error!");
      }
    } catch (err) {
      console.error("Error fetching cars:", err);
      alert("Failed to fetch car data!");
    } finally {
      setLoading(false);
    }
  };

  const slides = [
    { img: "/images/card1.png", title: "", description: "" },
    { img: "/images/card2.png", title: "", description: "" },
    { img: "/images/card3.png", title: "", description: "" },
    {
      img: "/images/card4.png",
      title: "24/7 Roadside Assistance",
      description: "Travel worry-free with round-the-clock support across major cities",
    },
  ];

  return (
    <section className="relative w-full h-[90vh] md:h-screen">
      {/* Background Carousel */}
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
            <img src={slide.img} alt={`slide-${i}`} className="object-cover w-full h-full" />
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute bottom-16 md:bottom-24 left-4 md:left-16 text-white z-20 max-w-xl md:max-w-2xl px-4 md:px-16">
              <h2
                className="text-3xl md:text-5xl font-extrabold mb-3 md:mb-4 drop-shadow-xl"
                style={{ color: "rgba(49, 46, 129, 0.6)" }}
              >
                {slide.title}
              </h2>
              <p
                className="text-base md:text-lg font-medium"
                style={{ color: "rgba(49, 46, 129, 0.6)" }}
              >
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </Carousel>

      {/* Tabs + Search Filter Box */}
      <div className="absolute font-montserrat flex flex-col left-24 top-24 md:top-36 w-full items-start">
        {/* Tabs */}
        <div>
          <button
            onClick={() => setActiveTab("daily")}
            className={`px-3 md:px-4 min-w-[200px] py-2 rounded-tl-md font-medium border text-sm transition ${
              activeTab === "daily" ? "" : "bg-slate-200 text-black hover:bg-purple-50"
            }`}
            style={
              activeTab === "daily"
                ? { backgroundColor: "rgba(49, 46, 129, 0.6)", color: "white", borderColor: "#6b21a8" }
                : {}
            }
          >
            Daily Rentals
          </button>

          <button
            onClick={() => setActiveTab("monthly")}
            className={`px-3 md:px-4 py-2 min-w-[200px] rounded-tr-md font-medium border text-sm transition ${
              activeTab === "monthly" ? "" : "bg-slate-200 text-black hover:bg-purple-50"
            }`}
            style={
              activeTab === "monthly"
                ? { backgroundColor: "rgba(49, 46, 129, 0.6)", color: "white", borderColor: "#6b21a8" }
                : {}
            }
          >
            Monthly Subscription
          </button>
        </div>

        {/* Search Filter Box */}
        <div className="flex flex-row items-center justify-between w-[50%] p-3 bg-primary-500 rounded-bl-md rounded-tr-md rounded-br-md">
          {/* Location */}
          <div className="flex flex-col w-[100px] md:w-1/6 gap-0 cursor-pointer">
            <label
              htmlFor="location"
              className="text-sm pl-2 font-semibold text-gray-700 cursor-pointer"
            >
              Location
            </label>
            <div className="relative">
              <select
                id="location"
                value={location}
                onChange={(e) => dispatch(setLocation(e.target.value))}
                className="appearance-none w-full text-12 px-2 rounded-lg bg-white text-gray-500 cursor-pointer focus:outline-none"
              >
                <option value="">Add City</option>
                <option value="Indore">Indore</option>
                <option value="Jaipur">Jaipur</option>
                <option value="Delhi">Delhi</option>
              </select>
            </div>
          </div>

          {/* Date pickers */}
          {activeTab === "daily" && (
            <>
              <CustomDatePicker
                label="Pick-Up Date & Time"
                selected={pickUpDate}
                onChange={(date) => dispatch(setPickUpDate(date))}
                showTimeSelect
                placeholderText="Select pick-up date"
              />

              <CustomDatePicker
                label="Return Date & Time"
                selected={returnDate}
                onChange={(date) => dispatch(setReturnDate(date))}
                showTimeSelect
                placeholderText="Select return date"
              />
            </>
          )}

          {activeTab === "monthly" && (
            <CustomDatePicker
              label="Pick-Up Date & Time"
              selected={pickUpDate}
              onChange={(date) => dispatch(setPickUpDate(date))}
              showTimeSelect
              placeholderText="Select pick-up date"
            />
          )}

          {/* Search Button */}
          <CustomButton
            variant="primary"
            disabled={loading}
            className="bg-purple-700 text-white hover:bg-purple-800 px-2 font-semibold shadow-md transition !rounded-full max-h-[40px] md:w-auto text-sm md:text-base"
            onClick={handleSearch}
          >
            {loading ? "Searching..." : "Search"}
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
