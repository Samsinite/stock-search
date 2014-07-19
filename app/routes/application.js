import Ember from 'ember';
import CompanyModel from 'stock-search/models/company';

export default Ember.Route.extend({
  model: function(){
    return this.store.createRecord(CompanyModel);
  },
  
  setupController: function(controller, model){
    controller.set('model', model);
  }
});

