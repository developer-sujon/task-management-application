//external import
const userRoutes = require("express").Router();

//internal import
const {
  registrationUser,
  loginUser,
  updateUser,
  selectUser,
  deleteUser,
} = require("../../controller/user/userController");
const { checkLogin } = require("../../middleware/authVerify");

//registrationUser
userRoutes.post("/registrationUser", registrationUser);

//loginUser
userRoutes.post("/loginUser", loginUser);

//updateUser
userRoutes.patch("/updateUser", checkLogin, updateUser);

//selectUser
userRoutes.get("/selectUser", checkLogin, selectUser);

//deleteUser
userRoutes.delete("/deleteUser", checkLogin, deleteUser);

module.exports = userRoutes;
