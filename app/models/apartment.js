// Apartment Model
// Upkeep (cost to maintain the apartment floor)
// Initial Cost (how much does it cost to buy this floor?)
// Supported Population (how many people are allowed on this floor?)

import Structure from './structure';
import DS from 'ember-data';

<<<<<<< HEAD
export default Structure.extend({
=======
export default DS.Model.extend({
  upkeep: DS.attr('number'),
  initialCost: DS.attr('number'),
  supportedPop: DS.attr('number'),

  image: Ember.computed('name', function() {
    return `${this.get('name')}.gif`;
  })
>>>>>>> 708c93fdf402591b6c0dd69081024ca71fd2aa54
});
