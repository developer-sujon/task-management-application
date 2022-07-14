import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
  name: "dashboardSummary",
  initialState: {
    dashboardSummaryList: [],
  },
  reducers: {
    setDashboardSummary(state, action) {
      state.dashboardSummaryList = action.payload;
    },
  },
});

export const { setDashboardSummary } = dashboardSlice.actions;
export default dashboardSlice.reducer;
