import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    var q = 'select * from yahoo.finance.historicaldata where symbol in ("YHOO") and startDate = "2014-07-01" and endDate = "2014-07-15"',
        env = 'http://datatables.org/alltables.env',
        format = 'json';
    
    return this.store.find('quote', { q: q, env: env, format: format});
  },
  setupController: function(controller, model){
    console.log('\n\n\n\n', 'model:', model);
    controller.set('model', model);
  }
});

