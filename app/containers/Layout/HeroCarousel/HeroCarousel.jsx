// import React, { useState } from "react";
// import { Carousel } from "react-responsive-carousel";
// import CustomDatePicker from "@/components/custom-datepicker/DatePicker";
// import CustomButton from "@/components/custom-button/Button";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { setLocation, setPickUpDate, setReturnDate } from "@/redux/slices/filterSlice";
// import { getReq } from "@/utils/apiHandlers";

// const HeroCarousel = () => {
//   const [activeTab, setActiveTab] = useState("daily");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const { location, pickUpDate, returnDate } = useSelector((state) => state.filters);

//   const handleSearch = async () => {
//     if (!location) {
//       alert("Please select a location before searching.");
//       return;
//     }

//     try {
//       setLoading(true);
//       const endpoint = `cars/search/location?city=${location}`;
//       const response = await getReq(endpoint);
//       if (response.status) {
//         navigate(`/cars/${location.toLowerCase()}`, {
//           state: {
//             cars: response.data.data,
//             filters: { location, pickUpDate, returnDate, activeTab },
//           },
//         });
//       } else {
//         alert("No cars found or API error!");
//       }
//     } catch (err) {
//       console.error("Error fetching cars:", err);
//       alert("Failed to fetch car data!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const slides = [
//     { img: "/images/card1.png" },
//     { img: "/images/card2.png" },
//     { img: "/images/card3.png" },
//     {
//       img: "/images/card4.png",
//       title: "24/7 Roadside Assistance",
//       description: "Travel worry-free with round-the-clock support across major cities",
//     },
//   ];

//   return (
//     <section className="relative w-full h-[100vh] md:h-screen">
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
//           <div key={i} className="relative h-[100vh]  md:h-screen">
//             <img src={slide.img} alt={`slide-${i}`} className="object-cover w-full h-full" />
//             <div className="absolute inset-0 bg-black/10"></div>
//             {slide.title && (
//               <div className="absolute bottom-8 sm:bottom-16 md:bottom-24 left-4 sm:left-8 md:left-16 text-white z-20 max-w-xs sm:max-w-xl md:max-w-2xl px-4 sm:px-8 md:px-16">
//                 <h2
//                   className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-2 sm:mb-3 md:mb-4 drop-shadow-xl"
//                   style={{ color: "rgba(49, 46, 129, 0.6)" }}
//                 >
//                   {slide.title}
//                 </h2>
//                 <p
//                   className="text-sm sm:text-base md:text-lg font-medium"
//                   style={{ color: "rgba(49, 46, 129, 0.6)" }}
//                 >
//                   {slide.description}
//                 </p>
//               </div>
//             )}
//           </div>
//         ))}
//       </Carousel>

//       {/* Tabs + Search Box */}
//       <div className="absolute font-montserrat flex flex-col left-4 sm:left-10 md:left-24  top-52 md:top-36 w-[90%] sm:w-[80%] md:w-full items-start z-30">
//         {/* Tabs */}
//         <div className="flex flex-wrap w-full md:w-[55%] ">
//           <button
//             onClick={() => setActiveTab("daily")}
//             className={`px-3 sm:px-4 py-2 w-[50%] md:min-w-[200px] rounded-tl-md font-medium border text-xs sm:text-sm transition ${
//               activeTab === "daily"
//                 ? "bg-indigo-700 text-white border-indigo-900"
//                 : "bg-slate-200 text-black hover:bg-purple-50"
//             }`}
//           >
//             Daily Rentals
//           </button>

//           <button
//             onClick={() => setActiveTab("monthly")}
//             className={`px-3 sm:px-4 py-2 w-[50%] md:min-w-[200px] rounded-tr-md font-medium border text-xs sm:text-sm transition ${
//               activeTab === "monthly"
//                 ? "bg-indigo-700 text-white border-indigo-900"
//                 : "bg-slate-200 text-black hover:bg-purple-50"
//             }`}
//           >
//             Monthly Subscription
//           </button>
//         </div>

