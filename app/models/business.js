// Business Model
// Upkeep (cost to maintain the apartment floor)
// Income (how much do people get paid on this floor?)
// Initial Cost (how much does it cost to buy this floor?)
// Supported Population (how many people are allowed on this floor?)

import Structure from './structure';
import DS from 'ember-data';

export default Structure.extend({
  income: DS.attr('number'),
});
