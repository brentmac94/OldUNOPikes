/**
 * Hours.js
 *
 * @description :: Customer contact information stored here
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  schema: true,

  attributes: {
    category: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string',
    },

    hours_donated: {
      type: 'float',
      required: true
    },

    money_donated: {
      type: 'float',
      required: true
    },

    date: {
      type: 'string'
    },

    owner: {
      model: 'member',
      via: 'owner'
    }

  }
};

