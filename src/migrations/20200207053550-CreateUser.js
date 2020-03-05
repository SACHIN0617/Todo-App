'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      createdAt: {
        default: new Date(),
        type: Sequelize.DATE
      },
      updatedAt: {
        default: new Date(),
        type: Sequelize.DATE
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    // /*
    //   Add reverting commands here.
    //   Return a promise to correctly handle asynchronicity.

    return queryInterface.dropTable('users');
  }
};
