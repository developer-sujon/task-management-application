//external import
const jwt = require("jsonwebtoken");

exports.checkLogin = (req, res, next) => {
  const { authorization } = req.headers;

  if (authorization) {
    const token = authorization.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, data) => {
      if (err) {
        console.log(err);
        res
          .status(401)
          .json({ status: "fail", data: "unauthorized credential" });
      } else {
        req.id = data.id;
        req.userName = data.userName;
        next();
      }
    });
  } else {
    res.status(401).json({ status: "fail", data: "unauthorized credential" });
  }
};
