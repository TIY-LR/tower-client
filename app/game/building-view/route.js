import Ember from 'ember';

export default Ember.Route.extend({
// fix this code when we're ready to pull data from the server
  model: function() {
    return [
      this.store.createRecord('apartment', {
        name: 'amusement'
      })
    ];
  }
});
