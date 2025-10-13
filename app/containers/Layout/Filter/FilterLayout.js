import React from 'react';
import { RentalTabProvider } from '@/contexts/RentalTabProvider';
import RentalSearchBar from './RentalSearchBar ';

const FilterLayout = () => (
  <RentalTabProvider>
    <RentalSearchBar />
  </RentalTabProvider>
);

export default FilterLayout;
