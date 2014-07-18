import Ember from 'ember';

export default Ember.Component.extend({
  id: 'container',
  tagName : 'div',
  classNames: ['highcharts'],
  
  initializeChart: function(){
    var elementId = ['#', this.get('elementId')].join(''),
        chartConfigs =  this.get('controller').get('chartConfigs');
        
    console.log('this:', this, 'chartConfigs', chartConfigs);
        
    Ember.$(elementId).highcharts('StockChart', {
      rangeSelector: {
        enabled: false
      },
      title: {
        text: chartConfigs.get('title.text')
      },
      series: [{
        name: chartConfigs.series.name,
        data: this.get('chartData'),
        tooltip: {
          valueDecimals: 2
        }
      }]
    });
    
    
    console.log('Is this right?', $(elementId).find('.highcharts-button'));
    $(elementId).find('.highcharts-button').click(function(){
      var chart = $(elementId).highcharts();
    });
  }.on('didInsertElement'),
  updateChart: function(){
    this.initializeChart();
    
    var elementId = ['#', this.get('elementId')].join(''),
        chart = Ember.$(elementId).highcharts(),
        newData = this.get('chartData');
        
    chart.series[0].setData(newData, true);
  }.observes('chartData')
  
});
