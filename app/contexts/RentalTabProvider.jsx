import React, { createContext, useContext, useState } from 'react';

const RentalTabContext = createContext();

export const useRentalTab = () => useContext(RentalTabContext);

export const RentalTabProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('daily');
  return (
    <RentalTabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </RentalTabContext.Provider>
  );
};