//         {/* Search Filter Box */}
//         <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 sm:gap-4 md:gap-6 w-full  md:w-[55%] p-4 bg-white/90 backdrop-blur-md rounded-b-md shadow-md">
//           {/* Location */}
//           <div className="flex flex-col w-full sm:w-1/4 md:w-1/6">
//             <label htmlFor="location" className="text-xs pl-2 md:pl-0 sm:text-sm font-semibold text-gray-700">
//               Location
//             </label>
//             <select
//               id="location"
//               value={location}
//               onChange={(e) => dispatch(setLocation(e.target.value))}
//               className="appearance-none w-full px-2 py-1 rounded-lg bg-white  text-gray-700 text-sm cursor-pointer focus:outline-none"
//             >
//               <option value="">Add City</option>
//               <option value="Indore">Indore</option>
//               <option value="Jaipur">Jaipur</option>
//               <option value="Delhi">Delhi</option>
//             </select>
//           </div>

//           {/* Dates */}
//           <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
//             {activeTab === "daily" && (
//               <>
//                 <CustomDatePicker
//                   label="Pick-Up Date & Time"
//                   selected={pickUpDate}
//                   onChange={(date) => dispatch(setPickUpDate(date))}
//                   showTimeSelect
//                   placeholderText="Select pick-up date"
//                 />
//                 <CustomDatePicker
//                   label="Return Date & Time"
//                   selected={returnDate}
//                   onChange={(date) => dispatch(setReturnDate(date))}
//                   showTimeSelect
//                   placeholderText="Select return date"
//                 />
//               </>
//             )}

//             {activeTab === "monthly" && (
//               <CustomDatePicker
//                 label="Pick-Up Date & Time"
//                 selected={pickUpDate}
//                 onChange={(date) => dispatch(setPickUpDate(date))}
//                 showTimeSelect
//                 placeholderText="Select pick-up date"
//               />
//             )}
//           </div>

//           {/* Search Button */}
//           <div className="w-full sm:w-auto">
//             <CustomButton
//               variant="primary"
//               disabled={loading}
//               className="w-full sm:w-auto bg-purple-700 text-white hover:bg-purple-800 px-6 py-2 font-semibold shadow-md transition rounded-full text-sm"
//               onClick={handleSearch}
//             >
//               {loading ? "Searching..." : "Search"}
//             </CustomButton>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroCarousel;
import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import CustomDatePicker from "@/components/custom-datepicker/DatePicker";
import CustomButton from "@/components/custom-button/Button";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLocation, setPickUpDate, setReturnDate } from "@/redux/slices/filterSlice";
import { getReq } from "@/utils/apiHandlers";
import { Loading } from "@/components";

