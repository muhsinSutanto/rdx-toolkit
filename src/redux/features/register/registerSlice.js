import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postRegister = createAsyncThunk(
  "auth/register",
  async (payload, thunkApi) => {
    try {
      const res = await axios.post(
        "https://api.mudoapi.tech/registererr",
        payload
      );
      return res.data;
    } catch (error) {
      console.log(error.response.data);
      throw new Error(error.response.data);
    }
  }
);

const initialState = {
  sucess: "",
  loading: false,
  error: null,
};

const registerSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postRegister.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postRegister.fulfilled, (state, action) => {
      state.loading = false;
      state.sucess = action?.payload?.message;
    });
    builder.addCase(postRegister.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.error?.message;
    });
  },
});

export default registerSlice.reducer;
