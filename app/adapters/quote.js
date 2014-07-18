import DS from 'ember-data';
import Ember from 'ember';
import ApplicationAdapter from 'stock-search/adapters/application';

export default ApplicationAdapter.extend({
  buildURL: function(type, id) {
    var url = [],
        host = Ember.get(this, 'host'),
        prefix = this.urlPrefix();
        
    if (type) { url.push(this.pathForType(type)); }
    if (prefix) { url.unshift(prefix); }

    url = url.join('/');

    return url;
  },
  
  pathForType: function(){
    return 'yql';
  }
});