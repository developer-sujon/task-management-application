//internal import
const Task = require("../../model/Task");

//createTask
exports.createTask = (req, res) => {
  console.log(req);

  const { title, body, photo } = req.body;

  const newTask = {
    title,
    body,
    photo,
    userId: req.id,
    photo,
  };

  Task.create(newTask, (err, data) => {
    if (err) {
      console.log(err);
      res
        .status(500)
        .json({ status: "fail", data: "there was server side error" });
    } else {
      res.json({ status: "success", data: data });
    }
  });
};

//selectTask;
exports.selectTask = (req, res) => {
  Task.aggregate([{ $match: { userId: req.id } }], (err, data) => {
    if (err) {
      console.log(err);
      res
        .status(500)
        .json({ status: "fail", data: "there was server side error" });
    } else {
      if (data && data.length) {
        res.json({ status: "success", data: data });
      } else {
        res.json({ status: "fail", data: "Task not found" });
      }
    }
  });
};

//selectTaskByStatus;
exports.selectTaskByStatus = (req, res) => {
  const { status } = req.params;
  Task.aggregate(
    [{ $match: { userId: req.id, status: status } }],
    (err, data) => {
      if (err) {
        console.log(err);
        res
          .status(500)
          .json({ status: "fail", data: "there was server side error" });
      } else {
        if (data && data.length) {
          res.json({ status: "success", data: data });
        } else {
          res.json({ status: "fail", data: "Task not found" });
        }
      }
    },
  );
};

//deleteTask;
exports.deleteTask = (req, res) => {
  const { id } = req.params;

  Task.find({ _id: id }, (err, data) => {
    if (err) {
      console.log(err);
      res
        .status(500)
        .json({ status: "fail", data: "there was server side error" });
    } else {
      if (data && data.length) {
        Task.findByIdAndDelete({ _id: id, userId: req.id }, (err, data) => {
          if (err) {
            console.log(err);
            res
              .status(500)
              .json({ status: "fail", data: "there was server side error" });
          } else {
            res.json({ status: "success", data: data });
          }
        });
      } else {
        res.json({ status: "fail", data: "Task not found" });
      }
    }
  });
};

//updateTask;
exports.updateTask = (req, res) => {
  const { id } = req.params;
  const { title, body, status } = req.body;

  Task.find({ _id: id }, (err, data) => {
    if (err) {
      console.log(err);
      res
        .status(500)
        .json({ status: "fail", data: "there was server side error" });
    } else {
      if (data && data.length) {
        Task.findByIdAndUpdate(
          { _id: id, userId: req.id },
          { title, body, status },
          { new: true },
          (err, data) => {
            if (err) {
              console.log(err);
              res
                .status(500)
                .json({ status: "fail", data: "there was server side error" });
            } else {
              res.json({ status: "success", data: data });
            }
          },
        );
      } else {
        res.json({ status: "fail", data: "Task not found" });
      }
    }
  });
};

//dashboardSummary
exports.dashboardSummary = (req, res) => {
  Task.aggregate(
    [
      { $match: { userId: req.id } },
      {
        $group: {
          _id: "$status",
          count: { $count: {} },
        },
      },
    ],
    (err, data) => {
      if (err) {
        console.log(err);
        res
          .status(500)
          .json({ status: "success", data: "there was a server side error" });
      } else {
        res.json({ status: "success", data: data });
      }
    },
  );
};
