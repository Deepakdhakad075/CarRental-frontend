import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children, header, variant = 'gray', className = '' }) => {
  // Define background color classes based on variant
  const headerBg = variant === 'white' ? 'bg-slate-200' : 'bg-slate-200 ';
  const bodyBg = variant === 'white' ? 'bg-slate-200' : 'bg-slate-200 ';

  return (
    <div className={`max-w-8xl h-auto mx-auto overflow-hidden shadow ${className}`}>
      <div className={`${headerBg} md:px-12 md:py-12 py-4 text-center`}>
        {header}
      </div>
      <div className={`${bodyBg} md:px-8 px-4 md:py-8 py-4`}>
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