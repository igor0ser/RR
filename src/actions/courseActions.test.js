import expect from 'expect';
import * as actions from './courseActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

describe('Course Sync Actions', () => {
	var course = {id: 'clean-code', title: 'Clean Code'};
	var courses = [course];

	describe('createCourseSuccess', () => 
		it('should create a CREATE_COURSE_SUCCESS action', () => {
			var action = actions.createCourseSuccess(course);
			expect(action).toEqual( { type: types.CREATE_COURSE_SUCCESS, course } );
		})
	);

	describe('loadCoursesSuccess', () => 
		it('should create a LOAD_COURSES_SUCCESS action', () => {
			var action = actions.loadCoursesSuccess(courses);
			expect(action).toEqual( { type: types.LOAD_COURSES_SUCCESS, courses } );
		})
	);

	describe('updateCourseSuccess', () => 
		it('should create a UPDATE_COURSE_SUCCESS action', () => {
			var action = actions.updateCourseSuccess(course);
			expect(action).toEqual( { type: types.UPDATE_COURSE_SUCCESS, course } );
		})
	);

});

describe('Course Async Actions', () => {
	var mockStore = configureMockStore([thunk]);

	it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) => {
		var expectedActions = [
			{type: types.BEGIN_AJAX_CALL},
			{type: types.LOAD_COURSES_SUCCESS, body: {courses: [{id: 'clean-code', title: 'Clean Code'}]}}
		];

		var store = mockStore({courses: []});
		store.dispatch(actions.loadCourses()).then(() => {
			var receivedActions = store.getActions();
			expect(receivedActions[0].type).toEqual(types.BEGIN_AJAX_CALL);
			expect(receivedActions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
			expect(Array.isArray(receivedActions[1].courses)).toBe(true);
			done();
		});
	});

	it('should create BEGIN_AJAX_CALL and UPDATE_COURSE_SUCCESS when updating courses', (done) => {
		var course = { title: 'Clean Code'};
		var expectedActions = [
			{type: types.BEGIN_AJAX_CALL},
			{type: types.UPDATE_COURSE_SUCCESS, body: {course} }
		];

		var store = mockStore({courses: []});
		store.dispatch(actions.saveCourse(course))
			.then(() => {
				var receivedActions = store.getActions();
				expect(receivedActions[0].type).toEqual(types.BEGIN_AJAX_CALL);
				expect(receivedActions[1].type).toEqual(types.UPDATE_COURSE_SUCCESS);
				expect(receivedActions[1].course.title).toEqual('Clean Code');
				done();
			});
	});
});

/*afterEach(() => nock.cleanAll());*/

// Here's an example call to nock
// nock('http://example.com/')
// 	.get('/courses')
// 	.reply(200, { body: {course: [{id: 1, name: 'Cory', title: 'Clean Code'}] } } );