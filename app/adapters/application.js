import DS from 'ember-data';
import config from 'iron-tower/config/environment';

export default DS.RESTAdapter.extend({
  namespace: 'api',
  // host: config.apiHost,
});
