'use strict';

module.exports = {
  up:async (queryInterface, Sequelize) => {
		const { INTEGER, DATE, STRING } = Sequelize;
		await queryInterface.createTable('post', {
		  id: { type: INTEGER, primaryKey: true, autoIncrement: true },
		  name: STRING(30),
		  age: INTEGER,
		  created_at: DATE,
		  updated_at: DATE,
		});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down:async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('post');
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
