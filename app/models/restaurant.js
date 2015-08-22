// Restaurant Model
// Upkeep (cost to maintain the apartment floor)
// Income (how much do people get paid on this floor?)
// Initial Cost (how much does it cost to buy this floor?)
// Supported Population (how many people are allowed on this floor?)

import DS from 'ember-data';

export default DS.Model.extend({
  upkeep: DS.attr('number'),
  income: DS.attr('number'),
  initialCost: DS.attr('number'),
  supportedPop: DS.attr('number'),
});
