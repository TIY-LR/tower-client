// Game Model
// Currency (the player's current $ total)
// Total Population (number of people living in the building)
// Floors (total number of floors)
// has many structures / polymorphism (?)

import DS from 'ember-data';

export default DS.Model.extend({
  currency: DS.attr('number'),
  totalPop: DS.attr('number'),
  floors: DS.attr('number'),
  // business ?
});
