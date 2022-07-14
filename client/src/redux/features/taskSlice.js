import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    allTask: [],
    newTask: [],
    pendingTask: [],
    cancledTask: [],
    complateTask: [],
  },
  reducers: {
    setAllTask: (state, action) => {
      state.allTask = action.payload;
    },
    setNewTask: (state, action) => {
      state.newTask = action.payload;
    },
    setPendingTask: (state, action) => {
      state.pendingTask = action.payload;
    },
    setCancledTask: (state, action) => {
      state.cancledTask = action.payload;
    },
    setComplateTask: (state, action) => {
      state.complateTask = action.payload;
    },
  },
});

export const {
  setAllTask,
  setNewTask,
  setPendingTask,
  setCancledTask,
  setComplateTask,
} = taskSlice.actions;

export default taskSlice.reducer;
