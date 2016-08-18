import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import {ManageCoursePage} from './ManageCoursePage';

describe('Manage Course Page', () => {
	it('sets error message when trying to save empty title', () => {
		var props = {
			course: {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''},
			authors: [],
			actions: {
				saveCourse: () => Promise.resolve()
			}
		};
		var wrapper = mount(<ManageCoursePage {...props}></ManageCoursePage>);
		var saveButton = wrapper.find('input').last();
		expect(saveButton.prop('type')).toBe('submit');
		saveButton.simulate('click');
		expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
	});
});