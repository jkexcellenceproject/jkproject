import _ from 'lodash';
import { FETCH_TUTORS } from '../actions/types';

export default function(state = {}, action) {
	switch (action.type) {
		case FETCH_TUTORS:
			return { ...state, ..._.mapKeys(action.payload, 'slug') };
		default:
			return state;
	}
}
