import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('game', function() {
    this.route('start');
    this.route('build');
    this.route('building-view');
  });
});

export default Router;
