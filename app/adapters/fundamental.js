import DS from 'ember-data';
import ApplicationAdapter from 'stock-search/adapters/application';

export default ApplicationAdapter.extend({
  pathForType: function(){
    return 'yql';
  },

  find: function(store, type, id) {
    var q = 'select * from yahoo.finance.quotes where symbol in ("' + id + '")',
        env = 'http://datatables.org/alltables.env',
        format = 'json';

    return this.ajax(this.buildURL(type.typeKey, id), 'GET', { data: { q: q, env: env, format: format } });
  }
});
