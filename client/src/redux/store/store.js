import { configureStore } from "@reduxjs/toolkit";
import dashboardSlice from "../features/dashboardSlice";
import loaderSlice from "../features/loaderSlice";
import taskSlice from "../features/taskSlice";

const store = configureStore({
  reducer: {
    task: taskSlice,
    loader: loaderSlice,
    dashboard: dashboardSlice,
  },
});

export default store;
