import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    startGame: function() {
      this.get('currencyAccrued');
      this.get('currentPopulation');
      this.transitionTo('game');
    },
  },
});
