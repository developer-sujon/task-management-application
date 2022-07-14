//external import
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//internal import
const User = require("../../model/User");

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
                  exp: Math.floor(Date.now() / 1000) + 60 * 60,
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
  User.aggregate([{ $match: { userName } }], (err, data) => {
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
        res.status(500).json({ message: "there was server side error" });
      } else {
        if (data && data.length > 0) {
          bcrypt.hash(password, 10, (err, hash) => {
            if (err) {
              console.log(err);
              res.status(500).json({ message: "there was server side error" });
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
                      message: "there was server side error",
                    });
                  } else {
                    res.json(data);
                  }
                },
              );
            }
          });
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
