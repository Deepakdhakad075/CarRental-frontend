import React from 'react';
import PropTypes from 'prop-types';

const Loading = ({ message }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center  z-50"
      style={{ backgroundColor: 'rgba(49, 46, 129, 0.6)' }}
      role="status"
      aria-live="polite"
    >
      <div className="flex flex-col items-center gap-6">
        {/* Steering wheel SVG (rotates) */}
        <div className="w-24 h-24">
          <svg
            className="w-full h-full animate-spin-slow"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
          >
            <circle
              cx="32"
              cy="32"
              r="24"
              stroke="#ffffff"
              strokeWidth="4"
              opacity="0.95"
            />
            <circle cx="32" cy="32" r="8" fill="#ffffff" />
            <path
              d="M32 8 L32 22"
              stroke="#ffffff"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M32 56 L32 42"
              stroke="#ffffff"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M8 32 L22 32"
              stroke="#ffffff"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M56 32 L42 32"
              stroke="#ffffff"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M20 46 C28 52, 36 52, 44 46"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.4"
            />
          </svg>
        </div>

        {/* Loading text */}
        <p className="text-white text-lg font-semibold tracking-wide drop-shadow-sm">
          {message}
        </p>

        <p className="text-white/80 text-sm">
          Please wait while we prepare your ride…
        </p>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 2.2s linear infinite;
        }
      `}</style>
    </div>
  );
};

Loading.propTypes = {
  message: PropTypes.string,
};

Loading.defaultProps = {
  message: 'Loading...',
};

export default Loading;
