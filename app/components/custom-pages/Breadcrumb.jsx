import React from 'react';
import { Link } from 'react-router-dom'; 

function Breadcrumb({ items }) {
  return (
    <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index !== 0 && (
              <span className="mx-2 text-gray-400">/</span>
            )}
            {item.href ? (
              <Link
                to={item.href}
                className="hover:text-indigo-600 font-medium transition"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-indigo-700 font-semibold">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumb;