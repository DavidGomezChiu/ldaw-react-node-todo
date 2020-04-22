const Task = require('../models/Task');

exports.index = (req, res) => {
  console.log('fetch made');
  let tasks = Task.all().then((tasks) => {
    res.status(200).json({tasks: tasks});
  });
}
