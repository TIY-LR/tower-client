// Build Options Component

import Ember from 'ember';

export default Ember.Component.extend({
  structures: [
    {
      name: 'residence',
      description: 'This can hold 3 people.',
      price: 1,
      type: 'apartment'
    },
    {
      name: 'laundromat',
      description: 'This requires one employee.',
      price: 1,
      type: 'laundromat'
    },
    {
      name: 'restaurant',
      description: 'This requires three employees.',
      price: 1,
      type: 'restaurant'
    },
    {
      name: 'amusement',
      description: 'This requires two employees.',
      price: 3,
      type: 'amusementPark'
    },
  ],

  actions: {
    build: function(type) {
      this.sendAction('build', type);
    }
  }
});
