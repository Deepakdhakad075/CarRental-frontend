import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleArrayValue, resetFilters } from '@/redux/slices/filterSlice';

const CarFilterSidebar = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const handleToggle = (key, value) => {
    dispatch(toggleArrayValue({ key, value }));
  };

  return (
    <div className="bg-gray-100 p-4 w-full md:w-64 rounded-lg shadow-sm h-auto overflow-y-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-gray-800 text-lg">Filter</h3>
        <button
          onClick={() => dispatch(resetFilters())}
          className="text-indigo-600 text-sm font-medium hover:underline"
        >
          Clear All
        </button>
      </div>

      {/* Segment */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold mb-2 text-gray-700">Segment</h4>
        {['ECONOMY', 'STANDARD', 'COMPACT', 'MUV'].map((seg) => (
          <label key={seg} className="flex items-center space-x-2 mb-1">
            <input
              type="checkbox"
              checked={filters.segment.includes(seg)}
              onChange={() => handleToggle('segment', seg)}
              className="accent-indigo-600"
            />
            <span className="text-sm text-gray-700">{seg}</span>
          </label>
        ))}
      </div>

      {/* Models */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold mb-2 text-gray-700">Models</h4>
        {[
          'MARUTI SWIFT',
          'MAHINDRA XUV 300',
          'TOYOTA GLANZA',
          'HONDA CITY',
          'KIA CARENS',
          'MAHINDRA SCORPIO N',
        ].map((model) => (
          <label key={model} className="flex items-center space-x-2 mb-1">
            <input
              type="checkbox"
              checked={filters.models.includes(model)}
              onChange={() => handleToggle('models', model)}
              className="accent-indigo-600"
            />
            <span className="text-sm text-gray-700">{model}</span>
          </label>
        ))}
        <button className="text-xs text-indigo-600 mt-1 hover:underline">- View Less</button>
      </div>

      {/* Fuel Type */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold mb-2 text-gray-700">Fuel Type</h4>
        {['Petrol', 'Diesel'].map((fuel) => (
          <label key={fuel} className="flex items-center space-x-2 mb-1">
            <input
              type="checkbox"
              checked={filters.fuelType.includes(fuel)}
              onChange={() => handleToggle('fuelType', fuel)}
              className="accent-indigo-600"
            />
            <span className="text-sm text-gray-700">{fuel}</span>
          </label>
        ))}
      </div>

      {/* Transmission Type */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold mb-2 text-gray-700">Transmission Type</h4>
        {['Automatic', 'Manual'].map((trans) => (
          <label key={trans} className="flex items-center space-x-2 mb-1">
            <input
              type="checkbox"
              checked={filters.transmissionType.includes(trans)}
              onChange={() => handleToggle('transmissionType', trans)}
              className="accent-indigo-600"
            />
            <span className="text-sm text-gray-700">{trans}</span>
          </label>
        ))}
      </div>

      {/* Seating Capacity */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold mb-2 text-gray-700">Seating Capacity</h4>
        {[5, 7].map((seat) => (
          <label key={seat} className="flex items-center space-x-2 mb-1">
            <input
              type="checkbox"
              checked={filters.seatingCapacity.includes(seat)}
              onChange={() => handleToggle('seatingCapacity', seat)}
              className="accent-indigo-600"
            />
            <span className="text-sm text-gray-700">{seat}</span>
          </label>
        ))}
      </div>

      {/* Luggage Capacity */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold mb-2 text-gray-700">Luggage Capacity</h4>
        {[2, 3, 4].map((luggage) => (
          <label key={luggage} className="flex items-center space-x-2 mb-1">
            <input
              type="checkbox"
              checked={filters.luggageCapacity.includes(luggage)}
              onChange={() => handleToggle('luggageCapacity', luggage)}
              className="accent-indigo-600"
            />
            <span className="text-sm text-gray-700">{luggage}</span>
          </label>
        ))}
      </div>

      {/* Apply Button */}
      <button className="bg-indigo-600 text-white px-4 py-2 rounded-md w-full font-semibold hover:bg-indigo-700 transition">
        Apply
      </button>
    </div>
  );
};

export default CarFilterSidebar;
