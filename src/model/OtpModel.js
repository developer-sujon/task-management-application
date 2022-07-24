const mongoose = require("mongoose");
const OTPSchema = mongoose.Schema(
  {
    email: { type: String },
    otp: { type: String },
    status: { type: Number, default: 0 },
    expire: {
      type: Number,
      default: Math.floor(new Date().getTime() / 1000) + 60,
    },
  },
  { versionKey: false, timestamps: true },
);
const OtpModel = mongoose.model("Otp", OTPSchema);
module.exports = OtpModel;
