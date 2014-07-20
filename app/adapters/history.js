import DS from 'ember-data';
import ApplicationAdapter from 'stock-search/adapters/application';

export default ApplicationAdapter.extend({
  pathForType: function(){
    return 'yql';
  },
  
  findQuery: function(store, type, query) {
    var data = {
          q: 'select * from yahoo.finance.historicaldata where symbol in ("' + query.symbol + '") and startDate = "' + query.startDate + '" and endDate ="' + query.endDate + '"',
          env : 'http://datatables.org/alltables.env',
          format: 'json'
        };
        
        
    return this.ajax(this.buildURL(type.typeKey), 'GET', { data: data });
  }
});
