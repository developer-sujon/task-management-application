const { Schema, model } = require("mongoose");

const taskSchema = Schema(
  {
    title: {
      type: String,
      require: true,
      trim: true,
    },
    body: {
      type: String,
      trim: true,
    },
    userId: {
      type: String,
    },
    status: {
      type: String,
      enum: ["new", "pending", "canceled", "complate"],
      default: "new",
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    photo: String,
  },
  { timestamps: true, versionKey: false },
);

const Task = new model("Task", taskSchema);
module.exports = Task;
