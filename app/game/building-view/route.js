import Ember from 'ember';

export default Ember.Route.extend({
  // Shows the building and updates dynamically with new construction

  model: function() {
    // create a new menu item instance to save to the server
    return this.store.findAll('structure');
  },
});
