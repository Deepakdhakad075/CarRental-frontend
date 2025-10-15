import React, { forwardRef } from 'react';
import ReactDatePicker from 'react-datepicker';
import { FaRegCalendarAlt } from 'react-icons/fa';
import 'react-datepicker/dist/react-datepicker.css';

const CustomDatePicker = ({
  label,
  mobileLabel,
  selected,
  onChange,
  showTimeSelect = false,
  dateFormat = 'Pp',
  placeholderText = 'Select date',
  bgColor = '',
}) => {
  // Custom Input (label clickable + icon)
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <div
      className="flex flex-col  w-full cursor-pointer"
      onClick={onClick} // clicking label/input opens picker
    >
      {label && (
        <>
          {/* Desktop Label */}
          <label className="hidden md:block text-sm pl-2 font-semibold text-gray-700 cursor-pointer">
            {label}
          </label>

          {/* Mobile Label */}
          <label className="block md:hidden text-xs pl-2 font-semibold text-gray-700 cursor-pointer">
            {mobileLabel || label}
          </label>
        </>
      )}
      <div className="relative flex items-center">
        <input
          ref={ref}
          value={value}
          readOnly
          placeholder={placeholderText}
          className={`w-full px-2 text-12 rounded-lg focus:outline-none text-gray-500 cursor-pointer placeholder-gray-400 ${bgColor}`}
        />
        {/* <FaRegCalendarAlt
          className="absolute right-3 text-purple-600 text-lg pointer-events-none"
        /> */}
      </div>
    </div>
  ));

  return (
    <ReactDatePicker
      selected={selected}
      onChange={onChange}
      showTimeSelect={showTimeSelect}
      timeFormat="HH:mm"
      timeIntervals={15}
      dateFormat={dateFormat}
      placeholderText={placeholderText}
      customInput={<CustomInput />}
      popperClassName="tailwind-datepicker"
      popperPlacement="bottom-start"
    />
  );
};

export default CustomDatePicker;
