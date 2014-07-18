import Ember from 'ember';

export default Ember.Component.extend({
  tagName : 'x-chart',
  classNames: ['highcharts'],
  chartConfig: Ember.Object.extend({}),
  
  setConfig: function(type){
    var config = Ember.Object.extend({
      chart: {
        type: type
      },
      title: {
        text: this.get('title')
      },
      xAxis: {
        categories: this.get('dataset.categories') || []
      },
      yAxis: {
        title: {
          text: this.get('yAxisTitle')
        }
      },
      series: this.series()
    });
    
    if (this.get('highChartConfig')) {
      Ember.merge(config, this.get('highChartConfig'));
    }
    
    this.set('chartConfig', config);
  },
  
  series: function(){
    this.get('dataset.data')
  },
  
  prepareConfig: function() {
    var type;
    if (this.get('customHighChartConfig')) {
      this.set('chartConfig', this.get('customHighChartConfig'));
    } else {
      type = this.get('type') || 'line';
      this.setConfig(type);
    }
  },
  
  didInsertElement: function() {
    this.prepareConfig();
    this.renderHighchart();
  },
  renderHighchart: function() {
    this.$().highcharts('StockChart', this.get('chartConfig'));
  }
});
