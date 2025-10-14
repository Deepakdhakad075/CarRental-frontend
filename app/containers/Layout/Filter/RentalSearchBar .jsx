import React from 'react';
import CustomDatePicker from '@/components/custom-datepicker/DatePicker';
import CustomButton from '@/components/custom-button/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  setLocation,
  setPickUpDate,
  setReturnDate,
} from '@/redux/slices/filterSlice';

const RentalSearchBar = () => {
  const dispatch = useDispatch();
  const { location, pickUpDate, returnDate } = useSelector(
    (state) => state.filters
  );

  const handleSearch = () => {
    console.log('Filters:', { location, pickUpDate, returnDate });
    // Perform fetch or navigation here
  };

  return (
    <div className="flex flex-col font-montserrat md:flex-row items-center justify-evenly gap-3 md:gap-4 w-full mt-10 p-2 md:px-6 bg-purple-50 rounded-lg shadow-md">
      
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
      className="appearance-none w-full text-12 px-2 rounded-lg bg-purple-50 text-gray-500 cursor-pointer focus:outline-none"
    >
      <option value="">Add City</option>
      <option value="Udaipur">Udaipur</option>
      <option value="Jaipur">Jaipur</option>
      <option value="Delhi">Delhi</option>
    </select>
  </div>
</div>


      {/* Pick-Up Date */}
      <div className="flex flex-col w-full md:w-1/4">
        <CustomDatePicker
          label="Pick-Up Date & Time"
          selected={pickUpDate}
          onChange={(date) => dispatch(setPickUpDate(date))}
          showTimeSelect
          placeholderText="Select pick-up date"
          bgColor="bg-purple-50"
        />
      </div>

      {/* Return Date */}
      <div className="flex flex-col w-full md:w-1/4">
        <CustomDatePicker
          label="Return Date & Time"
          selected={returnDate}
          onChange={(date) => dispatch(setReturnDate(date))}
          showTimeSelect
          placeholderText="Select return date"
          bgColor="bg-purple-50"
        />
      </div>

      {/* Search Button */}
      <div className="flex w-full md:w-auto mt-2 md:mt-0">
        <CustomButton
          variant="primary"
          className="bg-purple-700 text-white hover:bg-purple-800 px-6 py-2 !rounded-full font-semibold shadow-md w-full md:w-auto text-sm md:text-base"
          onClick={handleSearch}
        >
          Search
        </CustomButton>
      </div>
    </div>
  );
};

export default RentalSearchBar;
