//external import
const TaskRoutes = require("express").Router();

//internal import
const {
  createTask,
  selectTask,
  selectTaskByStatus,
  deleteTask,
  updateTask,
  dashboardSummary,
  filterTaskByDateAndStatus,
} = require("../../controller/task/taskController");
const authVerify = require("../../middleware/authVerify");

//createTask
TaskRoutes.post("/createTask", authVerify, createTask);

//selectTask
TaskRoutes.get("/selectTask", authVerify, selectTask);

//selectTaskByStatus
TaskRoutes.get("/selectTaskByStatus/:status", authVerify, selectTaskByStatus);

//deleteTask
TaskRoutes.delete("/deleteTask/:id", authVerify, deleteTask);

//updateTask
TaskRoutes.patch("/updateTask/:id", authVerify, updateTask);

//filterTaskByDateAndStatus
TaskRoutes.post(
  "/filterTaskByDateAndStatus",
  authVerify,
  filterTaskByDateAndStatus,
);

//dashboardSummary
TaskRoutes.get("/dashboardSummary", authVerify, dashboardSummary);

module.exports = TaskRoutes;
