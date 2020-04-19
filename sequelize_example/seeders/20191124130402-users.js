const usersInfo = [
  {
    firstName: 'Matt',
    lastName: 'Brown',
    role: 'PM',
  },
  {
    firstName: 'Alice',
    lastName: 'Chan',
    role: 'Developer',
  },
  {
    firstName: 'Igor',
    lastName: 'Black',
    role: 'QA',
  },
];

function getRoleByName(queryInterface, roleTitle) {
  return queryInterface.rawSelect('Role', {
    where: {
      title: roleTitle,
    },
  }, ['id']);
}

module.exports = {
  up: async (queryInterface) => {
    const users = await Promise.all(usersInfo.map(async (user) => {
      const roleId = await getRoleByName(queryInterface, user.role);

      return {
        firstName: user.firstName,
        lastName: user.lastName,
        roleId,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    }));

    return queryInterface.bulkInsert('User', users, {});
  },
  down: (queryInterface, Sequelize) => Promise.all(
    usersInfo.map((user) => queryInterface.bulkDelete(
      'User',
      {
        [Sequelize.Op.and]: [
          { firstName: user.firstName },
          { lastName: user.lastName },
        ],
      },
    )),
  ),
};
