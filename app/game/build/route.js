import Ember from 'ember';
import config from 'iron-tower/config/environment';

export default Ember.Route.extend({
  actions: {
    buildStructure: function(type) {
      var request = Ember.$.ajax(`${config.apiHost}/api/purchaseStructure`, {
        data: JSON.stringify({type}), method: 'POST'
      });

      request.then((data) => {

      }, (err) => {
        var msg = err.responseJSON.message || 'Insufficient funds';

        this.get('flashMessages').warning(msg, {timeout: 1000000});
      });
    }
  }
});

// does the user have enough money to buy the structure ?
// if they do - they buy it, if they don't - send them an error
