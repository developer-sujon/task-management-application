const { Schema, model } = require("mongoose");

const userSchema = Schema(
  {
    name: {
      type: String,
      require: true,
      trim: true,
    },
    userName: {
      type: String,
      require: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      trim: true,
    },
    phone: {
      type: String,
      unique: true,
      require: true,
      trim: true,
    },
    password: {
      type: String,
      require: true,
    },
    photo: String,
  },
  { timestamps: true, versionKey: false },
);

const User = new model("User", userSchema);
module.exports = User;
