import expect from 'expect';
import * as courseActions from './courseActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

describe('Course Actions', () => {
	describe('createCourseSuccess', () => {
		it('should create a CREATE_COURSE_SUCCESS action', () => {
			const course = {id: 'clean-code', title: 'Clean Code'};
			const expectedAction = { type: types.CREATE_COURSE_SUCCESS, course };
			const action = courseActions.createCourseSuccess(course);
			expect(action).toEqual(expectedAction);
		});
	});
	describe('', () => {
		
	});
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

