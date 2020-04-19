const tasksInfo = [
  {
    title: 'Gather requirements',
    description: 'Requiremens for tasks definiton',
    user: {
      firstName: 'Matt',
      lastName: 'Brown',
    },
    status: 'Done',
  },
  {
    title: 'Create REST api',
    description: 'Include users, roles, tasks',
    user: {
      firstName: 'Alice',
      lastName: 'Chan',
    },
    status: 'In progress',
  },
  {
    title: 'Test users service',
    description: 'User endpoints: POST, PUT, GET, DELETE',
    user: {
      firstName: 'Igor',
      lastName: 'Black',
    },
    status: 'To do',
  },
];

function getUserByName(queryInterface, { firstName, lastName }) {
  return queryInterface.rawSelect('User', {
    where: {
      firstName,
      lastName,
    },
  }, ['id']);
}

module.exports = {
  up: async (queryInterface) => {
    const tasks = await Promise.all(tasksInfo.map(async (task) => {
      const userId = await getUserByName(queryInterface, task.user);

      return {
        title: task.title,
        description: task.description,
        userId,
        status: task.status,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    }));

    return queryInterface.bulkInsert('Task', tasks, {});
  },
  down: (queryInterface, Sequelize) => Promise.all(
    tasksInfo.map((task) => queryInterface.bulkDelete(
      'Task',
      {
        [Sequelize.Op.and]: [
          { title: task.title },
          { description: task.description },
          { status: task.status },
        ],
      },
    )),
  ),
};