const HeroCarousel = () => {
  const [activeTab, setActiveTab] = useState("daily");
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true); // first render skeleton
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
      if (response.status) {
        navigate(`/cars/${location.toLowerCase()}`, {
          state: {
            cars: response.data.data,
            filters: { location, pickUpDate, returnDate, activeTab },
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
    { img: "/images/card1.jpg" },
    { img: "/images/card1.jpg" },
    { img: "/images/card1.jpg" },
    {
      img: "/images/card1.jpg",
      title: "24/7 Roadside Assistance",
      description: "Travel worry-free with round-the-clock support across major cities",
    },
  ];

  // Skeleton component
  const SkeletonBox = () => (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 sm:gap-4 md:gap-6 w-full md:w-[55%] p-4 bg-white/90 backdrop-blur-md rounded-b-md shadow-md">
      <div className="flex flex-col w-full sm:w-1/4 md:w-1/6">
        <div className="h-4 w-20 bg-gray-300 rounded mb-2 animate-pulse"></div>
        <div className="h-8 w-full bg-gray-300 rounded animate-pulse"></div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
        <div className="h-4 w-28 bg-gray-300 rounded mb-2 animate-pulse"></div>
        <div className="h-8 w-40 bg-gray-300 rounded animate-pulse"></div>
        <div className="hidden sm:block h-8 w-40 bg-gray-300 rounded animate-pulse"></div>
      </div>

      <div className="w-full sm:w-auto">
        <div className="h-10 w-full sm:w-28 bg-gray-300 rounded-full animate-pulse"></div>
      </div>
    </div>
  );

  // Loader component during API call
  const LoaderBox = () => (
    <div className="flex justify-center items-center w-full md:w-[55%] p-4 bg-white/90 backdrop-blur-md rounded-b-md shadow-md">
      <div className="loader border-t-4 border-b-4 border-purple-700 rounded-full w-8 h-8 animate-spin"></div>
    </div>
  );

  // Stop skeleton after first render
  useEffect(() => {
    const timer = setTimeout(() => setInitialLoading(false), 1000); // 1s skeleton
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-[100vh] md:h-screen">
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
          <div key={i} className="relative h-[100vh] md:h-screen">
            <img src={slide.img} alt={`slide-${i}`} className="object-cover w-full h-full" />
            <div className="absolute inset-0 bg-black/10"></div>
            {slide.title && (
              <div className="absolute bottom-8 sm:bottom-16 md:bottom-24 left-4 sm:left-8 md:left-16 text-white z-20 max-w-xs sm:max-w-xl md:max-w-2xl px-4 sm:px-8 md:px-16">
                <h2
                  className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-2 sm:mb-3 md:mb-4 drop-shadow-xl"
                  style={{ color: "rgba(49, 46, 129, 0.6)" }}
                >
                  {slide.title}
                </h2>
                <p
                  className="text-sm sm:text-base md:text-lg font-medium"
                  style={{ color: "rgba(49, 46, 129, 0.6)" }}
                >
                  {slide.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </Carousel>

      {/* Tabs + Search Box */}
      <div className="absolute font-montserrat flex flex-col left-4 sm:left-10 md:left-24 top-52 md:top-36 w-[90%] sm:w-[80%] md:w-full items-start z-30">
        {/* Tabs */}
        <div className="flex flex-wrap w-full md:w-[55%]">
          <button
            onClick={() => setActiveTab("daily")}
            className={`px-3 sm:px-4 py-2 w-[50%] md:min-w-[200px] rounded-tl-md font-medium border text-xs sm:text-sm transition ${
              activeTab === "daily"
                ? "bg-indigo-700 text-white border-indigo-900"
                : "bg-slate-200 text-black hover:bg-purple-50"
            }`}
          >
            Daily Rentals
          </button>

          <button
            onClick={() => setActiveTab("monthly")}
            className={`px-3 sm:px-4 py-2 w-[50%] md:min-w-[200px] rounded-tr-md font-medium border text-xs sm:text-sm transition ${
              activeTab === "monthly"
                ? "bg-indigo-700 text-white border-indigo-900"
                : "bg-slate-200 text-black hover:bg-purple-50"
            }`}
          >
            Monthly Subscription
          </button>
        </div>

        {/* Skeleton / Loader / Search Box */}
        {initialLoading ? (
          <SkeletonBox />
        ) : loading ? (
          <Loading/>
        ) : (
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 sm:gap-4 md:gap-6 w-full md:w-[55%] p-4 bg-white/90 backdrop-blur-md rounded-b-md shadow-md">
            {/* Location */}
            <div className="flex flex-col w-full sm:w-1/4 md:w-1/6">
              <label htmlFor="location" className="text-xs pl-2 md:pl-0 sm:text-sm font-semibold text-gray-700">
                Location
              </label>
              <select
                id="location"
                value={location}
                onChange={(e) => dispatch(setLocation(e.target.value))}
                className="appearance-none w-full px-2 py-1 rounded-lg bg-white text-gray-700 text-sm cursor-pointer focus:outline-none"
              >
                <option value="">Add City</option>
                <option value="Indore">Indore</option>
                <option value="Jaipur">Jaipur</option>
                <option value="Delhi">Delhi</option>
              </select>
            </div>

            {/* Dates */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
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
            </div>

            {/* Search Button */}
            <div className="w-full sm:w-auto">
              <CustomButton
                variant="primary"
                disabled={loading}
                className="w-full sm:w-auto bg-purple-700 text-white hover:bg-purple-800 px-6 py-2 font-semibold shadow-md transition rounded-full text-sm"
                onClick={handleSearch}
              >
                {loading ? "Searching..." : "Search"}
              </CustomButton>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroCarousel;
