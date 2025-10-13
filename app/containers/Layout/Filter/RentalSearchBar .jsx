import React from 'react';
import CustomDatePicker from '@/components/custom-datepicker/DatePicker';
import CustomButton from '@/components/custom-button/Button';
import { useRentalTab } from '@/contexts/RentalTabProvider';

const RentalSearchBar = () => {
  const { activeTab, setActiveTab } = useRentalTab();
  const [pickUpDate, setPickUpDate] = React.useState(null);
  const [returnDate, setReturnDate] = React.useState(null);

  const handleSearch = () => {
    // logic for search (e.g., trigger backend fetch, navigate, etc.)
  };

  return (
    
      <div className="w-full mt-20 bg-gray-200   p-1 md:p-6  flex flex-col md:flex-row items-center gap-3 md:gap-6"
      style={{}}>
        {/* Location */}
        <div className="flex flex-col w-full md:w-1/3">
          <label className="text-sm font-semibold text-gray-700 mb-1">
            Location
          </label>
          <select className="border rounded px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 transition w-full text-sm md:text-base">
            <option>Udaipur</option>
            <option>Jaipur</option>
            <option>Delhi</option>
          </select>
        </div>

        {/* Daily Rentals */}
        {activeTab === 'daily' && (
          <>
            <div className="flex flex-col w-full md:w-1/2">
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

            <div className="flex flex-col w-full md:w-1/2">
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
          <div className="flex flex-col w-full md:w-1/2">
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
          className="bg-indigo-700 text-white hover:bg-indigo-800 rounded-full px-6 md:px-8 py-2 font-semibold shadow-md transition w-full md:w-auto text-sm md:text-base"
          onClick={handleSearch}
        >
          Search
        </CustomButton>
      </div>
    
  );
};

export default RentalSearchBar;
