// Apartment Model
// Upkeep (cost to maintain the apartment floor)
// Initial Cost (how much does it cost to buy this floor?)
// Supported Population (how many people are allowed on this floor?)

import Ember from 'ember';
import Structure from './structure';
import DS from 'ember-data';

export default Structure.extend({
  upkeep: DS.attr('number'),
  initialCost: DS.attr('number'),
  supportedPop: DS.attr('number'),

  image: Ember.computed('name', function() {
    return `${this.get('name')}.gif`;
  })
});
