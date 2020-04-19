const roleTitles = ['PM', 'Developer', 'QA'];

module.exports = {
  up: (queryInterface) => Promise.all(roleTitles
    .map((title) => queryInterface.bulkInsert('Role', [{
      title,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {}))),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Role', {
    title: { [Sequelize.Op.in]: roleTitles },
  }, {}),
};
