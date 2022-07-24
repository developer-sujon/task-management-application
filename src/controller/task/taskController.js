//internal import
const Task = require("../../model/Task");

//createTask
exports.createTask = (req, res) => {
  const { title, body, photo } = req.body;

  const newTask = {
    title,
    body,
    photo,
    userId: req.userName,
    photo,
  };

  Task.create(newTask, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: "there was server side error" });
    } else {
      res.status(201).json(data);
    }
  });
};

//selectTask;
exports.selectTask = (req, res) => {
  Task.aggregate([{ $match: { userId: req.userName } }], (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: "there was server side error" });
    } else {
      if (data && data.length) {
        res.json(data);
      } else {
        res.status(404).json({ message: "Task not found" });
      }
    }
  });
};

//selectTaskByStatus;
exports.selectTaskByStatus = (req, res) => {
  const { status } = req.params;
  Task.aggregate(
    [{ $match: { userId: req.userName, status: status } }],
    (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).json({ message: "there was server side error" });
      } else {
        if (data && data.length) {
          res.json(data);
        } else {
          res.status(404).json({ message: "Task not found" });
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
      res.status(500).json({ message: "there was server side error" });
    } else {
      if (data && data.length) {
        Task.findByIdAndDelete(
          { _id: id, userName: req.userName },
          (err, data) => {
            if (err) {
              console.log(err);
              res.status(500).json({ message: "there was server side error" });
            } else {
              res.json({ message: "Task Delete Succesfull" });
            }
          },
        );
      } else {
        res.status(404).json({ message: "Task not found" });
      }
    }
  });
};

//updateTask;
exports.updateTask = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  Task.find({ _id: id }, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: "there was server side error" });
    } else {
      if (data && data.length) {
        Task.findByIdAndUpdate(
          { _id: id, userName: req.userName },
          { status },
          { new: true },
          (err, data) => {
            if (err) {
              console.log(err);
              res.status(500).json({ message: "there was server side error" });
            } else {
              res.json({ message: "Task Updae Successfull" });
            }
          },
        );
      } else {
        res.status(404).json({ message: "Task not found" });
      }
    }
  });
};

//filterTaskByDateAndStatus
exports.filterTaskByDateAndStatus = (req, res) => {
  const { toDate, status } = req.body;

  Task.aggregate(
    [
      {
        $match: {
          userId: req.userName,
          status: status,
          createdAt: { $lte: new Date(toDate) },
        },
      },
    ],
    (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).json({ message: "there was a server side error" });
      } else {
        res.json(data);
      }
    },
  );
};

//dashboardSummary
exports.dashboardSummary = (req, res) => {
  Task.aggregate(
    [
      { $match: { userId: req.userName } },
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
        res.status(500).json({ message: "there was a server side error" });
      } else {
        res.json(data);
      }
    },
  );
};
