import DS from 'ember-data';

export default DS.Model.extend({
  query: DS.attr(),
  adjClose: DS.attr(),
  close: DS.attr(),
  date: DS.attr(),
  high: DS.attr(),
  low: DS.attr(),
  open: DS.attr(),
  symbol: DS.attr(),
  volume: DS.attr()
});
