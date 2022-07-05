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
} = require("../../controller/task/taskController");
const { checkLogin } = require("../../middleware/authVerify");

//createTask
TaskRoutes.post("/createTask", checkLogin, createTask);

//selectTask
TaskRoutes.get("/selectTask", checkLogin, selectTask);

//selectTaskByStatus
TaskRoutes.get("/selectTaskByStatus/:status", checkLogin, selectTaskByStatus);

//deleteTask
TaskRoutes.delete("/deleteTask/:id", checkLogin, deleteTask);

//updateTask
TaskRoutes.patch("/updateTask/:id", checkLogin, updateTask);

//dashboardSummary
TaskRoutes.get("/dashboardSummary", checkLogin, dashboardSummary);

module.exports = TaskRoutes;
