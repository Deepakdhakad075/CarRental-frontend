import React from 'react';

const Breadcrumb = () => (
  <nav className="text-sm text-gray-500 mb-4">
    <span className="hover:underline cursor-pointer">Home</span> &gt;{' '}
    <span className="hover:underline cursor-pointer">Car Rentals Jaipur</span>{' '}
    &gt; <span className="text-indigo-600 font-medium">Cars</span>
  </nav>
);

export default Breadcrumb;
