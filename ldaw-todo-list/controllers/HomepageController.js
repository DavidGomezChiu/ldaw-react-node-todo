const Task = require('../models/Task');

exports.index = (req, res) => {
  let tasks = Task.all().then((tasks) => {
    res.status(200).json({tasks: tasks});
  });
}
