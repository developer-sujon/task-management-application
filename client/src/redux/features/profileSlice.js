import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    value: {},
  },
  reducers: {
    SetProfile(state, action) {
      state.value = action.payload;
    },
  },
});

export const { SetProfile } = profileSlice.actions;

export default profileSlice.reducer;
