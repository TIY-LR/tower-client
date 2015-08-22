import Ember from 'ember';

export default Ember.Route.extend({
  // Shows the building and updates dynamically with new construction
  model: function() {
    // create a new menu item instance to save to the server
    // return this.store.findAll('structure');

    // remove this code when we're ready to pull data from the server
    return [
    // not create record but get record
      this.store.createRecord('apartment', {
        name: 'apartment'
      }),
      this.store.createRecord('business', {
        name: 'laundry'
      }),
      this.store.createRecord('business', {
        name: 'restaurant'
      }),
      this.store.createRecord('business', {
        name: 'amusement'
      })
    ];
  }
});
