import Ember from 'ember';

export default Ember.ArrayController.extend({
  contentDidChange: function() {
    console.info(this.get('content'));
  }.observes('content.isLoaded')
});
