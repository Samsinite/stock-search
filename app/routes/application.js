import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    var q = 'select * from yahoo.finance.historicaldata where symbol in ("YHOO","AAPL","GOOG","MSFT") and startDate = "2014-07-01" and endDate = "2014-07-15"',
        env = 'http://datatables.org/alltables.env',
        format = 'json';
    
    return this.store.find('yql', { q: q, env: env, format: format});
  },
  setupController: function(controller, model){
    console.log('\n\n\n\n', 'model:', model);
    controller.set('model', model);
  }
});

//https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20in%20(%22YHOO%22%2C%22AAPL%22%2C%22GOOG%22%2C%22MSFT%22)%20and%20startDate%20%3D%20%222014-07-01%22%20and%20endDate%20%3D%20%222014-07-15%22%0A%09%09&format=json&diagnostics=true&env=http%3A%2F%2Fdatatables.org%2Falltables.env&callback=

