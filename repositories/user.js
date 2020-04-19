const { User } = require('../sequelize_example/models');

const UserRepository = {
  getUsers: () => User.findAll(),
};

module.exports = UserRepository;
