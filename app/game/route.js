import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findById('game', 'me');
  },

  actions: {
    startGame: function() {
      this.get('currencyAccrued');
      this.get('currentPopulation');
      this.transitionTo('game');
    },
  },
});
