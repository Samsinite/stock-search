import DS from 'ember-data';

export default DS.Model.extend({
  data: DS.attr(),
  name: DS.attr(),
  company: DS.belongsTo('company')
});
