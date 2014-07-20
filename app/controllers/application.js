import Ember from 'ember';

var chartConfigs = Ember.Object.extend({
  title : {
      text : 'Stock Search'
    },
  series : [
    {
      name : null,
      data : null,
      tooltip: {
        valueDecimals: 2
      }
    }
  ]
});

export default Ember.ObjectController.extend({
  chart: Ember.computed.alias('content.instance'),
  company: Ember.Object.extend(),
  chartData: null,
  stockSymbolSearch: null,
  startDate: moment(new Date()).subtract(1, 'month').format('YYYY-MM-DD'),
  endDate: moment(new Date()).format('YYYY-MM-DD'),
  
  /*
createSeries: function(){
    var history = this.get('content.history.content'),
        formattedData = [];
    
    if (history)  {
      history.forEach(function(data){
        var quote = [];
        
        quote.push(moment(data.get('id')).format('X'));
        quote.push(parseFloat(data.get('adjClose')));
        
        formattedData.push(quote);
      });
      
      this.set('chartData', formattedData.reverse());
    }
    
  }.observes('content.history.content'),
*/
  
  chartConfigs: chartConfigs.create(),
  
  createCompany: function(params){
    var controller = this,
      companies = controller.get('content.companies'),
      company = controller.store.createRecord('company', {
        history: controller.store.find('history', params), 
        fundamental: controller.store.find('fundamental', params.symbol)
      });
      
      return companies.addObject(company);
  },
  
  actions: {
    queryYQL: function(){
      var params = {},
          controller = this,
          company;
          
      params.startDate = this.get('startDate');
      params.endDate = this.get('endDate');
      params.symbol = this.get('stockSymbolSearch');
        
      this.createCompany(params);
    }
  }
});
