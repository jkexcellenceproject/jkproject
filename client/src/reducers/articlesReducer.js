import _ from 'lodash';
<<<<<<< HEAD
import { FETCH_ARTICLES, FETCH_ARTICLE } from '../actions/types';
=======
import { FETCH_ARTICLES } from '../actions/types';
>>>>>>> Modified EnglishArticleCard.js

export default function(state = {}, action) {
	switch (action.type) {
		case FETCH_ARTICLES:
<<<<<<< HEAD
			return { ...state, ..._.mapKeys(action.payload, 'slug') };
		case FETCH_ARTICLE:
			return {...state, [action.payload.slug]: action.payload};
=======
			return { ...state, ..._.mapKeys(action.payload, 'id') };
>>>>>>> Modified EnglishArticleCard.js
		default:
			return state;
	}
}
