import DS from 'ember-data';
import ApplicationAdapter from 'stock-search/adapters/application';

export default ApplicationAdapter.extend({
  pathForType: function(){
    return 'yql'
  }
});
