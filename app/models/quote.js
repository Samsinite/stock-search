import DS from 'ember-data';

export default DS.Model.extend({
  results: DS.belongsTo('results'),
  Adj_Close: DS.attr(),
  Close: DS.attr(),
  Date: DS.attr(),
  High: DS.attr(),
  Low: DS.attr(),
  Open: DS.attr(),
  Symbol: DS.attr(),
  Volume: DS.attr()
});
