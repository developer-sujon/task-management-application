//external import
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//internal import
const User = require("../../model/User");

//registrationUser
exports.registrationUser = (req, res) => {
  const { name, userName, phone, email, password, photo } = req.body;
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
        res.status(500).json({ status: "fail", data: err });
      } else {
        if (data && data.length > 0) {
          res
            .status(400)
            .json({ status: "fail", data: "user already registered" });
        } else {
          bcrypt.hash(password, 10, (err, hasPassword) => {
            if (err) {
              console.log(err);
              res
                .status(500)
                .json({ status: "fail", data: "there was server side error" });
            } else {
              const user = {
                name,
                userName,
                phone,
                email,
                photo,
                password: hasPassword,
              };
              User.create(user, (err, data) => {
                if (err) {
                  console.log(err);
                  res.status(500).json({ status: "fail", data: err });
                } else {
                  res.json({ status: "success", data: data });
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
  console.log(323);

  const { userName, email, phone, password } = req.body;
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
        console.log(error);
        res
          .status(500)
          .json({ status: "fail", data: "there was server side error" });
      } else {
        if (data && data.length > 0) {
          bcrypt.compare(password, data[0].password, (err, result) => {
            if (err) {
              console.log(error);
              res
                .status(500)
                .json({ status: "fail", data: "there was server side error" });
            } else {
              if (result) {
                const plyload = {
                  exp: Math.floor(Date.now() / 1000) + 60 * 60,
                  id: data[0]._id,
                  userName: data[0].userName,
                };

                const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
                const token = jwt.sign(plyload, JWT_SECRET_KEY);
                res.json({ status: "fail", data: token });
              } else {
                res
                  .status(401)
                  .json({ status: "fail", data: "unauthorized credential" });
              }
            }
          });
        } else {
          res.status(401).json({ status: "fail", data: "user not found" });
        }
      }
    },
  );
};

//selectUser
exports.selectUser = (req, res) => {
  const userName = req.userName;
  User.aggregate([{ $match: { userName } }], (err, data) => {
    if (err) {
      console.log(err);
      res
        .status(500)
        .json({ status: "fail", data: "there was server side error" });
    } else {
      if (data && data.length > 0) {
        res.json({ status: "sucess", data: data });
      } else {
        res.status(404).json({ status: "fail", data: "user not found" });
      }
    }
  });
};

//updateUser
exports.updateUser = (req, res) => {
  const { name, userName, phone, email, password, photo } = req.body;
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
        res
          .status(500)
          .json({ status: "fail", data: "there was server side error" });
      } else {
        if (data && data.length > 0) {
          bcrypt.hash(password, 10, (err, hash) => {
            if (err) {
              console.log(err);
              res
                .status(500)
                .json({ status: "fail", data: "there was server side error" });
            } else {
              const updatedUser = {
                name,
                phone,
                email,
                password: hash,
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
                      status: "fail",
                      data: "there was server side error",
                    });
                  } else {
                    res.json({ status: "succes", data: data });
                  }
                },
              );
            }
          });
        } else {
          res
            .status(401)
            .json({ status: "fail", data: "unauthorized credential" });
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
      res
        .status(500)
        .json({ status: "fail", data: "there was server side error" });
    } else {
      res.json({ status: "sucess", data: data });
    }
  });
};
