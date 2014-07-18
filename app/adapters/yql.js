import DS from 'ember-data';
import Ember from 'ember';
import ApplicationAdapter from 'stock-search/adapters/application';

export default ApplicationAdapter.extend({
/*
  find: function(store, type, id) {
    return this.ajax(this.buildURL(type.typeKey, id), 'GET');
  },
  findQuery: function(store, type, query) {
    console.log('HEY', '\n\n\n', 'store', store, '\n\n', 'type', type, '\n\n', 'query', query, '\n\n\n');
    
    console.log('\n\n\n', 'ajax:', this.ajax, '\n\n\n');
    
    return this.ajax(this.buildURL(type.typeKey), 'GET', { data: query }).then(function(data){
      
    });
  },
*/
  
  buildURL: function(type, id) {
    var url = [],
        host = Ember.get(this, 'host'),
        prefix = this.urlPrefix();

    if (type) { url.push(this.pathForType(type)); }
    if (prefix) { url.unshift(prefix); }

    url = url.join('/');

    return url;
  },
  
/*
  ajax: function(url, type, hash) {
    
    console.log('here', hash);
    
    var adapter = this;

    return new Ember.RSVP.Promise(function(resolve, reject) {
      hash = adapter.ajaxOptions(url, type, hash);

      hash.success = function(json) {
        Ember.run(null, resolve, json);
      };

      hash.error = function(jqXHR, textStatus, errorThrown) {
        Ember.run(null, reject, adapter.ajaxError(jqXHR));
      };

      Ember.$.ajax(hash).then(function(data){
        console.log('jquery data', data);
      });
    }, "DS: RestAdapter#ajax " + type + " to " + url);
  },
  
  ajaxOptions: function(url, type, hash) {
    console.log('hash', hash);
  
    hash = hash || {};
    hash.url = url;
    hash.type = type;
    hash.dataType = 'json';
    hash.context = this;
    //hash.data = Ember.$.param({ q: hash.q, format: hash.format, env: hash.env });
    

    if (hash.data && type !== 'GET') {
      hash.contentType = 'application/json; charset=utf-8';
    }

    var headers = Ember.get(this, 'headers');
    if (headers !== undefined) {
      hash.beforeSend = function (xhr) {
        forEach.call(Ember.keys(headers), function(key) {
          xhr.setRequestHeader(key, headers[key]);
        });
      };
    }


    return hash;
  }
*/
});