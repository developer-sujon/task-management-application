//external import
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//internal import
const User = require("../../model/User");
const OtpModel = require("../../model/OtpModel");
const error = require("../../helper/error");
const genRand = require("../../helper/randGen");
const sendMailUtility = require("../../utils/sendMailUtility");

//registrationUser
exports.registrationUser = (req, res) => {
  const { name, userName, phone, email, password } = req.body;

  const ejectingUser = User.aggregate(
    [
      {
        $match: {
          $or: [{ userName }, { phone }, { email }],
        },
      },
    ],
    (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).json({ err });
      } else {
        if (data && data.length > 0) {
          res.status(409).json({ message: "user already registered" });
        } else {
          bcrypt.hash(password, 10, (err, hasPassword) => {
            if (err) {
              console.log(err);
              res.status(500).json({ message: "there was server side error" });
            } else {
              const user = {
                name,
                userName,
                phone,
                email,
                photo: "https://avatars.githubusercontent.com/u/65336862?v=4",
                password: hasPassword,
              };
              User.create(user, (err, data) => {
                if (err) {
                  console.log(err);
                  res.status(500).json({ data: err });
                } else {
                  res.status(201).json(data);
                }
              });
            }
          });
        }
      }
    },
  );
};

//loginUser
exports.loginUser = (req, res) => {
  const { email, phone, password } = req.body;
  const ejectingUser = User.aggregate(
    [
      {
        $match: {
          $or: [{ phone }, { email }],
        },
      },
    ],
    (err, data) => {
      if (err) {
        console.log(error);
        res.status(500).json({ message: "there was server side error" });
      } else {
        if (data && data.length > 0) {
          bcrypt.compare(password, data[0].password, (err, result) => {
            if (err) {
              console.log(error);
              res.status(500).json({ message: "there was server side error" });
            } else {
              if (result) {
                const plyload = {
                  exp: Math.floor(Date.now() / 1000) + 30 * 76372347,
                  id: data[0]._id,
                  userName: data[0].userName,
                };

                const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
                const token = jwt.sign(plyload, JWT_SECRET_KEY);

                delete data[0].password;
                delete data[0].createdAt;
                delete data[0].updatedAt;

                res.json({ user: data[0], accessToken: token });
              } else {
                res.status(401).json({ message: "unauthorized credential" });
              }
            }
          });
        } else {
          res.status(404).json({ message: "user not found" });
        }
      }
    },
  );
};

//selectUser
exports.selectUser = (req, res) => {
  const userName = req.userName;
  User.aggregate(
    [{ $match: { userName } }, { $project: { password: 0 } }],
    (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).json({ message: "there was server side error" });
      } else {
        if (data && data.length > 0) {
          res.json(data);
        } else {
          res.status(404).json({ message: "user not found" });
        }
      }
    },
  );
};

//updateUser
exports.updateUser = (req, res) => {
  const { name, phone, email, photo } = req.body;
  const ejectingUser = User.aggregate(
    [
      {
        $match: {
          $or: [{ phone }, { email }],
        },
      },
    ],
    (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).json({ message: "there was server side error" });
      } else {
        if (data && data.length > 0) {
          const updatedUser = {
            name,
            phone,
            photo,
          };

          User.findByIdAndUpdate(
            { _id: req.id },
            updatedUser,
            { new: true },
            (err, data) => {
              if (err) {
                console.log(err);
                res.status(500).json({
                  message: "there was server side error",
                });
              } else {
                res.json({ message: "User Update Success" });
              }
            },
          );
        } else {
          res.status(401).json({ message: "unauthorized credential" });
        }
      }
    },
  );
};

//deleteUser
exports.deleteUser = (req, res) => {
  const userName = req.userName;
  User.deleteOne({ userName }, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: "there was server side error" });
    } else {
      res.json(data);
    }
  });
};

//changePassword
exports.changePassword = (req, res) => {
  const { previousPassword, newPassword, email } = req.body;
  const ejectingUser = User.aggregate(
    [
      {
        $match: {
          email,
        },
      },
    ],
    (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).json({ message: "there was server side error" });
      } else {
        if (data && data.length > 0) {
          bcrypt.compare(previousPassword, data[0].password, (err, result) => {
            if (result) {
              bcrypt.hash(newPassword, 10, (err, hash) => {
                if (err) {
                  console.log(err);
                  res
                    .status(500)
                    .json({ message: "there was server side error" });
                } else {
                  User.findByIdAndUpdate(
                    { _id: req.id },
                    { password: hash },
                    { new: true },
                    (err, data) => {
                      if (err) {
                        console.log(err);
                        res.status(500).json({
                          message: "there was server side error",
                        });
                      } else {
                        res.json({ message: "Password Change Success" });
                      }
                    },
                  );
                }
              });
            } else {
              res.status(400).json({ message: "Incorrect Password " });
            }
          });
        } else {
          res.status(401).json({ message: "unauthorized credential" });
        }
      }
    },
  );
};

//sendOpt
exports.sendOpt = async (req, res) => {
  const { email } = req.params;

  try {
    const user = await User.aggregate([{ $match: { email: email } }]);
    if (!user.length > 0) {
      throw error("User Not Found", 404);
    }

    const randomOtp = genRand(6);
    const createOtp = new OtpModel({
      email,
      otp: randomOtp,
    });

    await createOtp.save();
    const sendEmail = await sendMailUtility(
      email,
      "Your Otp Code is " + randomOtp,
      "Task Manager PIN Verification",
    );

    res.status(201).json({ message: "Opt Sent Successfull" });
  } catch (e) {
    throw error(e.message, e.status);
  }
};

//verifyOtp
exports.verifyOtp = async (req, res) => {
  const { email, otp } = req.params;
  // const otpQuery = { email: email, otp: otp };

  let time = parseInt(Math.floor(new Date().getTime() / 1000));

  try {
    // const optCount = await Otp.aggregate([{ $match: otpQuery }]);

    // if (!optCount.length > 0) {
    //   throw error("Invalid OTP Code", 400);
    // }

    const isExpare = await OtpModel.aggregate([
      {
        $match: {
          $and: [
            {
              expire: { $lte: 1658683139000000000 },
            },
            {
              otp: otp,
            },
          ],
        },
      },
    ]);

    res.json({ message: isExpare });

    // const useOtp = await Otp.aggregate([
    //   { $match: { ...otpQuery, status: 1 } },
    // ]);

    // if (useOtp.length > 0) {
    //   throw error("OTP Code Allready Use", 409);
    // }

    // const updatedOtp = await Otp.updateOne(
    //   otpQuery,
    //   { status: 1 },
    //   { new: true },
    // );

    // res.json({ message: "OTP Verify Successfull" });
  } catch (e) {
    throw error(e.message, e.status);
  }
};

//passwordRecovery
exports.passwordRecovery = async (req, res) => {
  const { otp, email, password } = req.body;
  const otpQuery = {
    email: email,
    otp: otp,
    status: 1,
  };

  try {
    const otpUseCount = await Otp.aggregate([{ $match: otpQuery }]);

    if (!otpUseCount.length > 0) {
      throw error("Invalid OTP Code", 400);
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const updatedPassword = await User.updateOne(
      { email: email },
      { password: hashPassword },
      { new: true },
    );

    console.log(updatedPassword);
    res.json({ message: "Password Update Successfull" });
  } catch (e) {
    throw error(e.message, e.status);
  }
};
