import React, { forwardRef } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePicker = ({
  selected,
  onChange,
  showTimeSelect = false,
  dateFormat = 'Pp',
  placeholderText = 'Select date',
}) => {
  // Custom Input for Tailwind styling
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <input
      ref={ref}
      value={value}
      onClick={onClick}
      readOnly
      placeholder={placeholderText}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600 cursor-pointer"
    />
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
    />
  );
};

export default DatePicker;
