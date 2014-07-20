import DS from 'ember-data';

export default DS.Model.extend({
  history: DS.attr(),
  fundamental: DS.attr(),
  series: function(){
    var series = this.get('history.content').get('content'),
        formattedData = [];
    
    if (series)  {
      series.forEach(function(data){
        var quote = [];
        
        quote.push( moment( data.get('id').format('X') * 1000 ));
        quote.push( parseFloat( data.get('adjClose') ));
        
        formattedData.push(quote);
      });
      
      this.set('chartData', formattedData.reverse());
    }
    
    return formattedData;
  }.property('history'),
  
  name: function(){
    return name = this.get('fundamental').get('name');
  }.property('fundamental'),
  
  symbol: function(){
    return symbol = this.get('fundamental').get('symbol');
  }.property('fundamental')
});
