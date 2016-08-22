import expect from 'expect';
import * as actions from './authorActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

describe('Author Sync Actions', () => {
	var authors = [
		{firstName: "Cory", lastName : "House", id : "cory-house"}
	]; 

	describe('loadAuthorsSuccess', () => 
		it('should create a LOAD_AUTHORS_SUCCESS action', () => {
			var action = actions.loadAuthorsSuccess(authors);
			expect(action).toEqual( { type: types.LOAD_AUTHORS_SUCCESS, authors } );
		})
	);
});


describe('Author Async Actions', () => {
	var mockStore = configureMockStore([thunk]);
	var authors = [
		{firstName: "Cory", lastName : "House", id : "cory-house"}
	]; 

	it('should create BEGIN_AJAX_CALL and LOAD_AUTHORS_SUCCESS when loading authors', (done) => {
		var expectedActions = [
			{type: types.BEGIN_AJAX_CALL},
			{type: types.LOAD_AUTHORS_SUCCESS, authors}
		];

		var store = mockStore({courses: []});

		store.dispatch(actions.loadAuthors())
			.then(() => {
				var receivedActions = store.getActions();
				expect(receivedActions[0].type).toEqual(types.BEGIN_AJAX_CALL);
				expect(receivedActions[1].type).toEqual(types.LOAD_AUTHORS_SUCCESS);
				expect(Array.isArray(receivedActions[1].authors)).toBe(true);
				done();
			});

	});

});