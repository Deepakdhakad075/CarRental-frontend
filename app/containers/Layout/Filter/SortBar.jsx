import { useDispatch, useSelector } from 'react-redux';
import { setPriceSort } from '@/redux/slices/filterSlice';
import React from "react";
const SortBar = () => {
  const dispatch = useDispatch();
  const priceSort = useSelector((state) => state.filters.priceSort);

  return (
    <div className="flex  items-center gap-2">
      <span className="text-gray-700 text-sm">Sort by:</span>
      <select
        value={priceSort}
        onChange={(e) => dispatch(setPriceSort(e.target.value))}
        className="border rounded-md px-3 py-1 text-sm"
      >
        <option value="none">Price filter</option>
        <option value="lowToHigh">Low to High</option>
        <option value="highToLow">High to Low</option>
      </select>
    </div>
  );
};

export default SortBar;
