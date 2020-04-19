const { Task } = require('../sequelize_example/models');

const TaskRepository = {
  getTasks: (conditions) => Task.findAll({
    where: conditions,
  }),
  updateTask: async (id, taskInfo) => {
    try {
      await Task.update(taskInfo, { where: { id } });
      return true;
    } catch (error) {
      return false;
    }
  },
  unassignTasks: async (userId) => {
    const tasks = await TaskRepository.getTasks({ userId });

    return Promise.all(tasks.map((task) => {
      const taskInfo = task.get({ plain: true });
      return TaskRepository.updateTask(
        taskInfo.id,
        { userId: null },
      );
    }));
  },
};

module.exports = TaskRepository;
