import DS from 'ember-data';
import Ember from 'ember';

Ember.Inflector.inflector.uncountable('fundamental');

export default DS.RESTAdapter.extend({
  host: 'https://query.yahooapis.com',
  namespace: 'v1/public/',
  buildURL: function(type, id) {
    var url = [],
        host = Ember.get(this, 'host'),
        prefix = this.urlPrefix();
        
    if (type) { url.push(this.pathForType(type)); }
    if (prefix) { url.unshift(prefix); }

    url = url.join('/');

    return url;
  }
});


//select * from yahoo.finance.quote where symbol in ("YHOO","AAPL","GOOG","MSFT")
//select * from yahoo.finance.quotes where symbol in ("YHOO","AAPL","GOOG","MSFT")
//select * from yahoo.finance.historicaldata where symbol in ("YHOO","AAPL","GOOG","MSFT") and startDate = "2014-07-01" and endDate = "2014-07-15"