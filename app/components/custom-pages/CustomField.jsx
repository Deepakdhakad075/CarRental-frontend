import React from 'react';

function CustomField({
  label,
  type,
  value = '',
  onChange,
  options = [],
  placeholder = '',
  rows = 3,
  spanFull = false,
}) {
  const baseClass = 'w-full border rounded-md px-3 py-2';

  return (
    <div className={spanFull ? 'md:col-span-2' : ''}>
      <label className="block mb-1 text-left font-medium text-indigo-900 text-sm">
        {label}
      </label>

      {type === 'textarea' ? (
        <textarea
          rows={rows}
          value={value}
          onChange={onChange}
          className={`${baseClass} resize-none`}
          placeholder={placeholder}
        />
      ) : type === 'select' ? (
        <select value={value} onChange={onChange} className={baseClass}>
          <option value="">Select</option>
          {options.map((opt, idx) => (
            <option key={idx} value={opt.toLowerCase()}>
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={baseClass}
        />
      )}
    </div>
  );
}

export default CustomField;