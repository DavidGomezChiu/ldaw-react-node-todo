const Task = require('../models/Task');
const homepageController = require('./HomepageController');

exports.store = (req, res) => {
  let task = {};
  task.description = req.body.description;
  Task.create(task).then((id) => {
    if (req.xhr || req.headers.accept.indexOf('json') > -1){
      Task.find(id).then(task => {
        res.status(200).json(task)
      })
    }else{
      res.status(400).json({error:'error'});
    }
  });
}

exports.done = (req, res) => {
  Task.find(req.params.id).then(task => {
    task.status = Task.DONE;
    Task.update(task);
    if (req.xhr || req.headers.accept.indexOf('json') > -1){
      Task.find(task.id).then(doneTask => {
        res.status(200).json(doneTask)
      })
    }else{
      res.status(400).json({error:'error'});
    }
  });
}

exports.delete = (req, res) => {
  Task.find(req.params.id).then(task => {
    if(task){
      Task.delete(task.id).then(deleted => {
        if (req.xhr || req.headers.accept.indexOf('json') > -1){
          res.status(200).json(task);
        }else{
          res.status(400).json({error:'error'});
        }
      });
    }else{
      res.status(404).json({error:'not found'});
    }
  });
}