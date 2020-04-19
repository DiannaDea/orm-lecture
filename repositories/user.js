const { User } = require('../sequelize_example/models');

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
  deleteUser: async (id) => {
    try {
      const user = await User.findOne({ where: { id } });
      await user.destroy();

      return true;
    } catch (error) {
      return false;
    }
  },
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
