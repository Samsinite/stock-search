import DS from 'ember-data'; 

export default DS.Model.extend({
  instance: DS.attr(),
  title: DS.attr(),
  timeRange: DS.attr(),
  companies: DS.hasMany('company'),
  
  epochDate: function(){
    return moment( new Date().getTime() );
  },
  
  startDate: function(){
    return this.get('epochDate').format('MM-DD-YYYY');
  }.property('epochDate')
  
  endDate: function(){
    var epochDate = this.get('epochDate'),
    timeRange = this.get('timeRange');
    
    return epochDate.subtract( timeRange.amount, timeRange.unit ).format('MM-DD-YYYY');
  }.property('epochDate', 'timeRange')
});
