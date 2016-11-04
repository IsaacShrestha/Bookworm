import Ember from 'ember';


export default Ember.Route.extend({
	model: function() {
		return this.get('store').findAll('book');
	},

	actions:{
		deleteBook: function(book){
			var _this = this;
			book.destroyRecord().then(function() {
				_this.transitionTo('books');
			});
		},

		

		
	}
	
});
