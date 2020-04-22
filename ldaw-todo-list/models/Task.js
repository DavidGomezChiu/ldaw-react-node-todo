const knex = require('../database/connection');

exports.PENDING = 'pending';
exports.DONE = 'done';

exports.all = () => {
  return knex
    .select('*')
    .from('tasks').orderBy('created_at','desc');
}

exports.create = (task) => {
  return knex('tasks')
    .insert({ description: task.description, status: this.PENDING });
}

exports.find = (id) => {
  return knex
    .select('*')
    .from('tasks')
    .where('id', id)
    .first();
}

exports.update = task => {
  this.find(task.id).then(oldData => {
    return knex('tasks').where('id',task.id).update({
      description: task.description,
      status: task.status
    });
  });
}

exports.delete = (id) => {
  return knex('tasks').where('id',id).del();
}
