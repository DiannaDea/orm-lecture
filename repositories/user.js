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
};

module.exports = UserRepository;
