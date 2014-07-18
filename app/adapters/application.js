import DS from 'ember-data';
import Ember from 'ember';

Ember.Inflector.inflector.uncountable('yql');

export default DS.RESTAdapter.extend({
  host: 'https://query.yahooapis.com',
  namespace: 'v1/public',
});


//select * from yahoo.finance.quote where symbol in ("YHOO","AAPL","GOOG","MSFT")
//select * from yahoo.finance.quotes where symbol in ("YHOO","AAPL","GOOG","MSFT")
//select * from yahoo.finance.historicaldata where symbol in ("YHOO","AAPL","GOOG","MSFT") and startDate = "2014-07-01" and endDate = "2014-07-15"