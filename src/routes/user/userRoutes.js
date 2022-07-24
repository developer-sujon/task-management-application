//external import
const userRoutes = require("express").Router();

//internal import
const {
  registrationUser,
  loginUser,
  updateUser,
  selectUser,
  deleteUser,
  changePassword,
  sendOpt,
  verifyOtp,
  passwordRecovery,
} = require("../../controller/user/userController");
const authVerify = require("../../middleware/authVerify");

//registrationUser
userRoutes.post("/registrationUser", registrationUser);

//loginUser
userRoutes.post("/loginUser", loginUser);

//updateUser
userRoutes.patch("/updateUser", authVerify, updateUser);

//selectUser
userRoutes.get("/selectUser", authVerify, selectUser);

//deleteUser
userRoutes.delete("/deleteUser", authVerify, deleteUser);

//changePassword
userRoutes.put("/changePassword", authVerify, changePassword);

//sendOpt
userRoutes.get("/sendOpt/:email", sendOpt);

//verifyOtp
userRoutes.get("/verifyOtp/:email/:otp", verifyOtp);

//passwordRecovery
userRoutes.post("/passwordRecovery", passwordRecovery);

module.exports = userRoutes;
