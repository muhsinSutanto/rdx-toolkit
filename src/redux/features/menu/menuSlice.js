import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    {
      id: 1,
      name: "Nasi Goreng",
      price: 10000,
    },
    {
      id: 2,
      name: "Nasi Uduk",
      price: 20000,
    },
    {
      id: 3,
      name: "Nasi Bakar",
      price: 30000,
    },
  ],
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
});

export default menuSlice.reducer;
