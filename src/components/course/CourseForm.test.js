import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import CourseForm from './CourseForm';

function setup(saving){
	var props = {
		course: {},
		saving: saving,
		errors: {},
		onSave: () => {},
		onChange: () => {}
	};

	return shallow(<CourseForm {...props}></CourseForm>);
}

describe('CourseForm', () => {
	it('renders form and h1', () => {
		var wrapper = setup(false);
		expect(wrapper.find('form').length).toBe(1);
		expect(wrapper.find('h1').text()).toEqual('Manage Course');
	});

	it('save button is labeled "Save" when not saving', () => {
		var wrapper = setup(false);
		expect(wrapper.find('input').props().value).toBe('Save');
	});

	it('save button is labeled "Saving..." when saving', () => {
		var wrapper = setup(true);
		expect(wrapper.find('input').props().value).toBe('Saving...');
	});
});