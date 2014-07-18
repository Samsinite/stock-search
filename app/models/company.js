import DS from 'ember-data';

export default DS.Model.extend({
  quote: DS.attr(),
  fundamental: DS.attr()
});
