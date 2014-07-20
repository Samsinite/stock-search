import Ember from 'ember';

export default Ember.Component.extend({
  id: 'container',
  tagName : 'div',
  classNames: ['highcharts'],
  
  initializeChart: function(){
    var elementId = ['#', this.get('elementId')].join(''),
        chartConfigs =  this.get('controller').get('chartConfigs');
        
    Ember.$(elementId).highcharts('StockChart', {
      rangeSelector: {
        enabled: false
      },
      
      title: {
        text: chartConfigs.get('title.text')
      },
      
      xAxis: {
        labels: {
          format: '{value:%b}'
        }  
      },
      
      series: []
    });
    
    this.get('parentView.controller.content').set('instance', $(elementId).highcharts());
  }.on('didInsertElement'),
  
  updateChart: function(){
    this.initializeChart();
    
    var elementId = ['#', this.get('elementId')].join(''),
        chart = Ember.$(elementId).highcharts(),
        newData = this.get('chartData');
        
    chart.series[0].setData(newData, true);
  }.observes('chartData')
  
});
