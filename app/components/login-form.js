import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		submit: function() {
			this.sendAction('action', this.get('credentials'));
			//console.log('Test here');
		}
	}
});