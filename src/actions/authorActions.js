import * as types from './actionTypes';
import authorApi from '../api/mockAuthorApi';
import {beginAjaxCall} from './ajaxStatusActions.js';

export const loadAuthorsSuccess = (authors) => ( {type: types.LOAD_AUTHORS_SUCCESS, authors: authors} );


export function loadAuthors(){
	return function(dispatch) {
		dispatch(beginAjaxCall());
		return authorApi.getAllAuthors()
			.then(authors => dispatch(loadAuthorsSuccess(authors)))
			.catch(error => { throw(error); } );
	};
}