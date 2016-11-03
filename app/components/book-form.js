import Ember from 'ember';

export default Ember.Component.extend({
	buttonLabel: function() {
		return (this.get('book').id) ? 'Update Book' : 'Add Book';
	}.property(),


	actions:{
		submit: function(){
			//console.log(this.book);
			this.sendAction('action', this.book);
		}
	}
});