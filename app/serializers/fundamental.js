import DS from 'ember-data';
import Ember from 'ember';
import ApplicationSerializer from 'stock-search/serializers/application';

export default ApplicationSerializer.extend({

  primaryKey: 'Symbol',
  
  keyForAttribute: function(attr) {
    var keyName = attr.camelize();

    if ( keyName.match(/^eps/) ) {
      keyName.replace('eps', 'EPS');
    } else if ( keyName.match(/^peg/) ) {
      keyName.replace('PEG');
    } else if ( keyName.match(/^peR/) ) {
      keyName.replace('PER');
    } else if ( keyName.match(/ebitda/) ) {
      keyName.replace('EBITDA');
    } else if ( keyName.match(/changePercentChange/) ) {
      keyName.replace('Change_PercentChange');
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
