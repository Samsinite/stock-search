import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  primaryKey: 'Date',
  extractMeta: function(store, type, payload) {
    var meta = {};
    
    meta.count = payload.query.count;
    meta.created = payload.query.created;
    meta.lang = payload.query.lang;
    
    store.metaForType(type, meta)
    
    delete payload.count;
    delete payload.create;
    delete payload.lang;
  },
  extractArray: function(store, type, payload, requestType) {
    var modifiedPayload = {},
    inflector = Ember.Inflector.inflector,
    data = payload.query.results.quote || [];
    
    modifiedPayload[inflector.pluralize(type.typeKey)] = data;
    return this._super(store, type, modifiedPayload, requestType);
  }
});