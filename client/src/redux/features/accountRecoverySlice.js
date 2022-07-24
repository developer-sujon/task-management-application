import { createSlice } from "@reduxjs/toolkit";

const accountRecoverySlice = createSlice({
  name: "accountRecovery",
  initialState: {
    otp: "",
    email: "",
  },
  reducers: {
    setOtp(state, action) {
      state.otp = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
  },
});

export const { setOtp, setEmail } = accountRecoverySlice.actions;
export default accountRecoverySlice.reducer;
