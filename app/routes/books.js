import Ember from 'ember';

let books =[{
	title: 'Good book'
},
{
	title: 'Not so good'
}
];

export default Ember.Route.extend({
	model() {
		return books;
	}
	
});
