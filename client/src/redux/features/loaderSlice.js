import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
  name: "loader",
  initialState: {
    loading: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = true;
    },
    removeLoading: (state, action) => {
      state.loading = false;
    },
  },
});

export const { setLoading, removeLoading } = loaderSlice.actions;

export default loaderSlice.reducer;
