const roleTitles = ['PM', 'Developer', 'QA'];

module.exports = {
  up: (queryInterface) => Promise.all(roleTitles
    .map((title) => queryInterface.bulkInsert('Roles', [{
      title,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {}))),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Roles', {
    title: { [Sequelize.Op.in]: roleTitles },
  }, {}),
};
