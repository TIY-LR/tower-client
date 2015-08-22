import Ember from 'ember';

export default Ember.Route.extend({
  // Shows the building and updates dynamically with new construction

  model: function() {
    // create a new menu item instance to save to the server
    return this.store.findAll('structure');
  },
// fix this code when we're ready to pull data from the server
  // model: function() {
  //   return [
  //     this.store.createRecord('apartment', {
  //       name: 'amusement'
  //     })
  //   ];
  // }
});
