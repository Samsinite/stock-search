import DS from 'ember-data';
import Ember from 'ember';
import ApplicationSerializer from 'stock-search/serializers/application';

export default ApplicationSerializer.extend({

  primaryKey: 'Symbol',
  
  keyForAttribute: function(attr) {
    var keyName = attr.capitalize().replace('_', '');

    if ( keyName.match(/^EPS/) ) {
      keyName.replace('EPS', 'eps');
    } else if ( keyName.match(/^PEG/) ) {
      keyName.replace('peg');
    } else if ( keyName.match(/^PE/) ) {
      keyName.replace('pe');
    } else if (keyName.match(/EBITDA/)){
      keyName.replace('ebitda');
    }

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
  
  extractSingle: function(store, primaryType, payload, recordId) {
    var modifiedPayload = {};
    modifiedPayload[primaryType.typeKey] = payload.query.results.quote;

    return this._super(store, primaryType, modifiedPayload, recordId);
  }
  
  // extractArray: function(store, type, payload, requestType) {
  //   var modifiedPayload = {},
  //       inflector = Ember.Inflector.inflector,
  //       data = [payload.query.results.quote] || [];
        
  //   modifiedPayload[type.typeKey] = data;
  //   return this._super(store, type, modifiedPayload, requestType);
  // }
});
