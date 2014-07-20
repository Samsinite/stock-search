import DS from 'ember-data';
import Ember from 'ember';
import ApplicationSerializer from 'stock-search/serializers/application';

export default ApplicationSerializer.extend({
  primaryKey: 'Date',
  
  keyForAttribute: function(attr) {
    var keyName = attr.underscore().split('_').map(function(keyName) {
      return keyName.capitalize();
    }).join('_');
    
    return keyName;
  },
  
  extractMeta: function(store, type, payload) {
    var meta = {};
    
    meta.count = payload.query.count;
    meta.created = payload.query.created;
    meta.lang = payload.query.lang;
    
    store.metaForType(type, meta);
    
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
