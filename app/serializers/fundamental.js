import DS from 'ember-data';
import Ember from 'ember';
import ApplicationSerializer from 'stock-search/serializers/application';

export default ApplicationSerializer.extend({
  primaryKey: 'Symbol',

  keyForAttribute: function(attr) {
    debugger;
    var keyName = attr.capitalize().replace('_', '');

    if ( keyName.match(/^EPS/) ) {
      keyName.replace('EPS', 'eps');
    } else if ( keyName.match(/^PEG/) ) {
      keyName.replace('peg');
    } else if ( keyname.match(/^PE/) ) {
      keyName.replace('pe');
    } else if (keyname.match(/EBITDA/)){
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
  extractSingle: function(store, primaryType, payload, recordId){
    var modifiedPayload={};
    modifiedPayload[primaryType.typeKey]=payload.query.results.quote;
    
    return this._super(store,primaryType,modifiedPayload,recordId);}
});
