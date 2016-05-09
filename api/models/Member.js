/**
 * Created by BMac on 5/7/16.
 */

module.exports = {

  schema: true,

  attributes: {
    firstName: {
      type: 'string',
      required: true
    },
    lastName: {
      type: 'string'
    },
    email: {
      type: 'string'
    },
    phone_number: {
      type: 'string'
    },

    pledge_class: {
      type: 'string'
    },

    big_bro: {
      type: 'string'
    },

    little_bro: {
      type: 'string'
    },

    users: {
      collection: 'user',
      via: 'facebookId'
    },

    hours: {
      collection: 'hours',
      via: 'owner'
    }

  }
};
