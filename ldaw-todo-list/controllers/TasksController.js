const Task = require('../models/Task');
const homepageController = require('./HomepageController');

exports.done = (req, res) => {
  let id = req.params.id;
  Task.find(id)
  .then((task) => {
    return Task.markAsDone(task);
  })
  .then((result) => {
    res.redirect('/');
  });
}

exports.store = (req, res) => {
  let task = {};
  task.description = req.body.description;
  Task.create(task).then((id) => {
    if (req.xhr || req.headers.accept.indexOf('json') > -1){
      Task.find(id).then(task => {
        res.json(task)
      })
    }else{
      res.redirect('/');
    }
  });
}

exports.update = (req, res) => {
  let newTask = req.body;
  newTask.status == Task.PENDING ? newTask.status = Task.DONE : newTask.status = Task.PENDING;
  Task.update(newTask);
  res.redirect('/');
}

exports.done = (req, res) => {
  Task.find(req.params.id).then(task => {
    task.status = Task.DONE;
    Task.update(task);
    if (req.xhr || req.headers.accept.indexOf('json') > -1){
      Task.find(task.id).then(doneTask => {
        res.json(doneTask)
      })
    }else{
      res.redirect('/');
    }
  });
}

exports.delete = (req, res) => {
  Task.find(req.params.id).then(task => {
    if(task){
      Task.delete(task.id).then(deleted => {
        if (req.xhr || req.headers.accept.indexOf('json') > -1){
          res.json(task);
        }else{
          res.redirect('/');
        }
      });
    }else{
      res.status(404).redirect('/');
    }
  });
}