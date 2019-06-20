import _ from 'lodash';
import { FETCH_ARTICLES } from '../actions/types';

export default function(state = {}, action) {
	switch (action.type) {
		case FETCH_ARTICLES:
			return { ...state, ..._.mapKeys(action.payload, 'id') };
		default:
			return state;
	}
}
