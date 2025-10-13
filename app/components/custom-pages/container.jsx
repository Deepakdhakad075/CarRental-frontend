import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children, header, variant = 'gray', className = '' }) => {
  // Define background color classes based on variant
  const headerBg = variant === 'white' ? 'bg-white' : 'bg-gray-100';
  const bodyBg = variant === 'white' ? 'bg-white' : 'bg-gray-100';

  return (
    <div className={`max-w-8xl h-auto mx-auto overflow-hidden shadow ${className}`}>
      <div className={`${headerBg} px-12 py-12 text-center`}>
        {header}
      </div>
      <div className={`${bodyBg} px-8 py-8`}>
        {children}
      </div>
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.node,
  variant: PropTypes.oneOf(['gray', 'white']),
  className: PropTypes.string,
};

export default Container;