// Game Data Component

import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['game-data'],

  actions: {
    getGameData: function() {
      this.get('totalBalance');
      this.get('unemployedPeople');
      this.transitionTo('game');
    },
  },
});
