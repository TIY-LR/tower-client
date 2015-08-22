// Apartment Model
// Upkeep (cost to maintain the apartment floor)
// Initial Cost (how much does it cost to buy this floor?)
// Supported Population (how many people are allowed on this floor?)

import DS from 'ember-data';

export default DS.Model.extend({
  upkeep: DS.attr('number'),
  initialCost: DS.attr('number'),
  supportedPop: DS.attr('number'),
  floorNumber: DS.attr('number')
});
