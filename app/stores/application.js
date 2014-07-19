export default DS.Store.extend({
	find: function(type, id) {
		if (type === "fundamental" && Ember.typeOf(id) === "string") {
			return this.findById(type, id);
		}
		else {
			return this._super.apply(this, arguments);
		}
	},

	// push: function(type, data, _partial) {
	// 	if (type === "fundamental") { debugger; }
	// 	this._super.apply(this, arguments);
	// }
});