import React, { useState } from 'react';
import FilterLayout from '../Filter/FilterLayout';
import CarFilterSidebar from '../Filter/CarFilterSidebar';
import Breadcrumb from '../Breadcrumb';
import SortBar from '../Filter/SortBar';

import CarCardsGroup from '../Filter/CarCard/CarCard';
const CarListingPage = () => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="p-6 pt-12 font-montserrat">
      {/* ✅ Top Search Section (Location, Date, Modify) */}
      <FilterLayout />

      {/* ✅ Header Area (Breadcrumb + Car Count + Sort) */}
      <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        {/* Breadcrumb - top in mobile */}
        <Breadcrumb />

        {/* Car Count + Sort */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
          <p className="text-gray-700 font-medium">
            8 Cars available for rental in Jaipur
          </p>
          <SortBar />
        </div>
      </div>

      {/* ✅ Mobile Filter Button */}
      <div className="mt-4 md:hidden">
        <button
          onClick={() => setShowFilter(true)}
          className="border px-4 py-2 rounded-lg font-medium w-full"
        >
          Filter
        </button>
      </div>

      {/* ✅ Main Layout */}
      <div className="mt-6 flex flex-col md:flex-row gap-6">
        {/* Sidebar (desktop only) */}
        <div className="hidden md:block md:w-64">
          <CarFilterSidebar />
        </div>

        {/* Car Cards Container */}
        <div className="flex-1">
          {/* Your car cards list goes here */}

          <CarCardsGroup />
        </div>
      </div>

      {/* ✅ Mobile Filter Drawer Modal */}
      {showFilter && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div className="bg-white w-4/5 h-full p-4 overflow-y-auto shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Filter</h2>
              <button
                onClick={() => setShowFilter(false)}
                className="text-2xl leading-none"
              >
                &times;
              </button>
            </div>
            <CarFilterSidebar />
          </div>
        </div>
      )}
    </div>
  );
};

export default CarListingPage;
