import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('game', {path: '/'}, function() {
    this.route('start',  {path: '/start'});
    this.route('build',  {path: '/build'});
    this.route('building-view',  {path: '/tower-view'});
});
});
export default Router;
