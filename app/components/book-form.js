import Ember from 'ember';
import DS from 'ember-data';



export default Ember.Component.extend({
	
	buttonLabel: function() {
		return (this.get('book').id) ? 'Update Book' : 'Add Book';
	}.property(),


	actions:{
		submit: function(){
			if(this.validate()) {
				//console.log(this.book);
				this.sendAction('action', this.get('book'));
			}
			
		}
	},

	validate: function() {
		this.set('errors', DS.Errors.create());

		if(this.get('book.title') === '' || this.get('book.title') === undefined){
			this.get('errors').add('title', "can't be empty");
		}

		if(this.get('book.description') === '' || this.get('book.description') === undefined){
			this.get('errors').add('description', "can't be empty");
		}

		if(this.get('book.author') === '' || this.get('book.author') === undefined){
			this.get('errors').add('author', "can't be empty");
		}


		


		return this.get('errors.isEmpty');
	}

});