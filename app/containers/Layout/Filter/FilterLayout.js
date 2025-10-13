import React from 'react';
import { RentalTabProvider } from '@/contexts/RentalTabProvider';
import RentalSearchBar from './RentalSearchBar ';
import CarCard from './CarCard/CarCard';

const FilterLayout = () => (
  <RentalTabProvider>
    <RentalSearchBar />
    <CarCard />
  </RentalTabProvider>
);

export default FilterLayout;
