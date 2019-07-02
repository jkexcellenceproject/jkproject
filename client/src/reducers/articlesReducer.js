import _ from 'lodash';
import { FETCH_ARTICLES, FETCH_ARTICLE } from '../actions/types';

export default function(state = {}, action) {
	switch (action.type) {
		case FETCH_ARTICLES:
			return { ...state, ..._.mapKeys(action.payload, 'slug') };
		case FETCH_ARTICLE:
			return {...state, [action.payload.slug]: action.payload};
		default:
			return state;
	}
}
