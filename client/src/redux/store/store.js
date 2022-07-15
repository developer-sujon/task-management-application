import { configureStore } from "@reduxjs/toolkit";
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
  },
});

export default store;
