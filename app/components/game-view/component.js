// Game View Component

import Ember from 'ember';

export default Ember.Component.extend({

  // take the data from the structure array and sort it to get just the structures ordered by floor #
  model: function() {
    this.store.findById('game', 'me');
  },
  // sort: function() {
  //   // pull in the residence and business data
  //   return Ember.ArrayProxy.extend(Ember.SortableMixin).create({
  //   sortProperties: [floor],
  //   sortAscending: false,
  //   content:
  // },
  // }
});
