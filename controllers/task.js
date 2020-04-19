const TaskRepository = require('../repositories/task');

const TaskController = {
  getAll: async (ctx) => {
    try {
      const tasks = await TaskRepository.getTasks();

      if (!tasks || !tasks.length) {
        return ctx.send(204, { error: 'No users found' });
      }

      return ctx.send(200, tasks);
    } catch (error) {
      return ctx.send(500, { error: error.message });
    }
  },
};

module.exports = TaskController;
