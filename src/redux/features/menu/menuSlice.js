import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getMenu = createAsyncThunk("menu/getMenu", async () => {
  try {
    const res = await axios.get("https://api.mudoapi.tech/menus");
    console.log(res.data);
    return res.data.data;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
});

const initialState = {
  list: [],
  loading: false,
  error: "",
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMenu.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getMenu.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload.Data;
    });
    builder.addCase(getMenu.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default menuSlice.reducer;
