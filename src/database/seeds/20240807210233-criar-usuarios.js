'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
     await queryInterface.bulkInsert('People', [{
       name: 'John Doe',
       isBetaMember: false
      }], {});
  },

  async down () {}
};
