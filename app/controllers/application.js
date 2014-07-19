import Ember from 'ember';

var chartConfigs = Ember.Object.extend({
  title : {
      text : 'AAPL Stock Price'
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
  chartData: null,
  stockSymbolInput: null,
  startDate: moment(new Date()).subtract(1, 'year').format('YYYY-MM-DD'),
  endDate: moment(new Date()).format('YYYY-MM-DD'),
  
  formatChartData: function(){
    var quotes = this.get('content.quote.content'),
        formattedData = [];
    
    if (quotes)  {
      quotes.forEach(function(data){
        var quote = [];
        
        quote.push(data.get('id'));
        quote.push(parseFloat(data.get('adjClose')));
        
        formattedData.push(quote);
      });
      
      console.log('formattedData');
      this.set('chartData', formattedData.reverse());
    }
    
  }.observes('content.quote.content'),
  
  chartConfigs: chartConfigs.create(),
  
  queryCompanyHistoricalData: function(){
    var q = 'select * from yahoo.finance.historicaldata where symbol in ("' + this.get('stockSymbolInput') + '") and startDate = "' + this.get('startDate') + '" and endDate ="' + this.get('endDate') + '"',
        env = 'http://datatables.org/alltables.env',
        format = 'json',
        controller = this;
    
    this.store.find('quote', { q: q, env: env, format: format}).then(function(data){
      console.log('data:', data);
      return controller.set('content.quote', data);
    });
        
  },
  
  queryCompanyFundamentalData: function(){
    var controller = this;
        
    this.store.find('fundamental', this.get('stockSymbolInput')).then(function(data){
      console.log('fundamental data:', data);
      
      return controller.set('content.fundamental', data);
    });
  },
  
  actions: {
    queryYQL: function(){
      this.queryCompanyHistoricalData();
      this.queryCompanyFundamentalData();
    }
  }
});
