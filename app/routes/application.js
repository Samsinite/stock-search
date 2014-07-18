import Ember from 'ember';
import CompanyModel from 'stock-search/models/company';

export default Ember.Route.extend({
  model: function(){
    var companyModel = CompanyModel.extend({
      content: {
        quote: null,
        fundamental: null
      }
    });
    
    return this.store.createRecord(companyModel);
  },
  setupController: function(controller, model){
    controller.set('model', model);
  }
});

