import { configureStore } from "@reduxjs/toolkit";
import accountRecoverySlice from "../features/accountRecoverySlice";
import dashboardSlice from "../features/dashboardSlice";
import loaderSlice from "../features/loaderSlice";
import profileSlice from "../features/profileSlice";
import taskSlice from "../features/taskSlice";

const store = configureStore({
  reducer: {
    task: taskSlice,
    loader: loaderSlice,
    dashboard: dashboardSlice,
    profile: profileSlice,
    accountRecovery: accountRecoverySlice,
  },
});

export default store;
