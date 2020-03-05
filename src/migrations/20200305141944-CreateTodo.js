'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('todos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      description: {
        type: Sequelize.STRING(100)
      },
      assignedTo: {
        type: Sequelize.BIGINT,
        references: {
          key: 'id',
          model: 'users'
        },
      },
      isDone: {
        default: false,
        type: Sequelize.BOOLEAN
      },
      isDeleted: {
        default: false,
        type: Sequelize.BOOLEAN
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

    return queryInterface.dropTable('todos');
  }
};
