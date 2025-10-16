import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import FilterLayout from '../Filter/FilterLayout';
import CarFilterSidebar from '../Filter/CarFilterSidebar';
import Breadcrumb from '../Breadcrumb';
import SortBar from '../Filter/SortBar';
import CarCardsGroup from '../Filter/CarCard/CarCard';
import { getReq } from '@/utils/apiHandlers';

const CarListingPage = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);

  // ✅ Get filters from Redux
  const {
    location,
    segment,
    models,
    fuelType,
    transmissionType,
    seatingCapacity,
    luggageCapacity,
    priceSort,
  } = useSelector((state) => state.filters);

  // ✅ Fetch cars whenever filters change
  useEffect(() => {
    const fetchCars = async () => {
      if (!location) return;
      setLoading(true);
      // Build query params dynamically
      const queryParams = new URLSearchParams();
      queryParams.append('city', location);

      if (segment.length) queryParams.append('segment', segment.join(','));
      if (models.length) queryParams.append('models', models.join(','));
      if (fuelType.length) queryParams.append('fuelType', fuelType.join(','));
      if (transmissionType.length)
        queryParams.append('transmissionType', transmissionType.join(','));
      if (seatingCapacity.length)
        queryParams.append('seatingCapacity', seatingCapacity.join(','));
      if (luggageCapacity.length)
        queryParams.append('luggageCapacity', luggageCapacity.join(','));
      if (priceSort && priceSort !== 'none')
        queryParams.append('priceSort', priceSort);

      try {
        const res = await getReq(`cars/search/location?${queryParams.toString()}`);
        console.log(res,"inside carlisting");
        if (res.status) {
          setCars(res?.data?.data);
        } else {
          setCars([]);
          console.error('API failed:', res.message);
        }
      } catch (error) {
        console.error('Error fetching cars:', error);
        setCars([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, [
    location,
    segment,
    models,
    fuelType,
    transmissionType,
    seatingCapacity,
    luggageCapacity,
    priceSort,
  ]);

  return (
    <div className="p-6 pt-12 font-montserrat">
      {/* ✅ Top Search Section */}
      <FilterLayout />

      {/* ✅ Header Area */}
      <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <Breadcrumb />
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
          <p className="text-gray-700 font-medium">
            {loading
              ? 'Loading cars...'
              : `${cars.length} Cars available for rental in ${location || 'selected city'}`}
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
      <div className="mt-2 flex flex-col md:flex-row gap-2 2xl:gap-6">
        {/* Sidebar (desktop only) */}
        <div className="hidden md:block md:w-64">
          <CarFilterSidebar />
        </div>

        {/* Car Cards */}
        <div className="flex-1">
          {loading ? (
            <div className="text-center text-gray-500 py-8">Fetching cars...</div>
          ) : cars.length > 0 ? (
            <CarCardsGroup cars={cars} />
          ) : (
            <div className="text-center text-gray-500 py-8">
              No cars found for {location}.
            </div>
          )}
        </div>
      </div>

      {/* ✅ Mobile Filter Drawer */}
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
