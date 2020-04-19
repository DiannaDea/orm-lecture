const { Task } = require('../sequelize_example/models');

const TaskRepository = {
  getTasks: () => Task.findAll(),
};

module.exports = TaskRepository;
