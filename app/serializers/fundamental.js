import DS from 'ember-data';
import Ember from 'ember';
import ApplicationSerializer from 'stock-search/serializers/application';

export default ApplicationSerializer.extend({

  primaryKey: 'Symbol',
  
  keyForAttribute: function(attr) {
    var keyName = attr;

    if ( keyName.match(/^eps/) ) {
      return keyName.replace('eps', 'EPS');
    } else if ( keyName.match(/^peg/) ) {
      return keyName.replace('peg', 'PEG');
    } else if ( keyName.match(/^peR/) ) {
      return keyName.replace('peR', 'PER');
    } else if ( keyName === 'ebitda') {
      return 'EBITDA';
    } else if ( keyName === 'changePercentChange') {
      return 'Change_PercentChange';
    }
    
    return keyName.capitalize();
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
  
});
