import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: '',
  pickUpDate: null,
  returnDate: null,
  segment: [],
  models: [],
  fuelType: [],
  transmissionType: [],
  seatingCapacity: [],
  luggageCapacity: [],
  priceSort: 'none',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setPickUpDate: (state, action) => {
      state.pickUpDate = action.payload;
    },
    setReturnDate: (state, action) => {
      state.returnDate = action.payload;
    },
    toggleArrayValue: (state, action) => {
      const { key, value } = action.payload;
      if (!Array.isArray(state[key])) return; // Extra safe
      if (state[key].includes(value)) {
        state[key] = state[key].filter((v) => v !== value);
      } else {
        state[key].push(value);
      }
    },
    setPriceSort: (state, action) => {
      state.priceSort = action.payload;
    },
    resetFilters: () => ({ ...initialState }), // ✅ Important fix
  },
});

export const {
  setLocation,
  setPickUpDate,
  setReturnDate,
  toggleArrayValue,
  resetFilters,
  setPriceSort,
} = filterSlice.actions;

export default filterSlice.reducer;
