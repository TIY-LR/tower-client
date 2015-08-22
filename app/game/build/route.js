import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    buildStructure: function(type) {
      debugger;
    }
  }
});

// does the user have enough money to buy the structure ?
// if they do - they buy it, if they don't - send them an error
