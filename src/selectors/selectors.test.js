import expect from 'expect';
import {authorsFormattedForDropdown} from './selectors';

describe('authorsFormattedDropdown', () => {
	it('should return data formatted for use in a dropdown', () => {
		const authors = [
			{id: 'cory-house', firstName: 'Cory', lastName: 'House'},
			{id: 'scot-allen', firstName: 'Scott', lastName: 'Allen'}
		];

		const expectedData = [
			{value: 'cory-house', text: 'Cory House'},
			{value: 'scot-allen', text: 'Scott Allen'}
		];

		expect(authorsFormattedForDropdown(authors)).toEqual(expectedData);
	});
});