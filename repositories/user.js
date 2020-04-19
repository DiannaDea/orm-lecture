const { User, sequelize } = require('../sequelize_example/models');
const TaskRepository = require('./task');

const UserRepository = {
  getUsers: () => User.findAll(),
  getUser: (conditions) => User.findOne({ where: conditions }),
  createUser: (userInfo) => User
    .build({
      ...userInfo,
      createdAt: new Date(),
      updatedAd: new Date(),
    })
    .save(),
  deleteUser: async (id) => sequelize.transaction(async () => {
    const user = await User.findOne({ where: { id } });

    const unassignedTasksRes = await TaskRepository.unassignTasks(user.id);

    if (unassignedTasksRes.every(Boolean)) {
      await user.destroy();
      return true;
    }

    return false;
  }),
  updateUser: async (id, userInfo) => {
    try {
      await User.update(userInfo, { where: { id } });
      return true;
    } catch (error) {
      return false;
    }
  },
};

module.exports = UserRepository;
